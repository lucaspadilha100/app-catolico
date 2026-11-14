import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const raiz = join(import.meta.dirname, "../..");
const destino = join(raiz, "public/imagens/santos");
const AGENTE = "SantinhoApp/0.1 (app catolico gratuito)";
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));
const baixar = (url) => execFileSync("curl", ["-sSf", "-A", AGENTE, "-H", `AIC-User-Agent: ${AGENTE}`, url], { maxBuffer: 50_000_000 });

const pastaDasFichas = join(raiz, "fontes/santos/fichas");
const santos = readdirSync(pastaDasFichas)
  .filter((a) => a.endsWith(".json"))
  .map((a) => JSON.parse(readFileSync(join(pastaDasFichas, a), "utf8")));

const usados = new Set();
const temp = mkdtempSync(join(tmpdir(), "santos-"));
for (const s of santos) if (s.imagem) usados.add(s.imagem.arquivo);
for (const s of santos.filter((x) => x.imagem?.artic)) {
  const nome = s.imagem.arquivo;
  if (existsSync(join(destino, nome))) continue;
  const info = JSON.parse(baixar(`https://api.artic.edu/api/v1/artworks/${s.imagem.artic}?fields=id,image_id,is_public_domain,title`).toString());
  if (!info.data?.is_public_domain || !info.data.image_id) {
    console.log(`SEM IMAGEM LIVRE: ${s.id} (${s.imagem.artic})`);
    continue;
  }
  const jpg = join(temp, "a.jpg");
  try {
    writeFileSync(jpg, baixar(`https://www.artic.edu/iiif/2/${info.data.image_id}/full/843,/0/default.jpg`));
  } catch {
    console.log(`FALHOU ${s.id}`);
    continue;
  }
  execFileSync("convert", [jpg, "-resize", "600x800>", "-strip", "-quality", "72", join(destino, nome)]);
  console.log(`ok ${nome}`);
  await esperar(400);
}
rmSync(temp, { recursive: true });

for (const arquivo of readdirSync(destino, { recursive: true })) {
  if (statSync(join(destino, arquivo)).isFile() && !usados.has(arquivo)) {
    rmSync(join(destino, arquivo));
    console.log(`removida ${arquivo}`);
  }
}
