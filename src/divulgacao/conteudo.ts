import { NOME_DO_APP } from "@/marca";
import { imagensDeDevocao, textoDoCredito, caminhoDeDevocao } from "@/lib/imagens";
import { caminhoDaImagem, creditoDoCommons, focoDaImagem } from "@/santos/santos";
import type { Santo } from "@/santos/tipos";
import { NOVENAS, type Novena } from "@/devocao/catalogo";
import { dataDaFesta, inicioDaNovena } from "@/devocao/calendario";
import { diaEMes, paraIso, type Dia } from "@/liturgia/datas";
import { carregarImagem, cartaz, type FormatoDeCartaz } from "@/liturgia/imagemDoEvangelho";
import type { Reflexao } from "@/reflexoes/tipos";
import type { DataGrande } from "./datas";

const ARROBA = "@minhaigrejinhaapp";
const ASSINATURA = `${NOME_DO_APP}, o app católico: liturgia do dia, terço, Bíblia e orações. O link está no perfil.`;

export function creditoDaImagemDoSanto(s: Santo): string {
  if (s.imagem) return `${s.imagem.artista}. Art Institute of Chicago, domínio público.`;
  const c = creditoDoCommons(s);
  if (!c) return "";
  return [c.obra, textoDoCredito(c), "Wikimedia Commons"].filter(Boolean).join(". ");
}

const EXPLICACAO: Record<string, string> = {
  servo: "Servo de Deus é o título de quem teve a causa de beatificação aberta: a Igreja começou a estudar a sua vida e as suas virtudes. Ainda não tem culto público (Código de Direito Canônico, cân. 1187). Podemos rezar pedindo a Deus a sua beatificação.",
  veneravel: "Venerável é o título dado quando o Papa reconhece, por decreto, que a pessoa viveu as virtudes cristãs em grau heroico. Ainda não tem culto público (Código de Direito Canônico, cân. 1187). Podemos rezar pedindo a Deus a sua beatificação.",
  beato: "Beato é quem a Igreja beatificou: pode ser venerado com culto público, em geral na sua diocese ou na sua família religiosa (Código de Direito Canônico, cân. 1187). É o passo antes da canonização.",
  santo: "Santo é quem a Igreja canonizou, propondo-o a todos os fiéis como modelo e intercessor (Catecismo, n. 828).",
};

const HASHTAG: Record<string, string> = { servo: "#servodedeus", veneravel: "#veneravel", beato: "#beato", santo: "#santos" };

const situacaoDe = (s: Santo) => (s.situacao && EXPLICACAO[s.situacao] ? s.situacao : "santo");

export const rotuloDoSanto = (s: Santo): string => {
  if (s.calendario) return "Santo do dia";
  const feminino = /^(Beata|Santa|Serva|Venerável Madre|Venerável Irmã|Venerável Serva)\b/.test(s.nome);
  if (s.situacao === "veneravel") return "Venerável";
  if (s.situacao === "servo") return feminino ? "Serva de Deus" : "Servo de Deus";
  if (s.situacao === "beato") return feminino ? "Beata" : "Beato";
  return "Lembrado hoje";
};

export async function imagemDoSanto(s: Santo, data: string, formato: FormatoDeCartaz): Promise<Blob> {
  const caminho = caminhoDaImagem(s);
  const img = caminho ? await carregarImagem(caminho) : null;
  const [nome, complemento] = s.nome.split(/,\s*/, 2);
  return cartaz({
    imagem: img,
    foco: focoDaImagem(s),
    rotulo: rotuloDoSanto(s),
    data,
    texto: nome!,
    destaque: complemento ? complemento[0]!.toUpperCase() + complemento.slice(1) : "",
    credito: creditoDaImagemDoSanto(s),
    formato,
  });
}

export function legendaDoEvangelho(p: { data: string; titulo: string; referencia: string; texto: string }): string {
  return [
    `Evangelho do dia, ${p.data.toLowerCase()}.`,
    p.titulo,
    "",
    p.referencia,
    p.texto,
    "",
    ASSINATURA,
    "",
    "#evangelhododia #liturgiadiaria #igrejacatolica",
  ].join("\n");
}

export function legendaDoSanto(s: Santo, data: string): string {
  if (s.calendario)
    return [s.nome, data, "", s.historia.join("\n\n"), "", ASSINATURA, "", "#santododia #santosdaigreja #igrejacatolica"].join("\n");
  const situacao = situacaoDe(s);
  return [
    s.nome,
    s.dataDe === "falecimento" ? `Faleceu em ${data.toLowerCase()}.` : data,
    "",
    s.historia.join("\n\n"),
    "",
    EXPLICACAO[situacao],
    "",
    ASSINATURA,
    "",
    `${HASHTAG[situacao]} #igrejacatolica`,
  ].join("\n");
}

export function novenasQueComecam(d: Dia): { novena: Novena; festa: Dia }[] {
  const comecam: { novena: Novena; festa: Dia }[] = [];
  for (const n of NOVENAS) {
    for (const ano of [d.getUTCFullYear(), d.getUTCFullYear() + 1]) {
      if (paraIso(inicioDaNovena(n, ano)) === paraIso(d)) comecam.push({ novena: n, festa: dataDaFesta(n.festa, ano) });
    }
  }
  return comecam;
}

export async function imagemDaNovena(p: { novena: Novena; festa: Dia; data: string; formato: FormatoDeCartaz }): Promise<Blob> {
  const credito = (await imagensDeDevocao())[`novena:${p.novena.id}`] ?? null;
  const img = credito ? await carregarImagem(caminhoDeDevocao(credito)) : null;
  return cartaz({
    imagem: img,
    foco: credito?.foco,
    rotulo: "Começa hoje",
    data: p.data,
    texto: p.novena.nome,
    destaque: `${p.novena.dias} dias até a festa, ${diaEMes(p.festa)}`,
    credito: credito ? [credito.obra, textoDoCredito(credito)].filter(Boolean).join(". ") : undefined,
    formato: p.formato,
  });
}

export function legendaDaNovena(p: { novena: Novena; festa: Dia }): string {
  return [
    `Começa hoje a ${p.novena.nome}.`,
    `São ${p.novena.dias} dias de oração até a festa de ${p.novena.nomeDaFesta}, em ${diaEMes(p.festa)}.`,
    "",
    `Reze cada dia no app, com lembrete para não perder nenhum. ${ASSINATURA}`,
    "",
    "#novena #oracao #igrejacatolica",
  ].join("\n");
}

export async function imagemDaReflexao(p: { imagem: HTMLImageElement | null; data: string; referencia: string; frase: string; formato: FormatoDeCartaz }): Promise<Blob> {
  return cartaz({
    imagem: p.imagem,
    rotulo: "Reflexão do Evangelho",
    data: p.data,
    texto: p.frase,
    destaque: p.referencia,
    formato: p.formato,
  });
}

export function legendaDaReflexao(p: { data: string; referencia: string; reflexao: Reflexao }): string {
  return [
    `Reflexão do Evangelho de ${p.data.toLowerCase()} (${p.referencia}).`,
    "",
    p.reflexao.paragrafos.join("\n\n"),
    "",
    p.reflexao.pergunta,
    "",
    ASSINATURA,
    "",
    "#evangelho #reflexao #igrejacatolica",
  ].join("\n");
}

export async function imagemDaData(p: { dataGrande: DataGrande; data: string; formato: FormatoDeCartaz }): Promise<Blob> {
  return cartaz({
    imagem: null,
    rotulo: p.dataGrande.rotulo,
    data: p.data,
    texto: p.dataGrande.frase,
    destaque: p.dataGrande.nome,
    formato: p.formato,
  });
}

export function legendaDaData(p: { dataGrande: DataGrande; data: string }): string {
  return [`${p.dataGrande.nome}, ${p.data.toLowerCase()}.`, p.dataGrande.frase, "", ASSINATURA, "", "#igrejacatolica #fecatolica"].join("\n");
}

export function legendaDoVersiculo(texto: string, rotulo: string): string {
  return [`"${texto}"`, rotulo, "", ASSINATURA, "", "#palavradedeus #biblia #igrejacatolica"].join("\n");
}

export { ARROBA };
