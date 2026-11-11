import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Check, ExternalLink, X } from "lucide-react";
import { NOME_DA_TURMA, dataCurta, encontrosDaTurma, minhasInscricoesNaTurma, presencas, turmaPorId, type EncontroDaTurma, type Inscricao } from "@/paroquias/plano";
import { Cabecalho, Carregando, Voltar } from "@/components/Devocao";
import { NaoEncontrada } from "@/pages/Simples";

type Dados = {
  turma: NonNullable<Awaited<ReturnType<typeof turmaPorId>>>;
  minhas: Inscricao[];
  encontros: EncontroDaTurma[];
  marcas: { encontro_id: string; inscricao_id: string; presente: boolean }[];
};

export default function Turma() {
  const { id = "" } = useParams();
  const [d, setD] = useState<Dados | null | "nada">(null);

  useEffect(() => {
    void (async () => {
      const turma = await turmaPorId(id).catch(() => null);
      if (!turma) return setD("nada");
      const [minhas, encontros] = await Promise.all([minhasInscricoesNaTurma(id), encontrosDaTurma(id).catch(() => [])]);
      setD({ turma, minhas, encontros, marcas: await presencas(encontros.map((e) => e.id)).catch(() => []) });
    })();
  }, [id]);

  if (d === null) return <Carregando />;
  if (d === "nada") return <NaoEncontrada />;
  const hoje = new Date().toLocaleDateString("sv-SE");
  const proximos = d.encontros.filter((e) => e.data >= hoje);
  const passados = d.encontros.filter((e) => e.data < hoje).reverse();

  const Encontro = ({ e, passou }: { e: EncontroDaTurma; passou: boolean }) => (
    <li className="flex flex-col gap-2 px-4 py-3">
      <div>
        <p className="font-medium text-tinta">{e.tema}</p>
        <p className="text-sm text-tinta-suave">{`${dataCurta(e.data)}${e.hora ? ` · ${e.hora.slice(0, 5)}` : ""}`}</p>
      </div>
      {e.material && <p className="whitespace-pre-line text-tinta">{e.material}</p>}
      {e.link && (
        <a href={e.link} target="_blank" rel="noreferrer" className="flex min-h-10 w-fit items-center gap-1.5 rounded-full border border-borda px-4 text-sm font-medium text-destaque-texto">
          <ExternalLink className="size-4" aria-hidden /> Material
        </a>
      )}
      {passou &&
        d.minhas.map((i) => {
          const m = d.marcas.find((x) => x.encontro_id === e.id && x.inscricao_id === i.id);
          return (
            <p key={i.id} className={`flex items-center gap-1.5 text-sm ${m?.presente ? "text-destaque-texto" : "text-tinta-suave"}`}>
              {m?.presente ? <Check className="size-4" aria-hidden /> : <X className="size-4" aria-hidden />}
              {`${i.nome}: ${m?.presente ? "presente" : m ? "faltou" : "sem chamada"}`}
            </p>
          );
        })}
    </li>
  );

  return (
    <div className="flex flex-col gap-4">
      <Voltar para={`/missas/paroquia/${d.turma.paroquia_id}`}>{d.turma.paroquias?.nome ?? "Paróquia"}</Voltar>
      <Cabecalho titulo={d.turma.titulo} subtitulo={[NOME_DA_TURMA[d.turma.tipo], d.minhas.map((i) => i.nome).join(", ")].filter(Boolean).join(" · ")} />
      {!d.encontros.length && <p className="text-tinta-suave">Nenhum encontro marcado ainda.</p>}
      {proximos.length > 0 && (
        <section className="flex flex-col gap-2">
          <h2 className="titulo-secao px-1">Próximos encontros</h2>
          <ul className="flex flex-col divide-y divide-borda overflow-hidden rounded-3xl bg-cartao">
            {proximos.map((e) => (
              <Encontro key={e.id} e={e} passou={false} />
            ))}
          </ul>
        </section>
      )}
      {passados.length > 0 && (
        <section className="flex flex-col gap-2">
          <h2 className="titulo-secao px-1">Encontros que passaram</h2>
          <ul className="flex flex-col divide-y divide-borda overflow-hidden rounded-3xl bg-cartao">
            {passados.map((e) => (
              <Encontro key={e.id} e={e} passou />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
