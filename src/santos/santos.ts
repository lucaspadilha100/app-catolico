import { useCallback, useEffect, useState } from "react";
import type { CreditoDoSanto, FotoDoIndice, ManifestoDosSantos, Santo, SantoDoIndice } from "./tipos";
import MANIFESTO from "./dados/manifesto.json";
import { textoDoCredito } from "@/lib/imagens";
import { normalizar, parteDoId } from "./comum";

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
  for (const c of iso) semente = (Math.imul(semente, 31) + c.charCodeAt(0)) >>> 0;
  return (limite: number) => {
    semente = (semente + 0x6d2b79f5) >>> 0;
    let x = semente;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    x = (x ^ (x >>> 14)) >>> 0;
    return x % limite;
  };
}

export async function santosParaConhecer(iso: string, n: number): Promise<SantoDoIndice[]> {
  const mmdd = iso.slice(5).replace("-", "");
  const sortear = sorteador(iso);
  const todos = (await carregar<SantoDoIndice[]>(M.destaques)).filter((s) => s.data !== mmdd);
  for (let i = todos.length - 1; i > 0 && i >= todos.length - n; i--) {
    const j = sortear(i + 1);
    [todos[i], todos[j]] = [todos[j]!, todos[i]!];
  }
  return todos.slice(-n).reverse();
}

export const NOME_DO_GRUPO: Record<string, string> = {
  brasil: "Do Brasil",
  jovens: "Jovens",
  "nossa-senhora": "Nossa Senhora",
  modernos: "Dos nossos tempos",
  populares: "Devoção popular",
  veneraveis: "Veneráveis",
  calendario: "Do calendário",
  mundo: "De todo o mundo",
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

const ORDEM_DO_GRUPO: Record<string, number> = { calendario: 0, populares: 1, brasil: 2, "nossa-senhora": 2, jovens: 3, modernos: 3 };
const ORDEM_DA_SITUACAO: Record<string, number> = { santo: 0, beato: 1, veneravel: 2, servo: 3 };

export function santosDoNome<T extends SantoDoIndice>(lista: T[], nome: string): T[] {
  const alvo = normalizar(nome.split(/\s+/)[0] ?? "");
  if (!alvo) return [];
  const principal = (s: T) => normalizar(s.nome.replace(/^(São|Santo|Santa|Beato|Beata|Venerável|Servo de Deus|Serva de Deus|Bem-aventurad[oa])\s+/, "")).split(/[\s,]+/)[0] === alvo;
  const grupo = (s: T) => (/^(Santos|Santas|Beatos|Beatas)\b/.test(s.nome) ? 9 : 0);
  const peso = (s: T) => [principal(s) ? 0 : 1, grupo(s), ORDEM_DO_GRUPO[s.grupo] ?? 5, ORDEM_DA_SITUACAO[s.situacao ?? ""] ?? 4];
  return lista
    .filter((s) => s.nomes.some((n) => normalizar(n).split(/\s+/).includes(alvo) || normalizar(n) === alvo))
    .map((s) => ({ s, p: peso(s) }))
    .sort((a, b) => a.p.reduce((r, x, i) => r || x - b.p[i]!, 0) || a.s.nome.localeCompare(b.s.nome, "pt-BR"))
    .map((x) => x.s);
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
