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
import { type Celebracao, type Grau, FINADOS, santosDaData } from "./santoral";
import { diocesePorId } from "./dioceses";

export type Tempo = "advento" | "natal" | "comum" | "quaresma" | "triduo" | "pascoa";
export type CorLiturgica = "verde" | "roxo" | "rosa" | "branco" | "vermelho";
export type CicloDominical = "A" | "B" | "C";
export type CicloFerial = "I" | "II";

export interface DiaLiturgico {
  data: Dia;
  tempo: Tempo;
  semana: number | null;
  cor: CorLiturgica;
  titulo: string;
  celebracao: Celebracao | null;
  facultativas: Celebracao[];
  santos: Celebracao[];
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

export const NOME_DO_GRAU: Record<Grau, string> = {
  "dia-santo": "",
  solenidade: "Solenidade",
  "festa-do-senhor": "Festa",
  festa: "Festa",
  memoria: "Memória",
  facultativa: "Memória facultativa",
};

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

export const primeiroDomingoDoAdvento = (ano: number): Dia => somaDias(domingoAntes(dia(ano, 12, 25)), -21);

export function epifania(ano: number): Dia {
  const d2 = dia(ano, 1, 2);
  return somaDias(d2, (7 - diaDaSemana(d2)) % 7);
}

export function batismoDoSenhor(ano: number): Dia {
  const e = epifania(ano);
  return e.getUTCDate() >= 7 ? somaDias(e, 1) : somaDias(e, 7);
}

export const quartaDeCinzas = (ano: number): Dia => somaDias(pascoa(ano), -46);
export const pentecostes = (ano: number): Dia => somaDias(pascoa(ano), 49);

export function sagradaFamilia(ano: number): Dia {
  for (let d = 26; d <= 31; d++) {
    const data = dia(ano, 12, d);
    if (diaDaSemana(data) === 0) return data;
  }
  return dia(ano, 12, 30);
}

const domingoEntre = (ano: number, mes: number, primeiroDia: number): Dia => {
  const inicio = dia(ano, mes, primeiroDia);
  return somaDias(inicio, (7 - diaDaSemana(inicio)) % 7);
};

const ordM = (n: number) => `${n}º`;
const ordF = (n: number) => `${n}ª`;
const mmdd = (d: Dia) => `${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}`;

interface Candidato {
  celebracao: Celebracao;
  precedencia: number;
  temporal?: boolean;
}

const PRECEDENCIA: Record<Grau, number> = {
  "dia-santo": 3,
  solenidade: 3,
  "festa-do-senhor": 5,
  festa: 7,
  memoria: 10,
  facultativa: 12,
};

const senhor = (nome: string, cor: CorLiturgica = "branco"): Celebracao => ({ nome, grau: "festa-do-senhor", cor });
const solenidade = (nome: string, cor: CorLiturgica = "branco"): Celebracao => ({ nome, grau: "solenidade", cor });
const diaSanto = (nome: string, cor: CorLiturgica = "branco"): Celebracao => ({ nome, grau: "dia-santo", cor });

const ID_DO_TEMPO: Record<string, string> = {
  "Quinta-feira Santa": "quinta-santa",
  "Sexta-feira da Paixão do Senhor": "sexta-santa",
  "Sábado Santo": "sabado-santo",
  "Domingo da Páscoa na Ressurreição do Senhor": "pascoa",
  "Natal do Senhor": "natal",
  "Epifania do Senhor": "epifania",
  "Ascensão do Senhor": "ascensao",
  "Pentecostes": "pentecostes",
  "Domingo de Ramos da Paixão do Senhor": "ramos",
  "Quarta-feira de Cinzas": "cinzas",
  "2º Domingo da Páscoa ou da Divina Misericórdia": "misericordia",
  "Santa Maria, Mãe de Deus": "mae-de-deus",
  "Santíssima Trindade": "trindade",
  "Santíssimo Corpo e Sangue de Cristo": "corpus",
  "Sagrado Coração de Jesus": "sagrado-coracao",
  "Nosso Senhor Jesus Cristo, Rei do Universo": "cristo-rei",
  "Batismo do Senhor": "batismo",
  "Sagrada Família de Jesus, Maria e José": "sagrada-familia",
  "Bem-aventurada Virgem Maria, Mãe da Igreja": "mae-da-igreja",
  "Imaculado Coração de Maria": "imaculado-coracao",
};

function celebracaoDoTempo(d: Dia): Candidato | null {
  const ano = d.getUTCFullYear();
  const p = pascoa(ano);
  const a1 = primeiroDomingoDoAdvento(ano);
  const igual = (x: Dia) => mesmoDia(d, x);
  const c = (celebracao: Celebracao, precedencia: number): Candidato => ({
    celebracao: { ...celebracao, id: ID_DO_TEMPO[celebracao.nome] },
    precedencia,
    temporal: true,
  });

  if (igual(somaDias(p, -3))) return c(diaSanto("Quinta-feira Santa"), 1);
  if (igual(somaDias(p, -2))) return c(diaSanto("Sexta-feira da Paixão do Senhor", "vermelho"), 1);
  if (igual(somaDias(p, -1))) return c(diaSanto("Sábado Santo"), 1);
  if (igual(p)) return c(diaSanto("Domingo da Páscoa na Ressurreição do Senhor"), 1);
  if (igual(dia(ano, 12, 25))) return c(solenidade("Natal do Senhor"), 2);
  if (igual(epifania(ano))) return c(solenidade("Epifania do Senhor"), 2);
  if (igual(somaDias(p, 42))) return c(solenidade("Ascensão do Senhor"), 2);
  if (igual(somaDias(p, 49))) return c(solenidade("Pentecostes", "vermelho"), 2);
  if (igual(somaDias(p, -7))) return c(diaSanto("Domingo de Ramos da Paixão do Senhor", "vermelho"), 2);
  if (igual(quartaDeCinzas(ano))) return c(diaSanto("Quarta-feira de Cinzas", "roxo"), 2);
  if (igual(somaDias(p, 7))) return c(diaSanto("2º Domingo da Páscoa ou da Divina Misericórdia"), 2);
  if (igual(dia(ano, 1, 1))) return c(solenidade("Santa Maria, Mãe de Deus"), 3);
  if (igual(somaDias(p, 56))) return c(solenidade("Santíssima Trindade"), 3);
  if (igual(somaDias(p, 60))) return c(solenidade("Santíssimo Corpo e Sangue de Cristo"), 3);
  if (igual(somaDias(p, 68))) return c(solenidade("Sagrado Coração de Jesus"), 3);
  if (igual(somaDias(a1, -7))) return c(solenidade("Nosso Senhor Jesus Cristo, Rei do Universo"), 3);
  if (igual(batismoDoSenhor(ano))) return c(senhor("Batismo do Senhor"), 5);
  if (igual(sagradaFamilia(ano))) return c(senhor("Sagrada Família de Jesus, Maria e José"), 5);
  if (igual(somaDias(p, 50))) return c({ nome: "Bem-aventurada Virgem Maria, Mãe da Igreja", grau: "memoria", cor: "branco" }, 10);
  if (igual(somaDias(p, 69))) return c({ nome: "Imaculado Coração de Maria", grau: "memoria", cor: "branco" }, 10);
  return null;
}

type Movida = "jose" | "anunciacao" | "pedroPaulo" | "assuncao" | "todosSantos" | "joaoBatista";

function dataDaSolenidade(qual: Movida, ano: number): Dia {
  const p = pascoa(ano);
  const ramos = somaDias(p, -7);
  const naSemanaSantaOuOitava = (d: Dia) => diferencaEmDias(d, ramos) >= 0 && diferencaEmDias(d, p) <= 7;
  switch (qual) {
    case "jose": {
      const d = dia(ano, 3, 19);
      if (naSemanaSantaOuOitava(d)) return somaDias(ramos, -1);
      return diaDaSemana(d) === 0 ? somaDias(d, 1) : d;
    }
    case "anunciacao": {
      const d = dia(ano, 3, 25);
      if (naSemanaSantaOuOitava(d)) return somaDias(p, 8);
      return diaDaSemana(d) === 0 ? somaDias(d, 1) : d;
    }
    case "pedroPaulo":
      return domingoEntre(ano, 6, 28);
    case "assuncao":
      return domingoEntre(ano, 8, 15);
    case "todosSantos":
      return diaDaSemana(dia(ano, 11, 2)) === 0 ? dia(ano, 11, 1) : domingoEntre(ano, 11, 1);
    case "joaoBatista": {
      const d = dia(ano, 6, 24);
      if (mesmoDia(d, somaDias(p, 68))) return dia(ano, 6, 23);
      if (mesmoDia(d, somaDias(p, 60))) return dia(ano, 6, 25);
      return d;
    }
  }
}

const MOVIDAS: [string, Movida][] = [
  ["0319", "jose"],
  ["0325", "anunciacao"],
  ["0629", "pedroPaulo"],
  ["0815", "assuncao"],
  ["1101", "todosSantos"],
  ["0624", "joaoBatista"],
];
const DATAS_MOVIDAS = new Set(MOVIDAS.map(([data]) => data));

function santosDoDia(d: Dia, diocese?: string): Celebracao[] {
  const ano = d.getUTCFullYear();
  const hoje = mmdd(d);
  let lista = santosDaData(hoje).filter((s) => !(s.grau === "solenidade" && DATAS_MOVIDAS.has(hoje)));
  for (const p of diocesePorId(diocese)?.proprios ?? []) {
    if (p.mmdd !== hoje) continue;
    if (p.substitui) lista = lista.filter((s) => s.nome !== p.substitui);
    lista.push(p.celebracao);
  }
  for (const [data, qual] of MOVIDAS) {
    if (mesmoDia(d, dataDaSolenidade(qual, ano))) {
      const solene = santosDaData(data).find((s) => s.grau === "solenidade");
      if (solene) lista.unshift(solene);
    }
  }
  if (hoje === "1102") lista.unshift(FINADOS);
  return lista;
}

interface BaseDoTempo {
  tempo: Tempo;
  semana: number | null;
  cor: CorLiturgica;
  precedencia: number;
}

function baseDoTempo(d: Dia): BaseDoTempo {
  const ano = d.getUTCFullYear();
  const a1 = primeiroDomingoDoAdvento(ano);
  const p = pascoa(ano);
  const cinzas = quartaDeCinzas(ano);
  const batismo = batismoDoSenhor(ano);
  const domingo = diaDaSemana(d) === 0;

  if (diferencaEmDias(d, a1) >= 0) {
    if (diferencaEmDias(d, dia(ano, 12, 25)) >= 0) {
      return { tempo: "natal", semana: null, cor: "branco", precedencia: domingo ? 6 : 9 };
    }
    const semana = Math.floor(diferencaEmDias(d, a1) / 7) + 1;
    const privilegiado = d.getUTCMonth() === 11 && d.getUTCDate() >= 17;
    return {
      tempo: "advento",
      semana,
      cor: semana === 3 && domingo ? "rosa" : "roxo",
      precedencia: domingo ? 2 : privilegiado ? 9 : 13,
    };
  }
  if (diferencaEmDias(d, batismo) <= 0) {
    return { tempo: "natal", semana: null, cor: "branco", precedencia: domingo ? 6 : 13 };
  }
  if (diferencaEmDias(d, cinzas) < 0) {
    const semana = Math.floor(diferencaEmDias(d, domingoAteHoje(batismo)) / 7) + 1;
    return { tempo: "comum", semana, cor: "verde", precedencia: domingo ? 6 : 13 };
  }
  if (diferencaEmDias(d, somaDias(p, -3)) < 0) {
    const primeiroDomingo = somaDias(cinzas, 4);
    const semana = diferencaEmDias(d, primeiroDomingo) < 0 ? 0 : Math.floor(diferencaEmDias(d, primeiroDomingo) / 7) + 1;
    const santa = diferencaEmDias(d, somaDias(p, -7)) >= 0;
    return {
      tempo: "quaresma",
      semana,
      cor: mesmoDia(d, somaDias(p, -21)) ? "rosa" : "roxo",
      precedencia: domingo || santa ? 2 : 9,
    };
  }
  if (diferencaEmDias(d, p) < 0) {
    return { tempo: "triduo", semana: null, cor: "branco", precedencia: 1 };
  }
  if (diferencaEmDias(d, pentecostes(ano)) <= 0) {
    const semana = Math.floor(diferencaEmDias(d, p) / 7) + 1;
    return { tempo: "pascoa", semana, cor: "branco", precedencia: domingo || semana === 1 ? 2 : 13 };
  }
  const cristoRei = somaDias(a1, -7);
  const semana = 34 - diferencaEmDias(cristoRei, domingoAteHoje(d)) / 7;
  return { tempo: "comum", semana, cor: "verde", precedencia: domingo ? 6 : 13 };
}

export function diaLiturgico(d: Dia, diocese?: string): DiaLiturgico {
  const ano = d.getUTCFullYear();
  const base = baseDoTempo(d);
  const doTempo = celebracaoDoTempo(d);

  const candidatos: Candidato[] = doTempo ? [doTempo] : [];
  for (const s of santosDoDia(d, diocese)) {
    const imaculadaNoAdvento = s.nome.startsWith("Imaculada Conceição") && base.precedencia === 2;
    candidatos.push({ celebracao: s, precedencia: imaculadaNoAdvento ? 1.5 : PRECEDENCIA[s.grau] });
  }
  candidatos.sort((a, b) => a.precedencia - b.precedencia || Number(!a.temporal) - Number(!b.temporal));

  const melhor = candidatos[0];
  const principal =
    melhor && melhor.precedencia < 12 && (melhor.precedencia < base.precedencia || melhor.temporal) ? melhor : null;
  const nivel = principal ? principal.precedencia : base.precedencia;

  let facultativas: Celebracao[] = [];
  if (nivel >= 9) {
    facultativas = candidatos
      .filter((c) => c !== principal && c.precedencia >= 10)
      .map((c) => ({ ...c.celebracao, grau: "facultativa" as const, cor: nivel === 9 ? base.cor : c.celebracao.cor }));
  }

  const celebracao = principal?.celebracao ?? null;
  const ehMemoria = celebracao?.grau === "memoria";

  const anoLiturgico = diferencaEmDias(d, primeiroDomingoDoAdvento(ano)) >= 0 ? ano + 1 : ano;

  return {
    data: d,
    tempo: base.tempo,
    semana: base.semana,
    cor: celebracao ? celebracao.cor : base.cor,
    titulo: celebracao && !ehMemoria ? celebracao.nome : tituloDoDia(d, base.tempo, base.semana),
    celebracao,
    facultativas,
    santos: principal && !principal.temporal ? [principal.celebracao, ...facultativas] : facultativas,
    anoLiturgico,
    cicloDominical: (["C", "A", "B"] as const)[anoLiturgico % 3]!,
    cicloFerial: anoLiturgico % 2 === 1 ? "I" : "II",
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
      if (d.getUTCMonth() === 11) return `${nomeDia} na Oitava do Natal`;
      if (domingo) return "2º Domingo depois do Natal";
      if (diferencaEmDias(d, epifania(ano)) > 0) return `${nomeDia} depois da Epifania`;
      return `${nomeDia} do Tempo do Natal`;
    case "comum":
      return domingo ? `${ordM(semana!)} Domingo do Tempo Comum` : `${nomeDia} da ${ordF(semana!)} semana do Tempo Comum`;
    case "quaresma": {
      const p = pascoa(ano);
      if (diferencaEmDias(d, somaDias(p, -7)) > 0) return `${nomeDia} da Semana Santa`;
      if (semana === 0) return `${nomeDia} depois das Cinzas`;
      return domingo ? `${ordM(semana!)} Domingo da Quaresma` : `${nomeDia} da ${ordF(semana!)} semana da Quaresma`;
    }
    case "triduo":
      return nomeDia;
    case "pascoa":
      if (semana === 1) return `${nomeDia} na Oitava da Páscoa`;
      return domingo ? `${ordM(semana!)} Domingo da Páscoa` : `${nomeDia} da ${ordF(semana!)} semana da Páscoa`;
  }
}
