import { caminhoDeDevocao, textoDoCredito, useImagensDeDevocao } from "@/lib/imagens";

export function ImagemComCredito({ chave, alt }: { chave: string; alt: string }) {
  const c = useImagensDeDevocao()[chave];
  if (!c) return null;
  return (
    <figure className="overflow-hidden rounded-3xl bg-cartao">
      <img src={caminhoDeDevocao(c)} alt={alt} className="h-56 w-full object-cover" style={{ objectPosition: c.foco ?? "50% 30%" }} />
      <figcaption className="px-4 py-2 text-xs text-tinta-suave">
        <a href={c.url} target="_blank" rel="noreferrer" className="underline underline-offset-2">
          {[c.obra, textoDoCredito(c)].filter(Boolean).join(". ")}
        </a>
      </figcaption>
    </figure>
  );
}
