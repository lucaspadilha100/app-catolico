import { useEffect, useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ClipboardList, HandHeart } from "lucide-react";
import type { Paroquia } from "@/paroquias/tipos";
import { textoDoPix } from "@/paroquias/pix";
import { Pix } from "@/components/Pix";
import { COM_RESPONSAVEL, NOME_DA_TURMA, dataCurta, inscrever, minhasInscricoes, mudarSituacao, turmasDaParoquia, type Inscricao, type SituacaoDaInscricao, type Turma } from "@/paroquias/plano";
import { ehNativo } from "@/lib/nativo";
import { ENDERECO_DO_SITE } from "@/marca";
import { Cartao } from "@/components/Cartao";

const CAMPO = "min-h-12 w-full rounded-xl border border-borda bg-papel px-3 text-base text-tinta outline-none focus:border-destaque-texto";
const BOTAO = "flex min-h-12 items-center justify-center gap-2 rounded-xl bg-destaque px-4 font-semibold text-sobre-destaque disabled:opacity-50";
const BOTAO_CLARO = "flex min-h-12 items-center justify-center gap-2 rounded-xl border border-borda bg-cartao px-4 font-semibold text-tinta";
const TITULO = "px-1 text-xs font-semibold uppercase tracking-wide text-destaque-texto";

export const NOME_DA_SITUACAO: Record<SituacaoDaInscricao, string> = { recebida: "Recebida", confirmada: "Confirmada", cancelada: "Cancelada" };

export function detalhesDaTurma(t: Turma): string {
  const vagas = t.vagas === null ? "" : t.inscritos >= t.vagas ? "Sem vagas" : `${t.vagas - t.inscritos} ${t.vagas - t.inscritos === 1 ? "vaga" : "vagas"}`;
  return [t.inicio && `Início ${dataCurta(t.inicio)}`, t.encerra && `Inscrições até ${dataCurta(t.encerra)}`, vagas].filter(Boolean).join(" · ");
}

function FormularioDeInscricao({ turma, paroquia, aoEnviar }: { turma: Turma; paroquia: string; aoEnviar: () => void }) {
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [telefone, setTelefone] = useState("");
  const [observacao, setObservacao] = useState("");
  const [estado, setEstado] = useState<"" | "enviando" | "erro" | "vagas" | "encerradas" | "limite">("");
  const digitos = telefone.replace(/\D/g, "");
  const pode = nome.trim().length >= 2 && digitos.length >= 10 && digitos.length <= 13;
  const noivos = turma.tipo === "noivos";

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (!pode) return;
    setEstado("enviando");
    try {
      await inscrever({
        turma_id: turma.id,
        paroquia_id: paroquia,
        nome: nome.trim(),
        nascimento: !noivos && nascimento ? nascimento : null,
        responsavel: COM_RESPONSAVEL.includes(turma.tipo) ? responsavel.trim() : "",
        telefone: digitos,
        observacao: observacao.trim(),
      });
      aoEnviar();
    } catch (err) {
      const m = String(err);
      setEstado(m.includes("vagas") ? "vagas" : m.includes("encerradas") ? "encerradas" : m.includes("limite") ? "limite" : "erro");
    }
  }

  return (
    <form onSubmit={enviar} className="flex flex-col gap-3 border-t border-borda pt-3">
      <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder={noivos ? "Nomes dos noivos" : "Nome completo"} aria-label="Nome" maxLength={120} autoComplete="off" className={CAMPO} />
      {!noivos && (
        <label className="flex flex-col gap-1">
          <span className="text-sm text-tinta-suave">Data de nascimento</span>
          <input type="date" value={nascimento} onChange={(e) => setNascimento(e.target.value)} className={CAMPO} />
        </label>
      )}
      {COM_RESPONSAVEL.includes(turma.tipo) && <input value={responsavel} onChange={(e) => setResponsavel(e.target.value)} placeholder="Pais ou responsável" aria-label="Pais ou responsável" maxLength={120} className={CAMPO} />}
      <input value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone com DDD" aria-label="Telefone" inputMode="tel" autoComplete="tel" maxLength={20} className={CAMPO} />
      <textarea value={observacao} onChange={(e) => setObservacao(e.target.value)} placeholder={turma.tipo === "batismo" ? "Padrinhos e observações" : "Observações"} aria-label="Observações" rows={3} maxLength={500} className={`${CAMPO} py-2`} />
      {estado === "vagas" && <p className="text-sm text-[#a9271f]">Não há mais vagas.</p>}
      {estado === "encerradas" && <p className="text-sm text-[#a9271f]">As inscrições foram encerradas.</p>}
      {estado === "limite" && <p className="text-sm text-[#a9271f]">Muitas inscrições hoje. Tente amanhã.</p>}
      {estado === "erro" && <p className="text-sm text-[#a9271f]">Não foi possível enviar agora. Tente de novo.</p>}
      <button type="submit" disabled={!pode || estado === "enviando"} className={BOTAO}>
        {estado === "enviando" ? "Enviando" : "Enviar inscrição"}
      </button>
    </form>
  );
}

export function Inscricoes({ paroquia, email }: { paroquia: string; email: string | null }) {
  const [turmas, setTurmas] = useState<Turma[] | null>(null);
  const [minhas, setMinhas] = useState<(Inscricao & { turmas: { titulo: string } | null })[]>([]);
  const [aberta, setAberta] = useState<string | null>(null);
  const [versao, setVersao] = useState(0);

  useEffect(() => {
    let ativo = true;
    turmasDaParoquia(paroquia)
      .then((t) => ativo && setTurmas(t.filter((x) => x.aberta)))
      .catch(() => ativo && setTurmas([]));
    if (email)
      minhasInscricoes(paroquia)
        .then((m) => ativo && setMinhas(m))
        .catch(() => {});
    return () => {
      ativo = false;
    };
  }, [paroquia, email, versao]);

  if (turmas === null || (!turmas.length && !minhas.length)) return null;

  return (
    <section className="flex flex-col gap-3">
      <h2 className={TITULO}>Inscrições</h2>
      {minhas.length > 0 && (
        <Cartao className="flex flex-col gap-2 p-4">
          <p className="font-medium text-tinta">Minhas inscrições</p>
          <ul className="flex flex-col divide-y divide-borda">
            {minhas.map((i) => (
              <li key={i.id} className="flex items-center gap-3 py-2">
                <Link to={`/turmas/${i.turma_id}`} className="min-w-0 flex-1">
                  <p className="text-tinta">{i.nome}</p>
                  <p className="text-sm text-tinta-suave">
                    {i.turmas?.titulo ?? ""} · <span className={i.situacao === "confirmada" ? "font-semibold text-destaque-texto" : ""}>{NOME_DA_SITUACAO[i.situacao]}</span>
                  </p>
                </Link>
                {i.situacao !== "cancelada" && (
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Cancelar a inscrição de ${i.nome}?`)) void mudarSituacao(i.id, "cancelada").then(() => setVersao((v) => v + 1));
                    }}
                    className="min-h-10 shrink-0 rounded-full border border-borda px-3 text-sm font-medium text-tinta-suave"
                  >
                    Cancelar
                  </button>
                )}
              </li>
            ))}
          </ul>
        </Cartao>
      )}
      {turmas.map((t) => {
        const lotada = t.vagas !== null && t.inscritos >= t.vagas;
        return (
          <Cartao key={t.id} className="flex flex-col gap-3 p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-marca-fundo text-destaque-texto">
                <ClipboardList className="size-5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-tinta-suave">{NOME_DA_TURMA[t.tipo]}</p>
                <p className="font-leitura text-lg font-semibold leading-snug text-marca">{t.titulo}</p>
                {detalhesDaTurma(t) && <p className="text-sm text-tinta-suave">{detalhesDaTurma(t)}</p>}
              </div>
            </div>
            {t.descricao && <p className="whitespace-pre-line text-tinta">{t.descricao}</p>}
            {lotada ? null : !email ? (
              <Link to="/conta" className={BOTAO_CLARO}>
                Entrar para se inscrever
              </Link>
            ) : aberta === t.id ? (
              <FormularioDeInscricao
                turma={t}
                paroquia={paroquia}
                aoEnviar={() => {
                  setAberta(null);
                  setVersao((v) => v + 1);
                }}
              />
            ) : (
              <button type="button" onClick={() => setAberta(t.id)} className={BOTAO}>
                {minhas.some((i) => i.turma_id === t.id && i.situacao !== "cancelada") ? "Inscrever outra pessoa" : "Inscrever"}
              </button>
            )}
          </Cartao>
        );
      })}
    </section>
  );
}

export function temOferta(p: Paroquia): boolean {
  return p.plano !== "gratis" && p.pix_conferido && !!p.pix_chave;
}

export function Oferta({ p }: { p: Paroquia }) {
  const [params] = useSearchParams();
  const [aberto, setAberto] = useState(params.has("oferta"));

  if (!temOferta(p)) return null;

  if (ehNativo())
    return (
      <a href={`${ENDERECO_DO_SITE}/missas/paroquia/${p.id}?oferta`} target="_blank" rel="noreferrer" className={BOTAO_CLARO}>
        <HandHeart className="size-5" aria-hidden /> Oferta e dízimo
      </a>
    );

  if (!aberto)
    return (
      <button type="button" onClick={() => setAberto(true)} className={BOTAO_CLARO}>
        <HandHeart className="size-5" aria-hidden /> Oferta e dízimo
      </button>
    );

  const recebedor = textoDoPix(p.pix_nome || p.nome, 25);
  return (
    <Cartao className="flex flex-col gap-4 p-4">
      <p className="font-medium text-tinta">Oferta e dízimo</p>
      <Pix chave={p.pix_chave} nome={recebedor} cidade={p.pix_cidade || p.cidade} recebedor={recebedor} />
    </Cartao>
  );
}
