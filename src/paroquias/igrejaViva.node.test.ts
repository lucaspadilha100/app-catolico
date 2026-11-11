import type { PGlite } from "@electric-sql/pglite";
import { beforeAll, describe, expect, it } from "vitest";
import { como as comoEm, criarBanco } from "@/conta/bancoDeTeste.node";

const ADMIN = "00000000-0000-0000-0000-0000000000ad";
const SECRETARIA = "00000000-0000-0000-0000-0000000000e1";
const FIEL = "00000000-0000-0000-0000-0000000000f1";
let db: PGlite;
let como: ReturnType<typeof comoEm>;
let paroquia: string;

beforeAll(async () => {
  db = await criarBanco();
  como = comoEm(db);
  await db.query("insert into auth.users (id) values ($1), ($2), ($3)", [ADMIN, SECRETARIA, FIEL]);
  await db.query("alter table auth.users add column if not exists email text");
  await db.query("update auth.users set email = 'secretaria@exemplo.org' where id = $1", [SECRETARIA]);
  await db.query("insert into public.administradores (usuario_id) values ($1)", [ADMIN]);
  paroquia = (await como("authenticated", ADMIN, "insert into public.paroquias (nome, cidade, uf) values ('Paróquia de São José', 'Natal', 'RN') returning id")).rows[0]!.id as string;
});

describe("sou da equipe desta paróquia", () => {
  let pedido: string;

  it("quem tem conta pede; só vê o seu; o admin vê a fila com o e-mail", async () => {
    await expect(como("anon", null, "insert into public.pedidos_de_gestao (paroquia_id, nome, funcao, contato) values ($1, 'Ana', 'Secretária', '84 3201-0000')", [paroquia])).rejects.toThrow();
    pedido = (await como("authenticated", SECRETARIA, "insert into public.pedidos_de_gestao (paroquia_id, nome, funcao, contato, situacao) values ($1, 'Ana', 'Secretária', '84 3201-0000', 'aprovado') returning id, situacao", [paroquia])).rows[0]!.id as string;
    expect((await como("authenticated", SECRETARIA, "select situacao from public.pedidos_de_gestao")).rows).toEqual([{ situacao: "pendente" }]);
    expect((await como("authenticated", FIEL, "select id from public.pedidos_de_gestao")).rows).toHaveLength(0);
    expect((await como("authenticated", FIEL, "select * from public.pedidos_de_gestao_abertos()")).rows).toHaveLength(0);
    expect((await como("authenticated", ADMIN, "select email, funcao from public.pedidos_de_gestao_abertos()")).rows).toEqual([{ email: "secretaria@exemplo.org", funcao: "Secretária" }]);
  });

  it("só o admin aprova; aprovado vira gestor e a paróquia fica verificada", async () => {
    await expect(como("authenticated", SECRETARIA, "select public.revisar_pedido_de_gestao($1, true)", [pedido])).rejects.toThrow();
    await como("authenticated", ADMIN, "select public.revisar_pedido_de_gestao($1, true)", [pedido]);
    expect((await como("authenticated", SECRETARIA, "select public.pode_editar($1) as ok", [paroquia])).rows[0]).toEqual({ ok: true });
    expect((await db.query("select verificada from public.paroquias where id = $1", [paroquia])).rows[0]).toEqual({ verificada: true });
  });

  it("o gestor não muda o próprio plano", async () => {
    await como("authenticated", SECRETARIA, "update public.paroquias set plano = 'paroquia' where id = $1", [paroquia]);
    expect((await db.query("select plano from public.paroquias where id = $1", [paroquia])).rows[0]).toEqual({ plano: "gratis" });
    await como("authenticated", ADMIN, "update public.paroquias set plano = 'pioneira' where id = $1", [paroquia]);
    expect((await db.query("select plano from public.paroquias where id = $1", [paroquia])).rows[0]).toEqual({ plano: "pioneira" });
  });
});

describe("mural", () => {
  it("a equipe publica aviso e evento; todos leem; ninguém mais publica", async () => {
    await como("authenticated", SECRETARIA, "insert into public.publicacoes_paroquia (paroquia_id, titulo, texto, link, notificada) values ($1, 'Missa do padroeiro', 'Às 19h', 'https://www.instagram.com/p/abc/', true)", [paroquia]);
    await como("authenticated", SECRETARIA, "insert into public.publicacoes_paroquia (paroquia_id, tipo, titulo, evento_em, local) values ($1, 'evento', 'Procissão de São José', '2027-03-19 18:00-03', 'Saída da matriz')", [paroquia]);
    await expect(como("authenticated", SECRETARIA, "insert into public.publicacoes_paroquia (paroquia_id, tipo, titulo) values ($1, 'evento', 'Sem data')", [paroquia])).rejects.toThrow();
    await expect(como("authenticated", SECRETARIA, "insert into public.publicacoes_paroquia (paroquia_id, titulo, link) values ($1, 'Link estranho', 'javascript:alert(1)')", [paroquia])).rejects.toThrow();
    await expect(como("authenticated", FIEL, "insert into public.publicacoes_paroquia (paroquia_id, titulo) values ($1, 'Invasão')", [paroquia])).rejects.toThrow();
    await expect(como("anon", null, "insert into public.publicacoes_paroquia (paroquia_id, titulo) values ($1, 'Invasão')", [paroquia])).rejects.toThrow();
    const r = await como("anon", null, "select titulo, notificada from public.publicacoes_paroquia order by titulo");
    expect(r.rows).toEqual([
      { titulo: "Missa do padroeiro", notificada: false },
      { titulo: "Procissão de São José", notificada: false },
    ]);
  });

  it("a equipe não marca como notificada; no máximo 10 por dia", async () => {
    await como("authenticated", SECRETARIA, "update public.publicacoes_paroquia set notificada = true");
    expect((await db.query("select count(*)::int as n from public.publicacoes_paroquia where notificada")).rows[0]).toEqual({ n: 0 });
    for (let i = 0; i < 8; i++) await como("authenticated", SECRETARIA, `insert into public.publicacoes_paroquia (paroquia_id, titulo) values ($1, 'Aviso ${i}')`, [paroquia]);
    await expect(como("authenticated", SECRETARIA, "insert into public.publicacoes_paroquia (paroquia_id, titulo) values ($1, 'Aviso demais')", [paroquia])).rejects.toThrow(/limite/);
  });
});
