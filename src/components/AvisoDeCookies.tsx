import { Link } from "react-router-dom";
import { usePreferencias } from "@/lib/preferencias";
import { analiseDisponivel, escolherCookies, useEscolhaDeCookies } from "@/lib/analise";
import { BOTAO, BOTAO_CLARO } from "@/components/Botao";

export const ROTULO_DOS_COOKIES = "Cookies de uso";

export const TEXTO_DOS_COOKIES = {
  aviso: "Usamos cookies para saber quais partes do app ajudam mais e melhorá-lo. Nada do que você reza ou escreve é coletado.",
  aceitar: "Aceitar",
  recusar: "Recusar",
  saibaMais: "Saiba mais",
};

export function AvisoDeCookies() {
  const escolha = useEscolhaDeCookies();
  const { preferencias } = usePreferencias();
  if (!analiseDisponivel() || escolha || !preferencias.boasVindas) return null;
  return (
    <div role="region" aria-label="Cookies" className="fixed inset-x-0 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-30 animate-subir px-3 pb-3 md:bottom-0 md:left-60 md:pb-6">
      <div className="mx-auto flex max-w-xl flex-col gap-3 rounded-3xl border border-borda bg-cartao p-4 shadow-lg">
        <p className="text-[0.9375rem] leading-relaxed text-tinta">
          {TEXTO_DOS_COOKIES.aviso}{" "}
          <Link to="/privacidade" className="inline-flex min-h-11 items-center font-semibold text-destaque-texto underline underline-offset-4">
            {TEXTO_DOS_COOKIES.saibaMais}
          </Link>
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button type="button" onClick={() => escolherCookies("nao")} className={BOTAO_CLARO}>
            {TEXTO_DOS_COOKIES.recusar}
          </button>
          <button type="button" onClick={() => escolherCookies("sim")} className={BOTAO}>
            {TEXTO_DOS_COOKIES.aceitar}
          </button>
        </div>
      </div>
    </div>
  );
}
