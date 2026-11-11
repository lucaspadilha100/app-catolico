import { useEffect } from "react";
import { usePreferencias } from "@/lib/preferencias";
import { useConta } from "@/conta/useConta";

const cliente = async () => (await import("@/lib/supabase")).supabase;

const ou = <T>(r: { data: T | null; error: { message: string } | null }): T => {
  if (r.error) throw new Error(r.error.message);
  return r.data as T;
};

export async function meuApoio(): Promise<string> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  if (!data.session) return "";
  const r = ou(await c.from("apoiadores").select("ate").eq("usuario_id", data.session.user.id).maybeSingle()) as { ate: string } | null;
  return r?.ate ?? "";
}

export async function temAvisoPendente(): Promise<boolean> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  if (!data.session) return false;
  const r = ou(await c.from("apoios_avisados").select("id").eq("usuario_id", data.session.user.id).eq("situacao", "pendente").limit(1)) as { id: string }[];
  return r.length > 0;
}

export async function avisarApoio(a: { nome_no_pix: string; valor: number | null; pago_em: string }) {
  const c = await cliente();
  ou(await c.from("apoios_avisados").insert(a));
}

export interface ApoioParaConferir {
  id: string;
  nome_no_pix: string;
  valor: number | null;
  pago_em: string;
  email: string;
  apoiador_ate: string | null;
  criado_em: string;
}

export async function apoiosParaConferir(): Promise<ApoioParaConferir[]> {
  const c = await cliente();
  return ou(await c.rpc("apoios_para_conferir")) as ApoioParaConferir[];
}

export async function revisarApoio(id: string, confirmar: boolean) {
  const c = await cliente();
  ou(await c.rpc("revisar_apoio", { p_aviso: id, p_confirmar: confirmar }));
}

export function useApoiador(): string {
  const { email, pronto } = useConta();
  const { preferencias, mudar } = usePreferencias();
  useEffect(() => {
    if (!pronto || !email) return;
    let ativo = true;
    meuApoio()
      .then((ate) => ativo && ate !== preferencias.apoiadorAte && mudar({ apoiadorAte: ate }))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [email, pronto, preferencias.apoiadorAte, mudar]);
  return email ? preferencias.apoiadorAte : "";
}

export interface OpcaoDeVoto {
  id: string;
  titulo: string;
  descricao: string;
  ativa: boolean;
  votos: number;
}

export async function votacao(): Promise<{ opcoes: OpcaoDeVoto[]; meu: string | null }> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  if (!data.session) return { opcoes: [], meu: null };
  const [o, r, v] = await Promise.all([
    c.from("votacao_opcoes").select("id, titulo, descricao, ativa").eq("ativa", true).order("criado_em"),
    c.rpc("resultado_da_votacao"),
    c.from("votos").select("opcao_id").eq("usuario_id", data.session.user.id).maybeSingle(),
  ]);
  const contagem = new Map(((ou(r) ?? []) as { opcao_id: string; votos: number }[]).map((x) => [x.opcao_id, x.votos]));
  const opcoes = ((ou(o) ?? []) as Omit<OpcaoDeVoto, "votos">[]).map((x) => ({ ...x, votos: contagem.get(x.id) ?? 0 }));
  const meu = (ou(v) as { opcao_id: string } | null)?.opcao_id ?? null;
  return { opcoes, meu: opcoes.some((x) => x.id === meu) ? meu : null };
}

export async function votar(opcao: string) {
  const c = await cliente();
  ou(await c.from("votos").upsert({ opcao_id: opcao, em: new Date().toISOString() }, { onConflict: "usuario_id" }));
}

export async function criarOpcaoDeVoto(titulo: string, descricao: string) {
  const c = await cliente();
  ou(await c.from("votacao_opcoes").insert({ titulo, descricao }));
}

export async function encerrarOpcaoDeVoto(id: string) {
  const c = await cliente();
  ou(await c.from("votacao_opcoes").update({ ativa: false }).eq("id", id));
}
