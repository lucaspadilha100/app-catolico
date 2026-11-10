import { describe, expect, it } from "vitest";
import { mesclar } from "./sincronizar";

describe("mesclar quando os dois lados mudaram", () => {
  it("dias de oração e santos de devoção: a união", () => {
    expect(mesclar("santinho-dias-de-oracao", '["2026-11-01","2026-11-03"]', '["2026-11-02","2026-11-03"]', true)).toBe('["2026-11-01","2026-11-02","2026-11-03"]');
  });
  it("terços rezados: o maior de cada", () => {
    expect(JSON.parse(mesclar("santinho-tercos-rezados", '{"rosario":5,"misericordia":1}', '{"rosario":7}', true))).toEqual({ rosario: 7, misericordia: 1 });
  });
  it("falecidos: junta pelo id", () => {
    const r = JSON.parse(mesclar("santinho-falecidos", '[{"id":"a","nome":"A"}]', '[{"id":"b","nome":"B"}]', false));
    expect(r.map((f: { id: string }) => f.id).sort()).toEqual(["a", "b"]);
  });
  it("novenas: junta os dias rezados", () => {
    const r = JSON.parse(mesclar("santinho-devocoes", '{"novena:x":{"inicio":"2026-10-03","feitos":[1,2]}}', '{"novena:x":{"inicio":"2026-10-03","feitos":[3]}}', true));
    expect(r["novena:x"].feitos).toEqual([1, 2, 3]);
  });
  it("Bíblia: junta os capítulos lidos", () => {
    const r = JSON.parse(mesclar("santinho-leitura", '{"lidos":{"MAT":[1,2]},"ultimo":{"livro":"MAT","capitulo":2}}', '{"lidos":{"MAT":[3],"JHN":[1]},"ultimo":null}', true));
    expect(r.lidos).toEqual({ MAT: [1, 2, 3], JHN: [1] });
    expect(r.ultimo).toEqual({ livro: "MAT", capitulo: 2 });
  });

  it("cofre e preferências: o mais recente", () => {
    expect(mesclar("santinho-cofre", "LOCAL", "REMOTO", true)).toBe("LOCAL");
    expect(mesclar("santinho-cofre", "LOCAL", "REMOTO", false)).toBe("REMOTO");
  });
});
