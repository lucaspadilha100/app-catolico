import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CartaoDaCampanha } from "@/components/Campanha";
import { Check, ChevronRight, Flag, HandHeart, Link2, Plus, Radio, Trash2, UserMinus, Users } from "lucide-react";
import { useConta } from "@/conta/useConta";
import { MISTERIOS, grupoDoDiaDaSemana, type GrupoDeMisterios } from "@/liturgia/terco";
import { passosDoRosario } from "@/oracao/terco";
import {
  NOME_DO_TIPO_DE_GRUPO,
  NOME_VALIDO,
  TIPOS_DE_INTENCAO,
  apagarGrupo,
  apagarIntencao,
  carregarGrupo,
  comecarTercoDoGrupo,
  criarGrupo,
  denunciar,
  entrarNoGrupo,
  fraseDaIntencao,
  lerTercoDoGrupo,
  listarIntencoes,
  meuId,
  meusGrupos,
  minhasIntencoes,
  moverTercoDoGrupo,
  ouvirTercoDoGrupo,
  pedirOracao,
  rezeiPor,
  sairDoGrupo,
  trocarConvite,
  verConvite,
  type Grupo,
  type Intencao,
  type Membro,
  type TercoDoGrupo,
  type TipoDeIntencao,
} from "@/comunidade/api";
import { ENDERECO_DO_SITE } from "@/marca";
import { Cartao, Grupo as GrupoDeLinhas, LINHA, LISTA, TituloPagina } from "@/components/Cartao";
import { Cabecalho, Carregando, Indisponivel, Voltar } from "@/components/Devocao";
import { TercoGuiado, type Posicao } from "@/components/TercoGuiado";
import { NaoEncontrada } from "@/pages/Simples";

const CAMPO = "min-h-12 w-full rounded-xl border border-borda bg-papel px-3 text-base text-tinta outline-none focus:border-destaque-texto";
const BOTAO = "flex min-h-12 items-center justify-center gap-2 rounded-xl bg-destaque px-4 font-semibold text-sobre-destaque disabled:opacity-50";
const SECUNDARIO = "flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-cartao px-4 font-semibold text-tinta";
const CHAVE_REZEI = "santinho-rezei";
const POR_PAGINA = 20;

const lerRezei = (): string[] => {
  try {
    const v = JSON.parse(localStorage.getItem(CHAVE_REZEI) ?? "[]") as unknown;
    return Array.isArray(v) ? (v as string[]) : [];
  } catch {
    return [];
  }
};

const guardarRezei = (id: string) => {
  try {
    localStorage.setItem(CHAVE_REZEI, JSON.stringify([id, ...lerRezei().filter((x) => x !== id)].slice(0, 500)));
  } catch {}
};

function haQuanto(iso: string): string {
  const dias = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  if (dias <= 0) return "hoje";
  if (dias === 1) return "ontem";
  return `há ${dias} dias`;
}

const base = () => (location.protocol.startsWith("http") ? location.origin : ENDERECO_DO_SITE);

async function compartilhar(titulo: string, texto: string, url: string): Promise<boolean> {
  if (navigator.share) {
    try {
      await navigator.share({ title: titulo, text: texto, url });
    } catch {}
    return false;
  }
  try {
    await navigator.clipboard.writeText(`${texto}\n${url}`);
    return true;
  } catch {
    return false;
  }
}

function ItemDeIntencao({ i, eu, aoApagar }: { i: Intencao; eu: string | null; aoApagar?: () => void }) {
  const [rezei, setRezei] = useState(() => lerRezei().includes(i.id));
  const [total, setTotal] = useState(i.rezaram);
  const [denunciando, setDenunciando] = useState(false);
  const [denunciada, setDenunciada] = useState(false);

  async function rezar() {
    if (rezei) return;
    setRezei(true);
    guardarRezei(i.id);
    setTotal((t) => t + 1);
    const n = await rezeiPor(i.id).catch(() => null);
    if (n !== null) setTotal(n);
  }

  async function enviarDenuncia(motivo: "ofensivo" | "falso" | "pessoal" | "outro") {
    await denunciar(i.id, motivo).catch(() => {});
    setDenunciada(true);
    setDenunciando(false);
  }

  const meu = eu === i.autor_id;
  return (
    <li className="flex flex-col gap-3 px-4 py-4">
      <p className="font-leitura text-lg leading-snug text-marca">{fraseDaIntencao(i.tipo, i.nome)}</p>
      <div className="flex items-center gap-2">
        <span className="min-w-0 flex-1 text-sm text-tinta-suave">
          {haQuanto(i.criado_em)}
          {total > 0 && ` · ${total === 1 ? "1 pessoa rezou" : `${total} pessoas rezaram`}`}
          {i.oculta && " · escondido por denúncias"}
        </span>
        {meu ? (
          aoApagar && (
            <button type="button" onClick={aoApagar} aria-label="Apagar pedido" className="grid size-10 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo">
              <Trash2 className="size-4" aria-hidden />
            </button>
          )
        ) : (
          <>
            {!denunciada && (
              <button type="button" onClick={() => setDenunciando(!denunciando)} aria-label="Denunciar" className="grid size-10 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo">
                <Flag className="size-4" aria-hidden />
              </button>
            )}
            <button
              type="button"
              onClick={() => void rezar()}
              disabled={rezei}
              className={`flex min-h-10 items-center gap-1.5 rounded-full px-4 text-sm font-semibold ${rezei ? "bg-marca-fundo text-destaque-texto" : "bg-destaque text-sobre-destaque"}`}
            >
              {rezei ? <Check className="size-4" aria-hidden /> : <HandHeart className="size-4" aria-hidden />}
              {rezei ? "Rezei" : "Rezei por você"}
            </button>
          </>
        )}
      </div>
      {denunciando && (
        <div className="flex flex-wrap gap-2">
          {(
            [
              ["ofensivo", "Ofensivo"],
              ["falso", "Falso"],
              ["pessoal", "Expõe alguém"],
              ["outro", "Outro motivo"],
            ] as const
          ).map(([m, rotulo]) => (
            <button key={m} type="button" onClick={() => void enviarDenuncia(m)} className="min-h-10 rounded-full border border-borda bg-cartao px-4 text-sm font-medium text-tinta">
              {rotulo}
            </button>
          ))}
        </div>
      )}
      {denunciada && <p className="text-sm text-tinta-suave">Denúncia enviada.</p>}
    </li>
  );
}

function PedirOracao({ grupo, aoPedir }: { grupo?: string; aoPedir: () => void }) {
  const [tipo, setTipo] = useState<TipoDeIntencao>("saude");
  const [nome, setNome] = useState("");
  const [estado, setEstado] = useState<"" | "enviando" | "limite" | "erro">("");
  const limpo = nome.trim();
  const valido = NOME_VALIDO.test(limpo);

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (!valido) return;
    setEstado("enviando");
    try {
      await pedirOracao(tipo, limpo.charAt(0).toUpperCase() + limpo.slice(1), grupo ?? null);
      setNome("");
      setEstado("");
      aoPedir();
    } catch (err) {
      setEstado(String(err).includes("limite") ? "limite" : "erro");
    }
  }

  return (
    <Cartao>
      <form onSubmit={enviar} className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Pelo quê">
          {TIPOS_DE_INTENCAO.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={tipo === t.id}
              onClick={() => setTipo(t.id)}
              className={`min-h-10 rounded-full border px-4 text-sm font-medium ${tipo === t.id ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta"}`}
            >
              {t.rotulo}
            </button>
          ))}
        </div>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-tinta-suave">Primeiro nome</span>
          <input value={nome} onChange={(e) => setNome(e.target.value.replace(/\s/g, ""))} maxLength={20} autoComplete="off" className={CAMPO} />
        </label>
        {valido && <p className="font-leitura text-lg text-marca">{fraseDaIntencao(tipo, limpo.charAt(0).toUpperCase() + limpo.slice(1))}</p>}
        {estado === "limite" && <p className="text-sm font-medium text-[#a9271f]">Você já tem 3 pedidos abertos. Eles ficam 30 dias.</p>}
        {estado === "erro" && <p className="text-sm font-medium text-[#a9271f]">Não foi possível enviar agora. Tente de novo.</p>}
        <button type="submit" disabled={!valido || estado === "enviando"} className={BOTAO}>
          {estado === "enviando" ? "Enviando" : "Pedir oração"}
        </button>
      </form>
    </Cartao>
  );
}

function ListaDeIntencoes({ grupo, versao }: { grupo?: string; versao: number }) {
  const [lista, setLista] = useState<Intencao[] | null | "erro">(null);
  const [fim, setFim] = useState(false);
  const [eu, setEu] = useState<string | null>(null);
  const [buscando, setBuscando] = useState(false);

  useEffect(() => {
    let ativo = true;
    void meuId().then((id) => ativo && setEu(id));
    listarIntencoes({ grupo, pular: 0, limite: POR_PAGINA })
      .then((r) => {
        if (!ativo) return;
        setLista(r);
        setFim(r.length < POR_PAGINA);
      })
      .catch(() => ativo && setLista("erro"));
    return () => {
      ativo = false;
    };
  }, [grupo, versao]);

  if (lista === null) return <Carregando />;
  if (lista === "erro") return <Indisponivel />;
  if (!lista.length) return <p className="py-6 text-center text-tinta-suave">Nenhum pedido de oração.</p>;

  async function mais() {
    if (!Array.isArray(lista)) return;
    setBuscando(true);
    const r = await listarIntencoes({ grupo, pular: lista.length, limite: POR_PAGINA }).catch(() => []);
    setLista([...lista, ...r]);
    setFim(r.length < POR_PAGINA);
    setBuscando(false);
  }

  return (
    <div className="flex flex-col gap-3">
      <ul className={LISTA}>
        {lista.filter((i) => grupo || i.autor_id !== eu).map((i) => (
          <ItemDeIntencao
            key={i.id}
            i={i}
            eu={eu}
            aoApagar={() => void apagarIntencao(i.id).then(() => setLista((l) => (Array.isArray(l) ? l.filter((x) => x.id !== i.id) : l)))}
          />
        ))}
      </ul>
      {!fim && (
        <button type="button" onClick={() => void mais()} disabled={buscando} className={SECUNDARIO}>
          {buscando ? "Carregando" : "Mostrar mais"}
        </button>
      )}
    </div>
  );
}

export function Intencoes() {
  const { email, pronto } = useConta();
  const [pedindo, setPedindo] = useState(false);
  const [versao, setVersao] = useState(0);
  const [meus, setMeus] = useState<Intencao[]>([]);

  useEffect(() => {
    if (!email) return;
    minhasIntencoes()
      .then(setMeus)
      .catch(() => {});
  }, [email, versao]);

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/rezar">Rezar</Voltar>
      <TituloPagina>Intenções</TituloPagina>
      <CartaoDaCampanha />
      {pronto &&
        (email ? (
          pedindo ? (
            <PedirOracao
              aoPedir={() => {
                setPedindo(false);
                setVersao((v) => v + 1);
              }}
            />
          ) : (
            <button type="button" onClick={() => setPedindo(true)} className={`${BOTAO} min-h-14 text-lg`}>
              <Plus className="size-5" aria-hidden /> Pedir oração
            </button>
          )
        ) : (
          <Link to="/conta" className={SECUNDARIO}>
            Entrar para pedir oração
          </Link>
        ))}
      {meus.length > 0 && (
        <section>
          <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">Meus pedidos</h2>
          <ul className={LISTA}>
            {meus.map((i) => (
              <ItemDeIntencao key={i.id} i={i} eu={i.autor_id} aoApagar={() => void apagarIntencao(i.id).then(() => setVersao((v) => v + 1))} />
            ))}
          </ul>
        </section>
      )}
      <section>
        <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">Pedidos de oração</h2>
        <ListaDeIntencoes versao={versao} />
      </section>
    </div>
  );
}

export function Grupos() {
  const { email, pronto } = useConta();
  const navegar = useNavigate();
  const [lista, setLista] = useState<Grupo[] | null>(null);
  const [criando, setCriando] = useState(false);
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState<Grupo["tipo"]>("familia");
  const [meuNome, setMeuNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!email) return;
    meusGrupos()
      .then(setLista)
      .catch(() => setLista([]));
  }, [email]);

  if (!pronto) return <Carregando />;
  if (!email)
    return (
      <div className="flex flex-col gap-5">
        <Voltar para="/rezar">Rezar</Voltar>
        <TituloPagina>Grupos</TituloPagina>
        <Link to="/conta" className={BOTAO}>
          Entrar para ver os seus grupos
        </Link>
      </div>
    );

  async function criar(e: FormEvent) {
    e.preventDefault();
    setErro("");
    try {
      const id = await criarGrupo(nome.trim(), tipo, meuNome.trim());
      navegar(`/grupos/${id}`);
    } catch (err) {
      setErro(String(err).includes("limite") ? "Você já criou 10 grupos." : "Não foi possível criar agora.");
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/rezar">Rezar</Voltar>
      <TituloPagina>Grupos</TituloPagina>
      {lista === null ? (
        <Carregando />
      ) : (
        lista.length > 0 && (
          <div className={LISTA}>
            {lista.map((g) => (
              <Link key={g.id} to={`/grupos/${g.id}`} className={`${LINHA} min-h-16`}>
                <Users className="size-5 shrink-0 text-destaque-texto" aria-hidden />
                <span className="min-w-0 flex-1">
                  <span className="block font-leitura text-[1.05rem] font-medium text-marca">{g.nome}</span>
                  <span className="block text-sm text-tinta-suave">{NOME_DO_TIPO_DE_GRUPO[g.tipo]}</span>
                </span>
                <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
              </Link>
            ))}
          </div>
        )
      )}

      {criando ? (
        <Cartao>
          <form onSubmit={criar} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-tinta-suave">Nome do grupo</span>
              <input value={nome} onChange={(e) => setNome(e.target.value)} maxLength={80} className={CAMPO} />
            </label>
            <div className="flex flex-wrap gap-2" role="group">
              {(Object.keys(NOME_DO_TIPO_DE_GRUPO) as Grupo["tipo"][]).map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={tipo === t}
                  onClick={() => setTipo(t)}
                  className={`min-h-10 rounded-full border px-4 text-sm font-medium ${tipo === t ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta"}`}
                >
                  {NOME_DO_TIPO_DE_GRUPO[t]}
                </button>
              ))}
            </div>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-tinta-suave">Seu nome no grupo</span>
              <input value={meuNome} onChange={(e) => setMeuNome(e.target.value)} maxLength={30} className={CAMPO} />
            </label>
            {erro && <p className="text-sm font-medium text-[#a9271f]">{erro}</p>}
            <button type="submit" disabled={nome.trim().length < 3 || meuNome.trim().length < 2} className={BOTAO}>
              Criar grupo
            </button>
          </form>
        </Cartao>
      ) : (
        <button type="button" onClick={() => setCriando(true)} className={BOTAO}>
          <Plus className="size-5" aria-hidden /> Criar grupo
        </button>
      )}

      <Cartao className="flex flex-col gap-3">
        <span className="text-sm font-medium text-tinta-suave">Código de convite</span>
        <div className="flex gap-2">
          <input value={codigo} onChange={(e) => setCodigo(e.target.value.trim().toLowerCase())} maxLength={8} autoCapitalize="none" autoComplete="off" className={CAMPO} />
          <Link to={`/grupos/entrar/${codigo}`} aria-disabled={codigo.length !== 8} className={`${SECUNDARIO} shrink-0 ${codigo.length !== 8 ? "pointer-events-none opacity-50" : ""}`}>
            Entrar
          </Link>
        </div>
      </Cartao>
    </div>
  );
}

export function EntrarNoGrupo() {
  const { codigo = "" } = useParams();
  const { email, pronto } = useConta();
  const navegar = useNavigate();
  const [convite, setConvite] = useState<Awaited<ReturnType<typeof verConvite>> | "erro" | null>(null);
  const [nome, setNome] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!email) return;
    verConvite(codigo)
      .then((c) => setConvite(c ?? "erro"))
      .catch(() => setConvite("erro"));
  }, [codigo, email]);

  if (!pronto) return <Carregando />;
  if (!email)
    return (
      <div className="flex flex-col gap-5">
        <Cabecalho titulo="Convite para um grupo" />
        <Link to="/conta" className={BOTAO}>
          Entrar para aceitar o convite
        </Link>
      </div>
    );
  if (convite === null) return <Carregando />;
  if (convite === "erro")
    return (
      <div className="flex flex-col gap-5">
        <Voltar para="/grupos">Grupos</Voltar>
        <p className="py-6 text-center text-tinta-suave">Convite inválido ou trocado pelo dono do grupo.</p>
      </div>
    );

  async function entrar(e: FormEvent) {
    e.preventDefault();
    setErro("");
    try {
      const id = await entrarNoGrupo(codigo, nome.trim());
      navegar(`/grupos/${id}`, { replace: true });
    } catch (err) {
      const t = String(err);
      setErro(t.includes("cheio") ? "O grupo está cheio." : t.includes("limite") ? "Você já está em 30 grupos." : "Não foi possível entrar agora.");
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/grupos">Grupos</Voltar>
      <Cabecalho titulo={convite.nome} subtitulo={`${NOME_DO_TIPO_DE_GRUPO[convite.tipo]} · ${convite.membros === 1 ? "1 pessoa" : `${convite.membros} pessoas`}`} />
      <Cartao>
        <form onSubmit={entrar} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-tinta-suave">Seu nome no grupo</span>
            <input value={nome} onChange={(e) => setNome(e.target.value)} maxLength={30} className={CAMPO} />
          </label>
          {erro && <p className="text-sm font-medium text-[#a9271f]">{erro}</p>}
          <button type="submit" disabled={nome.trim().length < 2} className={BOTAO}>
            Entrar no grupo
          </button>
        </form>
      </Cartao>
    </div>
  );
}

export function GrupoPagina() {
  const { id = "" } = useParams();
  const navegar = useNavigate();
  const [dados, setDados] = useState<{ grupo: Grupo; membros: Membro[] } | null | "nada" | "erro">(null);
  const [eu, setEu] = useState<string | null>(null);
  const [pedindo, setPedindo] = useState(false);
  const [versao, setVersao] = useState(0);
  const [copiado, setCopiado] = useState(false);
  const [aoVivo, setAoVivo] = useState(false);

  useEffect(() => {
    void meuId().then(setEu);
    carregarGrupo(id)
      .then((d) => setDados(d ?? "nada"))
      .catch(() => setDados("erro"));
    lerTercoDoGrupo(id)
      .then((t) => setAoVivo(Boolean(t?.ao_vivo)))
      .catch(() => {});
  }, [id, versao]);

  if (dados === null) return <Carregando />;
  if (dados === "nada") return <NaoEncontrada />;
  if (dados === "erro") return <Indisponivel />;
  const { grupo, membros } = dados;
  const souDono = eu === grupo.dono_id;

  async function convidar() {
    const ok = await compartilhar(grupo.nome, `Entre no grupo ${grupo.nome} para rezarmos juntos.`, `${base()}/grupos/entrar/${grupo.codigo}`);
    if (ok) {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/grupos">Grupos</Voltar>
      <Cabecalho titulo={grupo.nome} subtitulo={`${NOME_DO_TIPO_DE_GRUPO[grupo.tipo]} · ${membros.length === 1 ? "1 pessoa" : `${membros.length} pessoas`}`} />

      <Link to={`/grupos/${grupo.id}/terco`} className={`${BOTAO} min-h-14 text-lg`}>
        <Radio className="size-5" aria-hidden /> {aoVivo ? "Acompanhar o terço ao vivo" : "Terço do grupo"}
      </Link>
      <div className="grid grid-cols-2 gap-2">
        <button type="button" onClick={() => void convidar()} className={SECUNDARIO}>
          <Link2 className="size-5" aria-hidden /> {copiado ? "Link copiado" : "Convidar"}
        </button>
        <button type="button" onClick={() => setPedindo(!pedindo)} className={SECUNDARIO}>
          <Plus className="size-5" aria-hidden /> Pedir oração
        </button>
      </div>
      {pedindo && (
        <PedirOracao
          grupo={grupo.id}
          aoPedir={() => {
            setPedindo(false);
            setVersao((v) => v + 1);
          }}
        />
      )}

      <section>
        <h2 className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">Pedidos do grupo</h2>
        <ListaDeIntencoes grupo={grupo.id} versao={versao} />
      </section>

      <GrupoDeLinhas titulo="Pessoas">
        {membros.map((m) => (
          <div key={m.usuario_id} className={LINHA}>
            <span className="min-w-0 flex-1 font-medium text-tinta">
              {m.nome}
              {m.papel === "dono" && <span className="ml-2 text-sm font-normal text-tinta-suave">criou o grupo</span>}
            </span>
            {souDono && m.papel !== "dono" && (
              <button
                type="button"
                aria-label={`Tirar ${m.nome} do grupo`}
                onClick={() => {
                  if (confirm(`Tirar ${m.nome} do grupo?`)) void sairDoGrupo(grupo.id, m.usuario_id).then(() => setVersao((v) => v + 1));
                }}
                className="grid size-10 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo"
              >
                <UserMinus className="size-4" aria-hidden />
              </button>
            )}
          </div>
        ))}
      </GrupoDeLinhas>

      {souDono ? (
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => {
              if (confirm("Trocar o link de convite? O link antigo para de funcionar.")) void trocarConvite(grupo.id).then(() => setVersao((v) => v + 1));
            }}
            className="min-h-11 text-sm font-medium text-tinta-suave"
          >
            Trocar o link de convite
          </button>
          <button
            type="button"
            onClick={() => {
              if (confirm("Apagar o grupo e os pedidos dele?")) void apagarGrupo(grupo.id).then(() => navegar("/grupos", { replace: true }));
            }}
            className="flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-[#a9271f]"
          >
            <Trash2 className="size-4" aria-hidden /> Apagar grupo
          </button>
        </div>
      ) : (
        eu && (
          <button
            type="button"
            onClick={() => {
              if (confirm("Sair do grupo?")) void sairDoGrupo(grupo.id, eu).then(() => navegar("/grupos", { replace: true }));
            }}
            className="min-h-11 text-sm font-semibold text-[#a9271f]"
          >
            Sair do grupo
          </button>
        )
      )}
    </div>
  );
}

const ORDEM_DOS_MISTERIOS: GrupoDeMisterios[] = ["gozosos", "luminosos", "dolorosos", "gloriosos"];

export function TercoDoGrupoPagina() {
  const { id = "" } = useParams();
  const navegar = useNavigate();
  const [terco, setTerco] = useState<TercoDoGrupo | null | "nenhum">(null);
  const [nomeDoGrupo, setNomeDoGrupo] = useState("");
  const [conduzindo, setConduzindo] = useState(false);
  const [misterios, setMisterios] = useState<GrupoDeMisterios>(grupoDoDiaDaSemana(new Date().getDay()));
  const enviar = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    carregarGrupo(id)
      .then((d) => setNomeDoGrupo(d?.grupo.nome ?? ""))
      .catch(() => {});
    lerTercoDoGrupo(id)
      .then((t) => setTerco(t ?? "nenhum"))
      .catch(() => setTerco("nenhum"));
  }, [id]);

  useEffect(() => {
    if (conduzindo) return;
    let ativo = true;
    let parar: (() => void) | null = null;
    void ouvirTercoDoGrupo(id, (t) => ativo && setTerco(t)).then((p) => {
      if (ativo) parar = p;
      else p();
    });
    const t = setInterval(() => {
      void lerTercoDoGrupo(id).then((x) => ativo && x && setTerco(x));
    }, 8000);
    return () => {
      ativo = false;
      parar?.();
      clearInterval(t);
    };
  }, [id, conduzindo]);

  const grupoAtual = terco && terco !== "nenhum" ? terco.misterios : null;
  const passos = useMemo(() => (grupoAtual ? passosDoRosario(grupoAtual) : []), [grupoAtual]);

  if (terco === null) return <Carregando />;

  async function comecar() {
    const t = await comecarTercoDoGrupo(id, misterios).catch(() => null);
    if (!t) return;
    setTerco(t);
    setConduzindo(true);
  }

  if (terco === "nenhum" || (!terco.ao_vivo && !conduzindo)) {
    return (
      <div className="flex flex-col gap-5">
        <Voltar para={`/grupos/${id}`}>Grupo</Voltar>
        <Cabecalho titulo="Terço do grupo" subtitulo={nomeDoGrupo || undefined} />
        <Cartao className="flex flex-col gap-3">
          {ORDEM_DOS_MISTERIOS.map((g) => (
            <label key={g} className="flex min-h-11 items-center gap-3">
              <input type="radio" name="misterios" checked={misterios === g} onChange={() => setMisterios(g)} className="size-5 accent-[hsl(var(--destaque))]" />
              <span className="font-medium text-tinta">{MISTERIOS[g].nome}</span>
            </label>
          ))}
        </Cartao>
        <button type="button" onClick={() => void comecar()} className={`${BOTAO} min-h-14 text-lg`}>
          <Radio className="size-5" aria-hidden /> Começar ao vivo
        </button>
      </div>
    );
  }

  const t = terco;
  const mudar = (p: Posicao) => {
    setTerco({ ...t, passo: p.passo, conta: p.conta });
    if (enviar.current) clearTimeout(enviar.current);
    enviar.current = setTimeout(() => void moverTercoDoGrupo(id, p, true).catch(() => {}), 120);
  };
  const terminar = () => {
    if (enviar.current) clearTimeout(enviar.current);
    void moverTercoDoGrupo(id, { passo: t.passo, conta: t.conta }, false).catch(() => {});
    setConduzindo(false);
  };

  return (
    <TercoGuiado
      chave={`grupo-${id}`}
      tipo="rosario"
      titulo={nomeDoGrupo || MISTERIOS[t.misterios].nome}
      passos={passos}
      aoSair={() => {
        if (conduzindo) terminar();
        navegar(`/grupos/${id}`);
      }}
      controle={{ posicao: { passo: t.passo, conta: t.conta }, aoMudar: conduzindo ? mudar : undefined, aoTerminar: conduzindo ? terminar : undefined }}
    />
  );
}
