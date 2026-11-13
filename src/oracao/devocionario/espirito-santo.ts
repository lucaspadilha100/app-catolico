import type { OracaoDoDevocionario } from "./tipos";

const ORACOES: OracaoDoDevocionario[] = [
  {
    id: "sequencia-de-pentecostes",
    nome: "Sequência de Pentecostes",
    latim: "Veni, Sancte Spiritus",
    fonte: "tradicional",
    origem: "Sequência da Missa de Pentecostes, atribuída a Estêvão Langton (século XIII). Tradução da equipe do app",
    pt: [
      "Vinde, Espírito Santo, e enviai do céu um raio da vossa luz.",
      "Vinde, pai dos pobres; vinde, doador dos dons; vinde, luz dos corações.",
      "Consolador excelente, doce hóspede da alma, doce alívio.",
      "No trabalho sois descanso, no calor sois frescor, no pranto sois consolo.",
      "Ó luz felicíssima, enchei o íntimo do coração dos vossos fiéis.",
      "Sem o vosso poder, nada há no homem, nada que seja sem culpa.",
      "Lavai o que está manchado, regai o que está seco, curai o que está ferido.",
      "Dobrai o que está rígido, aquecei o que está frio, endireitai o que está desviado.",
      "Dai aos vossos fiéis, que em vós confiam, os vossos sete dons sagrados.",
      "Dai o mérito da virtude, dai o termo feliz da salvação, dai a alegria que não acaba. Amém. Aleluia.",
    ],
    la: [
      "Veni, Sancte Spiritus, et emitte caelitus lucis tuae radium.",
      "Veni, pater pauperum, veni, dator munerum, veni, lumen cordium.",
      "Consolator optime, dulcis hospes animae, dulce refrigerium.",
      "In labore requies, in aestu temperies, in fletu solacium.",
      "O lux beatissima, reple cordis intima tuorum fidelium.",
      "Sine tuo numine, nihil est in homine, nihil est innoxium.",
      "Lava quod est sordidum, riga quod est aridum, sana quod est saucium.",
      "Flecte quod est rigidum, fove quod est frigidum, rege quod est devium.",
      "Da tuis fidelibus, in te confidentibus, sacrum septenarium.",
      "Da virtutis meritum, da salutis exitum, da perenne gaudium. Amen. Alleluia.",
    ],
  },
  {
    id: "respirai-em-mim-espirito-santo",
    nome: "Respirai em mim, ó Espírito Santo",
    fonte: "tradicional",
    origem: "Oração tradicional. Tradução da equipe do app",
    pt: [
      "Respirai em mim, ó Espírito Santo, para que os meus pensamentos sejam santos.",
      "Agi em mim, ó Espírito Santo, para que o meu trabalho seja santo.",
      "Atraí o meu coração, ó Espírito Santo, para que eu ame só o que é santo.",
      "Fortalecei-me, ó Espírito Santo, para que eu defenda o que é santo.",
      "Guardai-me, ó Espírito Santo, para que eu nunca perca o que é santo. Amém.",
    ],
  },
  {
    id: "espirito-santo-alma-da-minha-alma",
    nome: "Ó Espírito Santo, alma da minha alma",
    fonte: "tradicional",
    origem: "Cardeal Désiré Mercier, arcebispo de Malines (1851-1926). Tradução da equipe do app",
    pt: [
      "Ó Espírito Santo, alma da minha alma, eu vos adoro. Iluminai-me, guiai-me, fortalecei-me, consolai-me. Dizei-me o que devo fazer; dai-me as vossas ordens.",
      "Prometo submeter-me a tudo o que quiserdes de mim e aceitar tudo o que permitirdes que me aconteça. Fazei-me somente conhecer a vossa vontade. Amém.",
    ],
  },
  {
    id: "pedido-dos-sete-dons",
    nome: "Pedido dos sete dons",
    fonte: "tradicional",
    origem: "Oração tradicional do século XIX; os sete dons segundo o Catecismo (CIC 1831). Tradução da equipe do app",
    pt: [
      "Senhor Jesus Cristo, que, antes de subir ao céu, prometestes enviar o Espírito Santo para completar a vossa obra nas almas dos Apóstolos e discípulos, dignai-vos conceder também a mim o mesmo Espírito Santo, para que ele aperfeiçoe na minha alma a obra da vossa graça e do vosso amor.",
      "Dai-me o espírito de sabedoria, para que eu despreze as coisas que passam e aspire só às eternas; o espírito de entendimento, para que a luz da vossa verdade ilumine a minha mente; o espírito de conselho, para que eu escolha sempre o caminho mais seguro de agradar a Deus e chegar ao céu;",
      "o espírito de fortaleza, para que eu leve a minha cruz convosco e vença com coragem tudo o que se opõe à minha salvação; o espírito de ciência, para que eu conheça a Deus e a mim mesmo e cresça na ciência dos santos;",
      "o espírito de piedade, para que o serviço de Deus me seja doce e amável; e o espírito de temor de Deus, para que eu tenha por ele uma reverência cheia de amor e tema desagradá-lo em qualquer coisa.",
      "Marcai-me, Senhor, com o sinal dos vossos verdadeiros discípulos e animai-me em tudo com o vosso Espírito. Amém.",
    ],
  },
  {
    id: "consagracao-ao-espirito-santo",
    nome: "Consagração ao Espírito Santo",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "Espírito Santo, Senhor que dais a vida, que procedeis do Pai e do Filho e com o Pai e o Filho sois adorado e glorificado, eu me consagro a vós.",
      "Recebi-vos no Batismo e na Crisma; sou templo vosso. Tomai posse do meu entendimento, para que eu conheça a verdade; da minha vontade, para que eu a cumpra; do meu coração, para que eu ame a Deus e ao próximo.",
      "Não permitais que eu vos entristeça com o pecado. Fazei crescer em mim os vossos frutos e tornai-me dócil às vossas inspirações, como foi a Virgem Maria, vossa esposa. Amém.",
    ],
  },
  {
    id: "pelos-frutos-do-espirito-santo",
    nome: "Pelos frutos do Espírito Santo",
    fonte: "propria",
    origem: "Texto da equipe do app; os frutos segundo o Catecismo (CIC 1832)",
    pt: [
      "Vinde, Espírito Santo, e fazei que a minha vida dê os vossos frutos: caridade, alegria, paz, paciência, longanimidade, bondade, benignidade, mansidão, fidelidade, modéstia, continência e castidade.",
      "Onde há em mim egoísmo, ponde amor; onde há tristeza, alegria; onde há inquietação, paz. Que os outros, convivendo comigo, sintam a vossa presença. Amém.",
    ],
  },
];

export default ORACOES;
