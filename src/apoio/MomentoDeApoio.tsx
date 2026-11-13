import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { HandHeart } from "lucide-react";
import { NOME_DO_APP } from "@/marca";
import { ehNativo } from "@/lib/nativo";
import { ehApoiador, usePreferencias } from "@/lib/preferencias";
import { hoje } from "@/liturgia/datas";
import { guardarPedido, lerUltimoPedido, podePedirApoio } from "./momento";

export function useMomentoDeApoio(): { visivel: boolean; oferecer: () => void; fechar: () => void } {
  const { preferencias } = usePreferencias();
  const [visivel, setVisivel] = useState(false);
  const oferecer = useCallback(() => {
    const d = hoje();
    if (!podePedirApoio({ ultimo: lerUltimoPedido(), hoje: d, apoiador: ehApoiador(preferencias), nativo: ehNativo() })) return;
    guardarPedido(d);
    setVisivel(true);
  }, [preferencias]);
  const fechar = useCallback(() => setVisivel(false), []);
  return { visivel, oferecer, fechar };
}

export function CartaoDeApoio({ titulo, frase = "Que bom rezar com você.", aoFechar }: { titulo?: string; frase?: string; aoFechar: () => void }) {
  return (
    <section aria-label="Apoie o app" className="flex flex-col gap-3 rounded-3xl border border-borda bg-cartao p-5">
      {titulo && (
        <span className="flex items-center gap-2 text-destaque-texto">
          <HandHeart className="size-5 shrink-0" aria-hidden />
          <span className="text-sm font-semibold uppercase tracking-wide">{titulo}</span>
        </span>
      )}
      <p className="leading-relaxed text-tinta">
        {frase} O app {NOME_DO_APP} é gratuito e sem anúncios, e vive do apoio de quem reza com ele.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <button type="button" onClick={aoFechar} className="min-h-12 rounded-xl border border-borda bg-papel px-4 font-semibold text-tinta">
          Agora não
        </button>
        <Link to="/apoie" className="flex min-h-12 items-center justify-center rounded-xl bg-primario px-4 font-semibold text-sobre-primario">
          Apoiar
        </Link>
      </div>
    </section>
  );
}
