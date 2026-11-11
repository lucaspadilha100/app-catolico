export type Ocasiao = "batismo" | "primeira_comunhao" | "crisma" | "casamento" | "aniversario" | "devocao";
export type Formato = "lembranca" | "convite";
export type Moldura = "simples" | "dourada";

export interface FraseBiblica {
  texto: string;
  referencia: string;
  livro: string;
  capitulo: number;
  trechos: string[];
}

export interface ModeloDeOcasiao {
  nome: string;
  lembranca: string;
  convite: string | null;
  rotuloDoNome: string;
  frase: FraseBiblica | null;
}

export const OCASIOES: Record<Ocasiao, ModeloDeOcasiao> = {
  batismo: {
    nome: "Batismo",
    lembranca: "Lembrança do Batismo",
    convite: "para o Batismo de",
    rotuloDoNome: "Nome de quem será batizado",
    frase: { texto: "Todos vós que fostes batizados em Cristo vos revestistes de Cristo.", referencia: "Gl 3,27", livro: "GAL", capitulo: 3, trechos: ["todos vós que fostes batizados em Cristo vos revestistes de Cristo"] },
  },
  primeira_comunhao: {
    nome: "Primeira comunhão",
    lembranca: "Lembrança da Primeira Comunhão",
    convite: "para a Primeira Comunhão de",
    rotuloDoNome: "Nome",
    frase: { texto: "Eu sou o pão vivo que desceu do céu. Se alguém comer deste pão, viverá eternamente.", referencia: "Jo 6,51", livro: "JHN", capitulo: 6, trechos: ["Eu sou o pão vivo que desceu do céu. Se alguém comer deste pão, viverá eternamente."] },
  },
  crisma: {
    nome: "Crisma",
    lembranca: "Lembrança da Crisma",
    convite: "para a Crisma de",
    rotuloDoNome: "Nome",
    frase: { texto: "Recebereis o poder do Espírito Santo, que descerá sobre vós, e sereis testemunhas.", referencia: "At 1,8", livro: "ACT", capitulo: 1, trechos: ["recebereis o poder do Espírito Santo, que descerá sobre vós, e sereis testemunhas"] },
  },
  casamento: {
    nome: "Casamento",
    lembranca: "Lembrança do Casamento",
    convite: "para o Casamento de",
    rotuloDoNome: "Nomes dos noivos",
    frase: { texto: "Já não são dois, mas uma só carne. O homem não separe o que Deus uniu.", referencia: "Mt 19,6", livro: "MAT", capitulo: 19, trechos: ["já não são dois, mas uma só carne", "o homem não separe o que Deus uniu"] },
  },
  aniversario: {
    nome: "Aniversário",
    lembranca: "Feliz aniversário",
    convite: "para o aniversário de",
    rotuloDoNome: "Nome",
    frase: {
      texto: "O Senhor te abençoe e te guarde. O Senhor te mostre a sua face e se compadeça de ti. O Senhor volte o seu rosto para ti e te dê a paz.",
      referencia: "Nm 6,24-26",
      livro: "NUM",
      capitulo: 6,
      trechos: ["O Senhor te abençoe e te guarde", "O Senhor te mostre a sua face e se compadeça de ti", "O Senhor volte o seu rosto para ti e te dê a paz"],
    },
  },
  devocao: {
    nome: "Santo de devoção",
    lembranca: "",
    convite: null,
    rotuloDoNome: "Santo",
    frase: null,
  },
};

const MESES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
const DIAS = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

export function dataPorExtenso(iso: string, comDiaDaSemana = false): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return "";
  const [a, mes, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const texto = `${d === 1 ? "1º" : d} de ${MESES[mes - 1]} de ${a}`;
  if (!comDiaDaSemana) return texto;
  return `${DIAS[new Date(Date.UTC(a, mes - 1, d)).getUTCDay()]}, ${texto}`;
}

export function horaPorExtenso(hhmm: string): string {
  const m = /^(\d{1,2}):(\d{2})$/.exec(hhmm);
  if (!m) return "";
  const h = Number(m[1]);
  return m[2] === "00" ? `${h}h` : `${h}h${m[2]}`;
}

export interface DadosDoSantinho {
  ocasiao: Ocasiao;
  formato: Formato;
  moldura: Moldura;
  nome: string;
  data: string;
  hora: string;
  local: string;
  frase: string;
  referencia: string;
  pintura: string | null;
  creditoDaPintura: string;
}

export interface Linhas {
  titulo: string;
  convite: string;
  nome: string;
  quando: string;
  local: string;
  frase: string;
  referencia: string;
}

export function linhasDoSantinho(d: DadosDoSantinho): Linhas {
  const modelo = OCASIOES[d.ocasiao];
  const convite = d.formato === "convite" && modelo.convite !== null;
  const quando = convite ? [dataPorExtenso(d.data, true), d.hora && `às ${horaPorExtenso(d.hora)}`].filter(Boolean).join(", ") : dataPorExtenso(d.data);
  return {
    titulo: convite ? "Convite" : modelo.lembranca,
    convite: convite ? modelo.convite! : "",
    nome: d.nome.trim(),
    quando,
    local: d.local.trim(),
    frase: d.frase.trim(),
    referencia: d.referencia.trim(),
  };
}
