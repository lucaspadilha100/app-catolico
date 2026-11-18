import { Children, cloneElement, isValidElement, useCallback, useEffect, useId, useLayoutEffect, useRef, useState, useSyncExternalStore, type ReactElement, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PASSO_NO_COMPUTADOR = 4500;
const PASSO_NO_CELULAR = 6000;
const FOLGA = 4;

function useMidia(consulta: string): boolean {
  return useSyncExternalStore(
    (avisar) => {
      const m = window.matchMedia?.(consulta);
      m?.addEventListener("change", avisar);
      return () => m?.removeEventListener("change", avisar);
    },
    () => !!window.matchMedia?.(consulta).matches,
    () => false,
  );
}

function posicoes(fileira: HTMLElement): number[] {
  const recuo = parseFloat(getComputedStyle(fileira).scrollPaddingLeft) || 0;
  return Array.from(fileira.children).map((c) => (c as HTMLElement).offsetLeft - recuo);
}

function maisPerto(lista: number[], x: number) {
  let perto = 0;
  lista.forEach((p, i) => {
    if (Math.abs(p - x) < Math.abs(lista[perto]! - x)) perto = i;
  });
  return perto;
}

const SETA =
  "absolute z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white shadow-md backdrop-blur-sm transition-colors duration-150 hover:bg-black/70 focus-visible:bg-black/70";

export function Carrossel({ titulo, verTodos, defasagem = 0, children }: { titulo: string; verTodos: string; defasagem?: number; children: ReactNode }) {
  const id = useId();
  const fileira = useRef<HTMLDivElement>(null);
  const itens = Children.toArray(children).filter(isValidElement) as ReactElement[];
  const total = itens.length;
  const computador = useMidia("(hover: hover) and (pointer: fine)");
  const calmo = useMidia("(prefers-reduced-motion: reduce)");
  const [sobra, setSobra] = useState(false);
  const infinito = sobra && total > 1;
  const [atual, setAtual] = useState(0);
  const [meioDaCapa, setMeioDaCapa] = useState(0);
  const [mouse, setMouse] = useState(false);
  const [foco, setFoco] = useState(false);
  const [visivel, setVisivel] = useState(false);
  const [abaAberta, setAbaAberta] = useState(() => typeof document === "undefined" || document.visibilityState === "visible");
  const [tocou, setTocou] = useState(false);
  const passos = useRef(0);

  const larguraDoJogo = useCallback(() => {
    const el = fileira.current;
    if (!el || !infinito) return 0;
    const lista = posicoes(el);
    return lista[total]! - lista[0]!;
  }, [infinito, total]);

  const pular = useCallback((dx: number) => {
    const el = fileira.current;
    if (!el || !dx) return;
    const snap = el.style.scrollSnapType;
    el.style.scrollSnapType = "none";
    el.scrollLeft += dx;
    requestAnimationFrame(() => {
      el.style.scrollSnapType = snap;
    });
  }, []);

  const medir = useCallback(() => {
    const el = fileira.current;
    if (!el) return;
    const capa = el.firstElementChild?.querySelector("span");
    if (capa) setMeioDaCapa((capa as HTMLElement).offsetHeight / 2);
    if (!infinito) {
      const maximo = el.scrollWidth - el.clientWidth;
      setSobra(maximo > FOLGA);
      const lista = posicoes(el);
      setAtual(maximo > FOLGA && el.scrollLeft >= maximo - FOLGA ? lista.length - 1 : maisPerto(lista, el.scrollLeft));
      return;
    }
    const lista = posicoes(el);
    const i = maisPerto(lista, el.scrollLeft);
    setAtual(((i % total) + total) % total);
  }, [infinito, total]);

  const acomodar = useCallback(() => {
    const el = fileira.current;
    if (!el || !infinito) return;
    const largura = larguraDoJogo();
    const i = maisPerto(posicoes(el), el.scrollLeft);
    if (i < total) pular(largura);
    else if (i >= total * 2) pular(-largura);
  }, [infinito, total, larguraDoJogo, pular]);

  useLayoutEffect(() => {
    const el = fileira.current;
    if (!el || !infinito) return;
    const lista = posicoes(el);
    el.scrollLeft = lista[total]!;
  }, [infinito, total]);

  const ir = useCallback(
    (destino: number) => {
      const el = fileira.current;
      if (!el) return;
      const lista = posicoes(el);
      const i = Math.max(0, Math.min(destino, lista.length - 1));
      el.scrollTo({ left: infinito ? lista[i]! : Math.min(lista[i]!, el.scrollWidth - el.clientWidth), behavior: calmo ? "auto" : "smooth" });
    },
    [calmo, infinito],
  );

  const andar = useCallback(
    (passo: 1 | -1) => {
      const el = fileira.current;
      if (!el) return;
      const lista = posicoes(el);
      const i = maisPerto(lista, el.scrollLeft);
      if (infinito) {
        ir(i + passo);
        return;
      }
      const maximo = el.scrollWidth - el.clientWidth;
      if (passo === 1 && el.scrollLeft >= maximo - FOLGA) ir(0);
      else ir(i + passo);
    },
    [infinito, ir],
  );

  useEffect(() => {
    const el = fileira.current;
    if (!el) return;
    medir();
    const tamanho = new ResizeObserver(() => {
      medir();
      acomodar();
    });
    tamanho.observe(el);
    const vista = new IntersectionObserver(([e]) => setVisivel(!!e && e.intersectionRatio >= 0.6), { threshold: [0, 0.6, 1] });
    vista.observe(el);
    const aba = () => setAbaAberta(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", aba);
    return () => {
      tamanho.disconnect();
      vista.disconnect();
      document.removeEventListener("visibilitychange", aba);
    };
  }, [medir, acomodar, total]);

  const passa = !calmo && sobra && visivel && abaAberta && !mouse && !foco && (computador || !tocou);

  useEffect(() => {
    if (!passa) return;
    let relogio = 0;
    const passo = () => {
      if (!computador && passos.current >= total) {
        setTocou(true);
        return;
      }
      passos.current += 1;
      andar(1);
    };
    const inicio = window.setTimeout(() => {
      relogio = window.setInterval(passo, computador ? PASSO_NO_COMPUTADOR : PASSO_NO_CELULAR);
    }, defasagem);
    return () => {
      window.clearTimeout(inicio);
      window.clearInterval(relogio);
    };
  }, [passa, computador, andar, defasagem, total]);

  const quadro = useRef(0);
  const parada = useRef(0);
  const aoRolar = () => {
    cancelAnimationFrame(quadro.current);
    quadro.current = requestAnimationFrame(medir);
    window.clearTimeout(parada.current);
    parada.current = window.setTimeout(acomodar, 140);
  };

  const pararDeVez = () => {
    if (!computador) setTocou(true);
  };

  const mostrados = infinito
    ? [0, 1, 2].flatMap((jogo) =>
        itens.map((item, i) =>
          cloneElement(item, {
            key: `${jogo}-${item.key ?? i}`,
            ...(jogo === 1 ? {} : { "aria-hidden": true, tabIndex: -1 }),
          }),
        ),
      )
    : itens;

  return (
    <section
      aria-labelledby={id}
      onPointerEnter={(e) => e.pointerType === "mouse" && setMouse(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setMouse(false)}
      onFocus={() => setFoco(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFoco(false);
      }}
    >
      <div className="mb-2 flex items-center gap-1">
        <h2 id={id} className="titulo-secao min-w-0 flex-1 px-1">
          {titulo}
        </h2>
        <Link to={verTodos} className="inline-flex min-h-11 shrink-0 items-center px-1 text-[0.9375rem] font-semibold text-destaque-texto">
          Ver todos
        </Link>
      </div>
      <div className="relative">
        <div
          ref={fileira}
          onScroll={aoRolar}
          onTouchStart={pararDeVez}
          onPointerDown={pararDeVez}
          onWheel={pararDeVez}
          className="sem-barra relative -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto overscroll-x-contain px-4 md:mx-0 md:scroll-px-0 md:px-0"
        >
          {mostrados}
        </div>
        {computador && sobra && meioDaCapa > 0 && (
          <>
            <button type="button" aria-label="Anterior" onClick={() => andar(-1)} className={`${SETA} left-2`} style={{ top: meioDaCapa }}>
              <ChevronLeft className="size-6" aria-hidden />
            </button>
            <button type="button" aria-label="Próximo" onClick={() => andar(1)} className={`${SETA} right-2`} style={{ top: meioDaCapa }}>
              <ChevronRight className="size-6" aria-hidden />
            </button>
          </>
        )}
      </div>
      {sobra && total > 1 && (
        <div className="mt-3 flex justify-center gap-1.5" aria-hidden>
          {itens.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === atual ? "w-5 bg-destaque-texto" : "w-1.5 bg-tinta-suave/35"}`} />
          ))}
        </div>
      )}
    </section>
  );
}
