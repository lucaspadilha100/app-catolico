import { type Dia, diaDaSemana } from "./datas";

export type GrupoDeMisterios = "gozosos" | "dolorosos" | "gloriosos" | "luminosos";

export interface Misterios {
  grupo: GrupoDeMisterios;
  nome: string;
  misterios: [string, string, string, string, string];
}

export const MISTERIOS: Record<GrupoDeMisterios, Misterios> = {
  gozosos: {
    grupo: "gozosos",
    nome: "Mistérios Gozosos",
    misterios: [
      "A Anunciação do Anjo a Nossa Senhora",
      "A Visitação de Nossa Senhora a Santa Isabel",
      "O Nascimento de Jesus em Belém",
      "A Apresentação do Menino Jesus no Templo",
      "A Perda e o Encontro do Menino Jesus no Templo",
    ],
  },
  luminosos: {
    grupo: "luminosos",
    nome: "Mistérios Luminosos",
    misterios: [
      "O Batismo de Jesus no Rio Jordão",
      "A Autorrevelação de Jesus nas Bodas de Caná",
      "O Anúncio do Reino de Deus e o convite à conversão",
      "A Transfiguração de Jesus",
      "A Instituição da Eucaristia",
    ],
  },
  dolorosos: {
    grupo: "dolorosos",
    nome: "Mistérios Dolorosos",
    misterios: [
      "A Agonia de Jesus no Horto das Oliveiras",
      "A Flagelação de Jesus",
      "A Coroação de Espinhos",
      "Jesus carregando a Cruz a caminho do Calvário",
      "A Crucifixão e Morte de Jesus",
    ],
  },
  gloriosos: {
    grupo: "gloriosos",
    nome: "Mistérios Gloriosos",
    misterios: [
      "A Ressurreição de Jesus",
      "A Ascensão de Jesus ao Céu",
      "A Vinda do Espírito Santo sobre Nossa Senhora e os Apóstolos",
      "A Assunção de Nossa Senhora ao Céu",
      "A Coroação de Nossa Senhora como Rainha do Céu e da Terra",
    ],
  },
};

const POR_DIA_DA_SEMANA: GrupoDeMisterios[] = [
  "gloriosos",
  "gozosos",
  "dolorosos",
  "gloriosos",
  "luminosos",
  "dolorosos",
  "gozosos",
];

export const misteriosDoDia = (d: Dia): Misterios => MISTERIOS[POR_DIA_DA_SEMANA[diaDaSemana(d)]!];

export const grupoDoDiaDaSemana = (dia: number): GrupoDeMisterios => POR_DIA_DA_SEMANA[dia]!;
