import { useCallback, useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CalendarPlus, ChevronRight, Clock, Plus, Share2 } from "lucide-react";
import { useConta } from "@/conta/useConta";
import { Cartao } from "@/components/Cartao";
import { Cabecalho, Carregando, Voltar } from "@/components/Devocao";
import { NaoEncontrada } from "@/pages/Simples";
import { compartilhar, enderecoPublico } from "@/lib/nativo";
import { NOME_DO_DIA } from "@/paroquias/horarios";
import { correntePorCodigo, criarCorrente, encerrarCorrente, eventoDaAgenda, horariosDaCorrente, minhasCorrentes, pegarTurno, soltarTurno, turnoGuardado, type Corrente } from "@/correntes/api";

const CAMPO = "min-h-12 w-full min-w-0 rounded-xl border border-borda bg-papel px-3 text-base text-tinta outline-none focus:border-destaque-texto";
const BOTAO = "flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primario px-4 font-semibold text-sobre-primario disabled:opacity-50";
const BOTAO_CLARO = "flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-cartao px-4 font-semibold text-tinta disabled:opacity-50";
const TITULO = "px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto";
const CHAVE_DO_NOME = "santinho-meu-nome";

function Campo({ rotulo, children }: { rotulo: string; children: ReactNode }) {
  return (
    <label className="flex min-w-0 flex-col gap-1">
      <span className="text-sm font-medium text-tinta-suave">{rotulo}</span>
      {children}
    </label>
  );
}

const hora = (d: Date) => `${d.getHours()}h${d.getMinutes() ? String(d.getMinutes()).padStart(2, "0") : ""}`;
const diaDe = (d: Date) => `${NOME_DO_DIA[d.getDay()]}, ${d.getDate()}/${String(d.getMonth() + 1).padStart(2, "0")}`;
const linkDa = (codigo: string) => `${enderecoPublico()}/c/${codigo}`;

function lerNome(): string {
  try {
    return localStorage.getItem(CHAVE_DO_NOME) ?? "";
  } catch {
    return "";
  }
}

export function CorrenteAberta() {
  const { codigo = "" } = useParams();
  const [c, setC] = useState<Corrente | null | "nada">(null);
  const [nome, setNome] = useState(lerNome);
  const [escolhido, setEscolhido] = useState<string | null>(null);
  const [passados, setPassados] = useState(false);
  const [erro, setErro] = useState("");

  const recarregar = useCallback(() => {
    correntePorCodigo(codigo)
      .then((x) => setC(x ?? "nada"))
      .catch(() => setC("nada"));
  }, [codigo]);
  useEffect(recarregar, [recarregar]);

  const horarios = useMemo(() => (c && c !== "nada" ? horariosDaCorrente(c) : []), [c]);
  if (c === null) return <Carregando />;
  if (c === "nada") return <NaoEncontrada />;

  const agora = Date.now();
  const porHorario = new Map<number, Corrente["turnos"]>();
  for (const t of c.turnos) {
    const k = new Date(t.inicio).getTime();
    porHorario.set(k, [...(porHorario.get(k) ?? []), t]);
  }
  const futuros = horarios.filter((h) => h.getTime() + c.intervalo * 60_000 > agora);
  const cobertos = horarios.filter((h) => porHorario.has(h.getTime())).length;
  const vazios = futuros.filter((h) => !porHorario.has(h.getTime())).length;
  const mostrar = passados ? horarios : futuros;
  const dias = new Map<string, Date[]>();
  for (const h of mostrar) dias.set(diaDe(h), [...(dias.get(diaDe(h)) ?? []), h]);

  async function pegar(e: FormEvent, h: Date) {
    e.preventDefault();
    setErro("");
    try {
      localStorage.setItem(CHAVE_DO_NOME, nome.trim());
    } catch {}
    try {
      await pegarTurno(codigo, h.toISOString(), nome.trim());
      setEscolhido(null);
      recarregar();
    } catch (err) {
      setErro(String(err).includes("cheio") ? "Este horário já tem muita gente." : String(err).includes("passado") ? "Este horário já passou." : "Não foi possível agora. Tente de novo.");
    }
  }

  function agenda(h: Date) {
    const texto = eventoDaAgenda({ titulo: (c as Corrente).titulo, inicio: h, minutos: (c as Corrente).intervalo, link: linkDa(codigo) });
    void compartilhar({ titulo: "Agenda", imagem: { blob: new Blob([texto], { type: "text/calendar" }), nome: "oracao.ics" } });
  }

  return (
    <div className="flex flex-col gap-4">
      <Voltar para="/correntes">Relógio de oração</Voltar>
      <Cabecalho titulo={c.titulo} />
      {c.descricao && <p className="whitespace-pre-line font-leitura text-lg text-tinta">{c.descricao}</p>}
      <Cartao className="flex flex-col gap-2 p-4">
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-marca-fundo" role="progressbar" aria-valuenow={cobertos} aria-valuemax={horarios.length}>
          <div className="h-full rounded-full bg-destaque" style={{ width: `${horarios.length ? (cobertos / horarios.length) * 100 : 0}%` }} />
        </div>
        <p className="text-sm text-tinta-suave">{`${cobertos} de ${horarios.length} horários com alguém rezando${c.ativa && vazios ? ` · faltam ${vazios}` : ""}`}</p>
      </Cartao>
      <button type="button" onClick={() => void compartilhar({ titulo: c.titulo, texto: `Relógio de oração: ${c.titulo}. Escolha um horário para rezar:`, url: linkDa(codigo) })} className={BOTAO_CLARO}>
        <Share2 className="size-4" aria-hidden /> Convidar
      </button>
      {!c.ativa && <p className="font-medium text-tinta-suave">Corrente encerrada.</p>}
      {erro && <p className="text-sm text-[#a9271f]">{erro}</p>}
      {[...dias.entries()].map(([dia, lista]) => (
        <section key={dia} className="flex flex-col gap-1.5">
          <h2 className={TITULO}>{dia}</h2>
          <ul className="flex flex-col divide-y divide-borda overflow-hidden rounded-3xl bg-cartao">
            {lista.map((h) => {
              const k = h.getTime();
              const turnos = porHorario.get(k) ?? [];
              const meu = turnos.some((t) => t.meu) || turnoGuardado(codigo, h.toISOString());
              const agoraAqui = k <= agora && agora < k + c.intervalo * 60_000;
              const passou = k + c.intervalo * 60_000 <= agora;
              return (
                <li key={k} className={`flex flex-col gap-2 px-4 py-2.5 ${agoraAqui ? "bg-marca-fundo/70" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className={`w-14 shrink-0 font-semibold ${turnos.length ? "text-destaque-texto" : "text-tinta-suave"}`}>{hora(h)}</span>
                    <span className="min-w-0 flex-1 text-sm text-tinta">{turnos.length ? turnos.map((t) => t.nome).join(", ") : <span className="text-tinta-suave">{agoraAqui ? "Agora, sem ninguém" : "Ninguém ainda"}</span>}</span>
                    {!passou && c.ativa && !meu && escolhido !== String(k) && (
                      <button type="button" onClick={() => setEscolhido(String(k))} className="min-h-10 shrink-0 rounded-full bg-primario px-4 text-sm font-semibold text-sobre-primario">
                        Rezar
                      </button>
                    )}
                    {meu && !passou && (
                      <div className="flex shrink-0 gap-1">
                        <button type="button" onClick={() => agenda(h)} aria-label="Pôr na agenda" className="grid size-10 place-items-center rounded-full border border-borda text-destaque-texto">
                          <CalendarPlus className="size-4" aria-hidden />
                        </button>
                        <button type="button" onClick={() => void soltarTurno(codigo, h.toISOString()).then(recarregar)} className="min-h-10 rounded-full border border-borda px-3 text-sm font-medium text-tinta-suave">
                          Sair
                        </button>
                      </div>
                    )}
                  </div>
                  {escolhido === String(k) && (
                    <form onSubmit={(e) => void pegar(e, h)} className="flex gap-2">
                      <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" aria-label="Seu nome" maxLength={40} autoFocus className={CAMPO} />
                      <button type="submit" disabled={nome.trim().length < 2} className={`${BOTAO} shrink-0`}>
                        Confirmar
                      </button>
                    </form>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      {horarios.length > futuros.length && (
        <button type="button" onClick={() => setPassados(!passados)} className="min-h-11 text-sm font-medium text-tinta-suave">
          {passados ? "Esconder os que passaram" : "Mostrar os que passaram"}
        </button>
      )}
      {c.sou_dono && (
        <button type="button" onClick={() => void encerrarCorrente(codigo, !c.ativa).then(recarregar)} className="min-h-11 text-sm font-medium text-tinta-suave underline underline-offset-4">
          {c.ativa ? "Encerrar a corrente" : "Reabrir a corrente"}
        </button>
      )}
    </div>
  );
}

export function Correntes() {
  const { email, pronto } = useConta();
  const navegar = useNavigate();
  const [lista, setLista] = useState<Awaited<ReturnType<typeof minhasCorrentes>>>([]);
  const [novo, setNovo] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState(() => new Date().toLocaleDateString("sv-SE"));
  const [horaInicial, setHoraInicial] = useState(() => `${String(new Date().getHours() + 1).padStart(2, "0").replace("24", "00")}:00`);
  const [horas, setHoras] = useState(24);
  const [intervalo, setIntervalo] = useState(60);
  const [estado, setEstado] = useState("");

  useEffect(() => {
    if (email)
      minhasCorrentes()
        .then(setLista)
        .catch(() => {});
  }, [email]);

  async function criar(e: FormEvent) {
    e.preventDefault();
    setEstado("criando");
    try {
      const codigo = await criarCorrente({ titulo: titulo.trim(), descricao: descricao.trim(), inicio: new Date(`${data}T${horaInicial}`).toISOString(), horas, intervalo });
      navegar(`/c/${codigo}`);
    } catch {
      setEstado("erro");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Voltar para="/mais">Mais</Voltar>
      <Cabecalho titulo="Relógio de oração" />
      {!pronto ? (
        <Carregando />
      ) : !email ? (
        <Link to="/conta" className={BOTAO_CLARO}>
          Entrar para criar uma corrente
        </Link>
      ) : (
        <>
          {novo ? (
            <Cartao className="p-4">
              <form onSubmit={criar} className="flex flex-col gap-3">
                <Campo rotulo="Intenção">
                  <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Pela saúde de Dona Maria" maxLength={120} className={CAMPO} />
                </Campo>
                <Campo rotulo="Texto para quem vai rezar">
                  <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} rows={3} maxLength={1000} className={`${CAMPO} py-2`} />
                </Campo>
                <div className="grid grid-cols-2 gap-2">
                  <Campo rotulo="Começa">
                    <input type="date" value={data} onChange={(e) => setData(e.target.value)} className={CAMPO} />
                  </Campo>
                  <Campo rotulo="Hora">
                    <input type="time" step={900} value={horaInicial} onChange={(e) => setHoraInicial(e.target.value)} className={CAMPO} />
                  </Campo>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Campo rotulo="Duração">
                    <select value={horas} onChange={(e) => setHoras(Number(e.target.value))} className={CAMPO}>
                      {[
                        [12, "12 horas"],
                        [24, "24 horas"],
                        [48, "2 dias"],
                        [72, "3 dias"],
                        [168, "7 dias"],
                        [216, "9 dias"],
                        [720, "30 dias"],
                      ].map(([v, n]) => (
                        <option key={v} value={v}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </Campo>
                  <Campo rotulo="Cada turno">
                    <select value={intervalo} onChange={(e) => setIntervalo(Number(e.target.value))} className={CAMPO}>
                      <option value={15}>15 minutos</option>
                      <option value={30}>30 minutos</option>
                      <option value={60}>1 hora</option>
                    </select>
                  </Campo>
                </div>
                {estado === "erro" && <p className="text-sm text-[#a9271f]">Não foi possível criar agora. Tente de novo.</p>}
                <button type="submit" disabled={titulo.trim().length < 3 || !data || !horaInicial || estado === "criando"} className={BOTAO}>
                  Criar a corrente
                </button>
              </form>
            </Cartao>
          ) : (
            <button type="button" onClick={() => setNovo(true)} className={BOTAO}>
              <Plus className="size-5" aria-hidden /> Nova corrente de oração
            </button>
          )}
          {lista.length > 0 && (
            <section className="flex flex-col gap-2">
              <h2 className={TITULO}>Minhas correntes</h2>
              <ul className="flex flex-col divide-y divide-borda overflow-hidden rounded-3xl bg-cartao">
                {lista.map((x) => (
                  <li key={x.codigo}>
                    <Link to={`/c/${x.codigo}`} className="flex min-h-14 items-center gap-3 px-4 py-2">
                      <Clock className="size-5 shrink-0 text-destaque-texto" aria-hidden />
                      <span className="min-w-0 flex-1">
                        <span className="block font-medium text-tinta">{x.titulo}</span>
                        <span className="block text-sm text-tinta-suave">{x.ativa ? `${diaDe(new Date(x.inicio))} · ${x.horas} horas` : "Encerrada"}</span>
                      </span>
                      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </div>
  );
}
