import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Tv } from "lucide-react";
import { capaDoVideo, tituloDaTransmissao, useTransmissoes, videosDoDia, type Transmissao, type Video } from "@/videos/api";

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

export function VideosDeHoje({ dia }: { dia: string }) {
  const [homilias, setHomilias] = useState<Video[]>([]);
  const aoVivo = useTransmissoes().filter((t) => t.video_id);
  useEffect(() => {
    if (!navigator.onLine) return;
    let ativo = true;
    videosDoDia(dia)
      .then((v) => ativo && setHomilias(v.filter((x) => x.tipo === "homilia")))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [dia]);
  if (homilias.length === 0 && aoVivo.length === 0) return null;
  const capa = aoVivo[0]?.video_id ?? homilias[0]?.id;
  const detalhe = [aoVivo.length ? `${aoVivo.length} ao vivo agora` : "", homilias.length ? (homilias.length === 1 ? "Homilia de hoje" : `${homilias.length} homilias de hoje`) : ""]
    .filter(Boolean)
    .join(" · ");
  return (
    <Link to="/assistir" className="flex min-h-16 items-center gap-3.5 rounded-2xl py-1.5 transition-colors hover:bg-cartao/70">
      <span className="relative block h-[3.75rem] w-24 shrink-0 overflow-hidden rounded-2xl bg-cartao">
        {capa ? <img src={capaDoVideo(capa)} alt="" loading="lazy" className="size-full object-cover" /> : <Tv className="m-auto size-6 text-tinta-suave" aria-hidden />}
        {aoVivo.length > 0 && <span className="absolute left-1.5 top-1.5 size-2.5 rounded-full bg-[#d4202c] ring-2 ring-white" aria-hidden />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-bold leading-snug text-tinta">Assistir</span>
        <span className="block text-[0.9375rem] text-tinta-suave">{detalhe}</span>
      </span>
      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
    </Link>
  );
}
