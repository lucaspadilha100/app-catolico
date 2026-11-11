import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, type LucideIcon } from "lucide-react";

export function Cartao({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`rounded-3xl bg-cartao p-5 ${className}`}>{children}</section>;
}

export function TituloCartao({ icone: Icone, children }: { icone: LucideIcon; children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-destaque-texto">
      <Icone className="size-4" aria-hidden />
      {children}
    </h2>
  );
}

export const LISTA = "flex flex-col divide-y divide-borda overflow-hidden rounded-3xl bg-cartao";
export const LINHA = "flex min-h-14 items-center gap-3 px-4 py-3 transition-colors hover:bg-marca-fundo/70";

export function Grupo({ titulo, children }: { titulo?: string; children: ReactNode }) {
  return (
    <section>
      {titulo && <h2 className="titulo-secao mb-3 px-1">{titulo}</h2>}
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

export function Miniatura({ imagem, foco, icone: Icone, tamanho = "size-11" }: { imagem?: string | null; foco?: string; icone: LucideIcon; tamanho?: string }) {
  return imagem ? (
    <img src={imagem} alt="" loading="lazy" className={`${tamanho} shrink-0 rounded-2xl bg-marca-fundo object-cover`} style={{ objectPosition: foco ?? "50% 30%" }} />
  ) : (
    <span className={`grid ${tamanho} shrink-0 place-items-center rounded-2xl bg-papel text-tinta`}>
      <Icone className="size-5" aria-hidden />
    </span>
  );
}

export function ItemLista({
  icone,
  titulo,
  detalhe,
  para,
  imagem,
  foco,
}: {
  icone: LucideIcon;
  titulo: string;
  detalhe?: string;
  para?: string;
  imagem?: string | null;
  foco?: string;
}) {
  const conteudo = (
    <>
      <Miniatura imagem={imagem} foco={foco} icone={icone} tamanho={imagem ? "size-14" : "size-11"} />
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
  return <h1 className="titulo-pagina mb-6">{children}</h1>;
}
