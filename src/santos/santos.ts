import { useCallback, useEffect, useState } from "react";
import type { CreditoDoSanto, FotoDoIndice, ManifestoDosSantos, Santo, SantoDoIndice } from "./tipos";
import MANIFESTO from "./dados/manifesto.json";
import { textoDoCredito } from "@/lib/imagens";
import { PARTES, normalizar, parteDoId } from "./comum";

export { normalizar, nomeParaOrdenar } from "./comum";

const M = MANIFESTO as ManifestoDosSantos;

export const PASTA_DAS_FOTOS = "/imagens/santos";

export const baseDasFotos = (valor: string | undefined) => (valor?.trim() || PASTA_DAS_FOTOS).replace(/\/+$/, "");

const BASE = baseDasFotos(import.meta.env.VITE_IMAGENS_URL as string | undefined);

export const urlDaFoto = (base: string, arquivo: string) => `${base}/${arquivo.split("/").map(encodeURIComponent).join("/")}`;

export const fotoDoSanto = (s: { imagem?: FotoDoIndice } | null | undefined): string | null => (s?.imagem?.arquivo ? urlDaFoto(BASE, s.imagem.arquivo) : null);

export const caminhoParaGuardar = (s: { imagem?: FotoDoIndice }): string | null => (s.imagem?.arquivo ? `${PASTA_DAS_FOTOS}/${s.imagem.arquivo}` : null);

export const fotoGuardada = (caminho: string, base = BASE): string =>
  caminho.startsWith(`${PASTA_DAS_FOTOS}/`) ? `${base}${caminho.slice(PASTA_DAS_FOTOS.length)}` : caminho;

export const focoDaImagem = (s: { imagem?: FotoDoIndice }) => s.imagem?.foco ?? "50% 25%";

export function creditoDaFoto(c: Pick<CreditoDoSanto, "obra" | "autor" | "licenca" | "data" | "fonte">): string {
  return [c.obra, textoDoCredito({ autor: c.data ? `${c.autor}, ${c.data}` : c.autor, licenca: c.licenca }), c.fonte ?? "Wikimedia Commons"].filter(Boolean).join(". ");
}

const cache = new Map<string, Promise<unknown>>();

function carregar<T>(arquivo: string): Promise<T> {
  let promessa = cache.get(arquivo) as Promise<T> | undefined;
  if (!promessa) {
    promessa = fetch(`${M.pasta}/${arquivo}`).then((r) => {
      if (!r.ok) throw new Error(`Santos indisponíveis: ${arquivo}`);
      return r.json() as Promise<T>;
    });
    promessa.catch(() => cache.delete(arquivo));
    cache.set(arquivo, promessa);
  }
  return promessa;
}

export const TOTAL_DE_SANTOS = M.total;
export const CONTAGEM_DOS_GRUPOS: Readonly<Record<string, number>> = M.grupos;
export const LETRAS_DOS_CREDITOS = Object.keys(M.creditos);
export const totalDeCreditos = (letra?: string) => (letra ? (M.creditos[letra]?.total ?? 0) : M.comFoto);

export const indiceDosSantos = () => carregar<SantoDoIndice[]>(M.indice);

export const santosDoDia = (mmdd: string): Promise<Santo[]> => (M.dias[mmdd] ? carregar<Santo[]>(M.dias[mmdd]!) : Promise.resolve([]));

export const santosDaDataMMDD = async (mmdd: string) => (await santosDoDia(mmdd)).filter((s) => s.grupo === "calendario");

export const lembradosDaDataMMDD = async (mmdd: string) => (await santosDoDia(mmdd)).filter((s) => !s.calendario);

const parte = (n: number) => carregar<SantoDoIndice[]>(M.partes[n]!);

export async function santoPorId(id: string): Promise<Santo | null> {
  const item = (await parte(parteDoId(id))).find((s) => s.id === id);
  if (!item) return null;
  return (await santosDoDia(item.data)).find((s) => s.id === id) ?? null;
}

export const santosPorIds = async (ids: string[]): Promise<Santo[]> => (await Promise.all(ids.map(santoPorId))).filter((s): s is Santo => !!s);

export const santosDoGrupo = async (grupo: string) => (await indiceDosSantos()).filter((s) => s.grupo === grupo);

export const creditosDaLetra = (letra: string): Promise<CreditoDoSanto[]> => (M.creditos[letra] ? carregar<CreditoDoSanto[]>(M.creditos[letra]!.arquivo) : Promise.resolve([]));

function sorteador(iso: string) {
  let semente = 0;
  for (const c of iso) semente = (semente * 31 + c.charCodeAt(0)) >>> 0;
  return (limite: number) => {
    semente = (semente * 1103515245 + 12345) >>> 0;
    return semente % limite;
  };
}

export async function santosParaConhecer(iso: string, n: number): Promise<SantoDoIndice[]> {
  const mmdd = iso.slice(5).replace("-", "");
  const sortear = sorteador(iso);
  const quantas = Math.min(PARTES, Math.max(1, Math.ceil((3 * n * PARTES) / Math.max(1, M.comFoto))));
  const ordem = Array.from({ length: PARTES }, (_, i) => i);
  for (let i = PARTES - 1; i > 0; i--) {
    const j = sortear(i + 1);
    [ordem[i], ordem[j]] = [ordem[j]!, ordem[i]!];
  }
  const partes = await Promise.all(ordem.slice(0, quantas).map(parte));
  const todos = partes.flat().filter((s) => s.data !== mmdd && s.imagem);
  const escolhidos: SantoDoIndice[] = [];
  const usados = new Set<number>();
  while (escolhidos.length < n && usados.size < todos.length) {
    const i = sortear(todos.length);
    if (!usados.has(i)) {
      usados.add(i);
      escolhidos.push(todos[i]!);
    }
  }
  return escolhidos;
}

export const NOME_DO_GRUPO: Record<string, string> = {
  brasil: "Do Brasil",
  jovens: "Jovens",
  "nossa-senhora": "Nossa Senhora",
  modernos: "Dos nossos tempos",
  populares: "Devoção popular",
  veneraveis: "Veneráveis",
  calendario: "Do calendário",
};

export const SELO: Record<string, string> = { beato: "Beato", veneravel: "Venerável", servo: "Servo de Deus" };

export const seloDoSanto = (s: SantoDoIndice): string | null => {
  if (!s.situacao || !SELO[s.situacao]) return null;
  if (/^(Beat[oa]s?|Venerável|Serv[oa] de Deus)\b/.test(s.nome)) return null;
  const feminino = /^(Beata|Santa|Serva|Venerável Madre|Venerável Irmã)\b/.test(s.nome);
  if (s.situacao === "beato") return feminino ? "Beata" : "Beato";
  if (s.situacao === "servo") return feminino ? "Serva de Deus" : "Servo de Deus";
  return "Venerável";
};

export function buscarSantos<T extends SantoDoIndice & { resumo?: string }>(lista: T[], termo: string): T[] {
  const palavras = normalizar(termo).split(/\s+/).filter(Boolean);
  if (!palavras.length) return [];
  const casa = (t: string) => palavras.every((p) => normalizar(t).includes(p));
  const noNome = lista.filter((s) => casa(`${s.nome} ${s.nomes.join(" ")}`));
  const vistos = new Set(noNome);
  const noResto = lista.filter((s) => !vistos.has(s) && casa(`${s.resumo ?? ""} ${(s.padroeiro ?? []).join(" ")}`));
  return [...noNome, ...noResto];
}

export function santosDoNome<T extends SantoDoIndice>(lista: T[], nome: string): T[] {
  const alvo = normalizar(nome.split(/\s+/)[0] ?? "");
  if (!alvo) return [];
  return lista.filter((s) => s.nomes.some((n) => normalizar(n).split(/\s+/).includes(alvo) || normalizar(n) === alvo));
}

const CHAVE = "santinho-santos-de-devocao";
const EVENTO = "santinho-santos-de-devocao";

const lerDevocao = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem(CHAVE) ?? "[]") as string[];
  } catch {
    return [];
  }
};

export function useSantosDeDevocao(): [string[], (id: string) => void] {
  const [ids, setIds] = useState(lerDevocao);
  useEffect(() => {
    const ouvir = () => setIds(lerDevocao());
    window.addEventListener(EVENTO, ouvir);
    return () => window.removeEventListener(EVENTO, ouvir);
  }, []);
  const alternar = useCallback((id: string) => {
    const atual = lerDevocao();
    const novo = atual.includes(id) ? atual.filter((x) => x !== id) : [...atual, id];
    try {
      localStorage.setItem(CHAVE, JSON.stringify(novo));
    } catch {}
    window.dispatchEvent(new Event(EVENTO));
  }, []);
  return [ids, alternar];
}
