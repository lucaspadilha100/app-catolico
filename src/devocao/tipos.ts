import type { Linha } from "@/oracao/oracoes";

export type Revisao = "a revisar pelo dono" | "revisado";

export type Bloco =
  | { titulo: string }
  | { texto: string }
  | { leitura: string; titulo?: string; poema?: boolean; inicio?: string; fim?: string }
  | { rezar: string; vezes?: number }
  | { linhas: Linha[]; titulo?: string }
  | { antifona: string }
  | { rubrica: string }
  | { pratica: string }
  | { ir: string; rotulo: string }
  | { noturno: true };

export interface Etapa {
  titulo: string;
  blocos: Bloco[];
}

export interface ConteudoDaNovena {
  revisao: Revisao;
  antes: Bloco[];
  etapas: Etapa[];
  depois: Bloco[];
}

export interface ConteudoDoDesafio {
  revisao: Revisao;
  etapas: Etapa[];
}

export interface ConteudoDaConsagracao {
  revisao: Revisao;
  periodos: { nome: string; de: number; ate: number; oracoes: Bloco[] }[];
  etapas: Etapa[];
  ato: Etapa;
}

export interface ConteudoDoRoteiro {
  revisao: Revisao;
  antes: Bloco[];
  inicioDoPasso: Bloco[];
  passos: Etapa[];
  fimDoPasso: Bloco[];
  depois: Bloco[];
}

export interface Hora {
  id: string;
  nome: string;
  latim: string;
  blocos: Bloco[];
}

export interface ConteudoDoOficio {
  revisao: Revisao;
  horas: Hora[];
  noturnos: [Bloco[], Bloco[], Bloco[]];
}
