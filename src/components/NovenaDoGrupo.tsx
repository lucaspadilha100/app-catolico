import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronRight } from "lucide-react";
import { NOVENAS } from "@/devocao/catalogo";
import { Cartao } from "@/components/Cartao";

const cliente = async () => (await import("@/lib/supabase")).supabase;

interface NovenaDoGrupoLinha {
  id: string;
  novena: string;
  dias: number;
  inicio: string;
  criado_por: string | null;
}

const hojeIso = () => new Date().toLocaleDateString("sv-SE");
const diaDaNovena = (inicio: string) => Math.floor((Date.parse(`${hojeIso()}T00:00:00Z`) - Date.parse(`${inicio}T00:00:00Z`)) / 86_400_000) + 1;

export function NovenaDoGrupo({ grupo, membros, eu }: { grupo: string; membros: { usuario_id: string; nome: string }[]; eu: string | null }) {
  const [n, setN] = useState<NovenaDoGrupoLinha | null | undefined>(undefined);
  const [feitos, setFeitos] = useState<{ usuario_id: string; dia: number }[]>([]);
  const [escolhendo, setEscolhendo] = useState(false);
  const [novena, setNovena] = useState(NOVENAS[0]!.id);

  const recarregar = useCallback(async () => {
    const c = await cliente();
    const r = await c.from("grupo_novenas").select("*").eq("grupo_id", grupo).order("inicio", { ascending: false }).limit(1);
    const atual = ((r.data ?? []) as NovenaDoGrupoLinha[])[0] ?? null;
    const valendo = atual && diaDaNovena(atual.inicio) <= atual.dias + 3 ? atual : null;
    setN(valendo);
    if (valendo) {
      const d = await c.from("grupo_novena_dias").select("usuario_id, dia").eq("grupo_novena_id", valendo.id).limit(2000);
      setFeitos((d.data ?? []) as { usuario_id: string; dia: number }[]);
    }
  }, [grupo]);

  useEffect(() => {
    void recarregar().catch(() => setN(null));
  }, [recarregar]);

  async function comecar() {
    const c = await cliente();
    const escolhida = NOVENAS.find((x) => x.id === novena)!;
    await c.from("grupo_novenas").insert({ grupo_id: grupo, novena: escolhida.id, dias: escolhida.dias, inicio: hojeIso(), criado_por: eu });
    setEscolhendo(false);
    await recarregar();
  }

  async function marcar(dia: number, feito: boolean) {
    if (!n || !eu) return;
    const c = await cliente();
    if (feito) await c.from("grupo_novena_dias").delete().eq("grupo_novena_id", n.id).eq("usuario_id", eu).eq("dia", dia);
    else await c.from("grupo_novena_dias").insert({ grupo_novena_id: n.id, dia });
    await recarregar();
  }

  if (n === undefined) return null;

  if (!n)
    return escolhendo ? (
      <Cartao className="flex flex-col gap-3 p-4">
        <select value={novena} onChange={(e) => setNovena(e.target.value)} aria-label="Novena" className="min-h-12 w-full rounded-xl border border-borda bg-papel px-3 text-base text-tinta">
          {NOVENAS.map((x) => (
            <option key={x.id} value={x.id}>
              {x.nome}
            </option>
          ))}
        </select>
        <button type="button" onClick={() => void comecar()} className="min-h-12 rounded-xl bg-primario font-semibold text-sobre-primario">
          Começar hoje
        </button>
      </Cartao>
    ) : (
      <button type="button" onClick={() => setEscolhendo(true)} className="min-h-12 rounded-xl border border-borda bg-cartao font-semibold text-tinta">
        Rezar uma novena juntos
      </button>
    );

  const info = NOVENAS.find((x) => x.id === n.novena);
  const hoje = Math.min(diaDaNovena(n.inicio), n.dias);
  const fiz = (u: string, d: number) => feitos.some((f) => f.usuario_id === u && f.dia === d);
  const euFizHoje = !!eu && fiz(eu, hoje);
  const hojeQuantos = new Set(feitos.filter((f) => f.dia === hoje).map((f) => f.usuario_id)).size;

  return (
    <Cartao className="flex flex-col gap-3 p-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">{`Novena do grupo · dia ${hoje} de ${n.dias}`}</p>
        <p className="text-lg font-bold text-marca tracking-[-0.02em]">{info?.nome ?? n.novena}</p>
        <p className="text-sm text-tinta-suave">{hojeQuantos === 1 ? "1 pessoa rezou hoje" : `${hojeQuantos} pessoas rezaram hoje`}</p>
      </div>
      <Link to={`/rezar/novenas/${n.novena}`} className="flex min-h-11 items-center justify-between rounded-xl border border-borda px-4 font-medium text-tinta">
        Rezar o dia {hoje} <ChevronRight className="size-5 text-tinta-suave" aria-hidden />
      </Link>
      <button
        type="button"
        onClick={() => void marcar(hoje, euFizHoje)}
        aria-pressed={euFizHoje}
        className={`flex min-h-12 items-center justify-center gap-2 rounded-xl font-semibold ${euFizHoje ? "border border-borda text-destaque-texto" : "bg-primario text-sobre-primario"}`}
      >
        {euFizHoje && <Check className="size-5" aria-hidden />}
        {euFizHoje ? "Rezei hoje" : `Rezei o dia ${hoje}`}
      </button>
      <ul className="flex flex-col gap-1.5">
        {membros.map((m) => (
          <li key={m.usuario_id} className="flex items-center gap-2">
            <span className="w-24 shrink-0 truncate text-sm text-tinta">{m.nome}</span>
            <span className="flex flex-1 flex-wrap gap-1">
              {Array.from({ length: n.dias }, (_, i) => (
                <span key={i} className={`size-3.5 rounded-full ${fiz(m.usuario_id, i + 1) ? "bg-destaque" : i + 1 <= hoje ? "border border-borda" : "bg-marca-fundo"}`} aria-hidden />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </Cartao>
  );
}
