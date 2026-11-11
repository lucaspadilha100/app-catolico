import { useMemo } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { diaEMes, diferencaEmDias, hoje, somaDias } from "@/liturgia/datas";
import { NOME_DO_GRUPO_DE_NOVENAS, NOVENAS, type GrupoDeNovenas, type Novena } from "@/devocao/catalogo";
import { ordinal, proximaNovena } from "@/devocao/calendario";
import { chaveDaNovena, diaSugeridoDaNovena } from "@/devocao/andamento";
import { alternarFeito, acompanhamentoVigente, guardarAcompanhamento, useDevocoesGuardadas } from "@/devocao/progresso";
import { carregarNovena } from "@/devocao/conteudo";
import { LINHA, LISTA, TituloPagina } from "@/components/Cartao";
import { Blocos } from "@/components/Blocos";
import { BotaoRezei, Cabecalho, Carregando, EscolhaDeDia, Indisponivel, Voltar, useConteudo } from "@/components/Devocao";
import { NaoEncontrada } from "@/pages/Simples";

const GRUPOS: GrupoDeNovenas[] = ["nossa-senhora", "senhor", "santos"];

function quando(n: Novena): string {
  const d = hoje();
  const s = diaSugeridoDaNovena(n, d);
  if (s) return `${ordinal(s.dia)} dia de ${n.dias}`;
  const { inicio } = proximaNovena(n, d);
  const faltam = diferencaEmDias(inicio, d);
  if (faltam === 1) return "Começa amanhã";
  if (faltam <= 7) return `Começa em ${faltam} dias`;
  return `Começa em ${diaEMes(inicio, d)}`;
}

function ItemDeNovena({ n }: { n: Novena }) {
  return (
    <Link
      to={`/rezar/novenas/${n.id}`}
      className={`${LINHA} min-h-16`}
    >
      <span className="min-w-0 flex-1">
        <span className="block font-leitura text-[1.05rem] font-medium text-marca">{n.nome}</span>
        <span className="block text-sm text-tinta-suave">{quando(n)}</span>
      </span>
      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
    </Link>
  );
}

export function Novenas() {
  useDevocoesGuardadas();
  const d = hoje();
  const agora = NOVENAS.filter((n) => diaSugeridoDaNovena(n, d));
  const proximas = NOVENAS.filter((n) => !agora.includes(n))
    .map((n) => ({ n, faltam: diferencaEmDias(proximaNovena(n, d).inicio, d) }))
    .filter((x) => x.faltam <= 30)
    .sort((a, b) => a.faltam - b.faltam)
    .map((x) => x.n);

  const Secao = ({ titulo, lista }: { titulo: string; lista: Novena[] }) =>
    lista.length ? (
      <section>
        <h2 className="titulo-secao mb-3 px-1">{titulo}</h2>
        <div className={LISTA}>
          {lista.map((n) => (
            <ItemDeNovena key={n.id} n={n} />
          ))}
        </div>
      </section>
    ) : null;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Voltar para="/rezar">Rezar</Voltar>
        <TituloPagina>Novenas</TituloPagina>
      </div>
      <Secao titulo="Agora" lista={agora} />
      <Secao titulo="Em breve" lista={proximas} />
      {GRUPOS.map((g) => (
        <Secao key={g} titulo={NOME_DO_GRUPO_DE_NOVENAS[g]} lista={NOVENAS.filter((n) => n.grupo === g)} />
      ))}
    </div>
  );
}

export function NovenaPagina() {
  const { id = "" } = useParams();
  const n = NOVENAS.find((x) => x.id === id);
  if (!n) return <NaoEncontrada />;
  return <Novena n={n} />;
}

function Novena({ n }: { n: Novena }) {
  useDevocoesGuardadas();
  const [params, setParams] = useSearchParams();
  const conteudo = useConteudo(() => carregarNovena(n.id), n.id);
  const d = hoje();
  const chave = chaveDaNovena(n.id);
  const a = acompanhamentoVigente(chave, n.dias, d);
  const sugerido = diaSugeridoDaNovena(n, d);
  const pedido = Number(params.get("dia"));
  const dia = pedido >= 1 && pedido <= n.dias ? pedido : (sugerido?.dia ?? 1);
  const feitos = a?.feitos ?? [];
  const concluida = feitos.length >= n.dias;
  const janela = proximaNovena(n, d);
  const festa = somaDias(janela.inicio, n.terminaNaFesta ? n.dias - 1 : n.dias);

  const subtitulo = useMemo(
    () => `${n.nomeDaFesta}, ${diaEMes(festa)} · de ${diaEMes(janela.inicio)} a ${diaEMes(janela.fim)}`,
    [n, festa, janela],
  );

  const escolher = (x: number) => setParams(x === (sugerido?.dia ?? 1) ? {} : { dia: String(x) }, { replace: true });

  const marcar = () => {
    const inicio = sugerido?.inicio ?? somaDias(d, -(dia - 1));
    alternarFeito(chave, inicio, dia);
  };

  const etapa = conteudo && conteudo !== "erro" ? conteudo.etapas[dia - 1] : null;

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/rezar/novenas">Novenas</Voltar>
      <Cabecalho titulo={n.nome} subtitulo={subtitulo} />

      <div className="flex flex-col gap-3">
        <p className="font-medium text-tinta">
          {concluida ? "Novena concluída" : a ? `${feitos.length} de ${n.dias} dias rezados` : sugerido ? `Hoje é o ${ordinal(sugerido.dia)} dia` : ""}
        </p>
        <EscolhaDeDia total={n.dias} atual={dia} feitos={feitos} hoje={sugerido?.dia} onChange={escolher} />
      </div>

      {conteudo === null ? (
        <Carregando />
      ) : conteudo === "erro" || !etapa ? (
        <Indisponivel />
      ) : (
        <>
          <Blocos blocos={conteudo.antes} />
          <h2 className="border-t border-borda pt-5 text-2xl font-extrabold leading-snug text-marca tracking-[-0.02em]">{etapa.titulo}</h2>
          <Blocos blocos={etapa.blocos} />
          <div className="border-t border-borda pt-5">
            <Blocos blocos={conteudo.depois} />
          </div>
          <BotaoRezei feito={feitos.includes(dia)} onClick={marcar}>
            {feitos.includes(dia) ? `${ordinal(dia)} dia rezado` : `Rezei o ${ordinal(dia)} dia`}
          </BotaoRezei>
          {a && (
            <button
              type="button"
              onClick={() => (concluida || window.confirm("Apagar os dias marcados desta novena?")) && guardarAcompanhamento(chave, null)}
              className="mx-auto min-h-11 px-4 text-sm font-medium text-tinta-suave underline-offset-4 hover:underline"
            >
              {concluida ? "Rezar de novo" : "Recomeçar"}
            </button>
          )}
        </>
      )}
    </div>
  );
}
