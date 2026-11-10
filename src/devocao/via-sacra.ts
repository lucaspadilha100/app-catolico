import type { ConteudoDoRoteiro } from "./tipos";

const conteudo: ConteudoDoRoteiro = {
  revisao: "a revisar pelo dono",
  antes: [
    { rezar: "sinal-da-cruz" },
    { titulo: "Oração inicial" },
    {
      linhas: [
        "Senhor Jesus Cristo, que por amor de nós carregastes a cruz até o Calvário, queremos acompanhar-vos neste caminho de dor. Dai-nos um coração arrependido dos pecados que vos fizeram sofrer, e ensinai-nos a seguir-vos com fidelidade.",
        "Virgem Maria, Mãe das dores, que permanecestes de pé junto à cruz, ficai conosco enquanto meditamos a Paixão do vosso Filho. Amém.",
      ],
    },
    { rezar: "ato-de-contricao" },
  ],
  inicioDoPasso: [
    { linhas: [{ v: "Nós vos adoramos, Senhor Jesus Cristo, e vos bendizemos.", r: "Porque pela vossa santa cruz remistes o mundo." }] },
  ],
  passos: [
    {
      titulo: "1ª estação: Jesus é condenado à morte",
      blocos: [
        { leitura: "MRK 15:12-15" },
        {
          texto:
            "Diante de Pilatos, o inocente é condenado, e o povo prefere que soltem Barrabás. Jesus não se defende: aceita a sentença injusta para nos livrar da condenação que os nossos pecados mereciam. Quantas vezes também nós julgamos depressa e condenamos os outros. Peçamos a graça de não ceder ao medo nem à opinião da maioria quando a verdade está em jogo.",
        },
        { linhas: ["Senhor Jesus, condenado em nosso lugar, livrai-nos de julgar com dureza o nosso próximo."] },
      ],
    },
    {
      titulo: "2ª estação: Jesus carrega a cruz",
      blocos: [
        { leitura: "JHN 19:16-17" },
        {
          texto:
            "Jesus recebe a cruz e a leva sem queixa. Sobre ela pesam os pecados de todos os tempos, também os nossos. Ele disse que quem quiser segui-lo deve tomar a sua cruz cada dia. Peçamos a graça de aceitar com paciência as cruzes da nossa vida, unidas à cruz dele.",
        },
        { linhas: ["Senhor Jesus, que carregastes a cruz por amor de nós, dai-nos força para levar a nossa com paciência."] },
      ],
    },
    {
      titulo: "3ª estação: Jesus cai pela primeira vez",
      blocos: [
        { leitura: "ISA 53:4-6" },
        {
          texto:
            "Os Evangelhos não contam as quedas de Jesus; é a tradição da Igreja que as guarda e as medita na Via-Sacra. Enfraquecido pelos açoites e por uma noite sem descanso, ele cai sob o peso da cruz. O profeta diz que ele carregou as nossas dores e foi ferido por causa das nossas culpas. Peçamos a graça de nos levantar logo quando cairmos no pecado, confiando na sua misericórdia.",
        },
        { linhas: ["Senhor Jesus, caído sob o peso dos nossos pecados, levantai-nos sempre que cairmos."] },
      ],
    },
    {
      titulo: "4ª estação: Jesus encontra a sua Mãe",
      blocos: [
        { leitura: "LUK 2:33-35" },
        {
          texto:
            "A tradição conta que, no caminho do Calvário, Maria encontrou o seu Filho. Cumpria-se a palavra de Simeão: uma espada atravessava a sua alma. Ela não pode tirar a dor do Filho, mas permanece perto dele, com amor e com fé. Peçamos a Maria que nos ensine a ficar ao lado dos que sofrem, mesmo quando não podemos acabar com o seu sofrimento.",
        },
        { linhas: ["Virgem Maria, Mãe das dores, acompanhai-nos nas horas de aflição e levai-nos sempre a Jesus."] },
      ],
    },
    {
      titulo: "5ª estação: Simão Cireneu ajuda Jesus a carregar a cruz",
      blocos: [
        { leitura: "LUK 23:26; LUK 9:23" },
        {
          texto:
            "Os soldados obrigam Simão, que voltava do campo, a carregar a cruz atrás de Jesus. Ele não escolheu aquele peso, mas o seu nome ficou para sempre no Evangelho. Cada vez que ajudamos alguém a levar o seu fardo, ajudamos o próprio Cristo. Peçamos um coração pronto para servir, mesmo quando o serviço nos chega sem que o tenhamos procurado.",
        },
        { linhas: ["Senhor Jesus, fazei-nos atentos ao peso que os outros carregam e prontos a ajudá-los."] },
      ],
    },
    {
      titulo: "6ª estação: Verônica enxuga o rosto de Jesus",
      blocos: [
        { leitura: "ISA 53:2-3; PSA 27:8-9" },
        {
          texto:
            "Segundo a tradição, uma mulher chamada Verônica atravessou a multidão e enxugou o rosto de Jesus, coberto de sangue e de suor. O profeta tinha dito que o servo de Deus não teria beleza nem formosura, e que os homens não fariam caso dele. O gesto dela é pequeno, mas cheio de coragem e de amor. Procuremos o rosto de Cristo nos pobres, nos doentes e nos esquecidos, sem vergonha de nos aproximar deles.",
        },
        { linhas: ["Senhor Jesus, gravai o vosso rosto no nosso coração e fazei-nos reconhecer-vos em quem sofre."] },
      ],
    },
    {
      titulo: "7ª estação: Jesus cai pela segunda vez",
      blocos: [
        { leitura: "PSA 22:7-9", poema: true },
        {
          texto:
            "A tradição medita uma segunda queda: Jesus cai de novo por terra, mais fraco e mais humilhado. O salmo põe nos seus lábios estas palavras: eu sou um pequeno verme, e não homem, o desprezo do povo. Ele desce até o fundo da nossa miséria, para que ninguém se sinta longe demais do seu amor. Peçamos a graça de não desanimar quando voltamos a cair nas mesmas faltas, e de recomeçar com humildade.",
        },
        { linhas: ["Senhor Jesus, humilhado por amor de nós, não nos deixeis desanimar no caminho."] },
      ],
    },
    {
      titulo: "8ª estação: Jesus consola as mulheres de Jerusalém",
      blocos: [
        { leitura: "LUK 23:27-31" },
        {
          texto:
            "Algumas mulheres seguem Jesus, batendo no peito e chorando por ele. Mesmo no meio do sofrimento, ele se volta para elas e as convida a chorar por si mesmas e pelos seus filhos. Jesus não quer de nós apenas compaixão: quer a nossa conversão. Peçamos a graça de chorar os nossos pecados e de mudar de vida.",
        },
        { linhas: ["Senhor Jesus, dai-nos lágrimas de verdadeiro arrependimento e um coração novo."] },
      ],
    },
    {
      titulo: "9ª estação: Jesus cai pela terceira vez",
      blocos: [
        { leitura: "LAM 1:12; PHP 2:6-8" },
        {
          texto:
            "A tradição conta ainda uma terceira queda, já perto do Calvário, quando as forças de Jesus chegam ao fim. Ele, que tinha a natureza de Deus, humilhou-se e se fez obediente até a morte, e morte de cruz. Não há dor humana que ele não conheça por dentro. Peçamos a graça de perseverar até o fim, sobretudo na doença, na velhice e na hora da morte.",
        },
        { linhas: ["Senhor Jesus, obediente até a morte, sustentai-nos até o fim do nosso caminho."] },
      ],
    },
    {
      titulo: "10ª estação: Jesus é despojado das suas vestes",
      blocos: [
        { leitura: "JHN 19:23-24" },
        {
          texto:
            "No Calvário, os soldados repartem as vestes de Jesus e tiram a sorte da sua túnica, como dizia a Escritura. Ele fica sem nada, exposto ao olhar de todos. Despojado de tudo, ensina-nos que só Deus basta. Peçamos a graça de nos desapegar do que nos prende e de respeitar a dignidade de cada pessoa, sobretudo dos mais humilhados.",
        },
        { linhas: ["Senhor Jesus, despojado de tudo, livrai-nos do apego às coisas e da vaidade."] },
      ],
    },
    {
      titulo: "11ª estação: Jesus é pregado na cruz",
      blocos: [
        { leitura: "LUK 23:33-34.39-43" },
        {
          texto:
            "Jesus é pregado na cruz entre dois ladrões. Em vez de amaldiçoar, ele pede ao Pai perdão para os que o crucificam e promete o paraíso ao ladrão arrependido. A cruz se torna o lugar do perdão. Peçamos a graça de perdoar de coração a quem nos ofendeu e de confiar sempre na misericórdia de Deus.",
        },
        { linhas: ["Senhor Jesus, pregado na cruz por nós, lembrai-vos de nós quando entrardes no vosso reino."] },
      ],
    },
    {
      titulo: "12ª estação: Jesus morre na cruz",
      blocos: [
        { leitura: "JHN 19:25-30" },
        {
          texto:
            "Junto à cruz estão Maria, outras mulheres e o discípulo amado. Jesus entrega a sua Mãe ao discípulo e, nele, a todos nós. Depois diz que tudo está cumprido, inclina a cabeça e entrega o espírito. Diante da morte do Senhor, fiquemos em silêncio e agradeçamos o amor que deu a vida por nós.",
        },
        { rubrica: "Ajoelhe-se, se puder, e fique um momento em silêncio." },
        { linhas: ["Senhor Jesus, que morrestes para nos dar a vida, nas vossas mãos entregamos a nossa vida e a nossa morte."] },
      ],
    },
    {
      titulo: "13ª estação: Jesus é descido da cruz",
      blocos: [
        { leitura: "JHN 19:38-40" },
        {
          texto:
            "José de Arimateia, que era discípulo às ocultas, pede a Pilatos o corpo de Jesus, e Nicodemos vem ajudá-lo. A tradição contempla o corpo do Filho nos braços de Maria, como um dia ela o teve em Belém. A sua fé não se apaga nem nesta hora escura. Peçamos a Maria que nos sustente na dor de perder as pessoas que amamos.",
        },
        { linhas: ["Virgem Maria, que recebestes nos braços o vosso Filho morto, consolai os que choram os seus mortos."] },
      ],
    },
    {
      titulo: "14ª estação: Jesus é sepultado",
      blocos: [
        { leitura: "MAT 27:59-61" },
        {
          texto:
            "O corpo de Jesus é envolvido num lençol limpo e depositado num sepulcro novo, e uma grande pedra fecha a entrada. As mulheres ficam sentadas diante do túmulo, em silêncio. Mas a pedra não terá a última palavra: ao terceiro dia ele ressuscitará, como tinha prometido. Guardemos esta esperança, que ilumina também o nosso túmulo e o daqueles que amamos.",
        },
        { leitura: "MAT 28:5-6", titulo: "Ao terceiro dia" },
        { linhas: ["Senhor Jesus, sepultado e ressuscitado, fazei-nos morrer para o pecado e ressuscitar convosco para a vida nova."] },
      ],
    },
  ],
  fimDoPasso: [
    { rezar: "pai-nosso" },
    { rezar: "ave-maria" },
    { rezar: "gloria" },
    { linhas: [{ v: "Tende piedade de nós, Senhor.", r: "Tende piedade de nós." }] },
  ],
  depois: [
    { rezar: "stabat-mater" },
    { titulo: "Oração final" },
    {
      linhas: [
        "Senhor Jesus Cristo, nós vos acompanhamos no caminho da cruz e contemplamos o amor com que destes a vida por nós. Pela vossa Paixão e morte, perdoai os nossos pecados e fortalecei-nos para levar a nossa cruz cada dia.",
        "Unidos a vós no sofrimento, possamos participar também da alegria da vossa ressurreição. Vós que viveis e reinais com o Pai, na unidade do Espírito Santo, por todos os séculos dos séculos. Amém.",
      ],
    },
    { titulo: "Pelas intenções do Papa" },
    {
      rubrica:
        "A Via-Sacra feita diante das estações erigidas, passando de uma estação a outra, pode alcançar a indulgência plenária, nas condições de costume: confissão, comunhão, oração pelas intenções do Papa e nenhum apego ao pecado.",
    },
    { rezar: "pai-nosso" },
    { rezar: "ave-maria" },
    { rezar: "gloria" },
    { rezar: "sinal-da-cruz" },
  ],
};

export default conteudo;
