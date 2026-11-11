import { oracao, type Linha, type Oracao } from "@/oracao/oracoes";
import type { Lingua } from "@/oracao/guardado";

export const linhasNaLingua = (o: Oracao, lingua: Lingua): Linha[] => (lingua === "la" && o.la ? o.la : o.pt);

function Marca({ children }: { children: string }) {
  return <span className="w-6 shrink-0 font-sans text-sm font-bold text-destaque-texto">{children}</span>;
}

export function TextoDaOracao({ linhas, lingua }: { linhas: Linha[]; lingua: Lingua }) {
  return (
    <div className="flex flex-col gap-4 font-leitura text-[1.15rem] leading-[1.75] text-tinta">
      {linhas.map((l, i) => {
        if (typeof l === "string") return <p key={i}>{l}</p>;
        if ("v" in l)
          return (
            <div key={i} className="flex flex-col gap-1">
              <p className="flex items-baseline gap-1">
                <Marca>V.</Marca>
                <span>{l.v}</span>
              </p>
              <p className="flex items-baseline gap-1 font-semibold">
                <Marca>R.</Marca>
                <span>{l.r}</span>
              </p>
            </div>
          );
        if ("invocacoes" in l)
          return (
            <ul key={i} className="flex flex-col gap-1.5">
              {l.invocacoes.map((inv, j) => (
                <li key={j}>
                  {inv}, <span className="font-semibold text-destaque-texto">{l.resposta}</span>
                </li>
              ))}
            </ul>
          );
        const ref = oracao(l.rezar);
        return (
          <p key={i} className="font-sans text-sm font-semibold uppercase tracking-wide text-tinta-suave">
            {lingua === "la" ? ref.latim : ref.nome}
          </p>
        );
      })}
    </div>
  );
}

export function EscolhaDeLingua({ valor, onChange }: { valor: Lingua; onChange: (l: Lingua) => void }) {
  return (
    <div className="inline-grid grid-cols-2 rounded-xl border border-borda bg-cartao p-1" role="group" aria-label="Idioma">
      {(
        [
          ["pt", "Português"],
          ["la", "Latim"],
        ] as const
      ).map(([l, nome]) => (
        <button
          key={l}
          type="button"
          aria-pressed={valor === l}
          onClick={() => onChange(l)}
          className={`min-h-10 rounded-lg px-3 text-sm font-medium ${
            valor === l ? "bg-primario text-sobre-primario" : "text-tinta-suave"
          }`}
        >
          {nome}
        </button>
      ))}
    </div>
  );
}
