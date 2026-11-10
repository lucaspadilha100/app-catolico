import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, type LucideIcon } from "lucide-react";

export function Cartao({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-2xl border border-borda bg-cartao p-5 shadow-sm ${className}`}>{children}</section>;
}

export function TituloCartao({ icone: Icone, children }: { icone: LucideIcon; children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-destaque-texto">
      <Icone className="size-4" aria-hidden />
      {children}
    </h2>
  );
}

export const LISTA = "flex flex-col divide-y divide-borda overflow-hidden rounded-2xl border border-borda bg-cartao shadow-sm";
export const LINHA = "flex min-h-14 items-center gap-3 px-4 py-3 transition-colors hover:bg-marca-fundo/60";

export function Grupo({ titulo, children }: { titulo?: string; children: ReactNode }) {
  return (
    <section>
      {titulo && <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">{titulo}</h2>}
      <div className={LISTA}>{children}</div>
    </section>
  );
}

export function EmPreparacao() {
  return (
    <span className="inline-flex items-center rounded-full bg-marca-fundo px-2.5 py-0.5 text-xs font-medium text-tinta-suave">
      Em preparação
    </span>
  );
}

export function ItemLista({
  icone: Icone,
  titulo,
  detalhe,
  para,
}: {
  icone: LucideIcon;
  titulo: string;
  detalhe?: string;
  para?: string;
}) {
  const conteudo = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-marca-fundo text-destaque-texto">
        <Icone className="size-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium">{titulo}</span>
        {detalhe && <span className="block text-sm text-tinta-suave">{detalhe}</span>}
      </span>
      {para ? <ChevronRight className="size-5 text-tinta-suave" aria-hidden /> : <EmPreparacao />}
    </>
  );
  const classe = "flex min-h-16 items-center gap-3 px-4 py-2.5";
  return para ? (
    <Link to={para} className={`${classe} transition-colors hover:bg-marca-fundo/60`}>
      {conteudo}
    </Link>
  ) : (
    <div className={classe}>{conteudo}</div>
  );
}

export function TituloPagina({ children }: { children: ReactNode }) {
  return <h1 className="mb-5 font-leitura text-3xl font-semibold tracking-tight text-marca">{children}</h1>;
}
