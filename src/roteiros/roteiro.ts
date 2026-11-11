import { MISTERIOS, type GrupoDeMisterios } from "@/liturgia/terco";
import { nomeDoMisterio } from "@/oracao/terco";
import { ORACOES } from "@/oracao/oracoes";
import { NOME_DO_DIA, hhmm } from "@/paroquias/horarios";
import type { Bloco, Roteiro, RotuloDeTexto, TipoDeBloco } from "./tipos";

export const novoId = () => Math.random().toString(36).slice(2, 10);

export function blocoVazio(tipo: TipoDeBloco): Bloco {
  const id = novoId();
  switch (tipo) {
    case "canto":
      return { id, tipo, titulo: "" };
    case "imagem":
      return { id, tipo, santo: "", nome: "", imagem: "" };
    case "texto":
      return { id, tipo, rotulo: "meditacao", texto: "" };
    case "leitura":
      return { id, tipo, referencia: "" };
    case "misterio":
      return { id, tipo, grupo: "gozosos", indice: 0 };
    case "oracao":
      return { id, tipo, oracao: "pai-nosso", vezes: 1 };
  }
}

export function blocoTemConteudo(b: Bloco): boolean {
  switch (b.tipo) {
    case "canto":
      return !!b.titulo.trim();
    case "imagem":
      return !!b.imagem;
    case "texto":
      return !!b.texto.trim();
    case "leitura":
      return !!b.referencia.trim();
    case "misterio":
      return true;
    case "oracao":
      return !!ORACOES[b.oracao];
  }
}

export function tituloDoBloco(b: Bloco): string {
  switch (b.tipo) {
    case "canto":
      return b.titulo;
    case "imagem":
      return b.nome;
    case "texto":
      return { oferecimento: "Oferecimento", meditacao: "Meditação", intencoes: "Intenções", pregacao: "Pregação", avisos: "Avisos", texto: "Texto" }[b.rotulo];
    case "leitura":
      return b.referencia;
    case "misterio":
      return `${nomeDoMisterio(b.grupo, b.indice)}: ${MISTERIOS[b.grupo].misterios[b.indice] ?? ""}`;
    case "oracao":
      return (ORACOES[b.oracao]?.nome ?? "") + (b.vezes > 1 ? ` (${b.vezes}x)` : "");
  }
}

export interface Posicao {
  passo: number;
  conta: number;
}

const contavel = (b: Bloco | undefined) => !!b && b.tipo === "oracao" && b.vezes > 1;

export function primeiraPosicao(blocos: Bloco[]): Posicao {
  const i = blocos.findIndex(blocoTemConteudo);
  const passo = i < 0 ? 0 : i;
  return { passo, conta: contavel(blocos[passo]) ? 1 : 0 };
}

export function avancar(blocos: Bloco[], p: Posicao): Posicao {
  const atual = blocos[p.passo];
  if (atual?.tipo === "oracao" && atual.vezes > 1 && p.conta < atual.vezes) return { passo: p.passo, conta: p.conta + 1 };
  for (let i = p.passo + 1; i < blocos.length; i++) if (blocoTemConteudo(blocos[i]!)) return { passo: i, conta: contavel(blocos[i]) ? 1 : 0 };
  return p;
}

export function voltar(blocos: Bloco[], p: Posicao): Posicao {
  if (contavel(blocos[p.passo]) && p.conta > 1) return { passo: p.passo, conta: p.conta - 1 };
  for (let i = p.passo - 1; i >= 0; i--) {
    const b = blocos[i]!;
    if (blocoTemConteudo(b)) return { passo: i, conta: b.tipo === "oracao" && b.vezes > 1 ? b.vezes : 0 };
  }
  return p;
}

export const ehUltima = (blocos: Bloco[], p: Posicao) => {
  const a = avancar(blocos, p);
  return a.passo === p.passo && a.conta === p.conta;
};

const oracao = (oracao: string, vezes = 1): Bloco => ({ id: novoId(), tipo: "oracao", oracao, vezes });
const texto = (rotulo: RotuloDeTexto, t = ""): Bloco => ({ id: novoId(), tipo: "texto", rotulo, texto: t });
const canto = (titulo = ""): Bloco => ({ id: novoId(), tipo: "canto", titulo });

export type Modelo = "terco" | "terco-cantado" | "misericordia" | "branco";

export const NOME_DO_MODELO: Record<Modelo, string> = {
  terco: "Terço",
  "terco-cantado": "Terço com cantos e meditações",
  misericordia: "Terço da Misericórdia",
  branco: "Em branco",
};

export function blocosDoModelo(modelo: Modelo, grupo: GrupoDeMisterios): Bloco[] {
  if (modelo === "branco") return [];
  if (modelo === "misericordia")
    return [
      oracao("sinal-da-cruz"),
      oracao("pai-nosso"),
      oracao("ave-maria"),
      oracao("creio"),
      ...Array.from({ length: 5 }, () => [oracao("eterno-pai"), oracao("dolorosa-paixao", 10)]).flat(),
      oracao("deus-santo", 3),
      oracao("jesus-eu-confio"),
    ];
  const cantado = modelo === "terco-cantado";
  const inicio: Bloco[] = cantado
    ? [canto(), { id: novoId(), tipo: "imagem", santo: "", nome: "", imagem: "" }, oracao("sinal-da-cruz"), texto("oferecimento"), oracao("creio"), oracao("pai-nosso"), oracao("ave-maria", 3), oracao("gloria")]
    : [oracao("sinal-da-cruz"), oracao("oferecimento-do-terco"), oracao("creio"), oracao("pai-nosso"), oracao("ave-maria", 3), oracao("gloria")];
  const dezenas = MISTERIOS[grupo].misterios.flatMap((_, i): Bloco[] => [
    ...(cantado ? [canto()] : []),
    { id: novoId(), tipo: "misterio", grupo, indice: i },
    ...(cantado ? [texto("meditacao")] : []),
    oracao("pai-nosso"),
    oracao("ave-maria", 10),
    oracao("gloria"),
    oracao("fatima"),
  ]);
  const fim: Bloco[] = cantado
    ? [oracao("agradecimento-do-terco"), oracao("salve-rainha"), texto("pregacao"), texto("avisos"), canto()]
    : [oracao("agradecimento-do-terco"), oracao("salve-rainha")];
  return [...inicio, ...dezenas, ...fim];
}

export function quandoDoRoteiro(r: Pick<Roteiro, "data" | "hora">): string {
  if (!r.data) return r.hora ? `Às ${hhmm(r.hora.slice(0, 5))}` : "";
  const [a, m, d] = r.data.split("-").map(Number);
  const dia = NOME_DO_DIA[new Date(a!, m! - 1, d!).getDay()];
  return [`${dia}, ${d}/${String(m).padStart(2, "0")}`, r.hora && `às ${hhmm(r.hora.slice(0, 5))}`].filter(Boolean).join(" ");
}

