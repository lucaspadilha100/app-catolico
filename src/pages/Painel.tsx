import { useCallback, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ChevronRight, Plus, Trash2 } from "lucide-react";
import { useConta } from "@/conta/useConta";
import {
  adicionarGestor,
  apagarAviso,
  apagarHorario,
  carregarParoquia,
  confirmarParoquia,
  coordenadasDoEndereco,
  marcarConferida,
  notaDaParoquia,
  type NotaDaParoquia,
  minhasParoquiasDeGestor,
  paroquiasDoPainel,
  type FiltroDoPainel,
  type ParoquiaDoPainel,
  pedidosDeGestaoAbertos,
  revisarPedidoDeGestao,
  type PedidoDeGestao,
  revisarSugestao,
  salvarAviso,
  salvarHorario,
  salvarParoquia,
  souAdmin,
  sugestoesPendentes,
  type ParoquiaCompleta,
  igrejaLigada,
  type IgrejaLigada,
  procurarParoquias,
} from "@/paroquias/api";
import { descreverSemanas, hhmm, NOME_DO_DIA } from "@/paroquias/horarios";
import { NOME_DO_TIPO_DE_HORARIO, NOME_DO_TIPO_DE_IGREJA, ehMatriz, type Horario, type Paroquia, type ParoquiaResumo, type Sugestao, type TipoDeHorario } from "@/paroquias/tipos";
import { Cartao } from "@/components/Cartao";
import { revisarTerco, tercosParaRevisar } from "@/tercos/api";
import { NOME_DA_ORACAO_DA_CAMPANHA, apagarIntencao, fraseDaIntencao, intencoesEscondidas, moderar, salvarCampanha, type Campanha, type Intencao } from "@/comunidade/api";
import type { Terco } from "@/tercos/tipos";
import { quandoDoTerco } from "@/pages/Tercos";
import { Cabecalho, Carregando, Voltar } from "@/components/Devocao";
import { ApoiosParaConferirLista, IntencoesNoPainel, MinisteriosNoPainel, PixParaConferirLista, PlanoNoPainel, VotacaoNoPainel } from "@/pages/PainelPlano";

const CAMPO = "min-h-12 w-full rounded-xl border border-borda bg-papel px-3 text-base";
const BOTAO = "min-h-12 rounded-xl bg-primario px-4 font-semibold text-sobre-primario disabled:opacity-50";
const BOTAO_CLARO = "min-h-11 rounded-xl border border-borda bg-cartao px-4 font-semibold text-tinta";

const NOME_DA_SUGESTAO: Record<Sugestao["tipo"], string> = {
  confirmar: "Horários certos",
  horario_errado: "Horário errado",
  novo_horario: "Horário novo",
  nova_paroquia: "Paróquia nova",
  outro: "Outro",
};

function Campo({ rotulo, children }: { rotulo: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-tinta-suave">{rotulo}</span>
      {children}
    </label>
  );
}

function useAcesso() {
  const { email, pronto } = useConta();
  const [acesso, setAcesso] = useState<{ admin: boolean; minhas: string[] } | null>(null);
  useEffect(() => {
    if (!pronto) return;
    if (!email) {
      setAcesso({ admin: false, minhas: [] });
      return;
    }
    let ativo = true;
    Promise.all([souAdmin(), minhasParoquiasDeGestor()])
      .then(([admin, minhas]) => ativo && setAcesso({ admin, minhas }))
      .catch(() => ativo && setAcesso({ admin: false, minhas: [] }));
    return () => {
      ativo = false;
    };
  }, [email, pronto]);
  return acesso;
}

export function useTemPainel(): boolean {
  const a = useAcesso();
  return !!a && (a.admin || a.minhas.length > 0);
}

function Moderacao() {
  const [lista, setLista] = useState<Intencao[] | null>(null);
  const recarregar = useCallback(() => {
    intencoesEscondidas()
      .then(setLista)
      .catch(() => setLista([]));
  }, []);
  useEffect(recarregar, [recarregar]);
  if (!lista?.length) return null;
  return (
    <section className="flex flex-col gap-2">
      <h2 className="titulo-secao px-1">Intenções escondidas por denúncias ({lista.length})</h2>
      {lista.map((i) => (
        <Cartao key={i.id} className="flex flex-col gap-3 p-4">
          <span className="font-medium text-tinta">{fraseDaIntencao(i.tipo, i.nome)}</span>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" onClick={() => void moderar(i.id, false).then(recarregar)} className={BOTAO_CLARO}>
              Mostrar de novo
            </button>
            <button type="button" onClick={() => void apagarIntencao(i.id).then(recarregar)} className="min-h-11 rounded-xl border border-borda bg-cartao font-semibold text-[#a9271f]">
              Apagar
            </button>
          </div>
        </Cartao>
      ))}
    </section>
  );
}

function NovaCampanha() {
  const [aberto, setAberto] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [oracao, setOracao] = useState<Campanha["oracao"]>("terco");
  const [meta, setMeta] = useState("100000");
  const hoje = new Date().toLocaleDateString("sv-SE");
  const [inicio, setInicio] = useState(hoje);
  const [fim, setFim] = useState(hoje);
  const [estado, setEstado] = useState("");
  if (!aberto)
    return (
      <button type="button" onClick={() => setAberto(true)} className={BOTAO_CLARO}>
        Nova campanha de oração
      </button>
    );
  return (
    <Cartao className="flex flex-col gap-3 p-4">
      <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Um milhão de terços pelo Brasil" maxLength={120} className={CAMPO} />
      <select value={oracao} onChange={(e) => setOracao(e.target.value as Campanha["oracao"])} className={CAMPO}>
        {(Object.keys(NOME_DA_ORACAO_DA_CAMPANHA) as Campanha["oracao"][]).map((o) => (
          <option key={o} value={o}>
            {NOME_DA_ORACAO_DA_CAMPANHA[o][1]}
          </option>
        ))}
      </select>
      <input value={meta} onChange={(e) => setMeta(e.target.value.replace(/\D/g, ""))} inputMode="numeric" aria-label="Meta" className={CAMPO} />
      <div className="grid grid-cols-2 gap-2">
        <input type="date" value={inicio} onChange={(e) => setInicio(e.target.value)} aria-label="Início" className={CAMPO} />
        <input type="date" value={fim} onChange={(e) => setFim(e.target.value)} aria-label="Fim" className={CAMPO} />
      </div>
      {estado && <p className="text-sm text-tinta-suave">{estado}</p>}
      <button
        type="button"
        disabled={titulo.trim().length < 3 || !Number(meta) || fim < inicio}
        onClick={() =>
          void salvarCampanha({ titulo: titulo.trim(), oracao, meta: Number(meta), inicio, fim })
            .then(() => {
              setEstado("Campanha criada.");
              setAberto(false);
            })
            .catch(() => setEstado("Não foi possível criar."))
        }
        className={BOTAO}
      >
        Criar campanha
      </button>
    </Cartao>
  );
}

function PedidosDeGestao() {
  const [lista, setLista] = useState<PedidoDeGestao[] | null>(null);
  const recarregar = useCallback(() => {
    pedidosDeGestaoAbertos()
      .then(setLista)
      .catch(() => setLista([]));
  }, []);
  useEffect(recarregar, [recarregar]);
  if (!lista?.length) return null;
  return (
    <section className="flex flex-col gap-2">
      <h2 className="titulo-secao px-1">Equipes pedindo a página ({lista.length})</h2>
      {lista.map((g) => (
        <Cartao key={g.id} className="flex flex-col gap-3 p-4">
          <Link to={`/missas/paroquia/${g.paroquia_id}`} className="font-medium text-tinta">
            {g.paroquia} · {g.cidade}
          </Link>
          <p className="text-sm text-tinta">
            {g.nome}, {g.funcao}
            <br />
            Contato informado: {g.contato}
            <br />
            Conta: {g.email}
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" onClick={() => void revisarPedidoDeGestao(g.id, true).then(recarregar)} className={BOTAO}>
              Aprovar
            </button>
            <button type="button" onClick={() => void revisarPedidoDeGestao(g.id, false).then(recarregar)} className={BOTAO_CLARO}>
              Recusar
            </button>
          </div>
        </Cartao>
      ))}
    </section>
  );
}

function TercosParaRevisar() {
  const [lista, setLista] = useState<Terco[] | null>(null);
  const recarregar = useCallback(() => {
    tercosParaRevisar()
      .then(setLista)
      .catch(() => setLista([]));
  }, []);
  useEffect(recarregar, [recarregar]);
  if (!lista?.length) return null;
  return (
    <section className="flex flex-col gap-2">
      <h2 className="titulo-secao px-1">Terços para revisar ({lista.length})</h2>
      {lista.map((t) => (
        <Cartao key={t.id} className="flex flex-col gap-3 p-4">
          <Link to={`/tercos/${t.id}`} className="flex flex-col">
            <span className="font-medium text-tinta">{t.nome}</span>
            <span className="text-sm text-tinta-suave">{[quandoDoTerco(t), t.comunidade, t.bairro, t.cidade].filter(Boolean).join(" · ")}</span>
          </Link>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" onClick={() => void revisarTerco(t.id, "aprovado").then(recarregar)} className={BOTAO}>
              Aprovar
            </button>
            <button type="button" onClick={() => void revisarTerco(t.id, "recusado").then(recarregar)} className="min-h-12 rounded-xl border border-borda bg-cartao font-semibold text-tinta">
              Recusar
            </button>
          </div>
        </Cartao>
      ))}
    </section>
  );
}

function Sugestoes() {
  const [lista, setLista] = useState<Awaited<ReturnType<typeof sugestoesPendentes>> | null>(null);
  const recarregar = useCallback(() => {
    sugestoesPendentes()
      .then(setLista)
      .catch(() => setLista([]));
  }, []);
  useEffect(recarregar, [recarregar]);

  const revisar = async (s: Sugestao, situacao: "aceita" | "recusada") => {
    await revisarSugestao(s.id, situacao, s.tipo === "confirmar" ? s.paroquia_id : null);
    recarregar();
  };

  if (lista === null) return <Carregando />;
  return (
    <section className="flex flex-col gap-2">
      <h2 className="titulo-secao px-1">Sugestões ({lista.length})</h2>
      {lista.map((s) => (
        <Cartao key={s.id} className="flex flex-col gap-2">
          <p className="text-sm text-tinta-suave">
            {NOME_DA_SUGESTAO[s.tipo]} · {new Date(s.criado_em).toLocaleDateString("pt-BR")}
          </p>
          <p className="font-semibold text-marca">{s.paroquias?.nome ?? `${String(s.dados.nome ?? "")} (${String(s.dados.cidade ?? "")})`}</p>
          {s.texto && <p className="whitespace-pre-line text-tinta">{s.texto}</p>}
          <div className="flex flex-wrap gap-2">
            {s.paroquia_id && (
              <Link to={`/painel/paroquia/${s.paroquia_id}`} className={`${BOTAO_CLARO} flex items-center`}>
                Abrir
              </Link>
            )}
            {s.tipo === "nova_paroquia" && (
              <Link to="/painel/paroquia/nova" className={`${BOTAO_CLARO} flex items-center`}>
                Cadastrar
              </Link>
            )}
            <button type="button" onClick={() => void revisar(s, "aceita")} className={BOTAO_CLARO}>
              {s.tipo === "confirmar" ? "Confirmar" : "Feito"}
            </button>
            <button type="button" onClick={() => void revisar(s, "recusada")} className="min-h-11 px-3 font-semibold text-tinta-suave">
              Recusar
            </button>
          </div>
        </Cartao>
      ))}
    </section>
  );
}

const POR_PAGINA = 50;

function ListaDoPainel() {
  const [params, setParams] = useSearchParams();
  const filtro = (["conferir", "conferidas", "todas"].includes(params.get("filtro") ?? "") ? params.get("filtro") : "conferir") as FiltroDoPainel;
  const termo = params.get("q") ?? "";
  const [lista, setLista] = useState<ParoquiaDoPainel[] | null>(null);
  const [contagem, setContagem] = useState<Record<FiltroDoPainel, number> | null>(null);
  const [buscandoMais, setBuscandoMais] = useState(false);
  const mudar = (k: string, v: string, padrao: string) => {
    const p = new URLSearchParams(params);
    if (v && v !== padrao) p.set(k, v);
    else p.delete(k);
    setParams(p, { replace: true });
  };
  useEffect(() => {
    let ativo = true;
    setLista(null);
    const espera = setTimeout(
      () =>
        paroquiasDoPainel({ filtro, termo, pular: 0, limite: POR_PAGINA })
          .then((r) => {
            if (!ativo) return;
            setLista(r.lista);
            setContagem(r.contagem);
          })
          .catch(() => ativo && setLista([])),
      termo ? 300 : 0,
    );
    return () => {
      ativo = false;
      clearTimeout(espera);
    };
  }, [filtro, termo]);
  async function mais() {
    if (!lista) return;
    setBuscandoMais(true);
    try {
      const r = await paroquiasDoPainel({ filtro, termo, pular: lista.length, limite: POR_PAGINA });
      setLista([...lista, ...r.lista]);
    } catch {}
    setBuscandoMais(false);
  }
  return (
    <section className="flex flex-col gap-2">
      <h2 className="titulo-secao px-1">Paróquias</h2>
      <div className="flex flex-wrap gap-2" role="group">
        {(
          [
            ["conferir", "Para conferir"],
            ["conferidas", "Conferidas"],
            ["todas", "Todas"],
          ] as const
        ).map(([v, nome]) => (
          <button
            key={v}
            type="button"
            aria-pressed={filtro === v}
            onClick={() => mudar("filtro", v, "conferir")}
            className={`min-h-10 rounded-full border px-4 text-sm font-medium ${filtro === v ? "border-transparent bg-primario text-sobre-primario" : "border-borda bg-cartao text-tinta"}`}
          >
            {nome}
            {contagem && ` (${contagem[v]})`}
          </button>
        ))}
      </div>
      <input value={termo} onChange={(e) => mudar("q", e.target.value, "")} placeholder="Filtrar pelo nome, bairro ou cidade" aria-label="Filtrar" className={CAMPO} />
      {lista === null ? (
        <Carregando />
      ) : (
        <>
          {lista.map((p) => (
            <Link key={p.id} to={`/painel/paroquia/${p.id}`} className="flex min-h-14 items-center gap-3 rounded-xl bg-cartao px-4 py-2">
              <span className="min-w-0 flex-1">
                <span className="block leading-snug text-tinta">{p.nome}</span>
                <span className="block text-sm text-tinta-suave">
                  {[p.bairro, p.cidade, p.lat === null && "sem mapa", !p.ativa && "oculta", p.conferida_em && `conferida em ${new Date(p.conferida_em).toLocaleDateString("pt-BR")}`]
                    .filter(Boolean)
                    .join(" · ")}
                </span>
              </span>
              <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
            </Link>
          ))}
          {contagem && lista.length < contagem[filtro] && (
            <button type="button" onClick={() => void mais()} disabled={buscandoMais} className="min-h-12 rounded-xl border border-borda bg-cartao font-medium text-destaque-texto disabled:opacity-60">
              {buscandoMais ? "Carregando" : `Mostrar mais (${contagem[filtro] - lista.length})`}
            </button>
          )}
        </>
      )}
    </section>
  );
}

export function Painel() {
  const acesso = useAcesso();
  const [nomes, setNomes] = useState<Record<string, string>>({});
  useEffect(() => {
    for (const id of acesso?.minhas ?? []) void carregarParoquia(id).then((d) => d && setNomes((n) => ({ ...n, [id]: d.paroquia.nome })));
  }, [acesso]);

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/mais">Mais</Voltar>
      <Cabecalho titulo="Painel" />
      {acesso === null ? (
        <Carregando />
      ) : !acesso.admin && !acesso.minhas.length ? (
        <p className="text-tinta-suave">Sem acesso.</p>
      ) : (
        <>
          {acesso.minhas.length > 0 && (
            <section className="flex flex-col gap-2">
              <h2 className="titulo-secao px-1">Minhas paróquias</h2>
              {acesso.minhas.map((id) => (
                <Link key={id} to={`/painel/paroquia/${id}`} className="flex min-h-12 items-center justify-between rounded-xl bg-cartao px-4">
                  {nomes[id] ?? "Paróquia"}
                  <ChevronRight className="size-5 text-tinta-suave" aria-hidden />
                </Link>
              ))}
            </section>
          )}
          {acesso.admin && (
            <>
              <Link to="/painel/paroquia/nova" className={`${BOTAO} flex items-center justify-center gap-2`}>
                <Plus className="size-5" aria-hidden /> Nova paróquia
              </Link>
              <PedidosDeGestao />
              <PixParaConferirLista />
              <ApoiosParaConferirLista />
              <VotacaoNoPainel />
              <TercosParaRevisar />
              <Moderacao />
              <NovaCampanha />
              <Sugestoes />
              <ListaDoPainel />
            </>
          )}
        </>
      )}
    </div>
  );
}

const VAZIA: Partial<Paroquia> = {
  nome: "",
  tipo: "paroquia",
  padroeiro: "",
  diocese: "",
  endereco: "",
  bairro: "",
  cidade: "",
  uf: "RN",
  cep: "",
  lat: null,
  lng: null,
  telefone: "",
  whatsapp: "",
  instagram: "",
  site: "",
  email: "",
};

const soDigitos = (s: string) => s.replace(/\D/g, "");

function EscolherMatriz({ valor, cidade, aoMudar }: { valor: string | null; cidade: string; aoMudar: (id: string | null) => void }) {
  const [atual, setAtual] = useState<IgrejaLigada | null>(null);
  const [termo, setTermo] = useState("");
  const [lista, setLista] = useState<ParoquiaResumo[]>([]);
  useEffect(() => {
    if (!valor) return setAtual(null);
    void igrejaLigada(valor).then(setAtual).catch(() => {});
  }, [valor]);
  useEffect(() => {
    if (termo.trim().length < 3) return setLista([]);
    const t = setTimeout(() => {
      void procurarParoquias({ termo, limite: 30 })
        .then((r) => setLista(r.filter((x) => ehMatriz(x.tipo)).sort((a, b) => Number(b.cidade === cidade) - Number(a.cidade === cidade)).slice(0, 8)))
        .catch(() => setLista([]));
    }, 300);
    return () => clearTimeout(t);
  }, [termo, cidade]);
  return (
    <Campo rotulo="Pertence à paróquia">
      {valor ? (
        <div className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-papel px-3">
          <span className="min-w-0 flex-1 truncate">{atual ? `${atual.nome}, ${atual.cidade}` : "…"}</span>
          <button type="button" onClick={() => aoMudar(null)} className="min-h-10 px-2 text-sm font-semibold text-destaque-texto">
            Trocar
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-1">
          <input value={termo} onChange={(e) => setTermo(e.target.value)} placeholder="Nome da paróquia" className={CAMPO} />
          {lista.map((x) => (
            <button key={x.id} type="button" onClick={() => (aoMudar(x.id), setTermo(""))} className="min-h-11 rounded-lg px-3 text-left hover:bg-marca-fundo">
              {x.nome} <span className="text-tinta-suave">{x.cidade}</span>
            </button>
          ))}
        </div>
      )}
    </Campo>
  );
}

function FormularioDaParoquia({ inicial, admin, aoSalvar }: { inicial: Partial<Paroquia>; admin: boolean; aoSalvar: (id: string) => void }) {
  const [p, setP] = useState<Partial<Paroquia>>(inicial);
  const [coords, setCoords] = useState(inicial.lat != null ? `${inicial.lat}, ${inicial.lng}` : "");
  const [estado, setEstado] = useState("");
  const muda = (campo: keyof Paroquia) => (e: { target: { value: string } }) => setP({ ...p, [campo]: e.target.value });

  async function buscarCoordenadas() {
    setEstado("Procurando");
    const r = await coordenadasDoEndereco(`${p.endereco ?? ""}, ${p.bairro ?? ""}, ${p.cidade ?? ""}, ${p.uf ?? ""}`).catch(() => null);
    if (r) setCoords(`${r.lat.toFixed(6)}, ${r.lng.toFixed(6)}`);
    setEstado(r ? "" : "Endereço não achado. Cole as coordenadas do Google Maps.");
  }

  async function salvar(e: FormEvent) {
    e.preventDefault();
    const [lat, lng] = coords.split(",").map((x) => Number(x.trim()));
    setEstado("Salvando");
    try {
      const id = await salvarParoquia({
        ...p,
        uf: (p.uf ?? "").toUpperCase(),
        cep: soDigitos(p.cep ?? ""),
        telefone: soDigitos(p.telefone ?? ""),
        whatsapp: soDigitos(p.whatsapp ?? ""),
        instagram: (p.instagram ?? "").replace(/^@/, "").trim(),
        lat: Number.isFinite(lat) && coords.trim() ? lat! : null,
        lng: Number.isFinite(lng) && coords.trim() ? lng! : null,
      });
      setEstado("Salvo");
      aoSalvar(id);
    } catch (erro) {
      setEstado(`Não foi possível salvar: ${(erro as Error).message}`);
    }
  }

  return (
    <Cartao>
      <form onSubmit={salvar} className="flex flex-col gap-3">
        <Campo rotulo="Nome">
          <input required value={p.nome ?? ""} onChange={muda("nome")} className={CAMPO} />
        </Campo>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Campo rotulo="Tipo">
            <select value={p.tipo} onChange={muda("tipo")} className={CAMPO}>
              {Object.entries(NOME_DO_TIPO_DE_IGREJA).map(([v, n]) => (
                <option key={v} value={v}>
                  {n}
                </option>
              ))}
            </select>
          </Campo>
          <Campo rotulo="Padroeiro">
            <input value={p.padroeiro ?? ""} onChange={muda("padroeiro")} className={CAMPO} />
          </Campo>
        </div>
        {!ehMatriz(p.tipo ?? "paroquia") && <EscolherMatriz valor={p.matriz_id ?? null} cidade={p.cidade ?? ""} aoMudar={(id) => setP({ ...p, matriz_id: id })} />}
        <Campo rotulo="Diocese">
          <input value={p.diocese ?? ""} onChange={muda("diocese")} className={CAMPO} />
        </Campo>
        <Campo rotulo="Endereço">
          <input value={p.endereco ?? ""} onChange={muda("endereco")} className={CAMPO} />
        </Campo>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Campo rotulo="Bairro">
            <input value={p.bairro ?? ""} onChange={muda("bairro")} className={CAMPO} />
          </Campo>
          <Campo rotulo="Cidade">
            <input required value={p.cidade ?? ""} onChange={muda("cidade")} className={CAMPO} />
          </Campo>
          <Campo rotulo="UF">
            <input required maxLength={2} value={p.uf ?? ""} onChange={muda("uf")} className={CAMPO} />
          </Campo>
          <Campo rotulo="CEP">
            <input inputMode="numeric" value={p.cep ?? ""} onChange={muda("cep")} className={CAMPO} />
          </Campo>
        </div>
        <Campo rotulo="Coordenadas (latitude, longitude)">
          <input value={coords} onChange={(e) => setCoords(e.target.value)} placeholder="-5.794500, -35.211000" className={CAMPO} />
        </Campo>
        <button type="button" onClick={() => void buscarCoordenadas()} className={BOTAO_CLARO}>
          Buscar coordenadas pelo endereço
        </button>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Campo rotulo="Telefone da secretaria (com DDD)">
            <input inputMode="tel" value={p.telefone ?? ""} onChange={muda("telefone")} className={CAMPO} />
          </Campo>
          <Campo rotulo="WhatsApp da secretaria (com DDD)">
            <input inputMode="tel" value={p.whatsapp ?? ""} onChange={muda("whatsapp")} className={CAMPO} />
          </Campo>
          <Campo rotulo="Instagram">
            <input value={p.instagram ?? ""} onChange={muda("instagram")} className={CAMPO} />
          </Campo>
          <Campo rotulo="Site">
            <input value={p.site ?? ""} onChange={muda("site")} className={CAMPO} />
          </Campo>
        </div>
        <Campo rotulo="E-mail da secretaria">
          <input type="email" value={p.email ?? ""} onChange={muda("email")} className={CAMPO} />
        </Campo>
        {admin && p.id && (
          <label className="flex min-h-11 items-center gap-3">
            <input type="checkbox" checked={p.ativa ?? true} onChange={(e) => setP({ ...p, ativa: e.target.checked })} className="size-5" />
            <span>Aparece no app</span>
          </label>
        )}
        {admin && p.id && (
          <Campo rotulo="Plano">
            <select value={p.plano ?? "gratis"} onChange={(e) => setP({ ...p, plano: e.target.value as Paroquia["plano"] })} className={CAMPO}>
              <option value="gratis">Grátis</option>
              <option value="pioneira">Pioneira (plano de graça)</option>
              <option value="paroquia">Plano para paróquias</option>
            </select>
          </Campo>
        )}
        {estado && <p className="text-sm text-tinta-suave">{estado}</p>}
        <button type="submit" className={BOTAO}>
          Salvar
        </button>
      </form>
    </Cartao>
  );
}

const HORARIO_NOVO = { tipo: "missa" as TipoDeHorario, modo: "semana" as "semana" | "data", dia: 0, semanas: [] as number[], data: "", hora: "", horaFim: "", cancelado: false, observacao: "" };

function EditorDeHorarios({ paroquia, horarios, aoMudar }: { paroquia: string; horarios: Horario[]; aoMudar: () => void }) {
  const [n, setN] = useState(HORARIO_NOVO);
  const [erro, setErro] = useState("");

  async function incluir(e: FormEvent) {
    e.preventDefault();
    setErro("");
    try {
      await salvarHorario({
        paroquia_id: paroquia,
        tipo: n.tipo,
        dia_semana: n.modo === "semana" ? n.dia : null,
        semanas: n.modo === "semana" && n.semanas.length ? n.semanas : null,
        data: n.modo === "data" ? n.data : null,
        hora: n.cancelado ? "00:00" : n.hora,
        hora_fim: n.horaFim || null,
        cancelado: n.modo === "data" && n.cancelado,
        observacao: n.observacao.trim(),
      });
      setN({ ...HORARIO_NOVO, tipo: n.tipo, modo: n.modo, dia: n.dia });
      aoMudar();
    } catch (er) {
      setErro((er as Error).message);
    }
  }

  const ordenados = [...horarios].sort((a, b) => (a.data ?? `0${a.dia_semana}`).localeCompare(b.data ?? `0${b.dia_semana}`) || a.hora.localeCompare(b.hora));

  return (
    <Cartao className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-marca tracking-[-0.02em]">Horários</h2>
      <ul className="flex flex-col divide-y divide-borda">
        {ordenados.map((h) => (
          <li key={h.id} className="flex min-h-12 items-center gap-2 py-1.5">
            <span className="min-w-0 flex-1 text-tinta">
              {NOME_DO_TIPO_DE_HORARIO[h.tipo]} · {h.data ? h.data.split("-").reverse().join("/") : NOME_DO_DIA[h.dia_semana!]} ·{" "}
              {h.cancelado ? "não haverá" : `${hhmm(h.hora)}${h.hora_fim ? ` às ${hhmm(h.hora_fim)}` : ""}`}
              {(h.semanas?.length || h.observacao) && <span className="text-sm text-tinta-suave"> · {[descreverSemanas(h.semanas), h.observacao].filter(Boolean).join(" · ")}</span>}
            </span>
            <button type="button" onClick={() => void apagarHorario(h.id).then(aoMudar)} aria-label="Apagar horário" className="grid size-10 place-items-center rounded-xl text-tinta-suave">
              <Trash2 className="size-4" aria-hidden />
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={incluir} className="flex flex-col gap-3 border-t border-borda pt-4">
        <div className="grid grid-cols-2 gap-3">
          <Campo rotulo="Tipo">
            <select value={n.tipo} onChange={(e) => setN({ ...n, tipo: e.target.value as TipoDeHorario })} className={CAMPO}>
              {(["missa", "confissao", "adoracao"] as const).map((t) => (
                <option key={t} value={t}>
                  {NOME_DO_TIPO_DE_HORARIO[t]}
                </option>
              ))}
            </select>
          </Campo>
          <Campo rotulo="Repete">
            <select value={n.modo} onChange={(e) => setN({ ...n, modo: e.target.value as "semana" | "data" })} className={CAMPO}>
              <option value="semana">Toda semana</option>
              <option value="data">Só numa data</option>
            </select>
          </Campo>
        </div>
        {n.modo === "semana" ? (
          <>
            <Campo rotulo="Dia">
              <select value={n.dia} onChange={(e) => setN({ ...n, dia: Number(e.target.value) })} className={CAMPO}>
                {NOME_DO_DIA.map((d, i) => (
                  <option key={d} value={i}>
                    {d}
                  </option>
                ))}
              </select>
            </Campo>
            <fieldset className="flex flex-wrap items-center gap-3">
              <legend className="mb-1 text-sm font-medium text-tinta-suave">Só em algumas semanas do mês</legend>
              {[1, 2, 3, 4, 5].map((s) => (
                <label key={s} className="flex min-h-10 items-center gap-1.5">
                  <input
                    type="checkbox"
                    checked={n.semanas.includes(s)}
                    onChange={(e) => setN({ ...n, semanas: e.target.checked ? [...n.semanas, s].sort() : n.semanas.filter((x) => x !== s) })}
                    className="size-5"
                  />
                  {s}º
                </label>
              ))}
            </fieldset>
          </>
        ) : (
          <>
            <Campo rotulo="Data">
              <input type="date" required value={n.data} onChange={(e) => setN({ ...n, data: e.target.value })} className={CAMPO} />
            </Campo>
            <label className="flex min-h-10 items-center gap-2">
              <input type="checkbox" checked={n.cancelado} onChange={(e) => setN({ ...n, cancelado: e.target.checked })} className="size-5" />
              Não haverá neste dia
            </label>
          </>
        )}
        {!n.cancelado && (
          <div className="grid grid-cols-2 gap-3">
            <Campo rotulo="Hora">
              <input type="time" required value={n.hora} onChange={(e) => setN({ ...n, hora: e.target.value })} className={CAMPO} />
            </Campo>
            <Campo rotulo="Até (opcional)">
              <input type="time" value={n.horaFim} onChange={(e) => setN({ ...n, horaFim: e.target.value })} className={CAMPO} />
            </Campo>
          </div>
        )}
        <Campo rotulo="Observação">
          <input maxLength={120} value={n.observacao} onChange={(e) => setN({ ...n, observacao: e.target.value })} className={CAMPO} />
        </Campo>
        {erro && <p className="text-sm text-[#a9271f]">{erro}</p>}
        <button type="submit" className={BOTAO}>
          Incluir horário
        </button>
      </form>
    </Cartao>
  );
}

const legivel = (url: string) => {
  const curto = url.replace(/^https?:\/\/(www\.)?/, "");
  try {
    return decodeURIComponent(curto);
  } catch {
    return curto;
  }
};

function NotaDaPesquisa({ id }: { id: string }) {
  const [nota, setNota] = useState<NotaDaParoquia | null>(null);
  useEffect(() => {
    void notaDaParoquia(id)
      .then(setNota)
      .catch(() => {});
  }, [id]);
  if (!nota || (!nota.texto && !nota.fontes.length)) return null;
  return (
    <Cartao className="flex flex-col gap-2 border-destaque-texto/40">
      <h2 className="text-xl font-bold text-marca tracking-[-0.02em]">Anotações da pesquisa</h2>
      {nota.confianca && <p className="text-sm text-tinta-suave">Confiança {nota.confianca === "alta" ? "alta (fonte oficial)" : "média (só busca)"}</p>}
      {nota.texto && <p className="whitespace-pre-line text-tinta">{nota.texto}</p>}
      {nota.fontes.length > 0 && (
        <ul className="flex flex-col gap-1 text-sm">
          {nota.fontes.map((f) => (
            <li key={f} className="truncate">
              <a href={f} target="_blank" rel="noreferrer" className="text-destaque-texto underline underline-offset-2">
                {legivel(f)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Cartao>
  );
}

function Avisos({ dados, aoMudar }: { dados: ParoquiaCompleta; aoMudar: () => void }) {
  const [texto, setTexto] = useState("");
  const [ate, setAte] = useState("");
  return (
    <Cartao className="flex flex-col gap-3">
      <h2 className="text-xl font-bold text-marca tracking-[-0.02em]">Avisos</h2>
      {dados.avisos.map((a) => (
        <div key={a.id} className="flex items-start gap-2">
          <p className="min-w-0 flex-1 text-tinta">
            {a.texto} <span className="text-sm text-tinta-suave">· até {a.ate.split("-").reverse().join("/")}</span>
          </p>
          <button type="button" onClick={() => void apagarAviso(a.id).then(aoMudar)} aria-label="Apagar aviso" className="grid size-10 place-items-center rounded-xl text-tinta-suave">
            <Trash2 className="size-4" aria-hidden />
          </button>
        </div>
      ))}
      <textarea value={texto} onChange={(e) => setTexto(e.target.value)} maxLength={600} rows={3} aria-label="Novo aviso" className="w-full rounded-xl border border-borda bg-papel px-3 py-2 text-base" />
      <Campo rotulo="Mostrar até">
        <input type="date" value={ate} onChange={(e) => setAte(e.target.value)} className={CAMPO} />
      </Campo>
      <button
        type="button"
        disabled={!texto.trim() || !ate}
        onClick={() =>
          void salvarAviso({ paroquia_id: dados.paroquia.id, texto: texto.trim(), ate }).then(() => {
            setTexto("");
            setAte("");
            aoMudar();
          })
        }
        className={BOTAO}
      >
        Publicar aviso
      </button>
    </Cartao>
  );
}

export function EditarParoquia() {
  const { id = "" } = useParams();
  const navegar = useNavigate();
  const acesso = useAcesso();
  const nova = id === "nova";
  const [dados, setDados] = useState<ParoquiaCompleta | null>(null);
  const [gestor, setGestor] = useState("");
  const [aviso, setAviso] = useState("");

  const recarregar = useCallback(() => {
    if (nova) return;
    void carregarParoquia(id).then(setDados);
  }, [id, nova]);
  useEffect(recarregar, [recarregar]);

  if (acesso === null || (!nova && !dados)) return <Carregando />;
  if (!acesso.admin && !acesso.minhas.includes(id)) return <p className="text-tinta-suave">Sem acesso.</p>;

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/painel">Painel</Voltar>
      <Cabecalho titulo={nova ? "Nova paróquia" : (dados?.paroquia.nome ?? "")} />
      {!nova && acesso.admin && <NotaDaPesquisa id={id} />}
      <FormularioDaParoquia key={id} inicial={nova ? VAZIA : dados!.paroquia} admin={acesso.admin} aoSalvar={(novoId) => (nova ? navegar(`/painel/paroquia/${novoId}`, { replace: true }) : recarregar())} />
      {!nova && dados && (
        <>
          <EditorDeHorarios paroquia={id} horarios={dados.horarios} aoMudar={recarregar} />
          <button type="button" onClick={() => void confirmarParoquia(id).then(recarregar)} className={BOTAO_CLARO}>
            Os horários foram conferidos hoje
          </button>
          {acesso.admin && (
            <Cartao className="flex flex-col gap-3">
              <p className="text-tinta">
                {dados.paroquia.conferida_em ? `Dados conferidos em ${new Date(dados.paroquia.conferida_em).toLocaleDateString("pt-BR")}` : "Dados ainda não conferidos"}
              </p>
              <button type="button" onClick={() => void marcarConferida(id, !dados.paroquia.conferida_em).then(recarregar)} className={dados.paroquia.conferida_em ? BOTAO_CLARO : BOTAO}>
                {dados.paroquia.conferida_em ? "Desfazer conferência" : "Marcar como conferida"}
              </button>
            </Cartao>
          )}
          {dados.paroquia.verificada && <Avisos dados={dados} aoMudar={recarregar} />}
          <IntencoesNoPainel p={dados.paroquia} aoMudar={recarregar} />
          <MinisteriosNoPainel p={dados.paroquia} />
          <PlanoNoPainel p={dados.paroquia} admin={acesso.admin} aoMudar={recarregar} />
          {acesso.admin && (
            <Cartao className="flex flex-col gap-3">
              <h2 className="text-xl font-bold text-marca tracking-[-0.02em]">Secretaria da paróquia</h2>
              <Campo rotulo="E-mail da conta de quem vai cuidar desta página">
                <input type="email" value={gestor} onChange={(e) => setGestor(e.target.value)} className={CAMPO} />
              </Campo>
              {aviso && <p className="text-sm text-tinta-suave">{aviso}</p>}
              <button
                type="button"
                disabled={!gestor.includes("@")}
                onClick={() =>
                  void adicionarGestor(id, gestor.trim())
                    .then(() => {
                      setAviso("Pronto: a paróquia está verificada e essa conta pode editar a página.");
                      setGestor("");
                      recarregar();
                    })
                    .catch((e: Error) => setAviso(e.message.includes("nenhuma conta") ? "Não há conta com este e-mail. A pessoa precisa criar a conta antes." : e.message))
                }
                className={BOTAO}
              >
                Dar acesso e verificar
              </button>
            </Cartao>
          )}
        </>
      )}
    </div>
  );
}
