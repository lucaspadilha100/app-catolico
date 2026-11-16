import { useEffect, useRef } from "react";

const MARCA = "__sobreposicao";
const abertas: number[] = [];
let proximo = 1;

export const haSobreposicao = () => abertas.length > 0;

export function useFecharComVoltar(aberto: boolean, fechar: () => void, comEsc = true) {
  const fecharRef = useRef(fechar);
  fecharRef.current = fechar;

  useEffect(() => {
    if (!aberto) return;
    const id = proximo++;
    abertas.push(id);
    const estado = { ...(window.history.state as object | null), [MARCA]: id };
    window.history.pushState(estado, "");
    let fechadaPeloVoltar = false;

    const aoVoltar = () => {
      if ((window.history.state as Record<string, unknown> | null)?.[MARCA] === id) return;
      if (abertas[abertas.length - 1] !== id) return;
      fechadaPeloVoltar = true;
      fecharRef.current();
    };
    const aoTeclar = (e: KeyboardEvent) => {
      if (comEsc && e.key === "Escape" && abertas[abertas.length - 1] === id) fecharRef.current();
    };
    window.addEventListener("popstate", aoVoltar);
    if (comEsc) document.addEventListener("keydown", aoTeclar);

    return () => {
      window.removeEventListener("popstate", aoVoltar);
      document.removeEventListener("keydown", aoTeclar);
      const i = abertas.indexOf(id);
      if (i >= 0) abertas.splice(i, 1);
      if (!fechadaPeloVoltar && (window.history.state as Record<string, unknown> | null)?.[MARCA] === id) window.history.back();
    };
  }, [aberto, comEsc]);
}
