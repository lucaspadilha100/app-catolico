import type { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const CLASSE = "-ml-1 flex min-h-11 w-fit items-center gap-1 pr-3 font-medium text-tinta-suave";

export function Voltar({ para, children }: { para: string; children: ReactNode }) {
  const navegar = useNavigate();
  const { key } = useLocation();
  if (key !== "default")
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
