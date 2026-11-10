import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { AtSign, BadgeCheck, Check, ChevronDown, ChevronRight, Clock, Globe, Heart, LocateFixed, Mail, MapPin, MessageCircle, Navigation, Pencil, Phone, Plus, Search, Share2 } from "lucide-react";
import { usePreferencias } from "@/lib/preferencias";
import { useConta } from "@/conta/useConta";
import { agendaDeHorarios, carregarParoquia, cidadesComParoquias, enviarSugestao, procurarParoquias, type Cidade, type ParoquiaCompleta } from "@/paroquias/api";
import {
  agoraLocal,
  agruparDias,
  descreverHorario,
  descreverSemanas,
  DIA_POR_CHAVE,
  emQuanto,
  hhmm,
  NOME_CURTO_DO_DIA,
  NOME_DO_DIA,
  proximasOcorrencias,
  quandoPorExtenso,
  telefoneLegivel,
  textoDaGrade,
} from "@/paroquias/horarios";
import { NOME_DO_TIPO_DE_HORARIO, NOME_DO_TIPO_DE_IGREJA, type Horario, type ItemDaAgenda, type ParoquiaResumo, type TipoDeHorario } from "@/paroquias/tipos";
import { useLocal } from "@/paroquias/useLocal";
import { ENDERECO_DO_SITE } from "@/marca";
import { Cartao, TituloCartao, TituloPagina } from "@/components/Cartao";
import { Cabecalho, Carregando, Indisponivel, Voltar } from "@/components/Devocao";
import { NaoEncontrada } from "@/pages/Simples";

const TIPOS: TipoDeHorario[] = ["missa", "confissao", "adoracao"];
const PERIODOS = [
  ["", "Dia todo"],
  ["manha", "Manhã"],
  ["tarde", "Tarde"],
  ["noite", "Noite"],
] as const;
type Periodo = (typeof PERIODOS)[number][0];
const FAIXA: Record<Periodo, [number, number]> = { "": [0, 24], manha: [5, 12], tarde: [12, 18], noite: [18, 24] };
const RAIOS = [2, 5, 10, 20, 50];
const RAIO_PADRAO = 10;
const TOLERANCIA = 15 * 60_000;

const km = (d: number | null) => (d === null ? "" : d < 1 ? `${Math.round(d * 1000)} m` : `${d.toFixed(1).replace(".", ",")} km`);
const dataDoItem = (i: ItemDaAgenda) => new Date(i.quando.replace(" ", "T"));
const diaDe = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();

function deslocamento(dia: string, agora: Date): number | null {
  if (dia === "agora") return null;
  if (dia === "hoje") return 0;
  if (dia === "amanha") return 1;
  const i = DIA_POR_CHAVE.indexOf(dia as (typeof DIA_POR_CHAVE)[number]);
  return i < 0 ? null : (i - agora.getDay() + 7) % 7;
}

function janela(dia: string, periodo: Periodo, agora: Date): { inicio: Date; fim: Date } {
  const off = deslocamento(dia, agora);
  if (off === null) return { inicio: new Date(agora.getTime() - TOLERANCIA), fim: new Date(agora.getTime() + 12 * 3_600_000) };
  const [a, b] = FAIXA[periodo];
  let inicio = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + off, a);
  const fim = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + off, b);
  if (off === 0 && agora.getTime() - TOLERANCIA > inicio.getTime()) inicio = new Date(agora.getTime() - TOLERANCIA);
  return { inicio, fim };
}

function rotuloDoDia(d: Date, agora: Date): string {
  const diff = Math.round((diaDe(d) - diaDe(agora)) / 86_400_000);
  if (diff === 0) return "Hoje";
  if (diff === 1) return `Amanhã, ${NOME_DO_DIA[d.getDay()]!.toLowerCase()}`;
  return `${NOME_DO_DIA[d.getDay()]}, ${d.getDate()}/${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function Chips<T extends string>({ opcoes, valor, onChange, rolar }: { opcoes: readonly (readonly [T, string])[]; valor: T; onChange: (v: T) => void; rolar?: boolean }) {
  return (
    <div
      className={rolar ? "-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:-mx-8 md:px-8" : "flex flex-wrap gap-2"}
      role="group"
    >
      {opcoes.map(([v, nome]) => (
        <button
          key={v}
          type="button"
          aria-pressed={v === valor}
          onClick={() => onChange(v)}
          className={`min-h-10 shrink-0 rounded-full border px-4 text-sm font-medium whitespace-nowrap ${v === valor ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta"}`}
        >
          {nome}
        </button>
      ))}
    </div>
  );
}

function Segmentos<T extends string>({ opcoes, valor, onChange }: { opcoes: readonly (readonly [T, string])[]; valor: T; onChange: (v: T) => void }) {
  return (
    <div className="flex rounded-full border border-borda bg-cartao p-0.5" role="group">
      {opcoes.map(([v, nome]) => (
        <button
          key={v}
          type="button"
          aria-pressed={v === valor}
          onClick={() => onChange(v)}
          className={`min-h-9 rounded-full px-3.5 text-sm font-medium ${v === valor ? "bg-marca-fundo text-destaque-texto" : "text-tinta-suave"}`}
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

function PorHorario({ itens, agora }: { itens: ItemDaAgenda[]; agora: Date }) {
  const dias = new Map<number, ItemDaAgenda[]>();
  for (const i of itens) {
    const d = diaDe(dataDoItem(i));
    dias.set(d, [...(dias.get(d) ?? []), i]);
  }
  const variosDias = dias.size > 1 || [...dias.keys()][0] !== diaDe(agora);
  return (
    <div className="flex flex-col gap-4">
      {[...dias.entries()].map(([d, lista]) => (
        <section key={d}>
          {variosDias && <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">{rotuloDoDia(new Date(d), agora)}</h2>}
          <ul className="flex flex-col divide-y divide-borda rounded-2xl border border-borda bg-cartao">
            {lista.map((i) => {
              const q = dataDoItem(i);
              const comecou = q.getTime() < agora.getTime();
              const quanto = comecou && i.ate ? `até ${hhmm(i.ate)}` : emQuanto(q, agora);
              return (
                <li key={`${i.paroquia_id}-${i.quando}`}>
                  <Link to={`/missas/paroquia/${i.paroquia_id}`} className="flex min-h-16 items-center gap-3 px-4 py-2.5">
                    <span className="flex w-[4.5rem] shrink-0 flex-col">
                      <span className="text-lg font-semibold leading-tight text-destaque-texto">
                        {hhmm(i.quando.slice(11, 16))}
                        {i.ate && !comecou && <span className="text-sm font-medium text-tinta-suave"> às {hhmm(i.ate)}</span>}
                      </span>
                      {quanto && <span className="text-xs text-tinta-suave">{quanto}</span>}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-leitura leading-snug text-marca">{i.nome}</span>
                      <span className="block text-sm text-tinta-suave">{[i.bairro, km(i.distancia_km), i.observacao].filter(Boolean).join(" · ")}</span>
                    </span>
                    <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

function PorIgreja({ itens, igrejas, agora, vazio }: { itens: ItemDaAgenda[]; igrejas: ParoquiaResumo[]; agora: Date; vazio: string }) {
  const [verOutras, setVerOutras] = useState(false);
  const porIgreja = new Map<string, ItemDaAgenda[]>();
  for (const i of itens) porIgreja.set(i.paroquia_id, [...(porIgreja.get(i.paroquia_id) ?? []), i]);
  const comHorario = igrejas.filter((p) => porIgreja.has(p.id));
  const semHorario = igrejas.filter((p) => !porIgreja.has(p.id));
  const linha = (p: ParoquiaResumo) => {
    const lista = porIgreja.get(p.id) ?? [];
    return (
      <li key={p.id}>
        <Link to={`/missas/paroquia/${p.id}`} className="flex min-h-16 items-center gap-3 px-4 py-3">
          <span className="min-w-0 flex-1">
            <span className="block font-leitura leading-snug text-marca">{p.nome}</span>
            <span className="block text-sm text-tinta-suave">{[p.bairro, km(p.distancia_km)].filter(Boolean).join(" · ")}</span>
            {lista.length > 0 && (
              <span className="mt-1.5 flex flex-wrap gap-1.5">
                {lista.map((i) => {
                  const q = dataDoItem(i);
                  const outroDia = diaDe(q) !== diaDe(agora);
                  return (
                    <span key={i.quando} className="rounded-lg bg-marca-fundo px-2 py-0.5 text-sm font-semibold text-destaque-texto">
                      {outroDia ? `${NOME_CURTO_DO_DIA[q.getDay()]} ` : ""}
                      {i.ate ? `${hhmm(i.quando.slice(11, 16))} às ${hhmm(i.ate)}` : hhmm(i.quando.slice(11, 16))}
                    </span>
                  );
                })}
              </span>
            )}
          </span>
          <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        </Link>
      </li>
    );
  };
  return (
    <div className="flex flex-col gap-3">
      {comHorario.length ? (
        <ul className="flex flex-col divide-y divide-borda rounded-2xl border border-borda bg-cartao">{comHorario.map(linha)}</ul>
      ) : (
        <p className="py-4 text-center text-tinta-suave">{vazio}</p>
      )}
      {semHorario.length > 0 &&
        (verOutras ? (
          <ul className="flex flex-col divide-y divide-borda rounded-2xl border border-borda bg-cartao opacity-80">{semHorario.map(linha)}</ul>
        ) : (
          <button type="button" onClick={() => setVerOutras(true)} className="flex min-h-11 items-center justify-center gap-1 text-sm font-medium text-tinta-suave">
            Outras igrejas ({semHorario.length}) <ChevronDown className="size-4" aria-hidden />
          </button>
        ))}
    </div>
  );
}

function EscolherOnde({
  modo,
  cidade,
  raio,
  estadoLocal,
  onPerto,
  onCidade,
  onRaio,
}: {
  modo: "perto" | "cidade" | "nenhum";
  cidade: Cidade | null;
  raio: number;
  estadoLocal: string;
  onPerto: () => void;
  onCidade: (c: Cidade) => void;
  onRaio: (r: number) => void;
}) {
  const [filtro, setFiltro] = useState("");
  const [cidades, setCidades] = useState<Cidade[] | null | "erro">(null);
  useEffect(() => {
    let ativo = true;
    const espera = setTimeout(
      () =>
        cidadesComParoquias(filtro.trim())
          .then((r) => ativo && setCidades(r))
          .catch(() => ativo && setCidades("erro")),
      filtro ? 250 : 0,
    );
    return () => {
      ativo = false;
      clearTimeout(espera);
    };
  }, [filtro]);

  return (
    <Cartao className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={onPerto}
          disabled={estadoLocal === "buscando"}
          aria-pressed={modo === "perto"}
          className={`flex min-h-12 items-center justify-center gap-2 rounded-xl font-semibold disabled:opacity-60 ${modo === "perto" ? "border border-destaque-texto/50 bg-marca-fundo text-destaque-texto" : "bg-destaque text-sobre-destaque"}`}
        >
          {modo === "perto" ? <Check className="size-5" aria-hidden /> : <LocateFixed className="size-5" aria-hidden />}
          {estadoLocal === "buscando" ? "Procurando" : "Perto de mim"}
        </button>
        {estadoLocal === "negado" && <p className="text-center text-sm text-tinta-suave">A localização está bloqueada para este app.</p>}
        {estadoLocal === "erro" && <p className="text-center text-sm text-tinta-suave">Não foi possível achar a sua localização.</p>}
        {modo === "perto" && (
          <Chips opcoes={RAIOS.map((r) => [String(r), `${r} km`] as const)} valor={String(raio)} onChange={(v) => onRaio(Number(v))} />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label className="flex min-h-11 items-center gap-2 rounded-xl border border-borda bg-papel px-3 focus-within:border-destaque-texto">
          <MapPin className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          <input
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Cidade"
            aria-label="Cidade"
            type="search"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-tinta-suave/70"
          />
        </label>
        {cidades === null ? null : cidades === "erro" ? (
          <Indisponivel />
        ) : cidades.length ? (
          <ul className="flex flex-col divide-y divide-borda">
            {cidades.map((c) => {
              const atual = modo === "cidade" && cidade?.cidade === c.cidade && cidade.uf === c.uf;
              return (
                <li key={`${c.cidade}-${c.uf}`}>
                  <button type="button" onClick={() => onCidade(c)} aria-pressed={atual} className="flex min-h-12 w-full items-center gap-2 px-1 text-left">
                    <span className={`flex-1 font-medium ${atual ? "text-destaque-texto" : "text-tinta"}`}>
                      {c.cidade}, {c.uf}
                    </span>
                    <span className="text-sm text-tinta-suave">{c.total === 1 ? "1 igreja" : `${c.total} igrejas`}</span>
                    {atual && <Check className="size-4 text-destaque-texto" aria-hidden />}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="py-2 text-center text-sm text-tinta-suave">Nenhuma cidade com igrejas cadastradas.</p>
        )}
      </div>
    </Cartao>
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
      <Link to={`/missas/paroquia/${minhaParoquia}`} className="mt-2 flex items-center gap-2 font-leitura text-xl font-semibold text-marca">
        <span className="flex-1">{dados?.paroquia.nome ?? minhaParoquiaNome}</span>
        <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
      </Link>
      {proximas.length > 0 && (
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {proximas.map((o) => (
            <li key={o.horario.id + o.quando.toISOString()} className="rounded-lg bg-marca-fundo px-2.5 py-1 text-sm font-semibold text-destaque-texto">
              {quandoPorExtenso(o.quando, agora)}
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
  const [params, setParams] = useSearchParams();
  const { preferencias, mudar } = usePreferencias();
  const { local, estado, pedir } = useLocal();
  const termo = params.get("q") ?? "";
  const tipo = (TIPOS.includes(params.get("tipo") as TipoDeHorario) ? params.get("tipo") : "missa") as TipoDeHorario;
  const quandoBruto = params.get("quando") ?? "agora";
  const periodo = (PERIODOS.some(([v]) => v === params.get("periodo")) ? params.get("periodo") : "") as Periodo;
  const ordem = params.get("ordem") === "igreja" ? "igreja" : "horario";
  const raio = RAIOS.includes(Number(params.get("raio"))) ? Number(params.get("raio")) : RAIO_PADRAO;
  const [agora, setAgora] = useState(() => new Date());
  const quando = quandoBruto === "agora" || deslocamento(quandoBruto, agora) !== null ? quandoBruto : "agora";

  const cidade = useMemo<Cidade | null>(() => {
    const c = params.get("cidade");
    if (c) return { cidade: c, uf: params.get("uf") ?? "", total: 0 };
    const [pc, puf] = preferencias.cidadeDasMissas.split("|");
    return pc ? { cidade: pc, uf: puf ?? "", total: 0 } : null;
  }, [params, preferencias.cidadeDasMissas]);
  const modo = cidade ? "cidade" : local ? "perto" : "nenhum";
  const [abrirOnde, setAbrirOnde] = useState(false);

  const [agenda, setAgenda] = useState<ItemDaAgenda[] | null | "erro">(null);
  const [igrejas, setIgrejas] = useState<ParoquiaResumo[] | null>(null);
  const [achadas, setAchadas] = useState<ParoquiaResumo[] | null | "erro">(null);

  const mudarParams = (m: Record<string, string | null>) => {
    const p = new URLSearchParams(params);
    for (const [k, v] of Object.entries(m)) {
      if (v) p.set(k, v);
      else p.delete(k);
    }
    setParams(p, { replace: true });
  };

  useEffect(() => {
    const t = setInterval(() => setAgora(new Date()), 60_000);
    return () => clearInterval(t);
  }, []);

  const j = useMemo(() => janela(quando, periodo, agora), [quando, periodo, agora]);
  const onde = useMemo(() => (modo === "cidade" ? { cidade } : modo === "perto" ? { local, raioKm: raio } : null), [modo, cidade, local, raio]);

  useEffect(() => {
    if (!onde) return;
    let ativo = true;
    if (j.fim <= j.inicio) {
      setAgenda([]);
      return;
    }
    setAgenda(null);
    const horas = Math.max(1, Math.ceil((j.fim.getTime() - j.inicio.getTime()) / 3_600_000));
    agendaDeHorarios({ ...onde, inicio: agoraLocal(j.inicio), horas, tipo })
      .then((r) => ativo && setAgenda(r.filter((i) => dataDoItem(i) < j.fim)))
      .catch(() => ativo && setAgenda("erro"));
    return () => {
      ativo = false;
    };
  }, [onde, j.inicio.getTime(), j.fim.getTime(), tipo]);

  useEffect(() => {
    if (!onde) return;
    let ativo = true;
    setIgrejas(null);
    procurarParoquias({ ...onde, limite: 100 })
      .then((r) => ativo && setIgrejas(r))
      .catch(() => ativo && setIgrejas([]));
    return () => {
      ativo = false;
    };
  }, [onde]);

  useEffect(() => {
    const t = termo.trim();
    if (t.length < 2) {
      setAchadas(null);
      return;
    }
    let ativo = true;
    const espera = setTimeout(() => {
      procurarParoquias({ termo: t, local, raioKm: 3000, limite: 40 })
        .then((r) => ativo && setAchadas(r))
        .catch(() => ativo && setAchadas("erro"));
    }, 300);
    return () => {
      ativo = false;
      clearTimeout(espera);
    };
  }, [termo, local]);

  function escolherPerto() {
    mudar({ cidadeDasMissas: "" });
    mudarParams({ cidade: null, uf: null });
    pedir();
    setAbrirOnde(false);
  }

  function escolherCidade(c: Cidade) {
    mudar({ cidadeDasMissas: `${c.cidade}|${c.uf}` });
    mudarParams({ cidade: c.cidade, uf: c.uf, raio: null });
    setAbrirOnde(false);
  }

  const dias: (readonly [string, string])[] = [
    ["agora", "Agora"],
    ["hoje", "Hoje"],
    ["amanha", "Amanhã"],
    ...[2, 3, 4, 5, 6].map((off) => {
      const d = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + off);
      return [DIA_POR_CHAVE[d.getDay()]!, `${NOME_CURTO_DO_DIA[d.getDay()]} ${d.getDate()}`] as const;
    }),
  ];
  const off = deslocamento(quando, agora);
  const diaAtivo = off === null ? "agora" : off === 0 ? "hoje" : off === 1 ? "amanha" : DIA_POR_CHAVE[(agora.getDay() + off) % 7]!;
  const nomeDoTipo = NOME_DO_TIPO_DE_HORARIO[tipo].toLowerCase();
  const resumoOnde = modo === "cidade" ? `${cidade!.cidade}${cidade!.uf ? `, ${cidade!.uf}` : ""}` : `Perto de mim · até ${raio} km`;
  const proximoRaio = RAIOS.find((r) => r > raio);

  return (
    <div className="flex flex-col gap-4">
      <TituloPagina>Missas</TituloPagina>
      <MinhaParoquia />
      <label className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-cartao px-3 focus-within:border-destaque-texto">
        <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        <input
          value={termo}
          onChange={(e) => mudarParams({ q: e.target.value })}
          placeholder="Igreja, padroeiro ou bairro"
          aria-label="Buscar igreja"
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
          <p className="py-6 text-center text-tinta-suave">Nenhuma igreja encontrada.</p>
        )
      ) : (
        <>
          {modo !== "nenhum" && (
            <button
              type="button"
              onClick={() => setAbrirOnde(!abrirOnde)}
              aria-expanded={abrirOnde}
              className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-cartao px-4 text-left"
            >
              <MapPin className="size-5 shrink-0 text-destaque-texto" aria-hidden />
              <span className="min-w-0 flex-1 font-medium text-tinta">{resumoOnde}</span>
              <span className="text-sm font-medium text-destaque-texto">Mudar</span>
              <ChevronDown className={`size-4 text-destaque-texto transition-transform ${abrirOnde ? "rotate-180" : ""}`} aria-hidden />
            </button>
          )}
          {(modo === "nenhum" || abrirOnde) && (
            <EscolherOnde
              modo={modo}
              cidade={cidade}
              raio={raio}
              estadoLocal={estado}
              onPerto={escolherPerto}
              onCidade={escolherCidade}
              onRaio={(r) => mudarParams({ raio: r === RAIO_PADRAO ? null : String(r) })}
            />
          )}

          {modo !== "nenhum" && (
            <>
              <Chips opcoes={TIPOS.map((t) => [t, NOME_DO_TIPO_DE_HORARIO[t]] as const)} valor={tipo} onChange={(v) => mudarParams({ tipo: v === "missa" ? null : v })} />
              <Chips rolar opcoes={dias} valor={diaAtivo} onChange={(v) => mudarParams({ quando: v === "agora" ? null : v, periodo: v === "agora" ? null : periodo || null })} />
              {quando !== "agora" && <Chips opcoes={PERIODOS} valor={periodo} onChange={(v) => mudarParams({ periodo: v || null })} />}

              <div className="flex items-center justify-between gap-3 pt-1">
                <span className="text-sm text-tinta-suave">
                  {Array.isArray(agenda) ? (agenda.length === 1 ? "1 horário" : `${agenda.length} horários`) : ""}
                </span>
                <Segmentos
                  opcoes={[
                    ["horario", "Por horário"],
                    ["igreja", "Por igreja"],
                  ] as const}
                  valor={ordem}
                  onChange={(v) => mudarParams({ ordem: v === "horario" ? null : v })}
                />
              </div>

              {agenda === null || (ordem === "igreja" && igrejas === null) ? (
                <Carregando />
              ) : agenda === "erro" ? (
                <Indisponivel />
              ) : ordem === "igreja" ? (
                <PorIgreja itens={agenda} igrejas={igrejas ?? []} agora={agora} vazio={`Nenhuma ${nomeDoTipo} neste período.`} />
              ) : agenda.length ? (
                <PorHorario itens={agenda} agora={agora} />
              ) : (
                <p className="py-4 text-center text-tinta-suave">{`Nenhuma ${nomeDoTipo} neste período.`}</p>
              )}
              {Array.isArray(agenda) && agenda.length < 3 && modo === "perto" && proximoRaio && (
                <button type="button" onClick={() => mudarParams({ raio: String(proximoRaio) })} className="min-h-11 rounded-xl border border-borda bg-cartao font-medium text-destaque-texto">
                  Procurar até {proximoRaio} km
                </button>
              )}
            </>
          )}
        </>
      )}

      <Link to="/missas/sugerir" className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-papel font-semibold text-destaque-texto">
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

function GradeDeHorarios({ horarios, agora }: { horarios: Horario[]; agora: Date }) {
  const hoje = agora.toLocaleDateString("sv-SE");
  const excecoes = horarios.filter((h) => h.data !== null && h.data >= hoje).sort((a, b) => (a.data! + a.hora).localeCompare(b.data! + b.hora));
  return (
    <div className="flex flex-col gap-4">
      {TIPOS.map((t) => {
        const grupos = agruparDias(horarios.filter((h) => h.tipo === t));
        if (!grupos.length) return null;
        return (
          <Cartao key={t} className="p-4 sm:p-5">
            <h2 className="font-leitura text-xl font-semibold text-marca">{NOME_DO_TIPO_DE_HORARIO[t]}</h2>
            <ul className="mt-2 flex flex-col divide-y divide-borda">
              {grupos.map((g) => {
                const ehHoje = g.dias.includes(agora.getDay());
                const observacoes = [...new Set(g.horarios.map((h) => h.observacao).filter(Boolean))];
                return (
                  <li key={g.rotulo} className="flex flex-col gap-1.5 py-3 sm:grid sm:grid-cols-[9.5rem_1fr] sm:gap-3">
                    <span className="flex items-center gap-2 font-medium text-tinta">
                      {g.rotulo}
                      {ehHoje && <span className="rounded-full bg-destaque px-2 py-0.5 text-xs font-semibold text-sobre-destaque">hoje</span>}
                    </span>
                    <span className="flex flex-col gap-1.5">
                      <span className="flex flex-wrap gap-1.5">
                        {g.horarios.map((h) => (
                          <span key={h.id} className="rounded-lg bg-marca-fundo px-2.5 py-1 font-semibold text-destaque-texto">
                            {descreverHorario(h)}
                            {h.semanas?.length ? <span className="font-medium text-tinta-suave"> · {descreverSemanas(h.semanas)}</span> : null}
                          </span>
                        ))}
                      </span>
                      {observacoes.map((o) => (
                        <span key={o} className="text-sm text-tinta-suave">
                          {o}
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
        <Cartao className="p-4 sm:p-5">
          <h2 className="font-leitura text-xl font-semibold text-marca">Datas especiais</h2>
          <ul className="mt-2 flex flex-col gap-1.5">
            {excecoes.map((h) => {
              const [a, m, d] = h.data!.split("-");
              return (
                <li key={h.id} className="text-tinta">
                  <span className="font-medium">{`${d}/${m}${a !== String(agora.getFullYear()) ? `/${a}` : ""}`}</span> · {NOME_DO_TIPO_DE_HORARIO[h.tipo]}{" "}
                  {h.cancelado ? "não haverá" : descreverHorario(h)}
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

function Contato({ href, icone: Icone, rotulo, children }: { href: string; icone: typeof Phone; rotulo: string; children: ReactNode }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className="flex min-h-14 items-center gap-3 px-4 py-2">
        <Icone className="size-5 shrink-0 text-destaque-texto" aria-hidden />
        <span className="min-w-0 flex-1">
          <span className="block text-xs text-tinta-suave">{rotulo}</span>
          <span className="block truncate font-medium text-tinta">{children}</span>
        </span>
        <ChevronRight className="size-4 shrink-0 text-tinta-suave" aria-hidden />
      </a>
    </li>
  );
}

function ProximoHorario({ horarios, agora }: { horarios: Horario[]; agora: Date }) {
  const missas = proximasOcorrencias(horarios.filter((h) => h.tipo === "missa"), new Date(agora.getTime() - TOLERANCIA), 7).slice(0, 2);
  const confissoes = proximasOcorrencias(horarios.filter((h) => h.tipo === "confissao"), agora, 0);
  if (!missas.length && !confissoes.length) return null;
  const [primeira, depois] = missas;
  const quanto = primeira ? emQuanto(primeira.quando, agora) : "";
  return (
    <Cartao className="p-4 sm:p-5">
      {primeira && (
        <>
          <TituloCartao icone={Clock}>Próxima missa</TituloCartao>
          <p className="mt-1.5 font-leitura text-2xl font-semibold text-marca">
            {quandoPorExtenso(primeira.quando, agora)}
            {quanto && <span className="ml-2 font-sans text-base font-medium text-tinta-suave">{quanto}</span>}
          </p>
          {primeira.horario.observacao && <p className="text-sm text-tinta-suave">{primeira.horario.observacao}</p>}
          {depois && <p className="mt-1 text-tinta-suave">Depois: {quandoPorExtenso(depois.quando, agora)}</p>}
        </>
      )}
      {confissoes.length > 0 && (
        <p className={`text-tinta ${primeira ? "mt-3 border-t border-borda pt-3" : ""}`}>
          <span className="font-medium">Confissão hoje:</span> {confissoes.map((c) => descreverHorario(c.horario)).join(", ")}
        </p>
      )}
    </Cartao>
  );
}

export function ParoquiaPagina() {
  const { id = "" } = useParams();
  const [dados, setDados] = useState<ParoquiaCompleta | null | "erro" | "nada">(null);
  const { preferencias, mudar } = usePreferencias();
  const { email } = useConta();
  const [confirmado, setConfirmado] = useState(false);
  const [copiado, setCopiado] = useState(false);

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
  const endereco = [p.endereco, p.bairro, `${p.cidade} - ${p.uf}`].filter(Boolean).join(", ");

  async function confirmar() {
    if (!email) return;
    await enviarSugestao({ paroquia_id: p.id, tipo: "confirmar", texto: "" }).catch(() => {});
    setConfirmado(true);
  }

  async function compartilhar() {
    const base = location.protocol.startsWith("http") ? location.origin : ENDERECO_DO_SITE;
    const url = `${base}/missas/paroquia/${p.id}`;
    const texto = [p.nome, endereco, "", textoDaGrade(horarios, NOME_DO_TIPO_DE_HORARIO)].join("\n").trim();
    if (navigator.share) {
      try {
        await navigator.share({ title: p.nome, text: texto, url });
      } catch {}
      return;
    }
    try {
      await navigator.clipboard.writeText(`${texto}\n\n${url}`);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {}
  }

  return (
    <div className="flex flex-col gap-4">
      <Voltar para="/missas">Missas</Voltar>
      <Cabecalho
        titulo={p.nome}
        subtitulo={[NOME_DO_TIPO_DE_IGREJA[p.tipo], p.padroeiro && `Padroeiro: ${p.padroeiro}`, p.diocese].filter(Boolean).join(" · ")}
      />
      {(p.verificada || p.confirmado_em) && (
        <div className="flex flex-wrap gap-2 text-sm">
          {p.verificada && (
            <span className="flex items-center gap-1 rounded-full bg-marca-fundo px-3 py-1 font-medium text-destaque-texto">
              <BadgeCheck className="size-4" aria-hidden /> Verificada
            </span>
          )}
          {p.confirmado_em && <span className="rounded-full bg-marca-fundo px-3 py-1 text-tinta">{diasDoConfirmado(p.confirmado_em)}</span>}
        </div>
      )}

      {(p.endereco || p.bairro) && (
        <p className="flex items-start gap-2 text-tinta">
          <MapPin className="mt-0.5 size-5 shrink-0 text-destaque-texto" aria-hidden />
          <span>
            {endereco}
            {p.cep && <span className="text-tinta-suave">{`, CEP ${p.cep.slice(0, 5)}-${p.cep.slice(5)}`}</span>}
          </span>
        </p>
      )}

      {avisos.map((a) => (
        <p key={a.id} className="rounded-2xl border border-destaque-texto/30 bg-marca-fundo px-4 py-3 text-tinta">
          {a.texto}
        </p>
      ))}

      <ProximoHorario horarios={horarios} agora={agora} />

      <div className="flex flex-col gap-2">
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${destino}`}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-destaque font-semibold text-sobre-destaque"
        >
          <Navigation className="size-5" aria-hidden /> Como chegar
        </a>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => mudar(minha ? { minhaParoquia: "", minhaParoquiaNome: "" } : { minhaParoquia: p.id, minhaParoquiaNome: p.nome })}
            aria-pressed={minha}
            className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-2 text-sm font-semibold ${minha ? "border-destaque-texto/50 bg-marca-fundo text-destaque-texto" : "border-borda bg-cartao text-tinta"}`}
          >
            <Heart className={`size-5 shrink-0 ${minha ? "fill-current" : ""}`} aria-hidden /> Minha paróquia
          </button>
          <button type="button" onClick={() => void compartilhar()} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-cartao px-2 text-sm font-semibold text-tinta">
            {copiado ? <Check className="size-5 shrink-0" aria-hidden /> : <Share2 className="size-5 shrink-0" aria-hidden />}
            {copiado ? "Copiado" : "Compartilhar"}
          </button>
        </div>
      </div>

      {horarios.length ? <GradeDeHorarios horarios={horarios} agora={agora} /> : <p className="text-tinta-suave">Ainda sem horários cadastrados.</p>}

      {(p.telefone || p.whatsapp || p.instagram || p.site || p.email) && (
        <Cartao className="p-0">
          <ul className="flex flex-col divide-y divide-borda">
            {p.telefone && (
              <Contato href={`tel:+55${p.telefone}`} icone={Phone} rotulo="Secretaria">
                {telefoneLegivel(p.telefone)}
              </Contato>
            )}
            {p.whatsapp && (
              <Contato href={`https://wa.me/55${p.whatsapp}`} icone={MessageCircle} rotulo="WhatsApp da secretaria">
                {telefoneLegivel(p.whatsapp)}
              </Contato>
            )}
            {p.instagram && (
              <Contato href={`https://instagram.com/${p.instagram}`} icone={AtSign} rotulo="Instagram">
                {`@${p.instagram}`}
              </Contato>
            )}
            {p.site && (
              <Contato href={p.site.startsWith("http") ? p.site : `https://${p.site}`} icone={Globe} rotulo="Site">
                {p.site.replace(/^https?:\/\//, "")}
              </Contato>
            )}
            {p.email && (
              <Contato href={`mailto:${p.email}`} icone={Mail} rotulo="E-mail">
                {p.email}
              </Contato>
            )}
          </ul>
        </Cartao>
      )}

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
