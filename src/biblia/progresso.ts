import { useSyncExternalStore } from "react";
import estado from "./dados/estado.json";
import { LIVROS } from "./livros";

interface EstadoDoLivro {
  revisao: "transcrito" | "em-revisao" | "revisado";
  arquivo: string;
  versiculos: number[];
}

export const ESTADO_DOS_LIVROS = estado as Record<string, EstadoDoLivro>;

export interface Leitura {
  lidos: Record<string, number[]>;
  ultimo: { livro: string; capitulo: number } | null;
}

const CHAVE = "santinho-leitura";
const VAZIA: Leitura = { lidos: {}, ultimo: null };

function ler(): Leitura {
  try {
    const salvo = JSON.parse(localStorage.getItem(CHAVE) ?? "null") as Leitura | null;
    return salvo && typeof salvo === "object" ? { ...VAZIA, ...salvo } : VAZIA;
  } catch {
    return VAZIA;
  }
}

let atual: Leitura = typeof localStorage === "undefined" ? VAZIA : ler();
const ouvintes = new Set<() => void>();

if (typeof window !== "undefined")
  window.addEventListener("storage", (e) => {
    if (e.key !== CHAVE) return;
    atual = ler();
    ouvintes.forEach((o) => o());
  });

function gravar(nova: Leitura) {
  atual = nova;
  try {
    localStorage.setItem(CHAVE, JSON.stringify(nova));
  } catch {}
  ouvintes.forEach((o) => o());
}

export function marcarLido(livro: string, capitulo: number, lido = true) {
  const lista = new Set(atual.lidos[livro] ?? []);
  if (lido === lista.has(capitulo)) return;
  if (lido) lista.add(capitulo);
  else lista.delete(capitulo);
  gravar({ ...atual, lidos: { ...atual.lidos, [livro]: [...lista].sort((a, b) => a - b) } });
}

export function registrarAbertura(livro: string, capitulo: number) {
  if (atual.ultimo?.livro === livro && atual.ultimo.capitulo === capitulo) return;
  gravar({ ...atual, ultimo: { livro, capitulo } });
}

export function useLeituraDaBiblia(): Leitura {
  return useSyncExternalStore(
    (ouvir) => {
      ouvintes.add(ouvir);
      return () => ouvintes.delete(ouvir);
    },
    () => atual,
    () => VAZIA,
  );
}

const versiculosDoCapitulo = (livro: string, capitulo: number) =>
  ESTADO_DOS_LIVROS[livro]?.versiculos[capitulo - 1] ?? 1;

const TOTAL_POR_LIVRO = Object.fromEntries(
  LIVROS.map((l) => [l.codigo, (ESTADO_DOS_LIVROS[l.codigo]?.versiculos ?? []).reduce((a, b) => a + b, 0) || l.capitulos]),
);
const TOTAL_DA_BIBLIA = Object.values(TOTAL_POR_LIVRO).reduce((a, b) => a + b, 0);

export function versiculosLidos(leitura: Leitura, livro: string): number {
  return (leitura.lidos[livro] ?? []).reduce((soma, c) => soma + versiculosDoCapitulo(livro, c), 0);
}

const arredondar = (fracao: number) => (fracao > 0 && fracao < 0.01 ? 1 : Math.floor(fracao * 100));

export function percentualDoLivro(leitura: Leitura, livro: string): number {
  const total = TOTAL_POR_LIVRO[livro] ?? 0;
  return total ? arredondar(versiculosLidos(leitura, livro) / total) : 0;
}

export function percentualDaBiblia(leitura: Leitura): number {
  const lidos = LIVROS.reduce((soma, l) => soma + versiculosLidos(leitura, l.codigo), 0);
  return arredondar(lidos / TOTAL_DA_BIBLIA);
}

export function capitulosLidos(leitura: Leitura): number {
  return Object.values(leitura.lidos).reduce((soma, l) => soma + l.length, 0);
}
