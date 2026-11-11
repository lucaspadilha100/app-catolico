import { useEffect, useState } from "react";
import { UsersRound } from "lucide-react";
import { rezandoHoje, type Reza } from "@/conta/uso";

const FRASE: Record<Reza, (n: string) => string> = {
  terco: (n) => `Hoje, ${n} pessoas rezaram o terço com o app`,
  misericordia: (n) => `Hoje, ${n} pessoas rezaram o Terço da Misericórdia com o app`,
  agora: (n) => `Hoje, ${n} pessoas rezaram com o app`,
};

export function RezandoJuntos({ reza, className = "" }: { reza: Reza; className?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let ativo = true;
    void rezandoHoje().then((r) => ativo && r && setN(r[reza] ?? 0));
    return () => {
      ativo = false;
    };
  }, [reza]);
  if (n < 2) return null;
  return (
    <p className={`text-balance text-center text-sm font-medium text-tinta-suave ${className}`}>
      <UsersRound className="mr-1.5 inline size-4 align-[-0.15em] text-destaque-texto" aria-hidden />
      {FRASE[reza](n.toLocaleString("pt-BR"))}
    </p>
  );
}

export const rezaDoTipo = (tipo: string): Reza | null => (tipo === "rosario" ? "terco" : tipo === "misericordia" ? "misericordia" : null);
