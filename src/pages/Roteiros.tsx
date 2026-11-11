import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowDown, ArrowUp, Bookmark, BookmarkCheck, ChevronLeft, ChevronRight, Copy, ExternalLink, Pencil, Plus, QrCode, Radio, Share2, Trash2 } from "lucide-react";
import { renderSVG } from "uqr";
import { useConta } from "@/conta/useConta";
import { MISTERIOS, misteriosDoDia, type GrupoDeMisterios } from "@/liturgia/terco";
import { hoje } from "@/liturgia/datas";
import { MEDITACOES } from "@/oracao/terco";
import { ORACOES } from "@/oracao/oracoes";
import { formatarReferencia } from "@/liturgia/lecionario";
import { TextoDaOracao } from "@/components/TextoDaOracao";
import { EscolherPintura } from "@/components/EscolherPintura";
import { caminhoDaImagem } from "@/santos/santos";
import { Cartao } from "@/components/Cartao";
import { Cabecalho, Carregando, Voltar } from "@/components/Devocao";
import { NaoEncontrada } from "@/pages/Simples";
import { compartilhar, enderecoPublico } from "@/lib/nativo";
import { NOME_DO_ROTULO, NOME_DO_TIPO, type Bloco, type RotuloDeTexto, type Roteiro, type TipoDeBloco } from "@/roteiros/tipos";
import { NOME_DO_MODELO, quandoDoRoteiro, avancar, blocoTemConteudo, blocoVazio, blocosDoModelo, ehUltima, primeiraPosicao, tituloDoBloco, voltar, type Modelo, type Posicao } from "@/roteiros/roteiro";
import { escreverReferencia, lerReferencia, versiculosDa } from "@/roteiros/referencia";
import {
  apagarRoteiro,
  canalDoRoteiro,
  carregarRoteiro,
  criarRoteiro,
  estadoDoRoteiro,
  gravarEstado,
  meusRoteiros,
  ouvirRoteiro,
  podeConduzir,
  roteiroPorCodigo,
  salvarRoteiro,
  type Estado,
} from "@/roteiros/api";
import { alternarMusica, buscaDaMusica, estaGuardada, useMusicas } from "@/roteiros/musicas";

const CAMPO = "min-h-12 w-full rounded-xl border border-borda bg-papel px-3 text-base text-tinta outline-none focus:border-destaque-texto";
const BOTAO = "flex min-h-12 items-center justify-center gap-2 rounded-xl bg-destaque px-4 font-semibold text-sobre-destaque disabled:opacity-50";
const BOTAO_CLARO = "flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-cartao px-4 font-semibold text-tinta disabled:opacity-50";
const TITULO = "px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto";
const ICONE = "grid size-10 shrink-0 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo disabled:opacity-30";

const ORACOES_EM_ORDEM = Object.values(ORACOES).sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
const GRUPOS: GrupoDeMisterios[] = ["gozosos", "luminosos", "dolorosos", "gloriosos"];

const linkDoRoteiro = (codigo: string) => `${enderecoPublico()}/r/${codigo}`;

function Campo({ rotulo, children }: { rotulo: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-tinta-suave">{rotulo}</span>
      {children}
    </label>
  );
}

function Leitura({ referencia }: { referencia: string }) {
  const passagem = useMemo(() => lerReferencia(referencia), [referencia]);
  const [versos, setVersos] = useState<{ numero: number; texto: string }[] | null>(null);
  useEffect(() => {
    let ativo = true;
    setVersos(null);
    if (passagem)
      versiculosDa(passagem)
        .then((v) => ativo && setVersos(v))
        .catch(() => ativo && setVersos([]));
    return () => {
      ativo = false;
    };
  }, [passagem]);
  if (!passagem) return <p className="text-tinta">{referencia}</p>;
  return (
    <div className="flex flex-col gap-1">
      <p className="font-semibold text-destaque-texto">{escreverReferencia(passagem)}</p>
      {versos === null ? (
        <div className="h-12 animate-pulse rounded-lg bg-marca-fundo" />
      ) : (
        <p className="font-leitura text-[1.1rem] leading-[1.75] text-tinta">
          {versos.map((v) => (
            <span key={v.numero}>
              <sup className="mr-1 align-[0.35em] font-sans text-[0.65em] font-semibold text-destaque-texto">{v.numero}</sup>
              {v.texto}{" "}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}

function Canto({ b }: { b: Extract<Bloco, { tipo: "canto" }> }) {
  const musicas = useMusicas();
  const guardada = estaGuardada(b, musicas);
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="font-leitura text-xl font-semibold leading-snug text-marca">{b.titulo}</p>
        {b.artista && <p className="text-tinta-suave">{b.artista}</p>}
      </div>
      <div className="flex flex-wrap gap-2">
        <a href={b.link || buscaDaMusica(b)} target="_blank" rel="noreferrer" className="flex min-h-10 items-center gap-1.5 rounded-full border border-borda px-4 text-sm font-medium text-destaque-texto">
          <ExternalLink className="size-4" aria-hidden /> Ouvir
        </a>
        <button
          type="button"
          onClick={() => alternarMusica({ titulo: b.titulo, artista: b.artista, link: b.link })}
          aria-pressed={guardada}
          className={`flex min-h-10 items-center gap-1.5 rounded-full border px-4 text-sm font-medium ${guardada ? "border-transparent bg-marca-fundo text-destaque-texto" : "border-borda text-tinta"}`}
        >
          {guardada ? <BookmarkCheck className="size-4" aria-hidden /> : <Bookmark className="size-4" aria-hidden />}
          {guardada ? "Guardada" : "Guardar"}
        </button>
      </div>
    </div>
  );
}

function rotuloDoBloco(b: Bloco): string {
  if (b.tipo === "texto") return NOME_DO_ROTULO[b.rotulo];
  if (b.tipo === "imagem") return "Imagem";
  return NOME_DO_TIPO[b.tipo];
}

function BlocoNaTela({ b, atual, conta }: { b: Bloco; atual: boolean; conta: number }) {
  const [aberta, setAberta] = useState(false);
  let corpo: ReactNode = null;
  if (b.tipo === "canto") corpo = <Canto b={b} />;
  else if (b.tipo === "imagem")
    corpo = (
      <figure className="flex flex-col items-center gap-2">
        <img src={b.imagem} alt={b.nome} className="max-h-80 w-full rounded-xl object-contain" />
        <figcaption className="font-leitura text-lg font-semibold text-marca">{b.nome}</figcaption>
      </figure>
    );
  else if (b.tipo === "texto") corpo = <p className="whitespace-pre-line font-leitura text-[1.1rem] leading-[1.75] text-tinta">{b.texto}</p>;
  else if (b.tipo === "leitura") corpo = <Leitura referencia={b.referencia} />;
  else if (b.tipo === "misterio") {
    const ref = MEDITACOES.misterios[b.grupo][b.indice]?.referencia;
    corpo = (
      <div>
        <p className="font-leitura text-xl font-semibold leading-snug text-marca">{tituloDoBloco(b)}</p>
        {ref && <p className="text-sm text-tinta-suave">{formatarReferencia(ref, {})}</p>}
      </div>
    );
  } else if (b.tipo === "oracao") {
    const o = ORACOES[b.oracao];
    corpo = (
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-leitura text-xl font-semibold text-marca">{o?.nome}</p>
          {b.vezes > 1 && <span className={`shrink-0 text-sm font-semibold ${atual ? "text-destaque-texto" : "text-tinta-suave"}`}>{atual && conta ? `${conta} de ${b.vezes}` : `${b.vezes} vezes`}</span>}
        </div>
        {o &&
          (atual || aberta ? (
            <TextoDaOracao linhas={o.pt} lingua="pt" />
          ) : (
            <button type="button" onClick={() => setAberta(true)} className="w-fit text-sm font-medium text-tinta-suave underline underline-offset-4">
              Ver a oração
            </button>
          ))}
      </div>
    );
  }
  return (
    <section id={`bloco-${b.id}`} className={`scroll-mt-32 rounded-2xl border bg-cartao p-4 shadow-sm transition-colors ${atual ? "border-destaque-texto ring-2 ring-destaque-texto/30" : "border-borda"}`}>
      <p className="mb-2 flex flex-wrap items-center gap-x-2 text-xs font-semibold uppercase tracking-wide text-destaque-texto">
        {atual && <Radio className="size-3.5" aria-hidden />}
        {rotuloDoBloco(b)}
        {b.quem && <span className="font-medium normal-case tracking-normal text-tinta-suave">{`· ${b.quem}`}</span>}
      </p>
      {corpo}
    </section>
  );
}

function QrDoRoteiro({ codigo }: { codigo: string }) {
  const link = linkDoRoteiro(codigo);
  const svg = useMemo(() => renderSVG(link, { border: 2 }), [link]);
  const [copiado, setCopiado] = useState(false);
  return (
    <Cartao className="flex flex-col items-center gap-3 p-4">
      <div className="w-full max-w-64 overflow-hidden rounded-xl bg-white" role="img" aria-label="QR code do roteiro" dangerouslySetInnerHTML={{ __html: svg }} />
      <p className="break-all text-center text-sm text-tinta-suave">{link}</p>
      <div className="grid w-full grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() =>
            void navigator.clipboard
              .writeText(link)
              .then(() => {
                setCopiado(true);
                setTimeout(() => setCopiado(false), 2000);
              })
              .catch(() => {})
          }
          className={BOTAO_CLARO}
        >
          <Copy className="size-4" aria-hidden /> {copiado ? "Copiado" : "Copiar link"}
        </button>
        <button type="button" onClick={() => void compartilhar({ titulo: "Roteiro de oração", url: link })} className={BOTAO_CLARO}>
          <Share2 className="size-4" aria-hidden /> Enviar
        </button>
      </div>
    </Cartao>
  );
}

function useAoVivo(roteiro: Roteiro | null): Estado | null {
  const [estado, setEstado] = useState<Estado | null>(null);
  const codigo = roteiro?.codigo;
  useEffect(() => {
    if (!roteiro) return;
    setEstado({ passo: roteiro.passo, conta: roteiro.conta, ao_vivo: roteiro.ao_vivo });
  }, [roteiro]);
  useEffect(() => {
    if (!codigo) return;
    let parar: (() => void) | null = null;
    let ativo = true;
    void ouvirRoteiro(codigo, (e) => ativo && setEstado(e)).then((f) => (ativo ? (parar = f) : f()));
    const reler = () => {
      if (document.visibilityState !== "visible") return;
      void estadoDoRoteiro(codigo)
        .then((e) => ativo && e && setEstado(e))
        .catch(() => {});
    };
    const t = setInterval(reler, 15_000);
    document.addEventListener("visibilitychange", reler);
    return () => {
      ativo = false;
      parar?.();
      clearInterval(t);
      document.removeEventListener("visibilitychange", reler);
    };
  }, [codigo]);
  return estado;
}

export function RoteiroAberto() {
  const { codigo = "" } = useParams();
  const { email } = useConta();
  const [roteiro, setRoteiro] = useState<Roteiro | null | "nada">(null);
  const [conduz, setConduz] = useState(false);
  const [seguir, setSeguir] = useState(true);
  const estado = useAoVivo(roteiro && roteiro !== "nada" ? roteiro : null);

  useEffect(() => {
    let ativo = true;
    roteiroPorCodigo(codigo)
      .then((r) => {
        if (!ativo) return;
        setRoteiro(r ?? "nada");
        if (r && email) void podeConduzir(r.id).then((p) => ativo && setConduz(p));
      })
      .catch(() => ativo && setRoteiro("nada"));
    return () => {
      ativo = false;
    };
  }, [codigo, email]);

  const blocos = roteiro && roteiro !== "nada" ? roteiro.blocos.filter(blocoTemConteudo) : [];
  const aoVivo = !!estado?.ao_vivo;
  const atual = aoVivo && roteiro && roteiro !== "nada" ? roteiro.blocos[estado!.passo] : undefined;

  useEffect(() => {
    if (!atual || !seguir) return;
    const ir = (comportamento: ScrollBehavior) => document.getElementById(`bloco-${atual.id}`)?.scrollIntoView({ behavior: comportamento, block: "start" });
    ir("smooth");
    const t1 = setTimeout(() => ir("auto"), 900);
    const t2 = setTimeout(() => ir("auto"), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [atual?.id, estado?.conta, seguir]);

  if (roteiro === null) return <Carregando />;
  if (roteiro === "nada") return <NaoEncontrada />;

  return (
    <div className="flex flex-col gap-4 pb-8">
      <Voltar para="/roteiros">Roteiros</Voltar>
      <Cabecalho titulo={roteiro.titulo} subtitulo={[roteiro.terco, quandoDoRoteiro(roteiro), roteiro.local].filter(Boolean).join(" · ")} />
      {aoVivo && (
        <div className="sticky top-[calc(max(0.5rem,env(safe-area-inset-top))+2.5rem)] z-[5] flex items-center gap-2 rounded-full bg-destaque px-4 py-2 text-sm font-semibold text-sobre-destaque shadow md:top-3">
          <Radio className="size-4 shrink-0 animate-pulse" aria-hidden />
          <span className="min-w-0 flex-1 truncate">{atual ? tituloDoBloco(atual) || rotuloDoBloco(atual) : "Ao vivo"}</span>
          <button type="button" onClick={() => setSeguir(!seguir)} aria-pressed={seguir} className="shrink-0 rounded-full bg-black/10 px-3 py-1 text-xs">
            {seguir ? "Acompanhando" : "Acompanhar"}
          </button>
        </div>
      )}
      {conduz && (
        <div className="grid grid-cols-2 gap-2">
          <Link to={`/r/${roteiro.codigo}/conduzir`} className={BOTAO}>
            <Radio className="size-4" aria-hidden /> Conduzir
          </Link>
          <Link to={`/roteiros/${roteiro.id}`} className={BOTAO_CLARO}>
            <Pencil className="size-4" aria-hidden /> Editar
          </Link>
        </div>
      )}
      {!blocos.length ? (
        <p className="text-tinta-suave">Roteiro ainda sem conteúdo.</p>
      ) : (
        blocos.map((b) => <BlocoNaTela key={b.id} b={b} atual={aoVivo && atual?.id === b.id} conta={estado?.conta ?? 0} />)
      )}
      <button type="button" onClick={() => void compartilhar({ titulo: roteiro.titulo, url: linkDoRoteiro(roteiro.codigo) })} className={BOTAO_CLARO}>
        <Share2 className="size-4" aria-hidden /> Compartilhar
      </button>
    </div>
  );
}

export function ConduzirRoteiro() {
  const { codigo = "" } = useParams();
  const [roteiro, setRoteiro] = useState<Roteiro | null | "nada">(null);
  const [pode, setPode] = useState<boolean | null>(null);
  const [pos, setPos] = useState<Posicao & { ao_vivo: boolean }>({ passo: 0, conta: 0, ao_vivo: false });
  const [qr, setQr] = useState(false);
  const canal = useRef<{ enviar: (e: Estado) => void; fechar: () => void } | null>(null);

  useEffect(() => {
    let ativo = true;
    roteiroPorCodigo(codigo)
      .then(async (r) => {
        if (!ativo) return;
        setRoteiro(r ?? "nada");
        if (!r) return;
        setPos({ passo: r.passo, conta: r.conta, ao_vivo: r.ao_vivo });
        setPode(await podeConduzir(r.id));
      })
      .catch(() => ativo && setRoteiro("nada"));
    void canalDoRoteiro(codigo).then((c) => (ativo ? (canal.current = c) : c.fechar()));
    return () => {
      ativo = false;
      canal.current?.fechar();
    };
  }, [codigo]);

  const mover = useCallback(
    (novo: Posicao & { ao_vivo: boolean }) => {
      if (!roteiro || roteiro === "nada") return;
      setPos(novo);
      canal.current?.enviar(novo);
      void gravarEstado(roteiro.id, novo).catch(() => {});
    },
    [roteiro],
  );

  if (roteiro === null || (roteiro !== "nada" && pode === null)) return <Carregando />;
  if (roteiro === "nada" || !pode) return <NaoEncontrada />;
  const blocos = roteiro.blocos;
  const atual = blocos[pos.passo];
  const seguinte = (() => {
    const a = avancar(blocos, pos);
    return a.passo !== pos.passo ? blocos[a.passo] : undefined;
  })();

  return (
    <div className="flex flex-col gap-4 pb-40">
      <Voltar para={`/r/${roteiro.codigo}`}>Roteiro</Voltar>
      <Cabecalho titulo={roteiro.titulo} subtitulo={pos.ao_vivo ? "Ao vivo" : "Ainda não começou"} />
      <div className="grid grid-cols-2 gap-2">
        {pos.ao_vivo ? (
          <button type="button" onClick={() => mover({ ...pos, ao_vivo: false })} className={BOTAO_CLARO}>
            Encerrar
          </button>
        ) : (
          <button type="button" onClick={() => mover({ ...(pos.passo || pos.conta ? pos : primeiraPosicao(blocos)), ao_vivo: true })} className={BOTAO}>
            <Radio className="size-4" aria-hidden /> Começar ao vivo
          </button>
        )}
        <button type="button" onClick={() => setQr(!qr)} aria-pressed={qr} className={BOTAO_CLARO}>
          <QrCode className="size-4" aria-hidden /> QR code
        </button>
      </div>
      {qr && <QrDoRoteiro codigo={roteiro.codigo} />}
      {atual ? <BlocoNaTela b={atual} atual conta={pos.conta} /> : <p className="text-tinta-suave">Roteiro ainda sem conteúdo.</p>}
      {seguinte && <p className="px-1 text-sm text-tinta-suave">{`A seguir: ${tituloDoBloco(seguinte) || rotuloDoBloco(seguinte)}`}</p>}
      <div className="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-20 px-3 pb-3 md:bottom-0 md:left-60 md:pb-6">
        <div className="mx-auto grid max-w-xl grid-cols-[auto_1fr] gap-2 rounded-2xl border border-borda bg-cartao p-2 shadow-lg">
          <button type="button" onClick={() => mover({ ...voltar(blocos, pos), ao_vivo: pos.ao_vivo })} aria-label="Voltar" className="grid min-h-16 w-16 place-items-center rounded-xl border border-borda text-tinta">
            <ChevronLeft className="size-7" aria-hidden />
          </button>
          <button
            type="button"
            disabled={ehUltima(blocos, pos)}
            onClick={() => mover({ ...avancar(blocos, pos), ao_vivo: pos.ao_vivo })}
            className="flex min-h-16 items-center justify-center gap-2 rounded-xl bg-destaque text-lg font-semibold text-sobre-destaque disabled:opacity-50"
          >
            {atual?.tipo === "oracao" && atual.vezes > 1 && pos.conta < atual.vezes ? `${pos.conta + 1}ª ${ORACOES[atual.oracao]?.nome ?? ""}` : "Próximo"}
            <ChevronRight className="size-6" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}

function EditorDoBloco({ b, mudar }: { b: Bloco; mudar: (b: Bloco) => void }) {
  const quem = (
    <Campo rotulo="Quem conduz">
      <input value={b.quem ?? ""} onChange={(e) => mudar({ ...b, quem: e.target.value })} maxLength={80} className={CAMPO} />
    </Campo>
  );
  switch (b.tipo) {
    case "canto":
      return (
        <div className="flex flex-col gap-2">
          <Campo rotulo="Nome do canto">
            <input value={b.titulo} onChange={(e) => mudar({ ...b, titulo: e.target.value })} maxLength={120} className={CAMPO} />
          </Campo>
          <Campo rotulo="Artista">
            <input value={b.artista ?? ""} onChange={(e) => mudar({ ...b, artista: e.target.value })} maxLength={80} className={CAMPO} />
          </Campo>
          <Campo rotulo="Link (YouTube, Spotify)">
            <input value={b.link ?? ""} onChange={(e) => mudar({ ...b, link: e.target.value.trim() })} inputMode="url" autoCapitalize="none" maxLength={300} className={CAMPO} />
          </Campo>
          {quem}
        </div>
      );
    case "imagem":
      return (
        <div className="flex flex-col gap-2">
          {b.imagem && <img src={b.imagem} alt="" className="max-h-48 w-full rounded-xl object-contain" />}
          <EscolherPintura semCruz atual={b.imagem ? { id: b.santo, nome: b.nome, imagem: b.imagem } : null} aoEscolher={(s) => s && mudar({ ...b, santo: s.id, nome: s.nome, imagem: caminhoDaImagem(s) ?? "" })} />
        </div>
      );
    case "texto":
      return (
        <div className="flex flex-col gap-2">
          <Campo rotulo="Tipo">
            <select value={b.rotulo} onChange={(e) => mudar({ ...b, rotulo: e.target.value as RotuloDeTexto })} className={CAMPO}>
              {Object.entries(NOME_DO_ROTULO).map(([v, n]) => (
                <option key={v} value={v}>
                  {n}
                </option>
              ))}
            </select>
          </Campo>
          <Campo rotulo="Texto">
            <textarea value={b.texto} onChange={(e) => mudar({ ...b, texto: e.target.value })} rows={5} maxLength={5000} className={`${CAMPO} py-2`} />
          </Campo>
          {quem}
        </div>
      );
    case "leitura": {
      const ok = !b.referencia.trim() || !!lerReferencia(b.referencia);
      return (
        <div className="flex flex-col gap-2">
          <Campo rotulo="Passagem (Lc 1,26-38)">
            <input
              value={b.referencia}
              onChange={(e) => mudar({ ...b, referencia: e.target.value })}
              onBlur={() => {
                const p = lerReferencia(b.referencia);
                if (p) mudar({ ...b, referencia: escreverReferencia(p) });
              }}
              maxLength={40}
              className={CAMPO}
            />
          </Campo>
          {!ok && <p className="text-sm text-[#a9271f]">Passagem não encontrada.</p>}
          {quem}
        </div>
      );
    }
    case "misterio":
      return (
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Campo rotulo="Mistérios">
              <select value={b.grupo} onChange={(e) => mudar({ ...b, grupo: e.target.value as GrupoDeMisterios })} className={CAMPO}>
                {GRUPOS.map((g) => (
                  <option key={g} value={g}>
                    {MISTERIOS[g].nome}
                  </option>
                ))}
              </select>
            </Campo>
            <Campo rotulo="Mistério">
              <select value={b.indice} onChange={(e) => mudar({ ...b, indice: Number(e.target.value) })} className={CAMPO}>
                {MISTERIOS[b.grupo].misterios.map((m, i) => (
                  <option key={m} value={i}>{`${i + 1}º ${m}`}</option>
                ))}
              </select>
            </Campo>
          </div>
          {quem}
        </div>
      );
    case "oracao":
      return (
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-[1fr_6rem] gap-2">
            <Campo rotulo="Oração">
              <select value={b.oracao} onChange={(e) => mudar({ ...b, oracao: e.target.value })} className={CAMPO}>
                {ORACOES_EM_ORDEM.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.nome}
                  </option>
                ))}
              </select>
            </Campo>
            <Campo rotulo="Vezes">
              <input value={b.vezes} onChange={(e) => mudar({ ...b, vezes: Math.min(50, Math.max(1, Number(e.target.value.replace(/\D/g, "")) || 1)) })} inputMode="numeric" className={CAMPO} />
            </Campo>
          </div>
          {quem}
        </div>
      );
  }
}

function EscolherTipo({ aoEscolher, aoFechar }: { aoEscolher: (t: TipoDeBloco) => void; aoFechar: () => void }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-dashed border-destaque-texto/50 p-3">
      <div className="grid grid-cols-2 gap-2">
        {(Object.keys(NOME_DO_TIPO) as TipoDeBloco[]).map((t) => (
          <button key={t} type="button" onClick={() => aoEscolher(t)} className="min-h-11 rounded-xl border border-borda bg-cartao px-2 text-sm font-medium text-tinta">
            {NOME_DO_TIPO[t]}
          </button>
        ))}
      </div>
      <button type="button" onClick={aoFechar} className="min-h-10 text-sm font-medium text-tinta-suave">
        Cancelar
      </button>
    </div>
  );
}

export function EditarRoteiro() {
  const { id = "" } = useParams();
  const navegar = useNavigate();
  const [r, setR] = useState<Roteiro | null | "nada">(null);
  const [estado, setEstado] = useState<"" | "salvando" | "salvo" | "erro">("");
  const [aberto, setAberto] = useState<string | null>(null);
  const [inserir, setInserir] = useState<number | null>(null);
  const versao = useRef(0);

  useEffect(() => {
    carregarRoteiro(id)
      .then((x) => setR(x ?? "nada"))
      .catch(() => setR("nada"));
  }, [id]);

  const atualizar = (mudanca: Partial<Roteiro>) => {
    if (!r || r === "nada") return;
    const novo = { ...r, ...mudanca };
    setR(novo);
    setEstado("salvando");
    const minha = ++versao.current;
    setTimeout(() => {
      if (minha !== versao.current) return;
      const titulo = novo.titulo.trim().length >= 3 ? novo.titulo.trim() : r.titulo;
      salvarRoteiro(novo.id, { titulo, data: novo.data || null, hora: novo.hora || null, local: novo.local, blocos: novo.blocos })
        .then(() => minha === versao.current && setEstado("salvo"))
        .catch(() => setEstado("erro"));
    }, 1200);
  };

  if (r === null) return <Carregando />;
  if (r === "nada") return <NaoEncontrada />;

  const mudarBloco = (i: number, b: Bloco) => atualizar({ blocos: r.blocos.map((x, j) => (j === i ? b : x)) });
  const mover = (i: number, d: -1 | 1) => {
    const lista = [...r.blocos];
    const [b] = lista.splice(i, 1);
    lista.splice(i + d, 0, b!);
    atualizar({ blocos: lista });
  };
  const adicionar = (pos: number, t: TipoDeBloco) => {
    const b = blocoVazio(t);
    const lista = [...r.blocos];
    lista.splice(pos, 0, b);
    atualizar({ blocos: lista });
    setInserir(null);
    setAberto(b.id);
  };

  return (
    <div className="flex flex-col gap-4 pb-8">
      <Voltar para="/roteiros">Roteiros</Voltar>
      <Cabecalho titulo="Editar roteiro" subtitulo={estado === "salvando" ? "Salvando" : estado === "salvo" ? "Salvo" : estado === "erro" ? "Não foi possível salvar. Confira a internet." : undefined} />
      <Cartao className="flex flex-col gap-3 p-4">
        <Campo rotulo="Título">
          <input value={r.titulo} onChange={(e) => atualizar({ titulo: e.target.value })} maxLength={120} className={CAMPO} />
        </Campo>
        <div className="grid grid-cols-2 gap-2">
          <Campo rotulo="Dia">
            <input type="date" value={r.data ?? ""} onChange={(e) => atualizar({ data: e.target.value || null })} className={`${CAMPO} min-w-0`} />
          </Campo>
          <Campo rotulo="Hora">
            <input type="time" value={r.hora?.slice(0, 5) ?? ""} onChange={(e) => atualizar({ hora: e.target.value || null })} className={`${CAMPO} min-w-0`} />
          </Campo>
        </div>
        <Campo rotulo="Local">
          <input value={r.local} onChange={(e) => atualizar({ local: e.target.value })} maxLength={160} className={CAMPO} />
        </Campo>
      </Cartao>

      <div className="grid grid-cols-2 gap-2">
        <Link to={`/r/${r.codigo}`} className={BOTAO_CLARO}>
          <ExternalLink className="size-4" aria-hidden /> Ver
        </Link>
        <Link to={`/r/${r.codigo}/conduzir`} className={BOTAO}>
          <Radio className="size-4" aria-hidden /> Conduzir
        </Link>
      </div>

      <h2 className={TITULO}>{`Blocos (${r.blocos.length})`}</h2>
      {inserir === 0 ? (
        <EscolherTipo aoEscolher={(t) => adicionar(0, t)} aoFechar={() => setInserir(null)} />
      ) : (
        r.blocos.length > 0 && (
          <button type="button" onClick={() => setInserir(0)} className="flex min-h-10 items-center justify-center gap-1.5 text-sm font-medium text-tinta-suave">
            <Plus className="size-4" aria-hidden /> Bloco no início
          </button>
        )
      )}
      <ol className="flex flex-col gap-2">
        {r.blocos.map((b, i) => {
          const expandido = aberto === b.id;
          return (
            <li key={b.id} className="flex flex-col gap-2">
              <div className={`rounded-2xl border bg-cartao ${expandido ? "border-destaque-texto/50" : "border-borda"} ${blocoTemConteudo(b) ? "" : "border-dashed"}`}>
                <div className="flex items-center gap-1 py-1 pl-3 pr-1">
                  <button type="button" onClick={() => setAberto(expandido ? null : b.id)} className="flex min-h-12 min-w-0 flex-1 flex-col justify-center text-left">
                    <span className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">{rotuloDoBloco(b)}</span>
                    <span className="truncate text-tinta">{(b.tipo === "texto" ? b.texto.split("\n")[0] : tituloDoBloco(b)) || "Vazio"}</span>
                  </button>
                  <button type="button" disabled={i === 0} onClick={() => mover(i, -1)} aria-label="Subir" className={ICONE}>
                    <ArrowUp className="size-4" aria-hidden />
                  </button>
                  <button type="button" disabled={i === r.blocos.length - 1} onClick={() => mover(i, 1)} aria-label="Descer" className={ICONE}>
                    <ArrowDown className="size-4" aria-hidden />
                  </button>
                </div>
                {expandido && (
                  <div className="flex flex-col gap-3 border-t border-borda p-3">
                    <EditorDoBloco b={b} mudar={(x) => mudarBloco(i, x)} />
                    <div className="grid grid-cols-2 gap-2">
                      <button type="button" onClick={() => setInserir(i + 1)} className={BOTAO_CLARO}>
                        <Plus className="size-4" aria-hidden /> Inserir
                      </button>
                      <button type="button" onClick={() => atualizar({ blocos: r.blocos.filter((_, j) => j !== i) })} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda font-semibold text-[#a9271f]">
                        <Trash2 className="size-4" aria-hidden /> Tirar
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {inserir === i + 1 && i + 1 < r.blocos.length && <EscolherTipo aoEscolher={(t) => adicionar(i + 1, t)} aoFechar={() => setInserir(null)} />}
            </li>
          );
        })}
      </ol>
      {inserir === r.blocos.length && r.blocos.length > 0 ? (
        <EscolherTipo aoEscolher={(t) => adicionar(r.blocos.length, t)} aoFechar={() => setInserir(null)} />
      ) : inserir === null || inserir !== r.blocos.length ? (
        r.blocos.length === 0 ? (
          <EscolherTipo aoEscolher={(t) => adicionar(0, t)} aoFechar={() => {}} />
        ) : (
          <button type="button" onClick={() => setInserir(r.blocos.length)} className={BOTAO_CLARO}>
            <Plus className="size-4" aria-hidden /> Adicionar bloco
          </button>
        )
      ) : null}
      <button
        type="button"
        onClick={() => {
          if (confirm("Apagar este roteiro?")) void apagarRoteiro(r.id).then(() => navegar("/roteiros", { replace: true }));
        }}
        className="mt-4 min-h-11 text-sm font-medium text-[#a9271f]"
      >
        Apagar roteiro
      </button>
    </div>
  );
}

function NovoRoteiro({ terco, nomeDoTerco }: { terco: string | null; nomeDoTerco: string }) {
  const navegar = useNavigate();
  const [modelo, setModelo] = useState<Modelo>("terco-cantado");
  const [grupo, setGrupo] = useState<GrupoDeMisterios>(() => misteriosDoDia(hoje()).grupo);
  const [titulo, setTitulo] = useState(nomeDoTerco || "Terço");
  const [estado, setEstado] = useState<"" | "criando" | "erro">("");
  const comMisterios = modelo === "terco" || modelo === "terco-cantado";

  async function criar(e: FormEvent) {
    e.preventDefault();
    setEstado("criando");
    try {
      const id = await criarRoteiro({ titulo: titulo.trim(), terco_id: terco, data: null, hora: null, local: "", blocos: blocosDoModelo(modelo, grupo) });
      navegar(`/roteiros/${id}`);
    } catch {
      setEstado("erro");
    }
  }

  return (
    <Cartao className="p-4">
      <form onSubmit={criar} className="flex flex-col gap-3">
        <Campo rotulo="Modelo">
          <select value={modelo} onChange={(e) => setModelo(e.target.value as Modelo)} className={CAMPO}>
            {Object.entries(NOME_DO_MODELO).map(([v, n]) => (
              <option key={v} value={v}>
                {n}
              </option>
            ))}
          </select>
        </Campo>
        {comMisterios && (
          <Campo rotulo="Mistérios">
            <select value={grupo} onChange={(e) => setGrupo(e.target.value as GrupoDeMisterios)} className={CAMPO}>
              {GRUPOS.map((g) => (
                <option key={g} value={g}>
                  {MISTERIOS[g].nome}
                </option>
              ))}
            </select>
          </Campo>
        )}
        <Campo rotulo="Título">
          <input value={titulo} onChange={(e) => setTitulo(e.target.value)} maxLength={120} className={CAMPO} />
        </Campo>
        {estado === "erro" && <p className="text-sm text-[#a9271f]">Não foi possível criar agora. Tente de novo.</p>}
        <button type="submit" disabled={titulo.trim().length < 3 || estado === "criando"} className={BOTAO}>
          {estado === "criando" ? "Criando" : "Criar roteiro"}
        </button>
      </form>
    </Cartao>
  );
}

function MinhasMusicas() {
  const musicas = useMusicas();
  if (!musicas.length) return null;
  return (
    <section className="flex flex-col gap-2">
      <h2 className={TITULO}>Músicas guardadas</h2>
      <ul className="flex flex-col divide-y divide-borda overflow-hidden rounded-2xl border border-borda bg-cartao">
        {musicas.map((m) => (
          <li key={`${m.titulo}|${m.artista ?? ""}`} className="flex items-center gap-2 px-4 py-2">
            <a href={m.link || buscaDaMusica(m)} target="_blank" rel="noreferrer" className="flex min-h-11 min-w-0 flex-1 flex-col justify-center">
              <span className="truncate text-tinta">{m.titulo}</span>
              {m.artista && <span className="truncate text-sm text-tinta-suave">{m.artista}</span>}
            </a>
            <button type="button" onClick={() => alternarMusica(m)} aria-label={`Tirar ${m.titulo}`} className={ICONE}>
              <Trash2 className="size-4" aria-hidden />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Roteiros() {
  const { email, pronto } = useConta();
  const navegar = useNavigate();
  const [params] = useSearchParams();
  const terco = params.get("terco");
  const [lista, setLista] = useState<Roteiro[] | null>(null);
  const [novo, setNovo] = useState(!!terco);
  const [codigo, setCodigo] = useState("");

  useEffect(() => {
    if (!email) return;
    meusRoteiros()
      .then(setLista)
      .catch(() => setLista([]));
  }, [email]);

  return (
    <div className="flex flex-col gap-4">
      <Voltar para="/mais">Mais</Voltar>
      <Cabecalho titulo="Roteiros de oração" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const c = codigo.trim().toLowerCase().replace(/.*\/r\//, "").replace(/[^a-z0-9]/g, "");
          if (c) navegar(`/r/${c}`);
        }}
        className="flex gap-2"
      >
        <input value={codigo} onChange={(e) => setCodigo(e.target.value)} placeholder="Código ou link do roteiro" aria-label="Código ou link do roteiro" autoCapitalize="none" className={CAMPO} />
        <button type="submit" disabled={!codigo.trim()} className={`${BOTAO} shrink-0`}>
          Abrir
        </button>
      </form>
      {!pronto ? (
        <Carregando />
      ) : !email ? (
        <Link to="/conta" className={BOTAO_CLARO}>
          Entrar para montar roteiros
        </Link>
      ) : (
        <>
          {novo ? (
            <NovoRoteiro terco={terco} nomeDoTerco={params.get("nome") ?? ""} />
          ) : (
            <button type="button" onClick={() => setNovo(true)} className={BOTAO}>
              <Plus className="size-5" aria-hidden /> Novo roteiro
            </button>
          )}
          {lista === null ? (
            <Carregando />
          ) : (
            lista.length > 0 && (
              <section className="flex flex-col gap-2">
                <h2 className={TITULO}>Meus roteiros</h2>
                <ul className="flex flex-col divide-y divide-borda overflow-hidden rounded-2xl border border-borda bg-cartao">
                  {lista.map((r) => (
                    <li key={r.id} className="flex items-center gap-1 pr-1">
                      <Link to={`/r/${r.codigo}`} className="flex min-h-16 min-w-0 flex-1 flex-col justify-center px-4 py-2">
                        <span className="flex items-center gap-2 font-leitura text-[1.05rem] font-medium text-marca">
                          {r.ao_vivo && <Radio className="size-4 shrink-0 text-destaque-texto" aria-label="Ao vivo" />}
                          <span className="truncate">{r.titulo}</span>
                        </span>
                        <span className="text-sm text-tinta-suave">{[quandoDoRoteiro(r), `${r.blocos.filter(blocoTemConteudo).length} blocos`].filter(Boolean).join(" · ")}</span>
                      </Link>
                      <Link to={`/roteiros/${r.id}`} aria-label={`Editar ${r.titulo}`} className={ICONE}>
                        <Pencil className="size-4" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )
          )}
        </>
      )}
      <MinhasMusicas />
    </div>
  );
}
