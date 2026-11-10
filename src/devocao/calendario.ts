import { dia, diferencaEmDias, somaDias, type Dia } from "@/liturgia/datas";
import { pascoa, pentecostes, primeiroDomingoDoAdvento, quartaDeCinzas } from "@/liturgia/calendario";
import type { Desafio, Festa, Novena } from "./catalogo";

export function dataDaFesta(f: Festa, ano: number): Dia {
  if ("mes" in f) return dia(ano, f.mes, f.dia);
  if (f.movel === "pentecostes") return pentecostes(ano);
  if (f.movel === "sagrado-coracao") return somaDias(pentecostes(ano), 19);
  return somaDias(pascoa(ano), 7);
}

export const inicioDaNovena = (n: Novena, ano: number): Dia =>
  somaDias(dataDaFesta(n.festa, ano), n.terminaNaFesta ? -(n.dias - 1) : -n.dias);

export interface Janela {
  inicio: Dia;
  fim: Dia;
}

export function proximaNovena(n: Novena, d: Dia): Janela {
  for (const ano of [d.getUTCFullYear() - 1, d.getUTCFullYear(), d.getUTCFullYear() + 1]) {
    const inicio = inicioDaNovena(n, ano);
    const fim = somaDias(inicio, n.dias - 1);
    if (diferencaEmDias(fim, d) >= 0) return { inicio, fim };
  }
  throw new Error("sem data");
}

export function diaDaNovena(n: Novena, d: Dia): number | null {
  const { inicio } = proximaNovena(n, d);
  const i = diferencaEmDias(d, inicio);
  return i >= 0 && i < n.dias ? i + 1 : null;
}

export function janelaDoDesafio(desafio: Desafio, ano: number): Janela {
  const p = desafio.periodo;
  if (p === "quaresma") {
    const inicio = quartaDeCinzas(ano);
    return { inicio, fim: somaDias(inicio, desafio.dias - 1) };
  }
  if (p === "advento") return { inicio: primeiroDomingoDoAdvento(ano), fim: dia(ano, 12, 24) };
  return { inicio: dia(ano, p.mes, 1), fim: somaDias(dia(p.mes === 12 ? ano + 1 : ano, (p.mes % 12) + 1, 1), -1) };
}

export function proximoDesafio(desafio: Desafio, d: Dia): Janela {
  for (const ano of [d.getUTCFullYear(), d.getUTCFullYear() + 1]) {
    const j = janelaDoDesafio(desafio, ano);
    if (diferencaEmDias(j.fim, d) >= 0) return j;
  }
  throw new Error("sem data");
}

export const diasDaJanela = (j: Janela) => diferencaEmDias(j.fim, j.inicio) + 1;

export function etapaDaPosicao(desafio: Desafio, j: Janela, posicao: number): number {
  if (desafio.periodo !== "advento") return posicao;
  const data = somaDias(j.inicio, posicao);
  const dezessete = dia(data.getUTCFullYear(), 12, 17);
  const depois = diferencaEmDias(data, dezessete);
  return depois >= 0 ? 20 + depois : posicao;
}

export function posicaoNoDesafio(desafio: Desafio, d: Dia): { janela: Janela; posicao: number } | null {
  const janela = proximoDesafio(desafio, d);
  const posicao = diferencaEmDias(d, janela.inicio);
  return posicao >= 0 ? { janela, posicao } : null;
}

export const domingoDeRamos = (ano: number): Dia => somaDias(pascoa(ano), -7);

export function diaDaSemanaSanta(d: Dia): number | null {
  const i = diferencaEmDias(d, domingoDeRamos(d.getUTCFullYear()));
  return i >= 0 && i < 8 ? i : null;
}

export const NOTURNO_DO_DIA = [0, 0, 1, 2, 0, 1, 2] as const;

export const NOMES_DA_SEMANA_SANTA = [
  "Domingo de Ramos",
  "Segunda-feira Santa",
  "Terça-feira Santa",
  "Quarta-feira Santa",
  "Quinta-feira Santa",
  "Sexta-feira da Paixão",
  "Sábado Santo",
  "Domingo de Páscoa",
];

export const ordinal = (n: number) => `${n}º`;
