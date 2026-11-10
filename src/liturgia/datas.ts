// Datas "de calendário" (sem hora): sempre em UTC à meia-noite, para que
// fuso e horário de verão nunca empurrem um dia para o lado.

export type Dia = Date;

const UM_DIA = 86_400_000;

export const dia = (ano: number, mes: number, d: number): Dia => new Date(Date.UTC(ano, mes - 1, d));

export const somaDias = (d: Dia, n: number): Dia => new Date(d.getTime() + n * UM_DIA);

/** 0 = domingo … 6 = sábado */
export const diaDaSemana = (d: Dia): number => d.getUTCDay();

export const diferencaEmDias = (a: Dia, b: Dia): number => Math.round((a.getTime() - b.getTime()) / UM_DIA);

export const mesmoDia = (a: Dia, b: Dia): boolean => a.getTime() === b.getTime();

/** "2026-11-10" */
export const paraIso = (d: Dia): string => d.toISOString().slice(0, 10);

export function deIso(s: string): Dia | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return null;
  const d = dia(Number(m[1]), Number(m[2]), Number(m[3]));
  return paraIso(d) === s ? d : null;
}

/** O dia de hoje no relógio do aparelho. */
export function hoje(): Dia {
  const n = new Date();
  return dia(n.getFullYear(), n.getMonth() + 1, n.getDate());
}

/** Domingo ANTERIOR (estritamente antes) ao dia. */
export const domingoAntes = (d: Dia): Dia => somaDias(d, -(diaDaSemana(d) || 7));

/** O próprio dia, se for domingo; senão, o domingo anterior. */
export const domingoAteHoje = (d: Dia): Dia => somaDias(d, -diaDaSemana(d));

const NOMES_DIAS = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const NOMES_MESES = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

export const nomeDoDiaDaSemana = (d: Dia): string => NOMES_DIAS[diaDaSemana(d)]!;

/** "Terça-feira, 10 de novembro de 2026" */
export const dataPorExtenso = (d: Dia): string =>
  `${nomeDoDiaDaSemana(d)}, ${d.getUTCDate()} de ${NOMES_MESES[d.getUTCMonth()]} de ${d.getUTCFullYear()}`;
