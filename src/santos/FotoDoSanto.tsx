import { useState, type CSSProperties } from "react";
import { focoDaImagem, fotoDoSanto } from "./santos";
import type { FotoDoIndice } from "./tipos";

export function Moldura({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center justify-center bg-marca-fundo ring-1 ring-inset ring-marca/10 ${className}`} aria-hidden>
      <span className="simbolo w-2/5 max-w-20 text-marca/30" />
    </span>
  );
}

export function FotoDoSanto({
  santo,
  largura,
  altura,
  className = "",
  alt = "",
  ajuste = "cover",
  style,
  aoFalhar,
}: {
  santo: { imagem?: FotoDoIndice } | null | undefined;
  largura: number;
  altura: number;
  className?: string;
  alt?: string;
  ajuste?: "cover" | "contain";
  style?: CSSProperties;
  aoFalhar?: () => void;
}) {
  const url = fotoDoSanto(santo);
  const [falhou, setFalhou] = useState<string | null>(null);
  if (!url || falhou === url) return <Moldura className={className} />;
  return (
    <img
      key={url}
      src={url}
      alt={alt}
      width={largura}
      height={altura}
      loading="lazy"
      decoding="async"
      crossOrigin="anonymous"
      onError={() => {
        setFalhou(url);
        aoFalhar?.();
      }}
      className={`${ajuste === "cover" ? "object-cover" : "object-contain"} ${className}`}
      style={{ objectPosition: santo?.imagem ? focoDaImagem(santo) : undefined, ...style }}
    />
  );
}
