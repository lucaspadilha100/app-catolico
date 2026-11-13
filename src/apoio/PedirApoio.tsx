import { Link } from "react-router-dom";
import { NOME_DO_APP } from "@/marca";
import { ehNativo } from "@/lib/nativo";
import { ehApoiador, usePreferencias } from "@/lib/preferencias";

export function PedirApoio({ className = "" }: { className?: string }) {
  const { preferencias } = usePreferencias();
  if (ehNativo() || ehApoiador(preferencias)) return null;
  return (
    <div className={`flex flex-col items-center border-t border-borda pt-3 text-center font-sans text-sm leading-relaxed text-tinta-suave ${className}`}>
      <p>O app {NOME_DO_APP} é gratuito e sem anúncios.</p>
      <Link to="/apoie" className="flex min-h-11 items-center px-2 font-semibold text-destaque-texto underline underline-offset-4">
        Ajude a mantê-lo
      </Link>
    </div>
  );
}
