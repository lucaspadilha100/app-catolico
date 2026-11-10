import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { LIVROS } from "../../src/biblia/livros.ts";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "../..");
const pasta = join(raiz, "fontes/biblia/revisao/conferencia");
const ordem = LIVROS.map((l) => l.codigo);
const arquivos = readdirSync(pasta).filter((f) => f.endsWith(".md") && f !== "nomes-pendentes.md");

function contar(texto, titulo) {
  const partes = texto.split(/^## /m);
  const secao = partes.find((p) => p.toLowerCase().startsWith(titulo));
  if (!secao) return 0;
  return secao.split("\n").slice(1).filter((l) => /^\s*[-*]?\s*\S/.test(l) && !l.startsWith("#")).length;
}

const linhas = arquivos
  .map((f) => {
    const texto = readFileSync(join(pasta, f), "utf8");
    const codigo = f.split(/[-.]/)[0];
    return { f, codigo, corrigido: contar(texto, "corrigido"), decidido: contar(texto, "decidido") };
  })
  .sort((a, b) => ordem.indexOf(a.codigo) - ordem.indexOf(b.codigo) || a.f.localeCompare(b.f));

const tabela = [
  "| Relatório | Linhas em Corrigido | Linhas em Decidido pelas fontes |",
  "|---|---|---|",
  ...linhas.map((l) => `| [${l.f.replace(".md", "")}](../../fontes/biblia/revisao/conferencia/${l.f}) | ${l.corrigido} | ${l.decidido} |`),
].join("\n");

const destino = join(raiz, "docs/biblia/decisoes.md");
const atual = readFileSync(destino, "utf8");
const marca = "## Conferências com as três fontes";
const antes = atual.includes(marca) ? atual.slice(0, atual.indexOf(marca)).trimEnd() : atual.trimEnd();
writeFileSync(
  destino,
  `${antes}\n\n${marca}\n\nCada livro foi conferido versículo a versículo com a Vulgata, a Douay-Rheims e o original. Cada relatório traz, em "Corrigido", o que mudou (antes, depois e motivo) e, em "Decidido pelas fontes", as dúvidas resolvidas, inclusive as que mantiveram o Figueiredo.\n\n${tabela}\n`,
);
console.log(`${linhas.length} relatórios`);
