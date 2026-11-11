import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { HandHeart } from "lucide-react";
import type { Horario, Paroquia } from "@/paroquias/tipos";
import { NOME_DO_DIA, hhmm, proximasOcorrencias } from "@/paroquias/horarios";
import { NOME_DA_SITUACAO, NOME_DO_TIPO, minhasIntencoesDeMissa, mudarSituacaoDaIntencao, pedirIntencao, type IntencaoDeMissa, type TipoDeIntencao } from "@/intencoesDeMissa/api";
import { Oferta, temOferta } from "@/components/PlanoDaParoquia";
import { Cartao } from "@/components/Cartao";

const CAMPO = "min-h-12 w-full min-w-0 rounded-xl border border-borda bg-papel px-3 text-base text-tinta outline-none focus:border-destaque-texto";
const BOTAO = "flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primario px-4 font-semibold text-sobre-primario disabled:opacity-50";
const BOTAO_CLARO = "flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-cartao px-4 font-semibold text-tinta";

const isoLocal = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export function nomeDaMissa(data: string, hora: string | null): string {
  const [a, m, d] = data.split("-").map(Number);
  return `${NOME_DO_DIA[new Date(a!, m! - 1, d!).getDay()]}, ${d}/${String(m).padStart(2, "0")}${hora ? ` às ${hhmm(hora.slice(0, 5))}` : ""}`;
}

export function IntencoesDeMissa({ p, horarios, email }: { p: Paroquia; horarios: Horario[]; email: string | null }) {
  const [aberto, setAberto] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [minhas, setMinhas] = useState<IntencaoDeMissa[]>([]);
  const [tipo, setTipo] = useState<TipoDeIntencao>("falecido");
  const [nome, setNome] = useState("");
  const [texto, setTexto] = useState("");
  const [pedidoPor, setPedidoPor] = useState("");
  const [missa, setMissa] = useState("");
  const [data, setData] = useState("");
  const [estado, setEstado] = useState<"" | "enviando" | "erro" | "limite">("");

  const missas = useMemo(
    () =>
      proximasOcorrencias(
        horarios.filter((h) => h.tipo === "missa"),
        new Date(),
        45,
      )
        .filter((o) => o.quando.getTime() > Date.now() + 2 * 3_600_000)
        .slice(0, 60)
        .map((o) => ({ valor: `${isoLocal(o.quando)}|${o.horario.hora.slice(0, 5)}`, nome: nomeDaMissa(isoLocal(o.quando), o.horario.hora) })),
    [horarios],
  );

  useEffect(() => {
    if (!email) return;
    minhasIntencoesDeMissa(p.id)
      .then(setMinhas)
      .catch(() => {});
  }, [p.id, email, enviado]);

  if (!p.aceita_intencoes) return null;

  async function enviar(e: FormEvent) {
    e.preventDefault();
    const [d, h] = missas.length ? missa.split("|") : [data, ""];
    setEstado("enviando");
    try {
      await pedirIntencao({ paroquia_id: p.id, tipo, nome: nome.trim(), texto: texto.trim(), data: d!, hora: h || null, pedido_por: pedidoPor.trim() });
      setEnviado(true);
      setAberto(false);
      setNome("");
      setTexto("");
      setEstado("");
    } catch (err) {
      setEstado(String(err).includes("limite") ? "limite" : "erro");
    }
  }

  const pode = nome.trim().length >= 2 && (missas.length ? !!missa : !!data);

  return (
    <section id="intencoes" className="flex scroll-mt-24 flex-col gap-3">
      <h2 className="titulo-secao px-1">Intenções de missa</h2>
      {minhas.length > 0 && (
        <Cartao className="flex flex-col gap-1 p-4">
          {minhas.map((i) => (
            <div key={i.id} className="flex items-center gap-3 py-1.5">
              <div className="min-w-0 flex-1">
                <p className="text-tinta">{`${NOME_DO_TIPO[i.tipo]}: ${i.nome}`}</p>
                <p className="text-sm text-tinta-suave">{`${nomeDaMissa(i.data, i.hora)} · ${NOME_DA_SITUACAO[i.situacao]}`}</p>
              </div>
              {i.situacao === "recebida" && (
                <button
                  type="button"
                  onClick={() => {
                    if (confirm("Cancelar este pedido?")) void mudarSituacaoDaIntencao(i.id, "cancelada").then(() => setMinhas(minhas.map((x) => (x.id === i.id ? { ...x, situacao: "cancelada" } : x))));
                  }}
                  className="min-h-10 shrink-0 rounded-full border border-borda px-3 text-sm font-medium text-tinta-suave"
                >
                  Cancelar
                </button>
              )}
            </div>
          ))}
        </Cartao>
      )}
      {enviado && (
        <Cartao className="flex flex-col gap-3 p-4">
          <p className="font-medium text-destaque-texto">Pedido enviado à secretaria.</p>
          {temOferta(p) && <Oferta p={p} />}
        </Cartao>
      )}
      {!email ? (
        <Link to="/conta" className={BOTAO_CLARO}>
          <HandHeart className="size-5" aria-hidden /> Entrar para pedir intenção de missa
        </Link>
      ) : aberto ? (
        <Cartao className="p-4">
          <form onSubmit={enviar} className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2" role="group" aria-label="Intenção">
              {(Object.keys(NOME_DO_TIPO) as TipoDeIntencao[]).map((t) => (
                <button key={t} type="button" aria-pressed={tipo === t} onClick={() => setTipo(t)} className={`min-h-11 rounded-xl border px-2 text-sm font-medium ${tipo === t ? "border-transparent bg-primario text-sobre-primario" : "border-borda bg-papel text-tinta"}`}>
                  {NOME_DO_TIPO[t]}
                </button>
              ))}
            </div>
            <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder={tipo === "acao_de_gracas" ? "Pelo quê ou por quem" : "Nome"} aria-label="Nome" maxLength={120} className={CAMPO} />
            <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder={tipo === "falecido" ? "7º dia, 1 ano de falecimento" : "Complemento"} aria-label="Complemento" maxLength={300} className={CAMPO} />
            {missas.length ? (
              <select value={missa} onChange={(e) => setMissa(e.target.value)} aria-label="Missa" className={CAMPO}>
                <option value="">Escolha a missa</option>
                {missas.map((m) => (
                  <option key={m.valor} value={m.valor}>
                    {m.nome}
                  </option>
                ))}
              </select>
            ) : (
              <input type="date" value={data} onChange={(e) => setData(e.target.value)} aria-label="Dia" className={CAMPO} />
            )}
            <input value={pedidoPor} onChange={(e) => setPedidoPor(e.target.value)} placeholder="Pedido por (família Silva)" aria-label="Pedido por" maxLength={80} className={CAMPO} />
            {estado === "limite" && <p className="text-sm text-[#a9271f]">Muitos pedidos hoje. Tente amanhã.</p>}
            {estado === "erro" && <p className="text-sm text-[#a9271f]">Não foi possível enviar agora. Tente de novo.</p>}
            <button type="submit" disabled={!pode || estado === "enviando"} className={BOTAO}>
              {estado === "enviando" ? "Enviando" : "Enviar pedido"}
            </button>
          </form>
        </Cartao>
      ) : (
        <button
          type="button"
          onClick={() => {
            setAberto(true);
            setEnviado(false);
          }}
          className={BOTAO_CLARO}
        >
          <HandHeart className="size-5" aria-hidden /> Pedir intenção de missa
        </button>
      )}
    </section>
  );
}
