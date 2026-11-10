import type { Estado } from "./tipos";

export interface Proposito {
  id: string;
  texto: string;
  origem: "confissao" | "livre";
  criadoEm: string;
  feito: boolean;
}

export interface EntradaDoDiario {
  id: string;
  data: string;
  texto: string;
}

export interface ConteudoDoCofre {
  estado: Estado | null;
  marcados: string[];
  anotacoes: string;
  ultimaConfissao: string | null;
  propositos: Proposito[];
  diario: EntradaDoDiario[];
}

export const COFRE_VAZIO: ConteudoDoCofre = {
  estado: null,
  marcados: [],
  anotacoes: "",
  ultimaConfissao: null,
  propositos: [],
  diario: [],
};

interface CofreGuardado {
  versao: 1;
  iteracoes: number;
  sal: string;
  iv: string;
  dados: string;
}

export const CHAVE_DO_COFRE = "santinho-cofre";
const ITERACOES = 310_000;

const paraBase64 = (b: ArrayBuffer | Uint8Array) => btoa(String.fromCharCode(...new Uint8Array(b)));
const deBase64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function derivar(pin: string, sal: Uint8Array, iteracoes: number): Promise<CryptoKey> {
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pin), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", hash: "SHA-256", salt: sal as BufferSource, iterations: iteracoes },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

export interface CofreAberto {
  chave: CryptoKey;
  sal: string;
  conteudo: ConteudoDoCofre;
}

function lerGuardado(): CofreGuardado | null {
  try {
    const bruto = localStorage.getItem(CHAVE_DO_COFRE);
    return bruto ? (JSON.parse(bruto) as CofreGuardado) : null;
  } catch {
    return null;
  }
}

export const existeCofre = () => lerGuardado() !== null;

export async function selar(cofre: Omit<CofreAberto, "conteudo">, conteudo: ConteudoDoCofre): Promise<void> {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const dados = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, cofre.chave, new TextEncoder().encode(JSON.stringify(conteudo)));
  const guardado: CofreGuardado = { versao: 1, iteracoes: ITERACOES, sal: cofre.sal, iv: paraBase64(iv), dados: paraBase64(dados) };
  localStorage.setItem(CHAVE_DO_COFRE, JSON.stringify(guardado));
}

export async function criarCofre(pin: string, inicial: ConteudoDoCofre = COFRE_VAZIO): Promise<CofreAberto> {
  const sal = crypto.getRandomValues(new Uint8Array(16));
  const chave = await derivar(pin, sal, ITERACOES);
  const cofre = { chave, sal: paraBase64(sal) };
  await selar(cofre, inicial);
  return { ...cofre, conteudo: inicial };
}

export async function abrirCofre(pin: string): Promise<CofreAberto | null> {
  const g = lerGuardado();
  if (!g) return null;
  const chave = await derivar(pin, deBase64(g.sal), g.iteracoes);
  try {
    const claro = await crypto.subtle.decrypt({ name: "AES-GCM", iv: deBase64(g.iv) as BufferSource }, chave, deBase64(g.dados) as BufferSource);
    return { chave, sal: g.sal, conteudo: { ...COFRE_VAZIO, ...(JSON.parse(new TextDecoder().decode(claro)) as ConteudoDoCofre) } };
  } catch {
    return null;
  }
}

export const apagarCofre = () => {
  try {
    localStorage.removeItem(CHAVE_DO_COFRE);
  } catch {}
};

export const pinValido = (pin: string) => /^\d{4,}$/.test(pin);

export function fuiMeConfessar(c: ConteudoDoCofre, hojeIso: string, novos: string[]): ConteudoDoCofre {
  return {
    ...c,
    marcados: [],
    anotacoes: "",
    ultimaConfissao: hojeIso,
    propositos: [
      ...c.propositos.filter((p) => !p.feito),
      ...novos.filter((t) => t.trim()).map((texto) => ({ id: crypto.randomUUID(), texto: texto.trim(), origem: "confissao" as const, criadoEm: hojeIso, feito: false })),
    ],
  };
}
