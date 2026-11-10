import { Link } from "react-router-dom";
import { BookOpenText, Church, Sparkles, CircleDot } from "lucide-react";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { dataPorExtenso } from "@/liturgia/datas";
import { NOME_DA_COR, NOME_DO_TEMPO } from "@/liturgia/calendario";
import { misteriosDoDia } from "@/liturgia/terco";
import { Cartao, TituloCartao, EmPreparacao } from "@/components/Cartao";

export default function Hoje() {
  const l = useDiaLiturgico();
  const terco = misteriosDoDia(l.data);
  const semanaTitulo = l.celebracao && l.tempo !== "triduo" ? NOME_DO_TEMPO[l.tempo] : null;

  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-3xl bg-destaque p-6 text-sobre-destaque shadow-sm">
        <p className="text-sm font-medium opacity-90">{dataPorExtenso(l.data)}</p>
        <h1 className="mt-2 font-leitura text-2xl font-semibold leading-snug sm:text-3xl">{l.titulo}</h1>
        {semanaTitulo && <p className="mt-1 text-sm opacity-90">{semanaTitulo}</p>}
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-black/15 px-3 py-1">Cor: {NOME_DA_COR[l.cor]}</span>
          <span className="rounded-full bg-black/15 px-3 py-1">Ano {l.cicloDominical}</span>
          <span className="rounded-full bg-black/15 px-3 py-1">
            Semana {l.cicloFerial === "I" ? "ímpar (I)" : "par (II)"}
          </span>
        </div>
      </section>

      <Cartao>
        <div className="flex items-center justify-between gap-3">
          <TituloCartao icone={BookOpenText}>Liturgia do dia</TituloCartao>
          <EmPreparacao />
        </div>
        <p className="mt-3 text-tinta-suave">Leituras, salmo, evangelho e reflexão.</p>
      </Cartao>

      <Cartao>
        <TituloCartao icone={CircleDot}>Terço de hoje</TituloCartao>
        <p className="mt-3 font-leitura text-xl font-semibold text-marca">{terco.nome}</p>
        <ol className="mt-3 flex flex-col gap-2">
          {terco.misterios.map((m, i) => (
            <li key={m} className="flex gap-3">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-marca-fundo text-xs font-semibold text-destaque-texto">
                {i + 1}
              </span>
              <span>{m}</span>
            </li>
          ))}
        </ol>
        <Link
          to="/rezar/terco"
          className="mt-5 flex min-h-12 items-center justify-center rounded-xl bg-destaque px-4 font-semibold text-sobre-destaque"
        >
          Rezar o terço
        </Link>
      </Cartao>

      <Cartao>
        <div className="flex items-center justify-between gap-3">
          <TituloCartao icone={Sparkles}>Santo do dia</TituloCartao>
          <EmPreparacao />
        </div>
      </Cartao>

      <Cartao>
        <div className="flex items-center justify-between gap-3">
          <TituloCartao icone={Church}>Minha paróquia</TituloCartao>
          <EmPreparacao />
        </div>
      </Cartao>
    </div>
  );
}
