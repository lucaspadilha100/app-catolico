import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { MISTERIOS, misteriosDoDia, type GrupoDeMisterios } from "@/liturgia/terco";
import { formatarReferencia } from "@/liturgia/lecionario";
import { MEDITACOES, passosDaMisericordia, passosDeSaoMiguel, passosDoRosario, type Passo } from "@/oracao/terco";
import { andamentoMaisRecente, guardarAndamento, lerAndamento } from "@/oracao/guardado";
import { Cartao, TituloPagina } from "@/components/Cartao";
import { InicioDoTerco, TercoGuiado } from "@/components/TercoGuiado";

const ORDEM: GrupoDeMisterios[] = ["gozosos", "luminosos", "dolorosos", "gloriosos"];

const ehGrupo = (g: string | null): g is GrupoDeMisterios => ORDEM.includes(g as GrupoDeMisterios);

const ondeParou = (passos: Passo[], indice: number, nome: string) => {
  const secao = passos[indice]?.secao ?? "";
  return secao === "Início" || secao === "Final" ? nome : secao;
};

export default function Terco() {
  const l = useDiaLiturgico();
  const doDia = misteriosDoDia(l.data).grupo;
  const [params, setParams] = useSearchParams();
  const pedido = params.get("m");
  const grupo = ehGrupo(pedido) ? pedido : doDia;
  const passos = useMemo(() => passosDoRosario(grupo), [grupo]);
  const m = MISTERIOS[grupo];

  const parametros = (g: GrupoDeMisterios, rezar = false) => ({
    ...(g === doDia ? {} : { m: g }),
    ...(rezar ? { rezar: "1" } : {}),
  });

  if (params.get("rezar") === "1") {
    return (
      <TercoGuiado
        key={grupo}
        chave={`rosario-${grupo}`}
        tipo="rosario"
        titulo={m.nome}
        passos={passos}
        aoSair={() => setParams(parametros(grupo))}
      />
    );
  }

  const recente = andamentoMaisRecente("rosario-");
  const grupoRecente = recente?.[0].slice("rosario-".length) ?? null;
  const continuar =
    recente && ehGrupo(grupoRecente)
      ? {
          rotulo: "Continuar de onde parei",
          detalhe: ondeParou(passosDoRosario(grupoRecente), recente[1].passo, MISTERIOS[grupoRecente].nome),
          acao: () => setParams(parametros(grupoRecente, true)),
        }
      : null;

  return (
    <div>
      <TituloPagina>Terço</TituloPagina>
      <InicioDoTerco
        tipo="rosario"
        continuar={continuar}
        aoComecar={() => {
          guardarAndamento(`rosario-${grupo}`, null);
          setParams(parametros(grupo, true));
        }}
      >
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="tablist">
          {ORDEM.map((g) => (
            <button
              key={g}
              role="tab"
              aria-selected={g === grupo}
              onClick={() => setParams(parametros(g), { replace: true })}
              className={`min-h-12 rounded-xl border px-3 text-sm font-medium ${
                g === grupo ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta-suave"
              }`}
            >
              {MISTERIOS[g].nome.replace("Mistérios ", "")}
              {g === doDia && <span className="block text-[0.7rem] font-normal opacity-80">hoje</span>}
            </button>
          ))}
        </div>

        <Cartao>
          <h2 className="font-leitura text-xl font-semibold text-marca">{m.nome}</h2>
          <ol className="mt-4 flex flex-col gap-3">
            {m.misterios.map((nome, i) => (
              <li key={nome} className="flex gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-marca-fundo text-sm font-semibold text-destaque-texto">
                  {i + 1}
                </span>
                <span className="pt-0.5">
                  {nome}
                  <span className="block text-sm text-tinta-suave">
                    {formatarReferencia(MEDITACOES.misterios[grupo][i]!.referencia, {})}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </Cartao>
      </InicioDoTerco>
    </div>
  );
}

function TercoSimples({ tipo, titulo, passos }: { tipo: string; titulo: string; passos: Passo[] }) {
  const [params, setParams] = useSearchParams();

  if (params.get("rezar") === "1") {
    return <TercoGuiado chave={tipo} tipo={tipo} titulo={titulo} passos={passos} aoSair={() => setParams({})} />;
  }

  const andamento = lerAndamento(tipo);
  return (
    <div>
      <TituloPagina>{titulo}</TituloPagina>
      <InicioDoTerco
        tipo={tipo}
        continuar={
          andamento
            ? {
                rotulo: "Continuar de onde parei",
                detalhe: ondeParou(passos, andamento.passo, titulo),
                acao: () => setParams({ rezar: "1" }),
              }
            : null
        }
        aoComecar={() => {
          guardarAndamento(tipo, null);
          setParams({ rezar: "1" });
        }}
      />
    </div>
  );
}

export function TercoDaMisericordia() {
  const passos = useMemo(passosDaMisericordia, []);
  return <TercoSimples tipo="misericordia" titulo="Terço da Misericórdia" passos={passos} />;
}

export function TercoDeSaoMiguel() {
  const passos = useMemo(passosDeSaoMiguel, []);
  return <TercoSimples tipo="sao-miguel" titulo="Terço de São Miguel" passos={passos} />;
}
