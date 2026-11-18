import { livrosQueCombinam } from "@/biblia/busca";
import { NUMERACAO_DOS_DADOS, trechoNaNumeracaoAtual } from "@/biblia/numeracao";
import { ESTADO_DOS_LIVROS } from "@/biblia/progresso";
import { carregarLivro } from "@/biblia/texto";
import type { Livro } from "@/biblia/livros";
import type { Bloco } from "./tipos";

export interface Passagem {
  livro: Livro;
  capitulo: number;
  de: number | null;
  ate: number | null;
}

export function lerReferencia(texto: string, numeracaoAntiga = false): Passagem | null {
  const m = /^\s*(.+?)\s*(\d+)\s*(?:[,:]\s*(\d+)\s*(?:-\s*(\d+))?)?\s*$/.exec(texto);
  if (!m) return null;
  const livro = livrosQueCombinam(m[1]!)[0];
  if (!livro) return null;
  const capitulo = Number(m[2]);
  if (capitulo < 1 || capitulo > livro.capitulos + (numeracaoAntiga ? 1 : 0)) return null;
  const de = m[3] ? Number(m[3]) : null;
  const ate = m[4] ? Number(m[4]) : de;
  if (de !== null && ate !== null && ate < de) return null;
  return { livro, capitulo, de, ate };
}

export function escreverReferencia(p: Passagem): string {
  const abrev = p.livro.codigo === "PSA" ? "Sl" : p.livro.abreviatura;
  if (p.de === null) return `${abrev} ${p.capitulo}`;
  return p.ate !== null && p.ate !== p.de ? `${abrev} ${p.capitulo},${p.de}-${p.ate}` : `${abrev} ${p.capitulo},${p.de}`;
}

export async function versiculosDa(p: Passagem): Promise<{ numero: number; texto: string }[]> {
  const livro = await carregarLivro(p.livro.codigo);
  const cap = livro.capitulos[p.capitulo - 1] ?? [];
  const de = p.de ?? 1;
  const ate = Math.min(p.ate ?? cap.length, cap.length);
  const r: { numero: number; texto: string }[] = [];
  for (let v = de; v <= ate; v++) if (cap[v - 1]) r.push({ numero: v, texto: cap[v - 1]! });
  return r;
}

const versiculosDoCapitulo = (livro: string, capitulo: number) => ESTADO_DOS_LIVROS[livro]?.versiculos[capitulo - 1] ?? 0;

export function blocosNaNumeracaoAtual(blocos: Bloco[]): Bloco[] {
  return blocos.map((b) => {
    if (b.tipo !== "leitura" || (b.numeracao ?? 0) >= NUMERACAO_DOS_DADOS) return b;
    const p = lerReferencia(b.referencia, true);
    if (!p) return { ...b, numeracao: NUMERACAO_DOS_DADOS };
    const t = trechoNaNumeracaoAtual({ livro: p.livro.codigo, capitulo: p.capitulo, de: p.de, ate: p.ate }, versiculosDoCapitulo);
    const mudou = t.capitulo !== p.capitulo || t.de !== p.de || t.ate !== p.ate;
    return { ...b, referencia: mudou ? escreverReferencia({ livro: p.livro, capitulo: t.capitulo, de: t.de, ate: t.ate }) : b.referencia, numeracao: NUMERACAO_DOS_DADOS };
  });
}
