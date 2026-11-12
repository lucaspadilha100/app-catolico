import { ORACOES, ORACOES_DA_LISTA, type Oracao } from "../oracoes";
import type { OracaoDoDevocionario } from "./tipos";

const ARQUIVOS = import.meta.glob<{ default: OracaoDoDevocionario[] }>(["./*.ts", "!./tipos.ts", "!./index.ts"]);

export type OracaoCompleta = Oracao & { origem?: string; santo?: string };

export interface CategoriaDoDevocionario {
  id: string;
  nome: string;
  arquivos: string[];
  existentes?: (o: Oracao) => boolean;
  grande?: true;
}

const ids = (...lista: string[]) => (o: Oracao) => lista.includes(o.id);

export const CATEGORIAS: CategoriaDoDevocionario[] = [
  { id: "primarias", nome: "Orações primárias", arquivos: [], existentes: (o) => o.grupo === "principais" },
  { id: "manha", nome: "Orações da manhã", arquivos: ["manha"], existentes: ids("manha", "santo-anjo") },
  { id: "noite", nome: "Orações da noite", arquivos: ["noite"], existentes: ids("noite", "ato-de-contricao") },
  { id: "senhor", nome: "Ao Nosso Senhor", arquivos: ["senhor"], existentes: ids("jesus-eu-confio", "o-jesus-que-viveis-em-maria") },
  { id: "espirito-santo", nome: "Ao Espírito Santo", arquivos: ["espirito-santo"], existentes: ids("vinde-espirito-santo", "veni-creator") },
  { id: "eucaristia", nome: "Santíssimo Sacramento", arquivos: ["eucaristia"], existentes: ids("comunhao-espiritual") },
  { id: "nossa-senhora", nome: "À Nossa Senhora", arquivos: ["nossa-senhora"], existentes: (o) => o.grupo === "marianas" },
  { id: "sao-jose", nome: "A São José", arquivos: ["sao-jose"] },
  { id: "santos", nome: "Orações aos santos", arquivos: ["santos-1", "santos-2", "santos-3", "santos-4"], grande: true },
  { id: "diversas", nome: "Orações diversas", arquivos: ["diversas"], existentes: ids("antes-das-refeicoes", "depois-das-refeicoes", "pelos-falecidos") },
  { id: "hinos", nome: "Hinos", arquivos: [], existentes: (o) => o.grupo === "hinos" },
  { id: "ladainhas", nome: "Ladainhas", arquivos: ["ladainhas"], existentes: (o) => o.grupo === "ladainhas", grande: true },
  { id: "latim", nome: "Em latim", arquivos: ["latim"], existentes: (o) => !!o.la && o.grupo !== "terco", grande: true },
  { id: "verdades", nome: "Verdades da fé", arquivos: ["verdades"] },
];

const paraOracao = (o: OracaoDoDevocionario): OracaoCompleta => ({
  id: o.id,
  nome: o.nome,
  latim: o.latim ?? "",
  grupo: "principais",
  pt: o.pt,
  la: o.la,
  origem: o.origem,
  santo: o.santo,
});

const cache = new Map<string, Promise<OracaoCompleta[]>>();

function doArquivo(nome: string): Promise<OracaoCompleta[]> {
  const carregar = ARQUIVOS[`./${nome}.ts`];
  if (!carregar) return Promise.resolve([]);
  if (!cache.has(nome)) cache.set(nome, carregar().then((m) => m.default.map(paraOracao)).catch(() => []));
  return cache.get(nome)!;
}

const semTitulo = (nome: string) => nome.replace(/^(Oração (a|à|ao|aos|às|para pedir a glorificação d[aoe]s?) )/i, "");

export const nomeParaOrdenar = (o: Oracao) =>
  semTitulo(o.nome)
    .replace(/^(São|Santa|Santo|Santos|Santas|Beato|Beata|Bem-aventurad[oa]s?|Venerável|Servo de Deus|Serva de Deus|Nossa Senhora)\s+/i, "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();

export async function oracoesDaCategoria(c: CategoriaDoDevocionario): Promise<OracaoCompleta[]> {
  const novas = (await Promise.all(c.arquivos.map(doArquivo))).flat();
  const existentes = c.existentes ? ORACOES_DA_LISTA.filter(c.existentes) : [];
  const vistos = new Set<string>();
  const todas = [...existentes, ...novas].filter((o) => !vistos.has(o.id) && vistos.add(o.id));
  return c.grande ? todas.sort((a, b) => nomeParaOrdenar(a).localeCompare(nomeParaOrdenar(b), "pt-BR")) : todas;
}

export async function todasDoDevocionario(): Promise<OracaoCompleta[]> {
  const nomes = Object.keys(ARQUIVOS).map((k) => k.slice(2, -3));
  return (await Promise.all(nomes.map(doArquivo))).flat();
}

export async function acharOracao(id: string): Promise<OracaoCompleta | null> {
  if (ORACOES[id]) return ORACOES[id]!;
  return (await todasDoDevocionario()).find((o) => o.id === id) ?? null;
}

export async function oracaoDoSanto(santo: string): Promise<OracaoCompleta | null> {
  const lista = (await Promise.all(["santos-1", "santos-2", "santos-3", "santos-4", "nossa-senhora", "sao-jose"].map(doArquivo))).flat();
  return lista.find((o) => o.santo === santo) ?? null;
}
