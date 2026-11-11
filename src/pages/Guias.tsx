import { carregarGuia } from "@/confissao/conteudo";
import { Blocos } from "@/components/Blocos";
import { Cabecalho, Carregando, Indisponivel, Voltar, useConteudo } from "@/components/Devocao";

function Guia({ qual, titulo }: { qual: "confissao" | "missa"; titulo: string }) {
  const g = useConteudo(() => carregarGuia(qual), `guia-${qual}`);
  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/rezar">Rezar</Voltar>
      <Cabecalho titulo={titulo} />
      {g === null ? (
        <Carregando />
      ) : g === "erro" ? (
        <Indisponivel />
      ) : (
        <ol className="flex flex-col gap-6">
          {g.passos.map((p, i) => (
            <li key={i} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-2xl font-extrabold leading-snug text-marca tracking-[-0.02em]">
                  <span className="mr-2 text-destaque-texto">{i + 1}.</span>
                  {p.titulo}
                </h2>
                {p.postura && <span className="rounded-full bg-marca-fundo px-3 py-0.5 text-sm font-medium text-tinta">{p.postura}</span>}
              </div>
              <Blocos blocos={p.blocos} />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export const GuiaDaConfissao = () => <Guia qual="confissao" titulo="Como se confessar" />;
export const GuiaDaMissa = () => <Guia qual="missa" titulo="A Missa, parte por parte" />;
