import { useCallback, useEffect, useState } from "react";
import { deIso, diferencaEmDias, hoje, paraIso, somaDias, type Dia } from "@/liturgia/datas";

const CHAVE = "santinho-devocoes";
const CHAVE_DIAS = "santinho-dias-de-oracao";
const EVENTO = "santinho-devocoes";

export interface Acompanhamento {
  inicio: string;
  feitos: number[];
  festa?: string;
}

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
    localStorage.setItem(chave, JSON.stringify(valor));
  } catch {}
  window.dispatchEvent(new Event(EVENTO));
}

export const todosOsAcompanhamentos = () => ler<Record<string, Acompanhamento>>(CHAVE, {});

export const lerAcompanhamento = (chave: string): Acompanhamento | null => todosOsAcompanhamentos()[chave] ?? null;

export function guardarAcompanhamento(chave: string, a: Acompanhamento | null) {
  const todos = todosOsAcompanhamentos();
  if (a) todos[chave] = { ...a, feitos: [...new Set(a.feitos)].sort((x, y) => x - y) };
  else delete todos[chave];
  gravar(CHAVE, todos);
}

export function alternarFeito(chave: string, inicio: Dia, etapa: number, extra: Partial<Acompanhamento> = {}): boolean {
  const atual = lerAcompanhamento(chave) ?? { inicio: paraIso(inicio), feitos: [], ...extra };
  const feito = atual.feitos.includes(etapa);
  guardarAcompanhamento(chave, { ...atual, feitos: feito ? atual.feitos.filter((f) => f !== etapa) : [...atual.feitos, etapa] });
  if (!feito) registrarOracao();
  return !feito;
}

export function acompanhamentoVigente(chave: string, dias: number, d: Dia = hoje()): Acompanhamento | null {
  const a = lerAcompanhamento(chave);
  if (!a) return null;
  const inicio = deIso(a.inicio);
  if (!inicio || diferencaEmDias(d, inicio) > dias + 30) return null;
  return a;
}

export function registrarOracao(d: Dia = hoje()) {
  const iso = paraIso(d);
  const dias = ler<string[]>(CHAVE_DIAS, []);
  if (dias.includes(iso)) return;
  gravar(CHAVE_DIAS, [...dias, iso].sort().slice(-120));
}

export function diasDeOracaoNaSemana(d: Dia = hoje()): number {
  const dias = new Set(ler<string[]>(CHAVE_DIAS, []));
  let n = 0;
  for (let i = 0; i < 7; i++) if (dias.has(paraIso(somaDias(d, -i)))) n++;
  return n;
}

export function useDevocoesGuardadas(): number {
  const [versao, setVersao] = useState(0);
  const mudou = useCallback(() => setVersao((v) => v + 1), []);
  useEffect(() => {
    window.addEventListener(EVENTO, mudou);
    window.addEventListener("storage", mudou);
    return () => {
      window.removeEventListener(EVENTO, mudou);
      window.removeEventListener("storage", mudou);
    };
  }, [mudou]);
  return versao;
}
