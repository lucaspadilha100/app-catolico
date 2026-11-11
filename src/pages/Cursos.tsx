import { Link, useParams, useSearchParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { hoje } from "@/liturgia/datas";
import { CURSOS, type Curso } from "@/devocao/catalogo";
import { alternarFeito, lerAcompanhamento, useDevocoesGuardadas } from "@/devocao/progresso";
import { carregarCurso } from "@/devocao/conteudo";
import { LINHA, LISTA, TituloPagina } from "@/components/Cartao";
import { Blocos } from "@/components/Blocos";
import { BotaoRezei, Cabecalho, Carregando, EscolhaDeDia, Indisponivel, Voltar, useConteudo } from "@/components/Devocao";
import { NaoEncontrada } from "@/pages/Simples";

const chaveDoCurso = (id: string) => `curso-${id}`;

function andamento(c: Curso): string {
  const feitos = lerAcompanhamento(chaveDoCurso(c.id))?.feitos.length ?? 0;
  if (!feitos) return `${c.licoes} lições`;
  return feitos >= c.licoes ? "Concluído" : `${feitos} de ${c.licoes} lições`;
}

export function Cursos() {
  useDevocoesGuardadas();
  return (
    <div>
      <Voltar para="/mais">Mais</Voltar>
      <TituloPagina>Cursos de formação</TituloPagina>
      <div className={LISTA}>
        {CURSOS.map((c) => (
          <Link key={c.id} to={`/cursos/${c.id}`} className={`${LINHA} min-h-16`}>
            <span className="min-w-0 flex-1">
              <span className="block font-leitura text-[1.05rem] font-medium text-marca">{c.nome}</span>
              <span className="block text-sm text-tinta-suave">{c.resumo}</span>
              <span className="block text-sm font-medium text-destaque-texto">{andamento(c)}</span>
            </span>
            <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function CursoPagina() {
  const { id = "" } = useParams();
  const curso = CURSOS.find((c) => c.id === id);
  if (!curso) return <NaoEncontrada />;
  return <UmCurso curso={curso} />;
}

function UmCurso({ curso }: { curso: Curso }) {
  useDevocoesGuardadas();
  const [params, setParams] = useSearchParams();
  const conteudo = useConteudo(() => carregarCurso(curso.id), `curso-${curso.id}`);
  const chave = chaveDoCurso(curso.id);
  const feitos = lerAcompanhamento(chave)?.feitos ?? [];
  const primeiraAberta = Array.from({ length: curso.licoes }, (_, i) => i + 1).find((n) => !feitos.includes(n)) ?? 1;
  const pedido = Number(params.get("licao"));
  const licao = pedido >= 1 && pedido <= curso.licoes ? pedido : primeiraAberta;
  const etapa = conteudo && conteudo !== "erro" ? conteudo.etapas[licao - 1] : null;
  const escolher = (n: number) => {
    setParams(n === primeiraAberta ? {} : { licao: String(n) }, { replace: true });
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/cursos">Cursos de formação</Voltar>
      <Cabecalho titulo={curso.nome} subtitulo={curso.resumo} />

      <div className="flex flex-col gap-3">
        {feitos.length > 0 && <p className="font-medium text-tinta">{`${Math.min(feitos.length, curso.licoes)} de ${curso.licoes} lições`}</p>}
        <EscolhaDeDia total={curso.licoes} atual={licao} feitos={feitos} onChange={escolher} />
      </div>

      {conteudo === null ? (
        <Carregando />
      ) : conteudo === "erro" || !etapa ? (
        <Indisponivel />
      ) : (
        <>
          <div>
            <p className="text-sm font-medium text-tinta-suave">{`Lição ${licao}`}</p>
            <h2 className="mt-1 font-leitura text-2xl font-semibold leading-snug text-marca">{etapa.titulo}</h2>
          </div>
          <Blocos blocos={etapa.blocos} data={hoje()} />
          <BotaoRezei feito={feitos.includes(licao)} onClick={() => alternarFeito(chave, hoje(), licao)}>
            {feitos.includes(licao) ? "Lição concluída" : "Concluí esta lição"}
          </BotaoRezei>
          {licao < curso.licoes && (
            <button type="button" onClick={() => escolher(licao + 1)} className="flex min-h-12 items-center justify-center gap-1 rounded-xl border border-borda bg-cartao font-semibold text-tinta">
              Próxima lição <ChevronRight className="size-5" aria-hidden />
            </button>
          )}
        </>
      )}
    </div>
  );
}
