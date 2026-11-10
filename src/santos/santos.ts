import { useCallback, useEffect, useState } from "react";
import type { MesDeSantos, Santo } from "./tipos";

const MODULOS = import.meta.glob<{ default: MesDeSantos }>("./dados/*.ts");

export const caminhoDaImagem = (s: Santo) => (s.imagem ? `/imagens/santos/${s.id}-${s.imagem.artic}.webp` : null);

export async function santosDoMes(mm: string): Promise<Santo[]> {
  const m = MODULOS[`./dados/${mm}.ts`];
  return m ? (await m()).default.santos : [];
}

export async function todosOsSantos(): Promise<Santo[]> {
  const meses = await Promise.all(Object.keys(MODULOS).sort().map((k) => MODULOS[k]!()));
  return meses.flatMap((m) => m.default.santos);
}

export const santosDaDataMMDD = async (mmdd: string) => (await santosDoMes(mmdd.slice(0, 2))).filter((s) => s.data === mmdd);

export const normalizar = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim();

export function buscarSantos(lista: Santo[], termo: string): Santo[] {
  const palavras = normalizar(termo).split(/\s+/).filter(Boolean);
  if (!palavras.length) return [];
  const casa = (t: string) => palavras.every((p) => normalizar(t).includes(p));
  const noNome = lista.filter((s) => casa(`${s.nome} ${s.nomes.join(" ")}`));
  const noResto = lista.filter((s) => !noNome.includes(s) && casa(`${s.resumo} ${(s.padroeiro ?? []).join(" ")}`));
  return [...noNome, ...noResto];
}

export function santosDoNome(lista: Santo[], nome: string): Santo[] {
  const alvo = normalizar(nome.split(/\s+/)[0] ?? "");
  if (!alvo) return [];
  return lista.filter((s) => s.nomes.some((n) => normalizar(n).split(/\s+/).includes(alvo) || normalizar(n) === alvo));
}

const CHAVE = "santinho-santos-de-devocao";
const EVENTO = "santinho-santos-de-devocao";

const lerDevocao = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(CHAVE) ?? "[]") as string[];
  } catch {
    return [];
  }
};

export function useSantosDeDevocao(): [string[], (id: string) => void] {
  const [ids, setIds] = useState(lerDevocao);
  useEffect(() => {
    const ouvir = () => setIds(lerDevocao());
    window.addEventListener(EVENTO, ouvir);
    return () => window.removeEventListener(EVENTO, ouvir);
  }, []);
  const alternar = useCallback((id: string) => {
    const atual = lerDevocao();
    const novo = atual.includes(id) ? atual.filter((x) => x !== id) : [...atual, id];
    try {
      localStorage.setItem(CHAVE, JSON.stringify(novo));
    } catch {}
    window.dispatchEvent(new Event(EVENTO));
  }, []);
  return [ids, alternar];
}
