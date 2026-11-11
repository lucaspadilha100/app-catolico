import { LIVROS, type Livro } from "./livros";
import { carregarLivro } from "./texto";

export function semAcento(texto: string): string {
  let r = "";
  for (const c of texto) r += (c.normalize("NFD")[0] ?? c).toLowerCase();
  return r;
}

export function palavrasDaBusca(q: string): string[] {
  return semAcento(q)
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((p) => p.length >= 2)
    .slice(0, 6);
}

export function trechosEncontrados(texto: string, palavras: string[]): [number, number][] {
  const base = semAcento(texto);
  const achados: [number, number][] = [];
  for (const p of palavras) {
    let i = base.indexOf(p);
    while (i >= 0) {
      achados.push([i, i + p.length]);
      i = base.indexOf(p, i + p.length);
    }
  }
  achados.sort((a, b) => a[0] - b[0]);
  const juntos: [number, number][] = [];
  for (const a of achados) {
    const ultimo = juntos[juntos.length - 1];
    if (ultimo && a[0] <= ultimo[1]) ultimo[1] = Math.max(ultimo[1], a[1]);
    else juntos.push([...a]);
  }
  return juntos;
}

export const versiculoCombina = (texto: string, palavras: string[]) => {
  const base = semAcento(texto);
  return palavras.every((p) => base.includes(p));
};

export interface Achado {
  livro: Livro;
  capitulo: number;
  versiculo: number;
  texto: string;
}

export async function buscarNaBiblia(
  q: string,
  aoAchar: (achados: Achado[], livro: Livro) => void,
  { limite = 500, livros = LIVROS, cancelado = () => false }: { limite?: number; livros?: Livro[]; cancelado?: () => boolean } = {},
): Promise<{ total: number; cortado: boolean }> {
  const palavras = palavrasDaBusca(q);
  if (!palavras.length) return { total: 0, cortado: false };
  let total = 0;
  for (const livro of livros) {
    if (cancelado()) break;
    const dados = await carregarLivro(livro.codigo);
    const achados: Achado[] = [];
    dados.capitulos.forEach((versos, c) =>
      versos.forEach((texto, v) => {
        if (texto && total + achados.length < limite && versiculoCombina(texto, palavras)) achados.push({ livro, capitulo: c + 1, versiculo: v + 1, texto });
      }),
    );
    total += achados.length;
    aoAchar(achados, livro);
    if (total >= limite) return { total, cortado: true };
  }
  return { total, cortado: false };
}
