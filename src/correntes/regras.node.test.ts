import type { PGlite } from "@electric-sql/pglite";
import { beforeAll, describe, expect, it } from "vitest";
import { como as comoEm, criarBanco } from "@/conta/bancoDeTeste.node";

const DONO = "00000000-0000-0000-0000-0000000000d0";
const ANA = "00000000-0000-0000-0000-0000000000a1";
const BIA = "00000000-0000-0000-0000-0000000000b1";
let db: PGlite;
let como: ReturnType<typeof comoEm>;
let codigo: string;

beforeAll(async () => {
  db = await criarBanco();
  como = comoEm(db);
  await db.query("insert into auth.users (id) values ($1), ($2), ($3)", [DONO, ANA, BIA]);
});

describe("relógio de oração", () => {
  it("quem tem conta cria; quem tem o link vê e pega um horário, mesmo sem conta", async () => {
    await expect(como("anon", null, "insert into public.correntes (titulo, inicio, horas) values ('X', now(), 24)")).rejects.toThrow();
    codigo = (await como("authenticated", DONO, "insert into public.correntes (titulo, inicio, horas, intervalo) values ('Pela saúde de Dona Maria', date_trunc('hour', now()) + interval '1 hour', 24, 60) returning codigo")).rows[0]!.codigo as string;
    const segredo = (await como("anon", null, "select public.pegar_turno($1, date_trunc('hour', now()) + interval '2 hours', 'Ana') as s", [codigo])).rows[0]!.s as string;
    await como("authenticated", BIA, "select public.pegar_turno($1, date_trunc('hour', now()) + interval '3 hours', 'Bia')", [codigo]);
    const c = (await como("anon", null, "select public.corrente_por_codigo($1) as c", [codigo])).rows[0]!.c as { turnos: { nome: string }[]; titulo: string };
    expect(c.titulo).toBe("Pela saúde de Dona Maria");
    expect(c.turnos.map((t) => t.nome)).toEqual(["Ana", "Bia"]);
    await expect(como("anon", null, "select * from public.corrente_turnos")).rejects.toThrow();
    await expect(como("anon", null, "select public.pegar_turno($1, date_trunc('hour', now()) + interval '2 hours 10 minutes', 'Ana')", [codigo])).rejects.toThrow(/invalido/);
    await expect(como("anon", null, "select public.pegar_turno($1, date_trunc('hour', now()) + interval '30 hours', 'Ana')", [codigo])).rejects.toThrow(/invalido/);
    await como("anon", null, "select public.soltar_turno($1, date_trunc('hour', now()) + interval '3 hours', gen_random_uuid())", [codigo]);
    await como("anon", null, "select public.soltar_turno($1, date_trunc('hour', now()) + interval '2 hours', $2)", [codigo, segredo]);
    await como("authenticated", BIA, "select public.soltar_turno($1, date_trunc('hour', now()) + interval '3 hours', null)", [codigo]);
    expect((await db.query("select count(*)::int as n from public.corrente_turnos")).rows[0]).toEqual({ n: 0 });
  });

  it("corrente encerrada não aceita horário", async () => {
    await como("authenticated", ANA, "update public.correntes set ativa = false where codigo = $1", [codigo]);
    await como("anon", null, "select public.pegar_turno($1, date_trunc('hour', now()) + interval '4 hours', 'Ana')", [codigo]);
    await como("authenticated", DONO, "update public.correntes set ativa = false where codigo = $1", [codigo]);
    await expect(como("anon", null, "select public.pegar_turno($1, date_trunc('hour', now()) + interval '5 hours', 'Ana')", [codigo])).rejects.toThrow(/encerrada/);
  });
});

describe("novena em grupo", () => {
  it("o grupo começa a novena; cada um marca o próprio dia; quem é de fora não vê", async () => {
    const grupo = (await como("authenticated", DONO, "select id from public.grupos where false")).rows;
    expect(grupo).toHaveLength(0);
    const g = (await como("authenticated", ANA, "insert into public.grupos (nome) values ('Família Souza') returning id, codigo")).rows[0] as { id: string; codigo: string };
    await db.query("insert into public.grupo_membros (grupo_id, usuario_id, nome, papel) values ($1, $2, 'Ana', 'dono') on conflict do nothing", [g.id, ANA]);
    await expect(como("authenticated", BIA, "insert into public.grupo_novenas (grupo_id, novena, dias, inicio, criado_por) values ($1, 'aparecida', 9, current_date, $2)", [g.id, BIA])).rejects.toThrow();
    const n = (await como("authenticated", ANA, "insert into public.grupo_novenas (grupo_id, novena, dias, inicio, criado_por) values ($1, 'aparecida', 9, current_date, $2) returning id", [g.id, ANA])).rows[0]!.id as string;
    await como("authenticated", ANA, "insert into public.grupo_novena_dias (grupo_novena_id, dia) values ($1, 1)", [n]);
    await expect(como("authenticated", ANA, "insert into public.grupo_novena_dias (grupo_novena_id, dia) values ($1, 3)", [n])).rejects.toThrow(/dia/);
    await expect(como("authenticated", BIA, "insert into public.grupo_novena_dias (grupo_novena_id, dia) values ($1, 1)", [n])).rejects.toThrow();
    expect((await como("authenticated", BIA, "select * from public.grupo_novena_dias")).rows).toHaveLength(0);
    expect((await como("authenticated", ANA, "select dia from public.grupo_novena_dias")).rows).toEqual([{ dia: 1 }]);
  });
});
