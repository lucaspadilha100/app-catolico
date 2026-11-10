import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { BadgeCheck, ChevronRight, Globe, Heart, AtSign, LocateFixed, Mail, MapPin, MessageCircle, Navigation, Pencil, Phone, Plus, Search } from "lucide-react";
import { usePreferencias } from "@/lib/preferencias";
import { useConta } from "@/conta/useConta";
import { agendaPerto, buscarParoquias, carregarParoquia, enviarSugestao, type ParoquiaCompleta } from "@/paroquias/api";
import { agoraLocal, descreverSemanas, hhmm, NOME_DO_DIA, proximasOcorrencias, quandoPorExtenso } from "@/paroquias/horarios";
import { NOME_DO_TIPO_DE_HORARIO, NOME_DO_TIPO_DE_IGREJA, type Horario, type ItemDaAgenda, type ParoquiaResumo, type TipoDeHorario } from "@/paroquias/tipos";
import { useLocal } from "@/paroquias/useLocal";
import { Cartao, TituloCartao, TituloPagina } from "@/components/Cartao";
import { Cabecalho, Carregando, Indisponivel, Voltar } from "@/components/Devocao";
import { NaoEncontrada } from "@/pages/Simples";

const TIPOS: TipoDeHorario[] = ["missa", "confissao", "adoracao"];
const QUANDO = [
  ["agora", "Agora"],
  ["hoje", "Hoje"],
  ["domingo", "Domingo"],
] as const;
type Quando = (typeof QUANDO)[number][0];

const km = (d: number | null) => (d === null ? "" : d < 1 ? `${Math.round(d * 1000)} m` : `${d.toFixed(1).replace(".", ",")} km`);

function janela(quando: Quando, agora: Date): { inicio: Date; horas: number } {
  if (quando === "agora") return { inicio: agora, horas: 12 };
  if (quando === "hoje") return { inicio: agora, horas: Math.max(1, 24 - agora.getHours()) };
  const falta = (7 - agora.getDay()) % 7;
  const domingo = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + falta);
  return { inicio: falta === 0 ? agora : domingo, horas: falta === 0 ? Math.max(1, 24 - agora.getHours()) : 24 };
}

function useParametro(chave: string, padrao = ""): [string, (v: string) => void] {
  const [params, setParams] = useSearchParams();
  const valor = params.get(chave) ?? padrao;
  const mudar = (v: string) => {
    const p = new URLSearchParams(params);
    if (v && v !== padrao) p.set(chave, v);
    else p.delete(chave);
    setParams(p, { replace: true });
  };
  return [valor, mudar];
}

function Chips<T extends string>({ opcoes, valor, onChange }: { opcoes: readonly (readonly [T, string])[]; valor: T; onChange: (v: T) => void }) {
  return (
    <div className="flex flex-wrap gap-2" role="group">
      {opcoes.map(([v, nome]) => (
        <button
          key={v}
          type="button"
          aria-pressed={v === valor}
          onClick={() => onChange(v)}
          className={`min-h-10 rounded-full border px-4 text-sm font-medium ${v === valor ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta"}`}
        >
          {nome}
        </button>
      ))}
    </div>
  );
}

function ItemDeParoquia({ p }: { p: ParoquiaResumo }) {
  return (
    <Link to={`/missas/paroquia/${p.id}`} className="flex min-h-16 items-center gap-3 rounded-xl border border-borda bg-cartao px-4 py-3 transition-colors hover:border-destaque-texto/40">
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 font-leitura text-[1.05rem] font-medium leading-snug text-marca">
          {p.nome}
          {p.verificada && <BadgeCheck className="size-4 shrink-0 text-destaque-texto" aria-label="Verificada" />}
        </span>
        <span className="block text-sm text-tinta-suave">{[p.bairro, p.cidade, km(p.distancia_km)].filter(Boolean).join(" · ")}</span>
      </span>
      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
    </Link>
  );
}

function Agenda({ itens }: { itens: ItemDaAgenda[] }) {
  const agora = new Date();
  return (
    <ul className="flex flex-col divide-y divide-borda rounded-2xl border border-borda bg-cartao">
      {itens.map((i) => {
        const q = new Date(i.quando.replace(" ", "T"));
        return (
          <li key={`${i.paroquia_id}-${i.quando}`}>
            <Link to={`/missas/paroquia/${i.paroquia_id}`} className="flex min-h-14 items-center gap-3 px-4 py-2.5">
              <span className="w-24 shrink-0 font-semibold text-destaque-texto">{quandoPorExtenso(q, agora)}</span>
              <span className="min-w-0 flex-1">
                <span className="block font-leitura leading-snug text-marca">{i.nome}</span>
                <span className="block text-sm text-tinta-suave">{[i.observacao, i.bairro, km(i.distancia_km)].filter(Boolean).join(" · ")}</span>
              </span>
              <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function MinhaParoquia() {
  const { minhaParoquia, minhaParoquiaNome } = usePreferencias().preferencias;
  const [dados, setDados] = useState<ParoquiaCompleta | null>(null);
  useEffect(() => {
    if (!minhaParoquia) return;
    let ativo = true;
    carregarParoquia(minhaParoquia)
      .then((d) => ativo && setDados(d))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [minhaParoquia]);
  if (!minhaParoquia) return null;
  const agora = new Date();
  const proximas = dados ? proximasOcorrencias(dados.horarios.filter((h) => h.tipo === "missa"), agora, 7).slice(0, 3) : [];
  return (
    <Cartao>
      <TituloCartao icone={Heart}>Minha paróquia</TituloCartao>
      <Link to={`/missas/paroquia/${minhaParoquia}`} className="mt-2 block font-leitura text-xl font-semibold text-marca">
        {dados?.paroquia.nome ?? minhaParoquiaNome}
      </Link>
      {proximas.length > 0 && (
        <ul className="mt-2 flex flex-col gap-1">
          {proximas.map((o) => (
            <li key={o.horario.id + o.quando.toISOString()} className="text-tinta">
              Missa: {quandoPorExtenso(o.quando, agora)}
              {o.horario.observacao && <span className="text-tinta-suave"> · {o.horario.observacao}</span>}
            </li>
          ))}
        </ul>
      )}
      {dados?.avisos.map((a) => (
        <p key={a.id} className="mt-3 rounded-xl bg-marca-fundo px-3 py-2 text-sm text-tinta">
          {a.texto}
        </p>
      ))}
    </Cartao>
  );
}

export function Missas() {
  const [termo, setTermo] = useParametro("q");
  const [tipo, setTipo] = useParametro("tipo", "missa");
  const [quando, setQuando] = useParametro("quando", "agora");
  const { local, estado, pedir } = useLocal();
  const [agenda, setAgenda] = useState<ItemDaAgenda[] | null | "erro">(null);
  const [perto, setPerto] = useState<ParoquiaResumo[] | null>(null);
  const [achadas, setAchadas] = useState<ParoquiaResumo[] | null | "erro">(null);
  const tipoValido = (TIPOS.includes(tipo as TipoDeHorario) ? tipo : "missa") as TipoDeHorario;
  const quandoValido = (QUANDO.some(([v]) => v === quando) ? quando : "agora") as Quando;

  useEffect(() => {
    if (!local) return;
    let ativo = true;
    setAgenda(null);
    const j = janela(quandoValido, new Date());
    agendaPerto({ local, inicio: agoraLocal(j.inicio), horas: j.horas, tipo: tipoValido })
      .then((r) => ativo && setAgenda(r))
      .catch(() => ativo && setAgenda("erro"));
    return () => {
      ativo = false;
    };
  }, [local, tipoValido, quandoValido]);

  useEffect(() => {
    if (!local) return;
    let ativo = true;
    buscarParoquias({ local, raioKm: 10, limite: 20 })
      .then((r) => ativo && setPerto(r))
      .catch(() => ativo && setPerto([]));
    return () => {
      ativo = false;
    };
  }, [local]);

  useEffect(() => {
    const t = termo.trim();
    if (t.length < 2) {
      setAchadas(null);
      return;
    }
    let ativo = true;
    const espera = setTimeout(() => {
      buscarParoquias({ termo: t, local, raioKm: 3000, limite: 40 })
        .then((r) => ativo && setAchadas(r))
        .catch(() => ativo && setAchadas("erro"));
    }, 300);
    return () => {
      ativo = false;
      clearTimeout(espera);
    };
  }, [termo, local]);

  return (
    <div className="flex flex-col gap-5">
      <TituloPagina>Missas</TituloPagina>
      <MinhaParoquia />
      <label className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-cartao px-3 focus-within:border-destaque-texto">
        <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        <input
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
          placeholder="Paróquia, bairro ou cidade"
          aria-label="Buscar paróquia"
          type="search"
          enterKeyHint="search"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-tinta-suave/70"
        />
      </label>

      {termo.trim().length >= 2 ? (
        achadas === null ? (
          <Carregando />
        ) : achadas === "erro" ? (
          <Indisponivel />
        ) : achadas.length ? (
          <div className="flex flex-col gap-2">
            {achadas.map((p) => (
              <ItemDeParoquia key={p.id} p={p} />
            ))}
          </div>
        ) : (
          <p className="py-6 text-center text-tinta-suave">Nenhuma paróquia encontrada.</p>
        )
      ) : (
        <>
          <Chips opcoes={TIPOS.map((t) => [t, NOME_DO_TIPO_DE_HORARIO[t]] as const)} valor={tipoValido} onChange={setTipo} />
          <Chips opcoes={QUANDO} valor={quandoValido} onChange={setQuando} />
          {!local ? (
            <div className="flex flex-col gap-2">
              <button type="button" onClick={pedir} disabled={estado === "buscando"} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-destaque text-lg font-semibold text-sobre-destaque disabled:opacity-60">
                <LocateFixed className="size-5" aria-hidden />
                {estado === "buscando" ? "Procurando" : "Perto de mim"}
              </button>
              {estado === "negado" && <p className="text-center text-sm text-tinta-suave">A localização está bloqueada para este app. Busque pelo nome, bairro ou cidade.</p>}
              {estado === "erro" && <p className="text-center text-sm text-tinta-suave">Não foi possível achar a sua localização.</p>}
            </div>
          ) : agenda === null ? (
            <Carregando />
          ) : agenda === "erro" ? (
            <Indisponivel />
          ) : agenda.length ? (
            <Agenda itens={agenda} />
          ) : (
            <p className="py-4 text-center text-tinta-suave">Nenhum horário cadastrado perto daqui.</p>
          )}
          {perto && perto.length > 0 && (
            <section>
              <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">Igrejas perto</h2>
              <div className="flex flex-col gap-2">
                {perto.map((p) => (
                  <ItemDeParoquia key={p.id} p={p} />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <Link to="/missas/sugerir" className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-papel font-semibold text-destaque-texto">
        <Plus className="size-4" aria-hidden /> Sugerir paróquia
      </Link>
    </div>
  );
}

function diasDoConfirmado(iso: string | null): string {
  if (!iso) return "";
  const n = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  return n <= 0 ? "Horários confirmados hoje" : n === 1 ? "Horários confirmados ontem" : `Horários confirmados há ${n} dias`;
}

function GradeDeHorarios({ horarios }: { horarios: Horario[] }) {
  const semanais = horarios.filter((h) => h.data === null);
  const hoje = new Date().toLocaleDateString("sv-SE");
  const excecoes = horarios.filter((h) => h.data !== null && h.data >= hoje).sort((a, b) => (a.data! + a.hora).localeCompare(b.data! + b.hora));
  return (
    <div className="flex flex-col gap-4">
      {TIPOS.map((t) => {
        const doTipo = semanais.filter((h) => h.tipo === t);
        if (!doTipo.length) return null;
        return (
          <Cartao key={t}>
            <h2 className="font-leitura text-xl font-semibold text-marca">{NOME_DO_TIPO_DE_HORARIO[t]}</h2>
            <ul className="mt-2 flex flex-col divide-y divide-borda">
              {[0, 1, 2, 3, 4, 5, 6].map((d) => {
                const doDia = doTipo.filter((h) => h.dia_semana === d).sort((a, b) => a.hora.localeCompare(b.hora));
                if (!doDia.length) return null;
                return (
                  <li key={d} className="grid grid-cols-[6.5rem_1fr] gap-2 py-2">
                    <span className="font-medium text-tinta">{NOME_DO_DIA[d]}</span>
                    <span className="flex flex-col">
                      {doDia.map((h) => (
                        <span key={h.id} className="text-tinta">
                          {hhmm(h.hora)}
                          {h.hora_fim && ` às ${hhmm(h.hora_fim)}`}
                          {(h.semanas?.length || h.observacao) && (
                            <span className="text-sm text-tinta-suave"> · {[descreverSemanas(h.semanas), h.observacao].filter(Boolean).join(" · ")}</span>
                          )}
                        </span>
                      ))}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Cartao>
        );
      })}
      {excecoes.length > 0 && (
        <Cartao>
          <h2 className="font-leitura text-xl font-semibold text-marca">Datas especiais</h2>
          <ul className="mt-2 flex flex-col gap-1.5">
            {excecoes.map((h) => {
              const [a, m, d] = h.data!.split("-");
              return (
                <li key={h.id} className="text-tinta">
                  <span className="font-medium">{`${d}/${m}${a !== String(new Date().getFullYear()) ? `/${a}` : ""}`}</span> · {NOME_DO_TIPO_DE_HORARIO[h.tipo]}{" "}
                  {h.cancelado ? "não haverá" : hhmm(h.hora)}
                  {h.observacao && <span className="text-tinta-suave"> · {h.observacao}</span>}
                </li>
              );
            })}
          </ul>
        </Cartao>
      )}
    </div>
  );
}

function Contato({ href, icone: Icone, children }: { href: string; icone: typeof Phone; children: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex min-h-12 items-center gap-3 rounded-xl border border-borda bg-cartao px-4 font-medium text-tinta">
      <Icone className="size-5 shrink-0 text-destaque-texto" aria-hidden />
      <span className="min-w-0 flex-1 truncate">{children}</span>
    </a>
  );
}

export function ParoquiaPagina() {
  const { id = "" } = useParams();
  const [dados, setDados] = useState<ParoquiaCompleta | null | "erro" | "nada">(null);
  const { preferencias, mudar } = usePreferencias();
  const { email } = useConta();
  const [confirmado, setConfirmado] = useState(false);

  useEffect(() => {
    let ativo = true;
    setDados(null);
    carregarParoquia(id)
      .then((d) => ativo && setDados(d ?? "nada"))
      .catch(() => ativo && setDados("erro"));
    return () => {
      ativo = false;
    };
  }, [id, email]);

  const agora = useMemo(() => new Date(), []);
  if (dados === null) return <Carregando />;
  if (dados === "nada") return <NaoEncontrada />;
  if (dados === "erro") return <Indisponivel />;
  const { paroquia: p, horarios, avisos, podeEditar } = dados;
  const minha = preferencias.minhaParoquia === p.id;
  const destino = p.lat !== null && p.lng !== null ? `${p.lat},${p.lng}` : encodeURIComponent(`${p.endereco}, ${p.bairro}, ${p.cidade} - ${p.uf}`);
  const proximas = proximasOcorrencias(horarios.filter((h) => h.tipo === "missa"), agora, 7).slice(0, 2);

  async function confirmar() {
    if (!email) return;
    await enviarSugestao({ paroquia_id: p.id, tipo: "confirmar", texto: "" }).catch(() => {});
    setConfirmado(true);
  }

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/missas">Missas</Voltar>
      <Cabecalho
        titulo={p.nome}
        subtitulo={[NOME_DO_TIPO_DE_IGREJA[p.tipo], p.padroeiro && `Padroeiro: ${p.padroeiro}`, p.diocese].filter(Boolean).join(" · ")}
      />
      <div className="flex flex-wrap gap-2 text-sm">
        {p.verificada && (
          <span className="flex items-center gap-1 rounded-full bg-marca-fundo px-3 py-1 font-medium text-destaque-texto">
            <BadgeCheck className="size-4" aria-hidden /> Verificada
          </span>
        )}
        {p.confirmado_em && <span className="rounded-full bg-marca-fundo px-3 py-1 text-tinta">{diasDoConfirmado(p.confirmado_em)}</span>}
      </div>

      {proximas.length > 0 && (
        <p className="text-lg text-tinta">
          Próxima missa: <strong>{quandoPorExtenso(proximas[0]!.quando, agora)}</strong>
        </p>
      )}

      {avisos.map((a) => (
        <p key={a.id} className="rounded-2xl bg-marca-fundo px-4 py-3 text-tinta">
          {a.texto}
        </p>
      ))}

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${destino}`}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-destaque font-semibold text-sobre-destaque"
        >
          <Navigation className="size-5" aria-hidden /> Como chegar
        </a>
        <button
          type="button"
          onClick={() => mudar(minha ? { minhaParoquia: "", minhaParoquiaNome: "" } : { minhaParoquia: p.id, minhaParoquiaNome: p.nome })}
          aria-pressed={minha}
          className={`flex min-h-12 items-center justify-center gap-2 rounded-xl font-semibold ${minha ? "border border-borda bg-cartao text-destaque-texto" : "border border-borda bg-papel text-tinta"}`}
        >
          <Heart className={`size-5 ${minha ? "fill-current" : ""}`} aria-hidden /> {minha ? "Minha paróquia" : "Escolher como minha paróquia"}
        </button>
      </div>

      {(p.endereco || p.bairro) && (
        <p className="flex items-start gap-2 text-tinta">
          <MapPin className="mt-0.5 size-5 shrink-0 text-destaque-texto" aria-hidden />
          <span>{[p.endereco, p.bairro, `${p.cidade} - ${p.uf}`, p.cep && `CEP ${p.cep.slice(0, 5)}-${p.cep.slice(5)}`].filter(Boolean).join(", ")}</span>
        </p>
      )}

      {horarios.length ? <GradeDeHorarios horarios={horarios} /> : <p className="text-tinta-suave">Ainda sem horários cadastrados.</p>}

      <div className="flex flex-col gap-2">
        {p.telefone && <Contato href={`tel:+55${p.telefone}`} icone={Phone}>{`Secretaria: (${p.telefone.slice(0, 2)}) ${p.telefone.slice(2)}`}</Contato>}
        {p.whatsapp && <Contato href={`https://wa.me/55${p.whatsapp}`} icone={MessageCircle}>WhatsApp da secretaria</Contato>}
        {p.instagram && <Contato href={`https://instagram.com/${p.instagram}`} icone={AtSign}>{`@${p.instagram}`}</Contato>}
        {p.site && <Contato href={p.site.startsWith("http") ? p.site : `https://${p.site}`} icone={Globe}>{p.site.replace(/^https?:\/\//, "")}</Contato>}
        {p.email && <Contato href={`mailto:${p.email}`} icone={Mail}>{p.email}</Contato>}
      </div>

      <div className="flex flex-col gap-2 border-t border-borda pt-5">
        {email ? (
          confirmado ? (
            <p className="text-center font-medium text-destaque-texto">Obrigado. Vamos conferir.</p>
          ) : (
            <button type="button" onClick={() => void confirmar()} className="min-h-12 rounded-xl border border-borda bg-cartao font-semibold text-tinta">
              Os horários estão certos
            </button>
          )
        ) : null}
        <Link to={`/missas/sugerir?paroquia=${p.id}`} className="flex min-h-12 items-center justify-center rounded-xl border border-borda bg-cartao font-semibold text-tinta">
          Informar horário errado ou novo
        </Link>
        {p.fonte && (
          <p className="pt-2 text-center text-sm text-tinta-suave">
            Fonte:{" "}
            {p.fonte === "Missas.com.br" ? (
              <a href="https://missas.com.br" target="_blank" rel="noreferrer" className="underline underline-offset-2">
                Missas.com.br
              </a>
            ) : (
              p.fonte
            )}
          </p>
        )}
        {podeEditar && (
          <Link to={`/painel/paroquia/${p.id}`} className="flex min-h-12 items-center justify-center gap-2 rounded-xl font-semibold text-destaque-texto">
            <Pencil className="size-4" aria-hidden /> Editar
          </Link>
        )}
      </div>
    </div>
  );
}

export function Sugerir() {
  const [params] = useSearchParams();
  const paroquia = params.get("paroquia");
  const { email, pronto } = useConta();
  const [tipo, setTipo] = useState<"horario_errado" | "novo_horario" | "outro" | "nova_paroquia">(paroquia ? "horario_errado" : "nova_paroquia");
  const [texto, setTexto] = useState("");
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState<"" | "enviando" | "enviado" | "erro">("");

  async function enviar(e: FormEvent) {
    e.preventDefault();
    setEstado("enviando");
    try {
      await enviarSugestao({ paroquia_id: tipo === "nova_paroquia" ? null : paroquia, tipo, texto: texto.trim(), dados: tipo === "nova_paroquia" ? { nome: nome.trim(), cidade: cidade.trim() } : {} });
      setEstado("enviado");
    } catch {
      setEstado("erro");
    }
  }

  const pode = tipo === "nova_paroquia" ? nome.trim().length > 2 && cidade.trim().length > 1 : texto.trim().length > 3;

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/missas">Missas</Voltar>
      <Cabecalho titulo={paroquia ? "Informar horário" : "Sugerir paróquia"} />
      {!pronto ? (
        <Carregando />
      ) : !email ? (
        <Cartao>
          <p className="text-tinta">Para sugerir, entre na sua conta.</p>
          <Link to="/conta" className="mt-4 flex min-h-12 items-center justify-center rounded-xl bg-destaque font-semibold text-sobre-destaque">
            Entrar
          </Link>
        </Cartao>
      ) : estado === "enviado" ? (
        <Cartao>
          <p className="text-tinta">Obrigado. A sugestão vai ser conferida antes de aparecer no app.</p>
        </Cartao>
      ) : (
        <Cartao>
          <form onSubmit={enviar} className="flex flex-col gap-4">
            {paroquia && (
              <Chips
                opcoes={[
                  ["horario_errado", "Horário errado"],
                  ["novo_horario", "Horário novo"],
                  ["outro", "Outro"],
                ] as const}
                valor={tipo as "horario_errado" | "novo_horario" | "outro"}
                onChange={setTipo}
              />
            )}
            {tipo === "nova_paroquia" && (
              <>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-tinta-suave">Nome da paróquia ou capela</span>
                  <input value={nome} onChange={(e) => setNome(e.target.value)} className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base" />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-tinta-suave">Cidade</span>
                  <input value={cidade} onChange={(e) => setCidade(e.target.value)} className="min-h-12 rounded-xl border border-borda bg-papel px-3 text-base" />
                </label>
              </>
            )}
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-tinta-suave">{tipo === "nova_paroquia" ? "Endereço e horários que você conhece" : "O que está diferente"}</span>
              <textarea value={texto} onChange={(e) => setTexto(e.target.value)} rows={4} maxLength={1000} className="w-full resize-y rounded-xl border border-borda bg-papel px-3 py-2 text-base" />
            </label>
            {estado === "erro" && <p className="text-sm font-medium text-[#a9271f]">Não foi possível enviar agora. Tente de novo.</p>}
            <button type="submit" disabled={!pode || estado === "enviando"} className="min-h-12 rounded-xl bg-destaque font-semibold text-sobre-destaque disabled:opacity-50">
              {estado === "enviando" ? "Enviando" : "Enviar"}
            </button>
          </form>
        </Cartao>
      )}
    </div>
  );
}
