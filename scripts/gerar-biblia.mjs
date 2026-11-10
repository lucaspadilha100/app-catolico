import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const VERSAO = "f1";
const fonte = join(raiz, "fontes/biblia/figueiredo-1950");
const destino = join(raiz, "public/biblia", VERSAO);
const revisao = join(raiz, "fontes/biblia/revisao");

const ortografia = JSON.parse(readFileSync(join(raiz, "fontes/biblia/ortografia.json"), "utf8"));

function capitalizar(original, novo) {
  if (original === original.toUpperCase() && original.length > 1) return novo.toUpperCase();
  if (original[0] === original[0].toUpperCase()) return novo[0].toUpperCase() + novo.slice(1);
  return novo;
}

function atualizar(texto) {
  return texto
    .replace(/~/g, "")
    .replace(/(?<!\p{L})(\p{Lu})\.(\p{Ll}{2,})/gu, "$1$2")
    .replace(/:(?=[A-ZÁÉÍÓÚÊÂÔ][a-zà-ú])/g, ": ")
    .replace(/[\p{L}]+/gu, (palavra) => {
      const nova = ortografia[palavra.toLowerCase()];
      return nova ? capitalizar(palavra, nova) : palavra;
    })
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

rmSync(destino, { recursive: true, force: true });
mkdirSync(destino, { recursive: true });
const estado = {};
let versiculos = 0;
let trocas = 0;
let revisados = 0;
for (const arquivo of readdirSync(fonte).filter((f) => f.endsWith(".json"))) {
  const livro = JSON.parse(readFileSync(join(fonte, arquivo), "utf8"));
  let capitulosRevisados = 0;
  const capitulos = livro.capitulos.map((cap, c) => {
    const caminho = join(revisao, livro.codigo, `${c + 1}.json`);
    if (existsSync(caminho)) {
      const novo = JSON.parse(readFileSync(caminho, "utf8"));
      if (!Array.isArray(novo) || novo.length !== cap.length) throw new Error(`${livro.codigo} ${c + 1}: revisão com ${novo.length} versículos, esperado ${cap.length}`);
      capitulosRevisados++;
      versiculos += cap.length;
      revisados += cap.length;
      return novo.map((v) => String(v).trim());
    }
    return cap.map((v) => {
      versiculos++;
      const novo = atualizar(v);
      if (novo !== v) trocas++;
      return novo;
    });
  });
  const conteudo = JSON.stringify({ codigo: livro.codigo, capitulos });
  const hash = createHash("sha256").update(conteudo).digest("hex").slice(0, 10);
  writeFileSync(join(destino, `${livro.codigo}.${hash}.json`), conteudo);
  estado[livro.codigo] = {
    revisao:
      capitulosRevisados === capitulos.length
        ? "revisado"
        : livro.origem === "transcrição"
          ? "transcrito"
          : "em-revisao",
    arquivo: `${livro.codigo}.${hash}.json`,
    versiculos: capitulos.map((c) => c.filter(Boolean).length),
  };
}
console.log(`${revisados} versículos revisados`);
console.log(`${versiculos} versículos; ${trocas} com a ortografia atualizada`);

writeFileSync(join(raiz, "src/biblia/dados/estado.json"), JSON.stringify(estado));

const mapa = {};
for (const linha of readFileSync(join(raiz, "fontes/versificacao/vul.vrs"), "utf8").split("\n")) {
  const m = /^([1-3A-Z]{3}) (\d+):(\d+)(?:-(\d+))? = ([1-3A-Z]{3}) (\d+):(\d+)(?:-(\d+))?/.exec(linha);
  if (!m) continue;
  const [, livro, cv, vv1, vv2, , ch, vh1, vh2] = m;
  const iniV = Number(vv1);
  const iniH = Number(vh1);
  const fimH = Number(vh2 ?? vh1);
  if (iniH === 0 && fimH === 0) continue;
  const deslocado = iniV === 0 && iniH === 0 ? 1 : 0;
  if (Number(cv) === Number(ch) && iniV === iniH) continue;
  (mapa[livro] ??= []).push([Number(ch), Math.max(iniH, 1), fimH, Number(cv), Math.max(iniV, 1) + (iniH === 0 ? 0 : deslocado)]);
}
const destinoMapa = join(raiz, "src/biblia/dados/mapa-hebraico.json");
mkdirSync(dirname(destinoMapa), { recursive: true });
writeFileSync(destinoMapa, JSON.stringify(mapa));
console.log(`mapa hebraico → Vulgata: ${Object.values(mapa).reduce((n, l) => n + l.length, 0)} faixas`);

if (!estado.PSA) console.log("Atenção: Salmos ausentes");
