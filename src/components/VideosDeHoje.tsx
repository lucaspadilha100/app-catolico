import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { capaDoVideo, enderecoNoYoutube, tituloLimpo, videosDoDia, type Video } from "@/videos/api";

export function VideosDeHoje({ dia }: { dia: string }) {
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    if (!navigator.onLine) return;
    let ativo = true;
    videosDoDia(dia)
      .then((v) => ativo && setVideos(v.filter((x) => x.tipo === "homilia" || x.tipo === "missa")))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [dia]);
  if (videos.length === 0) return null;
  return (
    <section>
      <div className="mb-2 flex items-baseline justify-between">
        <h2 className="titulo-secao px-1">Homilia de hoje</h2>
        <Link to="/assistir" className="px-1 text-[0.9375rem] font-semibold text-destaque-texto">
          Ver todos
        </Link>
      </div>
      <div className="-mx-4 flex snap-x scroll-px-4 gap-2.5 overflow-x-auto px-4 [scrollbar-width:none]">
        {videos.map((v) => (
          <Link
            key={v.id}
            to={v.embutivel ? `/assistir?v=${v.id}` : enderecoNoYoutube(v.id)}
            target={v.embutivel ? undefined : "_blank"}
            rel={v.embutivel ? undefined : "noreferrer"}
            className="w-60 shrink-0 snap-start"
          >
            <span className="block aspect-video overflow-hidden rounded-3xl bg-cartao">
              <img src={capaDoVideo(v.id)} alt="" loading="lazy" className="size-full object-cover" />
            </span>
            <span className="mt-2 line-clamp-2 block px-0.5 text-[0.9375rem] font-bold leading-snug text-tinta">{tituloLimpo(v.titulo, v.canal)}</span>
            <span className="block px-0.5 text-[0.8125rem] text-tinta-suave">{v.canal}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
