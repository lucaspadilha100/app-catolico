import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { carregarViaSacra } from "@/devocao/conteudo";
import { ordinal } from "@/devocao/calendario";
import { registrarOracao } from "@/devocao/progresso";
import { Blocos } from "@/components/Blocos";
import { Cabecalho, Carregando, Indisponivel, Voltar, useConteudo } from "@/components/Devocao";

export default function ViaSacra() {
  const conteudo = useConteudo(carregarViaSacra, "via-sacra");
  const [params, setParams] = useSearchParams();
  const [concluida, setConcluida] = useState(false);
  const total = conteudo && conteudo !== "erro" ? conteudo.passos.length : 14;
  const bruto = Number(params.get("estacao") ?? 0);
  const passo = Number.isInteger(bruto) && bruto >= 0 && bruto <= total + 1 ? bruto : 0;

  const ir = (p: number) => {
    setParams(p === 0 ? {} : { estacao: String(p) });
    window.scrollTo({ top: 0 });
  };

  const concluir = () => {
    registrarOracao();
    setConcluida(true);
  };

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/rezar">Rezar</Voltar>
      <Cabecalho titulo="Via-Sacra" subtitulo={passo >= 1 && passo <= total ? `${ordinal(passo)} estação de ${total}` : undefined} />

      {conteudo === null ? (
        <Carregando />
      ) : conteudo === "erro" ? (
        <Indisponivel />
      ) : (
        <>
          <div className="flex gap-1" aria-hidden>
            {Array.from({ length: total }, (_, i) => (
              <span key={i} className={`h-1.5 flex-1 rounded-full ${i < passo ? "bg-destaque" : "bg-borda"}`} />
            ))}
          </div>

          {passo === 0 && <Blocos blocos={conteudo.antes} />}
          {passo >= 1 && passo <= total && (
            <>
              <h2 className="font-leitura text-2xl font-semibold leading-snug text-marca">{conteudo.passos[passo - 1]!.titulo}</h2>
              <Blocos blocos={conteudo.inicioDoPasso} />
              <Blocos blocos={conteudo.passos[passo - 1]!.blocos} />
              <div className="border-t border-borda pt-5">
                <Blocos blocos={conteudo.fimDoPasso} />
              </div>
            </>
          )}
          {passo === total + 1 && <Blocos blocos={conteudo.depois} />}

          {concluida ? (
            <p className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-borda bg-cartao font-semibold text-destaque-texto">
              <Check className="size-6" aria-hidden /> Via-Sacra rezada
            </p>
          ) : (
            <div className="grid grid-cols-[auto_1fr] gap-3">
              <button
                type="button"
                onClick={() => ir(passo - 1)}
                disabled={passo === 0}
                aria-label="Anterior"
                className="grid size-14 place-items-center rounded-2xl border border-borda bg-cartao text-tinta-suave disabled:opacity-40"
              >
                <ChevronLeft className="size-6" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => (passo === total + 1 ? concluir() : ir(passo + 1))}
                className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-destaque px-4 text-lg font-semibold text-sobre-destaque"
              >
                {passo === 0 ? "Começar" : passo === total ? "Oração final" : passo === total + 1 ? "Concluir" : `${ordinal(passo + 1)} estação`}
                {passo <= total && <ChevronRight className="size-6" aria-hidden />}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
