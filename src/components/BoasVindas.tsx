import { useEffect, useState } from "react";
import { Check, ChevronRight, LocateFixed, Search } from "lucide-react";
import { usePreferencias, type Letra } from "@/lib/preferencias";
import { cidadesComParoquias, procurarParoquias, type Cidade } from "@/paroquias/api";
import type { ParoquiaResumo } from "@/paroquias/tipos";
import { useLocal } from "@/paroquias/useLocal";
import { LISTA } from "@/components/Cartao";
import { NOME_DO_APP } from "@/marca";

const BOTAO = "flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primario px-5 text-lg font-semibold text-sobre-primario disabled:opacity-50";
const CAMPO = "flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-cartao px-3 focus-within:border-destaque-texto";

function PassoLetra({ seguir }: { seguir: () => void }) {
  const { preferencias, mudar } = usePreferencias();
  return (
    <>
      <h2 className="text-3xl font-extrabold text-marca tracking-[-0.02em]">Tamanho da letra</h2>
      <div className="flex flex-col gap-2">
        {(
          [
            ["normal", "Normal", "text-base"],
            ["grande", "Grande", "text-lg"],
            ["maior", "Maior", "text-xl"],
          ] as const
        ).map(([v, nome, tam]) => (
          <button
            key={v}
            type="button"
            aria-pressed={preferencias.letra === v}
            onClick={() => mudar({ letra: v as Letra })}
            className={`flex min-h-16 items-center gap-3 rounded-2xl border px-5 text-left ${preferencias.letra === v ? "border-destaque-texto bg-marca-fundo" : "border-borda bg-cartao"}`}
          >
            <span className={`min-w-0 flex-1 font-leitura ${tam} text-tinta`}>{nome}: Pai nosso, que estais nos céus</span>
            {preferencias.letra === v && <Check className="size-5 shrink-0 text-destaque-texto" aria-hidden />}
          </button>
        ))}
      </div>
      <button type="button" onClick={seguir} className={BOTAO}>
        Continuar <ChevronRight className="size-6" aria-hidden />
      </button>
    </>
  );
}

function PassoCidade({ seguir, aoEscolher }: { seguir: () => void; aoEscolher: (c: Cidade | "perto") => void }) {
  const { mudar, preferencias } = usePreferencias();
  const { local, estado, pedir } = useLocal();
  const [termo, setTermo] = useState("");
  const [achadas, setAchadas] = useState<Cidade[]>([]);

  useEffect(() => {
    const t = termo.trim();
    if (t.length < 2) {
      setAchadas([]);
      return;
    }
    let ativo = true;
    const espera = setTimeout(() => {
      cidadesComParoquias({ termo: t, limite: 6 })
        .then((r) => ativo && setAchadas(r))
        .catch(() => {});
    }, 250);
    return () => {
      ativo = false;
      clearTimeout(espera);
    };
  }, [termo]);

  useEffect(() => {
    if (local && estado === "parado") aoEscolher("perto");
  }, [local, estado]);

  const escolher = (c: Cidade) => {
    const k = `${c.cidade}|${c.uf}`;
    mudar({ cidadeDasMissas: k, cidadesRecentes: [k, ...preferencias.cidadesRecentes.filter((x) => x !== k)].slice(0, 4) });
    aoEscolher(c);
  };

  return (
    <>
      <h2 className="text-3xl font-extrabold text-marca tracking-[-0.02em]">Sua cidade</h2>
      <button type="button" onClick={pedir} disabled={estado === "buscando"} className={BOTAO}>
        <LocateFixed className="size-5" aria-hidden /> {estado === "buscando" ? "Procurando" : "Perto de mim"}
      </button>
      {estado === "negado" && <p className="text-center text-sm text-tinta-suave">A localização está bloqueada para este app.</p>}
      <label className={CAMPO}>
        <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        <input value={termo} onChange={(e) => setTermo(e.target.value)} placeholder="Procurar cidade" aria-label="Procurar cidade" autoComplete="off" className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-tinta-suave/70" />
      </label>
      {achadas.length > 0 && (
        <div className={LISTA}>
          {achadas.map((c) => (
            <button key={`${c.cidade}-${c.uf}`} type="button" onClick={() => escolher(c)} className="flex min-h-12 items-center gap-2 px-4 text-left">
              <span className="flex-1 font-medium text-tinta">
                {c.cidade}, {c.uf}
              </span>
              <span className="text-sm text-tinta-suave">{c.total === 1 ? "1 igreja" : `${c.total} igrejas`}</span>
            </button>
          ))}
        </div>
      )}
      <button type="button" onClick={seguir} className="min-h-12 font-medium text-tinta-suave">
        Pular
      </button>
    </>
  );
}

function PassoParoquia({ onde, terminar }: { onde: Cidade | "perto" | null; terminar: () => void }) {
  const { mudar } = usePreferencias();
  const { local } = useLocal();
  const [termo, setTermo] = useState("");
  const [lista, setLista] = useState<ParoquiaResumo[] | null>(null);

  useEffect(() => {
    let ativo = true;
    const espera = setTimeout(
      () => {
        procurarParoquias({
          termo: termo.trim(),
          cidade: onde && onde !== "perto" ? onde : null,
          local: onde === "perto" ? local : null,
          raioKm: onde === "perto" ? 15 : 5000,
          limite: 100,
        })
          .then((r) => {
            if (!ativo) return;
            const matriz = (p: ParoquiaResumo) => (p.tipo === "capela" || p.tipo === "comunidade" ? 1 : 0);
            setLista([...r].sort((a, b) => matriz(a) - matriz(b)).slice(0, 8));
          })
          .catch(() => ativo && setLista([]));
      },
      termo ? 300 : 0,
    );
    return () => {
      ativo = false;
      clearTimeout(espera);
    };
  }, [termo, onde, local]);

  return (
    <>
      <h2 className="text-3xl font-extrabold text-marca tracking-[-0.02em]">Sua paróquia</h2>
      <label className={CAMPO}>
        <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        <input value={termo} onChange={(e) => setTermo(e.target.value)} placeholder="Igreja, padroeiro ou bairro" aria-label="Procurar paróquia" autoComplete="off" className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-tinta-suave/70" />
      </label>
      {lista && lista.length > 0 && (
        <div className={LISTA}>
          {lista.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                mudar({ minhaParoquia: p.id, minhaParoquiaNome: p.nome });
                terminar();
              }}
              className="flex min-h-14 flex-col justify-center px-4 py-2 text-left"
            >
              <span className="font-leitura font-medium leading-snug text-marca">{p.nome}</span>
              <span className="text-sm text-tinta-suave">{[p.bairro, p.cidade].filter(Boolean).join(" · ")}</span>
            </button>
          ))}
        </div>
      )}
      <button type="button" onClick={terminar} className="min-h-12 font-medium text-tinta-suave">
        Pular
      </button>
    </>
  );
}

export function BoasVindas() {
  const { preferencias, mudar } = usePreferencias();
  const [passo, setPasso] = useState(0);
  const [onde, setOnde] = useState<Cidade | "perto" | null>(null);
  if (preferencias.boasVindas) return null;
  const terminar = () => mudar({ boasVindas: true });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-papel md:left-60" role="dialog" aria-modal="true" aria-label={`Boas-vindas: ${NOME_DO_APP}`}>
      <div className="mx-auto flex min-h-full w-full max-w-md flex-col gap-5 px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(2.5rem,env(safe-area-inset-top))]">
        <div className="flex items-center justify-between">
          <span className="simbolo w-10 text-destaque-texto" aria-hidden />
          <button type="button" onClick={terminar} className="min-h-11 px-2 font-medium text-tinta-suave">
            Pular tudo
          </button>
        </div>
        <div className="flex gap-1.5" aria-label={`Passo ${passo + 1} de 3`}>
          {[0, 1, 2].map((i) => (
            <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= passo ? "bg-destaque" : "bg-marca-fundo"}`} />
          ))}
        </div>
        {passo === 0 && <PassoLetra seguir={() => setPasso(1)} />}
        {passo === 1 && (
          <PassoCidade
            seguir={() => setPasso(2)}
            aoEscolher={(c) => {
              setOnde(c);
              setPasso(2);
            }}
          />
        )}
        {passo === 2 && <PassoParoquia onde={onde} terminar={terminar} />}
      </div>
    </div>
  );
}
