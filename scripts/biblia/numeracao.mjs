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
  return NUMERACAO_MODERNA.has(livro) ? moderna[livro][capitulo - 1] : fonte.capitulos[capitulo - 1].length;
}

const DIVISAO_REFEITA = { MAT: [5, 17], MRK: [4, 8, 9], LUK: [17], JHN: [5, 6, 7, 11] };

export function mesmaDivisaoDaFonte(livro, capitulo) {
  return !DIVISAO_REFEITA[livro]?.includes(capitulo);
}

export function versiculosRestaurados(livro) {
  const caminho = join(raiz, "fontes/biblia/revisao", livro, "restaurados.json");
  try {
    return new Set(JSON.parse(readFileSync(caminho, "utf8")));
  } catch {
    return new Set();
  }
}
