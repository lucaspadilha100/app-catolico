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

const MINUSCULO = DIAS.map((d) => d.toLowerCase());

export function juntarComE(itens: string[]): string {
  if (itens.length <= 1) return itens[0] ?? "";
  return `${itens.slice(0, -1).join(", ")} e ${itens.at(-1)}`;
}

export function nomeDosDias(dias: number[]): string {
  const ordem = [...dias].sort((a, b) => (a === 0 ? 7 : a) - (b === 0 ? 7 : b));
  const partes: string[] = [];
  let i = 0;
  while (i < ordem.length) {
    let j = i;
    const pos = (d: number) => (d === 0 ? 7 : d);
    while (j + 1 < ordem.length && pos(ordem[j + 1]!) === pos(ordem[j]!) + 1) j++;
    if (j - i >= 2) {
      partes.push(`${MINUSCULO[ordem[i]!]} a ${MINUSCULO[ordem[j]!]}`);
      i = j + 1;
    } else {
      partes.push(MINUSCULO[ordem[i]!]!);
      i++;
    }
  }
  const texto = juntarComE(partes);
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export interface GrupoDeDias {
  dias: number[];
  rotulo: string;
  horarios: Horario[];
}

const assinatura = (lista: Horario[]) =>
  lista
    .map((h) => [h.hora.slice(0, 5), h.hora_fim?.slice(0, 5) ?? "", (h.semanas ?? []).join("."), h.observacao].join("|"))
    .join("/");

export function agruparDias(horarios: Horario[]): GrupoDeDias[] {
  const semanais = horarios.filter((h) => h.data === null && h.dia_semana !== null);
  const porDia = new Map<number, Horario[]>();
  for (const d of [0, 1, 2, 3, 4, 5, 6]) {
    const doDia = semanais.filter((h) => h.dia_semana === d).sort((a, b) => a.hora.localeCompare(b.hora));
    if (doDia.length) porDia.set(d, doDia);
  }
  const grupos: GrupoDeDias[] = [];
  const domingo = porDia.get(0);
  if (domingo) grupos.push({ dias: [0], rotulo: DIAS[0]!, horarios: domingo });
  const vistos = new Map<string, GrupoDeDias>();
  for (const d of [1, 2, 3, 4, 5, 6]) {
    const lista = porDia.get(d);
    if (!lista) continue;
    const chave = assinatura(lista);
    const g = vistos.get(chave);
    if (g) g.dias.push(d);
    else {
      const novo = { dias: [d], rotulo: "", horarios: lista };
      vistos.set(chave, novo);
      grupos.push(novo);
    }
  }
  for (const g of grupos) g.rotulo = nomeDosDias(g.dias);
  return grupos;
}

export function descreverHorario(h: Horario): string {
  return h.hora_fim ? `${hhmm(h.hora)} às ${hhmm(h.hora_fim)}` : hhmm(h.hora);
}

export function telefoneLegivel(d: string): string {
  if (d.length < 10) return d;
  const ddd = d.slice(0, 2);
  const resto = d.slice(2);
  const corte = resto.length - 4;
  return `(${ddd}) ${resto.slice(0, corte)}-${resto.slice(corte)}`;
}

export function emQuanto(d: Date, agora: Date): string {
  const min = Math.round((d.getTime() - agora.getTime()) / 60_000);
  if (min < -1) return `começou há ${-min} min`;
  if (min <= 1) return "começando";
  if (min < 60) return `em ${min} min`;
  if (min < 180) {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return m ? `em ${h}h${String(m).padStart(2, "0")}` : `em ${h}h`;
  }
  return "";
}

export function textoDaGrade(horarios: Horario[], nomes: Record<string, string>): string {
  const blocos: string[] = [];
  for (const tipo of ["missa", "confissao", "adoracao"] as const) {
    const grupos = agruparDias(horarios.filter((h) => h.tipo === tipo));
    if (!grupos.length) continue;
    const linhas = grupos.map((g) => {
      const horas = juntarComE(g.horarios.map((h) => descreverHorario(h) + (h.semanas?.length ? ` (${descreverSemanas(h.semanas)})` : "")));
      const obs = [...new Set(g.horarios.map((h) => h.observacao).filter(Boolean))];
      return `${g.rotulo}: ${horas}${obs.length ? `. ${obs.join(". ")}` : ""}`;
    });
    blocos.push([nomes[tipo], ...linhas].join("\n"));
  }
  return blocos.join("\n\n");
}

export const DIA_POR_CHAVE = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"] as const;
export const NOME_CURTO_DO_DIA = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
