import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, ChevronRight, Church, HandHeart, ListMusic, Radio, UsersRound } from "lucide-react";
import { usePreferencias } from "@/lib/preferencias";
import { carregarParoquia, proximoEvento, type ParoquiaCompleta, type Publicacao } from "@/paroquias/api";
import { emQuanto, hhmm, proximasOcorrencias } from "@/paroquias/horarios";
import { roteirosDaParoquia, type RoteiroDoTerco } from "@/roteiros/api";
import { quandoDoRoteiro } from "@/roteiros/roteiro";
import { turmasDaParoquia, type Turma } from "@/paroquias/plano";
import { dataDoEvento } from "@/components/Mural";

const TOLERANCIA = 15 * 60_000;

interface Extras {
  folheto: RoteiroDoTerco | null;
  evento: Publicacao | null;
  turmas: Turma[];
}

const LINHA_SOLTA = "flex min-h-16 items-center gap-3.5 rounded-2xl py-1.5 transition-colors hover:bg-cartao/70";
const DIA_CURTO = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];

function Linha({ para, icone: Icone, titulo, detalhe }: { para: string; icone: typeof Church; titulo: string; detalhe: string }) {
  return (
    <Link to={para} className={LINHA_SOLTA}>
      <span className="grid size-[3.25rem] shrink-0 place-items-center rounded-2xl bg-cartao text-tinta">
        <Icone className="size-[1.375rem]" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-bold leading-snug text-tinta">{titulo}</span>
        {detalhe && <span className="block text-[0.9375rem] text-tinta-suave">{detalhe}</span>}
      </span>
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
  const hora = proxima ? `${proxima.quando.getHours()}:${String(proxima.quando.getMinutes()).padStart(2, "0")}` : "";
  return (
    <section className="flex flex-col gap-1">
      <h2 className="titulo-secao mb-2 px-1">Minha paróquia</h2>
      <Link to={pagina} className={LINHA_SOLTA}>
        {proxima ? (
          <span className="flex size-[3.25rem] shrink-0 flex-col items-center justify-center rounded-2xl bg-primario leading-none text-sobre-primario">
            <span className="text-[0.625rem] font-bold tracking-wide">{DIA_CURTO[proxima.quando.getDay()]}</span>
            <span className="text-lg font-extrabold">{proxima.quando.getDate()}</span>
          </span>
        ) : (
          <span className="grid size-[3.25rem] shrink-0 place-items-center rounded-2xl bg-cartao text-tinta">
            <Church className="size-[1.375rem]" aria-hidden />
          </span>
        )}
        <span className="min-w-0 flex-1">
          <span className="block font-bold leading-snug text-tinta">{proxima ? `Missa às ${hhmm(hora)}` : dados?.paroquia.nome ?? minhaParoquiaNome}</span>
          <span className="block truncate text-[0.9375rem] text-tinta-suave">
            {proxima ? [dados?.paroquia.nome ?? minhaParoquiaNome, quanto].filter(Boolean).join(" · ") : "Horários e avisos"}
          </span>
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
      {dados?.avisos.map((a) => (
        <p key={a.id} className="mt-2 rounded-2xl bg-cartao px-4 py-3 text-[0.9375rem] text-tinta">
          {a.texto}
        </p>
      ))}
    </section>
  );
}
