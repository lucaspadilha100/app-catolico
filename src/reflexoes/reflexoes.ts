import type { ParteDasReflexoes, Reflexao } from "./tipos";

const MODULOS = import.meta.glob<{ default: ParteDasReflexoes }>("./dados/*.ts");

export async function reflexaoDoEvangelho(canonica: string): Promise<Reflexao | null> {
  const livro = canonica.slice(0, 3);
  const partes = await Promise.all(
    Object.keys(MODULOS)
      .filter((k) => k.startsWith(`./dados/${livro}-`))
      .map((k) => MODULOS[k]!()),
  );
  for (const p of partes) {
    const r = p.default.reflexoes[canonica];
    if (r) return r;
  }
  return null;
}
