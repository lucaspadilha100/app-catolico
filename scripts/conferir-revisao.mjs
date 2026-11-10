import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const livros = process.argv.slice(2);
let falhas = 0;

for (const codigo of livros) {
  const caminho = join(raiz, "fontes/biblia/revisao", `${codigo}.json`);
  if (!existsSync(caminho)) {
    console.log(`${codigo}: sem revisão`);
    falhas++;
    continue;
  }
  const fonte = JSON.parse(readFileSync(join(raiz, "fontes/biblia/figueiredo-1950", `${codigo}.json`), "utf8"));
  const revisado = JSON.parse(readFileSync(caminho, "utf8"));
  const problemas = [];
  if (revisado.capitulos.length !== fonte.capitulos.length) {
    problemas.push(`capítulos: ${revisado.capitulos.length}, esperado ${fonte.capitulos.length}`);
  }
  fonte.capitulos.forEach((cap, c) => {
    const rev = revisado.capitulos[c] ?? [];
    if (rev.length !== cap.length) problemas.push(`${c + 1}: ${rev.length} versículos, esperado ${cap.length}`);
    cap.forEach((original, v) => {
      const novo = rev[v] ?? "";
      const onde = `${c + 1},${v + 1}`;
      if (Boolean(original.trim()) !== Boolean(novo.trim())) problemas.push(`${onde}: vazio em um e não no outro`);
      if (!original.trim() || !novo.trim()) return;
      const razao = novo.length / original.length;
      if (razao < 0.55 || razao > 1.6) problemas.push(`${onde}: tamanho muito diferente (${razao.toFixed(2)})`);
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
