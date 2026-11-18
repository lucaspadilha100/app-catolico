import { describe, expect, it } from "vitest";
import { capituloAtual, leituraNaNumeracaoAtual, marcasNaNumeracaoAtual, trechoNaNumeracaoAtual, versiculoAtual } from "./numeracao";
import { mesclar, naNumeracaoAtual } from "@/conta/sincronizar";
import { blocosNaNumeracaoAtual } from "@/roteiros/referencia";
import type { Bloco } from "@/roteiros/tipos";

describe("do número da Vulgata para o de hoje", () => {
  it("versículos", () => {
    expect(versiculoAtual("ISA", 9, 2)).toEqual([9, 1]);
    expect(versiculoAtual("ISA", 9, 1)).toEqual([8, 23]);
    expect(versiculoAtual("ISA", 8, 22)).toEqual([8, 22]);
    expect(versiculoAtual("ISA", 8, 22, true)).toEqual([8, 23]);
    expect(versiculoAtual("MAL", 4, 5)).toEqual([3, 23]);
    expect(versiculoAtual("JOL", 2, 28)).toEqual([3, 1]);
    expect(versiculoAtual("JOL", 3, 1)).toEqual([4, 1]);
    expect(versiculoAtual("MIC", 5, 2)).toEqual([5, 1]);
    expect(versiculoAtual("1KI", 4, 21)).toEqual([5, 1]);
    expect(versiculoAtual("GEN", 31, 55)).toEqual([32, 1]);
    expect(versiculoAtual("DAN", 5, 31)).toEqual([6, 1]);
    expect(versiculoAtual("DAN", 3, 91)).toEqual([3, 91]);
    expect(versiculoAtual("PSA", 22, 1)).toEqual([22, 1]);
    expect(versiculoAtual("MAT", 5, 3)).toEqual([5, 3]);
  });

  it("capítulos", () => {
    expect(capituloAtual("JOL", 3)).toBe(4);
    expect(capituloAtual("JOL", 2)).toBe(2);
    expect(capituloAtual("MAL", 4)).toBe(3);
    expect(capituloAtual("ISA", 9)).toBe(9);
  });

  it("trechos", () => {
    const tamanhos: Record<string, number> = { "ISA 8": 23, "ISA 9": 20 };
    const tamanho = (livro: string, c: number) => tamanhos[`${livro} ${c}`] ?? 30;
    expect(trechoNaNumeracaoAtual({ livro: "JOL", capitulo: 2, de: 28, ate: 32 }, tamanho)).toEqual({ livro: "JOL", capitulo: 3, de: 1, ate: 5 });
    expect(trechoNaNumeracaoAtual({ livro: "MAL", capitulo: 4, de: 1, ate: 6 }, tamanho)).toEqual({ livro: "MAL", capitulo: 3, de: 19, ate: 24 });
    expect(trechoNaNumeracaoAtual({ livro: "ISA", capitulo: 9, de: 2, ate: 7 }, tamanho)).toEqual({ livro: "ISA", capitulo: 9, de: 1, ate: 6 });
    expect(trechoNaNumeracaoAtual({ livro: "ISA", capitulo: 9, de: 1, ate: 7 }, tamanho)).toEqual({ livro: "ISA", capitulo: 9, de: 1, ate: 6 });
    expect(trechoNaNumeracaoAtual({ livro: "MAL", capitulo: 4, de: null, ate: null }, tamanho)).toEqual({ livro: "MAL", capitulo: 3, de: null, ate: null });
    expect(trechoNaNumeracaoAtual({ livro: "LUK", capitulo: 1, de: 26, ate: 38 }, tamanho)).toEqual({ livro: "LUK", capitulo: 1, de: 26, ate: 38 });
  });
});

describe("dados guardados passam uma vez para a numeração de hoje", () => {
  it("grifos e notas", () => {
    const antigas = {
      "ISA-9-2": { cor: "amarelo", em: 1 },
      "MAL-4-5": { nota: "Elias", em: 2 },
      "MAT-5-3": { cor: "verde", em: 3 },
      "JOS-4-23": { nota: "primeira", em: 4 },
      "JOS-4-24": { cor: "azul", em: 5 },
    };
    const novas = marcasNaNumeracaoAtual(antigas);
    expect(novas).toEqual({
      "ISA-9-1": { cor: "amarelo", em: 1 },
      "MAL-3-23": { nota: "Elias", em: 2 },
      "MAT-5-3": { cor: "verde", em: 3 },
      "JOS-4-23": { cor: "azul", em: 5, nota: "primeira" },
      numeracao: { em: 2 },
    });
    expect(marcasNaNumeracaoAtual(novas)).toBe(novas);
    expect(marcasNaNumeracaoAtual({})).toEqual({ numeracao: { em: 2 } });
  });

  it("capítulos lidos e onde parou", () => {
    const nova = leituraNaNumeracaoAtual({ lidos: { JOL: [1, 2, 3], MAL: [4], ISA: [9] }, ultimo: { livro: "JOL", capitulo: 3 } });
    expect(nova).toEqual({ lidos: { JOL: [1, 2, 4], MAL: [3], ISA: [9] }, ultimo: { livro: "JOL", capitulo: 4 }, numeracao: 2 });
    expect(leituraNaNumeracaoAtual(nova)).toBe(nova);
  });

  it("na sincronização, o valor antigo de outro aparelho também passa", () => {
    expect(JSON.parse(naNumeracaoAtual("santinho-marcas", '{"JOL-3-1":{"cor":"rosa","em":7}}'))).toEqual({ "JOL-4-1": { cor: "rosa", em: 7 }, numeracao: { em: 2 } });
    const jaNova = '{"JOL-3-1":{"cor":"rosa","em":7},"numeracao":{"em":2}}';
    expect(naNumeracaoAtual("santinho-marcas", jaNova)).toBe(jaNova);
    expect(naNumeracaoAtual("santinho-cofre", "XYZ")).toBe("XYZ");
    const r = JSON.parse(mesclar("santinho-leitura", '{"lidos":{"MAL":[4]},"ultimo":null}', '{"lidos":{"MAL":[1]},"ultimo":null,"numeracao":2}', true));
    expect(r).toEqual({ lidos: { MAL: [1, 3] }, ultimo: null, numeracao: 2 });
    const m = JSON.parse(mesclar("santinho-marcas", '{"ISA-9-2":{"cor":"verde","em":1}}', '{"ISA-9-1":{"cor":"azul","em":2},"numeracao":{"em":2}}', true));
    expect(m).toEqual({ "ISA-9-1": { cor: "azul", em: 2 }, numeracao: { em: 2 } });
  });

  it("leitura de roteiro", () => {
    const blocos: Bloco[] = [
      { id: "a", tipo: "leitura", referencia: "Jl 2,28-32" },
      { id: "b", tipo: "leitura", referencia: "Ml 4,5-6" },
      { id: "c", tipo: "leitura", referencia: "Is 9,1-6", numeracao: 2 },
      { id: "d", tipo: "leitura", referencia: "Lc 1,26-38" },
      { id: "e", tipo: "texto", rotulo: "texto", texto: "Is 9,2" },
    ];
    expect(blocosNaNumeracaoAtual(blocos)).toEqual([
      { id: "a", tipo: "leitura", referencia: "Jl 3,1-5", numeracao: 2 },
      { id: "b", tipo: "leitura", referencia: "Ml 3,23-24", numeracao: 2 },
      { id: "c", tipo: "leitura", referencia: "Is 9,1-6", numeracao: 2 },
      { id: "d", tipo: "leitura", referencia: "Lc 1,26-38", numeracao: 2 },
      { id: "e", tipo: "texto", rotulo: "texto", texto: "Is 9,2" },
    ]);
  });
});
