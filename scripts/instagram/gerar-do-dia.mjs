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
    const { santosDaDataMMDD, lembradosDaDataMMDD } = await import("/src/santos/santos.ts");
    await document.fonts.ready;

    const jpg = async (blob) => {
      const bmp = await createImageBitmap(blob);
      const c = document.createElement("canvas");
      c.width = bmp.width;
      c.height = bmp.height;
      c.getContext("2d").drawImage(bmp, 0, 0);
      return c.toDataURL("image/jpeg", 0.92).split(",")[1];
    };

    const d = datas.deIso(iso);
    const l = diaLiturgico(d);
    const dataLonga = datas.dataPorExtenso(d);
    const missas = leiturasDoDia(l, await carregarLecionario());
    const canonica = evangelhoDaMissa(missas[0]);
    const evangelho = missas[0]?.leituras.find((x) => x.tipo === "evangelho" && !x.ou && x.forma !== "breve");
    const arte = await arteDoEvangelho(canonica);
    const texto = canonica ? (await textoDaReferencia(canonica)).flatMap((t) => t.versiculos.map((v) => v.texto)).join(" ") : "";
    const ev = async (formato) =>
      jpg(
        await imagemDoEvangelho({
          arte,
          data: dataLonga,
          referencia: evangelho?.referencia ?? "",
          frase: fraseDoEvangelho(texto ? [texto] : [], arte ? (formato === "post" ? 150 : 170) : 220),
          formato,
        }),
      );

    const mmdd = iso.slice(5).replace("-", "");
    const [doDia, lembrados] = await Promise.all([santosDaDataMMDD(mmdd), lembradosDaDataMMDD(mmdd)]);
    const comFoto = [...doDia, ...lembrados].filter((s) => s.imagem);
    const santos = (comFoto.length ? comFoto : doDia.length ? doDia : lembrados).slice(0, 10);
    const diaEMes = datas.diaEMes(d);

    return {
      data: dataLonga,
      titulo: l.titulo,
      evangelho: {
        referencia: evangelho?.referencia ?? "",
        legenda: conteudo.legendaDoEvangelho({ data: dataLonga, titulo: l.titulo, referencia: evangelho?.referencia ?? "", texto }),
        post: await ev("post"),
        story: await ev("story"),
      },
      santos: await Promise.all(
        santos.map(async (s) => ({
          nome: s.nome,
          calendario: !!s.calendario,
          resumo: s.resumo ?? "",
          legenda: conteudo.legendaDoSanto(s, diaEMes),
          post: await jpg(await conteudo.imagemDoSanto(s, diaEMes, "post")),
          story: await jpg(await conteudo.imagemDoSanto(s, diaEMes, "story")),
        })),
      ),
    };
  }, iso);
  await navegador.close();

  mkdirSync(saida, { recursive: true });
  writeFileSync(join(saida, "evangelho-post.jpg"), Buffer.from(r.evangelho.post, "base64"));
  writeFileSync(join(saida, "evangelho-story.jpg"), Buffer.from(r.evangelho.story, "base64"));
  r.santos.forEach((s, i) => {
    writeFileSync(join(saida, `santo-${i + 1}-post.jpg`), Buffer.from(s.post, "base64"));
    writeFileSync(join(saida, `santo-${i + 1}-story.jpg`), Buffer.from(s.story, "base64"));
  });
  writeFileSync(
    join(saida, "dia.json"),
    JSON.stringify(
      {
        data: r.data,
        titulo: r.titulo,
        evangelho: { referencia: r.evangelho.referencia, legenda: r.evangelho.legenda },
        santos: r.santos.map((s, i) => ({ nome: s.nome, calendario: s.calendario, resumo: s.resumo, legenda: s.legenda, post: `santo-${i + 1}-post.jpg`, story: `santo-${i + 1}-story.jpg` })),
      },
      null,
      1,
    ),
  );
  console.log(`Gerado ${iso}: Evangelho ${r.evangelho.referencia}; santos: ${r.santos.map((s) => s.nome).join(", ") || "nenhum"}`);
} finally {
  encerrar();
}
