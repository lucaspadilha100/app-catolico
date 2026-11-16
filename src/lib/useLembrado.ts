import { useCallback, useState, type SetStateAction } from "react";
import { useLocation } from "react-router-dom";

const memoria = new Map<string, unknown>();

export function useLembrado<T>(nome: string, inicial: T): [T, (v: SetStateAction<T>) => void] {
  const { key } = useLocation();
  const chave = `${key}|${nome}`;
  const [valor, setValor] = useState<T>(() => (memoria.has(chave) ? (memoria.get(chave) as T) : inicial));
  const mudar = useCallback(
    (v: SetStateAction<T>) =>
      setValor((antes) => {
        const novo = typeof v === "function" ? (v as (a: T) => T)(antes) : v;
        memoria.set(chave, novo);
        return novo;
      }),
    [chave],
  );
  return [valor, mudar];
}
