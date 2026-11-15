import { describe, expect, it } from "vitest";
import { valorDigitado } from "./Pix";

describe("valor digitado no PIX", () => {
  it("aceita vírgula ou ponto como decimal", () => {
    expect(valorDigitado("10,50")).toBe(10.5);
    expect(valorDigitado("10.50")).toBe(10.5);
    expect(valorDigitado("25.5")).toBe(25.5);
  });
  it("trata o separador de milhar", () => {
    expect(valorDigitado("1.050")).toBe(1050);
    expect(valorDigitado("1.050,00")).toBe(1050);
    expect(valorDigitado("1,050.00")).toBe(1050);
    expect(valorDigitado("50")).toBe(50);
    expect(valorDigitado("R$ 30")).toBe(30);
  });
});
