import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
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
  const r = await pagina.evaluate(async (iso) => {
    const datas = await import("/src/liturgia/datas.ts");
    const { diaLiturgico } = await import("/src/liturgia/calendario.ts");
    const { carregarLecionario, leiturasDoDia } = await import("/src/liturgia/lecionario.ts");
    const { evangelhoDaMissa } = await import("/src/components/Reflexao.tsx");
    const { textoDaReferencia } = await import("/src/biblia/texto.ts");
    const { arteDoEvangelho } = await import("/src/liturgia/arte.ts");
    const { fraseDoEvangelho, imagemDoEvangelho } = await import("/src/liturgia/imagemDoEvangelho.ts");
    const conteudo = await import("/src/divulgacao/conteudo.ts");
    const extra = await import("/src/divulgacao/instagram.ts");
    const { dataGrande } = await import("/src/divulgacao/datas.ts");
    const { reflexaoDoEvangelho } = await import("/src/reflexoes/reflexoes.ts");
    const { misteriosDoDia } = await import("/src/liturgia/terco.ts");
    const { santosDaDataMMDD, lembradosDaDataMMDD } = await import("/src/santos/santos.ts");
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
    if (texto)
      itens.push({
        slot: "evangelho",
        nome: `Evangelho ${referencia}`,
        feed: [await jpg("evangelho-post.jpg", await ev("post"))],
        stories: [await jpg("evangelho-story.jpg", await ev("story"))],
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
  }, iso);
  await navegador.close();

  mkdirSync(saida, { recursive: true });
  for (const [nome, b64] of Object.entries(r.arquivos)) writeFileSync(join(saida, nome), Buffer.from(b64, "base64"));
  writeFileSync(join(saida, "dia.json"), JSON.stringify(r.dia, null, 1));
  console.log(`Gerado ${iso}: ${r.dia.itens.map((i) => `${i.slot} (${i.nome})`).join(" · ")}`);
} finally {
  encerrar();
}
