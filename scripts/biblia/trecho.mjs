import { readFileSync } from "node:fs";
import { join } from "node:path";

const raiz = join(import.meta.dirname, "../..");
const estado = JSON.parse(readFileSync(join(raiz, "src/biblia/dados/estado.json"), "utf8"));
const mapa = JSON.parse(readFileSync(join(raiz, "src/biblia/dados/mapa-hebraico.json"), "utf8"));
const VULGATA = new Set(["DAN", "TOB", "JDT", "EST", "1MA", "2MA", "WIS", "SIR", "BAR"]);

const converter = (livro, c, v) => {
  if (VULGATA.has(livro)) return [c, v];
  for (const [capH, ini, fim, capV, iniV] of mapa[livro] ?? []) if (capH === c && v >= ini && v <= fim) return [capV, iniV + (v - ini)];
  return [c, v];
};

for (const referencia of process.argv.slice(2)) {
  console.log(`# ${referencia}`);
  let livro = "";
  for (const trecho of referencia.split(";")) {
    const m = /^(?:([1-3]?[A-Z]{2,3}) )?(\d+):(.*)$/.exec(trecho.trim());
    if (!m) { console.log("  referência inválida"); continue; }
    livro = m[1] ?? livro;
    let cap = Number(m[2]);
    const dados = JSON.parse(readFileSync(join(raiz, "public/biblia/f1", estado[livro].arquivo), "utf8"));
    for (const item of m[3].split(".")) {
      const [ini, fim] = item.split("-");
      const p = (s) => (s.includes(":") ? s.split(":").map(Number) : [cap, Number(s.replace(/\D+$/, ""))]);
      const a = p(ini), b = fim ? p(fim) : a;
      cap = b[0];
      const [c1, v1] = converter(livro, ...a), [c2, v2] = converter(livro, ...b);
      for (let c = c1; c <= c2; c++) {
        const capitulo = dados.capitulos[c - 1] ?? [];
        for (let v = c === c1 ? v1 : 1; v <= (c === c2 ? v2 : capitulo.length); v++)
          console.log(`  ${livro} ${c}:${v} ${capitulo[v - 1] ?? "(NÃO EXISTE)"}`);
      }
    }
  }
}
