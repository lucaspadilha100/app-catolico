import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");
const ler = (p) => readFileSync(join(raiz, p), "utf8");

const LIVROS = {
  "திபா": "PSA", "மத்": "MAT", "யோவா": "JHN", "லூக்": "LUK", "மாற்": "MRK", "எசா": "ISA", "திப": "ACT",
  "1கொரி": "1CO", "உரோ": "ROM", "2கொரி": "2CO", "எபி": "HEB", "எபே": "EPH", "தொநூ": "GEN", "1யோவா": "1JN",
  "2யோவா": "2JN", "3யோவா": "3JN", "திவெ": "REV", "எசே": "EZK", "1பேது": "1PE", "பிலி": "PHP", "2திமொ": "2TI",
  "எரே": "JER", "சீஞா": "SIR", "விப": "EXO", "யாக்": "JAS", "கலா": "GAL", "1அர": "1KI", "இச": "DEU", "இணை": "DEU",
  "கொலோ": "COL", "1தெச": "1TH", "1சாமு": "1SA", "சாஞா": "WIS", "2சாமு": "2SA", "1திமொ": "1TI", "ஓசே": "HOS",
  "தானி": "DAN", "தானி(இ)": "DAN+", "நீமொ": "PRO", "தோபி": "TOB", "ஆமோ": "AMO", "2அர": "2KI", "2தெச": "2TH",
  "மீக்": "MIC", "எண்": "NUM", "செக்": "ZEC", "யோவே": "JOL", "யோபு": "JOB", "2மக்": "2MA", "தீத்": "TIT",
  "2குறி": "2CH", "லேவி": "LEV", "செப்": "ZEP", "யோனா": "JON", "1குறி": "1CH", "இபா": "SNG", "நீத": "JDG",
  "மலா": "MAL", "யோசு": "JOS", "யூதி": "JDT", "2பேது": "2PE", "பாரூ": "BAR", "சஉ": "ECC", "1மக்": "1MA",
  "நெகே": "NEH", "எஸ்ரா": "EZR", "புல": "LAM", "அப": "HAB", "ரூத்": "RUT", "ஆகா": "HAG", "எஸ்(கி)": "EST",
  "நாகூ": "NAM", "யூதா": "JUD", "பில": "PHM", "ஒப": "OBA",
};
const UM_CAPITULO = new Set(["2JN", "3JN", "JUD", "PHM", "OBA"]);
const DEUTEROCANONICOS = new Set(["TOB", "JDT", "1MA", "2MA", "WIS", "SIR", "BAR", "EST"]);
const ABREVIACOES = Object.keys(LIVROS).sort((a, b) => b.length - a.length);

function lerVersificacao(arquivo) {
  const mapa = new Map();
  for (const linha of ler(arquivo).split("\n")) {
    const m = /^([1-3A-Z]{3}) (\d+):(\d+)(?:-(\d+))? = ([1-3A-Z]{3}) (\d+):(\d+)(?:-(\d+))?/.exec(linha);
    if (!m) continue;
    const [, livro, c1, v1, v1fim, , c2, v2] = m;
    const n = Number(v1fim ?? v1) - Number(v1);
    for (let i = 0; i <= n; i++) mapa.set(`${livro} ${c1}:${Number(v1) + i}`, [Number(c2), Number(v2) + i]);
  }
  return mapa;
}

const INGLES_PARA_HEBRAICO = lerVersificacao("fontes/versificacao/eng.vrs");
const VULGATA_PARA_HEBRAICO = lerVersificacao("fontes/versificacao/vul.vrs");

const salmoVulgata = {};
for (const [chave, [c]] of VULGATA_PARA_HEBRAICO) {
  const m = /^PSA (\d+):(\d+)$/.exec(chave);
  if (m) salmoVulgata[`${c}:${VULGATA_PARA_HEBRAICO.get(chave)[1]}`] = Number(m[1]);
}

const AJUSTES = { "ISA 64:1": [63, 19] };

function paraHebraico(livro, cap, verso) {
  if (DEUTEROCANONICOS.has(livro)) return [cap, verso];
  if (AJUSTES[`${livro} ${cap}:${verso}`]) return AJUSTES[`${livro} ${cap}:${verso}`];
  return INGLES_PARA_HEBRAICO.get(`${livro} ${cap}:${verso}`) ?? [cap, verso];
}

function converterReferencia(bruta) {
  let texto = bruta.trim().replace(/~.*$/, "").replace(/^(\S+?\)):/, "$1");
  let cf = false;
  if (texto.endsWith("காண்க")) {
    cf = true;
    texto = texto.slice(0, -"காண்க".length);
  }
  const partes = [];
  let livro = null;
  let capAnterior = null;
  for (let trecho of texto.split(";")) {
    trecho = trecho.trim();
    const abrev = ABREVIACOES.find((a) => trecho.startsWith(a));
    if (abrev) {
      livro = LIVROS[abrev];
      trecho = trecho.slice(abrev.length);
    }
    if (!livro) return null;
    let codigo = livro;
    let capInicial;
    let corpo;
    if (livro === "DAN+") {
      codigo = "DAN";
      const m = /^(\d+):(.*)$/.exec(trecho);
      if (!m) return null;
      const acrescimo = Number(m[1]);
      capInicial = acrescimo === 1 ? 3 : acrescimo === 2 ? 13 : 14;
      corpo = acrescimo === 1 ? m[2].replace(/\d+/g, (n) => String(Number(n) + 23)) : m[2];
    } else if (UM_CAPITULO.has(livro) && !trecho.includes(":")) {
      capInicial = 1;
      corpo = trecho;
    } else if (!trecho.includes(":") && capAnterior !== null && /^\d/.test(trecho)) {
      capInicial = capAnterior;
      corpo = trecho;
    } else {
      const m = /^(\d+):(.*)$/.exec(trecho);
      if (!m) return null;
      capInicial = Number(m[1]);
      corpo = m[2];
    }
    if (!/^[\d a-z,.\-:]+$/.test(corpo)) return null;

    let capAtual = capInicial;
    let ultimoVerso = 0;
    const itens = corpo.split(/[,.]/).filter(Boolean).map((item) => {
      const [ini, fim] = item.split("-");
      const ponto = (p) => {
        let c = capAtual;
        let v = p;
        if (p.includes(":")) [c, v] = p.split(":").map((x, i) => (i === 0 ? Number(x) : x));
        const soLetra = /^[a-z]+$/.test(String(v));
        const mv = soLetra ? [String(v), String(ultimoVerso), String(v)] : /^(\d+)([a-z]*)$/.exec(String(v));
        if (!mv) throw new Error(`versículo inválido: ${bruta}`);
        ultimoVerso = Number(mv[1]);
        const [ch, vh] = paraHebraico(codigo, Number(c), Number(mv[1]));
        capAtual = Number(c);
        return { c: ch, v: `${vh}${mv[2]}` };
      };
      const a = ponto(ini);
      const b = fim ? ponto(fim) : null;
      return { a, b };
    });

    let capEscrito = null;
    const saida = [];
    const vistos = new Set();
    for (const { a, b } of itens) {
      const marca = `${a.c}:${a.v}-${b ? `${b.c}:${b.v}` : ""}`;
      if (vistos.has(marca)) continue;
      vistos.add(marca);
      let s = "";
      if (a.c !== capEscrito) {
        if (saida.length) saida.push(";");
        s += `${a.c}:`;
        capEscrito = a.c;
      } else if (saida.length) saida.push(".");
      s += a.v;
      if (b) {
        if (b.c !== a.c) {
          s += `-${b.c}:${b.v}`;
          capEscrito = b.c;
        } else s += `-${b.v}`;
      }
      saida.push(s);
    }
    capAnterior = capAtual;
    partes.push(`${codigo} ${saida.join("")}`);
  }
  return (cf ? "cf. " : "") + partes.join(";");
}

const NUMERACAO_DO_BRASIL = {
  "SIR 2:1-11": "SIR 2:1-13",
  "SIR 3:2-7.12-14a": "SIR 3:3-7.14-17a",
  "SIR 3:17-18.20.28-29": "SIR 3:19-21.30-31",
  "SIR 4:11-19": "SIR 4:12-22",
  "SIR 5:1-8": "SIR 5:1-10",
  "SIR 15:15-20": "SIR 15:16-21",
  "SIR 17:1-15": "SIR 17:1-13",
  "SIR 17:20-29": "SIR 17:20-28",
  "SIR 27:4-7": "SIR 27:5-8",
  "SIR 27:30-28:7": "SIR 27:33-28:9",
  "SIR 35:1-12": "SIR 35:1-15",
  "SIR 35:12-14.16-18": "SIR 35:15-17.20-22",
  "SIR 36:1-2a.4-5a.9-17": "SIR 36:1-2a.5-6.13-19",
  "SIR 44:1.9-12": "SIR 44:1.9-13",
  "SIR 47:2-11": "SIR 47:2-13",
  "SIR 51:12-20b": "SIR 51:17-27",
  "DAN 3:14-20.24-25.28": "DAN 3:14-20.24.49a.91-92.95",
  "DAN 3:25.34-42": "DAN 3:25.34-43",
  "DAN 3:52.53-54.55-56": "DAN 3:52.53-54.55.56-57",
  "DAN 3:52ac.53-54.55-56": "DAN 3:52.53-54.55.56-57",
  "TOB 3:1-11.16-17": "TOB 3:1-11a.16-17a",
  "TOB 6:10;TOB 7:1.9-14;TOB 8:4-8": "TOB 6:10-11;TOB 7:1.9-17;TOB 8:4-9a",
  "TOB 13:2.3.6.7.8": "TOB 13:2.3-4.5.8",
};

const SEQUENCIAS = {
  Victimae: "Victimae paschali laudes",
  VeniSancteSpiritus: "Veni, Sancte Spiritus",
  LaudaSion: "Lauda, Sion",
  StabatMater: "Stabat Mater",
};

const sql = ler("fontes/lecionario/leituras.sql");
const linhas = [...sql.matchAll(/\('((?:[^'\\]|\\.)*)', ([\d.]+), '((?:[^'\\]|\\.)*)'\)/g)];

const dias = {};
const ignorados = [];
for (const [, idBruto, tipo, valor] of linhas) {
  if (idBruto.startsWith("IN ")) continue;
  const m = /^(.*?)(?: ([ABC1-4]))?$/.exec(idBruto);
  const chave = m[1];
  const variante = m[2] ?? "";
  let saida = null;
  if (tipo.startsWith("4") && SEQUENCIAS[valor]) {
    saida = `seq:${SEQUENCIAS[valor]}`;
  } else if (tipo.startsWith("9")) {
    const comum = /(_[A-Za-z]+)/.exec(valor);
    if (comum) saida = `comum:${comum[1]}`;
  } else {
    try {
      saida = converterReferencia(valor);
    } catch {
      saida = null;
    }
    if (saida && NUMERACAO_DO_BRASIL[saida]) saida = NUMERACAO_DO_BRASIL[saida];
  }
  if (!saida) {
    if (!tipo.startsWith("5")) ignorados.push(`${idBruto} ${tipo} ${valor}`);
    continue;
  }
  ((dias[chave] ??= {})[variante] ??= {})[tipo] = saida;
}

const PROPRIO_DO_BRASIL = {
  "Nossa Senhora Aparecida": {
    "": {
      1: "EST 5:1b-2;EST 7:2b-3",
      2: "PSA 45:11-12a.12b-13.14-15a.15b-16",
      3: "REV 12:1.5.13a.15-16a",
      6: "JHN 2:1-11",
    },
  },
  "Nossa Senhora de Guadalupe": {
    "": {
      1: "GAL 4:4-7",
      2: "PSA 96:1-2a.2b-3.10",
      6: "LUK 1:39-47",
    },
  },
};
Object.assign(dias, PROPRIO_DO_BRASIL);
dias["OW00-MaryMotherofChurch"][""]["6.009"] = "JHN 19:25-34";

const saida = { salmoVulgata, dias };
const destino = join(raiz, "src/liturgia/dados/lecionario.json");
mkdirSync(dirname(destino), { recursive: true });
writeFileSync(destino, JSON.stringify(saida));
console.log(`${Object.keys(dias).length} dias gravados em src/liturgia/dados/lecionario.json`);
if (ignorados.length) console.log(`Ignorados (${ignorados.length}):\n${ignorados.join("\n")}`);
