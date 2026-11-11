import { useCallback, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ChevronRight, Download, Search } from "lucide-react";
import type { Paroquia } from "@/paroquias/tipos";
import { chaveValida, normalizarChave, textoDoPix, tipoDaChave, type TipoDeChave } from "@/paroquias/pix";
import {
  NOME_DA_TURMA,
  dataCurta,
  inscricoesDaTurma,
  mudarSituacao,
  numerosDaParoquia,
  pixParaConferir,
  planilha,
  salvarPix,
  salvarTurma,
  todasAsInscricoes,
  turmasDaParoquia,
  type Inscricao,
  type NumerosDaParoquia,
  type PixParaConferir,
  type SituacaoDaInscricao,
  type TipoDeTurma,
  type Turma,
} from "@/paroquias/plano";
import { telefoneLegivel } from "@/paroquias/horarios";
import { NOME_DA_SITUACAO, detalhesDaTurma } from "@/components/PlanoDaParoquia";
import { Cartao } from "@/components/Cartao";
import { Cabecalho, Carregando, Voltar } from "@/components/Devocao";
import { compartilhar } from "@/lib/nativo";

const CAMPO = "min-h-12 w-full rounded-xl border border-borda bg-papel px-3 text-base";
const BOTAO = "min-h-12 rounded-xl bg-destaque px-4 font-semibold text-sobre-destaque disabled:opacity-50";
const BOTAO_CLARO = "min-h-11 rounded-xl border border-borda bg-cartao px-4 font-semibold text-tinta";
const TITULO = "font-leitura text-xl font-semibold text-marca";

function Campo({ rotulo, children }: { rotulo: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-tinta-suave">{rotulo}</span>
      {children}
    </label>
  );
}

function Numeros({ paroquia }: { paroquia: string }) {
  const [n, setN] = useState<NumerosDaParoquia | null>(null);
  useEffect(() => {
    numerosDaParoquia(paroquia)
      .then(setN)
      .catch(() => {});
  }, [paroquia]);
  if (!n) return null;
  const itens: [string, number][] = [
    ["Recebem os avisos", n.recebem_avisos],
    ["Contas que seguem", n.contas_que_seguem],
    ["Publicações em 30 dias", n.publicacoes_30_dias],
    ["Avisos entregues em 30 dias", n.alcance_30_dias],
    ["Inscrições para conferir", n.inscricoes_recebidas],
    ["Inscrições confirmadas", n.inscricoes_confirmadas],
  ];
  return (
    <Cartao className="flex flex-col gap-3">
      <h2 className={TITULO}>Números</h2>
      <dl className="grid grid-cols-2 gap-2">
        {itens.map(([rotulo, valor]) => (
          <div key={rotulo} className="flex flex-col rounded-xl bg-marca-fundo px-3 py-2">
            <dd className="font-leitura text-2xl font-semibold text-marca">{valor.toLocaleString("pt-BR")}</dd>
            <dt className="text-sm text-tinta-suave">{rotulo}</dt>
          </div>
        ))}
      </dl>
    </Cartao>
  );
}

const NOME_DO_TIPO_DE_CHAVE: Record<TipoDeChave, string> = { cnpj: "CNPJ", cpf: "CPF", email: "E-mail", telefone: "Telefone", aleatoria: "Chave aleatória" };

function Pix({ p, admin, aoMudar }: { p: Paroquia; admin: boolean; aoMudar: () => void }) {
  const [tipo, setTipo] = useState<TipoDeChave>(p.pix_chave ? tipoDaChave(p.pix_chave) : "cnpj");
  const [chave, setChave] = useState(p.pix_chave.replace(/^\+55/, ""));
  const [nome, setNome] = useState(p.pix_nome || textoDoPix(p.nome, 25));
  const [cidade, setCidade] = useState(p.pix_cidade || textoDoPix(p.cidade, 15));
  const [estado, setEstado] = useState("");
  const normalizada = chave.trim() ? normalizarChave(tipo, chave) : "";
  const valida = !normalizada || chaveValida(normalizada);

  async function salvar(e: FormEvent) {
    e.preventDefault();
    if (!valida) return;
    setEstado("Salvando");
    try {
      await salvarPix(p.id, { pix_chave: normalizada, pix_nome: textoDoPix(nome, 25), pix_cidade: textoDoPix(cidade, 15) });
      setEstado("");
      aoMudar();
    } catch (err) {
      setEstado(`Não foi possível salvar: ${(err as Error).message}`);
    }
  }

  return (
    <Cartao>
      <form onSubmit={salvar} className="flex flex-col gap-3">
        <h2 className={TITULO}>Oferta e dízimo (PIX)</h2>
        {p.pix_chave && <p className={p.pix_conferido ? "font-medium text-destaque-texto" : "text-tinta-suave"}>{p.pix_conferido ? (p.plano === "gratis" ? "Chave conferida. Aparece com o plano." : "Chave conferida e no ar") : "Chave em conferência"}</p>}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[auto_1fr]">
          <Campo rotulo="Tipo de chave">
            <select value={tipo} onChange={(e) => setTipo(e.target.value as TipoDeChave)} className={CAMPO}>
              {Object.entries(NOME_DO_TIPO_DE_CHAVE).map(([v, n]) => (
                <option key={v} value={v}>
                  {n}
                </option>
              ))}
            </select>
          </Campo>
          <Campo rotulo="Chave">
            <input value={chave} onChange={(e) => setChave(e.target.value)} inputMode={tipo === "email" || tipo === "aleatoria" ? "text" : "numeric"} autoCapitalize="none" className={CAMPO} />
          </Campo>
        </div>
        {!valida && <p className="text-sm text-[#a9271f]">Chave inválida para o tipo escolhido.</p>}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Campo rotulo="Nome do recebedor">
            <input value={nome} onChange={(e) => setNome(e.target.value)} maxLength={40} className={CAMPO} />
          </Campo>
          <Campo rotulo="Cidade">
            <input value={cidade} onChange={(e) => setCidade(e.target.value)} maxLength={30} className={CAMPO} />
          </Campo>
        </div>
        {estado && <p className="text-sm text-tinta-suave">{estado}</p>}
        <button type="submit" disabled={!valida || estado === "Salvando"} className={BOTAO}>
          Salvar chave
        </button>
        {admin && p.pix_chave && (
          <button type="button" onClick={() => void salvarPix(p.id, { pix_chave: p.pix_chave, pix_nome: p.pix_nome, pix_cidade: p.pix_cidade, pix_conferido: !p.pix_conferido }).then(aoMudar)} className={BOTAO_CLARO}>
            {p.pix_conferido ? "Desfazer conferência" : "Chave conferida"}
          </button>
        )}
      </form>
    </Cartao>
  );
}

const TURMA_NOVA = { tipo: "batismo" as TipoDeTurma, titulo: "", descricao: "", inicio: "", encerra: "", vagas: "" };

function Turmas({ paroquia }: { paroquia: string }) {
  const [lista, setLista] = useState<Turma[] | null>(null);
  const [nova, setNova] = useState<typeof TURMA_NOVA | null>(null);
  const [estado, setEstado] = useState("");
  const recarregar = useCallback(() => {
    turmasDaParoquia(paroquia)
      .then(setLista)
      .catch(() => setLista([]));
  }, [paroquia]);
  useEffect(recarregar, [recarregar]);

  async function criar(e: FormEvent) {
    e.preventDefault();
    if (!nova) return;
    setEstado("Salvando");
    try {
      await salvarTurma({
        paroquia_id: paroquia,
        tipo: nova.tipo,
        titulo: nova.titulo.trim(),
        descricao: nova.descricao.trim(),
        inicio: nova.inicio || null,
        encerra: nova.encerra || null,
        vagas: Number(nova.vagas) > 0 ? Math.floor(Number(nova.vagas)) : null,
      });
      setNova(null);
      setEstado("");
      recarregar();
    } catch (err) {
      setEstado(`Não foi possível salvar: ${(err as Error).message}`);
    }
  }

  return (
    <Cartao className="flex flex-col gap-3">
      <h2 className={TITULO}>Inscrições</h2>
      {lista?.map((t) => (
        <div key={t.id} className="flex items-center gap-2 rounded-xl border border-borda">
          <Link to={`/painel/paroquia/${paroquia}/turma/${t.id}`} className="flex min-h-14 min-w-0 flex-1 items-center gap-2 px-3 py-2">
            <div className="min-w-0 flex-1">
              <p className="text-tinta">{t.titulo}</p>
              <p className="text-sm text-tinta-suave">{[NOME_DA_TURMA[t.tipo], `${t.inscritos} ${t.inscritos === 1 ? "inscrito" : "inscritos"}`, !t.aberta && "Encerrada"].filter(Boolean).join(" · ")}</p>
            </div>
            <ChevronRight className="size-5 shrink-0 text-tinta-suave" aria-hidden />
          </Link>
        </div>
      ))}
      {nova ? (
        <form onSubmit={criar} className="flex flex-col gap-3">
          <Campo rotulo="Tipo">
            <select value={nova.tipo} onChange={(e) => setNova({ ...nova, tipo: e.target.value as TipoDeTurma })} className={CAMPO}>
              {Object.entries(NOME_DA_TURMA).map(([v, n]) => (
                <option key={v} value={v}>
                  {n}
                </option>
              ))}
            </select>
          </Campo>
          <Campo rotulo="Título">
            <input value={nova.titulo} onChange={(e) => setNova({ ...nova, titulo: e.target.value })} placeholder="Batismo de dezembro" maxLength={120} className={CAMPO} />
          </Campo>
          <Campo rotulo="Descrição">
            <textarea value={nova.descricao} onChange={(e) => setNova({ ...nova, descricao: e.target.value })} rows={4} maxLength={1500} className={`${CAMPO} py-2`} />
          </Campo>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Campo rotulo="Início">
              <input type="date" value={nova.inicio} onChange={(e) => setNova({ ...nova, inicio: e.target.value })} className={CAMPO} />
            </Campo>
            <Campo rotulo="Inscrições até">
              <input type="date" value={nova.encerra} onChange={(e) => setNova({ ...nova, encerra: e.target.value })} className={CAMPO} />
            </Campo>
            <Campo rotulo="Vagas">
              <input value={nova.vagas} onChange={(e) => setNova({ ...nova, vagas: e.target.value.replace(/\D/g, "") })} inputMode="numeric" placeholder="Sem limite" className={CAMPO} />
            </Campo>
          </div>
          {estado && <p className="text-sm text-tinta-suave">{estado}</p>}
          <div className="grid grid-cols-2 gap-2">
            <button type="button" onClick={() => setNova(null)} className={BOTAO_CLARO}>
              Cancelar
            </button>
            <button type="submit" disabled={nova.titulo.trim().length < 3 || estado === "Salvando"} className={BOTAO}>
              Abrir inscrições
            </button>
          </div>
        </form>
      ) : (
        <button type="button" onClick={() => setNova(TURMA_NOVA)} className={BOTAO_CLARO}>
          Abrir inscrições
        </button>
      )}
    </Cartao>
  );
}

export function PlanoNoPainel({ p, admin, aoMudar }: { p: Paroquia; admin: boolean; aoMudar: () => void }) {
  const comPlano = p.plano !== "gratis";
  if (!comPlano && !admin) return null;
  return (
    <>
      {comPlano && <Turmas paroquia={p.id} />}
      <Pix key={`${p.pix_chave}${p.pix_conferido}`} p={p} admin={admin} aoMudar={aoMudar} />
      <Numeros paroquia={p.id} />
    </>
  );
}

export function PixParaConferirLista() {
  const [lista, setLista] = useState<PixParaConferir[] | null>(null);
  const recarregar = useCallback(() => {
    pixParaConferir()
      .then(setLista)
      .catch(() => setLista([]));
  }, []);
  useEffect(recarregar, [recarregar]);
  if (!lista?.length) return null;
  return (
    <section className="flex flex-col gap-2">
      <h2 className="px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto">PIX para conferir ({lista.length})</h2>
      {lista.map((x) => (
        <Cartao key={x.id} className="flex flex-col gap-3 p-4">
          <Link to={`/painel/paroquia/${x.id}`} className="font-medium text-tinta">
            {x.nome} · {x.cidade}
          </Link>
          <p className="break-all text-sm text-tinta">
            Chave: {x.pix_chave}
            <br />
            Recebedor: {x.pix_nome} · {x.pix_cidade}
          </p>
          <button type="button" onClick={() => void salvarPix(x.id, { pix_chave: x.pix_chave, pix_nome: x.pix_nome, pix_cidade: x.pix_cidade, pix_conferido: true }).then(recarregar)} className={BOTAO}>
            Chave conferida
          </button>
        </Cartao>
      ))}
    </section>
  );
}

const FILTROS: [SituacaoDaInscricao | "todas", string][] = [
  ["recebida", "Para conferir"],
  ["confirmada", "Confirmadas"],
  ["cancelada", "Canceladas"],
  ["todas", "Todas"],
];
const POR_PAGINA = 30;

function idade(nascimento: string): string {
  const [a, m, d] = nascimento.split("-").map(Number);
  const hoje = new Date();
  let anos = hoje.getFullYear() - a!;
  if (hoje.getMonth() + 1 < m! || (hoje.getMonth() + 1 === m && hoje.getDate() < d!)) anos--;
  return anos < 1 ? "menos de 1 ano" : `${anos} ${anos === 1 ? "ano" : "anos"}`;
}

function ItemDaInscricao({ i, aoMudar }: { i: Inscricao; aoMudar: () => void }) {
  const mudar = (s: SituacaoDaInscricao) => void mudarSituacao(i.id, s).then(aoMudar);
  return (
    <li className="flex flex-col gap-2 px-4 py-4">
      <div className="flex items-start justify-between gap-2">
        <p className="font-medium text-tinta">{i.nome}</p>
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${i.situacao === "confirmada" ? "bg-marca-fundo text-destaque-texto" : "border border-borda text-tinta-suave"}`}>{NOME_DA_SITUACAO[i.situacao]}</span>
      </div>
      <p className="text-sm text-tinta-suave">
        {[i.nascimento && `${dataCurta(i.nascimento)} (${idade(i.nascimento)})`, i.responsavel && `Responsável: ${i.responsavel}`, `Inscrito em ${new Date(i.criado_em).toLocaleDateString("pt-BR")}`].filter(Boolean).join(" · ")}
      </p>
      {i.observacao && <p className="whitespace-pre-line text-sm text-tinta">{i.observacao}</p>}
      <div className="flex flex-wrap gap-2">
        <a href={`https://wa.me/55${i.telefone.replace(/^55(?=\d{10,11}$)/, "")}`} target="_blank" rel="noreferrer" className="flex min-h-10 items-center rounded-full border border-borda px-4 text-sm font-medium text-destaque-texto">
          {telefoneLegivel(i.telefone)}
        </a>
        {i.situacao !== "confirmada" && (
          <button type="button" onClick={() => mudar("confirmada")} className="min-h-10 rounded-full bg-destaque px-4 text-sm font-semibold text-sobre-destaque">
            Confirmar
          </button>
        )}
        {i.situacao !== "cancelada" && (
          <button
            type="button"
            onClick={() => {
              if (confirm(`Cancelar a inscrição de ${i.nome}?`)) mudar("cancelada");
            }}
            className="min-h-10 rounded-full border border-borda px-4 text-sm font-medium text-tinta-suave"
          >
            Cancelar
          </button>
        )}
      </div>
    </li>
  );
}

export function InscricoesDaTurma() {
  const { id = "", turma = "" } = useParams();
  const [params, setParams] = useSearchParams();
  const situacao = (params.get("situacao") ?? "recebida") as SituacaoDaInscricao | "todas";
  const termo = params.get("q") ?? "";
  const [busca, setBusca] = useState(termo);
  const [t, setT] = useState<Turma | null | "nada">(null);
  const [lista, setLista] = useState<Inscricao[] | null>(null);
  const [total, setTotal] = useState(0);
  const [versao, setVersao] = useState(0);
  const [baixando, setBaixando] = useState(false);

  useEffect(() => {
    turmasDaParoquia(id)
      .then((r) => setT(r.find((x) => x.id === turma) ?? "nada"))
      .catch(() => setT("nada"));
  }, [id, turma, versao]);

  useEffect(() => {
    let ativo = true;
    setLista(null);
    inscricoesDaTurma({ turma, situacao, termo, pular: 0, limite: POR_PAGINA })
      .then((r) => {
        if (!ativo) return;
        setLista(r.lista);
        setTotal(r.total);
      })
      .catch(() => ativo && setLista([]));
    return () => {
      ativo = false;
    };
  }, [turma, situacao, termo, versao]);

  useEffect(() => {
    const espera = setTimeout(() => {
      if (busca.trim() === termo) return;
      const p = new URLSearchParams(params);
      if (busca.trim()) p.set("q", busca.trim());
      else p.delete("q");
      setParams(p, { replace: true });
    }, 350);
    return () => clearTimeout(espera);
  }, [busca, termo, params, setParams]);

  if (t === null) return <Carregando />;
  if (t === "nada") return <p className="text-tinta-suave">Sem acesso.</p>;

  async function baixar() {
    if (t === null || t === "nada") return;
    setBaixando(true);
    try {
      const todas = await todasAsInscricoes(t.id);
      const nome = `inscricoes-${t.titulo.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.csv`;
      await compartilhar({ titulo: t.titulo, imagem: { blob: new Blob([planilha(todas)], { type: "text/csv;charset=utf-8" }), nome } });
    } finally {
      setBaixando(false);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Voltar para={`/painel/paroquia/${id}`}>Paróquia</Voltar>
      <Cabecalho titulo={t.titulo} subtitulo={[NOME_DA_TURMA[t.tipo], detalhesDaTurma(t)].filter(Boolean).join(" · ")} />
      <div className="grid grid-cols-2 gap-2">
        <button type="button" onClick={() => void salvarTurma({ id: t.id, paroquia_id: id, aberta: !t.aberta }).then(() => setVersao((v) => v + 1))} className={BOTAO_CLARO}>
          {t.aberta ? "Encerrar inscrições" : "Reabrir inscrições"}
        </button>
        <button type="button" disabled={baixando || !t.inscritos} onClick={() => void baixar()} className={`${BOTAO_CLARO} flex items-center justify-center gap-2 disabled:opacity-50`}>
          <Download className="size-4" aria-hidden /> {baixando ? "Preparando" : "Planilha"}
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1" role="group">
        {FILTROS.map(([v, nome]) => (
          <button
            key={v}
            type="button"
            aria-pressed={situacao === v}
            onClick={() => {
              const p = new URLSearchParams(params);
              p.set("situacao", v);
              setParams(p, { replace: true });
            }}
            className={`min-h-10 shrink-0 rounded-full border px-4 text-sm font-medium ${situacao === v ? "border-destaque bg-destaque text-sobre-destaque" : "border-borda bg-cartao text-tinta"}`}
          >
            {nome}
          </button>
        ))}
      </div>
      <label className="flex min-h-12 items-center gap-2 rounded-xl border border-borda bg-papel px-3">
        <Search className="size-5 shrink-0 text-tinta-suave" aria-hidden />
        <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Nome ou telefone" aria-label="Buscar" className="min-w-0 flex-1 bg-transparent text-base outline-none" />
      </label>
      {lista === null ? (
        <Carregando />
      ) : !lista.length ? (
        <p className="text-tinta-suave">Nenhuma inscrição.</p>
      ) : (
        <>
          <p className="px-1 text-sm text-tinta-suave">{`${total} ${total === 1 ? "inscrição" : "inscrições"}`}</p>
          <ul className="flex flex-col divide-y divide-borda overflow-hidden rounded-2xl border border-borda bg-cartao shadow-sm">
            {lista.map((i) => (
              <ItemDaInscricao key={i.id} i={i} aoMudar={() => setVersao((v) => v + 1)} />
            ))}
          </ul>
          {lista.length < total && (
            <button
              type="button"
              onClick={() =>
                void inscricoesDaTurma({ turma, situacao, termo, pular: lista.length, limite: POR_PAGINA }).then((r) => {
                  setLista([...lista, ...r.lista]);
                  setTotal(r.total);
                })
              }
              className="min-h-11 text-sm font-medium text-tinta-suave"
            >
              Mostrar mais
            </button>
          )}
        </>
      )}
    </div>
  );
}
