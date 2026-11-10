import type { GrupoDeMisterios } from "@/liturgia/terco";

export interface Terco {
  id: string;
  nome: string;
  paroquia_id: string | null;
  comunidade: string;
  dia_semana: number;
  semanas: number[] | null;
  hora: string;
  endereco: string;
  bairro: string;
  cidade: string;
  uf: string;
  lat: number | null;
  lng: number | null;
  instagram: string;
  whatsapp: string;
  responsavel_id: string;
  situacao: "pendente" | "aprovado" | "recusado";
  ativo: boolean;
}

export interface Dezena {
  conduz: string;
  musica: string;
  link: string;
}

export interface Encontro {
  id: string;
  terco_id: string;
  data: string;
  misterios: GrupoDeMisterios;
  dezenas: Dezena[];
  intencoes: string;
  avisos: string;
  passo: number;
  conta: number;
  ao_vivo: boolean;
  atualizado_em: string;
}

export interface ItemDaAgendaDeTerco {
  terco_id: string;
  nome: string;
  bairro: string;
  cidade: string;
  distancia_km: number | null;
  quando: string;
  observacao: string;
  total: number;
}
