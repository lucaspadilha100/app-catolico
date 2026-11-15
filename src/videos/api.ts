import { useEffect, useState } from "react";

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
  aoVivo?: boolean;
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
  const vistos = new Set<string>();
  return linhas
    .sort((a, b) => (a.canais_video?.ordem ?? 99) - (b.canais_video?.ordem ?? 99) || b.publicado_em.localeCompare(a.publicado_em))
    .filter((l) => {
      if (l.escondido) return true;
      const chave = `${l.canal_id}:${l.tipo}`;
      if (vistos.has(chave)) return false;
      vistos.add(chave);
      return true;
    })
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

export function enderecoDoPlayer(id: string, tocar: boolean): string {
  const p = new URLSearchParams({ playsinline: "1", rel: "0", modestbranding: "1", autoplay: tocar ? "1" : "0" });
  return `https://www.youtube-nocookie.com/embed/${id}?${p}`;
}

const GENERICO = /^(medita[cç][aã]o da palavra|homilia( di[aá]ria| dominical)?|live ao vivo|ao vivo|live|santa missa( dominical)?|evangelho do dia)$/i;

function semCaixaAlta(t: string): string {
  const letras = t.replace(/[^A-Za-zÀ-ÿ]/g, "");
  if (letras.length < 4 || letras !== letras.toUpperCase()) return t;
  const baixo = t.toLocaleLowerCase("pt-BR");
  return (baixo.charAt(0).toLocaleUpperCase("pt-BR") + baixo.slice(1)).replace(/\bsanta missa\b/gi, "Santa Missa").replace(/\bnossa senhora\b/gi, "Nossa Senhora");
}

function limparParte(p: string, canal: string): string {
  const nome = canal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return p
    .replace(/\s*\([^()]*\d{1,2}\/\d{1,2}\/\d{2,4}[^()]*\)/g, "")
    .replace(/\s*\(\s*\d{1,2}º? de [a-zçA-ZÇ]+\s*\)/g, "")
    .replace(/\s*\[?\b\d{1,2}\/\d{1,2}\/\d{2,4}\b\]?/g, "")
    .replace(/\s*#\d+/g, "")
    .replace(/\s*(com\s+)?@\w+/gi, "")
    .replace(new RegExp(`\\s*[-/]?\\s*(com\\s+(o\\s+)?)?${nome}\\s*!?$`, "i"), "")
    .replace(/\s*com\s+(o\s+)?(Pe\.|Padre|Frei)\s+[A-ZÀ-Ý][\wÀ-ÿ]*(\s+[A-ZÀ-Ý][\wÀ-ÿ]*)*\s*$/u, "")
    .replace(/[\s\-–:|,]+$/g, "")
    .replace(/^[\s\-–:|,]+/g, "")
    .trim();
}

export function tituloLimpo(titulo: string, canal: string): string {
  const partes = titulo
    .split("|")
    .map((p) => limparParte(p, canal))
    .filter((p) => p && !/^\d{1,2}h(\d{2})?$/i.test(p) && !/^[1-3]?\s?[A-Za-zÀ-ÿ]{1,4}\s+\d+\s*,\s*\d/.test(p));
  const escolhida = partes.find((p) => !GENERICO.test(p)) ?? (partes.length > 1 && /^homilia$/i.test(partes[0]!) ? partes[1] : partes[0]) ?? titulo;
  const final = partes[0] && /^homilia$/i.test(partes[0]) && escolhida !== partes[0] ? `Homilia: ${escolhida}` : escolhida;
  return semCaixaAlta(final);
}

export interface Transmissao {
  canal_id: string;
  canal: string;
  tv: boolean;
  ordem: number;
  video_id: string | null;
  titulo: string;
  desde: string | null;
}

interface LinhaDeTransmissao {
  canal_id: string;
  video_id: string | null;
  titulo: string | null;
  desde: string | null;
  canais_video: { nome: string; ordem: number; tv: boolean } | null;
}

export async function transmissoes(): Promise<Transmissao[]> {
  const url = import.meta.env.VITE_SUPABASE_URL as string;
  const chave = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
  try {
    const r = await fetch(`${url}/rest/v1/transmissoes?select=canal_id,video_id,titulo,desde,canais_video(nome,ordem,tv)&order=canal_id`, { headers: { apikey: chave } });
    if (!r.ok) return [];
    return ((await r.json()) as LinhaDeTransmissao[])
      .map((l) => ({ canal_id: l.canal_id, canal: l.canais_video?.nome ?? "", tv: !!l.canais_video?.tv, ordem: l.canais_video?.ordem ?? 99, video_id: l.video_id || null, titulo: l.titulo ?? "", desde: l.desde }))
      .filter((t) => t.video_id || t.tv)
      .sort((a, b) => Number(!a.video_id) - Number(!b.video_id) || a.ordem - b.ordem);
  } catch {
    return [];
  }
}

export function useTransmissoes(): Transmissao[] {
  const [lista, setLista] = useState<Transmissao[]>([]);
  useEffect(() => {
    let ativo = true;
    const ler = () => {
      if (!navigator.onLine) return;
      void transmissoes().then((t) => ativo && setLista(t));
    };
    ler();
    const relogio = setInterval(ler, 120000);
    const aoVoltar = () => document.visibilityState === "visible" && ler();
    document.addEventListener("visibilitychange", aoVoltar);
    return () => {
      ativo = false;
      clearInterval(relogio);
      document.removeEventListener("visibilitychange", aoVoltar);
    };
  }, []);
  return lista;
}

export function tituloDaTransmissao(t: Transmissao): string {
  const limpo = tituloLimpo(t.titulo, t.canal).replace(/\s*[-|:]?\s*ao vivo\s*$/i, "").replace(/^ao vivo\s*[-|:]?\s*/i, "").trim();
  return limpo.toLowerCase() === t.canal.toLowerCase() ? "" : limpo;
}

export function videoDaTransmissao(t: Transmissao, dia: string): Video {
  return { id: t.video_id ?? "", canal_id: t.canal_id, canal: t.canal, tipo: "missa", titulo: tituloDaTransmissao(t), dia, referencia: "", escondido: false, embutivel: true, aoVivo: true };
}
