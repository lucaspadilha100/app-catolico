import { NOME_DO_APP } from "@/marca";

const LARGURA = 1080;
const ALTURA = 1350;
const CREME = "#FBF0DD";
const MARROM = "#341E0D";
const DOURADO = "#B8892B";

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

function retangulo(ctx: CanvasRenderingContext2D, x: number, y: number, l: number, a: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + l, y, x + l, y + a, r);
  ctx.arcTo(x + l, y + a, x, y + a, r);
  ctx.arcTo(x, y + a, x, y, r);
  ctx.arcTo(x, y, x + l, y, r);
  ctx.closePath();
}

export async function imagemDoVersiculo(texto: string, referencia: string): Promise<Blob> {
  await document.fonts?.ready;
  const canvas = document.createElement("canvas");
  canvas.width = LARGURA;
  canvas.height = ALTURA;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = CREME;
  ctx.fillRect(0, 0, LARGURA, ALTURA);
  ctx.strokeStyle = MARROM;
  ctx.lineWidth = 10;
  retangulo(ctx, 50, 50, LARGURA - 100, ALTURA - 100, 40);
  ctx.stroke();
  ctx.strokeStyle = DOURADO;
  ctx.lineWidth = 3;
  retangulo(ctx, 78, 78, LARGURA - 156, ALTURA - 156, 28);
  ctx.stroke();

  ctx.fillStyle = DOURADO;
  ctx.fillRect(LARGURA / 2 - 3, 150, 6, 70);
  ctx.fillRect(LARGURA / 2 - 26, 172, 52, 6);

  const citacao = `“${texto.replace(/^[“"]|[”"]$/g, "")}”`;
  const larguraDoTexto = LARGURA - 260;
  let tamanho = 66;
  let linhas: string[] = [];
  for (; tamanho >= 30; tamanho -= 2) {
    ctx.font = `500 ${tamanho}px "Literata Variable", Georgia, serif`;
    linhas = quebrar(ctx, citacao, larguraDoTexto);
    if (linhas.length * tamanho * 1.45 <= 760) break;
  }
  ctx.fillStyle = MARROM;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const altura = linhas.length * tamanho * 1.45;
  let y = 690 - altura / 2 + (tamanho * 1.45) / 2;
  for (const l of linhas) {
    ctx.fillText(l, LARGURA / 2, y);
    y += tamanho * 1.45;
  }

  ctx.font = `600 40px "Inter Variable", Arial, sans-serif`;
  ctx.fillStyle = DOURADO;
  ctx.fillText(referencia, LARGURA / 2, 1130);
  ctx.font = `500 30px "Inter Variable", Arial, sans-serif`;
  ctx.fillStyle = "rgba(52, 30, 13, 0.55)";
  ctx.fillText(NOME_DO_APP, LARGURA / 2, 1215);

  return new Promise((ok, erro) => canvas.toBlob((b) => (b ? ok(b) : erro(new Error("imagem"))), "image/png"));
}

export async function compartilharVersiculo(texto: string, referencia: string): Promise<"compartilhado" | "baixado" | "erro"> {
  try {
    const blob = await imagemDoVersiculo(texto, referencia);
    const nome = `${referencia.replace(/[^\p{L}\p{N}]+/gu, "-")}.png`;
    const arquivo = new File([blob], nome, { type: "image/png" });
    if (navigator.canShare?.({ files: [arquivo] })) {
      try {
        await navigator.share({ files: [arquivo], title: referencia });
      } catch {}
      return "compartilhado";
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = nome;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
    return "baixado";
  } catch {
    return "erro";
  }
}
