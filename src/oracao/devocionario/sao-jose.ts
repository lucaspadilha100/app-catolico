import type { OracaoDoDevocionario } from "./tipos";

const ORACOES: OracaoDoDevocionario[] = [
  {
    id: "a-vos-sao-jose",
    nome: "A vós, São José",
    latim: "Ad te, beate Ioseph",
    santo: "sao-jose-esposo-da-virgem-maria",
    fonte: "magisterio",
    origem: "Leão XIII, encíclica Quamquam pluries, 1889, tradução da equipe do app",
    pt: [
      "A vós, São José, recorremos na nossa tribulação e, depois de implorar o auxílio da vossa santíssima Esposa, pedimos confiantes também a vossa proteção.",
      "Por aquele afeto que vos uniu à Virgem Imaculada, Mãe de Deus, e pelo amor paterno com que abraçastes o Menino Jesus, nós vos suplicamos: olhai com bondade para a herança que Jesus Cristo conquistou com o seu sangue, e socorrei-nos nas nossas necessidades com o vosso poder e auxílio.",
      "Protegei, ó guarda providente da divina Família, a descendência eleita de Jesus Cristo. Afastai de nós, ó pai amantíssimo, toda mancha de erro e de corrupção. Assisti-nos do céu, ó nosso fortíssimo protetor, nesta luta contra o poder das trevas. E assim como outrora livrastes da morte o Menino Jesus, defendei agora a santa Igreja de Deus das ciladas dos inimigos e de toda adversidade.",
      "Amparai a cada um de nós com o vosso constante patrocínio, para que, a vosso exemplo e sustentados pelo vosso auxílio, possamos viver santamente, morrer piedosamente e alcançar no céu a eterna bem-aventurança. Amém.",
    ],
    la: [
      "Ad te, beate Ioseph, in tribulatione nostra confugimus, atque, implorato Sponsae tuae sanctissimae auxilio, patrocinium quoque tuum fidenter exposcimus.",
      "Per eam, quaesumus, quae te cum immaculata Virgine Dei Genetrice coniunxit, caritatem, perque paternum, quo Puerum Iesum amplexus es, amorem, supplices deprecamur, ut ad hereditatem, quam Iesus Christus acquisivit Sanguine suo, benignus respicias, ac necessitatibus nostris tua virtute et ope succurras.",
      "Tuere, o Custos providentissime divinae Familiae, Iesu Christi sobolem electam; prohibe a nobis, amantissime Pater, omnem errorum ac corruptelarum luem; propitius nobis, sospitator noster fortissime, in hoc cum potestate tenebrarum certamine e caelo adesto; et sicut olim Puerum Iesum e summo eripuisti vitae discrimine, ita nunc Ecclesiam sanctam Dei ab hostilibus insidiis atque ab omni adversitate defende.",
      "Nosque singulos perpetuo tege patrocinio, ut ad tui exemplar et ope tua suffulti, sancte vivere, pie emori, sempiternamque in caelis beatitudinem assequi possimus. Amen.",
    ],
  },
  {
    id: "lembrai-vos-de-sao-jose",
    nome: "Lembrai-vos de São José",
    fonte: "tradicional",
    origem: "Memorare a São José, tradução da equipe do app",
    pt: [
      "Lembrai-vos, ó castíssimo esposo da Virgem Maria, São José, meu amável protetor, que jamais se ouviu dizer que alguém tenha recorrido à vossa proteção e implorado o vosso auxílio sem ter sido consolado.",
      "Animado com esta confiança, venho à vossa presença e a vós fervorosamente me recomendo. Não desprezeis as minhas súplicas, ó pai adotivo do Redentor, mas acolhei-as com bondade. Amém.",
    ],
  },
  {
    id: "consagracao-a-sao-jose",
    nome: "Consagração a São José",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "São José, esposo da Virgem Maria e pai adotivo de Jesus, eu me consagro hoje à vossa guarda.",
      "Recebei-me como recebestes o Menino em Belém, no Egito e em Nazaré: com cuidado, trabalho e silêncio. Guardai o meu corpo e a minha alma, a minha família e o meu trabalho, e ensinai-me a obedecer a Deus com prontidão, como vós, que vos levantastes na noite para cumprir a sua palavra.",
      "Daqui em diante, quero chamar-vos pai, como Jesus vos chamou. Cuidai de mim como cuidastes dele, e levai-me um dia à casa do Pai. Amém.",
    ],
  },
  {
    id: "a-sao-jose-operario",
    nome: "A São José Operário",
    santo: "sao-jose-operario",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "São José Operário, que ganhastes o pão da Sagrada Família com o trabalho das vossas mãos e ensinastes o ofício ao próprio Filho de Deus, abençoai o meu trabalho.",
      "Dai trabalho digno aos desempregados, justiça aos que trabalham demais por pouco, honestidade aos patrões e paciência a quem serve. Que eu trabalhe sem preguiça e sem ganância, oferecendo a Deus o cansaço de cada dia.",
      "Ensinai-me a santificar o trabalho comum, feito com amor e bem feito, como na oficina de Nazaré. São José Operário, rogai por nós. Amém.",
    ],
  },
  {
    id: "a-sao-jose-dormindo",
    nome: "A São José dormindo",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "São José, que dormindo recebestes os avisos de Deus e acordastes pronto para obedecer, acolhei o pedido que deixo junto de vós.",
      "Como tantos fiéis colocam um bilhete sob a imagem do vosso sono, eu coloco sob o vosso cuidado esta intenção que trago no coração. Enquanto durmo e enquanto trabalho, cuidai dela diante de Deus.",
      "Alcançai-me também um descanso em paz, livre de preocupações que não ajudam, e a confiança de quem sabe que o Pai cuida de tudo. São José, rogai por nós. Amém.",
    ],
  },
  {
    id: "a-sao-jose-pelas-familias",
    nome: "A São José pelas famílias",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "São José, chefe da Sagrada Família, que protegestes Maria e o Menino nas estradas, no exílio e na casa de Nazaré, protegei as nossas famílias.",
      "Guardai os esposos na fidelidade, os pais na paciência e os filhos no respeito. Socorrei as famílias sem casa, sem pão ou sem paz, e as que foram feridas pela separação e pela distância.",
      "Fazei do nosso lar uma casa como a vossa, onde Jesus mora, o trabalho é honesto e o amor é concreto. São José, amigo das famílias, rogai por nós. Amém.",
    ],
  },
  {
    id: "a-sao-jose-por-uma-boa-morte",
    nome: "A São José por uma boa morte",
    fonte: "propria",
    origem: "Texto da equipe do app",
    pt: [
      "São José, padroeiro da boa morte, que partistes deste mundo amparado por Jesus e Maria, alcançai-me a graça de morrer como vós, em paz com Deus e acompanhado pelo céu.",
      "Assisti os agonizantes desta hora, os que morrem sozinhos e os que partem sem os sacramentos. Preparai o meu coração dia após dia, para que a morte não me encontre longe do Senhor.",
      "Quando chegar a minha hora, vinde com Jesus e Maria ao meu encontro. São José, rogai por nós agora e na hora da nossa morte. Amém.",
    ],
  },
  {
    id: "jaculatorias-a-sao-jose",
    nome: "Jaculatórias a São José",
    fonte: "tradicional",
    origem: "Invocações tradicionais",
    pt: [
      "São José, rogai por nós.",
      "São José, esposo da Virgem Maria, rogai por nós.",
      "São José, protetor da santa Igreja, rogai por nós.",
      "São José, modelo dos trabalhadores, rogai por nós.",
      "São José, padroeiro da boa morte, rogai por nós.",
      "Jesus, Maria e José, eu vos dou o meu coração e a minha alma.",
      "Ide a José e fazei tudo o que ele vos disser.",
    ],
  },
];

export default ORACOES;
