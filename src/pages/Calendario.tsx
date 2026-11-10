import { useEffect, useMemo, useState } from "react";
import { santosDaDataMMDD } from "@/santos/santos";
import type { Santo } from "@/santos/tipos";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { dataPorExtenso, deIso, dia, diaDaSemana, hoje, mesmoDia, paraIso, somaDias } from "@/liturgia/datas";
import { diaLiturgico, NOME_DA_COR, NOME_DO_GRAU, type CorLiturgica, type DiaLiturgico } from "@/liturgia/calendario";
import { ehDiaDePreceito, NOME_DA_PENITENCIA, penitenciaDoDia } from "@/liturgia/preceitos";
import { usePreferencias } from "@/lib/preferencias";
import { Voltar } from "@/components/Voltar";
import { Cartao, TituloPagina } from "@/components/Cartao";

const MESES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const SEMANA = ["D", "S", "T", "Q", "Q", "S", "S"];

export const COR_DA_BOLINHA: Record<CorLiturgica, string> = {
  verde: "bg-[#2e7a4d]",
  roxo: "bg-[#64398f]",
  rosa: "bg-[#b4507a]",
  vermelho: "bg-[#a9271f]",
  branco: "bg-[#e6dcc8] ring-1 ring-[#c9a13b]",
};

const GRAUS_DO_MES = new Set(["solenidade", "festa", "festa-do-senhor", "memoria", "dia-santo"]);

function Marcas({ l }: { l: DiaLiturgico }) {
  const preceito = ehDiaDePreceito(l) && diaDaSemana(l.data) !== 0;
  const penitencia = penitenciaDoDia(l);
  return (
    <span className="flex h-1.5 items-center gap-0.5">
      {preceito && <span className="size-1.5 rounded-full bg-tinta" />}
      {penitencia === "jejum-e-abstinencia" && <span className="h-1.5 w-3 rounded-full bg-[#64398f]" />}
    </span>
  );
}

export default function Calendario() {
  const { diocese } = usePreferencias().preferencias;
  const [params, setParams] = useSearchParams();
  const h = hoje();
  const escolhido = deIso(params.get("dia") ?? "") ?? h;
  const ano = escolhido.getUTCFullYear();
  const mes = escolhido.getUTCMonth() + 1;
  const primeiro = dia(ano, mes, 1);

  const dias = useMemo(() => {
    const lista: DiaLiturgico[] = [];
    for (let d = primeiro; d.getUTCMonth() === mes - 1; d = somaDias(d, 1)) lista.push(diaLiturgico(d, diocese));
    return lista;
  }, [ano, mes, diocese]);

  const l = dias[escolhido.getUTCDate() - 1]!;
  const mmdd = paraIso(l.data).slice(5).replace("-", "");
  const [santosDoDia, setSantosDoDia] = useState<Santo[]>([]);
  useEffect(() => {
    let ativo = true;
    santosDaDataMMDD(mmdd)
      .then((x) => ativo && setSantosDoDia(x))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [mmdd]);
  const ir = (d: Date) => setParams(mesmoDia(d, h) ? {} : { dia: paraIso(d) }, { replace: true });
  const mesVizinho = (n: number) => ir(dia(mes + n > 12 ? ano + 1 : mes + n < 1 ? ano - 1 : ano, ((mes - 1 + n + 12) % 12) + 1, 1));
  const preceito = ehDiaDePreceito(l);
  const penitencia = penitenciaDoDia(l);
  const doMes = dias.filter((x) => x.celebracao && GRAUS_DO_MES.has(x.celebracao.grau));

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Voltar para="/mais">Mais</Voltar>
        <TituloPagina>Calendário</TituloPagina>
      </div>

      <Cartao className="p-3 sm:p-5">
        <div className="mb-3 flex items-center justify-between">
          <button type="button" onClick={() => mesVizinho(-1)} aria-label="Mês anterior" className="grid size-11 place-items-center rounded-xl text-tinta-suave">
            <ChevronLeft className="size-6" aria-hidden />
          </button>
          <h2 className="font-leitura text-xl font-semibold text-marca">
            {MESES[mes - 1]} de {ano}
          </h2>
          <button type="button" onClick={() => mesVizinho(1)} aria-label="Próximo mês" className="grid size-11 place-items-center rounded-xl text-tinta-suave">
            <ChevronRight className="size-6" aria-hidden />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {SEMANA.map((s, i) => (
            <span key={i} className="pb-1 text-xs font-semibold text-tinta-suave">
              {s}
            </span>
          ))}
          {Array.from({ length: diaDaSemana(primeiro) }, (_, i) => (
            <span key={`v${i}`} />
          ))}
          {dias.map((x) => {
            const n = x.data.getUTCDate();
            const sel = mesmoDia(x.data, escolhido);
            const ehHoje = mesmoDia(x.data, h);
            const forte = x.celebracao?.grau === "solenidade" || diaDaSemana(x.data) === 0;
            return (
              <button
                key={n}
                type="button"
                onClick={() => ir(x.data)}
                aria-pressed={sel}
                aria-label={`${n}: ${x.titulo}`}
                className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[0.95rem] ${
                  sel ? "bg-destaque text-sobre-destaque" : ehHoje ? "bg-marca-fundo" : ""
                } ${forte ? "font-bold" : ""}`}
              >
                {n}
                <span className="flex items-center gap-0.5">
                  <span className={`size-2 rounded-full ${COR_DA_BOLINHA[x.cor]}`} />
                  <Marcas l={x} />
                </span>
              </button>
            );
          })}
        </div>
      </Cartao>

      <Cartao>
        <p className="text-sm font-medium text-tinta-suave">{dataPorExtenso(l.data)}</p>
        <h2 className="mt-1 font-leitura text-2xl font-semibold leading-snug text-marca">{l.titulo}</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="flex items-center gap-1.5 rounded-full bg-marca-fundo px-3 py-1">
            <span className={`size-2 rounded-full ${COR_DA_BOLINHA[l.cor]}`} /> {NOME_DA_COR[l.cor]}
          </span>
          {l.celebracao && NOME_DO_GRAU[l.celebracao.grau] && <span className="rounded-full bg-marca-fundo px-3 py-1">{NOME_DO_GRAU[l.celebracao.grau]}</span>}
          {preceito && <span className="rounded-full bg-tinta px-3 py-1 text-papel">Missa obrigatória</span>}
          {penitencia && <span className="rounded-full bg-[#64398f] px-3 py-1 text-white">{NOME_DA_PENITENCIA[penitencia]}</span>}
        </div>
        {l.santos.length > 0 && (
          <ul className="mt-3 flex flex-col divide-y divide-borda">
            {l.santos.map((s) => {
              const historia = santosDoDia.find((x) => x.nome === s.nome);
              const conteudo = (
                <>
                  <span className={`mt-2 size-2 shrink-0 rounded-full ${COR_DA_BOLINHA[s.cor]}`} />
                  <span className="min-w-0 flex-1">
                    {s.nome}
                    {NOME_DO_GRAU[s.grau] && <span className="text-sm text-tinta-suave"> · {NOME_DO_GRAU[s.grau]}</span>}
                  </span>
                </>
              );
              return (
                <li key={s.nome}>
                  {historia ? (
                    <Link to={`/santos/${historia.id}`} className="flex min-h-12 items-start gap-2 py-2.5">
                      {conteudo}
                      <ChevronRight className="mt-0.5 size-5 shrink-0 text-tinta-suave" aria-hidden />
                    </Link>
                  ) : (
                    <div className="flex items-start gap-2 py-2.5">{conteudo}</div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
        <Link
          to={mesmoDia(l.data, h) ? "/liturgia" : `/liturgia?data=${paraIso(l.data)}`}
          className="mt-5 flex min-h-12 items-center justify-center rounded-xl bg-destaque px-4 font-semibold text-sobre-destaque"
        >
          Liturgia do dia
        </Link>
      </Cartao>

      {doMes.length > 0 && (
        <section>
          <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">Festas do mês</h2>
          <ul className="flex flex-col divide-y divide-borda rounded-2xl border border-borda bg-cartao">
            {doMes.map((x) => (
              <li key={paraIso(x.data)}>
                <button type="button" onClick={() => ir(x.data)} className="flex min-h-12 w-full items-start gap-3 px-4 py-2.5 text-left">
                  <span className="w-7 shrink-0 pt-0.5 text-right font-semibold text-tinta-suave">{x.data.getUTCDate()}</span>
                  <span className={`mt-2 size-2 shrink-0 rounded-full ${COR_DA_BOLINHA[x.cor]}`} />
                  <span className="min-w-0 flex-1">
                    <span className={`block leading-snug ${x.celebracao!.grau === "solenidade" ? "font-semibold text-marca" : ""}`}>{x.celebracao!.nome}</span>
                    <span className="text-sm text-tinta-suave">{NOME_DO_GRAU[x.celebracao!.grau] || "Comemoração"}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
