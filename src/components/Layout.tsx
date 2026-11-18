import { Suspense, useEffect, useRef, useState } from "react";
import { Falha } from "@/components/Falha";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";
import { BookOpen, Church, HandHeart, Menu, Sunrise, type LucideIcon } from "lucide-react";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { usePreferencias } from "@/lib/preferencias";
import { ehNativo } from "@/lib/nativo";
import { Rolagem } from "@/components/Rolagem";
import { BoasVindas } from "@/components/BoasVindas";
import { AvisoDeCookies } from "@/components/AvisoDeCookies";
import { paginaVista } from "@/lib/analise";
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

const TAMBEM: Record<string, string[]> = {
  "/": ["/liturgia"],
  "/rezar": ["/tercos", "/intencoes", "/grupos"],
  "/mais": ["/santos", "/calendario", "/conta", "/cursos", "/lembretes", "/assistir", "/roteiros", "/escalas", "/correntes", "/apoie", "/santinhos", "/creditos", "/privacidade", "/termos", "/painel", "/diario"],
};

const naSecao = (para: string, caminho: string) =>
  para === "/" ? caminho === "/" || TAMBEM["/"]!.some((p) => caminho.startsWith(p)) : caminho.startsWith(para) || (TAMBEM[para] ?? []).some((p) => caminho === p || caminho.startsWith(`${p}/`));

export const MENU: ItemMenu[] = [
  { para: "/", nome: "Hoje", icone: Sunrise },
  { para: "/rezar", nome: "Rezar", icone: HandHeart },
  { para: "/biblia", nome: "Bíblia", icone: BookOpen },
  { para: "/missas", nome: "Missas", icone: Church },
  { para: "/mais", nome: "Mais", icone: Menu },
];

const telaDo = (caminho: string) => (/^\/biblia\/[^/]+\/[^/]+/.test(caminho) ? "/biblia/leitor" : caminho);

function useEntradaDaTela() {
  const { pathname, state } = useLocation();
  const pedido = (state as { ir?: number } | null)?.ir ?? 0;
  const [ultima, setUltima] = useState({ caminho: pathname, pedido, animar: false });
  if (ultima.caminho !== pathname || ultima.pedido !== pedido) {
    const animar = telaDo(ultima.caminho) !== telaDo(pathname) || (pedido !== 0 && pedido !== ultima.pedido);
    setUltima({ caminho: pathname, pedido, animar });
  }
  return ultima.animar;
}

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
  const naBiblia = pathname.startsWith("/biblia");
  const primeira = useRef(true);
  useEffect(() => {
    if (primeira.current) {
      primeira.current = false;
      return;
    }
    document.title = NOME_DO_APP;
  }, [pathname]);
  useEffect(() => {
    const t = setTimeout(() => paginaVista(pathname), 300);
    return () => clearTimeout(t);
  }, [pathname]);
  const animarTela = useEntradaDaTela();
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
    const tocar = () => {};
    document.addEventListener("touchstart", tocar, { passive: true });
    return () => document.removeEventListener("touchstart", tocar);
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
      <AvisoDeCookies />
      <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col gap-6 border-r border-borda bg-papel px-4 py-6 md:flex">
        <Marca className="px-2" />
        <nav className="flex flex-col gap-1">
          {MENU.map(({ para, nome, icone: Icone }) => (
            <NavLink
              key={para}
              to={para}
              end={para === "/"}
              replace={para !== "/" && pathname.startsWith(para)}
              className={() =>
                `flex min-h-11 items-center gap-3 rounded-xl px-3 text-[0.95rem] font-medium transition-colors ${
                  naSecao(para, pathname) ? "bg-marca-fundo text-destaque-texto" : "text-tinta-suave hover:bg-marca-fundo/60 hover:text-tinta"
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
        {naBiblia ? (
          <header className="sticky top-0 z-10 border-b border-borda bg-papel/90 px-4 pb-2 pt-[max(0.5rem,env(safe-area-inset-top))] backdrop-blur md:hidden">
            <Marca />
          </header>
        ) : (
          <div className="sticky top-0 z-10 h-[env(safe-area-inset-top)] bg-papel/90 backdrop-blur md:hidden" />
        )}

        <main className={`mx-auto w-full max-w-2xl px-4 pb-28 md:px-8 md:pb-12 md:pt-10 ${naBiblia ? "pt-5" : "pt-4"}`}>
          <Falha key={pathname}>
            <Suspense fallback={<Carregando />}>
              <div className={animarTela ? "relative top-0 animate-tela" : undefined}>
                <Outlet />
              </div>
            </Suspense>
          </Falha>
        </main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-10 grid grid-cols-5 border-t border-borda bg-papel/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
        {MENU.map(({ para, nome, icone: Icone }) => (
          <NavLink
            key={para}
            to={para}
            end={para === "/"}
            replace={para !== "/" && pathname.startsWith(para)}
            className={() =>
              `flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-medium ${
                naSecao(para, pathname) ? "text-destaque-texto" : "text-tinta-suave"
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
