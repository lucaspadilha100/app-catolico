import { useEffect, useMemo, useRef } from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import { deIso, hoje, paraIso, somaDias, diaDaSemana } from "@/liturgia/datas";
import { diaLiturgico, NOME_DA_COR, NOME_DO_GRAU, type CorLiturgica } from "@/liturgia/calendario";
import { NOME_DA_LEITURA, type Leitura, type Missa } from "@/liturgia/lecionario";
import { useLeituras } from "@/lib/useLeituras";
import { usePreferencias } from "@/lib/preferencias";
import { NotaDaTraducao, TextoDaLeitura } from "@/components/TextoBiblico";
import { Voltar } from "@/components/Voltar";
import { ReflexaoCompleta, evangelhoDaMissa } from "@/components/Reflexao";
import { BotaoOuvir, emPartes } from "@/components/Ouvir";
import { textoDaReferencia } from "@/biblia/texto";
import { livroPorCodigo } from "@/biblia/livros";
import { BotaoEnviar } from "@/components/BotaoEnviar";
import { textoDaLeituraParaEnviar } from "@/liturgia/enviar";

const ANUNCIO: Partial<Record<Leitura["tipo"], string>> = { primeira: "Primeira leitura", salmo: "Salmo responsorial", segunda: "Segunda leitura", evangelho: "Evangelho" };

async function partesDaMissa(m: Missa): Promise<string[]> {
  const r: string[] = [];
  for (const l of m.leituras) {
    if (l.ou || l.forma === "breve" || !l.canonica || !ANUNCIO[l.tipo]) continue;
    const trechos = await textoDaReferencia(l.canonica);
    const livro = livroPorCodigo(trechos[0]?.livro ?? "");
    const de = !livro || l.tipo === "salmo" ? "" : l.tipo === "evangelho" ? ` segundo São ${livro.nome}` : `. ${livro.nome}`;
    r.push(`${ANUNCIO[l.tipo]}${de}.`, ...emPartes(trechos.flatMap((t) => t.versiculos.map((v) => v.texto))));
  }
  return r;
}


const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const DIAS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const PONTO: Record<CorLiturgica, string> = {
  verde: "bg-[#2e7a4d]",
  roxo: "bg-[#64398f]",
  rosa: "bg-[#b4507a]",
  vermelho: "bg-[#a9271f]",
  branco: "bg-[#e6dcc8] ring-1 ring-[#c9a13b]",
};
const ABA: Partial<Record<Leitura["tipo"], string>> = { procissao: "Procissão", primeira: "1ª leitura", salmo: "Salmo", segunda: "2ª leitura", evangelho: "Evangelho" };

interface Grupo {
  chave: string;
  nome: string;
  leituras: Leitura[];
}

function grupos(m: Missa): Grupo[] {
  const r: Grupo[] = [];
  let antes: Leitura[] = [];
  for (const l of m.leituras) {
    if (l.tipo === "aclamacao" || l.tipo === "sequencia") {
      antes.push(l);
      continue;
    }
    if ((l.ou || l.forma === "breve") && r.length) {
      r[r.length - 1]!.leituras.push(l);
      continue;
    }
    const nome = ABA[l.tipo] ?? NOME_DA_LEITURA[l.tipo];
    r.push({ chave: l.tipo, nome, leituras: [...antes, l] });
    antes = [];
  }
  if (antes.length && r.length) r[r.length - 1]!.leituras.push(...antes);
  return r;
}

function rotulo(l: Leitura): string {
  if (l.ou) return "ou";
  if (l.forma === "breve") return "Forma breve";
  return NOME_DA_LEITURA[l.tipo];
}

function Leituras({ leituras, iso }: { leituras: Leitura[]; iso: string }) {
  return (
    <div className="flex flex-col gap-6">
      {leituras.map((l, i) => {
        const principal = !l.ou && l.forma !== "breve";
        return (
          <article key={`${l.tipo}-${i}`} className={principal ? "" : "-mt-3 rounded-2xl bg-cartao px-4 py-3"}>
            <p className={`text-xs font-bold uppercase tracking-[0.08em] ${principal ? "text-destaque-texto" : "text-tinta-suave"}`}>{rotulo(l)}</p>
            <p className={`mt-1 font-leitura ${principal ? "text-[1.35rem] font-semibold italic text-tinta" : "text-lg text-tinta"}`}>{l.referencia}</p>
            {l.canonica && principal && l.tipo !== "aclamacao" && (
              <>
                <TextoDaLeitura canonica={l.canonica} poema={l.tipo === "salmo"} />
                <BotaoEnviar
                  titulo={NOME_DA_LEITURA[l.tipo]}
                  rotulo={l.tipo === "evangelho" ? "Enviar o Evangelho" : "Enviar a leitura"}
                  montar={() => textoDaLeituraParaEnviar(l, iso)}
                  className="mt-4 bg-cartao"
                />
              </>
            )}
          </article>
        );
      })}
    </div>
  );
}

export default function Liturgia() {
  const [params, setParams] = useSearchParams();
  const { hash } = useLocation();
  const { data: dataDoCaminho } = useParams();
  const data = deIso(dataDoCaminho ?? params.get("data") ?? "") ?? hoje();
  const iso = paraIso(data);
  const { diocese } = usePreferencias().preferencias;
  const l = useMemo(() => diaLiturgico(deIso(iso)!, diocese), [iso, diocese]);
  const missas = useLeituras(l);
  const semana = useMemo(() => [-3, -2, -1, 0, 1, 2, 3].map((d) => diaLiturgico(somaDias(deIso(iso)!, d), diocese)), [iso, diocese]);

  const caminho = (d: Date) => (paraIso(d) === paraIso(hoje()) ? "/liturgia" : `/liturgia/${paraIso(d)}`);
  const grau = l.celebracao && l.celebracao.grau !== "memoria" ? NOME_DO_GRAU[l.celebracao.grau] : "";
  const indiceDaMissa = Math.min(Number(params.get("missa") ?? 0) || 0, (missas?.length ?? 1) - 1);
  const missa = missas?.[Math.max(indiceDaMissa, 0)];
  const abas = missa ? grupos(missa) : [];
  const pedida = hash === "#reflexao" ? "reflexao" : params.get("aba");
  const aba = pedida === "reflexao" ? "reflexao" : (abas.find((a) => a.chave === pedida) ?? abas[0])?.chave ?? "";
  const escolher = (chave: string, extra: Record<string, string> = {}) => {
    const n = new URLSearchParams(params);
    n.set("aba", chave);
    for (const [k, v] of Object.entries(extra)) n.set(k, v);
    setParams(n, { replace: true });
  };
  const atual = abas.find((a) => a.chave === aba);
  const fileira = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = fileira.current?.querySelector<HTMLElement>('[aria-selected="true"]');
    const f = fileira.current;
    if (el && f) f.scrollTo({ left: el.offsetLeft - f.offsetLeft - 16, behavior: "smooth" });
  }, [aba, missas]);

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/">Hoje</Voltar>
      <div className="flex items-center justify-between gap-2">
        <h1 className="titulo-pagina">Liturgia</h1>
        <div className="flex items-center gap-1">
          {missa && <BotaoOuvir compacto titulo={l.titulo} partes={() => partesDaMissa(missa)} className="grid size-11 place-items-center rounded-full text-tinta hover:bg-cartao" />}
          <Link to="/calendario" aria-label="Calendário" className="grid size-11 place-items-center rounded-full text-tinta hover:bg-cartao">
            <CalendarDays className="size-[1.375rem]" aria-hidden />
          </Link>
        </div>
      </div>

      <div>
        <p className="mb-2 px-1 text-[0.9375rem] font-semibold text-tinta-suave">{`${MESES[data.getUTCMonth()]![0]!.toUpperCase()}${MESES[data.getUTCMonth()]!.slice(1)} de ${data.getUTCFullYear()}`}</p>
        <div className="grid grid-cols-7 gap-1.5">
          {semana.map((d) => {
            const atualDia = paraIso(d.data) === iso;
            return (
              <Link
                key={paraIso(d.data)}
                to={caminho(d.data)}
                replace
                aria-current={atualDia ? "date" : undefined}
                aria-label={`${DIAS[diaDaSemana(d.data)]}, ${d.data.getUTCDate()}`}
                className={`flex h-[4.5rem] flex-col items-center justify-center gap-0.5 rounded-2xl ${atualDia ? "bg-primario text-sobre-primario" : "bg-cartao text-tinta-suave"}`}
              >
                <span className="text-[0.6875rem] font-semibold">{DIAS[diaDaSemana(d.data)]}</span>
                <span className={`text-lg leading-none ${atualDia ? "font-extrabold" : "font-bold text-tinta"}`}>{d.data.getUTCDate()}</span>
                <span className={`mt-1 size-1.5 rounded-full ${PONTO[d.cor]}`} aria-hidden />
              </Link>
            );
          })}
        </div>
      </div>

      <header data-cor-do-dia={l.cor} className="rounded-3xl border border-borda-dia bg-dia px-5 py-5 text-sobre-dia">
        <h2 className="text-[1.6rem] font-extrabold leading-[1.15] tracking-[-0.025em]">{l.titulo}</h2>
        {l.celebracao?.grau === "memoria" && <p className="mt-1.5 text-sm font-medium">{`Memória de ${l.celebracao.nome}`}</p>}
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
          {grau && <span className="rounded-full bg-black/10 px-3 py-1">{grau}</span>}
          <span className="rounded-full bg-black/10 px-3 py-1">Cor: {NOME_DA_COR[l.cor]}</span>
          <span className="rounded-full bg-black/10 px-3 py-1">Ano {l.cicloDominical}</span>
        </div>
      </header>

      {missas && missas.length > 1 && (
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none]" role="group" aria-label="Missa">
          {missas.map((m, i) => (
            <button
              key={`${m.nome}-${i}`}
              type="button"
              aria-pressed={i === indiceDaMissa}
              onClick={() => escolher(grupos(m)[0]?.chave ?? "", { missa: String(i) })}
              className={`min-h-10 shrink-0 rounded-full border px-4 text-sm font-semibold ${i === indiceDaMissa ? "border-transparent bg-marca-fundo text-tinta" : "border-borda text-tinta-suave"}`}
            >
              {m.nome || `Missa ${i + 1}`}
            </button>
          ))}
        </div>
      )}

      {missas === null ? (
        <div className="h-60 animate-pulse rounded-3xl bg-cartao" />
      ) : (
        <>
          <div ref={fileira} className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none]" role="tablist" aria-label="Leituras">
            {[...abas.map((a) => ({ chave: a.chave, nome: a.nome })), { chave: "reflexao", nome: "Reflexão" }].map((a) => (
              <button
                key={a.chave}
                type="button"
                role="tab"
                aria-selected={a.chave === aba}
                onClick={() => escolher(a.chave)}
                className={`min-h-11 shrink-0 rounded-full px-[1.125rem] text-[0.9375rem] font-bold ${a.chave === aba ? "bg-primario text-sobre-primario" : "bg-cartao text-tinta-suave"}`}
              >
                {a.nome}
              </button>
            ))}
          </div>

          {aba === "reflexao" ? (
            <ReflexaoCompleta canonica={evangelhoDaMissa(missas[0])} referencia={missas[0]?.leituras.find((x) => x.tipo === "evangelho" && !x.ou && x.forma !== "breve")?.referencia} iso={iso} />
          ) : atual ? (
            <section role="tabpanel" className="flex flex-col gap-6">
              <Leituras leituras={atual.leituras} iso={iso} />
              <NotaDaTraducao />
            </section>
          ) : (
            <p className="text-tinta-suave">Leituras deste dia ainda não cadastradas.</p>
          )}
        </>
      )}
    </div>
  );
}
