import { diaDaSemana, mesmoDia, somaDias, type Dia } from "./datas";
import { pascoa, quartaDeCinzas, type DiaLiturgico } from "./calendario";

export type Penitencia = "jejum-e-abstinencia" | "penitencia";

export function ehDiaDePreceito(l: DiaLiturgico): boolean {
  const d = l.data;
  if (diaDaSemana(d) === 0) return true;
  const ano = d.getUTCFullYear();
  if (mesmoDia(d, somaDias(pascoa(ano), 60))) return true;
  const nome = l.celebracao?.nome ?? "";
  return (
    nome.startsWith("Santa Maria, Mãe de Deus") ||
    nome.startsWith("Natal do Senhor") ||
    (nome.startsWith("Imaculada Conceição") && l.celebracao?.grau === "solenidade")
  );
}

export function penitenciaDoDia(l: DiaLiturgico): Penitencia | null {
  const d: Dia = l.data;
  const ano = d.getUTCFullYear();
  if (mesmoDia(d, quartaDeCinzas(ano)) || mesmoDia(d, somaDias(pascoa(ano), -2))) return "jejum-e-abstinencia";
  if (diaDaSemana(d) === 5 && l.celebracao?.grau !== "solenidade" && !(l.tempo === "pascoa" && (l.semana ?? 0) === 1)) return "penitencia";
  return null;
}

export const NOME_DA_PENITENCIA: Record<Penitencia, string> = {
  "jejum-e-abstinencia": "Jejum e abstinência",
  penitencia: "Dia de penitência",
};
