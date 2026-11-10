import { LIVROS, type Livro } from "./livros";

const normalizar = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

const NOMES_EXTRAS: Record<string, string> = {
  jo: "JHN",
  joao: "JHN",
  salmo: "PSA",
  sl: "PSA",
  ap: "REV",
  atos: "ACT",
  cantico: "SNG",
  canticos: "SNG",
  eclesiastico: "SIR",
  sirac: "SIR",
};

export interface Destino {
  livro: Livro;
  capitulo: number;
  versiculo?: number;
}

export function livrosQueCombinam(texto: string): Livro[] {
  if (/^\s*jó(\s|\d|$)/i.test(texto)) return LIVROS.filter((l) => l.codigo === "JOB");
  const t = normalizar(texto).replace(/\s*\d+([,:.]\s*\d+)?\s*$/, "").replace(/\s/g, "");
  if (!t) return [];
  const exatos = LIVROS.filter((l) => normalizar(l.abreviatura).replace(/\s/g, "") === t);
  const extra = NOMES_EXTRAS[t];
  const porNome = LIVROS.filter((l) => normalizar(l.nome).replace(/\s/g, "").startsWith(t));
  const lista = [...(extra ? LIVROS.filter((l) => l.codigo === extra) : []), ...exatos, ...porNome];
  return [...new Map(lista.map((l) => [l.codigo, l])).values()];
}

export function interpretar(texto: string): Destino | null {
  const m = /^(.*?)(\d+)(?:\s*[,:.]\s*(\d+))?\s*$/.exec(normalizar(texto));
  const livros = livrosQueCombinam(texto);
  const livro = livros[0];
  if (!livro) return null;
  if (!m || !m[1]!.trim()) return { livro, capitulo: 1 };
  const capitulo = Math.min(Math.max(Number(m[2]), 1), livro.capitulos);
  return { livro, capitulo, versiculo: m[3] ? Number(m[3]) : undefined };
}
