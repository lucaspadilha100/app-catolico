import { describe, expect, it } from "vitest";
import mapa from "./dados/mapa-hebraico.json";
import { equilibrarAspas, intervalosDaReferencia, paraVulgata, type MapaHebraico } from "./texto";
import { LIVROS, livroPorSlug } from "./livros";

describe("referências", () => {
  it("lê capítulos, saltos e letras", () => {
    expect(intervalosDaReferencia("ISA 63:16b-17;ISA 63:19;64:2b-7")).toEqual([
      { livro: "ISA", de: [63, 16], ate: [63, 17] },
      { livro: "ISA", de: [63, 19], ate: [63, 19] },
      { livro: "ISA", de: [64, 2], ate: [64, 7] },
    ]);
    expect(intervalosDaReferencia("1TH 3:12-4:2")).toEqual([{ livro: "1TH", de: [3, 12], ate: [4, 2] }]);
    expect(intervalosDaReferencia("cf. LUK 2:19")).toEqual([{ livro: "LUK", de: [2, 19], ate: [2, 19] }]);
  });

  it("oração de Ester vai para o capítulo 14 da Vulgata", () => {
    expect(intervalosDaReferencia("EST 4:17k-17m.17r-17t")).toEqual([
      { livro: "EST", de: [14, 1], ate: [14, 3] },
      { livro: "EST", de: [14, 8], ate: [14, 10] },
    ]);
  });
});

describe("numeração hebraica para a da Vulgata", () => {
  const m = mapa as unknown as MapaHebraico;
  it("salmos", () => {
    expect(paraVulgata("PSA", 23, 1, m)).toEqual([22, 1]);
    expect(paraVulgata("PSA", 51, 3, m)).toEqual([50, 3]);
    expect(paraVulgata("PSA", 10, 1, m)).toEqual([9, 22]);
    expect(paraVulgata("PSA", 116, 12, m)).toEqual([115, 12]);
    expect(paraVulgata("PSA", 115, 1, m)).toEqual([113, 9]);
    expect(paraVulgata("PSA", 1, 1, m)).toEqual([1, 1]);
  });

  it("livros sem diferença ficam iguais", () => {
    expect(paraVulgata("MRK", 1, 14, m)).toEqual([1, 14]);
  });
});

describe("livros", () => {
  it("73 livros com endereço próprio", () => {
    expect(LIVROS).toHaveLength(73);
    expect(new Set(LIVROS.map((l) => l.slug)).size).toBe(73);
    expect(livroPorSlug("jo")?.codigo).toBe("JOB");
    expect(livroPorSlug("joao")?.codigo).toBe("JHN");
  });
});

describe("aspas de um trecho", () => {
  it("abre a fala que começou antes e fecha a que continua depois", () => {
    const anteriores = ["Jesus disse: “Escutai.", "Um homem tinha dois filhos."];
    expect(equilibrarAspas(anteriores, ["Disse o mais novo: ‘Pai, dá-me a parte.’", "E ele repartiu."])).toEqual([
      "“Disse o mais novo: ‘Pai, dá-me a parte.’",
      "E ele repartiu.”",
    ]);
  });

  it("não mexe no trecho que já está completo nem no apóstrofo", () => {
    const trecho = ["Ele disse: “Bebei d’água.”"];
    expect(equilibrarAspas(["Veio a Jesus."], trecho)).toEqual(trecho);
  });
});
