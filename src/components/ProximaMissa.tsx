import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, ChevronRight, Church, HandHeart, ListMusic, Radio, UsersRound } from "lucide-react";
import { usePreferencias } from "@/lib/preferencias";
import { carregarParoquia, proximoEvento, type ParoquiaCompleta, type Publicacao } from "@/paroquias/api";
import { emQuanto, proximasOcorrencias, quandoPorExtenso } from "@/paroquias/horarios";
import { roteirosDaParoquia, type RoteiroDoTerco } from "@/roteiros/api";
import { quandoDoRoteiro } from "@/roteiros/roteiro";
import { turmasDaParoquia, type Turma } from "@/paroquias/plano";
import { dataDoEvento } from "@/components/Mural";
import { LINHA, LISTA } from "@/components/Cartao";

const TOLERANCIA = 15 * 60_000;

interface Extras {
  folheto: RoteiroDoTerco | null;
  evento: Publicacao | null;
  turmas: Turma[];
}

function Linha({ para, icone: Icone, titulo, detalhe }: { para: string; icone: typeof Church; titulo: string; detalhe: string }) {
  return (
    <Link to={para} className={LINHA}>
      <Icone className="size-5 shrink-0 text-destaque-texto" aria-hidden />
      <span className="min-w-0 flex-1">
        <span className="block font-medium leading-snug text-tinta">{titulo}</span>
        {detalhe && <span className="block text-sm text-tinta-suave">{detalhe}</span>}
      </span>
      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
    </Link>
  );
}

export function ProximaMissa() {
  const { minhaParoquia, minhaParoquiaNome } = usePreferencias().preferencias;
  const [dados, setDados] = useState<ParoquiaCompleta | null>(null);
  const [extras, setExtras] = useState<Extras | null>(null);
  useEffect(() => {
    if (!minhaParoquia) return;
    let ativo = true;
    setExtras(null);
    carregarParoquia(minhaParoquia)
      .then((d) => ativo && setDados(d))
      .catch(() => {});
    void Promise.all([
      roteirosDaParoquia(minhaParoquia).catch(() => []),
      proximoEvento(minhaParoquia).catch(() => null),
      turmasDaParoquia(minhaParoquia).catch(() => []),
    ]).then(([folhetos, evento, turmas]) => ativo && setExtras({ folheto: folhetos[0] ?? null, evento, turmas: turmas.filter((t) => t.aberta) }));
    return () => {
      ativo = false;
    };
  }, [minhaParoquia]);
  if (!minhaParoquia) return null;
  const agora = new Date();
  const proxima = dados ? proximasOcorrencias(dados.horarios.filter((h) => h.tipo === "missa"), new Date(agora.getTime() - TOLERANCIA), 7)[0] : undefined;
  const quanto = proxima ? emQuanto(proxima.quando, agora) : "";
  const pagina = `/missas/paroquia/${minhaParoquia}`;
  const turma = extras?.turmas[0];
  return (
    <div className="flex flex-col gap-2">
      <div className={LISTA}>
        <Link to={pagina} className="flex min-h-16 items-center gap-3 px-4 py-3 transition-colors hover:bg-marca-fundo/60">
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
        {extras?.folheto && (
          <Linha
            para={`/r/${extras.folheto.codigo}`}
            icone={extras.folheto.ao_vivo ? Radio : ListMusic}
            titulo={extras.folheto.titulo}
            detalhe={extras.folheto.ao_vivo ? "Ao vivo agora" : quandoDoRoteiro(extras.folheto)}
          />
        )}
        {extras?.evento?.evento_em && <Linha para={pagina} icone={CalendarDays} titulo={extras.evento.titulo} detalhe={dataDoEvento(extras.evento.evento_em)} />}
        {turma && (
          <Linha
            para={`${pagina}#inscricoes`}
            icone={UsersRound}
            titulo={`Inscrições abertas: ${turma.titulo}`}
            detalhe={extras.turmas.length > 1 ? `E mais ${extras.turmas.length - 1}` : ""}
          />
        )}
        {dados?.paroquia.aceita_intencoes && <Linha para={`${pagina}#intencoes`} icone={HandHeart} titulo="Pedir intenção de missa" detalhe="" />}
      </div>
      {dados?.avisos.map((a) => (
        <p key={a.id} className="rounded-xl bg-marca-fundo px-4 py-2.5 text-sm text-tinta">
          {a.texto}
        </p>
      ))}
    </div>
  );
}
