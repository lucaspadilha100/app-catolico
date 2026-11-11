import { ORACOES, type Linha } from "@/oracao/oracoes";
import { MISTERIOS } from "@/liturgia/terco";
import type { Passo } from "@/oracao/terco";
import { nomeDoMisterio } from "@/oracao/terco";

export interface Fala {
  texto: string;
  vez: "app" | "voce";
  rotulo: string;
}

export type Momento = "evangelho" | "angelus" | "misericordia" | "terco" | "noite";

export const NOME_DO_MOMENTO: Record<Momento, string> = {
  evangelho: "Evangelho do dia",
  angelus: "Ângelus",
  misericordia: "Terço da Misericórdia",
  terco: "Terço",
  noite: "Oração da noite",
};

export function momentoDaHora(hora: number): Momento {
  if (hora >= 5 && hora < 11) return "evangelho";
  if (hora >= 11 && hora < 14) return "angelus";
  if (hora >= 14 && hora < 17) return "misericordia";
  if (hora >= 17 && hora < 23) return "terco";
  return "noite";
}

export function falasDaOracao(id: string, rotulo?: string): Fala[] {
  const o = ORACOES[id];
  if (!o) return [];
  const nome = rotulo ?? o.nome;
  const strings = o.pt.filter((l): l is string => typeof l === "string");
  if (strings.length === 2 && o.pt.length === 2)
    return [
      { texto: strings[0]!, vez: "app", rotulo: nome },
      { texto: strings[1]!, vez: "voce", rotulo: nome },
    ];
  return falasDasLinhas(o.pt, nome);
}

export function falasDasLinhas(linhas: Linha[], rotulo: string): Fala[] {
  return linhas.flatMap((l): Fala[] => {
    if (typeof l === "string") return [{ texto: l, vez: "app", rotulo }];
    if ("v" in l)
      return [
        { texto: l.v, vez: "app", rotulo },
        { texto: l.r, vez: "voce", rotulo },
      ];
    if ("invocacoes" in l) return l.invocacoes.flatMap((inv) => [{ texto: inv, vez: "app" as const, rotulo }, { texto: l.resposta, vez: "voce" as const, rotulo }]);
    return falasDaOracao(l.rezar);
  });
}

export function falasDosPassos(passos: Passo[]): Fala[] {
  return passos.flatMap((p): Fala[] => {
    if (p.misterio) {
      const nome = `${nomeDoMisterio(p.misterio.grupo, p.misterio.indice)}: ${MISTERIOS[p.misterio.grupo].misterios[p.misterio.indice]}`;
      return [{ texto: `${nome}.`, vez: "app", rotulo: p.secao }];
    }
    if (!p.oracao) return [];
    const vezes = p.contas ?? 1;
    return Array.from({ length: vezes }, (_, i) => {
      const extra = p.rotulos?.[i];
      const contagem = vezes > 1 ? `${p.titulo} ${i + 1} de ${vezes}` : p.titulo;
      const f = falasDaOracao(p.oracao!, contagem);
      return extra ? [{ texto: `${extra}.`, vez: "app" as const, rotulo: contagem }, ...f] : f;
    }).flat();
  });
}

export const esperaDaResposta = (texto: string) => Math.min(12000, Math.max(2500, texto.length * 65));
