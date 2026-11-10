import { Link, useSearchParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { diaDaSemana, hoje } from "@/liturgia/datas";
import { NOTURNO_DO_DIA } from "@/devocao/calendario";
import { carregarOficio } from "@/devocao/conteudo";
import type { Bloco } from "@/devocao/tipos";
import { Blocos } from "@/components/Blocos";
import { Cabecalho, Carregando, Indisponivel, Voltar, useConteudo } from "@/components/Devocao";

const LIMITES: [number, string][] = [
  [6, "matinas"],
  [8, "laudes"],
  [9, "prima"],
  [12, "terca"],
  [15, "sexta"],
  [17, "noa"],
  [20, "vesperas"],
  [24, "completas"],
];

const horaDeAgora = () => LIMITES.find(([h]) => new Date().getHours() < h)![1];

export default function Oficio() {
  const conteudo = useConteudo(carregarOficio, "oficio");
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

  if (!hora) {
    const agora = horaDeAgora();
    return (
      <div className="flex flex-col gap-5">
        <Voltar para="/rezar">Rezar</Voltar>
        <Cabecalho titulo="Pequeno Ofício de Nossa Senhora" subtitulo="Officium Parvum Beatae Mariae Virginis" />
        <div className="flex flex-col gap-2">
          {conteudo.horas.map((h) => (
            <Link
              key={h.id}
              to={`/rezar/oficio?hora=${h.id}`}
              className={`flex min-h-16 items-center gap-3 rounded-xl border px-4 py-3 transition-colors hover:border-destaque-texto/40 ${
                h.id === agora ? "border-destaque bg-marca-fundo" : "border-borda bg-cartao"
              }`}
            >
              <span className="min-w-0 flex-1">
                <span className="block font-leitura text-[1.05rem] font-medium text-marca">{h.nome}</span>
                <span className="block text-sm italic text-tinta-suave">{h.latim}</span>
              </span>
              {h.id === agora && <span className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">Agora</span>}
              <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const noturno = conteudo.noturnos[NOTURNO_DO_DIA[diaDaSemana(hoje())]!];
  const blocos: Bloco[] = hora.blocos.flatMap((b) => ("noturno" in b ? noturno : [b]));
  const proxima = conteudo.horas[indice + 1];

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/rezar/oficio">Pequeno Ofício</Voltar>
      <Cabecalho titulo={hora.nome} subtitulo={hora.latim} />
      <Blocos blocos={blocos} />
      {proxima && (
        <Link
          to={`/rezar/oficio?hora=${proxima.id}`}
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
