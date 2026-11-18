import { useCallback, useEffect, useRef, useState, type ComponentProps } from "react";
import { AudioLines, ListOrdered, Pause, Play, SkipBack, SkipForward, X } from "lucide-react";
import { esperaDaResposta, falasDosPassos, type Fala } from "@/voz/falas";
import { calar, falar, vozDisponivel } from "@/voz/voz";
import { contarReza, type Reza as TipoDeReza } from "@/conta/uso";
import { RezandoJuntos } from "@/components/RezandoJuntos";
import { AvisoDaVoz } from "@/components/Ouvir";
import { Carregando } from "@/components/Devocao";
import { TercoGuiado } from "@/components/TercoGuiado";
import { useFecharComVoltar } from "@/lib/useFecharComVoltar";
import { comTransicao, usaViewTransition, usePresenca } from "@/lib/transicao";

type Bloco = { rotulo: string; vezes: number; inicio: number; fim: number; falas: Fala[] };

const semContagem = (rotulo: string) => rotulo.replace(/\s+\d+ de \d+$/, "");
const mesmasFalas = (a: Fala[], b: Fala[]) => a.length === b.length && a.every((f, i) => f.texto === b[i]!.texto && f.vez === b[i]!.vez);

function emBlocos(falas: Fala[]): Bloco[] {
  const crus: Bloco[] = [];
  falas.forEach((f, i) => {
    const ultimo = crus[crus.length - 1];
    if (ultimo && ultimo.rotulo === f.rotulo) {
      ultimo.falas.push(f);
      ultimo.fim = i + 1;
    } else crus.push({ rotulo: f.rotulo, vezes: 1, inicio: i, fim: i + 1, falas: [f] });
  });
  const blocos: Bloco[] = [];
  for (const b of crus) {
    const ultimo = blocos[blocos.length - 1];
    const nome = semContagem(b.rotulo);
    if (ultimo && ultimo.rotulo === nome && nome !== b.rotulo && mesmasFalas(ultimo.falas, b.falas)) {
      ultimo.vezes++;
      ultimo.fim = b.fim;
    } else blocos.push({ ...b, rotulo: nome });
  }
  return blocos;
}

const esperar = (ms: number, cancelado: () => boolean) =>
  new Promise<void>((ok) => {
    const fim = Date.now() + ms;
    const t = setInterval(() => {
      if (cancelado() || Date.now() >= fim) {
        clearInterval(t);
        ok();
      }
    }, 150);
  });

const BOTAO_TOPO = "flex min-h-11 shrink-0 items-center gap-2 rounded-xl border border-borda bg-cartao px-3 text-sm font-medium text-tinta-suave";
const BOTAO_BARRA = "grid size-11 place-items-center rounded-xl border border-borda text-tinta sm:size-[52px]";

export function RezaCorrida({
  titulo,
  falas,
  reza,
  aoSair,
  passoAPasso,
}: {
  titulo: string;
  falas: Fala[] | null;
  reza: TipoDeReza;
  aoSair: () => void;
  passoAPasso?: () => void;
}) {
  const [indice, setIndice] = useState(0);
  const [tocando, setTocando] = useState(false);
  const [responder, setResponder] = useState(true);
  const [comVoz, setComVoz] = useState(false);
  const rodada = useRef(0);
  const responderRef = useRef(responder);
  responderRef.current = responder;
  const contou = useRef(false);
  const fimDaLeitura = useRef<HTMLDivElement>(null);
  const blocoAtual = useRef<HTMLElement>(null);

  const parar = useCallback(() => {
    rodada.current++;
    setTocando(false);
    void calar();
  }, []);

  useEffect(() => parar, [parar]);

  const contar = useCallback(() => {
    if (contou.current) return;
    contou.current = true;
    contarReza("agora");
    if (reza !== "agora") contarReza(reza);
  }, [reza]);

  useEffect(() => {
    const alvo = fimDaLeitura.current;
    if (!alvo || !falas?.length || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver((e) => e.some((x) => x.isIntersecting) && contar());
    obs.observe(alvo);
    return () => obs.disconnect();
  }, [falas, contar]);

  useEffect(() => {
    if (tocando) blocoAtual.current?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [tocando, indice]);

  const tocar = useCallback(
    async (de: number) => {
      if (!falas) return;
      const minha = ++rodada.current;
      const cancelado = () => minha !== rodada.current;
      setTocando(true);
      for (let i = de; i < falas.length; i++) {
        if (cancelado()) return;
        setIndice(i);
        const f = falas[i]!;
        try {
          if (f.vez === "voce" && responderRef.current) await esperar(esperaDaResposta(f.texto), cancelado);
          else await falar(f.texto);
        } catch {
          if (!cancelado()) setTocando(false);
          return;
        }
      }
      if (!cancelado()) {
        setTocando(false);
        setComVoz(false);
        setIndice(0);
        contar();
      }
    },
    [falas, contar],
  );

  const ir = (i: number) => {
    if (!falas) return;
    const alvo = Math.max(0, Math.min(falas.length - 1, i));
    if (tocando) void calar().then(() => void tocar(alvo));
    else setIndice(alvo);
  };

  function fecharVoz() {
    parar();
    setComVoz(false);
    setIndice(0);
  }

  const blocos = falas ? emBlocos(falas) : [];
  const atual = comVoz ? indice : -1;
  const barra = usePresenca(comVoz);

  return (
    <div className={`flex flex-col gap-5 ${comVoz ? "pb-56" : "pb-8"}`}>
      <div className="flex items-center gap-2">
        <button type="button" onClick={aoSair} aria-label="Sair" className="grid size-11 shrink-0 place-items-center rounded-xl border border-borda bg-cartao text-tinta-suave">
          <X className="size-5" aria-hidden />
        </button>
        <p className="min-w-0 flex-1 truncate font-medium text-tinta-suave">{titulo}</p>
        {passoAPasso && (
          <button
            type="button"
            onClick={() => {
              fecharVoz();
              passoAPasso();
            }}
            aria-label="Passo a passo"
            className={BOTAO_TOPO}
          >
            <ListOrdered className="size-5" aria-hidden />
            <span className="hidden min-[400px]:inline">Passo a passo</span>
          </button>
        )}
      </div>
      {!comVoz && vozDisponivel() && !!falas?.length && (
        <button
          type="button"
          onClick={() => {
            setComVoz(true);
            void tocar(0);
          }}
          className="flex min-h-12 items-center justify-center gap-2 self-start rounded-full border border-borda bg-cartao px-5 font-semibold text-tinta"
        >
          <AudioLines className="size-5 text-destaque-texto" aria-hidden /> Rezar com voz
        </button>
      )}
      {falas === null ? (
        <Carregando />
      ) : (
        <div className="flex flex-col gap-3">
          {blocos.map((b) => {
            const aqui = atual >= b.inicio && atual < b.fim;
            return (
              <section
                key={b.inicio}
                ref={aqui ? blocoAtual : undefined}
                aria-current={aqui ? "step" : undefined}
                className={`flex flex-col gap-2 rounded-3xl border p-5 transition-colors ${aqui ? "border-destaque-texto bg-marca-fundo" : "border-borda bg-cartao"}`}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">{b.vezes > 1 ? `${b.rotulo} · ${b.vezes} vezes` : b.rotulo}</p>
                {b.falas.map((f, i) => (
                  <p key={i} className={`font-leitura text-lg leading-relaxed text-tinta ${f.vez === "voce" ? "font-semibold" : ""}`}>
                    {f.texto}
                  </p>
                ))}
              </section>
            );
          })}
          <div ref={fimDaLeitura} className="flex flex-col items-center gap-3 py-4">
            <RezandoJuntos reza={reza} />
          </div>
        </div>
      )}
      {barra.montado && (
        <div className={`fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-20 px-3 pb-3 md:bottom-0 md:left-60 md:pb-6 ${barra.saindo ? "saindo animate-afundar" : "animate-surgir"}`}>
          <div className="mx-auto grid max-w-xl grid-cols-[auto_minmax(0,1fr)_auto_auto] gap-2 rounded-3xl border border-borda bg-cartao p-2 shadow-lg">
            <button type="button" onClick={() => ir(indice - 1)} aria-label="Anterior" className={BOTAO_BARRA}>
              <SkipBack className="size-6" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => (tocando ? parar() : void tocar(indice))}
              className="flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-xl bg-primario px-2 text-lg font-semibold text-sobre-primario sm:min-h-[52px]"
            >
              {tocando ? <Pause className="size-6" aria-hidden /> : <Play className="size-6" aria-hidden />}
              <span className="truncate">{tocando ? "Pausar" : "Continuar"}</span>
            </button>
            <button type="button" onClick={() => ir(indice + 1)} aria-label="Próxima" className={BOTAO_BARRA}>
              <SkipForward className="size-6" aria-hidden />
            </button>
            <button type="button" onClick={fecharVoz} aria-label="Sair da voz" className={BOTAO_BARRA}>
              <X className="size-6" aria-hidden />
            </button>
            <label className="col-span-4 flex min-h-11 items-center justify-between gap-4 px-2">
              <span className="text-sm font-medium text-tinta">Responder em voz alta</span>
              <input type="checkbox" checked={responder} onChange={(e) => setResponder(e.target.checked)} className="size-6 accent-destaque" />
            </label>
            <AvisoDaVoz className="col-span-4" />
          </div>
        </div>
      )}
    </div>
  );
}

type PropsDoGuiado = ComponentProps<typeof TercoGuiado>;

export function Reza({ falas, reza, ...guiado }: Omit<PropsDoGuiado, "verTudo"> & { falas?: Fala[] | null; reza: TipoDeReza }) {
  const [tudo, setTudo] = useState(false);
  const [trocou, setTrocou] = useState(false);
  const trocar = (v: boolean) =>
    comTransicao(() => {
      setTudo(v);
      setTrocou(true);
      window.scrollTo({ top: 0 });
    });
  useFecharComVoltar(tudo, () => trocar(false), false);
  return (
    <div key={tudo ? "tudo" : "passo"} className={trocou && !usaViewTransition() ? "animate-aparecer" : undefined}>
      {tudo ? (
        <RezaCorrida titulo={guiado.titulo} falas={falas === undefined ? falasDosPassos(guiado.passos) : falas} reza={reza} aoSair={guiado.aoSair} passoAPasso={() => trocar(false)} />
      ) : (
        <TercoGuiado {...guiado} verTudo={() => trocar(true)} />
      )}
    </div>
  );
}
