import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const raiz = join(import.meta.dirname, "../..");
const destino = join(raiz, "public/imagens/santos");
const AGENTE = "SantinhoApp/0.1 (app catolico gratuito)";
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

const santos = [];
for (const arquivo of readdirSync(join(raiz, "src/santos/dados")).sort()) {
  const m = await import(join(raiz, "src/santos/dados", arquivo));
  santos.push(...m.default.santos);
}

const usados = new Set();
const temp = mkdtempSync(join(tmpdir(), "santos-"));
for (const s of santos.filter((x) => x.imagem)) {
  const nome = `${s.id}-${s.imagem.artic}.webp`;
  usados.add(nome);
  if (existsSync(join(destino, nome))) continue;
  const info = await (await fetch(`https://api.artic.edu/api/v1/artworks/${s.imagem.artic}?fields=id,image_id,is_public_domain,title`, { headers: { "AIC-User-Agent": AGENTE } })).json();
  if (!info.data?.is_public_domain || !info.data.image_id) {
    console.log(`SEM IMAGEM LIVRE: ${s.id} (${s.imagem.artic})`);
    continue;
  }
  const r = await fetch(`https://www.artic.edu/iiif/2/${info.data.image_id}/full/843,/0/default.jpg`, { headers: { "AIC-User-Agent": AGENTE } });
  if (!r.ok) {
    console.log(`FALHOU ${s.id}: ${r.status}`);
    continue;
  }
  const jpg = join(temp, "a.jpg");
  writeFileSync(jpg, Buffer.from(await r.arrayBuffer()));
  execFileSync("convert", [jpg, "-resize", "600x800>", "-strip", "-quality", "72", join(destino, nome)]);
  console.log(`ok ${nome}`);
  await esperar(400);
}
rmSync(temp, { recursive: true });

for (const arquivo of readdirSync(destino)) {
  if (!usados.has(arquivo)) {
    rmSync(join(destino, arquivo));
    console.log(`removida ${arquivo}`);
  }
}
