import type { Revisao } from "@/devocao/tipos";

export interface Reflexao {
  paragrafos: string[];
  pergunta: string;
}

export interface ParteDasReflexoes {
  revisao: Revisao;
  reflexoes: Record<string, Reflexao>;
}
