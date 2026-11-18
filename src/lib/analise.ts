import { useEffect, useState } from "react";
import { ehNativo } from "@/lib/nativo";

const ID = (import.meta.env.VITE_GA_ID as string | undefined)?.trim() ?? "";
const CHAVE = "santinho-cookies";
const VERSAO = "2026-11-18";
const EVENTO = "santinho-cookies";

export type Escolha = "sim" | "nao" | "";

const PRIVADAS = [/^\/rezar\/exame/, /^\/rezar\/confissao/, /^\/rezar\/falecidos/, /^\/diario/, /^\/conta/, /^\/intencoes/, /^\/grupos/, /^\/roteiros\/.+/, /^\/r\//, /^\/painel/, /^\/tercos/, /^\/escalas/, /^\/correntes/, /^\/c\//, /^\/turmas/];

const privada = (caminho: string) => PRIVADAS.some((r) => r.test(caminho));

export const analiseDisponivel = () => !!ID && !ehNativo() && typeof window !== "undefined" && !/^(localhost|127\.0\.0\.1)$/.test(location.hostname);

export function escolhaDeCookies(): Escolha {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE) ?? "null") as { escolha?: string; versao?: string } | null;
    if (!v || v.versao !== VERSAO) return "";
    return v.escolha === "sim" || v.escolha === "nao" ? v.escolha : "";
  } catch {
    return "";
  }
}

type Gtag = (...args: unknown[]) => void;
const janela = () => window as unknown as { dataLayer?: unknown[]; gtag?: Gtag } & Record<string, unknown>;

let carregado = false;

function carregar() {
  if (carregado || !analiseDisponivel()) return;
  carregado = true;
  const w = janela();
  w[`ga-disable-${ID}`] = false;
  w.dataLayer = w.dataLayer ?? [];
  w.gtag = function gtag() {
    w.dataLayer!.push(arguments);
  };
  w.gtag("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "granted" });
  w.gtag("js", new Date());
  w.gtag("config", ID, {
    send_page_view: false,
    cookie_expires: 34128000,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ID)}`;
  document.head.appendChild(s);
}

function apagarCookiesDoGoogle() {
  const dominio = location.hostname;
  for (const c of document.cookie.split(";")) {
    const nome = c.split("=")[0]!.trim();
    if (!nome.startsWith("_ga")) continue;
    for (const d of ["", dominio, `.${dominio}`]) document.cookie = `${nome}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
  }
}

export function escolherCookies(v: "sim" | "nao") {
  try {
    localStorage.setItem(CHAVE, JSON.stringify({ escolha: v, data: new Date().toISOString(), versao: VERSAO }));
  } catch {
    return;
  } finally {
    window.dispatchEvent(new Event(EVENTO));
  }
  if (v === "sim") {
    carregar();
    paginaVista(location.pathname);
  } else if (carregado) {
    janela()[`ga-disable-${ID}`] = true;
    janela().gtag?.("consent", "update", { analytics_storage: "denied" });
    apagarCookiesDoGoogle();
    location.reload();
  } else apagarCookiesDoGoogle();
}

export function useEscolhaDeCookies(): Escolha {
  const [e, setE] = useState(escolhaDeCookies);
  useEffect(() => {
    const f = () => setE(escolhaDeCookies());
    window.addEventListener(EVENTO, f);
    return () => window.removeEventListener(EVENTO, f);
  }, []);
  return e;
}

const ativo = () => analiseDisponivel() && escolhaDeCookies() === "sim";

export function iniciarAnalise() {
  if (!analiseDisponivel()) return;
  document.addEventListener("click", aoClicar, { capture: true, passive: true });
  if (ativo()) carregar();
}

export function paginaVista(caminho: string) {
  if (!ativo() || privada(caminho)) return;
  carregar();
  const campanha = new URLSearchParams([...new URLSearchParams(location.search)].filter(([k]) => k.startsWith("utm_"))).toString();
  janela().gtag?.("event", "page_view", { page_path: caminho, page_location: location.origin + caminho + (campanha ? `?${campanha}` : ""), page_title: document.title });
}

const rotuloSeguro = (texto: string) => {
  const t = texto.replace(/\s+/g, " ").trim().slice(0, 60);
  if (!t || /@|\d{4,}/.test(t)) return "";
  return t;
};

function aoClicar(e: MouseEvent) {
  if (!ativo() || privada(location.pathname)) return;
  const alvo = (e.target as HTMLElement | null)?.closest?.("button, a, [role=button], [role=tab], [role=switch]");
  if (!alvo || alvo.closest("[data-privado]")) return;
  const rotulo = rotuloSeguro(alvo.getAttribute("aria-label") || (alvo as HTMLElement).innerText || "");
  if (!rotulo) return;
  const destino = alvo instanceof HTMLAnchorElement && alvo.origin === location.origin ? alvo.pathname : "";
  janela().gtag?.("event", "clique", { rotulo, tela: location.pathname, destino: destino && !privada(destino) ? destino : "" });
}
