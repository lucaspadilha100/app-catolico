import { livroPorCodigo } from "./livros";
import estado from "./dados/estado.json";

const ARQUIVOS = estado as Record<string, { arquivo: string }>;

export const VERSAO_DA_BIBLIA = "f1";

export interface LivroDaBiblia {
  codigo: string;
  capitulos: string[][];
}

export interface Versiculo {
  capitulo: number;
  versiculo: number;
  texto: string;
}

export interface Trecho {
  livro: string;
  versiculos: Versiculo[];
}

export interface MapaHebraico {
  [livro: string]: [capH: number, vIniH: number, vFimH: number, capV: number, vIniV: number][];
}

const cache = new Map<string, Promise<LivroDaBiblia>>();

export function carregarLivro(codigo: string): Promise<LivroDaBiblia> {
  let promessa = cache.get(codigo);
  if (!promessa) {
    promessa = fetch(`/biblia/${VERSAO_DA_BIBLIA}/${ARQUIVOS[codigo]?.arquivo ?? `${codigo}.json`}`).then((r) => {
      if (!r.ok) throw new Error(`Livro ${codigo} indisponível`);
      return r.json() as Promise<LivroDaBiblia>;
    });
    promessa.catch(() => cache.delete(codigo));
    cache.set(codigo, promessa);
  }
  return promessa;
}

let mapa: Promise<MapaHebraico> | null = null;
export function carregarMapaHebraico(): Promise<MapaHebraico> {
  mapa ??= import("./dados/mapa-hebraico.json").then((m) => m.default as unknown as MapaHebraico);
  return mapa;
}

export function paraVulgata(livro: string, cap: number, verso: number, mapa: MapaHebraico): [number, number] {
  for (const [capH, ini, fim, capV, iniV] of mapa[livro] ?? []) {
    if (capH === cap && verso >= ini && verso <= fim) return [capV, iniV + (verso - ini)];
  }
  return [cap, verso];
}

interface Intervalo {
  livro: string;
  de: [number, number];
  ate: [number, number];
}

const LETRAS_ESTER = "klmnopqrstuvwxyz";

export function intervalosDaReferencia(canonica: string): Intervalo[] {
  const corpo = canonica.replace(/^cf\. /, "");
  const intervalos: Intervalo[] = [];
  let livro = "";
  for (const trecho of corpo.split(";")) {
    const m = /^(?:([1-3]?[A-Z]{2,3}) )?(\d+):(.*)$/.exec(trecho.trim());
    if (!m) continue;
    livro = m[1] ?? livro;
    let cap = Number(m[2]);
    for (const item of m[3]!.split(".")) {
      if (!item) continue;
      const [ini, fim] = item.split("-");
      const bruto = (p: string): [number, string] => {
        if (!p.includes(":")) return [cap, p];
        const [c, v] = p.split(":");
        return [Number(c), v!];
      };
      const converter = ([c, v]: [number, string]): [number, number] => {
        const est = /^17([k-z])/.exec(v);
        if (livro === "EST" && c === 4 && est) return [14, LETRAS_ESTER.indexOf(est[1]!) + 1];
        return [c, Number(/^\d+/.exec(v)?.[0] ?? 0)];
      };
      const inicio = bruto(ini!);
      const final = fim ? bruto(fim) : inicio;
      cap = final[0];
      intervalos.push({ livro, de: converter(inicio), ate: converter(final) });
    }
  }
  return intervalos;
}

const NUMERACAO_DA_VULGATA = new Set(["DAN", "TOB", "JDT", "EST", "1MA", "2MA", "WIS", "SIR", "BAR"]);

const PARES: Record<string, string> = { "“": "”", "‘": "’" };

function aspasAbertas(textos: string[], inicio: string[] = []): string[] {
  const pilha = [...inicio];
  for (const texto of textos) {
    [...texto].forEach((ch, i, letras) => {
      if (ch === "“" || ch === "‘") pilha.push(ch);
      else if (ch === "”" || ch === "’") {
        if (ch === "’" && /\p{L}/u.test(letras[i - 1] ?? "") && /\p{L}/u.test(letras[i + 1] ?? "")) return;
        const topo = pilha.lastIndexOf(ch === "”" ? "“" : "‘");
        if (topo >= 0) pilha.splice(topo);
      }
    });
  }
  return pilha;
}

export function equilibrarAspas(anteriores: string[], trecho: string[]): string[] {
  if (!trecho.length) return trecho;
  const abertas = aspasAbertas(anteriores);
  const resultado = [...trecho];
  resultado[0] = abertas.join("") + resultado[0];
  const pendentes = aspasAbertas(resultado);
  resultado[resultado.length - 1] += pendentes.reverse().map((a) => PARES[a]).join("");
  return resultado;
}

export async function textoDaReferencia(canonica: string): Promise<Trecho[]> {
  const intervalos = intervalosDaReferencia(canonica);
  const mapaH = await carregarMapaHebraico();
  const trechos: Trecho[] = [];
  for (const { livro, de, ate } of intervalos) {
    if (!livroPorCodigo(livro)) continue;
    const dados = await carregarLivro(livro);
    const converter = (c: number, v: number): [number, number] =>
      NUMERACAO_DA_VULGATA.has(livro) ? [c, v] : paraVulgata(livro, c, v, mapaH);
    const [c1, v1] = converter(...de);
    const [c2, v2] = converter(...ate);
    const versiculos: Versiculo[] = [];
    for (let c = c1; c <= c2; c++) {
      const capitulo = dados.capitulos[c - 1] ?? [];
      const primeiro = c === c1 ? v1 : 1;
      const ultimo = c === c2 ? v2 : capitulo.length;
      for (let v = primeiro; v <= ultimo; v++) {
        const texto = capitulo[v - 1];
        if (texto) versiculos.push({ capitulo: c, versiculo: v, texto });
      }
    }
    const textos = equilibrarAspas(
      (dados.capitulos[c1 - 1] ?? []).slice(0, v1 - 1),
      versiculos.map((v) => v.texto),
    );
    versiculos.forEach((v, i) => (v.texto = textos[i]!));
    const anterior = trechos[trechos.length - 1];
    if (anterior && anterior.livro === livro) anterior.versiculos.push(...versiculos);
    else trechos.push({ livro, versiculos });
  }
  return trechos;
}
