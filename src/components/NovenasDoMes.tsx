import { Link } from "react-router-dom";
import { CalendarDays, ListOrdered } from "lucide-react";
import { NOVENAS } from "@/devocao/catalogo";
import { ordinal, proximaNovena } from "@/devocao/calendario";
import { diaSugeridoDaNovena } from "@/devocao/andamento";
import { diferencaEmDias } from "@/liturgia/datas";
import { caminhoDeDevocao, useImagensDeDevocao } from "@/lib/imagens";

const MES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

const periodo = (a: Date, b: Date) =>
  a.getUTCMonth() === b.getUTCMonth()
    ? `${a.getUTCDate()} a ${b.getUTCDate()} de ${MES[b.getUTCMonth()]}`
    : `${a.getUTCDate()}/${a.getUTCMonth() + 1} a ${b.getUTCDate()}/${b.getUTCMonth() + 1}`;

export function NovenasDoMes({ data }: { data: Date }) {
  const imagens = useImagensDeDevocao();
  const lista = NOVENAS.map((n) => {
    const sugerido = diaSugeridoDaNovena(n, data);
    const j = proximaNovena(n, data);
    return { n, faltam: sugerido ? -1 : diferencaEmDias(j.inicio, data), texto: sugerido ? `${ordinal(sugerido.dia)} dia de ${n.dias}` : periodo(j.inicio, j.fim) };
  })
    .filter((x) => x.faltam <= 30)
    .sort((a, b) => a.faltam - b.faltam)
    .slice(0, 6);
  if (!lista.length) return null;
  return (
    <section>
      <h2 className="titulo-secao mb-3 px-1">Novenas do mês</h2>
      <div className="-mx-4 flex snap-x scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
        {lista.map(({ n, texto, faltam }) => {
          const img = imagens[`novena:${n.id}`];
          return (
            <Link key={n.id} to={`/rezar/novenas/${n.id}`} className="flex w-60 shrink-0 snap-start flex-col gap-2">
              {img ? (
                <img src={caminhoDeDevocao(img)} alt="" loading="lazy" className="h-36 w-60 rounded-3xl bg-cartao object-cover" style={{ objectPosition: img.foco ?? "50% 30%" }} />
              ) : (
                <span className="grid h-36 w-60 place-items-center rounded-3xl bg-cartao text-tinta-suave">
                  <ListOrdered className="size-8" aria-hidden />
                </span>
              )}
              <span className="line-clamp-2 text-[1.0625rem] font-bold leading-snug text-tinta">{n.nome}</span>
              <span className={`flex h-9 w-fit items-center gap-1.5 rounded-full px-3 text-sm font-semibold ${faltam < 0 ? "bg-primario text-sobre-primario" : "bg-cartao text-tinta"}`}>
                <CalendarDays className="size-4" aria-hidden />
                {texto}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
