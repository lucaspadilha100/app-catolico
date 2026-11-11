import type { Onde, Periodo } from "@/paroquias/api";
import type { Dezena, Encontro, ItemDaAgendaDeTerco, Terco } from "./tipos";

const cliente = async () => (await import("@/lib/supabase")).supabase;

const ou = <T>(r: { data: T | null; error: { message: string } | null }): T => {
  if (r.error) throw new Error(r.error.message);
  return r.data as T;
};

export interface TercoCompleto {
  terco: Terco;
  paroquia: { id: string; nome: string } | null;
  encontros: Encontro[];
  conduzo: boolean;
  responsavel: boolean;
}

const hojeIso = () => new Date().toLocaleDateString("sv-SE");

export async function carregarTerco(id: string): Promise<TercoCompleto | null> {
  const c = await cliente();
  const [t, e, sessao] = await Promise.all([
    c.from("tercos").select("*, paroquias(id, nome)").eq("id", id).maybeSingle(),
    c.from("terco_encontros").select("*").eq("terco_id", id).gte("data", hojeIso()).order("data").limit(4),
    c.auth.getSession(),
  ]);
  const linha = ou(t) as (Terco & { paroquias: { id: string; nome: string } | null }) | null;
  if (!linha) return null;
  const { paroquias, ...terco } = linha;
  let conduzo = false;
  if (sessao.data.session) conduzo = !!ou(await c.rpc("conduz_o_terco", { p_terco: id }));
  return { terco, paroquia: paroquias, encontros: ou(e) as Encontro[], conduzo, responsavel: sessao.data.session?.user.id === terco.responsavel_id };
}

export async function tercosPorIds(ids: string[]): Promise<Terco[]> {
  if (!ids.length) return [];
  const c = await cliente();
  return ou(await c.from("tercos").select("*").in("id", ids.slice(0, 50)).order("nome")) as Terco[];
}

export async function meusTercos(): Promise<Terco[]> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  if (!data.session) return [];
  return ou(await c.from("tercos").select("*").eq("responsavel_id", data.session.user.id).order("nome")) as Terco[];
}

export async function tercosParaRevisar(): Promise<Terco[]> {
  const c = await cliente();
  return ou(await c.from("tercos").select("*").eq("situacao", "pendente").order("criado_em").limit(50)) as Terco[];
}

export async function revisarTerco(id: string, situacao: "aprovado" | "recusado") {
  const c = await cliente();
  ou(await c.from("tercos").update({ situacao }).eq("id", id));
}

export type DadosDoTerco = Omit<Terco, "id" | "responsavel_id" | "situacao" | "ativo">;

export async function salvarTerco(dados: DadosDoTerco, id?: string): Promise<string> {
  const c = await cliente();
  if (id) {
    ou(await c.from("tercos").update(dados).eq("id", id));
    return id;
  }
  const r = ou(await c.from("tercos").insert(dados).select("id").single()) as { id: string };
  return r.id;
}

export async function apagarTerco(id: string) {
  const c = await cliente();
  ou(await c.from("tercos").delete().eq("id", id));
}

export async function encontroDoDia(terco: string, data: string): Promise<Encontro | null> {
  const c = await cliente();
  return ou(await c.from("terco_encontros").select("*").eq("terco_id", terco).eq("data", data).maybeSingle()) as Encontro | null;
}

export async function salvarEncontro(e: { terco_id: string; data: string; misterios: string; dezenas: Dezena[]; intencoes: string; avisos: string }): Promise<Encontro> {
  const c = await cliente();
  return ou(await c.from("terco_encontros").upsert(e, { onConflict: "terco_id,data" }).select("*").single()) as Encontro;
}

export async function moverAoVivo(id: string, posicao: { passo: number; conta: number }, aoVivo: boolean) {
  const c = await cliente();
  ou(await c.from("terco_encontros").update({ passo: posicao.passo, conta: posicao.conta, ao_vivo: aoVivo }).eq("id", id));
}

export async function lerEncontro(id: string): Promise<Encontro | null> {
  const c = await cliente();
  return ou(await c.from("terco_encontros").select("*").eq("id", id).maybeSingle()) as Encontro | null;
}

export async function ouvirEncontro(id: string, aoMudar: (e: Encontro) => void): Promise<() => void> {
  const c = await cliente();
  const canal = c
    .channel(`terco-${id}`)
    .on("postgres_changes", { event: "UPDATE", schema: "public", table: "terco_encontros", filter: `id=eq.${id}` }, (m) => aoMudar(m.new as Encontro))
    .subscribe();
  return () => {
    void c.removeChannel(canal);
  };
}

export async function agendaDeTercos(p: Onde & Periodo, pular = 0, limite = 30): Promise<ItemDaAgendaDeTerco[]> {
  const c = await cliente();
  return ou(
    await c.rpc("agenda_de_tercos", {
      p_lat: p.local?.lat ?? null,
      p_lng: p.local?.lng ?? null,
      p_inicio: p.inicio,
      p_horas: p.horas,
      p_raio_km: p.raioKm ?? 10,
      p_limite: limite,
      p_cidade: p.cidade?.cidade ?? "",
      p_uf: p.cidade?.uf ?? "",
      p_pular: pular,
      p_ate: p.ate,
    }),
  ) as ItemDaAgendaDeTerco[];
}

export async function ajudantesDoTerco(terco: string): Promise<{ usuario_id: string; email: string }[]> {
  const c = await cliente();
  return ou(await c.rpc("ajudantes_do_terco", { p_terco: terco })) as { usuario_id: string; email: string }[];
}

export async function adicionarAjudante(terco: string, email: string) {
  const c = await cliente();
  ou(await c.rpc("adicionar_ajudante", { p_terco: terco, p_email: email }));
}

export async function removerAjudante(terco: string, usuario: string) {
  const c = await cliente();
  ou(await c.rpc("remover_ajudante", { p_terco: terco, p_usuario: usuario }));
}
