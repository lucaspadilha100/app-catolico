import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BookOpen, BookOpenText, ExternalLink, EyeOff, Eye } from "lucide-react";
import { Cabecalho, Indisponivel } from "@/components/Devocao";
import { useConta } from "@/conta/useConta";
import { souAdmin } from "@/paroquias/api";
import { dataPorExtenso, hoje, paraIso } from "@/liturgia/datas";
import { LIVROS } from "@/biblia/livros";
import { NOME_DO_TIPO, capaDoVideo, enderecoDoPlayer, enderecoNoYoutube, esconderVideo, tituloLimpo, videosDoDia, videosDoDiaParaOAdmin, type TipoDeVideo, type Video } from "@/videos/api";

const ORDEM: TipoDeVideo[] = ["homilia", "missa", "terco"];
const TITULO_DA_SECAO: Record<TipoDeVideo, string> = { homilia: "Homilia de hoje", missa: "Santa Missa", terco: "Terço" };

function capituloDaBiblia(referencia: string): string | null {
  const m = /^([1-3]?[A-Za-zÀ-ÿ]+) (\d+)/.exec(referencia);
  if (!m) return null;
  const livro = LIVROS.find((l) => l.abreviatura === m[1]);
  return livro ? `/biblia/${livro.codigo}/${m[2]}` : null;
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

function Player({ video }: { video: Video }) {
  const biblia = video.referencia ? capituloDaBiblia(video.referencia) : null;
  const botao = "flex min-h-11 items-center gap-2 rounded-full bg-cartao px-4 text-[0.9375rem] font-semibold text-tinta";
  return (
    <section className="flex flex-col gap-3">
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
        <iframe
          key={video.id}
          src={enderecoDoPlayer(video.id)}
          title={tituloLimpo(video.titulo, video.canal)}
          className="size-full"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="px-1">
        <p className="text-sm font-semibold text-destaque-texto">
          {video.canal} · {NOME_DO_TIPO[video.tipo]}
          {video.referencia ? ` · ${video.referencia}` : ""}
        </p>
        <h2 className="mt-1 text-lg font-bold leading-snug text-tinta">{tituloLimpo(video.titulo, video.canal)}</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        <Link to="/liturgia?aba=evangelho" className={botao}>
          <BookOpenText className="size-5" aria-hidden />
          Evangelho do dia
        </Link>
        {biblia && (
          <Link to={biblia} className={botao}>
            <BookOpen className="size-5" aria-hidden />
            Ler {video.referencia}
          </Link>
        )}
        <a href={enderecoNoYoutube(video.id)} target="_blank" rel="noreferrer" className={`${botao} text-tinta-suave`}>
          <ExternalLink className="size-5" aria-hidden />
          YouTube
        </a>
      </div>
    </section>
  );
}

function Cartao({ video, atual, admin, onMudou }: { video: Video; atual: boolean; admin: boolean; onMudou: () => void }) {
  const [mudando, setMudando] = useState(false);
  return (
    <div className={`flex flex-col gap-2 ${video.escondido ? "opacity-50" : ""}`}>
      <Link
        to={video.embutivel ? `?v=${video.id}` : enderecoNoYoutube(video.id)}
        target={video.embutivel ? undefined : "_blank"}
        rel={video.embutivel ? undefined : "noreferrer"}
        replace
        aria-current={atual ? "true" : undefined}
        className="flex flex-col gap-2"
      >
        <span className={`relative block aspect-video overflow-hidden rounded-2xl bg-cartao ${atual ? "ring-2 ring-destaque-texto" : ""}`}>
          <img src={capaDoVideo(video.id)} alt="" loading="lazy" className="size-full object-cover" />
        </span>
        <span className="px-1">
          <span className="block text-sm font-semibold text-destaque-texto">{video.canal}</span>
          <span className="line-clamp-2 block font-semibold leading-snug text-tinta">{tituloLimpo(video.titulo, video.canal)}</span>
        </span>
      </Link>
      {admin && (
        <button
          type="button"
          disabled={mudando}
          onClick={() => {
            setMudando(true);
            esconderVideo(video.id, !video.escondido)
              .then(onMudou)
              .catch(() => {})
              .finally(() => setMudando(false));
          }}
          className="flex min-h-10 items-center gap-2 self-start rounded-full border border-borda px-3 text-sm font-medium text-tinta-suave"
        >
          {video.escondido ? <Eye className="size-4" aria-hidden /> : <EyeOff className="size-4" aria-hidden />}
          {video.escondido ? "Mostrar no app" : "Esconder"}
        </button>
      )}
    </div>
  );
}

export default function Assistir() {
  const [params] = useSearchParams();
  const escolhido = params.get("v");
  const dia = paraIso(hoje());
  const admin = useAdmin();
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

  const lista = Array.isArray(videos) ? videos : [];
  const atual = lista.find((v) => v.id === escolhido && v.embutivel) ?? null;

  return (
    <div ref={topo} className="flex flex-col gap-6">
      <Cabecalho titulo="Assistir" subtitulo={dataPorExtenso(hoje())} />
      {atual && <Player video={atual} />}
      {videos === null && <div className="aspect-video animate-pulse rounded-2xl bg-cartao" />}
      {videos === "erro" && <Indisponivel />}
      {Array.isArray(videos) && videos.length === 0 && <p className="py-10 text-center text-tinta-suave">Nenhum vídeo de hoje ainda.</p>}
      {ORDEM.map((tipo) => {
        const doTipo = lista.filter((v) => v.tipo === tipo);
        if (doTipo.length === 0) return null;
        return (
          <section key={tipo} className="flex flex-col gap-3">
            <h2 className="titulo-secao px-1">{TITULO_DA_SECAO[tipo]}</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {doTipo.map((v) => (
                <Cartao key={v.id} video={v} atual={v.id === escolhido} admin={admin} onMudou={() => setVersao((x) => x + 1)} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
