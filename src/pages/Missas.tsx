import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import { AtSign, BadgeCheck, Bell, Check, ChevronDown, ChevronRight, Church, Clock, Globe, Heart, LocateFixed, Mail, MapPin, MessageCircle, Navigation, Pencil, Phone, Plus, Search, Share2 } from "lucide-react";
import { usePreferencias } from "@/lib/preferencias";
import { useConta } from "@/conta/useConta";
import { agendaDeEventos, agendaDeHorarios, carregarParoquia, cidadesComParoquias, enviarSugestao, igrejasComHorarios, procurarParoquias, type Cidade, type Local, type ParoquiaCompleta } from "@/paroquias/api";
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
import { NOME_DO_TIPO_DE_HORARIO, NOME_DO_TIPO_DE_IGREJA, ehMatriz, type Horario, type IgrejaComHorarios, type ItemDaAgenda, type ParoquiaResumo, type TipoDeHorario } from "@/paroquias/tipos";
import { useLocal } from "@/paroquias/useLocal";
import { compartilhar, enderecoPublico } from "@/lib/nativo";
import { linkComoChegar } from "@/lib/comoChegar";
import { Cartao, LINHA, LISTA, TituloCartao, TituloPagina } from "@/components/Cartao";
import { Cabecalho, Carregando, Indisponivel, Voltar } from "@/components/Devocao";
import { NaoEncontrada } from "@/pages/Simples";
import { agendaDeTercos } from "@/tercos/api";
import { Mural, SouDaEquipe } from "@/components/Mural";
import { Inscricoes, Oferta } from "@/components/PlanoDaParoquia";
import { IntencoesDeMissa } from "@/components/IntencoesDeMissa";
import { FolhetosDaParoquia } from "@/components/FolhetosDaParoquia";
import { useIgrejasSeguidas } from "@/paroquias/seguidas";
import { avisarMudancaDeIgrejas } from "@/lembretes/lembretes";

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
  return NOME_DO_DIA[d.getDay()]!;
}

function Chips<T extends string>({ opcoes, valor, onChange, rolar }: { opcoes: readonly (readonly [T, string])[]; valor: T; onChange: (v: T) => void; rolar?: boolean }) {
  const caixa = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!rolar) return;
    const ativo = caixa.current?.querySelector<HTMLElement>('[aria-pressed="true"]');
    const c = caixa.current;
    if (ativo && c && c.scrollWidth > c.clientWidth) c.scrollTo({ left: Math.max(0, ativo.offsetLeft - c.clientWidth / 2 + ativo.clientWidth / 2), behavior: "smooth" });
  }, [rolar, valor]);
  return (
    <div
      ref={caixa}
      className={rolar ? "-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0" : "flex flex-wrap gap-2"}
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

function Segmentos<T extends string>({ opcoes, valor, onChange, cheio }: { opcoes: readonly (readonly [T, string])[]; valor: T; onChange: (v: T) => void; cheio?: boolean }) {
  return (
    <div className={`flex rounded-full border border-borda bg-cartao p-0.5 ${cheio ? "w-full" : ""}`} role="group">
      {opcoes.map(([v, nome]) => (
        <button
          key={v}
          type="button"
          aria-pressed={v === valor}
          onClick={() => onChange(v)}
          className={`min-h-9 rounded-full text-sm font-medium whitespace-nowrap ${cheio ? "flex-1 px-1" : "px-3.5"} ${v === valor ? "bg-marca-fundo text-destaque-texto" : "text-tinta-suave"}`}
        >
          {nome}
        </button>
      ))}
    </div>
  );
}

function ItemDeParoquia({ p }: { p: ParoquiaResumo }) {
  return (
    <Link to={`/missas/paroquia/${p.id}`} className={`${LINHA} min-h-16`}>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-1.5 font-leitura text-[1.05rem] font-medium leading-snug text-marca">
          {p.nome}
          {p.verificada && <BadgeCheck className="size-4 shrink-0 text-destaque-texto" aria-label="Verificada" />}
        </span>
        <span className="block text-sm text-tinta-suave">{[!ehMatriz(p.tipo) && NOME_DO_TIPO_DE_IGREJA[p.tipo], p.bairro, p.cidade, km(p.distancia_km)].filter(Boolean).join(" · ")}</span>
      </span>
      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
    </Link>
  );
}

interface Paginas<T> {
  chave: string | null;
  itens: T[];
  total: number | null;
  ultima: number;
  estado: "carregando" | "pronto" | "erro" | "mais";
}

function usePaginas<T>(chave: string | null, tamanho: number, carregar: (pular: number) => Promise<T[]>) {
  const ref = useRef(carregar);
  ref.current = carregar;
  const [p, setP] = useState<Paginas<T>>({ chave: null, itens: [], total: null, ultima: 0, estado: "carregando" });
  useEffect(() => {
    if (chave === null) return;
    let ativo = true;
    setP({ chave, itens: [], total: null, ultima: 0, estado: "carregando" });
    ref
      .current(0)
      .then((r) => ativo && setP({ chave, itens: r, total: r.length ? ((r[0] as { total?: number }).total ?? null) : 0, ultima: r.length, estado: "pronto" }))
      .catch(() => ativo && setP({ chave, itens: [], total: null, ultima: 0, estado: "erro" }));
    return () => {
      ativo = false;
    };
  }, [chave]);
  const temMais = p.estado !== "erro" && (p.total !== null ? p.itens.length < p.total : p.ultima === tamanho);
  const mais = () => {
    if (p.estado !== "pronto") return;
    const c = p.chave;
    setP((s) => ({ ...s, estado: "mais" }));
    ref
      .current(p.itens.length)
      .then((r) => setP((s) => (s.chave === c ? { ...s, itens: [...s.itens, ...r], ultima: r.length, estado: "pronto" } : s)))
      .catch(() => setP((s) => (s.chave === c ? { ...s, estado: "pronto" } : s)));
  };
  return { itens: p.itens, total: p.total, carregando: p.chave !== chave || p.estado === "carregando", erro: p.estado === "erro", buscandoMais: p.estado === "mais", temMais, mais };
}

function MostrarMais({ onClick, buscando, children }: { onClick: () => void; buscando: boolean; children: ReactNode }) {
  return (
    <button type="button" onClick={onClick} disabled={buscando} className="flex min-h-12 items-center justify-center gap-1 rounded-xl border border-borda bg-cartao font-medium text-destaque-texto disabled:opacity-60">
      {buscando ? "Carregando" : children}
      {!buscando && <ChevronDown className="size-4" aria-hidden />}
    </button>
  );
}

function PorHorario({ itens, agora, base = "/missas/paroquia/" }: { itens: ItemDaAgenda[]; agora: Date; base?: string }) {
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
                  <Link to={`${base}${i.paroquia_id}`} className="flex min-h-16 items-center gap-3 px-4 py-2.5">
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

function PorIgreja({ igrejas, agora, comDia }: { igrejas: IgrejaComHorarios[]; agora: Date; comDia: boolean }) {
  return (
    <ul className="flex flex-col divide-y divide-borda rounded-2xl border border-borda bg-cartao">
      {igrejas.map((p) => (
        <li key={p.paroquia_id}>
          <Link to={`/missas/paroquia/${p.paroquia_id}`} className="flex min-h-16 items-center gap-3 px-4 py-3">
            <span className="min-w-0 flex-1">
              <span className="block font-leitura leading-snug text-marca">{p.nome}</span>
              <span className="block text-sm text-tinta-suave">{[p.bairro, km(p.distancia_km)].filter(Boolean).join(" · ")}</span>
              <span className="mt-1.5 flex flex-wrap gap-1.5">
                {p.horarios.map((h) => {
                  const q = new Date(h.quando.replace(" ", "T"));
                  const outroDia = comDia && diaDe(q) !== diaDe(agora);
                  const hora = hhmm(h.quando.slice(11, 16));
                  return (
                    <span key={h.quando} className="rounded-lg bg-marca-fundo px-2 py-0.5 text-sm font-semibold text-destaque-texto">
                      {outroDia ? `${NOME_CURTO_DO_DIA[q.getDay()]} ` : ""}
                      {h.ate ? `${hora} às ${hhmm(h.ate)}` : hora}
                    </span>
                  );
                })}
              </span>
            </span>
            <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          </Link>
        </li>
      ))}
    </ul>
  );
}

const chaveDaCidade = (c: Cidade) => `${c.cidade}|${c.uf}`;

function EscolherOnde({
  modo,
  cidade,
  raio,
  local,
  recentes,
  estadoLocal,
  onPerto,
  onCidade,
  onRaio,
}: {
  modo: "perto" | "cidade" | "nenhum";
  cidade: Cidade | null;
  raio: number;
  local: Local | null;
  recentes: Cidade[];
  estadoLocal: string;
  onPerto: () => void;
  onCidade: (c: Cidade) => void;
  onRaio: (r: number) => void;
}) {
  const [filtro, setFiltro] = useState("");
  const [achadas, setAchadas] = useState<Cidade[] | null | "erro">(null);
  const [vizinhas, setVizinhas] = useState<Cidade[]>([]);
  const t = filtro.trim();

  useEffect(() => {
    if (t.length < 2) {
      setAchadas(null);
      return;
    }
    let ativo = true;
    const espera = setTimeout(
      () =>
        cidadesComParoquias({ termo: t, limite: 8 })
          .then((r) => ativo && setAchadas(r))
          .catch(() => ativo && setAchadas("erro")),
      250,
    );
    return () => {
      ativo = false;
      clearTimeout(espera);
    };
  }, [t]);

  useEffect(() => {
    if (!local) return;
    let ativo = true;
    cidadesComParoquias({ local, limite: 6 })
      .then((r) => ativo && setVizinhas(r))
      .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [local]);

  const jaRecente = new Set(recentes.map(chaveDaCidade));
  const perto = vizinhas.filter((c) => !jaRecente.has(chaveDaCidade(c))).slice(0, 4);

  const lista = (titulo: string, cidades: Cidade[]) =>
    cidades.length > 0 && (
      <div>
        {titulo && <h3 className="px-1 pt-1 text-xs font-semibold uppercase tracking-wide text-tinta-suave">{titulo}</h3>}
        <ul className="flex flex-col divide-y divide-borda">
          {cidades.map((c) => {
            const atual = modo === "cidade" && cidade?.cidade === c.cidade && cidade.uf === c.uf;
            return (
              <li key={chaveDaCidade(c)}>
                <button type="button" onClick={() => onCidade(c)} aria-pressed={atual} className="flex min-h-12 w-full items-center gap-2 px-1 text-left">
                  <span className={`flex-1 font-medium ${atual ? "text-destaque-texto" : "text-tinta"}`}>
                    {c.cidade}, {c.uf}
                  </span>
                  {c.total > 0 && <span className="text-sm text-tinta-suave">{c.total === 1 ? "1 igreja" : `${c.total} igrejas`}</span>}
                  {atual && <Check className="size-4 text-destaque-texto" aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );

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
        {modo === "perto" && <Chips opcoes={RAIOS.map((r) => [String(r), `${r} km`] as const)} valor={String(raio)} onChange={(v) => onRaio(Number(v))} />}
      </div>
      <div className="flex flex-col gap-2">
        <label className="flex min-h-11 items-center gap-2 rounded-xl border border-borda bg-papel px-3 focus-within:border-destaque-texto">
          <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          <input
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Procurar cidade"
            aria-label="Procurar cidade"
            type="search"
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-tinta-suave/70"
          />
        </label>
        {t.length >= 2 ? (
          achadas === null ? null : achadas === "erro" ? (
            <Indisponivel />
          ) : achadas.length ? (
            lista("", achadas)
          ) : (
            <p className="py-2 text-center text-sm text-tinta-suave">Nenhuma cidade encontrada.</p>
          )
        ) : (
          <>
            {lista("Recentes", recentes)}
            {lista("Perto de você", perto)}
          </>
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
  const ehTerco = params.get("tipo") === "terco";
  const ehEvento = params.get("tipo") === "eventos";
  const tipo = (TIPOS.includes(params.get("tipo") as TipoDeHorario) ? params.get("tipo") : "missa") as TipoDeHorario;
  const quandoBruto = params.get("quando") ?? "agora";
  const periodo = (PERIODOS.some(([v]) => v === params.get("periodo")) ? params.get("periodo") : "") as Periodo;
  const ordem = params.get("ordem") === "igreja" ? "igreja" : "horario";
  const raio = RAIOS.includes(Number(params.get("raio"))) ? Number(params.get("raio")) : RAIO_PADRAO;
  const [agora, setAgora] = useState(() => new Date());
  const quando = quandoBruto === "agora" || deslocamento(quandoBruto, agora) !== null ? quandoBruto : "agora";

  const cidadeUrl = params.get("cidade");
  const ufUrl = params.get("uf") ?? "";
  const cidade = useMemo<Cidade | null>(() => {
    if (cidadeUrl) return { cidade: cidadeUrl, uf: ufUrl, total: 0 };
    const [pc, puf] = preferencias.cidadeDasMissas.split("|");
    return pc ? { cidade: pc, uf: puf ?? "", total: 0 } : null;
  }, [cidadeUrl, ufUrl, preferencias.cidadeDasMissas]);
  const recentes = useMemo(
    () =>
      preferencias.cidadesRecentes.map((r) => {
        const [c, uf] = r.split("|");
        return { cidade: c ?? "", uf: uf ?? "", total: 0 };
      }),
    [preferencias.cidadesRecentes],
  );
  const modo = cidade ? "cidade" : local ? "perto" : "nenhum";
  const [abrirOnde, setAbrirOnde] = useState(false);

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

  const onde = useMemo(() => (modo === "cidade" ? { cidade } : modo === "perto" ? { local, raioKm: raio } : null), [modo, cidade, local, raio]);
  const consulta = useMemo(() => {
    if (!onde) return null;
    const j = janela(quando, periodo, new Date());
    if (ehEvento && quando === "agora") j.fim = new Date(j.inicio.getTime() + 7 * 86_400_000);
    return {
      ...onde,
      tipo,
      inicio: agoraLocal(j.inicio),
      ate: agoraLocal(j.fim),
      horas: Math.max(1, Math.ceil((j.fim.getTime() - j.inicio.getTime()) / 3_600_000)),
      passou: j.fim <= j.inicio,
    };
  }, [onde, quando, periodo, tipo, ehEvento]);
  const chave = consulta ? JSON.stringify(consulta) : null;
  const vazioJa = async <T,>(): Promise<T[]> => [];

  const tercos = usePaginas<ItemDaAgenda>(ehTerco ? chave : null, 30, (pular) =>
    consulta && !consulta.passou
      ? agendaDeTercos(consulta, pular, 30).then((r) => r.map((x) => ({ paroquia_id: x.terco_id, nome: x.nome, bairro: x.bairro, cidade: x.cidade, distancia_km: x.distancia_km, quando: x.quando, ate: null, observacao: x.observacao, total: x.total })))
      : vazioJa(),
  );
  const eventos = usePaginas<ItemDaAgenda>(ehEvento ? chave : null, 30, (pular) => (consulta && !consulta.passou ? agendaDeEventos(consulta, pular, 30) : vazioJa()));
  const agenda = usePaginas<ItemDaAgenda>(!ehTerco && !ehEvento && ordem === "horario" ? chave : null, 30, (pular) =>
    consulta && !consulta.passou ? agendaDeHorarios(consulta, pular, 30) : vazioJa(),
  );
  const igrejas = usePaginas<IgrejaComHorarios>(!ehTerco && !ehEvento && ordem === "igreja" ? chave : null, 20, (pular) =>
    consulta && !consulta.passou ? igrejasComHorarios(consulta, pular, 20) : vazioJa(),
  );
  const t = termo.trim();
  const achadas = usePaginas<ParoquiaResumo>(t.length >= 2 ? `${t}|${local?.lat}|${local?.lng}` : null, 20, (pular) =>
    procurarParoquias({ termo: t, local, raioKm: 5000, limite: 20, pular }),
  );

  function escolherPerto() {
    mudar({ cidadeDasMissas: "" });
    mudarParams({ cidade: null, uf: null });
    pedir();
    setAbrirOnde(false);
  }

  function escolherCidade(c: Cidade) {
    const k = chaveDaCidade(c);
    mudar({ cidadeDasMissas: k, cidadesRecentes: [k, ...preferencias.cidadesRecentes.filter((x) => x !== k)].slice(0, 4) });
    mudarParams({ cidade: c.cidade, uf: c.uf, raio: null });
    setAbrirOnde(false);
  }

  const dias: (readonly [string, string])[] = [
    ["agora", "Agora"],
    ["hoje", "Hoje"],
    ["amanha", "Amanhã"],
    ...[2, 3, 4, 5, 6].map((off) => {
      const d = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + off);
      return [DIA_POR_CHAVE[d.getDay()]!, NOME_CURTO_DO_DIA[d.getDay()]!] as const;
    }),
  ];
  const off = deslocamento(quando, agora);
  const diaAtivo = off === null ? "agora" : off === 0 ? "hoje" : off === 1 ? "amanha" : DIA_POR_CHAVE[(agora.getDay() + off) % 7]!;
  const vazio = ehTerco ? "Nenhum terço neste período." : ehEvento ? "Nenhum evento neste período." : `Nenhuma ${NOME_DO_TIPO_DE_HORARIO[tipo].toLowerCase()} neste período.`;
  const resumoOnde = modo === "cidade" ? `${cidade!.cidade}${cidade!.uf ? `, ${cidade!.uf}` : ""}` : `Perto de mim · até ${raio} km`;
  const proximoRaio = RAIOS.find((r) => r > raio);
  const atual = ehTerco ? tercos : ehEvento ? eventos : ordem === "horario" ? agenda : igrejas;
  const contagem =
    atual.carregando || atual.total === null
      ? ""
      : ehTerco
        ? atual.total === 1
          ? "1 terço"
          : `${atual.total} terços`
        : ehEvento
        ? atual.total === 1
          ? "1 evento"
          : `${atual.total} eventos`
        : ordem === "horario"
        ? atual.total === 1
          ? "1 horário"
          : `${atual.total} horários`
        : atual.total === 1
          ? "1 igreja"
          : `${atual.total} igrejas`;

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

      {t.length >= 2 ? (
        achadas.carregando ? (
          <Carregando />
        ) : achadas.erro ? (
          <Indisponivel />
        ) : achadas.itens.length ? (
          <div className="flex flex-col gap-2">
            <div className={LISTA}>
              {achadas.itens.map((p) => (
                <ItemDeParoquia key={p.id} p={p} />
              ))}
            </div>
            {achadas.temMais && (
              <MostrarMais onClick={achadas.mais} buscando={achadas.buscandoMais}>
                Mostrar mais
              </MostrarMais>
            )}
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
              local={local}
              recentes={recentes}
              estadoLocal={estado}
              onPerto={escolherPerto}
              onCidade={escolherCidade}
              onRaio={(r) => mudarParams({ raio: r === RAIO_PADRAO ? null : String(r) })}
            />
          )}

          {modo !== "nenhum" && (
            <>
              <Chips
                opcoes={[...TIPOS.map((x) => [x, NOME_DO_TIPO_DE_HORARIO[x]] as const), ["terco", "Terço"] as const, ["eventos", "Eventos"] as const]}
                valor={ehTerco ? "terco" : ehEvento ? "eventos" : tipo}
                onChange={(v) => mudarParams({ tipo: v === "missa" ? null : v })}
              />
              <Chips rolar opcoes={dias} valor={diaAtivo} onChange={(v) => mudarParams({ quando: v === "agora" ? null : v, periodo: v === "agora" ? null : periodo || null })} />
              {quando !== "agora" && <Segmentos cheio opcoes={PERIODOS} valor={periodo} onChange={(v) => mudarParams({ periodo: v || null })} />}

              <div className="flex items-center justify-between gap-3 pt-1">
                <span className="text-sm text-tinta-suave">{contagem}</span>
                {!ehTerco && !ehEvento && (
                  <Segmentos
                    opcoes={[
                      ["horario", "Por horário"],
                      ["igreja", "Por igreja"],
                    ] as const}
                    valor={ordem}
                    onChange={(v) => mudarParams({ ordem: v === "horario" ? null : v })}
                  />
                )}
              </div>

              {atual.carregando ? (
                <Carregando />
              ) : atual.erro ? (
                <Indisponivel />
              ) : atual.itens.length === 0 ? (
                <p className="py-4 text-center text-tinta-suave">{vazio}</p>
              ) : ehTerco ? (
                <PorHorario itens={tercos.itens} agora={agora} base="/tercos/" />
              ) : ehEvento ? (
                <PorHorario itens={eventos.itens} agora={agora} />
              ) : ordem === "horario" ? (
                <PorHorario itens={agenda.itens} agora={agora} />
              ) : (
                <PorIgreja igrejas={igrejas.itens} agora={agora} comDia={quando === "agora"} />
              )}
              {!atual.carregando && atual.temMais && (
                <MostrarMais onClick={atual.mais} buscando={atual.buscandoMais}>
                  {ehTerco ? "Mais terços" : ehEvento ? "Mais eventos" : ordem === "horario" ? "Mais horários" : "Mais igrejas"}
                </MostrarMais>
              )}
              {!atual.carregando && !atual.erro && (atual.total ?? 0) < 3 && modo === "perto" && proximoRaio && (
                <button type="button" onClick={() => mudarParams({ raio: String(proximoRaio) })} className="min-h-11 rounded-xl border border-borda bg-cartao font-medium text-destaque-texto">
                  Procurar até {proximoRaio} km
                </button>
              )}
              {ehTerco && (
                <Link to="/tercos/novo" className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-dashed border-borda font-semibold text-destaque-texto">
                  <Plus className="size-4" aria-hidden /> Cadastrar o terço do seu grupo
                </Link>
              )}
            </>
          )}
        </>
      )}
      {t.length >= 2 && !achadas.carregando && !achadas.temMais && (
        <Link to="/missas/sugerir" className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-dashed border-borda font-semibold text-destaque-texto">
          <Plus className="size-4" aria-hidden /> Sugerir paróquia
        </Link>
      )}
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
                const comum = g.horarios.every((h) => h.observacao === g.horarios[0]!.observacao) ? g.horarios[0]!.observacao : "";
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
                            {(h.semanas?.length || (!comum && h.observacao)) && (
                              <span className="font-medium text-tinta-suave"> · {[descreverSemanas(h.semanas), !comum && h.observacao].filter(Boolean).join(" · ")}</span>
                            )}
                          </span>
                        ))}
                      </span>
                      {comum && <span className="text-sm text-tinta-suave">{comum}</span>}
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
          <span className="block font-medium text-tinta [overflow-wrap:anywhere]">{children}</span>
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
  const [seguidas, alternarSeguida] = useIgrejasSeguidas();
  const { hash } = useLocation();
  const carregou = dados !== null && typeof dados === "object";

  useEffect(() => {
    if (!carregou || !hash) return;
    let tentativas = 0;
    const t = setInterval(() => {
      const el = document.getElementById(hash.slice(1));
      if (el || ++tentativas > 20) clearInterval(t);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => clearInterval(t);
  }, [carregou, hash]);

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
  const { paroquia: p, horarios, avisos, podeEditar, matriz, capelas } = dados;
  const minha = preferencias.minhaParoquia === p.id;
  const sigo = seguidas.includes(p.id);
  const destino = p.lat !== null && p.lng !== null ? `${p.lat},${p.lng}` : encodeURIComponent(`${p.endereco}, ${p.bairro}, ${p.cidade} - ${p.uf}`);
  const endereco = [p.endereco, p.bairro, `${p.cidade} - ${p.uf}`].filter(Boolean).join(", ");

  async function confirmar() {
    if (!email) return;
    await enviarSugestao({ paroquia_id: p.id, tipo: "confirmar", texto: "" }).catch(() => {});
    setConfirmado(true);
  }

  async function enviar() {
    const texto = [p.nome, endereco, "", textoDaGrade(horarios, NOME_DO_TIPO_DE_HORARIO)].join("\n").trim();
    if ((await compartilhar({ titulo: p.nome, texto, url: `${enderecoPublico()}/missas/paroquia/${p.id}` })) === "copiado") {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Voltar para="/missas">Missas</Voltar>
      <Cabecalho
        titulo={p.nome}
        subtitulo={[NOME_DO_TIPO_DE_IGREJA[p.tipo], p.padroeiro && `Padroeiro: ${p.padroeiro}`, p.diocese].filter(Boolean).join(" · ")}
      />
      {matriz && (
        <Link to={`/missas/paroquia/${matriz.id}`} className="flex min-h-12 items-center gap-2 rounded-2xl border border-borda bg-cartao px-4 py-2.5 text-tinta">
          <Church className="size-5 shrink-0 text-destaque-texto" aria-hidden />
          <span className="min-w-0 flex-1">
            <span className="text-tinta-suave">{matriz.tipo === "santuario" || matriz.tipo === "mosteiro" ? "Pertence ao " : "Pertence à "}</span>
            <span className="font-medium">{matriz.nome}</span>
          </span>
          <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        </Link>
      )}
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
          href={linkComoChegar(destino)}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-destaque font-semibold text-sobre-destaque"
        >
          <Navigation className="size-5" aria-hidden /> Como chegar
        </a>
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => {
              mudar(minha ? { minhaParoquia: "", minhaParoquiaNome: "" } : { minhaParoquia: p.id, minhaParoquiaNome: p.nome });
              setTimeout(avisarMudancaDeIgrejas, 300);
            }}
            aria-pressed={minha}
            className={`flex min-h-16 flex-col items-center justify-center gap-1 rounded-xl border px-1 text-xs font-semibold ${minha ? "border-destaque-texto/50 bg-marca-fundo text-destaque-texto" : "border-borda bg-cartao text-tinta"}`}
          >
            <Heart className={`size-5 shrink-0 ${minha ? "fill-current" : ""}`} aria-hidden /> Minha paróquia
          </button>
          <button
            type="button"
            onClick={() => {
              alternarSeguida(p.id);
              setTimeout(avisarMudancaDeIgrejas, 300);
            }}
            aria-pressed={sigo}
            className={`flex min-h-16 flex-col items-center justify-center gap-1 rounded-xl border px-1 text-xs font-semibold ${sigo ? "border-destaque-texto/50 bg-marca-fundo text-destaque-texto" : "border-borda bg-cartao text-tinta"}`}
          >
            <Bell className={`size-5 shrink-0 ${sigo ? "fill-current" : ""}`} aria-hidden /> {sigo ? "Seguindo" : "Seguir"}
          </button>
          <button type="button" onClick={() => void enviar()} className="flex min-h-16 flex-col items-center justify-center gap-1 rounded-xl border border-borda bg-cartao px-1 text-xs font-semibold text-tinta">
            {copiado ? <Check className="size-5 shrink-0" aria-hidden /> : <Share2 className="size-5 shrink-0" aria-hidden />}
            {copiado ? "Copiado" : "Compartilhar"}
          </button>
        </div>
      </div>

      <Oferta p={p} />

      <Mural paroquia={p.id} podeEditar={podeEditar} />

      <FolhetosDaParoquia paroquia={p.id} nome={p.nome} podeEditar={podeEditar} />

      <Inscricoes paroquia={p.id} email={email} />

      <IntencoesDeMissa p={p} horarios={horarios} email={email} />

      {horarios.length ? <GradeDeHorarios horarios={horarios} agora={agora} /> : <p className="text-tinta-suave">Ainda sem horários cadastrados.</p>}

      {capelas.length > 0 && (
        <section className="flex flex-col gap-2">
          <h2 className="px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">{`Capelas e comunidades (${capelas.length})`}</h2>
          <div className={LISTA}>
            {capelas.map((c) => (
              <Link key={c.id} to={`/missas/paroquia/${c.id}`} className={LINHA}>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium leading-snug text-tinta">{c.nome}</span>
                  <span className="block text-sm text-tinta-suave">{[c.bairro, c.cidade !== p.cidade && c.cidade].filter(Boolean).join(" · ")}</span>
                </span>
                <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
              </Link>
            ))}
          </div>
        </section>
      )}

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
        {email && !podeEditar && <SouDaEquipe paroquia={p.id} />}
        {p.fonte && (
          <p className="pt-2 text-center text-sm text-tinta-suave">
            Fonte:{" "}
            {p.fonte === "Missas.com.br" ? (
              <a href="https://missas.com.br" target="_blank" rel="noreferrer" className="underline underline-offset-2">
                Missas.com.br
              </a>
            ) : p.fonte === "OpenStreetMap" ? (
              <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer" className="underline underline-offset-2">
                © colaboradores do OpenStreetMap
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
