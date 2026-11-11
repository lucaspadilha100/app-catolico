import type { GrupoDeMisterios } from "@/liturgia/terco";

export type RotuloDeTexto = "oferecimento" | "meditacao" | "intencoes" | "pregacao" | "avisos" | "texto";

export const NOME_DO_ROTULO: Record<RotuloDeTexto, string> = {
  oferecimento: "Oferecimento",
  meditacao: "Meditação",
  intencoes: "Intenções",
  pregacao: "Pregação",
  avisos: "Avisos",
  texto: "Texto",
};

interface Base {
  id: string;
  quem?: string;
}

export type Bloco = Base &
  (
    | { tipo: "canto"; titulo: string; artista?: string; link?: string }
    | { tipo: "imagem"; santo: string; nome: string; imagem: string }
    | { tipo: "texto"; rotulo: RotuloDeTexto; texto: string }
    | { tipo: "leitura"; referencia: string }
    | { tipo: "misterio"; grupo: GrupoDeMisterios; indice: number }
    | { tipo: "oracao"; oracao: string; vezes: number }
  );

export type TipoDeBloco = Bloco["tipo"];

export const NOME_DO_TIPO: Record<TipoDeBloco, string> = {
  canto: "Canto",
  imagem: "Imagem do santo",
  texto: "Texto",
  leitura: "Leitura da Bíblia",
  misterio: "Mistério",
  oracao: "Oração",
};

export interface Roteiro {
  id: string;
  codigo: string;
  titulo: string;
  data: string | null;
  hora: string | null;
  local: string;
  blocos: Bloco[];
  passo: number;
  conta: number;
  ao_vivo: boolean;
  terco_id: string | null;
  terco?: string | null;
  dono_id?: string;
  atualizado_em: string;
}
