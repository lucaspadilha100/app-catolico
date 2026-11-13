import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Tema = "sistema" | "claro" | "escuro";
export type Letra = "normal" | "grande" | "maior";
export type CorDoApp = "liturgica" | "mariano" | "terra" | "dourado";

export interface Preferencias {
  tema: Tema;
  letra: Letra;
  simples: boolean;
  diocese: string;
  batismo: string;
  minhaParoquia: string;
  minhaParoquiaNome: string;
  minhasParoquias: { id: string; nome: string }[];
  cidadeDasMissas: string;
  cidadesRecentes: string[];
  boasVindas: boolean;
  apoiadorAte: string;
  corDoApp: CorDoApp;
}

const CHAVE = "santinho-preferencias";
const PADRAO: Preferencias = { tema: "sistema", letra: "normal", simples: false, diocese: "", batismo: "", minhaParoquia: "", minhaParoquiaNome: "", minhasParoquias: [], cidadeDasMissas: "", cidadesRecentes: [], boasVindas: false, apoiadorAte: "", corDoApp: "liturgica" };

export const paroquiasFavoritas = (p: Preferencias): { id: string; nome: string }[] =>
  p.minhasParoquias.length ? p.minhasParoquias : p.minhaParoquia ? [{ id: p.minhaParoquia, nome: p.minhaParoquiaNome }] : [];

function ler(): Preferencias {
  try {
    return { ...PADRAO, ...(JSON.parse(localStorage.getItem(CHAVE) ?? "{}") as Partial<Preferencias>) };
  } catch {
    return PADRAO;
  }
}

export function ehApoiador(p: Pick<Preferencias, "apoiadorAte">): boolean {
  return !!p.apoiadorAte && p.apoiadorAte >= new Date().toLocaleDateString("sv-SE");
}

function aplicar(p: Preferencias) {
  const r = document.documentElement;
  const escuro = p.tema === "escuro" || (p.tema === "sistema" && matchMedia("(prefers-color-scheme: dark)").matches);
  r.dataset.tema = escuro ? "escuro" : "claro";
  r.dataset.letra = p.letra;
  if (p.simples) r.dataset.simples = "1";
  else delete r.dataset.simples;
  if (p.corDoApp !== "liturgica" && ehApoiador(p)) r.dataset.destaque = p.corDoApp;
  else delete r.dataset.destaque;
}

interface Contexto {
  preferencias: Preferencias;
  mudar: (parcial: Partial<Preferencias>) => void;
}

const Ctx = createContext<Contexto | null>(null);

export function PreferenciasProvider({ children }: { children: ReactNode }) {
  const [preferencias, setPreferencias] = useState<Preferencias>(ler);

  useEffect(() => {
    const ouvir = (e: StorageEvent) => e.key === CHAVE && setPreferencias(ler());
    window.addEventListener("storage", ouvir);
    return () => window.removeEventListener("storage", ouvir);
  }, []);

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
      } catch {}
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
