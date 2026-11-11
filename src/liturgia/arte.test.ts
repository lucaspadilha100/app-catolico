import { describe, expect, it } from "vitest";
import { melhorArte, trechoDaCanonica, type ArteDoEvangelho } from "./arte";

const a = (titulo: string, livro: string, cap: number, de: number, ate: number): ArteDoEvangelho => ({ arquivo: `${titulo}.webp`, titulo, obra: "", livro, cap, de, ate, fonte: "" });
const LISTA = [a("leprosos", "LUK", 17, 11, 19), a("samaritano", "LUK", 10, 25, 37), a("sermao", "MAT", 5, 1, 12), a("bemaventurancas", "MAT", 5, 3, 10), a("cruz", "JHN", 19, 17, 30)];

describe("pintura do Evangelho do dia", () => {
  it("lê a referência canônica, com capítulos que mudam", () => {
    expect(trechoDaCanonica("LUK 17:11-19")).toEqual({ livro: "LUK", inicio: 17011, fim: 17019 });
    expect(trechoDaCanonica("JHN 18:1-19:42")).toEqual({ livro: "JHN", inicio: 18001, fim: 19042 });
    expect(trechoDaCanonica("MAT 5:1-12a")).toEqual({ livro: "MAT", inicio: 5001, fim: 5012 });
  });

  it("escolhe a cena que mais coincide com o trecho", () => {
    expect(melhorArte(LISTA, "LUK 17:11-19")?.titulo).toBe("leprosos");
    expect(melhorArte(LISTA, "MAT 5:1-12a")?.titulo).toBe("sermao");
    expect(melhorArte(LISTA, "JHN 18:1-19:42")?.titulo).toBe("cruz");
    expect(melhorArte(LISTA, "MRK 1:1-8")).toBeNull();
    expect(melhorArte(LISTA, null)).toBeNull();
  });
});
