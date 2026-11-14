import { NOME_DO_APP } from "@/marca";
import { caminhoDaArte, type ArteDoEvangelho } from "./arte";

const CREME = "#FBF0DD";
const MARROM = "#341E0D";
const DOURADO = "#D9A94A";
const FUNDO = "#131210";

export type FormatoDeCartaz = "story" | "post";

const MEDIDAS: Record<FormatoDeCartaz, { altura: number; arte: number; topoDoBloco: number; peDaObra: number; peDoSelo: number; peDoNome: number; comArte: number; semArte: number }> = {
  story: { altura: 1920, arte: 1180, topoDoBloco: 1270, peDaObra: 250, peDoSelo: 162, peDoNome: 84, comArte: 400, semArte: 700 },
  post: { altura: 1350, arte: 800, topoDoBloco: 885, peDaObra: 214, peDoSelo: 138, peDoNome: 68, comArte: 250, semArte: 500 },
};

function quebrar(ctx: CanvasRenderingContext2D, texto: string, largura: number): string[] {
  const linhas: string[] = [];
  let atual = "";
  for (const palavra of texto.split(/\s+/)) {
    const tentativa = atual ? `${atual} ${palavra}` : palavra;
    if (ctx.measureText(tentativa).width > largura && atual) {
      linhas.push(atual);
      atual = palavra;
    } else atual = tentativa;
  }
  if (atual) linhas.push(atual);
  return linhas;
}

export function fraseDoEvangelho(versiculos: string[], maximo = 220): string {
  const texto = versiculos.join(" ").replace(/\s+/g, " ").trim();
  let frase = texto;
  if (texto.length > maximo) {
    const corte = texto.slice(0, maximo);
    const fim = Math.max(corte.lastIndexOf(". "), corte.lastIndexOf("! "), corte.lastIndexOf("? "));
    frase = fim > 80 ? corte.slice(0, fim + 1) : `${corte.replace(/\s+\S*$/, "")}…`;
  }
  const abre = (frase.match(/“/g) ?? []).length;
  const fecha = (frase.match(/”/g) ?? []).length;
  if (abre !== fecha) frase = frase.replace(/[“”]/g, "");
  return frase;
}

export function carregarImagem(caminho: string): Promise<HTMLImageElement | null> {
  return new Promise((ok) => {
    const img = document.createElement("img");
    img.onload = () => ok(img);
    img.onerror = () => ok(null);
    img.src = caminho;
  });
}

export interface Cartaz {
  imagem: HTMLImageElement | null;
  foco?: string;
  rotulo: string;
  data: string;
  texto: string;
  destaque: string;
  credito?: string;
  corpo?: string;
  formato: FormatoDeCartaz;
}

export async function cartaz(p: Cartaz): Promise<Blob> {
  await document.fonts?.ready;
  const m = p.corpo && p.formato === "story" ? { ...MEDIDAS.story, arte: 860, topoDoBloco: 900, comArte: 260 } : MEDIDAS[p.formato];
  const LARGURA = 1080;
  const canvas = document.createElement("canvas");
  canvas.width = LARGURA;
  canvas.height = m.altura;
  const ctx = canvas.getContext("2d")!;
  const img = p.imagem;

  ctx.fillStyle = img ? FUNDO : CREME;
  ctx.fillRect(0, 0, LARGURA, m.altura);

  if (img) {
    const escala = Math.max(LARGURA / img.naturalWidth, m.arte / img.naturalHeight);
    const w = img.naturalWidth * escala;
    const h = img.naturalHeight * escala;
    const focoX = Number(/^(\d+)%/.exec(p.foco ?? "")?.[1] ?? 50) / 100;
    const focoY = Number(/ (\d+)%/.exec(p.foco ?? "")?.[1] ?? 35) / 100;
    const x = Math.min(0, Math.max(LARGURA - w, LARGURA / 2 - w * focoX));
    const y = Math.min(0, Math.max(m.arte - h, m.arte / 2 - h * focoY));
    ctx.drawImage(img, x, y, w, h);
    const veu = ctx.createLinearGradient(0, m.arte - 420, 0, m.arte + 60);
    veu.addColorStop(0, "rgba(19, 18, 16, 0)");
    veu.addColorStop(1, FUNDO);
    ctx.fillStyle = veu;
    ctx.fillRect(0, m.arte - 420, LARGURA, 480 + (m.altura - m.arte));
  }

  const tinta = img ? "#FFFFFF" : MARROM;
  const suave = img ? "rgba(255, 255, 255, 0.72)" : "rgba(52, 30, 13, 0.7)";
  const fraca = img ? "rgba(255, 255, 255, 0.5)" : "rgba(52, 30, 13, 0.5)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const larguraDoTexto = LARGURA - 200;
  let tamanho = p.texto.length <= 40 ? 76 : 58;
  let linhas: string[] = [];
  for (; tamanho >= 34; tamanho -= 2) {
    ctx.font = `500 ${tamanho}px "Literata Variable", Georgia, serif`;
    linhas = quebrar(ctx, p.texto, larguraDoTexto);
    if (linhas.length * tamanho * 1.4 <= (img ? m.comArte : m.semArte)) break;
  }
  const CORPO = 34;
  ctx.font = `400 ${CORPO}px "Inter Variable", Arial, sans-serif`;
  const linhasDoCorpo = p.corpo && p.formato === "story" ? p.corpo.split("\n").flatMap((par, i) => [...(i ? [""] : []), ...quebrar(ctx, par, larguraDoTexto)]) : [];
  const alturaDoCorpo = linhasDoCorpo.length ? 56 + linhasDoCorpo.length * CORPO * 1.45 : 0;
  const alturaDoBloco = 34 + 72 + 36 + 100 + linhas.length * tamanho * 1.4 + 48 + 40 + alturaDoCorpo;
  let y = img ? Math.min(m.topoDoBloco, m.altura - m.peDaObra - 80 - alturaDoBloco) : (m.altura - 120 - alturaDoBloco) / 2 + 17;

  ctx.fillStyle = DOURADO;
  ctx.font = `700 34px "Inter Variable", Arial, sans-serif`;
  ctx.fillText(p.rotulo.toUpperCase().split("").join(" "), LARGURA / 2, y);
  y += 72;
  ctx.fillStyle = suave;
  ctx.font = `500 36px "Inter Variable", Arial, sans-serif`;
  ctx.fillText(p.data, LARGURA / 2, y);
  y += 100;

  ctx.fillStyle = tinta;
  ctx.font = `500 ${tamanho}px "Literata Variable", Georgia, serif`;
  for (const linha of linhas) {
    ctx.fillText(linha, LARGURA / 2, y);
    y += tamanho * 1.4;
  }
  y += 48;
  ctx.fillStyle = DOURADO;
  ctx.font = `600 40px "Inter Variable", Arial, sans-serif`;
  ctx.fillText(p.destaque, LARGURA / 2, y);
  if (linhasDoCorpo.length) {
    y += p.destaque ? 76 : -24;
    ctx.fillStyle = suave;
    ctx.font = `400 ${CORPO}px "Inter Variable", Arial, sans-serif`;
    for (const linha of linhasDoCorpo) {
      if (linha) ctx.fillText(linha, LARGURA / 2, y);
      y += CORPO * 1.45;
    }
  }

  if (p.credito) {
    ctx.fillStyle = fraca;
    ctx.font = `500 26px "Inter Variable", Arial, sans-serif`;
    ctx.fillText(p.credito, LARGURA / 2, m.altura - m.peDaObra);
  }
  const simbolo = await carregarImagem("/simbolo.png");
  if (simbolo) {
    const cy = m.altura - m.peDoSelo;
    ctx.fillStyle = CREME;
    ctx.beginPath();
    ctx.arc(LARGURA / 2, cy, 46, 0, Math.PI * 2);
    ctx.fill();
    const prop = simbolo.naturalHeight / simbolo.naturalWidth;
    const lado = prop > 1 ? 58 / prop : 58;
    ctx.drawImage(simbolo, LARGURA / 2 - lado / 2, cy - (lado * prop) / 2, lado, lado * prop);
  }
  ctx.fillStyle = suave;
  ctx.font = `600 32px "Inter Variable", Arial, sans-serif`;
  ctx.fillText(NOME_DO_APP, LARGURA / 2, m.altura - m.peDoNome);

  return new Promise((ok, erro) => canvas.toBlob((b) => (b ? ok(b) : erro(new Error("imagem"))), "image/png"));
}

export async function imagemDoEvangelho(p: { arte: ArteDoEvangelho | null; data: string; referencia: string; frase: string; formato?: FormatoDeCartaz }): Promise<Blob> {
  const img = p.arte ? await carregarImagem(caminhoDaArte(p.arte)) : null;
  return cartaz({
    imagem: img,
    rotulo: "Evangelho do dia",
    data: p.data,
    texto: p.frase,
    destaque: p.referencia,
    credito: p.arte?.obra,
    formato: p.formato ?? "story",
  });
}
