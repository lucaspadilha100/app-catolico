import { describe, expect, it } from "vitest";
import { LIVROS } from "./livros";
import { PLANOS, capitulosDoPlano, descreverDia, diaDoPlano, diasDoPlano } from "./planos";
import { palavrasDaBusca, trechosEncontrados, versiculoCombina } from "./buscaNoTexto";

describe("planos de leitura", () => {
  it("cada plano cobre todos os capítulos, sem repetir, no número de dias", () => {
    for (const p of PLANOS) {
      const dias = diasDoPlano(p);
      expect(dias).toHaveLength(p.dias);
      expect(dias.flat()).toEqual(capitulosDoPlano(p));
      expect(dias.every((d) => d.length > 0)).toBe(true);
    }
  });

  it("descreve o dia de leitura", () => {
    const salmos = diasDoPlano(PLANOS.find((p) => p.id === "salmos")!);
    expect(descreverDia(salmos[0]!)).toBe("Sl 1-5");
    const mt = LIVROS.find((l) => l.codigo === "MAT")!;
    const mc = LIVROS.find((l) => l.codigo === "MRK")!;
    expect(descreverDia([{ livro: mt, capitulo: 27 }, { livro: mt, capitulo: 28 }, { livro: mc, capitulo: 1 }])).toBe("Mt 27-28; Mc 1");
    expect(descreverDia([{ livro: mt, capitulo: 3 }])).toBe("Mt 3");
  });

  it("conta o dia do plano", () => {
    expect(diaDoPlano("2026-11-01", "2026-11-01")).toBe(1);
    expect(diaDoPlano("2026-11-01", "2026-11-11")).toBe(11);
  });
});

describe("busca no texto", () => {
  it("acha sem acento e marca os trechos", () => {
    const p = palavrasDaBusca("Coração, misericórdia!");
    expect(p).toEqual(["coracao", "misericordia"]);
    expect(versiculoCombina("Tende misericórdia de mim, ó Deus, pelo vosso coração", p)).toBe(true);
    expect(trechosEncontrados("O pão vivo; o pão do céu", ["pao"])).toEqual([[2, 5], [14, 17]]);
  });
});
