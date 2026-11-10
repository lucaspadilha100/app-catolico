import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Tema = "sistema" | "claro" | "escuro";
export type Letra = "normal" | "grande" | "maior";

export interface Preferencias {
  tema: Tema;
  letra: Letra;
  /** Modo simples: letra maior e menos coisas na tela (pensado para os mais velhos). */
  simples: boolean;
}

// ⚠️ A mesma chave é lida no index.html, antes do React (para não piscar).
const CHAVE = "santinho-preferencias";
const PADRAO: Preferencias = { tema: "sistema", letra: "normal", simples: false };

function ler(): Preferencias {
  try {
    return { ...PADRAO, ...(JSON.parse(localStorage.getItem(CHAVE) ?? "{}") as Partial<Preferencias>) };
  } catch {
    return PADRAO;
  }
}

function aplicar(p: Preferencias) {
  const r = document.documentElement;
  const escuro = p.tema === "escuro" || (p.tema === "sistema" && matchMedia("(prefers-color-scheme: dark)").matches);
  r.dataset.tema = escuro ? "escuro" : "claro";
  r.dataset.letra = p.letra;
  if (p.simples) r.dataset.simples = "1";
  else delete r.dataset.simples;
}

interface Contexto {
  preferencias: Preferencias;
  mudar: (parcial: Partial<Preferencias>) => void;
}

const Ctx = createContext<Contexto | null>(null);

export function PreferenciasProvider({ children }: { children: ReactNode }) {
  const [preferencias, setPreferencias] = useState<Preferencias>(ler);

  useEffect(() => {
    aplicar(preferencias);
    if (preferencias.tema !== "sistema") return;
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const ouvir = () => aplicar(preferencias);
    mq.addEventListener("change", ouvir);
    return () => mq.removeEventListener("change", ouvir);
  }, [preferencias]);

  const mudar = useCallback((parcial: Partial<Preferencias>) => {
    setPreferencias((atual) => {
      const nova = { ...atual, ...parcial };
      try {
        localStorage.setItem(CHAVE, JSON.stringify(nova));
      } catch {
        // navegador sem armazenamento (aba anônima): vale só até fechar
      }
      return nova;
    });
  }, []);

  return <Ctx.Provider value={{ preferencias, mudar }}>{children}</Ctx.Provider>;
}

export function usePreferencias() {
  const c = useContext(Ctx);
  if (!c) throw new Error("usePreferencias fora do PreferenciasProvider");
  return c;
}
