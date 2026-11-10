import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { BookOpen, Check, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { GRUPOS_DA_BIBLIA, LIVROS, livroPorCodigo, livroPorSlug, type Testamento } from "@/biblia/livros";
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
import { Cartao, TituloPagina } from "@/components/Cartao";
import { NaoEncontrada } from "@/pages/Simples";
import { BarraDoVersiculo } from "@/components/AvisarErro";

function Barra({ valor, fina = false }: { valor: number; fina?: boolean }) {
  return (
    <div className={`w-full overflow-hidden rounded-full bg-marca-fundo ${fina ? "h-1.5" : "h-2.5"}`} role="progressbar" aria-valuenow={valor} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-destaque" style={{ width: `${valor}%` }} />
    </div>
  );
}

function IrPara() {
  const navegar = useNavigate();
  const [texto, setTexto] = useState("");
  const sugestoes = texto.trim() ? livrosQueCombinam(texto).slice(0, 5) : [];

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const destino = interpretar(texto);
    if (!destino) return;
    navegar(`/biblia/${destino.livro.slug}/${destino.capitulo}${destino.versiculo ? `#v${destino.versiculo}` : ""}`);
  };

  return (
    <form onSubmit={enviar} className="relative">
      <label className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-cartao px-3 focus-within:border-destaque-texto">
        <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ir para… (ex.: Mc 4, Salmo 22, Jo 3,16)"
          className="min-w-0 flex-1 bg-transparent py-2 outline-none placeholder:text-tinta-suave/70"
          enterKeyHint="go"
          autoComplete="off"
        />
      </label>
      {sugestoes.length > 0 && !/\d/.test(texto) && (
        <ul className="absolute inset-x-0 top-full z-20 mt-1 overflow-hidden rounded-xl border border-borda bg-cartao shadow-lg">
          {sugestoes.map((l) => (
            <li key={l.codigo}>
              <Link to={`/biblia/${l.slug}`} className="flex min-h-11 items-center justify-between px-4 hover:bg-marca-fundo">
                <span className="font-leitura">{l.nome}</span>
                <span className="text-sm text-tinta-suave">{l.abreviatura}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export function Biblia() {
  const [params, setParams] = useSearchParams();
  const testamento: Testamento = params.get("t") === "NT" ? "NT" : "AT";
  const leitura = useLeituraDaBiblia();
  const ultimo = leitura.ultimo ? livroPorCodigo(leitura.ultimo.livro) : null;
  const geral = percentualDaBiblia(leitura);

  return (
    <div className="flex flex-col gap-5">
      <TituloPagina>Bíblia</TituloPagina>

      <IrPara />

      {ultimo && leitura.ultimo && (
        <Link
          to={`/biblia/${ultimo.slug}/${leitura.ultimo.capitulo}`}
          className="flex items-center gap-4 rounded-2xl bg-destaque p-5 text-sobre-destaque shadow-sm"
        >
          <BookOpen className="size-8 shrink-0 opacity-90" aria-hidden />
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium opacity-90">Continuar lendo</span>
            <span className="block font-leitura text-xl font-semibold">
              {ultimo.codigo === "PSA" ? `Salmo ${leitura.ultimo.capitulo}` : `${ultimo.nome} ${leitura.ultimo.capitulo}`}
            </span>
          </span>
          <ChevronRight className="size-6 shrink-0" aria-hidden />
        </Link>
      )}

      <Cartao className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-medium">Bíblia completa</span>
          <span className="font-leitura text-2xl font-semibold text-marca">{geral}%</span>
        </div>
        <Barra valor={geral} />
        <span className="text-sm text-tinta-suave">
          {capitulosLidos(leitura)} de 1.334 capítulos lidos
        </span>
      </Cartao>

      <div className="grid grid-cols-2 gap-2" role="tablist">
        {(["AT", "NT"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={t === testamento}
            onClick={() => setParams(t === "AT" ? {} : { t }, { replace: true })}
            className={`min-h-11 rounded-xl border px-3 font-medium ${
              t === testamento ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta-suave"
            }`}
          >
            {t === "AT" ? "Antigo Testamento" : "Novo Testamento"}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {GRUPOS_DA_BIBLIA.filter((g) => g.testamento === testamento).map(({ grupo }) => (
          <section key={grupo}>
            <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">{grupo}</h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {LIVROS.filter((l) => l.grupo === grupo && l.testamento === testamento).map((l) => {
                const p = percentualDoLivro(leitura, l.codigo);
                return (
                  <Link
                    key={l.codigo}
                    to={`/biblia/${l.slug}`}
                    className="flex min-h-14 flex-col justify-center gap-2 rounded-xl border border-borda bg-cartao px-4 py-3"
                  >
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="font-leitura text-[1.05rem] font-medium text-marca">{l.nome}</span>
                      <span className="text-sm text-tinta-suave">{p > 0 ? `${p}%` : `${l.capitulos} cap.`}</span>
                    </span>
                    {p > 0 && <Barra valor={p} fina />}
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function BibliaLivro() {
  const { livro: slug } = useParams();
  const livro = livroPorSlug(slug ?? "");
  const leitura = useLeituraDaBiblia();
  if (!livro) return <NaoEncontrada />;
  const lidos = new Set(leitura.lidos[livro.codigo] ?? []);
  const p = percentualDoLivro(leitura, livro.codigo);

  return (
    <div className="flex flex-col gap-4">
      <Link to={`/biblia${livro.testamento === "NT" ? "?t=NT" : ""}`} className="inline-flex min-h-10 items-center gap-1 self-start text-sm font-medium text-tinta-suave">
        <ChevronLeft className="size-4" /> Bíblia
      </Link>
      <div>
        <TituloPagina>{livro.nome}</TituloPagina>
        <div className="-mt-3 flex items-center gap-3">
          <Barra valor={p} />
          <span className="shrink-0 text-sm font-medium text-tinta-suave">{p}% lido</span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-8">
        {Array.from({ length: livro.capitulos }, (_, i) => i + 1).map((c) => {
          const lido = lidos.has(c);
          return (
            <Link
              key={c}
              to={`/biblia/${livro.slug}/${c}`}
              aria-label={`Capítulo ${c}${lido ? ", lido" : ""}`}
              className={`grid aspect-square min-h-11 place-items-center rounded-xl border font-medium ${
                lido ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-marca"
              }`}
            >
              {c}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function BibliaCapitulo() {
  const { livro: slug, capitulo } = useParams();
  const livro = livroPorSlug(slug ?? "");
  const cap = Number(capitulo);
  const [dados, setDados] = useState<LivroDaBiblia | null>(null);
  const [erro, setErro] = useState(false);
  const leitura = useLeituraDaBiblia();
  const fim = useRef<HTMLDivElement>(null);
  const [selecionado, setSelecionado] = useState<number | null>(null);
  const valido = Boolean(livro) && Number.isInteger(cap) && cap >= 1 && cap <= (livro?.capitulos ?? 0);

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
  const versiculos = carregado ? dados!.capitulos[cap - 1] ?? [] : null;
  const titulo = livro.codigo === "PSA" ? `Salmo ${cap}` : `${livro.nome} ${cap}`;
  const lido = (leitura.lidos[livro.codigo] ?? []).includes(cap);
  const emRevisao = ESTADO_DOS_LIVROS[livro.codigo]?.revisao === "em-revisao";

  return (
    <div>
      <Link to={`/biblia/${livro.slug}`} className="mb-3 inline-flex min-h-10 items-center gap-1 text-sm font-medium text-tinta-suave">
        <ChevronLeft className="size-4" /> {livro.nome}
      </Link>
      <TituloPagina>{titulo}</TituloPagina>
      {emRevisao && <p className="-mt-3 mb-4 text-sm text-tinta-suave">Texto em revisão</p>}

      <Cartao className="px-5 py-6 sm:px-8">
        {erro ? (
          <p className="text-tinta-suave">Sem conexão para abrir este livro.</p>
        ) : versiculos === null ? (
          <div className="flex flex-col gap-3">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="h-5 animate-pulse rounded bg-marca-fundo" />
            ))}
          </div>
        ) : (
          <div className="font-leitura text-[1.125rem] leading-[1.85] text-tinta sm:text-justify">
            {versiculos.map((texto, i) =>
              texto ? (
                <span
                  key={i}
                  id={`v${i + 1}`}
                  onClick={() => setSelecionado(selecionado === i + 1 ? null : i + 1)}
                  className={`scroll-mt-24 cursor-pointer rounded target:bg-marca-fundo ${
                    selecionado === i + 1 ? "bg-marca-fundo underline decoration-destaque decoration-2 underline-offset-4" : ""
                  }`}
                >
                  <sup className="mr-1 align-[0.35em] font-sans text-[0.65em] font-semibold text-destaque-texto">{i + 1}</sup>
                  {texto}{" "}
                </span>
              ) : null,
            )}
          </div>
        )}
        <div ref={fim} />
      </Cartao>

      {versiculos && (
        <button
          type="button"
          onClick={() => marcarLido(livro.codigo, cap, !lido)}
          className={`mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border font-semibold ${
            lido ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-destaque-texto"
          }`}
        >
          {lido && <Check className="size-5" aria-hidden />}
          {lido ? "Capítulo lido" : "Marcar como lido"}
        </button>
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

      <nav className="mt-3 grid grid-cols-2 gap-2">
        {cap > 1 ? (
          <Link
            to={`/biblia/${livro.slug}/${cap - 1}`}
            className="flex min-h-12 items-center justify-center gap-1 rounded-xl border border-borda bg-cartao font-medium text-tinta-suave"
          >
            <ChevronLeft className="size-4" /> {livro.codigo === "PSA" ? "Salmo" : "Capítulo"} {cap - 1}
          </Link>
        ) : (
          <span />
        )}
        {cap < livro.capitulos ? (
          <Link
            to={`/biblia/${livro.slug}/${cap + 1}`}
            className="flex min-h-12 items-center justify-center gap-1 rounded-xl border border-borda bg-cartao font-medium text-tinta-suave"
          >
            {livro.codigo === "PSA" ? "Salmo" : "Capítulo"} {cap + 1} <ChevronRight className="size-4" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
