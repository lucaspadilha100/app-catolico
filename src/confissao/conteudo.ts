import type { Exame, Guia } from "./tipos";

const MODULOS = import.meta.glob<{ default: unknown }>(["./exame.ts", "./guia-confissao.ts", "./guia-missa.ts"]);

const carregar = async <T>(nome: string): Promise<T> => {
  const m = MODULOS[`./${nome}.ts`];
  if (!m) throw new Error("Conteúdo indisponível");
  return (await m()).default as T;
};

export const carregarExame = () => carregar<Exame>("exame");
export const carregarGuia = (qual: "confissao" | "missa") => carregar<Guia>(`guia-${qual}`);
