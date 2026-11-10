import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "../..");

export const NUMERACAO_MODERNA = new Set(["MAT", "MRK", "LUK", "JHN"]);

const moderna = {};
for (const linha of readFileSync(join(raiz, "fontes/versificacao/org.vrs"), "utf8").split("\n")) {
  const [livro, ...caps] = linha.trim().split(/\s+/);
  if (NUMERACAO_MODERNA.has(livro)) moderna[livro] = caps.map((c) => Number(c.split(":")[1]));
}

export function versiculosEsperados(livro, capitulo, fonte) {
  if (NUMERACAO_MODERNA.has(livro)) return moderna[livro][capitulo - 1];
  const acrescentados = [...lista(livro, "acrescentados.json")].filter((r) => r.startsWith(`${capitulo},`)).length;
  return fonte.capitulos[capitulo - 1].length + acrescentados;
}

const DIVISAO_REFEITA = { MAT: [5, 17], MRK: [4, 8, 9], LUK: [17], JHN: [5, 6, 7, 11] };

export function mesmaDivisaoDaFonte(livro, capitulo) {
  return !DIVISAO_REFEITA[livro]?.includes(capitulo);
}

function lista(livro, arquivo) {
  try {
    return new Set(JSON.parse(readFileSync(join(raiz, "fontes/biblia/revisao", livro, arquivo), "utf8")));
  } catch {
    return new Set();
  }
}

export const versiculosRestaurados = (livro) => lista(livro, "restaurados.json");
export const versiculosSemNota = (livro) => lista(livro, "notas-removidas.json");
