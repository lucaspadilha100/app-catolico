import type { AvisoDaParoquia, Horario, ItemDaAgenda, Paroquia, ParoquiaResumo, Sugestao, TipoDeHorario } from "./tipos";

const cliente = async () => (await import("@/lib/supabase")).supabase;

const ou = <T>(r: { data: T | null; error: { message: string } | null }): T => {
  if (r.error) throw new Error(r.error.message);
  return r.data as T;
};

export interface Local {
  lat: number;
  lng: number;
}

export async function buscarParoquias(p: { termo?: string; local?: Local | null; raioKm?: number; pular?: number; limite?: number }): Promise<ParoquiaResumo[]> {
  const c = await cliente();
  return ou(
    await c.rpc("buscar_paroquias", {
      p_termo: p.termo ?? "",
      p_lat: p.local?.lat ?? null,
      p_lng: p.local?.lng ?? null,
      p_raio_km: p.raioKm ?? 15,
      p_limite: p.limite ?? 30,
      p_pular: p.pular ?? 0,
    }),
  ) as ParoquiaResumo[];
}

export async function agendaPerto(p: { local: Local; inicio: string; horas: number; tipo: TipoDeHorario; raioKm?: number }): Promise<ItemDaAgenda[]> {
  const c = await cliente();
  return ou(
    await c.rpc("agenda_perto", {
      p_lat: p.local.lat,
      p_lng: p.local.lng,
      p_inicio: p.inicio,
      p_horas: p.horas,
      p_tipo: p.tipo,
      p_raio_km: p.raioKm ?? 15,
      p_limite: 40,
    }),
  ) as ItemDaAgenda[];
}

export interface Cidade {
  cidade: string;
  uf: string;
  total: number;
}

export interface Onde {
  local?: Local | null;
  raioKm?: number;
  cidade?: Cidade | null;
}

export async function procurarParoquias(p: Onde & { termo?: string; limite?: number }): Promise<ParoquiaResumo[]> {
  const c = await cliente();
  return ou(
    await c.rpc("procurar_paroquias", {
      p_termo: p.termo ?? "",
      p_lat: p.local?.lat ?? null,
      p_lng: p.local?.lng ?? null,
      p_raio_km: p.raioKm ?? 10,
      p_limite: p.limite ?? 100,
      p_pular: 0,
      p_cidade: p.cidade?.cidade ?? "",
      p_uf: p.cidade?.uf ?? "",
    }),
  ) as ParoquiaResumo[];
}

export async function agendaDeHorarios(p: Onde & { inicio: string; horas: number; tipo: TipoDeHorario }): Promise<ItemDaAgenda[]> {
  const c = await cliente();
  return ou(
    await c.rpc("agenda_de_horarios", {
      p_lat: p.local?.lat ?? null,
      p_lng: p.local?.lng ?? null,
      p_inicio: p.inicio,
      p_horas: p.horas,
      p_tipo: p.tipo,
      p_raio_km: p.raioKm ?? 10,
      p_limite: 300,
      p_cidade: p.cidade?.cidade ?? "",
      p_uf: p.cidade?.uf ?? "",
    }),
  ) as ItemDaAgenda[];
}

export async function cidadesComParoquias(termo = ""): Promise<Cidade[]> {
  const c = await cliente();
  return ou(await c.rpc("cidades_com_paroquias", { p_termo: termo, p_limite: 30 })) as Cidade[];
}

export interface ParoquiaCompleta {
  paroquia: Paroquia;
  horarios: Horario[];
  avisos: AvisoDaParoquia[];
  podeEditar: boolean;
}

export async function carregarParoquia(id: string): Promise<ParoquiaCompleta | null> {
  const c = await cliente();
  const hoje = new Date().toLocaleDateString("sv-SE");
  const [p, h, a, sessao] = await Promise.all([
    c.from("paroquias").select("*").eq("id", id).maybeSingle(),
    c.from("horarios").select("*").eq("paroquia_id", id).order("hora"),
    c.from("avisos_paroquia").select("*").eq("paroquia_id", id).gte("ate", hoje).order("ate"),
    c.auth.getSession(),
  ]);
  const paroquia = ou(p) as Paroquia | null;
  if (!paroquia) return null;
  let podeEditar = false;
  if (sessao.data.session) podeEditar = !!ou(await c.rpc("pode_editar", { p_paroquia: id }));
  return { paroquia, horarios: ou(h) as Horario[], avisos: ou(a) as AvisoDaParoquia[], podeEditar };
}

export async function enviarSugestao(s: { paroquia_id: string | null; tipo: Sugestao["tipo"]; texto: string; dados?: Record<string, unknown> }) {
  const c = await cliente();
  ou(await c.from("sugestoes_paroquia").insert({ ...s, dados: s.dados ?? {} }));
}

export async function souAdmin(): Promise<boolean> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  if (!data.session) return false;
  return !!ou(await c.rpc("e_admin"));
}

export async function minhasParoquiasDeGestor(): Promise<string[]> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  if (!data.session) return [];
  const r = ou(await c.from("paroquia_gestores").select("paroquia_id").eq("usuario_id", data.session.user.id)) as { paroquia_id: string }[];
  return r.map((x) => x.paroquia_id);
}

export async function sugestoesPendentes(): Promise<(Sugestao & { paroquias: { nome: string } | null })[]> {
  const c = await cliente();
  return ou(await c.from("sugestoes_paroquia").select("*, paroquias(nome)").eq("situacao", "pendente").order("criado_em").limit(100)) as never;
}

export async function revisarSugestao(id: string, situacao: "aceita" | "recusada", confirmar?: string | null) {
  const c = await cliente();
  ou(await c.from("sugestoes_paroquia").update({ situacao, revisado_em: new Date().toISOString() }).eq("id", id));
  if (situacao === "aceita" && confirmar) ou(await c.rpc("confirmar_paroquia", { p_paroquia: confirmar }));
}

export async function salvarParoquia(dados: Partial<Paroquia> & { id?: string }): Promise<string> {
  const c = await cliente();
  const { id, ...resto } = dados;
  delete (resto as Record<string, unknown>).atualizado_em;
  delete (resto as Record<string, unknown>).busca;
  delete (resto as Record<string, unknown>).conferida_em;
  if (id) {
    ou(await c.from("paroquias").update(resto).eq("id", id));
    return id;
  }
  const r = ou(await c.from("paroquias").insert(resto).select("id").single()) as { id: string };
  return r.id;
}

export interface ParoquiaDoPainel {
  id: string;
  nome: string;
  bairro: string;
  cidade: string;
  lat: number | null;
  conferida_em: string | null;
  ativa: boolean;
}

export async function paroquiasDoPainel(): Promise<ParoquiaDoPainel[]> {
  const c = await cliente();
  return ou(await c.from("paroquias").select("id, nome, bairro, cidade, lat, conferida_em, ativa").order("nome").limit(1000)) as ParoquiaDoPainel[];
}

export interface NotaDaParoquia {
  texto: string;
  fontes: string[];
  confianca: "" | "alta" | "media";
}

export async function notaDaParoquia(id: string): Promise<NotaDaParoquia | null> {
  const c = await cliente();
  return ou(await c.from("notas_paroquia").select("texto, fontes, confianca").eq("paroquia_id", id).maybeSingle()) as NotaDaParoquia | null;
}

export async function marcarConferida(id: string, conferida: boolean) {
  const c = await cliente();
  ou(await c.from("paroquias").update({ conferida_em: conferida ? new Date().toISOString() : null }).eq("id", id));
}

export async function salvarHorario(h: Omit<Horario, "id"> & { id?: string }) {
  const c = await cliente();
  const { id, ...resto } = h;
  if (id) ou(await c.from("horarios").update(resto).eq("id", id));
  else ou(await c.from("horarios").insert(resto));
}

export async function apagarHorario(id: string) {
  const c = await cliente();
  ou(await c.from("horarios").delete().eq("id", id));
}

export async function confirmarParoquia(id: string) {
  const c = await cliente();
  ou(await c.rpc("confirmar_paroquia", { p_paroquia: id }));
}

export async function adicionarGestor(paroquia: string, email: string) {
  const c = await cliente();
  ou(await c.rpc("adicionar_gestor", { p_paroquia: paroquia, p_email: email }));
}

export async function salvarAviso(a: { paroquia_id: string; texto: string; ate: string }) {
  const c = await cliente();
  ou(await c.from("avisos_paroquia").insert(a));
}

export async function apagarAviso(id: string) {
  const c = await cliente();
  ou(await c.from("avisos_paroquia").delete().eq("id", id));
}

export async function coordenadasDoEndereco(endereco: string): Promise<Local | null> {
  const r = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=br&q=${encodeURIComponent(endereco)}`, {
    headers: { "Accept-Language": "pt-BR" },
  });
  if (!r.ok) return null;
  const lista = (await r.json()) as { lat: string; lon: string }[];
  return lista[0] ? { lat: Number(lista[0].lat), lng: Number(lista[0].lon) } : null;
}
