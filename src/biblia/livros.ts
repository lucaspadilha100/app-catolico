export type Testamento = "AT" | "NT";

export interface Livro {
  codigo: string;
  nome: string;
  abreviatura: string;
  slug: string;
  testamento: Testamento;
  grupo: string;
  capitulos: number;
}

type Linha = [codigo: string, nome: string, abreviatura: string, capitulos: number];

const GRUPOS: [Testamento, string, Linha[]][] = [
  ["AT", "Pentateuco", [
    ["GEN", "Gênesis", "Gn", 50], ["EXO", "Êxodo", "Ex", 40], ["LEV", "Levítico", "Lv", 27],
    ["NUM", "Números", "Nm", 36], ["DEU", "Deuteronômio", "Dt", 34],
  ]],
  ["AT", "Livros históricos", [
    ["JOS", "Josué", "Js", 24], ["JDG", "Juízes", "Jz", 21], ["RUT", "Rute", "Rt", 4],
    ["1SA", "1 Samuel", "1Sm", 31], ["2SA", "2 Samuel", "2Sm", 24], ["1KI", "1 Reis", "1Rs", 22],
    ["2KI", "2 Reis", "2Rs", 25], ["1CH", "1 Crônicas", "1Cr", 29], ["2CH", "2 Crônicas", "2Cr", 36],
    ["EZR", "Esdras", "Esd", 10], ["NEH", "Neemias", "Ne", 13], ["TOB", "Tobias", "Tb", 14],
    ["JDT", "Judite", "Jt", 16], ["EST", "Ester", "Est", 16], ["1MA", "1 Macabeus", "1Mc", 16],
    ["2MA", "2 Macabeus", "2Mc", 15],
  ]],
  ["AT", "Livros sapienciais", [
    ["JOB", "Jó", "Jó", 42], ["PSA", "Salmos", "Sl", 150], ["PRO", "Provérbios", "Pr", 31],
    ["ECC", "Eclesiastes", "Ecl", 12], ["SNG", "Cântico dos Cânticos", "Ct", 8],
    ["WIS", "Sabedoria", "Sb", 19], ["SIR", "Eclesiástico", "Eclo", 51],
  ]],
  ["AT", "Profetas", [
    ["ISA", "Isaías", "Is", 66], ["JER", "Jeremias", "Jr", 52], ["LAM", "Lamentações", "Lm", 5],
    ["BAR", "Baruc", "Br", 6], ["EZK", "Ezequiel", "Ez", 48], ["DAN", "Daniel", "Dn", 14],
    ["HOS", "Oseias", "Os", 14], ["JOL", "Joel", "Jl", 3], ["AMO", "Amós", "Am", 9],
    ["OBA", "Abdias", "Ab", 1], ["JON", "Jonas", "Jn", 4], ["MIC", "Miqueias", "Mq", 7],
    ["NAM", "Naum", "Na", 3], ["HAB", "Habacuc", "Hab", 3], ["ZEP", "Sofonias", "Sf", 3],
    ["HAG", "Ageu", "Ag", 2], ["ZEC", "Zacarias", "Zc", 14], ["MAL", "Malaquias", "Ml", 4],
  ]],
  ["NT", "Evangelhos", [
    ["MAT", "Mateus", "Mt", 28], ["MRK", "Marcos", "Mc", 16], ["LUK", "Lucas", "Lc", 24],
    ["JHN", "João", "Jo", 21],
  ]],
  ["NT", "Atos dos Apóstolos", [["ACT", "Atos dos Apóstolos", "At", 28]]],
  ["NT", "Cartas de São Paulo", [
    ["ROM", "Romanos", "Rm", 16], ["1CO", "1 Coríntios", "1Cor", 16], ["2CO", "2 Coríntios", "2Cor", 13],
    ["GAL", "Gálatas", "Gl", 6], ["EPH", "Efésios", "Ef", 6], ["PHP", "Filipenses", "Fl", 4],
    ["COL", "Colossenses", "Cl", 4], ["1TH", "1 Tessalonicenses", "1Ts", 5], ["2TH", "2 Tessalonicenses", "2Ts", 3],
    ["1TI", "1 Timóteo", "1Tm", 6], ["2TI", "2 Timóteo", "2Tm", 4], ["TIT", "Tito", "Tt", 3],
    ["PHM", "Filemom", "Fm", 1], ["HEB", "Hebreus", "Hb", 13],
  ]],
  ["NT", "Cartas católicas", [
    ["JAS", "Tiago", "Tg", 5], ["1PE", "1 Pedro", "1Pd", 5], ["2PE", "2 Pedro", "2Pd", 3],
    ["1JN", "1 João", "1Jo", 5], ["2JN", "2 João", "2Jo", 1], ["3JN", "3 João", "3Jo", 1],
    ["JUD", "Judas", "Jd", 1],
  ]],
  ["NT", "Apocalipse", [["REV", "Apocalipse", "Ap", 22]]],
];

const slugDe = (nome: string) =>
  nome
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");

export const LIVROS: Livro[] = GRUPOS.flatMap(([testamento, grupo, linhas]) =>
  linhas.map(([codigo, nome, abreviatura, capitulos]) => ({
    codigo,
    nome,
    abreviatura,
    slug: slugDe(nome),
    testamento,
    grupo,
    capitulos,
  })),
);

export const GRUPOS_DA_BIBLIA = GRUPOS.map(([testamento, grupo]) => ({ testamento, grupo }));

const POR_CODIGO = new Map(LIVROS.map((l) => [l.codigo, l]));
const POR_SLUG = new Map(LIVROS.map((l) => [l.slug, l]));

export const livroPorCodigo = (codigo: string) => POR_CODIGO.get(codigo);
export const livroPorSlug = (slug: string) => POR_SLUG.get(slug);
