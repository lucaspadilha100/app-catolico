import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PreferenciasProvider } from "@/lib/preferencias";
import { CofreProvider } from "@/confissao/useCofre";
import { ContaProvider } from "@/conta/useConta";
import App from "./App";
import "./index.css";
import { registerSW } from "virtual:pwa-register";
import { ehNativo } from "@/lib/nativo";

if (!ehNativo() && "serviceWorker" in navigator) {
  registerSW({
    immediate: true,
    onRegisteredSW(_, registro) {
      if (!registro) return;
      const conferir = () => {
        if (navigator.onLine) void registro.update().catch(() => {});
      };
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") conferir();
      });
      window.addEventListener("focus", conferir);
    },
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PreferenciasProvider>
      <CofreProvider>
        <ContaProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ContaProvider>
      </CofreProvider>
    </PreferenciasProvider>
  </StrictMode>,
);
