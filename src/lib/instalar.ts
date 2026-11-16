import { useEffect, useState } from "react";
import { ehNativo } from "@/lib/nativo";
import { ehIphone, instalado } from "@/lembretes/lembretes";

type PedidoDeInstalacao = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: "accepted" | "dismissed" }> };

const CHAVE_DISPENSADO = "santinho-instalar-dispensado";
const DIAS_DISPENSADO = 30;

let pedido: PedidoDeInstalacao | null = null;
let acabouDeInstalar = false;
const ouvintes = new Set<() => void>();
const avisar = () => ouvintes.forEach((f) => f());

export function escutarInstalacao() {
  if (typeof window === "undefined" || ehNativo()) return;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    pedido = e as PedidoDeInstalacao;
    avisar();
  });
  window.addEventListener("appinstalled", () => {
    pedido = null;
    acabouDeInstalar = true;
    avisar();
  });
}

export const navegadorDentroDeApp = () => /Instagram|FBAN|FBAV|FB_IAB|Line\/|TikTok|musical_ly|Twitter/i.test(navigator.userAgent);
const ehAndroid = () => /Android/i.test(navigator.userAgent);

export type ModoDeInstalar = "botao" | "iphone" | "abrir-no-navegador" | "android-menu" | null;

export function modoDeInstalar(): ModoDeInstalar {
  if (typeof window === "undefined" || ehNativo() || instalado() || acabouDeInstalar) return null;
  if (pedido) return "botao";
  if (navegadorDentroDeApp()) return "abrir-no-navegador";
  if (ehIphone()) return "iphone";
  if (ehAndroid()) return "android-menu";
  return null;
}

export async function instalarApp(): Promise<boolean> {
  const p = pedido;
  if (!p) return false;
  pedido = null;
  try {
    await p.prompt();
    const { outcome } = await p.userChoice;
    if (outcome === "accepted") acabouDeInstalar = true;
    return outcome === "accepted";
  } catch {
    return false;
  } finally {
    avisar();
  }
}

export function dispensadoRecente(): boolean {
  try {
    const quando = Number(localStorage.getItem(CHAVE_DISPENSADO) ?? 0);
    return Date.now() - quando < DIAS_DISPENSADO * 86400000;
  } catch {
    return false;
  }
}

export function dispensarInstalacao() {
  try {
    localStorage.setItem(CHAVE_DISPENSADO, String(Date.now()));
  } catch {
    return;
  } finally {
    avisar();
  }
}

export function useInstalar() {
  const [, setVersao] = useState(0);
  useEffect(() => {
    const f = () => setVersao((v) => v + 1);
    ouvintes.add(f);
    return () => {
      ouvintes.delete(f);
    };
  }, []);
  return { modo: modoDeInstalar(), dispensado: dispensadoRecente() };
}
