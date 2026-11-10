import type { Revisao } from "@/devocao/tipos";

export type Estado = "crianca" | "jovem" | "adulto" | "casado";

export interface ItemDoExame {
  id: string;
  texto: string;
  cic: string;
  estados: Estado[];
}

export interface SecaoDoExame {
  id: string;
  titulo: string;
  subtitulo?: string;
  cic: string;
  itens: ItemDoExame[];
}

export interface Exame {
  revisao: Revisao;
  secoes: SecaoDoExame[];
}

export interface PassoDoGuia {
  titulo: string;
  postura?: "de pé" | "sentado" | "de joelhos" | "de pé ou de joelhos";
  blocos: import("@/devocao/tipos").Bloco[];
}

export interface Guia {
  revisao: Revisao;
  passos: PassoDoGuia[];
}
