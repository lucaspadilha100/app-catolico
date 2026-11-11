import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { ChevronRight, Search } from "lucide-react";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import {
  NOME_DO_GRUPO,
  ORACOES,
  ORDEM_DOS_GRUPOS,
  buscarOracoes,
  ehTempoPascal,
  oracoesDoTempo,
  type Oracao,
} from "@/oracao/oracoes";
import { CHAVE_LINGUA, useGuardado, type Lingua } from "@/oracao/guardado";
import { Cartao, LINHA, LISTA, TituloPagina } from "@/components/Cartao";
import { EscolhaDeLingua, TextoDaOracao, linhasNaLingua } from "@/components/TextoDaOracao";
import { Voltar } from "@/components/Voltar";
import { NaoEncontrada } from "@/pages/Simples";

function ItemDeOracao({ o }: { o: Oracao }) {
  return (
    <Link
      to={`/rezar/oracoes/${o.id}`}
      className={LINHA}
    >
      <span className="min-w-0 flex-1">
        <span className="block font-leitura text-[1.05rem] font-medium text-marca">{o.nome}</span>
        {o.latim && <span className="block text-sm italic text-tinta-suave">{o.latim}</span>}
      </span>
      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
    </Link>
  );
}

export function Oracoes() {
  const { tempo } = useDiaLiturgico();
  const [params, setParams] = useSearchParams();
  const termo = params.get("q") ?? "";
  const setTermo = (v: string) => setParams(v ? { q: v } : {}, { replace: true });
  const todas = oracoesDoTempo(tempo);
  const achadas = buscarOracoes(todas, termo);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <Voltar para="/rezar">Rezar</Voltar>
        <TituloPagina>Orações</TituloPagina>
      </div>

      <label className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-cartao px-3 focus-within:border-destaque-texto">
        <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        <input
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          placeholder="Buscar oração"
          aria-label="Buscar oração"
          className="min-w-0 flex-1 bg-transparent py-2 outline-none placeholder:text-tinta-suave/70"
          type="search"
          enterKeyHint="search"
          autoComplete="off"
        />
      </label>

      {termo.trim() ? (
        achadas.length ? (
          <div className={LISTA}>
            {achadas.map((o) => (
              <ItemDeOracao key={o.id} o={o} />
            ))}
          </div>
        ) : (
          <p className="py-8 text-center text-tinta-suave">Nenhuma oração encontrada.</p>
        )
      ) : (
        ORDEM_DOS_GRUPOS.map((g) => {
          const doGrupo = todas.filter((o) => o.grupo === g);
          if (!doGrupo.length) return null;
          return (
            <section key={g}>
              <h2 className="titulo-secao mb-3 px-1">{NOME_DO_GRUPO[g]}</h2>
              <div className={LISTA}>
                {doGrupo.map((o) => (
                  <ItemDeOracao key={o.id} o={o} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}

export function Ladainhas() {
  const { tempo } = useDiaLiturgico();
  return (
    <div>
      <Voltar para="/rezar">Rezar</Voltar>
      <TituloPagina>Ladainhas</TituloPagina>
      <div className={LISTA}>
        {oracoesDoTempo(tempo)
          .filter((o) => o.grupo === "ladainhas")
          .map((o) => (
            <ItemDeOracao key={o.id} o={o} />
          ))}
      </div>
    </div>
  );
}

export function OracaoPagina() {
  const { id = "" } = useParams();
  const { tempo } = useDiaLiturgico();
  const [lingua, setLingua] = useGuardado<Lingua>(CHAVE_LINGUA, "pt");
  const o = ORACOES[id];

  if (!o) return <NaoEncontrada />;
  if (o.id === "angelus" && ehTempoPascal(tempo)) return <Navigate to="/rezar/oracoes/regina-caeli" replace />;

  const voltar = o.grupo === "ladainhas" ? { para: "/rezar/ladainhas", nome: "Ladainhas" } : { para: "/rezar/oracoes", nome: "Orações" };

  return (
    <div className="flex flex-col gap-4">
      <Voltar para={voltar.para}>{voltar.nome}</Voltar>

      <header>
        <h1 className="text-3xl font-extrabold leading-tight text-marca tracking-[-0.02em]">{o.nome}</h1>
        {o.latim && <p className="mt-1 font-leitura italic text-tinta-suave">{o.latim}</p>}
      </header>

      {o.la && (
        <div>
          <EscolhaDeLingua valor={lingua} onChange={setLingua} />
        </div>
      )}

      <Cartao>
        <div lang={lingua === "la" && o.la ? "la" : "pt-BR"}>
          <TextoDaOracao linhas={linhasNaLingua(o, lingua)} lingua={lingua} />
        </div>
      </Cartao>
    </div>
  );
}
