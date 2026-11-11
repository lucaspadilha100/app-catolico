import { useEffect, useState } from "react";
import { LIVROS, type Livro } from "./livros";

export const CHAVE_PLANO = "santinho-plano";
const EVENTO = "santinho-plano";

export interface Plano {
  id: string;
  nome: string;
  dias: number;
  livros: string[];
}

const DO_NT = LIVROS.filter((l) => l.testamento === "NT").map((l) => l.codigo);

export const PLANOS: Plano[] = [
  { id: "evangelhos", nome: "Os quatro Evangelhos, um capítulo por dia", dias: 89, livros: ["MAT", "MRK", "LUK", "JHN"] },
  { id: "salmos", nome: "Os Salmos em 30 dias", dias: 30, livros: ["PSA"] },
  { id: "novo-testamento", nome: "O Novo Testamento em 6 meses", dias: 182, livros: DO_NT },
  { id: "biblia", nome: "A Bíblia inteira em um ano", dias: 365, livros: LIVROS.map((l) => l.codigo) },
];

export interface Capitulo {
  livro: Livro;
  capitulo: number;
}

export function capitulosDoPlano(p: Plano): Capitulo[] {
  return p.livros.flatMap((codigo) => {
    const livro = LIVROS.find((l) => l.codigo === codigo)!;
    return Array.from({ length: livro.capitulos }, (_, i) => ({ livro, capitulo: i + 1 }));
  });
}

export function diasDoPlano(p: Plano): Capitulo[][] {
  const todos = capitulosDoPlano(p);
  const dias: Capitulo[][] = [];
  for (let d = 0; d < p.dias; d++) {
    const de = Math.round((d * todos.length) / p.dias);
    const ate = Math.round(((d + 1) * todos.length) / p.dias);
    dias.push(todos.slice(de, ate));
  }
  return dias;
}

export function descreverDia(dia: Capitulo[]): string {
  const partes: string[] = [];
  for (const c of dia) {
    const anterior = partes.length ? dia[dia.indexOf(c) - 1] : null;
    if (anterior && anterior.livro.codigo === c.livro.codigo && anterior.capitulo === c.capitulo - 1) continue;
    const fim = dia.slice(dia.indexOf(c)).findIndex((x, i, arr) => i > 0 && (x.livro.codigo !== c.livro.codigo || x.capitulo !== arr[i - 1]!.capitulo + 1));
    const ultimo = fim === -1 ? dia[dia.length - 1]! : dia[dia.indexOf(c) + fim - 1]!;
    const abrev = c.livro.codigo === "PSA" ? "Sl" : c.livro.abreviatura;
    partes.push(ultimo.livro.codigo === c.livro.codigo && ultimo.capitulo !== c.capitulo ? `${abrev} ${c.capitulo}-${ultimo.capitulo}` : `${abrev} ${c.capitulo}`);
  }
  return partes.join("; ");
}

export interface PlanoEmCurso {
  id: string;
  inicio: string;
}

export function lerPlano(): PlanoEmCurso | null {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE_PLANO) ?? "null") as PlanoEmCurso | null;
    return v && PLANOS.some((p) => p.id === v.id) ? v : null;
  } catch {
    return null;
  }
}

export function escolherPlano(id: string | null, inicio = new Date().toLocaleDateString("sv-SE")) {
  try {
    if (id) localStorage.setItem(CHAVE_PLANO, JSON.stringify({ id, inicio }));
    else localStorage.removeItem(CHAVE_PLANO);
  } catch {}
  window.dispatchEvent(new Event(EVENTO));
}

export function diaDoPlano(inicio: string, hoje = new Date().toLocaleDateString("sv-SE")): number {
  const ms = Date.parse(`${hoje}T00:00:00Z`) - Date.parse(`${inicio}T00:00:00Z`);
  return Math.max(1, Math.floor(ms / 86_400_000) + 1);
}

export function usePlano(): PlanoEmCurso | null {
  const [p, setP] = useState(lerPlano);
  useEffect(() => {
    const ouvir = () => setP(lerPlano());
    window.addEventListener(EVENTO, ouvir);
    window.addEventListener("storage", ouvir);
    return () => {
      window.removeEventListener(EVENTO, ouvir);
      window.removeEventListener("storage", ouvir);
    };
  }, []);
  return p;
}
