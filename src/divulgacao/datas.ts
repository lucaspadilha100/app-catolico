import type { DiaLiturgico } from "@/liturgia/calendario";
import { paraIso, type Dia } from "@/liturgia/datas";

export interface DataGrande {
  id: string;
  rotulo: string;
  nome: string;
  frase: string;
}

const FIXAS: Record<string, Omit<DataGrande, "id">> = {
  "10-12": { rotulo: "Padroeira do Brasil", nome: "Nossa Senhora Aparecida", frase: "Nossa Senhora Aparecida, rogai pelo Brasil e por cada um de nós." },
  "11-02": { rotulo: "Fiéis defuntos", nome: "Dia de Finados", frase: "Dai-lhes, Senhor, o descanso eterno, e brilhe para eles a luz perpétua." },
  "12-08": { rotulo: "Solenidade", nome: "Imaculada Conceição", frase: "Maria, concebida sem pecado, rogai por nós que recorremos a vós." },
  "12-25": { rotulo: "Solenidade", nome: "Natal do Senhor", frase: "O Verbo se fez carne e habitou entre nós." },
  "01-01": { rotulo: "Solenidade", nome: "Santa Maria, Mãe de Deus", frase: "Que o ano novo comece sob a bênção da Mãe de Deus." },
};

export function dataGrande(d: Dia, l: DiaLiturgico): DataGrande | null {
  const mmdd = paraIso(d).slice(5);
  const fixa = FIXAS[mmdd];
  if (fixa) return { id: mmdd, ...fixa };
  if (l.tempo === "advento" && l.semana === 1 && d.getUTCDay() === 0)
    return { id: "advento", rotulo: "Tempo do Advento", nome: "Começa o Advento", frase: "Quatro semanas para preparar o coração para a vinda do Senhor." };
  if (l.titulo.includes("Cinzas"))
    return { id: "cinzas", rotulo: "Tempo da Quaresma", nome: "Quarta-feira de Cinzas", frase: "Começa a Quaresma: quarenta dias de oração, jejum e caridade." };
  if (l.titulo.includes("Ramos"))
    return { id: "ramos", rotulo: "Semana Santa", nome: "Domingo de Ramos", frase: "Bendito o que vem em nome do Senhor." };
  if (l.titulo.includes("Páscoa") && l.tempo === "pascoa" && l.semana === 1 && d.getUTCDay() === 0)
    return { id: "pascoa", rotulo: "Páscoa do Senhor", nome: "Domingo de Páscoa", frase: "O Senhor ressuscitou, aleluia." };
  if (l.titulo.includes("Pentecostes"))
    return { id: "pentecostes", rotulo: "Solenidade", nome: "Pentecostes", frase: "Vinde, Espírito Santo, enchei os corações dos vossos fiéis." };
  if (l.titulo.includes("Corpus Christi"))
    return { id: "corpus", rotulo: "Solenidade", nome: "Corpus Christi", frase: "O pão que nós partimos é comunhão com o Corpo do Senhor." };
  if (l.titulo.includes("Cristo") && l.titulo.includes("Rei"))
    return { id: "cristo-rei", rotulo: "Solenidade", nome: "Cristo Rei", frase: "Jesus Cristo, Rei do Universo, reinai em nossos corações." };
  return null;
}
