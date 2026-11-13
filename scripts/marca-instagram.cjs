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

  const cartaoDeRecurso = (desenhaIcone, titulo, linhas) => {
    const [c, ctx] = novo(1080, 1350);
    ctx.strokeStyle = MARROM;
    ctx.lineWidth = 10;
    retangulo(ctx, 50, 50, 980, 1250, 40);
    ctx.stroke();
    ctx.strokeStyle = DOURADO;
    ctx.lineWidth = 3;
    retangulo(ctx, 78, 78, 924, 1194, 28);
    ctx.stroke();
    desenhaIcone(ctx);
    ctx.fillStyle = MARROM;
    ctx.font = '500 86px "Literata Variable", Georgia, serif';
    ctx.fillText(titulo, 540, 740);
    ctx.fillStyle = DOURADO;
    ctx.fillRect(540 - 3, 810, 6, 56);
    ctx.fillRect(540 - 22, 828, 44, 6);
    ctx.fillStyle = MARROM;
    ctx.font = '500 40px "Inter Variable", Arial, sans-serif';
    let y = 940;
    for (const l of linhas) {
      ctx.fillText(l, 540, y);
      y += 62;
    }
    ctx.fillStyle = "rgba(52, 30, 13, 0.55)";
    ctx.font = '500 32px "Inter Variable", Arial, sans-serif';
    ctx.fillText("@minhaigrejinhaapp", 540, 1215);
    return c.toDataURL("image/png");
  };

  const livro = (ctx) => {
    ctx.strokeStyle = MARROM;
    ctx.lineWidth = 22;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(540, 330);
    ctx.bezierCurveTo(488, 292, 406, 292, 350, 322);
    ctx.lineTo(350, 512);
    ctx.bezierCurveTo(406, 482, 488, 482, 540, 520);
    ctx.bezierCurveTo(592, 482, 674, 482, 730, 512);
    ctx.lineTo(730, 322);
    ctx.bezierCurveTo(674, 292, 592, 292, 540, 330);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(540, 330);
    ctx.lineTo(540, 520);
    ctx.stroke();
  };

  const terco = (ctx) => {
    ctx.fillStyle = MARROM;
    const cx = 540, cy = 400, r = 120;
    for (let i = 0; i < 18; i++) {
      const a = Math.PI * 2 * (i / 18) - Math.PI / 2;
      ctx.beginPath();
      ctx.arc(cx + r * Math.cos(a), cy + r * Math.sin(a), 11, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 1; i <= 2; i++) {
      ctx.beginPath();
      ctx.arc(cx, cy + r + 28 * i, 11, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.strokeStyle = DOURADO;
    ctx.lineWidth = 14;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(cx, cy + r + 76);
    ctx.lineTo(cx, cy + r + 150);
    ctx.moveTo(cx - 26, cy + r + 100);
    ctx.lineTo(cx + 26, cy + r + 100);
    ctx.stroke();
  };

  const igreja = (ctx) => {
    const lado = 300;
    const prop = simbolo.naturalHeight / simbolo.naturalWidth;
    ctx.drawImage(simbolo, (1080 - lado) / 2, 270, lado, lado * prop);
  };

  const vela = (ctx) => {
    ctx.fillStyle = MARROM;
    retangulo(ctx, 495, 360, 90, 200, 14);
    ctx.fill();
    ctx.fillStyle = DOURADO;
    ctx.beginPath();
    ctx.moveTo(540, 250);
    ctx.bezierCurveTo(588, 300, 576, 334, 540, 346);
    ctx.bezierCurveTo(504, 334, 492, 300, 540, 250);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = MARROM;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(540, 346);
    ctx.lineTo(540, 362);
    ctx.stroke();
  };

  saida.recurso_biblia = cartaoDeRecurso(livro, "A Bíblia completa", ["Os 73 livros para ler, grifar", "e ouvir. Também sem internet."]);
  saida.recurso_terco = cartaoDeRecurso(terco, "O terço de cada dia", ["Os mistérios do dia, guiados,", "com as contas na tela."]);
  saida.recurso_missas = cartaoDeRecurso(igreja, "Missas perto de você", ["Igrejas, horários de missa", "e confissão, com o caminho."]);
  saida.recurso_oracoes = cartaoDeRecurso(vela, "603 orações", ["Novenas, ladainhas e orações", "aos santos, num devocionário."]);

  {
    const [c, ctx] = novo(1080, 1920);
    ctx.strokeStyle = MARROM;
    ctx.lineWidth = 10;
    retangulo(ctx, 50, 50, 980, 1820, 40);
    ctx.stroke();
    ctx.strokeStyle = DOURADO;
    ctx.lineWidth = 3;
    retangulo(ctx, 78, 78, 924, 1764, 28);
    ctx.stroke();
    const lado = 320;
    const prop = simbolo.naturalHeight / simbolo.naturalWidth;
    ctx.drawImage(simbolo, (1080 - lado) / 2, 240, lado, lado * prop);
    ctx.fillStyle = MARROM;
    ctx.font = '500 84px "Literata Variable", Georgia, serif';
    ctx.fillText("Fiz um app católico.", 540, 700);
    ctx.font = '500 72px "Literata Variable", Georgia, serif';
    ctx.fillText("Minha Igrejinha", 540, 800);
    ctx.fillStyle = DOURADO;
    ctx.fillRect(540 - 3, 865, 6, 56);
    ctx.fillRect(540 - 22, 883, 44, 6);
    ctx.fillStyle = MARROM;
    ctx.font = '500 42px "Inter Variable", Arial, sans-serif';
    let y = 1000;
    for (const l of ["Liturgia do dia, terço, Bíblia completa,", "orações, novenas, santos", "e missas perto de você."]) {
      ctx.fillText(l, 540, y);
      y += 64;
    }
    ctx.fillStyle = DOURADO;
    ctx.font = '600 42px "Inter Variable", Arial, sans-serif';
    ctx.fillText("Gratuito e sem anúncios.", 540, 1250);
    ctx.fillStyle = MARROM;
    ctx.font = '600 46px "Inter Variable", Arial, sans-serif';
    ctx.fillText("Sigam @minhaigrejinhaapp", 540, 1390);
    ctx.font = '500 38px "Inter Variable", Arial, sans-serif';
    ctx.fillText("Testem e me mandem ideias:", 540, 1500);
    ctx.fillStyle = DOURADO;
    ctx.font = '600 40px "Inter Variable", Arial, sans-serif';
    ctx.fillText("app-catolico-five.vercel.app", 540, 1570);
    saida.story_pessoal = c.toDataURL("image/png");
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
