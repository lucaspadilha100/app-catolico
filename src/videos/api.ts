export type TipoDeVideo = "homilia" | "missa" | "terco";

export interface Video {
  id: string;
  canal_id: string;
  canal: string;
  tipo: TipoDeVideo;
  titulo: string;
  dia: string;
  referencia: string;
  escondido: boolean;
  embutivel: boolean;
}

export const NOME_DO_TIPO: Record<TipoDeVideo, string> = {
  homilia: "Homilia",
  missa: "Santa Missa",
  terco: "Terço",
};

const cliente = async () => (await import("@/lib/supabase")).supabase;

interface Linha {
  id: string;
  canal_id: string;
  tipo: TipoDeVideo;
  titulo: string;
  dia: string;
  referencia: string;
  escondido: boolean;
  embutivel: boolean;
  publicado_em: string;
  canais_video: { nome: string; ordem: number } | null;
}

const CAMPOS = "id,canal_id,tipo,titulo,dia,referencia,escondido,embutivel,publicado_em,canais_video(nome,ordem)";

function organizar(linhas: Linha[]): Video[] {
  return linhas
    .sort((a, b) => (a.canais_video?.ordem ?? 99) - (b.canais_video?.ordem ?? 99) || b.publicado_em.localeCompare(a.publicado_em))
    .map((l) => ({ id: l.id, canal_id: l.canal_id, canal: l.canais_video?.nome ?? "", tipo: l.tipo, titulo: l.titulo, dia: l.dia, referencia: l.referencia, escondido: l.escondido, embutivel: l.embutivel !== false }));
}

export async function videosDoDia(iso: string): Promise<Video[]> {
  const url = import.meta.env.VITE_SUPABASE_URL as string;
  const chave = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
  const r = await fetch(`${url}/rest/v1/videos?select=${CAMPOS}&dia=eq.${iso}&order=publicado_em.desc&limit=40`, { headers: { apikey: chave } });
  if (!r.ok) throw new Error(String(r.status));
  return organizar((await r.json()) as Linha[]);
}

export async function videosDoDiaParaOAdmin(iso: string): Promise<Video[]> {
  const c = await cliente();
  const { data, error } = await c.from("videos").select(CAMPOS).eq("dia", iso).order("publicado_em", { ascending: false }).limit(40);
  if (error) throw new Error(error.message);
  return organizar((data ?? []) as unknown as Linha[]);
}

export async function esconderVideo(id: string, escondido: boolean): Promise<void> {
  const c = await cliente();
  const { error } = await c.rpc("esconder_video", { p_id: id, p_escondido: escondido });
  if (error) throw new Error(error.message);
}

export const capaDoVideo = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const enderecoNoYoutube = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export function enderecoDoPlayer(id: string): string {
  const p = new URLSearchParams({ playsinline: "1", rel: "0", modestbranding: "1", autoplay: "1" });
  return `https://www.youtube-nocookie.com/embed/${id}?${p}`;
}

export function tituloLimpo(titulo: string, canal: string): string {
  const partes = titulo
    .split("|")
    .map((p) => p.trim())
    .filter((p) => p && !/^#\d+$/.test(p) && !/^(medita[cç][aã]o da palavra|homilia (di[aá]ria|dominical)|live ao vivo|santa missa)$/i.test(p));
  const t = (partes[0] ?? titulo).replace(/\s*#\d+\s*/g, " ").replace(new RegExp(`\\s*-?\\s*${canal}\\s*$`, "i"), "").trim();
  return t || titulo;
}
