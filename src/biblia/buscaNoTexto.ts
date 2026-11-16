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

const LIGACAO = new Set([
  "as", "os", "um", "uma", "uns", "umas", "de", "da", "do", "das", "dos", "em", "na", "no", "nas", "nos", "ao", "aos",
  "por", "pelo", "pela", "pelos", "pelas", "com", "para", "pra", "que", "se", "ou", "nem", "mas", "me", "te", "lhe", "vos",
]);

const LETRA = /[\p{L}\p{N}]/u;

function ocorrencias(base: string, palavra: string): [number, number][] {
  const inteira = LIGACAO.has(palavra);
  const achados: [number, number][] = [];
  let i = base.indexOf(palavra);
  while (i >= 0) {
    const fim = i + palavra.length;
    const comeca = i === 0 || !LETRA.test(base[i - 1]!);
    const termina = fim >= base.length || !LETRA.test(base[fim]!);
    if (comeca && (termina || !inteira)) {
      let ate = fim;
      while (ate < base.length && LETRA.test(base[ate]!)) ate++;
      achados.push([i, ate]);
    }
    i = base.indexOf(palavra, fim);
  }
  return achados;
}

export function trechosEncontrados(texto: string, palavras: string[]): [number, number][] {
  const base = semAcento(texto);
  const fortes = palavras.filter((p) => !LIGACAO.has(p));
  const achados = (fortes.length ? fortes : palavras).flatMap((p) => ocorrencias(base, p));
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
  return palavras.every((p) => ocorrencias(base, p).length > 0);
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
