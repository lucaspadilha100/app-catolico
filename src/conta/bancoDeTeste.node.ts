import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { PGlite } from "@electric-sql/pglite";

const raiz = join(__dirname, "../..");

export async function criarBanco({ comDados = false } = {}): Promise<PGlite> {
  const db = new PGlite();
  await db.exec(readFileSync(join(raiz, "supabase/testes/base.sql"), "utf8"));
  const arquivos = readdirSync(join(raiz, "supabase/migrations"))
    .filter((a) => comDados || !a.includes("_dados_"))
    .sort();
  for (let vez = 0; vez < 2; vez++)
    for (const arquivo of arquivos) await db.exec(readFileSync(join(raiz, "supabase/migrations", arquivo), "utf8"));
  return db;
}

export function como(db: PGlite) {
  return async (papel: "anon" | "authenticated", usuario: string | null, sql: string, params: unknown[] = []) => {
    await db.exec("reset role");
    await db.query("select set_config('request.jwt.claim.sub', $1, false)", [usuario ?? ""]);
    await db.exec(`set role ${papel}`);
    try {
      return await db.query<Record<string, unknown>>(sql, params);
    } finally {
      await db.exec("reset role");
    }
  };
}
