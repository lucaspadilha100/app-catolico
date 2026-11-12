import type { OracaoDoDevocionario } from "./tipos";

const ORACOES: OracaoDoDevocionario[] = [
  {
    id: "actiones-nostras",
    nome: "Dirigi, Senhor, as nossas ações",
    latim: "Actiones nostras",
    fonte: "tradicional",
    origem: "Oração antiga do Missal, tradução da equipe do app",
    pt: [
      "Nós vos pedimos, Senhor: antecipai com a vossa inspiração as nossas ações e acompanhai-as com o vosso auxílio, para que toda a nossa oração e todo o nosso trabalho comecem sempre por vós e, começados por vós, em vós se concluam. Por Cristo, nosso Senhor. Amém.",
    ],
    la: [
      "Actiones nostras, quaesumus, Domine, aspirando praeveni et adiuvando prosequere, ut cuncta nostra oratio et operatio a te semper incipiat et per te coepta finiatur. Per Christum Dominum nostrum. Amen.",
    ],
  },
  {
    id: "pange-lingua",
    nome: "Pange lingua",
    latim: "Pange, lingua, gloriosi",
    fonte: "tradicional",
    origem: "Hino de São Tomás de Aquino, tradução da equipe do app",
    pt: [
      "Canta, ó língua, o mistério do corpo glorioso e do precioso sangue que o Rei das nações, fruto de um ventre generoso, derramou como resgate do mundo.",
      "Dado a nós, nascido para nós de uma Virgem intacta, ele viveu no mundo espalhando a semente da palavra, e encerrou de modo admirável o tempo da sua morada entre nós.",
      "Na noite da última ceia, reclinado à mesa com os irmãos, cumprida plenamente a lei quanto aos alimentos prescritos, deu-se com as próprias mãos em alimento ao grupo dos Doze.",
      "O Verbo feito carne, com a sua palavra, converte o pão verdadeiro na sua carne, e o vinho torna-se o sangue de Cristo. E se os sentidos não o percebem, basta a fé sincera para firmar o coração.",
      "Adoremos, pois, prostrados tão grande Sacramento. Ceda o antigo rito ao novo mistério, e supra a fé a fraqueza dos sentidos.",
      "Ao Pai e ao Filho sejam dados louvor e júbilo, saudação, honra, poder e bênção. E ao que procede de ambos seja dado igual louvor. Amém.",
    ],
    la: [
      "Pange, lingua, gloriosi Corporis mysterium, Sanguinisque pretiosi, quem in mundi pretium fructus ventris generosi Rex effudit gentium.",
      "Nobis datus, nobis natus ex intacta Virgine, et in mundo conversatus, sparso verbi semine, sui moras incolatus miro clausit ordine.",
      "In supremae nocte cenae recumbens cum fratribus, observata lege plene cibis in legalibus, cibum turbae duodenae se dat suis manibus.",
      "Verbum caro panem verum verbo carnem efficit, fitque sanguis Christi merum; et si sensus deficit, ad firmandum cor sincerum sola fides sufficit.",
      "Tantum ergo Sacramentum veneremur cernui, et antiquum documentum novo cedat ritui; praestet fides supplementum sensuum defectui.",
      "Genitori Genitoque laus et iubilatio, salus, honor, virtus quoque sit et benedictio; procedenti ab utroque compar sit laudatio. Amen.",
    ],
  },
  {
    id: "oracao-da-medalha-de-sao-bento",
    nome: "Oração da medalha de São Bento",
    latim: "Crux sacra sit mihi lux",
    fonte: "tradicional",
    origem: "Inscrições da medalha de São Bento, tradução da equipe do app",
    pt: [
      "A cruz sagrada seja a minha luz. Não seja o dragão o meu guia.",
      "Retira-te, satanás. Nunca me aconselhes coisas vãs. É mau o que me ofereces. Bebe tu mesmo o teu veneno.",
    ],
    la: [
      "Crux sacra sit mihi lux. Non draco sit mihi dux.",
      "Vade retro, satana. Numquam suade mihi vana. Sunt mala quae libas. Ipse venena bibas.",
    ],
  },
  {
    id: "requiem-aeternam",
    nome: "Descanso eterno",
    latim: "Requiem aeternam",
    fonte: "tradicional",
    origem: "Oração tradicional pelos falecidos",
    pt: [
      "Dai-lhes, Senhor, o descanso eterno, e brilhe para eles a luz perpétua.",
      "Descansem em paz. Amém.",
    ],
    la: [
      "Requiem aeternam dona eis, Domine, et lux perpetua luceat eis.",
      "Requiescant in pace. Amen.",
    ],
  },
  {
    id: "adsumus",
    nome: "Diante de vós, Espírito Santo",
    latim: "Adsumus, Domine Sancte Spiritus",
    fonte: "tradicional",
    origem: "Oração antiga dos concílios, tradução da equipe do app",
    pt: [
      "Eis-nos aqui, Senhor Espírito Santo. Eis-nos aqui com o peso dos nossos pecados, mas reunidos especialmente em vosso nome. Vinde a nós, ficai conosco, dignai-vos penetrar os nossos corações.",
      "Ensinai-nos o que devemos fazer e por onde devemos caminhar, e mostrai-nos o que devemos realizar, para que, com o vosso auxílio, possamos agradar-vos em tudo.",
      "Não permitais que perturbemos a justiça, vós que amais a suma equidade. Que a ignorância não nos desvie, o favor não nos dobre, nem presente algum nos corrompa.",
      "Uni-nos a vós eficazmente só com o dom da vossa graça, para que sejamos um em vós e em nada nos afastemos da verdade. Amém.",
    ],
    la: [
      "Adsumus, Domine Sancte Spiritus, adsumus peccati quidem immanitate detenti, sed in nomine tuo specialiter congregati. Veni ad nos et esto nobiscum, et dignare illabi cordibus nostris.",
      "Doce nos quid agamus, quo gradiamur, et ostende quid efficere debeamus, ut, te auxiliante, tibi in omnibus placere valeamus.",
      "Non nos patiaris perturbatores esse iustitiae, qui summam diligis aequitatem. Non in sinistrum nos ignorantia trahat, non favor inflectat, non acceptio muneris vel personae corrumpat.",
      "Sed iunge nos tibi efficaciter solius tuae gratiae dono, ut simus in te unum et in nullo deviemus a vero. Amen.",
    ],
  },
];

export default ORACOES;
