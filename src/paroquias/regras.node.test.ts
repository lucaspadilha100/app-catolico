import type { PGlite } from "@electric-sql/pglite";
import { beforeAll, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { como as comoEm, criarBanco } from "@/conta/bancoDeTeste.node";

const DA_PLANILHA = [...readFileSync(join(__dirname, "../../supabase/migrations/20261113000100_dados_paroquias_natal.sql"), "utf8").matchAll(/^  \('([0-9a-f-]{36})', '(?:[^']|'')*', '[a-z]+'/gm)].map((m) => m[1]!);

const ADMIN = "00000000-0000-0000-0000-0000000000ad";
const GESTOR_ID = "00000000-0000-0000-0000-0000000000ee";
const FIEL = "00000000-0000-0000-0000-0000000000f1";
let db: PGlite;
let como: ReturnType<typeof comoEm>;
let matriz: string;
let capela: string;

beforeAll(async () => {
  db = await criarBanco();
  como = comoEm(db);
  await db.query("insert into auth.users (id) values ($1), ($2), ($3)", [ADMIN, GESTOR_ID, FIEL]);
  await db.query("alter table auth.users add column if not exists email text");
  await db.query("update auth.users set email = 'gestor@exemplo.org' where id = $1", [GESTOR_ID]);
  await db.query("insert into public.administradores (usuario_id) values ($1)", [ADMIN]);
  const r = await como("authenticated", ADMIN, `insert into public.paroquias (nome, padroeiro, bairro, cidade, uf, lat, lng)
    values ('Catedral Metropolitana', 'Nossa Senhora da Apresentação', 'Cidade Alta', 'Natal', 'RN', -5.7945, -35.2110),
           ('Capela de São Pedro', 'São Pedro', 'Ponta Negra', 'Natal', 'RN', -5.8800, -35.1700),
           ('Matriz de Mossoró', 'Santa Luzia', 'Centro', 'Mossoró', 'RN', -5.1878, -37.3440)
    returning id`);
  matriz = r.rows[0]!.id as string;
  capela = r.rows[1]!.id as string;
  await como("authenticated", ADMIN, `insert into public.horarios (paroquia_id, tipo, dia_semana, hora) values
    ($1, 'missa', 0, '08:00'), ($1, 'missa', 0, '19:00'), ($1, 'missa', 3, '18:30'), ($2, 'missa', 0, '09:00'), ($1, 'confissao', 3, '15:00')`, [matriz, capela]);
});



describe("paróquias", () => {
  it("qualquer pessoa vê as ativas e os horários; ninguém de fora cadastra", async () => {
    expect((await como("anon", null, "select nome from public.paroquias")).rows).toHaveLength(3);
    expect((await como("anon", null, "select id from public.horarios")).rows).toHaveLength(5);
    await expect(como("anon", null, "insert into public.paroquias (nome, cidade, uf) values ('X', 'Natal', 'RN')")).rejects.toThrow();
    await expect(como("authenticated", FIEL, "insert into public.paroquias (nome, cidade, uf) values ('Xxx', 'Natal', 'RN')")).rejects.toThrow();
    const r = await como("authenticated", FIEL, "update public.paroquias set nome = 'Invadida'");
    expect(r.affectedRows ?? 0).toBe(0);
    await expect(como("authenticated", FIEL, "insert into public.horarios (paroquia_id, tipo, dia_semana, hora) values ($1, 'missa', 1, '07:00')", [matriz])).rejects.toThrow();
  });

  it("paróquia desativada some para o público", async () => {
    await como("authenticated", ADMIN, "update public.paroquias set ativa = false where nome like 'Matriz de Mossoró'");
    expect((await como("anon", null, "select nome from public.paroquias")).rows).toHaveLength(2);
    expect((await como("authenticated", ADMIN, "select nome from public.paroquias")).rows).toHaveLength(3);
  });

  it("gestor da paróquia verificada edita só a dele e não se verifica sozinho", async () => {
    await expect(como("authenticated", FIEL, "select public.adicionar_gestor($1, 'gestor@exemplo.org')", [matriz])).rejects.toThrow();
    await como("authenticated", ADMIN, "select public.adicionar_gestor($1, 'gestor@exemplo.org')", [matriz]);
    expect((await db.query("select verificada from public.paroquias where id = $1", [matriz])).rows[0]).toEqual({ verificada: true });
    await como("authenticated", GESTOR_ID, "update public.paroquias set telefone = '8432210000' where id = $1", [matriz]);
    await como("authenticated", GESTOR_ID, "insert into public.horarios (paroquia_id, tipo, dia_semana, hora) values ($1, 'adoracao', 4, '20:00')", [matriz]);
    const outra = await como("authenticated", GESTOR_ID, "update public.paroquias set telefone = '1' where id = $1", [capela]);
    expect(outra.affectedRows ?? 0).toBe(0);
    await como("authenticated", GESTOR_ID, "update public.paroquias set verificada = false, ativa = false, conferida_em = now() where id = $1", [matriz]);
    expect((await db.query("select conferida_em from public.paroquias where id = $1", [matriz])).rows[0]).toEqual({ conferida_em: null });
    expect((await db.query("select verificada, ativa, telefone from public.paroquias where id = $1", [matriz])).rows[0]).toEqual({ verificada: true, ativa: true, telefone: "8432210000" });
    await como("authenticated", GESTOR_ID, "insert into public.avisos_paroquia (paroquia_id, texto, ate) values ($1, 'Festa da padroeira', '2099-11-21')", [matriz]);
    expect((await como("anon", null, "select texto from public.avisos_paroquia")).rows).toEqual([{ texto: "Festa da padroeira" }]);
  });
});

describe("paróquia, área e capela", () => {
  it("a capela aponta a matriz; área missionária e quase-paróquia são tipos próprios", async () => {
    await db.query("update public.paroquias set matriz_id = $1 where id = $2", [matriz, capela]);
    const r = await como("anon", null, "select c.nome, m.nome as matriz from public.paroquias c join public.paroquias m on m.id = c.matriz_id");
    expect(r.rows).toHaveLength(1);
    await db.query("update public.paroquias set tipo = 'area_missionaria' where id = $1", [matriz]);
    await db.query("update public.paroquias set tipo = 'quase_paroquia' where id = $1", [matriz]);
    await expect(db.query("update public.paroquias set tipo = 'area' where id = $1", [matriz])).rejects.toThrow();
    await expect(db.query("update public.paroquias set matriz_id = id where id = $1", [matriz])).rejects.toThrow();
    await db.query("update public.paroquias set tipo = 'paroquia' where id = $1", [matriz]);
    await db.query("update public.paroquias set matriz_id = null");
    await como("authenticated", GESTOR_ID, "update public.paroquias set fonte_oficial = true where id = $1", [matriz]);
    const protegida = await db.query("select fonte_oficial from public.paroquias where id = $1", [matriz]);
    expect(protegida.rows[0]).toEqual({ fonte_oficial: false });
  });
});

describe("sugestões dos fiéis", () => {
  it("só quem tem conta sugere, em nome próprio, e só vê as suas", async () => {
    await expect(como("anon", null, "insert into public.sugestoes_paroquia (paroquia_id, tipo) values ($1, 'confirmar')", [matriz])).rejects.toThrow();
    await como("authenticated", FIEL, "insert into public.sugestoes_paroquia (paroquia_id, tipo, texto) values ($1, 'horario_errado', 'A missa das 19h mudou para 18h')", [matriz]);
    await expect(como("authenticated", FIEL, "insert into public.sugestoes_paroquia (paroquia_id, tipo, autor) values ($1, 'confirmar', $2)", [matriz, ADMIN])).rejects.toThrow();
    await expect(como("authenticated", FIEL, "insert into public.sugestoes_paroquia (paroquia_id, tipo, situacao) values ($1, 'confirmar', 'aceita')", [matriz])).rejects.toThrow();
    expect((await como("authenticated", FIEL, "select tipo from public.sugestoes_paroquia")).rows).toHaveLength(1);
    expect((await como("authenticated", ADMIN, "select tipo from public.sugestoes_paroquia")).rows).toHaveLength(1);
    expect((await como("authenticated", GESTOR_ID, "select tipo from public.sugestoes_paroquia")).rows).toHaveLength(1);
    const r = await como("authenticated", FIEL, "update public.sugestoes_paroquia set situacao = 'aceita'");
    expect(r.affectedRows ?? 0).toBe(0);
  });

  it("no máximo 20 sugestões por dia por pessoa", async () => {
    for (let i = 0; i < 19; i++) await como("authenticated", FIEL, "insert into public.sugestoes_paroquia (paroquia_id, tipo) values ($1, 'confirmar')", [capela]);
    await expect(como("authenticated", FIEL, "insert into public.sugestoes_paroquia (paroquia_id, tipo) values ($1, 'confirmar')", [capela])).rejects.toThrow();
  });

  it("confirmar a paróquia é do admin ou do gestor", async () => {
    await expect(como("authenticated", FIEL, "select public.confirmar_paroquia($1)", [capela])).rejects.toThrow();
    await como("authenticated", ADMIN, "select public.confirmar_paroquia($1)", [capela]);
    expect((await db.query("select confirmado_em is not null as ok from public.paroquias where id = $1", [capela])).rows[0]).toEqual({ ok: true });
  });
});

describe("busca", () => {
  it("por nome, padroeiro ou bairro, sem acento", async () => {
    const r = await como("anon", null, "select nome from public.buscar_paroquias('apresentacao')");
    expect(r.rows.map((x) => x.nome)).toEqual(["Catedral Metropolitana"]);
    const r2 = await como("anon", null, "select nome from public.buscar_paroquias('ponta negra')");
    expect(r2.rows.map((x) => x.nome)).toEqual(["Capela de São Pedro"]);
  });

  it("perto de mim, da mais perto para a mais longe, dentro do raio", async () => {
    const r = await como("anon", null, "select nome, round(distancia_km::numeric, 1) as km from public.buscar_paroquias('', -5.795, -35.211, 20)");
    expect(r.rows.map((x) => x.nome)).toEqual(["Catedral Metropolitana", "Capela de São Pedro"]);
    const longe = await como("anon", null, "select nome from public.buscar_paroquias('', -5.795, -35.211, 2)");
    expect(longe.rows.map((x) => x.nome)).toEqual(["Catedral Metropolitana"]);
  });

  it("agenda: as próximas missas a partir de agora, com exceção e cancelamento", async () => {
    const domingo = "2026-11-15 07:30";
    const r = await como("anon", null, "select nome, quando::text from public.agenda_perto(-5.795, -35.211, $1, 14, 'missa', 20)", [domingo]);
    expect(r.rows.map((x) => `${x.quando} ${x.nome}`)).toEqual([
      "2026-11-15 08:00:00 Catedral Metropolitana",
      "2026-11-15 09:00:00 Capela de São Pedro",
      "2026-11-15 19:00:00 Catedral Metropolitana",
    ]);
    await como("authenticated", ADMIN, "insert into public.horarios (paroquia_id, tipo, data, hora, cancelado) values ($1, 'missa', '2026-11-15', '00:00', true)", [capela]);
    await como("authenticated", ADMIN, "insert into public.horarios (paroquia_id, tipo, data, hora, observacao) values ($1, 'missa', '2026-11-15', '17:00', 'Missa da festa')", [matriz]);
    const r2 = await como("anon", null, "select nome, quando::text, observacao from public.agenda_perto(-5.795, -35.211, $1, 14, 'missa', 20)", [domingo]);
    expect(r2.rows.map((x) => `${x.quando} ${x.nome} ${x.observacao}`.trim())).toEqual(["2026-11-15 17:00:00 Catedral Metropolitana Missa da festa"]);
  });

  it("último domingo do mês", async () => {
    await como("authenticated", ADMIN, "insert into public.horarios (paroquia_id, tipo, dia_semana, hora, semanas) values ($1, 'missa', 0, '10:00', '{6}')", [capela]);
    const ultimo = await como("anon", null, "select quando::text from public.agenda_perto(-5.795, -35.211, '2026-11-29 09:30', 2, 'missa', 20)");
    expect(ultimo.rows.map((x) => x.quando)).toContain("2026-11-29 10:00:00");
    const outro = await como("anon", null, "select quando::text from public.agenda_perto(-5.795, -35.211, '2026-11-22 09:30', 2, 'missa', 20)");
    expect(outro.rows.map((x) => x.quando)).not.toContain("2026-11-22 10:00:00");
  });

  it("por cidade, sem localização, e a lista de cidades", async () => {
    const r = await como("anon", null, "select nome, distancia_km from public.procurar_paroquias('', null, null, 15, 30, 0, 'natal', 'rn')");
    expect(r.rows).toEqual([
      { nome: "Capela de São Pedro", distancia_km: null },
      { nome: "Catedral Metropolitana", distancia_km: null },
    ]);
    const longe = await como("anon", null, "select nome, round(distancia_km)::int as km from public.procurar_paroquias('', -5.1878, -37.3440, 5, 30, 0, 'Natal', 'RN')");
    expect(longe.rows.map((x) => x.nome)).toEqual(["Catedral Metropolitana", "Capela de São Pedro"]);
    expect(longe.rows[0]!.km).toBeGreaterThan(200);
    const fora = await como("anon", null, "select nome from public.procurar_paroquias('', null, null, 15, 30, 0, 'Mossoró', 'RN')");
    expect(fora.rows).toEqual([]);
    const agenda = await como("anon", null, "select nome, quando::text from public.agenda_de_horarios(null, null, '2026-11-22 07:00', 14, 'missa', 15, 40, 'Natal', 'RN')");
    expect(agenda.rows.map((x) => `${x.quando} ${x.nome}`)).toEqual([
      "2026-11-22 08:00:00 Catedral Metropolitana",
      "2026-11-22 09:00:00 Capela de São Pedro",
      "2026-11-22 19:00:00 Catedral Metropolitana",
    ]);
    const raio = await como("anon", null, "select distinct nome from public.agenda_de_horarios(-5.795, -35.211, '2026-11-22 07:00', 14, 'missa', 3)");
    expect(raio.rows).toEqual([{ nome: "Catedral Metropolitana" }]);
    const nada = await como("anon", null, "select count(*)::int as n from public.agenda_de_horarios(null, null, '2026-11-15 07:00', 14, 'missa')");
    expect(nada.rows[0]).toEqual({ n: 0 });
    const cidades = await como("anon", null, "select cidade, uf, total from public.cidades_com_paroquias()");
    expect(cidades.rows).toEqual([{ cidade: "Natal", uf: "RN", total: 2 }]);
    const busca = await como("anon", null, "select cidade from public.cidades_com_paroquias('nat')");
    expect(busca.rows).toEqual([{ cidade: "Natal" }]);
  });

  it("em páginas: a contagem vem junto, e por igreja junta os horários", async () => {
    const args = "null, null, '2026-11-22 07:00', 14, 'missa', 15";
    const p1 = await como("anon", null, `select nome, total from public.agenda_de_horarios(${args}, 2, 'Natal', 'RN', 0)`);
    expect(p1.rows).toEqual([
      { nome: "Catedral Metropolitana", total: 3 },
      { nome: "Capela de São Pedro", total: 3 },
    ]);
    const p2 = await como("anon", null, `select nome from public.agenda_de_horarios(${args}, 2, 'Natal', 'RN', 2)`);
    expect(p2.rows).toEqual([{ nome: "Catedral Metropolitana" }]);
    const igrejas = await como("anon", null, "select nome, jsonb_array_length(horarios) as n, total from public.igrejas_com_horarios(-5.795, -35.211, '2026-11-22 07:00', 14, 'missa', 20)");
    expect(igrejas.rows).toEqual([
      { nome: "Catedral Metropolitana", n: 2, total: 2 },
      { nome: "Capela de São Pedro", n: 1, total: 2 },
    ]);
    const manha = await como("anon", null, `select nome from public.agenda_de_horarios(${args}, 40, 'Natal', 'RN', 0, '2026-11-22 12:00')`);
    expect(manha.rows.map((x) => x.nome)).toEqual(["Catedral Metropolitana", "Capela de São Pedro"]);
    await como("authenticated", ADMIN, "insert into public.paroquias (nome, cidade, uf) values ('Capela sem mapa', 'Natal', 'RN')");
    const perto = await como("anon", null, "select cidade, total from public.cidades_com_paroquias('', -5.88, -35.17)");
    expect(perto.rows).toEqual([{ cidade: "Natal", total: 3 }]);
  });

  it("confissão hoje", async () => {
    const r = await como("anon", null, "select quando::text from public.agenda_perto(-5.795, -35.211, '2026-11-18 08:00', 12, 'confissao', 20)");
    expect(r.rows.map((x) => x.quando)).toEqual(["2026-11-18 15:00:00"]);
  });
});

describe("dados de Natal (planilha do Missas.com.br)", () => {
  it("entram inteiros, podem rodar de novo e têm cara de verdade", async () => {
    const banco = await criarBanco({ comDados: true });
    const c = comoEm(banco);
    const p = await banco.query<{ n: number; com_ponto: number }>("select count(*)::int as n, count(lat)::int as com_ponto from public.paroquias where id = any($1::uuid[])", [DA_PLANILHA]);
    expect(p.rows[0]!.n).toBe(58);
    expect(Number(p.rows[0]!.com_ponto)).toBeGreaterThanOrEqual(52);
    const saoJose = await c("anon", null, "select nome, round(lat::numeric, 3)::text as lat from public.paroquias where nome in ('Paróquia de São José', 'Paróquia de São José de Anchieta') order by nome");
    expect(saoJose.rows[0]!.lat).not.toBe(saoJose.rows[1]!.lat);
    const fora = await c("anon", null, "select cidade from public.paroquias where nome = 'Paróquia de Nossa Senhora da Penha'");
    expect(fora.rows[0]).toEqual({ cidade: "Monte Alegre" });
    const notas = await banco.query("select count(*)::int as n from public.notas_paroquia n join public.paroquias p on p.id = n.paroquia_id where p.uf = 'RN'");
    expect(notas.rows[0]).toEqual({ n: 794 });
    const rn = await c("anon", null, "select count(*)::int as igrejas, count(distinct cidade)::int as cidades from public.paroquias where uf = 'RN'");
    expect(rn.rows[0]).toEqual({ igrejas: 805, cidades: 165 });
    const caico = await c("anon", null, "select count(*)::int as n from public.buscar_paroquias('catedral sant ana caico')");
    expect(Number(caico.rows[0]!.n)).toBeGreaterThan(0);
    const corrigidas = await banco.query("select cidade from public.paroquias where id = any($1::uuid[]) and nome like 'Igreja de Nossa Senhora d%' order by cidade", [DA_PLANILHA]);
    expect(corrigidas.rows.map((x) => (x as { cidade: string }).cidade)).toContain("Ceará-Mirim");
    await expect(c("anon", null, "select * from public.notas_paroquia")).rejects.toThrow();
    const h = await c("anon", null, "select h.tipo, count(*)::int as n from public.horarios h join public.paroquias p on p.id = h.paroquia_id where p.uf = 'RN' group by h.tipo order by h.tipo");
    expect(h.rows).toEqual([
      { tipo: "adoracao", n: 13 },
      { tipo: "confissao", n: 71 },
      { tipo: "missa", n: 1217 },
    ]);
    const santana = await c("anon", null, "select nome, bairro, (select count(*)::int from public.horarios h where h.paroquia_id = p.id and h.tipo = 'missa') as missas, conferida_em is not null as conferida from public.paroquias p where nome like 'Paróquia de Sant''Ana%' and cidade = 'Natal' order by nome");
    expect(santana.rows).toEqual([
      { nome: "Paróquia de Sant'Ana, Capim Macio", bairro: "Capim Macio", missas: 3, conferida: true },
      { nome: "Paróquia de Sant'Ana, Soledade II", bairro: "Potengi", missas: 9, conferida: true },
    ]);
    const domingo = await c("anon", null, "select count(*)::int as n from public.agenda_perto(-5.80, -35.21, '2026-11-15 06:00', 18, 'missa', 30, 100)");
    expect(Number(domingo.rows[0]!.n)).toBeGreaterThan(40);
    const busca = await c("anon", null, "select nome from public.buscar_paroquias('catedral')");
    expect(busca.rows.map((x) => x.nome)).toContain("Catedral de Nossa Senhora da Apresentação");
  });

  it("RN organizado: capela aponta a matriz, nomes sem parênteses, domingo na maioria das matrizes", async () => {
    const banco = await criarBanco({ comDados: true });
    const c = comoEm(banco);
    const pedraPreta = await c("anon", null, "select c.nome, c.cidade, m.cidade as da_matriz from public.paroquias c join public.paroquias m on m.id = c.matriz_id where c.id = '2c517e66-a056-5cae-9cae-d08411877599'");
    expect(pedraPreta.rows).toEqual([{ nome: "Igreja de São Francisco de Assis", cidade: "Pedra Preta", da_matriz: "Lajes" }]);
    const ligadas = await c("anon", null, "select count(*)::int as n from public.paroquias where uf = 'RN' and matriz_id is not null");
    expect(Number(ligadas.rows[0]!.n)).toBeGreaterThan(500);
    const comParoquiaNoNome = await c("anon", null, "select nome from public.paroquias where uf = 'RN' and nome ~ '\\((Par[oó]quia|[ÁA]rea|Quase)'");
    expect(comParoquiaNoNome.rows).toEqual([]);
    const comCategoriaNoNome = await c("anon", null, "select count(*)::int as n from public.paroquias where nome ~ '^(Área|Quase)'");
    expect(comCategoriaNoNome.rows[0]).toEqual({ n: 0 });
    const areas = await c("anon", null, "select count(*)::int as n from public.paroquias where tipo in ('area_missionaria', 'area_pastoral', 'quase_paroquia') and matriz_id is null and nome not like 'Igreja%'");
    expect(areas.rows[0]).toEqual({ n: 0 });
    const igrejas = await banco.query("select count(*)::int as n from public.paroquias where uf = 'RN' and tipo in ('area_missionaria', 'area_pastoral', 'quase_paroquia')");
    expect(igrejas.rows[0]).toEqual({ n: 18 });
    const altaSemSelo = await banco.query("select count(*)::int as n from public.notas_paroquia n join public.paroquias p on p.id = n.paroquia_id where n.confianca = 'alta' and not p.fonte_oficial");
    expect(altaSemSelo.rows[0]).toEqual({ n: 0 });
    const seloSemRespaldo = await banco.query("select count(*)::int as n from public.paroquias p where p.fonte_oficial and not exists (select 1 from public.notas_paroquia n where n.confianca = 'alta' and (n.paroquia_id = p.id or n.paroquia_id = p.matriz_id))");
    expect(seloSemRespaldo.rows[0]).toEqual({ n: 0 });
    const altas = await banco.query("select count(*)::int as n from public.notas_paroquia where confianca = 'alta'");
    expect(Number((altas.rows[0] as { n: number }).n)).toBeGreaterThan(100);
    const domingo = await c("anon", null, "select count(*)::int as matrizes, count(*) filter (where exists (select 1 from public.horarios h where h.paroquia_id = p.id and h.tipo = 'missa' and h.dia_semana = 0))::int as com_domingo from public.paroquias p where uf = 'RN' and tipo not in ('capela', 'comunidade', 'mosteiro')");
    expect(Number(domingo.rows[0]!.com_domingo) / Number(domingo.rows[0]!.matrizes)).toBeGreaterThan(0.7);
    const conferida = await c("anon", null, "select count(*)::int as n from public.horarios h join public.paroquias p on p.id = h.paroquia_id where p.nome = 'Paróquia de Sant''Ana, Soledade II' and h.tipo = 'missa'");
    expect(conferida.rows[0]).toEqual({ n: 9 });
  });
});
