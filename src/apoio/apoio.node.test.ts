import type { PGlite } from "@electric-sql/pglite";
import { beforeAll, describe, expect, it } from "vitest";
import { como as comoEm, criarBanco } from "@/conta/bancoDeTeste.node";

const ADMIN = "00000000-0000-0000-0000-0000000000ad";
const FIEL = "00000000-0000-0000-0000-0000000000f1";
const OUTRO = "00000000-0000-0000-0000-0000000000f2";
let db: PGlite;
let como: ReturnType<typeof comoEm>;

beforeAll(async () => {
  db = await criarBanco();
  como = comoEm(db);
  await db.query("insert into auth.users (id) values ($1), ($2), ($3)", [ADMIN, FIEL, OUTRO]);
  await db.query("alter table auth.users add column if not exists email text");
  await db.query("update auth.users set email = 'fiel@exemplo.org' where id = $1", [FIEL]);
  await db.query("insert into public.administradores (usuario_id) values ($1)", [ADMIN]);
});

describe("apoiadores", () => {
  let aviso: string;

  it("quem tem conta avisa que contribuiu; só vê o seu", async () => {
    await expect(como("anon", null, "insert into public.apoios_avisados (nome_no_pix) values ('Maria')")).rejects.toThrow();
    aviso = (await como("authenticated", FIEL, "insert into public.apoios_avisados (nome_no_pix, valor, situacao) values ('Maria da Silva', 20, 'confirmado') returning id")).rows[0]!.id as string;
    expect((await como("authenticated", FIEL, "select situacao from public.apoios_avisados")).rows).toEqual([{ situacao: "pendente" }]);
    expect((await como("authenticated", OUTRO, "select id from public.apoios_avisados")).rows).toHaveLength(0);
    await expect(como("authenticated", FIEL, "insert into public.apoios_avisados (nome_no_pix, pago_em) values ('Maria', current_date + 5)")).rejects.toThrow(/data/);
  });

  it("ninguém se faz apoiador sozinho", async () => {
    await expect(como("authenticated", FIEL, "insert into public.apoiadores (usuario_id, ate) values ($1, '2099-01-01')", [FIEL])).rejects.toThrow();
    await expect(como("authenticated", FIEL, "select public.revisar_apoio($1, true)", [aviso])).rejects.toThrow();
    expect((await como("authenticated", FIEL, "select * from public.apoios_para_conferir()")).rows).toHaveLength(0);
  });

  it("o admin confere e confirma; vira apoiador por um ano", async () => {
    expect((await como("authenticated", ADMIN, "select email, nome_no_pix from public.apoios_para_conferir()")).rows).toEqual([{ email: "fiel@exemplo.org", nome_no_pix: "Maria da Silva" }]);
    await como("authenticated", ADMIN, "select public.revisar_apoio($1, true)", [aviso]);
    const r = await como("authenticated", FIEL, "select ate - current_date as dias from public.apoiadores");
    expect(Number(r.rows[0]!.dias)).toBeGreaterThanOrEqual(365);
    expect((await como("authenticated", OUTRO, "select * from public.apoiadores")).rows).toHaveLength(0);
  });

  it("um novo apoio soma mais um ano", async () => {
    const outro = (await como("authenticated", FIEL, "insert into public.apoios_avisados (nome_no_pix) values ('Maria da Silva') returning id")).rows[0]!.id as string;
    await como("authenticated", ADMIN, "select public.revisar_apoio($1, true)", [outro]);
    const r = await como("authenticated", FIEL, "select ate - current_date as dias from public.apoiadores");
    expect(Number(r.rows[0]!.dias)).toBeGreaterThanOrEqual(730);
  });

  it("no máximo 3 avisos esperando", async () => {
    for (let i = 0; i < 3; i++) await como("authenticated", OUTRO, "insert into public.apoios_avisados (nome_no_pix) values ('João')");
    await expect(como("authenticated", OUTRO, "insert into public.apoios_avisados (nome_no_pix) values ('João')")).rejects.toThrow(/limite/);
  });
});
