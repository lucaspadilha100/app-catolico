import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { contaConectada, publicarFeed, publicarStory } from "./api.mjs";

const REPO = "lucaspadilha100/app-catolico";
const AUTOMATICO = "docs/marca/instagram/automatico";
const CURIOSIDADES = "docs/marca/instagram/curiosidades";
const REGISTRO = join(AUTOMATICO, "publicados.json");
const ASSINATURA = "Minha Igrejinha, o app católico: liturgia do dia, terço, Bíblia e orações. O link está no perfil.";

const args = process.argv.slice(2);
const horario = args[0];
const valor = (nome) => {
  const i = args.indexOf(nome);
  return i >= 0 ? args[i + 1] : undefined;
};
const teste = args.includes("--teste");
const forcar = args.includes("--forcar");
const data = valor("--data") ?? new Date().toLocaleDateString("sv-SE", { timeZone: "America/Sao_Paulo" });

if (!["manha", "meio-dia", "tarde"].includes(horario ?? "") || !/^\d{4}-\d{2}-\d{2}$/.test(data)) {
  console.error("Uso: node scripts/instagram/publicar.mjs <manha|meio-dia|tarde> [--data AAAA-MM-DD] [--teste] [--forcar]");
  process.exit(1);
}

const sha = execSync("git rev-parse HEAD").toString().trim();
const url = (caminho) => `https://raw.githubusercontent.com/${REPO}/${sha}/${caminho.split("/").map(encodeURIComponent).join("/")}`;

async function conferir(urls) {
  for (const u of urls) {
    const r = await fetch(u, { method: "HEAD" });
    if (!r.ok) throw new Error(`Imagem fora do ar (${r.status}): ${u}`);
  }
}

function lerRegistro() {
  try {
    return JSON.parse(readFileSync(REGISTRO, "utf8"));
  } catch {
    return {};
  }
}

function plano() {
  if (horario === "tarde") {
    const pasta = existsSync(CURIOSIDADES) ? readdirSync(CURIOSIDADES).find((p) => p.startsWith(`${data}-`)) : undefined;
    if (!pasta) return null;
    const dir = join(CURIOSIDADES, pasta);
    const laminas = readdirSync(dir).filter((f) => /^\d+\.jpg$/.test(f)).sort();
    return { nome: pasta, feed: laminas.map((f) => join(dir, f)), legenda: readFileSync(join(dir, "legenda.txt"), "utf8").trim(), stories: [] };
  }
  const dir = join(AUTOMATICO, data);
  const dia = JSON.parse(readFileSync(join(dir, "dia.json"), "utf8"));
  if (horario === "meio-dia")
    return { nome: `Evangelho ${data}`, feed: [join(dir, "evangelho-post.jpg")], legenda: dia.evangelho.legenda, stories: [join(dir, "evangelho-story.jpg")] };
  const doCalendario = dia.santos.filter((s) => s.calendario);
  const santos = (doCalendario.length ? doCalendario : dia.santos.slice(0, 3)).slice(0, 10);
  if (!santos.length) return null;
  const legenda =
    santos.length === 1
      ? santos[0].legenda
      : [`Santos do dia, ${dia.data.toLowerCase()}.`, "", ...santos.flatMap((s) => [s.nome, s.resumo, ""]), ASSINATURA, "", "#santododia #santosdaigreja #igrejacatolica"].join("\n");
  return { nome: `Santos ${data}`, feed: santos.map((s) => join(dir, s.post)), legenda, stories: santos.map((s) => join(dir, s.story)) };
}

const chave = `${data}/${horario}`;
const registro = lerRegistro();
if (registro[chave] && !forcar) {
  console.log(`Já publicado: ${chave}.`);
  process.exit(0);
}

const p = plano();
if (!p) {
  console.log(`Nada para publicar em ${chave}.`);
  process.exit(0);
}

const feed = p.feed.map(url);
const stories = p.stories.map(url);
console.log(`${chave}: ${p.nome}\nFeed (${feed.length}):\n${feed.join("\n")}\nStories (${stories.length}):\n${stories.join("\n")}\nLegenda:\n${p.legenda.slice(0, 400)}${p.legenda.length > 400 ? "…" : ""}`);
await conferir([...feed, ...stories]);
if (teste) {
  if (process.env.IG_TOKEN?.trim() && process.env.IG_USER_ID?.trim()) console.log(`Conta conectada: @${await contaConectada()}`);
  console.log("Teste: nada foi publicado.");
  process.exit(0);
}
if (!process.env.IG_TOKEN?.trim() || !process.env.IG_USER_ID?.trim()) {
  console.log("Os segredos IG_TOKEN e IG_USER_ID ainda não estão no GitHub: nada foi publicado.");
  process.exit(0);
}

const feito = { feed: await publicarFeed(feed, p.legenda), stories: [] };
for (const s of stories) {
  try {
    feito.stories.push(await publicarStory(s));
  } catch (e) {
    console.error(`Story falhou: ${e.message}`);
  }
}
writeFileSync(REGISTRO, JSON.stringify({ ...lerRegistro(), [chave]: { ...feito, em: new Date().toISOString() } }, null, 1));
console.log(`Publicado ${chave}: feed ${feito.feed}, stories ${feito.stories.length}/${stories.length}.`);
