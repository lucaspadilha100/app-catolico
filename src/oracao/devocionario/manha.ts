import type { OracaoDoDevocionario } from "./tipos";

const ORACOES: OracaoDoDevocionario[] = [
  {
    id: "ao-acordar",
    nome: "Ao acordar",
    fonte: "tradicional",
    origem: "Oração da manhã do Catecismo de São Pio X. Tradução da equipe do app",
    pt: [
      { rezar: "sinal-da-cruz" },
      "Meu Deus, eu vos adoro e vos amo de todo o coração. Eu vos agradeço por me terdes criado, feito cristão e conservado nesta noite.",
      "Eu vos ofereço as ações deste dia: fazei que todas sejam segundo a vossa santa vontade e para a vossa maior glória. Preservai-me do pecado e de todo mal. A vossa graça esteja sempre comigo e com todos os que me são queridos. Amém.",
    ],
  },
  {
    id: "jaculatorias-ao-levantar",
    nome: "Jaculatórias ao levantar",
    fonte: "tradicional",
    origem: "Jaculatórias de uso comum",
    pt: [
      "Bendita seja a santa e indivisa Trindade, agora e sempre.",
      "Meu Deus, eu vos dou o meu coração.",
      "Jesus, Maria, José, eu vos dou o coração e a alma minha.",
      "Tudo por amor de vós, ó meu Jesus.",
    ],
  },
  {
    id: "oferecimento-do-dia-apostolado-da-oracao",
    nome: "Oferecimento do dia",
    fonte: "tradicional",
    origem: "Apostolado da Oração, fundado em 1844 pelo Pe. Francisco Xavier Gautrelet",
    pt: [
      "Divino Coração de Jesus, eu vos ofereço, pelo Coração Imaculado de Maria, as orações, obras e sofrimentos deste dia, em reparação das ofensas por nós cometidas e por todas as intenções pelas quais continuamente vos ofereceis sobre o altar.",
      "Eu vo-los ofereço, em particular, pelas intenções do Santo Padre para este mês. Amém.",
    ],
  },
  {
    id: "oferecimento-do-dia-breve",
    nome: "Oferecimento do dia (forma breve)",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Senhor meu Deus, eu vos ofereço este dia: os meus pensamentos, as minhas palavras, o meu trabalho, as minhas alegrias e as minhas dores.",
      "Uno tudo ao sacrifício de Jesus Cristo, vosso Filho, para a vossa glória, pela salvação da minha alma e pelas necessidades da santa Igreja. Guardai-me hoje de todo pecado. Amém.",
    ],
  },
  {
    id: "tomai-senhor",
    nome: "Tomai, Senhor, e recebei",
    latim: "Suscipe",
    fonte: "tradicional",
    origem: "Santo Inácio de Loyola, Exercícios Espirituais (século XVI). Tradução da equipe do app",
    pt: [
      "Tomai, Senhor, e recebei toda a minha liberdade, a minha memória, o meu entendimento e toda a minha vontade, tudo o que tenho e possuo.",
      "Vós mo destes; a vós, Senhor, o restituo. Tudo é vosso: disponde de tudo inteiramente segundo a vossa vontade. Dai-me somente o vosso amor e a vossa graça, que isto me basta, e nada mais vos peço. Amém.",
    ],
    la: [
      "Suscipe, Domine, universam meam libertatem. Accipe memoriam, intellectum atque voluntatem omnem. Quidquid habeo vel possideo mihi largitus es; id tibi totum restituo, ac tuae prorsus voluntati trado gubernandum.",
      "Amorem tui solum cum gratia tua mihi dones, et dives sum satis, nec aliud quidquam ultra posco. Amen.",
    ],
  },
  {
    id: "oracao-de-prima",
    nome: "Ao começar o dia",
    latim: "Domine Deus omnipotens",
    fonte: "tradicional",
    origem: "Oração da hora de Prima do Breviário Romano. Tradução da equipe do app",
    pt: [
      "Senhor Deus todo-poderoso, que nos fizestes chegar ao princípio deste dia, salvai-nos hoje com o vosso poder, para que neste dia não caiamos em pecado algum, mas as nossas palavras, os nossos pensamentos e as nossas obras se encaminhem sempre a cumprir a vossa justiça. Por nosso Senhor Jesus Cristo, vosso Filho, que convosco vive e reina na unidade do Espírito Santo, Deus, por todos os séculos dos séculos. Amém.",
    ],
    la: [
      "Domine Deus omnipotens, qui ad principium huius diei nos pervenire fecisti: tua nos hodie salva virtute; ut in hac die ad nullum declinemus peccatum, sed semper ad tuam iustitiam faciendam nostra procedant eloquia, dirigantur cogitationes et opera. Per Dominum nostrum Iesum Christum, Filium tuum, qui tecum vivit et regnat in unitate Spiritus Sancti Deus, per omnia saecula saeculorum. Amen.",
    ],
  },
  {
    id: "oferecimento-do-coracao-a-maria",
    nome: "Oferecimento do coração a Maria",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Ó Maria, minha Mãe, no começo deste dia eu vos entrego o meu coração. Guardai-o puro, humilde e generoso, para que nele Jesus encontre morada.",
      "Tudo o que eu fizer hoje passe pelas vossas mãos, para que o apresenteis ao vosso Filho. Ensinai-me a dizer sim a Deus como vós dissestes, e não me deixeis afastar dele por nenhum pecado. Amém.",
    ],
  },
  {
    id: "tres-ave-marias",
    nome: "Três Ave-Marias",
    fonte: "tradicional",
    origem: "Devoção recomendada por Santo Afonso Maria de Ligório",
    pt: [
      "Por vossa pura e imaculada Conceição, ó Maria, tornai puro o meu corpo e santa a minha alma.",
      { rezar: "ave-maria" },
      { rezar: "ave-maria" },
      { rezar: "ave-maria" },
      "Ó minha Mãe, preservai-me neste dia do pecado mortal.",
    ],
  },
  {
    id: "anjo-da-guarda-de-manha",
    nome: "Ao Anjo da Guarda, pela manhã",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      { rezar: "santo-anjo" },
      "Meu santo Anjo da Guarda, que velastes por mim durante a noite, acompanhai-me neste dia. Guardai os meus passos no caminho, as minhas palavras no trato com os outros e o meu coração diante da tentação.",
      "Lembrai-me da presença de Deus nas horas de trabalho e de cansaço, e conduzi-me sempre para o bem. Amém.",
    ],
  },
];

export default ORACOES;
