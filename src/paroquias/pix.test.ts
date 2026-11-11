import { describe, expect, it } from "vitest";
import { chaveValida, codigoPix, normalizarChave, textoDoPix, tipoDaChave } from "./pix";

describe("PIX copia e cola", () => {
  it("bate com o exemplo do Banco Central", () => {
    expect(codigoPix({ chave: "123e4567-e12b-12d1-a456-426655440000", nome: "Fulano de Tal", cidade: "BRASILIA", nomeCru: true })).toBe(
      "00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-4266554400005204000053039865802BR5913Fulano de Tal6008BRASILIA62070503***63041D3D",
    );
  });

  it("leva o valor quando há", () => {
    const c = codigoPix({ chave: "12345678000199", nome: "Paróquia São José", cidade: "Natal", valor: 50 });
    expect(c).toContain("540550.00");
    expect(c).toContain("5917PAROQUIA SAO JOSE");
    expect(c).toContain("6005NATAL");
  });

  it("limpa nome e cidade", () => {
    expect(textoDoPix("Paróquia de Nossa Senhora da Apresentação", 25)).toBe("PAROQUIA DE NOSSA SENHORA");
    expect(textoDoPix("São Gonçalo do Amarante", 15)).toBe("SAO GONCALO DO");
  });

  it("normaliza e reconhece a chave", () => {
    expect(normalizarChave("cnpj", "12.345.678/0001-99")).toBe("12345678000199");
    expect(normalizarChave("telefone", "(84) 99999-0000")).toBe("+5584999990000");
    expect(normalizarChave("telefone", "+55 84 99999-0000")).toBe("+5584999990000");
    expect(normalizarChave("email", " Secretaria@Paroquia.org ")).toBe("secretaria@paroquia.org");
    expect(tipoDaChave("+5584999990000")).toBe("telefone");
    expect(tipoDaChave("12345678901")).toBe("cpf");
    expect(chaveValida("12345678000199")).toBe(true);
    expect(chaveValida("chave qualquer")).toBe(false);
  });
});
