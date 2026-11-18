import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "../..");

const NT = ["MAT", "MRK", "LUK", "JHN", "ACT", "2CO", "1TH", "2TH", "3JN"];
const AT = ["GEN", "EXO", "LEV", "NUM", "DEU", "JOS", "JDG", "RUT", "1SA", "2SA", "1KI", "2KI", "1CH", "2CH", "EZR", "NEH", "JOB", "PRO", "ECC", "SNG", "ISA", "JER", "LAM", "EZK", "HOS", "JOL", "AMO", "OBA", "JON", "MIC", "NAM", "HAB", "ZEP", "HAG", "ZEC", "MAL"];

export const NUMERACAO_MODERNA = new Set([...NT, ...AT]);

export const NUMERACAO_ANTIGA = JSON.parse(readFileSync(join(raiz, "src/biblia/dados/numeracao-antiga.json"), "utf8"));

const moderna = {};
for (const linha of readFileSync(join(raiz, "fontes/versificacao/org.vrs"), "utf8").split("\n")) {
  const [livro, ...caps] = linha.trim().split(/\s+/);
  if (NUMERACAO_MODERNA.has(livro)) moderna[livro] = caps.map((c) => Number(c.split(":")[1]));
}

export const versiculosModernos = (livro) => moderna[livro];

const renumerado = (livro) => AT.includes(livro) || livro in NUMERACAO_ANTIGA;

export function paraNumeracaoAtual(livro, capitulo, versiculo) {
  for (const [c, de, ate, cn, vn] of NUMERACAO_ANTIGA[livro]?.faixas ?? []) {
    if (c === capitulo && versiculo >= de && versiculo <= ate) return [cn, vn + versiculo - de];
  }
  return [capitulo, versiculo];
}

const cacheFonte = new WeakMap();
const refeitosPorLivro = new Map();
export function fonteNaNumeracaoAtual(livro, fonte) {
  if (!renumerado(livro)) return fonte.capitulos;
  if (cacheFonte.has(fonte)) return cacheFonte.get(fonte);
  const tamanhos = moderna[livro] ? [...moderna[livro]] : fonte.capitulos.map(() => 0);
  const partes = tamanhos.map((n) => Array.from({ length: n }, () => []));
  const fim = new Map((NUMERACAO_ANTIGA[livro]?.partidos ?? []).map(([c, v, cf, vf]) => [`${c}:${v}`, [cf, vf]]));
  fonte.capitulos.forEach((cap, c) =>
    cap.forEach((texto, v) => {
      const [cn, vn] = paraNumeracaoAtual(livro, c + 1, v + 1);
      const [cf, vf] = fim.get(`${c + 1}:${v + 1}`) ?? [cn, vn];
      while (partes.length < cf) partes.push([]);
      for (const [cc, vv] of [[cn, vn], [cf, vf]]) while (partes[cc - 1].length < vv) partes[cc - 1].push([]);
      partes[cn - 1][vn - 1].push({ texto, inteiro: !fim.has(`${c + 1}:${v + 1}`) });
      if (cf !== cn || vf !== vn) partes[cf - 1][vf - 1].push({ texto: "", inteiro: false });
    }),
  );
  const capitulos = partes.map((cap) => cap.map((p) => p.map((x) => x.texto).filter(Boolean).join(" ")));
  const refeitos = new Set();
  partes.forEach((cap, c) => {
    if (cap.some((p) => p.length !== 1 || !p[0].inteiro)) refeitos.add(c + 1);
  });
  cacheFonte.set(fonte, capitulos);
  refeitosPorLivro.set(livro, refeitos);
  return capitulos;
}

export function versiculosEsperados(livro, capitulo, fonte) {
  if (NT.includes(livro)) return moderna[livro][capitulo - 1];
  if (renumerado(livro)) return fonteNaNumeracaoAtual(livro, fonte)[capitulo - 1]?.length ?? 0;
  const acrescentados = [...lista(livro, "acrescentados.json")].filter((r) => r.startsWith(`${capitulo},`)).length;
  return fonte.capitulos[capitulo - 1].length + acrescentados;
}

const DIVISAO_REFEITA = { MAT: [5, 17], MRK: [4, 8, 9], LUK: [17], JHN: [5, 6, 7, 11], ACT: [7, 14, 19], "2CO": [1], "1TH": [4], "2TH": [2], "3JN": [1] };

export function mesmaDivisaoDaFonte(livro, capitulo, fonte) {
  if (renumerado(livro) && fonte) {
    fonteNaNumeracaoAtual(livro, fonte);
    return !refeitosPorLivro.get(livro).has(capitulo);
  }
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
