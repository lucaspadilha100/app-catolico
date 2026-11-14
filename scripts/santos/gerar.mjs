import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { VERSAO, montar } from "./gerador.mjs";

const raiz = join(import.meta.dirname, "../..");
const pastaDasFichas = join(raiz, "fontes/santos/fichas");
const destino = join(raiz, "public/santos", VERSAO);
const fotosLocais = join(raiz, "public/imagens/santos");

const fichas = readdirSync(pastaDasFichas)
  .filter((a) => a.endsWith(".json"))
  .sort()
  .map((a) => {
    const f = JSON.parse(readFileSync(join(pastaDasFichas, a), "utf8"));
    if (`${f.id}.json` !== a) throw new Error(`${a}: o id da ficha é ${f.id}`);
    return f;
  });

if (existsSync(fotosLocais))
  for (const f of fichas) if (f.imagem?.arquivo && !existsSync(join(fotosLocais, f.imagem.arquivo))) console.log(`foto que falta: ${f.imagem.arquivo}`);

const { arquivos, manifesto } = montar(fichas);
mkdirSync(destino, { recursive: true });
let novos = 0;
for (const [nome, conteudo] of arquivos) {
  if (existsSync(join(destino, nome))) continue;
  writeFileSync(join(destino, nome), conteudo);
  novos++;
}
let removidos = 0;
for (const nome of readdirSync(destino))
  if (!arquivos.has(nome)) {
    rmSync(join(destino, nome));
    removidos++;
  }
writeFileSync(join(raiz, "src/santos/dados/manifesto.json"), `${JSON.stringify(manifesto, null, 1)}\n`);
const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
const tamanho = (nome) => Buffer.byteLength(arquivos.get(nome));
console.log(`${fichas.length} fichas, ${arquivos.size} arquivos (${novos} novos, ${removidos} removidos)`);
console.log(`índice ${kb(tamanho(manifesto.indice))}; maior dia ${kb(Math.max(...Object.values(manifesto.dias).map(tamanho)))}`);
