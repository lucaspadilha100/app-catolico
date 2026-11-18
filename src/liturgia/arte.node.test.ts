import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import obras from "./dados/arte-evangelho.json";
import salas from "./dados/galerias-evangelho.json";
import dados from "./dados/lecionario.json";
import { dia, paraIso, somaDias } from "./datas";
import { diaLiturgico } from "./calendario";
import { leiturasDoDia, type Lecionario } from "./lecionario";
import {
  FIM_DO_CAPITULO,
  arteDoTrecho,
  galeriaDoTrecho,
  type ArteDoEvangelho,
  type GaleriaDoEvangelho,
} from "./arte";

const lista = obras as ArteDoEvangelho[];
const galerias = salas as GaleriaDoEvangelho[];
const lecionario = dados as unknown as Lecionario;
const ULTIMO_CAPITULO: Record<string, number> = {
  MAT: 28,
  MRK: 16,
  LUK: 24,
  JHN: 21,
};
const pasta = new URL("../../public/imagens/evangelho/", import.meta.url);

describe("acervo do Evangelho do dia", () => {
  it("toda pintura existe e tem crédito", () => {
    for (const obra of lista) {
      expect(existsSync(new URL(obra.arquivo, pasta)), obra.arquivo).toBe(true);
      expect(obra.obra, obra.arquivo).not.toBe("");
      expect(obra.fonte, obra.arquivo).toMatch(
        /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/
      );
    }
  });

  it("toda pintura de galeria está no acervo", () => {
    const arquivos = new Set(lista.map((x) => x.arquivo));
    for (const g of galerias) {
      expect(g.artes.length, g.titulo).toBeGreaterThan(0);
      for (const arquivo of g.artes)
        expect(arquivos.has(arquivo), `${g.titulo}: ${arquivo}`).toBe(true);
    }
  });

  it("as galerias cobrem os quatro Evangelhos inteiros, sem buraco", () => {
    for (const [livro, ultimo] of Object.entries(ULTIMO_CAPITULO)) {
      const doLivro = galerias
        .filter((g) => g.livro === livro)
        .sort((x, y) => x.de[0] - y.de[0] || x.de[1] - y.de[1]);
      let esperado: [number, number] = [1, 1];
      for (const g of doLivro) {
        expect(g.de, `${livro} ${g.titulo}`).toEqual(esperado);
        const [cap, vers] = g.ate;
        esperado = vers === FIM_DO_CAPITULO ? [cap + 1, 1] : [cap, vers + 1];
      }
      expect(esperado, livro).toEqual([ultimo + 1, 1]);
    }
  });

  it("todo Evangelho do lecionário tem pintura", () => {
    const evangelhos = new Set<string>();
    for (const grupo of Object.values(lecionario.dias))
      for (const tabela of Object.values(grupo))
        for (const ref of Object.values(tabela))
          if (/^(MAT|MRK|LUK|JHN) \d+:\d+[a-z]?[-.,]/.test(ref))
            evangelhos.add(ref);
    expect(evangelhos.size).toBeGreaterThan(300);
    for (const ref of evangelhos)
      expect(arteDoTrecho(lista, galerias, ref), ref).not.toBeNull();
  });

  it("todo dia de 2026 e 2027 mostra uma pintura no Evangelho da missa", () => {
    const semArte: string[] = [];
    for (let d = dia(2026, 1, 1); d < dia(2028, 1, 1); d = somaDias(d, 1)) {
      const missa = leiturasDoDia(diaLiturgico(d), lecionario)[0];
      const canonica =
        missa?.leituras.find(
          (x) => x.tipo === "evangelho" && !x.ou && x.forma !== "breve"
        )?.canonica ?? null;
      const arte = arteDoTrecho(lista, galerias, canonica);
      if (!arte || !existsSync(new URL(arte.arquivo, pasta)))
        semArte.push(`${paraIso(d)} ${canonica}`);
    }
    expect(semArte).toEqual([]);
  });

  it("a galeria é a do trecho do dia", () => {
    expect(galeriaDoTrecho(galerias, "JHN 15:1-8")?.titulo).toBe(
      "Jesus fala aos discípulos na Ceia"
    );
    expect(galeriaDoTrecho(galerias, "MAT 5:13-16")?.titulo).toBe(
      "O Sermão da Montanha"
    );
    expect(galeriaDoTrecho(galerias, "LUK 15:1-32")?.titulo).toBe(
      "As parábolas da misericórdia"
    );
  });
});
