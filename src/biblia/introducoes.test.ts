import { describe, expect, it } from "vitest";
import { LIVROS } from "./livros";
import { carregarIntroducoes } from "./introducoes";

describe("introduções dos livros", () => {
  it("há uma para cada um dos 73 livros, em dois parágrafos, sem travessão", async () => {
    const todas = await carregarIntroducoes();
    expect(Object.keys(todas).sort()).toEqual(LIVROS.map((l) => l.codigo).sort());
    for (const [livro, partes] of Object.entries(todas)) {
      expect(partes, livro).toHaveLength(2);
      for (const p of partes) {
        expect(p, livro).not.toMatch(/[—–]/);
        expect(p, livro).not.toMatch(/ {2}/);
        expect(p.trim().length, livro).toBeGreaterThan(100);
      }
    }
  });
});
