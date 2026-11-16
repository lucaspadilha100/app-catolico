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
  const [tentativa, setTentativa] = useState(0);

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
  }, [canonica, tentativa]);

  useEffect(() => {
    if (!erro) return;
    const denovo = () => setTentativa((n) => n + 1);
    window.addEventListener("online", denovo);
    return () => window.removeEventListener("online", denovo);
  }, [erro]);

  if (erro)
    return (
      <button type="button" onClick={() => setTentativa((n) => n + 1)} className="mt-2 flex min-h-11 items-center text-tinta-suave underline underline-offset-4">
        Sem conexão para abrir o texto. Tentar de novo
      </button>
    );
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

export function NotaDaTraducao({ className = "" }: { className?: string }) {
  return (
    <p className={`font-leitura text-sm italic leading-relaxed text-tinta-suave ${className}`}>
      Tradução do Padre Antônio Pereira de Figueiredo, edição de 1950, em domínio público. Revisada pela equipe e conferida versículo a versículo com a Vulgata latina e com os textos originais em hebraico, aramaico e grego.
    </p>
  );
}
