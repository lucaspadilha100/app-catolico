const CHAVE = "santinho-uso-contado";
const deTeste = () => import.meta.env.DEV || ["localhost", "127.0.0.1"].includes(location.hostname);

export function contarAbertura() {
  if (deTeste()) return;
  const hoje = new Date().toLocaleDateString("sv-SE");
  try {
    if (localStorage.getItem(CHAVE) === hoje) return;
  } catch {
    return;
  }
  const url = import.meta.env.VITE_SUPABASE_URL as string;
  const chave = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
  if (!url || !chave || !navigator.onLine) return;
  fetch(`${url}/rest/v1/rpc/contar_uso`, {
    method: "POST",
    headers: { apikey: chave, "Content-Type": "application/json" },
    body: JSON.stringify({ p_evento: "abertura" }),
    keepalive: true,
  })
    .then((r) => {
      if (r.ok) localStorage.setItem(CHAVE, hoje);
    })
    .catch(() => {});
}

export type Reza = "terco" | "misericordia" | "agora";
export type RezandoHoje = Record<Reza, number>;

const CHAVE_REZA = "santinho-reza-contada";
const banco = () => ({ url: import.meta.env.VITE_SUPABASE_URL as string, chave: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string });

export function contarReza(reza: Reza) {
  if (deTeste()) return;
  const hoje = new Date().toLocaleDateString("sv-SE");
  let feitas: Record<string, string> = {};
  try {
    feitas = JSON.parse(localStorage.getItem(CHAVE_REZA) ?? "{}") as Record<string, string>;
    if (feitas[reza] === hoje) return;
  } catch {
    return;
  }
  const { url, chave } = banco();
  if (!url || !chave || !navigator.onLine) return;
  fetch(`${url}/rest/v1/rpc/contar_uso`, {
    method: "POST",
    headers: { apikey: chave, "Content-Type": "application/json" },
    body: JSON.stringify({ p_evento: `reza-${reza}` }),
    keepalive: true,
  })
    .then((r) => {
      if (!r.ok) return;
      localStorage.setItem(CHAVE_REZA, JSON.stringify({ ...feitas, [reza]: hoje }));
      guardado = null;
    })
    .catch(() => {});
}

let guardado: { em: number; valor: Promise<RezandoHoje | null> } | null = null;

export function rezandoHoje(): Promise<RezandoHoje | null> {
  if (guardado && Date.now() - guardado.em < 5 * 60_000) return guardado.valor;
  const { url, chave } = banco();
  if (!url || !chave || !navigator.onLine) return Promise.resolve(null);
  const valor = fetch(`${url}/rest/v1/rpc/rezando_hoje`, { method: "POST", headers: { apikey: chave, "Content-Type": "application/json" }, body: "{}" })
    .then((r) => (r.ok ? (r.json() as Promise<RezandoHoje>) : null))
    .catch(() => null);
  guardado = { em: Date.now(), valor };
  return valor;
}

export interface UsoDoApp {
  hoje: string;
  dias: { dia: string; aparelhos: number }[];
  oracoes: Record<string, number>;
  contas: number;
}

export async function usoDoApp(dias: number): Promise<UsoDoApp> {
  const c = (await import("@/lib/supabase")).supabase;
  const r = await c.rpc("uso_do_app", { p_dias: dias });
  if (r.error) throw new Error(r.error.message);
  return r.data as UsoDoApp;
}
