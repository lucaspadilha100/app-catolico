import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { deIso, hoje, paraIso, somaDias, dataPorExtenso } from "@/liturgia/datas";
import { diaLiturgico, NOME_DA_COR, NOME_DO_GRAU } from "@/liturgia/calendario";
import { NOME_DA_LEITURA, type Leitura, type Missa } from "@/liturgia/lecionario";
import { useLeituras } from "@/lib/useLeituras";
import { textoDaReferencia, type Trecho } from "@/biblia/texto";
import { Cartao } from "@/components/Cartao";

function rotulo(l: Leitura): string {
  if (l.ou) return "ou";
  const nome = NOME_DA_LEITURA[l.tipo];
  if (l.forma === "breve") return "Forma breve";
  return nome;
}

function TextoDaLeitura({ canonica, poema }: { canonica: string; poema: boolean }) {
  const [trechos, setTrechos] = useState<Trecho[] | null>(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    let ativo = true;
    setTrechos(null);
    setErro(false);
    textoDaReferencia(canonica)
      .then((t) => ativo && setTrechos(t))
      .catch(() => ativo && setErro(true));
    return () => {
      ativo = false;
    };
  }, [canonica]);

  if (erro) return null;
  if (!trechos) return <div className="mt-2 h-16 animate-pulse rounded-lg bg-marca-fundo" />;
  const versiculos = trechos.flatMap((t) => t.versiculos);
  if (!versiculos.length) return null;

  return (
    <div className={`mt-2 font-leitura text-[1.05rem] leading-[1.8] text-tinta ${poema ? "flex flex-col gap-1" : "sm:text-justify"}`}>
      {versiculos.map((v) => (
        <span key={`${v.capitulo}:${v.versiculo}`} className={poema ? "block" : undefined}>
          <sup className="mr-1 align-[0.35em] font-sans text-[0.65em] font-semibold text-destaque-texto">{v.versiculo}</sup>
          {v.texto}{" "}
        </span>
      ))}
    </div>
  );
}

function ListaDeLeituras({ missa }: { missa: Missa }) {
  return (
    <ol className="flex flex-col">
      {missa.leituras.map((l, i) => (
        <li
          key={`${l.tipo}-${i}`}
          className={`flex flex-col gap-0.5 py-4 sm:flex-row sm:items-baseline sm:gap-4 ${
            l.ou || l.forma === "breve" ? "border-t-0 pt-0 pl-4 sm:pl-0" : "border-t border-borda first:border-t-0 first:pt-0"
          }`}
        >
          <span
            className={`text-xs font-semibold uppercase tracking-wide sm:w-48 sm:shrink-0 ${
              l.ou || l.forma === "breve" ? "text-tinta-suave" : "text-destaque-texto"
            }`}
          >
            {rotulo(l)}
          </span>
          <div className="min-w-0 flex-1">
            <span className={`font-leitura text-lg ${l.tipo === "evangelho" && !l.ou && l.forma !== "breve" ? "font-semibold text-marca" : ""}`}>
              {l.referencia}
            </span>
            {l.canonica && !l.ou && l.forma !== "breve" && l.tipo !== "aclamacao" && (
              <TextoDaLeitura canonica={l.canonica} poema={l.tipo === "salmo"} />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Liturgia() {
  const [params] = useSearchParams();
  const data = deIso(params.get("data") ?? "") ?? hoje();
  const iso = paraIso(data);
  const l = useMemo(() => diaLiturgico(deIso(iso)!), [iso]);
  const missas = useLeituras(l);

  const navegar = (dias: number) => {
    const alvo = paraIso(somaDias(data, dias));
    return alvo === paraIso(hoje()) ? "/liturgia" : `/liturgia?data=${alvo}`;
  };

  const grau = l.celebracao && l.celebracao.grau !== "memoria" ? NOME_DO_GRAU[l.celebracao.grau] : "";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <Link
          to={navegar(-1)}
          aria-label="Dia anterior"
          className="grid size-11 place-items-center rounded-xl border border-borda bg-cartao text-tinta-suave"
        >
          <ChevronLeft className="size-5" />
        </Link>
        <p className="text-center text-sm font-medium text-tinta-suave">{dataPorExtenso(data)}</p>
        <Link
          to={navegar(1)}
          aria-label="Dia seguinte"
          className="grid size-11 place-items-center rounded-xl border border-borda bg-cartao text-tinta-suave"
        >
          <ChevronRight className="size-5" />
        </Link>
      </div>

      <header className="px-1">
        <h1 className="font-leitura text-2xl font-semibold leading-snug text-marca sm:text-3xl">{l.titulo}</h1>
        <p className="mt-1 text-sm text-tinta-suave">
          {[l.celebracao?.grau === "memoria" ? `Memória de ${l.celebracao.nome}` : grau, `Cor: ${NOME_DA_COR[l.cor].toLowerCase()}`, `Ano ${l.cicloDominical}`]
            .filter(Boolean)
            .join(" · ")}
        </p>
      </header>

      {missas === null ? (
        <Cartao>
          <div className="h-40 animate-pulse rounded-xl bg-marca-fundo" />
        </Cartao>
      ) : (
        missas.map((m, i) => (
          <Cartao key={`${m.nome}-${i}`}>
            {m.nome && <h2 className="mb-3 font-leitura text-lg font-semibold text-marca">{m.nome}</h2>}
            <ListaDeLeituras missa={m} />
          </Cartao>
        ))
      )}
    </div>
  );
}
