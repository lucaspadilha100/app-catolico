import type { ReactNode } from "react";
import { Link, useNavigate, type NavigateFunction } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const CLASSE = "-ml-1 flex min-h-11 w-fit items-center gap-1 pr-3 font-medium text-tinta-suave";

export function Voltar({ para, children }: { para: string; children: ReactNode }) {
  const navegar = useNavigate();
  const indice = (window.history.state as { idx?: number } | null)?.idx ?? 0;
  if (indice > 0)
    return (
      <button type="button" onClick={() => navegar(-1)} className={CLASSE}>
        <ChevronLeft className="size-5" aria-hidden />
        Voltar
      </button>
    );
  return (
    <Link to={para} className={CLASSE}>
      <ChevronLeft className="size-5" aria-hidden />
      {children}
    </Link>
  );
}

export function sair(navegar: NavigateFunction, para: string) {
  const indice = (window.history.state as { idx?: number } | null)?.idx ?? 0;
  if (indice > 0) navegar(-1);
  else navegar(para, { replace: true });
}
