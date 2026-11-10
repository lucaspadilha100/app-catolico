import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "../..");
const pasta = join(raiz, "fontes/biblia/revisao");
const ocorrencias = new Map();
for (const livro of readdirSync(pasta).filter((d) => /^[1-3A-Z]{3}$/.test(d))) {
  for (const f of readdirSync(join(pasta, livro)).filter((f) => /^\d+\.json$/.test(f))) {
    const versos = JSON.parse(readFileSync(join(pasta, livro, f), "utf8"));
    versos.forEach((v, i) => {
      for (const m of v.matchAll(/(?<![.!?:“‘]\s)(?<!^)\b(\p{Lu}\p{Ll}{2,})\b/gu)) {
        const nome = m[1];
        if (!ocorrencias.has(nome)) ocorrencias.set(nome, []);
        ocorrencias.get(nome).push(`${livro} ${f.replace(".json", "")},${i + 1}`);
      }
    });
  }
}
const sem = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
function dist(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
const nomes = [...ocorrencias.keys()].filter((n) => n.length >= 4);
const pares = [];
for (let i = 0; i < nomes.length; i++)
  for (let j = i + 1; j < nomes.length; j++) {
    const a = sem(nomes[i]), b = sem(nomes[j]);
    if (a === b || (Math.abs(a.length - b.length) <= 1 && a[0] === b[0] && dist(a, b) === 1)) {
      const la = new Set(ocorrencias.get(nomes[i]).map((r) => r.split(" ")[0]));
      const lb = new Set(ocorrencias.get(nomes[j]).map((r) => r.split(" ")[0]));
      pares.push(`${nomes[i]} (${ocorrencias.get(nomes[i]).length}: ${[...la].slice(0, 6).join(" ")}) ~ ${nomes[j]} (${ocorrencias.get(nomes[j]).length}: ${[...lb].slice(0, 6).join(" ")})`);
    }
  }
console.log(pares.join("\n"));
console.error(`${pares.length} pares`);
