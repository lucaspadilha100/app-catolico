import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, CircleDot, Hand, RotateCcw, X } from "lucide-react";
import { MISTERIOS } from "@/liturgia/terco";
import { formatarReferencia } from "@/liturgia/lecionario";
import { MEDITACOES, contasDoPasso, type Passo } from "@/oracao/terco";
import { oracao } from "@/oracao/oracoes";
import {
  CHAVE_INTENCAO,
  CHAVE_LINGUA,
  CHAVE_MODO_CONTAS,
  contarTercoRezado,
  guardarAndamento,
  lerAndamento,
  tercosRezados,
  useGuardado,
  type Lingua,
} from "@/oracao/guardado";
import { Cartao } from "@/components/Cartao";
import { EscolhaDeLingua, TextoDaOracao, linhasNaLingua } from "@/components/TextoDaOracao";
import { TextoDaLeitura } from "@/components/TextoBiblico";
import { vibrar } from "@/lib/nativo";
import { contarReza } from "@/conta/uso";
import { RezandoJuntos, rezaDoTipo } from "@/components/RezandoJuntos";

const plural = (n: number) => `${n} ${n === 1 ? "terço rezado" : "terços rezados"}`;

export function Contas({ total, atual, grande = false }: { total: number; atual: number; grande?: boolean }) {
  const colunas = grande ? (total > 5 ? 5 : total) : total;
  return (
    <ol
      className={`grid ${grande ? "gap-4" : "gap-1.5"}`}
      style={{ gridTemplateColumns: `repeat(${colunas}, minmax(0, ${grande ? "3.5rem" : "1.75rem"}))` }}
      aria-label={`Conta ${atual + 1} de ${total}`}
    >
      {Array.from({ length: total }, (_, i) => (
        <li
          key={i}
          className={`aspect-square rounded-full border-2 transition-colors ${
            i < atual
              ? "border-destaque bg-destaque"
              : i === atual
                ? "border-destaque bg-destaque/35 ring-4 ring-destaque/25"
                : "border-borda bg-cartao"
          }`}
        />
      ))}
    </ol>
  );
}

function ConteudoDoMisterio({ passo }: { passo: Passo }) {
  const { grupo, indice } = passo.misterio!;
  const meditacao = MEDITACOES.misterios[grupo][indice]!;
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-leitura text-2xl font-semibold leading-snug text-marca">{MISTERIOS[grupo].misterios[indice]}</h2>
      <Cartao>
        <p className="font-leitura text-lg font-semibold text-destaque-texto">{formatarReferencia(meditacao.referencia, {})}</p>
        <TextoDaLeitura canonica={meditacao.referencia} poema={false} />
      </Cartao>
      <p className="px-1 font-leitura text-[1.1rem] leading-[1.75] text-tinta">{meditacao.texto}</p>
    </div>
  );
}

function ConteudoDaOracao({ passo, lingua }: { passo: Passo; lingua: Lingua }) {
  const o = oracao(passo.oracao!);
  return (
    <Cartao>
      <TextoDaOracao linhas={linhasNaLingua(o, lingua)} lingua={lingua} />
    </Cartao>
  );
}

function ModoContas({
  passo,
  conta,
  intencao,
  avancar,
  voltar,
  sair,
}: {
  passo: Passo;
  conta: number;
  intencao: string;
  avancar: () => void;
  voltar: () => void;
  sair: () => void;
}) {
  const total = contasDoPasso(passo);
  const parar = (e: { stopPropagation: () => void }) => e.stopPropagation();
  return (
    <div
      className="fixed inset-0 z-50 md:left-60 flex touch-manipulation select-none flex-col bg-papel px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))]"
      onClick={avancar}
    >
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={(e) => {
            parar(e);
            sair();
          }}
          className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-cartao px-4 font-medium text-tinta-suave"
        >
          <X className="size-5" aria-hidden />
          Sair das contas
        </button>
        <button
          type="button"
          onClick={(e) => {
            parar(e);
            voltar();
          }}
          aria-label="Voltar"
          className="grid size-12 place-items-center rounded-xl border border-borda bg-cartao text-tinta-suave"
        >
          <ChevronLeft className="size-6" aria-hidden />
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-destaque-texto">{passo.secao}</p>
        <h1 className="font-leitura text-3xl font-semibold leading-snug text-marca">
          {passo.misterio ? MISTERIOS[passo.misterio.grupo].misterios[passo.misterio.indice] : passo.titulo}
        </h1>
        {passo.rotulos?.[conta] && <p className="text-lg text-tinta-suave">{passo.rotulos[conta]}</p>}
        {total > 1 && <Contas total={total} atual={conta} grande />}
        {total > 1 && (
          <p className="font-leitura text-2xl font-semibold text-tinta-suave">
            {conta + 1} / {total}
          </p>
        )}
      </div>

      {intencao && <p className="truncate text-center text-sm italic text-tinta-suave">Por {intencao}</p>}
    </div>
  );
}

export interface Posicao {
  passo: number;
  conta: number;
}

export interface ControleDoTerco {
  posicao: Posicao;
  aoMudar?: (p: Posicao) => void;
  aoTerminar?: () => void;
  extra?: (passo: Passo) => ReactNode;
}

export function TercoGuiado({
  chave,
  tipo,
  titulo,
  passos,
  aoSair,
  controle,
}: {
  chave: string;
  tipo: string;
  titulo: string;
  passos: Passo[];
  aoSair: () => void;
  controle?: ControleDoTerco;
}) {
  const [posicaoLocal, setPosicaoLocal] = useState(() => {
    const a = lerAndamento(chave);
    if (!a || a.passo >= passos.length) return { passo: 0, conta: 0 };
    return { passo: a.passo, conta: Math.min(a.conta, contasDoPasso(passos[a.passo]!) - 1) };
  });
  const posicao = controle ? controle.posicao : posicaoLocal;
  const aoMudar = controle?.aoMudar;
  const setPosicao = useCallback((p: Posicao) => (controle ? aoMudar?.(p) : setPosicaoLocal(p)), [controle, aoMudar]);
  const acompanhando = Boolean(controle && !aoMudar);
  const [concluido, setConcluido] = useState<number | null>(null);
  const [lingua, setLingua] = useGuardado<Lingua>(CHAVE_LINGUA, "pt");
  const [modoContas, setModoContas] = useGuardado<boolean>(CHAVE_MODO_CONTAS, false);
  const [intencao] = useGuardado<string>(CHAVE_INTENCAO, "");

  const passo = passos[Math.min(posicao.passo, passos.length - 1)]!;
  const total = contasDoPasso(passo);

  const unidades = useMemo(() => passos.reduce((s, p) => s + contasDoPasso(p), 0), [passos]);
  const feitas = useMemo(
    () => passos.slice(0, posicao.passo).reduce((s, p) => s + contasDoPasso(p), 0) + posicao.conta,
    [passos, posicao],
  );

  useEffect(() => {
    if (concluido === null && !controle) guardarAndamento(chave, posicao);
  }, [chave, posicao, concluido, controle]);

  useEffect(() => {
    if (!modoContas) window.scrollTo({ top: 0 });
  }, [posicao.passo, modoContas]);

  const avancar = useCallback(() => {
    if (posicao.conta < total - 1) {
      if (modoContas) vibrar(25);
      setPosicao({ passo: posicao.passo, conta: posicao.conta + 1 });
      return;
    }
    if (posicao.passo < passos.length - 1) {
      if (modoContas) vibrar([40, 80, 40]);
      setPosicao({ passo: posicao.passo + 1, conta: 0 });
      return;
    }
    if (modoContas) vibrar([60, 100, 60, 100, 60]);
    if (!controle) guardarAndamento(chave, null);
    controle?.aoTerminar?.();
    setModoContas(false);
    const reza = rezaDoTipo(tipo);
    if (reza) contarReza(reza);
    setConcluido(contarTercoRezado(tipo));
  }, [posicao, total, passos.length, modoContas, chave, tipo, setModoContas, setPosicao, controle]);

  const voltar = useCallback(() => {
    if (posicao.conta > 0) setPosicao({ passo: posicao.passo, conta: posicao.conta - 1 });
    else if (posicao.passo > 0) {
      const anterior = posicao.passo - 1;
      setPosicao({ passo: anterior, conta: contasDoPasso(passos[anterior]!) - 1 });
    }
  }, [posicao, passos, setPosicao]);

  useEffect(() => {
    if (concluido !== null || acompanhando) return;
    const tecla = (e: KeyboardEvent) => {
      const alvo = e.target as HTMLElement;
      if (alvo.closest("input, textarea, button, a")) return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        avancar();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        voltar();
      }
    };
    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  }, [avancar, voltar, concluido, acompanhando]);

  if (concluido !== null) {
    return (
      <div className="flex flex-col gap-4">
        <Cartao className="flex flex-col items-center gap-3 py-10 text-center">
          <span className="simbolo w-20 text-destaque-texto" aria-hidden />
          <h1 className="mt-2 font-leitura text-3xl font-semibold text-marca">Graças a Deus</h1>
          <p className="text-tinta-suave">{titulo}</p>
          {intencao && <p className="font-leitura italic text-tinta">Por {intencao}</p>}
          <p className="mt-2 text-sm text-tinta-suave">{plural(concluido)}</p>
          {rezaDoTipo(tipo) && <RezandoJuntos reza={rezaDoTipo(tipo)!} />}
        </Cartao>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => {
              if (!controle) setPosicao({ passo: 0, conta: 0 });
              setConcluido(null);
            }}
            className="flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-borda bg-cartao px-5 font-semibold text-tinta"
          >
            <RotateCcw className="size-5" aria-hidden />
            Rezar de novo
          </button>
          <Link
            to="/rezar"
            className="flex min-h-14 items-center justify-center rounded-2xl bg-destaque px-5 font-semibold text-sobre-destaque"
          >
            Voltar para Rezar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {modoContas && !acompanhando && (
        <ModoContas
          passo={passo}
          conta={posicao.conta}
          intencao={intencao}
          avancar={avancar}
          voltar={voltar}
          sair={() => setModoContas(false)}
        />
      )}

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={aoSair}
          aria-label="Sair"
          className="grid size-11 shrink-0 place-items-center rounded-xl border border-borda bg-cartao text-tinta-suave"
        >
          <X className="size-5" aria-hidden />
        </button>
        <p className="min-w-0 flex-1 truncate font-medium text-tinta-suave">{titulo}</p>
        {acompanhando ? (
          <span className="flex min-h-11 shrink-0 items-center gap-2 rounded-xl bg-marca-fundo px-3 text-sm font-semibold text-destaque-texto">
            <span className="size-2 animate-pulse rounded-full bg-[#c0392b]" aria-hidden />
            Ao vivo
          </span>
        ) : (
          <button
            type="button"
            onClick={() => setModoContas(true)}
            className="flex min-h-11 shrink-0 items-center gap-2 rounded-xl border border-borda bg-cartao px-3 text-sm font-medium text-tinta-suave"
          >
            <Hand className="size-5" aria-hidden />
            Contas
          </button>
        )}
      </div>

      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-marca-fundo"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={unidades}
        aria-valuenow={feitas}
      >
        <div className="h-full rounded-full bg-destaque transition-all" style={{ width: `${(feitas / unidades) * 100}%` }} />
      </div>

      <header className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">{passo.secao}</p>
        {!passo.misterio && (
          <h1 className="font-leitura text-3xl font-semibold leading-tight text-marca">{passo.titulo}</h1>
        )}
        {intencao && posicao.passo === 0 && <p className="font-leitura italic text-tinta-suave">Por {intencao}</p>}
      </header>

      {total > 1 && (
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-medium text-tinta">{passo.rotulos?.[posicao.conta] ?? ""}</span>
            <span className="text-sm font-semibold text-tinta-suave">
              {posicao.conta + 1} de {total}
            </span>
          </div>
          <Contas total={total} atual={posicao.conta} />
        </div>
      )}

      {controle?.extra?.(passo)}

      {passo.misterio ? <ConteudoDoMisterio passo={passo} /> : <ConteudoDaOracao passo={passo} lingua={lingua} />}

      {passo.oracao && oracao(passo.oracao).la && (
        <div>
          <EscolhaDeLingua valor={lingua} onChange={setLingua} />
        </div>
      )}

      {!acompanhando && (
      <div className="sticky bottom-[calc(4.75rem+env(safe-area-inset-bottom))] z-[5] grid grid-cols-[auto_1fr] gap-3 md:bottom-6">
        <button
          type="button"
          onClick={voltar}
          disabled={posicao.passo === 0 && posicao.conta === 0}
          aria-label="Voltar"
          className="grid size-14 place-items-center rounded-2xl border border-borda bg-cartao text-tinta shadow-sm disabled:opacity-40"
        >
          <ChevronLeft className="size-6" aria-hidden />
        </button>
        <button
          type="button"
          onClick={avancar}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-destaque px-5 text-lg font-semibold text-sobre-destaque shadow-sm"
        >
          {posicao.passo === passos.length - 1 && posicao.conta === total - 1 ? "Amém" : total > 1 ? "Próxima conta" : "Avançar"}
          <ChevronRight className="size-6" aria-hidden />
        </button>
      </div>
      )}
    </div>
  );
}

export function InicioDoTerco({
  tipo,
  continuar,
  aoComecar,
  children,
}: {
  tipo: string;
  continuar: { rotulo: string; detalhe: string; acao: () => void } | null;
  aoComecar: () => void;
  children?: ReactNode;
}) {
  const [intencao, setIntencao] = useGuardado<string>(CHAVE_INTENCAO, "");
  const rezados = tercosRezados(tipo);

  return (
    <div className="flex flex-col gap-5">
      {continuar && (
        <button
          type="button"
          onClick={continuar.acao}
          className="flex items-center gap-4 rounded-2xl bg-destaque p-5 text-left text-sobre-destaque shadow-sm"
        >
          <CircleDot className="size-8 shrink-0 opacity-90" aria-hidden />
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-medium opacity-90">{continuar.rotulo}</span>
            <span className="block font-leitura text-xl font-semibold">{continuar.detalhe}</span>
          </span>
          <ChevronRight className="size-6 shrink-0" aria-hidden />
        </button>
      )}

      {children}

      <label className="flex flex-col gap-2">
        <span className="font-medium">Intenção</span>
        <input
          value={intencao}
          onChange={(e) => setIntencao(e.target.value)}
          placeholder="Rezo este terço por…"
          maxLength={140}
          className="min-h-12 rounded-xl border border-borda bg-cartao px-4 outline-none placeholder:text-tinta-suave/70 focus:border-destaque-texto"
          autoComplete="off"
        />
      </label>

      <button
        type="button"
        onClick={aoComecar}
        className={`flex min-h-14 items-center justify-center gap-2 rounded-2xl px-5 text-lg font-semibold shadow-sm ${
          continuar ? "border border-borda bg-cartao text-tinta" : "bg-destaque text-sobre-destaque"
        }`}
      >
        {continuar ? "Começar do início" : "Começar"}
        <ChevronRight className="size-6" aria-hidden />
      </button>

      {rezados > 0 && <p className="text-center text-sm text-tinta-suave">{plural(rezados)}</p>}
      {rezaDoTipo(tipo) && <RezandoJuntos reza={rezaDoTipo(tipo)!} />}
    </div>
  );
}
