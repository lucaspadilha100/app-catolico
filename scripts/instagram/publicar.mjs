import { execSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { contaConectada, publicarFeed, publicarStory } from "./api.mjs";
import { HORARIOS, RECUPERAR_ATE_HORAS, minutosDe } from "./horarios.mjs";

const REPO = "lucaspadilha100/app-catolico";
const CURIOSIDADES = "docs/marca/instagram/curiosidades";

const args = process.argv.slice(2);
const valor = (nome) => {
  const i = args.indexOf(nome);
  return i >= 0 ? args[i + 1] : undefined;
};
const teste = args.includes("--teste");
const forcar = args.includes("--forcar");
const agora = new Date();
const hoje = agora.toLocaleDateString("sv-SE", { timeZone: "America/Sao_Paulo" });
const data = valor("--data") || hoje;
const pastaDoDia = valor("--dia");
const cron = valor("--cron");
const pedido = valor("--slot");
const slot = pedido || HORARIOS.find((h) => h.cron === cron)?.slot;

if (!slot || !HORARIOS.some((h) => h.slot === slot) || !/^\d{4}-\d{2}-\d{2}$/.test(data) || !pastaDoDia) {
  console.error(`Uso: node scripts/instagram/publicar.mjs --dia <pasta> (--slot <${HORARIOS.map((h) => h.slot).join("|")}> | --cron "<expressão>") [--data AAAA-MM-DD] [--teste] [--forcar]`);
  process.exit(1);
}

const minutosAgora = (() => {
  const [h, m] = agora.toLocaleTimeString("en-GB", { timeZone: "America/Sao_Paulo", hour12: false }).split(":").map(Number);
  return h * 60 + m;
})();

const atrasados =
  cron && data === hoje
    ? HORARIOS.filter((h) => h.recuperar && h.slot !== slot && minutosDe(h.brasilia) < minutosAgora && minutosAgora - minutosDe(h.brasilia) <= RECUPERAR_ATE_HORAS * 60).map((h) => h.slot)
    : [];

const commitDe = new Map();
function url(caminho) {
  const absoluto = resolve(caminho);
  const raiz = execSync("git rev-parse --show-toplevel", { cwd: dirname(absoluto) }).toString().trim();
  if (!commitDe.has(raiz)) commitDe.set(raiz, execSync("git rev-parse HEAD", { cwd: raiz }).toString().trim());
  const rel = relative(raiz, absoluto).split("/").map(encodeURIComponent).join("/");
  return `https://raw.githubusercontent.com/${REPO}/${commitDe.get(raiz)}/${rel}`;
}

async function conferir(urls) {
  for (const u of urls) {
    const r = await fetch(u, { method: "HEAD" });
    if (!r.ok) throw new Error(`Imagem fora do ar (${r.status}): ${u}`);
  }
}

const REGISTRO = join(pastaDoDia, "publicados.json");
const lerRegistro = () => {
  try {
    return JSON.parse(readFileSync(REGISTRO, "utf8"));
  } catch {
    return {};
  }
};
const dia = JSON.parse(readFileSync(join(pastaDoDia, "dia.json"), "utf8"));

function itensDo(s) {
  if (s !== "curiosidade") return dia.itens.filter((i) => i.slot === s).map((i) => ({ ...i, feed: i.feed.map((f) => join(pastaDoDia, f)), stories: i.stories.map((f) => join(pastaDoDia, f)) }));
  const pasta = existsSync(CURIOSIDADES) ? readdirSync(CURIOSIDADES).find((p) => p.startsWith(`${data}-`)) : undefined;
  if (!pasta) return [];
  const dir = join(CURIOSIDADES, pasta);
  const laminas = readdirSync(dir).filter((f) => /^\d+\.jpg$/.test(f)).sort();
  return [{ slot: s, nome: pasta, feed: laminas.map((f) => join(dir, f)), stories: [], legenda: readFileSync(join(dir, "legenda.txt"), "utf8").trim() }];
}

let falhas = 0;
if (teste && process.env.IG_TOKEN?.trim() && process.env.IG_USER_ID?.trim()) console.log(`Conta conectada: @${await contaConectada()}`);
if (!teste && (!process.env.IG_TOKEN?.trim() || !process.env.IG_USER_ID?.trim())) {
  console.log("Os segredos IG_TOKEN e IG_USER_ID não estão no GitHub: nada foi publicado.");
  process.exit(0);
}

for (const s of [...atrasados, slot]) {
  const itens = itensDo(s);
  if (!itens.length) {
    if (s === slot) console.log(`${data}/${s}: nada para publicar.`);
    continue;
  }
  for (const [n, item] of itens.entries()) {
    const chave = itens.length > 1 ? `${s}#${n + 1}` : s;
    if (lerRegistro()[chave] && !forcar) {
      if (s === slot) console.log(`${data}/${chave}: já publicado.`);
      continue;
    }
    if (s !== slot) console.log(`Recuperando ${data}/${chave}, que não saiu no horário.`);
    try {
      const feed = item.feed.map(url);
      const stories = item.stories.map(url);
      console.log(`${data}/${chave}: ${item.nome}\nFeed (${feed.length}): ${feed.join(" ")}\nStories (${stories.length}): ${stories.join(" ")}`);
      if (item.legenda) console.log(`Legenda:\n${item.legenda.slice(0, 300)}${item.legenda.length > 300 ? "…" : ""}`);
      await conferir([...feed, ...stories]);
      if (teste) {
        console.log("Teste: nada foi publicado.");
        continue;
      }
      const feito = { feed: feed.length ? await publicarFeed(feed, item.legenda) : null, stories: [], em: new Date().toISOString() };
      for (const st of stories) {
        try {
          feito.stories.push(await publicarStory(st));
        } catch (e) {
          console.error(`Story falhou: ${e.message}`);
        }
      }
      writeFileSync(REGISTRO, JSON.stringify({ ...lerRegistro(), [chave]: feito }, null, 1));
      console.log(`Publicado ${data}/${chave}: feed ${feito.feed ?? "-"}, stories ${feito.stories.length}/${stories.length}.`);
    } catch (e) {
      falhas++;
      console.error(`::error::${data}/${chave}: ${e.message}`);
    }
  }
}
process.exit(falhas ? 1 : 0);
