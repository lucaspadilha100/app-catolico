import { useEffect, useState } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { BookOpen, CalendarDays, ChevronDown, ChevronRight, Cross, FileText, Flame, Hammer, HandHeart, Heart, HeartHandshake, Languages, Moon, Music, ScrollText, Search, Sparkles, Sun, Users, Crown, type LucideIcon } from "lucide-react";
import { CATEGORIAS, nomeParaOrdenar, oracoesDaCategoria, todasDoDevocionario, acharOracao, type CategoriaDoDevocionario, type OracaoCompleta } from "@/oracao/devocionario";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import {
  ORACOES,
  buscarOracoes,
  ehTempoPascal,
  oracoesDoTempo,
  type Oracao,
} from "@/oracao/oracoes";
import { CHAVE_LINGUA, useGuardado, type Lingua } from "@/oracao/guardado";
import { Cartao, LINHA, LISTA, TituloPagina } from "@/components/Cartao";
import { EscolhaDeLingua, TextoDaOracao, linhasNaLingua } from "@/components/TextoDaOracao";
import { Voltar } from "@/components/Voltar";
import { caminhoDeDevocao, useImagensDeDevocao } from "@/lib/imagens";
import { ImagemComCredito } from "@/components/ImagemComCredito";
import { NaoEncontrada } from "@/pages/Simples";

function ItemDeOracao({ o, recuo = false }: { o: Oracao; recuo?: boolean }) {
  const img = useImagensDeDevocao()[`oracao:${o.id}`];
  return (
    <Link
      to={`/rezar/oracoes/${o.id}`}
      className={`${LINHA} ${recuo ? "pl-12" : ""}`}
    >
      {img && <img src={caminhoDeDevocao(img)} alt="" loading="lazy" className="size-14 shrink-0 rounded-2xl bg-marca-fundo object-cover" style={{ objectPosition: img.foco ?? "50% 30%" }} />}
      <span className="min-w-0 flex-1">
        <span className="block text-[1.0625rem] font-semibold text-tinta">{o.nome}</span>
        {o.latim && <span className="block text-sm italic text-tinta-suave">{o.latim}</span>}
      </span>
      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
    </Link>
  );
}

const ICONE: Record<string, LucideIcon> = {
  primarias: Cross,
  manha: Sun,
  noite: Moon,
  senhor: Heart,
  "espirito-santo": Flame,
  eucaristia: Sparkles,
  "nossa-senhora": Crown,
  "sao-jose": Hammer,
  santos: Users,
  diversas: HandHeart,
  hinos: Music,
  ladainhas: ScrollText,
  latim: Languages,
  verdades: BookOpen,
};

function CategoriaAberta({ c }: { c: CategoriaDoDevocionario }) {
  const [lista, setLista] = useState<OracaoCompleta[] | null>(null);
  useEffect(() => {
    let ativo = true;
    void oracoesDaCategoria(c).then((l) => ativo && setLista(l));
    return () => {
      ativo = false;
    };
  }, [c]);
  if (!lista) return <div className="mx-4 mb-3 h-20 animate-pulse rounded-2xl bg-marca-fundo" />;
  return (
    <div className="flex flex-col divide-y divide-borda border-t border-borda">
      {lista.map((o) => (
        <ItemDeOracao key={o.id} o={o} recuo />
      ))}
    </div>
  );
}

export function Oracoes() {
  const { tempo } = useDiaLiturgico();
  const [params, setParams] = useSearchParams();
  const termo = params.get("q") ?? "";
  const aberta = params.get("aberta") ?? "";
  const mudar = (q: string, a: string) => {
    const n = new URLSearchParams();
    if (q) n.set("q", q);
    if (a) n.set("aberta", a);
    setParams(n, { replace: true });
  };
  const [extras, setExtras] = useState<OracaoCompleta[]>([]);
  useEffect(() => {
    if (!termo.trim() || extras.length) return;
    void todasDoDevocionario().then(setExtras);
  }, [termo, extras.length]);
  const todas = [...oracoesDoTempo(tempo), ...extras.filter((x) => !ORACOES[x.id])];
  const achadas = buscarOracoes(todas, termo);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Voltar para="/rezar">Rezar</Voltar>
        <TituloPagina>Orações</TituloPagina>
      </div>

      <label className="flex min-h-12 items-center gap-2 rounded-2xl bg-cartao px-4">
        <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        <input
          value={termo}
          onChange={(e) => mudar(e.target.value, aberta)}
          placeholder="Buscar oração"
          aria-label="Buscar oração"
          className="min-w-0 flex-1 bg-transparent py-2 outline-none placeholder:text-tinta-suave/70"
          type="search"
          enterKeyHint="search"
          autoComplete="off"
        />
      </label>

      {termo.trim() ? (
        achadas.length ? (
          <div className={LISTA}>
            {achadas.slice(0, 60).map((o) => (
              <ItemDeOracao key={o.id} o={o} />
            ))}
          </div>
        ) : (
          <p className="py-8 text-center text-tinta-suave">Nenhuma oração encontrada.</p>
        )
      ) : (
        <>
          <section>
            <h2 className="titulo-secao mb-3 px-1">Sacramentos</h2>
            <div className={LISTA}>
              <Link to="/rezar/exame" className={LINHA}>
                <FileText className="size-5 shrink-0 text-destaque-texto" aria-hidden />
                <span className="min-w-0 flex-1 font-semibold text-tinta">Exame de consciência</span>
                <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
              </Link>
              <Link to="/rezar/confissao" className={LINHA}>
                <HeartHandshake className="size-5 shrink-0 text-destaque-texto" aria-hidden />
                <span className="min-w-0 flex-1 font-semibold text-tinta">Como se confessar</span>
                <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
              </Link>
            </div>
          </section>
          <section>
            <h2 className="titulo-secao mb-3 px-1">Devocionário</h2>
            <div className={LISTA}>
              {CATEGORIAS.map((c) => {
                const Icone = ICONE[c.id] ?? HandHeart;
                const estaAberta = aberta === c.id;
                const cabeca = (
                  <>
                    <Icone className="size-5 shrink-0 text-destaque-texto" aria-hidden />
                    <span className="min-w-0 flex-1 text-left font-semibold text-tinta">{c.nome}</span>
                    {c.grande ? (
                      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
                    ) : (
                      <ChevronDown className={`size-5 shrink-0 text-tinta-suave transition-transform ${estaAberta ? "rotate-180" : ""}`} aria-hidden />
                    )}
                  </>
                );
                return c.grande ? (
                  <Link key={c.id} to={`/rezar/oracoes/categoria/${c.id}`} className={LINHA}>
                    {cabeca}
                  </Link>
                ) : (
                  <div key={c.id}>
                    <button type="button" aria-expanded={estaAberta} onClick={() => mudar("", estaAberta ? "" : c.id)} className={`${LINHA} w-full`}>
                      {cabeca}
                    </button>
                    {estaAberta && <CategoriaAberta c={c} />}
                  </div>
                );
              })}
              <Link to="/rezar/novenas" className={LINHA}>
                <CalendarDays className="size-5 shrink-0 text-destaque-texto" aria-hidden />
                <span className="min-w-0 flex-1 font-semibold text-tinta">Novenas</span>
                <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export function CategoriaDeOracoes() {
  const { id = "" } = useParams();
  const c = CATEGORIAS.find((x) => x.id === id);
  const [lista, setLista] = useState<OracaoCompleta[] | null>(null);
  const [params, setParams] = useSearchParams();
  const termo = params.get("q") ?? "";
  useEffect(() => {
    if (!c) return;
    let ativo = true;
    void oracoesDaCategoria(c).then((l) => ativo && setLista(l));
    return () => {
      ativo = false;
    };
  }, [c]);
  if (!c) return <NaoEncontrada />;
  const achadas = lista ? buscarOracoes(lista, termo) : [];
  const letras = new Map<string, OracaoCompleta[]>();
  for (const o of achadas) {
    const l = (nomeParaOrdenar(o)[0] ?? "#").toUpperCase();
    letras.set(l, [...(letras.get(l) ?? []), o]);
  }
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Voltar para="/rezar/oracoes">Orações</Voltar>
        <TituloPagina>{c.nome}</TituloPagina>
      </div>
      <label className="flex min-h-12 items-center gap-2 rounded-2xl bg-cartao px-4">
        <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        <input
          value={termo}
          onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {}, { replace: true })}
          placeholder="Buscar"
          aria-label="Buscar"
          className="min-w-0 flex-1 bg-transparent py-2 outline-none placeholder:text-tinta-suave/70"
          type="search"
          autoComplete="off"
        />
      </label>
      {!lista ? (
        <div className="h-40 animate-pulse rounded-3xl bg-cartao" />
      ) : (
        [...letras.entries()].map(([l, os]) => (
          <section key={l}>
            <h2 className="mb-2 px-1 text-sm font-bold text-tinta-suave">{l}</h2>
            <div className={LISTA}>
              {os.map((o) => (
                <ItemDeOracao key={o.id} o={o} />
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}

export function Ladainhas() {
  return <Navigate to="/rezar/oracoes/categoria/ladainhas" replace />;
}

export function OracaoPagina() {
  const { id = "" } = useParams();
  const { tempo } = useDiaLiturgico();
  const [lingua, setLingua] = useGuardado<Lingua>(CHAVE_LINGUA, "pt");
  const [achada, setAchada] = useState<OracaoCompleta | null | undefined>(ORACOES[id] ?? undefined);
  useEffect(() => {
    if (ORACOES[id]) return setAchada(ORACOES[id]);
    let ativo = true;
    setAchada(undefined);
    void acharOracao(id).then((x) => ativo && setAchada(x));
    return () => {
      ativo = false;
    };
  }, [id]);
  const o = achada;

  if (o === undefined) return <div className="h-60 animate-pulse rounded-3xl bg-cartao" />;
  if (!o) return <NaoEncontrada />;
  if (o.id === "angelus" && ehTempoPascal(tempo)) return <Navigate to="/rezar/oracoes/regina-caeli" replace />;

  const voltar = o.santo
    ? { para: `/santos/${o.santo}`, nome: "Santo" }
    : o.grupo === "ladainhas"
      ? { para: "/rezar/oracoes/categoria/ladainhas", nome: "Ladainhas" }
      : { para: "/rezar/oracoes", nome: "Orações" };

  return (
    <div className="flex flex-col gap-4">
      <Voltar para={voltar.para}>{voltar.nome}</Voltar>
      <ImagemComCredito chave={`oracao:${o.id}`} alt={o.nome} />

      <header>
        <h1 className="text-3xl font-extrabold leading-tight text-marca tracking-[-0.02em]">{o.nome}</h1>
        {o.latim && <p className="mt-1 font-leitura italic text-tinta-suave">{o.latim}</p>}
      </header>

      {o.la && (
        <div>
          <EscolhaDeLingua valor={lingua} onChange={setLingua} />
        </div>
      )}

      <Cartao>
        <div lang={lingua === "la" && o.la ? "la" : "pt-BR"}>
          <TextoDaOracao linhas={linhasNaLingua(o, lingua)} lingua={lingua} />
        </div>
      </Cartao>
      {o.origem && <p className="px-1 text-sm text-tinta-suave">{o.origem}</p>}
    </div>
  );
}
