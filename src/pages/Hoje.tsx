import { Link } from "react-router-dom";
import { AudioLines, BookOpenText, ChevronRight, UserRound, Droplets, Flower2, Church, CircleDot, GraduationCap, Image, ListChecks, NotebookPen, Share2 } from "lucide-react";
import { emAndamento } from "@/devocao/andamento";
import { NOME_DO_MOMENTO, momentoDaHora } from "@/voz/falas";
import { useDevocoesGuardadas } from "@/devocao/progresso";
import { diaLiturgico } from "@/liturgia/calendario";
import { somaDias, diaDaSemana, paraIso } from "@/liturgia/datas";
import { useEffect, useState } from "react";
import { caminhoDaImagem, focoDaImagem, santosDaDataMMDD, santosParaConhecer, seloDoSanto } from "@/santos/santos";
import type { Santo } from "@/santos/tipos";
import { ehDiaDePreceito, NOME_DA_PENITENCIA, penitenciaDoDia } from "@/liturgia/preceitos";
import { paroquiasFavoritas, usePreferencias } from "@/lib/preferencias";
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
import { arteDoEvangelho, caminhoDaArte, type ArteDoEvangelho } from "@/liturgia/arte";
import { BotaoOuvir, emPartes } from "@/components/Ouvir";
import { OracoesDoDia } from "@/components/OracoesDoDia";
import { NovenasDoMes } from "@/components/NovenasDoMes";
import { ehTempoPascal } from "@/oracao/oracoes";
import { textoDaReferencia } from "@/biblia/texto";
import { fraseDoEvangelho, imagemDoEvangelho } from "@/liturgia/imagemDoEvangelho";

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
  const preferencias = usePreferencias().preferencias;
  const { diocese, batismo } = preferencias;
  const temParoquia = paroquiasFavoritas(preferencias).length > 0;
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
  const [conhecer, setConhecer] = useState<Santo[]>([]);
  useEffect(() => {
    let ativo = true;
    santosParaConhecer(paraIso(l.data), 8)
      .then((x) => ativo && setConhecer(x))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [l.data]);
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

  async function enviarLiturgia() {
    const leituras = (missas?.[0]?.leituras ?? []).filter((x) => !x.ou && x.forma !== "breve" && ROTULO_CURTO[x.tipo]);
    const iso = paraIso(l.data);
    const partes = [
      `Liturgia de ${dataPorExtenso(l.data).toLowerCase()}`,
      l.titulo,
      "",
      ...leituras.map((x) => `${ROTULO_CURTO[x.tipo]}: ${x.referencia}`),
    ];
    if (canonica) {
      const trechos = await textoDaReferencia(canonica).catch(() => []);
      const textoDoEvangelho = trechos.flatMap((t) => t.versiculos.map((v) => v.texto)).join(" ");
      if (textoDoEvangelho) partes.push("", `Evangelho (${evangelho?.referencia ?? ""})`, textoDoEvangelho);
    }
    const texto = partes.join("\n");
    const url = `${enderecoPublico()}/liturgia/${iso}`;
    const r = await compartilhar({ titulo: "Liturgia do dia", texto, url });
    if (r === "erro") window.open(`https://wa.me/?text=${encodeURIComponent(`${texto}\n\n${url}`)}`, "_blank", "noopener");
  }

  async function enviarStories() {
    if (!canonica || gerando) return;
    setGerando(true);
    try {
      const trechos = await textoDaReferencia(canonica).catch(() => []);
      const frase = fraseDoEvangelho(trechos.flatMap((t) => t.versiculos.map((v) => v.texto)), arte ? 170 : 220);
      const blob = await imagemDoEvangelho({ arte, data: dataPorExtenso(l.data), referencia: evangelho?.referencia ?? "", frase });
      await compartilhar({ titulo: "Evangelho do dia", imagem: { blob, nome: `evangelho-${paraIso(l.data)}.png` } });
    } catch {
    } finally {
      setGerando(false);
      setCompartilhando(false);
    }
  }

  const linha = "flex min-h-16 items-center gap-3.5 rounded-2xl py-1.5 transition-colors hover:bg-cartao/70";
  const icone = "grid size-[3.25rem] shrink-0 place-items-center rounded-2xl bg-cartao text-tinta";
  const hora = new Date().getHours();
  const saudacao = hora < 5 || hora >= 18 ? "Boa noite" : hora < 12 ? "Bom dia" : "Boa tarde";
  const atalhos = [
    { para: "/rezar/agora", icone: AudioLines, titulo: "Rezar agora", detalhe: NOME_DO_MOMENTO[momentoDaHora(hora)] },
    { para: "/rezar/terco", icone: CircleDot, titulo: "Terço", detalhe: terco.nome.replace("Mistérios ", "") },
    { para: "/missas", icone: Church, titulo: "Missas", detalhe: "Perto de você" },
    { para: "/liturgia", icone: BookOpenText, titulo: "Liturgia", detalhe: "Leituras do dia" },
  ];
  const paraRezar = andamento.length + lembrancas.length + (anosDeBatismo ? 1 : 0);
  const canonica = evangelhoDaMissa(missas?.[0]);
  const evangelho = missas?.[0]?.leituras.find((x) => x.tipo === "evangelho" && !x.ou && x.forma !== "breve");
  const [arte, setArte] = useState<ArteDoEvangelho | null>(null);
  const [compartilhando, setCompartilhando] = useState(false);
  const [gerando, setGerando] = useState(false);
  useEffect(() => {
    let ativo = true;
    void arteDoEvangelho(canonica).then((a) => ativo && setArte(a));
    return () => {
      ativo = false;
    };
  }, [canonica]);
  const ouvirEvangelho = async () => {
    if (!canonica) return [];
    const trechos = await textoDaReferencia(canonica);
    return [`Evangelho. ${evangelho?.referencia ?? ""}.`, ...emPartes(trechos.flatMap((t) => t.versiculos.map((v) => v.texto)))];
  };
  const doDia = l.celebracao?.nome ?? NOME_DO_TEMPO[l.tempo];

  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center justify-between">
        <span className="simbolo w-10 text-marca" aria-hidden />
        <Link to="/conta" aria-label="Minha conta" className="grid size-11 place-items-center rounded-full bg-cartao text-tinta">
          <UserRound className="size-5" aria-hidden />
        </Link>
      </div>

      <header className="-mt-2">
        <h1 className="titulo-pagina">{saudacao}</h1>
        <p className="mt-2 flex items-center gap-2 text-[0.9375rem] text-tinta-suave">
          <span className={`size-2.5 shrink-0 rounded-full ${COR_PONTO[l.cor]}`} aria-label={`Cor ${NOME_DA_COR[l.cor].toLowerCase()}`} />
          <span className="min-w-0">{`${dataPorExtenso(l.data).replace(/-feira/, "").replace(/ de \d{4}$/, "")} · ${doDia}`}</span>
        </p>
        {avisos.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {avisos.map((a) => (
              <span key={a} className="rounded-full bg-primario px-3 py-1.5 text-xs font-bold text-sobre-primario">
                {a}
              </span>
            ))}
          </div>
        )}
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

      {missas === null ? (
        <div className="h-[26rem] animate-pulse rounded-[1.75rem] bg-cartao" />
      ) : (
        <section className={`relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[1.75rem] ${arte ? "text-white" : "border border-borda-dia bg-dia text-sobre-dia"}`}>
          {arte && (
            <>
              <img src={caminhoDaArte(arte)} alt={arte.obra} className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 from-30% to-black/85 to-80%" aria-hidden />
            </>
          )}
          <button
            type="button"
            onClick={() => setCompartilhando(true)}
            aria-label="Compartilhar a liturgia"
            className={`absolute right-3 top-3 grid size-11 place-items-center rounded-full ${arte ? "bg-black/30 text-white backdrop-blur" : "bg-black/10"}`}
          >
            <Share2 className="size-5" aria-hidden />
          </button>
          <div className="relative flex flex-col gap-2 p-6">
            <span className="text-xs font-bold uppercase tracking-[0.08em] opacity-85">Evangelho do dia</span>
            <h2 className="text-[2rem] font-extrabold leading-[1.05] tracking-[-0.03em]">{arte?.titulo ?? l.titulo}</h2>
            {evangelho && <span className="text-[0.9375rem] opacity-90">{evangelho.referencia}</span>}
            <div className="mt-3 flex gap-2.5">
              <Link to="/liturgia?aba=evangelho" className={`flex h-11 items-center rounded-full px-6 text-[0.9375rem] font-bold ${arte ? "bg-white text-[#111113]" : "bg-sobre-dia text-dia"}`}>
                Ler
              </Link>
              {canonica && (
                <BotaoOuvir
                  titulo={arte?.titulo ?? "Evangelho do dia"}
                  partes={ouvirEvangelho}
                  className={`flex h-11 items-center gap-2 rounded-full px-5 text-[0.9375rem] font-semibold ${arte ? "bg-white/20 text-white backdrop-blur" : "bg-black/10"}`}
                />
              )}
            </div>
          </div>
        </section>
      )}

      {missas && <ReflexaoResumo canonica={evangelhoDaMissa(missas[0])} para="/liturgia#reflexao" />}

      {temParoquia ? (
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

      <OracoesDoDia pascal={ehTempoPascal(l.tempo)} />

      <NovenasDoMes data={l.data} />

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

      {conhecer.length > 0 && (
        <section>
          <div className="mb-2 flex items-baseline justify-between">
            <h2 className="titulo-secao px-1">Conheça os santos</h2>
            <Link to="/santos" className="px-1 text-[0.9375rem] font-semibold text-destaque-texto">
              Ver todos
            </Link>
          </div>
          <div className="-mx-4 flex snap-x scroll-px-4 gap-2.5 overflow-x-auto px-4 [scrollbar-width:none]">
            {conhecer.map((s) => (
              <Link key={s.id} to={`/santos/${s.id}`} className="w-36 shrink-0 snap-start">
                <img src={caminhoDaImagem(s)!} alt="" loading="lazy" className="h-44 w-full rounded-3xl bg-cartao object-cover" style={{ objectPosition: focoDaImagem(s) }} />
                <span className="mt-2 block px-0.5 text-[0.9375rem] font-bold leading-snug text-tinta">{s.nome.split(",")[0]}</span>
                {seloDoSanto(s) && <span className="block px-0.5 text-[0.8125rem] text-tinta-suave">{seloDoSanto(s)}</span>}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="flex flex-col gap-1">
        <h2 className="titulo-secao mb-2 px-1">Para você</h2>
        <Link to="/diario" className={linha}>
          <span className={icone}>
            <NotebookPen className="size-[1.375rem]" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-bold text-tinta">Diário espiritual</span>
            <span className="block text-[0.9375rem] text-tinta-suave">Diário e propósitos</span>
          </span>
          <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        </Link>
        <Link to="/cursos" className={linha}>
          <span className={icone}>
            <GraduationCap className="size-[1.375rem]" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-bold text-tinta">Cursos de formação</span>
            <span className="block text-[0.9375rem] text-tinta-suave">A fé passo a passo</span>
          </span>
          <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        </Link>
        <Link to="/santinhos" className={linha}>
          <span className={icone}>
            <Image className="size-[1.375rem]" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-bold text-tinta">Santinhos e convites</span>
            <span className="block text-[0.9375rem] text-tinta-suave">Batismo, comunhão, crisma, casamento</span>
          </span>
          <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        </Link>
      </section>

      <NovidadesDasIgrejas />

      <CartaoDaCampanha />

      {compartilhando && (
        <div className="fixed inset-0 z-30" onClick={() => !gerando && setCompartilhando(false)}>
          <div className="absolute inset-0 bg-black/40" aria-hidden />
          <div
            role="dialog"
            aria-label="Compartilhar o Evangelho"
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 mx-auto flex max-w-xl flex-col gap-1 rounded-t-3xl bg-papel p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
          >
            <button
              type="button"
              onClick={() => {
                setCompartilhando(false);
                void enviarLiturgia();
              }}
              className="flex min-h-14 items-center gap-3.5 rounded-2xl px-3 text-left font-semibold text-tinta hover:bg-cartao"
            >
              <Share2 className="size-5 shrink-0 text-destaque-texto" aria-hidden />
              Enviar com o texto
            </button>
            <button
              type="button"
              onClick={() => void enviarStories()}
              disabled={gerando || !canonica}
              className="flex min-h-14 items-center gap-3.5 rounded-2xl px-3 text-left font-semibold text-tinta hover:bg-cartao disabled:opacity-60"
            >
              <Image className="size-5 shrink-0 text-destaque-texto" aria-hidden />
              {gerando ? "Gerando a imagem" : "Imagem para o Stories"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
