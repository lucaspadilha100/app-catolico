import { imagensDeDevocao, caminhoDeDevocao, textoDoCredito, type Credito } from "@/lib/imagens";
import { carregarImagem, cartaz, type FormatoDeCartaz } from "@/liturgia/imagemDoEvangelho";
import type { Misterios } from "@/liturgia/terco";
import { ASSINATURA } from "./conteudo";

async function imagemDe(chave: string): Promise<{ img: HTMLImageElement | null; credito: Credito | null }> {
  const credito = (await imagensDeDevocao())[chave] ?? null;
  return { img: credito ? await carregarImagem(caminhoDeDevocao(credito)) : null, credito };
}

const creditoDe = (c: Credito | null) => (c ? [c.obra, textoDoCredito(c)].filter(Boolean).join(". ") : "");

export async function imagemDoTerco(p: { misterios: Misterios; diaDaSemana: string; data: string; formato: FormatoDeCartaz }): Promise<Blob> {
  const { img, credito } = await imagemDe("rezar:terco");
  return cartaz({
    imagem: img,
    foco: credito?.foco,
    rotulo: "Terço de hoje",
    data: p.data,
    texto: p.misterios.nome,
    destaque: p.diaDaSemana,
    corpo: p.misterios.misterios.map((m, i) => `${i + 1}º ${m}`).join("\n"),
    credito: creditoDe(credito),
    formato: p.formato,
  });
}

export function legendaDoTerco(p: { misterios: Misterios; diaDaSemana: string }): string {
  return [
    `${p.diaDaSemana}: hoje rezamos os ${p.misterios.nome}.`,
    "",
    ...p.misterios.misterios.map((m, i) => `${i + 1}º mistério: ${m}.`),
    "",
    "No app, o terço é guiado conta por conta, com a meditação de cada mistério.",
    "",
    ASSINATURA,
    "",
    "#terco #rosario #nossasenhora #igrejacatolica",
  ].join("\n");
}

export async function imagemDoAngelus(data: string): Promise<Blob> {
  const { img, credito } = await imagemDe("rezar:angelus");
  return cartaz({
    imagem: img,
    foco: credito?.foco,
    rotulo: "Hora do Ângelus",
    data,
    texto: "O Anjo do Senhor anunciou a Maria.",
    destaque: "E ela concebeu do Espírito Santo.",
    corpo: "Eis aqui a serva do Senhor. Faça-se em mim segundo a vossa palavra.\nE o Verbo se fez carne. E habitou entre nós.\nO Ângelus completo está no app.",
    credito: creditoDe(credito),
    formato: "story",
  });
}

export async function imagemDaMisericordia(data: string): Promise<Blob> {
  const { img, credito } = await imagemDe("rezar:misericordia");
  return cartaz({
    imagem: img,
    foco: credito?.foco,
    rotulo: "Hora da Misericórdia",
    data,
    texto: "Jesus, eu confio em vós.",
    destaque: "Às três da tarde",
    corpo: "Pela sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro.\nO Terço da Misericórdia, guiado, está no app.",
    credito: creditoDe(credito),
    formato: "story",
  });
}

export async function imagemDaNoite(data: string): Promise<Blob> {
  const { img, credito } = await imagemDe("rezar:noite");
  return cartaz({
    imagem: img,
    foco: credito?.foco,
    rotulo: "Oração da noite",
    data,
    texto: "Em vossas mãos, Senhor, entrego o meu espírito.",
    destaque: "Vós nos remistes, Senhor, Deus da verdade.",
    corpo: "Visitai, Senhor, nós vos pedimos, esta casa, e afastai para longe dela todas as ciladas do inimigo. Habitem nela os vossos santos Anjos, que nos guardem em paz, e esteja sempre sobre nós a vossa bênção. Por Cristo, Senhor nosso. Amém.",
    credito: creditoDe(credito),
    formato: "story",
  });
}
