import { dia, diferencaEmDias, somaDias, type Dia } from "@/liturgia/datas";
import { primeiroDomingoDoAdvento } from "@/liturgia/calendario";
import type { Bloco, ConteudoDoOficio, Hora, Noturnos, TempoDoOficio } from "./tipos";

export const NOME_DO_TEMPO_DO_OFICIO: Record<TempoDoOficio, string> = {
  advento: "Tempo do Advento",
  natal: "Tempo do Natal",
};

const VESPERTINAS = new Set(["vesperas", "completas"]);

export function tempoDoOficio(d: Dia, hora: string): TempoDoOficio | "comum" {
  const ano = d.getUTCFullYear();
  const vespertina = VESPERTINAS.has(hora);
  if (diferencaEmDias(d, dia(ano, 2, 2)) <= 0) return "natal";
  const vespera = dia(ano, 12, 24);
  if (diferencaEmDias(d, vespera) > 0 || (diferencaEmDias(d, vespera) === 0 && vespertina)) return "natal";
  const inicio = somaDias(primeiroDomingoDoAdvento(ano), vespertina ? -1 : 0);
  return diferencaEmDias(d, inicio) >= 0 ? "advento" : "comum";
}

export function blocosDaHora(conteudo: ConteudoDoOficio, hora: Hora, tempo: TempoDoOficio | "comum", noturno: number): Bloco[] {
  const blocos = (tempo !== "comum" && hora.tempos?.[tempo]) || hora.blocos;
  const noturnos: Noturnos = (tempo !== "comum" && conteudo.noturnosDoTempo?.[tempo]) || conteudo.noturnos;
  return blocos.flatMap((b) => ("noturno" in b ? noturnos[noturno]! : [b]));
}
