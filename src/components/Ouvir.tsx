import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Pause, Play, Square, Volume2 } from "lucide-react";
import { calar, falar, vozDisponivel } from "@/voz/voz";
import { ehNativo } from "@/lib/nativo";
import { ehApoiador, usePreferencias } from "@/lib/preferencias";

const CHAVE = "santinho-voz-velocidade";
const VELOCIDADES = [0.8, 1, 1.2];

function lerVelocidade(): number {
  try {
    const v = Number(localStorage.getItem(CHAVE));
    return VELOCIDADES.includes(v) ? v : 1;
  } catch {
    return 1;
  }
}

export function AvisoDaVoz({ className = "" }: { className?: string }) {
  const { preferencias } = usePreferencias();
  const comLink = !ehNativo() && !ehApoiador(preferencias);
  return (
    <p className={`px-2 pb-1 text-center text-xs leading-relaxed text-tinta-suave ${className}`}>
      Voz do próprio aparelho. Com o seu apoio, vamos melhorar.
      {comLink && (
        <>
          {" "}
          <Link to="/apoie" className="py-1 font-semibold text-destaque-texto underline underline-offset-2">
            Apoiar
          </Link>
        </>
      )}
    </p>
  );
}

export function TocadorDeVoz({ titulo, partes, aoFechar }: { titulo: string; partes: () => Promise<string[]>; aoFechar: () => void }) {
  const [lista, setLista] = useState<string[] | null>(null);
  const [indice, setIndice] = useState(0);
  const [tocando, setTocando] = useState(false);
  const [velocidade, setVelocidade] = useState(lerVelocidade);
  const rodada = useRef(0);

  useEffect(() => {
    let ativo = true;
    void partes()
      .then((p) => {
        if (!ativo) return;
        setLista(p);
        void tocar(p, 0, velocidade);
      })
      .catch(() => ativo && setLista([]));
    return () => {
      ativo = false;
      rodada.current++;
      void calar();
    };
  }, []);

  const tocar = useCallback(async (p: string[], de: number, vel: number) => {
    const minha = ++rodada.current;
    setTocando(true);
    for (let i = de; i < p.length; i++) {
      if (minha !== rodada.current) return;
      setIndice(i);
      await falar(p[i]!, vel);
    }
    if (minha === rodada.current) {
      setTocando(false);
      setIndice(p.length);
    }
  }, []);

  const pausar = () => {
    rodada.current++;
    setTocando(false);
    void calar();
  };

  const mudarVelocidade = () => {
    const nova = VELOCIDADES[(VELOCIDADES.indexOf(velocidade) + 1) % VELOCIDADES.length]!;
    setVelocidade(nova);
    try {
      localStorage.setItem(CHAVE, String(nova));
    } catch {}
    if (tocando && lista) {
      void calar().then(() => void tocar(lista, indice, nova));
    }
  };

  const fim = !!lista && indice >= lista.length;

  return (
    <div className="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-20 px-3 pb-3 md:bottom-0 md:left-60 md:pb-6">
      <div className="mx-auto flex max-w-xl flex-wrap items-center gap-2 rounded-3xl bg-cartao p-2 shadow-lg">
        <button
          type="button"
          disabled={!lista?.length}
          onClick={() => (tocando ? pausar() : lista && void tocar(lista, fim ? 0 : indice, velocidade))}
          aria-label={tocando ? "Pausar" : "Ouvir"}
          className="grid size-12 shrink-0 place-items-center rounded-xl bg-primario text-sobre-primario disabled:opacity-50"
        >
          {tocando ? <Pause className="size-6" aria-hidden /> : <Play className="size-6" aria-hidden />}
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-tinta">{titulo}</p>
          <p className="text-xs text-tinta-suave">{lista === null ? "Preparando" : lista.length ? `${Math.min(indice + 1, lista.length)} de ${lista.length}` : "Sem texto"}</p>
        </div>
        <button type="button" onClick={mudarVelocidade} aria-label="Velocidade" className="min-h-11 shrink-0 rounded-xl border border-borda px-3 text-sm font-semibold text-tinta">
          {`${String(velocidade).replace(".", ",")}x`}
        </button>
        <button
          type="button"
          onClick={() => {
            pausar();
            aoFechar();
          }}
          aria-label="Parar"
          className="grid size-11 shrink-0 place-items-center rounded-xl border border-borda text-tinta"
        >
          <Square className="size-4" aria-hidden />
        </button>
        <AvisoDaVoz className="w-full" />
      </div>
    </div>
  );
}

export function BotaoOuvir({ titulo, partes, className = "", compacto = false }: { titulo: string; partes: () => Promise<string[]>; className?: string; compacto?: boolean }) {
  const [aberto, setAberto] = useState(false);
  if (!vozDisponivel()) return null;
  return (
    <>
      <button
        type="button"
        onClick={() => setAberto(true)}
        aria-pressed={aberto}
        aria-label={compacto ? "Ouvir" : undefined}
        className={className || "flex min-h-11 items-center gap-1.5 rounded-full border border-borda bg-cartao px-4 text-sm font-semibold text-tinta"}
      >
        <Volume2 className={compacto ? "size-5" : "size-4"} aria-hidden />
        {!compacto && "Ouvir"}
      </button>
      {aberto && createPortal(<TocadorDeVoz titulo={titulo} partes={partes} aoFechar={() => setAberto(false)} />, document.body)}
    </>
  );
}

export function emPartes(textos: string[], tamanho = 3): string[] {
  const limpos = textos.map((t) => t.replace(/[“”‘’"]/g, "").trim()).filter(Boolean);
  const r: string[] = [];
  for (let i = 0; i < limpos.length; i += tamanho) r.push(limpos.slice(i, i + tamanho).join(" "));
  return r;
}
