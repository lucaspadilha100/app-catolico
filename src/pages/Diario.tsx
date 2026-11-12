import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Check, Trash2 } from "lucide-react";
import { deIso, diaEMes, hoje, paraIso } from "@/liturgia/datas";
import { useCofre } from "@/confissao/useCofre";
import { Cartao } from "@/components/Cartao";
import { BotaoTrancar, PortaDoCofre } from "@/components/Cofre";
import { Cabecalho, Voltar } from "@/components/Devocao";

const dataLonga = (iso: string) => {
  const d = deIso(iso);
  return d ? `${diaEMes(d)} de ${d.getUTCFullYear()}` : "";
};

function Diario() {
  const { aberto, mudar } = useCofre();
  const [texto, setTexto] = useState("");
  const entradas = [...aberto!.conteudo.diario].sort((a, b) => b.data.localeCompare(a.data));
  const guardar = () => {
    if (!texto.trim()) return;
    mudar((c) => ({ ...c, diario: [...c.diario, { id: crypto.randomUUID(), data: paraIso(hoje()), texto: texto.trim() }] }));
    setTexto("");
  };
  return (
    <div className="flex flex-col gap-4">
      <Cartao className="flex flex-col gap-3">
        <p className="text-sm font-medium text-tinta-suave">{dataLonga(paraIso(hoje()))}</p>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={5}
          aria-label="Escrever no diário"
          className="w-full resize-y rounded-xl border border-borda bg-papel px-3 py-2 font-leitura text-[1.05rem]"
        />
        <button type="button" onClick={guardar} disabled={!texto.trim()} className="min-h-12 rounded-xl bg-primario font-semibold text-sobre-primario disabled:opacity-50">
          Guardar
        </button>
      </Cartao>
      {entradas.map((e) => (
        <Cartao key={e.id}>
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-medium text-tinta-suave">{dataLonga(e.data)}</p>
            <button
              type="button"
              onClick={() => window.confirm("Apagar este texto do diário?") && mudar((c) => ({ ...c, diario: c.diario.filter((x) => x.id !== e.id) }))}
              aria-label="Apagar"
              className="grid size-10 place-items-center rounded-xl text-tinta-suave"
            >
              <Trash2 className="size-4" aria-hidden />
            </button>
          </div>
          <p className="mt-1 whitespace-pre-line font-leitura text-[1.05rem] leading-[1.7] text-tinta">{e.texto}</p>
        </Cartao>
      ))}
    </div>
  );
}

function Propositos() {
  const { aberto, mudar } = useCofre();
  const [texto, setTexto] = useState("");
  const lista = aberto!.conteudo.propositos;
  const incluir = () => {
    if (!texto.trim()) return;
    mudar((c) => ({ ...c, propositos: [...c.propositos, { id: crypto.randomUUID(), texto: texto.trim(), origem: "livre", criadoEm: paraIso(hoje()), feito: false }] }));
    setTexto("");
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && incluir()}
          aria-label="Novo propósito"
          className="min-h-12 min-w-0 flex-1 rounded-xl border border-borda bg-papel px-3 text-base"
        />
        <button type="button" onClick={incluir} disabled={!texto.trim()} className="min-h-12 rounded-xl bg-primario px-4 font-semibold text-sobre-primario disabled:opacity-50">
          Incluir
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {lista.map((p) => (
          <li key={p.id} className="flex items-center gap-3 rounded-3xl bg-cartao px-3 py-2">
            <button
              type="button"
              onClick={() => mudar((c) => ({ ...c, propositos: c.propositos.map((x) => (x.id === p.id ? { ...x, feito: !x.feito } : x)) }))}
              aria-pressed={p.feito}
              aria-label={p.feito ? "Marcar como não cumprido" : "Marcar como cumprido"}
              className={`grid size-8 shrink-0 place-items-center rounded-md border-2 ${p.feito ? "border-primario bg-primario text-sobre-primario" : "border-borda"}`}
            >
              {p.feito && <Check className="size-5" aria-hidden />}
            </button>
            <span className={`min-w-0 flex-1 ${p.feito ? "text-tinta-suave line-through" : ""}`}>
              {p.texto}
              {p.origem === "confissao" && <span className="block text-xs text-tinta-suave">Da confissão de {dataLonga(p.criadoEm)}</span>}
            </span>
            <button
              type="button"
              onClick={() => mudar((c) => ({ ...c, propositos: c.propositos.filter((x) => x.id !== p.id) }))}
              aria-label="Apagar"
              className="grid size-10 place-items-center rounded-xl text-tinta-suave"
            >
              <Trash2 className="size-4" aria-hidden />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DiarioEspiritual() {
  const [params, setParams] = useSearchParams();
  const aba = params.get("aba") === "propositos" ? "propositos" : "diario";
  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/mais">Mais</Voltar>
      <div className="flex items-start justify-between gap-2">
        <Cabecalho titulo="Diário espiritual" />
      </div>
      <PortaDoCofre>
        <div className="flex items-center justify-between gap-2">
          <div className="inline-grid grid-cols-2 rounded-xl bg-cartao p-1" role="tablist">
            {(
              [
                ["diario", "Diário"],
                ["propositos", "Propósitos"],
              ] as const
            ).map(([valor, nome]) => (
              <button
                key={valor}
                type="button"
                role="tab"
                aria-selected={aba === valor}
                onClick={() => setParams(valor === "diario" ? {} : { aba: valor }, { replace: true })}
                className={`min-h-10 rounded-lg px-4 text-sm font-medium ${aba === valor ? "bg-primario text-sobre-primario" : "text-tinta-suave"}`}
              >
                {nome}
              </button>
            ))}
          </div>
          <BotaoTrancar />
        </div>
        {aba === "diario" ? <Diario /> : <Propositos />}
      </PortaDoCofre>
    </div>
  );
}
