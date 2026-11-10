import type { Celebracao } from "./santoral";

export interface Proprio {
  mmdd: string;
  celebracao: Celebracao;
  substitui?: string;
}

export interface Diocese {
  id: string;
  nome: string;
  proprios: Proprio[];
}

export const DIOCESES: Diocese[] = [
  {
    id: "natal",
    nome: "Arquidiocese de Natal",
    proprios: [
      {
        mmdd: "1003",
        substitui: "Santos André de Soveral e Ambrósio Francisco Ferro, presbíteros, Mateus Moreira e companheiros, mártires",
        celebracao: {
          nome: "Santos André de Soveral e Ambrósio Francisco Ferro, presbíteros, Mateus Moreira e companheiros, mártires, padroeiros do Rio Grande do Norte",
          grau: "solenidade",
          cor: "vermelho",
        },
      },
      {
        mmdd: "1115",
        celebracao: {
          nome: "Dedicação da Catedral Metropolitana de Natal",
          grau: "festa",
          cor: "branco",
          leituras: "Dedication of the Lateran basilica",
        },
      },
      {
        mmdd: "1121",
        substitui: "Apresentação de Nossa Senhora",
        celebracao: {
          nome: "Nossa Senhora da Apresentação, padroeira da Arquidiocese de Natal",
          grau: "solenidade",
          cor: "branco",
          leituras: "Presentation of the Blessed Virgin Mary",
          id: "apresentacao-de-nossa-senhora",
        },
      },
    ],
  },
];

export const diocesePorId = (id: string | undefined): Diocese | undefined => DIOCESES.find((d) => d.id === id);
