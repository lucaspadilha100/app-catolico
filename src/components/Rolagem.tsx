import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function Rolagem() {
  const { key, pathname } = useLocation();
  const tipo = useNavigationType();
  const posicoes = useRef(new Map<string, number>());
  const atual = useRef(key);
  const caminho = useRef(pathname);
  const restaurando = useRef(false);

  useEffect(() => {
    try {
      window.history.scrollRestoration = "manual";
    } catch {}
    const ouvir = () => {
      if (!restaurando.current) posicoes.current.set(atual.current, window.scrollY);
    };
    window.addEventListener("scroll", ouvir, { passive: true });
    return () => window.removeEventListener("scroll", ouvir);
  }, []);

  useEffect(() => {
    atual.current = key;
    const mudouDeTela = caminho.current !== pathname;
    caminho.current = pathname;
    if (tipo === "POP") {
      const alvo = posicoes.current.get(key) ?? 0;
      const ate = Date.now() + 4000;
      let espera: ReturnType<typeof setTimeout> | undefined;
      restaurando.current = true;
      const parar = () => {
        restaurando.current = false;
        clearTimeout(espera);
        tirar();
      };
      const mexeu = () => parar();
      const tirar = () => ["wheel", "touchstart", "keydown", "mousedown"].forEach((ev) => window.removeEventListener(ev, mexeu));
      ["wheel", "touchstart", "keydown", "mousedown"].forEach((ev) => window.addEventListener(ev, mexeu, { passive: true }));
      let certas = 0;
      const tentar = () => {
        window.scrollTo(0, alvo);
        certas = Math.abs(window.scrollY - alvo) <= 2 ? certas + 1 : 0;
        if (certas >= 6 || Date.now() > ate) {
          parar();
          posicoes.current.set(key, window.scrollY);
        } else espera = setTimeout(tentar, 60);
      };
      tentar();
      return parar;
    } else if (tipo === "PUSH" && mudouDeTela && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [key, pathname, tipo]);

  return null;
}
