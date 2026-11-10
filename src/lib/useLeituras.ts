import { useEffect, useState } from "react";
import type { DiaLiturgico } from "@/liturgia/calendario";
import { carregarLecionario, leiturasDoDia, type Missa } from "@/liturgia/lecionario";

export function useLeituras(l: DiaLiturgico): Missa[] | null {
  const [missas, setMissas] = useState<Missa[] | null>(null);

  useEffect(() => {
    let ativo = true;
    carregarLecionario().then((lecionario) => {
      if (ativo) setMissas(leiturasDoDia(l, lecionario));
    });
    return () => {
      ativo = false;
    };
  }, [l]);

  return missas;
}
