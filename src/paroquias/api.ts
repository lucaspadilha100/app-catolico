import type { AvisoDaParoquia, Horario, IgrejaComHorarios, ItemDaAgenda, Paroquia, ParoquiaResumo, Sugestao, TipoDeHorario } from "./tipos";

const cliente = async () => (await import("@/lib/supabase")).supabase;

const ou = <T>(r: { data: T | null; error: { message: string } | null }): T => {
  if (r.error) throw new Error(r.error.message);
  return r.data as T;
};

export interface Local {
  lat: number;
  lng: number;
}

export interface Cidade {
  cidade: string;
  uf: string;
  total: number;
  distancia_km?: number | null;
}

export interface Onde {
  local?: Local | null;
  raioKm?: number;
  cidade?: Cidade | null;
}

export async function procurarParoquias(p: Onde & { termo?: string; limite?: number; pular?: number }): Promise<ParoquiaResumo[]> {
  const c = await cliente();
  return ou(
    await c.rpc("procurar_paroquias", {
      p_termo: p.termo ?? "",
      p_lat: p.local?.lat ?? null,
      p_lng: p.local?.lng ?? null,
      p_raio_km: p.raioKm ?? 10,
      p_limite: p.limite ?? 20,
      p_pular: p.pular ?? 0,
      p_cidade: p.cidade?.cidade ?? "",
      p_uf: p.cidade?.uf ?? "",
    }),
  ) as ParoquiaResumo[];
}

export interface Periodo {
  inicio: string;
  ate: string;
  horas: number;
  tipo: TipoDeHorario;
}

const argumentosDoPeriodo = (p: Onde & Periodo, pular: number, limite: number) => ({
  p_lat: p.local?.lat ?? null,
  p_lng: p.local?.lng ?? null,
  p_inicio: p.inicio,
  p_horas: p.horas,
  p_tipo: p.tipo,
  p_raio_km: p.raioKm ?? 10,
  p_limite: limite,
  p_cidade: p.cidade?.cidade ?? "",
  p_uf: p.cidade?.uf ?? "",
  p_pular: pular,
  p_ate: p.ate,
});

export async function agendaDeEventos(p: Onde & Periodo, pular = 0, limite = 30): Promise<ItemDaAgenda[]> {
  const c = await cliente();
  const r = ou(
    await c.rpc("agenda_de_eventos", {
      p_lat: p.local?.lat ?? null,
      p_lng: p.local?.lng ?? null,
      p_inicio: p.inicio,
      p_horas: p.horas,
      p_raio_km: p.raioKm ?? 10,
      p_limite: limite,
      p_cidade: p.cidade?.cidade ?? "",
      p_uf: p.cidade?.uf ?? "",
      p_pular: pular,
    }),
  ) as { paroquia_id: string; titulo: string; paroquia: string; cidade: string; distancia_km: number | null; quando: string; local: string; total: number }[];
  return r.map((e) => ({ paroquia_id: e.paroquia_id, nome: e.titulo, bairro: e.paroquia, cidade: e.cidade, distancia_km: e.distancia_km, quando: e.quando, ate: null, observacao: e.local, total: e.total }));
}

export async function agendaDeHorarios(p: Onde & Periodo, pular = 0, limite = 30): Promise<ItemDaAgenda[]> {
  const c = await cliente();
  return ou(await c.rpc("agenda_de_horarios", argumentosDoPeriodo(p, pular, limite))) as ItemDaAgenda[];
}

export async function igrejasComHorarios(p: Onde & Periodo, pular = 0, limite = 20): Promise<IgrejaComHorarios[]> {
  const c = await cliente();
  return ou(await c.rpc("igrejas_com_horarios", argumentosDoPeriodo(p, pular, limite))) as IgrejaComHorarios[];
}

export async function cidadesComParoquias(p: { termo?: string; local?: Local | null; limite?: number }): Promise<Cidade[]> {
  const c = await cliente();
  return ou(
    await c.rpc("cidades_com_paroquias", { p_termo: p.termo ?? "", p_lat: p.local?.lat ?? null, p_lng: p.local?.lng ?? null, p_limite: p.limite ?? 8 }),
  ) as Cidade[];
}

export interface IgrejaLigada {
  id: string;
  nome: string;
  tipo: string;
  bairro: string;
  cidade: string;
}

export interface ParoquiaCompleta {
  paroquia: Paroquia;
  horarios: Horario[];
  avisos: AvisoDaParoquia[];
  podeEditar: boolean;
  matriz: IgrejaLigada | null;
  capelas: IgrejaLigada[];
}

export async function igrejaLigada(id: string): Promise<IgrejaLigada | null> {
  const c = await cliente();
  return ou(await c.from("paroquias").select("id,nome,tipo,bairro,cidade").eq("id", id).maybeSingle()) as IgrejaLigada | null;
}

export async function carregarParoquia(id: string): Promise<ParoquiaCompleta | null> {
  const c = await cliente();
  const hoje = new Date().toLocaleDateString("sv-SE");
  const ligada = "id,nome,tipo,bairro,cidade";
  const [p, h, a, filhas, sessao] = await Promise.all([
    c.from("paroquias").select("*").eq("id", id).maybeSingle(),
    c.from("horarios").select("*").eq("paroquia_id", id).order("hora"),
    c.from("avisos_paroquia").select("*").eq("paroquia_id", id).gte("ate", hoje).order("ate"),
    c.from("paroquias").select(ligada).eq("matriz_id", id).eq("ativa", true).order("nome").limit(200),
    c.auth.getSession(),
  ]);
  const paroquia = ou(p) as Paroquia | null;
  if (!paroquia) return null;
  const [podeEditar, matriz] = await Promise.all([
    sessao.data.session ? c.rpc("pode_editar", { p_paroquia: id }).then((r) => !!ou(r)) : false,
    paroquia.matriz_id ? c.from("paroquias").select(ligada).eq("id", paroquia.matriz_id).eq("ativa", true).maybeSingle().then((r) => (r.error ? null : (r.data as IgrejaLigada | null))) : null,
  ]);
  return { paroquia, horarios: ou(h) as Horario[], avisos: ou(a) as AvisoDaParoquia[], podeEditar, matriz, capelas: filhas.error ? [] : ((filhas.data as IgrejaLigada[] | null) ?? []) };
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
  for (const campo of ["pix_chave", "pix_nome", "pix_cidade", "pix_conferido", "aceita_intencoes"]) delete (resto as Record<string, unknown>)[campo];
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
  fonte_oficial: boolean;
}

export type FiltroDoPainel = "conferir" | "conferidas" | "todas";

const semAcento = (t: string) =>
  t
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim();

export async function paroquiasDoPainel(p: { filtro: FiltroDoPainel; termo: string; pular: number; limite: number }): Promise<{
  lista: ParoquiaDoPainel[];
  contagem: Record<FiltroDoPainel, number>;
}> {
  const c = await cliente();
  const palavras = semAcento(p.termo)
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.replace(/[%_,()]/g, ""));
  const montar = <Q extends { like: (col: string, v: string) => Q; is: (col: string, v: null) => Q; not: (col: string, op: string, v: null) => Q; filter: (col: string, op: string, v: unknown) => Q }>(q: Q, filtro: FiltroDoPainel) => {
    let r = q;
    for (const w of palavras) r = r.like("busca", `%${w}%`);
    if (filtro === "conferir") r = r.is("conferida_em", null).filter("fonte_oficial", "eq", false);
    if (filtro === "conferidas") r = r.not("conferida_em", "is", null);
    return r;
  };
  const contar = async (f: FiltroDoPainel) => {
    const r = await montar(c.from("paroquias").select("id", { count: "exact", head: true }), f);
    if (r.error) throw new Error(r.error.message);
    return r.count ?? 0;
  };
  const [lista, conferir, conferidas, todas] = await Promise.all([
    montar(c.from("paroquias").select("id, nome, bairro, cidade, lat, conferida_em, ativa, fonte_oficial"), p.filtro)
      .order("nome")
      .order("id")
      .range(p.pular, p.pular + p.limite - 1),
    contar("conferir"),
    contar("conferidas"),
    contar("todas"),
  ]);
  return { lista: ou(lista) as ParoquiaDoPainel[], contagem: { conferir, conferidas, todas } };
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

export interface Publicacao {
  id: string;
  paroquia_id: string;
  tipo: "aviso" | "evento";
  titulo: string;
  texto: string;
  link: string;
  evento_em: string | null;
  local: string;
  criado_em: string;
}

export async function muralDaParoquia(paroquia: string, pular = 0, limite = 10): Promise<Publicacao[]> {
  const c = await cliente();
  return ou(await c.from("publicacoes_paroquia").select("*").eq("paroquia_id", paroquia).order("criado_em", { ascending: false }).order("id").range(pular, pular + limite - 1)) as Publicacao[];
}

export async function proximoEvento(paroquia: string): Promise<Publicacao | null> {
  const c = await cliente();
  const r = ou(
    await c.from("publicacoes_paroquia").select("*").eq("paroquia_id", paroquia).eq("tipo", "evento").gte("evento_em", new Date().toISOString()).order("evento_em").limit(1),
  ) as Publicacao[];
  return r[0] ?? null;
}

export async function publicar(p: Omit<Publicacao, "id" | "criado_em">) {
  const c = await cliente();
  ou(await c.from("publicacoes_paroquia").insert(p));
}

export async function apagarPublicacao(id: string) {
  const c = await cliente();
  ou(await c.from("publicacoes_paroquia").delete().eq("id", id));
}

const URL_DO_BANCO = import.meta.env.VITE_SUPABASE_URL as string;
const CHAVE_PUBLICA = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export async function novidadesDasIgrejas(ids: string[]): Promise<(Publicacao & { paroquias: { nome: string } | null })[]> {
  if (!ids.length) return [];
  const desde = new Date(Date.now() - 30 * 86_400_000).toISOString();
  const r = await fetch(
    `${URL_DO_BANCO}/rest/v1/publicacoes_paroquia?select=*,paroquias(nome)&paroquia_id=in.(${ids.join(",")})&criado_em=gt.${encodeURIComponent(desde)}&order=criado_em.desc&limit=5`,
    { headers: { apikey: CHAVE_PUBLICA } },
  );
  if (!r.ok) return [];
  return (await r.json()) as (Publicacao & { paroquias: { nome: string } | null })[];
}

export async function pedirGestao(p: { paroquia_id: string; nome: string; funcao: string; contato: string }) {
  const c = await cliente();
  ou(await c.from("pedidos_de_gestao").insert(p));
}

export async function meuPedidoDeGestao(paroquia: string): Promise<{ situacao: string } | null> {
  const c = await cliente();
  const r = ou(await c.from("pedidos_de_gestao").select("situacao").eq("paroquia_id", paroquia).order("criado_em", { ascending: false }).limit(1)) as { situacao: string }[];
  return r[0] ?? null;
}

export interface PedidoDeGestao {
  id: string;
  paroquia_id: string;
  paroquia: string;
  cidade: string;
  nome: string;
  funcao: string;
  contato: string;
  email: string;
  criado_em: string;
}

export async function pedidosDeGestaoAbertos(): Promise<PedidoDeGestao[]> {
  const c = await cliente();
  return ou(await c.rpc("pedidos_de_gestao_abertos")) as PedidoDeGestao[];
}

export async function revisarPedidoDeGestao(id: string, aprovar: boolean) {
  const c = await cliente();
  ou(await c.rpc("revisar_pedido_de_gestao", { p_pedido: id, p_aprovar: aprovar }));
}
