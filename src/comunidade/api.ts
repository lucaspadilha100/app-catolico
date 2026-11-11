import type { GrupoDeMisterios } from "@/liturgia/terco";

const cliente = async () => (await import("@/lib/supabase")).supabase;

const ou = <T>(r: { data: T | null; error: { message: string } | null }): T => {
  if (r.error) throw new Error(r.error.message);
  return r.data as T;
};

export const TIPOS_DE_INTENCAO = [
  { id: "saude", rotulo: "Saúde", frase: (n: string) => `Rezem pela saúde de ${n}` },
  { id: "trabalho", rotulo: "Trabalho", frase: (n: string) => `Rezem por ${n}, pelo seu trabalho` },
  { id: "familia", rotulo: "Família", frase: (n: string) => `Rezem pela família de ${n}` },
  { id: "falecido", rotulo: "Falecido", frase: (n: string) => `Rezem pela alma de ${n}` },
  { id: "conversao", rotulo: "Conversão", frase: (n: string) => `Rezem pela conversão de ${n}` },
  { id: "estudos", rotulo: "Estudos", frase: (n: string) => `Rezem pelos estudos de ${n}` },
  { id: "gestacao", rotulo: "Gestação", frase: (n: string) => `Rezem pela gestação de ${n}` },
  { id: "vocacao", rotulo: "Vocação", frase: (n: string) => `Rezem pela vocação de ${n}` },
  { id: "paz", rotulo: "Paz", frase: (n: string) => `Rezem pela paz no coração de ${n}` },
  { id: "gratidao", rotulo: "Gratidão", frase: (n: string) => `Rezem com ${n}, em ação de graças` },
] as const;

export type TipoDeIntencao = (typeof TIPOS_DE_INTENCAO)[number]["id"];

export const fraseDaIntencao = (tipo: string, nome: string) => (TIPOS_DE_INTENCAO.find((t) => t.id === tipo)?.frase ?? ((n: string) => `Rezem por ${n}`))(nome);

export const NOME_VALIDO = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,20}$/;

export interface Intencao {
  id: string;
  autor_id: string;
  tipo: TipoDeIntencao;
  nome: string;
  grupo_id: string | null;
  rezaram: number;
  oculta: boolean;
  criado_em: string;
  expira_em: string;
}

export async function meuId(): Promise<string | null> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  return data.session?.user.id ?? null;
}

export async function listarIntencoes(p: { grupo?: string | null; pular: number; limite: number }): Promise<Intencao[]> {
  const c = await cliente();
  let q = c.from("intencoes").select("*").order("criado_em", { ascending: false }).order("id", { ascending: false });
  q = p.grupo ? q.eq("grupo_id", p.grupo) : q.is("grupo_id", null).eq("oculta", false).gt("expira_em", new Date().toISOString());
  return ou(await q.range(p.pular, p.pular + p.limite - 1)) as Intencao[];
}

export async function minhasIntencoes(): Promise<Intencao[]> {
  const id = await meuId();
  if (!id) return [];
  const c = await cliente();
  return ou(await c.from("intencoes").select("*").eq("autor_id", id).is("grupo_id", null).order("criado_em", { ascending: false }).limit(20)) as Intencao[];
}

export async function pedirOracao(tipo: TipoDeIntencao, nome: string, grupo: string | null = null) {
  const c = await cliente();
  ou(await c.from("intencoes").insert({ tipo, nome, grupo_id: grupo }));
  void import("@/lembretes/lembretes").then((m) => m.avisarMudancaDeIgrejas());
}

export async function apagarIntencao(id: string) {
  const c = await cliente();
  ou(await c.from("intencoes").delete().eq("id", id));
}

export async function rezeiPor(id: string): Promise<number> {
  const c = await cliente();
  return ou(await c.rpc("rezei_por", { p_intencao: id })) as number;
}

export async function denunciar(id: string, motivo: "ofensivo" | "falso" | "pessoal" | "outro") {
  const c = await cliente();
  ou(await c.rpc("denunciar_intencao", { p_intencao: id, p_motivo: motivo }));
}

export async function intencoesEscondidas(): Promise<Intencao[]> {
  const c = await cliente();
  return ou(await c.from("intencoes").select("*").eq("oculta", true).gt("expira_em", new Date().toISOString()).order("criado_em", { ascending: false }).limit(50)) as Intencao[];
}

export async function moderar(id: string, oculta: boolean) {
  const c = await cliente();
  ou(await c.from("intencoes").update({ oculta }).eq("id", id));
}

export interface Grupo {
  id: string;
  nome: string;
  tipo: "familia" | "oracao" | "pastoral" | "outro";
  dono_id: string;
  codigo: string;
}

export interface Membro {
  grupo_id: string;
  usuario_id: string;
  nome: string;
  papel: "dono" | "membro";
}

export const NOME_DO_TIPO_DE_GRUPO: Record<Grupo["tipo"], string> = {
  familia: "Família",
  oracao: "Grupo de oração",
  pastoral: "Pastoral",
  outro: "Outro",
};

export async function meusGrupos(): Promise<Grupo[]> {
  const c = await cliente();
  return ou(await c.from("grupos").select("*").order("nome")) as Grupo[];
}

export async function criarGrupo(nome: string, tipo: Grupo["tipo"], meuNome: string): Promise<string> {
  const c = await cliente();
  const g = ou(await c.from("grupos").insert({ nome, tipo }).select("id, dono_id").single()) as { id: string; dono_id: string };
  ou(await c.from("grupo_membros").update({ nome: meuNome }).eq("grupo_id", g.id).eq("usuario_id", g.dono_id));
  return g.id;
}

export async function carregarGrupo(id: string): Promise<{ grupo: Grupo; membros: Membro[] } | null> {
  const c = await cliente();
  const [g, m] = await Promise.all([
    c.from("grupos").select("*").eq("id", id).maybeSingle(),
    c.from("grupo_membros").select("*").eq("grupo_id", id).order("papel").order("nome").limit(200),
  ]);
  const grupo = ou(g) as Grupo | null;
  return grupo ? { grupo, membros: ou(m) as Membro[] } : null;
}

export async function verConvite(codigo: string): Promise<{ nome: string; tipo: Grupo["tipo"]; membros: number } | null> {
  const c = await cliente();
  const r = ou(await c.rpc("ver_convite", { p_codigo: codigo })) as { nome: string; tipo: Grupo["tipo"]; membros: number }[];
  return r[0] ?? null;
}

export async function entrarNoGrupo(codigo: string, nome: string): Promise<string> {
  const c = await cliente();
  return ou(await c.rpc("entrar_no_grupo", { p_codigo: codigo, p_nome: nome })) as string;
}

export async function sairDoGrupo(grupo: string, usuario: string) {
  const c = await cliente();
  ou(await c.from("grupo_membros").delete().eq("grupo_id", grupo).eq("usuario_id", usuario));
}

export async function apagarGrupo(id: string) {
  const c = await cliente();
  ou(await c.from("grupos").delete().eq("id", id));
}

export async function trocarConvite(id: string): Promise<string> {
  const c = await cliente();
  const novo = Array.from(crypto.getRandomValues(new Uint8Array(4)), (b) => b.toString(16).padStart(2, "0")).join("");
  ou(await c.from("grupos").update({ codigo: novo }).eq("id", id));
  return novo;
}

export interface TercoDoGrupo {
  grupo_id: string;
  misterios: GrupoDeMisterios;
  passo: number;
  conta: number;
  ao_vivo: boolean;
  condutor_id: string | null;
  atualizado_em: string;
}

export async function lerTercoDoGrupo(grupo: string): Promise<TercoDoGrupo | null> {
  const c = await cliente();
  return ou(await c.from("grupo_terco").select("*").eq("grupo_id", grupo).maybeSingle()) as TercoDoGrupo | null;
}

export async function comecarTercoDoGrupo(grupo: string, misterios: GrupoDeMisterios): Promise<TercoDoGrupo> {
  const c = await cliente();
  const eu = await meuId();
  return ou(
    await c
      .from("grupo_terco")
      .upsert({ grupo_id: grupo, misterios, passo: 0, conta: 0, ao_vivo: true, condutor_id: eu }, { onConflict: "grupo_id" })
      .select("*")
      .single(),
  ) as TercoDoGrupo;
}

export async function moverTercoDoGrupo(grupo: string, posicao: { passo: number; conta: number }, aoVivo: boolean) {
  const c = await cliente();
  ou(await c.from("grupo_terco").update({ passo: posicao.passo, conta: posicao.conta, ao_vivo: aoVivo }).eq("grupo_id", grupo));
}

export async function ouvirTercoDoGrupo(grupo: string, aoMudar: (t: TercoDoGrupo) => void): Promise<() => void> {
  const c = await cliente();
  const canal = c
    .channel(`grupo-${grupo}`)
    .on("postgres_changes", { event: "*", schema: "public", table: "grupo_terco", filter: `grupo_id=eq.${grupo}` }, (m) => aoMudar(m.new as TercoDoGrupo))
    .subscribe();
  return () => {
    void c.removeChannel(canal);
  };
}

export interface Campanha {
  id: string;
  titulo: string;
  oracao: "terco" | "ave-maria" | "pai-nosso" | "misericordia" | "missa";
  meta: number;
  inicio: string;
  fim: string;
  contagem: number;
}

export const NOME_DA_ORACAO_DA_CAMPANHA: Record<Campanha["oracao"], [string, string]> = {
  terco: ["terço", "terços"],
  "ave-maria": ["Ave-Maria", "Ave-Marias"],
  "pai-nosso": ["Pai-Nosso", "Pai-Nossos"],
  misericordia: ["Terço da Misericórdia", "Terços da Misericórdia"],
  missa: ["missa", "missas"],
};

const URL_DO_BANCO = import.meta.env.VITE_SUPABASE_URL as string;
const CHAVE_PUBLICA = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

export async function campanhaDoMomento(): Promise<Campanha | null> {
  const hoje = new Date().toLocaleDateString("sv-SE");
  const r = await fetch(`${URL_DO_BANCO}/rest/v1/campanhas?select=*&inicio=lte.${hoje}&fim=gte.${hoje}&order=fim&limit=1`, { headers: { apikey: CHAVE_PUBLICA } });
  if (!r.ok) return null;
  const lista = (await r.json()) as Campanha[];
  return lista[0] ?? null;
}

export async function somarNaCampanha(id: string, quantidade = 1): Promise<number | null> {
  const r = await fetch(`${URL_DO_BANCO}/rest/v1/rpc/somar_na_campanha`, {
    method: "POST",
    headers: { apikey: CHAVE_PUBLICA, "Content-Type": "application/json" },
    body: JSON.stringify({ p_campanha: id, p_quantidade: quantidade }),
  });
  if (!r.ok) return null;
  return (await r.json()) as number | null;
}

export async function salvarCampanha(c0: Omit<Campanha, "id" | "contagem">) {
  const c = await cliente();
  ou(await c.from("campanhas").insert(c0));
}
