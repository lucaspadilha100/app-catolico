import type { PGlite } from "@electric-sql/pglite";
import { beforeAll, describe, expect, it } from "vitest";
import { como as comoEm, criarBanco } from "@/conta/bancoDeTeste.node";

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
    await como("authenticated", GESTOR_ID, "update public.paroquias set verificada = false, ativa = false where id = $1", [matriz]);
    expect((await db.query("select verificada, ativa, telefone from public.paroquias where id = $1", [matriz])).rows[0]).toEqual({ verificada: true, ativa: true, telefone: "8432210000" });
    await como("authenticated", GESTOR_ID, "insert into public.avisos_paroquia (paroquia_id, texto, ate) values ($1, 'Festa da padroeira', '2099-11-21')", [matriz]);
    expect((await como("anon", null, "select texto from public.avisos_paroquia")).rows).toEqual([{ texto: "Festa da padroeira" }]);
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

  it("confissão hoje", async () => {
    const r = await como("anon", null, "select quando::text from public.agenda_perto(-5.795, -35.211, '2026-11-18 08:00', 12, 'confissao', 20)");
    expect(r.rows.map((x) => x.quando)).toEqual(["2026-11-18 15:00:00"]);
  });
});
