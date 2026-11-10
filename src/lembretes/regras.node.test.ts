import type { PGlite } from "@electric-sql/pglite";
import { beforeAll, describe, expect, it } from "vitest";
import { como as comoEm, criarBanco } from "@/conta/bancoDeTeste.node";

let db: PGlite;
let como: ReturnType<typeof comoEm>;
const ENDPOINT = "https://web.push.apple.com/abc123";

beforeAll(async () => {
  db = await criarBanco();
  como = comoEm(db);
});

describe("inscrições de lembretes", () => {
  it("o aparelho salva e troca os lembretes sem conta; ninguém lê a tabela", async () => {
    await como("anon", null, "select public.salvar_lembretes($1, $2, $3, 'America/Fortaleza', '{\"terco\": \"20:00\"}')", [ENDPOINT, "x".repeat(40), "y".repeat(16)]);
    await como("anon", null, "select public.salvar_lembretes($1, $2, $3, 'Lugar/Inventado', '{\"angelus\": true}')", [ENDPOINT, "x".repeat(40), "y".repeat(16)]);
    expect((await db.query("select fuso, lembretes from public.lembrete_inscricoes")).rows).toEqual([{ fuso: "America/Sao_Paulo", lembretes: { angelus: true } }]);
    await expect(como("anon", null, "select * from public.lembrete_inscricoes")).rejects.toThrow();
    await expect(como("authenticated", null, "select * from public.lembrete_inscricoes")).rejects.toThrow();
    await expect(como("anon", null, "select public.salvar_lembretes('http://inseguro', 'x', 'y', '', '{}')")).rejects.toThrow();
  });

  it("desligar apaga a inscrição", async () => {
    await como("anon", null, "select public.remover_lembretes($1)", [ENDPOINT]);
    expect((await db.query("select count(*)::int as n from public.lembrete_inscricoes")).rows[0]).toEqual({ n: 0 });
  });
});
