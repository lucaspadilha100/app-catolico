const cliente = async () => (await import("@/lib/supabase")).supabase;

const ou = <T>(r: { data: T | null; error: { message: string } | null }): T => {
  if (r.error) throw new Error(r.error.message);
  return r.data as T;
};

export type TipoDeIntencao = "falecido" | "aniversario" | "acao_de_gracas" | "saude" | "outra";
export type Situacao = "recebida" | "confirmada" | "recusada" | "cancelada";

export const NOME_DO_TIPO: Record<TipoDeIntencao, string> = {
  falecido: "Falecido",
  aniversario: "Aniversário",
  acao_de_gracas: "Ação de graças",
  saude: "Saúde",
  outra: "Outra",
};

export const NA_LISTA: Record<TipoDeIntencao, string> = {
  falecido: "Pela alma de",
  aniversario: "Pelo aniversário de",
  acao_de_gracas: "Em ação de graças por",
  saude: "Pela saúde de",
  outra: "Por",
};

export const NOME_DA_SITUACAO: Record<Situacao, string> = { recebida: "Recebida", confirmada: "Confirmada", recusada: "Recusada", cancelada: "Cancelada" };

export interface IntencaoDeMissa {
  id: string;
  paroquia_id: string;
  tipo: TipoDeIntencao;
  nome: string;
  texto: string;
  data: string;
  hora: string | null;
  pedido_por: string;
  situacao: Situacao;
  criado_em: string;
}

export async function pedirIntencao(i: Pick<IntencaoDeMissa, "paroquia_id" | "tipo" | "nome" | "texto" | "data" | "hora" | "pedido_por">) {
  const c = await cliente();
  ou(await c.from("intencoes_de_missa").insert(i));
}

export async function minhasIntencoesDeMissa(paroquia: string): Promise<IntencaoDeMissa[]> {
  const c = await cliente();
  const { data } = await c.auth.getSession();
  if (!data.session) return [];
  return ou(await c.from("intencoes_de_missa").select("*").eq("paroquia_id", paroquia).eq("usuario_id", data.session.user.id).gte("data", new Date().toLocaleDateString("sv-SE")).order("data").limit(30)) as IntencaoDeMissa[];
}

export async function intencoesDaParoquia(paroquia: string, de: string, ate: string): Promise<IntencaoDeMissa[]> {
  const c = await cliente();
  return ou(await c.from("intencoes_de_missa").select("*").eq("paroquia_id", paroquia).gte("data", de).lte("data", ate).order("data").order("hora", { nullsFirst: true }).order("criado_em").limit(1000)) as IntencaoDeMissa[];
}

export async function mudarSituacaoDaIntencao(id: string, situacao: Situacao) {
  const c = await cliente();
  ou(await c.from("intencoes_de_missa").update({ situacao }).eq("id", id));
}

export async function receberIntencoes(paroquia: string, aceita: boolean) {
  const c = await cliente();
  ou(await c.from("paroquias").update({ aceita_intencoes: aceita }).eq("id", paroquia));
}

export function listaParaLer(titulo: string, itens: IntencaoDeMissa[]): string {
  const validas = itens.filter((i) => i.situacao === "recebida" || i.situacao === "confirmada");
  const linhas = (Object.keys(NA_LISTA) as TipoDeIntencao[])
    .map((t) => {
      const nomes = validas.filter((i) => i.tipo === t).map((i) => [i.nome, i.texto && `(${i.texto})`].filter(Boolean).join(" "));
      return nomes.length ? `${NA_LISTA[t]}: ${nomes.join("; ")}.` : "";
    })
    .filter(Boolean);
  return [titulo, "", ...linhas].join("\n");
}
