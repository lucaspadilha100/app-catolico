import { MISTERIOS, type GrupoDeMisterios } from "@/liturgia/terco";

export type IdDoTerco = "rosario" | "misericordia" | "sao-miguel";

export interface Passo {
  chave: string;
  secao: string;
  titulo: string;
  oracao?: string;
  contas?: number;
  rotulos?: string[];
  misterio?: { grupo: GrupoDeMisterios; indice: number };
}

export interface Meditacao {
  referencia: string;
  texto: string;
}

export const MEDITACOES: {
  revisao: "a revisar pelo dono" | "revisado";
  misterios: Record<GrupoDeMisterios, [Meditacao, Meditacao, Meditacao, Meditacao, Meditacao]>;
} = {
  revisao: "a revisar pelo dono",
  misterios: {
    gozosos: [
      {
        referencia: "LUK 1:26-38",
        texto:
          "Deus envia o anjo Gabriel a Nazaré, e Maria recebe o anúncio com fé e humildade. Pelo seu sim, o Filho eterno do Pai se faz homem no seu seio. Peçamos a graça de acolher a vontade de Deus com a mesma confiança, mesmo quando não entendemos tudo.",
      },
      {
        referencia: "LUK 1:39-45",
        texto:
          "Maria parte depressa para servir a sua parente Isabel, levando Jesus consigo. Ao ouvir a sua saudação, o menino salta de alegria no seio de Isabel. Peçamos um coração atento às necessidades dos outros e a alegria de levar Cristo a quem encontramos.",
      },
      {
        referencia: "LUK 2:6-14",
        texto:
          "O Filho de Deus nasce pobre em Belém e é deitado numa manjedoura, porque não havia lugar para eles. Os anjos anunciam a paz, e os pastores, gente simples, são os primeiros a recebê-lo. Peçamos a graça de abrir lugar para Jesus na nossa vida e de amar a simplicidade.",
      },
      {
        referencia: "LUK 2:22-35",
        texto:
          "Maria e José levam o Menino ao Templo para oferecê-lo ao Senhor, como mandava a Lei. O velho Simeão o reconhece como luz para todos os povos e anuncia a Maria que uma espada lhe atravessaria a alma. Peçamos a graça de oferecer a Deus a nossa vida inteira, nas alegrias e nas dores.",
      },
      {
        referencia: "LUK 2:41-52",
        texto:
          "Depois de três dias de procura aflita, Maria e José encontram Jesus no Templo, sentado entre os mestres. Ele lhes responde que devia estar na casa de seu Pai. Peçamos a graça de procurar Jesus sem desanimar quando o perdemos de vista, e de voltar sempre para ele.",
      },
    ],
    luminosos: [
      {
        referencia: "MAT 3:13-17",
        texto:
          "Jesus, que não tinha pecado, desce às águas do Jordão no meio dos pecadores. O Espírito desce sobre ele, e a voz do Pai o declara seu Filho amado. Lembremos o nosso batismo, em que fomos feitos filhos de Deus, e peçamos a graça de viver de acordo com ele.",
      },
      {
        referencia: "JHN 2:1-11",
        texto:
          "Nas bodas de Caná, Maria percebe que falta o vinho e leva a necessidade ao Filho. Ela pede aos serventes que façam tudo o que ele disser, e Jesus realiza o seu primeiro sinal. Peçamos a Maria que interceda por nós e nos ensine a obedecer à palavra de Jesus.",
      },
      {
        referencia: "MRK 1:14-15",
        texto:
          "Jesus anuncia que o Reino de Deus chegou e chama todos à conversão e à fé no Evangelho. Ele acolhe os pecadores e perdoa os que se arrependem. Peçamos um coração convertido e a graça de procurar com confiança o sacramento da Reconciliação.",
      },
      {
        referencia: "MAT 17:1-8",
        texto:
          "No alto do monte, diante de Pedro, Tiago e João, Jesus se transfigura e o seu rosto brilha como o sol. Da nuvem, o Pai pede que escutemos o seu Filho amado. Peçamos a graça de escutar Jesus e de não perder a esperança nos momentos de cruz.",
      },
      {
        referencia: "LUK 22:14-20",
        texto:
          "Na Última Ceia, Jesus toma o pão e o vinho e os entrega como o seu Corpo e o seu Sangue, oferecidos por nós. Assim permanece conosco até o fim dos tempos. Peçamos um amor maior pela Eucaristia e a graça de participar da Missa com fé e devoção.",
      },
    ],
    dolorosos: [
      {
        referencia: "LUK 22:39-46",
        texto:
          "No Monte das Oliveiras, Jesus sente uma angústia profunda e reza ao Pai até o seu suor se tornar como gotas de sangue. Ele se entrega inteiro: que se faça a vontade do Pai, e não a sua. Peçamos a graça de rezar na hora da provação e de confiar no Pai como Jesus confiou.",
      },
      {
        referencia: "MRK 15:12-15",
        texto:
          "Pilatos não encontra culpa em Jesus, mas, para agradar a multidão, manda açoitá-lo. Jesus suporta em silêncio a dor e a humilhação por causa dos nossos pecados. Peçamos a graça de respeitar o nosso corpo e o dos outros, e de unir os nossos sofrimentos aos de Cristo.",
      },
      {
        referencia: "MAT 27:27-31",
        texto:
          "Os soldados tecem uma coroa de espinhos, vestem Jesus com um manto e zombam dele como rei. Ele é o verdadeiro Rei, que reina servindo e amando até o fim. Peçamos a graça de vencer o orgulho e de suportar com paciência as humilhações.",
      },
      {
        referencia: "LUK 23:26-31",
        texto:
          "Jesus carrega a cruz pelas ruas de Jerusalém, e Simão de Cirene é obrigado a ajudá-lo. No caminho, ele ainda se volta para as mulheres que choram por ele. Peçamos a graça de levar a nossa cruz de cada dia e de ajudar os que carregam a sua.",
      },
      {
        referencia: "LUK 23:33-34.44-46",
        texto:
          "No Calvário, Jesus é pregado na cruz entre dois malfeitores e reza pelos que o crucificam. Ao morrer, entrega o seu espírito nas mãos do Pai e dá a vida pela nossa salvação. Peçamos a graça de perdoar como ele perdoou e de nunca duvidar do seu amor.",
      },
    ],
    gloriosos: [
      {
        referencia: "MAT 28:1-7",
        texto:
          "No primeiro dia da semana, as mulheres encontram o túmulo vazio, e o anjo anuncia que Jesus ressuscitou. A morte foi vencida, e a nossa esperança tem fundamento. Peçamos uma fé viva na Ressurreição e a alegria de anunciá-la.",
      },
      {
        referencia: "ACT 1:6-11",
        texto:
          "Diante dos Apóstolos, Jesus sobe ao céu e lhes promete a força do Espírito Santo. Ele não nos abandona: vai à nossa frente e nos espera na casa do Pai. Peçamos o desejo do céu e a coragem de ser suas testemunhas na terra.",
      },
      {
        referencia: "ACT 1:14;2:1-4",
        texto:
          "Reunidos em oração com Maria, os Apóstolos recebem o Espírito Santo em línguas de fogo. Cheios de coragem, começam a anunciar Jesus a todos os povos. Peçamos os dons do Espírito Santo e um amor fiel à Igreja.",
      },
      {
        referencia: "1CO 15:20-23",
        texto:
          "Terminado o curso da sua vida na terra, Maria é elevada em corpo e alma à glória do céu. Cristo ressuscitou como o primeiro de todos, e nela já vemos o que Deus prepara para os que lhe pertencem. Peçamos a graça de uma boa morte e a esperança firme na vida eterna.",
      },
      {
        referencia: "REV 12:1",
        texto:
          "Maria, Mãe de Deus, é coroada Rainha do céu e da terra e reina junto de seu Filho. Como Rainha e Mãe, intercede por nós e nos conduz a Jesus. Peçamos a graça de confiar na sua proteção e de perseverar no bem até o fim.",
      },
    ],
  },
};

const ORDINAIS = ["1º", "2º", "3º", "4º", "5º", "6º", "7º", "8º", "9º"];
const ORDINAIS_F = ["1ª", "2ª", "3ª", "4ª", "5ª", "6ª", "7ª", "8ª", "9ª"];

const SINGULAR: Record<GrupoDeMisterios, string> = {
  gozosos: "Gozoso",
  luminosos: "Luminoso",
  dolorosos: "Doloroso",
  gloriosos: "Glorioso",
};

export const nomeDoMisterio = (grupo: GrupoDeMisterios, indice: number) =>
  `${ORDINAIS[indice]} Mistério ${SINGULAR[grupo]}`;

export function passosDoRosario(grupo: GrupoDeMisterios): Passo[] {
  const passos: Passo[] = [
    { chave: "sinal", secao: "Início", titulo: "Sinal da Cruz", oracao: "sinal-da-cruz" },
    { chave: "oferecimento", secao: "Início", titulo: "Oferecimento", oracao: "oferecimento-do-terco" },
    { chave: "creio", secao: "Início", titulo: "Creio", oracao: "creio" },
    { chave: "pai-nosso", secao: "Início", titulo: "Pai-Nosso", oracao: "pai-nosso" },
    {
      chave: "tres-aves",
      secao: "Início",
      titulo: "Ave-Maria",
      oracao: "ave-maria",
      contas: 3,
      rotulos: ["Pela fé", "Pela esperança", "Pela caridade"],
    },
    { chave: "gloria", secao: "Início", titulo: "Glória", oracao: "gloria" },
  ];
  MISTERIOS[grupo].misterios.forEach((_, i) => {
    const secao = nomeDoMisterio(grupo, i);
    passos.push(
      { chave: `m${i}`, secao, titulo: secao, misterio: { grupo, indice: i } },
      { chave: `m${i}-pai-nosso`, secao, titulo: "Pai-Nosso", oracao: "pai-nosso" },
      { chave: `m${i}-dezena`, secao, titulo: "Ave-Maria", oracao: "ave-maria", contas: 10 },
      { chave: `m${i}-gloria`, secao, titulo: "Glória", oracao: "gloria" },
      { chave: `m${i}-fatima`, secao, titulo: "Ó meu Jesus", oracao: "fatima" },
    );
  });
  passos.push(
    { chave: "agradecimento", secao: "Final", titulo: "Agradecimento", oracao: "agradecimento-do-terco" },
    { chave: "salve-rainha", secao: "Final", titulo: "Salve-Rainha", oracao: "salve-rainha" },
    { chave: "oracao-final", secao: "Final", titulo: "Oração final", oracao: "oracao-do-rosario" },
  );
  return passos;
}

export const ORDEM_DO_ROSARIO: GrupoDeMisterios[] = ["gozosos", "luminosos", "dolorosos", "gloriosos"];

export function passosDoRosarioCompleto(): Passo[] {
  const partes = ORDEM_DO_ROSARIO.map(passosDoRosario);
  const inicio = partes[0]!.filter((p) => p.secao === "Início");
  const final = partes[0]!.filter((p) => p.secao === "Final");
  const meio = partes.flatMap((ps, g) => ps.filter((p) => p.secao !== "Início" && p.secao !== "Final").map((p) => ({ ...p, chave: `${ORDEM_DO_ROSARIO[g]}-${p.chave}` })));
  return [...inicio, ...meio, ...final];
}

export function passosDaMisericordia(): Passo[] {
  const passos: Passo[] = [
    { chave: "sinal", secao: "Início", titulo: "Sinal da Cruz", oracao: "sinal-da-cruz" },
    { chave: "pai-nosso", secao: "Início", titulo: "Pai-Nosso", oracao: "pai-nosso" },
    { chave: "ave-maria", secao: "Início", titulo: "Ave-Maria", oracao: "ave-maria" },
    { chave: "creio", secao: "Início", titulo: "Creio", oracao: "creio" },
  ];
  for (let i = 0; i < 5; i++) {
    const secao = `${ORDINAIS_F[i]} dezena`;
    passos.push(
      { chave: `d${i}-eterno-pai`, secao, titulo: "Eterno Pai", oracao: "eterno-pai" },
      { chave: `d${i}-dezena`, secao, titulo: "Pela sua dolorosa Paixão", oracao: "dolorosa-paixao", contas: 10 },
    );
  }
  passos.push(
    { chave: "deus-santo", secao: "Final", titulo: "Deus Santo", oracao: "deus-santo", contas: 3 },
    { chave: "confio", secao: "Final", titulo: "Jesus, eu confio em vós", oracao: "jesus-eu-confio" },
  );
  return passos;
}

const COROS = ["Serafins", "Querubins", "Tronos", "Dominações", "Potestades", "Virtudes", "Principados", "Arcanjos", "Anjos"];

export function passosDeSaoMiguel(): Passo[] {
  const passos: Passo[] = [
    { chave: "sinal", secao: "Início", titulo: "Sinal da Cruz", oracao: "sinal-da-cruz" },
    { chave: "deus-vinde", secao: "Início", titulo: "Deus, vinde em nosso auxílio", oracao: "deus-vinde" },
    { chave: "gloria", secao: "Início", titulo: "Glória", oracao: "gloria" },
  ];
  COROS.forEach((coro, i) => {
    const secao = `${ORDINAIS_F[i]} saudação: ${coro}`;
    passos.push(
      { chave: `s${i}`, secao, titulo: `Coro dos ${coro}`, oracao: `saudacao-${i + 1}` },
      { chave: `s${i}-pai-nosso`, secao, titulo: "Pai-Nosso", oracao: "pai-nosso" },
      { chave: `s${i}-aves`, secao, titulo: "Ave-Maria", oracao: "ave-maria", contas: 3 },
    );
  });
  ["de São Miguel", "de São Gabriel", "de São Rafael", "do Anjo da Guarda"].forEach((anjo, i) =>
    passos.push({ chave: `honra-${i}`, secao: "Final", titulo: `Pai-Nosso em honra ${anjo}`, oracao: "pai-nosso" }),
  );
  passos.push(
    { chave: "antifona", secao: "Final", titulo: "Antífona", oracao: "antifona-de-sao-miguel" },
    { chave: "oracao-final", secao: "Final", titulo: "Oração final", oracao: "oracao-final-de-sao-miguel" },
  );
  return passos;
}

export function contarOracoes(passos: Passo[]): Record<string, number> {
  const contagem: Record<string, number> = {};
  for (const p of passos) {
    if (!p.oracao) continue;
    contagem[p.oracao] = (contagem[p.oracao] ?? 0) + (p.contas ?? 1);
  }
  return contagem;
}

export const contasDoPasso = (p: Passo) => p.contas ?? 1;
