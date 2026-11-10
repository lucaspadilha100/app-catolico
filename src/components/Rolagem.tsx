import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export function Rolagem() {
  const { key, pathname } = useLocation();
  const tipo = useNavigationType();
  const posicoes = useRef(new Map<string, number>());
  const atual = useRef(key);
  const caminho = useRef(pathname);

  useEffect(() => {
    try {
      window.history.scrollRestoration = "manual";
    } catch {}
    const ouvir = () => posicoes.current.set(atual.current, window.scrollY);
    window.addEventListener("scroll", ouvir, { passive: true });
    return () => window.removeEventListener("scroll", ouvir);
  }, []);

  useEffect(() => {
    atual.current = key;
    const mudouDeTela = caminho.current !== pathname;
    caminho.current = pathname;
    if (tipo === "POP") {
      const alvo = posicoes.current.get(key) ?? 0;
      let tentativas = 0;
      const tentar = () => {
        window.scrollTo(0, alvo);
        if (Math.abs(window.scrollY - alvo) > 2 && tentativas++ < 20) setTimeout(tentar, 50);
      };
      tentar();
    } else if (tipo === "PUSH" && mudouDeTela && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [key, pathname, tipo]);

  return null;
}
