// Calendário litúrgico do Brasil, calculado no aparelho (sem servidor).
//
// Fase 1: tempos, semanas, ciclos e as celebrações MÓVEIS (as que dependem
// da Páscoa e do Advento). Santos e solenidades de data fixa entram na Fase 2.
//
// No Brasil, Epifania e Ascensão vão para o DOMINGO; Corpus Christi fica na
// quinta-feira.

import {
  type Dia,
  dia,
  somaDias,
  diaDaSemana,
  diferencaEmDias,
  mesmoDia,
  domingoAntes,
  domingoAteHoje,
  nomeDoDiaDaSemana,
} from "./datas";

export type Tempo = "advento" | "natal" | "comum" | "quaresma" | "triduo" | "pascoa";
export type CorLiturgica = "verde" | "roxo" | "rosa" | "branco" | "vermelho";
export type CicloDominical = "A" | "B" | "C";
export type CicloFerial = "I" | "II";

export interface DiaLiturgico {
  data: Dia;
  tempo: Tempo;
  /** Semana dentro do tempo (Tempo Comum 1–34, Advento 1–4, Quaresma 1–5, Páscoa 1–7). */
  semana: number | null;
  cor: CorLiturgica;
  /** Celebração própria do dia (móvel), se houver. */
  celebracao: string | null;
  /** "Terça-feira da 32ª semana do Tempo Comum" */
  titulo: string;
  /** Ano litúrgico (o ano civil em que ele TERMINA). */
  anoLiturgico: number;
  cicloDominical: CicloDominical;
  cicloFerial: CicloFerial;
}

export const NOME_DO_TEMPO: Record<Tempo, string> = {
  advento: "Advento",
  natal: "Tempo do Natal",
  comum: "Tempo Comum",
  quaresma: "Quaresma",
  triduo: "Tríduo Pascal",
  pascoa: "Tempo Pascal",
};

export const NOME_DA_COR: Record<CorLiturgica, string> = {
  verde: "Verde",
  roxo: "Roxo",
  rosa: "Rosa",
  branco: "Branco",
  vermelho: "Vermelho",
};

/** Domingo de Páscoa (algoritmo gregoriano anônimo / Meeus). */
export function pascoa(ano: number): Dia {
  const a = ano % 19;
  const b = Math.floor(ano / 100);
  const c = ano % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mes = Math.floor((h + l - 7 * m + 114) / 31);
  const diaDoMes = ((h + l - 7 * m + 114) % 31) + 1;
  return dia(ano, mes, diaDoMes);
}

/** 1º domingo do Advento: 4 domingos antes do Natal (entre 27/11 e 3/12). */
export const primeiroDomingoDoAdvento = (ano: number): Dia => somaDias(domingoAntes(dia(ano, 12, 25)), -21);

/** Epifania no Brasil: o domingo entre 2 e 8 de janeiro. */
export function epifania(ano: number): Dia {
  const d2 = dia(ano, 1, 2);
  return somaDias(d2, (7 - diaDaSemana(d2)) % 7);
}

/** Batismo do Senhor: domingo depois da Epifania; se a Epifania cai em 7 ou 8, na segunda-feira seguinte. */
export function batismoDoSenhor(ano: number): Dia {
  const e = epifania(ano);
  return e.getUTCDate() >= 7 ? somaDias(e, 1) : somaDias(e, 7);
}

export const quartaDeCinzas = (ano: number): Dia => somaDias(pascoa(ano), -46);
export const pentecostes = (ano: number): Dia => somaDias(pascoa(ano), 49);

/** Sagrada Família: domingo na oitava do Natal; sem domingo, 30/12. */
export function sagradaFamilia(ano: number): Dia {
  for (let d = 26; d <= 31; d++) {
    const data = dia(ano, 12, d);
    if (diaDaSemana(data) === 0) return data;
  }
  return dia(ano, 12, 30);
}

/** "32º Domingo" (masculino) · "32ª semana" (feminino) */
const ordM = (n: number) => `${n}º`;
const ordF = (n: number) => `${n}ª`;

function celebracaoMovel(d: Dia): { nome: string; cor: CorLiturgica } | null {
  const ano = d.getUTCFullYear();
  const p = pascoa(ano);
  const a1 = primeiroDomingoDoAdvento(ano);
  const igual = (x: Dia) => mesmoDia(d, x);

  if (igual(dia(ano, 12, 25))) return { nome: "Natal do Senhor", cor: "branco" };
  if (igual(dia(ano, 1, 1))) return { nome: "Santa Maria, Mãe de Deus", cor: "branco" };
  if (igual(sagradaFamilia(ano))) return { nome: "Sagrada Família", cor: "branco" };
  if (igual(epifania(ano))) return { nome: "Epifania do Senhor", cor: "branco" };
  if (igual(batismoDoSenhor(ano))) return { nome: "Batismo do Senhor", cor: "branco" };
  if (igual(quartaDeCinzas(ano))) return { nome: "Quarta-feira de Cinzas", cor: "roxo" };
  if (igual(somaDias(p, -7))) return { nome: "Domingo de Ramos e da Paixão do Senhor", cor: "vermelho" };
  if (igual(somaDias(p, -3))) return { nome: "Quinta-feira Santa", cor: "branco" };
  if (igual(somaDias(p, -2))) return { nome: "Sexta-feira da Paixão", cor: "vermelho" };
  if (igual(somaDias(p, -1))) return { nome: "Sábado Santo — Vigília Pascal", cor: "branco" };
  if (igual(p)) return { nome: "Domingo de Páscoa", cor: "branco" };
  if (igual(somaDias(p, 7))) return { nome: "Domingo da Divina Misericórdia", cor: "branco" };
  if (igual(somaDias(p, 42))) return { nome: "Ascensão do Senhor", cor: "branco" };
  if (igual(somaDias(p, 49))) return { nome: "Pentecostes", cor: "vermelho" };
  if (igual(somaDias(p, 56))) return { nome: "Santíssima Trindade", cor: "branco" };
  if (igual(somaDias(p, 60))) return { nome: "Corpus Christi", cor: "branco" };
  if (igual(somaDias(p, 68))) return { nome: "Sagrado Coração de Jesus", cor: "branco" };
  if (igual(somaDias(a1, -7))) return { nome: "Nosso Senhor Jesus Cristo, Rei do Universo", cor: "branco" };
  return null;
}

export function diaLiturgico(d: Dia): DiaLiturgico {
  const ano = d.getUTCFullYear();
  const a1 = primeiroDomingoDoAdvento(ano);
  const p = pascoa(ano);
  const cinzas = quartaDeCinzas(ano);
  const batismo = batismoDoSenhor(ano);

  let tempo: Tempo;
  let semana: number | null = null;
  let cor: CorLiturgica;

  if (diferencaEmDias(d, a1) >= 0) {
    if (diferencaEmDias(d, dia(ano, 12, 25)) >= 0) {
      tempo = "natal";
      cor = "branco";
    } else {
      tempo = "advento";
      semana = Math.floor(diferencaEmDias(d, a1) / 7) + 1;
      cor = semana === 3 && diaDaSemana(d) === 0 ? "rosa" : "roxo";
    }
  } else if (diferencaEmDias(d, batismo) <= 0) {
    tempo = "natal";
    cor = "branco";
  } else if (diferencaEmDias(d, cinzas) < 0) {
    tempo = "comum";
    semana = Math.floor(diferencaEmDias(d, domingoAteHoje(batismo)) / 7) + 1;
    cor = "verde";
  } else if (diferencaEmDias(d, somaDias(p, -3)) < 0) {
    tempo = "quaresma";
    const primeiroDomingo = somaDias(cinzas, 4);
    semana = diferencaEmDias(d, primeiroDomingo) < 0 ? 0 : Math.floor(diferencaEmDias(d, primeiroDomingo) / 7) + 1;
    cor = mesmoDia(d, somaDias(p, -21)) ? "rosa" : "roxo";
  } else if (diferencaEmDias(d, p) < 0) {
    tempo = "triduo";
    cor = "branco";
  } else if (diferencaEmDias(d, pentecostes(ano)) <= 0) {
    tempo = "pascoa";
    semana = Math.floor(diferencaEmDias(d, p) / 7) + 1;
    cor = "branco";
  } else {
    tempo = "comum";
    const cristoRei = somaDias(a1, -7);
    semana = 34 - diferencaEmDias(cristoRei, domingoAteHoje(d)) / 7;
    cor = "verde";
  }

  const movel = celebracaoMovel(d);
  if (movel) cor = movel.cor;

  const anoLiturgico = diferencaEmDias(d, a1) >= 0 ? ano + 1 : ano;
  const cicloDominical = (["C", "A", "B"] as const)[anoLiturgico % 3]!;
  const cicloFerial: CicloFerial = anoLiturgico % 2 === 1 ? "I" : "II";

  return {
    data: d,
    tempo,
    semana,
    cor,
    celebracao: movel?.nome ?? null,
    titulo: movel?.nome ?? tituloDoDia(d, tempo, semana),
    anoLiturgico,
    cicloDominical,
    cicloFerial,
  };
}

function tituloDoDia(d: Dia, tempo: Tempo, semana: number | null): string {
  const domingo = diaDaSemana(d) === 0;
  const nomeDia = nomeDoDiaDaSemana(d);
  const ano = d.getUTCFullYear();

  switch (tempo) {
    case "advento":
      return domingo ? `${ordM(semana!)} Domingo do Advento` : `${nomeDia} da ${ordF(semana!)} semana do Advento`;
    case "natal":
      if (diferencaEmDias(d, dia(ano, 12, 25)) > 0 || (d.getUTCMonth() === 0 && d.getUTCDate() === 1))
        return `${nomeDia} da Oitava do Natal`;
      return `${nomeDia} do Tempo do Natal`;
    case "comum":
      return domingo
        ? `${ordM(semana!)} Domingo do Tempo Comum`
        : `${nomeDia} da ${ordF(semana!)} semana do Tempo Comum`;
    case "quaresma": {
      const p = pascoa(ano);
      if (diferencaEmDias(d, somaDias(p, -7)) > 0) return `${nomeDia} da Semana Santa`;
      if (semana === 0) return `${nomeDia} depois das Cinzas`;
      return domingo ? `${ordM(semana!)} Domingo da Quaresma` : `${nomeDia} da ${ordF(semana!)} semana da Quaresma`;
    }
    case "triduo":
      return nomeDia;
    case "pascoa":
      if (semana === 1) return `${nomeDia} da Oitava da Páscoa`;
      return domingo ? `${ordM(semana!)} Domingo da Páscoa` : `${nomeDia} da ${ordF(semana!)} semana da Páscoa`;
  }
}
