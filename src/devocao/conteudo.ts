import type {
  ConteudoDaConsagracao,
  ConteudoDaNovena,
  ConteudoDoDesafio,
  ConteudoDoOficio,
  ConteudoDoRoteiro,
} from "./tipos";

type Modulo<T> = () => Promise<{ default: T }>;

export const MODULOS_DAS_NOVENAS = import.meta.glob<{ default: ConteudoDaNovena }>("./novenas/*.ts");
export const MODULOS_DOS_DESAFIOS = import.meta.glob<{ default: ConteudoDoDesafio }>("./desafios/*.ts");
export const MODULOS_DOS_CURSOS = import.meta.glob<{ default: ConteudoDoDesafio }>("./cursos/*.ts");

const carregar = async <T>(modulo: Modulo<T> | undefined): Promise<T> => {
  if (!modulo) throw new Error("Conteúdo indisponível");
  return (await modulo()).default;
};

export const carregarNovena = (id: string) => carregar(MODULOS_DAS_NOVENAS[`./novenas/${id}.ts`]);
export const carregarDesafio = (id: string) => carregar(MODULOS_DOS_DESAFIOS[`./desafios/${id}.ts`]);
export const carregarCurso = (id: string) => carregar(MODULOS_DOS_CURSOS[`./cursos/${id}.ts`]);
const AVULSOS = import.meta.glob<{ default: unknown }>([
  "./consagracao.ts",
  "./via-sacra.ts",
  "./semana-santa.ts",
  "./oficio.ts",
  "./oficio-dos-defuntos.ts",
]);
const avulso = <T>(nome: string) => carregar(AVULSOS[`./${nome}.ts`] as Modulo<T> | undefined);

export const carregarConsagracao = () => avulso<ConteudoDaConsagracao>("consagracao");
export const carregarViaSacra = () => avulso<ConteudoDoRoteiro>("via-sacra");
export const carregarSemanaSanta = () => avulso<ConteudoDoDesafio>("semana-santa");
export const carregarOficio = () => avulso<ConteudoDoOficio>("oficio");
export const carregarOficioDosDefuntos = () => avulso<ConteudoDoOficio>("oficio-dos-defuntos");
