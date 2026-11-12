import type { PGlite } from "@electric-sql/pglite";
import { beforeAll, describe, expect, it } from "vitest";
import { como as comoEm, criarBanco } from "@/conta/bancoDeTeste.node";

const ADMIN = "00000000-0000-0000-0000-0000000000ad";
const SECRETARIA = "00000000-0000-0000-0000-0000000000e1";
const FIEL = "00000000-0000-0000-0000-0000000000f1";
const OUTRO = "00000000-0000-0000-0000-0000000000f2";
let db: PGlite;
let como: ReturnType<typeof comoEm>;
let paroquia: string;
let pedido: string;

const amanha = "(now() at time zone 'America/Sao_Paulo')::date + 1";

beforeAll(async () => {
  db = await criarBanco();
  como = comoEm(db);
  await db.query("insert into auth.users (id) values ($1), ($2), ($3), ($4)", [ADMIN, SECRETARIA, FIEL, OUTRO]);
  await db.query("insert into public.administradores (usuario_id) values ($1)", [ADMIN]);
  paroquia = (await como("authenticated", ADMIN, "insert into public.paroquias (nome, cidade, uf) values ('Paróquia de São José', 'Natal', 'RN') returning id")).rows[0]!.id as string;
  await db.query("insert into public.paroquia_gestores (paroquia_id, usuario_id) values ($1, $2)", [paroquia, SECRETARIA]);
});

describe("intenções de missa", () => {
  it("só pede quando a paróquia recebe; a equipe liga", async () => {
    await expect(como("authenticated", FIEL, `insert into public.intencoes_de_missa (paroquia_id, tipo, nome, data) values ($1, 'falecido', 'João da Silva', ${amanha})`, [paroquia])).rejects.toThrow(/nao recebe/);
    await como("authenticated", SECRETARIA, "update public.paroquias set aceita_intencoes = true where id = $1", [paroquia]);
    await expect(como("anon", null, `insert into public.intencoes_de_missa (paroquia_id, tipo, nome, data) values ($1, 'falecido', 'João', ${amanha})`, [paroquia])).rejects.toThrow();
    await expect(como("authenticated", FIEL, "insert into public.intencoes_de_missa (paroquia_id, tipo, nome, data) values ($1, 'falecido', 'João', (now() at time zone 'America/Sao_Paulo')::date - 1)", [paroquia])).rejects.toThrow(/data/);
    pedido = (await como("authenticated", FIEL, `insert into public.intencoes_de_missa (paroquia_id, tipo, nome, data, hora, situacao) values ($1, 'falecido', 'João da Silva', ${amanha}, '19:00', 'confirmada') returning id, situacao`, [paroquia])).rows[0]!.id as string;
    expect((await db.query("select situacao from public.intencoes_de_missa where id = $1", [pedido])).rows[0]).toEqual({ situacao: "recebida" });
  });

  it("quem pede vê só as suas; a equipe vê todas e confirma", async () => {
    expect((await como("authenticated", OUTRO, "select id from public.intencoes_de_missa")).rows).toHaveLength(0);
    expect((await como("authenticated", SECRETARIA, "select nome from public.intencoes_de_missa")).rows).toEqual([{ nome: "João da Silva" }]);
    await como("authenticated", FIEL, "update public.intencoes_de_missa set situacao = 'confirmada', nome = 'Outro' where id = $1", [pedido]);
    expect((await db.query("select situacao, nome from public.intencoes_de_missa where id = $1", [pedido])).rows[0]).toEqual({ situacao: "recebida", nome: "João da Silva" });
    await como("authenticated", SECRETARIA, "update public.intencoes_de_missa set situacao = 'confirmada' where id = $1", [pedido]);
    expect((await db.query("select situacao from public.intencoes_de_missa where id = $1", [pedido])).rows[0]).toEqual({ situacao: "confirmada" });
  });

  it("quem pede cancela só enquanto não foi confirmada", async () => {
    await como("authenticated", FIEL, "update public.intencoes_de_missa set situacao = 'cancelada' where id = $1", [pedido]);
    expect((await db.query("select situacao from public.intencoes_de_missa where id = $1", [pedido])).rows[0]).toEqual({ situacao: "confirmada" });
  });
});
