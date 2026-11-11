import type { PGlite } from "@electric-sql/pglite";
import { beforeAll, describe, expect, it } from "vitest";
import { como as comoEm, criarBanco } from "@/conta/bancoDeTeste.node";

const ADMIN = "00000000-0000-0000-0000-0000000000ad";
const ANA = "00000000-0000-0000-0000-0000000000a1";
const BIA = "00000000-0000-0000-0000-0000000000b1";
const CAIO = "00000000-0000-0000-0000-0000000000c1";
const DANI = "00000000-0000-0000-0000-0000000000d1";
let db: PGlite;
let como: ReturnType<typeof comoEm>;

beforeAll(async () => {
  db = await criarBanco();
  como = comoEm(db);
  await db.query("insert into auth.users (id) values ($1), ($2), ($3), ($4), ($5)", [ADMIN, ANA, BIA, CAIO, DANI]);
  await db.query("insert into public.administradores (usuario_id) values ($1)", [ADMIN]);
});

describe("intenções", () => {
  let pedido: string;

  it("quem tem conta pede pelo primeiro nome; todos veem; sem texto livre", async () => {
    await expect(como("anon", null, "insert into public.intencoes (tipo, nome) values ('saude', 'Maria')")).rejects.toThrow();
    await expect(como("authenticated", ANA, "insert into public.intencoes (tipo, nome) values ('saude', 'Maria da Silva')")).rejects.toThrow();
    await expect(como("authenticated", ANA, "insert into public.intencoes (tipo, nome) values ('qualquer', 'Maria')")).rejects.toThrow();
    pedido = (await como("authenticated", ANA, "insert into public.intencoes (tipo, nome, rezaram) values ('saude', 'Conceição', 999) returning id, rezaram")).rows[0]!.id as string;
    const r = await como("anon", null, "select nome, rezaram from public.intencoes");
    expect(r.rows).toEqual([{ nome: "Conceição", rezaram: 0 }]);
  });

  it("no máximo 3 pedidos abertos por pessoa", async () => {
    await como("authenticated", ANA, "insert into public.intencoes (tipo, nome) values ('trabalho', 'José')");
    await como("authenticated", ANA, "insert into public.intencoes (tipo, nome) values ('gratidao', 'Ana')");
    await expect(como("authenticated", ANA, "insert into public.intencoes (tipo, nome) values ('paz', 'Rita')")).rejects.toThrow(/limite/);
  });

  it("rezei por você: conta uma vez por pessoa com conta; ninguém mexe no contador direto", async () => {
    await como("authenticated", BIA, "select public.rezei_por($1)", [pedido]);
    await como("authenticated", BIA, "select public.rezei_por($1)", [pedido]);
    await como("anon", null, "select public.rezei_por($1)", [pedido]);
    expect((await db.query("select rezaram from public.intencoes where id = $1", [pedido])).rows[0]).toEqual({ rezaram: 2 });
    const r = await como("authenticated", ANA, "update public.intencoes set rezaram = 1000 where id = $1", [pedido]);
    expect(r.affectedRows ?? 0).toBe(0);
  });

  it("só a função de avisos marca o que já foi avisado", async () => {
    await como("authenticated", ADMIN, "update public.intencoes set avisado = 50 where id = $1", [pedido]);
    expect((await db.query("select avisado from public.intencoes where id = $1", [pedido])).rows[0]).toEqual({ avisado: 0 });
    await db.query("alter role service_role bypassrls");
    await db.query("grant select, update on public.intencoes to service_role");
    await db.query("set role service_role");
    await db.query("update public.intencoes set avisado = rezaram, avisado_em = now() where id = $1", [pedido]);
    await db.query("reset role");
    expect((await db.query("select avisado from public.intencoes where id = $1", [pedido])).rows[0]).toEqual({ avisado: 2 });
    await como("authenticated", CAIO, "select public.rezei_por($1)", [pedido]);
    expect((await db.query("select rezaram, avisado from public.intencoes where id = $1", [pedido])).rows[0]).toEqual({ rezaram: 3, avisado: 2 });
  });

  it("três denúncias de pessoas com conta escondem; anônimo registra mas não esconde", async () => {
    for (let i = 0; i < 5; i++) await como("anon", null, "select public.denunciar_intencao($1, 'ofensivo')", [pedido]);
    expect((await como("anon", null, "select id from public.intencoes where id = $1", [pedido])).rows).toHaveLength(1);
    await como("authenticated", BIA, "select public.denunciar_intencao($1, 'ofensivo')", [pedido]);
    await como("authenticated", BIA, "select public.denunciar_intencao($1, 'ofensivo')", [pedido]);
    await como("authenticated", CAIO, "select public.denunciar_intencao($1, 'falso')", [pedido]);
    expect((await como("anon", null, "select id from public.intencoes where id = $1", [pedido])).rows).toHaveLength(1);
    await como("authenticated", DANI, "select public.denunciar_intencao($1, 'pessoal')", [pedido]);
    expect((await como("anon", null, "select id from public.intencoes where id = $1", [pedido])).rows).toHaveLength(0);
    expect((await como("authenticated", ANA, "select oculta from public.intencoes where id = $1", [pedido])).rows).toEqual([{ oculta: true }]);
    await expect(como("anon", null, "select public.rezei_por($1)", [pedido])).rejects.toThrow();
    expect((await como("authenticated", BIA, "select id from public.denuncias")).rows).toHaveLength(0);
    expect((await como("authenticated", ADMIN, "select id from public.denuncias")).rows.length).toBe(8);
    await como("authenticated", ADMIN, "update public.intencoes set oculta = false where id = $1", [pedido]);
    expect((await como("anon", null, "select id from public.intencoes where id = $1", [pedido])).rows).toHaveLength(1);
  });
});

describe("grupos", () => {
  let grupo: string;
  let codigo: string;

  it("quem cria vira dono; o grupo só aparece para os membros", async () => {
    const r = await como("authenticated", ANA, "insert into public.grupos (nome, tipo) values ('Família Souza', 'familia') returning id, codigo");
    grupo = r.rows[0]!.id as string;
    codigo = r.rows[0]!.codigo as string;
    expect((await como("authenticated", ANA, "select papel from public.grupo_membros where grupo_id = $1", [grupo])).rows).toEqual([{ papel: "dono" }]);
    expect((await como("authenticated", BIA, "select id from public.grupos")).rows).toHaveLength(0);
    await expect(como("anon", null, "select count(*) from public.grupo_membros")).rejects.toThrow();
  });

  it("entra pelo convite; intenção do grupo só os membros veem", async () => {
    await expect(como("authenticated", BIA, "select public.entrar_no_grupo('errado', 'Bia')")).rejects.toThrow();
    expect((await como("authenticated", BIA, "select nome, membros from public.ver_convite($1)", [codigo])).rows).toEqual([{ nome: "Família Souza", membros: 1 }]);
    await como("authenticated", BIA, "select public.entrar_no_grupo($1, 'Bia')", [codigo.toUpperCase()]);
    expect((await como("authenticated", BIA, "select nome from public.grupos")).rows).toEqual([{ nome: "Família Souza" }]);
    await como("authenticated", BIA, "insert into public.intencoes (tipo, nome, grupo_id) values ('saude', 'Vovó', $1)", [grupo]);
    expect((await como("anon", null, "select id from public.intencoes where grupo_id = $1", [grupo])).rows).toHaveLength(0);
    expect((await como("authenticated", CAIO, "select id from public.intencoes where grupo_id = $1", [grupo])).rows).toHaveLength(0);
    expect((await como("authenticated", ANA, "select nome from public.intencoes where grupo_id = $1", [grupo])).rows).toEqual([{ nome: "Vovó" }]);
    await expect(como("authenticated", CAIO, "insert into public.intencoes (tipo, nome, grupo_id) values ('saude', 'Zé', $1)", [grupo])).rejects.toThrow();
  });

  it("ninguém se promove a dono nem muda o dono; o dono não sai, apaga", async () => {
    await como("authenticated", BIA, "update public.grupo_membros set papel = 'dono', nome = 'Bianca' where usuario_id = $1", [BIA]);
    expect((await db.query("select papel, nome from public.grupo_membros where usuario_id = $1", [BIA])).rows).toEqual([{ papel: "membro", nome: "Bianca" }]);
    await como("authenticated", BIA, "update public.grupos set nome = 'Tomado' where id = $1", [grupo]);
    expect((await db.query("select nome from public.grupos where id = $1", [grupo])).rows[0]).toEqual({ nome: "Família Souza" });
    await expect(como("authenticated", ANA, "delete from public.grupo_membros where usuario_id = $1", [ANA])).rejects.toThrow(/dono/);
  });

  it("terço ao vivo do grupo: membro conduz, membro acompanha, quem é de fora não vê", async () => {
    await como("authenticated", BIA, "insert into public.grupo_terco (grupo_id, misterios, ao_vivo) values ($1, 'gloriosos', true)", [grupo]);
    await como("authenticated", BIA, "update public.grupo_terco set passo = 5 where grupo_id = $1", [grupo]);
    expect((await como("authenticated", ANA, "select passo, ao_vivo from public.grupo_terco")).rows).toEqual([{ passo: 5, ao_vivo: true }]);
    expect((await como("authenticated", CAIO, "select passo from public.grupo_terco")).rows).toHaveLength(0);
    await expect(como("authenticated", CAIO, "insert into public.grupo_terco (grupo_id, misterios) values ($1, 'gozosos')", [grupo])).rejects.toThrow();
  });

  it("o dono tira um membro; apagar a conta do dono apaga o grupo", async () => {
    await como("authenticated", ANA, "delete from public.grupo_membros where usuario_id = $1 and grupo_id = $2", [BIA, grupo]);
    expect((await como("authenticated", BIA, "select id from public.grupos")).rows).toHaveLength(0);
    await como("authenticated", ANA, "select public.apagar_minha_conta()");
    expect((await db.query("select count(*)::int as n from public.grupos where id = $1", [grupo])).rows[0]).toEqual({ n: 0 });
  });
});

describe("campanhas", () => {
  it("só o admin cria; todos somam enquanto está aberta, até 10 por vez", async () => {
    await expect(como("authenticated", BIA, "insert into public.campanhas (titulo, oracao, meta, inicio, fim) values ('Um milhão de terços', 'terco', 1000000, current_date, current_date + 30)")).rejects.toThrow();
    const id = (await como("authenticated", ADMIN, "insert into public.campanhas (titulo, oracao, meta, inicio, fim) values ('Um milhão de terços', 'terco', 1000000, current_date - 1, current_date + 30) returning id")).rows[0]!.id as string;
    await como("anon", null, "select public.somar_na_campanha($1)", [id]);
    await como("authenticated", BIA, "select public.somar_na_campanha($1, 500)", [id]);
    expect((await como("anon", null, "select contagem from public.campanhas")).rows).toEqual([{ contagem: 11 }]);
    const r = await como("authenticated", BIA, "update public.campanhas set contagem = 999999 where id = $1", [id]);
    expect(r.affectedRows ?? 0).toBe(0);
  });
});
