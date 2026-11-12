const { chromium } = require("playwright");
const { writeFileSync } = require("node:fs");

const S = "/tmp/claude-0/-home-user/52f35fde-f0cb-5748-9ec5-8faf5e29b839/scratchpad/";

const desenhar = async () => {
  await document.fonts.ready;
  const CREME = "#FBF0DD";
  const MARROM = "#341E0D";
  const DOURADO = "#B8892B";

  const retangulo = (ctx, x, y, l, a, r) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + l, y, x + l, y + a, r);
    ctx.arcTo(x + l, y + a, x, y + a, r);
    ctx.arcTo(x, y + a, x, y, r);
    ctx.arcTo(x, y, x + l, y, r);
    ctx.closePath();
  };

  const novo = (w, h) => {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d");
    ctx.fillStyle = CREME;
    ctx.fillRect(0, 0, w, h);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    return [c, ctx];
  };

  const simbolo = await new Promise((ok, erro) => {
    const i = document.createElement("img");
    i.onload = () => ok(i);
    i.onerror = erro;
    i.src = "/simbolo.png";
  });

  const saida = {};

  {
    const [c, ctx] = novo(1080, 1350);
    ctx.strokeStyle = MARROM;
    ctx.lineWidth = 10;
    retangulo(ctx, 50, 50, 980, 1250, 40);
    ctx.stroke();
    ctx.strokeStyle = DOURADO;
    ctx.lineWidth = 3;
    retangulo(ctx, 78, 78, 924, 1194, 28);
    ctx.stroke();

    const lado = 380;
    const prop = simbolo.naturalHeight / simbolo.naturalWidth;
    ctx.drawImage(simbolo, (1080 - lado) / 2, 210, lado, lado * prop);

    ctx.fillStyle = MARROM;
    ctx.font = '500 92px "Literata Variable", Georgia, serif';
    ctx.fillText("Minha Igrejinha", 540, 700);

    ctx.fillStyle = DOURADO;
    ctx.fillRect(540 - 3, 775, 6, 56);
    ctx.fillRect(540 - 22, 793, 44, 6);

    ctx.fillStyle = MARROM;
    ctx.font = '500 40px "Inter Variable", Arial, sans-serif';
    ctx.fillText("Liturgia do dia, terço, Bíblia completa,", 540, 910);
    ctx.fillText("orações, novenas, santos", 540, 972);
    ctx.fillText("e missas perto de você.", 540, 1034);

    ctx.fillStyle = DOURADO;
    ctx.font = '600 40px "Inter Variable", Arial, sans-serif';
    ctx.fillText("Gratuito e sem anúncios.", 540, 1130);

    ctx.fillStyle = "rgba(52, 30, 13, 0.55)";
    ctx.font = '500 32px "Inter Variable", Arial, sans-serif';
    ctx.fillText("@minhaigrejinhaapp", 540, 1232);
    saida.post = c.toDataURL("image/png");
  }

  {
    const [c, ctx] = novo(1080, 1080);
    ctx.strokeStyle = MARROM;
    ctx.lineWidth = 26;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(540, 430);
    ctx.bezierCurveTo(480, 385, 385, 385, 320, 420);
    ctx.lineTo(320, 640);
    ctx.bezierCurveTo(385, 605, 480, 605, 540, 650);
    ctx.bezierCurveTo(600, 605, 695, 605, 760, 640);
    ctx.lineTo(760, 420);
    ctx.bezierCurveTo(695, 385, 600, 385, 540, 430);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(540, 430);
    ctx.lineTo(540, 650);
    ctx.stroke();
    saida.evangelho = c.toDataURL("image/png");
  }

  {
    const [c, ctx] = novo(1080, 1080);
    ctx.strokeStyle = DOURADO;
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.ellipse(540, 425, 110, 38, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "#341E0D";
    ctx.lineWidth = 30;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(540, 495);
    ctx.lineTo(540, 755);
    ctx.moveTo(452, 585);
    ctx.lineTo(628, 585);
    ctx.stroke();
    saida.santos = c.toDataURL("image/png");
  }

  return saida;
};

(async () => {
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1200, height: 800 } });
const p = await ctx.newPage();
await p.goto("http://localhost:4173/", { waitUntil: "networkidle" });
const artes = await p.evaluate(desenhar);
for (const [nome, dataUrl] of Object.entries(artes)) {
  writeFileSync(`${S}instagram-${nome}.png`, Buffer.from(dataUrl.split(",")[1], "base64"));
  console.log(nome, "ok");
}
await b.close();

})();
