import { describe, expect, it } from "vitest";
import { colunas, resumo } from "./usoGrafico";

const dias = [
  { dia: "2026-11-10", aparelhos: 21 },
  { dia: "2026-11-11", aparelhos: 8 },
  { dia: "2026-11-13", aparelhos: 25 },
];

describe("gráfico de uso", () => {
  it("7 e 30 dias: uma coluna por dia, com zero onde não houve registro", () => {
    const c = colunas(dias, "2026-11-13", 7);
    expect(c).toHaveLength(7);
    expect(c.at(-1)).toEqual({ rotulo: "13/11", detalhe: "13/11", valor: 25 });
    expect(c.at(-2)?.valor).toBe(0);
    expect(colunas(dias, "2026-11-13", 30)).toHaveLength(30);
  });
  it("90 dias vira semanas e 1 ano vira meses, sempre com média por dia", () => {
    const s = colunas(dias, "2026-11-13", 90);
    expect(s.length).toBeLessThanOrEqual(13);
    expect(s.at(-1)?.valor).toBeGreaterThan(0);
    const m = colunas(dias, "2026-11-13", 365);
    expect(m.length).toBeLessThanOrEqual(13);
    expect(m.at(-1)?.rotulo).toBe("nov/26");
  });
  it("resumo: hoje, média desde o primeiro registro e o melhor dia", () => {
    const r = resumo(dias, "2026-11-13", 30);
    expect(r.hoje).toBe(25);
    expect(r.media).toBe(13.5);
    expect(r.melhor).toEqual({ valor: 25, dia: "13/11" });
  });
});
