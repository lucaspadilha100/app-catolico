import { Children, useCallback, useEffect, useId, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
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

const SETA = "grid size-11 shrink-0 place-items-center rounded-full text-tinta transition-colors hover:bg-cartao disabled:pointer-events-none disabled:opacity-30";

export function Carrossel({ titulo, verTodos, defasagem = 0, children }: { titulo: string; verTodos: string; defasagem?: number; children: ReactNode }) {
  const id = useId();
  const fileira = useRef<HTMLDivElement>(null);
  const itens = Children.toArray(children);
  const total = itens.length;
  const computador = useMidia("(hover: hover) and (pointer: fine)");
  const calmo = useMidia("(prefers-reduced-motion: reduce)");
  const [atual, setAtual] = useState(0);
  const [borda, setBorda] = useState({ inicio: true, fim: false, sobra: false });
  const [mouse, setMouse] = useState(false);
  const [foco, setFoco] = useState(false);
  const [visivel, setVisivel] = useState(false);
  const [abaAberta, setAbaAberta] = useState(() => typeof document === "undefined" || document.visibilityState === "visible");
  const [tocou, setTocou] = useState(false);
  const voltas = useRef(0);

  const medir = useCallback(() => {
    const el = fileira.current;
    if (!el) return;
    const maximo = el.scrollWidth - el.clientWidth;
    const x = el.scrollLeft;
    const lista = posicoes(el);
    let perto = 0;
    lista.forEach((p, i) => {
      if (Math.abs(p - x) < Math.abs(lista[perto]! - x)) perto = i;
    });
    setAtual(maximo > FOLGA && x >= maximo - FOLGA ? lista.length - 1 : perto);
    setBorda({ inicio: x <= FOLGA, fim: x >= maximo - FOLGA, sobra: maximo > FOLGA });
  }, []);

  const ir = useCallback(
    (destino: number) => {
      const el = fileira.current;
      if (!el) return;
      const lista = posicoes(el);
      const i = Math.max(0, Math.min(destino, lista.length - 1));
      el.scrollTo({ left: Math.min(lista[i]!, el.scrollWidth - el.clientWidth), behavior: calmo ? "auto" : "smooth" });
    },
    [calmo],
  );

  const voltar = useCallback(() => {
    const el = fileira.current;
    if (!el) return;
    const lista = posicoes(el);
    const anteriores = lista.filter((p) => p < el.scrollLeft - FOLGA);
    ir(Math.max(0, anteriores.length - 1));
  }, [ir]);

  const avancar = useCallback(() => {
    const el = fileira.current;
    if (!el) return;
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - FOLGA) {
      voltas.current += 1;
      ir(0);
      return;
    }
    const lista = posicoes(el);
    const proximo = lista.findIndex((p) => p > el.scrollLeft + FOLGA);
    ir(proximo < 0 ? lista.length - 1 : proximo);
  }, [ir]);

  useEffect(() => {
    const el = fileira.current;
    if (!el) return;
    medir();
    const tamanho = new ResizeObserver(medir);
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
  }, [medir, total]);

  const passa = !calmo && borda.sobra && visivel && abaAberta && !mouse && !foco && (computador || !tocou);

  useEffect(() => {
    if (!passa) return;
    let relogio = 0;
    const passo = () => {
      if (!computador && voltas.current >= 1) {
        setTocou(true);
        return;
      }
      avancar();
    };
    const inicio = window.setTimeout(() => {
      relogio = window.setInterval(passo, computador ? PASSO_NO_COMPUTADOR : PASSO_NO_CELULAR);
    }, defasagem);
    return () => {
      window.clearTimeout(inicio);
      window.clearInterval(relogio);
    };
  }, [passa, computador, avancar, defasagem]);

  const quadro = useRef(0);
  const aoRolar = () => {
    cancelAnimationFrame(quadro.current);
    quadro.current = requestAnimationFrame(medir);
  };

  const pararDeVez = () => {
    if (!computador) setTocou(true);
  };

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
        {computador && borda.sobra && (
          <span className="ml-1 flex shrink-0">
            <button type="button" aria-label="Anterior" disabled={borda.inicio} onClick={voltar} className={SETA}>
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button type="button" aria-label="Próximo" disabled={borda.fim} onClick={avancar} className={SETA}>
              <ChevronRight className="size-5" aria-hidden />
            </button>
          </span>
        )}
      </div>
      <div
        ref={fileira}
        onScroll={aoRolar}
        onTouchStart={pararDeVez}
        onPointerDown={pararDeVez}
        onWheel={pararDeVez}
        className="sem-barra relative -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto overscroll-x-contain px-4 md:mx-0 md:scroll-px-0 md:px-0"
      >
        {itens}
      </div>
      {borda.sobra && total > 1 && (
        <div className="mt-3 flex justify-center gap-1.5" aria-hidden>
          {itens.map((_, i) => (
            <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === atual ? "w-5 bg-destaque-texto" : "w-1.5 bg-tinta-suave/35"}`} />
          ))}
        </div>
      )}
    </section>
  );
}
