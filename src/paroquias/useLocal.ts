import { useCallback, useState } from "react";
import type { Local } from "./api";

const CHAVE = "santinho-local";

const guardado = (): Local | null => {
  try {
    return JSON.parse(sessionStorage.getItem(CHAVE) ?? "null") as Local | null;
  } catch {
    return null;
  }
};

export function useLocal() {
  const [local, setLocal] = useState<Local | null>(guardado);
  const [estado, setEstado] = useState<"parado" | "buscando" | "negado" | "erro">("parado");

  const pedir = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setEstado("erro");
      return;
    }
    setEstado("buscando");
    navigator.geolocation.getCurrentPosition(
      (p) => {
        const l = { lat: p.coords.latitude, lng: p.coords.longitude };
        try {
          sessionStorage.setItem(CHAVE, JSON.stringify(l));
        } catch {}
        setLocal(l);
        setEstado("parado");
      },
      (e) => setEstado(e.code === e.PERMISSION_DENIED ? "negado" : "erro"),
      { enableHighAccuracy: false, timeout: 15_000, maximumAge: 600_000 },
    );
  }, []);

  return { local, estado, pedir };
}
