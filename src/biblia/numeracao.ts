import tabela from "./dados/numeracao-antiga.json";

interface Mudancas {
  capitulos?: number[][];
  faixas: number[][];
  partidos?: number[][];
}

const TABELA = tabela as Record<string, Mudancas>;

export const NUMERACAO_DOS_DADOS = 2;
export const CHAVE_DA_NUMERACAO = "numeracao";

export function versiculoAtual(livro: string, capitulo: number, versiculo: number, fim = false): [number, number] {
  const mudancas = TABELA[livro];
  if (!mudancas) return [capitulo, versiculo];
  if (fim) for (const [c, v, cf, vf] of mudancas.partidos ?? []) if (c === capitulo && v === versiculo) return [cf!, vf!];
  for (const [c, de, ate, cn, vn] of mudancas.faixas) if (c === capitulo && versiculo >= de! && versiculo <= ate!) return [cn!, vn! + versiculo - de!];
  return [capitulo, versiculo];
}

export function capituloAtual(livro: string, capitulo: number): number {
  return TABELA[livro]?.capitulos?.find(([c]) => c === capitulo)?.[1] ?? capitulo;
}

interface ComMarca {
  em: number;
  nota?: string;
}

export function marcasNaNumeracaoAtual<M extends ComMarca>(marcas: Record<string, M>): Record<string, M> {
  if ((marcas[CHAVE_DA_NUMERACAO]?.em ?? 0) >= NUMERACAO_DOS_DADOS) return marcas;
  const r: Record<string, M> = {};
  for (const [chave, marca] of Object.entries(marcas)) {
    const m = /^([1-3]?[A-Z]{2,3})-(\d+)-(\d+)$/.exec(chave);
    if (!m) {
      if (chave !== CHAVE_DA_NUMERACAO) r[chave] = marca;
      continue;
    }
    const [c, v] = versiculoAtual(m[1]!, Number(m[2]), Number(m[3]));
    const nova = `${m[1]}-${c}-${v}`;
    const outra = r[nova];
    if (!outra) r[nova] = marca;
    else {
      const [nova1, velha] = marca.em >= outra.em ? [marca, outra] : [outra, marca];
      r[nova] = !nova1.nota && velha.nota ? { ...nova1, nota: velha.nota } : nova1;
    }
  }
  r[CHAVE_DA_NUMERACAO] = { em: NUMERACAO_DOS_DADOS } as M;
  return r;
}

interface LeituraGuardada {
  lidos?: Record<string, number[]>;
  ultimo?: { livro: string; capitulo: number } | null;
  numeracao?: number;
}

export function leituraNaNumeracaoAtual<L extends LeituraGuardada>(leitura: L): L {
  if ((leitura.numeracao ?? 0) >= NUMERACAO_DOS_DADOS) return leitura;
  const lidos: Record<string, number[]> = {};
  for (const [livro, caps] of Object.entries(leitura.lidos ?? {}))
    lidos[livro] = [...new Set((caps ?? []).map((c) => capituloAtual(livro, c)))].sort((a, b) => a - b);
  const ultimo = leitura.ultimo ? { ...leitura.ultimo, capitulo: capituloAtual(leitura.ultimo.livro, leitura.ultimo.capitulo) } : (leitura.ultimo ?? null);
  return { ...leitura, lidos, ultimo, numeracao: NUMERACAO_DOS_DADOS };
}

export interface Trecho {
  livro: string;
  capitulo: number;
  de: number | null;
  ate: number | null;
}

export function trechoNaNumeracaoAtual(t: Trecho, versiculosDoCapitulo: (livro: string, capitulo: number) => number): Trecho {
  if (!TABELA[t.livro]) return t;
  if (t.de === null) return { ...t, capitulo: capituloAtual(t.livro, t.capitulo) };
  const [c1, v1] = versiculoAtual(t.livro, t.capitulo, t.de);
  const [c2, v2] = versiculoAtual(t.livro, t.capitulo, t.ate ?? t.de, true);
  if (c1 === c2) return { ...t, capitulo: c1, de: v1, ate: v2 };
  const noPrimeiro = versiculosDoCapitulo(t.livro, c1) - v1 + 1;
  return noPrimeiro >= v2 ? { ...t, capitulo: c1, de: v1, ate: versiculosDoCapitulo(t.livro, c1) } : { ...t, capitulo: c2, de: 1, ate: v2 };
}
