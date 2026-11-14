import { NOME_DO_APP } from "@/marca";
import { linhasDoSantinho, type DadosDoSantinho } from "./modelos";

export const LARGURA = 1080;
export const ALTURA = 1620;
const CREME = "#FBF0DD";
const MARROM = "#341E0D";
const SUAVE = "#6d5845";
const DOURADO = "#B8892B";
const LITERATA = '"Literata Variable", Georgia, serif';
const INTER = '"Inter Variable", Arial, sans-serif';

function quebrar(ctx: CanvasRenderingContext2D, texto: string, largura: number): string[] {
  const linhas: string[] = [];
  for (const paragrafo of texto.split("\n")) {
    let atual = "";
    for (const palavra of paragrafo.split(/\s+/).filter(Boolean)) {
      const tentativa = atual ? `${atual} ${palavra}` : palavra;
      if (ctx.measureText(tentativa).width > largura && atual) {
        linhas.push(atual);
        atual = palavra;
      } else atual = tentativa;
    }
    if (atual) linhas.push(atual);
  }
  return linhas;
}

function retangulo(ctx: CanvasRenderingContext2D, x: number, y: number, l: number, a: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + l, y, x + l, y + a, r);
  ctx.arcTo(x + l, y + a, x, y + a, r);
  ctx.arcTo(x, y + a, x, y, r);
  ctx.arcTo(x, y, x + l, y, r);
  ctx.closePath();
}

function arco(ctx: CanvasRenderingContext2D, x: number, y: number, l: number, a: number) {
  const curva = Math.min(l * 0.32, a * 0.4);
  ctx.beginPath();
  ctx.moveTo(x, y + a);
  ctx.lineTo(x, y + curva);
  ctx.quadraticCurveTo(x, y, x + l / 2, y);
  ctx.quadraticCurveTo(x + l, y, x + l, y + curva);
  ctx.lineTo(x + l, y + a);
  ctx.closePath();
}

function cruz(ctx: CanvasRenderingContext2D, cx: number, topo: number, altura: number, cor: string) {
  const grossura = altura * 0.09;
  ctx.fillStyle = cor;
  ctx.fillRect(cx - grossura / 2, topo, grossura, altura);
  ctx.fillRect(cx - altura * 0.33, topo + altura * 0.28, altura * 0.66, grossura);
}

function losango(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(cx, cy - r);
  ctx.lineTo(cx + r, cy);
  ctx.lineTo(cx, cy + r);
  ctx.lineTo(cx - r, cy);
  ctx.closePath();
  ctx.fill();
}

function moldura(ctx: CanvasRenderingContext2D, tipo: DadosDoSantinho["moldura"]) {
  if (tipo === "dourada") {
    const ouro = ctx.createLinearGradient(0, 0, LARGURA, ALTURA);
    ouro.addColorStop(0, "#9c7424");
    ouro.addColorStop(0.35, "#e2c06a");
    ouro.addColorStop(0.65, "#b8892b");
    ouro.addColorStop(1, "#f0d58a");
    ctx.strokeStyle = ouro;
    ctx.lineWidth = 26;
    retangulo(ctx, 40, 40, LARGURA - 80, ALTURA - 80, 46);
    ctx.stroke();
    ctx.strokeStyle = MARROM;
    ctx.lineWidth = 3;
    retangulo(ctx, 76, 76, LARGURA - 152, ALTURA - 152, 30);
    ctx.stroke();
    ctx.fillStyle = ouro;
    for (const [x, y] of [
      [76, 76],
      [LARGURA - 76, 76],
      [76, ALTURA - 76],
      [LARGURA - 76, ALTURA - 76],
    ] as const)
      losango(ctx, x, y, 18);
    losango(ctx, LARGURA / 2, 53, 14);
    losango(ctx, LARGURA / 2, ALTURA - 53, 14);
    return;
  }
  ctx.strokeStyle = MARROM;
  ctx.lineWidth = 10;
  retangulo(ctx, 50, 50, LARGURA - 100, ALTURA - 100, 40);
  ctx.stroke();
  ctx.strokeStyle = DOURADO;
  ctx.lineWidth = 3;
  retangulo(ctx, 78, 78, LARGURA - 156, ALTURA - 156, 28);
  ctx.stroke();
}

function carregarImagem(src: string): Promise<HTMLImageElement> {
  return new Promise((ok, erro) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => ok(img);
    img.onerror = () => erro(new Error("pintura"));
    img.src = src;
  });
}

interface Bloco {
  linhas: string[];
  fonte: string;
  cor: string;
  altura: number;
  antes: number;
}

function montar(ctx: CanvasRenderingContext2D, d: DadosDoSantinho, largura: number, alturaMaxima: number): Bloco[] {
  const l = linhasDoSantinho(d);
  for (let escala = 1; escala >= 0.55; escala -= 0.05) {
    const blocos: Bloco[] = [];
    const add = (texto: string, fonte: (t: number) => string, tamanho: number, cor: string, antes: number, max = 99) => {
      if (!texto) return;
      const t = Math.round(tamanho * escala);
      ctx.font = fonte(t);
      blocos.push({ linhas: quebrar(ctx, texto, largura).slice(0, max), fonte: fonte(t), cor, altura: t * 1.35, antes: blocos.length ? antes * escala : 0 });
    };
    add(l.titulo.toUpperCase(), (t) => `600 ${t}px ${INTER}`, 34, DOURADO, 0);
    add(l.convite, (t) => `400 ${t}px ${LITERATA}`, 42, SUAVE, 22);
    add(l.nome, (t) => `600 ${t}px ${LITERATA}`, 88, MARROM, l.convite ? 10 : 26, 3);
    add(l.quando, (t) => `500 ${t}px ${INTER}`, 36, MARROM, 34);
    add(l.local, (t) => `400 ${t}px ${INTER}`, 34, SUAVE, 8);
    add(l.frase && l.referencia ? `“${l.frase.replace(/^[“"]|[”"]$/g, "")}”` : l.frase, (t) => `400 ${t}px ${LITERATA}`, 38, MARROM, 48);
    add(l.referencia, (t) => `600 ${t}px ${INTER}`, 28, DOURADO, 14);
    const total = blocos.reduce((s, b) => s + b.antes + b.linhas.length * b.altura, 0);
    if (total <= alturaMaxima || escala <= 0.56) return blocos;
  }
  return [];
}

function escrever(ctx: CanvasRenderingContext2D, blocos: Bloco[], topo: number, alturaDaArea: number) {
  const total = blocos.reduce((s, b) => s + b.antes + b.linhas.length * b.altura, 0);
  let y = topo + Math.max(0, (alturaDaArea - total) / 2);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (const b of blocos) {
    y += b.antes;
    ctx.font = b.fonte;
    ctx.fillStyle = b.cor;
    for (const linha of b.linhas) {
      ctx.fillText(linha, LARGURA / 2, y + b.altura / 2);
      y += b.altura;
    }
  }
}

export async function desenharSantinho(d: DadosDoSantinho): Promise<Blob> {
  await Promise.all([document.fonts?.load(`600 40px ${LITERATA}`), document.fonts?.load(`400 40px ${LITERATA}`), document.fonts?.load(`600 40px ${INTER}`)]).catch(() => {});
  const canvas = document.createElement("canvas");
  canvas.width = LARGURA;
  canvas.height = ALTURA;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = CREME;
  ctx.fillRect(0, 0, LARGURA, ALTURA);
  moldura(ctx, d.moldura);

  const pintura = d.pintura ? await carregarImagem(d.pintura).catch(() => null) : null;
  const largura = LARGURA - 260;
  let topoDoTexto: number;
  if (pintura) {
    const [x, y, l, a] = [130, 130, LARGURA - 260, 720];
    ctx.save();
    arco(ctx, x, y, l, a);
    ctx.clip();
    const escala = Math.max(l / pintura.width, a / pintura.height);
    const [pl, pa] = [pintura.width * escala, pintura.height * escala];
    ctx.drawImage(pintura, x + (l - pl) / 2, y + (a - pa) * 0.3, pl, pa);
    ctx.restore();
    ctx.strokeStyle = DOURADO;
    ctx.lineWidth = 6;
    arco(ctx, x, y, l, a);
    ctx.stroke();
    topoDoTexto = y + a + 40;
  } else {
    cruz(ctx, LARGURA / 2, 150, 150, DOURADO);
    topoDoTexto = 350;
  }
  const rodape = d.creditoDaPintura && pintura ? 1440 : 1470;
  escrever(ctx, montar(ctx, d, largura, rodape - topoDoTexto), topoDoTexto, rodape - topoDoTexto);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  if (d.creditoDaPintura && pintura) {
    ctx.font = `400 22px ${INTER}`;
    ctx.fillStyle = "rgba(52, 30, 13, 0.5)";
    ctx.fillText(d.creditoDaPintura.slice(0, 80), LARGURA / 2, 1478);
  }
  ctx.font = `500 26px ${INTER}`;
  ctx.fillStyle = "rgba(52, 30, 13, 0.55)";
  ctx.fillText(NOME_DO_APP, LARGURA / 2, 1515);

  return new Promise((ok, erro) => canvas.toBlob((b) => (b ? ok(b) : erro(new Error("imagem"))), "image/png"));
}
