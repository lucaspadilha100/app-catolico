const cliente = async () => (await import("@/lib/supabase")).supabase;

const ou = <T>(r: { data: T | null; error: { message: string } | null }): T => {
  if (r.error) throw new Error(r.error.message);
  return r.data as T;
};

export interface Ministerio {
  id: string;
  nome: string;
  codigo: string;
  paroquia_id: string | null;
  dono_id: string;
  paroquias?: { nome: string } | null;
}

export interface Membro {
  ministerio_id: string;
  usuario_id: string;
  nome: string;
  coordena: boolean;
}

export interface ItemDaEscala {
  id: string;
  ministerio_id: string;
  data: string;
  hora: string | null;
  celebracao: string;
  funcao: string;
  membro_id: string | null;
  troca_pedida: boolean;
  observacao: string;
  ministerios?: { nome: string } | null;
}

const hojeIso = () => new Date().toLocaleDateString("sv-SE");

export async function euSou(): Promise<string | null> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  return data.session?.user.id ?? null;
}

export async function meusMinisterios(): Promise<Ministerio[]> {
  const c = await cliente();
  return ou(await c.from("ministerios").select("id, nome, codigo, paroquia_id, dono_id, paroquias(nome)").eq("ativo", true).order("nome").limit(50)) as unknown as Ministerio[];
}

export async function criarMinisterio(nome: string, paroquia: string | null = null): Promise<string> {
  const c = await cliente();
  return (ou(await c.from("ministerios").insert({ nome, paroquia_id: paroquia }).select("id").single()) as { id: string }).id;
}

export async function carregarMinisterio(id: string): Promise<{ ministerio: Ministerio; membros: Membro[]; coordeno: boolean } | null> {
  const c = await cliente();
  const [m, mb, co] = await Promise.all([
    c.from("ministerios").select("id, nome, codigo, paroquia_id, dono_id, paroquias(nome)").eq("id", id).maybeSingle(),
    c.from("ministerio_membros").select("ministerio_id, usuario_id, nome, coordena").eq("ministerio_id", id).order("nome").limit(300),
    c.rpc("coordena_ministerio", { p_ministerio: id }),
  ]);
  const ministerio = ou(m) as unknown as Ministerio | null;
  if (!ministerio) return null;
  return { ministerio, membros: ou(mb) as Membro[], coordeno: !!ou(co) };
}

export async function renomearMinisterio(id: string, nome: string) {
  const c = await cliente();
  ou(await c.from("ministerios").update({ nome }).eq("id", id));
}

export async function escalaDoMinisterio(id: string, desde = hojeIso()): Promise<ItemDaEscala[]> {
  const c = await cliente();
  return ou(await c.from("escala").select("*").eq("ministerio_id", id).gte("data", desde).order("data").order("hora", { nullsFirst: true }).order("criado_em").limit(300)) as ItemDaEscala[];
}

export async function minhaEscala(eu: string): Promise<ItemDaEscala[]> {
  const c = await cliente();
  return ou(await c.from("escala").select("*, ministerios(nome)").eq("membro_id", eu).gte("data", hojeIso()).order("data").order("hora", { nullsFirst: true }).limit(50)) as ItemDaEscala[];
}

export async function trocasEVagas(eu: string): Promise<ItemDaEscala[]> {
  const c = await cliente();
  const r = ou(await c.from("escala").select("*, ministerios(nome)").gte("data", hojeIso()).or("troca_pedida.eq.true,membro_id.is.null").order("data").limit(60)) as ItemDaEscala[];
  return r.filter((i) => i.membro_id !== eu);
}

export async function adicionarNaEscala(item: Pick<ItemDaEscala, "ministerio_id" | "data" | "hora" | "celebracao" | "funcao" | "membro_id">) {
  const c = await cliente();
  ou(await c.from("escala").insert(item));
}

export async function mudarItem(id: string, patch: Partial<Pick<ItemDaEscala, "membro_id" | "troca_pedida">>) {
  const c = await cliente();
  ou(await c.from("escala").update(patch).eq("id", id));
}

export async function apagarItem(id: string) {
  const c = await cliente();
  ou(await c.from("escala").delete().eq("id", id));
}

export async function verMinisterio(codigo: string): Promise<{ id: string; nome: string; paroquia: string | null } | null> {
  const c = await cliente();
  const r = ou(await c.rpc("ver_ministerio", { p_codigo: codigo })) as { id: string; nome: string; paroquia: string | null }[];
  return r[0] ?? null;
}

export async function entrarNoMinisterio(codigo: string, nome: string): Promise<string> {
  const c = await cliente();
  return ou(await c.rpc("entrar_no_ministerio", { p_codigo: codigo, p_nome: nome })) as string;
}

export async function mudarMembro(ministerio: string, usuario: string, patch: Partial<Pick<Membro, "nome" | "coordena">>) {
  const c = await cliente();
  ou(await c.from("ministerio_membros").update(patch).eq("ministerio_id", ministerio).eq("usuario_id", usuario));
}

export async function tirarMembro(ministerio: string, usuario: string) {
  const c = await cliente();
  ou(await c.from("ministerio_membros").delete().eq("ministerio_id", ministerio).eq("usuario_id", usuario));
}
