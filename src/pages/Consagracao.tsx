import { useSearchParams } from "react-router-dom";
import { deIso, diaEMes, diferencaEmDias, hoje, paraIso, somaDias, dia as criarDia, type Dia } from "@/liturgia/datas";
import { FESTAS_DA_CONSAGRACAO } from "@/devocao/catalogo";
import { ordinal } from "@/devocao/calendario";
import { CHAVE_DA_CONSAGRACAO, DIAS_DA_CONSAGRACAO } from "@/devocao/andamento";
import { acompanhamentoVigente, alternarFeito, guardarAcompanhamento, useDevocoesGuardadas } from "@/devocao/progresso";
import { carregarConsagracao } from "@/devocao/conteudo";
import { Blocos } from "@/components/Blocos";
import { BotaoRezei, Cabecalho, Carregando, EscolhaDeDia, Indisponivel, Voltar, useConteudo } from "@/components/Devocao";

const TOTAL = DIAS_DA_CONSAGRACAO + 1;

function proximaFesta(mes: number, d: number, de: Dia): Dia {
  for (const ano of [de.getUTCFullYear(), de.getUTCFullYear() + 1]) {
    const festa = criarDia(ano, mes, d);
    if (diferencaEmDias(somaDias(festa, -DIAS_DA_CONSAGRACAO), de) >= 0) return festa;
  }
  return criarDia(de.getUTCFullYear() + 1, mes, d);
}

function Escolha() {
  const d = hoje();
  const festas = FESTAS_DA_CONSAGRACAO.map((f) => ({ ...f, data: proximaFesta(f.mes, f.dia, d) })).sort(
    (a, b) => a.data.getTime() - b.data.getTime(),
  );
  const comecar = (inicio: Dia, festa: string) =>
    guardarAcompanhamento(CHAVE_DA_CONSAGRACAO, { inicio: paraIso(inicio), feitos: [], festa });

  return (
    <div className="flex flex-col gap-3">
      <h2 className="px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">Dia da consagração</h2>
      <button
        type="button"
        onClick={() => comecar(d, "")}
        className="flex min-h-16 flex-col justify-center rounded-xl bg-destaque px-4 py-3 text-left text-sobre-destaque"
      >
        <span className="font-semibold">Começar hoje</span>
        <span className="text-sm opacity-90">Consagração em {diaEMes(somaDias(d, DIAS_DA_CONSAGRACAO))}</span>
      </button>
      {festas.map((f) => {
        const inicio = somaDias(f.data, -DIAS_DA_CONSAGRACAO);
        const faltam = diferencaEmDias(inicio, d);
        return (
          <button
            key={f.nome}
            type="button"
            onClick={() => comecar(inicio, f.nome)}
            className="flex min-h-16 flex-col justify-center rounded-xl border border-borda bg-cartao px-4 py-3 text-left transition-colors hover:border-destaque-texto/40"
          >
            <span className="font-leitura text-[1.05rem] font-medium text-marca">
              {f.nome}, {diaEMes(f.data)}
            </span>
            <span className="text-sm text-tinta-suave">{faltam === 0 ? "Começa hoje" : `Começa em ${diaEMes(inicio)}`}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function Consagracao() {
  useDevocoesGuardadas();
  const [params, setParams] = useSearchParams();
  const conteudo = useConteudo(carregarConsagracao, "consagracao");
  const d = hoje();
  const a = acompanhamentoVigente(CHAVE_DA_CONSAGRACAO, TOTAL, d);
  const inicio = a ? deIso(a.inicio)! : null;
  const hojeNa = inicio ? diferencaEmDias(d, inicio) + 1 : 0;
  const diaDeHoje = hojeNa >= 1 && hojeNa <= TOTAL ? hojeNa : undefined;
  const pedido = Number(params.get("dia"));
  const dia = pedido >= 1 && pedido <= TOTAL ? pedido : Math.min(Math.max(hojeNa, 1), TOTAL);
  const feitos = a?.feitos ?? [];
  const concluida = feitos.includes(TOTAL);

  const apagar = () => window.confirm("Apagar a consagração marcada e os dias rezados?") && guardarAcompanhamento(CHAVE_DA_CONSAGRACAO, null);

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/rezar">Rezar</Voltar>
      <Cabecalho
        titulo="Consagração a Nossa Senhora"
        subtitulo={
          inicio ? `${a?.festa ? `${a.festa} · ` : ""}consagração em ${diaEMes(somaDias(inicio, DIAS_DA_CONSAGRACAO))}` : "São Luís Maria Grignion de Montfort"
        }
      />

      {!a || !inicio ? (
        <Escolha />
      ) : conteudo === null ? (
        <Carregando />
      ) : conteudo === "erro" ? (
        <Indisponivel />
      ) : (
        <>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-tinta">
              {concluida
                ? "Consagração feita"
                : hojeNa < 1
                  ? `Começa em ${diaEMes(inicio)}`
                  : `${feitos.length} de ${TOTAL} dias rezados`}
            </p>
            <EscolhaDeDia
              total={TOTAL}
              atual={dia}
              feitos={feitos}
              hoje={diaDeHoje}
              onChange={(x) => setParams(x === diaDeHoje ? {} : { dia: String(x) }, { replace: true })}
              rotulo={(x) => (x === TOTAL ? "Ato" : String(x))}
            />
          </div>

          {dia === TOTAL ? (
            <>
              <h2 className="font-leitura text-2xl font-semibold leading-snug text-marca">{conteudo.ato.titulo}</h2>
              <Blocos blocos={conteudo.ato.blocos} />
            </>
          ) : (
            (() => {
              const etapa = conteudo.etapas[dia - 1]!;
              const periodo = conteudo.periodos.find((p) => dia >= p.de && dia <= p.ate);
              return (
                <>
                  <div>
                    {periodo && <p className="text-sm font-medium text-tinta-suave">{periodo.nome}</p>}
                    <h2 className="mt-1 font-leitura text-2xl font-semibold leading-snug text-marca">{etapa.titulo}</h2>
                  </div>
                  <Blocos blocos={etapa.blocos} />
                  {periodo && (
                    <div className="border-t border-borda pt-5">
                      <Blocos blocos={periodo.oracoes} />
                    </div>
                  )}
                </>
              );
            })()
          )}

          {hojeNa >= dia && (
            <BotaoRezei feito={feitos.includes(dia)} onClick={() => alternarFeito(CHAVE_DA_CONSAGRACAO, inicio, dia)}>
              {feitos.includes(dia) ? (dia === TOTAL ? "Consagração feita" : `${ordinal(dia)} dia rezado`) : dia === TOTAL ? "Fiz a consagração" : `Rezei o ${ordinal(dia)} dia`}
            </BotaoRezei>
          )}
          <button
            type="button"
            onClick={apagar}
            className="mx-auto min-h-11 px-4 text-sm font-medium text-tinta-suave underline-offset-4 hover:underline"
          >
            Escolher outra data
          </button>
        </>
      )}
    </div>
  );
}
