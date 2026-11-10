import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Church } from "lucide-react";
import { usePreferencias } from "@/lib/preferencias";
import { carregarParoquia, type ParoquiaCompleta } from "@/paroquias/api";
import { emQuanto, proximasOcorrencias, quandoPorExtenso } from "@/paroquias/horarios";

const TOLERANCIA = 15 * 60_000;

export function ProximaMissa() {
  const { minhaParoquia, minhaParoquiaNome } = usePreferencias().preferencias;
  const [dados, setDados] = useState<ParoquiaCompleta | null>(null);
  useEffect(() => {
    if (!minhaParoquia) return;
    let ativo = true;
    carregarParoquia(minhaParoquia)
      .then((d) => ativo && setDados(d))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [minhaParoquia]);
  if (!minhaParoquia) return null;
  const agora = new Date();
  const proxima = dados ? proximasOcorrencias(dados.horarios.filter((h) => h.tipo === "missa"), new Date(agora.getTime() - TOLERANCIA), 7)[0] : undefined;
  const quanto = proxima ? emQuanto(proxima.quando, agora) : "";
  return (
    <div className="flex flex-col gap-2">
      <Link to={`/missas/paroquia/${minhaParoquia}`} className="flex min-h-16 items-center gap-3 rounded-2xl border border-borda bg-cartao px-4 py-3 shadow-sm">
        <Church className="size-6 shrink-0 text-destaque-texto" aria-hidden />
        <span className="min-w-0 flex-1">
          <span className="block font-semibold text-tinta">
            {proxima ? `Próxima missa: ${quandoPorExtenso(proxima.quando, agora)}` : "Minha paróquia"}
            {quanto && <span className="font-normal text-tinta-suave"> · {quanto}</span>}
          </span>
          <span className="block truncate text-sm text-tinta-suave">{dados?.paroquia.nome ?? minhaParoquiaNome}</span>
        </span>
        <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
      </Link>
      {dados?.avisos.map((a) => (
        <p key={a.id} className="rounded-xl bg-marca-fundo px-4 py-2.5 text-sm text-tinta">
          {a.texto}
        </p>
      ))}
    </div>
  );
}
