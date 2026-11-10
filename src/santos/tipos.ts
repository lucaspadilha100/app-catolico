import type { Revisao } from "@/devocao/tipos";

export interface ImagemDoSanto {
  artic: number;
  titulo: string;
  artista: string;
  data?: string;
}

export interface Santo {
  id: string;
  nome: string;
  data: string;
  calendario: boolean;
  nomes: string[];
  resumo: string;
  historia: string[];
  padroeiro?: string[];
  imagem?: ImagemDoSanto;
}

export interface MesDeSantos {
  revisao: Revisao;
  santos: Santo[];
}
