import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, ChevronRight, Megaphone } from "lucide-react";
import { novidadesDasIgrejas, type Publicacao } from "@/paroquias/api";
import { igrejasQueSigo, CHAVE_IGREJAS_SEGUIDAS } from "@/paroquias/seguidas";
import { LISTA } from "@/components/Cartao";
import { dataDoEvento } from "@/components/Mural";

export function NovidadesDasIgrejas() {
  const [lista, setLista] = useState<(Publicacao & { paroquias: { nome: string } | null })[]>([]);
  const [versao, setVersao] = useState(0);

  useEffect(() => {
    const ouvir = () => setVersao((v) => v + 1);
    window.addEventListener(CHAVE_IGREJAS_SEGUIDAS, ouvir);
    return () => window.removeEventListener(CHAVE_IGREJAS_SEGUIDAS, ouvir);
  }, []);

  useEffect(() => {
    let ativo = true;
    novidadesDasIgrejas(igrejasQueSigo())
      .then((r) => ativo && setLista(r))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [versao]);

  if (!lista.length) return null;
  return (
    <section>
      <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">Minhas igrejas</h2>
      <div className={LISTA}>
        {lista.map((p) => (
          <Link key={p.id} to={`/missas/paroquia/${p.paroquia_id}`} className="flex min-h-16 items-center gap-3 px-4 py-3 transition-colors hover:bg-marca-fundo/60">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-marca-fundo text-destaque-texto">
              {p.tipo === "evento" ? <CalendarDays className="size-5" aria-hidden /> : <Megaphone className="size-5" aria-hidden />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-medium leading-snug text-tinta">{p.titulo}</span>
              <span className="block text-sm text-tinta-suave">{[p.paroquias?.nome, p.tipo === "evento" && p.evento_em ? dataDoEvento(p.evento_em) : ""].filter(Boolean).join(" · ")}</span>
            </span>
            <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          </Link>
        ))}
      </div>
    </section>
  );
}
