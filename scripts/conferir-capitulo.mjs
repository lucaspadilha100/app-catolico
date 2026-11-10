import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { mesmaDivisaoDaFonte, versiculosEsperados } from "./biblia/numeracao.mjs";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const [codigo, capArg] = process.argv.slice(2);
const cap = Number(capArg);
const fonte = JSON.parse(readFileSync(join(raiz, "fontes/biblia/figueiredo-1950", `${codigo}.json`), "utf8"));
const caminho = join(raiz, "fontes/biblia/revisao", codigo, `${cap}.json`);
if (!existsSync(caminho)) {
  console.log(`falta ${caminho}`);
  process.exit(1);
}
const original = fonte.capitulos[cap - 1];
const novo = JSON.parse(readFileSync(caminho, "utf8"));
const problemas = [];
if (!Array.isArray(novo)) problemas.push("o arquivo precisa ser uma lista de versículos");
else {
  const esperado = versiculosEsperados(codigo, cap, fonte);
  if (novo.length !== esperado) problemas.push(`${novo.length} versículos, esperado ${esperado}`);
  const mesmaDivisao = novo.length === original.length && mesmaDivisaoDaFonte(codigo, cap);
  const total = novo.join(" ").length / original.join(" ").length;
  if (total < 0.7 || total > 1.4) problemas.push(`capítulo com tamanho muito diferente (${total.toFixed(2)})`);
  novo.forEach((n, i) => {
    const o = mesmaDivisao ? original[i] : "";
    if (mesmaDivisao && Boolean(o.trim()) !== Boolean(String(n).trim())) problemas.push(`v${i + 1}: vazio em um e não no outro`);
    if (o.trim() && String(n).trim()) {
      const r = String(n).length / o.length;
      if (r < 0.55 || r > 1.6) problemas.push(`v${i + 1}: tamanho muito diferente (${r.toFixed(2)})`);
    }
    if (/[—–]/.test(n)) problemas.push(`v${i + 1}: travessão`);
    if (/\b(êle|êles|tôda|tôdas|sôbre|êste|êsse|aquêle|dêle|nêle|êsses|dêles)\b/i.test(n)) problemas.push(`v${i + 1}: grafia de 1950`);
  });
  const t = novo.join(" ");
  const a = (t.match(/“/g) ?? []).length;
  const f = (t.match(/”/g) ?? []).length;
  if (Math.abs(a - f) > 1) problemas.push(`aspas: ${a} “ e ${f} ”`);
}
console.log(problemas.length ? `${codigo} ${cap}: ${problemas.join("; ")}` : `${codigo} ${cap}: ok`);
process.exit(problemas.length ? 1 : 0);
