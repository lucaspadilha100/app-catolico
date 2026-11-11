import { useCallback, useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ChevronRight, Copy, Plus, Share2, Trash2, UserRoundCheck } from "lucide-react";
import { renderSVG } from "uqr";
import { useConta } from "@/conta/useConta";
import { Cartao } from "@/components/Cartao";
import { Cabecalho, Carregando, Voltar } from "@/components/Devocao";
import { NaoEncontrada } from "@/pages/Simples";
import { compartilhar, enderecoPublico } from "@/lib/nativo";
import { NOME_DO_DIA, hhmm } from "@/paroquias/horarios";
import {
  adicionarNaEscala,
  apagarItem,
  carregarMinisterio,
  criarMinisterio,
  entrarNoMinisterio,
  escalaDoMinisterio,
  euSou,
  meusMinisterios,
  minhaEscala,
  mudarItem,
  mudarMembro,
  tirarMembro,
  trocasEVagas,
  verMinisterio,
  type ItemDaEscala,
  type Membro,
  type Ministerio,
} from "@/escalas/api";

const CAMPO = "min-h-12 w-full min-w-0 rounded-xl border border-borda bg-papel px-3 text-base text-tinta outline-none focus:border-destaque-texto";
const BOTAO = "flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primario px-4 font-semibold text-sobre-primario disabled:opacity-50";
const BOTAO_CLARO = "flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-cartao px-4 font-semibold text-tinta disabled:opacity-50";
const PILULA = "min-h-10 rounded-full border border-borda px-4 text-sm font-medium text-tinta";
const PILULA_FORTE = "min-h-10 rounded-full bg-primario px-4 text-sm font-semibold text-sobre-primario";
const TITULO = "px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto";

function Campo({ rotulo, children }: { rotulo: string; children: ReactNode }) {
  return (
    <label className="flex min-w-0 flex-col gap-1">
      <span className="text-sm font-medium text-tinta-suave">{rotulo}</span>
      {children}
    </label>
  );
}

export function dataDaEscala(iso: string): string {
  const [a, m, d] = iso.split("-").map(Number);
  return `${NOME_DO_DIA[new Date(a!, m! - 1, d!).getDay()]}, ${d}/${String(m).padStart(2, "0")}`;
}

const detalhe = (i: ItemDaEscala) => i.celebracao || (i.hora ? hhmm(i.hora.slice(0, 5)) : "");

function porData(itens: ItemDaEscala[]): [string, ItemDaEscala[]][] {
  const m = new Map<string, ItemDaEscala[]>();
  for (const i of itens) m.set(i.data, [...(m.get(i.data) ?? []), i]);
  return [...m.entries()];
}

function Convite({ ministerio }: { ministerio: Ministerio }) {
  const link = `${enderecoPublico()}/escalas/entrar/${ministerio.codigo}`;
  const svg = useMemo(() => renderSVG(link, { border: 2 }), [link]);
  const [copiado, setCopiado] = useState(false);
  return (
    <Cartao className="flex flex-col items-center gap-3 p-4">
      <p className="self-start font-medium text-tinta">Convite para a equipe</p>
      <div className="w-full max-w-48 overflow-hidden rounded-xl bg-white" role="img" aria-label="QR code do convite" dangerouslySetInnerHTML={{ __html: svg }} />
      <p className="break-all text-center text-sm text-tinta-suave">{link}</p>
      <div className="grid w-full grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() =>
            void navigator.clipboard
              .writeText(link)
              .then(() => {
                setCopiado(true);
                setTimeout(() => setCopiado(false), 2000);
              })
              .catch(() => {})
          }
          className={BOTAO_CLARO}
        >
          <Copy className="size-4" aria-hidden /> {copiado ? "Copiado" : "Copiar"}
        </button>
        <button type="button" onClick={() => void compartilhar({ titulo: ministerio.nome, texto: `Entre na equipe ${ministerio.nome} no app Minha Igrejinha:`, url: link })} className={BOTAO_CLARO}>
          <Share2 className="size-4" aria-hidden /> Enviar
        </button>
      </div>
    </Cartao>
  );
}

function NovoItem({ ministerio, membros, aoSalvar }: { ministerio: string; membros: Membro[]; aoSalvar: () => void }) {
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [celebracao, setCelebracao] = useState("");
  const [funcao, setFuncao] = useState("");
  const [membro, setMembro] = useState("");
  const [estado, setEstado] = useState("");

  async function enviar(e: FormEvent) {
    e.preventDefault();
    setEstado("salvando");
    try {
      await adicionarNaEscala({ ministerio_id: ministerio, data, hora: hora || null, celebracao: celebracao.trim(), funcao: funcao.trim(), membro_id: membro || null });
      setFuncao("");
      setMembro("");
      setEstado("");
      aoSalvar();
    } catch {
      setEstado("erro");
    }
  }

  return (
    <Cartao className="p-4">
      <form onSubmit={enviar} className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          <Campo rotulo="Dia">
            <input type="date" value={data} onChange={(e) => setData(e.target.value)} className={CAMPO} />
          </Campo>
          <Campo rotulo="Hora">
            <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} className={CAMPO} />
          </Campo>
        </div>
        <Campo rotulo="Celebração">
          <input value={celebracao} onChange={(e) => setCelebracao(e.target.value)} placeholder="Missa das 19h" maxLength={80} className={CAMPO} />
        </Campo>
        <Campo rotulo="Função">
          <input value={funcao} onChange={(e) => setFuncao(e.target.value)} placeholder="1ª leitura" maxLength={60} className={CAMPO} />
        </Campo>
        <Campo rotulo="Quem serve">
          <select value={membro} onChange={(e) => setMembro(e.target.value)} className={CAMPO}>
            <option value="">Vago</option>
            {membros.map((m) => (
              <option key={m.usuario_id} value={m.usuario_id}>
                {m.nome}
              </option>
            ))}
          </select>
        </Campo>
        {estado === "erro" && <p className="text-sm text-[#a9271f]">Não foi possível salvar agora. Tente de novo.</p>}
        <button type="submit" disabled={!data || !funcao.trim() || estado === "salvando"} className={BOTAO}>
          <Plus className="size-4" aria-hidden /> Pôr na escala
        </button>
      </form>
    </Cartao>
  );
}

function ItemNaEscala({ i, eu, coordeno, membros, aoMudar }: { i: ItemDaEscala; eu: string | null; coordeno: boolean; membros: Membro[]; aoMudar: () => void }) {
  const nome = membros.find((m) => m.usuario_id === i.membro_id)?.nome;
  const meu = !!eu && i.membro_id === eu;
  const mudar = (patch: Parameters<typeof mudarItem>[1]) => void mudarItem(i.id, patch).then(aoMudar);
  return (
    <li className="flex flex-col gap-2 px-4 py-3">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="font-medium text-tinta">{i.funcao}</p>
          <p className="text-sm text-tinta-suave">{detalhe(i)}</p>
        </div>
        {!coordeno && <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-sm ${!i.membro_id ? "border border-dashed border-borda text-tinta-suave" : meu ? "bg-marca-fundo font-semibold text-destaque-texto" : "text-tinta"}`}>
          {i.membro_id ? (meu ? "Você" : (nome ?? "Equipe")) : "Vago"}
        </span>}
      </div>
      {i.troca_pedida && <p className="text-sm font-medium text-destaque-texto">Pediu troca</p>}
      <div className="flex flex-wrap gap-2">
        {coordeno && (
          <select value={i.membro_id ?? ""} onChange={(e) => mudar({ membro_id: e.target.value || null })} aria-label="Quem serve" className="min-h-10 min-w-0 flex-1 rounded-full border border-borda bg-papel px-3 text-sm text-tinta">
            <option value="">Vago</option>
            {membros.map((m) => (
              <option key={m.usuario_id} value={m.usuario_id}>
                {m.nome}
              </option>
            ))}
          </select>
        )}
        {meu && (
          <button type="button" onClick={() => mudar({ troca_pedida: !i.troca_pedida })} className={PILULA}>
            {i.troca_pedida ? "Cancelar troca" : "Pedir troca"}
          </button>
        )}
        {!meu && eu && (!i.membro_id || i.troca_pedida) && (
          <button type="button" onClick={() => mudar({ membro_id: eu })} className={PILULA_FORTE}>
            Assumir
          </button>
        )}
        {coordeno && (
          <button
            type="button"
            onClick={() => {
              if (confirm("Tirar da escala?")) void apagarItem(i.id).then(aoMudar);
            }}
            aria-label="Tirar da escala"
            className="grid size-10 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo"
          >
            <Trash2 className="size-4" aria-hidden />
          </button>
        )}
      </div>
    </li>
  );
}

function ListaPorDia({ itens, render }: { itens: ItemDaEscala[]; render: (i: ItemDaEscala) => ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      {porData(itens).map(([data, lista]) => (
        <section key={data} className="flex flex-col gap-1.5">
          <h3 className="px-1 text-sm font-semibold text-marca">{dataDaEscala(data)}</h3>
          <ul className="flex flex-col divide-y divide-borda overflow-hidden rounded-3xl bg-cartao">{lista.map(render)}</ul>
        </section>
      ))}
    </div>
  );
}

export function MinisterioPagina() {
  const { id = "" } = useParams();
  const [params, setParams] = useSearchParams();
  const aba = params.get("aba") === "equipe" ? "equipe" : "escala";
  const [dados, setDados] = useState<Awaited<ReturnType<typeof carregarMinisterio>> | undefined>(undefined);
  const [itens, setItens] = useState<ItemDaEscala[] | null>(null);
  const [eu, setEu] = useState<string | null>(null);
  const [novo, setNovo] = useState(false);
  const [meuNome, setMeuNome] = useState("");

  const recarregar = useCallback(() => {
    void carregarMinisterio(id)
      .then((d) => {
        setDados(d);
        void euSou().then((u) => {
          setEu(u);
          setMeuNome(d?.membros.find((m) => m.usuario_id === u)?.nome ?? "");
        });
      })
      .catch(() => setDados(null));
    void escalaDoMinisterio(id)
      .then(setItens)
      .catch(() => setItens([]));
  }, [id]);
  useEffect(recarregar, [recarregar]);

  if (dados === undefined) return <Carregando />;
  if (dados === null) return <NaoEncontrada />;
  const { ministerio, membros, coordeno } = dados;

  return (
    <div className="flex flex-col gap-4">
      <Voltar para="/escalas">Escalas</Voltar>
      <Cabecalho titulo={ministerio.nome} subtitulo={ministerio.paroquias?.nome ?? undefined} />
      <div className="grid grid-cols-2 gap-1 rounded-xl border border-borda bg-papel p-1" role="tablist">
        {(
          [
            ["escala", "Escala"],
            ["equipe", `Equipe (${membros.length})`],
          ] as const
        ).map(([v, nome]) => (
          <button key={v} type="button" role="tab" aria-selected={aba === v} onClick={() => setParams(v === "escala" ? {} : { aba: v }, { replace: true })} className={`min-h-10 rounded-lg font-medium ${aba === v ? "bg-primario text-sobre-primario" : "text-tinta-suave"}`}>
            {nome}
          </button>
        ))}
      </div>

      {coordeno && ministerio.paroquia_id && (
        <Link to={`/roteiros?paroquia=${ministerio.paroquia_id}&nome=${encodeURIComponent(ministerio.paroquias?.nome ?? "")}`} className={BOTAO_CLARO}>
          Montar o folheto da missa
        </Link>
      )}
      {aba === "escala" ? (
        <>
          {coordeno &&
            (novo ? (
              <NovoItem ministerio={ministerio.id} membros={membros} aoSalvar={recarregar} />
            ) : (
              <button type="button" onClick={() => setNovo(true)} className={BOTAO}>
                <Plus className="size-5" aria-hidden /> Pôr na escala
              </button>
            ))}
          {itens === null ? <Carregando /> : !itens.length ? <p className="text-tinta-suave">Escala vazia.</p> : <ListaPorDia itens={itens} render={(i) => <ItemNaEscala key={i.id} i={i} eu={eu} coordeno={coordeno} membros={membros} aoMudar={recarregar} />} />}
        </>
      ) : (
        <>
          {coordeno && <Convite ministerio={ministerio} />}
          <Cartao className="flex flex-col gap-2 p-4">
            <Campo rotulo="Meu nome na equipe">
              <div className="flex gap-2">
                <input value={meuNome} onChange={(e) => setMeuNome(e.target.value)} maxLength={60} className={CAMPO} />
                <button type="button" disabled={meuNome.trim().length < 2 || !eu} onClick={() => eu && void mudarMembro(ministerio.id, eu, { nome: meuNome.trim() }).then(recarregar)} className={`${BOTAO} shrink-0`}>
                  Salvar
                </button>
              </div>
            </Campo>
          </Cartao>
          <ul className="flex flex-col divide-y divide-borda overflow-hidden rounded-3xl bg-cartao">
            {membros.map((m) => (
              <li key={m.usuario_id} className="flex items-center gap-2 px-4 py-2">
                <span className="flex min-h-11 min-w-0 flex-1 items-center gap-2 text-tinta">
                  <span className="truncate">{m.nome}</span>
                  {m.coordena && <UserRoundCheck className="size-4 shrink-0 text-destaque-texto" aria-label="Coordena" />}
                </span>
                {coordeno && m.usuario_id !== ministerio.dono_id && (
                  <>
                    <button type="button" onClick={() => void mudarMembro(ministerio.id, m.usuario_id, { coordena: !m.coordena }).then(recarregar)} className="min-h-10 rounded-full border border-borda px-3 text-xs font-medium text-tinta">
                      {m.coordena ? "Tirar coordenação" : "Coordena"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Tirar ${m.nome} da equipe?`)) void tirarMembro(ministerio.id, m.usuario_id).then(recarregar);
                      }}
                      aria-label={`Tirar ${m.nome}`}
                      className="grid size-10 shrink-0 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo"
                    >
                      <Trash2 className="size-4" aria-hidden />
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export function EntrarNoMinisterio() {
  const { codigo = "" } = useParams();
  const { email, pronto } = useConta();
  const navegar = useNavigate();
  const [m, setM] = useState<Awaited<ReturnType<typeof verMinisterio>> | undefined>(undefined);
  const [nome, setNome] = useState("");
  const [estado, setEstado] = useState("");

  useEffect(() => {
    if (!email) return;
    verMinisterio(codigo)
      .then(setM)
      .catch(() => setM(null));
  }, [codigo, email]);

  if (!pronto) return <Carregando />;
  if (!email)
    return (
      <div className="flex flex-col gap-4">
        <Cabecalho titulo="Convite para a equipe" />
        <Link to="/conta" className={BOTAO}>
          Entrar para aceitar
        </Link>
      </div>
    );
  if (m === undefined) return <Carregando />;
  if (m === null) return <NaoEncontrada />;

  async function entrar(e: FormEvent) {
    e.preventDefault();
    setEstado("entrando");
    try {
      const id = await entrarNoMinisterio(codigo, nome.trim());
      navegar(`/escalas/m/${id}`, { replace: true });
    } catch {
      setEstado("erro");
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Cabecalho titulo={m!.nome} subtitulo={m!.paroquia ?? undefined} />
      <Cartao className="p-4">
        <form onSubmit={entrar} className="flex flex-col gap-3">
          <Campo rotulo="Seu nome">
            <input value={nome} onChange={(e) => setNome(e.target.value)} maxLength={60} autoComplete="name" className={CAMPO} />
          </Campo>
          {estado === "erro" && <p className="text-sm text-[#a9271f]">Não foi possível entrar agora. Tente de novo.</p>}
          <button type="submit" disabled={nome.trim().length < 2 || estado === "entrando"} className={BOTAO}>
            Entrar na equipe
          </button>
        </form>
      </Cartao>
    </div>
  );
}

export function Escalas() {
  const { email, pronto } = useConta();
  const navegar = useNavigate();
  const [eu, setEu] = useState<string | null>(null);
  const [minha, setMinha] = useState<ItemDaEscala[] | null>(null);
  const [abertas, setAbertas] = useState<ItemDaEscala[]>([]);
  const [ministerios, setMinisterios] = useState<Ministerio[]>([]);
  const [novo, setNovo] = useState(false);
  const [nome, setNome] = useState("");

  const recarregar = useCallback(() => {
    void euSou().then((u) => {
      setEu(u);
      if (!u) return;
      void minhaEscala(u)
        .then(setMinha)
        .catch(() => setMinha([]));
      void trocasEVagas(u)
        .then(setAbertas)
        .catch(() => {});
      void meusMinisterios()
        .then(setMinisterios)
        .catch(() => {});
    });
  }, []);
  useEffect(() => {
    if (email) recarregar();
  }, [email, recarregar]);

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/mais">Mais</Voltar>
      <Cabecalho titulo="Escalas" />
      {!pronto ? (
        <Carregando />
      ) : !email ? (
        <Link to="/conta" className={BOTAO_CLARO}>
          Entrar para ver as suas escalas
        </Link>
      ) : (
        <>
          <section className="flex flex-col gap-2">
            <h2 className={TITULO}>Quando eu sirvo</h2>
            {minha === null ? (
              <Carregando />
            ) : !minha.length ? (
              <p className="px-1 text-tinta-suave">Nenhuma escala por vir.</p>
            ) : (
              <ListaPorDia
                itens={minha}
                render={(i) => (
                  <li key={i.id} className="flex items-center gap-2 px-4 py-3">
                    <Link to={`/escalas/m/${i.ministerio_id}`} className="min-w-0 flex-1">
                      <p className="font-medium text-tinta">{`${i.funcao} · ${i.ministerios?.nome ?? ""}`}</p>
                      <p className="text-sm text-tinta-suave">{detalhe(i)}</p>
                      {i.troca_pedida && <p className="text-sm font-medium text-destaque-texto">Pediu troca</p>}
                    </Link>
                    <button type="button" onClick={() => void mudarItem(i.id, { troca_pedida: !i.troca_pedida }).then(recarregar)} className={`${PILULA} shrink-0`}>
                      {i.troca_pedida ? "Cancelar troca" : "Pedir troca"}
                    </button>
                  </li>
                )}
              />
            )}
          </section>

          {abertas.length > 0 && (
            <section className="flex flex-col gap-2">
              <h2 className={TITULO}>Trocas e vagas</h2>
              <ListaPorDia
                itens={abertas}
                render={(i) => (
                  <li key={i.id} className="flex items-center gap-2 px-4 py-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-tinta">{`${i.funcao} · ${i.ministerios?.nome ?? ""}`}</p>
                      <p className="text-sm text-tinta-suave">{[detalhe(i), i.troca_pedida ? "Pediu troca" : "Vago"].filter(Boolean).join(" · ")}</p>
                    </div>
                    <button type="button" onClick={() => eu && void mudarItem(i.id, { membro_id: eu }).then(recarregar)} className={`${PILULA_FORTE} shrink-0`}>
                      Assumir
                    </button>
                  </li>
                )}
              />
            </section>
          )}

          <section className="flex flex-col gap-2">
            <h2 className={TITULO}>Meus ministérios</h2>
            {ministerios.length > 0 && (
              <ul className="flex flex-col divide-y divide-borda overflow-hidden rounded-3xl bg-cartao">
                {ministerios.map((m) => (
                  <li key={m.id}>
                    <Link to={`/escalas/m/${m.id}`} className="flex min-h-14 items-center gap-3 px-4 py-2">
                      <span className="min-w-0 flex-1">
                        <span className="block font-medium text-tinta">{m.nome}</span>
                        {m.paroquias?.nome && <span className="block text-sm text-tinta-suave">{m.paroquias.nome}</span>}
                      </span>
                      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {novo ? (
              <Cartao className="p-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    void criarMinisterio(nome.trim()).then((id) => navegar(`/escalas/m/${id}?aba=equipe`));
                  }}
                  className="flex flex-col gap-3"
                >
                  <Campo rotulo="Nome do ministério">
                    <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Leitores da Matriz" maxLength={80} className={CAMPO} />
                  </Campo>
                  <button type="submit" disabled={nome.trim().length < 3} className={BOTAO}>
                    Criar
                  </button>
                </form>
              </Cartao>
            ) : (
              <button type="button" onClick={() => setNovo(true)} className={BOTAO_CLARO}>
                <Plus className="size-4" aria-hidden /> Novo ministério
              </button>
            )}
          </section>
        </>
      )}
    </div>
  );
}
