import { useEffect, useState } from "react";

export const CHAVE_MUSICAS = "santinho-musicas";
const EVENTO = "santinho-musicas";

export interface Musica {
  titulo: string;
  artista?: string;
  link?: string;
  em: number;
}

const chaveDa = (m: Pick<Musica, "titulo" | "artista">) => `${m.titulo.trim().toLowerCase()}|${(m.artista ?? "").trim().toLowerCase()}`;

export function lerMusicas(): Musica[] {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE_MUSICAS) ?? "[]") as unknown;
    return Array.isArray(v) ? (v as Musica[]).filter((m) => m && typeof m.titulo === "string") : [];
  } catch {
    return [];
  }
}

function gravar(lista: Musica[]) {
  try {
    localStorage.setItem(CHAVE_MUSICAS, JSON.stringify(lista.slice(0, 300)));
  } catch {}
  window.dispatchEvent(new Event(EVENTO));
}

export const estaGuardada = (m: Pick<Musica, "titulo" | "artista">, lista = lerMusicas()) => lista.some((x) => chaveDa(x) === chaveDa(m));

export function alternarMusica(m: Omit<Musica, "em">) {
  const lista = lerMusicas();
  gravar(estaGuardada(m, lista) ? lista.filter((x) => chaveDa(x) !== chaveDa(m)) : [{ ...m, em: Date.now() }, ...lista]);
}

export function mesclarMusicas(a: Musica[], b: Musica[]): Musica[] {
  const porChave = new Map<string, Musica>();
  for (const m of [...b, ...a]) porChave.set(chaveDa(m), m);
  return [...porChave.values()].sort((x, y) => y.em - x.em);
}

export function useMusicas(): Musica[] {
  const [lista, setLista] = useState(lerMusicas);
  useEffect(() => {
    const ouvir = () => setLista(lerMusicas());
    window.addEventListener(EVENTO, ouvir);
    window.addEventListener("storage", ouvir);
    return () => {
      window.removeEventListener(EVENTO, ouvir);
      window.removeEventListener("storage", ouvir);
    };
  }, []);
  return lista;
}

export function buscaDaMusica(m: Pick<Musica, "titulo" | "artista">): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent([m.titulo, m.artista].filter(Boolean).join(" "))}`;
}
