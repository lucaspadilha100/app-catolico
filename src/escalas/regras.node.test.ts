import type { PGlite } from "@electric-sql/pglite";
import { beforeAll, describe, expect, it } from "vitest";
import { como as comoEm, criarBanco } from "@/conta/bancoDeTeste.node";

const COORD = "00000000-0000-0000-0000-0000000000c0";
const ANA = "00000000-0000-0000-0000-0000000000a1";
const BIA = "00000000-0000-0000-0000-0000000000b1";
const FORA = "00000000-0000-0000-0000-0000000000f1";
let db: PGlite;
let como: ReturnType<typeof comoEm>;
let ministerio: { id: string; codigo: string };
let itemDaAna: string;
let vago: string;

beforeAll(async () => {
  db = await criarBanco();
  como = comoEm(db);
  await db.query("insert into auth.users (id) values ($1), ($2), ($3), ($4)", [COORD, ANA, BIA, FORA]);
});

describe("escalas", () => {
  it("quem tem conta cria o ministério e já coordena; a equipe entra pelo convite", async () => {
    ministerio = (await como("authenticated", COORD, "insert into public.ministerios (nome, codigo) values ('Leitores', 'escolhido') returning id, codigo")).rows[0] as { id: string; codigo: string };
    expect(ministerio.codigo).not.toBe("escolhido");
    expect((await como("authenticated", COORD, "select coordena from public.ministerio_membros")).rows).toEqual([{ coordena: true }]);
    await expect(como("authenticated", ANA, "select public.entrar_no_ministerio('naoexiste', 'Ana')")).rejects.toThrow(/convite/);
    await como("authenticated", ANA, "select public.entrar_no_ministerio($1, 'Ana Clara')", [ministerio.codigo]);
    await como("authenticated", BIA, "select public.entrar_no_ministerio($1, 'Beatriz')", [ministerio.codigo]);
    expect((await como("authenticated", ANA, "select nome from public.ministerio_membros order by nome")).rows.map((r) => r.nome)).toEqual(["Ana Clara", "Beatriz", "Coordenação"]);
    expect((await como("authenticated", FORA, "select id from public.ministerios")).rows).toHaveLength(0);
  });

  it("só a coordenação monta a escala, e só com gente da equipe", async () => {
    await expect(como("authenticated", ANA, "insert into public.escala (ministerio_id, data, funcao) values ($1, '2026-11-22', '1ª leitura')", [ministerio.id])).rejects.toThrow();
    await expect(como("authenticated", COORD, "insert into public.escala (ministerio_id, data, funcao, membro_id) values ($1, '2026-11-22', '1ª leitura', $2)", [ministerio.id, FORA])).rejects.toThrow(/fora/);
    itemDaAna = (await como("authenticated", COORD, "insert into public.escala (ministerio_id, data, hora, celebracao, funcao, membro_id) values ($1, '2026-11-22', '19:00', 'Missa das 19h', '1ª leitura', $2) returning id", [ministerio.id, ANA])).rows[0]!.id as string;
    vago = (await como("authenticated", COORD, "insert into public.escala (ministerio_id, data, funcao) values ($1, '2026-11-22', 'Salmo') returning id", [ministerio.id])).rows[0]!.id as string;
    expect((await como("authenticated", FORA, "select id from public.escala")).rows).toHaveLength(0);
  });

  it("quem serve pede troca; outro da equipe assume; ninguém mexe no que não é seu", async () => {
    await como("authenticated", BIA, "update public.escala set membro_id = $2 where id = $1", [itemDaAna, BIA]);
    expect((await db.query("select membro_id from public.escala where id = $1", [itemDaAna])).rows[0]).toEqual({ membro_id: ANA });
    await como("authenticated", ANA, "update public.escala set troca_pedida = true, funcao = 'Outra' where id = $1", [itemDaAna]);
    expect((await db.query("select troca_pedida, funcao from public.escala where id = $1", [itemDaAna])).rows[0]).toEqual({ troca_pedida: true, funcao: "1ª leitura" });
    await como("authenticated", BIA, "update public.escala set membro_id = $2 where id = $1", [itemDaAna, BIA]);
    expect((await db.query("select membro_id, troca_pedida from public.escala where id = $1", [itemDaAna])).rows[0]).toEqual({ membro_id: BIA, troca_pedida: false });
    await como("authenticated", ANA, "update public.escala set membro_id = $2 where id = $1", [vago, ANA]);
    expect((await db.query("select membro_id from public.escala where id = $1", [vago])).rows[0]).toEqual({ membro_id: ANA });
  });

  it("membro não se faz coordenador; a coordenação pode dar a coordenação", async () => {
    await como("authenticated", ANA, "update public.ministerio_membros set coordena = true, nome = 'Ana C.' where usuario_id = $1", [ANA]);
    expect((await db.query("select coordena, nome from public.ministerio_membros where usuario_id = $1", [ANA])).rows[0]).toEqual({ coordena: false, nome: "Ana C." });
    await como("authenticated", COORD, "update public.ministerio_membros set coordena = true where usuario_id = $1", [ANA]);
    expect((await como("authenticated", ANA, "select public.coordena_ministerio($1) as ok", [ministerio.id])).rows[0]).toEqual({ ok: true });
  });
});
