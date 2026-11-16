import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ehNativo } from "@/lib/nativo";
import { usePreferencias } from "@/lib/preferencias";

let abriuPelaUrl = false;

export function PonteNativa() {
  const navegarAgora = useNavigate();
  const navegarRef = useRef(navegarAgora);
  navegarRef.current = navegarAgora;
  const { preferencias } = usePreferencias();

  useEffect(() => {
    if (!ehNativo()) return;
    const navegar = (para: string) => navegarRef.current(para);
    let ativo = true;
    const limpar: (() => void)[] = [];
    void (async () => {
      const [{ App }, { LocalNotifications }, { SplashScreen }] = await Promise.all([
        import("@capacitor/app"),
        import("@capacitor/local-notifications"),
        import("@capacitor/splash-screen"),
      ]);
      const voltar = await App.addListener("backButton", ({ canGoBack }) => {
        if (canGoBack && window.location.pathname !== "/") window.history.back();
        else void App.minimizeApp();
      });
      const tocou = await LocalNotifications.addListener("localNotificationActionPerformed", (e) => {
        const url = (e.notification.extra as { url?: string } | undefined)?.url;
        if (url) navegar(url);
      });
      const rota = (url: string) => {
        try {
          const u = new URL(url);
          if (u.pathname.startsWith("/")) navegar(u.pathname + u.search + u.hash);
        } catch {}
      };
      const link = await App.addListener("appUrlOpen", (e) => rota(e.url));
      limpar.push(() => void voltar.remove(), () => void tocou.remove(), () => void link.remove());
      if (!ativo) limpar.forEach((f) => f());
      if (!abriuPelaUrl) {
        abriuPelaUrl = true;
        const inicial = await App.getLaunchUrl().catch(() => undefined);
        if (inicial?.url) rota(inicial.url);
      }
      await SplashScreen.hide();
    })();
    return () => {
      ativo = false;
      limpar.forEach((f) => f());
    };
  }, []);

  useEffect(() => {
    if (!ehNativo()) return;
    const aplicar = () =>
      void (async () => {
        const { StatusBar, Style } = await import("@capacitor/status-bar");
        const escuro = document.documentElement.dataset.tema === "escuro";
        await StatusBar.setStyle({ style: escuro ? Style.Dark : Style.Light }).catch(() => {});
        await StatusBar.setBackgroundColor({ color: escuro ? "#0f0f11" : "#FFFFFF" }).catch(() => {});
      })();
    aplicar();
    const midia = window.matchMedia?.("(prefers-color-scheme: dark)");
    const mudou = () => setTimeout(aplicar, 50);
    midia?.addEventListener?.("change", mudou);
    return () => midia?.removeEventListener?.("change", mudou);
  }, [preferencias.tema]);

  return null;
}
