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
