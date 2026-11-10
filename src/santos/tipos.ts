import type { Revisao } from "@/devocao/tipos";

export interface ImagemDoSanto {
  artic: number;
  titulo: string;
  artista: string;
  data?: string;
}

export type Situacao = "santo" | "beato" | "veneravel" | "servo" | "nossa-senhora";

export interface Santo {
  id: string;
  nome: string;
  data: string;
  calendario: boolean;
  situacao?: Situacao;
  dataDe?: "memoria" | "falecimento";
  pais?: string;
  grupo?: string;
  nomes: string[];
  resumo: string;
  historia: string[];
  padroeiro?: string[];
  imagem?: ImagemDoSanto;
}

export interface AcervoDeSantos {
  revisao: Revisao;
  santos: Santo[];
}

export interface MesDeSantos {
  revisao: Revisao;
  santos: Santo[];
}
