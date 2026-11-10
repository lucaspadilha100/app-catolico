import { useState } from "react";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { MISTERIOS, misteriosDoDia, type GrupoDeMisterios } from "@/liturgia/terco";
import { Cartao, TituloPagina } from "@/components/Cartao";

const ORDEM: GrupoDeMisterios[] = ["gozosos", "luminosos", "dolorosos", "gloriosos"];

export default function Terco() {
  const l = useDiaLiturgico();
  const doDia = misteriosDoDia(l.data).grupo;
  const [grupo, setGrupo] = useState<GrupoDeMisterios>(doDia);
  const m = MISTERIOS[grupo];

  return (
    <div>
      <TituloPagina>Terço</TituloPagina>

      <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4" role="tablist">
        {ORDEM.map((g) => (
          <button
            key={g}
            role="tab"
            aria-selected={g === grupo}
            onClick={() => setGrupo(g)}
            className={`min-h-11 rounded-xl border px-3 text-sm font-medium ${
              g === grupo
                ? "border-transparent bg-destaque text-sobre-destaque"
                : "border-borda bg-cartao text-tinta-suave"
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
              <span className="pt-0.5">{nome}</span>
            </li>
          ))}
        </ol>
      </Cartao>
    </div>
  );
}
