import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Check, ChevronRight, Heart, Search, Share2, UserRound } from "lucide-react";
import { diaEMes, dia, hoje, paraIso } from "@/liturgia/datas";
import { NOVENAS } from "@/devocao/catalogo";
import {
  CONTAGEM_DOS_GRUPOS,
  NOME_DO_GRUPO,
  buscarSantos,
  creditoDaFoto,
  indiceDosSantos,
  nomeParaOrdenar,
  santoPorId,
  santosDoDia,
  santosDoGrupo,
  santosDoNome,
  santosPorIds,
  seloDoSanto,
  useSantosDeDevocao,
} from "@/santos/santos";
import { FotoDoSanto, Moldura } from "@/santos/FotoDoSanto";
import type { SantoDoIndice } from "@/santos/tipos";
import { Cartao, LINHA, LISTA, TituloPagina } from "@/components/Cartao";
import { Cabecalho, Carregando, Indisponivel, Voltar, useConteudo } from "@/components/Devocao";
import { NaoEncontrada } from "@/pages/Simples";
import { oracaoDoSanto, type OracaoCompleta } from "@/oracao/devocionario";
import { textoDasLinhas } from "@/oracao/oracoes";
import { TextoDaOracao } from "@/components/TextoDaOracao";
import { compartilhar, enderecoPublico } from "@/lib/nativo";

const MESES = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
const mmddDe = (d: Date) => paraIso(d).slice(5).replace("-", "");
const dataDoSanto = (mmdd: string) => diaEMes(dia(2028, Number(mmdd.slice(0, 2)), Number(mmdd.slice(2))));
const porNome = (a: SantoDoIndice, b: SantoDoIndice) => nomeParaOrdenar(a.nome).localeCompare(nomeParaOrdenar(b.nome), "pt-BR");
const porData = (a: SantoDoIndice, b: SantoDoIndice) => a.data.localeCompare(b.data) || porNome(a, b);

const POR_VEZ = 60;

function useIndice(ligado: boolean): SantoDoIndice[] | null | "erro" {
  const [valor, setValor] = useState<SantoDoIndice[] | null | "erro">(null);
  useEffect(() => {
    if (!ligado) return;
    let ativo = true;
    indiceDosSantos()
      .then((v) => ativo && setValor(v))
      .catch(() => ativo && setValor("erro"));
    return () => {
      ativo = false;
    };
  }, [ligado]);
  return ligado ? valor : null;
}

export function linhaDoSanto(s: SantoDoIndice): string {
  return [seloDoSanto(s), s.dataDe === "falecimento" ? `faleceu em ${dataDoSanto(s.data)}` : dataDoSanto(s.data), s.pais].filter(Boolean).join(" · ");
}

export function ItemDeSanto({ s }: { s: SantoDoIndice }) {
  return (
    <Link
      to={`/santos/${s.id}`}
      className="flex min-h-16 items-center gap-3 px-3 py-2.5 transition-colors hover:bg-marca-fundo/60"
    >
      <FotoDoSanto santo={s} largura={96} altura={96} className="size-12 shrink-0 rounded-lg" />
      <span className="min-w-0 flex-1">
        <span className="block text-[1.0625rem] font-semibold leading-snug text-tinta">{s.nome}</span>
        <span className="block text-sm text-tinta-suave">{linhaDoSanto(s)}</span>
      </span>
      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
    </Link>
  );
}

function Lista({ titulo, santos }: { titulo?: string; santos: SantoDoIndice[] }) {
  const [limite, setLimite] = useState(POR_VEZ);
  if (!santos.length) return null;
  return (
    <section className="flex flex-col gap-3">
      {titulo && <h2 className="titulo-secao px-1">{titulo}</h2>}
      <div className={LISTA}>
        {santos.slice(0, limite).map((s) => (
          <ItemDeSanto key={s.id} s={s} />
        ))}
      </div>
      {santos.length > limite && (
        <button type="button" onClick={() => setLimite((l) => l + POR_VEZ)} className="min-h-12 rounded-xl border border-borda bg-cartao px-4 font-semibold text-destaque-texto">
          Mostrar mais
        </button>
      )}
    </section>
  );
}

function useParametro(chave: string): [string, (v: string) => void] {
  const [params, setParams] = useSearchParams();
  const valor = params.get(chave) ?? "";
  const mudar = (v: string) => {
    const p = new URLSearchParams(params);
    if (v) p.set(chave, v);
    else p.delete(chave);
    setParams(p, { replace: true });
  };
  return [valor, mudar];
}

function ItemDeAtalho({ para, titulo, contagem, icone }: { para: string; titulo: string; contagem?: number; icone?: "pessoa" }) {
  return (
    <Link to={para} className={LINHA}>
      {icone === "pessoa" && <UserRound className="size-5 shrink-0 text-destaque-texto" aria-hidden />}
      <span className="min-w-0 flex-1 font-medium text-tinta">{titulo}</span>
      {contagem !== undefined && <span className="text-sm text-tinta-suave">{contagem}</span>}
      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
    </Link>
  );
}

export function Santos() {
  const [termo, setTermo] = useParametro("q");
  const [devocao] = useSantosDeDevocao();
  const [params] = useSearchParams();
  const pedido = params.get("dia");
  const mmdd = pedido && /^\d{4}$/.test(pedido) ? pedido : mmddDe(hoje());
  const buscando = termo.trim() !== "";
  const indice = useIndice(buscando);
  const doDia = useConteudo(() => santosDoDia(mmdd), `dia-${mmdd}`);
  const meus = useConteudo(() => santosPorIds(devocao), `meus-${devocao.join(",")}`);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Voltar para="/mais">Mais</Voltar>
        <TituloPagina>Santos</TituloPagina>
      </div>
      <label className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-cartao px-3 focus-within:border-destaque-texto">
        <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        <input
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          placeholder="Buscar santo"
          aria-label="Buscar santo"
          type="search"
          enterKeyHint="search"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-tinta-suave/70"
        />
      </label>
      {buscando ? (
        indice === null ? (
          <Carregando />
        ) : indice === "erro" ? (
          <Indisponivel />
        ) : (
          (() => {
            const achados = buscarSantos(indice, termo);
            return achados.length ? <Lista key={termo} titulo={`Resultado (${achados.length})`} santos={achados} /> : <p className="py-8 text-center text-tinta-suave">Nenhum santo encontrado.</p>;
          })()
        )
      ) : (
        <>
          {doDia === null ? (
            <Carregando />
          ) : doDia === "erro" ? (
            <Indisponivel />
          ) : (
            <>
              <Lista titulo={pedido ? `Santos de ${dataDoSanto(mmdd)}` : "Santos de hoje"} santos={doDia.filter((s) => s.calendario)} />
              <Lista titulo={pedido ? `Também lembrados em ${dataDoSanto(mmdd)}` : "Também lembrados hoje"} santos={doDia.filter((s) => !s.calendario)} />
            </>
          )}
          <div className={LISTA}>
            <ItemDeAtalho para="/santos/seu-santo" titulo="Seu santo" icone="pessoa" />
          </div>
          {meus && meus !== "erro" && <Lista titulo="Meus santos" santos={[...meus].sort(porNome)} />}
          <section className="flex flex-col gap-2">
            <h2 className="titulo-secao px-1">Conhecer</h2>
            <div className={LISTA}>
              {Object.keys(NOME_DO_GRUPO)
                .filter((g) => CONTAGEM_DOS_GRUPOS[g])
                .map((g) => (
                  <ItemDeAtalho key={g} para={`/santos/grupo/${g}`} titulo={NOME_DO_GRUPO[g]!} contagem={CONTAGEM_DOS_GRUPOS[g]} />
                ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export function SeuSanto() {
  const [nome, setNome] = useParametro("nome");
  const [nascimento, setNascimento] = useParametro("nascimento");
  const [d, m] = nascimento.split("/").map(Number);
  const todos = useIndice(nome.trim() !== "");
  const doNome = useMemo(() => (todos && todos !== "erro" ? santosDoNome(todos, nome).sort(porNome) : []), [todos, nome]);
  const mmdd = d && m ? `${String(m).padStart(2, "0")}${String(d).padStart(2, "0")}` : "";
  const doDiaCarregado = useConteudo(() => (mmdd ? santosDoDia(mmdd) : Promise.resolve([])), `dia-${mmdd}`);
  const doDia = doDiaCarregado && doDiaCarregado !== "erro" ? doDiaCarregado : [];

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/santos">Santos</Voltar>
      <Cabecalho titulo="Seu santo" />
      <Cartao>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-tinta-suave">Seu nome</span>
            <input value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="given-name" className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-tinta-suave">Dia em que nasceu</span>
            <input
              value={nascimento}
              onChange={(e) => {
                const so = e.target.value.replace(/\D/g, "").slice(0, 4);
                setNascimento(so.length > 2 ? `${so.slice(0, 2)}/${so.slice(2)}` : so);
              }}
              placeholder="dd/mm"
              inputMode="numeric"
              className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base"
            />
          </label>
        </div>
      </Cartao>
      {nome.trim() !== "" && todos === null && <Carregando />}
      <Lista titulo="Do seu nome" santos={doNome} />
      <Lista titulo="Do dia em que você nasceu" santos={doDia} />
      {nome.trim().length > 2 && todos && todos !== "erro" && !doNome.length && <p className="text-tinta-suave">Nenhum santo com esse nome.</p>}
    </div>
  );
}

export function GrupoDeSantos() {
  const { grupo = "" } = useParams();
  const todos = useConteudo(() => santosDoGrupo(grupo), `grupo-${grupo}`);
  const [mes, setMes] = useParametro("mes");
  if (!NOME_DO_GRUPO[grupo]) return <NaoEncontrada />;
  const doGrupo = todos && todos !== "erro" ? todos : [];
  const calendario = grupo === "calendario";
  const mesAtual = mes && /^(0[1-9]|1[0-2])$/.test(mes) ? mes : paraIso(hoje()).slice(5, 7);
  const lista = calendario ? doGrupo.filter((s) => s.data.startsWith(mesAtual)).sort(porData) : [...doGrupo].sort(porNome);

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/santos">Santos</Voltar>
      <Cabecalho titulo={NOME_DO_GRUPO[grupo]!} subtitulo={CONTAGEM_DOS_GRUPOS[grupo] ? `${CONTAGEM_DOS_GRUPOS[grupo]}` : undefined} />
      {calendario && (
        <div className="grid grid-cols-6 gap-1.5" role="group" aria-label="Mês">
          {MESES.map((nome, i) => {
            const v = String(i + 1).padStart(2, "0");
            return (
              <button
                key={v}
                type="button"
                aria-pressed={v === mesAtual}
                onClick={() => setMes(v)}
                className={`min-h-10 rounded-lg border text-sm font-medium ${v === mesAtual ? "border-transparent bg-primario text-sobre-primario" : "border-borda bg-cartao text-tinta"}`}
              >
                {nome}
              </button>
            );
          })}
        </div>
      )}
      {todos === null ? <Carregando /> : todos === "erro" ? <Indisponivel /> : <Lista key={`${grupo}-${mesAtual}`} santos={lista} />}
    </div>
  );
}

export function SantoPagina() {
  const { id = "" } = useParams();
  const achado = useConteudo(() => santoPorId(id).then((santo) => ({ santo })), `santo-${id}`);
  const [devocao, alternar] = useSantosDeDevocao();
  const [imagemFalhou, setImagemFalhou] = useState(false);
  const [copiado, setCopiado] = useState(false);
  useEffect(() => setImagemFalhou(false), [id]);
  const [oracao, setOracao] = useState<OracaoCompleta | null>(null);
  useEffect(() => {
    let ativo = true;
    setOracao(null);
    void oracaoDoSanto(id).then((o) => ativo && setOracao(o));
    return () => {
      ativo = false;
    };
  }, [id]);

  if (achado === null) return <Carregando />;
  if (achado === "erro") return <Indisponivel />;
  const s = achado.santo;
  if (!s) return <NaoEncontrada />;
  const meu = devocao.includes(s.id);
  const novena = NOVENAS.find((n) => "mes" in n.festa && `${String(n.festa.mes).padStart(2, "0")}${String(n.festa.dia).padStart(2, "0")}` === s.data);

  async function enviar() {
    const partes = [s!.nome, linhaDoSanto(s!), "", s!.historia.join("\n\n")];
    if (oracao) partes.push("", oracao.nome, textoDasLinhas(oracao.pt));
    const texto = partes.join("\n");
    const url = `${enderecoPublico()}/santos/${s!.id}`;
    const r = await compartilhar({ titulo: s!.nome, texto, url });
    if (r === "copiado") {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    }
    if (r === "erro") window.open(`https://wa.me/?text=${encodeURIComponent(`${texto}\n\n${url}`)}`, "_blank", "noopener");
  }

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/santos">Santos</Voltar>
      {s.imagem &&
        (imagemFalhou ? (
          <Moldura className="h-48 w-full rounded-3xl" />
        ) : (
          <figure className="overflow-hidden rounded-3xl bg-cartao">
            <FotoDoSanto santo={s} largura={600} altura={800} alt={s.nome} ajuste="contain" aoFalhar={() => setImagemFalhou(true)} className="max-h-[28rem] w-full bg-marca-fundo" style={{ objectPosition: "50% 50%" }} />
            <figcaption className="px-4 py-2 text-xs text-tinta-suave">
              <a href={s.imagem.url} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                {creditoDaFoto(s.imagem)}.
              </a>
            </figcaption>
          </figure>
        ))}
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-tinta-suave">
            {linhaDoSanto(s)}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold leading-tight text-marca tracking-[-0.02em]">{s.nome}</h1>
          <p className="mt-2 text-tinta-suave">{s.resumo}</p>
        </div>
        <button
          type="button"
          onClick={() => void enviar()}
          aria-label={`Compartilhar ${s.nome}`}
          className="mt-1 grid size-11 shrink-0 place-items-center rounded-full bg-cartao text-tinta"
        >
          {copiado ? <Check className="size-5 text-destaque-texto" aria-hidden /> : <Share2 className="size-5" aria-hidden />}
        </button>
      </header>
      {s.padroeiro && s.padroeiro.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">Padroado</span>
          {s.padroeiro.map((p) => (
            <span key={p} className="rounded-full bg-marca-fundo px-3 py-1 text-sm text-tinta">
              {p}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-4 font-leitura text-[1.1rem] leading-[1.75] text-tinta">
        {s.historia.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {oracao && (
        <section>
          <h2 className="titulo-secao mb-3 px-1">{oracao.nome}</h2>
          <Cartao>
            <TextoDaOracao linhas={oracao.pt} lingua="pt" />
          </Cartao>
        </section>
      )}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => alternar(s.id)}
          aria-pressed={meu}
          className={`flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 font-semibold ${
            meu ? "border border-borda bg-cartao text-destaque-texto" : "bg-primario text-sobre-primario"
          }`}
        >
          <Heart className={`size-5 ${meu ? "fill-current" : ""}`} aria-hidden />
          {meu ? "Nos meus santos" : "Guardar nos meus santos"}
        </button>
        {novena && (
          <Link to={`/rezar/novenas/${novena.id}`} className="flex min-h-12 items-center justify-center rounded-xl border border-borda bg-papel px-4 font-semibold text-destaque-texto">
            {novena.nome}
          </Link>
        )}
      </div>
    </div>
  );
}
