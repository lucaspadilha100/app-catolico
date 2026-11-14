export type Situacao = "santo" | "beato" | "veneravel" | "servo" | "nossa-senhora";

export interface FotoDoIndice {
  arquivo: string;
  foco?: string;
}

export interface ImagemDoSanto extends FotoDoIndice {
  obra: string;
  autor: string;
  licenca: string;
  url: string;
  data?: string;
  fonte?: string;
  artic?: number;
}

export interface SantoDoIndice {
  id: string;
  nome: string;
  data: string;
  calendario: boolean;
  grupo: string;
  nomes: string[];
  situacao?: Situacao;
  dataDe?: "memoria" | "falecimento";
  pais?: string;
  padroeiro?: string[];
  imagem?: FotoDoIndice;
}

export interface Santo extends SantoDoIndice {
  resumo: string;
  historia: string[];
  imagem?: ImagemDoSanto;
}

export interface CreditoDoSanto {
  id: string;
  nome: string;
  obra: string;
  autor: string;
  licenca: string;
  url: string;
  data?: string;
  fonte?: string;
}

export interface ManifestoDosSantos {
  pasta: string;
  total: number;
  comFoto: number;
  grupos: Record<string, number>;
  indice: string;
  partes: string[];
  dias: Record<string, string>;
  creditos: Record<string, { arquivo: string; total: number }>;
}
