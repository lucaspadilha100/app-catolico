import { Link } from "react-router-dom";
import { BookOpenText, ChevronRight, Droplets, Flower2, Church, CircleDot, ListChecks, Share2 } from "lucide-react";
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
import { Cartao, LISTA, TituloCartao } from "@/components/Cartao";
import { ProximaMissa } from "@/components/ProximaMissa";
import { compartilhar, enderecoPublico } from "@/lib/nativo";
import { CartaoDaCampanha } from "@/components/Campanha";
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
  const { diocese, batismo, minhaParoquia } = usePreferencias().preferencias;
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

  async function enviarLiturgia() {
    const leituras = (missas?.[0]?.leituras ?? []).filter((x) => !x.ou && x.forma !== "breve" && ROTULO_CURTO[x.tipo]);
    const iso = paraIso(l.data);
    const texto = [
      `Liturgia de ${dataPorExtenso(l.data).toLowerCase()}`,
      l.titulo,
      "",
      ...leituras.map((x) => `${ROTULO_CURTO[x.tipo]}: ${x.referencia}`),
    ].join("\n");
    const url = `${enderecoPublico()}/liturgia/${iso}`;
    const r = await compartilhar({ titulo: "Liturgia do dia", texto, url });
    if (r === "erro") window.open(`https://wa.me/?text=${encodeURIComponent(`${texto}\n\n${url}`)}`, "_blank", "noopener");
  }

  const linha = "flex min-h-14 items-center gap-3 px-4 py-2.5 transition-colors hover:bg-marca-fundo/60";

  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-3xl border border-borda-dia bg-dia px-5 py-5 text-sobre-dia shadow-sm">
        <p className="text-sm font-medium opacity-90">{dataPorExtenso(l.data)}</p>
        <h1 className="mt-1.5 font-leitura text-2xl font-semibold leading-snug sm:text-3xl">{l.titulo}</h1>
        {subtitulo && <p className="mt-1.5 text-sm font-medium opacity-90">{subtitulo}</p>}
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-black/10 px-3 py-1">Cor: {NOME_DA_COR[l.cor]}</span>
          <span className="rounded-full bg-black/10 px-3 py-1">Ano {l.cicloDominical}</span>
          {avisos.map((a) => (
            <span key={a} className="rounded-full bg-black/20 px-3 py-1">
              {a}
            </span>
          ))}
        </div>
      </section>

      <ProximaMissa />

      <Cartao>
        <div className="flex items-center justify-between gap-2">
          <TituloCartao icone={BookOpenText}>Liturgia do dia</TituloCartao>
          <button type="button" onClick={() => void enviarLiturgia()} aria-label="Compartilhar a liturgia" className="-mr-2 grid size-10 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo">
            <Share2 className="size-5" aria-hidden />
          </button>
        </div>
        {missas === null ? (
          <div className="mt-3 h-20 animate-pulse rounded-xl bg-marca-fundo" />
        ) : (
          <ul className="mt-2 grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-2">
            {(missas[0]?.leituras ?? [])
              .filter((x) => !x.ou && x.forma !== "breve" && x.tipo !== "aclamacao" && x.tipo !== "sequencia" && x.tipo !== "procissao")
              .map((x) => (
                <li key={x.tipo + x.referencia} className="col-span-2 grid grid-cols-subgrid items-baseline">
                  <span className="text-sm text-tinta-suave">{ROTULO_CURTO[x.tipo]}</span>
                  <span className={`font-leitura ${x.tipo === "evangelho" ? "font-semibold text-marca" : ""}`}>{x.referencia}</span>
                </li>
              ))}
          </ul>
        )}
        <Link to="/liturgia" className="mt-4 flex min-h-12 items-center justify-center rounded-xl bg-destaque px-4 font-semibold text-sobre-destaque">
          Ler a liturgia
        </Link>
      </Cartao>

      {missas && <ReflexaoResumo canonica={evangelhoDaMissa(missas[0])} para="/liturgia#reflexao" />}

      <section>
        <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">Para rezar hoje</h2>
        <div className={LISTA}>
          <Link to="/rezar/terco" className={linha}>
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-marca-fundo text-destaque-texto">
              <CircleDot className="size-5" aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-medium text-tinta">Terço</span>
              <span className="block text-sm text-tinta-suave">{terco.nome}</span>
            </span>
            <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          </Link>
          {andamento.map((i) => (
            <Link key={i.para} to={i.para} className={linha}>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-marca-fundo text-destaque-texto">
                <ListChecks className="size-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium leading-snug text-tinta">{i.titulo}</span>
                <span className="block text-sm text-tinta-suave">{i.detalhe}</span>
              </span>
              <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
            </Link>
          ))}
          {lembrancas.map((t) => (
            <Link key={t} to="/rezar/falecidos" className={linha}>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-marca-fundo text-destaque-texto">
                <Flower2 className="size-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1 font-medium leading-snug text-tinta">{t}</span>
              <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
            </Link>
          ))}
          {anosDeBatismo && (
            <div className={linha}>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-marca-fundo text-destaque-texto">
                <Droplets className="size-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1 font-medium text-tinta">
                {anosDeBatismo} {anosDeBatismo === 1 ? "ano" : "anos"} do seu batismo
              </span>
            </div>
          )}
        </div>
      </section>

      {l.santos.length > 0 && (
        <section>
          <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">{l.santos.length > 1 ? "Santos do dia" : "Santo do dia"}</h2>
          <div className={LISTA}>
            {l.santos.map((s) => (
              <Link key={s.nome} to={linkDoSanto(s.nome)} className={linha}>
                <span className={`size-2.5 shrink-0 rounded-full ${COR_PONTO[s.cor]}`} aria-label={`Cor ${NOME_DA_COR[s.cor].toLowerCase()}`} />
                <span className="min-w-0 flex-1">
                  <span className="block font-leitura text-[1.05rem] font-semibold leading-snug text-marca">{s.nome}</span>
                  <span className="text-sm text-tinta-suave">{NOME_DO_GRAU[s.grau]}</span>
                </span>
                <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
              </Link>
            ))}
          </div>
        </section>
      )}

      <CartaoDaCampanha />

      {!minhaParoquia && (
        <Link to="/missas" className="flex min-h-14 items-center gap-3 rounded-2xl border border-borda bg-cartao px-4 py-3 shadow-sm">
          <Church className="size-6 shrink-0 text-destaque-texto" aria-hidden />
          <span className="min-w-0 flex-1 font-semibold text-tinta">Escolher minha paróquia</span>
          <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        </Link>
      )}
    </div>
  );
}
