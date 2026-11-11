import { describe, expect, it } from "vitest";
import { ORACOES } from "@/oracao/oracoes";
import { avancar, blocosDoModelo, ehUltima, primeiraPosicao, voltar } from "./roteiro";
import { escreverReferencia, lerReferencia } from "./referencia";

describe("roteiro de oração", () => {
  it("os modelos usam orações que existem e têm os 5 mistérios", () => {
    for (const m of ["terco", "terco-cantado", "misericordia"] as const) {
      const blocos = blocosDoModelo(m, "gozosos");
      for (const b of blocos) if (b.tipo === "oracao") expect(ORACOES[b.oracao], b.oracao).toBeDefined();
      if (m !== "misericordia") expect(blocos.filter((b) => b.tipo === "misterio")).toHaveLength(5);
    }
  });

  it("avança contando as Ave-Marias e pula os blocos vazios", () => {
    const blocos = blocosDoModelo("terco-cantado", "dolorosos");
    let p = primeiraPosicao(blocos);
    expect(blocos[p.passo]!.tipo).toBe("oracao");
    const ave = blocos.findIndex((b) => b.tipo === "oracao" && b.vezes === 3);
    while (p.passo !== ave) p = avancar(blocos, p);
    expect(p.conta).toBe(1);
    p = avancar(blocos, avancar(blocos, p));
    expect(p).toEqual({ passo: ave, conta: 3 });
    p = avancar(blocos, p);
    expect(blocos[p.passo]).toMatchObject({ oracao: "gloria" });
    expect(voltar(blocos, p)).toEqual({ passo: ave, conta: 3 });
    while (!ehUltima(blocos, p)) p = avancar(blocos, p);
    expect(blocos[p.passo]).toMatchObject({ oracao: "salve-rainha" });
  });

  it("lê referências como se escreve no Brasil", () => {
    expect(escreverReferencia(lerReferencia("Lc 1,26-38")!)).toBe("Lc 1,26-38");
    expect(escreverReferencia(lerReferencia("joão 3, 16")!)).toBe("Jo 3,16");
    expect(escreverReferencia(lerReferencia("Salmo 22")!)).toBe("Sl 22");
    expect(lerReferencia("Lc 99,1")).toBeNull();
    expect(lerReferencia("qualquer coisa")).toBeNull();
  });
});
