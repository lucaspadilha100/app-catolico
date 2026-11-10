import { NOVENAS } from "@/devocao/catalogo";
import { diaSugeridoDaNovena } from "@/devocao/andamento";
import { hoje, paraIso } from "@/liturgia/datas";
import type { Lembretes, NovenaLembrada } from "../../supabase/functions/lembretes/regras";

export type { Lembretes };

const CHAVE = "santinho-lembretes";
const URL_DO_BANCO = import.meta.env.VITE_SUPABASE_URL as string;
const CHAVE_PUBLICA = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
export const VAPID_PUBLICA = "BDlqlVrwkACqpndHwa9otBwcn3cK-7dZzXvpQibKRKYzdHoZGvnFc3EcMVhW5Y2j-_LWGxcbqwEekCPhbpnmjQM";

export const PADRAO: Lembretes = { evangelho: "07:00", angelus: true, terco: "20:00", novena: "09:00" };

export interface Guardado {
  ativo: boolean;
  lembretes: Lembretes;
  enviadoEm?: string;
}

export function lerGuardado(): Guardado {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE) ?? "null") as Guardado | null;
    if (v && typeof v === "object") return { ativo: Boolean(v.ativo), lembretes: v.lembretes ?? PADRAO, enviadoEm: v.enviadoEm };
  } catch {}
  return { ativo: false, lembretes: PADRAO };
}

function guardar(g: Guardado) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(g));
  } catch {}
}

export const instalado = () =>
  typeof window !== "undefined" && (window.matchMedia?.("(display-mode: standalone)").matches || (navigator as { standalone?: boolean }).standalone === true);

export const ehIphone = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

export function suportado(): boolean {
  return typeof window !== "undefined" && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
}

function chaveEmBytes(base64: string): Uint8Array<ArrayBuffer> {
  const b = atob((base64 + "=".repeat((4 - (base64.length % 4)) % 4)).replace(/-/g, "+").replace(/_/g, "/"));
  const bytes = new Uint8Array(new ArrayBuffer(b.length));
  for (let i = 0; i < b.length; i++) bytes[i] = b.charCodeAt(i);
  return bytes;
}

function novenasSeguidas(): NovenaLembrada[] {
  const d = hoje();
  const r: NovenaLembrada[] = [];
  for (const n of NOVENAS) {
    const s = diaSugeridoDaNovena(n, d);
    if (s?.seguindo) r.push({ titulo: n.nome, inicio: paraIso(s.inicio), dias: n.dias, para: `/rezar/novenas/${n.id}` });
  }
  return r.slice(0, 10);
}

async function rpc(nome: string, corpo: Record<string, unknown>) {
  const r = await fetch(`${URL_DO_BANCO}/rest/v1/rpc/${nome}`, {
    method: "POST",
    headers: { apikey: CHAVE_PUBLICA, "Content-Type": "application/json" },
    body: JSON.stringify(corpo),
  });
  if (!r.ok) throw new Error(await r.text());
}

async function inscricao(criar: boolean): Promise<PushSubscription | null> {
  const reg = await navigator.serviceWorker.ready;
  const atual = await reg.pushManager.getSubscription();
  if (atual || !criar) return atual;
  return reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: chaveEmBytes(VAPID_PUBLICA) });
}

async function enviar(sub: PushSubscription, lembretes: Lembretes) {
  const j = sub.toJSON();
  await rpc("salvar_lembretes", {
    p_endpoint: j.endpoint,
    p_p256dh: j.keys?.p256dh,
    p_auth: j.keys?.auth,
    p_fuso: Intl.DateTimeFormat().resolvedOptions().timeZone,
    p_lembretes: { ...lembretes, novenas: novenasSeguidas() },
  });
}

export async function ativar(lembretes: Lembretes): Promise<"ativo" | "negado" | "erro"> {
  if (!suportado()) return "erro";
  const permissao = await Notification.requestPermission();
  if (permissao !== "granted") return "negado";
  try {
    const sub = await inscricao(true);
    if (!sub) return "erro";
    await enviar(sub, lembretes);
    guardar({ ativo: true, lembretes, enviadoEm: paraIso(hoje()) });
    return "ativo";
  } catch {
    return "erro";
  }
}

export async function atualizar(lembretes: Lembretes): Promise<boolean> {
  try {
    const sub = await inscricao(false);
    if (!sub) return false;
    await enviar(sub, lembretes);
    guardar({ ativo: true, lembretes, enviadoEm: paraIso(hoje()) });
    return true;
  } catch {
    guardar({ ...lerGuardado(), lembretes });
    return false;
  }
}

export async function desativar() {
  try {
    const sub = await inscricao(false);
    if (sub) {
      await rpc("remover_lembretes", { p_endpoint: sub.endpoint }).catch(() => {});
      await sub.unsubscribe();
    }
  } catch {}
  guardar({ ...lerGuardado(), ativo: false });
}

export function renovarSeFaltar() {
  const g = lerGuardado();
  if (!g.ativo || !suportado() || Notification.permission !== "granted") return;
  if (g.enviadoEm === paraIso(hoje())) return;
  void atualizar(g.lembretes);
}
