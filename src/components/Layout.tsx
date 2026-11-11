import { Suspense, useEffect } from "react";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { BookOpen, Church, HandHeart, Menu, Sunrise, type LucideIcon } from "lucide-react";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { usePreferencias } from "@/lib/preferencias";
import { ehNativo } from "@/lib/nativo";
import { Rolagem } from "@/components/Rolagem";
import { BoasVindas } from "@/components/BoasVindas";
import { Carregando } from "@/components/Devocao";
import { renovarSeFaltar } from "@/lembretes/lembretes";
import { PonteNativa } from "@/components/PonteNativa";
import { NOME_DO_APP } from "@/marca";
import { contarAbertura } from "@/conta/uso";

interface ItemMenu {
  para: string;
  nome: string;
  icone: LucideIcon;
}

export const MENU: ItemMenu[] = [
  { para: "/", nome: "Hoje", icone: Sunrise },
  { para: "/rezar", nome: "Rezar", icone: HandHeart },
  { para: "/biblia", nome: "Bíblia", icone: BookOpen },
  { para: "/missas", nome: "Missas", icone: Church },
  { para: "/mais", nome: "Mais", icone: Menu },
];

function Marca({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 text-marca ${className}`}>
      <span className="simbolo w-9" aria-hidden />
      <span className="font-leitura text-xl font-semibold tracking-tight">{NOME_DO_APP}</span>
    </Link>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  const liturgia = useDiaLiturgico();
  const { diocese } = usePreferencias().preferencias;

  useEffect(() => {
    const reenviar = () => {
      try {
        if (!localStorage.getItem("santinho-avisos-pendentes")) return;
      } catch {
        return;
      }
      void import("@/biblia/avisos").then((m) => m.reenviarAvisos());
    };
    reenviar();
    window.addEventListener("online", reenviar);
    return () => window.removeEventListener("online", reenviar);
  }, []);

  useEffect(() => {
    const t = setTimeout(renovarSeFaltar, 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setTimeout(contarAbertura, 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.cor = liturgia.cor;
  }, [liturgia.cor]);

  useEffect(() => {
    if (!ehNativo()) return;
    const t = setTimeout(() => void import("@/lib/widget").then((m) => m.atualizarWidget(diocese)), 4000);
    return () => clearTimeout(t);
  }, [diocese, liturgia.data.getTime()]);

  return (
    <div className="min-h-dvh md:flex">
      <Rolagem />
      <PonteNativa />
      {pathname === "/" && <BoasVindas />}
      <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col gap-6 border-r border-borda bg-cartao px-4 py-6 md:flex">
        <Marca className="px-2" />
        <nav className="flex flex-col gap-1">
          {MENU.map(({ para, nome, icone: Icone }) => (
            <NavLink
              key={para}
              to={para}
              end={para === "/"}
              className={({ isActive }) =>
                `flex min-h-11 items-center gap-3 rounded-xl px-3 text-[0.95rem] font-medium transition-colors ${
                  isActive ? "bg-marca-fundo text-destaque-texto" : "text-tinta-suave hover:bg-marca-fundo/60 hover:text-tinta"
                }`
              }
            >
              <Icone className="size-5" aria-hidden />
              {nome}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-10 border-b border-borda bg-papel/90 px-4 pb-2 pt-[max(0.5rem,env(safe-area-inset-top))] backdrop-blur md:hidden">
          <Marca />
        </header>

        <main className="mx-auto w-full max-w-2xl px-4 pb-28 pt-5 md:px-8 md:pb-12 md:pt-10">
          <Suspense fallback={<Carregando />}>
            <Outlet />
          </Suspense>
        </main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-10 grid grid-cols-5 border-t border-borda bg-cartao/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        {MENU.map(({ para, nome, icone: Icone }) => (
          <NavLink
            key={para}
            to={para}
            end={para === "/"}
            className={({ isActive }) =>
              `flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-medium ${
                isActive ? "text-destaque-texto" : "text-tinta-suave"
              }`
            }
          >
            <Icone className="size-6" aria-hidden />
            {nome}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
