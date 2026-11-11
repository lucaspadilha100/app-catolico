import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ehNativo } from "@/lib/nativo";
import { usePreferencias } from "@/lib/preferencias";

export function PonteNativa() {
  const navegar = useNavigate();
  const { preferencias } = usePreferencias();

  useEffect(() => {
    if (!ehNativo()) return;
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
          const caminho = new URL(url).pathname;
          if (caminho.startsWith("/")) navegar(caminho);
        } catch {}
      };
      const link = await App.addListener("appUrlOpen", (e) => rota(e.url));
      const inicial = await App.getLaunchUrl().catch(() => undefined);
      if (inicial?.url) rota(inicial.url);
      limpar.push(() => void voltar.remove(), () => void tocou.remove(), () => void link.remove());
      await SplashScreen.hide();
    })();
    return () => limpar.forEach((f) => f());
  }, [navegar]);

  useEffect(() => {
    if (!ehNativo()) return;
    void (async () => {
      const { StatusBar, Style } = await import("@capacitor/status-bar");
      const escuro = document.documentElement.dataset.tema === "escuro";
      await StatusBar.setStyle({ style: escuro ? Style.Dark : Style.Light }).catch(() => {});
      await StatusBar.setBackgroundColor({ color: escuro ? "#0f0f11" : "#FFFFFF" }).catch(() => {});
    })();
  }, [preferencias.tema]);

  return null;
}
