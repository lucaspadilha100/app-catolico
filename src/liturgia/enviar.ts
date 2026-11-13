import { enderecoPublico } from "@/lib/nativo";
import { textoDaReferencia } from "@/biblia/texto";
import { livroPorCodigo } from "@/biblia/livros";
import { dataPorExtenso, deIso } from "@/liturgia/datas";
import { NOME_DA_LEITURA, type Leitura } from "@/liturgia/lecionario";
import type { Reflexao } from "@/reflexoes/tipos";

const enderecoDaLiturgia = (iso: string, resto = "") => `${enderecoPublico()}/liturgia/${iso}${resto}`;
const doDia = (iso: string) => `Liturgia de ${dataPorExtenso(deIso(iso)!).toLowerCase()}`;

export async function textoDaLeituraParaEnviar(l: Leitura, iso: string): Promise<{ texto: string; url: string }> {
  const trechos = l.canonica ? await textoDaReferencia(l.canonica) : [];
  const versiculos = trechos.flatMap((t) => t.versiculos.map((v) => v.texto));
  const livro = livroPorCodigo(trechos[0]?.livro ?? "");
  const nome = l.tipo === "evangelho" && livro ? `Evangelho segundo São ${livro.nome}` : NOME_DA_LEITURA[l.tipo];
  const texto = [doDia(iso), "", `${nome} (${l.referencia})`, "", versiculos.join(l.tipo === "salmo" ? "\n" : " ")].join("\n");
  return { texto, url: enderecoDaLiturgia(iso, `?aba=${l.tipo}`) };
}

export function textoDaReflexaoParaEnviar(r: Reflexao, referencia: string, iso: string): { texto: string; url: string } {
  const texto = [doDia(iso), "", `Reflexão do Evangelho${referencia ? ` (${referencia})` : ""}`, "", ...r.paragrafos.flatMap((p) => [p, ""]), r.pergunta].join("\n");
  return { texto, url: enderecoDaLiturgia(iso, "#reflexao") };
}
