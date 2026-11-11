import { NotaDaTraducao } from "@/components/TextoBiblico";
import { BotaoOuvir, emPartes } from "@/components/Ouvir";
import { useEffect, useLayoutEffect, useRef, useState, type FormEvent } from "react";
import { Link, Navigate, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Bookmark, CalendarCheck, Check, ChevronDown, ChevronRight, NotebookPen, Search, X } from "lucide-react";
import { buscarNaBiblia, palavrasDaBusca, trechosEncontrados, type Achado } from "@/biblia/buscaNoTexto";
import { PLANOS, descreverDia, diaDoPlano, diasDoPlano, escolherPlano, usePlano, type Capitulo } from "@/biblia/planos";
import { CORES, chaveDoVersiculo, lerChave, marcaViva, useMarcas, type Cor } from "@/biblia/marcas";
import { LIVROS, livroPorCodigo, livroPorSlug, type Livro } from "@/biblia/livros";
import { carregarLivro, type LivroDaBiblia } from "@/biblia/texto";
import { carregarIntroducoes } from "@/biblia/introducoes";
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
    if (!destino) {
      if (palavrasDaBusca(texto).length) aoIr(`/biblia/busca?q=${encodeURIComponent(texto.trim())}`);
      return;
    }
    aoIr(`/biblia/${destino.livro.slug}/${destino.capitulo}${destino.versiculo ? `#v${destino.versiculo}` : ""}`);
  };

  return (
    <form onSubmit={enviar} className="relative">
      <label className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-cartao px-3 focus-within:border-destaque-texto">
        <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Livro, passagem ou palavra"
          aria-label="Livro, passagem ou palavra"
          autoFocus={focar}
          className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-tinta-suave/70"
          enterKeyHint="go"
          autoComplete="off"
        />
      </label>
      {(sugestoes.length > 0 || palavrasDaBusca(texto).length > 0) && !/\d/.test(texto) && (
        <ul className="absolute inset-x-0 top-full z-20 mt-1 overflow-hidden rounded-xl border border-borda bg-cartao shadow-lg">
          {palavrasDaBusca(texto).length > 0 && (
            <li>
              <button type="button" onClick={() => aoIr(`/biblia/busca?q=${encodeURIComponent(texto.trim())}`)} className="flex min-h-11 w-full items-center gap-2 px-4 text-left hover:bg-marca-fundo">
                <Search className="size-4 shrink-0 text-tinta-suave" aria-hidden />
                <span className="min-w-0 truncate">{`Procurar “${texto.trim()}” no texto`}</span>
              </button>
            </li>
          )}
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

  const ir = (destino: string) => navegar(destino, { replace: true, state: { ir: Date.now() } });
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
          onClick={() => setAberto(expandido ? null : l.codigo)}
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
    <div className="fixed inset-0 z-50 flex flex-col bg-papel md:left-60 md:border-l md:border-borda" role="dialog" aria-modal="true" aria-label="Livros da Bíblia">
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
        {!busca && (
          <div className="flex gap-2">
            <Link to="/biblia/marcados" replace className="flex min-h-10 items-center gap-1.5 rounded-full border border-borda bg-cartao px-3 text-sm font-medium text-tinta">
              <Bookmark className="size-4" aria-hidden /> Grifos e notas
            </Link>
            <Link to="/biblia/planos" replace className="flex min-h-10 items-center gap-1.5 rounded-full border border-borda bg-cartao px-3 text-sm font-medium text-tinta">
              <CalendarCheck className="size-4" aria-hidden /> Planos de leitura
            </Link>
          </div>
        )}
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

interface Posicao {
  livro: Livro;
  cap: number;
}

const chaveDe = (p: Posicao) => `${p.livro.codigo}-${p.cap}`;
const MAXIMO_NA_TELA = 8;
const LINHA_DO_TOPO = 140;

function Leitor({
  inicial,
  versiculo,
  aoMudar,
  aoEscolher,
}: {
  inicial: Posicao;
  versiculo: number;
  aoMudar: (p: Posicao) => void;
  aoEscolher: (p: Posicao, buscar: boolean) => void;
}) {
  const leitura = useLeituraDaBiblia();
  const marcas = useMarcas();
  const [janela, setJanela] = useState<Posicao[]>([inicial]);
  const [livros, setLivros] = useState<Record<string, LivroDaBiblia>>({});
  const [erro, setErro] = useState(false);
  const [atual, setAtual] = useState<Posicao>(inicial);
  const [selecionado, setSelecionado] = useState<{ pos: Posicao; v: number } | null>(null);
  const janelaRef = useRef(janela);
  janelaRef.current = janela;
  const atualRef = useRef(atual);
  atualRef.current = atual;
  const ocupado = useRef(false);
  const rolou = useRef(false);
  const lidos = useRef(new Set<string>());
  const ultimoY = useRef(0);
  const ancora = useRef<{ id: string; topo: number } | null>(null);
  const verificar = useRef<() => void>(() => {});

  useEffect(() => {
    let ativo = true;
    carregarLivro(inicial.livro.codigo)
      .then((d) => {
        if (!ativo) return;
        setLivros((l) => ({ ...l, [d.codigo]: d }));
      })
      .catch(() => ativo && setErro(true));
    registrarAbertura(inicial.livro.codigo, inicial.cap);
    return () => {
      ativo = false;
    };
  }, []);

  const primeiroCarregado = Boolean(livros[inicial.livro.codigo]);
  useEffect(() => {
    if (!primeiroCarregado) return;
    const alvo = versiculo ? document.getElementById(`${chaveDe(inicial)}-v${versiculo}`) : null;
    if (alvo) alvo.scrollIntoView({ block: "center" });
    else window.scrollTo(0, 0);
    const t = setTimeout(() => verificar.current(), 300);
    return () => clearTimeout(t);
  }, [primeiroCarregado]);

  const guardarAncora = () => {
    const versos = document.querySelectorAll<HTMLElement>("[data-v]");
    for (const v of versos) {
      const r = v.getBoundingClientRect();
      if (r.bottom > LINHA_DO_TOPO) {
        ancora.current = { id: v.id, topo: r.top };
        return;
      }
    }
  };

  useLayoutEffect(() => {
    const a = ancora.current;
    ancora.current = null;
    if (!a) return;
    const el = document.getElementById(a.id);
    if (el) window.scrollBy(0, el.getBoundingClientRect().top - a.topo);
  }, [janela]);

  const mais = async (passo: 1 | -1) => {
    if (ocupado.current) return;
    const j = janelaRef.current;
    const ponta = passo === 1 ? j[j.length - 1]! : j[0]!;
    const v = vizinho(ponta.livro, ponta.cap, passo);
    if (!v) return;
    ocupado.current = true;
    try {
      const d = await carregarLivro(v.livro.codigo);
      guardarAncora();
      setLivros((l) => (l[d.codigo] ? l : { ...l, [d.codigo]: d }));
      setJanela((atualJ) => {
        const n = passo === 1 ? [...atualJ, v] : [v, ...atualJ];
        if (n.length <= MAXIMO_NA_TELA) return n;
        return passo === 1 ? n.slice(n.length - MAXIMO_NA_TELA) : n.slice(0, MAXIMO_NA_TELA);
      });
    } catch {
      setErro(true);
    } finally {
      ocupado.current = false;
    }
  };

  verificar.current = () => {
    const altura = window.innerHeight;
    const doc = document.documentElement;
    if (doc.scrollHeight - (window.scrollY + altura) < 1600) void mais(1);
    if (rolou.current && window.scrollY < 900) void mais(-1);
    const descendo = window.scrollY > ultimoY.current;
    ultimoY.current = window.scrollY;
    const secoes = document.querySelectorAll<HTMLElement>("[data-capitulo]");
    let agora: Posicao | null = null;
    for (const sec of secoes) {
      const r = sec.getBoundingClientRect();
      const pos = janelaRef.current.find((p) => chaveDe(p) === sec.dataset.capitulo);
      if (!pos) continue;
      if (!agora || r.top <= LINHA_DO_TOPO) agora = pos;
      if (rolou.current && descendo && r.bottom <= altura && r.bottom > 0 && !lidos.current.has(chaveDe(pos))) {
        lidos.current.add(chaveDe(pos));
        marcarLido(pos.livro.codigo, pos.cap);
      }
    }
    if (agora && chaveDe(agora) !== chaveDe(atualRef.current)) {
      setAtual(agora);
      registrarAbertura(agora.livro.codigo, agora.cap);
      aoMudar(agora);
    }
  };

  useEffect(() => {
    let quadro = 0;
    const inicio = Date.now();
    const rolar = () => {
      if (Date.now() - inicio > 600) rolou.current = true;
      cancelAnimationFrame(quadro);
      quadro = requestAnimationFrame(() => verificar.current());
    };
    window.addEventListener("scroll", rolar, { passive: true });
    window.addEventListener("resize", rolar);
    return () => {
      window.removeEventListener("scroll", rolar);
      window.removeEventListener("resize", rolar);
      cancelAnimationFrame(quadro);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => verificar.current(), 50);
    return () => clearTimeout(t);
  }, [janela, livros]);

  const titulo = nomeDoCapitulo(atual.livro, atual.cap);

  return (
    <div>
      <div className="sticky top-[calc(max(0.5rem,env(safe-area-inset-top))+2.3rem)] z-[5] -mx-4 -mt-5 mb-2 flex items-center gap-1 bg-papel/95 px-3 py-1.5 backdrop-blur md:top-0 md:-mx-8 md:-mt-10 md:px-7 md:py-3">
        <button type="button" onClick={() => aoEscolher(atual, false)} className="flex min-h-11 min-w-0 items-center gap-1.5 rounded-full px-1 font-leitura text-2xl font-semibold text-marca">
          <span className="truncate">{titulo}</span>
          <ChevronDown className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        </button>
        <span className="flex-1" />
        <BotaoOuvir
          compacto
          titulo={titulo}
          partes={async () => {
            const d = await carregarLivro(atual.livro.codigo);
            return [`${titulo}.`, ...emPartes(d.capitulos[atual.cap - 1] ?? [])];
          }}
          className="grid size-11 shrink-0 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo"
        />
        <Link to="/biblia/marcados" aria-label="Grifos e notas" className="grid size-11 shrink-0 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo">
          <Bookmark className="size-5" aria-hidden />
        </Link>
        <button type="button" onClick={() => aoEscolher(atual, true)} aria-label="Buscar passagem" className="grid size-11 shrink-0 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo">
          <Search className="size-5" aria-hidden />
        </button>
      </div>
      <h1 className="sr-only">{nomeDoCapitulo(inicial.livro, inicial.cap)}</h1>

      {janela.map((pos, i) => {
        const dados = livros[pos.livro.codigo];
        const versiculos = dados?.capitulos[pos.cap - 1];
        const chave = chaveDe(pos);
        const lido = (leitura.lidos[pos.livro.codigo] ?? []).includes(pos.cap);
        const emRevisao = ESTADO_DOS_LIVROS[pos.livro.codigo]?.revisao === "em-revisao";
        return (
          <section key={chave} data-capitulo={chave} className={i > 0 ? "pt-12" : ""}>
            {i > 0 && <h2 className="mb-5 px-1 font-leitura text-2xl font-semibold text-marca">{nomeDoCapitulo(pos.livro, pos.cap)}</h2>}
            {emRevisao && pos.cap === 1 && <p className="mb-3 px-1 text-sm text-tinta-suave">Texto em revisão</p>}
            {pos.cap === 1 && <SobreOLivro codigo={pos.livro.codigo} />}
            {!versiculos ? (
              <div className="flex flex-col gap-3 px-1">
                {Array.from({ length: 8 }, (_, k) => (
                  <div key={k} className="h-5 animate-pulse rounded bg-marca-fundo" />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-3.5 px-1 font-leitura text-[1.2rem] leading-[1.7] text-tinta sm:px-2">
                {versiculos.map((texto, k) => {
                  const marca = marcas[chaveDoVersiculo(pos.livro.codigo, pos.cap, k + 1)];
                  return texto ? (
                    <p
                      key={k}
                      id={`${chave}-v${k + 1}`}
                      data-v
                      onClick={() => setSelecionado(selecionado && chaveDe(selecionado.pos) === chave && selecionado.v === k + 1 ? null : { pos, v: k + 1 })}
                      style={marca?.cor ? { background: CORES[marca.cor].fundo } : undefined}
                      className={`cursor-pointer rounded-md transition-colors ${marca?.cor ? "-mx-1 px-1" : ""} ${
                        selecionado && chaveDe(selecionado.pos) === chave && selecionado.v === k + 1
                          ? "bg-marca-fundo underline decoration-destaque decoration-2 underline-offset-4"
                          : chave === chaveDe(inicial) && versiculo === k + 1
                            ? "bg-marca-fundo"
                            : ""
                      }`}
                    >
                      <sup className="mr-1.5 align-[0.4em] font-sans text-[0.6em] font-medium text-tinta-suave">{k + 1}</sup>
                      {texto}
                      {marca?.nota && <NotebookPen className="ml-1.5 inline size-4 align-[-0.1em] text-destaque-texto" aria-label="Com nota" />}
                    </p>
                  ) : null;
                })}
                <button
                  type="button"
                  onClick={() => marcarLido(pos.livro.codigo, pos.cap, !lido)}
                  className={`mt-3 flex min-h-10 w-fit items-center gap-1.5 self-center rounded-full px-4 font-sans text-sm font-medium ${
                    lido ? "bg-marca-fundo text-destaque-texto" : "border border-borda text-tinta-suave"
                  }`}
                >
                  {lido && <Check className="size-4" aria-hidden />}
                  {lido ? "Capítulo lido" : "Marcar como lido"}
                </button>
                <NotaDaTraducao className="mt-1 text-center" />
              </div>
            )}
          </section>
        );
      })}

      {erro && <p className="py-8 text-center text-tinta-suave">Sem conexão para abrir este livro.</p>}
      {!vizinho(janela[janela.length - 1]!.livro, janela[janela.length - 1]!.cap, 1) && <div className="h-16" />}

      {selecionado && livros[selecionado.pos.livro.codigo]?.capitulos[selecionado.pos.cap - 1]?.[selecionado.v - 1] && (
        <BarraDoVersiculo
          referencia={`${selecionado.pos.livro.codigo === "PSA" ? "Sl" : selecionado.pos.livro.abreviatura} ${selecionado.pos.cap},${selecionado.v}`}
          aviso={{
            livro: selecionado.pos.livro.codigo,
            capitulo: selecionado.pos.cap,
            versiculo: selecionado.v,
            arquivo: ESTADO_DOS_LIVROS[selecionado.pos.livro.codigo]?.arquivo ?? "",
            texto_versiculo: livros[selecionado.pos.livro.codigo]!.capitulos[selecionado.pos.cap - 1]![selecionado.v - 1]!,
          }}
          aoFechar={() => setSelecionado(null)}
        />
      )}
    </div>
  );
}

export function BibliaCapitulo() {
  const { livro: slug, capitulo } = useParams();
  const [params, setParams] = useSearchParams();
  const local = useLocation();
  const navegar = useNavigate();
  const livro = livroPorSlug(slug ?? "");
  const cap = Number(capitulo);
  const valido = Boolean(livro) && Number.isInteger(cap) && cap >= 1 && cap <= (livro?.capitulos ?? 0);
  const escolhendo = params.get("livros");
  const versiculo = Number(local.hash.replace("#v", "")) || 0;
  const pelaRolagem = useRef("");
  const [semente, setSemente] = useState(0);
  const [escolhido, setEscolhido] = useState<Posicao | null>(null);
  const caminhoAtual = livro ? caminho(livro, cap) : "";
  const pedido = (local.state as { ir?: number } | null)?.ir ?? 0;

  useEffect(() => {
    if (caminhoAtual && caminhoAtual === pelaRolagem.current && !local.hash && !pedido) return;
    pelaRolagem.current = "";
    setSemente((n) => n + 1);
  }, [caminhoAtual, local.hash, pedido]);

  if (!livro || !valido) return <NaoEncontrada />;

  const aoMudar = (p: Posicao) => {
    const destino = caminho(p.livro, p.cap);
    pelaRolagem.current = destino;
    const busca = new URLSearchParams(params);
    busca.delete("livros");
    const q = busca.toString();
    navegar(`${destino}${q ? `?${q}` : ""}`, { replace: true });
  };

  const aoEscolher = (p: Posicao, buscar: boolean) => {
    setEscolhido(p);
    const n = new URLSearchParams(params);
    n.set("livros", buscar ? "busca" : "1");
    setParams(n);
  };

  const fecharSeletor = () => {
    if (window.history.state?.idx > 0) navegar(-1);
    else {
      const n = new URLSearchParams(params);
      n.delete("livros");
      setParams(n, { replace: true });
    }
  };

  const noSeletor = escolhido ?? { livro, cap };

  return (
    <>
      <Leitor key={semente} inicial={{ livro, cap }} versiculo={versiculo} aoMudar={aoMudar} aoEscolher={aoEscolher} />
      {escolhendo && <Seletor livro={noSeletor.livro} cap={noSeletor.cap} buscar={escolhendo === "busca"} aoFechar={fecharSeletor} />}
    </>
  );
}

const FILTROS_DE_MARCA: ("todas" | Cor | "notas")[] = ["todas", "amarelo", "verde", "azul", "rosa", "notas"];

export function BibliaMarcados() {
  const marcas = useMarcas();
  const [params, setParams] = useSearchParams();
  const filtro = (params.get("filtro") ?? "todas") as (typeof FILTROS_DE_MARCA)[number];
  const ordem = new Map(LIVROS.map((l, i) => [l.codigo, i]));
  const lista = Object.entries(marcas)
    .filter(([, m]) => marcaViva(m))
    .map(([chave, m]) => ({ chave, m, onde: lerChave(chave) }))
    .filter((x): x is { chave: string; m: (typeof marcas)[string]; onde: NonNullable<ReturnType<typeof lerChave>> } => !!x.onde && !!livroPorCodigo(x.onde.livro))
    .filter((x) => filtro === "todas" || (filtro === "notas" ? !!x.m.nota : x.m.cor === filtro))
    .sort((a, b) => (ordem.get(a.onde.livro)! - ordem.get(b.onde.livro)!) || a.onde.capitulo - b.onde.capitulo || a.onde.versiculo - b.onde.versiculo);

  return (
    <div className="flex flex-col gap-4">
      <Link to="/biblia" className="flex min-h-11 w-fit items-center gap-1 text-tinta-suave">
        <ChevronDown className="size-5 rotate-90" aria-hidden /> Bíblia
      </Link>
      <h1 className="font-leitura text-3xl font-semibold text-marca">Grifos e notas</h1>
      <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filtro">
        {FILTROS_DE_MARCA.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filtro === f}
            onClick={() => setParams(f === "todas" ? {} : { filtro: f }, { replace: true })}
            className={`flex min-h-10 shrink-0 items-center gap-1.5 rounded-full border px-3 text-sm font-medium ${filtro === f ? "border-destaque bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta"}`}
          >
            {f !== "todas" && f !== "notas" && <span className="size-4 rounded-full border border-borda" style={{ background: CORES[f].fundo }} />}
            {f === "todas" ? "Todos" : f === "notas" ? "Notas" : CORES[f].nome}
          </button>
        ))}
      </div>
      {!lista.length ? (
        <p className="text-tinta-suave">Nada por aqui ainda.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-borda overflow-hidden rounded-2xl border border-borda bg-cartao shadow-sm">
          {lista.map(({ chave, m, onde }) => {
            const livro = livroPorCodigo(onde.livro)!;
            return (
              <li key={chave}>
                <Link to={`${caminho(livro, onde.capitulo)}#v${onde.versiculo}`} className="flex flex-col gap-1.5 px-4 py-3 hover:bg-marca-fundo/60">
                  <span className="flex items-center gap-2 text-sm font-semibold text-destaque-texto">
                    {m.cor && <span className="size-3 rounded-full" style={{ background: CORES[m.cor].fundo }} />}
                    {`${livro.codigo === "PSA" ? "Sl" : livro.abreviatura} ${onde.capitulo},${onde.versiculo}`}
                  </span>
                  {m.texto && (
                    <span className="font-leitura text-tinta" style={m.cor ? { background: CORES[m.cor].fundo } : undefined}>
                      {m.texto}
                    </span>
                  )}
                  {m.nota && (
                    <span className="flex items-start gap-1.5 text-sm text-tinta-suave">
                      <NotebookPen className="mt-0.5 size-4 shrink-0" aria-hidden />
                      <span className="whitespace-pre-line">{m.nota}</span>
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function SobreOLivro({ codigo }: { codigo: string }) {
  const [partes, setPartes] = useState<string[] | null>(null);
  useEffect(() => {
    let ativo = true;
    carregarIntroducoes()
      .then((t) => ativo && setPartes(t[codigo] ?? null))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [codigo]);
  if (!partes) return null;
  return (
    <details className="group mb-4 rounded-2xl border border-borda bg-cartao px-4 font-sans">
      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-2 font-medium text-tinta">
        Sobre este livro
        <ChevronDown className="size-5 shrink-0 text-tinta-suave transition-transform group-open:rotate-180" aria-hidden />
      </summary>
      <div className="flex flex-col gap-3 pb-4 font-leitura text-[1.05rem] leading-relaxed text-tinta">
        {partes.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </details>
  );
}

function Destacado({ texto, palavras }: { texto: string; palavras: string[] }) {
  const trechos = trechosEncontrados(texto, palavras);
  const partes: React.ReactNode[] = [];
  let i = 0;
  trechos.forEach(([de, ate], k) => {
    if (de > i) partes.push(texto.slice(i, de));
    partes.push(
      <mark key={k} className="rounded bg-marca-fundo px-0.5 font-semibold text-marca">
        {texto.slice(de, ate)}
      </mark>,
    );
    i = ate;
  });
  partes.push(texto.slice(i));
  return <>{partes}</>;
}

const LIMITE_DA_BUSCA = 500;
const POR_PAGINA_DA_BUSCA = 50;

function Voltar({ para, children }: { para: string; children: string }) {
  return (
    <Link to={para} className="flex min-h-11 w-fit items-center gap-1 text-tinta-suave">
      <ChevronDown className="size-5 rotate-90" aria-hidden /> {children}
    </Link>
  );
}

export function BibliaBusca() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") ?? "";
  const testamento = (params.get("t") ?? "") as "" | "AT" | "NT";
  const [texto, setTexto] = useState(q);
  const [achados, setAchados] = useState<Achado[]>([]);
  const [lendo, setLendo] = useState<string | null>(null);
  const [fim, setFim] = useState<{ cortado: boolean } | null>(null);
  const [erro, setErro] = useState(false);
  const [mostrar, setMostrar] = useState(POR_PAGINA_DA_BUSCA);
  const palavras = palavrasDaBusca(q);

  useEffect(() => {
    let cancelado = false;
    setAchados([]);
    setFim(null);
    setErro(false);
    setMostrar(POR_PAGINA_DA_BUSCA);
    if (!palavras.length) return;
    const livros = LIVROS.filter((l) => !testamento || l.testamento === testamento);
    buscarNaBiblia(
      q,
      (novos, livro) => {
        if (cancelado) return;
        setLendo(livro.nome);
        if (novos.length) setAchados((a) => [...a, ...novos]);
      },
      { limite: LIMITE_DA_BUSCA, livros, cancelado: () => cancelado },
    )
      .then((r) => !cancelado && setFim({ cortado: r.cortado }))
      .catch(() => !cancelado && setErro(true))
      .finally(() => !cancelado && setLendo(null));
    return () => {
      cancelado = true;
    };
  }, [q, testamento]);

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const n = new URLSearchParams(params);
    n.set("q", texto.trim());
    setParams(n, { replace: true });
  };

  return (
    <div className="flex flex-col gap-4">
      <Voltar para="/biblia">Bíblia</Voltar>
      <h1 className="font-leitura text-3xl font-semibold text-marca">Procurar na Bíblia</h1>
      <form onSubmit={enviar}>
        <label className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-cartao px-3 focus-within:border-destaque-texto">
          <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Palavras" aria-label="Palavras" enterKeyHint="search" className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none" />
        </label>
      </form>
      <div className="flex gap-2" role="group" aria-label="Testamento">
        {(
          [
            ["", "Toda a Bíblia"],
            ["AT", "Antigo"],
            ["NT", "Novo"],
          ] as const
        ).map(([v, nome]) => (
          <button
            key={v}
            type="button"
            aria-pressed={testamento === v}
            onClick={() => {
              const n = new URLSearchParams(params);
              if (v) n.set("t", v);
              else n.delete("t");
              setParams(n, { replace: true });
            }}
            className={`min-h-10 rounded-full border px-3 text-sm font-medium ${testamento === v ? "border-destaque bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta"}`}
          >
            {nome}
          </button>
        ))}
      </div>
      {palavras.length > 0 && (
        <p className="px-1 text-sm text-tinta-suave" aria-live="polite">
          {lendo
            ? `${achados.length} ${achados.length === 1 ? "versículo" : "versículos"} · procurando em ${lendo}`
            : erro
              ? "Sem conexão para procurar em toda a Bíblia."
              : fim
                ? `${fim.cortado ? `Mais de ${LIMITE_DA_BUSCA}` : achados.length} ${achados.length === 1 ? "versículo" : "versículos"}`
                : ""}
        </p>
      )}
      {achados.length > 0 && (
        <ul className="flex flex-col divide-y divide-borda overflow-hidden rounded-2xl border border-borda bg-cartao shadow-sm">
          {achados.slice(0, mostrar).map((a) => (
            <li key={`${a.livro.codigo}-${a.capitulo}-${a.versiculo}`}>
              <Link to={`${caminho(a.livro, a.capitulo)}#v${a.versiculo}`} className="flex flex-col gap-1 px-4 py-3 hover:bg-marca-fundo/60">
                <span className="text-sm font-semibold text-destaque-texto">{`${a.livro.codigo === "PSA" ? "Sl" : a.livro.abreviatura} ${a.capitulo},${a.versiculo}`}</span>
                <span className="font-leitura text-tinta">
                  <Destacado texto={a.texto} palavras={palavras} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {achados.length > mostrar && (
        <button type="button" onClick={() => setMostrar((m) => m + POR_PAGINA_DA_BUSCA)} className="min-h-11 text-sm font-medium text-tinta-suave">
          Mostrar mais
        </button>
      )}
    </div>
  );
}

function LinksDoDia({ dia, lidos }: { dia: Capitulo[]; lidos: Record<string, number[]> }) {
  return (
    <div className="flex flex-wrap gap-2">
      {dia.map((c) => {
        const lido = (lidos[c.livro.codigo] ?? []).includes(c.capitulo);
        return (
          <Link
            key={`${c.livro.codigo}-${c.capitulo}`}
            to={caminho(c.livro, c.capitulo)}
            className={`flex min-h-10 items-center gap-1 rounded-full border px-3 text-sm font-medium ${lido ? "border-transparent bg-marca-fundo text-destaque-texto" : "border-borda bg-papel text-tinta"}`}
          >
            {lido && <Check className="size-4" aria-hidden />}
            {`${c.livro.codigo === "PSA" ? "Sl" : c.livro.abreviatura} ${c.capitulo}`}
          </Link>
        );
      })}
    </div>
  );
}

export function BibliaPlanos() {
  const leitura = useLeituraDaBiblia();
  const emCurso = usePlano();
  const [todos, setTodos] = useState(false);
  const plano = emCurso ? PLANOS.find((p) => p.id === emCurso.id)! : null;
  const lido = (c: Capitulo) => (leitura.lidos[c.livro.codigo] ?? []).includes(c.capitulo);

  if (!plano || !emCurso)
    return (
      <div className="flex flex-col gap-4">
        <Voltar para="/biblia">Bíblia</Voltar>
        <h1 className="font-leitura text-3xl font-semibold text-marca">Planos de leitura</h1>
        <ul className="flex flex-col gap-2">
          {PLANOS.map((p) => (
            <li key={p.id}>
              <button type="button" onClick={() => escolherPlano(p.id)} className="flex min-h-16 w-full items-center gap-3 rounded-2xl border border-borda bg-cartao px-4 py-3 text-left shadow-sm">
                <span className="min-w-0 flex-1">
                  <span className="block font-leitura text-lg font-medium text-marca">{p.nome}</span>
                  <span className="block text-sm text-tinta-suave">{`${p.dias} dias · ${descreverDia(diasDoPlano(p)[0]!)} no primeiro dia`}</span>
                </span>
                <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );

  const dias = diasDoPlano(plano);
  const hoje = Math.min(diaDoPlano(emCurso.inicio), plano.dias);
  const feitos = dias.filter((d) => d.every(lido)).length;
  const atrasados = dias.slice(0, hoje - 1).filter((d) => !d.every(lido)).length;
  const deHoje = dias[hoje - 1]!;
  const proximo = deHoje.find((c) => !lido(c)) ?? dias.flat().find((c) => !lido(c));

  return (
    <div className="flex flex-col gap-4">
      <Voltar para="/biblia">Bíblia</Voltar>
      <h1 className="font-leitura text-3xl font-semibold text-marca">{plano.nome}</h1>
      <div className="flex flex-col gap-2">
        <Barra valor={Math.round((feitos / plano.dias) * 100)} />
        <p className="text-sm text-tinta-suave">{`${feitos} de ${plano.dias} dias lidos${atrasados ? ` · ${atrasados} ${atrasados === 1 ? "dia atrasado" : "dias atrasados"}` : ""}`}</p>
      </div>
      <section className="flex flex-col gap-3 rounded-2xl border border-borda bg-cartao p-4 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-destaque-texto">{`Dia ${hoje}`}</p>
        <LinksDoDia dia={deHoje} lidos={leitura.lidos} />
        {proximo && (
          <Link to={caminho(proximo.livro, proximo.capitulo)} className="flex min-h-12 items-center justify-center rounded-xl bg-destaque font-semibold text-sobre-destaque">
            {`Ler ${nomeDoCapitulo(proximo.livro, proximo.capitulo)}`}
          </Link>
        )}
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">Todos os dias</h2>
        <ol className="flex flex-col divide-y divide-borda overflow-hidden rounded-2xl border border-borda bg-cartao shadow-sm">
          {dias.slice(0, todos ? dias.length : Math.min(dias.length, hoje + 6)).map((d, i) => (
            <li key={i} className={`flex items-center gap-3 px-4 py-2.5 ${i + 1 === hoje ? "bg-marca-fundo/60" : ""}`}>
              <span className="w-14 shrink-0 text-sm text-tinta-suave">{`Dia ${i + 1}`}</span>
              <span className="min-w-0 flex-1 text-tinta">{descreverDia(d)}</span>
              {d.every(lido) && <Check className="size-5 shrink-0 text-destaque-texto" aria-label="Lido" />}
            </li>
          ))}
        </ol>
        {!todos && dias.length > hoje + 6 && (
          <button type="button" onClick={() => setTodos(true)} className="min-h-11 text-sm font-medium text-tinta-suave">
            Mostrar todos
          </button>
        )}
      </section>
      <button
        type="button"
        onClick={() => {
          if (confirm("Deixar este plano? O que você já leu continua marcado.")) escolherPlano(null);
        }}
        className="min-h-11 text-sm font-medium text-tinta-suave underline underline-offset-4"
      >
        Deixar o plano
      </button>
    </div>
  );
}
