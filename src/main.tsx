import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PreferenciasProvider } from "@/lib/preferencias";
import { CofreProvider } from "@/confissao/useCofre";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PreferenciasProvider>
      <CofreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CofreProvider>
    </PreferenciasProvider>
  </StrictMode>,
);
