import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ListMusic, Radio } from "lucide-react";
import { roteirosDaParoquia, type RoteiroDoTerco } from "@/roteiros/api";
import { quandoDoRoteiro } from "@/roteiros/roteiro";
import { Grupo, LINHA } from "@/components/Cartao";

export function FolhetosDaParoquia({ paroquia, nome, podeEditar }: { paroquia: string; nome: string; podeEditar: boolean }) {
  const [lista, setLista] = useState<RoteiroDoTerco[]>([]);
  useEffect(() => {
    roteirosDaParoquia(paroquia)
      .then(setLista)
      .catch(() => {});
  }, [paroquia]);
  if (!lista.length && !podeEditar) return null;
  return (
    <Grupo titulo="Cantos e roteiros">
      {lista.map((r) => (
        <Link key={r.codigo} to={`/r/${r.codigo}`} className={LINHA}>
          {r.ao_vivo ? <Radio className="size-5 shrink-0 animate-pulse text-destaque-texto" aria-hidden /> : <ListMusic className="size-5 shrink-0 text-destaque-texto" aria-hidden />}
          <span className="min-w-0 flex-1">
            <span className="block font-medium">{r.titulo}</span>
            <span className="block text-sm text-tinta-suave">{r.ao_vivo ? "Ao vivo agora" : quandoDoRoteiro(r)}</span>
          </span>
          <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        </Link>
      ))}
      {podeEditar && (
        <Link to={`/roteiros?paroquia=${paroquia}&nome=${encodeURIComponent(nome)}`} className={LINHA}>
          <ListMusic className="size-5 shrink-0 text-destaque-texto" aria-hidden />
          <span className="min-w-0 flex-1 font-medium">Montar o folheto da missa</span>
          <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        </Link>
      )}
    </Grupo>
  );
}
