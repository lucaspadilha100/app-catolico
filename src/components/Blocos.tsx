import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { formatarReferencia } from "@/liturgia/lecionario";
import { paraIso, type Dia } from "@/liturgia/datas";
import { oracao } from "@/oracao/oracoes";
import type { Bloco } from "@/devocao/tipos";
import { TextoDaOracao } from "@/components/TextoDaOracao";
import { TextoDaLeitura } from "@/components/TextoBiblico";

function salmoGrego(cap: number, v: number): number {
  if (cap <= 8 || cap >= 148) return cap;
  if (cap <= 10) return 9;
  if (cap <= 113) return cap - 1;
  if (cap <= 115) return 113;
  if (cap === 116) return v <= 9 ? 114 : 115;
  if (cap <= 146) return cap - 1;
  return v <= 11 ? 146 : 147;
}

export function referenciaParaLer(canonica: string): string {
  const salmos: Record<string, number> = {};
  for (const m of canonica.matchAll(/PSA (\d+):(\d+)/g)) salmos[`${m[1]}:${m[2]}`] = salmoGrego(Number(m[1]), Number(m[2]));
  return formatarReferencia(canonica, salmos);
}

const ROTULO = "text-xs font-semibold uppercase tracking-wide text-destaque-texto";

function UmBloco({ b, data }: { b: Bloco; data?: Dia }) {
  if ("leitura" in b)
    return (
      <div className="rounded-2xl border border-borda bg-cartao p-4 sm:p-5">
        {b.titulo && <p className={`${ROTULO} mb-1`}>{b.titulo}</p>}
        <p className="font-leitura text-lg font-semibold text-destaque-texto">{referenciaParaLer(b.leitura)}</p>
        <TextoDaLeitura canonica={b.leitura} poema={!!b.poema} inicio={b.inicio} fim={b.fim} />
      </div>
    );
  if ("rezar" in b) {
    const o = oracao(b.rezar);
    return (
      <div className="flex flex-col gap-2">
        <p className={ROTULO}>
          {o.nome}
          {b.vezes && b.vezes > 1 ? ` · ${b.vezes} vezes` : ""}
        </p>
        <TextoDaOracao linhas={o.pt} lingua="pt" />
      </div>
    );
  }
  if ("linhas" in b)
    return (
      <div className="flex flex-col gap-2">
        {b.titulo && <p className={ROTULO}>{b.titulo}</p>}
        <TextoDaOracao linhas={b.linhas} lingua="pt" />
      </div>
    );
  if ("texto" in b) return <p className="font-leitura text-[1.1rem] leading-[1.75] text-tinta">{b.texto}</p>;
  if ("antifona" in b)
    return (
      <p className="flex items-baseline gap-2 font-leitura text-[1.1rem] leading-[1.75] text-tinta">
        <span className="shrink-0 font-sans text-sm font-bold text-destaque-texto">Ant.</span>
        <span>{b.antifona}</span>
      </p>
    );
  if ("rubrica" in b) return <p className="text-[0.95rem] italic text-tinta-suave">{b.rubrica}</p>;
  if ("pratica" in b)
    return (
      <div className="rounded-2xl bg-marca-fundo px-4 py-3">
        <p className={ROTULO}>Para hoje</p>
        <p className="mt-1 text-tinta">{b.pratica}</p>
      </div>
    );
  if ("ir" in b) {
    const para = b.ir === "liturgia" ? (data ? `/liturgia/${paraIso(data)}` : "/liturgia") : b.ir;
    return (
      <Link
        to={para}
        className="flex min-h-12 items-center justify-between gap-3 rounded-xl border border-borda bg-papel px-4 font-semibold text-destaque-texto"
      >
        {b.rotulo}
        <ChevronRight className="size-5 shrink-0" aria-hidden />
      </Link>
    );
  }
  if ("titulo" in b) return <h3 className="pt-2 font-leitura text-xl font-semibold text-marca">{b.titulo}</h3>;
  return null;
}

export function Blocos({ blocos, data }: { blocos: Bloco[]; data?: Dia }) {
  return (
    <div className="flex flex-col gap-5">
      {blocos.map((b, i) => (
        <UmBloco key={i} b={b} data={data} />
      ))}
    </div>
  );
}
