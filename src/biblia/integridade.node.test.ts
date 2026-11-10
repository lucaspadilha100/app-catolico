import { readFileSync } from "node:fs";
import { join } from "node:path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import dados from "../liturgia/dados/lecionario.json";
import { diaLiturgico } from "../liturgia/calendario";
import { deIso, paraIso, somaDias } from "../liturgia/datas";
import { leiturasDoDia, type Lecionario } from "../liturgia/lecionario";
import estado from "./dados/estado.json";
import { intervalosDaReferencia, textoDaReferencia } from "./texto";

const raiz = join(__dirname, "../..");
const ESTADO = estado as Record<string, { revisao: string; arquivo: string; versiculos: number[] }>;
const NUMERACAO_MODERNA = ["MAT", "MRK", "LUK", "JHN", "ACT", "2CO", "1TH", "2TH", "3JN"];

const livro = (codigo: string): string[][] =>
  JSON.parse(readFileSync(join(raiz, "public/biblia/f1", ESTADO[codigo]!.arquivo), "utf8")).capitulos;

const moderna: Record<string, number[]> = {};
for (const linha of readFileSync(join(raiz, "fontes/versificacao/org.vrs"), "utf8").split("\n")) {
  const [codigo, ...caps] = linha.trim().split(/\s+/);
  if (codigo && NUMERACAO_MODERNA.includes(codigo)) moderna[codigo] = caps.map((c: string) => Number(c.split(":")[1]));
}

const referencias = new Set<string>();
const lecionario = dados as unknown as Lecionario;
for (let d = deIso("2024-01-01")!; paraIso(d) <= "2035-12-31"; d = somaDias(d, 1)) {
  for (const missa of leiturasDoDia(diaLiturgico(d), lecionario)) {
    for (const l of missa.leituras) if (l.canonica) referencias.add(l.canonica);
  }
}

beforeAll(() => {
  vi.stubGlobal("fetch", async (url: string) => ({
    ok: true,
    json: async () => JSON.parse(readFileSync(join(raiz, "public", url), "utf8")),
  }));
});

describe("integridade da Bíblia", () => {
  it.each(NUMERACAO_MODERNA)("%s tem os mesmos versículos das Bíblias católicas de hoje", (codigo) => {
    const capitulos = livro(codigo);
    expect(capitulos.map((c) => c.length)).toEqual(moderna[codigo]);
    capitulos.forEach((cap, c) => cap.forEach((v, i) => expect(v.trim(), `${codigo} ${c + 1},${i + 1}`).not.toBe("")));
  });

  it("cada versículo de Evangelho citado no lecionário existe e tem texto", () => {
    const faltando: string[] = [];
    for (const ref of referencias) {
      for (const { livro: codigo, de, ate } of intervalosDaReferencia(ref)) {
        if (!NUMERACAO_MODERNA.includes(codigo)) continue;
        const capitulos = livro(codigo);
        for (let c = de[0]; c <= ate[0]; c++) {
          const fim = c === ate[0] ? ate[1] : capitulos[c - 1]!.length;
          for (let v = c === de[0] ? de[1] : 1; v <= fim; v++) {
            if (!capitulos[c - 1]?.[v - 1]?.trim()) faltando.push(`${ref} → ${codigo} ${c},${v}`);
          }
        }
      }
    }
    expect(faltando).toEqual([]);
  });

  it("toda leitura de 2024 a 2035 encontra o seu texto", async () => {
    const vazias: string[] = [];
    for (const ref of referencias) {
      const trechos = await textoDaReferencia(ref);
      if (!trechos.some((t) => t.versiculos.length)) vazias.push(ref);
    }
    expect(vazias).toEqual([]);
  });
});
