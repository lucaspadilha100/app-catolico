import { useEffect, useState } from "react";
import { textoDaReferencia, type Trecho } from "@/biblia/texto";

export function TextoDaLeitura({ canonica, poema }: { canonica: string; poema: boolean }) {
  const [trechos, setTrechos] = useState<Trecho[] | null>(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    let ativo = true;
    setTrechos(null);
    setErro(false);
    textoDaReferencia(canonica)
      .then((t) => ativo && setTrechos(t))
      .catch(() => ativo && setErro(true));
    return () => {
      ativo = false;
    };
  }, [canonica]);

  if (erro) return null;
  if (!trechos) return <div className="mt-2 h-16 animate-pulse rounded-lg bg-marca-fundo" />;
  const versiculos = trechos.flatMap((t) => t.versiculos);
  if (!versiculos.length) return null;

  return (
    <div className={`mt-2 font-leitura text-[1.05rem] leading-[1.8] text-tinta ${poema ? "flex flex-col gap-1" : "sm:text-justify"}`}>
      {versiculos.map((v) => (
        <span key={`${v.capitulo}:${v.versiculo}`} className={poema ? "block" : undefined}>
          <sup className="mr-1 align-[0.35em] font-sans text-[0.65em] font-semibold text-destaque-texto">{v.versiculo}</sup>
          {v.texto}{" "}
        </span>
      ))}
    </div>
  );
}
