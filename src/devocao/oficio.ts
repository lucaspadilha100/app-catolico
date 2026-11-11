import type { Bloco, ConteudoDoOficio, Noturnos, TempoDoOficio } from "./tipos";
import type { Linha } from "@/oracao/oracoes";

type Tempo = TempoDoOficio | "comum";

const se = (condicao: boolean, ...blocos: Bloco[]): Bloco[] => (condicao ? blocos : []);

const LOUVOR =
  "Da Septuagésima, nove semanas antes da Páscoa, até a Páscoa, em lugar do Aleluia diz-se: Louvor a vós, Senhor, Rei da eterna glória.";

const PASCAL =
  "No Tempo Pascal, em lugar desta antífona: Rainha do céu, alegrai-vos, aleluia, porque aquele que merecestes trazer, aleluia, ressuscitou como disse, aleluia. Rogai a Deus por nós, aleluia.";

const deusVinde = (t: Tempo): Bloco[] => [
  { linhas: [{ v: "Ó Deus, vinde em meu auxílio.", r: "Senhor, apressai-vos em me ajudar." }] },
  { rezar: "gloria" },
  { linhas: ["Aleluia."] },
  ...se(t !== "advento", { rubrica: LOUVOR }),
];

const abertura = (t: Tempo): Bloco[] => [{ rezar: "ave-maria" }, ...deusVinde(t)];

const DOXOLOGIA = "Ó Jesus, glória a vós, que nascestes da Virgem, com o Pai e o Espírito Santo, pelos séculos eternos. Amém.";

const HINO_MEMENTO: Bloco[] = [
  { titulo: "Hino" },
  {
    linhas: [
      "Lembrai-vos, Criador de todas as coisas, que um dia, nascendo do seio sagrado da Virgem, tomastes a forma do nosso corpo.",
      "Maria, Mãe da graça, doce Mãe de clemência, defendei-nos do inimigo e recebei-nos na hora da morte.",
      DOXOLOGIA,
    ],
  },
];

const salmo = (leitura: string, titulo: string, inicio?: string, fim?: string): Bloco[] => [
  { leitura, titulo, poema: true, ...(inicio && { inicio }), ...(fim && { fim }) },
  { rezar: "gloria" },
];

const comAntifona = (antifona: string, ...salmos: Bloco[][]): Bloco[] => [
  { antifona },
  ...salmos.flat(),
  { antifona },
];

const gracas: Bloco = { linhas: ["Graças a Deus."] };

const OUVI: Linha = { v: "Senhor, ouvi a minha oração.", r: "E chegue até vós o meu clamor." };

const KYRIE = "Senhor, tende piedade de nós. Cristo, tende piedade de nós. Senhor, tende piedade de nós.";

const conclusao = (oracao: string): Bloco[] => [
  {
    linhas: [
      KYRIE,
      OUVI,
      oracao,
      OUVI,
      { v: "Bendigamos ao Senhor.", r: "Graças a Deus." },
      { v: "As almas dos fiéis, pela misericórdia de Deus, descansem em paz.", r: "Amém." },
    ],
  },
];

const AUXILIO: Linha = { v: "O auxílio divino permaneça sempre conosco.", r: "Amém." };

const ANTIFONA_FINAL: Bloco[] = [
  {
    rubrica:
      "De 3 de fevereiro até a Sexta-feira Santa, reza-se a Ave, Rainha dos céus; do Sábado Santo até o sábado depois de Pentecostes, a Rainha do Céu; dali até o Advento, a Salve-Rainha.",
  },
  { ir: "/rezar/oracoes/ave-regina-caelorum", rotulo: "Ave, Rainha dos céus" },
  { ir: "/rezar/oracoes/regina-caeli", rotulo: "Rainha do Céu" },
  { rezar: "salve-rainha" },
  {
    linhas: [
      "Oremos. Deus onipotente e eterno, que, com a ação do Espírito Santo, preparastes o corpo e a alma da gloriosa Virgem e Mãe Maria, para que ela merecesse tornar-se digna morada do vosso Filho, concedei que, alegrando-nos com a sua memória, sejamos livres, por sua piedosa intercessão, dos males presentes e da morte eterna. Pelo mesmo Cristo, Senhor nosso. Amém.",
      AUXILIO,
    ],
  },
];

const ORACAO_LAUDES =
  "Oremos. Ó Deus, que quisestes que o vosso Verbo, ao anúncio do anjo, tomasse carne no seio da bem-aventurada Virgem Maria, concedei aos que vos suplicam que, crendo verdadeiramente que ela é a Mãe de Deus, sejamos ajudados junto de vós pela sua intercessão. Pelo mesmo Cristo, Senhor nosso. Amém.";

const PELA_VIRGINDADE_FECUNDA =
  "Oremos. Ó Deus, que pela virgindade fecunda da bem-aventurada Maria destes ao gênero humano os bens da salvação eterna, concedei-nos, vos pedimos, sentir a intercessão daquela por quem merecemos receber o Autor da vida, Nosso Senhor Jesus Cristo, vosso Filho";

const ORACAO_NATAL = `${PELA_VIRGINDADE_FECUNDA}, que convosco vive e reina na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.`;

const oracaoDoTempo = (t: Tempo, comum: string) => (t === "advento" ? ORACAO_LAUDES : t === "natal" ? ORACAO_NATAL : comum);

const ALMA_REDEMPTORIS =
  "Mãe benigna do Redentor, que permaneceis porta aberta do céu e estrela do mar, socorrei o povo que cai e procura levantar-se. Vós que, para espanto da natureza, gerastes o vosso santo Criador, Virgem antes e depois, que recebestes da boca de Gabriel aquele Ave, tende piedade dos pecadores.";

const ANJO: Linha = { v: "O Anjo do Senhor anunciou a Maria.", r: "E ela concebeu do Espírito Santo." };

const POST_PARTUM: Linha = { v: "Depois do parto, ó Virgem, permanecestes intacta.", r: "Mãe de Deus, intercedei por nós." };

const antifonaFinal = (t: Tempo): Bloco[] =>
  t === "comum"
    ? ANTIFONA_FINAL
    : [
        { linhas: [ALMA_REDEMPTORIS] },
        {
          linhas:
            t === "advento"
              ? [
                  ANJO,
                  "Oremos. Infundi, Senhor, nós vos pedimos, a vossa graça em nossas almas, para que nós, que pela anunciação do anjo conhecemos a encarnação de Cristo, vosso Filho, pela sua paixão e pela sua cruz sejamos conduzidos à glória da ressurreição. Pelo mesmo Cristo, Senhor nosso. Amém.",
                  AUXILIO,
                ]
              : [POST_PARTUM, `${PELA_VIRGINDADE_FECUNDA}. Amém.`, AUXILIO],
        },
      ];

const DIFUSA: Bloco = {
  linhas: [{ v: "A graça se derramou em vossos lábios.", r: "Por isso Deus vos abençoou para sempre." }],
};

const BENDITA: Bloco = {
  linhas: [{ v: "Bendita sois vós entre as mulheres.", r: "E bendito é o fruto do vosso ventre." }],
};

const TU_AUTEM: Bloco = { linhas: [{ v: "E vós, Senhor, tende piedade de nós.", r: "Graças a Deus." }] };

const bencao = (texto: string): Bloco => ({ linhas: ["Dai-nos, Senhor, a vossa bênção.", { v: texto, r: "Amém." }] });

const ANTES_DAS_LICOES: Bloco[] = [
  DIFUSA,
  { rubrica: "Pai-nosso em silêncio." },
  { linhas: [{ v: "E não nos deixeis cair em tentação.", r: "Mas livrai-nos do mal." }] },
  {
    linhas: [
      {
        v: "Pelas preces e méritos da bem-aventurada sempre Virgem Maria e de todos os santos, o Senhor nos conduza ao reino dos céus.",
        r: "Amém.",
      },
    ],
  },
  bencao("A Virgem Maria, com o seu piedoso Filho, nos abençoe."),
];

const SEGUNDA_BENCAO = bencao("A Virgem das virgens interceda por nós junto do Senhor.");
const TERCEIRA_BENCAO = bencao("Pela Virgem Mãe, o Senhor nos conceda a salvação e a paz.");

const LICOES: Bloco[] = [
  ...ANTES_DAS_LICOES,
  { leitura: "SIR 24:11-13", titulo: "Primeira lição", inicio: "Em todos eles busquei descanso" },
  TU_AUTEM,
  {
    titulo: "Responsório",
    linhas: [
      "Santa e imaculada virgindade, não sei com que louvores vos exaltar: porque aquele que os céus não podiam conter, vós o trouxestes em vosso seio.",
      {
        v: "Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre.",
        r: "Porque aquele que os céus não podiam conter, vós o trouxestes em vosso seio.",
      },
    ],
  },
  SEGUNDA_BENCAO,
  { leitura: "SIR 24:15-16", titulo: "Segunda lição" },
  TU_AUTEM,
  {
    titulo: "Responsório",
    linhas: [
      "Bem-aventurada sois vós, Virgem Maria, que trouxestes o Senhor, Criador do mundo: gerastes aquele que vos fez e permaneceis virgem para sempre.",
      {
        v: "Ave, Maria, cheia de graça, o Senhor é convosco.",
        r: "Gerastes aquele que vos fez e permaneceis virgem para sempre.",
      },
    ],
  },
  { rubrica: "Quando se reza o Te Deum, acrescenta-se:" },
  {
    linhas: [
      {
        v: "Glória ao Pai, e ao Filho, e ao Espírito Santo.",
        r: "Gerastes aquele que vos fez e permaneceis virgem para sempre.",
      },
    ],
  },
  TERCEIRA_BENCAO,
  { leitura: "SIR 24:17-20", titulo: "Terceira lição" },
  TU_AUTEM,
  { rubrica: "Da Septuagésima até a Páscoa, em lugar do Te Deum, reza-se este responsório:" },
  {
    titulo: "Responsório",
    linhas: [
      "Feliz sois vós, sagrada Virgem Maria, e digníssima de todo louvor: porque de vós nasceu o Sol da justiça, Cristo, nosso Deus.",
      {
        v: "Rogai pelo povo, intervinde pelo clero, intercedei pelas mulheres devotas: sintam o vosso auxílio todos os que celebram a vossa santa memória.",
        r: "Porque de vós nasceu o Sol da justiça, Cristo, nosso Deus.",
      },
      { v: "Glória ao Pai, e ao Filho, e ao Espírito Santo.", r: "Cristo, nosso Deus." },
    ],
  },
];

const CONCEBERAS = "Eis que conceberás e darás à luz, e ele será chamado Filho do Altíssimo.";
const VIRA_SOBRE_VOS =
  "O Espírito Santo virá sobre vós, e a força do Altíssimo vos cobrirá com a sua sombra; pois o Santo que de vós nascer será chamado Filho de Deus.";
const BENDITA_ENTRE_TODAS = "Para que sejais chamada bendita entre todas as mulheres.";

const LICOES_DO_ADVENTO: Bloco[] = [
  ...ANTES_DAS_LICOES,
  { leitura: "LUK 1:26-28", titulo: "Primeira lição" },
  TU_AUTEM,
  {
    titulo: "Responsório",
    linhas: [
      `O anjo Gabriel foi enviado à Virgem Maria, desposada com José, para lhe anunciar a palavra; e a Virgem se assusta com a luz: Não temas, Maria, achaste graça diante do Senhor. ${CONCEBERAS}`,
      { v: "O Senhor Deus lhe dará o trono de Davi, seu pai, e ele reinará na casa de Jacó para sempre.", r: CONCEBERAS },
    ],
  },
  SEGUNDA_BENCAO,
  { leitura: "LUK 1:29-33", titulo: "Segunda lição" },
  TU_AUTEM,
  {
    titulo: "Responsório",
    linhas: [
      `Ave, Maria, cheia de graça, o Senhor é convosco. ${VIRA_SOBRE_VOS}`,
      { v: "Como se fará isso, se eu não conheço homem? E o anjo lhe respondeu:", r: VIRA_SOBRE_VOS },
    ],
  },
  TERCEIRA_BENCAO,
  { leitura: "LUK 1:34-38", titulo: "Terceira lição" },
  TU_AUTEM,
  {
    titulo: "Responsório",
    linhas: [
      "Recebei, Virgem Maria, a palavra que o Senhor vos enviou pelo anjo: concebereis e dareis à luz aquele que é ao mesmo tempo Deus e homem, para que sejais chamada bendita entre todas as mulheres.",
      {
        v: "Dareis à luz um filho sem dano para a vossa virgindade: ficareis grávida e sereis mãe sempre intacta.",
        r: BENDITA_ENTRE_TODAS,
      },
      { v: "Glória ao Pai, e ao Filho, e ao Espírito Santo.", r: BENDITA_ENTRE_TODAS },
    ],
  },
];

const AVE_INVITATORIO = "Ave, Maria, cheia de graça, o Senhor é convosco.";
const CONVOSCO = "O Senhor é convosco.";

const ANTIFONAS_DE_LAUDES: Record<Tempo, string[]> = {
  comum: [
    "Maria foi elevada ao céu; os anjos se alegram e, cantando louvores, bendizem o Senhor.",
    "A Virgem Maria foi elevada ao tálamo celeste, onde o Rei dos reis está sentado num trono de estrelas.",
    "Corremos atrás do perfume dos vossos unguentos; as jovens vos amaram muito.",
    "Bendita sois vós, filha, pelo Senhor, porque por vós recebemos o fruto da vida.",
    "Sois bela e formosa, filha de Jerusalém, terrível como um exército em ordem de batalha.",
  ],
  advento: [
    "O anjo Gabriel foi enviado à Virgem Maria, desposada com José.",
    "Ave, Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres.",
    "Não temas, Maria, achaste graça diante do Senhor: eis que conceberás e darás à luz um filho.",
    "O Senhor lhe dará o trono de Davi, seu pai, e ele reinará para sempre.",
    "Eis aqui a serva do Senhor: faça-se em mim segundo a vossa palavra.",
  ],
  natal: [
    "Ó admirável troca: o Criador do gênero humano, tomando um corpo dotado de alma, dignou-se nascer da Virgem; e, vindo ao mundo como homem sem semente de varão, concedeu-nos a sua divindade.",
    "Quando nascestes da Virgem de modo inefável, cumpriram-se as Escrituras: descestes como a chuva sobre o velo, para salvar o gênero humano. Nós vos louvamos, ó nosso Deus.",
    "Na sarça que Moisés viu arder sem se consumir, reconhecemos a vossa louvável virgindade, conservada intacta. Mãe de Deus, intercedei por nós.",
    "Germinou a raiz de Jessé, nasceu uma estrela de Jacó: a Virgem deu à luz o Salvador. Nós vos louvamos, ó nosso Deus.",
    "Eis que Maria nos gerou o Salvador; ao vê-lo, João exclamou: Eis o Cordeiro de Deus, eis aquele que tira os pecados do mundo, aleluia.",
  ],
};

const antifona = (t: Tempo, i: number) => ANTIFONAS_DE_LAUDES[t][i]!;

const ESPIRITO_SANTO_DESCERA = "O Espírito Santo descerá sobre ti, Maria: não temas, terás em teu seio o Filho de Deus, aleluia.";

const MISTERIO_ADMIRAVEL =
  "Hoje se revela um mistério admirável: as naturezas se renovam, Deus se fez homem; permaneceu o que era e assumiu o que não era, sem sofrer mistura nem divisão.";

const MISTERIO_DA_HERANCA =
  "Grande mistério da herança: o seio da que não conheceu varão tornou-se templo de Deus; ao tomar dela a carne, ele não se manchou. Todos os povos virão e dirão: Glória a vós, Senhor.";

const doTempo = (t: Tempo, comum: string, advento: string, natal: string) =>
  t === "advento" ? advento : t === "natal" ? natal : comum;

const capitulo = (leitura: string, inicio?: string, fim?: string): Bloco => ({
  leitura,
  titulo: "Capítulo",
  ...(inicio && { inicio }),
  ...(fim && { fim }),
});

const RAIZ_DE_JESSE = capitulo("ISA 11:1-2", undefined, "o espírito do Senhor");
const A_VIRGEM_CONCEBERA = capitulo("ISA 7:14-15", "Eis que uma virgem");

const matinas = (t: Tempo): Bloco[] => [
  { rezar: "ave-maria" },
  { linhas: [{ v: "Senhor, abri os meus lábios.", r: "E a minha boca anunciará o vosso louvor." }] },
  ...deusVinde(t),
  { titulo: "Invitatório" },
  { antifona: AVE_INVITATORIO },
  { antifona: AVE_INVITATORIO },
  { leitura: "PSA 95:1-2", titulo: "Salmo 94", poema: true },
  { antifona: AVE_INVITATORIO },
  { leitura: "PSA 95:3-4", poema: true },
  { antifona: CONVOSCO },
  { leitura: "PSA 95:5-7", poema: true },
  { antifona: AVE_INVITATORIO },
  { leitura: "PSA 95:8-9", poema: true },
  { antifona: CONVOSCO },
  { leitura: "PSA 95:10-11", poema: true },
  { antifona: AVE_INVITATORIO },
  { rezar: "gloria" },
  { antifona: CONVOSCO },
  { antifona: AVE_INVITATORIO },
  { titulo: "Hino" },
  {
    linhas: [
      "Aquele que a terra, o mar e os astros veneram, adoram e proclamam, e que governa o mundo inteiro, está encerrado no seio de Maria.",
      "Aquele a quem a lua, o sol e todas as coisas servem ao longo dos tempos, uma jovem cheia da graça do céu o traz no ventre.",
      "Bendita a Mãe por tão grande dom: o Artífice do alto, que segura o mundo na palma da mão, quis encerrar-se na arca do seu ventre.",
      "Bendita pela mensagem do céu, fecunda pelo Espírito Santo, por seu seio veio ao mundo o Desejado das nações.",
      DOXOLOGIA,
    ],
  },
  { noturno: true },
  ...se(t !== "advento", { rezar: "te-deum" }),
];

const laudes = (t: Tempo): Bloco[] => [
  ...abertura(t),
  ...comAntifona(antifona(t, 0), salmo("PSA 93:1-5", "Salmo 92", "O Senhor reinou, vestiu-se")),
  ...comAntifona(antifona(t, 1), salmo("PSA 100:2-5", "Salmo 99")),
  ...comAntifona(antifona(t, 2), salmo("PSA 63:2-12", "Salmo 62")),
  ...comAntifona(antifona(t, 3), [
    { leitura: "DAN 3:57-88", titulo: "Cântico dos três jovens", poema: true, fim: "acima de tudo para sempre." },
    { linhas: ["Bendigamos o Pai e o Filho com o Espírito Santo; louvemo-lo e exaltemo-lo para sempre."] },
    { leitura: "DAN 3:56", poema: true },
  ]),
  ...comAntifona(
    antifona(t, 4),
    salmo("PSA 148:1-14", "Salmo 148", "Louvai o Senhor desde os céus", "o povo que se aproxima dele."),
  ),
  t === "advento" ? RAIZ_DE_JESSE : capitulo("SNG 6:9", "As filhas a viram"),
  gracas,
  { titulo: "Hino" },
  {
    linhas: [
      "Ó gloriosa entre as virgens, elevada acima das estrelas: àquele que vos criou, pequenino, vós o alimentais com o leite do vosso seio.",
      "O que a triste Eva nos tirou, vós o devolveis pelo vosso Filho bendito; abris as portas do céu, para que os que choram subam às estrelas.",
      "Vós sois a porta do Rei altíssimo e a morada resplandecente da luz. Povos resgatados, aclamai a vida que nos foi dada pela Virgem.",
      DOXOLOGIA,
    ],
  },
  BENDITA,
  ...se(t === "comum", { rubrica: PASCAL }),
  ...comAntifona(
    doTempo(
      t,
      "Bem-aventurada Mãe de Deus, Maria, sempre Virgem, templo do Senhor, santuário do Espírito Santo: só vós, sem exemplo, agradastes a Nosso Senhor Jesus Cristo. Rogai pelo povo, intervinde pelo clero, intercedei pelas mulheres devotas.",
      ESPIRITO_SANTO_DESCERA,
      MISTERIO_ADMIRAVEL,
    ),
    salmo("LUK 1:68-79", "Cântico de Zacarias", "Bendito seja o Senhor", "no caminho da paz."),
  ),
  ...conclusao(oracaoDoTempo(t, ORACAO_LAUDES)),
  { rubrica: "Se a Prima não se reza logo em seguida, diz-se o Pai-nosso em silêncio e conclui-se assim:" },
  { linhas: [{ v: "O Senhor nos dê a sua paz.", r: "E a vida eterna. Amém." }] },
  ...antifonaFinal(t),
];

const horaMenor = (
  t: Tempo,
  indice: number,
  salmos: Bloco[][],
  cap: { comum: Bloco; advento: Bloco },
  versiculo: Bloco,
  oracao: string,
): Bloco[] => [
  ...abertura(t),
  ...HINO_MEMENTO,
  ...comAntifona(antifona(t, indice), ...salmos),
  t === "advento" ? cap.advento : cap.comum,
  gracas,
  versiculo,
  ...conclusao(oracaoDoTempo(t, oracao)),
];

const prima = (t: Tempo) =>
  horaMenor(
    t,
    0,
    [salmo("PSA 54:3-9", "Salmo 53"), salmo("PSA 85:2-14", "Salmo 84"), salmo("PSA 117:1-2", "Salmo 116", "Louvai o Senhor, todas as nações")],
    { comum: capitulo("SNG 6:10", undefined, "em campo?"), advento: A_VIRGEM_CONCEBERA },
    { linhas: [{ v: "Permiti que eu vos louve, Virgem sagrada.", r: "Dai-me força contra os vossos inimigos." }] },
    "Oremos. Ó Deus, que vos dignastes escolher para vossa morada o seio virginal da bem-aventurada Maria, concedei-nos, vos pedimos, que, protegidos pela sua defesa, tomemos parte com alegria na sua memória. Vós que viveis e reinais com Deus Pai, na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.",
  );

const terca = (t: Tempo) =>
  horaMenor(
    t,
    1,
    [
      salmo("PSA 120:1-7", "Salmo 119", "Quando me vi atribulado"),
      salmo("PSA 121:1-8", "Salmo 120", "Levantei os meus olhos para os montes"),
      salmo("PSA 122:1-9", "Salmo 121", "Alegrei-me com o que me disseram"),
    ],
    { comum: capitulo("SIR 24:15"), advento: RAIZ_DE_JESSE },
    DIFUSA,
    ORACAO_NATAL,
  );

const sexta = (t: Tempo) =>
  horaMenor(
    t,
    2,
    [
      salmo("PSA 123:1-4", "Salmo 122", "Levantei os meus olhos para ti"),
      salmo("PSA 124:1-8", "Salmo 123", "Se o Senhor não tivesse"),
      salmo("PSA 125:1-5", "Salmo 124", "Os que confiam no Senhor"),
    ],
    { comum: capitulo("SIR 24:16"), advento: capitulo("LUK 1:32-33", "O Senhor Deus lhe dará", "não terá fim") },
    BENDITA,
    "Oremos. Ó Deus de misericórdia, dai amparo à nossa fraqueza, para que nós, que celebramos a memória da santa Mãe de Deus, nos levantemos dos nossos pecados com o auxílio da sua intercessão. Pelo mesmo Nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.",
  );

const noa = (t: Tempo) =>
  horaMenor(
    t,
    4,
    [
      salmo("PSA 126:1-6", "Salmo 125", "Quando o Senhor fizer voltar"),
      salmo("PSA 127:1-5", "Salmo 126", "Se o Senhor não edificar"),
      salmo("PSA 128:1-6", "Salmo 127", "Bem-aventurados todos"),
    ],
    { comum: capitulo("SIR 24:19-20", "nas praças"), advento: A_VIRGEM_CONCEBERA },
    { linhas: [t === "advento" ? ANJO : POST_PARTUM] },
    "Oremos. Perdoai, Senhor, vos pedimos, as faltas dos vossos servos, para que nós, que não conseguimos agradar-vos com as nossas obras, sejamos salvos pela intercessão da Mãe do vosso Filho, Nosso Senhor, que convosco vive e reina na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.",
  );

const ANTIFONAS_DE_VESPERAS = [
  "Enquanto o Rei estava à mesa, o meu nardo exalou o seu perfume suave.",
  "A sua mão esquerda está sob a minha cabeça, e a sua direita me abraçará.",
  "Sou morena, mas formosa, filhas de Jerusalém; por isso o Rei me amou e me fez entrar nos seus aposentos.",
  "Já passou o inverno, a chuva cessou e se foi; levanta-te, minha amiga, e vem.",
  "Vós vos tornastes bela e suave em vossas delícias, santa Mãe de Deus.",
];

const vesperas = (t: Tempo): Bloco[] => {
  const ant = (i: number) => (t === "comum" ? ANTIFONAS_DE_VESPERAS[i]! : antifona(t, i));
  return [
    ...abertura(t),
    ...comAntifona(ant(0), salmo("PSA 110:1-7", "Salmo 109", "Disse o Senhor ao meu Senhor")),
    ...comAntifona(ant(1), salmo("PSA 113:1-9", "Salmo 112", "Louvai o Senhor, ó meninos")),
    ...comAntifona(ant(2), salmo("PSA 122:1-9", "Salmo 121", "Alegrei-me com o que me disseram")),
    ...comAntifona(ant(3), salmo("PSA 127:1-5", "Salmo 126", "Se o Senhor não edificar")),
    ...comAntifona(ant(4), salmo("PSA 147:12-20", "Salmo 147", undefined, "não lhes manifestou os seus juízos.")),
    t === "advento" ? RAIZ_DE_JESSE : capitulo("SIR 24:14"),
    gracas,
    { rezar: "ave-maris-stella" },
    DIFUSA,
    ...se(t === "comum", { rubrica: PASCAL }),
    ...comAntifona(
      doTempo(
        t,
        "Mãe bem-aventurada e Virgem intacta, Rainha gloriosa do mundo, intercedei por nós junto do Senhor.",
        ESPIRITO_SANTO_DESCERA,
        MISTERIO_DA_HERANCA,
      ),
      salmo("LUK 1:46-55", "Cântico de Nossa Senhora", "A minha alma glorifica", "descendência para sempre."),
    ),
    ...conclusao(
      oracaoDoTempo(
        t,
        "Oremos. Senhor Deus, concedei a nós, vossos servos, vos pedimos, gozar sempre de saúde da alma e do corpo e, pela gloriosa intercessão da bem-aventurada sempre Virgem Maria, ser livres da tristeza presente e alcançar a alegria eterna. Por Cristo, Senhor nosso. Amém.",
      ),
    ),
  ];
};

const completas = (t: Tempo): Bloco[] => [
  { rezar: "ave-maria" },
  { linhas: [{ v: "Convertei-nos, ó Deus, nosso Salvador.", r: "E afastai de nós a vossa ira." }] },
  ...deusVinde(t),
  ...salmo("PSA 129:1-8", "Salmo 128", "Muitas vezes me atacaram"),
  ...salmo("PSA 130:1-8", "Salmo 129", "Do mais profundo"),
  ...salmo("PSA 131:1-3", "Salmo 130", "Senhor, o meu coração"),
  ...HINO_MEMENTO,
  t === "advento" ? A_VIRGEM_CONCEBERA : capitulo("SIR 24:24"),
  gracas,
  {
    linhas: [
      t === "advento" ? ANJO : { v: "Rogai por nós, santa Mãe de Deus.", r: "Para que sejamos dignos das promessas de Cristo." },
    ],
  },
  ...se(t === "comum", { rubrica: PASCAL }),
  ...comAntifona(
    doTempo(
      t,
      "À vossa proteção recorremos, santa Mãe de Deus: não desprezeis as nossas súplicas nas nossas necessidades, mas livrai-nos sempre de todos os perigos, Virgem gloriosa e bendita.",
      ESPIRITO_SANTO_DESCERA,
      MISTERIO_DA_HERANCA,
    ),
    salmo("LUK 2:29-32", "Cântico de Simeão", "Agora, Senhor", "do teu povo, Israel."),
  ),
  {
    linhas: [
      KYRIE,
      OUVI,
      oracaoDoTempo(
        t,
        "Oremos. Senhor, vos pedimos: que a gloriosa intercessão da bem-aventurada e gloriosa sempre Virgem Maria nos proteja e nos conduza à vida eterna. Por Nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.",
      ),
      OUVI,
      { v: "Bendigamos ao Senhor.", r: "Graças a Deus." },
      {
        v: "O Senhor onipotente e misericordioso, Pai, Filho e Espírito Santo, nos abençoe e nos guarde.",
        r: "Amém.",
      },
    ],
  },
  ...antifonaFinal(t),
  { rubrica: "Em silêncio:" },
  { rezar: "pai-nosso" },
  { rezar: "ave-maria" },
  { rezar: "creio" },
];

const noturnos = (t: Tempo): Noturnos => {
  const licoes = t === "advento" ? LICOES_DO_ADVENTO : LICOES;
  return [
    [
      ...comAntifona("Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre.", salmo("PSA 8:2-10", "Salmo 8")),
      ...comAntifona("Como a mirra escolhida, espalhastes um perfume suave, santa Mãe de Deus.", salmo("PSA 19:2-15", "Salmo 18")),
      ...comAntifona(
        "Diante do leito desta Virgem, cantai-nos sempre de novo os doces cantos do drama sagrado.",
        salmo("PSA 24:1-10", "Salmo 23", "Do Senhor é a terra"),
      ),
      ...licoes,
    ],
    [
      ...comAntifona("Com a vossa graça e a vossa beleza, avançai, prosperai e reinai.", salmo("PSA 45:2-18", "Salmo 44")),
      ...comAntifona(
        "Deus a ajudará com o seu olhar; Deus está no meio dela, ela não será abalada.",
        salmo("PSA 46:2-12", "Salmo 45"),
      ),
      ...comAntifona(
        "Como a de quem vive na alegria, assim é em vós a morada de todos nós, santa Mãe de Deus.",
        salmo("PSA 87:1-7", "Salmo 86", "Os seus alicerces"),
      ),
      ...licoes,
    ],
    [
      ...comAntifona(
        "Alegrai-vos, Virgem Maria: só vós vencestes todas as heresias no mundo inteiro.",
        salmo("PSA 96:1-13", "Salmo 95", "Cantai ao Senhor um cântico novo"),
      ),
      ...comAntifona(
        "Permiti que eu vos louve, Virgem sagrada; dai-me força contra os vossos inimigos.",
        salmo("PSA 97:1-12", "Salmo 96", "O Senhor reinou: exulte"),
      ),
      ...comAntifona(
        t === "advento"
          ? "O Anjo do Senhor anunciou a Maria, e ela concebeu do Espírito Santo."
          : "Depois do parto, ó Virgem, permanecestes intacta; Mãe de Deus, intercedei por nós.",
        salmo("PSA 98:1-9", "Salmo 97", "Cantai ao Senhor um cântico novo"),
      ),
      ...licoes,
    ],
  ];
};

const hora = (id: string, nome: string, latim: string, montar: (t: Tempo) => Bloco[], tempos: TempoDoOficio[]) => ({
  id,
  nome,
  latim,
  blocos: montar("comum"),
  tempos: Object.fromEntries(tempos.map((t) => [t, montar(t)])),
});

const AMBOS: TempoDoOficio[] = ["advento", "natal"];

const conteudo: ConteudoDoOficio = {
  revisao: "a revisar pelo dono",
  horas: [
    hora("matinas", "Matinas", "Ad Matutinum", matinas, ["advento"]),
    hora("laudes", "Laudes", "Ad Laudes", laudes, AMBOS),
    hora("prima", "Prima", "Ad Primam", prima, AMBOS),
    hora("terca", "Terça", "Ad Tertiam", terca, AMBOS),
    hora("sexta", "Sexta", "Ad Sextam", sexta, AMBOS),
    hora("noa", "Noa", "Ad Nonam", noa, AMBOS),
    hora("vesperas", "Vésperas", "Ad Vesperas", vesperas, AMBOS),
    hora("completas", "Completas", "Ad Completorium", completas, AMBOS),
  ],
  noturnos: noturnos("comum"),
  noturnosDoTempo: { advento: noturnos("advento") },
};

export default conteudo;
