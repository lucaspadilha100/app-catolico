import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { AtSign, BellRing, CalendarDays, ChevronRight, Clock, Heart, ListMusic, MapPin, MessageCircle, Navigation, Pencil, Plus, Radio, Search, Share2, Trash2, X } from "lucide-react";
import { useConta } from "@/conta/useConta";
import { MISTERIOS, grupoDoDiaDaSemana, type GrupoDeMisterios } from "@/liturgia/terco";
import { nomeDoMisterio, passosDoRosario, type Passo } from "@/oracao/terco";
import { carregarParoquia, coordenadasDoEndereco, procurarParoquias } from "@/paroquias/api";
import { descreverSemanas, hhmm, NOME_DO_DIA, telefoneLegivel } from "@/paroquias/horarios";
import type { ParoquiaResumo } from "@/paroquias/tipos";
import {
  adicionarAjudante,
  ajudantesDoTerco,
  apagarTerco,
  carregarTerco,
  encontroDoDia,
  lerEncontro,
  meusTercos,
  moverAoVivo,
  ouvirEncontro,
  removerAjudante,
  salvarEncontro,
  salvarTerco,
  tercosPorIds,
  type DadosDoTerco,
  type TercoCompleto,
} from "@/tercos/api";
import { useTercosSeguidos } from "@/tercos/seguidos";
import type { Dezena, Encontro, Terco } from "@/tercos/tipos";
import { compartilhar, enderecoPublico } from "@/lib/nativo";
import { linkComoChegar } from "@/lib/comoChegar";
import { Cartao, Grupo, LINHA, TituloCartao, TituloPagina } from "@/components/Cartao";
import { Cabecalho, Carregando, Indisponivel, Voltar } from "@/components/Devocao";
import { TercoGuiado, type Posicao } from "@/components/TercoGuiado";
import { NaoEncontrada } from "@/pages/Simples";

const CAMPO = "min-h-12 w-full rounded-xl border border-borda bg-papel px-3 text-base text-tinta outline-none focus:border-destaque-texto";
const BOTAO = "flex min-h-12 items-center justify-center gap-2 rounded-xl bg-destaque px-4 font-semibold text-sobre-destaque disabled:opacity-50";
const SECUNDARIO = "flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-cartao px-4 font-semibold text-tinta";
const ORDEM_DOS_MISTERIOS: GrupoDeMisterios[] = ["gozosos", "luminosos", "dolorosos", "gloriosos"];

const isoLocal = (d: Date) => d.toLocaleDateString("sv-SE");
const semanaDoMes = (d: Date) => Math.floor((d.getDate() - 1) / 7) + 1;
const ultimaDoMes = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 7).getMonth() !== d.getMonth();

export function quandoDoTerco(t: Pick<Terco, "dia_semana" | "semanas" | "hora">): string {
  const semanas = descreverSemanas(t.semanas);
  return `${semanas ? `${NOME_DO_DIA[t.dia_semana]}, ${semanas}` : `${NOME_DO_DIA[t.dia_semana]}s`}, ${hhmm(t.hora)}`;
}

function proximasDatas(t: Pick<Terco, "dia_semana" | "semanas">, quantas: number): string[] {
  const r: string[] = [];
  const hoje = new Date();
  for (let i = 0; i < 70 && r.length < quantas; i++) {
    const d = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate() + i);
    if (d.getDay() !== t.dia_semana) continue;
    if (t.semanas?.length && !t.semanas.includes(semanaDoMes(d)) && !(t.semanas.includes(6) && ultimaDoMes(d))) continue;
    r.push(isoLocal(d));
  }
  return r;
}

const dataLegivel = (iso: string) => {
  const [a, m, d] = iso.split("-").map(Number);
  const data = new Date(a!, m! - 1, d!);
  const hoje = isoLocal(new Date());
  if (iso === hoje) return "Hoje";
  return `${NOME_DO_DIA[data.getDay()]}, ${d}/${String(m).padStart(2, "0")}`;
};

function ItemDeTerco({ t }: { t: Terco }) {
  return (
    <Link to={`/tercos/${t.id}`} className={`${LINHA} min-h-16`}>
      <span className="min-w-0 flex-1">
        <span className="block font-leitura text-[1.05rem] font-medium leading-snug text-marca">{t.nome}</span>
        <span className="block text-sm text-tinta-suave">
          {[quandoDoTerco(t), t.bairro || t.cidade, t.situacao === "pendente" && "aguardando revisão", t.situacao === "recusado" && "não aprovado"].filter(Boolean).join(" · ")}
        </span>
      </span>
      <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
    </Link>
  );
}

export function Tercos() {
  const { email, pronto } = useConta();
  const [seguidos] = useTercosSeguidos();
  const [meus, setMeus] = useState<Terco[] | null>(null);
  const [lista, setLista] = useState<Terco[] | null>(null);

  useEffect(() => {
    if (!email) return;
    meusTercos()
      .then(setMeus)
      .catch(() => setMeus([]));
  }, [email]);

  useEffect(() => {
    tercosPorIds(seguidos)
      .then(setLista)
      .catch(() => setLista([]));
  }, [seguidos.join(",")]);

  return (
    <div className="flex flex-col gap-5">
      <Voltar para="/rezar">Rezar</Voltar>
      <TituloPagina>Terço da Juventude</TituloPagina>
      <Link to="/missas?tipo=terco" className={`${BOTAO} min-h-14 text-lg`}>
        <Search className="size-5" aria-hidden /> Encontrar um terço
      </Link>

      {lista && lista.length > 0 && (
        <Grupo titulo="Seguindo">
          {lista.map((t) => (
            <ItemDeTerco key={t.id} t={t} />
          ))}
        </Grupo>
      )}

      {meus && meus.length > 0 && (
        <Grupo titulo="Meus terços">
          {meus.map((t) => (
            <ItemDeTerco key={t.id} t={t} />
          ))}
        </Grupo>
      )}

      {pronto && (
        <Link to={email ? "/tercos/novo" : "/conta"} className={SECUNDARIO}>
          <Plus className="size-5" aria-hidden /> Cadastrar o terço do seu grupo
        </Link>
      )}
    </div>
  );
}

function RoteiroDoEncontro({ e, completo = true }: { e: Encontro; completo?: boolean }) {
  const m = MISTERIOS[e.misterios];
  return (
    <div className="flex flex-col gap-3">
      <p className="font-leitura text-lg font-semibold text-marca">{m.nome}</p>
      <ol className="flex flex-col divide-y divide-borda">
        {m.misterios.map((nome, i) => {
          const d = e.dezenas[i];
          return (
            <li key={i} className="flex flex-col gap-0.5 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">{nomeDoMisterio(e.misterios, i)}</span>
              <span className="text-tinta">{nome}</span>
              {completo && d?.conduz && <span className="text-sm text-tinta-suave">Conduz: {d.conduz}</span>}
              {completo && d?.musica && (
                <span className="flex items-center gap-1.5 text-sm text-tinta-suave">
                  <ListMusic className="size-4 shrink-0" aria-hidden />
                  {d.link ? (
                    <a href={d.link} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                      {d.musica}
                    </a>
                  ) : (
                    d.musica
                  )}
                </span>
              )}
            </li>
          );
        })}
      </ol>
      {completo && e.intencoes && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">Intenções</p>
          <p className="whitespace-pre-line text-tinta">{e.intencoes}</p>
        </div>
      )}
      {completo && e.avisos && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">Avisos</p>
          <p className="whitespace-pre-line text-tinta">{e.avisos}</p>
        </div>
      )}
    </div>
  );
}

function Contato({ href, icone: Icone, rotulo, children }: { href: string; icone: typeof AtSign; rotulo: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={LINHA}>
      <Icone className="size-5 shrink-0 text-destaque-texto" aria-hidden />
      <span className="min-w-0 flex-1">
        <span className="block text-xs text-tinta-suave">{rotulo}</span>
        <span className="block font-medium text-tinta [overflow-wrap:anywhere]">{children}</span>
      </span>
      <ChevronRight className="size-4 shrink-0 text-tinta-suave" aria-hidden />
    </a>
  );
}

function Ajudantes({ terco }: { terco: string }) {
  const [lista, setLista] = useState<{ usuario_id: string; email: string }[]>([]);
  const [email, setEmail] = useState("");
  const [aviso, setAviso] = useState("");
  const recarregar = () => void ajudantesDoTerco(terco).then(setLista).catch(() => {});
  useEffect(recarregar, [terco]);

  async function adicionar(e: FormEvent) {
    e.preventDefault();
    setAviso("");
    try {
      await adicionarAjudante(terco, email.trim());
      setEmail("");
      recarregar();
    } catch (err) {
      const m = String(err);
      setAviso(m.includes("nenhuma conta") ? "Não há conta com este e-mail. A pessoa precisa criar a conta antes." : m.includes("limite") ? "São no máximo 10 ajudantes." : "Não foi possível agora. Tente de novo.");
    }
  }

  return (
    <Cartao className="flex flex-col gap-3">
      <h2 className="font-leitura text-xl font-semibold text-marca">Quem ajuda a conduzir</h2>
      {lista.map((a) => (
        <div key={a.usuario_id} className="flex items-center gap-2">
          <span className="min-w-0 flex-1 break-all text-tinta">{a.email}</span>
          <button type="button" onClick={() => void removerAjudante(terco, a.usuario_id).then(recarregar)} aria-label={`Tirar ${a.email}`} className="grid size-10 shrink-0 place-items-center rounded-full text-tinta-suave hover:bg-marca-fundo">
            <X className="size-4" aria-hidden />
          </button>
        </div>
      ))}
      <form onSubmit={adicionar} className="flex flex-col gap-2">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail da conta" aria-label="E-mail da conta" autoCapitalize="none" className={CAMPO} />
        {aviso && <p className="text-sm text-[#a9271f]">{aviso}</p>}
        <button type="submit" disabled={!email.includes("@")} className={BOTAO}>
          Dar acesso
        </button>
      </form>
    </Cartao>
  );
}

export function TercoPagina() {
  const { id = "" } = useParams();
  const { email } = useConta();
  const [dados, setDados] = useState<TercoCompleto | null | "erro" | "nada">(null);
  const [seguidos, alternar] = useTercosSeguidos();
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    let ativo = true;
    setDados(null);
    carregarTerco(id)
      .then((d) => ativo && setDados(d ?? "nada"))
      .catch(() => ativo && setDados("erro"));
    return () => {
      ativo = false;
    };
  }, [id, email]);

  if (dados === null) return <Carregando />;
  if (dados === "nada") return <NaoEncontrada />;
  if (dados === "erro") return <Indisponivel />;
  const { terco: t, paroquia, encontros, conduzo, responsavel } = dados;
  const proxima = proximasDatas(t, 1)[0];
  const encontro = encontros.find((e) => e.data === proxima) ?? encontros[0] ?? null;
  const aoVivo = encontros.find((e) => e.ao_vivo);
  const segue = seguidos.includes(t.id);
  const endereco = [t.endereco, t.bairro, `${t.cidade} - ${t.uf}`].filter(Boolean).join(", ");
  const destino = t.lat !== null && t.lng !== null ? `${t.lat},${t.lng}` : encodeURIComponent(endereco);

  async function enviar() {
    const texto = [t.nome, quandoDoTerco(t), endereco].join("\n");
    if ((await compartilhar({ titulo: t.nome, texto, url: `${enderecoPublico()}/tercos/${t.id}` })) === "copiado") {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Voltar para="/tercos">Terço da Juventude</Voltar>
      <Cabecalho titulo={t.nome} subtitulo={paroquia?.nome || t.comunidade || undefined} />
      {t.situacao !== "aprovado" && (
        <p className="rounded-2xl bg-marca-fundo px-4 py-3 text-tinta">{t.situacao === "pendente" ? "Aguardando revisão. Só você vê esta página por enquanto." : "Não aprovado na revisão."}</p>
      )}

      <p className="flex items-center gap-2 text-lg font-medium text-tinta">
        <Clock className="size-5 shrink-0 text-destaque-texto" aria-hidden />
        {quandoDoTerco(t)}
      </p>
      {(t.endereco || t.bairro) && (
        <p className="flex items-start gap-2 text-tinta">
          <MapPin className="mt-0.5 size-5 shrink-0 text-destaque-texto" aria-hidden />
          {endereco}
        </p>
      )}

      {aoVivo && (
        <Link to={`/tercos/${t.id}/ao-vivo?data=${aoVivo.data}`} className={`${BOTAO} min-h-14 text-lg`}>
          <Radio className="size-5" aria-hidden /> Acompanhar ao vivo
        </Link>
      )}

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => alternar(t.id)}
          aria-pressed={segue}
          className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border px-2 text-sm font-semibold ${segue ? "border-destaque-texto/50 bg-marca-fundo text-destaque-texto" : "border-borda bg-cartao text-tinta"}`}
        >
          <Heart className={`size-5 shrink-0 ${segue ? "fill-current" : ""}`} aria-hidden /> {segue ? "Seguindo" : "Seguir"}
        </button>
        <button type="button" onClick={() => void enviar()} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-cartao px-2 text-sm font-semibold text-tinta">
          <Share2 className="size-5 shrink-0" aria-hidden /> {copiado ? "Copiado" : "Compartilhar"}
        </button>
      </div>
      {(t.endereco || t.lat !== null) && (
        <a href={linkComoChegar(destino)} target="_blank" rel="noreferrer" className={SECUNDARIO}>
          <Navigation className="size-5" aria-hidden /> Como chegar
        </a>
      )}

      {proxima && (
        <Cartao className="p-4 sm:p-5">
          <TituloCartao icone={CalendarDays}>{`Próximo encontro: ${dataLegivel(encontro?.data ?? proxima)}`}</TituloCartao>
          <div className="mt-3">
            {encontro ? (
              <RoteiroDoEncontro e={encontro} />
            ) : (
              <RoteiroDoEncontro
                completo={false}
                e={{ id: "", terco_id: t.id, data: proxima, misterios: grupoDoDiaDaSemana(t.dia_semana), dezenas: [], intencoes: "", avisos: "", passo: 0, conta: 0, ao_vivo: false, atualizado_em: "" }}
              />
            )}
          </div>
        </Cartao>
      )}

      {conduzo && (
        <Grupo titulo="Para quem conduz">
          <Link to={`/tercos/${t.id}/ao-vivo?data=${encontro?.data ?? proxima ?? isoLocal(new Date())}`} className={LINHA}>
            <Radio className="size-5 shrink-0 text-destaque-texto" aria-hidden />
            <span className="min-w-0 flex-1 font-medium">Conduzir ao vivo</span>
            <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          </Link>
          <Link to={`/tercos/${t.id}/encontro?data=${encontro?.data ?? proxima ?? ""}`} className={LINHA}>
            <ListMusic className="size-5 shrink-0 text-destaque-texto" aria-hidden />
            <span className="min-w-0 flex-1 font-medium">Montar o roteiro</span>
            <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          </Link>
          {responsavel && (
            <Link to={`/tercos/${t.id}/editar`} className={LINHA}>
              <Pencil className="size-5 shrink-0 text-destaque-texto" aria-hidden />
              <span className="min-w-0 flex-1 font-medium">Editar dados do terço</span>
              <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
            </Link>
          )}
        </Grupo>
      )}
      {responsavel && <Ajudantes terco={t.id} />}

      {(t.instagram || t.whatsapp) && (
        <Cartao className="p-0">
          <div className="flex flex-col divide-y divide-borda">
            {t.instagram && (
              <Contato href={`https://instagram.com/${t.instagram}`} icone={AtSign} rotulo="Instagram">
                {`@${t.instagram}`}
              </Contato>
            )}
            {t.whatsapp && (
              <Contato href={`https://wa.me/55${t.whatsapp}`} icone={MessageCircle} rotulo="WhatsApp do grupo">
                {telefoneLegivel(t.whatsapp)}
              </Contato>
            )}
          </div>
        </Cartao>
      )}

      {paroquia && (
        <Link to={`/missas/paroquia/${paroquia.id}`} className={SECUNDARIO}>
          {paroquia.nome}
        </Link>
      )}
    </div>
  );
}

function EscolherParoquia({ valor, nome, onChange }: { valor: string | null; nome: string; onChange: (id: string | null, nome: string) => void }) {
  const [termo, setTermo] = useState("");
  const [achadas, setAchadas] = useState<ParoquiaResumo[]>([]);
  useEffect(() => {
    const t = termo.trim();
    if (t.length < 2) {
      setAchadas([]);
      return;
    }
    let ativo = true;
    const espera = setTimeout(
      () =>
        procurarParoquias({ termo: t, limite: 6, raioKm: 5000 })
          .then((r) => ativo && setAchadas(r))
          .catch(() => {}),
      300,
    );
    return () => {
      ativo = false;
      clearTimeout(espera);
    };
  }, [termo]);

  if (valor)
    return (
      <div className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-marca-fundo px-3">
        <span className="min-w-0 flex-1 font-medium text-tinta">{nome}</span>
        <button type="button" onClick={() => onChange(null, "")} aria-label="Tirar a paróquia" className="grid size-9 place-items-center rounded-full text-tinta-suave">
          <X className="size-4" aria-hidden />
        </button>
      </div>
    );
  return (
    <div className="relative">
      <input value={termo} onChange={(e) => setTermo(e.target.value)} placeholder="Procurar paróquia" className={CAMPO} autoComplete="off" />
      {achadas.length > 0 && (
        <ul className="absolute inset-x-0 top-full z-20 mt-1 overflow-hidden rounded-xl border border-borda bg-cartao shadow-lg">
          {achadas.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => {
                  onChange(p.id, p.nome);
                  setTermo("");
                }}
                className="flex min-h-12 w-full flex-col justify-center px-4 py-2 text-left hover:bg-marca-fundo"
              >
                <span className="font-medium text-tinta">{p.nome}</span>
                <span className="text-sm text-tinta-suave">{[p.bairro, p.cidade].filter(Boolean).join(" · ")}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Rotulo({ texto, children }: { texto: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-tinta-suave">{texto}</span>
      {children}
    </label>
  );
}

const VAZIO: DadosDoTerco = {
  nome: "",
  paroquia_id: null,
  comunidade: "",
  dia_semana: 5,
  semanas: null,
  hora: "19:30",
  endereco: "",
  bairro: "",
  cidade: "",
  uf: "RN",
  lat: null,
  lng: null,
  instagram: "",
  whatsapp: "",
};

export function EditarTerco() {
  const { id } = useParams();
  const navegar = useNavigate();
  const { email, pronto } = useConta();
  const [dados, setDados] = useState<DadosDoTerco | null>(id ? null : VAZIO);
  const [nomeDaParoquia, setNomeDaParoquia] = useState("");
  const [estado, setEstado] = useState<"" | "salvando" | "erro">("");
  const original = useRef<DadosDoTerco | null>(null);

  useEffect(() => {
    if (!id) return;
    carregarTerco(id)
      .then((d) => {
        if (!d) return;
        const { id: _i, responsavel_id: _r, situacao: _s, ativo: _a, ...resto } = d.terco;
        original.current = resto;
        setDados(resto);
        setNomeDaParoquia(d.paroquia?.nome ?? "");
      })
      .catch(() => setEstado("erro"));
  }, [id]);

  if (!pronto || !dados) return <Carregando />;
  if (!email)
    return (
      <div className="flex flex-col gap-5">
        <Voltar para="/tercos">Terço da Juventude</Voltar>
        <Cabecalho titulo="Cadastrar terço" />
        <Link to="/conta" className={BOTAO}>
          Entrar
        </Link>
      </div>
    );

  const mudar = (p: Partial<DadosDoTerco>) => setDados({ ...dados, ...p });

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (!dados) return;
    setEstado("salvando");
    try {
      let d = { ...dados, nome: dados.nome.trim(), cidade: dados.cidade.trim(), uf: dados.uf.toUpperCase(), instagram: dados.instagram.replace(/^@/, "").trim(), whatsapp: dados.whatsapp.replace(/\D/g, "") };
      if (d.paroquia_id && !d.endereco && !d.bairro) {
        const p = await carregarParoquia(d.paroquia_id).catch(() => null);
        if (p) d = { ...d, endereco: p.paroquia.endereco, bairro: p.paroquia.bairro, cidade: d.cidade || p.paroquia.cidade, uf: p.paroquia.uf, lat: p.paroquia.lat, lng: p.paroquia.lng };
      }
      const o = original.current;
      const mudouLugar = !o || o.endereco !== d.endereco || o.bairro !== d.bairro || o.cidade !== d.cidade || d.lat === null;
      if (mudouLugar && (d.endereco || d.cidade)) {
        const ponto =
          (d.endereco && (await coordenadasDoEndereco(`${d.endereco}, ${d.bairro}, ${d.cidade} - ${d.uf}`).catch(() => null))) ||
          (await coordenadasDoEndereco(`${d.bairro ? `${d.bairro}, ` : ""}${d.cidade} - ${d.uf}`).catch(() => null));
        if (ponto) d = { ...d, lat: ponto.lat, lng: ponto.lng };
      }
      const novo = await salvarTerco(d, id);
      navegar(`/tercos/${novo}`, { replace: true });
    } catch {
      setEstado("erro");
    }
  }

  async function apagar() {
    if (!id || !confirm("Apagar este terço?")) return;
    try {
      await apagarTerco(id);
      navegar("/tercos", { replace: true });
    } catch {
      setEstado("erro");
    }
  }

  const pode = dados.nome.trim().length >= 3 && dados.cidade.trim().length >= 2 && /^[A-Za-z]{2}$/.test(dados.uf) && /^\d{2}:\d{2}/.test(dados.hora);

  return (
    <div className="flex flex-col gap-5">
      <Voltar para={id ? `/tercos/${id}` : "/tercos"}>{id ? "Terço" : "Terço da Juventude"}</Voltar>
      <Cabecalho titulo={id ? "Editar terço" : "Cadastrar terço"} />
      <form onSubmit={enviar} className="flex flex-col gap-4">
        <Cartao className="flex flex-col gap-4">
          <Rotulo texto="Nome do terço">
            <input value={dados.nome} onChange={(e) => mudar({ nome: e.target.value })} maxLength={120} className={CAMPO} placeholder="Terço da Juventude Sagrada Família" />
          </Rotulo>
          <Rotulo texto="Paróquia">
            <EscolherParoquia
              valor={dados.paroquia_id}
              nome={nomeDaParoquia}
              onChange={(pid, nome) => {
                mudar({ paroquia_id: pid });
                setNomeDaParoquia(nome);
              }}
            />
          </Rotulo>
          {!dados.paroquia_id && (
            <Rotulo texto="Comunidade ou grupo">
              <input value={dados.comunidade} onChange={(e) => mudar({ comunidade: e.target.value })} maxLength={160} className={CAMPO} />
            </Rotulo>
          )}
        </Cartao>

        <Cartao className="flex flex-col gap-4">
          <div className="grid grid-cols-[1fr_auto] gap-3">
            <Rotulo texto="Dia">
              <select value={dados.dia_semana} onChange={(e) => mudar({ dia_semana: Number(e.target.value) })} className={CAMPO}>
                {NOME_DO_DIA.map((d, i) => (
                  <option key={d} value={i}>
                    {d}
                  </option>
                ))}
              </select>
            </Rotulo>
            <Rotulo texto="Hora">
              <input type="time" value={dados.hora.slice(0, 5)} onChange={(e) => mudar({ hora: e.target.value })} className={`${CAMPO} w-32`} />
            </Rotulo>
          </div>
          <fieldset className="flex flex-col gap-1.5">
            <legend className="mb-1.5 text-sm font-medium text-tinta-suave">Semanas do mês</legend>
            <div className="flex flex-wrap gap-2">
              {[
                [0, "Todas"],
                [1, "1ª"],
                [2, "2ª"],
                [3, "3ª"],
                [4, "4ª"],
                [6, "Última"],
              ].map(([v, nome]) => {
                const todas = !dados.semanas?.length;
                const ativo = v === 0 ? todas : !todas && dados.semanas!.includes(v as number);
                return (
                  <button
                    key={v}
                    type="button"
                    aria-pressed={ativo}
                    onClick={() => {
                      if (v === 0) return mudar({ semanas: null });
                      const atual = dados.semanas ?? [];
                      const novo = atual.includes(v as number) ? atual.filter((x) => x !== v) : [...atual, v as number].sort();
                      mudar({ semanas: novo.length ? novo : null });
                    }}
                    className={`min-h-10 rounded-full border px-4 text-sm font-medium ${ativo ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta"}`}
                  >
                    {nome}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </Cartao>

        <Cartao className="flex flex-col gap-4">
          <Rotulo texto="Endereço">
            <input value={dados.endereco} onChange={(e) => mudar({ endereco: e.target.value })} maxLength={240} className={CAMPO} />
          </Rotulo>
          <Rotulo texto="Bairro">
            <input value={dados.bairro} onChange={(e) => mudar({ bairro: e.target.value })} maxLength={120} className={CAMPO} />
          </Rotulo>
          <div className="grid grid-cols-[1fr_5rem] gap-3">
            <Rotulo texto="Cidade">
              <input value={dados.cidade} onChange={(e) => mudar({ cidade: e.target.value })} maxLength={120} className={CAMPO} />
            </Rotulo>
            <Rotulo texto="UF">
              <input value={dados.uf} onChange={(e) => mudar({ uf: e.target.value.toUpperCase().slice(0, 2) })} maxLength={2} className={CAMPO} />
            </Rotulo>
          </div>
        </Cartao>

        <Cartao className="flex flex-col gap-4">
          <Rotulo texto="Instagram">
            <input value={dados.instagram} onChange={(e) => mudar({ instagram: e.target.value })} maxLength={31} className={CAMPO} autoCapitalize="none" />
          </Rotulo>
          <Rotulo texto="WhatsApp do grupo">
            <input value={dados.whatsapp} onChange={(e) => mudar({ whatsapp: e.target.value })} inputMode="tel" maxLength={20} className={CAMPO} />
          </Rotulo>
        </Cartao>

        {estado === "erro" && <p className="text-sm font-medium text-[#a9271f]">Não foi possível salvar agora. Tente de novo.</p>}
        <button type="submit" disabled={!pode || estado === "salvando"} className={BOTAO}>
          {estado === "salvando" ? "Salvando" : id ? "Salvar" : "Enviar para revisão"}
        </button>
        {id && (
          <button type="button" onClick={() => void apagar()} className="flex min-h-12 items-center justify-center gap-2 font-semibold text-[#a9271f]">
            <Trash2 className="size-4" aria-hidden /> Apagar terço
          </button>
        )}
      </form>
    </div>
  );
}

export function EditarEncontro() {
  const { id = "" } = useParams();
  const [params, setParams] = useSearchParams();
  const navegar = useNavigate();
  const [terco, setTerco] = useState<TercoCompleto | null>(null);
  const [form, setForm] = useState<{ misterios: GrupoDeMisterios; dezenas: Dezena[]; intencoes: string; avisos: string } | null>(null);
  const [estado, setEstado] = useState<"" | "salvando" | "erro">("");
  const datas = terco ? proximasDatas(terco.terco, 6) : [];
  const data = params.get("data") || datas[0] || "";

  useEffect(() => {
    carregarTerco(id)
      .then(setTerco)
      .catch(() => setEstado("erro"));
  }, [id]);

  useEffect(() => {
    if (!terco || !data) return;
    setForm(null);
    encontroDoDia(id, data)
      .then((e) => {
        const [a, m, d] = data.split("-").map(Number);
        const padrao = grupoDoDiaDaSemana(new Date(a!, m! - 1, d!).getDay());
        const dezenas = Array.from({ length: 5 }, (_, i) => e?.dezenas[i] ?? { conduz: "", musica: "", link: "" });
        setForm({ misterios: e?.misterios ?? padrao, dezenas, intencoes: e?.intencoes ?? "", avisos: e?.avisos ?? "" });
      })
      .catch(() => setEstado("erro"));
  }, [terco, data]);

  if (!terco || !form) return estado === "erro" ? <Indisponivel /> : <Carregando />;
  if (!terco.conduzo) return <NaoEncontrada />;

  const mudarDezena = (i: number, p: Partial<Dezena>) => setForm({ ...form, dezenas: form.dezenas.map((d, k) => (k === i ? { ...d, ...p } : d)) });

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (!form) return;
    setEstado("salvando");
    try {
      const dezenas = form.dezenas.map((d) => ({ conduz: d.conduz.trim(), musica: d.musica.trim(), link: /^https?:\/\//.test(d.link.trim()) ? d.link.trim() : "" }));
      await salvarEncontro({ terco_id: id, data, misterios: form.misterios, dezenas, intencoes: form.intencoes.trim(), avisos: form.avisos.trim() });
      navegar(`/tercos/${id}`, { replace: true });
    } catch {
      setEstado("erro");
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <Voltar para={`/tercos/${id}`}>Terço</Voltar>
      <Cabecalho titulo="Roteiro do encontro" subtitulo={terco.terco.nome} />
      <div className="flex flex-wrap gap-2">
        {[...new Set([data, ...datas])].map((d) => (
          <button
            key={d}
            type="button"
            aria-pressed={d === data}
            onClick={() => setParams({ data: d }, { replace: true })}
            className={`min-h-10 rounded-full border px-4 text-sm font-medium ${d === data ? "border-transparent bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta"}`}
          >
            {dataLegivel(d)}
          </button>
        ))}
      </div>
      <form onSubmit={enviar} className="flex flex-col gap-4">
        <Cartao className="flex flex-col gap-3">
          <Rotulo texto="Mistérios">
            <select value={form.misterios} onChange={(e) => setForm({ ...form, misterios: e.target.value as GrupoDeMisterios })} className={CAMPO}>
              {ORDEM_DOS_MISTERIOS.map((g) => (
                <option key={g} value={g}>
                  {MISTERIOS[g].nome}
                </option>
              ))}
            </select>
          </Rotulo>
        </Cartao>
        {MISTERIOS[form.misterios].misterios.map((nome, i) => (
          <Cartao key={i} className="flex flex-col gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-destaque-texto">{nomeDoMisterio(form.misterios, i)}</p>
              <p className="font-leitura text-lg text-marca">{nome}</p>
            </div>
            <Rotulo texto="Quem conduz">
              <input value={form.dezenas[i]!.conduz} onChange={(e) => mudarDezena(i, { conduz: e.target.value })} maxLength={80} className={CAMPO} />
            </Rotulo>
            <Rotulo texto="Música">
              <input value={form.dezenas[i]!.musica} onChange={(e) => mudarDezena(i, { musica: e.target.value })} maxLength={120} className={CAMPO} />
            </Rotulo>
            <Rotulo texto="Link da música">
              <input value={form.dezenas[i]!.link} onChange={(e) => mudarDezena(i, { link: e.target.value })} maxLength={300} inputMode="url" autoCapitalize="none" className={CAMPO} />
            </Rotulo>
          </Cartao>
        ))}
        <Cartao className="flex flex-col gap-4">
          <Rotulo texto="Intenções">
            <textarea value={form.intencoes} onChange={(e) => setForm({ ...form, intencoes: e.target.value })} rows={3} maxLength={2000} className={`${CAMPO} py-2`} />
          </Rotulo>
          <Rotulo texto="Avisos">
            <textarea value={form.avisos} onChange={(e) => setForm({ ...form, avisos: e.target.value })} rows={3} maxLength={2000} className={`${CAMPO} py-2`} />
          </Rotulo>
        </Cartao>
        {estado === "erro" && <p className="text-sm font-medium text-[#a9271f]">Não foi possível salvar agora. Tente de novo.</p>}
        <button type="submit" disabled={estado === "salvando"} className={BOTAO}>
          {estado === "salvando" ? "Salvando" : "Salvar roteiro"}
        </button>
      </form>
    </div>
  );
}

export function AoVivo() {
  const { id = "" } = useParams();
  const [params] = useSearchParams();
  const navegar = useNavigate();
  const data = params.get("data") || isoLocal(new Date());
  const [terco, setTerco] = useState<TercoCompleto | null | "erro">(null);
  const [encontro, setEncontro] = useState<Encontro | null | "nenhum">(null);
  const [conduzindo, setConduzindo] = useState(false);
  const enviar = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    carregarTerco(id)
      .then((t) => setTerco(t ?? "erro"))
      .catch(() => setTerco("erro"));
  }, [id]);

  useEffect(() => {
    if (!terco || terco === "erro") return;
    encontroDoDia(id, data)
      .then((e) => setEncontro(e ?? "nenhum"))
      .catch(() => setEncontro("nenhum"));
  }, [terco, id, data]);

  const encontroId = encontro && encontro !== "nenhum" ? encontro.id : null;
  useEffect(() => {
    if (!encontroId || conduzindo) return;
    let parar: (() => void) | null = null;
    let ativo = true;
    void ouvirEncontro(encontroId, (e) => ativo && setEncontro(e)).then((p) => {
      if (ativo) parar = p;
      else p();
    });
    const t = setInterval(() => {
      void lerEncontro(encontroId).then((e) => ativo && e && setEncontro(e));
    }, 8000);
    return () => {
      ativo = false;
      parar?.();
      clearInterval(t);
    };
  }, [encontroId, conduzindo]);

  const passos = useMemo<Passo[]>(() => (encontro && encontro !== "nenhum" ? passosDoRosario(encontro.misterios) : []), [encontro && encontro !== "nenhum" ? encontro.misterios : null]);

  if (terco === null || encontro === null) return <Carregando />;
  if (terco === "erro") return <Indisponivel />;
  const t = terco.terco;

  async function comecar() {
    if (!terco || terco === "erro") return;
    try {
      const e =
        encontro && encontro !== "nenhum"
          ? encontro
          : await salvarEncontro({ terco_id: id, data, misterios: grupoDoDiaDaSemana(new Date().getDay()), dezenas: [], intencoes: "", avisos: "" });
      await moverAoVivo(e.id, { passo: 0, conta: 0 }, true);
      setEncontro({ ...e, passo: 0, conta: 0, ao_vivo: true });
      setConduzindo(true);
    } catch {}
  }

  if (encontro === "nenhum" || (!encontro.ao_vivo && !conduzindo)) {
    return (
      <div className="flex flex-col gap-5">
        <Voltar para={`/tercos/${id}`}>Terço</Voltar>
        <Cabecalho titulo={t.nome} subtitulo={dataLegivel(data)} />
        {terco.conduzo ? (
          <button type="button" onClick={() => void comecar()} className={`${BOTAO} min-h-14 text-lg`}>
            <Radio className="size-5" aria-hidden /> Começar ao vivo
          </button>
        ) : (
          <Cartao className="flex flex-col items-center gap-2 py-8 text-center">
            <BellRing className="size-8 text-destaque-texto" aria-hidden />
            <p className="font-medium text-tinta">O terço ainda não começou.</p>
            <p className="text-sm text-tinta-suave">{quandoDoTerco(t)}</p>
          </Cartao>
        )}
        {encontro !== "nenhum" && (
          <Cartao>
            <RoteiroDoEncontro e={encontro} />
          </Cartao>
        )}
      </div>
    );
  }

  const e = encontro;
  const mudar = (p: Posicao) => {
    setEncontro({ ...e, passo: p.passo, conta: p.conta });
    if (enviar.current) clearTimeout(enviar.current);
    enviar.current = setTimeout(() => void moverAoVivo(e.id, p, true).catch(() => {}), 120);
  };
  const terminar = () => {
    if (enviar.current) clearTimeout(enviar.current);
    void moverAoVivo(e.id, { passo: e.passo, conta: e.conta }, false).catch(() => {});
    setConduzindo(false);
  };
  const extra = (passo: Passo) => {
    const i = passo.misterio?.indice ?? (passo.chave.match(/^m(\d)-/) ? Number(passo.chave.slice(1, 2)) : null);
    if (i === null) return null;
    const d = e.dezenas[i];
    if (!d) return null;
    const musica = passo.chave.endsWith("-fatima") && d.musica;
    if (!d.conduz && !musica) return null;
    return (
      <div className="flex flex-col gap-1 rounded-2xl bg-marca-fundo px-4 py-3">
        {d.conduz && passo.misterio && <p className="text-tinta">Conduz: {d.conduz}</p>}
        {musica && (
          <p className="flex items-center gap-2 text-tinta">
            <ListMusic className="size-4 shrink-0 text-destaque-texto" aria-hidden />
            {d.link ? (
              <a href={d.link} target="_blank" rel="noreferrer" className="underline underline-offset-2">
                {d.musica}
              </a>
            ) : (
              d.musica
            )}
          </p>
        )}
      </div>
    );
  };

  return (
    <TercoGuiado
      chave={`ao-vivo-${e.id}`}
      tipo="rosario"
      titulo={t.nome}
      passos={passos}
      aoSair={() => {
        if (conduzindo) terminar();
        navegar(`/tercos/${id}`);
      }}
      controle={{ posicao: { passo: e.passo, conta: e.conta }, aoMudar: conduzindo ? mudar : undefined, aoTerminar: conduzindo ? terminar : undefined, extra }}
    />
  );
}
