import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { abrirCofre, apagarCofre, criarCofre, existeCofre, selar, type CofreAberto, type ConteudoDoCofre } from "./cofre";

interface Contexto {
  existe: boolean;
  aberto: CofreAberto | null;
  criar: (pin: string) => Promise<void>;
  abrir: (pin: string) => Promise<boolean>;
  mudar: (f: (c: ConteudoDoCofre) => ConteudoDoCofre) => void;
  trancar: () => void;
  apagar: () => void;
}

const Ctx = createContext<Contexto | null>(null);

export function CofreProvider({ children }: { children: ReactNode }) {
  const [existe, setExiste] = useState(existeCofre);
  const [aberto, setAberto] = useState<CofreAberto | null>(null);
  const fila = useRef(Promise.resolve());

  const criar = useCallback(async (pin: string) => {
    const c = await criarCofre(pin);
    setAberto(c);
    setExiste(true);
  }, []);

  const abrir = useCallback(async (pin: string) => {
    const c = await abrirCofre(pin);
    if (c) setAberto(c);
    return !!c;
  }, []);

  const mudar = useCallback((f: (c: ConteudoDoCofre) => ConteudoDoCofre) => {
    setAberto((atual) => {
      if (!atual) return atual;
      const conteudo = f(atual.conteudo);
      fila.current = fila.current.then(() => selar(atual, conteudo)).catch(() => {});
      return { ...atual, conteudo };
    });
  }, []);

  const trancar = useCallback(() => setAberto(null), []);

  const apagar = useCallback(() => {
    apagarCofre();
    setAberto(null);
    setExiste(false);
  }, []);

  const valor = useMemo(() => ({ existe, aberto, criar, abrir, mudar, trancar, apagar }), [existe, aberto, criar, abrir, mudar, trancar, apagar]);
  return <Ctx.Provider value={valor}>{children}</Ctx.Provider>;
}

export function useCofre() {
  const c = useContext(Ctx);
  if (!c) throw new Error("CofreProvider ausente");
  return c;
}
