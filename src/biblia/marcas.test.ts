import { describe, expect, it } from "vitest";
import { lerChave, marcaViva, mesclarMarcas } from "./marcas";

describe("grifos e notas", () => {
  it("lê a chave do versículo", () => {
    expect(lerChave("1CO-13-4")).toEqual({ livro: "1CO", capitulo: 13, versiculo: 4 });
    expect(lerChave("PSA-22-1")).toEqual({ livro: "PSA", capitulo: 22, versiculo: 1 });
    expect(lerChave("x")).toBeNull();
  });

  it("vale a mudança mais nova, e apagar também é mudança", () => {
    const local = { "JHN-3-16": { cor: "amarelo" as const, em: 10 }, "MAT-5-3": { em: 30 } };
    const remoto = { "JHN-3-16": { cor: "azul" as const, em: 20 }, "MAT-5-3": { cor: "verde" as const, em: 25 }, "LUK-1-38": { nota: "Fiat", em: 5 } };
    const r = mesclarMarcas(local, remoto);
    expect(r["JHN-3-16"]!.cor).toBe("azul");
    expect(marcaViva(r["MAT-5-3"])).toBe(false);
    expect(r["LUK-1-38"]!.nota).toBe("Fiat");
  });
});
