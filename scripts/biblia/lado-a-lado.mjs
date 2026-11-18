import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { fonteNaNumeracaoAtual } from "./numeracao.mjs";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "../..");
const [livro, capArg, origArg] = process.argv.slice(2);
const cap = Number(capArg);
const ler = (p) => (existsSync(p) ? JSON.parse(readFileSync(p, "utf8")) : null);
const revisado = ler(join(raiz, "fontes/biblia/revisao", livro, `${cap}.json`)) ?? [];
const naNumeracaoAtual = (fonte) => (fonte ? fonteNaNumeracaoAtual(livro, fonte)[cap - 1] ?? [] : []);
const fig = naNumeracaoAtual(ler(join(raiz, "fontes/biblia/figueiredo-1950", `${livro}.json`)));
const vul = naNumeracaoAtual(ler(join(raiz, "fontes/vulgata", `${livro}.json`)));
const dr = naNumeracaoAtual(ler(join(raiz, "fontes/douay-rheims", `${livro}.json`)));
const original = ler(join(raiz, "fontes/originais", `${origArg ?? livro}.json`));
const capOriginal = Number(process.argv[5] ?? cap);
const org = original?.capitulos[capOriginal - 1] ?? [];
const n = Math.max(revisado.length, fig.length, vul.length, dr.length);
console.log(`${livro} ${cap} | original: ${original ? `${original.fonte}, cap. ${capOriginal}` : "sem arquivo"}`);
for (let i = 0; i < n; i++) {
  console.log(`\n── v${i + 1}`);
  console.log(`R  ${revisado[i] ?? "∅"}`);
  console.log(`F  ${fig[i] ?? "∅"}`);
  console.log(`V  ${vul[i] ?? "∅"}`);
  console.log(`D  ${dr[i] ?? "∅"}`);
  console.log(`O  ${org[i] ?? "∅"}`);
}
