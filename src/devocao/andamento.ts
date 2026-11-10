import { deIso, diferencaEmDias, hoje, type Dia } from "@/liturgia/datas";
import { DESAFIOS, NOVENAS, type Novena } from "./catalogo";
import {
  NOMES_DA_SEMANA_SANTA,
  diaDaNovena,
  diaDaSemanaSanta,
  diasDaJanela,
  ordinal,
  posicaoNoDesafio,
  proximaNovena,
} from "./calendario";
import { acompanhamentoVigente } from "./progresso";

export type TipoDeItem = "novena" | "desafio" | "consagracao" | "semana-santa";

export interface ItemEmAndamento {
  tipo: TipoDeItem;
  titulo: string;
  detalhe: string;
  para: string;
  seguindo: boolean;
}

export const chaveDaNovena = (id: string) => `novena:${id}`;
export const chaveDoDesafio = (id: string, ano: number) => `desafio:${id}:${ano}`;
export const CHAVE_DA_CONSAGRACAO = "consagracao";
export const DIAS_DA_CONSAGRACAO = 33;

export function diaSugeridoDaNovena(n: Novena, d: Dia = hoje()): { dia: number; inicio: Dia; seguindo: boolean } | null {
  const a = acompanhamentoVigente(chaveDaNovena(n.id), n.dias, d);
  if (a && a.feitos.length < n.dias) {
    const inicio = deIso(a.inicio)!;
    const dia = Math.min(Math.max(diferencaEmDias(d, inicio) + 1, 1), n.dias);
    return { dia, inicio, seguindo: true };
  }
  const doCalendario = diaDaNovena(n, d);
  if (doCalendario && !(a && a.feitos.length >= n.dias)) return { dia: doCalendario, inicio: proximaNovena(n, d).inicio, seguindo: false };
  return null;
}

export function emAndamento(d: Dia = hoje()): ItemEmAndamento[] {
  const itens: ItemEmAndamento[] = [];

  for (const n of NOVENAS) {
    const s = diaSugeridoDaNovena(n, d);
    if (!s) continue;
    itens.push({
      tipo: "novena",
      titulo: n.nome,
      detalhe: !s.seguindo && s.dia === 1 ? "Começa hoje" : `${ordinal(s.dia)} dia de ${n.dias}`,
      para: `/rezar/novenas/${n.id}`,
      seguindo: s.seguindo,
    });
  }

  const c = acompanhamentoVigente(CHAVE_DA_CONSAGRACAO, DIAS_DA_CONSAGRACAO + 1, d);
  if (c && c.feitos.length <= DIAS_DA_CONSAGRACAO) {
    const dia = diferencaEmDias(d, deIso(c.inicio)!) + 1;
    if (dia >= 1 && dia <= DIAS_DA_CONSAGRACAO + 1)
      itens.push({
        tipo: "consagracao",
        titulo: "Consagração a Nossa Senhora",
        detalhe: dia > DIAS_DA_CONSAGRACAO ? "Dia da consagração" : `${ordinal(dia)} dia de ${DIAS_DA_CONSAGRACAO}`,
        para: "/rezar/consagracao",
        seguindo: true,
      });
  }

  const santa = diaDaSemanaSanta(d);
  if (santa !== null)
    itens.push({ tipo: "semana-santa", titulo: "Semana Santa", detalhe: NOMES_DA_SEMANA_SANTA[santa]!, para: "/rezar/semana-santa", seguindo: false });

  for (const desafio of DESAFIOS) {
    const p = posicaoNoDesafio(desafio, d);
    if (!p) continue;
    const a = acompanhamentoVigente(chaveDoDesafio(desafio.id, p.janela.inicio.getUTCFullYear()), diasDaJanela(p.janela), d);
    itens.push({
      tipo: "desafio",
      titulo: desafio.nome,
      detalhe: `Dia ${p.posicao + 1} de ${diasDaJanela(p.janela)}`,
      para: `/rezar/desafios/${desafio.id}`,
      seguindo: !!a,
    });
  }

  return itens.sort((a, b) => Number(b.seguindo) - Number(a.seguindo));
}
