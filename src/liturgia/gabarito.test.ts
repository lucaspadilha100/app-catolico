import { describe, expect, it } from "vitest";
import gabarito from "./gabarito/brasil-2024-2027.json";
import { dia } from "./datas";
import { diaLiturgico, type CorLiturgica } from "./calendario";

const COR: Record<CorLiturgica, string> = { branco: "b", vermelho: "v", verde: "g", roxo: "r", rosa: "p" };

function codigo(ano: number, mmdd: string): string {
  const l = diaLiturgico(dia(ano, Number(mmdd.slice(0, 2)), Number(mmdd.slice(2))));
  const g = l.celebracao?.grau;
  const grau = g === "solenidade" ? "S" : g === "festa" || g === "festa-do-senhor" ? "F" : g === "memoria" ? "M" : "-";
  return grau + COR[l.cor];
}

describe("calendário do Brasil confere com o publicado (2024 a 2027)", () => {
  for (const [ano, dias] of Object.entries(gabarito as Record<string, Record<string, string>>)) {
    it(ano, () => {
      const diferencas = Object.entries(dias)
        .map(([mmdd, esperado]) => ({ mmdd, esperado, obtido: codigo(Number(ano), mmdd) }))
        .filter((x) => x.esperado !== x.obtido);
      expect(diferencas).toEqual([]);
    });
  }
});
