import type { ManifestoDosSantos } from "../../src/santos/tipos";

export const VERSAO: string;
export const PASTA_PUBLICA: string;
export function montar(fichas: object[]): { arquivos: Map<string, string>; manifesto: ManifestoDosSantos };
