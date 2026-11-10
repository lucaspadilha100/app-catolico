import { useEffect, useState } from "react";
import { textoDaReferencia, type Trecho } from "@/biblia/texto";

export function recortar<T extends { texto: string }>(versiculos: T[], inicio?: string, fim?: string): T[] {
  if (!versiculos.length) return versiculos;
  const r = [...versiculos];
  if (inicio) {
    const i = r[0]!.texto.indexOf(inicio);
    if (i > 0) r[0] = { ...r[0]!, texto: r[0]!.texto.slice(i) };
  }
  if (fim) {
    const u = r[r.length - 1]!;
    const i = u.texto.indexOf(fim);
    if (i >= 0) r[r.length - 1] = { ...u, texto: u.texto.slice(0, i + fim.length) };
  }
  return r;
}

export function TextoDaLeitura({ canonica, poema, inicio, fim }: { canonica: string; poema: boolean; inicio?: string; fim?: string }) {
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
  const versiculos = recortar(trechos.flatMap((t) => t.versiculos), inicio, fim);
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
