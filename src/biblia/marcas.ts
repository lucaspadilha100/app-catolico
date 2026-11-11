import { useEffect, useState } from "react";

export const CHAVE_MARCAS = "santinho-marcas";
const EVENTO = "santinho-marcas";

export type Cor = "amarelo" | "verde" | "azul" | "rosa";

export const CORES: Record<Cor, { nome: string; fundo: string }> = {
  amarelo: { nome: "Amarelo", fundo: "rgba(250, 204, 21, 0.32)" },
  verde: { nome: "Verde", fundo: "rgba(74, 222, 128, 0.28)" },
  azul: { nome: "Azul", fundo: "rgba(96, 165, 250, 0.28)" },
  rosa: { nome: "Rosa", fundo: "rgba(244, 114, 182, 0.28)" },
};

export interface Marca {
  cor?: Cor;
  nota?: string;
  texto?: string;
  em: number;
}

export type Marcas = Record<string, Marca>;

export const chaveDoVersiculo = (livro: string, capitulo: number, versiculo: number) => `${livro}-${capitulo}-${versiculo}`;

export function lerChave(chave: string): { livro: string; capitulo: number; versiculo: number } | null {
  const m = /^([1-3]?[A-Z]{2,3})-(\d+)-(\d+)$/.exec(chave);
  return m ? { livro: m[1]!, capitulo: Number(m[2]), versiculo: Number(m[3]) } : null;
}

export const marcaViva = (m: Marca | undefined): boolean => !!m && (!!m.cor || !!m.nota?.trim());

export function lerMarcas(): Marcas {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE_MARCAS) ?? "{}") as unknown;
    return v && typeof v === "object" && !Array.isArray(v) ? (v as Marcas) : {};
  } catch {
    return {};
  }
}

export function marcar(chave: string, mudanca: { cor?: Cor | null; nota?: string; texto?: string }, agora = Date.now()) {
  const todas = lerMarcas();
  const atual = todas[chave] ?? { em: agora };
  const nova: Marca = { ...atual, em: agora };
  if (mudanca.cor !== undefined) {
    if (mudanca.cor) nova.cor = mudanca.cor;
    else delete nova.cor;
  }
  if (mudanca.nota !== undefined) {
    const nota = mudanca.nota.trim().slice(0, 2000);
    if (nota) nova.nota = nota;
    else delete nova.nota;
  }
  if (mudanca.texto) nova.texto = mudanca.texto.slice(0, 600);
  if (!marcaViva(nova)) delete nova.texto;
  todas[chave] = nova;
  try {
    localStorage.setItem(CHAVE_MARCAS, JSON.stringify(todas));
  } catch {}
  window.dispatchEvent(new Event(EVENTO));
}

export function mesclarMarcas(a: Marcas, b: Marcas): Marcas {
  const r: Marcas = { ...b };
  for (const [k, m] of Object.entries(a)) if (!r[k] || m.em >= r[k]!.em) r[k] = m;
  return r;
}

export function useMarcas(): Marcas {
  const [marcas, setMarcas] = useState(lerMarcas);
  useEffect(() => {
    const ouvir = () => setMarcas(lerMarcas());
    window.addEventListener(EVENTO, ouvir);
    window.addEventListener("storage", ouvir);
    window.addEventListener("santinho-sincronizado", ouvir);
    return () => {
      window.removeEventListener(EVENTO, ouvir);
      window.removeEventListener("storage", ouvir);
      window.removeEventListener("santinho-sincronizado", ouvir);
    };
  }, []);
  return marcas;
}
