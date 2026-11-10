export type TipoDeAviso = "palavra" | "sentido" | "falta" | "outro";

export interface Aviso {
  livro: string;
  capitulo: number;
  versiculo: number;
  arquivo: string;
  texto_versiculo: string;
  tipo: TipoDeAviso;
  comentario: string;
}

export const NOME_DO_AVISO: Record<TipoDeAviso, string> = {
  palavra: "Palavra errada",
  sentido: "Sentido diferente",
  falta: "Falta texto",
  outro: "Outro",
};

const CHAVE = "santinho-avisos-pendentes";

function pendentes(): Aviso[] {
  try {
    const lista = JSON.parse(localStorage.getItem(CHAVE) ?? "[]");
    return Array.isArray(lista) ? lista : [];
  } catch {
    return [];
  }
}

function guardar(lista: Aviso[]) {
  try {
    if (lista.length) localStorage.setItem(CHAVE, JSON.stringify(lista.slice(-50)));
    else localStorage.removeItem(CHAVE);
  } catch {
    return;
  }
}

async function inserir(avisos: Aviso[]): Promise<boolean> {
  if (!avisos.length) return true;
  try {
    const { supabase } = await import("@/lib/supabase");
    const { error } = await supabase.from("avisos_biblia").insert(avisos);
    return !error;
  } catch {
    return false;
  }
}

export async function enviarAviso(aviso: Aviso): Promise<void> {
  if (!(await inserir([aviso]))) guardar([...pendentes(), aviso]);
}

let enviando = false;
export async function reenviarAvisos(): Promise<void> {
  const lista = pendentes();
  if (enviando || !lista.length) return;
  enviando = true;
  if (await inserir(lista)) guardar(pendentes().slice(lista.length));
  enviando = false;
}
