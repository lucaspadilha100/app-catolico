import { Link } from "react-router-dom";
import { AudioLines, BookOpen, ChevronRight, Droplets, Flower2, Church, CircleDot, ListChecks, Share2 } from "lucide-react";
import { emAndamento } from "@/devocao/andamento";
import { NOME_DO_MOMENTO, momentoDaHora } from "@/voz/falas";
import { useDevocoesGuardadas } from "@/devocao/progresso";
import { diaLiturgico } from "@/liturgia/calendario";
import { somaDias, diaDaSemana, paraIso } from "@/liturgia/datas";
import { useEffect, useState } from "react";
import { caminhoDaImagem, santosDaDataMMDD } from "@/santos/santos";
import type { Santo } from "@/santos/tipos";
import { ehDiaDePreceito, NOME_DA_PENITENCIA, penitenciaDoDia } from "@/liturgia/preceitos";
import { usePreferencias } from "@/lib/preferencias";
import { NOME_DA_LEMBRANCA, aniversarioDeBatismo, lembrancasDeHoje, useFalecidos } from "@/vida/lembrancas";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { dataPorExtenso } from "@/liturgia/datas";
import { NOME_DA_COR, NOME_DO_GRAU, NOME_DO_TEMPO, type CorLiturgica } from "@/liturgia/calendario";
import { misteriosDoDia } from "@/liturgia/terco";
import { ProximaMissa } from "@/components/ProximaMissa";
import { NovidadesDasIgrejas } from "@/components/NovidadesDasIgrejas";
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
  const imagemDoSanto = (nome: string) => {
    const s = santosDoDia.find((x) => x.nome === nome);
    return s ? caminhoDaImagem(s) : null;
  };
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

  const linha = "flex min-h-16 items-center gap-3.5 rounded-2xl py-1.5 transition-colors hover:bg-cartao/70";
  const icone = "grid size-[3.25rem] shrink-0 place-items-center rounded-2xl bg-cartao text-tinta";
  const hora = new Date().getHours();
  const saudacao = hora < 5 || hora >= 18 ? "Boa noite" : hora < 12 ? "Bom dia" : "Boa tarde";
  const leituras = (missas?.[0]?.leituras ?? []).filter((x) => !x.ou && x.forma !== "breve" && ROTULO_CURTO[x.tipo]);
  const atalhos = [
    { para: "/rezar/agora", icone: AudioLines, titulo: "Rezar agora", detalhe: NOME_DO_MOMENTO[momentoDaHora(hora)] },
    { para: "/rezar/terco", icone: CircleDot, titulo: "Terço", detalhe: terco.nome.replace("Mistérios ", "") },
    { para: "/missas", icone: Church, titulo: "Missas", detalhe: "Perto de você" },
    { para: "/biblia", icone: BookOpen, titulo: "Bíblia", detalhe: "Continuar lendo" },
  ];
  const paraRezar = andamento.length + lembrancas.length + (anosDeBatismo ? 1 : 0);

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="titulo-pagina">{saudacao}</h1>
        <p className="mt-1.5 text-[0.9375rem] text-tinta-suave">{dataPorExtenso(l.data).replace(/ de \d{4}$/, "")}</p>
      </header>

      <div className="-mx-4 flex snap-x scroll-px-4 gap-2.5 overflow-x-auto px-4 [scrollbar-width:none]">
        {atalhos.map(({ para, icone: Icone, titulo, detalhe }) => (
          <Link key={para} to={para} className="flex size-[8.5rem] shrink-0 snap-start flex-col justify-between rounded-3xl bg-cartao p-4">
            <Icone className="size-7 text-tinta" aria-hidden />
            <span>
              <span className="block text-[1.0625rem] font-bold leading-tight tracking-[-0.01em] text-tinta">{titulo}</span>
              <span className="block truncate text-[0.8125rem] text-tinta-suave">{detalhe}</span>
            </span>
          </Link>
        ))}
      </div>

      <section className="rounded-[1.75rem] border border-borda-dia bg-dia p-5 text-sobre-dia">
        <div className="flex items-start justify-between gap-2">
          <p className="pt-1 text-xs font-bold uppercase tracking-[0.08em] opacity-80">Liturgia do dia</p>
          <button type="button" onClick={() => void enviarLiturgia()} aria-label="Compartilhar a liturgia" className="-mr-2 -mt-1 grid size-10 place-items-center rounded-full hover:bg-black/10">
            <Share2 className="size-5" aria-hidden />
          </button>
        </div>
        <h2 className="mt-1 text-[1.75rem] font-extrabold leading-[1.12] tracking-[-0.025em]">{l.titulo}</h2>
        {subtitulo && <p className="mt-1.5 text-[0.9375rem] font-medium opacity-90">{subtitulo}</p>}
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-black/10 px-3 py-1">Cor: {NOME_DA_COR[l.cor]}</span>
          <span className="rounded-full bg-black/10 px-3 py-1">Ano {l.cicloDominical}</span>
          {avisos.map((a) => (
            <span key={a} className="rounded-full bg-black/20 px-3 py-1">
              {a}
            </span>
          ))}
        </div>
        {missas === null ? (
          <div className="mt-5 h-24 animate-pulse rounded-2xl bg-black/10" />
        ) : (
          <ul className="mt-5 flex flex-col">
            {leituras.map((x) => (
              <li key={x.tipo + x.referencia} className="flex items-baseline justify-between gap-3 border-t border-current/15 py-2.5">
                <span className="text-[0.9375rem] opacity-80">{ROTULO_CURTO[x.tipo]}</span>
                <span className={`text-right ${x.tipo === "evangelho" ? "font-extrabold" : "font-semibold"}`}>{x.referencia}</span>
              </li>
            ))}
          </ul>
        )}
        <Link to="/liturgia" className="mt-3 flex min-h-12 items-center justify-center rounded-full bg-sobre-dia px-4 font-bold text-dia">
          Ler a liturgia
        </Link>
      </section>

      {missas && <ReflexaoResumo canonica={evangelhoDaMissa(missas[0])} para="/liturgia#reflexao" />}

      {minhaParoquia ? (
        <ProximaMissa />
      ) : (
        <Link to="/missas" className={linha}>
          <span className={icone}>
            <Church className="size-[1.375rem]" aria-hidden />
          </span>
          <span className="min-w-0 flex-1 font-bold text-tinta">Escolher minha paróquia</span>
          <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        </Link>
      )}

      {paraRezar > 0 && (
        <section className="flex flex-col gap-1">
          <h2 className="titulo-secao mb-2 px-1">Para rezar hoje</h2>
          {andamento.map((i) => (
            <Link key={i.para} to={i.para} className={linha}>
              <span className={icone}>
                <ListChecks className="size-[1.375rem]" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold leading-snug text-tinta">{i.titulo}</span>
                <span className="block text-[0.9375rem] text-tinta-suave">{i.detalhe}</span>
              </span>
              <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
            </Link>
          ))}
          {lembrancas.map((t) => (
            <Link key={t} to="/rezar/falecidos" className={linha}>
              <span className={icone}>
                <Flower2 className="size-[1.375rem]" aria-hidden />
              </span>
              <span className="min-w-0 flex-1 font-bold leading-snug text-tinta">{t}</span>
              <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
            </Link>
          ))}
          {anosDeBatismo && (
            <div className={linha}>
              <span className={icone}>
                <Droplets className="size-[1.375rem]" aria-hidden />
              </span>
              <span className="min-w-0 flex-1 font-bold text-tinta">
                {anosDeBatismo} {anosDeBatismo === 1 ? "ano" : "anos"} do seu batismo
              </span>
            </div>
          )}
        </section>
      )}

      {l.santos.length > 0 && (
        <section className="flex flex-col gap-1">
          <h2 className="titulo-secao mb-2 px-1">{l.santos.length > 1 ? "Santos do dia" : "Santo do dia"}</h2>
          {l.santos.map((s) => (
            <Link key={s.nome} to={linkDoSanto(s.nome)} className={linha}>
              {imagemDoSanto(s.nome) ? (
                <img src={imagemDoSanto(s.nome)!} alt="" loading="lazy" className="size-[4.25rem] shrink-0 rounded-[1.1rem] bg-cartao object-cover" />
              ) : (
                <span className={icone}>
                  <span className={`size-3 rounded-full ${COR_PONTO[s.cor]}`} aria-label={`Cor ${NOME_DA_COR[s.cor].toLowerCase()}`} />
                </span>
              )}
              <span className="min-w-0 flex-1">
                <span className="block font-bold leading-snug text-tinta">{s.nome}</span>
                <span className="text-[0.9375rem] text-tinta-suave">{NOME_DO_GRAU[s.grau]}</span>
              </span>
              <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
            </Link>
          ))}
        </section>
      )}

      <NovidadesDasIgrejas />

      <CartaoDaCampanha />
    </div>
  );
}
