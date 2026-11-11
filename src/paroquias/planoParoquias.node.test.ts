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
let gratis: string;
let turma: string;

beforeAll(async () => {
  db = await criarBanco();
  como = comoEm(db);
  await db.query("insert into auth.users (id) values ($1), ($2), ($3), ($4)", [ADMIN, SECRETARIA, FIEL, OUTRO]);
  await db.query("insert into public.administradores (usuario_id) values ($1)", [ADMIN]);
  paroquia = (await como("authenticated", ADMIN, "insert into public.paroquias (nome, cidade, uf) values ('Paróquia de São José', 'Natal', 'RN') returning id")).rows[0]!.id as string;
  gratis = (await como("authenticated", ADMIN, "insert into public.paroquias (nome, cidade, uf) values ('Capela de Santa Rita', 'Natal', 'RN') returning id")).rows[0]!.id as string;
  await db.query("insert into public.paroquia_gestores (paroquia_id, usuario_id) values ($1, $3), ($2, $3)", [paroquia, gratis, SECRETARIA]);
});

describe("PIX da paróquia", () => {
  it("a equipe cadastra a chave; ela só vale depois que o admin confere", async () => {
    await expect(como("authenticated", SECRETARIA, "update public.paroquias set pix_chave = 'chave qualquer' where id = $1", [paroquia])).rejects.toThrow();
    await como("authenticated", SECRETARIA, "update public.paroquias set pix_chave = '12345678000199', pix_nome = 'PAROQUIA SAO JOSE', pix_cidade = 'NATAL', pix_conferido = true where id = $1", [paroquia]);
    expect((await db.query("select pix_conferido from public.paroquias where id = $1", [paroquia])).rows[0]).toEqual({ pix_conferido: false });
    expect((await como("authenticated", SECRETARIA, "select * from public.pix_para_conferir()")).rows).toHaveLength(0);
    expect((await como("authenticated", ADMIN, "select pix_chave from public.pix_para_conferir()")).rows).toEqual([{ pix_chave: "12345678000199" }]);
    await como("authenticated", ADMIN, "update public.paroquias set pix_conferido = true where id = $1", [paroquia]);
    await como("authenticated", SECRETARIA, "update public.paroquias set telefone = '8432010000' where id = $1", [paroquia]);
    expect((await db.query("select pix_conferido from public.paroquias where id = $1", [paroquia])).rows[0]).toEqual({ pix_conferido: true });
  });

  it("trocar a chave volta para a conferência", async () => {
    await como("authenticated", SECRETARIA, "update public.paroquias set pix_chave = 'secretaria@paroquia.org' where id = $1", [paroquia]);
    expect((await db.query("select pix_conferido from public.paroquias where id = $1", [paroquia])).rows[0]).toEqual({ pix_conferido: false });
    await como("authenticated", ADMIN, "update public.paroquias set pix_conferido = true where id = $1", [paroquia]);
  });
});

describe("inscrições", () => {
  it("turma só abre em paróquia com plano, pela equipe", async () => {
    await expect(como("authenticated", SECRETARIA, "insert into public.turmas (paroquia_id, tipo, titulo) values ($1, 'batismo', 'Batismo de dezembro')", [gratis])).rejects.toThrow();
    await como("authenticated", ADMIN, "update public.paroquias set plano = 'pioneira' where id = $1", [paroquia]);
    await expect(como("authenticated", FIEL, "insert into public.turmas (paroquia_id, tipo, titulo) values ($1, 'batismo', 'Invasão')", [paroquia])).rejects.toThrow();
    turma = (await como("authenticated", SECRETARIA, "insert into public.turmas (paroquia_id, tipo, titulo, vagas) values ($1, 'batismo', 'Batismo de dezembro', 2) returning id", [paroquia])).rows[0]!.id as string;
    expect((await como("anon", null, "select titulo, inscritos from public.turmas_da_paroquia($1)", [paroquia])).rows).toEqual([{ titulo: "Batismo de dezembro", inscritos: 0 }]);
    expect((await como("anon", null, "select * from public.turmas_da_paroquia($1)", [gratis])).rows).toHaveLength(0);
  });

  it("quem tem conta se inscreve; vê só a sua; a equipe vê todas", async () => {
    await expect(como("anon", null, "insert into public.inscricoes (turma_id, paroquia_id, nome, telefone) values ($1, $2, 'Pedro', '84999990000')", [turma, paroquia])).rejects.toThrow();
    await como("authenticated", FIEL, "insert into public.inscricoes (turma_id, paroquia_id, nome, responsavel, telefone, situacao) values ($1, $2, 'Pedro Henrique', 'Maria e José', '84999990000', 'confirmada')", [turma, gratis]);
    await como("authenticated", OUTRO, "insert into public.inscricoes (turma_id, paroquia_id, nome, telefone) values ($1, $2, 'Ana Clara', '84988880000')", [turma, paroquia]);
    expect((await como("authenticated", FIEL, "select nome, situacao, paroquia_id from public.inscricoes")).rows).toEqual([{ nome: "Pedro Henrique", situacao: "recebida", paroquia_id: paroquia }]);
    expect((await como("authenticated", SECRETARIA, "select nome from public.inscricoes order by nome")).rows).toEqual([{ nome: "Ana Clara" }, { nome: "Pedro Henrique" }]);
    expect((await como("anon", null, "select inscritos from public.turmas_da_paroquia($1)", [paroquia])).rows).toEqual([{ inscritos: 2 }]);
  });

  it("sem vagas, recusa; cancelar libera a vaga", async () => {
    await expect(como("authenticated", ADMIN, "insert into public.inscricoes (turma_id, paroquia_id, nome, telefone) values ($1, $2, 'Terceiro', '84977770000')", [turma, paroquia])).rejects.toThrow(/vagas/);
    await como("authenticated", OUTRO, "update public.inscricoes set situacao = 'cancelada' where nome = 'Ana Clara'");
    await como("authenticated", ADMIN, "insert into public.inscricoes (turma_id, paroquia_id, nome, telefone) values ($1, $2, 'Terceiro', '84977770000')", [turma, paroquia]);
  });

  it("quem se inscreve só cancela; a equipe confirma e não reescreve os dados", async () => {
    await como("authenticated", FIEL, "update public.inscricoes set situacao = 'confirmada', nome = 'Outro nome' where nome = 'Pedro Henrique'");
    expect((await db.query("select nome, situacao from public.inscricoes where usuario_id = $1", [FIEL])).rows).toEqual([{ nome: "Pedro Henrique", situacao: "recebida" }]);
    await como("authenticated", SECRETARIA, "update public.inscricoes set situacao = 'confirmada', telefone = '84900000000' where nome = 'Pedro Henrique'");
    expect((await db.query("select telefone, situacao from public.inscricoes where usuario_id = $1", [FIEL])).rows).toEqual([{ telefone: "84999990000", situacao: "confirmada" }]);
    await expect(como("authenticated", FIEL, "delete from public.inscricoes")).rejects.toThrow();
  });

  it("turma fechada ou vencida não aceita inscrição e some da página", async () => {
    await como("authenticated", SECRETARIA, "update public.turmas set aberta = false where id = $1", [turma]);
    await expect(como("authenticated", OUTRO, "insert into public.inscricoes (turma_id, paroquia_id, nome, telefone) values ($1, $2, 'Ana Clara', '84988880000')", [turma, paroquia])).rejects.toThrow(/encerradas/);
    expect((await como("anon", null, "select * from public.turmas_da_paroquia($1)", [paroquia])).rows).toHaveLength(0);
    expect((await como("authenticated", SECRETARIA, "select aberta from public.turmas_da_paroquia($1)", [paroquia])).rows).toEqual([{ aberta: false }]);
    const vencida = (await como("authenticated", SECRETARIA, "insert into public.turmas (paroquia_id, tipo, titulo, encerra) values ($1, 'crisma', 'Crisma 2026', '2026-01-31') returning id", [paroquia])).rows[0]!.id as string;
    await expect(como("authenticated", OUTRO, "insert into public.inscricoes (turma_id, paroquia_id, nome, telefone) values ($1, $2, 'Ana Clara', '84988880000')", [vencida, paroquia])).rejects.toThrow(/encerradas/);
    await expect(como("authenticated", SECRETARIA, "delete from public.turmas where id = $1", [turma])).rejects.toThrow();
  });
});

describe("números da paróquia", () => {
  it("só a equipe vê; conta quem segue e o alcance dos avisos", async () => {
    await db.query(`insert into public.lembrete_inscricoes (endpoint, p256dh, auth, lembretes) values
      ('https://push.exemplo/1', repeat('a', 30), repeat('b', 10), $1),
      ('https://push.exemplo/2', repeat('a', 30), repeat('b', 10), $2)`, [JSON.stringify({ igrejas: [paroquia] }), JSON.stringify({ igrejas: [paroquia], avisos: false })]);
    await db.query("insert into public.sincronizacao (usuario_id, chave, valor) values ($1, 'santinho-igrejas-seguidas', $2), ($3, 'santinho-preferencias', $4)", [FIEL, JSON.stringify([paroquia]), OUTRO, JSON.stringify({ minhaParoquia: paroquia })]);
    await como("authenticated", SECRETARIA, "insert into public.publicacoes_paroquia (paroquia_id, titulo) values ($1, 'Missa do padroeiro')", [paroquia]);
    await como("authenticated", SECRETARIA, "update public.publicacoes_paroquia set alcance = 999");
    await db.query("alter role service_role bypassrls");
    await db.query("grant update on public.publicacoes_paroquia to service_role");
    await db.query("set role service_role");
    await db.query("update public.publicacoes_paroquia set alcance = 1, notificada = true");
    await db.query("reset role");
    expect((await como("authenticated", FIEL, "select * from public.numeros_da_paroquia($1)", [paroquia])).rows).toHaveLength(0);
    expect((await como("authenticated", SECRETARIA, "select * from public.numeros_da_paroquia($1)", [paroquia])).rows[0]).toEqual({
      recebem_avisos: 1,
      contas_que_seguem: 2,
      publicacoes_30_dias: 1,
      alcance_30_dias: 1,
      inscricoes_recebidas: 1,
      inscricoes_confirmadas: 1,
    });
  });
});

describe("catequese", () => {
  it("a equipe marca encontros e presença; a família vê os da turma e a presença do seu", async () => {
    await como("authenticated", SECRETARIA, "update public.turmas set aberta = true where id = $1", [turma]);
    await db.query("update public.turmas set encerra = null, vagas = null where id = $1", [turma]);
    const enc = (await como("authenticated", SECRETARIA, "insert into public.turma_encontros (turma_id, data, tema, material) values ($1, '2026-12-05', 'O batismo de Jesus', 'Ler Mt 3,13-17 em casa') returning id", [turma])).rows[0]!.id as string;
    await expect(como("authenticated", FIEL, "insert into public.turma_encontros (turma_id, data, tema) values ($1, '2026-12-05', 'Invasão')", [turma])).rejects.toThrow();
    const daFiel = ((await db.query("select id from public.inscricoes where usuario_id = $1 and turma_id = $2", [FIEL, turma])).rows[0] as { id: string }).id;
    await como("authenticated", SECRETARIA, "insert into public.turma_presencas (encontro_id, inscricao_id, presente) values ($1, $2, true)", [enc, daFiel]);
    await expect(como("authenticated", FIEL, "update public.turma_presencas set presente = false")).resolves.toBeDefined();
    expect((await db.query("select presente from public.turma_presencas")).rows).toEqual([{ presente: true }]);
    expect((await como("authenticated", FIEL, "select tema from public.turma_encontros")).rows).toEqual([{ tema: "O batismo de Jesus" }]);
    expect((await como("authenticated", FIEL, "select presente from public.turma_presencas")).rows).toEqual([{ presente: true }]);
    expect((await como("authenticated", OUTRO, "select tema from public.turma_encontros")).rows).toHaveLength(0);
  });
});
