import { useCallback, useState } from "react";
import { registrarOracao } from "@/devocao/progresso";

function ler<T>(chave: string, padrao: T): T {
  try {
    const bruto = localStorage.getItem(chave);
    return bruto === null ? padrao : (JSON.parse(bruto) as T);
  } catch {
    return padrao;
  }
}

function gravar(chave: string, valor: unknown) {
  try {
    if (valor === null) localStorage.removeItem(chave);
    else localStorage.setItem(chave, JSON.stringify(valor));
  } catch {}
}

export function useGuardado<T>(chave: string, padrao: T): [T, (v: T) => void] {
  const [valor, setValor] = useState<T>(() => ler(chave, padrao));
  const mudar = useCallback(
    (v: T) => {
      setValor(v);
      gravar(chave, v);
    },
    [chave],
  );
  return [valor, mudar];
}

export type Lingua = "pt" | "la";
export const CHAVE_LINGUA = "santinho-oracao-lingua";
export const CHAVE_INTENCAO = "santinho-terco-intencao";
export const CHAVE_MODO_CONTAS = "santinho-terco-modo-contas";

const CHAVE_ANDAMENTO = "santinho-terco-andamento";
const CHAVE_REZADOS = "santinho-tercos-rezados";
const VALIDADE = 2 * 86_400_000;

export interface Andamento {
  passo: number;
  conta: number;
  em: number;
}

export function lerAndamento(terco: string): Andamento | null {
  const todos = ler<Record<string, Andamento>>(CHAVE_ANDAMENTO, {});
  const a = todos[terco];
  if (!a || Date.now() - a.em > VALIDADE) return null;
  return a;
}

export function andamentoMaisRecente(prefixo: string): [string, Andamento] | null {
  const todos = ler<Record<string, Andamento>>(CHAVE_ANDAMENTO, {});
  const validos = Object.entries(todos).filter(([k, a]) => k.startsWith(prefixo) && Date.now() - a.em <= VALIDADE);
  validos.sort((a, b) => b[1].em - a[1].em);
  return validos[0] ?? null;
}

export function guardarAndamento(terco: string, a: Omit<Andamento, "em"> | null) {
  const todos = ler<Record<string, Andamento>>(CHAVE_ANDAMENTO, {});
  if (a) todos[terco] = { ...a, em: Date.now() };
  else delete todos[terco];
  gravar(CHAVE_ANDAMENTO, todos);
}

export const tercosRezados = (tipo: string): number => ler<Record<string, number>>(CHAVE_REZADOS, {})[tipo] ?? 0;

export function contarTercoRezado(tipo: string): number {
  const todos = ler<Record<string, number>>(CHAVE_REZADOS, {});
  todos[tipo] = (todos[tipo] ?? 0) + 1;
  gravar(CHAVE_REZADOS, todos);
  registrarOracao();
  return todos[tipo]!;
}
