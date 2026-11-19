import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const { chromium } = createRequire(import.meta.url)("playwright");

const [, , iso, saida, portaPedida] = process.argv;
if (!/^\d{4}-\d{2}-\d{2}$/.test(iso ?? "") || !saida) {
  console.error("Uso: node scripts/instagram/gerar-do-dia.mjs AAAA-MM-DD <pasta-de-saida> [porta]");
  process.exit(1);
}
const porta = Number(portaPedida ?? 5200);

const servidor = spawn("npx", ["vite", "--port", String(porta), "--strictPort"], { stdio: "ignore", detached: true });
const encerrar = () => {
  try {
    process.kill(-servidor.pid);
  } catch {
    servidor.kill();
  }
};

async function esperarServidor() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`http://localhost:${porta}/`);
      if (r.ok) return;
    } catch {}
    await new Promise((ok) => setTimeout(ok, 1000));
  }
  throw new Error("O servidor do app não subiu.");
}

try {
  await esperarServidor();
  const navegador = await chromium.launch();
  const pagina = await navegador.newPage();
  await pagina.addInitScript(() => localStorage.setItem("santinho-preferencias", JSON.stringify({ boasVindas: true })));
  await pagina.goto(`http://localhost:${porta}/`, { waitUntil: "networkidle", timeout: 90000 });
  const pastaDoConheca = "docs/marca/instagram/conheca";
  const temConheca = existsSync(pastaDoConheca) && readdirSync(pastaDoConheca).some((p) => p.startsWith(`${iso}-`));
  const r = await pagina.evaluate(async ([iso, temConheca]) => {
    const datas = await import("/src/liturgia/datas.ts");
    const { diaLiturgico } = await import("/src/liturgia/calendario.ts");
    const { carregarLecionario, leiturasDoDia } = await import("/src/liturgia/lecionario.ts");
    const { evangelhoDaMissa } = await import("/src/components/Reflexao.tsx");
    const { textoDaReferencia } = await import("/src/biblia/texto.ts");
    const { arteDoEvangelho, caminhoDaArte } = await import("/src/liturgia/arte.ts");
    const { carregarImagem, fraseDoEvangelho, imagemDoEvangelho } = await import("/src/liturgia/imagemDoEvangelho.ts");
    const conteudo = await import("/src/divulgacao/conteudo.ts");
    const extra = await import("/src/divulgacao/instagram.ts");
    const { dataGrande } = await import("/src/divulgacao/datas.ts");
    const { reflexaoDoEvangelho } = await import("/src/reflexoes/reflexoes.ts");
    const { misteriosDoDia } = await import("/src/liturgia/terco.ts");
    const { santosDaDataMMDD, lembradosDaDataMMDD, fotoDoSanto } = await import("/src/santos/santos.ts");
    await document.fonts.ready;

    const arquivos = {};
    const jpg = async (nome, blob) => {
      const bmp = await createImageBitmap(blob);
      const c = document.createElement("canvas");
      c.width = bmp.width;
      c.height = bmp.height;
      c.getContext("2d").drawImage(bmp, 0, 0);
      arquivos[nome] = c.toDataURL("image/jpeg", 0.88).split(",")[1];
      return nome;
    };

    const d = datas.deIso(iso);
    const l = diaLiturgico(d);
    const dataLonga = datas.dataPorExtenso(d);
    const diaDaSemana = dataLonga.split(",")[0];
    const diaEMes = datas.diaEMes(d);
    const itens = [];

    const missas = leiturasDoDia(l, await carregarLecionario());
    const canonica = evangelhoDaMissa(missas[0]);
    const evangelho = missas[0]?.leituras.find((x) => x.tipo === "evangelho" && !x.ou && x.forma !== "breve");
    const referencia = evangelho?.referencia ?? "";
    const arte = await arteDoEvangelho(canonica);
    const texto = canonica ? (await textoDaReferencia(canonica)).flatMap((t) => t.versiculos.map((v) => v.texto)).join(" ") : "";
    const ev = (formato) =>
      imagemDoEvangelho({ arte, data: dataLonga, referencia, frase: fraseDoEvangelho(texto ? [texto] : [], arte ? (formato === "post" ? 150 : 170) : 220), formato });
    const LIVRO = { MAT: "Mateus", MRK: "Marcos", LUK: "Lucas", JHN: "João" };
    const reelDoEvangelho = async () => {
      const img = arte ? await carregarImagem(caminhoDaArte(arte)) : null;
      const W = 1080, H = 1920;
      const quebrar = (ctx, t, w) => {
        const ls = [];
        let a = "";
        for (const p of t.split(/\s+/)) {
          const n = a ? `${a} ${p}` : p;
          if (ctx.measureText(n).width > w && a) {
            ls.push(a);
            a = p;
          } else a = n;
        }
        if (a) ls.push(a);
        return ls;
      };
      const tela = () => {
        const c = document.createElement("canvas");
        c.width = W;
        c.height = H;
        return [c, c.getContext("2d")];
      };
      const fundo = (x, escuro) => {
        x.fillStyle = "#131210";
        x.fillRect(0, 0, W, H);
        if (img) {
          const e = Math.max(W / img.naturalWidth, H / img.naturalHeight);
          const w = img.naturalWidth * e, h = img.naturalHeight * e;
          x.drawImage(img, (W - w) / 2, (H - h) / 2, w, h);
        }
        x.fillStyle = `rgba(19,18,16,${escuro})`;
        x.fillRect(0, 0, W, H);
      };
      const marca = (x) => {
        x.textAlign = "center";
        x.fillStyle = "rgba(255,255,255,.75)";
        x.font = '600 34px "Inter Variable"';
        x.fillText("Minha Igrejinha", W / 2, H - 150);
      };
      const frases = texto.replace(/\s+/g, " ").match(/[^.!?]+[.!?]+["”]?\s*/g) ?? [texto];
      const blocos = [];
      let atual = "";
      for (const f of frases) {
        if ((atual + f).length > 170 && atual) {
          blocos.push(atual.trim());
          atual = f;
        } else atual += f;
        if (blocos.length >= 5) break;
      }
      if (atual && blocos.length < 5) blocos.push(atual.trim());
      const completo = blocos.join(" ").length >= texto.replace(/\s+/g, " ").trim().length - 2;
      const quadros = [];
      {
        const [c, x] = tela();
        fundo(x, 0.35);
        const g = x.createLinearGradient(0, H * 0.45, 0, H);
        g.addColorStop(0, "rgba(19,18,16,0)");
        g.addColorStop(1, "rgba(19,18,16,.92)");
        x.fillStyle = g;
        x.fillRect(0, 0, W, H);
        x.textAlign = "center";
        x.fillStyle = "#D9A94A";
        x.font = '700 40px "Inter Variable"';
        x.fillText("E V A N G E L H O   D O   D I A", W / 2, H - 560);
        x.fillStyle = "rgba(255,255,255,.8)";
        x.font = '500 42px "Inter Variable"';
        x.fillText(dataLonga, W / 2, H - 480);
        x.fillStyle = "#fff";
        x.font = '500 96px "Literata Variable"';
        x.fillText(referencia, W / 2, H - 340);
        marca(x);
        if (arte?.obra) {
          x.fillStyle = "rgba(255,255,255,.5)";
          x.font = '500 24px "Inter Variable"';
          x.fillText(arte.obra.length > 70 ? `${arte.obra.slice(0, 68)}…` : arte.obra, W / 2, H - 90);
        }
        quadros.push(await jpg("reel-evangelho-0.jpg", await new Promise((ok) => c.toBlob(ok, "image/png"))));
      }
      for (const [i, t] of blocos.entries()) {
        const [c, x] = tela();
        fundo(x, 0.72);
        x.textAlign = "center";
        x.fillStyle = "#fff";
        x.font = '500 66px "Literata Variable"';
        const ls = quebrar(x, t, W - 180);
        let y = H / 2 - (ls.length * 92) / 2 + 40;
        for (const s of ls) {
          x.fillText(s, W / 2, y);
          y += 92;
        }
        x.fillStyle = "#D9A94A";
        x.font = '600 40px "Inter Variable"';
        x.fillText(referencia, W / 2, y + 60);
        marca(x);
        quadros.push(await jpg(`reel-evangelho-${i + 1}.jpg`, await new Promise((ok) => c.toBlob(ok, "image/png"))));
      }
      {
        const [c, x] = tela();
        x.fillStyle = "#FBF0DD";
        x.fillRect(0, 0, W, H);
        const s = await carregarImagem("/simbolo.png");
        if (s) x.drawImage(s, W / 2 - 110, 560, 220, (220 * s.naturalHeight) / s.naturalWidth);
        x.textAlign = "center";
        x.fillStyle = "#341E0D";
        x.font = '600 84px "Literata Variable"';
        x.fillText("Minha Igrejinha", W / 2, 960);
        x.font = '500 50px "Inter Variable"';
        x.fillStyle = "rgba(52,30,13,.8)";
        x.fillText(completo ? "A liturgia de cada dia" : "O Evangelho completo e a", W / 2, 1100);
        x.fillText(completo ? "no app." : "liturgia de cada dia no app.", W / 2, 1170);
        x.fillStyle = "#A9792A";
        x.font = '600 46px "Inter Variable"';
        x.fillText("Link no perfil: @minhaigrejinhaapp", W / 2, 1330);
        quadros.push(await jpg(`reel-evangelho-${blocos.length + 1}.jpg`, await new Promise((ok) => c.toBlob(ok, "image/png"))));
      }
      const livro = LIVRO[canonica.split(" ")[0]];
      const falas = [livro ? `Evangelho de Jesus Cristo segundo São ${livro}.` : "Evangelho de Jesus Cristo.", ...blocos, completo ? "Palavra da Salvação." : "Continue a leitura no app Minha Igrejinha."];
      arquivos["reel-evangelho.json"] = btoa(unescape(encodeURIComponent(JSON.stringify({ quadros, falas }))));
      return "reel-evangelho";
    };
    if (texto)
      itens.push({
        slot: "evangelho",
        nome: `Evangelho ${referencia}`,
        feed: [await jpg("evangelho-post.jpg", await ev("post"))],
        stories: [await jpg("evangelho-story.jpg", await ev("story"))],
        reel: await reelDoEvangelho(),
        legenda: conteudo.legendaDoEvangelho({ data: dataLonga, titulo: l.titulo, referencia, texto }),
      });

    const grande = dataGrande(d, l);
    if (grande)
      itens.push({
        slot: "data",
        nome: grande.nome,
        feed: [await jpg("data-post.jpg", await conteudo.imagemDaData({ dataGrande: grande, data: dataLonga, formato: "post" }))],
        stories: [await jpg("data-story.jpg", await conteudo.imagemDaData({ dataGrande: grande, data: dataLonga, formato: "story" }))],
        legenda: conteudo.legendaDaData({ dataGrande: grande, data: dataLonga }),
      });

    const mmdd = iso.slice(5).replace("-", "");
    const [doDia, lembrados] = await Promise.all([santosDaDataMMDD(mmdd), lembradosDaDataMMDD(mmdd)]);
    const doCalendario = doDia.filter((s) => s.calendario);
    const solenidade = ["solenidade", "dia-santo"].includes(l.celebracao?.grau ?? "");
    const santos = (doCalendario.length ? doCalendario : solenidade ? [] : [...doDia, ...lembrados].filter((s) => s.imagem).slice(0, 3)).slice(0, 10);
    if (santos.length) {
      const feed = [];
      const stories = [];
      for (const [i, s] of santos.entries()) {
        feed.push(await jpg(`santo-${i + 1}-post.jpg`, await conteudo.imagemDoSanto(s, diaEMes, "post")));
        stories.push(await jpg(`santo-${i + 1}-story.jpg`, await conteudo.imagemDoSanto(s, diaEMes, "story")));
      }
      const legenda =
        santos.length === 1
          ? conteudo.legendaDoSanto(santos[0], diaEMes)
          : [
              `${doCalendario.length ? "Santos do dia" : "Lembrados hoje"}, ${diaEMes}.`,
              "",
              ...santos.flatMap((s) => [s.nome, s.resumo ?? "", ""]),
              "A história de cada um está no app.",
              "",
              conteudo.ASSINATURA,
              "",
              "#santododia #santosdaigreja #igrejacatolica",
            ].join("\n");
      itens.push({ slot: "santos", nome: santos.map((s) => s.nome).join("; "), feed, stories, legenda });
    }

    const doReel = temConheca
      ? null
      : (doCalendario[0] ?? (solenidade ? null : [...doDia, ...lembrados].find((s) => s.imagem && s.historia.join(" ").length >= 300))) ?? null;
    if (doReel) {
      const s = doReel;
      const W = 1080, H = 1920;
      const foto = fotoDoSanto(s);
      const img = foto ? await carregarImagem(foto).catch(() => null) : null;
      const quebrar = (ctx, t, w) => {
        const ls = [];
        let a = "";
        for (const p of t.split(/\s+/)) {
          const n = a ? `${a} ${p}` : p;
          if (ctx.measureText(n).width > w && a) {
            ls.push(a);
            a = p;
          } else a = n;
        }
        if (a) ls.push(a);
        return ls;
      };
      const tela = () => {
        const c = document.createElement("canvas");
        c.width = W;
        c.height = H;
        return [c, c.getContext("2d")];
      };
      const fundo = (x, escuro) => {
        x.fillStyle = "#131210";
        x.fillRect(0, 0, W, H);
        if (img) {
          const e = Math.max(W / img.naturalWidth, H / img.naturalHeight);
          const w = img.naturalWidth * e, h = img.naturalHeight * e;
          const [fx, fy] = (s.imagem?.foco ?? "50% 30%").split(" ").map((v) => parseFloat(v) / 100);
          x.drawImage(img, Math.min(0, Math.max(W - w, W / 2 - w * fx)), Math.min(0, Math.max(H - h, H * 0.4 - h * fy)), w, h);
        }
        x.fillStyle = `rgba(19,18,16,${escuro})`;
        x.fillRect(0, 0, W, H);
      };
      const marca = (x) => {
        x.textAlign = "center";
        x.fillStyle = "rgba(255,255,255,.75)";
        x.font = '600 34px "Inter Variable"';
        x.fillText("Minha Igrejinha", W / 2, H - 150);
      };
      const historia = s.historia.join(" ").replace(/\s+/g, " ").trim();
      const frases = historia.match(/[^.!?]+[.!?]+["”)]?\s*/g) ?? [historia];
      const blocos = [];
      let atual = "";
      for (const f of frases) {
        if ((atual + f).length > 170 && atual) {
          blocos.push(atual.trim());
          atual = f;
          if (blocos.length >= 4) break;
        } else atual += f;
      }
      if (atual && blocos.length < 4) blocos.push(atual.trim());
      const completo = blocos.join(" ").length >= historia.length - 2;
      const rotulo = s.calendario ? "SANTO DO DIA" : "HOJE LEMBRAMOS";
      const quadros = [];
      {
        const [c, x] = tela();
        fundo(x, 0.2);
        const g = x.createLinearGradient(0, H * 0.4, 0, H);
        g.addColorStop(0, "rgba(19,18,16,0)");
        g.addColorStop(1, "rgba(19,18,16,.94)");
        x.fillStyle = g;
        x.fillRect(0, 0, W, H);
        x.textAlign = "center";
        x.font = '500 84px "Literata Variable"';
        const ls = quebrar(x, s.nome, W - 160);
        let y = H - 330 - (ls.length - 1) * 100;
        x.fillStyle = "#D9A94A";
        x.font = '700 40px "Inter Variable"';
        x.fillText(rotulo.split("").join(" "), W / 2, y - 190);
        x.fillStyle = "rgba(255,255,255,.8)";
        x.font = '500 42px "Inter Variable"';
        x.fillText(dataLonga, W / 2, y - 115);
        x.fillStyle = "#fff";
        x.font = '500 84px "Literata Variable"';
        for (const l of ls) {
          x.fillText(l, W / 2, y);
          y += 100;
        }
        marca(x);
        const cred = img ? conteudo.creditoDaImagemDoSanto(s) : "";
        if (cred) {
          x.fillStyle = "rgba(255,255,255,.5)";
          x.font = '500 24px "Inter Variable"';
          x.fillText(cred.length > 80 ? `${cred.slice(0, 78)}…` : cred, W / 2, H - 90);
        }
        quadros.push(await jpg("reel-santo-0.jpg", await new Promise((ok) => c.toBlob(ok, "image/png"))));
      }
      for (const [i, t] of blocos.entries()) {
        const [c, x] = tela();
        fundo(x, 0.74);
        x.textAlign = "center";
        x.fillStyle = "#fff";
        x.font = '500 62px "Literata Variable"';
        const ls = quebrar(x, t, W - 170);
        let y = H / 2 - (ls.length * 88) / 2 + 40;
        for (const l of ls) {
          x.fillText(l, W / 2, y);
          y += 88;
        }
        x.fillStyle = "#D9A94A";
        x.font = '600 38px "Inter Variable"';
        const semComplemento = s.nome.replace(/(,\s+[a-zà-ú][^,]*)+$/, "");
        const curto = semComplemento.length > 44 ? `${semComplemento.slice(0, 42)}…` : semComplemento;
        x.fillText(curto, W / 2, y + 60);
        marca(x);
        quadros.push(await jpg(`reel-santo-${i + 1}.jpg`, await new Promise((ok) => c.toBlob(ok, "image/png"))));
      }
      {
        const [c, x] = tela();
        x.fillStyle = "#FBF0DD";
        x.fillRect(0, 0, W, H);
        const sb = await carregarImagem("/simbolo.png");
        if (sb) x.drawImage(sb, W / 2 - 110, 560, 220, (220 * sb.naturalHeight) / sb.naturalWidth);
        x.textAlign = "center";
        x.fillStyle = "#341E0D";
        x.font = '600 84px "Literata Variable"';
        x.fillText("Minha Igrejinha", W / 2, 960);
        x.font = '500 50px "Inter Variable"';
        x.fillStyle = "rgba(52,30,13,.8)";
        x.fillText("Um santo por dia,", W / 2, 1100);
        x.fillText("com a história completa no app.", W / 2, 1170);
        x.fillStyle = "#A9792A";
        x.font = '600 46px "Inter Variable"';
        x.fillText("Link no perfil: @minhaigrejinhaapp", W / 2, 1330);
        quadros.push(await jpg(`reel-santo-${blocos.length + 1}.jpg`, await new Promise((ok) => c.toBlob(ok, "image/png"))));
      }
      const pede = s.calendario || ["santo", "beato", "nossa-senhora"].includes(s.situacao ?? "");
      const falas = [
        `${s.calendario ? "Santo do dia" : "Hoje lembramos"}, ${diaEMes}: ${s.nome}.`,
        ...blocos,
        [completo ? "" : "A história continua no app Minha Igrejinha.", pede ? "Rogai por nós." : ""].filter(Boolean).join(" ") || "Minha Igrejinha.",
      ];
      arquivos["reel-santo.json"] = btoa(unescape(encodeURIComponent(JSON.stringify({ quadros, falas }))));
      itens.push({
        slot: "conheca",
        nome: `Reels: ${s.nome}`,
        feed: [],
        stories: [],
        reel: "reel-santo",
        legenda: [
          `${s.calendario ? "Santo do dia" : "Hoje lembramos"}, ${diaEMes}: ${s.nome}.`,
          "",
          s.resumo || s.historia[0],
          "",
          "A história completa está no app, em Santos.",
          "",
          conteudo.ASSINATURA,
          "",
          "#santododia #santosdaigreja #igrejacatolica",
        ].join("\n"),
      });
    }

    for (const [i, { novena, festa }] of conteudo.novenasQueComecam(d).entries())
      itens.push({
        slot: "novena",
        nome: novena.nome,
        feed: [await jpg(`novena-${i + 1}-post.jpg`, await conteudo.imagemDaNovena({ novena, festa, data: dataLonga, formato: "post" }))],
        stories: [await jpg(`novena-${i + 1}-story.jpg`, await conteudo.imagemDaNovena({ novena, festa, data: dataLonga, formato: "story" }))],
        legenda: conteudo.legendaDaNovena({ novena, festa }),
      });

    const reflexao = d.getUTCDay() === 0 && canonica ? await reflexaoDoEvangelho(canonica) : null;
    if (reflexao) {
      const rf = (formato) => conteudo.imagemDaReflexao({ imagem: null, data: dataLonga, referencia, frase: fraseDoEvangelho([reflexao.paragrafos[0] ?? ""], 220), formato });
      itens.push({
        slot: "reflexao",
        nome: `Reflexão ${referencia}`,
        feed: [await jpg("reflexao-post.jpg", await rf("post"))],
        stories: [await jpg("reflexao-story.jpg", await rf("story"))],
        legenda: conteudo.legendaDaReflexao({ data: dataLonga, referencia, reflexao }),
      });
    }

    itens.push({ slot: "angelus", nome: "Ângelus", feed: [], stories: [await jpg("angelus-story.jpg", await extra.imagemDoAngelus(dataLonga))], legenda: "" });
    itens.push({ slot: "misericordia", nome: "Hora da Misericórdia", feed: [], stories: [await jpg("misericordia-story.jpg", await extra.imagemDaMisericordia(dataLonga))], legenda: "" });

    const misterios = misteriosDoDia(d);
    itens.push({
      slot: "terco",
      nome: `Terço: ${misterios.nome}`,
      feed: [await jpg("terco-post.jpg", await extra.imagemDoTerco({ misterios, diaDaSemana, data: diaEMes, formato: "post" }))],
      stories: [await jpg("terco-story.jpg", await extra.imagemDoTerco({ misterios, diaDaSemana, data: diaEMes, formato: "story" }))],
      legenda: extra.legendaDoTerco({ misterios, diaDaSemana }),
    });

    itens.push({ slot: "noite", nome: "Oração da noite", feed: [], stories: [await jpg("noite-story.jpg", await extra.imagemDaNoite(dataLonga))], legenda: "" });

    return { dia: { data: dataLonga, titulo: l.titulo, itens }, arquivos };
  }, [iso, temConheca]);
  await navegador.close();

  mkdirSync(saida, { recursive: true });
  for (const [nome, b64] of Object.entries(r.arquivos)) writeFileSync(join(saida, nome), Buffer.from(b64, "base64"));
  writeFileSync(join(saida, "dia.json"), JSON.stringify(r.dia, null, 1));
  console.log(`Gerado ${iso}: ${r.dia.itens.map((i) => `${i.slot} (${i.nome})`).join(" · ")}`);
} finally {
  encerrar();
}
