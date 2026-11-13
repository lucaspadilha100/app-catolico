import { useEffect, useState } from "react";
import { usoDoApp, type UsoDoApp as Uso } from "@/conta/uso";

const NOMES: Record<string, string> = {
  "reza-terco": "Terços rezados",
  "reza-misericordia": "Terços da Misericórdia",
  "reza-agora": "Rezar agora",
};

const diaCurto = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`;

export function UsoDoApp() {
  const [uso, setUso] = useState<Uso | null>(null);
  const [erro, setErro] = useState("");
  useEffect(() => {
    usoDoApp()
      .then(setUso)
      .catch((e: unknown) => setErro(e instanceof Error ? e.message : String(e)));
  }, []);
  if (erro)
    return (
      <section className="flex flex-col gap-2">
        <h2 className="titulo-secao px-1">Uso do app</h2>
        <p className="rounded-xl bg-cartao px-4 py-3 text-sm text-tinta-suave">Não foi possível carregar: {erro}</p>
      </section>
    );
  if (!uso) return <div className="h-24 animate-pulse rounded-xl bg-cartao" aria-hidden />;
  const dataDeHoje = new Date().toLocaleDateString("sv-SE");
  const hoje = uso.dias.find((d) => d.dia === dataDeHoje)?.aparelhos ?? 0;
  const maior = Math.max(1, ...uso.dias.map((d) => d.aparelhos));
  const semana = uso.semana.abertura ?? 0;
  const numeros = [
    { rotulo: "Hoje", valor: hoje },
    { rotulo: "Últimos 7 dias", valor: semana },
    { rotulo: "Contas", valor: uso.contas },
  ];
  return (
    <section className="flex flex-col gap-3">
      <h2 className="titulo-secao px-1">Uso do app</h2>
      <div className="grid grid-cols-3 gap-2">
        {numeros.map((n) => (
          <div key={n.rotulo} className="rounded-xl bg-cartao px-3 py-3">
            <p className="text-2xl font-extrabold tabular-nums text-tinta">{n.valor}</p>
            <p className="text-xs text-tinta-suave">{n.rotulo}</p>
          </div>
        ))}
      </div>
      {uso.dias.length > 0 && (
        <ul className="flex flex-col gap-1 rounded-xl bg-cartao px-3 py-3" aria-label="Aparelhos por dia">
          {uso.dias.slice(0, 14).map((d) => (
            <li key={d.dia} className="flex items-center gap-2 text-sm">
              <span className="w-12 shrink-0 tabular-nums text-tinta-suave">{diaCurto(d.dia)}</span>
              <span className="h-2.5 rounded-full bg-destaque" style={{ width: `${Math.max(4, (d.aparelhos / maior) * 100)}%` }} aria-hidden />
              <span className="shrink-0 tabular-nums text-tinta">{d.aparelhos}</span>
            </li>
          ))}
        </ul>
      )}
      {Object.keys(NOMES).some((k) => uso.semana[k]) && (
        <ul className="flex flex-col gap-1 px-1 text-sm text-tinta-suave">
          {Object.entries(NOMES).map(([k, nome]) =>
            uso.semana[k] ? (
              <li key={k}>
                {nome} nos últimos 7 dias: <span className="font-semibold tabular-nums text-tinta">{uso.semana[k]}</span>
              </li>
            ) : null,
          )}
        </ul>
      )}
    </section>
  );
}
