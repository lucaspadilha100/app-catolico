import { useSearchParams } from "react-router-dom";
import { diaEMes, diferencaEmDias, hoje, somaDias } from "@/liturgia/datas";
import { pascoa } from "@/liturgia/calendario";
import { NOMES_DA_SEMANA_SANTA, diaDaSemanaSanta, domingoDeRamos } from "@/devocao/calendario";
import { carregarSemanaSanta } from "@/devocao/conteudo";
import { Blocos } from "@/components/Blocos";
import { Cabecalho, Carregando, Indisponivel, Voltar, useConteudo } from "@/components/Devocao";

export default function SemanaSanta() {
  const conteudo = useConteudo(carregarSemanaSanta, "semana-santa");
  const [params, setParams] = useSearchParams();
  const d = hoje();
  const ano = diferencaEmDias(pascoa(d.getUTCFullYear()), d) >= 0 ? d.getUTCFullYear() : d.getUTCFullYear() + 1;
  const ramos = domingoDeRamos(ano);
  const deHoje = diaDaSemanaSanta(d);
  const pedido = Number(params.get("dia"));
  const i = Number.isInteger(pedido) && pedido >= 1 && pedido <= 8 ? pedido - 1 : (deHoje ?? 0);
  const data = somaDias(ramos, i);
  const etapa = conteudo && conteudo !== "erro" ? conteudo.etapas[i] : null;

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/rezar">Rezar</Voltar>
      <Cabecalho titulo="Semana Santa" subtitulo={`De ${diaEMes(ramos)} a ${diaEMes(somaDias(ramos, 7))} de ${ano}`} />

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="Dias">
        {NOMES_DA_SEMANA_SANTA.map((nome, j) => (
          <button
            key={nome}
            type="button"
            aria-pressed={j === i}
            onClick={() => setParams(j === (deHoje ?? 0) ? {} : { dia: String(j + 1) }, { replace: true })}
            className={`min-h-12 rounded-xl border px-2 text-sm font-medium leading-tight ${
              j === i ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta"
            } ${j === deHoje && j !== i ? "ring-2 ring-destaque/40" : ""}`}
          >
            {nome}
          </button>
        ))}
      </div>

      {conteudo === null ? (
        <Carregando />
      ) : conteudo === "erro" || !etapa ? (
        <Indisponivel />
      ) : (
        <>
          <div>
            <p className="text-sm font-medium text-tinta-suave">{diaEMes(data)}</p>
            <h2 className="mt-1 font-leitura text-2xl font-semibold leading-snug text-marca">{etapa.titulo}</h2>
          </div>
          <Blocos blocos={etapa.blocos} data={data} />
        </>
      )}
    </div>
  );
}
