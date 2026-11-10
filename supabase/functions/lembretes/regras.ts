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
}

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
