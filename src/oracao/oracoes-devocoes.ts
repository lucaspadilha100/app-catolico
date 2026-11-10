import type { Oracao } from "./oracoes";

const modulos = import.meta.glob<{ default: Oracao[] }>("./devocoes/*.ts", { eager: true });

export const MAIS_ORACOES: Oracao[] = Object.keys(modulos)
  .sort()
  .flatMap((k) => modulos[k]!.default);
