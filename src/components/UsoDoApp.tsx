import { useEffect, useMemo, useState } from "react";
import { usoDoApp, type UsoDoApp as Uso } from "@/conta/uso";
import { colunas, resumo, type Periodo } from "@/conta/usoGrafico";

const PERIODOS: { valor: Periodo; nome: string }[] = [
  { valor: 7, nome: "7 dias" },
  { valor: 30, nome: "30 dias" },
  { valor: 90, nome: "90 dias" },
  { valor: 365, nome: "1 ano" },
];

const ORACOES: Record<string, string> = {
  "reza-terco": "Terços",
  "reza-misericordia": "Terços da Misericórdia",
  "reza-agora": "Rezar agora",
};

const numero = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });

export function UsoDoApp() {
  const [periodo, setPeriodo] = useState<Periodo>(30);
  const [uso, setUso] = useState<Uso | null>(null);
  const [erro, setErro] = useState("");
  const [escolhida, setEscolhida] = useState<number | null>(null);

  useEffect(() => {
    let ativo = true;
    setErro("");
    usoDoApp(periodo)
      .then((u) => ativo && setUso(u))
      .catch((e: unknown) => ativo && setErro(e instanceof Error ? e.message : String(e)));
    return () => {
      ativo = false;
    };
  }, [periodo]);

  const cols = useMemo(() => (uso ? colunas(uso.dias, uso.hoje, periodo) : []), [uso, periodo]);
  const res = useMemo(() => (uso ? resumo(uso.dias, uso.hoje, periodo) : null), [uso, periodo]);

  if (erro)
    return (
      <section className="flex flex-col gap-2">
        <h2 className="titulo-secao px-1">Uso do app</h2>
        <p className="rounded-xl bg-cartao px-4 py-3 text-sm text-tinta-suave">Não foi possível carregar: {erro}</p>
      </section>
    );
  if (!uso || !res) return <div className="h-64 animate-pulse rounded-2xl bg-cartao" aria-hidden />;

  const maior = Math.max(1, ...cols.map((c) => c.valor));
  const atual = cols[escolhida ?? cols.length - 1];
  const porDia = periodo <= 30 ? "aparelhos" : "aparelhos por dia, em média";
  const tiles = [
    { rotulo: "Hoje", valor: numero(res.hoje) },
    { rotulo: "Média por dia", valor: numero(res.media) },
    { rotulo: res.melhor ? `Melhor dia, ${res.melhor.dia}` : "Melhor dia", valor: res.melhor ? numero(res.melhor.valor) : "0" },
  ];
  const oracoes = Object.entries(ORACOES).filter(([k]) => uso.oracoes[k]);

  return (
    <section className="flex flex-col gap-3">
      <h2 className="titulo-secao px-1">Uso do app</h2>
      <div className="flex gap-1.5 overflow-x-auto [scrollbar-width:none]" role="group" aria-label="Período">
        {PERIODOS.map((p) => (
          <button
            key={p.valor}
            type="button"
            aria-pressed={p.valor === periodo}
            onClick={() => {
              setPeriodo(p.valor);
              setEscolhida(null);
            }}
            className={`min-h-10 shrink-0 rounded-full px-4 text-sm font-semibold ${p.valor === periodo ? "bg-primario text-sobre-primario" : "bg-cartao text-tinta-suave"}`}
          >
            {p.nome}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2">
        {tiles.map((t) => (
          <div key={t.rotulo} className="min-w-0 rounded-xl bg-cartao px-3 py-3">
            <p className="text-2xl font-extrabold tabular-nums text-tinta">{t.valor}</p>
            <p className="text-xs leading-snug text-tinta-suave">{t.rotulo}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 rounded-xl bg-cartao px-3 pb-2 pt-3">
        <p className="min-h-5 text-sm text-tinta" aria-live="polite">
          {atual && (
            <>
              <span className="font-semibold">{atual.detalhe}</span>: <span className="tabular-nums">{numero(atual.valor)}</span> {porDia}
            </>
          )}
        </p>
        <div className="relative flex h-32 items-end gap-[2px] border-b border-borda">
          {cols.map((c, i) => {
            const ativa = i === (escolhida ?? cols.length - 1);
            return (
              <button
                key={c.detalhe}
                type="button"
                onClick={() => setEscolhida(i)}
                aria-label={`${c.detalhe}: ${numero(c.valor)} ${porDia}`}
                aria-pressed={ativa}
                className="flex h-full min-w-0 flex-1 items-end justify-center"
              >
                <span
                  className={`block w-full max-w-6 rounded-t-[4px] ${ativa ? "bg-destaque" : "bg-destaque/45"}`}
                  style={{ height: c.valor ? `${Math.max(3, (c.valor / maior) * 100)}%` : "0" }}
                />
              </button>
            );
          })}
        </div>
        <div className="flex justify-between text-xs tabular-nums text-tinta-suave">
          <span>{cols[0]?.rotulo}</span>
          <span>{cols.at(-1)?.rotulo}</span>
        </div>
      </div>

      <dl className="flex flex-col gap-1 px-1 text-sm">
        {oracoes.map(([k, nome]) => (
          <div key={k} className="flex justify-between gap-3">
            <dt className="text-tinta-suave">{nome} no período</dt>
            <dd className="font-semibold tabular-nums text-tinta">{numero(uso.oracoes[k]!)}</dd>
          </div>
        ))}
        <div className="flex justify-between gap-3">
          <dt className="text-tinta-suave">Contas criadas</dt>
          <dd className="font-semibold tabular-nums text-tinta">{numero(uso.contas)}</dd>
        </div>
      </dl>
    </section>
  );
}
