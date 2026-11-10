import { Link } from "react-router-dom";
import { BookOpenText, Church, Sparkles, CircleDot } from "lucide-react";
import { useDiaLiturgico } from "@/lib/useDiaLiturgico";
import { dataPorExtenso } from "@/liturgia/datas";
import { NOME_DA_COR, NOME_DO_GRAU, NOME_DO_TEMPO, type CorLiturgica } from "@/liturgia/calendario";
import { misteriosDoDia } from "@/liturgia/terco";
import { Cartao, TituloCartao, EmPreparacao } from "@/components/Cartao";
import type { TipoLeitura } from "@/liturgia/lecionario";
import { useLeituras } from "@/lib/useLeituras";

const COR_PONTO: Record<CorLiturgica, string> = {
  verde: "bg-[#2e7a4d]",
  roxo: "bg-[#64398f]",
  rosa: "bg-[#b4507a]",
  vermelho: "bg-[#a9271f]",
  branco: "bg-[#e6dcc8] ring-1 ring-[#c9a13b]",
};

const ROTULO_CURTO: Partial<Record<TipoLeitura, string>> = {
  primeira: "1ª leitura",
  salmo: "Salmo",
  segunda: "2ª leitura",
  evangelho: "Evangelho",
};

export default function Hoje() {
  const l = useDiaLiturgico();
  const terco = misteriosDoDia(l.data);
  const missas = useLeituras(l);
  const memoria = l.celebracao?.grau === "memoria" ? l.celebracao : null;
  const grau = l.celebracao && !memoria ? NOME_DO_GRAU[l.celebracao.grau] : "";
  const subtitulo = memoria
    ? `Memória de ${memoria.nome}`
    : [grau, l.celebracao ? NOME_DO_TEMPO[l.tempo] : ""].filter(Boolean).join(" · ");

  return (
    <div className="flex flex-col gap-4">
      <section className="rounded-3xl border border-borda-dia bg-dia p-6 text-sobre-dia shadow-sm">
        <p className="text-sm font-medium opacity-90">{dataPorExtenso(l.data)}</p>
        <h1 className="mt-2 font-leitura text-2xl font-semibold leading-snug sm:text-3xl">{l.titulo}</h1>
        {subtitulo && <p className="mt-2 text-sm font-medium opacity-90">{subtitulo}</p>}
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-black/10 px-3 py-1">Cor: {NOME_DA_COR[l.cor]}</span>
          <span className="rounded-full bg-black/10 px-3 py-1">Ano {l.cicloDominical}</span>
          <span className="rounded-full bg-black/10 px-3 py-1">Ano {l.cicloFerial === "I" ? "ímpar" : "par"}</span>
        </div>
      </section>

      <Cartao>
        <TituloCartao icone={BookOpenText}>Liturgia do dia</TituloCartao>
        {missas === null ? (
          <div className="mt-3 h-20 animate-pulse rounded-xl bg-marca-fundo" />
        ) : (
          <ul className="mt-3 grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-2">
            {(missas[0]?.leituras ?? [])
              .filter((x) => !x.ou && x.forma !== "breve" && x.tipo !== "aclamacao" && x.tipo !== "sequencia" && x.tipo !== "procissao")
              .map((x) => (
                <li key={x.tipo + x.referencia} className="col-span-2 grid grid-cols-subgrid items-baseline">
                  <span className="text-sm text-tinta-suave">{ROTULO_CURTO[x.tipo]}</span>
                  <span className={`font-leitura ${x.tipo === "evangelho" ? "font-semibold text-marca" : ""}`}>
                    {x.referencia}
                  </span>
                </li>
              ))}
          </ul>
        )}
        <Link
          to="/liturgia"
          className="mt-5 flex min-h-12 items-center justify-center rounded-xl border border-borda bg-papel px-4 font-semibold text-destaque-texto"
        >
          Ver a liturgia completa
        </Link>
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

      {l.santos.length > 0 && (
        <Cartao>
          <TituloCartao icone={Sparkles}>{l.santos.length > 1 ? "Santos do dia" : "Santo do dia"}</TituloCartao>
          <ul className="mt-3 flex flex-col divide-y divide-borda">
            {l.santos.map((s) => (
              <li key={s.nome} className="flex items-start gap-3 py-2.5 first:pt-0 last:pb-0">
                <span
                  className={`mt-1.5 size-2.5 shrink-0 rounded-full ${COR_PONTO[s.cor]}`}
                  aria-label={`Cor ${NOME_DA_COR[s.cor].toLowerCase()}`}
                />
                <span className="min-w-0 flex-1">
                  <span className="block font-leitura text-[1.05rem] font-semibold leading-snug text-marca">{s.nome}</span>
                  <span className="text-sm text-tinta-suave">{NOME_DO_GRAU[s.grau]}</span>
                </span>
              </li>
            ))}
          </ul>
        </Cartao>
      )}

      <Cartao>
        <div className="flex items-center justify-between gap-3">
          <TituloCartao icone={Church}>Minha paróquia</TituloCartao>
          <EmPreparacao />
        </div>
      </Cartao>
    </div>
  );
}
