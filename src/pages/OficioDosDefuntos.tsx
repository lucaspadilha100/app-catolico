import { Link, useSearchParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { carregarOficioDosDefuntos } from "@/devocao/conteudo";
import { Blocos } from "@/components/Blocos";
import { Cabecalho, Carregando, Indisponivel, Voltar, useConteudo } from "@/components/Devocao";

const CAMINHO = "/rezar/oficio-dos-defuntos";

export default function OficioDosDefuntos() {
  const conteudo = useConteudo(carregarOficioDosDefuntos, "oficio-dos-defuntos");
  const [params] = useSearchParams();
  const pedida = params.get("hora");

  if (conteudo === null)
    return (
      <div className="flex flex-col gap-5">
        <Voltar para="/rezar">Rezar</Voltar>
        <Carregando />
      </div>
    );
  if (conteudo === "erro") return <Indisponivel />;

  const indice = conteudo.horas.findIndex((h) => h.id === pedida);
  const hora = conteudo.horas[indice];

  if (!hora)
    return (
      <div className="flex flex-col gap-5">
        <Voltar para="/rezar">Rezar</Voltar>
        <Cabecalho titulo="Ofício dos Defuntos" subtitulo="Officium Defunctorum" />
        <div className="flex flex-col gap-2">
          {conteudo.horas.map((h) => (
            <Link
              key={h.id}
              to={`${CAMINHO}?hora=${h.id}`}
              className="flex min-h-16 items-center gap-3 rounded-xl border border-borda bg-cartao px-4 py-3 transition-colors hover:border-destaque-texto/40"
            >
              <span className="min-w-0 flex-1">
                <span className="block font-leitura text-[1.05rem] font-medium text-marca">{h.nome}</span>
                <span className="block text-sm italic text-tinta-suave">{h.latim}</span>
              </span>
              <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    );

  const proxima = conteudo.horas[indice + 1];

  return (
    <div className="flex flex-col gap-5">
      <Voltar para={CAMINHO}>Ofício dos Defuntos</Voltar>
      <Cabecalho titulo={hora.nome} subtitulo={hora.latim} />
      <Blocos blocos={hora.blocos} />
      {proxima && (
        <Link
          to={`${CAMINHO}?hora=${proxima.id}`}
          className="flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-borda bg-cartao px-4 font-semibold text-destaque-texto"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          {proxima.nome}
          <ChevronRight className="size-5" aria-hidden />
        </Link>
      )}
    </div>
  );
}
