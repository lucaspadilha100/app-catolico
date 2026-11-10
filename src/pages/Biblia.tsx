import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, Navigate, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Check, ChevronDown, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { LIVROS, livroPorCodigo, livroPorSlug, type Livro } from "@/biblia/livros";
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

function IrPara({ aoIr, focar }: { aoIr: (destino: string) => void; focar?: boolean }) {
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
          autoFocus={focar}
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

function Seletor({ livro, cap, buscar, aoFechar }: { livro: Livro; cap: number; buscar: boolean; aoFechar: () => void }) {
  const navegar = useNavigate();
  const leitura = useLeituraDaBiblia();
  const [aberto, setAberto] = useState<string | null>(livro.codigo);
  const [busca, setBusca] = useState(buscar);
  const geral = percentualDaBiblia(leitura);

  useEffect(() => {
    const antes = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const tecla = (e: KeyboardEvent) => e.key === "Escape" && aoFechar();
    window.addEventListener("keydown", tecla);
    if (!buscar) document.getElementById(`livro-${livro.codigo}`)?.scrollIntoView({ block: "start" });
    return () => {
      document.body.style.overflow = antes;
      window.removeEventListener("keydown", tecla);
    };
  }, []);

  const ir = (destino: string) => navegar(destino, { replace: true });
  const icone = "grid size-11 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo";

  const linha = (l: Livro) => {
    const expandido = aberto === l.codigo;
    const atualLivro = l.codigo === livro.codigo;
    const lidos = new Set(leitura.lidos[l.codigo] ?? []);
    const p = percentualDoLivro(leitura, l.codigo);
    return (
      <div key={l.codigo} id={`livro-${l.codigo}`} className="scroll-mt-1">
        <button
          type="button"
          onClick={() => (l.capitulos === 1 ? ir(caminho(l, 1)) : setAberto(expandido ? null : l.codigo))}
          aria-expanded={expandido}
          className="flex min-h-14 w-full items-center gap-3 py-2 text-left"
        >
          <span className={`min-w-0 flex-1 font-leitura text-2xl font-semibold ${expandido || atualLivro ? "text-marca" : "text-tinta-suave/80"}`}>{l.nome}</span>
          {p > 0 && <span className="text-sm text-tinta-suave">{p}%</span>}
          <ChevronDown className={`size-5 shrink-0 text-tinta-suave transition-transform ${expandido ? "rotate-180" : ""}`} aria-hidden />
        </button>
        {expandido && (
          <div className="grid grid-cols-6 gap-1 pb-4 pt-1 sm:grid-cols-10">
            {Array.from({ length: l.capitulos }, (_, i) => i + 1).map((c) => {
              const atual = atualLivro && c === cap;
              const lido = lidos.has(c);
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => ir(caminho(l, c))}
                  aria-label={`${nomeDoCapitulo(l, c)}${lido ? ", lido" : ""}`}
                  aria-current={atual ? "page" : undefined}
                  className={`grid h-12 place-items-center rounded-xl text-lg font-semibold ${
                    atual ? "bg-destaque text-sobre-destaque" : lido ? "text-destaque-texto" : "text-tinta hover:bg-marca-fundo"
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
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-papel" role="dialog" aria-modal="true" aria-label="Livros da Bíblia">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-3 px-4 pb-2 pt-[max(0.75rem,env(safe-area-inset-top))] md:px-8">
        <div className="flex items-center gap-1">
          <h2 className="flex-1 font-leitura text-3xl font-semibold text-marca">Livros</h2>
          <button type="button" onClick={() => setBusca(!busca)} aria-label="Buscar" aria-pressed={busca} className={icone}>
            <Search className="size-6" aria-hidden />
          </button>
          <button type="button" onClick={aoFechar} aria-label="Fechar" className={icone}>
            <X className="size-6" aria-hidden />
          </button>
        </div>
        {busca && <IrPara aoIr={ir} focar />}
      </div>

      <div className="flex-1 overflow-y-auto overscroll-contain">
        <div className="mx-auto w-full max-w-2xl px-4 pb-[max(2rem,env(safe-area-inset-bottom))] md:px-8">
          {capitulosLidos(leitura) > 0 && (
            <div className="flex items-center gap-3 pb-2 pt-1">
              <Barra valor={geral} fina />
              <span className="shrink-0 text-sm text-tinta-suave">{geral}% lida</span>
            </div>
          )}
          {(["AT", "NT"] as const).map((t) => (
            <section key={t} className="pt-3">
              <h3 className="pb-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">{t === "AT" ? "Antigo Testamento" : "Novo Testamento"}</h3>
              {LIVROS.filter((l) => l.testamento === t).map(linha)}
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
  const escolhendo = params.get("livros");
  const alvo = Number(useLocation().hash.replace("#v", "")) || 0;
  const navegar = useNavigate();

  const abrirSeletor = (buscar = false) => {
    const p = new URLSearchParams(params);
    p.set("livros", buscar ? "busca" : "1");
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

  return (
    <div>
      <div className="sticky top-[calc(max(0.5rem,env(safe-area-inset-top))+2.3rem)] z-[5] -mx-4 -mt-5 mb-2 flex items-center gap-1 bg-papel/95 px-3 py-1.5 backdrop-blur md:top-0 md:-mx-8 md:-mt-10 md:px-7 md:py-3">
        <button type="button" onClick={() => abrirSeletor()} className="flex min-h-11 min-w-0 items-center gap-1.5 rounded-full px-1 font-leitura text-2xl font-semibold text-marca">
          <span className="truncate">{titulo}</span>
          <ChevronDown className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        </button>
        <span className="flex-1" />
        <button type="button" onClick={() => abrirSeletor(true)} aria-label="Buscar passagem" className="grid size-11 shrink-0 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo">
          <Search className="size-5" aria-hidden />
        </button>
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
          <div className="flex flex-col gap-3.5 font-leitura text-[1.2rem] leading-[1.7] text-tinta">
            {versiculos.map((texto, i) =>
              texto ? (
                <p
                  key={i}
                  id={`v${i + 1}`}
                  onClick={() => setSelecionado(selecionado === i + 1 ? null : i + 1)}
                  className={`scroll-mt-32 cursor-pointer rounded-md transition-colors target:bg-marca-fundo ${
                    selecionado === i + 1 ? "bg-marca-fundo underline decoration-destaque decoration-2 underline-offset-4" : alvo === i + 1 ? "bg-marca-fundo" : ""
                  }`}
                >
                  <sup className="mr-1.5 align-[0.4em] font-sans text-[0.6em] font-medium text-tinta-suave">{i + 1}</sup>
                  {texto}
                </p>
              ) : null,
            )}
          </div>
        )}
        <div ref={fim} className="clear-both" />
      </div>

      {versiculos && (
        <div className="mt-10 flex flex-col gap-2">
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
          {anterior && (
            <Link to={caminho(anterior.livro, anterior.cap)} replace className="flex min-h-11 items-center justify-center gap-1 text-sm font-medium text-tinta-suave">
              <ChevronLeft className="size-4" aria-hidden /> {nomeDoCapitulo(anterior.livro, anterior.cap)}
            </Link>
          )}
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

      {escolhendo && <Seletor livro={livro} cap={cap} buscar={escolhendo === "busca"} aoFechar={fecharSeletor} />}
    </div>
  );
}
