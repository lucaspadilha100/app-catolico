import { useEffect, useState } from "react";

export interface Credito {
  arquivo: string;
  obra: string;
  autor: string;
  licenca: string;
  url: string;
  foco?: string;
  fonte?: string;
}

let devocao: Promise<Record<string, Credito>> | null = null;

export function imagensDeDevocao(): Promise<Record<string, Credito>> {
  devocao ??= import("@/devocao/dados/imagens.json").then((m) => m.default as Record<string, Credito>).catch(() => ({}));
  return devocao;
}

export function useImagensDeDevocao(): Record<string, Credito> {
  const [mapa, setMapa] = useState<Record<string, Credito>>({});
  useEffect(() => {
    let ativo = true;
    void imagensDeDevocao().then((m) => ativo && setMapa(m));
    return () => {
      ativo = false;
    };
  }, []);
  return mapa;
}

export const caminhoDeDevocao = (c: Credito) => `/imagens/devocao/${c.arquivo}`;

export function textoDoCredito(c: Pick<Credito, "autor" | "licenca">): string {
  const autor = c.autor && !/desconhecido|unknown|anonymous|anônimo/i.test(c.autor) ? c.autor : "";
  const licenca = /public domain|domínio público|pd/i.test(c.licenca) ? "domínio público" : c.licenca;
  return [autor, licenca].filter(Boolean).join(", ");
}
