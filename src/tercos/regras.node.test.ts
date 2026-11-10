import type { PGlite } from "@electric-sql/pglite";
import { beforeAll, describe, expect, it } from "vitest";
import { como as comoEm, criarBanco } from "@/conta/bancoDeTeste.node";

const ADMIN = "00000000-0000-0000-0000-0000000000ad";
const JOVEM = "00000000-0000-0000-0000-00000000000a";
const OUTRO = "00000000-0000-0000-0000-00000000000b";
let db: PGlite;
let como: ReturnType<typeof comoEm>;
let terco: string;

const novo = (nome: string, extra = "") =>
  `insert into public.tercos (nome, dia_semana, hora, cidade, uf, lat, lng${extra ? ", situacao" : ""}) values ('${nome}', 4, '19:30', 'Natal', 'RN', -5.80, -35.21${extra ? `, '${extra}'` : ""}) returning id`;

beforeAll(async () => {
  db = await criarBanco();
  como = comoEm(db);
  await db.query("insert into auth.users (id) values ($1), ($2), ($3)", [ADMIN, JOVEM, OUTRO]);
  await db.query("insert into public.administradores (usuario_id) values ($1)", [ADMIN]);
  terco = (await como("authenticated", JOVEM, novo("Terço da Juventude Sagrada Família"))).rows[0]!.id as string;
});

describe("terços", () => {
  it("quem tem conta cadastra; nasce pendente e só o responsável e o admin veem", async () => {
    await expect(como("anon", null, novo("Terço de fora"))).rejects.toThrow();
    await expect(como("authenticated", OUTRO, novo("Terço que se aprova sozinho", "aprovado"))).rejects.toThrow();
    expect((await como("anon", null, "select id from public.tercos")).rows).toHaveLength(0);
    expect((await como("authenticated", OUTRO, "select id from public.tercos")).rows).toHaveLength(0);
    expect((await como("authenticated", JOVEM, "select situacao from public.tercos")).rows).toEqual([{ situacao: "pendente" }]);
    expect((await como("authenticated", ADMIN, "select id from public.tercos")).rows).toHaveLength(1);
  });

  it("o responsável edita mas não se aprova; o admin aprova", async () => {
    await como("authenticated", JOVEM, "update public.tercos set nome = 'Terço Jovem Sagrada Família', situacao = 'aprovado' where id = $1", [terco]);
    expect((await db.query("select nome, situacao from public.tercos where id = $1", [terco])).rows[0]).toEqual({ nome: "Terço Jovem Sagrada Família", situacao: "pendente" });
    const r = await como("authenticated", OUTRO, "update public.tercos set nome = 'Invadido' where id = $1", [terco]);
    expect(r.affectedRows ?? 0).toBe(0);
    await como("authenticated", ADMIN, "update public.tercos set situacao = 'aprovado' where id = $1", [terco]);
    expect((await como("anon", null, "select nome from public.tercos")).rows).toEqual([{ nome: "Terço Jovem Sagrada Família" }]);
  });

  it("no máximo 5 por pessoa", async () => {
    for (let i = 0; i < 5; i++) await como("authenticated", OUTRO, novo(`Terço ${i}`));
    await expect(como("authenticated", OUTRO, novo("Terço 5"))).rejects.toThrow(/limite/);
  });

  it("agenda: aparece na quinta perto de quem procura, e por cidade", async () => {
    const r = await como("anon", null, "select nome, quando::text, total from public.agenda_de_tercos(-5.80, -35.21, '2026-11-19 08:00', 16)");
    expect(r.rows).toEqual([{ nome: "Terço Jovem Sagrada Família", quando: "2026-11-19 19:30:00", total: 1 }]);
    const cidade = await como("anon", null, "select nome from public.agenda_de_tercos(null, null, '2026-11-16 00:00', 168, 10, 30, 'natal', 'RN')");
    expect(cidade.rows).toHaveLength(1);
    const antes = await como("anon", null, "select nome from public.agenda_de_tercos(-5.80, -35.21, '2026-11-19 08:00', 16, 10, 30, '', '', 0, '2026-11-19 19:00')");
    expect(antes.rows).toHaveLength(0);
  });

  it("encontro: o responsável monta e conduz; todos acompanham; ninguém mais mexe", async () => {
    const e = await como(
      "authenticated",
      JOVEM,
      `insert into public.terco_encontros (terco_id, data, misterios, dezenas, intencoes) values ($1, '2026-11-19', 'luminosos', '[{"conduz":"Ana","musica":"Maria de Nazaré","link":""}]', 'Pelos jovens') returning id`,
      [terco],
    );
    const id = e.rows[0]!.id as string;
    await como("authenticated", JOVEM, "update public.terco_encontros set passo = 7, conta = 3, ao_vivo = true where id = $1", [id]);
    expect((await como("anon", null, "select passo, conta, ao_vivo from public.terco_encontros where id = $1", [id])).rows[0]).toEqual({ passo: 7, conta: 3, ao_vivo: true });
    const r = await como("authenticated", OUTRO, "update public.terco_encontros set passo = 0 where id = $1", [id]);
    expect(r.affectedRows ?? 0).toBe(0);
    await expect(como("authenticated", OUTRO, "insert into public.terco_encontros (terco_id, data, misterios) values ($1, '2026-11-26', 'dolorosos')", [terco])).rejects.toThrow();
    await expect(como("anon", null, "update public.terco_encontros set passo = 0")).rejects.toThrow();
  });

  it("o encontro de um terço pendente não aparece para os outros", async () => {
    const t = (await como("authenticated", OUTRO, "select id from public.tercos where nome = 'Terço 0'")).rows[0]!.id as string;
    await como("authenticated", OUTRO, "insert into public.terco_encontros (terco_id, data, misterios) values ($1, '2026-11-19', 'gozosos')", [t]);
    expect((await como("anon", null, "select id from public.terco_encontros where terco_id = $1", [t])).rows).toHaveLength(0);
  });
});
