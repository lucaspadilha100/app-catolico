import { describe, expect, it } from "vitest";
import { dia } from "@/liturgia/datas";
import { completouSemana, diasSeguidos, podePedirApoio } from "./momento";

const hoje = dia(2026, 11, 13);
const base = { ultimo: null, hoje, apoiador: false, nativo: false };

describe("quando pedir apoio", () => {
  it("pede quem nunca recebeu o pedido", () => {
    expect(podePedirApoio(base)).toBe(true);
  });

  it("no máximo uma vez a cada 30 dias", () => {
    expect(podePedirApoio({ ...base, ultimo: "2026-11-13" })).toBe(false);
    expect(podePedirApoio({ ...base, ultimo: "2026-10-15" })).toBe(false);
    expect(podePedirApoio({ ...base, ultimo: "2026-10-14" })).toBe(true);
    expect(podePedirApoio({ ...base, ultimo: "2025-01-01" })).toBe(true);
  });

  it("data guardada inválida não impede o pedido", () => {
    expect(podePedirApoio({ ...base, ultimo: "lixo" })).toBe(true);
  });

  it("nunca para apoiador", () => {
    expect(podePedirApoio({ ...base, apoiador: true })).toBe(false);
    expect(podePedirApoio({ ...base, apoiador: true, ultimo: "2025-01-01" })).toBe(false);
  });

  it("nunca no app nativo", () => {
    expect(podePedirApoio({ ...base, nativo: true })).toBe(false);
    expect(podePedirApoio({ ...base, nativo: true, ultimo: "2025-01-01" })).toBe(false);
  });
});

describe("dias seguidos com o terço", () => {
  const semana = ["2026-11-07", "2026-11-08", "2026-11-09", "2026-11-10", "2026-11-11", "2026-11-12", "2026-11-13"];

  it("conta para trás a partir de hoje e para no primeiro dia sem terço", () => {
    expect(diasSeguidos(semana, hoje)).toBe(7);
    expect(diasSeguidos(semana.filter((d) => d !== "2026-11-10"), hoje)).toBe(3);
    expect(diasSeguidos(semana.slice(0, 6), hoje)).toBe(0);
    expect(diasSeguidos([], hoje)).toBe(0);
  });

  it("a semana se completa no 7º, no 14º, no 21º dia", () => {
    expect([0, 6, 7, 8, 13, 14, 21].map(completouSemana)).toEqual([false, false, true, false, false, true, true]);
  });
});
