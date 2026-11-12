import { NOME_DO_APP } from "@/marca";
import { textoDoCredito } from "@/lib/imagens";
import { caminhoDaImagem, creditoDoCommons, focoDaImagem } from "@/santos/santos";
import type { Santo } from "@/santos/tipos";
import { carregarImagem, cartaz, type FormatoDeCartaz } from "@/liturgia/imagemDoEvangelho";

const ARROBA = "@minhaigrejinhaapp";
const ASSINATURA = `${NOME_DO_APP}, o app católico: liturgia do dia, terço, Bíblia e orações. O link está no perfil.`;

export function creditoDaImagemDoSanto(s: Santo): string {
  if (s.imagem) return `${s.imagem.artista}. Art Institute of Chicago, domínio público.`;
  const c = creditoDoCommons(s);
  if (!c) return "";
  return [c.obra, textoDoCredito(c), "Wikimedia Commons"].filter(Boolean).join(". ");
}

export async function imagemDoSanto(s: Santo, data: string, formato: FormatoDeCartaz): Promise<Blob> {
  const caminho = caminhoDaImagem(s);
  const img = caminho ? await carregarImagem(caminho) : null;
  const [nome, complemento] = s.nome.split(/,\s*/, 2);
  return cartaz({
    imagem: img,
    foco: focoDaImagem(s),
    rotulo: "Santo do dia",
    data,
    texto: nome!,
    destaque: complemento ? complemento[0]!.toUpperCase() + complemento.slice(1) : "",
    credito: creditoDaImagemDoSanto(s),
    formato,
  });
}

export function legendaDoEvangelho(p: { data: string; titulo: string; referencia: string; texto: string }): string {
  return [
    `Evangelho do dia, ${p.data.toLowerCase()}.`,
    p.titulo,
    "",
    p.referencia,
    p.texto,
    "",
    ASSINATURA,
    "",
    "#evangelhododia #liturgiadiaria #igrejacatolica",
  ].join("\n");
}

export function legendaDoSanto(s: Santo, data: string): string {
  return [
    s.nome,
    data,
    "",
    s.historia.join("\n\n"),
    "",
    ASSINATURA,
    "",
    "#santododia #santosdaigreja #igrejacatolica",
  ].join("\n");
}

export { ARROBA };
