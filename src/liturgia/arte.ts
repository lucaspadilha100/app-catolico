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

const ponto = (cap: number, vers: number) => cap * 1000 + vers;

export function trechoDaCanonica(canonica: string): { livro: string; inicio: number; fim: number } | null {
  const m = /^([1-3]?[A-Z]{2,3}) (\d+):(\d+)/.exec(canonica);
  if (!m) return null;
  const livro = m[1]!;
  const capInicial = Number(m[2]);
  const inicio = ponto(capInicial, Number(m[3]));
  let cap = capInicial;
  let fim = inicio;
  for (const parte of canonica.slice(m[0].length - m[3]!.length).split(/[.,]/)) {
    for (const lado of parte.split("-")) {
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

export function melhorArte(lista: ArteDoEvangelho[], canonica: string | null): ArteDoEvangelho | null {
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

export async function arteDoEvangelho(canonica: string | null): Promise<ArteDoEvangelho | null> {
  if (!canonica) return null;
  const { default: lista } = await import("./dados/arte-evangelho.json");
  return melhorArte(lista as ArteDoEvangelho[], canonica);
}

export const caminhoDaArte = (a: ArteDoEvangelho) => `/imagens/evangelho/${a.arquivo}`;
