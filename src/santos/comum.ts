export const PARTES = 64;

export const normalizar = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .trim();

const TITULOS = /^(São|Santo|Santa|Santos|Santas|Beato|Beata|Beatos|Venerável|Servo de Deus|Serva de Deus|Nossa Senhora (da|do|das|dos|de)?|Bem-aventurad[ao])\s+/;

export const nomeParaOrdenar = (nome: string) => normalizar(nome.replace(TITULOS, ""));

export function letraDoNome(nome: string): string {
  const l = nomeParaOrdenar(nome).charAt(0);
  return /[a-z]/.test(l) ? l.toUpperCase() : "#";
}

export function parteDoId(id: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h % PARTES;
}
