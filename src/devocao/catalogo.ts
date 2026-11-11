export type Festa = { mes: number; dia: number } | { movel: "pentecostes" | "sagrado-coracao" | "divina-misericordia" };

export type GrupoDeNovenas = "nossa-senhora" | "senhor" | "santos";

export interface Novena {
  id: string;
  nome: string;
  festa: Festa;
  nomeDaFesta: string;
  grupo: GrupoDeNovenas;
  dias: number;
  terminaNaFesta?: boolean;
}

export const NOME_DO_GRUPO_DE_NOVENAS: Record<GrupoDeNovenas, string> = {
  "nossa-senhora": "Nossa Senhora",
  senhor: "Nosso Senhor",
  santos: "Santos",
};

export const NOVENAS: Novena[] = [
  { id: "aparecida", nome: "Novena de Nossa Senhora Aparecida", festa: { mes: 10, dia: 12 }, nomeDaFesta: "Nossa Senhora Aparecida", grupo: "nossa-senhora", dias: 9 },
  { id: "imaculada-conceicao", nome: "Novena da Imaculada Conceição", festa: { mes: 12, dia: 8 }, nomeDaFesta: "Imaculada Conceição", grupo: "nossa-senhora", dias: 9 },
  { id: "nossa-senhora-das-gracas", nome: "Novena de Nossa Senhora das Graças", festa: { mes: 11, dia: 27 }, nomeDaFesta: "Nossa Senhora das Graças", grupo: "nossa-senhora", dias: 9 },
  { id: "nossa-senhora-do-carmo", nome: "Novena de Nossa Senhora do Carmo", festa: { mes: 7, dia: 16 }, nomeDaFesta: "Nossa Senhora do Carmo", grupo: "nossa-senhora", dias: 9 },
  { id: "nossa-senhora-da-apresentacao", nome: "Novena de Nossa Senhora da Apresentação", festa: { mes: 11, dia: 21 }, nomeDaFesta: "Nossa Senhora da Apresentação", grupo: "nossa-senhora", dias: 9 },
  { id: "nossa-senhora-de-fatima", nome: "Novena de Nossa Senhora de Fátima", festa: { mes: 5, dia: 13 }, nomeDaFesta: "Nossa Senhora de Fátima", grupo: "nossa-senhora", dias: 9 },
  { id: "natal", nome: "Novena de Natal", festa: { mes: 12, dia: 25 }, nomeDaFesta: "Natal do Senhor", grupo: "senhor", dias: 9 },
  { id: "espirito-santo", nome: "Novena ao Espírito Santo", festa: { movel: "pentecostes" }, nomeDaFesta: "Pentecostes", grupo: "senhor", dias: 9 },
  { id: "sagrado-coracao", nome: "Novena ao Sagrado Coração de Jesus", festa: { movel: "sagrado-coracao" }, nomeDaFesta: "Sagrado Coração de Jesus", grupo: "senhor", dias: 9 },
  { id: "divina-misericordia", nome: "Novena da Divina Misericórdia", festa: { movel: "divina-misericordia" }, nomeDaFesta: "Domingo da Divina Misericórdia", grupo: "senhor", dias: 9 },
  { id: "sao-jose", nome: "Novena de São José", festa: { mes: 3, dia: 19 }, nomeDaFesta: "São José", grupo: "santos", dias: 9 },
  { id: "santo-antonio", nome: "Trezena de Santo Antônio", festa: { mes: 6, dia: 13 }, nomeDaFesta: "Santo Antônio", grupo: "santos", dias: 13, terminaNaFesta: true },
  { id: "sao-judas-tadeu", nome: "Novena de São Judas Tadeu", festa: { mes: 10, dia: 28 }, nomeDaFesta: "São Judas Tadeu", grupo: "santos", dias: 9 },
  { id: "sao-miguel", nome: "Novena de São Miguel Arcanjo", festa: { mes: 9, dia: 29 }, nomeDaFesta: "São Miguel, São Gabriel e São Rafael", grupo: "santos", dias: 9 },
  { id: "santa-rita", nome: "Novena de Santa Rita de Cássia", festa: { mes: 5, dia: 22 }, nomeDaFesta: "Santa Rita de Cássia", grupo: "santos", dias: 9 },
  { id: "santa-teresinha", nome: "Novena de Santa Teresinha do Menino Jesus", festa: { mes: 10, dia: 1 }, nomeDaFesta: "Santa Teresinha do Menino Jesus", grupo: "santos", dias: 9 },
  { id: "sao-francisco", nome: "Novena de São Francisco de Assis", festa: { mes: 10, dia: 4 }, nomeDaFesta: "São Francisco de Assis", grupo: "santos", dias: 9 },
  { id: "santa-dulce", nome: "Novena de Santa Dulce dos Pobres", festa: { mes: 8, dia: 13 }, nomeDaFesta: "Santa Dulce dos Pobres", grupo: "santos", dias: 9 },
];

export type Periodo = "quaresma" | "advento" | { mes: number };

export interface Desafio {
  id: string;
  nome: string;
  periodo: Periodo;
  dias: number;
}

export const DESAFIOS: Desafio[] = [
  { id: "advento", nome: "Advento com Maria", periodo: "advento", dias: 28 },
  { id: "quaresma", nome: "Quaresma de 40 dias", periodo: "quaresma", dias: 46 },
  { id: "maio", nome: "Maio, mês de Maria", periodo: { mes: 5 }, dias: 31 },
  { id: "junho", nome: "Junho, mês do Sagrado Coração", periodo: { mes: 6 }, dias: 30 },
  { id: "setembro", nome: "Setembro, mês da Bíblia", periodo: { mes: 9 }, dias: 30 },
  { id: "outubro", nome: "Outubro, mês do Rosário", periodo: { mes: 10 }, dias: 31 },
  { id: "novembro", nome: "Novembro, mês dos fiéis defuntos", periodo: { mes: 11 }, dias: 30 },
];

export interface FestaDaConsagracao {
  nome: string;
  mes: number;
  dia: number;
}

export const FESTAS_DA_CONSAGRACAO: FestaDaConsagracao[] = [
  { nome: "Santa Maria, Mãe de Deus", mes: 1, dia: 1 },
  { nome: "Apresentação do Senhor", mes: 2, dia: 2 },
  { nome: "Anunciação do Senhor", mes: 3, dia: 25 },
  { nome: "Nossa Senhora de Fátima", mes: 5, dia: 13 },
  { nome: "Visitação de Nossa Senhora", mes: 5, dia: 31 },
  { nome: "Nossa Senhora do Carmo", mes: 7, dia: 16 },
  { nome: "Assunção de Nossa Senhora", mes: 8, dia: 15 },
  { nome: "Nossa Senhora Rainha", mes: 8, dia: 22 },
  { nome: "Natividade de Nossa Senhora", mes: 9, dia: 8 },
  { nome: "Nossa Senhora das Dores", mes: 9, dia: 15 },
  { nome: "Nossa Senhora do Rosário", mes: 10, dia: 7 },
  { nome: "Nossa Senhora Aparecida", mes: 10, dia: 12 },
  { nome: "Apresentação de Nossa Senhora", mes: 11, dia: 21 },
  { nome: "Imaculada Conceição", mes: 12, dia: 8 },
];

export interface Curso {
  id: string;
  nome: string;
  resumo: string;
  licoes: number;
}

export const CURSOS: Curso[] = [
  { id: "missa-explicada", nome: "A missa explicada", resumo: "O que acontece em cada parte da missa e por quê", licoes: 7 },
  { id: "rezar-com-a-biblia", nome: "Rezar com a Bíblia", resumo: "Como ler, meditar e rezar a Palavra de Deus", licoes: 6 },
  { id: "preparacao-para-a-crisma", nome: "Preparação para a crisma", resumo: "O sacramento da confirmação e a vida no Espírito", licoes: 8 },
  { id: "catequese-de-adultos", nome: "Catequese de adultos", resumo: "A fé da Igreja, do Credo à vida eterna", licoes: 10 },
];
