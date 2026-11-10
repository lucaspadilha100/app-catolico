import type { Tempo } from "@/liturgia/calendario";

export type Linha =
  | string
  | { v: string; r: string }
  | { invocacoes: string[]; resposta: string }
  | { rezar: string };

export type GrupoDeOracoes = "principais" | "marianas" | "dia" | "ladainhas" | "terco";

export interface Oracao {
  id: string;
  nome: string;
  latim: string;
  grupo: GrupoDeOracoes;
  pt: Linha[];
  la?: Linha[];
  lista?: false;
}

export const NOME_DO_GRUPO: Record<GrupoDeOracoes, string> = {
  principais: "Orações principais",
  marianas: "Nossa Senhora",
  dia: "Ao longo do dia",
  ladainhas: "Ladainhas",
  terco: "Do terço",
};

export const ORDEM_DOS_GRUPOS: GrupoDeOracoes[] = ["principais", "marianas", "dia", "ladainhas", "terco"];

const KYRIE_PT: Linha[] = [
  { v: "Senhor, tende piedade de nós.", r: "Senhor, tende piedade de nós." },
  { v: "Jesus Cristo, tende piedade de nós.", r: "Jesus Cristo, tende piedade de nós." },
  { v: "Senhor, tende piedade de nós.", r: "Senhor, tende piedade de nós." },
  { v: "Jesus Cristo, ouvi-nos.", r: "Jesus Cristo, atendei-nos." },
  {
    invocacoes: [
      "Deus Pai do céu",
      "Deus Filho, Redentor do mundo",
      "Deus Espírito Santo",
      "Santíssima Trindade, que sois um só Deus",
    ],
    resposta: "tende piedade de nós.",
  },
];

const KYRIE_LA: Linha[] = [
  { v: "Kyrie, eleison.", r: "Kyrie, eleison." },
  { v: "Christe, eleison.", r: "Christe, eleison." },
  { v: "Kyrie, eleison.", r: "Kyrie, eleison." },
  { v: "Christe, audi nos.", r: "Christe, exaudi nos." },
  {
    invocacoes: ["Pater de caelis, Deus", "Fili, Redemptor mundi, Deus", "Spiritus Sancte, Deus", "Sancta Trinitas, unus Deus"],
    resposta: "miserere nobis.",
  },
];

const AGNUS_PT: Linha[] = [
  { v: "Cordeiro de Deus, que tirais os pecados do mundo,", r: "perdoai-nos, Senhor." },
  { v: "Cordeiro de Deus, que tirais os pecados do mundo,", r: "ouvi-nos, Senhor." },
  { v: "Cordeiro de Deus, que tirais os pecados do mundo,", r: "tende piedade de nós." },
];

const AGNUS_LA: Linha[] = [
  { v: "Agnus Dei, qui tollis peccata mundi,", r: "parce nobis, Domine." },
  { v: "Agnus Dei, qui tollis peccata mundi,", r: "exaudi nos, Domine." },
  { v: "Agnus Dei, qui tollis peccata mundi,", r: "miserere nobis." },
];

const LISTA: Oracao[] = [
  {
    id: "sinal-da-cruz",
    nome: "Sinal da Cruz",
    latim: "Signum Crucis",
    grupo: "principais",
    pt: [
      "Pelo sinal da Santa Cruz, livrai-nos, Deus, Nosso Senhor, dos nossos inimigos.",
      "Em nome do Pai, e do Filho, e do Espírito Santo. Amém.",
    ],
    la: ["Per signum Crucis de inimicis nostris libera nos, Deus noster.", "In nomine Patris, et Filii, et Spiritus Sancti. Amen."],
  },
  {
    id: "pai-nosso",
    nome: "Pai-Nosso",
    latim: "Pater Noster",
    grupo: "principais",
    pt: [
      "Pai nosso, que estais nos céus, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade, assim na terra como no céu.",
      "O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
    ],
    la: [
      "Pater noster, qui es in caelis, sanctificetur nomen tuum. Adveniat regnum tuum. Fiat voluntas tua, sicut in caelo et in terra.",
      "Panem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris. Et ne nos inducas in tentationem, sed libera nos a malo. Amen.",
    ],
  },
  {
    id: "ave-maria",
    nome: "Ave-Maria",
    latim: "Ave Maria",
    grupo: "principais",
    pt: [
      "Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus.",
      "Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém.",
    ],
    la: [
      "Ave Maria, gratia plena, Dominus tecum. Benedicta tu in mulieribus, et benedictus fructus ventris tui, Iesus.",
      "Sancta Maria, Mater Dei, ora pro nobis peccatoribus, nunc et in hora mortis nostrae. Amen.",
    ],
  },
  {
    id: "gloria",
    nome: "Glória",
    latim: "Gloria Patri",
    grupo: "principais",
    pt: ["Glória ao Pai, e ao Filho, e ao Espírito Santo.", "Como era no princípio, agora e sempre. Amém."],
    la: ["Gloria Patri, et Filio, et Spiritui Sancto.", "Sicut erat in principio, et nunc, et semper, et in saecula saeculorum. Amen."],
  },
  {
    id: "creio",
    nome: "Creio",
    latim: "Symbolum Apostolorum",
    grupo: "principais",
    pt: [
      "Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus; está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos.",
      "Creio no Espírito Santo; na santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.",
    ],
    la: [
      "Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae. Et in Iesum Christum, Filium eius unicum, Dominum nostrum, qui conceptus est de Spiritu Sancto, natus ex Maria Virgine, passus sub Pontio Pilato, crucifixus, mortuus, et sepultus, descendit ad inferos, tertia die resurrexit a mortuis, ascendit ad caelos, sedet ad dexteram Dei Patris omnipotentis, inde venturus est iudicare vivos et mortuos.",
      "Credo in Spiritum Sanctum, sanctam Ecclesiam catholicam, sanctorum communionem, remissionem peccatorum, carnis resurrectionem, vitam aeternam. Amen.",
    ],
  },
  {
    id: "ato-de-contricao",
    nome: "Ato de Contrição",
    latim: "Actus Contritionis",
    grupo: "principais",
    pt: [
      "Senhor meu Jesus Cristo, Deus e homem verdadeiro, Criador e Redentor meu, por serdes vós quem sois, sumamente bom e digno de ser amado sobre todas as coisas, e porque vos amo e estimo, pesa-me, Senhor, de todo o meu coração, de vos ter ofendido.",
      "Proponho firmemente, ajudado com o auxílio da vossa divina graça, emendar-me e nunca mais vos tornar a ofender, e espero alcançar o perdão das minhas culpas pela vossa infinita misericórdia. Amém.",
    ],
    la: [
      "Deus meus, ex toto corde paenitet me omnium meorum peccatorum, eaque detestor, quia peccando non solum poenas a te iuste statutas promeritus sum, sed praesertim quia offendi te, summum bonum, ac dignum qui super omnia diligaris.",
      "Ideo firmiter propono, adiuvante gratia tua, de cetero me non peccaturum peccandique occasiones proximas fugiturum. Amen.",
    ],
  },
  {
    id: "santo-anjo",
    nome: "Santo Anjo",
    latim: "Angele Dei",
    grupo: "principais",
    pt: [
      "Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, me guarda, me governa e me ilumina. Amém.",
    ],
    la: ["Angele Dei, qui custos es mei, me, tibi commissum pietate superna, illumina, custodi, rege et guberna. Amen."],
  },
  {
    id: "vinde-espirito-santo",
    nome: "Vinde, Espírito Santo",
    latim: "Veni, Sancte Spiritus",
    grupo: "principais",
    pt: [
      "Vinde, Espírito Santo, enchei os corações dos vossos fiéis e acendei neles o fogo do vosso amor.",
      { v: "Enviai o vosso Espírito, e tudo será criado.", r: "E renovareis a face da terra." },
      "Oremos. Ó Deus, que instruístes os corações dos vossos fiéis com a luz do Espírito Santo, concedei-nos que, no mesmo Espírito, saibamos o que é reto e gozemos sempre da sua consolação. Por Cristo, Senhor nosso. Amém.",
    ],
    la: [
      "Veni, Sancte Spiritus, reple tuorum corda fidelium, et tui amoris in eis ignem accende.",
      { v: "Emitte Spiritum tuum, et creabuntur.", r: "Et renovabis faciem terrae." },
      "Oremus. Deus, qui corda fidelium Sancti Spiritus illustratione docuisti, da nobis in eodem Spiritu recta sapere, et de eius semper consolatione gaudere. Per Christum Dominum nostrum. Amen.",
    ],
  },
  {
    id: "comunhao-espiritual",
    nome: "Comunhão espiritual",
    latim: "Communio spiritualis",
    grupo: "principais",
    pt: [
      "Meu Jesus, eu creio que estais presente no Santíssimo Sacramento. Amo-vos sobre todas as coisas e desejo receber-vos em minha alma.",
      "Já que agora não posso receber-vos sacramentalmente, vinde ao menos espiritualmente ao meu coração. Como se já vos tivesse recebido, eu vos abraço e me uno todo a vós. Não permitais que jamais me separe de vós. Amém.",
    ],
    la: [
      "Iesu mi, credo te in Sanctissimo Sacramento praesentem esse. Amo te super omnia, et desidero te in animam meam recipere.",
      "Quoniam nunc sacramentaliter id facere non possum, veni saltem spiritualiter in cor meum. Tamquam iam advenientem amplector te, et totum me tibi unio. Ne permittas me unquam a te separari. Amen.",
    ],
  },
  {
    id: "sao-miguel",
    nome: "São Miguel Arcanjo",
    latim: "Sancte Michael Archangele",
    grupo: "principais",
    pt: [
      "São Miguel Arcanjo, defendei-nos no combate; sede o nosso refúgio contra as maldades e ciladas do demônio.",
      "Ordene-lhe Deus, instantemente o pedimos; e vós, Príncipe da milícia celeste, pela virtude divina, precipitai no inferno a Satanás e aos outros espíritos malignos, que andam pelo mundo para perder as almas. Amém.",
    ],
    la: [
      "Sancte Michael Archangele, defende nos in proelio; contra nequitiam et insidias diaboli esto praesidium.",
      "Imperet illi Deus, supplices deprecamur: tuque, Princeps militiae caelestis, Satanam aliosque spiritus malignos, qui ad perditionem animarum pervagantur in mundo, divina virtute in infernum detrude. Amen.",
    ],
  },
  {
    id: "pelos-falecidos",
    nome: "Pelos falecidos",
    latim: "Requiem aeternam",
    grupo: "principais",
    pt: [
      { v: "Dai-lhes, Senhor, o eterno descanso,", r: "e brilhe para eles a luz perpétua." },
      { v: "Descansem em paz.", r: "Amém." },
    ],
    la: [
      { v: "Requiem aeternam dona eis, Domine,", r: "et lux perpetua luceat eis." },
      { v: "Requiescant in pace.", r: "Amen." },
    ],
  },
  {
    id: "salve-rainha",
    nome: "Salve-Rainha",
    latim: "Salve Regina",
    grupo: "marianas",
    pt: [
      "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas.",
      "Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria.",
      { v: "Rogai por nós, santa Mãe de Deus.", r: "Para que sejamos dignos das promessas de Cristo. Amém." },
    ],
    la: [
      "Salve, Regina, Mater misericordiae, vita, dulcedo, et spes nostra, salve. Ad te clamamus, exsules filii Hevae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle.",
      "Eia, ergo, advocata nostra, illos tuos misericordes oculos ad nos converte. Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, O pia, O dulcis Virgo Maria.",
      { v: "Ora pro nobis, sancta Dei Genetrix.", r: "Ut digni efficiamur promissionibus Christi. Amen." },
    ],
  },
  {
    id: "lembrai-vos",
    nome: "Lembrai-vos",
    latim: "Memorare",
    grupo: "marianas",
    pt: [
      "Lembrai-vos, ó piíssima Virgem Maria, que nunca se ouviu dizer que algum daqueles que têm recorrido à vossa proteção, implorado a vossa assistência e reclamado o vosso socorro, fosse por vós desamparado.",
      "Animado eu, pois, com igual confiança, a vós, ó Virgem entre todas singular, como a Mãe recorro, de vós me valho e, gemendo sob o peso dos meus pecados, me prostro aos vossos pés.",
      "Não rejeiteis as minhas súplicas, ó Mãe do Verbo de Deus humanado, mas dignai-vos de as ouvir propícia e de me alcançar o que vos rogo. Amém.",
    ],
    la: [
      "Memorare, O piissima Virgo Maria, non esse auditum a saeculo, quemquam ad tua currentem praesidia, tua implorantem auxilia, tua petentem suffragia, esse derelictum.",
      "Ego tali animatus confidentia, ad te, Virgo virginum, Mater, curro, ad te venio, coram te gemens peccator assisto.",
      "Noli, Mater Verbi, verba mea despicere; sed audi propitia et exaudi. Amen.",
    ],
  },
  {
    id: "sub-tuum",
    nome: "À vossa proteção",
    latim: "Sub tuum praesidium",
    grupo: "marianas",
    pt: [
      "À vossa proteção recorremos, santa Mãe de Deus; não desprezeis as nossas súplicas em nossas necessidades, mas livrai-nos sempre de todos os perigos, ó Virgem gloriosa e bendita. Amém.",
    ],
    la: [
      "Sub tuum praesidium confugimus, sancta Dei Genetrix. Nostras deprecationes ne despicias in necessitatibus, sed a periculis cunctis libera nos semper, Virgo gloriosa et benedicta. Amen.",
    ],
  },
  {
    id: "angelus",
    nome: "Ângelus",
    latim: "Angelus Domini",
    grupo: "marianas",
    pt: [
      { v: "O Anjo do Senhor anunciou a Maria.", r: "E ela concebeu do Espírito Santo." },
      { rezar: "ave-maria" },
      { v: "Eis aqui a serva do Senhor.", r: "Faça-se em mim segundo a vossa palavra." },
      { rezar: "ave-maria" },
      { v: "E o Verbo se fez carne.", r: "E habitou entre nós." },
      { rezar: "ave-maria" },
      { v: "Rogai por nós, santa Mãe de Deus.", r: "Para que sejamos dignos das promessas de Cristo." },
      "Oremos. Infundi, Senhor, nós vos pedimos, a vossa graça em nossas almas, para que nós, que pela anunciação do Anjo conhecemos a encarnação de Jesus Cristo, vosso Filho, por sua paixão e morte na cruz sejamos conduzidos à glória da ressurreição. Pelo mesmo Cristo, Senhor nosso. Amém.",
    ],
    la: [
      { v: "Angelus Domini nuntiavit Mariae.", r: "Et concepit de Spiritu Sancto." },
      { rezar: "ave-maria" },
      { v: "Ecce ancilla Domini.", r: "Fiat mihi secundum verbum tuum." },
      { rezar: "ave-maria" },
      { v: "Et Verbum caro factum est.", r: "Et habitavit in nobis." },
      { rezar: "ave-maria" },
      { v: "Ora pro nobis, sancta Dei Genetrix.", r: "Ut digni efficiamur promissionibus Christi." },
      "Oremus. Gratiam tuam, quaesumus, Domine, mentibus nostris infunde; ut qui, Angelo nuntiante, Christi Filii tui incarnationem cognovimus, per passionem eius et crucem ad resurrectionis gloriam perducamur. Per eundem Christum Dominum nostrum. Amen.",
    ],
  },
  {
    id: "regina-caeli",
    nome: "Rainha do Céu",
    latim: "Regina Caeli",
    grupo: "marianas",
    pt: [
      { v: "Rainha do céu, alegrai-vos, aleluia!", r: "Porque aquele que merecestes trazer em vosso seio, aleluia!" },
      { v: "Ressuscitou como disse, aleluia!", r: "Rogai a Deus por nós, aleluia!" },
      { v: "Exultai e alegrai-vos, ó Virgem Maria, aleluia!", r: "Porque o Senhor ressuscitou verdadeiramente, aleluia!" },
      "Oremos. Ó Deus, que vos dignastes alegrar o mundo com a ressurreição do vosso Filho, Nosso Senhor Jesus Cristo, concedei-nos, vos suplicamos, que, por sua Mãe, a Virgem Maria, alcancemos as alegrias da vida eterna. Pelo mesmo Cristo, Senhor nosso. Amém.",
    ],
    la: [
      { v: "Regina caeli, laetare, alleluia.", r: "Quia quem meruisti portare, alleluia." },
      { v: "Resurrexit, sicut dixit, alleluia.", r: "Ora pro nobis Deum, alleluia." },
      { v: "Gaude et laetare, Virgo Maria, alleluia.", r: "Quia surrexit Dominus vere, alleluia." },
      "Oremus. Deus, qui per resurrectionem Filii tui, Domini nostri Iesu Christi, mundum laetificare dignatus es: praesta, quaesumus, ut per eius Genetricem Virginem Mariam perpetuae capiamus gaudia vitae. Per eundem Christum Dominum nostrum. Amen.",
    ],
  },
  {
    id: "manha",
    nome: "Oração da manhã",
    latim: "Dirigere et sanctificare",
    grupo: "dia",
    pt: [
      "Dignai-vos, Senhor Deus, Rei do céu e da terra, dirigir e santificar, reger e governar hoje os nossos corações e os nossos corpos, os nossos sentidos, palavras e ações, na vossa lei e no cumprimento dos vossos mandamentos.",
      "Assim, aqui e por toda a eternidade, com o vosso auxílio, mereceremos ser salvos e livres, ó Salvador do mundo, que viveis e reinais pelos séculos dos séculos. Amém.",
    ],
    la: [
      "Dirigere et sanctificare, regere et gubernare dignare, Domine Deus, Rex caeli et terrae, hodie corda et corpora nostra, sensus, sermones et actus nostros in lege tua, et in operibus mandatorum tuorum:",
      "ut hic et in aeternum, te auxiliante, salvi et liberi esse mereamur, Salvator mundi: qui vivis et regnas in saecula saeculorum. Amen.",
    ],
  },
  {
    id: "noite",
    nome: "Oração da noite",
    latim: "Visita, quaesumus",
    grupo: "dia",
    pt: [
      { v: "Em vossas mãos, Senhor, entrego o meu espírito.", r: "Vós nos remistes, Senhor, Deus da verdade." },
      "Visitai, Senhor, nós vos pedimos, esta casa, e afastai para longe dela todas as ciladas do inimigo. Habitem nela os vossos santos Anjos, que nos guardem em paz, e esteja sempre sobre nós a vossa bênção. Por Cristo, Senhor nosso. Amém.",
    ],
    la: [
      { v: "In manus tuas, Domine, commendo spiritum meum.", r: "Redemisti nos, Domine, Deus veritatis." },
      "Visita, quaesumus, Domine, habitationem istam, et omnes insidias inimici ab ea longe repelle: Angeli tui sancti habitent in ea, qui nos in pace custodiant; et benedictio tua sit super nos semper. Per Christum Dominum nostrum. Amen.",
    ],
  },
  {
    id: "antes-das-refeicoes",
    nome: "Antes das refeições",
    latim: "Benedic, Domine",
    grupo: "dia",
    pt: ["Abençoai-nos, Senhor, a nós e a estes dons que da vossa bondade vamos receber. Por Cristo, Senhor nosso. Amém."],
    la: ["Benedic, Domine, nos et haec tua dona, quae de tua largitate sumus sumpturi. Per Christum Dominum nostrum. Amen."],
  },
  {
    id: "depois-das-refeicoes",
    nome: "Depois das refeições",
    latim: "Agimus tibi gratias",
    grupo: "dia",
    pt: ["Nós vos damos graças, Deus todo-poderoso, por todos os vossos benefícios, vós que viveis e reinais pelos séculos dos séculos. Amém."],
    la: ["Agimus tibi gratias, omnipotens Deus, pro universis beneficiis tuis: qui vivis et regnas in saecula saeculorum. Amen."],
  },
  {
    id: "ladainha-de-nossa-senhora",
    nome: "Ladainha de Nossa Senhora",
    latim: "Litaniae Lauretanae",
    grupo: "ladainhas",
    pt: [
      ...KYRIE_PT,
      {
        invocacoes: [
          "Santa Maria",
          "Santa Mãe de Deus",
          "Santa Virgem das virgens",
          "Mãe de Cristo",
          "Mãe da Igreja",
          "Mãe de misericórdia",
          "Mãe da divina graça",
          "Mãe da esperança",
          "Mãe puríssima",
          "Mãe castíssima",
          "Mãe imaculada",
          "Mãe intemerata",
          "Mãe amável",
          "Mãe admirável",
          "Mãe do bom conselho",
          "Mãe do Criador",
          "Mãe do Salvador",
          "Virgem prudentíssima",
          "Virgem venerável",
          "Virgem louvável",
          "Virgem poderosa",
          "Virgem clemente",
          "Virgem fiel",
          "Espelho de justiça",
          "Sede da sabedoria",
          "Causa da nossa alegria",
          "Vaso espiritual",
          "Vaso digno de honra",
          "Vaso insigne de devoção",
          "Rosa mística",
          "Torre de Davi",
          "Torre de marfim",
          "Casa de ouro",
          "Arca da aliança",
          "Porta do céu",
          "Estrela da manhã",
          "Saúde dos enfermos",
          "Refúgio dos pecadores",
          "Conforto dos migrantes",
          "Consoladora dos aflitos",
          "Auxílio dos cristãos",
          "Rainha dos Anjos",
          "Rainha dos Patriarcas",
          "Rainha dos Profetas",
          "Rainha dos Apóstolos",
          "Rainha dos Mártires",
          "Rainha dos Confessores",
          "Rainha das Virgens",
          "Rainha de todos os Santos",
          "Rainha concebida sem pecado original",
          "Rainha elevada ao céu",
          "Rainha do sacratíssimo Rosário",
          "Rainha da família",
          "Rainha da paz",
        ],
        resposta: "rogai por nós.",
      },
      ...AGNUS_PT,
      { v: "Rogai por nós, santa Mãe de Deus.", r: "Para que sejamos dignos das promessas de Cristo." },
      "Oremos. Senhor Deus, nós vos suplicamos que concedais aos vossos servos perpétua saúde de alma e de corpo; e que, pela gloriosa intercessão da bem-aventurada sempre Virgem Maria, sejamos livres da presente tristeza e gozemos da eterna alegria. Por Cristo, Senhor nosso. Amém.",
    ],
    la: [
      ...KYRIE_LA,
      {
        invocacoes: [
          "Sancta Maria",
          "Sancta Dei Genetrix",
          "Sancta Virgo virginum",
          "Mater Christi",
          "Mater Ecclesiae",
          "Mater misericordiae",
          "Mater divinae gratiae",
          "Mater spei",
          "Mater purissima",
          "Mater castissima",
          "Mater inviolata",
          "Mater intemerata",
          "Mater amabilis",
          "Mater admirabilis",
          "Mater boni consilii",
          "Mater Creatoris",
          "Mater Salvatoris",
          "Virgo prudentissima",
          "Virgo veneranda",
          "Virgo praedicanda",
          "Virgo potens",
          "Virgo clemens",
          "Virgo fidelis",
          "Speculum iustitiae",
          "Sedes sapientiae",
          "Causa nostrae laetitiae",
          "Vas spirituale",
          "Vas honorabile",
          "Vas insigne devotionis",
          "Rosa mystica",
          "Turris Davidica",
          "Turris eburnea",
          "Domus aurea",
          "Foederis arca",
          "Ianua caeli",
          "Stella matutina",
          "Salus infirmorum",
          "Refugium peccatorum",
          "Solacium migrantium",
          "Consolatrix afflictorum",
          "Auxilium christianorum",
          "Regina Angelorum",
          "Regina Patriarcharum",
          "Regina Prophetarum",
          "Regina Apostolorum",
          "Regina Martyrum",
          "Regina Confessorum",
          "Regina Virginum",
          "Regina Sanctorum omnium",
          "Regina sine labe originali concepta",
          "Regina in caelum assumpta",
          "Regina sacratissimi Rosarii",
          "Regina familiae",
          "Regina pacis",
        ],
        resposta: "ora pro nobis.",
      },
      ...AGNUS_LA,
      { v: "Ora pro nobis, sancta Dei Genetrix.", r: "Ut digni efficiamur promissionibus Christi." },
      "Oremus. Concede nos famulos tuos, quaesumus, Domine Deus, perpetua mentis et corporis sanitate gaudere: et gloriosa beatae Mariae semper Virginis intercessione, a praesenti liberari tristitia, et aeterna perfrui laetitia. Per Christum Dominum nostrum. Amen.",
    ],
  },
  {
    id: "ladainha-do-sagrado-coracao",
    nome: "Ladainha do Sagrado Coração de Jesus",
    latim: "Litaniae Sacratissimi Cordis Iesu",
    grupo: "ladainhas",
    pt: [
      ...KYRIE_PT,
      {
        invocacoes: [
          "Coração de Jesus, Filho do Pai eterno",
          "Coração de Jesus, formado pelo Espírito Santo no seio da Virgem Mãe",
          "Coração de Jesus, unido substancialmente ao Verbo de Deus",
          "Coração de Jesus, de majestade infinita",
          "Coração de Jesus, templo santo de Deus",
          "Coração de Jesus, tabernáculo do Altíssimo",
          "Coração de Jesus, casa de Deus e porta do céu",
          "Coração de Jesus, fornalha ardente de caridade",
          "Coração de Jesus, receptáculo de justiça e de amor",
          "Coração de Jesus, cheio de bondade e de amor",
          "Coração de Jesus, abismo de todas as virtudes",
          "Coração de Jesus, digníssimo de todo louvor",
          "Coração de Jesus, rei e centro de todos os corações",
          "Coração de Jesus, no qual estão todos os tesouros da sabedoria e da ciência",
          "Coração de Jesus, no qual habita toda a plenitude da divindade",
          "Coração de Jesus, no qual o Pai pôs as suas complacências",
          "Coração de Jesus, de cuja plenitude todos nós recebemos",
          "Coração de Jesus, desejado das colinas eternas",
          "Coração de Jesus, paciente e de muita misericórdia",
          "Coração de Jesus, rico para todos os que vos invocam",
          "Coração de Jesus, fonte de vida e de santidade",
          "Coração de Jesus, propiciação pelos nossos pecados",
          "Coração de Jesus, saturado de opróbrios",
          "Coração de Jesus, esmagado de dor por causa dos nossos crimes",
          "Coração de Jesus, feito obediente até à morte",
          "Coração de Jesus, transpassado pela lança",
          "Coração de Jesus, fonte de toda a consolação",
          "Coração de Jesus, nossa vida e ressurreição",
          "Coração de Jesus, nossa paz e reconciliação",
          "Coração de Jesus, vítima dos pecadores",
          "Coração de Jesus, salvação dos que em vós esperam",
          "Coração de Jesus, esperança dos que morrem em vós",
          "Coração de Jesus, delícia de todos os santos",
        ],
        resposta: "tende piedade de nós.",
      },
      ...AGNUS_PT,
      { v: "Jesus, manso e humilde de coração,", r: "fazei o nosso coração semelhante ao vosso." },
      "Oremos. Deus todo-poderoso e eterno, olhai para o Coração do vosso diletíssimo Filho e para os louvores e satisfações que ele, em nome dos pecadores, vos oferece; e aos que imploram a vossa misericórdia concedei benigno o perdão, em nome do mesmo vosso Filho, Jesus Cristo, que convosco vive e reina pelos séculos dos séculos. Amém.",
    ],
    la: [
      ...KYRIE_LA,
      {
        invocacoes: [
          "Cor Iesu, Filii Patris aeterni",
          "Cor Iesu, in sinu Virginis Matris a Spiritu Sancto formatum",
          "Cor Iesu, Verbo Dei substantialiter unitum",
          "Cor Iesu, maiestatis infinitae",
          "Cor Iesu, templum Dei sanctum",
          "Cor Iesu, tabernaculum Altissimi",
          "Cor Iesu, domus Dei et porta caeli",
          "Cor Iesu, fornax ardens caritatis",
          "Cor Iesu, iustitiae et amoris receptaculum",
          "Cor Iesu, bonitate et amore plenum",
          "Cor Iesu, virtutum omnium abyssus",
          "Cor Iesu, omni laude dignissimum",
          "Cor Iesu, rex et centrum omnium cordium",
          "Cor Iesu, in quo sunt omnes thesauri sapientiae et scientiae",
          "Cor Iesu, in quo habitat omnis plenitudo divinitatis",
          "Cor Iesu, in quo Pater sibi bene complacuit",
          "Cor Iesu, de cuius plenitudine omnes nos accepimus",
          "Cor Iesu, desiderium collium aeternorum",
          "Cor Iesu, patiens et multae misericordiae",
          "Cor Iesu, dives in omnes qui invocant te",
          "Cor Iesu, fons vitae et sanctitatis",
          "Cor Iesu, propitiatio pro peccatis nostris",
          "Cor Iesu, saturatum opprobriis",
          "Cor Iesu, attritum propter scelera nostra",
          "Cor Iesu, usque ad mortem oboediens factum",
          "Cor Iesu, lancea perforatum",
          "Cor Iesu, fons totius consolationis",
          "Cor Iesu, vita et resurrectio nostra",
          "Cor Iesu, pax et reconciliatio nostra",
          "Cor Iesu, victima peccatorum",
          "Cor Iesu, salus in te sperantium",
          "Cor Iesu, spes in te morientium",
          "Cor Iesu, deliciae Sanctorum omnium",
        ],
        resposta: "miserere nobis.",
      },
      ...AGNUS_LA,
      { v: "Iesu, mitis et humilis Corde,", r: "fac cor nostrum secundum Cor tuum." },
      "Oremus. Omnipotens sempiterne Deus, respice in Cor dilectissimi Filii tui et in laudes et satisfactiones, quas in nomine peccatorum tibi persolvit, iisque misericordiam tuam petentibus tu veniam concede placatus, in nomine eiusdem Filii tui Iesu Christi, qui tecum vivit et regnat in saecula saeculorum. Amen.",
    ],
  },
  {
    id: "ladainha-de-sao-jose",
    nome: "Ladainha de São José",
    latim: "Litaniae Sancti Ioseph",
    grupo: "ladainhas",
    pt: [
      ...KYRIE_PT,
      {
        invocacoes: [
          "Santa Maria",
          "São José",
          "Ilustre filho de Davi",
          "Luz dos Patriarcas",
          "Esposo da Mãe de Deus",
          "Guardião do Redentor",
          "Casto guarda da Virgem",
          "Sustentador do Filho de Deus",
          "Zeloso defensor de Cristo",
          "Servo de Cristo",
          "Ministro da salvação",
          "Chefe da Sagrada Família",
          "José justíssimo",
          "José castíssimo",
          "José prudentíssimo",
          "José fortíssimo",
          "José obedientíssimo",
          "José fidelíssimo",
          "Espelho de paciência",
          "Amante da pobreza",
          "Modelo dos operários",
          "Glória da vida doméstica",
          "Guarda das virgens",
          "Sustentáculo das famílias",
          "Amparo nas dificuldades",
          "Consolo dos infelizes",
          "Esperança dos doentes",
          "Padroeiro dos exilados",
          "Padroeiro dos aflitos",
          "Padroeiro dos pobres",
          "Padroeiro dos moribundos",
          "Terror dos demônios",
          "Protetor da santa Igreja",
        ],
        resposta: "rogai por nós.",
      },
      ...AGNUS_PT,
      { v: "Ele o constituiu senhor da sua casa.", r: "E príncipe de todos os seus bens." },
      "Oremos. Ó Deus, que, por inefável providência, vos dignastes escolher São José para esposo de vossa Mãe santíssima, concedei-nos que, venerando-o como protetor na terra, mereçamos tê-lo como intercessor no céu. Vós que viveis e reinais pelos séculos dos séculos. Amém.",
    ],
    la: [
      ...KYRIE_LA,
      {
        invocacoes: [
          "Sancta Maria",
          "Sancte Ioseph",
          "Proles David inclyta",
          "Lumen Patriarcharum",
          "Dei Genetricis Sponse",
          "Custos Redemptoris",
          "Custos pudice Virginis",
          "Filii Dei nutritie",
          "Christi defensor sedule",
          "Serve Christi",
          "Minister salutis",
          "Almae Familiae praeses",
          "Ioseph iustissime",
          "Ioseph castissime",
          "Ioseph prudentissime",
          "Ioseph fortissime",
          "Ioseph oboedientissime",
          "Ioseph fidelissime",
          "Speculum patientiae",
          "Amator paupertatis",
          "Exemplar opificum",
          "Domesticae vitae decus",
          "Custos virginum",
          "Familiarum columen",
          "Fulcimen in difficultatibus",
          "Solatium miserorum",
          "Spes aegrotantium",
          "Patrone exsulum",
          "Patrone afflictorum",
          "Patrone pauperum",
          "Patrone morientium",
          "Terror daemonum",
          "Protector sanctae Ecclesiae",
        ],
        resposta: "ora pro nobis.",
      },
      ...AGNUS_LA,
      { v: "Constituit eum dominum domus suae.", r: "Et principem omnis possessionis suae." },
      "Oremus. Deus, qui ineffabili providentia beatum Ioseph sanctissimae Genetricis tuae Sponsum eligere dignatus es: praesta, quaesumus, ut quem protectorem veneramur in terris, intercessorem habere mereamur in caelis. Qui vivis et regnas in saecula saeculorum. Amen.",
    ],
  },
  {
    id: "fatima",
    nome: "Oração de Fátima",
    latim: "O mi Iesu",
    grupo: "terco",
    pt: [
      "Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno; levai as almas todas para o céu e socorrei principalmente as que mais precisarem.",
    ],
    la: [
      "O mi Iesu, dimitte nobis debita nostra, libera nos ab igne inferni, conduc in caelum omnes animas, praesertim illas quae maxime indigent misericordia tua.",
    ],
  },
  {
    id: "oracao-do-rosario",
    nome: "Oração do Rosário",
    latim: "Deus, cuius Unigenitus",
    grupo: "terco",
    pt: [
      { v: "Rogai por nós, santa Mãe de Deus.", r: "Para que sejamos dignos das promessas de Cristo." },
      "Oremos. Ó Deus, cujo Filho unigênito, por sua vida, morte e ressurreição, nos alcançou o prêmio da salvação eterna, concedei-nos, nós vos pedimos, que, meditando estes mistérios no santo Rosário da Virgem Maria, imitemos o que contêm e alcancemos o que prometem. Pelo mesmo Cristo, Senhor nosso. Amém.",
    ],
    la: [
      { v: "Ora pro nobis, sancta Dei Genetrix.", r: "Ut digni efficiamur promissionibus Christi." },
      "Oremus. Deus, cuius Unigenitus per vitam, mortem et resurrectionem suam nobis salutis aeternae praemia comparavit: concede, quaesumus, ut haec mysteria sacratissimo beatae Mariae Virginis Rosario recolentes, et imitemur quod continent, et quod promittunt assequamur. Per eundem Christum Dominum nostrum. Amen.",
    ],
  },
  {
    id: "oferecimento-do-terco",
    nome: "Oferecimento",
    latim: "",
    grupo: "terco",
    lista: false,
    pt: [
      "Divino Jesus, nós vos oferecemos este terço que vamos rezar, meditando nos mistérios da nossa redenção.",
      "Concedei-nos, pela intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes necessárias para rezá-lo bem e a graça de alcançar as indulgências desta santa devoção.",
    ],
  },
  {
    id: "agradecimento-do-terco",
    nome: "Agradecimento",
    latim: "",
    grupo: "terco",
    lista: false,
    pt: [
      "Infinitas graças vos damos, soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos generosas.",
      "Dignai-vos, agora e para sempre, tomar-nos debaixo do vosso poderoso amparo, e, para mais vos obrigar, vos saudamos com uma Salve-Rainha.",
    ],
  },
  {
    id: "eterno-pai",
    nome: "Eterno Pai",
    latim: "Pater aeterne",
    grupo: "terco",
    lista: false,
    pt: [
      "Eterno Pai, eu vos ofereço o Corpo e o Sangue, a Alma e a Divindade de vosso diletíssimo Filho, Nosso Senhor Jesus Cristo, em expiação dos nossos pecados e dos do mundo inteiro.",
    ],
    la: [
      "Pater aeterne, offero tibi Corpus et Sanguinem, Animam et Divinitatem dilectissimi Filii tui, Domini nostri Iesu Christi, in propitiationem pro peccatis nostris et totius mundi.",
    ],
  },
  {
    id: "dolorosa-paixao",
    nome: "Pela sua dolorosa Paixão",
    latim: "Pro dolorosa eius Passione",
    grupo: "terco",
    lista: false,
    pt: [{ v: "Pela sua dolorosa Paixão,", r: "tende misericórdia de nós e do mundo inteiro." }],
    la: [{ v: "Pro dolorosa eius Passione,", r: "miserere nobis et totius mundi." }],
  },
  {
    id: "deus-santo",
    nome: "Deus Santo",
    latim: "Sanctus Deus",
    grupo: "terco",
    lista: false,
    pt: [{ v: "Deus Santo, Deus Forte, Deus Imortal,", r: "tende piedade de nós e do mundo inteiro." }],
    la: [{ v: "Sanctus Deus, Sanctus Fortis, Sanctus Immortalis,", r: "miserere nobis et totius mundi." }],
  },
  {
    id: "jesus-eu-confio",
    nome: "Jesus, eu confio em vós",
    latim: "Iesu, in te confido",
    grupo: "terco",
    lista: false,
    pt: ["Jesus, eu confio em vós."],
    la: ["Iesu, in te confido."],
  },
  {
    id: "deus-vinde",
    nome: "Deus, vinde em nosso auxílio",
    latim: "Deus, in adiutorium",
    grupo: "terco",
    lista: false,
    pt: [{ v: "Deus, vinde em nosso auxílio.", r: "Senhor, apressai-vos em socorrer-nos." }],
    la: [{ v: "Deus, in adiutorium nostrum intende.", r: "Domine, ad adiuvandum nos festina." }],
  },
  ...(
    [
      ["Serafins", "nos torne dignos de arder no fogo da perfeita caridade"],
      ["Querubins", "nos dê a graça de abandonar o caminho do pecado e seguir o da perfeição cristã"],
      ["Tronos", "derrame em nossos corações o espírito de verdadeira e sincera humildade"],
      ["Dominações", "nos dê a graça de dominar os nossos sentidos e corrigir as nossas más inclinações"],
      ["Potestades", "se digne proteger as nossas almas contra as ciladas e tentações do demônio"],
      ["Virtudes", "não nos deixe cair em tentação, mas nos livre de todo mal"],
      ["Principados", "encha as nossas almas do espírito de verdadeira e sincera obediência"],
      ["Arcanjos", "nos conceda a perseverança na fé e nas boas obras, para chegarmos à glória do Paraíso"],
      ["Anjos", "nos conceda ser guardados por eles nesta vida mortal e conduzidos por eles à glória do céu"],
    ] as const
  ).map(
    ([coro, pedido], i): Oracao => ({
      id: `saudacao-${i + 1}`,
      nome: `${i + 1}ª saudação: ${coro}`,
      latim: "",
      grupo: "terco",
      lista: false,
      pt: [
        `Pela intercessão de São Miguel e do coro celeste dos ${coro}, o Senhor ${pedido}. Amém.`,
      ],
    }),
  ),
  {
    id: "antifona-de-sao-miguel",
    nome: "Antífona",
    latim: "",
    grupo: "terco",
    lista: false,
    pt: [
      "Gloriosíssimo São Miguel, chefe e príncipe dos exércitos celestes, fiel guardião das almas, vencedor dos espíritos rebeldes, servidor da casa do Rei divino e nosso admirável guia, que brilhais em excelência e virtude: livrai de todo mal a nós que recorremos a vós com confiança, e fazei, por vossa incomparável proteção, que avancemos cada dia na fidelidade a Deus.",
      { v: "Rogai por nós, ó bem-aventurado São Miguel, Príncipe da Igreja de Cristo.", r: "Para que sejamos dignos das suas promessas." },
    ],
  },
  {
    id: "oracao-final-de-sao-miguel",
    nome: "Oração final",
    latim: "",
    grupo: "terco",
    lista: false,
    pt: [
      "Oremos. Deus todo-poderoso e eterno, que, por um prodígio de bondade e misericórdia, para a salvação de todos os homens, escolhestes o glorioso Arcanjo São Miguel como Príncipe da vossa Igreja, tornai-nos dignos, nós vos pedimos, de ser livres de todos os nossos inimigos por sua benéfica proteção.",
      "Que na hora da nossa morte nenhum deles nos possa perturbar, e que sejamos conduzidos por ele à presença da vossa excelsa e divina Majestade. Pelos méritos de Jesus Cristo, Nosso Senhor. Amém.",
    ],
  },
];

export const ORACOES: Record<string, Oracao> = Object.fromEntries(LISTA.map((o) => [o.id, o]));

export const oracao = (id: string): Oracao => {
  const o = ORACOES[id];
  if (!o) throw new Error(`Oração desconhecida: ${id}`);
  return o;
};

export const ORACOES_DA_LISTA = LISTA.filter((o) => o.lista !== false);

export const ehTempoPascal = (tempo: Tempo) => tempo === "pascoa";

export function oracoesDoTempo(tempo: Tempo): Oracao[] {
  const pascal = ehTempoPascal(tempo);
  return ORACOES_DA_LISTA.filter((o) => (pascal ? o.id !== "angelus" : true));
}

const normalizar = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();

const textoCorrido = (linhas: Linha[] = []) =>
  linhas
    .map((l) =>
      typeof l === "string" ? l : "v" in l ? `${l.v} ${l.r}` : "invocacoes" in l ? `${l.invocacoes.join(" ")} ${l.resposta}` : "",
    )
    .join(" ");

export function buscarOracoes(lista: Oracao[], termo: string): Oracao[] {
  const palavras = normalizar(termo).split(/\s+/).filter(Boolean);
  if (!palavras.length) return lista;
  const contem = (texto: string) => palavras.every((p) => texto.includes(p));
  const noTitulo = lista.filter((o) => contem(normalizar(`${o.nome} ${o.latim}`)));
  const noTexto = lista.filter(
    (o) => !noTitulo.includes(o) && contem(normalizar(`${textoCorrido(o.pt)} ${textoCorrido(o.la)}`)),
  );
  return [...noTitulo, ...noTexto];
}

export const todosOsTextos = (o: Oracao): string[] =>
  [o.nome, o.latim, textoCorrido(o.pt), textoCorrido(o.la)].filter(Boolean);
