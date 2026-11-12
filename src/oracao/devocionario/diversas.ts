import type { OracaoDoDevocionario } from "./tipos";

const ORACOES: OracaoDoDevocionario[] = [
  {
    id: "oracao-pela-paz",
    nome: "Oração pela paz",
    fonte: "tradicional",
    origem: "Oração atribuída a São Francisco de Assis, tradução da equipe do app",
    pt: [
      "Senhor, fazei de mim um instrumento da vossa paz.",
      "Onde houver ódio, que eu leve o amor. Onde houver ofensa, que eu leve o perdão. Onde houver discórdia, que eu leve a união. Onde houver dúvida, que eu leve a fé. Onde houver erro, que eu leve a verdade. Onde houver desespero, que eu leve a esperança. Onde houver tristeza, que eu leve a alegria. Onde houver trevas, que eu leve a luz.",
      "Ó Mestre, fazei que eu procure mais consolar que ser consolado, compreender que ser compreendido, amar que ser amado.",
      "Pois é dando que se recebe, é perdoando que se é perdoado, e é morrendo que se vive para a vida eterna. Amém.",
    ],
  },
  {
    id: "oracao-antes-do-estudo",
    nome: "Antes do estudo",
    fonte: "tradicional",
    origem: "São Tomás de Aquino, oração Creator ineffabilis, tradução resumida da equipe do app",
    pt: [
      "Criador inefável, que sois a verdadeira fonte da luz e da sabedoria, derramai sobre as trevas da minha inteligência um raio da vossa claridade.",
      "Dai-me agudeza para entender, capacidade para reter, método e facilidade para aprender, sutileza para interpretar e graça abundante para falar.",
      "Ensinai-me o começo, dirigi o progresso e completai a conclusão do meu trabalho. Vós que sois verdadeiro Deus e verdadeiro homem, e viveis e reinais pelos séculos dos séculos. Amém.",
    ],
  },
  {
    id: "oracao-pelos-enfermos",
    nome: "Pelos enfermos",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor Jesus, que passastes pelo mundo curando os doentes e tocando os que ninguém tocava, olhai com bondade para os enfermos por quem vos peço.",
      "Dai-lhes saúde, se assim for da vossa vontade, e dai-lhes sempre paciência na dor, paz no coração e fé que não se apaga. Sustentai os que cuidam deles, iluminai os médicos e enfermeiros e consolai as famílias cansadas.",
      "Ensinai-nos a ver em cada doente o vosso rosto, e a visitar, rezar e servir com amor. Vós que viveis e reinais para sempre. Amém.",
    ],
  },
  {
    id: "oracao-pela-familia",
    nome: "Pela família",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Deus, nosso Pai, que quisestes que o vosso Filho crescesse numa família, abençoai a nossa casa.",
      "Dai-nos paciência uns com os outros, palavras que não firam e a coragem de pedir perdão primeiro. Protegei os que moram longe, reconciliai os que se afastaram e consolai os lugares vazios da nossa mesa.",
      "Que na nossa família se reze, se trabalhe e se ame, à semelhança da casa de Nazaré. Por Cristo, nosso Senhor. Amém.",
    ],
  },
  {
    id: "oracao-dos-pais-pelos-filhos",
    nome: "Dos pais pelos filhos",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor, vós me confiastes estes filhos que são vossos antes de serem meus. Guardai-os quando os meus braços não alcançarem.",
      "Protegei-os dos perigos do corpo e da alma, dai-lhes bons amigos, retidão no caminho e fé viva. Ensinai-me a educar com firmeza e ternura, a corrigir sem humilhar e a dar testemunho antes de dar sermão.",
      "E quando eu errar com eles, cobri com a vossa graça o que faltou à minha. Por Cristo, nosso Senhor. Amém.",
    ],
  },
  {
    id: "oracao-pelo-trabalho",
    nome: "Pelo trabalho",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor Deus, que trabalhais até hoje e chamastes o homem a cultivar e guardar a criação, abençoai o meu trabalho.",
      "Dai-me honestidade no que faço, justiça no que recebo e respeito por quem trabalha comigo. Dai trabalho aos desempregados, força aos que carregam dois empregos e descanso aos exaustos.",
      "Que o meu trabalho sustente a minha casa, sirva ao próximo e vos dê glória, e que eu nunca deixe de ter tempo para vós e para os meus. Por Cristo, nosso Senhor. Amém.",
    ],
  },
  {
    id: "oracao-antes-de-viajar",
    nome: "Antes de viajar",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor, acompanhai-me nesta viagem, como acompanhastes os discípulos no caminho de Emaús.",
      "Dai-me prudência ao partir, proteção no caminho e alegria na chegada. Guardai os que viajam comigo e os que ficam esperando, e livrai-nos de todo acidente e de todo mal.",
      "Santo Anjo da guarda, ide à minha frente. Nossa Senhora, cobri a estrada com o vosso manto. E que eu volte em paz, dando graças a Deus. Amém.",
    ],
  },
  {
    id: "oracao-pelos-sacerdotes",
    nome: "Pelos sacerdotes",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor Jesus, sumo e eterno sacerdote, guardai os vossos padres no vosso Coração.",
      "Conservai-os santos no altar, fiéis no confessionário e pais no meio do povo. Sustentai os desanimados, amparai os doentes e idosos, trazei de volta os que se afastaram e defendei todos das ciladas do mal.",
      "Dai-lhes amigos verdadeiros, povo que reze por eles e amor sempre novo pela Eucaristia. E lembrai-me de nunca criticar sem antes rezar. Amém.",
    ],
  },
  {
    id: "oracao-pelas-vocacoes",
    nome: "Pelas vocações",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor da messe, vós mesmo dissestes que a messe é grande e os operários são poucos. Mandai operários para a vossa messe.",
      "Despertai nos jovens a coragem de perguntar o que quereis deles. Dai à Igreja santos padres, diáconos dedicados, religiosos e religiosas alegres, missionários destemidos e leigos comprometidos.",
      "Abençoai as famílias para que sejam o primeiro seminário, e se chamardes alguém da minha casa, dai-nos a graça de dizer sim. Por Cristo, nosso Senhor. Amém.",
    ],
  },
  {
    id: "oracao-pela-igreja-e-pelo-papa",
    nome: "Pela Igreja e pelo Papa",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor Jesus, que edificastes a vossa Igreja sobre a rocha de Pedro e prometestes estar com ela todos os dias, guardai-a na verdade e na unidade.",
      "Protegei o Papa, sucessor de Pedro: dai-lhe saúde, sabedoria e coragem, e livrai-o de todo mal. Abençoai os bispos e os padres, santificai os fiéis e trazei de volta os que se afastaram.",
      "Fazei da Igreja uma casa de portas abertas, mãe dos pobres e sinal da vossa paz no mundo. Vós que viveis e reinais para sempre. Amém.",
    ],
  },
  {
    id: "oracao-pelo-brasil",
    nome: "Pelo Brasil",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Deus, nosso Pai, abençoai o Brasil, terra de Santa Cruz, confiada a Nossa Senhora Aparecida.",
      "Dai pão a todas as mesas, trabalho a todas as mãos e paz a todas as cidades. Convertei os corações violentos, dai honestidade aos que governam e sabedoria aos que votam. Protegei as crianças, amparai os esquecidos e conservai a fé do nosso povo.",
      "Nossa Senhora Aparecida, padroeira do Brasil, rogai pelo nosso povo e pela nossa pátria. Amém.",
    ],
  },
  {
    id: "oracao-pelos-governantes",
    nome: "Pelos governantes",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor, dono de toda autoridade, nós vos pedimos pelos que governam em nosso nome.",
      "Dai-lhes sabedoria para decidir, honestidade para administrar e compaixão para olhar primeiro os mais pobres. Afastai deles a corrupção, a vaidade e a sede de poder, e lembrai-lhes que um dia prestarão contas a vós.",
      "E dai a nós, povo, a vigilância serena e a oração constante, para que tenhamos uma vida calma e tranquila, com toda piedade e dignidade. Por Cristo, nosso Senhor. Amém.",
    ],
  },
  {
    id: "oracao-em-tempo-de-aflicao",
    nome: "Em tempo de aflição",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Meu Deus, estou aflito e venho a vós como estou, sem palavras bonitas.",
      "Vós conheceis o peso que carrego. Dai-me hoje apenas a força de hoje. Acalmai o meu coração como acalmastes o mar, e não permitais que o medo decida por mim.",
      "Se esta cruz não puder passar, passai-a comigo. Eu confio em vós, ainda sem entender. Nas vossas mãos entrego esta aflição, os que amo e o dia de amanhã. Senhor, eu creio, mas aumentai a minha fé. Amém.",
    ],
  },
  {
    id: "oracao-de-agradecimento",
    nome: "De agradecimento",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Obrigado, Senhor, por tudo o que recebi de vós, pelo que pedi e pelo que nem soube pedir.",
      "Obrigado pela vida, pela fé, pela minha família e pelos amigos. Obrigado pelo pão de cada dia, pelo perdão de cada queda e pelas graças que só vou conhecer no céu. Obrigado até pelo que não entendi, porque também ali estáveis cuidando de mim.",
      "Que a minha gratidão não fique nas palavras: fazei de mim uma bênção para os outros, como fostes para mim. Amém.",
    ],
  },
  {
    id: "oracao-pelo-perdao-dos-inimigos",
    nome: "Pelo perdão e pelos inimigos",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor Jesus, que na cruz pedistes perdão pelos que vos crucificavam, ensinai-me a perdoar.",
      "Eu vos entrego as pessoas que me feriram e as feridas que ainda doem. Não deixeis que o rancor more em mim. Abençoai os que me querem mal, convertei o coração deles e o meu, e curai o que a ofensa quebrou.",
      "E onde eu feri, dai-me a humildade de reconhecer e reparar. Que o vosso perdão, que recebo de graça, passe por mim e chegue aos outros. Amém.",
    ],
  },
  {
    id: "oracao-em-tempo-de-tentacao",
    nome: "Em tempo de tentação",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor, a tentação está batendo à porta e eu sou fraco. Vinde depressa em meu socorro.",
      "Lembrai-me de que nenhuma tentação é maior que a vossa graça, e que convosco eu posso dizer não. Afastai de mim a ocasião do pecado, ocupai a minha mente com o que é bom e dai-me a humildade de fugir quando preciso.",
      "Maria, concebida sem pecado, rogai por mim. São Miguel Arcanjo, defendei-me no combate. Senhor, não me deixeis cair em tentação, mas livrai-me do mal. Amém.",
    ],
  },
  {
    id: "oracao-pelos-pobres",
    nome: "Pelos pobres",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor Jesus, que nascestes pobre e dissestes que o que fazemos ao menor dos irmãos fazemos a vós, abri os meus olhos para os pobres do meu caminho.",
      "Dai pão aos que têm fome, teto aos que dormem na rua, trabalho aos desempregados e dignidade aos humilhados. Convertei as estruturas injustas e os nossos corações acomodados.",
      "Que eu não passe adiante como o sacerdote da parábola, mas pare, cuide e reparta. E fazei-me pobre de orgulho, para ser rico de vós. Amém.",
    ],
  },
];

export default ORACOES;
