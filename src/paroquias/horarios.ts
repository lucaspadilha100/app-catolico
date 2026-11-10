import type { Horario } from "./tipos";

const DIAS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
export const NOME_DO_DIA = DIAS;

export const hhmm = (h: string) => {
  const [hh, mm] = h.split(":");
  return mm === "00" ? `${Number(hh)}h` : `${Number(hh)}h${mm}`;
};

const isoLocal = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const semanaDoMes = (d: Date) => Math.floor((d.getDate() - 1) / 7) + 1;
const ultimaDoMes = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7).getMonth() !== d.getMonth();

export interface Ocorrencia {
  quando: Date;
  horario: Horario;
}

export function proximasOcorrencias(horarios: Horario[], agora: Date, dias = 7): Ocorrencia[] {
  const r: Ocorrencia[] = [];
  for (let i = 0; i <= dias; i++) {
    const d = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + i);
    const iso = isoLocal(d);
    for (const tipo of ["missa", "confissao", "adoracao"] as const) {
      const doTipo = horarios.filter((h) => h.tipo === tipo);
      const excecoes = doTipo.filter((h) => h.data === iso);
      const valendo = excecoes.length
        ? excecoes
        : doTipo.filter((h) => h.data === null && h.dia_semana === d.getDay() && (!h.semanas?.length || h.semanas.includes(semanaDoMes(d)) || (h.semanas.includes(6) && ultimaDoMes(d))));
      for (const h of valendo) {
        if (h.cancelado) continue;
        const [hh, mm] = h.hora.split(":").map(Number);
        const quando = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hh, mm);
        const [fh, fm] = (h.hora_fim ?? h.hora).split(":").map(Number);
        const fim = new Date(d.getFullYear(), d.getMonth(), d.getDate(), fh, fm);
        if (fim >= agora) r.push({ quando, horario: h });
      }
    }
  }
  return r.sort((a, b) => a.quando.getTime() - b.quando.getTime());
}

export function descreverSemanas(semanas: number[] | null): string {
  if (!semanas?.length) return "";
  const nomes = semanas.map((s) => (s === 6 ? "último" : `${s}º`));
  return nomes.length === 1 ? `${nomes[0]} do mês` : `${nomes.slice(0, -1).join(", ")} e ${nomes.at(-1)} do mês`;
}

export function quandoPorExtenso(d: Date, agora: Date): string {
  const hoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
  const dia = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const diff = Math.round((dia.getTime() - hoje.getTime()) / 86_400_000);
  const hora = hhmm(`${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`);
  if (diff === 0) return `Hoje, ${hora}`;
  if (diff === 1) return `Amanhã, ${hora}`;
  return `${DIAS[d.getDay()]}, ${hora}`;
}

export const agoraLocal = (d: Date) => `${isoLocal(d)} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
