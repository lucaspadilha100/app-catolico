import { NOME_DO_APP } from "@/marca";
import { enderecoPublico } from "@/lib/nativo";
import { caminhoDaArte, type ArteDoEvangelho } from "./arte";

const LARGURA = 1080;
const ALTURA = 1920;
const CREME = "#FBF0DD";
const MARROM = "#341E0D";
const DOURADO = "#D9A94A";

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

function carregarArte(arte: ArteDoEvangelho): Promise<HTMLImageElement | null> {
  return new Promise((ok) => {
    const img = document.createElement("img");
    img.onload = () => ok(img);
    img.onerror = () => ok(null);
    img.src = caminhoDaArte(arte);
  });
}

export async function imagemDoEvangelho(p: { arte: ArteDoEvangelho | null; data: string; referencia: string; frase: string }): Promise<Blob> {
  await document.fonts?.ready;
  const canvas = document.createElement("canvas");
  canvas.width = LARGURA;
  canvas.height = ALTURA;
  const ctx = canvas.getContext("2d")!;
  const img = p.arte ? await carregarArte(p.arte) : null;

  ctx.fillStyle = img ? "#131210" : CREME;
  ctx.fillRect(0, 0, LARGURA, ALTURA);

  if (img && p.arte) {
    const alturaDaArte = 1180;
    const escala = Math.max(LARGURA / img.naturalWidth, alturaDaArte / img.naturalHeight);
    const w = img.naturalWidth * escala;
    const h = img.naturalHeight * escala;
    ctx.drawImage(img, (LARGURA - w) / 2, 0, w, h);
    const veu = ctx.createLinearGradient(0, alturaDaArte - 420, 0, alturaDaArte + 60);
    veu.addColorStop(0, "rgba(19, 18, 16, 0)");
    veu.addColorStop(1, "#131210");
    ctx.fillStyle = veu;
    ctx.fillRect(0, alturaDaArte - 420, LARGURA, 480 + (ALTURA - alturaDaArte));
  }

  const tinta = img ? "#FFFFFF" : MARROM;
  const suave = img ? "rgba(255, 255, 255, 0.72)" : "rgba(52, 30, 13, 0.7)";
  const fraca = img ? "rgba(255, 255, 255, 0.5)" : "rgba(52, 30, 13, 0.5)";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const larguraDoTexto = LARGURA - 200;
  let tamanho = 58;
  let linhas: string[] = [];
  for (; tamanho >= 34; tamanho -= 2) {
    ctx.font = `500 ${tamanho}px "Literata Variable", Georgia, serif`;
    linhas = quebrar(ctx, p.frase, larguraDoTexto);
    if (linhas.length * tamanho * 1.4 <= (img ? 400 : 760)) break;
  }
  const alturaDoBloco = 34 + 72 + 36 + 100 + linhas.length * tamanho * 1.4 + 48 + 40;
  let y = img ? Math.min(1270, ALTURA - 250 - alturaDoBloco) : (ALTURA - 120 - alturaDoBloco) / 2 + 17;

  ctx.fillStyle = DOURADO;
  ctx.font = `700 34px "Inter Variable", Arial, sans-serif`;
  ctx.fillText("E V A N G E L H O   D O   D I A", LARGURA / 2, y);
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
  ctx.fillText(p.referencia, LARGURA / 2, y);

  if (p.arte) {
    ctx.fillStyle = fraca;
    ctx.font = `500 26px "Inter Variable", Arial, sans-serif`;
    ctx.fillText(p.arte.obra, LARGURA / 2, ALTURA - 170);
  }
  ctx.fillStyle = suave;
  ctx.font = `600 32px "Inter Variable", Arial, sans-serif`;
  ctx.fillText(`${NOME_DO_APP} · ${enderecoPublico().replace(/^https?:\/\//, "")}`, LARGURA / 2, ALTURA - 110);

  return new Promise((ok, erro) => canvas.toBlob((b) => (b ? ok(b) : erro(new Error("imagem"))), "image/png"));
}
