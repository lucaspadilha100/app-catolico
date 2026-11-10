import { useCallback, useEffect, useState } from "react";

const CHAVE = "santinho-tercos-seguidos";

const ler = (): string[] => {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE) ?? "[]") as unknown;
    return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : [];
  } catch {
    return [];
  }
};

export function useTercosSeguidos(): [string[], (id: string) => void] {
  const [ids, setIds] = useState(ler);
  useEffect(() => {
    const ouvir = () => setIds(ler());
    window.addEventListener(CHAVE, ouvir);
    return () => window.removeEventListener(CHAVE, ouvir);
  }, []);
  const alternar = useCallback((id: string) => {
    const atual = ler();
    const novo = atual.includes(id) ? atual.filter((x) => x !== id) : [...atual, id];
    try {
      localStorage.setItem(CHAVE, JSON.stringify(novo));
    } catch {}
    window.dispatchEvent(new Event(CHAVE));
  }, []);
  return [ids, alternar];
}
