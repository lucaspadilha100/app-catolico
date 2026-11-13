import { useState } from "react";
import { Check, Share2 } from "lucide-react";
import { compartilhar } from "@/lib/nativo";

export async function enviarTexto(titulo: string, texto: string, url: string) {
  const r = await compartilhar({ titulo, texto, url });
  if (r === "erro") window.open(`https://wa.me/?text=${encodeURIComponent(`${texto}\n\n${url}`)}`, "_blank", "noopener");
  return r;
}

export function BotaoEnviar({
  titulo,
  rotulo,
  montar,
  className = "bg-cartao",
}: {
  titulo: string;
  rotulo: string;
  montar: () => Promise<{ texto: string; url: string }>;
  className?: string;
}) {
  const [estado, setEstado] = useState<"" | "montando" | "copiado">("");
  async function enviar() {
    if (estado === "montando") return;
    setEstado("montando");
    try {
      const { texto, url } = await montar();
      const r = await enviarTexto(titulo, texto, url);
      if (r === "copiado") {
        setEstado("copiado");
        setTimeout(() => setEstado(""), 2500);
        return;
      }
    } catch {}
    setEstado("");
  }
  return (
    <button
      type="button"
      onClick={() => void enviar()}
      disabled={estado === "montando"}
      className={`flex min-h-11 items-center gap-2 self-start rounded-full px-5 text-[0.9375rem] font-semibold text-tinta disabled:opacity-60 ${className}`}
    >
      {estado === "copiado" ? <Check className="size-[1.125rem] text-destaque-texto" aria-hidden /> : <Share2 className="size-[1.125rem]" aria-hidden />}
      {estado === "copiado" ? "Copiado" : rotulo}
    </button>
  );
}
