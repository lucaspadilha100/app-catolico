export type TipoDeHorario = "missa" | "confissao" | "adoracao";

export interface Horario {
  id: string;
  paroquia_id: string;
  tipo: TipoDeHorario;
  dia_semana: number | null;
  semanas: number[] | null;
  data: string | null;
  hora: string;
  hora_fim: string | null;
  cancelado: boolean;
  observacao: string;
}

export interface ParoquiaResumo {
  id: string;
  nome: string;
  tipo: string;
  padroeiro: string;
  bairro: string;
  cidade: string;
  uf: string;
  lat: number | null;
  lng: number | null;
  verificada: boolean;
  confirmado_em: string | null;
  distancia_km: number | null;
}

export interface Paroquia extends Omit<ParoquiaResumo, "distancia_km"> {
  diocese: string;
  endereco: string;
  cep: string;
  telefone: string;
  whatsapp: string;
  instagram: string;
  site: string;
  email: string;
  ativa: boolean;
  fonte: string;
  plano: "gratis" | "pioneira" | "paroquia";
  pix_chave: string;
  pix_nome: string;
  pix_cidade: string;
  pix_conferido: boolean;
  aceita_intencoes: boolean;
  conferida_em: string | null;
  atualizado_em: string;
}

export interface AvisoDaParoquia {
  id: string;
  paroquia_id: string;
  texto: string;
  ate: string;
}

export interface ItemDaAgenda {
  paroquia_id: string;
  nome: string;
  bairro: string;
  cidade: string;
  distancia_km: number | null;
  quando: string;
  ate: string | null;
  observacao: string;
  total?: number;
}

export interface IgrejaComHorarios {
  paroquia_id: string;
  nome: string;
  bairro: string;
  cidade: string;
  distancia_km: number | null;
  horarios: { quando: string; ate: string | null; observacao: string }[];
  total: number;
}

export interface Sugestao {
  id: string;
  paroquia_id: string | null;
  tipo: "confirmar" | "horario_errado" | "novo_horario" | "nova_paroquia" | "outro";
  texto: string;
  dados: Record<string, unknown>;
  situacao: "pendente" | "aceita" | "recusada";
  criado_em: string;
}

export const NOME_DO_TIPO_DE_HORARIO: Record<TipoDeHorario, string> = {
  missa: "Missa",
  confissao: "Confissão",
  adoracao: "Adoração",
};

export const NOME_DO_TIPO_DE_IGREJA: Record<string, string> = {
  paroquia: "Paróquia",
  capela: "Capela",
  comunidade: "Comunidade",
  santuario: "Santuário",
  catedral: "Catedral",
  basilica: "Basílica",
  mosteiro: "Mosteiro",
};
