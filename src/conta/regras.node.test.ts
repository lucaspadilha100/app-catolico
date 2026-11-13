import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { PGlite } from "@electric-sql/pglite";
import { beforeAll, describe, expect, it } from "vitest";

const raiz = join(__dirname, "../..");
const A = "00000000-0000-0000-0000-00000000000a";
const B = "00000000-0000-0000-0000-00000000000b";
let db: PGlite;

async function como(papel: "anon" | "authenticated", usuario: string | null, sql: string, params: unknown[] = []) {
  await db.exec("reset role");
  await db.query("select set_config('request.jwt.claim.sub', $1, false)", [usuario ?? ""]);
  await db.exec(`set role ${papel}`);
  try {
    return await db.query(sql, params);
  } finally {
    await db.exec("reset role");
  }
}

beforeAll(async () => {
  db = new PGlite();
  await db.exec(readFileSync(join(raiz, "supabase/testes/base.sql"), "utf8"));
  for (let vez = 0; vez < 2; vez++)
    for (const arquivo of readdirSync(join(raiz, "supabase/migrations")).sort()) {
      await db.exec(readFileSync(join(raiz, "supabase/migrations", arquivo), "utf8"));
    }
  await db.query("insert into auth.users (id) values ($1), ($2)", [A, B]);
});

describe("sincronização", () => {
  it("cada um grava e lê só o que é seu", async () => {
    await como("authenticated", A, "insert into public.sincronizacao (chave, valor) values ('santinho-falecidos', '[1]')");
    await como("authenticated", B, "insert into public.sincronizacao (chave, valor) values ('santinho-falecidos', '[2]')");
    const deA = await como("authenticated", A, "select valor from public.sincronizacao");
    expect(deA.rows).toEqual([{ valor: "[1]" }]);
    const deB = await como("authenticated", B, "select valor from public.sincronizacao");
    expect(deB.rows).toEqual([{ valor: "[2]" }]);
  });

  it("ninguém grava em nome de outro nem passa a linha para outro", async () => {
    await expect(como("authenticated", A, "insert into public.sincronizacao (usuario_id, chave, valor) values ($1, 'santinho-cofre', 'x')", [B])).rejects.toThrow();
    await expect(como("authenticated", A, "update public.sincronizacao set usuario_id = $1", [B])).rejects.toThrow();
    const r = await como("authenticated", A, "update public.sincronizacao set valor = 'mexido' where usuario_id = $1", [B]);
    expect(r.affectedRows ?? 0).toBe(0);
    const apagou = await como("authenticated", A, "delete from public.sincronizacao where usuario_id = $1", [B]);
    expect(apagou.affectedRows ?? 0).toBe(0);
  });

  it("visitante sem conta não lê nem grava", async () => {
    await expect(como("anon", null, "select * from public.sincronizacao")).rejects.toThrow();
    await expect(como("anon", null, "insert into public.sincronizacao (chave, valor) values ('santinho-x', 'y')")).rejects.toThrow();
  });

  it("só chaves do app", async () => {
    await expect(como("authenticated", A, "insert into public.sincronizacao (chave, valor) values ('qualquer', 'y')")).rejects.toThrow();
  });
});

describe("apagar a conta", () => {
  it("visitante não executa; o dono apaga a si mesmo e tudo o que é dele", async () => {
    await expect(como("anon", null, "select public.apagar_minha_conta()")).rejects.toThrow();
    await como("authenticated", B, "select public.apagar_minha_conta()");
    const usuarios = await db.query<{ id: string }>("select id from auth.users");
    expect(usuarios.rows.map((u) => u.id)).toEqual([A]);
    const linhas = await db.query("select * from public.sincronizacao where usuario_id = $1", [B]);
    expect(linhas.rows).toEqual([]);
  });
});

describe("uso anônimo", () => {
  it("conta só eventos conhecidos, sem guardar quem foi, e ninguém lê pela API", async () => {
    await como("anon", null, "select public.contar_uso('abertura')");
    await como("anon", null, "select public.contar_uso('abertura')");
    await como("anon", null, "select public.contar_uso('qualquer-coisa')");
    const r = await db.query<{ evento: string; contagem: number }>("select evento, contagem from public.uso_diario");
    expect(r.rows).toEqual([{ evento: "abertura", contagem: 2 }]);
    await expect(como("anon", null, "select * from public.uso_diario")).rejects.toThrow();
    await expect(como("authenticated", A, "select * from public.uso_diario")).rejects.toThrow();
  });

  it("rezando hoje: qualquer um vê só as contagens de reza do dia", async () => {
    await como("anon", null, "select public.contar_uso('reza-terco')");
    await como("anon", null, "select public.contar_uso('reza-terco')");
    await como("authenticated", A, "select public.contar_uso('reza-misericordia')");
    await db.query("insert into public.uso_diario (dia, evento, contagem) values ((now() at time zone 'America/Sao_Paulo')::date - 3, 'reza-terco', 50)");
    const r = await como("anon", null, "select public.rezando_hoje() as r");
    expect(r.rows[0]).toEqual({ r: { terco: 2, misericordia: 1, agora: 0 } });
  });
});

describe("uso do app no painel", () => {
  it("só o administrador lê os números", async () => {
    await como("anon", null, "select public.contar_uso('abertura')");
    await expect(como("anon", null, "select public.uso_do_app()")).rejects.toThrow();
    await expect(como("authenticated", A, "select public.uso_do_app()")).rejects.toThrow();
    await db.query("insert into auth.users (id) values ($1) on conflict do nothing", [B]);
    await db.query("insert into public.administradores (usuario_id) values ($1)", [B]);
    const r = await como("authenticated", B, "select public.uso_do_app() as u");
    const u = (r.rows[0] as { u: { dias: { aparelhos: number }[]; semana: Record<string, number>; contas: number } }).u;
    expect(u.dias[0]?.aparelhos).toBeGreaterThan(0);
    expect(u.semana.abertura).toBeGreaterThan(0);
    expect(typeof u.contas).toBe("number");
  });
});

describe("avisos de erro da Bíblia", () => {
  it("qualquer um avisa, ninguém lê pela API", async () => {
    await como("anon", null, "insert into public.avisos_biblia (livro, capitulo, versiculo, arquivo, texto_versiculo, tipo) values ('JHN', 3, 16, 'JHN.x.json', 't', 'palavra')");
    await expect(como("anon", null, "select * from public.avisos_biblia")).rejects.toThrow();
  });
});

describe("apoio declarado", () => {
  it("visitante não executa; quem tem conta vira apoiador na hora, por um ano a mais a cada vez", async () => {
    await expect(como("anon", null, "select public.declarar_apoio()")).rejects.toThrow();
    const dias = "select ate - (now() at time zone 'America/Sao_Paulo')::date as dias from public.apoiadores";
    await como("authenticated", A, "select public.declarar_apoio()");
    const um = Number(((await como("authenticated", A, dias)).rows[0] as { dias: number }).dias);
    expect(um).toBeGreaterThanOrEqual(365);
    await como("authenticated", A, "select public.declarar_apoio()");
    const dois = Number(((await como("authenticated", A, dias)).rows[0] as { dias: number }).dias);
    expect(dois).toBeGreaterThanOrEqual(730);
    await expect(como("authenticated", A, "update public.apoiadores set ate = '2099-01-01'")).rejects.toThrow();
  });
});

describe("funções", () => {
  it("visitante só executa as funções públicas da lista", async () => {
    const r = await db.query<{ nome: string }>(`
      select p.proname as nome from pg_proc p join pg_namespace n on n.oid = p.pronamespace
      where n.nspname = 'public' and has_function_privilege('anon', p.oid, 'execute')`);
    expect(r.rows.map((x) => x.nome).sort()).toEqual(["agenda_de_eventos", "agenda_de_horarios", "agenda_de_tercos", "agenda_perto", "buscar_paroquias", "cidades_com_paroquias", "contar_uso", "corrente_por_codigo", "denunciar_intencao", "e_admin", "horarios_do_periodo", "igrejas_com_horarios", "meus_grupos", "pegar_turno", "procurar_paroquias", "remover_lembretes", "rezando_hoje", "rezei_por", "roteiro_estado", "roteiro_por_codigo", "roteiros_da_paroquia", "roteiros_do_terco", "salvar_lembretes", "sem_acento", "soltar_turno", "somar_na_campanha", "turmas_da_paroquia"]);
  });

  it("toda função definer fixa o search_path", async () => {
    const r = await db.query<{ nome: string }>(`
      select p.proname as nome from pg_proc p join pg_namespace n on n.oid = p.pronamespace
      where n.nspname = 'public' and p.prosecdef and not exists (select 1 from unnest(coalesce(p.proconfig, '{}')) c where c like 'search_path=%')`);
    expect(r.rows).toEqual([]);
  });

  it("toda tabela pública tem RLS", async () => {
    const r = await db.query<{ nome: string }>("select relname as nome from pg_class c join pg_namespace n on n.oid = c.relnamespace where n.nspname = 'public' and c.relkind = 'r' and not c.relrowsecurity");
    expect(r.rows).toEqual([]);
  });
});
