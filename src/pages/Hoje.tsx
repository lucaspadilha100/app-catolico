import { Link } from "react-router-dom";
import { BookOpenText, ChevronRight, Droplets, Flower2, Church, Sparkles, CircleDot, ListChecks } from "lucide-react";
import { emAndamento } from "@/devocao/andamento";
import { useDevocoesGuardadas } from "@/devocao/progresso";
import { diaLiturgico } from "@/liturgia/calendario";
import { somaDias, diaDaSemana, paraIso } from "@/liturgia/datas";
import { useEffect, useState } from "react";
import { santosDaDataMMDD } from "@/santos/santos";
import type { Santo } from "@/santos/tipos";
import { ehDiaDePreceito, NOME_DA_PENITENCIA, penitenciaDoDia } from "@/liturgia/preceitos";
import { usePreferencias } from "@/lib/preferencias";
import { NOME_DA_LEMBRANCA, aniversarioDeBatismo, lembrancasDeHoje, useFalecidos } from "@/vida/lembrancas";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { dataPorExtenso } from "@/liturgia/datas";
import { NOME_DA_COR, NOME_DO_GRAU, NOME_DO_TEMPO, type CorLiturgica } from "@/liturgia/calendario";
import { misteriosDoDia } from "@/liturgia/terco";
import { Cartao, TituloCartao, EmPreparacao } from "@/components/Cartao";
import type { TipoLeitura } from "@/liturgia/lecionario";
import { useLeituras } from "@/lib/useLeituras";
import { ReflexaoResumo, evangelhoDaMissa } from "@/components/Reflexao";

const COR_PONTO: Record<CorLiturgica, string> = {
  verde: "bg-[#2e7a4d]",
  roxo: "bg-[#64398f]",
  rosa: "bg-[#b4507a]",
  vermelho: "bg-[#a9271f]",
  branco: "bg-[#e6dcc8] ring-1 ring-[#c9a13b]",
};

const ROTULO_CURTO: Partial<Record<TipoLeitura, string>> = {
  primeira: "1ª leitura",
  salmo: "Salmo",
  segunda: "2ª leitura",
  evangelho: "Evangelho",
};

export default function Hoje() {
  useDevocoesGuardadas();
  const l = useDiaLiturgico();
  const andamento = emAndamento(l.data).slice(0, 4);
  const { diocese, batismo } = usePreferencias().preferencias;
  const [falecidos] = useFalecidos();
  const lembrancas = [
    ...lembrancasDeHoje(falecidos, l.data).map(({ falecido, lembranca }) =>
      lembranca.tipo === "aniversario"
        ? `${lembranca.anos} ${lembranca.anos === 1 ? "ano" : "anos"} do falecimento de ${falecido.nome}`
        : `${NOME_DA_LEMBRANCA[lembranca.tipo]} do falecimento de ${falecido.nome}`,
    ),
  ];
  const anosDeBatismo = aniversarioDeBatismo(batismo, l.data);
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
  const linkDoSanto = (nome: string) => {
    const s = santosDoDia.find((x) => x.nome === nome);
    return s ? `/santos/${s.id}` : `/santos?dia=${mmdd}`;
  };
  const amanha = diaLiturgico(somaDias(l.data, 1), diocese);
  const avisos = [
    ehDiaDePreceito(l) && diaDaSemana(l.data) !== 0 ? "Hoje: missa obrigatória" : "",
    ehDiaDePreceito(amanha) && diaDaSemana(amanha.data) !== 0 ? "Amanhã: missa obrigatória" : "",
    penitenciaDoDia(l) === "jejum-e-abstinencia" ? `Hoje: ${NOME_DA_PENITENCIA["jejum-e-abstinencia"].toLowerCase()}` : "",
    penitenciaDoDia(amanha) === "jejum-e-abstinencia" ? `Amanhã: ${NOME_DA_PENITENCIA["jejum-e-abstinencia"].toLowerCase()}` : "",
  ].filter(Boolean);
  const terco = misteriosDoDia(l.data);
  const missas = useLeituras(l);
  const memoria = l.celebracao?.grau === "memoria" ? l.celebracao : null;
  const grau = l.celebracao && !memoria ? NOME_DO_GRAU[l.celebracao.grau] : "";
  const subtitulo = memoria
    ? `Memória de ${memoria.nome}`
    : [grau, l.celebracao ? NOME_DO_TEMPO[l.tempo] : ""].filter(Boolean).join(" · ");

  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-3xl border border-borda-dia bg-dia p-6 text-sobre-dia shadow-sm">
        <p className="text-sm font-medium opacity-90">{dataPorExtenso(l.data)}</p>
        <h1 className="mt-2 font-leitura text-2xl font-semibold leading-snug sm:text-3xl">{l.titulo}</h1>
        {subtitulo && <p className="mt-2 text-sm font-medium opacity-90">{subtitulo}</p>}
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-black/10 px-3 py-1">Cor: {NOME_DA_COR[l.cor]}</span>
          <span className="rounded-full bg-black/10 px-3 py-1">Ano {l.cicloDominical}</span>
          <span className="rounded-full bg-black/10 px-3 py-1">Ano {l.cicloFerial === "I" ? "ímpar" : "par"}</span>
          {avisos.map((a) => (
            <span key={a} className="rounded-full bg-black/20 px-3 py-1">
              {a}
            </span>
          ))}
        </div>
      </section>

      <Cartao>
        <TituloCartao icone={BookOpenText}>Liturgia do dia</TituloCartao>
        {missas === null ? (
          <div className="mt-3 h-20 animate-pulse rounded-xl bg-marca-fundo" />
        ) : (
          <ul className="mt-3 grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-2">
            {(missas[0]?.leituras ?? [])
              .filter((x) => !x.ou && x.forma !== "breve" && x.tipo !== "aclamacao" && x.tipo !== "sequencia" && x.tipo !== "procissao")
              .map((x) => (
                <li key={x.tipo + x.referencia} className="col-span-2 grid grid-cols-subgrid items-baseline">
                  <span className="text-sm text-tinta-suave">{ROTULO_CURTO[x.tipo]}</span>
                  <span className={`font-leitura ${x.tipo === "evangelho" ? "font-semibold text-marca" : ""}`}>
                    {x.referencia}
                  </span>
                </li>
              ))}
          </ul>
        )}
        <Link
          to="/liturgia"
          className="mt-5 flex min-h-12 items-center justify-center rounded-xl border border-borda bg-papel px-4 font-semibold text-destaque-texto"
        >
          Ver a liturgia completa
        </Link>
      </Cartao>

      {missas && <ReflexaoResumo canonica={evangelhoDaMissa(missas[0])} para="/liturgia#reflexao" />}

      <Cartao>
        <TituloCartao icone={CircleDot}>Terço de hoje</TituloCartao>
        <p className="mt-3 font-leitura text-xl font-semibold text-marca">{terco.nome}</p>
        <ol className="mt-3 flex flex-col gap-2">
          {terco.misterios.map((m, i) => (
            <li key={m} className="flex gap-3">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-marca-fundo text-xs font-semibold text-destaque-texto">
                {i + 1}
              </span>
              <span>{m}</span>
            </li>
          ))}
        </ol>
        <Link
          to="/rezar/terco"
          className="mt-5 flex min-h-12 items-center justify-center rounded-xl bg-destaque px-4 font-semibold text-sobre-destaque"
        >
          Rezar o terço
        </Link>
      </Cartao>

      {lembrancas.length > 0 && (
        <Cartao>
          <TituloCartao icone={Flower2}>Pelos falecidos</TituloCartao>
          <ul className="mt-3 flex flex-col gap-1.5">
            {lembrancas.map((t) => (
              <li key={t} className="font-leitura text-[1.05rem] text-marca">
                {t}
              </li>
            ))}
          </ul>
          <Link to="/rezar/falecidos" className="mt-4 flex min-h-12 items-center justify-center rounded-xl border border-borda bg-papel px-4 font-semibold text-destaque-texto">
            Rezar por eles
          </Link>
        </Cartao>
      )}

      {anosDeBatismo && (
        <Cartao>
          <TituloCartao icone={Droplets}>Aniversário do seu batismo</TituloCartao>
          <p className="mt-3 font-leitura text-xl font-semibold text-marca">
            {anosDeBatismo} {anosDeBatismo === 1 ? "ano" : "anos"} de batizado
          </p>
        </Cartao>
      )}

      {andamento.length > 0 && (
        <Cartao>
          <TituloCartao icone={ListChecks}>Em andamento</TituloCartao>
          <ul className="mt-2 flex flex-col divide-y divide-borda">
            {andamento.map((i) => (
              <li key={i.para}>
                <Link to={i.para} className="flex min-h-14 items-center gap-3 py-2.5">
                  <span className="min-w-0 flex-1">
                    <span className="block font-leitura text-[1.05rem] font-semibold leading-snug text-marca">{i.titulo}</span>
                    <span className="text-sm text-tinta-suave">{i.detalhe}</span>
                  </span>
                  <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </Cartao>
      )}

      {l.santos.length > 0 && (
        <Cartao>
          <TituloCartao icone={Sparkles}>{l.santos.length > 1 ? "Santos do dia" : "Santo do dia"}</TituloCartao>
          <ul className="mt-3 flex flex-col divide-y divide-borda">
            {l.santos.map((s) => (
              <li key={s.nome}>
                <Link
                  to={linkDoSanto(s.nome)}
                  className="flex items-start gap-3 py-2.5"
                >
                <span
                  className={`mt-1.5 size-2.5 shrink-0 rounded-full ${COR_PONTO[s.cor]}`}
                  aria-label={`Cor ${NOME_DA_COR[s.cor].toLowerCase()}`}
                />
                <span className="min-w-0 flex-1">
                  <span className="block font-leitura text-[1.05rem] font-semibold leading-snug text-marca">{s.nome}</span>
                  <span className="text-sm text-tinta-suave">{NOME_DO_GRAU[s.grau]}</span>
                </span>
                <ChevronRight className="mt-1 size-5 shrink-0 text-tinta-suave" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </Cartao>
      )}

      <Cartao>
        <div className="flex items-center justify-between gap-3">
          <TituloCartao icone={Church}>Minha paróquia</TituloCartao>
          <EmPreparacao />
        </div>
      </Cartao>
    </div>
  );
}
