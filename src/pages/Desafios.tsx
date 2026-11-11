import { Link, useParams, useSearchParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { diaEMes, diferencaEmDias, hoje, somaDias } from "@/liturgia/datas";
import { DESAFIOS, type Desafio } from "@/devocao/catalogo";
import { diasDaJanela, etapaDaPosicao, posicaoNoDesafio, proximoDesafio } from "@/devocao/calendario";
import { chaveDoDesafio } from "@/devocao/andamento";
import { alternarFeito, lerAcompanhamento, useDevocoesGuardadas } from "@/devocao/progresso";
import { carregarDesafio } from "@/devocao/conteudo";
import { LINHA, LISTA, TituloPagina } from "@/components/Cartao";
import { Blocos } from "@/components/Blocos";
import { BotaoRezei, Cabecalho, Carregando, EscolhaDeDia, Indisponivel, Voltar, useConteudo } from "@/components/Devocao";
import { NaoEncontrada } from "@/pages/Simples";

function quando(desafio: Desafio): string {
  const d = hoje();
  const p = posicaoNoDesafio(desafio, d);
  if (p) return `Dia ${p.posicao + 1} de ${diasDaJanela(p.janela)}`;
  const { inicio } = proximoDesafio(desafio, d);
  const faltam = diferencaEmDias(inicio, d);
  return faltam === 1 ? "Começa amanhã" : `Começa em ${diaEMes(inicio, d)}`;
}

export function Desafios() {
  const d = hoje();
  const ordem = [...DESAFIOS].sort(
    (a, b) => diferencaEmDias(proximoDesafio(a, d).inicio, d) - diferencaEmDias(proximoDesafio(b, d).inicio, d),
  );
  return (
    <div>
      <Voltar para="/rezar">Rezar</Voltar>
      <TituloPagina>Tempos e meses</TituloPagina>
      <div className={LISTA}>
        {ordem.map((x) => (
          <Link
            key={x.id}
            to={`/rezar/desafios/${x.id}`}
            className={`${LINHA} min-h-16`}
          >
            <span className="min-w-0 flex-1">
              <span className="block text-[1.0625rem] font-semibold text-tinta">{x.nome}</span>
              <span className="block text-sm text-tinta-suave">{quando(x)}</span>
            </span>
            <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function DesafioPagina() {
  const { id = "" } = useParams();
  const desafio = DESAFIOS.find((x) => x.id === id);
  if (!desafio) return <NaoEncontrada />;
  return <UmDesafio desafio={desafio} />;
}

function UmDesafio({ desafio }: { desafio: Desafio }) {
  useDevocoesGuardadas();
  const [params, setParams] = useSearchParams();
  const conteudo = useConteudo(() => carregarDesafio(desafio.id), desafio.id);
  const d = hoje();
  const janela = proximoDesafio(desafio, d);
  const total = diasDaJanela(janela);
  const agora = posicaoNoDesafio(desafio, d);
  const hojeNoDesafio = agora ? agora.posicao + 1 : undefined;
  const pedido = Number(params.get("dia"));
  const dia = pedido >= 1 && pedido <= total ? pedido : (hojeNoDesafio ?? 1);
  const chave = chaveDoDesafio(desafio.id, janela.inicio.getUTCFullYear());
  const feitos = lerAcompanhamento(chave)?.feitos ?? [];
  const data = somaDias(janela.inicio, dia - 1);
  const pode = !!hojeNoDesafio && dia <= hojeNoDesafio;
  const etapa = conteudo && conteudo !== "erro" ? conteudo.etapas[etapaDaPosicao(desafio, janela, dia - 1)] : null;

  const escolher = (x: number) => setParams(x === (hojeNoDesafio ?? 1) ? {} : { dia: String(x) }, { replace: true });

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/rezar/desafios">Tempos e meses</Voltar>
      <Cabecalho titulo={desafio.nome} subtitulo={`De ${diaEMes(janela.inicio)} a ${diaEMes(janela.fim)}`} />

      <div className="flex flex-col gap-3">
        {(feitos.length > 0 || !agora) && (
          <p className="font-medium text-tinta">{agora ? `${feitos.length} de ${total} dias rezados` : `Começa em ${diaEMes(janela.inicio)}`}</p>
        )}
        <EscolhaDeDia total={total} atual={dia} feitos={feitos} hoje={hojeNoDesafio} onChange={escolher} />
      </div>

      {conteudo === null ? (
        <Carregando />
      ) : conteudo === "erro" || !etapa ? (
        <Indisponivel />
      ) : (
        <>
          <div>
            <p className="text-sm font-medium text-tinta-suave">{diaEMes(data)}</p>
            <h2 className="mt-1 text-2xl font-extrabold leading-snug text-marca tracking-[-0.02em]">{etapa.titulo}</h2>
          </div>
          <Blocos blocos={etapa.blocos} data={data} />
          {pode && (
            <BotaoRezei feito={feitos.includes(dia)} onClick={() => alternarFeito(chave, janela.inicio, dia)}>
              {feitos.includes(dia) ? "Rezado" : dia === hojeNoDesafio ? "Rezei hoje" : `Rezei o dia ${dia}`}
            </BotaoRezei>
          )}
        </>
      )}
    </div>
  );
}
