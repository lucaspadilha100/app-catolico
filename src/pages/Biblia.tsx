import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Check, ChevronDown, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { GRUPOS_DA_BIBLIA, LIVROS, livroPorCodigo, livroPorSlug, type Livro, type Testamento } from "@/biblia/livros";
import { carregarLivro, type LivroDaBiblia } from "@/biblia/texto";
import { interpretar, livrosQueCombinam } from "@/biblia/busca";
import {
  ESTADO_DOS_LIVROS,
  capitulosLidos,
  marcarLido,
  percentualDaBiblia,
  percentualDoLivro,
  registrarAbertura,
  useLeituraDaBiblia,
} from "@/biblia/progresso";
import { LISTA } from "@/components/Cartao";
import { NaoEncontrada } from "@/pages/Simples";
import { BarraDoVersiculo } from "@/components/AvisarErro";

function Barra({ valor, fina = false }: { valor: number; fina?: boolean }) {
  return (
    <div className={`w-full overflow-hidden rounded-full bg-marca-fundo ${fina ? "h-1.5" : "h-2.5"}`} role="progressbar" aria-valuenow={valor} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-destaque" style={{ width: `${valor}%` }} />
    </div>
  );
}

const nomeDoCapitulo = (livro: Livro, cap: number) => (livro.codigo === "PSA" ? `Salmo ${cap}` : `${livro.nome} ${cap}`);
const caminho = (livro: Livro, cap: number) => `/biblia/${livro.slug}/${cap}`;

function vizinho(livro: Livro, cap: number, passo: 1 | -1): { livro: Livro; cap: number } | null {
  if (passo === 1 && cap < livro.capitulos) return { livro, cap: cap + 1 };
  if (passo === -1 && cap > 1) return { livro, cap: cap - 1 };
  const i = LIVROS.findIndex((l) => l.codigo === livro.codigo);
  const outro = LIVROS[i + passo];
  if (!outro) return null;
  return { livro: outro, cap: passo === 1 ? 1 : outro.capitulos };
}

function IrPara({ aoIr }: { aoIr: (destino: string) => void }) {
  const [texto, setTexto] = useState("");
  const sugestoes = texto.trim() ? livrosQueCombinam(texto).slice(0, 5) : [];

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const destino = interpretar(texto);
    if (!destino) return;
    aoIr(`/biblia/${destino.livro.slug}/${destino.capitulo}${destino.versiculo ? `#v${destino.versiculo}` : ""}`);
  };

  return (
    <form onSubmit={enviar} className="relative">
      <label className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-cartao px-3 focus-within:border-destaque-texto">
        <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Livro ou passagem (Jo 3,16)"
          aria-label="Livro ou passagem"
          className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-tinta-suave/70"
          enterKeyHint="go"
          autoComplete="off"
        />
      </label>
      {sugestoes.length > 0 && !/\d/.test(texto) && (
        <ul className="absolute inset-x-0 top-full z-20 mt-1 overflow-hidden rounded-xl border border-borda bg-cartao shadow-lg">
          {sugestoes.map((l) => (
            <li key={l.codigo}>
              <button type="button" onClick={() => aoIr(caminho(l, 1))} className="flex min-h-11 w-full items-center justify-between px-4 text-left hover:bg-marca-fundo">
                <span className="font-leitura">{l.nome}</span>
                <span className="text-sm text-tinta-suave">{l.abreviatura}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

function Seletor({ livro, cap, aoFechar }: { livro: Livro; cap: number; aoFechar: () => void }) {
  const navegar = useNavigate();
  const leitura = useLeituraDaBiblia();
  const [testamento, setTestamento] = useState<Testamento>(livro.testamento);
  const [aberto, setAberto] = useState<string | null>(livro.codigo);
  const lista = useRef<HTMLDivElement>(null);
  const geral = percentualDaBiblia(leitura);

  useEffect(() => {
    const antes = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const tecla = (e: KeyboardEvent) => e.key === "Escape" && aoFechar();
    window.addEventListener("keydown", tecla);
    document.getElementById(`livro-${livro.codigo}`)?.scrollIntoView({ block: "start" });
    return () => {
      document.body.style.overflow = antes;
      window.removeEventListener("keydown", tecla);
    };
  }, []);

  const ir = (destino: string) => navegar(destino, { replace: true });

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-papel" role="dialog" aria-modal="true" aria-label="Livros da Bíblia">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-3 border-b border-borda px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-8">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-leitura text-2xl font-semibold text-marca">Bíblia</h2>
          <button type="button" onClick={aoFechar} aria-label="Fechar" className="grid size-11 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo">
            <X className="size-6" aria-hidden />
          </button>
        </div>
        <IrPara aoIr={ir} />
        <div className="grid grid-cols-2 gap-1 rounded-xl border border-borda bg-cartao p-1" role="tablist">
          {(["AT", "NT"] as const).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={t === testamento}
              onClick={() => {
                setTestamento(t);
                lista.current?.scrollTo({ top: 0 });
              }}
              className={`min-h-10 rounded-lg font-medium ${t === testamento ? "bg-destaque text-sobre-destaque" : "text-tinta-suave"}`}
            >
              {t === "AT" ? "Antigo Testamento" : "Novo Testamento"}
            </button>
          ))}
        </div>
      </div>

      <div ref={lista} className="flex-1 overflow-y-auto overscroll-contain">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-5 px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-4 md:px-8">
          {capitulosLidos(leitura) > 0 && (
            <div className="flex items-center gap-3 px-1">
              <Barra valor={geral} fina />
              <span className="shrink-0 text-sm text-tinta-suave">{geral}% lida</span>
            </div>
          )}
          {GRUPOS_DA_BIBLIA.filter((g) => g.testamento === testamento).map(({ grupo }) => (
            <section key={grupo}>
              <h3 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">{grupo}</h3>
              <div className={LISTA}>
                {LIVROS.filter((l) => l.grupo === grupo && l.testamento === testamento).map((l) => {
                  const p = percentualDoLivro(leitura, l.codigo);
                  const expandido = aberto === l.codigo;
                  const lidos = new Set(leitura.lidos[l.codigo] ?? []);
                  return (
                    <div key={l.codigo} id={`livro-${l.codigo}`} className="scroll-mt-2">
                      <button
                        type="button"
                        onClick={() => (l.capitulos === 1 ? ir(caminho(l, 1)) : setAberto(expandido ? null : l.codigo))}
                        aria-expanded={expandido}
                        className="flex min-h-12 w-full items-center gap-3 px-4 py-2.5 text-left transition-colors hover:bg-marca-fundo/60"
                      >
                        <span className={`min-w-0 flex-1 font-leitura text-[1.05rem] font-medium ${l.codigo === livro.codigo ? "text-destaque-texto" : "text-marca"}`}>{l.nome}</span>
                        <span className="text-sm text-tinta-suave">{p > 0 ? `${p}%` : l.capitulos}</span>
                        <ChevronDown className={`size-4 shrink-0 text-tinta-suave transition-transform ${expandido ? "rotate-180" : ""}`} aria-hidden />
                      </button>
                      {expandido && (
                        <div className="grid grid-cols-6 gap-1.5 px-3 pb-3 sm:grid-cols-10">
                          {Array.from({ length: l.capitulos }, (_, i) => i + 1).map((c) => {
                            const atual = l.codigo === livro.codigo && c === cap;
                            const lido = lidos.has(c);
                            return (
                              <button
                                key={c}
                                type="button"
                                onClick={() => ir(caminho(l, c))}
                                aria-label={`${nomeDoCapitulo(l, c)}${lido ? ", lido" : ""}`}
                                aria-current={atual ? "page" : undefined}
                                className={`grid h-11 place-items-center rounded-lg text-[0.95rem] font-medium ${
                                  atual ? "bg-destaque text-sobre-destaque" : lido ? "bg-marca-fundo text-destaque-texto" : "border border-borda text-tinta"
                                }`}
                              >
                                {c}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Biblia() {
  const leitura = useLeituraDaBiblia();
  const ultimo = leitura.ultimo ? livroPorCodigo(leitura.ultimo.livro) : null;
  const destino = ultimo && leitura.ultimo ? caminho(ultimo, leitura.ultimo.capitulo) : "/biblia/genesis/1";
  return <Navigate to={destino} replace />;
}

export function BibliaLivro() {
  const { livro: slug } = useParams();
  const livro = livroPorSlug(slug ?? "");
  const leitura = useLeituraDaBiblia();
  if (!livro) return <NaoEncontrada />;
  const cap = leitura.ultimo?.livro === livro.codigo ? leitura.ultimo.capitulo : 1;
  return <Navigate to={caminho(livro, cap)} replace />;
}

export function BibliaCapitulo() {
  const { livro: slug, capitulo } = useParams();
  const [params, setParams] = useSearchParams();
  const livro = livroPorSlug(slug ?? "");
  const cap = Number(capitulo);
  const [dados, setDados] = useState<LivroDaBiblia | null>(null);
  const [erro, setErro] = useState(false);
  const leitura = useLeituraDaBiblia();
  const fim = useRef<HTMLDivElement>(null);
  const [selecionado, setSelecionado] = useState<number | null>(null);
  const valido = Boolean(livro) && Number.isInteger(cap) && cap >= 1 && cap <= (livro?.capitulos ?? 0);
  const escolhendo = params.get("livros") === "1";
  const navegar = useNavigate();

  const abrirSeletor = () => {
    const p = new URLSearchParams(params);
    p.set("livros", "1");
    setParams(p);
  };
  const fecharSeletor = () => {
    if (window.history.state?.idx > 0) navegar(-1);
    else {
      const p = new URLSearchParams(params);
      p.delete("livros");
      setParams(p, { replace: true });
    }
  };
  useEffect(() => {
    if (!livro) return;
    let ativo = true;
    setErro(false);
    carregarLivro(livro.codigo)
      .then((d) => ativo && setDados(d))
      .catch(() => ativo && setErro(true));
    return () => {
      ativo = false;
    };
  }, [livro]);

  useEffect(() => setSelecionado(null), [livro, cap]);

  useEffect(() => {
    if (selecionado === null) return;
    const alvo = document.getElementById(`v${selecionado}`);
    if (alvo && alvo.getBoundingClientRect().bottom > window.innerHeight * 0.4) {
      alvo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selecionado]);

  useEffect(() => {
    if (!valido || !livro) return;
    registrarAbertura(livro.codigo, cap);
    const alvo = window.location.hash ? document.querySelector(window.location.hash) : null;
    if (!alvo) window.scrollTo(0, 0);
  }, [valido, livro, cap]);

  const carregado = dados?.codigo === livro?.codigo;
  useEffect(() => {
    if (!carregado || !livro || !fim.current) return;
    const marcador = fim.current;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada?.isIntersecting && window.scrollY > 120) marcarLido(livro.codigo, cap);
      },
      { threshold: 1 },
    );
    observador.observe(marcador);
    return () => observador.disconnect();
  }, [carregado, livro, cap]);

  useEffect(() => {
    if (!carregado || !window.location.hash) return;
    document.querySelector(window.location.hash)?.scrollIntoView({ block: "center" });
  }, [carregado]);

  if (!livro || !valido) return <NaoEncontrada />;
  const versiculos = carregado ? (dados!.capitulos[cap - 1] ?? []) : null;
  const titulo = nomeDoCapitulo(livro, cap);
  const lido = (leitura.lidos[livro.codigo] ?? []).includes(cap);
  const emRevisao = ESTADO_DOS_LIVROS[livro.codigo]?.revisao === "em-revisao";
  const anterior = vizinho(livro, cap, -1);
  const proximo = vizinho(livro, cap, 1);
  const seta = "grid size-11 shrink-0 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo";

  return (
    <div>
      <div className="sticky top-[calc(max(0.5rem,env(safe-area-inset-top))+2.3rem)] z-[5] -mx-4 -mt-5 mb-4 flex items-center gap-1 border-b border-borda bg-papel/95 px-2 py-1.5 backdrop-blur md:top-0 md:-mx-8 md:-mt-10 md:px-6 md:py-3">
        {anterior ? (
          <Link to={caminho(anterior.livro, anterior.cap)} replace aria-label={nomeDoCapitulo(anterior.livro, anterior.cap)} className={seta}>
            <ChevronLeft className="size-6" aria-hidden />
          </Link>
        ) : (
          <span className="size-11 shrink-0" />
        )}
        <button
          type="button"
          onClick={abrirSeletor}
          className="mx-auto flex min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-full border border-borda bg-cartao px-4 font-leitura text-lg font-semibold text-marca"
        >
          <span className="truncate">{titulo}</span>
          <ChevronDown className="size-4 shrink-0 text-tinta-suave" aria-hidden />
        </button>
        {proximo ? (
          <Link to={caminho(proximo.livro, proximo.cap)} replace aria-label={nomeDoCapitulo(proximo.livro, proximo.cap)} className={seta}>
            <ChevronRight className="size-6" aria-hidden />
          </Link>
        ) : (
          <span className="size-11 shrink-0" />
        )}
      </div>

      <h1 className="sr-only">{titulo}</h1>
      {emRevisao && <p className="mb-3 text-center text-sm text-tinta-suave">Texto em revisão</p>}

      <div className="px-1 sm:px-2">
        {erro ? (
          <p className="py-8 text-center text-tinta-suave">Sem conexão para abrir este livro.</p>
        ) : versiculos === null ? (
          <div className="flex flex-col gap-3">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="h-5 animate-pulse rounded bg-marca-fundo" />
            ))}
          </div>
        ) : (
          <div className="font-leitura text-[1.15rem] leading-[1.9] text-tinta sm:text-justify">
            {cap === 1 && livro.codigo !== "PSA" && <p className="mb-4 text-center font-leitura text-2xl font-semibold text-marca">{livro.nome}</p>}
            <p className="float-left mr-2 mt-1 font-leitura text-5xl font-semibold leading-none text-destaque-texto" aria-hidden>
              {cap}
            </p>
            {versiculos.map((texto, i) =>
              texto ? (
                <span
                  key={i}
                  id={`v${i + 1}`}
                  onClick={() => setSelecionado(selecionado === i + 1 ? null : i + 1)}
                  className={`scroll-mt-28 cursor-pointer rounded target:bg-marca-fundo ${livro.codigo === "PSA" && i > 0 ? "mt-1 block" : ""} ${
                    selecionado === i + 1 ? "bg-marca-fundo underline decoration-destaque decoration-2 underline-offset-4" : ""
                  }`}
                >
                  {i > 0 && <sup className="mr-1 align-[0.35em] font-sans text-[0.65em] font-semibold text-destaque-texto">{i + 1}</sup>}
                  {texto}{" "}
                </span>
              ) : null,
            )}
          </div>
        )}
        <div ref={fim} className="clear-both" />
      </div>

      {versiculos && (
        <div className="mt-8 flex flex-col gap-2">
          {proximo && (
            <Link
              to={caminho(proximo.livro, proximo.cap)}
              replace
              className="flex min-h-14 items-center justify-between gap-2 rounded-xl bg-destaque px-5 font-semibold text-sobre-destaque"
            >
              <span>{nomeDoCapitulo(proximo.livro, proximo.cap)}</span>
              <ChevronRight className="size-5" aria-hidden />
            </Link>
          )}
          <button
            type="button"
            onClick={() => marcarLido(livro.codigo, cap, !lido)}
            className={`flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border font-medium ${
              lido ? "border-transparent bg-marca-fundo text-destaque-texto" : "border-borda bg-cartao text-tinta-suave"
            }`}
          >
            {lido && <Check className="size-5" aria-hidden />}
            {lido ? "Capítulo lido" : "Marcar como lido"}
          </button>
        </div>
      )}

      {selecionado !== null && versiculos?.[selecionado - 1] && (
        <BarraDoVersiculo
          referencia={`${livro.codigo === "PSA" ? "Sl" : livro.abreviatura} ${cap},${selecionado}`}
          aviso={{
            livro: livro.codigo,
            capitulo: cap,
            versiculo: selecionado,
            arquivo: ESTADO_DOS_LIVROS[livro.codigo]?.arquivo ?? "",
            texto_versiculo: versiculos[selecionado - 1]!,
          }}
          aoFechar={() => setSelecionado(null)}
        />
      )}

      {escolhendo && <Seletor livro={livro} cap={cap} aoFechar={fecharSeletor} />}
    </div>
  );
}
