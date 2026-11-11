const cliente = async () => (await import("@/lib/supabase")).supabase;

const ou = <T>(r: { data: T | null; error: { message: string } | null }): T => {
  if (r.error) throw new Error(r.error.message);
  return r.data as T;
};

export interface Turno {
  inicio: string;
  nome: string;
  meu: boolean;
}

export interface Corrente {
  id: string;
  codigo: string;
  titulo: string;
  descricao: string;
  inicio: string;
  horas: number;
  intervalo: number;
  ativa: boolean;
  sou_dono: boolean;
  turnos: Turno[];
}

const CHAVE = "santinho-turnos";

function segredos(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(CHAVE) ?? "{}") as Record<string, string>;
  } catch {
    return {};
  }
}

const chaveDoTurno = (codigo: string, inicio: string) => `${codigo}|${new Date(inicio).toISOString()}`;

export const turnoGuardado = (codigo: string, inicio: string) => !!segredos()[chaveDoTurno(codigo, inicio)];

export async function correntePorCodigo(codigo: string): Promise<Corrente | null> {
  const c = await cliente();
  return (ou(await c.rpc("corrente_por_codigo", { p_codigo: codigo })) as Corrente | null) ?? null;
}

export async function criarCorrente(r: { titulo: string; descricao: string; inicio: string; horas: number; intervalo: number }): Promise<string> {
  const c = await cliente();
  return (ou(await c.from("correntes").insert(r).select("codigo").single()) as { codigo: string }).codigo;
}

export async function minhasCorrentes(): Promise<{ codigo: string; titulo: string; inicio: string; horas: number; ativa: boolean }[]> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  if (!data.session) return [];
  return ou(await c.from("correntes").select("codigo, titulo, inicio, horas, ativa").eq("dono_id", data.session.user.id).order("criado_em", { ascending: false }).limit(30)) as never;
}

export async function encerrarCorrente(codigo: string, ativa: boolean) {
  const c = await cliente();
  ou(await c.from("correntes").update({ ativa }).eq("codigo", codigo));
}

export async function pegarTurno(codigo: string, inicio: string, nome: string) {
  const c = await cliente();
  const segredo = ou(await c.rpc("pegar_turno", { p_codigo: codigo, p_inicio: inicio, p_nome: nome })) as string;
  const s = segredos();
  s[chaveDoTurno(codigo, inicio)] = segredo;
  try {
    localStorage.setItem(CHAVE, JSON.stringify(s));
  } catch {}
}

export async function soltarTurno(codigo: string, inicio: string) {
  const c = await cliente();
  const s = segredos();
  ou(await c.rpc("soltar_turno", { p_codigo: codigo, p_inicio: inicio, p_segredo: s[chaveDoTurno(codigo, inicio)] ?? null }));
  delete s[chaveDoTurno(codigo, inicio)];
  try {
    localStorage.setItem(CHAVE, JSON.stringify(s));
  } catch {}
}

export function horariosDaCorrente(c: Pick<Corrente, "inicio" | "horas" | "intervalo">): Date[] {
  const inicio = new Date(c.inicio).getTime();
  const total = Math.floor((c.horas * 60) / c.intervalo);
  return Array.from({ length: total }, (_, i) => new Date(inicio + i * c.intervalo * 60_000));
}

const ics = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export function eventoDaAgenda(p: { titulo: string; inicio: Date; minutos: number; link: string }): string {
  const fim = new Date(p.inicio.getTime() + p.minutos * 60_000);
  const limpo = (s: string) => s.replace(/[\;,]/g, (x) => `\\${x}`).replace(/\n/g, "\\n");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Minha Igrejinha//PT",
    "BEGIN:VEVENT",
    `UID:${ics(p.inicio)}-${Math.random().toString(36).slice(2)}@minhaigrejinha`,
    `DTSTAMP:${ics(new Date())}`,
    `DTSTART:${ics(p.inicio)}`,
    `DTEND:${ics(fim)}`,
    `SUMMARY:${limpo(`Oração: ${p.titulo}`)}`,
    `DESCRIPTION:${limpo(p.link)}`,
    `URL:${p.link}`,
    "BEGIN:VALARM",
    "TRIGGER:-PT10M",
    "ACTION:DISPLAY",
    `DESCRIPTION:${limpo(p.titulo)}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
