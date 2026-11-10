import type { Bloco, ConteudoDoOficio } from "./tipos";
import type { Linha } from "@/oracao/oracoes";

const LOUVOR =
  "Da Septuagésima, nove semanas antes da Páscoa, até a Páscoa, em lugar do Aleluia diz-se: Louvor a vós, Senhor, Rei da eterna glória.";

const PASCAL =
  "No Tempo Pascal, em lugar desta antífona: Rainha do céu, alegrai-vos, aleluia, porque aquele que merecestes trazer, aleluia, ressuscitou como disse, aleluia. Rogai a Deus por nós, aleluia.";

const DEUS_VINDE: Bloco[] = [
  { linhas: [{ v: "Ó Deus, vinde em meu auxílio.", r: "Senhor, apressai-vos em me ajudar." }] },
  { rezar: "gloria" },
  { linhas: ["Aleluia."] },
  { rubrica: LOUVOR },
];

const ABERTURA: Bloco[] = [{ rezar: "ave-maria" }, ...DEUS_VINDE];

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
      { v: "O auxílio divino permaneça sempre conosco.", r: "Amém." },
    ],
  },
];

const ORACAO_LAUDES =
  "Oremos. Ó Deus, que quisestes que o vosso Verbo, ao anúncio do anjo, tomasse carne no seio da bem-aventurada Virgem Maria, concedei aos que vos suplicam que, crendo verdadeiramente que ela é a Mãe de Deus, sejamos ajudados junto de vós pela sua intercessão. Pelo mesmo Cristo, Senhor nosso. Amém.";

const DIFUSA: Bloco = {
  linhas: [{ v: "A graça se derramou em vossos lábios.", r: "Por isso Deus vos abençoou para sempre." }],
};

const BENDITA: Bloco = {
  linhas: [{ v: "Bendita sois vós entre as mulheres.", r: "E bendito é o fruto do vosso ventre." }],
};

const TU_AUTEM: Bloco = { linhas: [{ v: "E vós, Senhor, tende piedade de nós.", r: "Graças a Deus." }] };

const bencao = (texto: string): Bloco => ({ linhas: ["Dai-nos, Senhor, a vossa bênção.", { v: texto, r: "Amém." }] });

const LICOES: Bloco[] = [
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
  bencao("A Virgem das virgens interceda por nós junto do Senhor."),
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
  bencao("Pela Virgem Mãe, o Senhor nos conceda a salvação e a paz."),
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

const AVE_INVITATORIO = "Ave, Maria, cheia de graça, o Senhor é convosco.";
const CONVOSCO = "O Senhor é convosco.";

const conteudo: ConteudoDoOficio = {
  revisao: "a revisar pelo dono",
  horas: [
    {
      id: "matinas",
      nome: "Matinas",
      latim: "Ad Matutinum",
      blocos: [
        { rezar: "ave-maria" },
        { linhas: [{ v: "Senhor, abri os meus lábios.", r: "E a minha boca anunciará o vosso louvor." }] },
        ...DEUS_VINDE,
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
        { rezar: "te-deum" },
      ],
    },
    {
      id: "laudes",
      nome: "Laudes",
      latim: "Ad Laudes",
      blocos: [
        ...ABERTURA,
        ...comAntifona(
          "Maria foi elevada ao céu; os anjos se alegram e, cantando louvores, bendizem o Senhor.",
          salmo("PSA 93:1-5", "Salmo 92", "O Senhor reinou, vestiu-se"),
        ),
        ...comAntifona(
          "A Virgem Maria foi elevada ao tálamo celeste, onde o Rei dos reis está sentado num trono de estrelas.",
          salmo("PSA 100:2-5", "Salmo 99"),
        ),
        ...comAntifona(
          "Corremos atrás do perfume dos vossos unguentos; as jovens vos amaram muito.",
          salmo("PSA 63:2-12", "Salmo 62"),
        ),
        ...comAntifona(
          "Bendita sois vós, filha, pelo Senhor, porque por vós recebemos o fruto da vida.",
          [
            { leitura: "DAN 3:57-88", titulo: "Cântico dos três jovens", poema: true, fim: "acima de tudo para sempre." },
            { linhas: ["Bendigamos o Pai e o Filho com o Espírito Santo; louvemo-lo e exaltemo-lo para sempre."] },
            { leitura: "DAN 3:56", poema: true },
          ],
        ),
        ...comAntifona(
          "Sois bela e formosa, filha de Jerusalém, terrível como um exército em ordem de batalha.",
          salmo("PSA 148:1-14", "Salmo 148", "Louvai o Senhor desde os céus", "o povo que se aproxima dele."),
        ),
        { leitura: "SNG 6:9", titulo: "Capítulo", inicio: "As filhas a viram" },
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
        { rubrica: PASCAL },
        ...comAntifona(
          "Bem-aventurada Mãe de Deus, Maria, sempre Virgem, templo do Senhor, santuário do Espírito Santo: só vós, sem exemplo, agradastes a Nosso Senhor Jesus Cristo. Rogai pelo povo, intervinde pelo clero, intercedei pelas mulheres devotas.",
          salmo("LUK 1:68-79", "Cântico de Zacarias", "Bendito seja o Senhor", "no caminho da paz."),
        ),
        ...conclusao(ORACAO_LAUDES),
        { rubrica: "Se a Prima não se reza logo em seguida, diz-se o Pai-nosso em silêncio e conclui-se assim:" },
        { linhas: [{ v: "O Senhor nos dê a sua paz.", r: "E a vida eterna. Amém." }] },
        ...ANTIFONA_FINAL,
      ],
    },
    {
      id: "prima",
      nome: "Prima",
      latim: "Ad Primam",
      blocos: [
        ...ABERTURA,
        ...HINO_MEMENTO,
        ...comAntifona(
          "Maria foi elevada ao céu; os anjos se alegram e, cantando louvores, bendizem o Senhor.",
          salmo("PSA 54:3-9", "Salmo 53"),
          salmo("PSA 85:2-14", "Salmo 84"),
          salmo("PSA 117:1-2", "Salmo 116", "Louvai o Senhor, todas as nações"),
        ),
        { leitura: "SNG 6:10", titulo: "Capítulo", fim: "em campo?" },
        gracas,
        { linhas: [{ v: "Permiti que eu vos louve, Virgem sagrada.", r: "Dai-me força contra os vossos inimigos." }] },
        ...conclusao(
          "Oremos. Ó Deus, que vos dignastes escolher para vossa morada o seio virginal da bem-aventurada Maria, concedei-nos, vos pedimos, que, protegidos pela sua defesa, tomemos parte com alegria na sua memória. Vós que viveis e reinais com Deus Pai, na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.",
        ),
      ],
    },
    {
      id: "terca",
      nome: "Terça",
      latim: "Ad Tertiam",
      blocos: [
        ...ABERTURA,
        ...HINO_MEMENTO,
        ...comAntifona(
          "A Virgem Maria foi elevada ao tálamo celeste, onde o Rei dos reis está sentado num trono de estrelas.",
          salmo("PSA 120:1-7", "Salmo 119", "Quando me vi atribulado"),
          salmo("PSA 121:1-8", "Salmo 120", "Levantei os meus olhos para os montes"),
          salmo("PSA 122:1-9", "Salmo 121", "Alegrei-me com o que me disseram"),
        ),
        { leitura: "SIR 24:15", titulo: "Capítulo" },
        gracas,
        DIFUSA,
        ...conclusao(
          "Oremos. Ó Deus, que pela virgindade fecunda da bem-aventurada Maria destes ao gênero humano os bens da salvação eterna, concedei-nos, vos pedimos, sentir a intercessão daquela por quem merecemos receber o Autor da vida, Nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.",
        ),
      ],
    },
    {
      id: "sexta",
      nome: "Sexta",
      latim: "Ad Sextam",
      blocos: [
        ...ABERTURA,
        ...HINO_MEMENTO,
        ...comAntifona(
          "Corremos atrás do perfume dos vossos unguentos; as jovens vos amaram muito.",
          salmo("PSA 123:1-4", "Salmo 122", "Levantei os meus olhos para ti"),
          salmo("PSA 124:1-8", "Salmo 123", "Se o Senhor não tivesse"),
          salmo("PSA 125:1-5", "Salmo 124", "Os que confiam no Senhor"),
        ),
        { leitura: "SIR 24:16", titulo: "Capítulo" },
        gracas,
        BENDITA,
        ...conclusao(
          "Oremos. Ó Deus de misericórdia, dai amparo à nossa fraqueza, para que nós, que celebramos a memória da santa Mãe de Deus, nos levantemos dos nossos pecados com o auxílio da sua intercessão. Pelo mesmo Nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.",
        ),
      ],
    },
    {
      id: "noa",
      nome: "Noa",
      latim: "Ad Nonam",
      blocos: [
        ...ABERTURA,
        ...HINO_MEMENTO,
        ...comAntifona(
          "Sois bela e formosa, filha de Jerusalém, terrível como um exército em ordem de batalha.",
          salmo("PSA 126:1-6", "Salmo 125", "Quando o Senhor fizer voltar"),
          salmo("PSA 127:1-5", "Salmo 126", "Se o Senhor não edificar"),
          salmo("PSA 128:1-6", "Salmo 127", "Bem-aventurados todos"),
        ),
        { leitura: "SIR 24:19-20", titulo: "Capítulo", inicio: "nas praças" },
        gracas,
        { linhas: [{ v: "Depois do parto, ó Virgem, permanecestes intacta.", r: "Mãe de Deus, intercedei por nós." }] },
        ...conclusao(
          "Oremos. Perdoai, Senhor, vos pedimos, as faltas dos vossos servos, para que nós, que não conseguimos agradar-vos com as nossas obras, sejamos salvos pela intercessão da Mãe do vosso Filho, Nosso Senhor, que convosco vive e reina na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.",
        ),
      ],
    },
    {
      id: "vesperas",
      nome: "Vésperas",
      latim: "Ad Vesperas",
      blocos: [
        ...ABERTURA,
        ...comAntifona(
          "Enquanto o Rei estava à mesa, o meu nardo exalou o seu perfume suave.",
          salmo("PSA 110:1-7", "Salmo 109", "Disse o Senhor ao meu Senhor"),
        ),
        ...comAntifona(
          "A sua mão esquerda está sob a minha cabeça, e a sua direita me abraçará.",
          salmo("PSA 113:1-9", "Salmo 112", "Louvai o Senhor, ó meninos"),
        ),
        ...comAntifona(
          "Sou morena, mas formosa, filhas de Jerusalém; por isso o Rei me amou e me fez entrar nos seus aposentos.",
          salmo("PSA 122:1-9", "Salmo 121", "Alegrei-me com o que me disseram"),
        ),
        ...comAntifona(
          "Já passou o inverno, a chuva cessou e se foi; levanta-te, minha amiga, e vem.",
          salmo("PSA 127:1-5", "Salmo 126", "Se o Senhor não edificar"),
        ),
        ...comAntifona(
          "Vós vos tornastes bela e suave em vossas delícias, santa Mãe de Deus.",
          salmo("PSA 147:12-20", "Salmo 147", undefined, "não lhes manifestou os seus juízos."),
        ),
        { leitura: "SIR 24:14", titulo: "Capítulo" },
        gracas,
        { rezar: "ave-maris-stella" },
        DIFUSA,
        { rubrica: PASCAL },
        ...comAntifona(
          "Mãe bem-aventurada e Virgem intacta, Rainha gloriosa do mundo, intercedei por nós junto do Senhor.",
          salmo("LUK 1:46-55", "Cântico de Nossa Senhora", "A minha alma glorifica", "descendência para sempre."),
        ),
        ...conclusao(
          "Oremos. Senhor Deus, concedei a nós, vossos servos, vos pedimos, gozar sempre de saúde da alma e do corpo e, pela gloriosa intercessão da bem-aventurada sempre Virgem Maria, ser livres da tristeza presente e alcançar a alegria eterna. Por Cristo, Senhor nosso. Amém.",
        ),
      ],
    },
    {
      id: "completas",
      nome: "Completas",
      latim: "Ad Completorium",
      blocos: [
        { rezar: "ave-maria" },
        { linhas: [{ v: "Convertei-nos, ó Deus, nosso Salvador.", r: "E afastai de nós a vossa ira." }] },
        ...DEUS_VINDE,
        ...salmo("PSA 129:1-8", "Salmo 128", "Muitas vezes me atacaram"),
        ...salmo("PSA 130:1-8", "Salmo 129", "Do mais profundo"),
        ...salmo("PSA 131:1-3", "Salmo 130", "Senhor, o meu coração"),
        ...HINO_MEMENTO,
        { leitura: "SIR 24:24", titulo: "Capítulo" },
        gracas,
        {
          linhas: [{ v: "Rogai por nós, santa Mãe de Deus.", r: "Para que sejamos dignos das promessas de Cristo." }],
        },
        { rubrica: PASCAL },
        ...comAntifona(
          "À vossa proteção recorremos, santa Mãe de Deus: não desprezeis as nossas súplicas nas nossas necessidades, mas livrai-nos sempre de todos os perigos, Virgem gloriosa e bendita.",
          salmo("LUK 2:29-32", "Cântico de Simeão", "Agora, Senhor", "do teu povo, Israel."),
        ),
        {
          linhas: [
            KYRIE,
            OUVI,
            "Oremos. Senhor, vos pedimos: que a gloriosa intercessão da bem-aventurada e gloriosa sempre Virgem Maria nos proteja e nos conduza à vida eterna. Por Nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.",
            OUVI,
            { v: "Bendigamos ao Senhor.", r: "Graças a Deus." },
            {
              v: "O Senhor onipotente e misericordioso, Pai, Filho e Espírito Santo, nos abençoe e nos guarde.",
              r: "Amém.",
            },
          ],
        },
        ...ANTIFONA_FINAL,
        { rubrica: "Em silêncio:" },
        { rezar: "pai-nosso" },
        { rezar: "ave-maria" },
        { rezar: "creio" },
      ],
    },
  ],
  noturnos: [
    [
      ...comAntifona(
        "Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre.",
        salmo("PSA 8:2-10", "Salmo 8"),
      ),
      ...comAntifona(
        "Como a mirra escolhida, espalhastes um perfume suave, santa Mãe de Deus.",
        salmo("PSA 19:2-15", "Salmo 18"),
      ),
      ...comAntifona(
        "Diante do leito desta Virgem, cantai-nos sempre de novo os doces cantos do drama sagrado.",
        salmo("PSA 24:1-10", "Salmo 23", "Do Senhor é a terra"),
      ),
      ...LICOES,
    ],
    [
      ...comAntifona(
        "Com a vossa graça e a vossa beleza, avançai, prosperai e reinai.",
        salmo("PSA 45:2-18", "Salmo 44"),
      ),
      ...comAntifona(
        "Deus a ajudará com o seu olhar; Deus está no meio dela, ela não será abalada.",
        salmo("PSA 46:2-12", "Salmo 45"),
      ),
      ...comAntifona(
        "Como a de quem vive na alegria, assim é em vós a morada de todos nós, santa Mãe de Deus.",
        salmo("PSA 87:1-7", "Salmo 86", "Os seus alicerces"),
      ),
      ...LICOES,
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
        "Depois do parto, ó Virgem, permanecestes intacta; Mãe de Deus, intercedei por nós.",
        salmo("PSA 98:1-9", "Salmo 97", "Cantai ao Senhor um cântico novo"),
      ),
      ...LICOES,
    ],
  ],
};

export default conteudo;
