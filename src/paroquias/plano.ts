import { telefoneLegivel } from "./horarios";

const cliente = async () => (await import("@/lib/supabase")).supabase;

const ou = <T>(r: { data: T | null; error: { message: string } | null }): T => {
  if (r.error) throw new Error(r.error.message);
  return r.data as T;
};

export type TipoDeTurma = "batismo" | "primeira_comunhao" | "crisma" | "catequese" | "noivos" | "outro";

export const NOME_DA_TURMA: Record<TipoDeTurma, string> = {
  batismo: "Batismo",
  primeira_comunhao: "Primeira comunhão",
  crisma: "Crisma",
  catequese: "Catequese",
  noivos: "Curso de noivos",
  outro: "Encontro",
};

export const COM_RESPONSAVEL: TipoDeTurma[] = ["batismo", "primeira_comunhao", "catequese"];

export interface Turma {
  id: string;
  tipo: TipoDeTurma;
  titulo: string;
  descricao: string;
  inicio: string | null;
  encerra: string | null;
  vagas: number | null;
  aberta: boolean;
  inscritos: number;
}

export type SituacaoDaInscricao = "recebida" | "confirmada" | "cancelada";

export interface Inscricao {
  id: string;
  turma_id: string;
  paroquia_id: string;
  nome: string;
  nascimento: string | null;
  responsavel: string;
  telefone: string;
  observacao: string;
  situacao: SituacaoDaInscricao;
  criado_em: string;
}

export async function turmasDaParoquia(paroquia: string): Promise<Turma[]> {
  const c = await cliente();
  return ou(await c.rpc("turmas_da_paroquia", { p_paroquia: paroquia })) as Turma[];
}

export async function salvarTurma(t: Partial<Omit<Turma, "inscritos">> & { paroquia_id: string }) {
  const c = await cliente();
  const { id, ...resto } = t;
  if (id) ou(await c.from("turmas").update(resto).eq("id", id));
  else ou(await c.from("turmas").insert(resto));
}

export async function minhasInscricoes(paroquia: string): Promise<(Inscricao & { turmas: { titulo: string } | null })[]> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  if (!data.session) return [];
  return ou(await c.from("inscricoes").select("*, turmas(titulo)").eq("paroquia_id", paroquia).eq("usuario_id", data.session.user.id).order("criado_em", { ascending: false }).limit(50)) as (Inscricao & { turmas: { titulo: string } | null })[];
}

export async function inscrever(i: Pick<Inscricao, "turma_id" | "paroquia_id" | "nome" | "nascimento" | "responsavel" | "telefone" | "observacao">) {
  const c = await cliente();
  ou(await c.from("inscricoes").insert(i));
}

export async function mudarSituacao(id: string, situacao: SituacaoDaInscricao) {
  const c = await cliente();
  ou(await c.from("inscricoes").update({ situacao }).eq("id", id));
}

export async function inscricoesDaTurma(p: { turma: string; situacao: SituacaoDaInscricao | "todas"; termo: string; pular: number; limite: number }): Promise<{ lista: Inscricao[]; total: number }> {
  const c = await cliente();
  let q = c.from("inscricoes").select("*", { count: "exact" }).eq("turma_id", p.turma);
  if (p.situacao !== "todas") q = q.eq("situacao", p.situacao);
  const termo = p.termo.trim().replace(/[%,()*]/g, " ").trim();
  if (termo) q = q.or(`nome.ilike.%${termo}%,responsavel.ilike.%${termo}%,telefone.ilike.%${termo.replace(/\D/g, "") || termo}%`);
  const r = await q.order("criado_em").order("id").range(p.pular, p.pular + p.limite - 1);
  if (r.error) throw new Error(r.error.message);
  return { lista: (r.data ?? []) as Inscricao[], total: r.count ?? 0 };
}

export async function todasAsInscricoes(turma: string): Promise<Inscricao[]> {
  const c = await cliente();
  const todas: Inscricao[] = [];
  for (let de = 0; ; de += 1000) {
    const lote = ou(await c.from("inscricoes").select("*").eq("turma_id", turma).order("criado_em").order("id").range(de, de + 999)) as Inscricao[];
    todas.push(...lote);
    if (lote.length < 1000) return todas;
  }
}

export interface NumerosDaParoquia {
  recebem_avisos: number;
  contas_que_seguem: number;
  publicacoes_30_dias: number;
  alcance_30_dias: number;
  inscricoes_recebidas: number;
  inscricoes_confirmadas: number;
}

export async function numerosDaParoquia(paroquia: string): Promise<NumerosDaParoquia | null> {
  const c = await cliente();
  const r = ou(await c.rpc("numeros_da_paroquia", { p_paroquia: paroquia })) as NumerosDaParoquia[];
  return r[0] ?? null;
}

export interface PixParaConferir {
  id: string;
  nome: string;
  cidade: string;
  pix_chave: string;
  pix_nome: string;
  pix_cidade: string;
}

export async function pixParaConferir(): Promise<PixParaConferir[]> {
  const c = await cliente();
  return ou(await c.rpc("pix_para_conferir")) as PixParaConferir[];
}

export async function salvarPix(paroquia: string, pix: { pix_chave: string; pix_nome: string; pix_cidade: string; pix_conferido?: boolean }) {
  const c = await cliente();
  ou(await c.from("paroquias").update(pix).eq("id", paroquia));
}

export function dataCurta(iso: string): string {
  const [a, m, d] = iso.slice(0, 10).split("-");
  return `${d}/${m}/${a}`;
}

export function planilha(lista: Inscricao[]): string {
  const celula = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const NOME: Record<SituacaoDaInscricao, string> = { recebida: "Recebida", confirmada: "Confirmada", cancelada: "Cancelada" };
  const linhas = [
    ["Nome", "Nascimento", "Responsável", "Telefone", "Observação", "Situação", "Inscrito em"].map(celula).join(";"),
    ...lista.map((i) =>
      [i.nome, i.nascimento ? dataCurta(i.nascimento) : "", i.responsavel, telefoneLegivel(i.telefone), i.observacao, NOME[i.situacao], new Date(i.criado_em).toLocaleDateString("pt-BR")].map(celula).join(";"),
    ),
  ];
  return `\ufeff${linhas.join("\n")}`;
}
