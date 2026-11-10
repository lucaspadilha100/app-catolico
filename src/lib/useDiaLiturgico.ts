import { useEffect, useMemo, useState } from "react";
import { hoje, paraIso, deIso } from "@/liturgia/datas";
import { diaLiturgico } from "@/liturgia/calendario";

export function useDiaLiturgico() {
  const [iso, setIso] = useState(() => paraIso(hoje()));

  useEffect(() => {
    const t = setInterval(() => {
      const agora = paraIso(hoje());
      setIso((atual) => (atual === agora ? atual : agora));
    }, 60_000);
    return () => clearInterval(t);
  }, []);

  return useMemo(() => diaLiturgico(deIso(iso)!), [iso]);
}
