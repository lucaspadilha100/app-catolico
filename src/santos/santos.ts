import { useCallback, useEffect, useState } from "react";
import type { AcervoDeSantos, MesDeSantos, Santo } from "./tipos";
import COMMONS from "./dados/imagens-commons.json";
import type { Credito } from "@/lib/imagens";

const MODULOS = import.meta.glob<{ default: MesDeSantos }>("./dados/*.ts");
const ACERVO = import.meta.glob<{ default: AcervoDeSantos }>("./dados/acervo/*.ts");


const DO_COMMONS = COMMONS as Record<string, Credito>;

export const creditoDoCommons = (s: Santo): Credito | null => (s.imagem ? null : (DO_COMMONS[s.id] ?? null));

export const caminhoDaImagem = (s: Santo) =>
  s.imagem ? `/imagens/santos/${s.id}-${s.imagem.artic}.webp` : DO_COMMONS[s.id] ? `/imagens/santos/commons/${DO_COMMONS[s.id]!.arquivo}` : null;

export const focoDaImagem = (s: Santo) => DO_COMMONS[s.id]?.foco ?? "50% 25%";

export async function santosDoMes(mm: string): Promise<Santo[]> {
  const m = MODULOS[`./dados/${mm}.ts`];
  return m ? (await m()).default.santos : [];
}

export async function todosOsSantos(): Promise<Santo[]> {
  const meses = await Promise.all(Object.keys(MODULOS).sort().map((k) => MODULOS[k]!()));
  const chaves = Object.keys(ACERVO).sort();
  const acervo = await Promise.all(chaves.map((k) => ACERVO[k]!()));
  const grupo = (k: string) => k.replace("./dados/acervo/", "").replace(".ts", "");
  return [
    ...meses.flatMap((m) => m.default.santos.map((s) => ({ ...s, grupo: "calendario" }))),
    ...acervo.flatMap((m, i) => m.default.santos.map((s) => ({ ...s, grupo: grupo(chaves[i]!) }))),
  ];
}

export const santosDaDataMMDD = async (mmdd: string) => (await santosDoMes(mmdd.slice(0, 2))).filter((s) => s.data === mmdd);

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

const TITULOS = /^(São|Santo|Santa|Santos|Santas|Beato|Beata|Beatos|Venerável|Servo de Deus|Serva de Deus|Nossa Senhora (da|do|das|dos|de)?|Bem-aventurad[ao])\s+/;

export const nomeParaOrdenar = (nome: string) => normalizar(nome.replace(TITULOS, ""));

export const seloDoSanto = (s: Santo): string | null => {
  if (!s.situacao || !SELO[s.situacao]) return null;
  if (/^(Beat[oa]s?|Venerável|Serv[oa] de Deus)\b/.test(s.nome)) return null;
  const feminino = /^(Beata|Santa|Serva|Venerável Madre|Venerável Irmã)\b/.test(s.nome);
  if (s.situacao === "beato") return feminino ? "Beata" : "Beato";
  if (s.situacao === "servo") return feminino ? "Serva de Deus" : "Servo de Deus";
  return "Venerável";
};

export const normalizar = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim();

export function buscarSantos(lista: Santo[], termo: string): Santo[] {
  const palavras = normalizar(termo).split(/\s+/).filter(Boolean);
  if (!palavras.length) return [];
  const casa = (t: string) => palavras.every((p) => normalizar(t).includes(p));
  const noNome = lista.filter((s) => casa(`${s.nome} ${s.nomes.join(" ")}`));
  const noResto = lista.filter((s) => !noNome.includes(s) && casa(`${s.resumo} ${(s.padroeiro ?? []).join(" ")}`));
  return [...noNome, ...noResto];
}

export function santosDoNome(lista: Santo[], nome: string): Santo[] {
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
