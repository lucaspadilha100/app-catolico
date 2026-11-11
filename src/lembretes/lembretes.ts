import { NOVENAS } from "@/devocao/catalogo";
import { diaSugeridoDaNovena } from "@/devocao/andamento";
import { hoje, paraIso } from "@/liturgia/datas";
import { minutosDe, type Lembretes, type NovenaLembrada } from "../../supabase/functions/lembretes/regras";
import { ehNativo } from "@/lib/nativo";
import { igrejasQueSigo } from "@/paroquias/seguidas";
import { diaLiturgico } from "@/liturgia/calendario";
import { carregarLecionario, leiturasDoDia } from "@/liturgia/lecionario";
import { MISTERIOS, grupoDoDiaDaSemana } from "@/liturgia/terco";
import { somaDias } from "@/liturgia/datas";

export type { Lembretes };

const CHAVE = "santinho-lembretes";
const URL_DO_BANCO = import.meta.env.VITE_SUPABASE_URL as string;
const CHAVE_PUBLICA = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;
export const VAPID_PUBLICA = "BDlqlVrwkACqpndHwa9otBwcn3cK-7dZzXvpQibKRKYzdHoZGvnFc3EcMVhW5Y2j-_LWGxcbqwEekCPhbpnmjQM";

export const PADRAO: Lembretes = { evangelho: "07:00", angelus: true, terco: "20:00", novena: "09:00", avisos: true, oracoes: true };

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
  if (ehNativo()) return true;
  return typeof window !== "undefined" && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
}

export function permitido(): boolean {
  if (ehNativo()) return true;
  return suportado() && Notification.permission === "granted";
}

const dioceseEscolhida = () => {
  try {
    return (JSON.parse(localStorage.getItem("santinho-preferencias") ?? "{}") as { diocese?: string }).diocese ?? "";
  } catch {
    return "";
  }
};

async function agendarNoAparelho(l: Lembretes): Promise<"ativo" | "negado" | "erro"> {
  try {
    const { LocalNotifications } = await import("@capacitor/local-notifications");
    const permissao = await LocalNotifications.requestPermissions();
    if (permissao.display !== "granted") return "negado";
    const pendentes = await LocalNotifications.getPending();
    if (pendentes.notifications.length) await LocalNotifications.cancel({ notifications: pendentes.notifications.map((n) => ({ id: n.id })) });
    const agora = Date.now();
    const lista: { id: number; title: string; body: string; schedule: Record<string, unknown>; extra: { url: string } }[] = [];
    const quando = (iso: string, minutos: number) => {
      const [a, m, d] = iso.split("-").map(Number);
      return new Date(a!, m! - 1, d!, Math.floor(minutos / 60), minutos % 60);
    };
    const hojeLocal = new Date().toLocaleDateString("sv-SE");
    const ev = minutosDe(l.evangelho);
    if (ev !== null) {
      const lecionario = await carregarLecionario();
      const base = hoje();
      for (let k = 0; k < 30; k++) {
        const d = somaDias(base, k);
        const iso = paraIso(d);
        const at = quando(iso, ev);
        if (at.getTime() <= agora) continue;
        const referencia = leiturasDoDia(diaLiturgico(d, dioceseEscolhida()), lecionario)[0]?.leituras.find((x) => x.tipo === "evangelho")?.referencia;
        lista.push({ id: 1000 + k, title: "Evangelho do dia", body: referencia ? `${referencia}. Leia e reze com a liturgia de hoje.` : "Leia e reze com a liturgia de hoje.", schedule: { at, allowWhileIdle: true }, extra: { url: `/liturgia/${iso}` } });
      }
    }
    if (l.angelus) lista.push({ id: 2000, title: "Ângelus", body: "O Anjo do Senhor anunciou a Maria.", schedule: { on: { hour: 12, minute: 0 }, allowWhileIdle: true }, extra: { url: "/rezar/oracoes/angelus" } });
    const te = minutosDe(l.terco);
    if (te !== null)
      for (let dia = 0; dia < 7; dia++)
        lista.push({ id: 3000 + dia, title: "Hora do terço", body: `Hoje: ${MISTERIOS[grupoDoDiaDaSemana(dia)].nome}.`, schedule: { on: { weekday: dia + 1, hour: Math.floor(te / 60), minute: te % 60 }, allowWhileIdle: true }, extra: { url: "/rezar/terco" } });
    const no = minutosDe(l.novena);
    if (no !== null)
      novenasSeguidas().forEach((n, i) => {
        for (let dia = 1; dia <= n.dias; dia++) {
          const iso = paraIso(somaDias(deIsoLocal(n.inicio), dia - 1));
          const at = quando(iso, no);
          if (at.getTime() <= agora || iso < hojeLocal) continue;
          lista.push({ id: 4000 + i * 40 + dia, title: n.titulo, body: `Dia ${dia} de ${n.dias}.`, schedule: { at, allowWhileIdle: true }, extra: { url: n.para } });
        }
      });
    if (lista.length) await LocalNotifications.schedule({ notifications: lista.slice(0, 60) });
    return "ativo";
  } catch {
    return "erro";
  }
}

const deIsoLocal = (iso: string) => {
  const [a, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(a!, m! - 1, d!));
};

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
    p_lembretes: { ...lembretes, novenas: novenasSeguidas(), igrejas: lembretes.avisos === false ? [] : igrejasQueSigo() },
  });
}

export async function ativar(lembretes: Lembretes): Promise<"ativo" | "negado" | "erro"> {
  if (ehNativo()) {
    const r = await agendarNoAparelho(lembretes);
    if (r === "ativo") guardar({ ativo: true, lembretes, enviadoEm: paraIso(hoje()) });
    return r;
  }
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
  if (ehNativo()) {
    const ok = (await agendarNoAparelho(lembretes)) === "ativo";
    guardar({ ativo: true, lembretes, enviadoEm: ok ? paraIso(hoje()) : lerGuardado().enviadoEm });
    return ok;
  }
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
  if (ehNativo()) {
    try {
      const { LocalNotifications } = await import("@capacitor/local-notifications");
      const pendentes = await LocalNotifications.getPending();
      if (pendentes.notifications.length) await LocalNotifications.cancel({ notifications: pendentes.notifications.map((n) => ({ id: n.id })) });
    } catch {}
    guardar({ ...lerGuardado(), ativo: false });
    return;
  }
  try {
    const sub = await inscricao(false);
    if (sub) {
      await rpc("remover_lembretes", { p_endpoint: sub.endpoint }).catch(() => {});
      await sub.unsubscribe();
    }
  } catch {}
  guardar({ ...lerGuardado(), ativo: false });
}

export function avisarMudancaDeIgrejas() {
  const g = lerGuardado();
  if (g.ativo && permitido() && !ehNativo()) void atualizar(g.lembretes);
}

export function renovarSeFaltar() {
  const g = lerGuardado();
  if (!g.ativo || !permitido()) return;
  if (g.enviadoEm === paraIso(hoje())) return;
  void atualizar(g.lembretes);
}
