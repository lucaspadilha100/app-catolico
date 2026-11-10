import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { mesmaDivisaoDaFonte, versiculosEsperados, versiculosRestaurados } from "./biblia/numeracao.mjs";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const livros = process.argv.slice(2);
let falhas = 0;

for (const codigo of livros) {
  const pasta = join(raiz, "fontes/biblia/revisao", codigo);
  if (!existsSync(pasta)) {
    console.log(`${codigo}: sem revisão`);
    falhas++;
    continue;
  }
  const fonte = JSON.parse(readFileSync(join(raiz, "fontes/biblia/figueiredo-1950", `${codigo}.json`), "utf8"));
  const revisado = {
    capitulos: fonte.capitulos.map((_, c) => {
      const caminho = join(pasta, `${c + 1}.json`);
      return existsSync(caminho) ? JSON.parse(readFileSync(caminho, "utf8")) : [];
    }),
  };
  const problemas = [];
  const restaurados = versiculosRestaurados(codigo);
  fonte.capitulos.forEach((cap, c) => {
    const rev = revisado.capitulos[c] ?? [];
    const esperado = versiculosEsperados(codigo, c + 1, fonte);
    if (rev.length !== esperado) problemas.push(`${c + 1}: ${rev.length} versículos, esperado ${esperado}`);
    const mesmaDivisao = rev.length === cap.length && mesmaDivisaoDaFonte(codigo, c + 1);
    rev.forEach((novo, v) => {
      const original = mesmaDivisao ? cap[v] : novo;
      const onde = `${c + 1},${v + 1}`;
      if (Boolean(original.trim()) !== Boolean(novo.trim())) problemas.push(`${onde}: vazio em um e não no outro`);
      if (!original.trim() || !novo.trim()) return;
      const razao = novo.length / original.length;
      if (razao < 0.55 || (razao > 1.6 && !restaurados.has(onde))) problemas.push(`${onde}: tamanho muito diferente (${razao.toFixed(2)})`);
      if (/[—–]/.test(novo)) problemas.push(`${onde}: travessão`);
      if (/[êô](?![a-z]*$)/.test(novo.replace(/\b(você|três|mês|português|pôde|têm|vêm|lê|crê|vê|dê|pôr|avô|avós?|bebê)\b/gi, ""))) {
        if (/\b(êle|êles|tôda|tôdas|sôbre|êste|êsse|aquêle|dêle|nêle)\b/i.test(novo)) problemas.push(`${onde}: grafia de 1950`);
      }
    });
    const texto = rev.join(" ");
    const abre = (texto.match(/“/g) ?? []).length;
    const fecha = (texto.match(/”/g) ?? []).length;
    if (Math.abs(abre - fecha) > 1) problemas.push(`${c + 1}: aspas desequilibradas (${abre} “ e ${fecha} ”)`);
  });
  if (problemas.length) {
    falhas++;
    console.log(`${codigo}: ${problemas.length} problema(s)`);
    for (const p of problemas.slice(0, 40)) console.log(`  ${p}`);
  } else {
    console.log(`${codigo}: ok`);
  }
}
process.exit(falhas ? 1 : 0);
