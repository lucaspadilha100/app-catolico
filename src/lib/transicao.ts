import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

export const DURACAO_DA_SAIDA = 160;

export const semMovimento = () => typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;

export function usePresenca(aberto: boolean, duracao = DURACAO_DA_SAIDA) {
  const [montado, setMontado] = useState(aberto);
  useEffect(() => {
    if (aberto) {
      setMontado(true);
      return;
    }
    const t = setTimeout(() => setMontado(false), duracao);
    return () => clearTimeout(t);
  }, [aberto, duracao]);
  return { montado: aberto || montado, saindo: !aberto && montado };
}

export function useSaida(fechar: () => void, duracao = DURACAO_DA_SAIDA) {
  const [saindo, setSaindo] = useState(false);
  const fecharRef = useRef(fechar);
  fecharRef.current = fechar;
  const espera = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(espera.current), []);
  const sair = useCallback(() => {
    if (espera.current) return;
    setSaindo(true);
    espera.current = setTimeout(() => {
      espera.current = undefined;
      fecharRef.current();
      setSaindo(false);
    }, duracao);
  }, [duracao]);
  return { saindo, sair };
}

type ComTransicao = Document & { startViewTransition?: (atualizar: () => void) => unknown };

export const usaViewTransition = () => typeof document !== "undefined" && !!(document as ComTransicao).startViewTransition && !semMovimento();

export function comTransicao(atualizar: () => void) {
  if (!usaViewTransition()) {
    atualizar();
    return;
  }
  (document as ComTransicao).startViewTransition!(() => flushSync(atualizar));
}
