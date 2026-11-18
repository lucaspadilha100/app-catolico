export interface ArteDoEvangelho {
  arquivo: string;
  titulo: string;
  obra: string;
  livro: string;
  cap: number;
  de: number;
  ate: number;
  fonte: string;
}

export interface GaleriaDoEvangelho {
  livro: string;
  de: [number, number];
  ate: [number, number];
  titulo: string;
  artes: string[];
}

export const FIM_DO_CAPITULO = 99;

const ponto = (cap: number, vers: number) => cap * 1000 + vers;

export function trechoDaCanonica(
  canonica: string
): { livro: string; inicio: number; fim: number } | null {
  const m = /^([1-3]?[A-Z]{2,3}) (\d+):(\d+)/.exec(canonica);
  if (!m) return null;
  const livro = m[1]!;
  const capInicial = Number(m[2]);
  const inicio = ponto(capInicial, Number(m[3]));
  let cap = capInicial;
  let fim = inicio;
  for (const parte of canonica
    .slice(m[0].length - m[3]!.length)
    .split(/[.,;]/)) {
    const outroLivro = /^\s*([1-3]?[A-Z]{2,3}) (.*)$/.exec(parte);
    if (outroLivro && outroLivro[1] !== livro) break;
    for (const lado of (outroLivro ? outroLivro[2]! : parte).split("-")) {
      const c = /^(\d+):(\d+)/.exec(lado.trim());
      if (c) {
        cap = Number(c[1]);
        fim = Math.max(fim, ponto(cap, Number(c[2])));
        continue;
      }
      const v = /^(\d+)/.exec(lado.trim());
      if (v) fim = Math.max(fim, ponto(cap, Number(v[1])));
    }
  }
  return { livro, inicio, fim };
}

export function melhorArte(
  lista: ArteDoEvangelho[],
  canonica: string | null
): ArteDoEvangelho | null {
  const t = canonica ? trechoDaCanonica(canonica) : null;
  if (!t) return null;
  let melhor: ArteDoEvangelho | null = null;
  let maior = 0;
  for (const a of lista) {
    if (a.livro !== t.livro) continue;
    const de = ponto(a.cap, a.de);
    const ate = ponto(a.cap, a.ate);
    const comum = Math.min(ate, t.fim) - Math.max(de, t.inicio) + 1;
    if (comum <= 0) continue;
    const nota = comum / (ate - de + 1) + comum / (t.fim - t.inicio + 1);
    if (nota > maior) {
      maior = nota;
      melhor = a;
    }
  }
  return melhor;
}

function numeroDoTrecho(texto: string): number {
  let h = 2166136261;
  for (let i = 0; i < texto.length; i++) {
    h ^= texto.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function galeriaDoTrecho(
  galerias: GaleriaDoEvangelho[],
  canonica: string
): GaleriaDoEvangelho | null {
  const t = trechoDaCanonica(canonica);
  if (!t) return null;
  let melhor: GaleriaDoEvangelho | null = null;
  let maior = 0;
  for (const g of galerias) {
    if (g.livro !== t.livro) continue;
    const de = ponto(...g.de);
    const ate = ponto(...g.ate);
    const comum = Math.min(ate, t.fim) - Math.max(de, t.inicio) + 1;
    if (comum <= 0) continue;
    const nota = comum + (de <= t.inicio && t.inicio <= ate ? 0.5 : 0);
    if (nota > maior) {
      maior = nota;
      melhor = g;
    }
  }
  return melhor;
}

export function arteDoTrecho(
  lista: ArteDoEvangelho[],
  galerias: GaleriaDoEvangelho[],
  canonica: string | null
): ArteDoEvangelho | null {
  if (!canonica) return null;
  const propria = melhorArte(lista, canonica);
  if (propria) return propria;
  const galeria =
    galeriaDoTrecho(galerias, canonica) ??
    galerias.find((g) => g.livro === "*") ??
    null;
  if (!galeria || galeria.artes.length === 0) return null;
  const arquivo =
    galeria.artes[numeroDoTrecho(canonica) % galeria.artes.length]!;
  const obra = lista.find((a) => a.arquivo === arquivo);
  return obra ? { ...obra, titulo: galeria.titulo } : null;
}

export async function arteDoEvangelho(
  canonica: string | null
): Promise<ArteDoEvangelho | null> {
  if (!canonica) return null;
  const [{ default: lista }, { default: galerias }] = await Promise.all([
    import("./dados/arte-evangelho.json"),
    import("./dados/galerias-evangelho.json"),
  ]);
  return arteDoTrecho(
    lista as ArteDoEvangelho[],
    galerias as GaleriaDoEvangelho[],
    canonica
  );
}

export const caminhoDaArte = (a: ArteDoEvangelho) =>
  `/imagens/evangelho/${a.arquivo}`;
