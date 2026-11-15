import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tv } from "lucide-react";
import { capaDoVideo, enderecoNoYoutube, tituloDaTransmissao, tituloLimpo, useTransmissoes, videosDoDia, type Transmissao, type Video } from "@/videos/api";

const CARROSSEL = "-mx-4 flex snap-x scroll-px-4 gap-2.5 overflow-x-auto px-4 [scrollbar-width:none]";
const CARTAO = "w-60 shrink-0 snap-start";
const CAPA = "relative block aspect-video overflow-hidden rounded-3xl bg-cartao";

export function SeloAoVivo() {
  return (
    <span className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-md bg-[#d4202c] px-2 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-white">
      <span className="size-1.5 rounded-full bg-white" aria-hidden />
      Ao vivo
    </span>
  );
}

export function CarrosselAoVivo({ lista, destino, atual }: { lista: Transmissao[]; destino: (id: string) => string; atual?: string | null }) {
  return (
    <div className={CARROSSEL}>
      {lista.map((t) =>
        t.video_id ? (
          <Link key={t.canal_id} to={destino(t.video_id)} replace={destino(t.video_id).startsWith("?")} aria-current={atual === t.video_id ? "true" : undefined} className={CARTAO}>
            <span className={`${CAPA} ${atual === t.video_id ? "ring-2 ring-destaque-texto" : ""}`}>
              <img src={capaDoVideo(t.video_id)} alt="" loading="lazy" className="size-full object-cover" />
              <SeloAoVivo />
            </span>
            <span className="mt-2 block truncate px-0.5 text-[0.9375rem] font-bold leading-snug text-tinta">{t.canal}</span>
            {tituloDaTransmissao(t) && <span className="line-clamp-2 block px-0.5 text-[0.8125rem] leading-snug text-tinta-suave">{tituloDaTransmissao(t)}</span>}
          </Link>
        ) : (
          <div key={t.canal_id} className={CARTAO}>
            <span className={`${CAPA} grid place-items-center text-tinta-suave`}>
              <Tv className="size-8" aria-hidden />
            </span>
            <span className="mt-2 block truncate px-0.5 text-[0.9375rem] font-bold leading-snug text-tinta">{t.canal}</span>
            <span className="block px-0.5 text-[0.8125rem] text-tinta-suave">Fora do ar</span>
          </div>
        ),
      )}
    </div>
  );
}

function Titulo({ texto }: { texto: string }) {
  return (
    <div className="mb-2 flex items-baseline justify-between">
      <h2 className="titulo-secao px-1">{texto}</h2>
      <Link to="/assistir" className="px-1 text-[0.9375rem] font-semibold text-destaque-texto">
        Ver todos
      </Link>
    </div>
  );
}

export function VideosDeHoje({ dia }: { dia: string }) {
  const [videos, setVideos] = useState<Video[]>([]);
  const aoVivo = useTransmissoes().filter((t) => t.video_id);
  useEffect(() => {
    if (!navigator.onLine) return;
    let ativo = true;
    videosDoDia(dia)
      .then((v) => ativo && setVideos(v.filter((x) => x.tipo === "homilia")))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [dia]);
  if (videos.length === 0 && aoVivo.length === 0) return null;
  return (
    <>
      {aoVivo.length > 0 && (
        <section>
          <Titulo texto="Ao vivo agora" />
          <CarrosselAoVivo lista={aoVivo} destino={(id) => `/assistir?v=${id}`} />
        </section>
      )}
      {videos.length > 0 && (
        <section>
          <Titulo texto="Homilia de hoje" />
          <div className={CARROSSEL}>
            {videos.map((v) => (
              <Link
                key={v.id}
                to={v.embutivel ? `/assistir?v=${v.id}` : enderecoNoYoutube(v.id)}
                target={v.embutivel ? undefined : "_blank"}
                rel={v.embutivel ? undefined : "noreferrer"}
                className={CARTAO}
              >
                <span className={CAPA}>
                  <img src={capaDoVideo(v.id)} alt="" loading="lazy" className="size-full object-cover" />
                </span>
                <span className="mt-2 line-clamp-2 block px-0.5 text-[0.9375rem] font-bold leading-snug text-tinta">{tituloLimpo(v.titulo, v.canal)}</span>
                <span className="block px-0.5 text-[0.8125rem] text-tinta-suave">{v.canal}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
