import { useCallback, useEffect, useState } from "react";
import { deIso, dia, diferencaEmDias, somaDias, type Dia } from "@/liturgia/datas";

export interface Falecido {
  id: string;
  nome: string;
  data: string;
}

export type TipoDeLembranca = "setimo" | "trigesimo" | "aniversario";

export interface Lembranca {
  tipo: TipoDeLembranca;
  data: Dia;
  anos?: number;
}

const CHAVE = "santinho-falecidos";
const EVENTO = "santinho-falecidos";

export function lerFalecidos(): Falecido[] {
  try {
    return JSON.parse(localStorage.getItem(CHAVE) ?? "[]") as Falecido[];
  } catch {
    return [];
  }
}

function gravar(lista: Falecido[]) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(lista));
  } catch {}
  window.dispatchEvent(new Event(EVENTO));
}

export function useFalecidos(): [Falecido[], (f: Omit<Falecido, "id">) => void, (id: string) => void] {
  const [lista, setLista] = useState(lerFalecidos);
  useEffect(() => {
    const ouvir = () => setLista(lerFalecidos());
    window.addEventListener(EVENTO, ouvir);
    return () => window.removeEventListener(EVENTO, ouvir);
  }, []);
  const incluir = useCallback((f: Omit<Falecido, "id">) => gravar([...lerFalecidos(), { ...f, id: crypto.randomUUID() }]), []);
  const tirar = useCallback((id: string) => gravar(lerFalecidos().filter((f) => f.id !== id)), []);
  return [lista, incluir, tirar];
}

export function aniversarioNoAno(origem: Dia, ano: number): Dia {
  const mes = origem.getUTCMonth() + 1;
  const d = origem.getUTCDate();
  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
  return mes === 2 && d === 29 && !bissexto ? dia(ano, 2, 28) : dia(ano, mes, d);
}

export function proximaLembranca(f: Falecido, hoje: Dia): Lembranca | null {
  const morte = deIso(f.data);
  if (!morte || diferencaEmDias(morte, hoje) > 0) return null;
  const setimo = somaDias(morte, 6);
  if (diferencaEmDias(setimo, hoje) >= 0) return { tipo: "setimo", data: setimo };
  const trigesimo = somaDias(morte, 29);
  if (diferencaEmDias(trigesimo, hoje) >= 0) return { tipo: "trigesimo", data: trigesimo };
  for (const ano of [hoje.getUTCFullYear(), hoje.getUTCFullYear() + 1]) {
    const a = aniversarioNoAno(morte, ano);
    if (diferencaEmDias(a, hoje) >= 0 && ano > morte.getUTCFullYear()) return { tipo: "aniversario", data: a, anos: ano - morte.getUTCFullYear() };
  }
  return null;
}

export const NOME_DA_LEMBRANCA: Record<TipoDeLembranca, string> = {
  setimo: "7º dia",
  trigesimo: "30º dia",
  aniversario: "Aniversário de falecimento",
};

export function lembrancasDeHoje(lista: Falecido[], hoje: Dia): { falecido: Falecido; lembranca: Lembranca }[] {
  return lista
    .map((falecido) => ({ falecido, lembranca: proximaLembranca(falecido, hoje) }))
    .filter((x): x is { falecido: Falecido; lembranca: Lembranca } => !!x.lembranca && diferencaEmDias(x.lembranca.data, hoje) === 0);
}

export function aniversarioDeBatismo(batismo: string, hoje: Dia): number | null {
  const b = deIso(batismo);
  if (!b) return null;
  const anos = hoje.getUTCFullYear() - b.getUTCFullYear();
  return anos > 0 && diferencaEmDias(aniversarioNoAno(b, hoje.getUTCFullYear()), hoje) === 0 ? anos : null;
}
