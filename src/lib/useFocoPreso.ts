import { useEffect, useRef } from "react";

const FOCAVEIS = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function useFocoPreso<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const caixa = ref.current;
    if (!caixa) return;
    const antes = document.activeElement as HTMLElement | null;
    caixa.querySelector<HTMLElement>(FOCAVEIS)?.focus({ preventScroll: true });
    const tecla = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const itens = [...caixa.querySelectorAll<HTMLElement>(FOCAVEIS)].filter((x) => x.offsetParent !== null);
      if (!itens.length) return;
      const primeiro = itens[0]!;
      const ultimo = itens[itens.length - 1]!;
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      } else if (!caixa.contains(document.activeElement)) {
        e.preventDefault();
        primeiro.focus();
      }
    };
    document.addEventListener("keydown", tecla);
    return () => {
      document.removeEventListener("keydown", tecla);
      antes?.focus?.({ preventScroll: true });
    };
  }, []);
  return ref;
}
