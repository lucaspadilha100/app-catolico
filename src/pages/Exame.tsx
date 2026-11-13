import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, Plus } from "lucide-react";
import { diferencaEmDias, deIso, hoje, paraIso } from "@/liturgia/datas";
import type { Estado, Exame as TipoExame } from "@/confissao/tipos";
import { fuiMeConfessar } from "@/confissao/cofre";
import { carregarExame } from "@/confissao/conteudo";
import { useCofre } from "@/confissao/useCofre";
import { Cartao } from "@/components/Cartao";
import { BotaoTrancar, PortaDoCofre } from "@/components/Cofre";
import { Cabecalho, Carregando, Indisponivel, Voltar, useConteudo } from "@/components/Devocao";

const ESTADOS: { valor: Estado; nome: string }[] = [
  { valor: "crianca", nome: "Criança" },
  { valor: "jovem", nome: "Jovem" },
  { valor: "adulto", nome: "Adulto" },
  { valor: "casado", nome: "Casado(a)" },
];


function haQuanto(iso: string): string {
  const d = deIso(iso);
  if (!d) return "";
  const n = diferencaEmDias(hoje(), d);
  return n === 0 ? "hoje" : n === 1 ? "ontem" : `há ${n} dias`;
}

function FuiMeConfessar({ aoFechar }: { aoFechar: () => void }) {
  const { mudar } = useCofre();
  const [novos, setNovos] = useState<string[]>([""]);
  const confirmar = () => {
    mudar((c) => fuiMeConfessar(c, paraIso(hoje()), novos));
    aoFechar();
  };
  return (
    <Cartao className="flex flex-col gap-3">
      <h2 className="text-xl font-bold text-marca tracking-[-0.02em]">Fui me confessar</h2>
      <p className="text-tinta-suave">Os pecados marcados e as anotações serão apagados. Ficam os propósitos.</p>
      <p className="text-sm font-medium text-tinta">Propósitos desta confissão</p>
      {novos.map((t, i) => (
        <input
          key={i}
          value={t}
          onChange={(e) => setNovos(novos.map((x, j) => (j === i ? e.target.value : x)))}
          className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base"
          aria-label={`Propósito ${i + 1}`}
        />
      ))}
      <button type="button" onClick={() => setNovos([...novos, ""])} className="flex min-h-11 items-center gap-2 self-start text-sm font-medium text-destaque-texto">
        <Plus className="size-4" aria-hidden /> Outro propósito
      </button>
      <div className="grid grid-cols-2 gap-2">
        <button type="button" onClick={aoFechar} className="min-h-12 rounded-xl border border-borda bg-cartao font-semibold text-tinta-suave">
          Cancelar
        </button>
        <button type="button" onClick={confirmar} className="min-h-12 rounded-xl bg-primario font-semibold text-sobre-primario">
          Confirmar
        </button>
      </div>
    </Cartao>
  );
}

function ExameAberto({ exame }: { exame: TipoExame }) {
  const { aberto, mudar } = useCofre();
  const c = aberto!.conteudo;
  const [secao, setSecao] = useState<string | null>(null);
  const [resumo, setResumo] = useState(false);
  const [confessar, setConfessar] = useState(false);
  const estado = c.estado;

  const alternar = (id: string) =>
    mudar((x) => ({ ...x, marcados: x.marcados.includes(id) ? x.marcados.filter((m) => m !== id) : [...x.marcados, id] }));

  const todos = exame.secoes.flatMap((s) => s.itens.map((i) => ({ ...i, secao: s.titulo })));
  const marcados = todos.filter((i) => c.marcados.includes(i.id));
  const pendentes = c.propositos.filter((p) => !p.feito);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="text-tinta-suave">{c.ultimaConfissao ? `Última confissão: ${haQuanto(c.ultimaConfissao)}` : ""}</p>
        <BotaoTrancar />
      </div>

      {pendentes.length > 0 && (
        <Cartao>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">Seus propósitos</h2>
          <ul className="mt-2 flex flex-col gap-1">
            {pendentes.map((p) => (
              <li key={p.id} className="flex items-start gap-2">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-destaque" />
                <span>{p.texto}</span>
              </li>
            ))}
          </ul>
        </Cartao>
      )}

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="Estado de vida">
        {ESTADOS.map((e) => (
          <button
            key={e.valor}
            type="button"
            aria-pressed={estado === e.valor}
            onClick={() => mudar((x) => ({ ...x, estado: e.valor }))}
            className={`min-h-11 rounded-xl border px-2 text-sm font-medium ${
              estado === e.valor ? "border-transparent bg-primario text-sobre-primario" : "border-borda bg-cartao text-tinta"
            }`}
          >
            {e.nome}
          </button>
        ))}
      </div>

      {estado && (
        <div className="flex flex-col gap-2">
          {exame.secoes.map((s) => {
            const itens = s.itens.filter((i) => i.estados.includes(estado));
            const n = itens.filter((i) => c.marcados.includes(i.id)).length;
            const aberta = secao === s.id;
            return (
              <section key={s.id} className="rounded-3xl bg-cartao">
                <button type="button" onClick={() => setSecao(aberta ? null : s.id)} aria-expanded={aberta} className="flex min-h-16 w-full items-center gap-3 px-4 py-3 text-left">
                  <span className="min-w-0 flex-1">
                    <span className="block text-[1.05rem] font-bold text-marca tracking-[-0.02em]">{s.titulo}</span>
                    {s.subtitulo && <span className="block text-sm text-tinta-suave">{s.subtitulo}</span>}
                  </span>
                  {n > 0 && <span className="grid size-7 place-items-center rounded-full bg-primario text-sm font-semibold text-sobre-primario">{n}</span>}
                  <ChevronDown className={`size-5 shrink-0 text-tinta-suave transition-transform ${aberta ? "rotate-180" : ""}`} aria-hidden />
                </button>
                {aberta && (
                  <ul className="flex flex-col border-t border-borda">
                    {itens.map((i) => {
                      const marcado = c.marcados.includes(i.id);
                      return (
                        <li key={i.id}>
                          <button type="button" onClick={() => alternar(i.id)} aria-pressed={marcado} className="flex min-h-14 w-full items-start gap-3 px-4 py-3 text-left">
                            <span className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border-2 ${marcado ? "border-primario bg-primario text-sobre-primario" : "border-borda"}`}>
                              {marcado && <Check className="size-4" aria-hidden />}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block leading-snug">{i.texto}</span>
                              <span className="text-xs text-tinta-suave">CIC {i.cic}</span>
                              {i.id === "m5-propria-vida" && (
                                <span className="mt-1 block text-sm font-medium text-tinta">
                                  Se você pensa em tirar a própria vida, procure ajuda hoje: alguém de confiança, um padre ou um serviço de saúde.
                                </span>
                              )}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      )}

      {estado && (
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium text-tinta-suave">Anotações</span>
          <textarea
            value={c.anotacoes}
            onChange={(e) => mudar((x) => ({ ...x, anotacoes: e.target.value }))}
            rows={3}
            className="w-full resize-y rounded-xl border border-borda bg-papel px-3 py-2 text-base"
          />
        </label>
      )}

      {marcados.length > 0 && (
        <button type="button" onClick={() => setResumo(!resumo)} className="min-h-12 rounded-xl border border-borda bg-cartao font-semibold text-destaque-texto">
          {resumo ? "Fechar a lista" : `Ver o que marquei (${marcados.length})`}
        </button>
      )}
      {resumo && (
        <Cartao>
          <ol className="flex list-decimal flex-col gap-2 pl-5">
            {marcados.map((i) => (
              <li key={i.id}>{i.texto}</li>
            ))}
          </ol>
          {c.anotacoes.trim() && <p className="mt-3 whitespace-pre-line border-t border-borda pt-3 text-tinta">{c.anotacoes}</p>}
        </Cartao>
      )}

      {confessar ? (
        <FuiMeConfessar aoFechar={() => setConfessar(false)} />
      ) : (
        estado && (
          <button type="button" onClick={() => setConfessar(true)} className="min-h-14 rounded-2xl bg-primario text-lg font-semibold text-sobre-primario">
            Fui me confessar
          </button>
        )
      )}

      <Link to="/rezar/confissao" className="flex min-h-12 items-center justify-center rounded-xl border border-borda bg-papel font-semibold text-destaque-texto">
        Como se confessar
      </Link>
    </div>
  );
}

export default function Exame() {
  const exame = useConteudo(carregarExame, "exame");
  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/rezar">Rezar</Voltar>
      <Cabecalho titulo="Exame de consciência" />
      <PortaDoCofre>
        {exame === null ? <Carregando /> : exame === "erro" ? <Indisponivel /> : <ExameAberto exame={exame} />}
      </PortaDoCofre>
    </div>
  );
}

