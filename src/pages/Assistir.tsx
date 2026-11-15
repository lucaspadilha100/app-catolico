import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BookOpen, BookOpenText, ChevronDown, ExternalLink, Eye, EyeOff } from "lucide-react";
import { Cabecalho, Indisponivel, Voltar } from "@/components/Devocao";
import { NotaDaTraducao, TextoDaLeitura } from "@/components/TextoBiblico";
import { useConta } from "@/conta/useConta";
import { souAdmin } from "@/paroquias/api";
import { dataPorExtenso, paraIso } from "@/liturgia/datas";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { useLeituras } from "@/lib/useLeituras";
import { LIVROS } from "@/biblia/livros";
import { NOME_DO_TIPO, capaDoVideo, enderecoDoPlayer, enderecoNoYoutube, esconderVideo, tituloLimpo, useTransmissoes, videoDaTransmissao, videosDoDia, videosDoDiaParaOAdmin, type TipoDeVideo, type Video } from "@/videos/api";
import { CarrosselAoVivo } from "@/components/VideosDeHoje";

const ORDEM: TipoDeVideo[] = ["homilia", "missa", "terco"];
const NOME_DO_FILTRO: Record<TipoDeVideo, string> = { homilia: "Homilia", missa: "Missa", terco: "Terço" };
const PILULA = "flex min-h-11 items-center gap-2 rounded-full bg-cartao px-4 text-[0.9375rem] font-semibold text-tinta";
const SO_ICONE = "grid size-11 shrink-0 place-items-center rounded-full text-tinta-suave hover:bg-cartao";

interface Evangelho {
  referencia: string;
  canonica: string;
}

function passagem(referencia: string): { sigla: string; capitulo: string } | null {
  const m = /^([1-3]?[A-Za-zÀ-ÿ]+) (\d+)/.exec(referencia.trim());
  return m ? { sigla: m[1]!, capitulo: m[2]! } : null;
}

function capituloDaBiblia(referencia: string): string | null {
  const p = passagem(referencia);
  const livro = p ? LIVROS.find((l) => l.abreviatura === p.sigla) : undefined;
  return livro && p ? `/biblia/${livro.slug}/${p.capitulo}` : null;
}

function mesmaPassagem(a: string, b: string): boolean {
  const x = passagem(a);
  const y = passagem(b);
  return !!x && !!y && x.sigla === y.sigla && x.capitulo === y.capitulo;
}

function useAdmin(): boolean {
  const { email, pronto } = useConta();
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (!pronto || !email) return;
    let ativo = true;
    souAdmin()
      .then((a) => ativo && setAdmin(a))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [email, pronto]);
  return admin;
}

function Chips({ opcoes, valor, onChange }: { opcoes: [string, string][]; valor: string; onChange: (v: string) => void }) {
  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0" role="group">
      {opcoes.map(([v, nome]) => (
        <button
          key={v}
          type="button"
          aria-pressed={v === valor}
          onClick={() => onChange(v)}
          className={`min-h-10 shrink-0 rounded-full border px-4 text-sm font-medium whitespace-nowrap ${v === valor ? "border-transparent bg-primario text-sobre-primario" : "border-borda bg-cartao text-tinta"}`}
        >
          {nome}
        </button>
      ))}
    </div>
  );
}

function BotaoEsconder({ video, onMudou }: { video: Video; onMudou: () => void }) {
  const [mudando, setMudando] = useState(false);
  return (
    <button
      type="button"
      disabled={mudando}
      aria-label={video.escondido ? "Mostrar vídeo" : "Esconder vídeo"}
      onClick={() => {
        setMudando(true);
        esconderVideo(video.id, !video.escondido)
          .then(onMudou)
          .catch(() => {})
          .finally(() => setMudando(false));
      }}
      className={SO_ICONE}
    >
      {video.escondido ? <Eye className="size-5" aria-hidden /> : <EyeOff className="size-5" aria-hidden />}
    </button>
  );
}

function Player({ video, tocar, evangelho, admin, onMudou }: { video: Video; tocar: boolean; evangelho: Evangelho | null; admin: boolean; onMudou: () => void }) {
  const [lendo, setLendo] = useState(false);
  useEffect(() => setLendo(false), [video.id]);
  const outraPassagem = video.referencia && !(evangelho && mesmaPassagem(video.referencia, evangelho.referencia)) ? capituloDaBiblia(video.referencia) : null;
  return (
    <section className="flex flex-col gap-3">
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
        <iframe
          key={video.id}
          src={enderecoDoPlayer(video.id, tocar)}
          title={video.aoVivo ? video.titulo || video.canal : tituloLimpo(video.titulo, video.canal)}
          className="size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="flex items-start gap-1 pl-1">
        <div className="min-w-0 flex-1 pt-0.5">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-destaque-texto">
            {video.aoVivo && <span className="size-2 shrink-0 rounded-full bg-[#d4202c]" aria-hidden />}
            {video.aoVivo && !video.titulo ? "Ao vivo" : `${video.canal} · ${video.aoVivo ? "Ao vivo" : NOME_DO_TIPO[video.tipo]}`}
          </p>
          <h2 className="mt-0.5 text-lg font-bold leading-snug text-tinta">{video.aoVivo ? video.titulo || video.canal : tituloLimpo(video.titulo, video.canal)}</h2>
        </div>
        {admin && !video.aoVivo && <BotaoEsconder video={video} onMudou={onMudou} />}
        <a href={enderecoNoYoutube(video.id)} target="_blank" rel="noreferrer" aria-label="Abrir no YouTube" className={SO_ICONE}>
          <ExternalLink className="size-5" aria-hidden />
        </a>
      </div>
      {(evangelho || outraPassagem) && (
        <div className="flex flex-wrap gap-2">
          {evangelho && (
            <button type="button" onClick={() => setLendo((x) => !x)} aria-expanded={lendo} className={PILULA}>
              <BookOpenText className="size-5" aria-hidden />
              Ler o Evangelho
              <ChevronDown className={`size-4 transition-transform ${lendo ? "rotate-180" : ""}`} aria-hidden />
            </button>
          )}
          {outraPassagem && (
            <Link to={outraPassagem} className={PILULA}>
              <BookOpen className="size-5" aria-hidden />
              {video.referencia}
            </Link>
          )}
        </div>
      )}
      {lendo && evangelho && (
        <article className="rounded-2xl bg-cartao px-4 py-4">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-destaque-texto">Evangelho</p>
          <p className="mt-1 font-leitura text-[1.35rem] font-semibold italic text-tinta">{evangelho.referencia}</p>
          <TextoDaLeitura canonica={evangelho.canonica} poema={false} />
          <NotaDaTraducao className="mt-4" />
        </article>
      )}
    </section>
  );
}

function Linha({ video, filtro, admin, onMudou }: { video: Video; filtro: string; admin: boolean; onMudou: () => void }) {
  const conteudo = (
    <>
      <span className="block aspect-video w-28 shrink-0 overflow-hidden rounded-xl bg-cartao">
        <img src={capaDoVideo(video.id)} alt="" loading="lazy" className="size-full object-cover" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-destaque-texto">
          {video.canal} · {NOME_DO_TIPO[video.tipo]}
        </span>
        <span className="line-clamp-2 block font-semibold leading-snug text-tinta">{tituloLimpo(video.titulo, video.canal)}</span>
      </span>
    </>
  );
  const classe = "flex min-h-16 min-w-0 flex-1 items-center gap-3 rounded-2xl py-1.5 transition-colors hover:bg-cartao/70";
  const destino = new URLSearchParams({ v: video.id, ...(filtro ? { tipo: filtro } : {}) });
  return (
    <li className={`flex items-center gap-1 ${video.escondido ? "opacity-50" : ""}`}>
      {video.embutivel ? (
        <Link to={`?${destino}`} replace className={classe}>
          {conteudo}
        </Link>
      ) : (
        <a href={enderecoNoYoutube(video.id)} target="_blank" rel="noreferrer" className={classe}>
          {conteudo}
        </a>
      )}
      {admin && <BotaoEsconder video={video} onMudou={onMudou} />}
    </li>
  );
}

export default function Assistir() {
  const [params, setParams] = useSearchParams();
  const escolhido = params.get("v");
  const pedido = params.get("tipo") ?? "";
  const l = useDiaLiturgico();
  const dia = paraIso(l.data);
  const missas = useLeituras(l);
  const leitura = missas?.[0]?.leituras.find((x) => x.tipo === "evangelho" && !x.ou && x.forma !== "breve");
  const evangelho = leitura?.canonica ? { referencia: leitura.referencia, canonica: leitura.canonica } : null;
  const admin = useAdmin();
  const aoVivo = useTransmissoes();
  const [videos, setVideos] = useState<Video[] | null | "erro">(null);
  const [versao, setVersao] = useState(0);
  const topo = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ativo = true;
    (admin ? videosDoDiaParaOAdmin(dia) : videosDoDia(dia))
      .then((v) => ativo && setVideos(v))
      .catch(() => ativo && setVideos("erro"));
    return () => {
      ativo = false;
    };
  }, [dia, versao, admin]);

  useEffect(() => {
    if (escolhido) topo.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [escolhido]);

  const lista = Array.isArray(videos) ? videos.slice().sort((a, b) => ORDEM.indexOf(a.tipo) - ORDEM.indexOf(b.tipo)) : [];
  const tipos = ORDEM.filter((t) => lista.some((v) => v.tipo === t));
  const filtro = tipos.includes(pedido as TipoDeVideo) ? pedido : "";
  const doFiltro = filtro ? lista.filter((v) => v.tipo === filtro) : lista;
  const transmissao = escolhido ? aoVivo.find((t) => t.video_id === escolhido) : undefined;
  const atual = (transmissao ? videoDaTransmissao(transmissao, dia) : null) ?? lista.find((v) => v.id === escolhido && v.embutivel) ?? doFiltro.find((v) => v.embutivel && !v.escondido) ?? null;
  const outros = doFiltro.filter((v) => v.id !== atual?.id);
  const recarregar = () => setVersao((x) => x + 1);

  return (
    <div ref={topo} className="flex scroll-mt-4 flex-col gap-5">
      <Voltar para="/mais">Mais</Voltar>
      <Cabecalho titulo="Assistir" subtitulo={dataPorExtenso(l.data)} />
      {aoVivo.length > 0 && (
        <section>
          <h2 className="titulo-secao mb-2 px-1">Ao vivo agora</h2>
          <CarrosselAoVivo lista={aoVivo} destino={(id) => `?v=${id}`} atual={transmissao?.video_id} />
        </section>
      )}
      {tipos.length > 1 && (
        <Chips
          opcoes={[["", "Tudo"], ...tipos.map((t): [string, string] => [t, NOME_DO_FILTRO[t]])]}
          valor={filtro}
          onChange={(v) => setParams(v ? { tipo: v } : {}, { replace: true })}
        />
      )}
      {videos === null && (
        <div className="flex flex-col gap-3" aria-hidden>
          <div className="aspect-video w-full animate-pulse rounded-2xl bg-cartao" />
          <div className="h-4 w-40 animate-pulse rounded-lg bg-cartao" />
          <div className="h-6 w-64 max-w-full animate-pulse rounded-lg bg-cartao" />
        </div>
      )}
      {videos === "erro" && <Indisponivel />}
      {Array.isArray(videos) && lista.length === 0 && !atual && <p className="py-10 text-center text-tinta-suave">Nenhum vídeo de hoje ainda.</p>}
      {atual && <Player video={atual} tocar={escolhido === atual.id} evangelho={evangelho} admin={admin} onMudou={recarregar} />}
      {outros.length > 0 && (
        <section>
          <h2 className="titulo-secao mb-2 px-1">Também hoje</h2>
          <ul className="flex flex-col gap-1">
            {outros.map((v) => (
              <Linha key={v.id} video={v} filtro={filtro} admin={admin} onMudou={recarregar} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
