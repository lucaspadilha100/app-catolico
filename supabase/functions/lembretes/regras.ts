export interface NovenaLembrada {
  titulo: string;
  inicio: string;
  dias: number;
  para: string;
}

export interface Lembretes {
  evangelho?: string;
  angelus?: boolean;
  terco?: string;
  novena?: string;
  novenas?: NovenaLembrada[];
  avisos?: boolean;
  oracoes?: boolean;
  encontros?: boolean;
  escalas?: boolean;
  igrejas?: string[];
  tercos?: string[];
}

export interface TercoAgendado {
  id: string;
  nome: string;
  dia_semana: number;
  semanas: number[] | null;
  hora: string;
}

export const ANTECEDENCIA_DO_TERCO = 60;

export interface Aviso {
  tipo: string;
  titulo: string;
  corpo: string;
  url: string;
}

export interface Agora {
  iso: string;
  minutos: number;
  diaDaSemana: number;
}

const MISTERIOS = ["Mistérios Gloriosos", "Mistérios Gozosos", "Mistérios Dolorosos", "Mistérios Gloriosos", "Mistérios Luminosos", "Mistérios Dolorosos", "Mistérios Gozosos"];

export const JANELA = 15;

export function minutosDe(hora: string | undefined): number | null {
  const m = /^(\d{1,2}):(\d{2})$/.exec(hora ?? "");
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  return h < 24 && min < 60 ? h * 60 + min : null;
}

export function agoraNoFuso(instante: Date, fuso: string): Agora {
  let partes: Intl.DateTimeFormatPart[];
  try {
    partes = new Intl.DateTimeFormat("en-CA", { timeZone: fuso, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(instante);
  } catch {
    return agoraNoFuso(instante, "America/Sao_Paulo");
  }
  const v = (t: string) => partes.find((p) => p.type === t)?.value ?? "0";
  const iso = `${v("year")}-${v("month")}-${v("day")}`;
  const [a, m, d] = iso.split("-").map(Number);
  return { iso, minutos: Number(v("hour")) * 60 + Number(v("minute")), diaDaSemana: new Date(Date.UTC(a!, m! - 1, d!)).getUTCDay() };
}

const naHora = (hora: number | null, agora: Agora) => hora !== null && agora.minutos >= hora && agora.minutos < hora + JANELA;

const diasEntre = (de: string, ate: string) => Math.round((Date.parse(`${ate}T00:00:00Z`) - Date.parse(`${de}T00:00:00Z`)) / 86_400_000);

export function avisosDevidos(l: Lembretes, enviados: Record<string, string>, agora: Agora, evangelho: string | null): Aviso[] {
  const r: Aviso[] = [];
  const ja = (tipo: string) => enviados[tipo] === agora.iso;
  if (!ja("evangelho") && naHora(minutosDe(l.evangelho), agora))
    r.push({ tipo: "evangelho", titulo: "Evangelho do dia", corpo: evangelho ? `${evangelho}. Leia e reze com a liturgia de hoje.` : "Leia e reze com a liturgia de hoje.", url: `/liturgia/${agora.iso}` });
  if (l.angelus && !ja("angelus") && naHora(12 * 60, agora))
    r.push({ tipo: "angelus", titulo: "Ângelus", corpo: "O Anjo do Senhor anunciou a Maria.", url: "/rezar/oracoes/angelus" });
  if (!ja("terco") && naHora(minutosDe(l.terco), agora))
    r.push({ tipo: "terco", titulo: "Hora do terço", corpo: `Hoje: ${MISTERIOS[agora.diaDaSemana]}.`, url: "/rezar/terco" });
  if (!ja("novena") && naHora(minutosDe(l.novena), agora)) {
    for (const n of l.novenas ?? []) {
      const dia = diasEntre(n.inicio, agora.iso) + 1;
      if (dia >= 1 && dia <= n.dias) {
        r.push({ tipo: "novena", titulo: n.titulo, corpo: `Dia ${dia} de ${n.dias}.`, url: n.para });
        break;
      }
    }
  }
  return r;
}

function encontroHoje(t: TercoAgendado, agora: Agora): boolean {
  if (t.dia_semana !== agora.diaDaSemana) return false;
  if (!t.semanas?.length) return true;
  const [a, m, d] = agora.iso.split("-").map(Number);
  const semana = Math.floor((d! - 1) / 7) + 1;
  const ultima = new Date(Date.UTC(a!, m! - 1, d! + 7)).getUTCMonth() !== m! - 1;
  return t.semanas.includes(semana) || (t.semanas.includes(6) && ultima);
}

export function encontrosDevidos(tercos: TercoAgendado[], seguidos: string[], enviados: Record<string, string>, agora: Agora): Aviso[] {
  const r: Aviso[] = [];
  for (const t of tercos) {
    if (!seguidos.includes(t.id)) continue;
    const tipo = `terco-${t.id}`;
    if (enviados[tipo] === agora.iso || !encontroHoje(t, agora)) continue;
    const hora = minutosDe(t.hora.slice(0, 5));
    if (hora === null || !naHora(Math.max(0, hora - ANTECEDENCIA_DO_TERCO), agora)) continue;
    const [h, min] = t.hora.slice(0, 5).split(":");
    r.push({ tipo, titulo: t.nome, corpo: `Hoje, às ${Number(h)}h${min === "00" ? "" : min}.`, url: `/tercos/${t.id}` });
  }
  return r;
}

export interface ServicoNaEscala {
  id: string;
  data: string;
  hora: string | null;
  funcao: string;
  celebracao: string;
  ministerio: string;
}

export const HORA_DO_AVISO_DA_ESCALA = 19 * 60;

const amanhaDe = (iso: string) => {
  const [a, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(a!, m! - 1, d! + 1)).toISOString().slice(0, 10);
};

export function escalasDevidas(servicos: ServicoNaEscala[], enviados: Record<string, string>, agora: Agora): Aviso[] {
  if (!naHora(HORA_DO_AVISO_DA_ESCALA, agora)) return [];
  const amanha = amanhaDe(agora.iso);
  return servicos
    .filter((s) => s.data === amanha && enviados[`escala-${s.id}`] !== agora.iso)
    .map((s) => {
      const [h, min] = (s.hora ?? "").slice(0, 5).split(":");
      const quando = s.hora ? ` às ${Number(h)}h${min === "00" ? "" : min}` : "";
      return { tipo: `escala-${s.id}`, titulo: `Amanhã: ${s.funcao}`, corpo: `${s.ministerio}${s.celebracao ? ` · ${s.celebracao}` : ""}${quando}`, url: "/escalas" };
    });
}
