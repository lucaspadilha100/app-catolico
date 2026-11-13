import { useCallback, useEffect, useState } from "react";

export const CHAVE_IGREJAS_SEGUIDAS = "santinho-igrejas-seguidas";

export const lerSeguidas = (): string[] => {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE_IGREJAS_SEGUIDAS) ?? "[]") as unknown;
    return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string").slice(0, 30) : [];
  } catch {
    return [];
  }
};

export function igrejasQueSigo(): string[] {
  let minhas: string[] = [];
  try {
    const p = JSON.parse(localStorage.getItem("santinho-preferencias") ?? "{}") as { minhaParoquia?: string; minhasParoquias?: { id: string }[] };
    minhas = [...(p.minhasParoquias ?? []).map((x) => x.id), p.minhaParoquia ?? ""];
  } catch {}
  return [...new Set([...minhas, ...lerSeguidas()].filter(Boolean))].slice(0, 30);
}

export function useIgrejasSeguidas(): [string[], (id: string) => void] {
  const [ids, setIds] = useState(lerSeguidas);
  useEffect(() => {
    const ouvir = () => setIds(lerSeguidas());
    window.addEventListener(CHAVE_IGREJAS_SEGUIDAS, ouvir);
    return () => window.removeEventListener(CHAVE_IGREJAS_SEGUIDAS, ouvir);
  }, []);
  const alternar = useCallback((id: string) => {
    const atual = lerSeguidas();
    const novo = atual.includes(id) ? atual.filter((x) => x !== id) : [...atual, id];
    try {
      localStorage.setItem(CHAVE_IGREJAS_SEGUIDAS, JSON.stringify(novo.slice(0, 30)));
    } catch {}
    window.dispatchEvent(new Event(CHAVE_IGREJAS_SEGUIDAS));
  }, []);
  return [ids, alternar];
}
