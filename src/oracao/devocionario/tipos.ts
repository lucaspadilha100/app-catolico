import type { Linha } from "../oracoes";

export type Fonte = "tradicional" | "magisterio" | "propria";

export interface OracaoDoDevocionario {
  id: string;
  nome: string;
  latim?: string;
  pt: Linha[];
  la?: Linha[];
  santo?: string;
  fonte: Fonte;
  origem?: string;
}

export interface Secao {
  titulo: string;
  oracoes: OracaoDoDevocionario[];
}

export interface Categoria {
  id: string;
  nome: string;
  oracoes?: OracaoDoDevocionario[];
  referencias?: string[];
  secoes?: Secao[];
}
