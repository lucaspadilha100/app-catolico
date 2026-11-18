import { describe, expect, it } from "vitest";
import obras from "./dados/arte-evangelho.json";
import salas from "./dados/galerias-evangelho.json";
import {
  arteDoTrecho,
  melhorArte,
  trechoDaCanonica,
  type ArteDoEvangelho,
  type GaleriaDoEvangelho,
} from "./arte";

const a = (
  titulo: string,
  livro: string,
  cap: number,
  de: number,
  ate: number
): ArteDoEvangelho => ({
  arquivo: `${titulo}.webp`,
  titulo,
  obra: "",
  livro,
  cap,
  de,
  ate,
  fonte: "",
});
const LISTA = [
  a("leprosos", "LUK", 17, 11, 19),
  a("samaritano", "LUK", 10, 25, 37),
  a("sermao", "MAT", 5, 1, 12),
  a("bemaventurancas", "MAT", 5, 3, 10),
  a("cruz", "JHN", 19, 17, 30),
];

const lista = obras as ArteDoEvangelho[];
const galerias = salas as GaleriaDoEvangelho[];

describe("pintura do Evangelho do dia", () => {
  it("lê a referência canônica, com capítulos que mudam", () => {
    expect(trechoDaCanonica("LUK 17:11-19")).toEqual({
      livro: "LUK",
      inicio: 17011,
      fim: 17019,
    });
    expect(trechoDaCanonica("JHN 18:1-19:42")).toEqual({
      livro: "JHN",
      inicio: 18001,
      fim: 19042,
    });
    expect(trechoDaCanonica("MAT 5:1-12a")).toEqual({
      livro: "MAT",
      inicio: 5001,
      fim: 5012,
    });
    expect(trechoDaCanonica("JHN 15:26-27;JHN 16:12-15")).toEqual({
      livro: "JHN",
      inicio: 15026,
      fim: 16015,
    });
  });

  it("escolhe a cena que mais coincide com o trecho", () => {
    expect(melhorArte(LISTA, "LUK 17:11-19")?.titulo).toBe("leprosos");
    expect(melhorArte(LISTA, "MAT 5:1-12a")?.titulo).toBe("sermao");
    expect(melhorArte(LISTA, "JHN 18:1-19:42")?.titulo).toBe("cruz");
    expect(melhorArte(LISTA, "MRK 1:1-8")).toBeNull();
    expect(melhorArte(LISTA, null)).toBeNull();
  });

  it("sem cena própria, cai na galeria do trecho, sempre a mesma para o mesmo trecho", () => {
    const g: GaleriaDoEvangelho[] = [
      {
        livro: "LUK",
        de: [9, 51],
        ate: [19, 27],
        titulo: "A caminho de Jerusalém",
        artes: ["leprosos.webp", "samaritano.webp"],
      },
    ];
    const r = arteDoTrecho(LISTA, g, "LUK 18:1-8");
    expect(r?.titulo).toBe("A caminho de Jerusalém");
    expect(["leprosos.webp", "samaritano.webp"]).toContain(r?.arquivo);
    expect(arteDoTrecho(LISTA, g, "LUK 18:1-8")).toEqual(r);
    expect(arteDoTrecho(LISTA, g, "LUK 17:11-19")?.titulo).toBe("leprosos");
  });

  it("a parábola das minas e a dos talentos têm pintura própria", () => {
    expect(arteDoTrecho(lista, galerias, "LUK 19:11-28")?.arquivo).toBe(
      "talentos-poorter.webp"
    );
    expect(arteDoTrecho(lista, galerias, "MAT 25:14-30")?.arquivo).toBe(
      "talentos-poorter.webp"
    );
  });
});
