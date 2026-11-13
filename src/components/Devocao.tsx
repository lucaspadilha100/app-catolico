import { useEffect, useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import { ordinal } from "@/devocao/calendario";

export { Voltar } from "@/components/Voltar";

export function Cabecalho({ titulo, subtitulo }: { titulo: string; subtitulo?: string }) {
  return (
    <header>
      <h1 className="titulo-pagina">{titulo}</h1>
      {subtitulo && <p className="mt-1 text-tinta-suave">{subtitulo}</p>}
    </header>
  );
}

export function useConteudo<T>(carregar: () => Promise<T>, chave: string): T | null | "erro" {
  const [estado, setEstado] = useState<{ chave: string; valor: T | null | "erro" }>({ chave, valor: null });
  useEffect(() => {
    let ativo = true;
    carregar()
      .then((v) => ativo && setEstado({ chave, valor: v }))
      .catch(() => ativo && setEstado({ chave, valor: "erro" }));
    return () => {
      ativo = false;
    };
  }, [chave]);
  return estado.chave === chave ? estado.valor : null;
}

export function Carregando() {
  return (
    <div className="flex animate-pulse flex-col gap-5" aria-hidden>
      <div className="h-8 w-44 rounded-xl bg-cartao" />
      <div className="flex gap-3 overflow-hidden">
        <div className="size-24 shrink-0 rounded-2xl bg-cartao" />
        <div className="size-24 shrink-0 rounded-2xl bg-cartao" />
        <div className="size-24 shrink-0 rounded-2xl bg-cartao" />
      </div>
      <div className="h-44 rounded-3xl bg-cartao" />
      <div className="flex flex-col gap-2 rounded-3xl bg-cartao p-5">
        <div className="h-4 w-2/3 rounded bg-papel" />
        <div className="h-4 w-1/3 rounded bg-papel" />
      </div>
    </div>
  );
}

export function Indisponivel() {
  return <p className="py-10 text-center text-tinta-suave">Não foi possível abrir agora. Tente de novo com internet.</p>;
}

export function EscolhaDeDia({
  total,
  atual,
  feitos,
  hoje,
  onChange,
  rotulo = (i: number) => String(i),
}: {
  total: number;
  atual: number;
  feitos: number[];
  hoje?: number;
  onChange: (dia: number) => void;
  rotulo?: (dia: number) => string;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Dias">
      {Array.from({ length: total }, (_, i) => i + 1).map((d) => {
        const feito = feitos.includes(d);
        const escolhido = d === atual;
        return (
          <button
            key={d}
            type="button"
            onClick={() => onChange(d)}
            aria-pressed={escolhido}
            aria-label={`${ordinal(d)} dia${feito ? ", rezado" : ""}${d === hoje ? ", hoje" : ""}`}
            className={`relative grid size-11 place-items-center rounded-full border-2 text-sm font-semibold transition-colors ${
              escolhido
                ? "border-primario bg-primario text-sobre-primario"
                : feito
                  ? "border-destaque/60 bg-marca-fundo text-destaque-texto"
                  : "border-borda bg-cartao text-tinta-suave"
            } ${d === hoje && !escolhido ? "ring-2 ring-destaque/40 ring-offset-2 ring-offset-papel" : ""}`}
          >
            {feito && !escolhido ? <Check className="size-5" aria-hidden /> : rotulo(d)}
          </button>
        );
      })}
    </div>
  );
}

export function BotaoRezei({ feito, onClick, children }: { feito: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={feito}
      className={`flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl px-4 text-lg font-semibold ${
        feito ? "border border-borda bg-cartao text-destaque-texto" : "bg-primario text-sobre-primario"
      }`}
    >
      {feito && <Check className="size-6" aria-hidden />}
      {children}
    </button>
  );
}
