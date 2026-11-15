import { useEffect, useState } from "react";
import type { DiaLiturgico } from "@/liturgia/calendario";
import { carregarLecionario, leiturasDoDia, type Missa } from "@/liturgia/lecionario";

export function useLeituras(l: DiaLiturgico): Missa[] | null {
  const [missas, setMissas] = useState<Missa[] | null>(null);

  useEffect(() => {
    let ativo = true;
    let espera: ReturnType<typeof setTimeout> | undefined;
    const carregar = (tentativa: number) => {
      carregarLecionario()
        .then((lecionario) => {
          if (ativo) setMissas(leiturasDoDia(l, lecionario));
        })
        .catch(() => {
          if (ativo) espera = setTimeout(() => carregar(tentativa + 1), Math.min(30000, 2000 * 2 ** tentativa));
        });
    };
    const voltou = () => {
      clearTimeout(espera);
      carregar(0);
    };
    carregar(0);
    window.addEventListener("online", voltou);
    return () => {
      ativo = false;
      clearTimeout(espera);
      window.removeEventListener("online", voltou);
    };
  }, [l]);

  return missas;
}
