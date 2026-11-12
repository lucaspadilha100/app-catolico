import type { OracaoDoDevocionario } from "./tipos";

const ORACOES: OracaoDoDevocionario[] = [
  {
    id: "antes-de-deitar",
    nome: "Antes de deitar",
    fonte: "tradicional",
    origem: "Oração da noite do Catecismo de São Pio X. Tradução da equipe do app",
    pt: [
      { rezar: "sinal-da-cruz" },
      "Meu Deus, eu vos adoro e vos amo de todo o coração. Eu vos agradeço por me terdes criado, feito cristão e conservado neste dia.",
      "Perdoai-me o mal que hoje fiz e, se algum bem fiz, aceitai-o. Guardai-me no descanso e livrai-me dos perigos. A vossa graça esteja sempre comigo e com todos os que me são queridos. Amém.",
    ],
  },
  {
    id: "exame-breve-da-noite",
    nome: "Exame breve da noite",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Meu Deus, eu creio que estais aqui presente. Eu vos adoro e vos agradeço por todos os benefícios deste dia.",
      "Dai-me luz, Senhor, para conhecer os meus pecados e graça para detestá-los.",
      "Lembro-me em silêncio do que pensei, disse e fiz hoje: em casa, no trabalho, com os outros. Onde faltei com Deus? Onde faltei com o próximo? Onde deixei de fazer o bem que podia?",
      { rezar: "ato-de-contricao" },
      "Proponho, com a vossa graça, corrigir-me amanhã especialmente nisto que agora vos apresento. Amém.",
    ],
  },
  {
    id: "te-lucis-ante-terminum",
    nome: "Antes do fim da luz",
    latim: "Te lucis ante terminum",
    fonte: "tradicional",
    origem: "Hino das Completas do Breviário Romano. Tradução da equipe do app",
    pt: [
      "Antes que termine a luz do dia, nós vos pedimos, Criador de todas as coisas, que, com a vossa costumada clemência, sejais o nosso guarda e protetor.",
      "Afastem-se para longe os maus sonhos e as fantasias da noite; reprimi o nosso inimigo, para que os nossos corpos não sejam manchados.",
      "Concedei-nos isto, ó Pai piíssimo, e vós, Filho único igual ao Pai, que reinais com o Espírito Consolador por todos os séculos. Amém.",
    ],
    la: [
      "Te lucis ante terminum, rerum Creator, poscimus, ut solita clementia sis praesul ad custodiam.",
      "Procul recedant somnia et noctium phantasmata; hostemque nostrum comprime, ne polluantur corpora.",
      "Praesta, Pater piissime, Patrique compar Unice, cum Spiritu Paraclito regnans per omne saeculum. Amen.",
    ],
  },
  {
    id: "salvai-nos-senhor-vigilantes",
    nome: "Salvai-nos, Senhor, acordados",
    latim: "Salva nos, Domine",
    fonte: "tradicional",
    origem: "Antífona e bênção das Completas. Tradução da equipe do app",
    pt: [
      "Salvai-nos, Senhor, enquanto estamos acordados; guardai-nos enquanto dormimos, para que vigiemos com Cristo e descansemos em paz.",
      { v: "O Senhor todo-poderoso nos conceda uma noite tranquila e um fim perfeito.", r: "Amém." },
    ],
    la: [
      "Salva nos, Domine, vigilantes, custodi nos dormientes; ut vigilemus cum Christo, et requiescamus in pace.",
      { v: "Noctem quietam et finem perfectum concedat nobis Dominus omnipotens.", r: "Amen." },
    ],
  },
  {
    id: "iluminai-as-nossas-trevas",
    nome: "Iluminai as nossas trevas",
    latim: "Illumina, quaesumus",
    fonte: "tradicional",
    origem: "Oração das Vésperas do Breviário Romano. Tradução da equipe do app",
    pt: [
      "Iluminai, Senhor Deus, nós vos pedimos, as nossas trevas, e afastai de nós, com bondade, todas as ciladas desta noite. Por nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, Deus, por todos os séculos dos séculos. Amém.",
    ],
    la: [
      "Illumina, quaesumus, Domine Deus, tenebras nostras: et totius huius noctis insidias tu a nobis repelle propitius. Per Dominum nostrum Iesum Christum, Filium tuum, qui tecum vivit et regnat in unitate Spiritus Sancti Deus, per omnia saecula saeculorum. Amen.",
    ],
  },
  {
    id: "jesus-maria-jose",
    nome: "Jesus, Maria, José",
    fonte: "tradicional",
    origem: "Jaculatórias tradicionais pela boa morte",
    pt: [
      "Jesus, Maria, José, eu vos dou o coração e a alma minha.",
      "Jesus, Maria, José, assisti-me na última agonia.",
      "Jesus, Maria, José, expire em paz entre vós a alma minha.",
    ],
  },
  {
    id: "por-uma-boa-morte",
    nome: "Por uma boa morte",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor Jesus Cristo, que morrestes na cruz por amor de nós, eu vos entrego desde já a hora da minha morte. Não sei quando nem como ela virá; sei que estou nas vossas mãos.",
      "Dai-me a graça de viver cada dia em vossa amizade, de me confessar a tempo e de receber os sacramentos da Igreja. Que naquela hora eu não esteja só: estejam comigo a Virgem Maria, São José e o meu Anjo da Guarda.",
      "Perdoai os meus pecados e recebei a minha alma na vossa paz. Amém.",
    ],
  },
  {
    id: "pelos-agonizantes",
    nome: "Pelos agonizantes",
    latim: "O clementissime Iesu",
    fonte: "tradicional",
    origem: "Oração tradicional do século XIX. Tradução da equipe do app",
    pt: [
      "Ó clementíssimo Jesus, amante das almas, eu vos suplico, pela agonia do vosso sacratíssimo Coração e pelas dores da vossa Mãe imaculada: lavai no vosso Sangue os pecadores do mundo inteiro que estão agora em agonia e que hoje hão de morrer. Amém.",
      { v: "Coração de Jesus, que agonizastes,", r: "tende piedade dos que morrem." },
    ],
    la: [
      "O clementissime Iesu, amator animarum, obsecro te per agoniam Cordis tui sanctissimi et per dolores Matris tuae immaculatae, lava in Sanguine tuo peccatores totius mundi, nunc positos in agonia et hodie morituros. Amen.",
      { v: "Cor Iesu in agonia factum,", r: "miserere morientium." },
    ],
  },
  {
    id: "anjo-da-guarda-a-noite",
    nome: "Ao Anjo da Guarda, à noite",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      { rezar: "santo-anjo" },
      "Meu santo Anjo da Guarda, agradeço-vos por me terdes acompanhado neste dia. Velai agora sobre o meu descanso e sobre esta casa.",
      "Afastai de mim os perigos da noite e as tentações do inimigo. Se Deus me chamar durante o sono, apresentai a minha alma diante dele. Se me der um novo dia, despertai-me para o servir com alegria. Amém.",
    ],
  },
];

export default ORACOES;
