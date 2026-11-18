import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Tv } from "lucide-react";
import { Carrossel } from "@/components/Carrossel";
import { NOME_DO_TIPO, capaDoVideo, enderecoNoYoutube, tituloDaTransmissao, tituloLimpo, transmissoes, videosDoDia, type Transmissao, type Video } from "@/videos/api";

const CARROSSEL = "sem-barra -mx-4 flex snap-x scroll-px-4 gap-2.5 overflow-x-auto px-4";
const CARTAO = "w-60 shrink-0 snap-start";
const CARTAO_DE_HOJE = "w-[78%] max-w-72 shrink-0 snap-start sm:w-64";
const CAPA = "relative block aspect-video overflow-hidden rounded-3xl bg-cartao";

export function SeloAoVivo() {
  return (
    <span className="absolute left-2.5 top-2.5 flex items-center gap-1.5 rounded-md bg-[#d4202c] px-2 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-white">
      <span className="size-1.5 rounded-full bg-white" aria-hidden />
      Ao vivo
    </span>
  );
}

function SeloDoTipo({ texto }: { texto: string }) {
  return <span className="absolute left-2.5 top-2.5 rounded-md bg-black/65 px-2 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-white backdrop-blur-sm">{texto}</span>;
}

function Conteudo({ id, selo, nome, titulo, marcado }: { id: string; selo: ReactNode; nome: string; titulo: string; marcado?: boolean }) {
  return (
    <>
      <span className={`${CAPA} ${marcado ? "ring-2 ring-destaque-texto" : ""}`}>
        <img src={capaDoVideo(id)} alt="" loading="lazy" className="size-full object-cover" />
        {selo}
      </span>
      <span className="mt-2 block truncate px-0.5 text-[0.9375rem] font-bold leading-snug text-tinta">{nome}</span>
      {titulo && <span className="line-clamp-2 block px-0.5 text-[0.8125rem] leading-snug text-tinta-suave">{titulo}</span>}
    </>
  );
}

export function CarrosselAoVivo({ lista, destino, atual }: { lista: Transmissao[]; destino: (id: string) => string; atual?: string | null }) {
  return (
    <div className={CARROSSEL}>
      {lista.map((t) =>
        t.video_id ? (
          <Link key={t.canal_id} to={destino(t.video_id)} replace={destino(t.video_id).startsWith("?")} aria-current={atual === t.video_id ? "true" : undefined} className={CARTAO}>
            <Conteudo id={t.video_id} selo={<SeloAoVivo />} nome={t.canal} titulo={tituloDaTransmissao(t)} marcado={atual === t.video_id} />
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

function useAoVivo(): Transmissao[] | null {
  const [lista, setLista] = useState<Transmissao[] | null>(() => (navigator.onLine ? null : []));
  useEffect(() => {
    let ativo = true;
    const ler = () => {
      if (!navigator.onLine) return;
      void transmissoes().then((t) => ativo && setLista(t.filter((x) => x.video_id)));
    };
    ler();
    const desiste = setTimeout(() => ativo && setLista((x) => x ?? []), 8000);
    const relogio = setInterval(ler, 120000);
    const aoVoltar = () => document.visibilityState === "visible" && ler();
    document.addEventListener("visibilitychange", aoVoltar);
    return () => {
      ativo = false;
      clearTimeout(desiste);
      clearInterval(relogio);
      document.removeEventListener("visibilitychange", aoVoltar);
    };
  }, []);
  return lista;
}

function useDoDia(dia: string): Video[] | null {
  const [lista, setLista] = useState<Video[] | null>(() => (navigator.onLine ? null : []));
  useEffect(() => {
    if (!navigator.onLine) return;
    let ativo = true;
    videosDoDia(dia)
      .then((v) => ativo && setLista(v.filter((x) => !x.escondido && (x.tipo === "homilia" || x.tipo === "terco")).sort((a, b) => Number(a.tipo === "terco") - Number(b.tipo === "terco"))))
      .catch(() => ativo && setLista([]));
    const desiste = setTimeout(() => ativo && setLista((x) => x ?? []), 8000);
    return () => {
      ativo = false;
      clearTimeout(desiste);
    };
  }, [dia]);
  return lista;
}

function tituloDoDia(lista: Video[]): string {
  const homilia = lista.some((v) => v.tipo === "homilia");
  const terco = lista.some((v) => v.tipo === "terco");
  return homilia && terco ? "Homilia e terço de hoje" : homilia ? "Homilia de hoje" : "Terço de hoje";
}

function Esqueleto() {
  return (
    <div aria-hidden>
      <div className="mb-2 flex min-h-11 items-center px-1">
        <div className="h-6 w-44 animate-pulse rounded-lg bg-cartao" />
      </div>
      <div className="-mx-4 flex gap-3 overflow-hidden px-4 md:mx-0 md:px-0">
        {[0, 1].map((i) => (
          <div key={i} className={CARTAO_DE_HOJE}>
            <div className="aspect-video animate-pulse rounded-3xl bg-cartao" />
            <div className="mt-2 h-4 w-32 animate-pulse rounded-lg bg-cartao" />
            <div className="mt-1.5 h-3.5 w-44 max-w-full animate-pulse rounded-lg bg-cartao" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function VideosDeHoje({ dia }: { dia: string }) {
  const aoVivo = useAoVivo();
  const doDia = useDoDia(dia);
  if (aoVivo === null || doDia === null) return <Esqueleto />;
  if (aoVivo.length === 0 && doDia.length === 0) return null;
  return (
    <>
      {aoVivo.length > 0 && (
        <Carrossel titulo="Ao vivo agora" verTodos="/assistir">
          {aoVivo.map((t) => (
            <Link key={t.canal_id} to={`/assistir?v=${t.video_id}`} className={CARTAO_DE_HOJE}>
              <Conteudo id={t.video_id!} selo={<SeloAoVivo />} nome={t.canal} titulo={tituloDaTransmissao(t)} />
            </Link>
          ))}
        </Carrossel>
      )}
      {doDia.length > 0 && (
        <Carrossel titulo={tituloDoDia(doDia)} verTodos="/assistir" defasagem={2500}>
          {doDia.map((v) => {
            const conteudo = <Conteudo id={v.id} selo={<SeloDoTipo texto={NOME_DO_TIPO[v.tipo]} />} nome={v.canal} titulo={tituloLimpo(v.titulo, v.canal)} />;
            return v.embutivel ? (
              <Link key={v.id} to={`/assistir?v=${v.id}`} className={CARTAO_DE_HOJE}>
                {conteudo}
              </Link>
            ) : (
              <a key={v.id} href={enderecoNoYoutube(v.id)} target="_blank" rel="noreferrer" className={CARTAO_DE_HOJE}>
                {conteudo}
              </a>
            );
          })}
        </Carrossel>
      )}
    </>
  );
}
