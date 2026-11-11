import type { PGlite } from "@electric-sql/pglite";
import { beforeAll, describe, expect, it } from "vitest";
import { como as comoEm, criarBanco } from "@/conta/bancoDeTeste.node";

const ADMIN = "00000000-0000-0000-0000-0000000000ad";
const JOVEM = "00000000-0000-0000-0000-00000000000a";
const AJUDA = "00000000-0000-0000-0000-00000000000b";
const OUTRO = "00000000-0000-0000-0000-00000000000c";
let db: PGlite;
let como: ReturnType<typeof comoEm>;
let terco: string;
let roteiro: { id: string; codigo: string };

beforeAll(async () => {
  db = await criarBanco();
  como = comoEm(db);
  await db.query("insert into auth.users (id) values ($1), ($2), ($3), ($4)", [ADMIN, JOVEM, AJUDA, OUTRO]);
  await db.query("insert into public.administradores (usuario_id) values ($1)", [ADMIN]);
  terco = (await como("authenticated", JOVEM, "insert into public.tercos (nome, dia_semana, hora, cidade, uf) values ('Terço Jovem', 4, '19:30', 'Natal', 'RN') returning id")).rows[0]!.id as string;
  await como("authenticated", ADMIN, "update public.tercos set situacao = 'aprovado' where id = $1", [terco]);
  await db.query("insert into public.terco_ajudantes (terco_id, usuario_id) values ($1, $2)", [terco, AJUDA]);
});

describe("roteiros de oração", () => {
  it("quem tem conta cria; o código é do banco; só ligado a terço que conduz", async () => {
    await expect(como("anon", null, "insert into public.roteiros (titulo) values ('Roteiro anônimo')")).rejects.toThrow();
    await expect(como("authenticated", OUTRO, "insert into public.roteiros (titulo, terco_id) values ('Invasão', $1)", [terco])).rejects.toThrow();
    const r = await como("authenticated", JOVEM, "insert into public.roteiros (titulo, terco_id, data, codigo, ao_vivo) values ('Terço de quinta', $1, current_date + 1, 'meucodigo', true) returning id, codigo, ao_vivo", [terco]);
    roteiro = r.rows[0] as { id: string; codigo: string };
    expect(roteiro.codigo).not.toBe("meucodigo");
    expect(r.rows[0]!.ao_vivo).toBe(false);
  });

  it("quem tem o link lê, mesmo sem conta; a lista só para quem edita", async () => {
    expect((await como("anon", null, "select titulo, terco from public.roteiro_por_codigo($1)", [roteiro.codigo.toUpperCase()])).rows).toEqual([{ titulo: "Terço de quinta", terco: "Terço Jovem" }]);
    await expect(como("anon", null, "select * from public.roteiros")).rejects.toThrow();
    expect((await como("authenticated", OUTRO, "select id from public.roteiros")).rows).toHaveLength(0);
    expect((await como("authenticated", AJUDA, "select id from public.roteiros")).rows).toHaveLength(1);
    expect((await como("anon", null, "select titulo from public.roteiros_do_terco($1)", [terco])).rows).toEqual([{ titulo: "Terço de quinta" }]);
  });

  it("o ajudante do terço conduz; outro não; ninguém troca o dono nem o código", async () => {
    await como("authenticated", AJUDA, "update public.roteiros set passo = 3, conta = 2, ao_vivo = true where id = $1", [roteiro.id]);
    expect((await como("anon", null, "select passo, conta, ao_vivo from public.roteiro_estado($1)", [roteiro.codigo])).rows).toEqual([{ passo: 3, conta: 2, ao_vivo: true }]);
    const r = await como("authenticated", OUTRO, "update public.roteiros set titulo = 'Mudado' where id = $1", [roteiro.id]);
    expect(r.affectedRows ?? 0).toBe(0);
    await como("authenticated", JOVEM, "update public.roteiros set dono_id = $2, codigo = 'outro123' where id = $1", [roteiro.id, OUTRO]);
    expect((await db.query("select dono_id, codigo from public.roteiros where id = $1", [roteiro.id])).rows[0]).toEqual({ dono_id: JOVEM, codigo: roteiro.codigo });
  });

  it("só o dono apaga", async () => {
    await como("authenticated", AJUDA, "delete from public.roteiros where id = $1", [roteiro.id]);
    expect((await db.query("select count(*)::int as n from public.roteiros")).rows[0]).toEqual({ n: 1 });
    await como("authenticated", JOVEM, "delete from public.roteiros where id = $1", [roteiro.id]);
    expect((await db.query("select count(*)::int as n from public.roteiros")).rows[0]).toEqual({ n: 0 });
  });
});
