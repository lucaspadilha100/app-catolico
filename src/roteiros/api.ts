import type { Bloco, Roteiro } from "./tipos";

const cliente = async () => (await import("@/lib/supabase")).supabase;

const ou = <T>(r: { data: T | null; error: { message: string } | null }): T => {
  if (r.error) throw new Error(r.error.message);
  return r.data as T;
};

export async function meusRoteiros(): Promise<Roteiro[]> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  if (!data.session) return [];
  return ou(await c.from("roteiros").select("id, codigo, titulo, data, hora, local, passo, conta, ao_vivo, terco_id, dono_id, atualizado_em, blocos").order("data", { ascending: false, nullsFirst: true }).order("criado_em", { ascending: false }).limit(100)) as Roteiro[];
}

export async function carregarRoteiro(id: string): Promise<Roteiro | null> {
  const c = await cliente();
  return ou(await c.from("roteiros").select("*").eq("id", id).maybeSingle()) as Roteiro | null;
}

export async function criarRoteiro(r: { titulo: string; terco_id: string | null; data: string | null; hora: string | null; local: string; blocos: Bloco[] }): Promise<string> {
  const c = await cliente();
  return (ou(await c.from("roteiros").insert(r).select("id").single()) as { id: string }).id;
}

export async function salvarRoteiro(id: string, r: Partial<Pick<Roteiro, "titulo" | "data" | "hora" | "local" | "blocos">>) {
  const c = await cliente();
  ou(await c.from("roteiros").update(r).eq("id", id));
}

export async function apagarRoteiro(id: string) {
  const c = await cliente();
  ou(await c.from("roteiros").delete().eq("id", id));
}

export async function roteiroPorCodigo(codigo: string): Promise<Roteiro | null> {
  const c = await cliente();
  const r = ou(await c.rpc("roteiro_por_codigo", { p_codigo: codigo })) as Roteiro[];
  return r[0] ?? null;
}

export interface Estado {
  passo: number;
  conta: number;
  ao_vivo: boolean;
}

export async function estadoDoRoteiro(codigo: string): Promise<Estado | null> {
  const c = await cliente();
  const r = ou(await c.rpc("roteiro_estado", { p_codigo: codigo })) as Estado[];
  return r[0] ?? null;
}

export async function podeConduzir(id: string): Promise<boolean> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  if (!data.session) return false;
  const r = await c.from("roteiros").select("id").eq("id", id).maybeSingle();
  return !!r.data;
}

export async function canalDoRoteiro(codigo: string): Promise<{ enviar: (e: Estado) => void; fechar: () => void }> {
  const c = await cliente();
  const canal = c.channel(`roteiro-${codigo}`);
  canal.subscribe();
  return {
    enviar: (e) => void canal.send({ type: "broadcast", event: "estado", payload: e }),
    fechar: () => void c.removeChannel(canal),
  };
}

export async function gravarEstado(id: string, e: Estado) {
  const c = await cliente();
  ou(await c.from("roteiros").update(e).eq("id", id));
}

export async function ouvirRoteiro(codigo: string, aoMudar: (e: Estado) => void): Promise<() => void> {
  const c = await cliente();
  const canal = c
    .channel(`roteiro-${codigo}`)
    .on("broadcast", { event: "estado" }, (m) => aoMudar(m.payload as Estado))
    .subscribe();
  return () => {
    void c.removeChannel(canal);
  };
}

export interface RoteiroDoTerco {
  codigo: string;
  titulo: string;
  data: string | null;
  hora: string | null;
  ao_vivo: boolean;
}

export async function roteirosDoTerco(terco: string): Promise<RoteiroDoTerco[]> {
  const c = await cliente();
  return ou(await c.rpc("roteiros_do_terco", { p_terco: terco })) as RoteiroDoTerco[];
}
