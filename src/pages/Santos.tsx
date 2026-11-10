import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ChevronRight, Heart, Search } from "lucide-react";
import { diaEMes, dia, hoje, paraIso } from "@/liturgia/datas";
import { NOVENAS } from "@/devocao/catalogo";
import { NOME_DO_GRUPO, buscarSantos, nomeParaOrdenar, caminhoDaImagem, santosDoNome, seloDoSanto, todosOsSantos, useSantosDeDevocao } from "@/santos/santos";
import type { Santo } from "@/santos/tipos";
import { Cartao, TituloPagina } from "@/components/Cartao";
import { Carregando, Indisponivel, Voltar, useConteudo } from "@/components/Devocao";
import { NaoEncontrada } from "@/pages/Simples";

const mmddDe = (d: Date) => paraIso(d).slice(5).replace("-", "");
const dataDoSanto = (mmdd: string) => diaEMes(dia(2028, Number(mmdd.slice(0, 2)), Number(mmdd.slice(2))));

function ItemDeSanto({ s }: { s: Santo }) {
  const img = caminhoDaImagem(s);
  return (
    <Link
      to={`/santos/${s.id}`}
      className="flex min-h-16 items-center gap-3 rounded-xl border border-borda bg-cartao px-3 py-2.5 transition-colors hover:border-destaque-texto/40"
    >
      {img ? (
        <img src={img} alt="" loading="lazy" className="size-12 shrink-0 rounded-lg object-cover object-top" />
      ) : (
        <span className="simbolo size-12 shrink-0 rounded-lg bg-marca-fundo text-marca/40" aria-hidden />
      )}
      <span className="min-w-0 flex-1">
        <span className="block font-leitura text-[1.05rem] font-medium leading-snug text-marca">{s.nome}</span>
        <span className="block text-sm text-tinta-suave">
          {[seloDoSanto(s), s.dataDe === "falecimento" ? `faleceu em ${dataDoSanto(s.data)}` : dataDoSanto(s.data), s.pais].filter(Boolean).join(" · ")}
        </span>
      </span>
      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
    </Link>
  );
}

function Lista({ titulo, santos }: { titulo: string; santos: Santo[] }) {
  if (!santos.length) return null;
  return (
    <section>
      <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">{titulo}</h2>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {santos.map((s) => (
          <ItemDeSanto key={s.id} s={s} />
        ))}
      </div>
    </section>
  );
}

function SeuSanto({ todos }: { todos: Santo[] }) {
  const [params, setParams] = useSearchParams();
  const nome = params.get("nome") ?? "";
  const nascimento = params.get("nascimento") ?? "";
  const [d, m] = nascimento.split("/").map(Number);
  const doNome = useMemo(() => santosDoNome(todos, nome), [todos, nome]);
  const doDia = d && m ? todos.filter((s) => s.data === `${String(m).padStart(2, "0")}${String(d).padStart(2, "0")}`) : [];
  const mudar = (chave: string, valor: string) => {
    const p = new URLSearchParams(params);
    if (valor) p.set(chave, valor);
    else p.delete(chave);
    setParams(p, { replace: true });
  };

  return (
    <Cartao>
      <h2 className="font-leitura text-xl font-semibold text-marca">Seu santo</h2>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-tinta-suave">Seu nome</span>
          <input
            value={nome}
            onChange={(e) => mudar("nome", e.target.value)}
            autoComplete="given-name"
            className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-tinta-suave">Dia em que nasceu</span>
          <input
            value={nascimento}
            onChange={(e) => mudar("nascimento", e.target.value.replace(/[^\d/]/g, "").slice(0, 5))}
            placeholder="dd/mm"
            inputMode="numeric"
            className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base"
          />
        </label>
      </div>
      {(doNome.length > 0 || doDia.length > 0) && (
        <div className="mt-4 flex flex-col gap-4">
          <Lista titulo="Do seu nome" santos={doNome} />
          <Lista titulo="Do dia do seu nascimento" santos={doDia} />
        </div>
      )}
      {nome.trim().length > 2 && !doNome.length && <p className="mt-3 text-tinta-suave">Nenhum santo com esse nome no calendário.</p>}
    </Cartao>
  );
}

function Grupos({ todos }: { todos: Santo[] }) {
  const [params, setParams] = useSearchParams();
  const grupo = params.get("grupo");
  const grupos = Object.keys(NOME_DO_GRUPO).filter((g) => todos.some((s) => s.grupo === g));
  const escolher = (g: string) => {
    const p = new URLSearchParams(params);
    if (g === grupo) p.delete("grupo");
    else p.set("grupo", g);
    setParams(p, { replace: true });
  };
  const lista = grupo ? todos.filter((s) => s.grupo === grupo).sort((a, b) => nomeParaOrdenar(a.nome).localeCompare(nomeParaOrdenar(b.nome), "pt-BR")) : [];
  return (
    <section className="flex flex-col gap-3">
      <h2 className="px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">Conhecer</h2>
      <div className="flex flex-wrap gap-2">
        {grupos.map((g) => (
          <button
            key={g}
            type="button"
            aria-pressed={g === grupo}
            onClick={() => escolher(g)}
            className={`min-h-10 rounded-full border px-4 text-sm font-medium ${g === grupo ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta"}`}
          >
            {NOME_DO_GRUPO[g]}
          </button>
        ))}
      </div>
      {lista.length > 0 && <Lista titulo={`${NOME_DO_GRUPO[grupo!]} (${lista.length})`} santos={lista} />}
    </section>
  );
}

export function Santos() {
  const todos = useConteudo(todosOsSantos, "todos-os-santos");
  const [params] = useSearchParams();
  const [termo, setTermo] = useState("");
  const [devocao] = useSantosDeDevocao();
  const pedido = params.get("dia");
  const mmdd = pedido && /^\d{4}$/.test(pedido) ? pedido : mmddDe(hoje());

  return (
    <div className="flex flex-col gap-5">
      <TituloPagina>Santos</TituloPagina>
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
      {todos === null ? (
        <Carregando />
      ) : todos === "erro" ? (
        <Indisponivel />
      ) : termo.trim() ? (
        (() => {
          const achados = buscarSantos(todos, termo);
          return achados.length ? <Lista titulo="Resultado" santos={achados} /> : <p className="py-8 text-center text-tinta-suave">Nenhum santo encontrado.</p>;
        })()
      ) : (
        <>
          <Lista titulo={pedido ? `Santos de ${dataDoSanto(mmdd)}` : "Santos de hoje"} santos={todos.filter((s) => s.data === mmdd)} />
          <Lista titulo="Meus santos" santos={todos.filter((s) => devocao.includes(s.id))} />
          <Grupos todos={todos} />
          <SeuSanto todos={todos} />
        </>
      )}
    </div>
  );
}

export function SantoPagina() {
  const { id = "" } = useParams();
  const todos = useConteudo(todosOsSantos, "todos-os-santos");
  const [devocao, alternar] = useSantosDeDevocao();
  const [imagemFalhou, setImagemFalhou] = useState(false);
  useEffect(() => setImagemFalhou(false), [id]);

  if (todos === null) return <Carregando />;
  if (todos === "erro") return <Indisponivel />;
  const s = todos.find((x) => x.id === id);
  if (!s) return <NaoEncontrada />;
  const img = caminhoDaImagem(s);
  const meu = devocao.includes(s.id);
  const novena = NOVENAS.find((n) => "mes" in n.festa && `${String(n.festa.mes).padStart(2, "0")}${String(n.festa.dia).padStart(2, "0")}` === s.data);

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/santos">Santos</Voltar>
      {img && !imagemFalhou && (
        <figure className="overflow-hidden rounded-2xl border border-borda bg-cartao">
          <img src={img} alt={s.nome} onError={() => setImagemFalhou(true)} className="max-h-[28rem] w-full object-contain bg-marca-fundo" />
          <figcaption className="px-4 py-2 text-xs text-tinta-suave">
            {s.imagem!.artista}
            {s.imagem!.data ? `, ${s.imagem!.data}` : ""}. Art Institute of Chicago, domínio público.
          </figcaption>
        </figure>
      )}
      <header>
        <p className="text-sm font-medium text-tinta-suave">
          {[seloDoSanto(s), s.dataDe === "falecimento" ? `Faleceu em ${dataDoSanto(s.data)}` : dataDoSanto(s.data), s.pais].filter(Boolean).join(" · ")}
        </p>
        <h1 className="mt-1 font-leitura text-3xl font-semibold leading-tight tracking-tight text-marca">{s.nome}</h1>
        <p className="mt-2 text-tinta-suave">{s.resumo}</p>
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
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => alternar(s.id)}
          aria-pressed={meu}
          className={`flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 font-semibold ${
            meu ? "border border-borda bg-cartao text-destaque-texto" : "bg-destaque text-sobre-destaque"
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
