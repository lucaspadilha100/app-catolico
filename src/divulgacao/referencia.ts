import { LIVROS } from "@/biblia/livros";

const limpar = (s: string, tirarAcento: boolean) => {
  let r = s.replace(/[.º°]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
  if (tirarAcento) r = r.normalize("NFD").replace(/\p{M}/gu, "");
  return r;
};

export interface ReferenciaLida {
  canonica: string;
  rotulo: string;
}

export function lerReferencia(entrada: string): ReferenciaLida | null {
  const m = /^(.+?)\s*(\d+)\s*[,.:]\s*(\d+)(?:\s*-\s*(\d+))?$/.exec(entrada.trim());
  if (!m) return null;
  const acha = (campo: (l: (typeof LIVROS)[number]) => string, tirarAcento: boolean) => {
    const nome = limpar(m[1]!, tirarAcento);
    const semEspaco = nome.replace(/\s/g, "");
    return LIVROS.find((l) => {
      const c = limpar(campo(l), tirarAcento);
      return c === nome || c.replace(/\s/g, "") === semEspaco;
    });
  };
  const livro =
    acha((l) => l.abreviatura, false) ??
    acha((l) => l.nome, false) ??
    acha((l) => l.abreviatura, true) ??
    acha((l) => l.nome, true) ??
    acha((l) => l.slug, true) ??
    acha((l) => l.codigo, true);
  if (!livro) return null;
  const cap = Number(m[2]);
  const de = Number(m[3]);
  const ate = m[4] ? Number(m[4]) : null;
  if (cap < 1 || cap > livro.capitulos || de < 1 || (ate !== null && ate < de)) return null;
  return {
    canonica: `${livro.codigo} ${cap}:${de}${ate ? `-${ate}` : ""}`,
    rotulo: `${livro.abreviatura} ${cap},${de}${ate ? `-${ate}` : ""}`,
  };
}
