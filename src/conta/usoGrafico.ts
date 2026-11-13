export type Periodo = 7 | 30 | 90 | 365;

export interface Coluna {
  rotulo: string;
  detalhe: string;
  valor: number;
}

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

const somaDias = (iso: string, n: number) => {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};
const curto = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`;
const media = (soma: number, n: number) => (n ? Math.round((soma / n) * 10) / 10 : 0);

export function colunas(dias: { dia: string; aparelhos: number }[], hoje: string, periodo: Periodo): Coluna[] {
  const por = new Map(dias.map((d) => [d.dia, d.aparelhos]));
  const todos = Array.from({ length: periodo }, (_, i) => somaDias(hoje, i - periodo + 1));
  if (periodo <= 30) return todos.map((d) => ({ rotulo: curto(d), detalhe: curto(d), valor: por.get(d) ?? 0 }));
  if (periodo === 90) {
    const r: Coluna[] = [];
    for (let i = 0; i < todos.length; i += 7) {
      const semana = todos.slice(i, i + 7);
      const soma = semana.reduce((s, d) => s + (por.get(d) ?? 0), 0);
      r.push({ rotulo: curto(semana[0]!), detalhe: `${curto(semana[0]!)} a ${curto(semana.at(-1)!)}`, valor: media(soma, semana.length) });
    }
    return r;
  }
  const meses = new Map<string, string[]>();
  for (const d of todos) meses.set(d.slice(0, 7), [...(meses.get(d.slice(0, 7)) ?? []), d]);
  return [...meses.entries()].map(([m, ds]) => ({
    rotulo: `${MESES[Number(m.slice(5, 7)) - 1]}/${m.slice(2, 4)}`,
    detalhe: `${MESES[Number(m.slice(5, 7)) - 1]} de ${m.slice(0, 4)}`,
    valor: media(ds.reduce((s, d) => s + (por.get(d) ?? 0), 0), ds.length),
  }));
}

export function resumo(dias: { dia: string; aparelhos: number }[], hoje: string, periodo: Periodo) {
  const inicio = somaDias(hoje, -periodo + 1);
  const doPeriodo = dias.filter((d) => d.dia >= inicio && d.dia <= hoje);
  const primeiro = doPeriodo[0]?.dia ?? hoje;
  const contados = Math.round((Date.parse(`${hoje}T12:00:00Z`) - Date.parse(`${primeiro}T12:00:00Z`)) / 86_400_000) + 1;
  const total = doPeriodo.reduce((s, d) => s + d.aparelhos, 0);
  const melhor = doPeriodo.reduce<{ dia: string; aparelhos: number } | null>((m, d) => (!m || d.aparelhos > m.aparelhos ? d : m), null);
  return {
    hoje: dias.find((d) => d.dia === hoje)?.aparelhos ?? 0,
    media: media(total, contados),
    melhor: melhor ? { valor: melhor.aparelhos, dia: curto(melhor.dia) } : null,
  };
}
