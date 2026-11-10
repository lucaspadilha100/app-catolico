import { type Dia, diaDaSemana } from "./datas";
import type { DiaLiturgico } from "./calendario";

export type TipoLeitura = "procissao" | "primeira" | "salmo" | "segunda" | "sequencia" | "aclamacao" | "evangelho";

export interface Leitura {
  tipo: TipoLeitura;
  referencia: string;
  canonica: string;
  forma?: "longa" | "breve";
  ou?: boolean;
}

export interface Missa {
  nome: string | null;
  leituras: Leitura[];
}

export interface Lecionario {
  salmoVulgata: Record<string, number>;
  dias: Record<string, Record<string, Record<string, string>>>;
}

let carregando: Promise<Lecionario> | null = null;

export function carregarLecionario(): Promise<Lecionario> {
  carregando ??= import("./dados/lecionario.json").then((m) => m.default as unknown as Lecionario);
  return carregando;
}

export const NOME_DA_LEITURA: Record<TipoLeitura, string> = {
  procissao: "Evangelho da procissão",
  primeira: "Primeira leitura",
  salmo: "Salmo responsorial",
  segunda: "Segunda leitura",
  sequencia: "Sequência",
  aclamacao: "Aclamação ao Evangelho",
  evangelho: "Evangelho",
};

const ABREVIATURA: Record<string, string> = {
  GEN: "Gn", EXO: "Ex", LEV: "Lv", NUM: "Nm", DEU: "Dt", JOS: "Js", JDG: "Jz", RUT: "Rt", "1SA": "1Sm",
  "2SA": "2Sm", "1KI": "1Rs", "2KI": "2Rs", "1CH": "1Cr", "2CH": "2Cr", EZR: "Esd", NEH: "Ne", TOB: "Tb",
  JDT: "Jt", EST: "Est", "1MA": "1Mc", "2MA": "2Mc", JOB: "Jó", PSA: "Sl", PRO: "Pr", ECC: "Ecl", SNG: "Ct",
  WIS: "Sb", SIR: "Eclo", ISA: "Is", JER: "Jr", LAM: "Lm", BAR: "Br", EZK: "Ez", DAN: "Dn", HOS: "Os",
  JOL: "Jl", AMO: "Am", OBA: "Ab", JON: "Jn", MIC: "Mq", NAM: "Na", HAB: "Hab", ZEP: "Sf", HAG: "Ag",
  ZEC: "Zc", MAL: "Ml", MAT: "Mt", MRK: "Mc", LUK: "Lc", JHN: "Jo", ACT: "At", ROM: "Rm", "1CO": "1Cor",
  "2CO": "2Cor", GAL: "Gl", EPH: "Ef", PHP: "Fl", COL: "Cl", "1TH": "1Ts", "2TH": "2Ts", "1TI": "1Tm",
  "2TI": "2Tm", TIT: "Tt", PHM: "Fm", HEB: "Hb", JAS: "Tg", "1PE": "1Pd", "2PE": "2Pd", "1JN": "1Jo",
  "2JN": "2Jo", "3JN": "3Jo", JUD: "Jd", REV: "Ap",
};

export function formatarReferencia(canonica: string, salmoVulgata: Record<string, number>): string {
  const cf = canonica.startsWith("cf. ");
  const corpo = cf ? canonica.slice(4) : canonica;
  const blocos: { livro: string; capitulo: string; texto: string }[] = [];
  let livro = "";
  for (const trecho of corpo.split(";")) {
    const m = /^(?:([1-3]?[A-Z]{2,3}) )?(\d+):(.*)$/.exec(trecho.trim());
    if (!m) continue;
    livro = m[1] ?? livro;
    const [, , capitulo, resto] = m as unknown as [string, string, string, string];
    const anterior = blocos[blocos.length - 1];
    if (anterior && anterior.livro === livro && anterior.capitulo === capitulo) {
      anterior.texto += `.${resto}`;
    } else {
      blocos.push({ livro, capitulo, texto: resto });
    }
  }
  const partes = blocos.map((b, i) => {
    const mesmoLivro = i > 0 && blocos[i - 1]!.livro === b.livro;
    let cap = b.capitulo;
    if (b.livro === "PSA") {
      const primeiro = /^(\d+)/.exec(b.texto)?.[1] ?? "1";
      const vulgata = salmoVulgata[`${b.capitulo}:${primeiro}`];
      if (vulgata && String(vulgata) !== b.capitulo) cap = `${vulgata}(${b.capitulo})`;
    }
    const texto = `${cap},${b.texto.replace(/:/g, ",")}`;
    return mesmoLivro ? texto : `${ABREVIATURA[b.livro] ?? b.livro} ${texto}`;
  });
  return (cf ? "cf. " : "") + partes.join("; ");
}

const DIAS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dois = (n: number) => String(n).padStart(2, "0");
const doDia = (prefixo: string, semana: number, d: Dia) => `${prefixo}${dois(semana)}-${diaDaSemana(d)}${DIAS[diaDaSemana(d)]}`;

interface Fonte {
  chave: string;
  nome: string | null;
  variante?: string;
  evangelhoDoAno?: boolean;
}

const TEMPORAIS: Record<string, Fonte[]> = {
  "mae-de-deus": [{ chave: "Blessed Virgin Mary, the Mother of God", nome: null }],
  "sagrada-familia": [{ chave: "CW01-HolyFamily", nome: null }],
  epifania: [{ chave: "CW03-Epiphany", nome: null }],
  batismo: [{ chave: "CW04-Baptism", nome: null }],
  cinzas: [{ chave: "LW00-3Wed", nome: null }],
  ramos: [{ chave: "LW06-0Sun", nome: null }],
  "quinta-santa": [
    { chave: "LW06-4Thu", nome: "Missa da Ceia do Senhor" },
    { chave: "LW06-4Thu~Chrism", nome: "Missa do Crisma" },
  ],
  "sexta-santa": [{ chave: "LW06-5Fri", nome: "Celebração da Paixão do Senhor" }],
  "sabado-santo": [{ chave: "LW06-6Sat", nome: "Vigília Pascal" }],
  pascoa: [{ chave: "EW01-0Sun", nome: null }],
  misericordia: [{ chave: "EW02-0Sun", nome: null }],
  ascensao: [{ chave: "EW07-Ascension", nome: null }],
  pentecostes: [
    { chave: "EW08-Pentecost", nome: "Missa do dia" },
    { chave: "EW08-Pentecost - Vigil", nome: "Missa da vigília" },
  ],
  trindade: [{ chave: "OW00-Trinity", nome: null }],
  corpus: [{ chave: "OW00-CorpusChristi", nome: null }],
  "sagrado-coracao": [{ chave: "OW00-SacredHeart", nome: null }],
  "cristo-rei": [{ chave: "OW34-0Sun", nome: null }],
  natal: [
    { chave: "Nativity of the Lord", variante: "4", nome: "Missa do dia" },
    { chave: "Nativity of the Lord", variante: "2", nome: "Missa da noite" },
    { chave: "Nativity of the Lord", variante: "3", nome: "Missa da aurora" },
    { chave: "Nativity of the Lord", variante: "1", nome: "Missa da vigília" },
  ],
};

const MEMORIAS_DO_TEMPO: Record<string, string> = {
  "mae-da-igreja": "OW00-MaryMotherofChurch",
  "imaculado-coracao": "OW00-ImmaculateHeart",
};

function chaveDoTempo(l: DiaLiturgico): string {
  const d = l.data;
  const domingo = diaDaSemana(d) === 0;
  const semana = l.semana ?? 0;
  switch (l.tempo) {
    case "advento": {
      const dia = d.getUTCDate();
      if (!domingo && d.getUTCMonth() === 11 && dia >= 17) return `AW05-Dec${dia}`;
      return doDia("AW", semana, d);
    }
    case "natal": {
      if (d.getUTCMonth() === 11) return `CW01-Dec${d.getUTCDate()}`;
      if (domingo) return "CW02-0Sun";
      const depoisDaEpifania = l.titulo.includes("depois da Epifania");
      return depoisDaEpifania ? `CW03-Day${diaDaSemana(d)}` : `CW02-Jan${d.getUTCDate()}`;
    }
    case "quaresma":
      return doDia("LW", semana, d);
    case "triduo":
      return doDia("LW", 6, d);
    case "pascoa":
      return doDia("EW", semana, d);
    case "comum":
      return doDia("OW", semana, d);
  }
}

const MARIANAS = new Set([
  "Our Lady of the Rosary",
  "Presentation of the Blessed Virgin Mary",
  "Queenship of Blessed Virgin Mary",
  "Our Lady of Sorrows",
  "OW00-ImmaculateHeart",
  "OW00-MaryMotherofChurch",
]);

function temPropriasObrigatorias(chave: string, lecionario: Lecionario): boolean {
  const proprias = lecionario.dias[chave]?.[""];
  if (!proprias) return false;
  return MARIANAS.has(chave) || Object.keys(proprias).some((c) => /\.\d{3}$/.test(c));
}

export function fontesDoDia(l: DiaLiturgico, lecionario: Lecionario): Fonte[] {
  const santo = l.celebracao && l.santos[0] === l.celebracao ? l.celebracao : null;
  if (santo && santo.grau !== "memoria" && santo.leituras && lecionario.dias[santo.leituras]) {
    if (santo.leituras === "All Souls") {
      return ["A", "B", "C"].map((v, i) => ({ chave: "All Souls", variante: v, nome: `${i + 1}ª opção` }));
    }
    const vigilia = `${santo.leituras} - Vigil`;
    const temVigilia = Boolean(lecionario.dias[vigilia]);
    const lista: Fonte[] = [{ chave: santo.leituras, nome: temVigilia ? "Missa do dia" : null }];
    if (temVigilia) lista.push({ chave: vigilia, nome: "Missa da vigília" });
    return lista;
  }

  const id = l.celebracao?.id;
  if (id === "sagrada-familia") {
    const lista: Fonte[] = [{ chave: "CW01-HolyFamily", nome: null, variante: "A", evangelhoDoAno: true }];
    if (l.cicloDominical !== "A") {
      lista.push({ chave: "CW01-HolyFamily", nome: `Leituras próprias do ano ${l.cicloDominical}`, variante: l.cicloDominical });
    }
    return lista;
  }
  if (id && TEMPORAIS[id]) return TEMPORAIS[id];

  const doDia: Fonte = { chave: chaveDoTempo(l), nome: null };
  const memoria = (id && MEMORIAS_DO_TEMPO[id]) || (santo?.grau === "memoria" ? santo.leituras : undefined);
  if (memoria && temPropriasObrigatorias(memoria, lecionario)) {
    return [
      { chave: memoria, nome: null, variante: "" },
      { ...doDia, nome: "Leituras do dia de semana" },
    ];
  }
  return [doDia];
}

const TIPO_POR_CAMPO: Record<string, TipoLeitura> = {
  "0": "procissao",
  "1": "primeira",
  "2": "salmo",
  "3": "segunda",
  "4": "sequencia",
  "5": "aclamacao",
  "6": "evangelho",
};

function resolverComum(comum: string, lecionario: Lecionario): Record<string, string> {
  const dados = lecionario.dias[comum]?.[""] ?? {};
  const primeiro = (prefixo: string) =>
    Object.keys(dados)
      .filter((c) => c.startsWith(`${prefixo}.`) || c === prefixo)
      .sort()[0];
  const escolha: Record<string, string> = {};
  const p = primeiro("1");
  const s = primeiro("3");
  const e = primeiro("6");
  if (p) escolha["1"] = dados[p]!;
  if (s) escolha["2"] = dados[s]!;
  if (e) escolha["6"] = dados[e]!;
  return escolha;
}

function campos(fonte: Fonte, l: DiaLiturgico, lecionario: Lecionario): Record<string, string> {
  const dia = lecionario.dias[fonte.chave];
  if (!dia) return {};
  const variantes =
    fonte.variante !== undefined ? ["", fonte.variante] : ["", l.cicloDominical, l.cicloFerial === "I" ? "1" : "2"];
  const junto: Record<string, string> = {};
  for (const v of variantes) Object.assign(junto, dia[v] ?? {});
  if (fonte.evangelhoDoAno) {
    for (const campo of Object.keys(junto)) if (campo.startsWith("6")) delete junto[campo];
    for (const [campo, valor] of Object.entries(dia[l.cicloDominical] ?? {})) if (campo.startsWith("6")) junto[campo] = valor;
  }
  for (const [campo, valor] of Object.entries(junto)) {
    if (valor.startsWith("comum:")) {
      delete junto[campo];
      for (const [c, v] of Object.entries(resolverComum(valor.slice(6), lecionario))) junto[c] ??= v;
    }
  }
  return junto;
}

function ordemDaVigilia(campo: string): number {
  const [grupo, sub = "0"] = campo.split(".");
  const n = Number(sub[0] ?? 0);
  if (grupo === "1" || grupo === "2") return n * 10 + (grupo === "2" ? 5 : 0) + sub.length / 10;
  return Number(grupo) * 100;
}

function montarLeituras(c: Record<string, string>, vigilia: boolean, lecionario: Lecionario): Leitura[] {
  const chaves = Object.keys(c).sort((a, b) =>
    vigilia ? ordemDaVigilia(a) - ordemDaVigilia(b) : a.localeCompare(b, "en", { numeric: true }),
  );
  const leituras: Leitura[] = [];
  for (const campo of chaves) {
    const valor = c[campo]!;
    const [grupo, sub = ""] = campo.split(".");
    const tipo = TIPO_POR_CAMPO[grupo!];
    if (!tipo) continue;
    if (tipo === "aclamacao" && !/^(cf\. )?[1-3]?[A-Z]{2,3} /.test(valor)) continue;
    const leitura: Leitura = valor.startsWith("seq:")
      ? { tipo, referencia: valor.slice(4), canonica: "" }
      : { tipo, referencia: formatarReferencia(valor, lecionario.salmoVulgata), canonica: valor };
    const anterior = leituras[leituras.length - 1];
    if (anterior && anterior.tipo === tipo && sub) {
      const subAnterior = chaves[chaves.indexOf(campo) - 1]!.split(".")[1] ?? "";
      const mesmaLeitura = !vigilia || sub[0] === subAnterior[0];
      const extensao = subAnterior && sub.length > subAnterior.length && sub.startsWith(subAnterior);
      if (tipo !== "salmo" && extensao) {
        anterior.forma = "longa";
        leitura.forma = "breve";
      } else if (mesmaLeitura) {
        leitura.ou = true;
      }
    }
    leituras.push(leitura);
  }
  return leituras;
}

export function leiturasDoDia(l: DiaLiturgico, lecionario: Lecionario): Missa[] {
  return fontesDoDia(l, lecionario)
    .map((fonte) => ({
      nome: fonte.nome,
      leituras: montarLeituras(campos(fonte, l, lecionario), fonte.chave === "LW06-6Sat", lecionario),
    }))
    .filter((m) => m.leituras.length > 0);
}
