import { createClient } from "npm:@supabase/supabase-js@2";

export type TipoDeVideo = "homilia" | "missa" | "terco";

export interface Regra {
  tipo: TipoDeVideo;
  contem: string[];
  exigeData?: boolean;
}

export interface Entrada {
  id: string;
  titulo: string;
  publicado: string;
}

export interface Referencia {
  sigla: string;
  capitulo: number;
  texto: string;
}

export interface Classificado {
  tipo: TipoDeVideo;
  dia: string;
  referencia: Referencia | null;
}

const LIVROS: [string, string][] = [
  ["Gn", "Gênesis"], ["Ex", "Êxodo"], ["Lv", "Levítico"], ["Nm", "Números"], ["Dt", "Deuteronômio"],
  ["Js", "Josué"], ["Jz", "Juízes"], ["Rt", "Rute"], ["1Sm", "1 Samuel"], ["2Sm", "2 Samuel"],
  ["1Rs", "1 Reis"], ["2Rs", "2 Reis"], ["1Cr", "1 Crônicas"], ["2Cr", "2 Crônicas"], ["Esd", "Esdras"],
  ["Ne", "Neemias"], ["Tb", "Tobias"], ["Jt", "Judite"], ["Est", "Ester"], ["1Mc", "1 Macabeus"],
  ["2Mc", "2 Macabeus"], ["Jó", "Jó"], ["Sl", "Salmos"], ["Sl", "Salmo"], ["Pr", "Provérbios"], ["Ecl", "Eclesiastes"],
  ["Ct", "Cântico dos Cânticos"], ["Sb", "Sabedoria"], ["Eclo", "Eclesiástico"], ["Is", "Isaías"], ["Jr", "Jeremias"],
  ["Lm", "Lamentações"], ["Br", "Baruc"], ["Ez", "Ezequiel"], ["Dn", "Daniel"], ["Os", "Oseias"],
  ["Jl", "Joel"], ["Am", "Amós"], ["Ab", "Abdias"], ["Jn", "Jonas"], ["Mq", "Miqueias"],
  ["Na", "Naum"], ["Hab", "Habacuc"], ["Sf", "Sofonias"], ["Ag", "Ageu"], ["Zc", "Zacarias"],
  ["Ml", "Malaquias"], ["Mt", "Mateus"], ["Mc", "Marcos"], ["Lc", "Lucas"], ["Jo", "João"],
  ["At", "Atos dos Apóstolos"], ["At", "Atos"], ["Rm", "Romanos"], ["1Cor", "1 Coríntios"], ["2Cor", "2 Coríntios"],
  ["Gl", "Gálatas"], ["Ef", "Efésios"], ["Fl", "Filipenses"], ["Cl", "Colossenses"], ["1Ts", "1 Tessalonicenses"],
  ["2Ts", "2 Tessalonicenses"], ["1Tm", "1 Timóteo"], ["2Tm", "2 Timóteo"], ["Tt", "Tito"], ["Fm", "Filemom"],
  ["Hb", "Hebreus"], ["Tg", "Tiago"], ["1Pd", "1 Pedro"], ["2Pd", "2 Pedro"], ["1Jo", "1 João"],
  ["2Jo", "2 João"], ["3Jo", "3 João"], ["Jd", "Judas"], ["Ap", "Apocalipse"],
];

const MESES = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

const semAcento = (t: string) => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const canonico = (t: string) => semAcento(t).replace(/[^a-z0-9]/g, "").replace(/ss|c/g, "s");

const SIGLA_DO_NOME = new Map(LIVROS.map(([sigla, nome]) => [canonico(nome), sigla]));

export function siglaDoLivro(nome: string): string | null {
  const s = SIGLA_DO_NOME.get(canonico(nome));
  if (s) return s;
  const limpo = semAcento(nome).replace(/\s+/g, "");
  return LIVROS.find(([sigla]) => semAcento(sigla) === limpo)?.[0] ?? null;
}

function entidades(t: string): string {
  return t
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&amp;/g, "&");
}

export function lerFeed(xml: string): Entrada[] {
  const r: Entrada[] = [];
  for (const m of xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)) {
    const bloco = m[1]!;
    const id = /<yt:videoId>([A-Za-z0-9_-]{11})<\/yt:videoId>/.exec(bloco)?.[1];
    const titulo = /<title>([\s\S]*?)<\/title>/.exec(bloco)?.[1];
    const publicado = /<published>([^<]+)<\/published>/.exec(bloco)?.[1];
    if (id && titulo && publicado) r.push({ id, titulo: entidades(titulo).normalize("NFC").trim(), publicado });
  }
  return r;
}

export function diaEmBrasilia(instante: string): string {
  const d = new Date(new Date(instante).getTime() - 3 * 3600 * 1000);
  return d.toISOString().slice(0, 10);
}

const iso = (a: number, m: number, d: number) => `${a}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

function dataValida(a: number, m: number, d: number): boolean {
  if (m < 1 || m > 12 || d < 1 || d > 31) return false;
  const t = new Date(Date.UTC(a, m - 1, d));
  return t.getUTCMonth() === m - 1 && t.getUTCDate() === d;
}

export function diaDoTitulo(titulo: string, publicado: string): string {
  return dataDoTitulo(titulo, publicado) ?? diaEmBrasilia(publicado);
}

export function dataDoTitulo(titulo: string, publicado: string): string | null {
  const base = diaEmBrasilia(publicado);
  const anoBase = Number(base.slice(0, 4));
  const numerica = /(?:^|[^\d])(\d{1,2})\/(\d{1,2})\/(\d{4}|\d{2})(?!\d)/.exec(titulo);
  if (numerica) {
    const d = Number(numerica[1]);
    const m = Number(numerica[2]);
    const a = numerica[3]!.length === 2 ? 2000 + Number(numerica[3]) : Number(numerica[3]);
    if (dataValida(a, m, d)) return iso(a, m, d);
  }
  const porExtenso = /(\d{1,2})º? de ([a-zç]+)/i.exec(semAcento(titulo));
  if (porExtenso) {
    const d = Number(porExtenso[1]);
    const m = MESES.indexOf(porExtenso[2]!) + 1;
    if (m > 0) {
      const candidatos = [anoBase - 1, anoBase, anoBase + 1].filter((a) => dataValida(a, m, d)).map((a) => iso(a, m, d));
      const perto = candidatos.sort((x, y) => Math.abs(Date.parse(x) - Date.parse(base)) - Math.abs(Date.parse(y) - Date.parse(base)))[0];
      if (perto) return perto;
    }
  }
  return null;
}

export function referenciaDoTitulo(titulo: string): Referencia | null {
  const abreviada = /\|\s*([1-3]?\s?[A-Za-zÀ-ÿ]{1,4})\s+(\d{1,3})\s*,\s*(\d[\d.\-a-z]*)\s*$/i.exec(titulo.trim());
  if (abreviada) {
    const sigla = siglaDoLivro(abreviada[1]!);
    if (sigla) return { sigla, capitulo: Number(abreviada[2]), texto: `${sigla} ${abreviada[2]},${abreviada[3]}` };
  }
  for (const m of titulo.matchAll(/\(\s*([1-3]?\s?[A-Za-zÀ-ÿ]+(?:\s+(?:dos|das|de)\s+[A-Za-zÀ-ÿ]+)?)\s+(\d{1,3})\s*,\s*([^)]{1,30})\)/g)) {
    const sigla = siglaDoLivro(m[1]!);
    if (sigla) return { sigla, capitulo: Number(m[2]), texto: `${sigla} ${m[2]},${m[3]!.replace(/\s+/g, "")}` };
  }
  return null;
}

export function classificar(e: Entrada, regras: Regra[]): Classificado | null {
  const titulo = semAcento(e.titulo);
  for (const r of regras) {
    if (r.contem.some((p) => titulo.includes(semAcento(p)))) {
      const data = dataDoTitulo(e.titulo, e.publicado);
      if (r.exigeData && !data) return null;
      return { tipo: r.tipo, dia: data ?? diaEmBrasilia(e.publicado), referencia: r.tipo === "homilia" ? referenciaDoTitulo(e.titulo) : null };
    }
  }
  return null;
}

export interface Leitura {
  sigla: string;
  capitulo: number;
}

export function leiturasDaPagina(html: string): Leitura[] {
  const r: Leitura[] = [];
  for (const m of html.matchAll(/<h2>(?:Primeira leitura|Segunda leitura|Evangelho|Leitura[^:<]*): ([1-3]?[A-Za-zÀ-ÿ]+) (\d+)/g)) {
    r.push({ sigla: m[1]!, capitulo: Number(m[2]) });
  }
  return r;
}

export function confere(ref: Referencia, leituras: Leitura[]): boolean {
  return leituras.some((l) => l.sigla === ref.sigla && Math.abs(l.capitulo - ref.capitulo) <= 1);
}


const SITE = Deno.env.get("SITE") ?? "https://app-catolico-five.vercel.app";
const DIAS_PARA_TRAS = 3;

const banco = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });

const leituras = new Map<string, Promise<Leitura[]>>();

function leiturasDe(dia: string): Promise<Leitura[]> {
  let p = leituras.get(dia);
  if (!p) {
    p = fetch(`${SITE}/liturgia/${dia}`)
      .then((r) => (r.ok ? r.text() : ""))
      .then(leiturasDaPagina)
      .catch(() => []);
    leituras.set(dia, p);
  }
  return p;
}

interface Canal {
  id: string;
  youtube_id: string;
  regras: Regra[];
}

Deno.serve(async () => {
  const { data: canais, error } = await banco.from("canais_video").select("id, youtube_id, regras").eq("ativo", true);
  if (error) return new Response(JSON.stringify({ erro: error.message }), { status: 500 });
  const limite = diaEmBrasilia(new Date(Date.now() - DIAS_PARA_TRAS * 86400000).toISOString());
  const novos: Record<string, unknown>[] = [];
  const falhas: string[] = [];
  for (const canal of (canais ?? []) as Canal[]) {
    const xml = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${canal.youtube_id}`)
      .then((r) => (r.ok ? r.text() : ""))
      .catch(() => "");
    if (!xml) {
      falhas.push(canal.id);
      continue;
    }
    for (const e of lerFeed(xml)) {
      const v = classificar(e, canal.regras);
      if (!v || v.dia < limite) continue;
      if (v.referencia) {
        const doDia = await leiturasDe(v.dia);
        if (doDia.length > 0 && !confere(v.referencia, doDia)) continue;
      }
      const embutivel = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${e.id}&format=json`)
        .then((r) => r.status !== 401 && r.status !== 403)
        .catch(() => true);
      novos.push({
        id: e.id,
        canal_id: canal.id,
        tipo: v.tipo,
        titulo: e.titulo.slice(0, 300),
        dia: v.dia,
        referencia: v.referencia?.texto ?? "",
        publicado_em: e.publicado,
        embutivel,
      });
    }
  }
  if (novos.length > 0) {
    const { error: e } = await banco.from("videos").upsert(novos, { onConflict: "id", ignoreDuplicates: true });
    if (e) return new Response(JSON.stringify({ erro: e.message }), { status: 500 });
  }
  return new Response(JSON.stringify({ encontrados: novos.length, falhas }), { headers: { "Content-Type": "application/json" } });
});
