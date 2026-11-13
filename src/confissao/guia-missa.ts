import type { Guia } from "./tipos";

const guia: Guia = {
  revisao: "a revisar pelo dono",
  passos: [
    {
      titulo: "Antes de começar",
      blocos: [
        {
          texto:
            "A Eucaristia é fonte e cume de toda a vida cristã (CIC 1324). Nela se torna presente o único sacrifício de Cristo na cruz, e ele mesmo se dá como alimento (CIC 1366-1367). Desde o século II, como conta São Justino, mártir, os cristãos se reúnem no domingo com as mesmas grandes linhas que seguimos hoje: leituras, pregação, preces, ofertas, ação de graças e comunhão (CIC 1345).",
        },
        {
          texto:
            "A Missa tem duas grandes partes, a liturgia da Palavra e a liturgia eucarística, que formam um só ato de culto (CIC 1346). Antes delas vêm os ritos iniciais, e depois, os ritos finais. Quem preside é o bispo ou o padre, que age na pessoa de Cristo, mas todos participam (CIC 1348).",
        },
        {
          texto:
            "Chegue alguns minutos antes. Ao entrar, faça o sinal da cruz com água benta, lembrando o seu Batismo. Antes de ocupar o banco, faça a genuflexão, dobrando o joelho direito até o chão, voltado para o sacrário, onde Jesus está presente (IGMR 274). Quem não consegue pode fazer uma inclinação profunda. Desligue o celular e use o tempo em silêncio para rezar.",
        },
        {
          texto:
            "Participar da Missa aos domingos e nos dias de preceito é obrigação grave para o católico, salvo motivo sério, como doença ou o cuidado de crianças pequenas, ou dispensa do pároco (CIC 2180-2181).",
        },
      ],
    },
    {
      titulo: "Ritos iniciais: entrada e saudação",
      postura: "de pé",
      blocos: [
        {
          texto:
            "Quando começa o canto de entrada e o padre caminha até o altar, todos se levantam. O padre beija o altar, símbolo do próprio Cristo (CIC 1383). Depois, todos fazem o sinal da cruz, e o padre saúda a assembleia, desejando que o Senhor esteja com ela. O povo responde à saudação.",
        },
        {
          texto:
            "Estes ritos fazem dos que chegaram uma assembleia unida e os preparam para ouvir bem a Palavra de Deus e celebrar dignamente a Eucaristia (IGMR 46).",
        },
      ],
    },
    {
      titulo: "Ritos iniciais: ato penitencial",
      postura: "de pé",
      blocos: [
        {
          texto:
            "O padre convida todos a reconhecer que são pecadores. Depois de um breve silêncio, a assembleia pede perdão a Deus, com uma fórmula de confissão ou com as invocações \"Senhor, tende piedade de nós\" e \"Cristo, tende piedade de nós\". Nos domingos, sobretudo no tempo pascal, pode haver no lugar disso a aspersão com água benta, em lembrança do Batismo (IGMR 51).",
        },
        {
          texto:
            "O ato penitencial pede a misericórdia de Deus, mas não tem a eficácia do sacramento da Penitência (IGMR 51). Quem tem pecado grave precisa confessar-se antes de comungar (CIC 1385).",
        },
      ],
    },
    {
      titulo: "Ritos iniciais: Glória e oração do dia",
      postura: "de pé",
      blocos: [
        {
          texto:
            "Nos domingos fora do Advento e da Quaresma, nas solenidades e nas festas, canta-se ou reza-se o Glória, hino muito antigo que louva a Santíssima Trindade e começa com o canto dos anjos no nascimento de Jesus.",
        },
        { leitura: "LUK 2:13-14" },
        {
          texto:
            "Em seguida, o padre diz \"Oremos\" e todos ficam um momento em silêncio, apresentando a Deus os seus pedidos. Então o padre reza a oração do dia, chamada coleta, que reúne as intenções de todos. O povo responde \"Amém\", fazendo sua essa oração.",
        },
      ],
    },
    {
      titulo: "Liturgia da Palavra: primeira leitura e salmo",
      postura: "sentado",
      blocos: [
        {
          texto:
            "Todos se sentam para escutar. A primeira leitura vem quase sempre do Antigo Testamento, e no tempo pascal, dos Atos dos Apóstolos. Quando a Escritura é lida na igreja, é o próprio Deus que fala ao seu povo (IGMR 29; CIC 1088).",
        },
        {
          texto:
            "Ao final, o leitor diz que aquela é a Palavra do Senhor, e o povo responde dando graças a Deus. Depois vem o salmo responsorial: alguém canta ou lê os versos do salmo, e a assembleia repete o refrão.",
        },
      ],
    },
    {
      titulo: "Liturgia da Palavra: segunda leitura",
      postura: "sentado",
      blocos: [
        {
          texto:
            "Nos domingos e solenidades há uma segunda leitura, tirada das cartas dos apóstolos ou do Apocalipse. Nos dias de semana ela não existe, e passa-se direto ao Evangelho.",
        },
      ],
    },
    {
      titulo: "Liturgia da Palavra: o Evangelho",
      postura: "de pé",
      blocos: [
        {
          texto:
            "Todos se levantam para a aclamação, normalmente o Aleluia, que na Quaresma é trocado por outra aclamação. De pé, os fiéis honram o Evangelho e, com as aclamações, reconhecem Cristo presente, que lhes fala (IGMR 60).",
        },
        {
          texto:
            "Quando o padre ou o diácono anuncia o Evangelho, todos fazem com o polegar uma pequena cruz na testa, nos lábios e no peito (IGMR 134). Ao final, o povo aclama o Senhor Jesus, presente na sua Palavra.",
        },
      ],
    },
    {
      titulo: "Liturgia da Palavra: homilia",
      postura: "sentado",
      blocos: [
        {
          texto:
            "O padre ou o diácono explica as leituras e mostra como vivê-las hoje (CIC 1349). Nas Missas com o povo dos domingos e dias de preceito, a homilia não pode ser omitida sem causa grave (cân. 767). Depois dela, pode haver um breve silêncio para guardar no coração o que se ouviu.",
        },
      ],
    },
    {
      titulo: "Liturgia da Palavra: profissão de fé",
      postura: "de pé",
      blocos: [
        {
          texto:
            "Nos domingos e solenidades, todos se levantam e professam a fé da Igreja, respondendo à Palavra ouvida. Na Missa usa-se o Creio niceno-constantinopolitano, mais longo, ou o Creio dos Apóstolos, que é o que está abaixo.",
        },
        {
          texto:
            "Nas palavras sobre a encarnação de Jesus, todos se inclinam. No Natal e na Anunciação do Senhor, em vez de se inclinar, ajoelha-se (IGMR 137).",
        },
        { rezar: "creio" },
      ],
    },
    {
      titulo: "Liturgia da Palavra: oração dos fiéis",
      postura: "de pé",
      blocos: [
        {
          texto:
            "A assembleia apresenta a Deus os pedidos pela Igreja, pelos governantes, pelos que sofrem, pela comunidade local e pelo mundo inteiro. A cada pedido, o povo responde com uma breve súplica. Aqui todos exercem o seu sacerdócio do Batismo, rezando pela salvação de todos (IGMR 69; CIC 1349).",
        },
      ],
    },
    {
      titulo: "Liturgia eucarística: apresentação das oferendas",
      postura: "sentado",
      blocos: [
        {
          texto:
            "Começa a segunda grande parte da Missa. O altar é preparado, e o pão e o vinho são levados até ele, muitas vezes por pessoas da comunidade. É o mesmo gesto de Jesus na última ceia, quando tomou o pão e o cálice, e esses dons são fruto da terra e do trabalho humano (CIC 1333, 1350).",
        },
        {
          texto:
            "É também o momento da coleta. Desde o começo, os cristãos levam à Missa, junto com o pão e o vinho, as suas ofertas para a Igreja e para os pobres (CIC 1351). Junto com elas, cada um pode oferecer a Deus a própria vida, as alegrias e os trabalhos da semana.",
        },
        {
          texto:
            "Quando o padre convida a rezar para que o sacrifício de toda a Igreja seja aceito por Deus, todos se levantam e respondem. Segue-se a oração sobre as oferendas, e o povo responde \"Amém\".",
        },
      ],
    },
    {
      titulo: "Liturgia eucarística: prefácio e Santo",
      postura: "de pé",
      blocos: [
        {
          texto:
            "Começa a oração eucarística, o centro e o ponto alto de toda a Missa. O padre convida o povo a elevar o coração ao Senhor e a dar-lhe graças, e o povo responde a cada convite. Então ele reza o prefácio, que agradece a Deus Pai pela criação e pela salvação, conforme o dia ou a festa (CIC 1352).",
        },
        {
          texto:
            "No fim do prefácio, toda a assembleia une a sua voz à dos anjos e canta o Santo, com as palavras que o profeta Isaías ouviu no céu e com a aclamação do povo quando Jesus entrou em Jerusalém.",
        },
        { leitura: "ISA 6:1-3" },
      ],
    },
    {
      titulo: "Liturgia eucarística: a oração eucarística",
      postura: "de pé ou de joelhos",
      blocos: [
        {
          texto:
            "Depois do Santo, o padre continua a oração eucarística. Ele pede ao Pai que envie o Espírito Santo sobre o pão e o vinho, para que se tornem o Corpo e o Sangue de Jesus (CIC 1353).",
        },
        {
          texto:
            "A postura nesta parte segue o costume da paróquia. Em alguns lugares, o povo se ajoelha logo depois do Santo e fica de joelhos até o fim da oração eucarística. Em outros, fica de pé e se ajoelha só para a consagração. Faça como a comunidade faz.",
        },
      ],
    },
    {
      titulo: "Liturgia eucarística: a consagração",
      postura: "de joelhos",
      blocos: [
        {
          texto:
            "O padre repete as palavras e os gestos de Jesus na última ceia. Pelo poder dessas palavras e pela ação do Espírito Santo, o pão e o vinho deixam de ser pão e vinho: tornam-se verdadeira, real e substancialmente o Corpo e o Sangue de Cristo, com a sua alma e a sua divindade, embora continuem com a aparência de pão e de vinho. A Igreja chama essa mudança de transubstanciação (CIC 1374-1376).",
        },
        { leitura: "1CO 11:23-26" },
        {
          texto:
            "O padre eleva a hóstia e depois o cálice para que todos adorem. Olhe para o Senhor com fé. Muitos rezam em silêncio as palavras de São Tomé: \"Meu Senhor e meu Deus.\" Ajoelhar-se é sinal de adoração (CIC 1378). Quem não pode se ajoelhar, por doença ou falta de espaço, faz uma inclinação profunda quando o padre faz a genuflexão.",
        },
        {
          texto:
            "Em seguida, o padre proclama o mistério da fé, e o povo responde aclamando a morte e a ressurreição do Senhor e esperando a sua volta. No Brasil, é costume levantar-se neste momento.",
        },
      ],
    },
    {
      titulo: "Liturgia eucarística: fim da oração eucarística",
      postura: "de pé",
      blocos: [
        {
          texto:
            "A Igreja faz memória da paixão, da ressurreição e da volta gloriosa de Jesus e apresenta ao Pai a oferenda do seu Filho (CIC 1354). Reza pelo Papa, pelo bispo, por toda a Igreja, pelos vivos e pelos falecidos, em comunhão com a Virgem Maria e com os santos.",
        },
        {
          texto:
            "A oração termina com o padre elevando o Corpo e o Sangue do Senhor e dando glória ao Pai, por Cristo, no Espírito Santo. O povo responde com o grande \"Amém\", que confirma toda a oração eucarística (IGMR 79).",
        },
      ],
    },
    {
      titulo: "Comunhão: o Pai-Nosso",
      postura: "de pé",
      blocos: [
        {
          texto:
            "A preparação para a comunhão começa com a oração que o próprio Jesus ensinou (CIC 1355). Pedimos o pão de cada dia, que para os cristãos é sobretudo o Pão da Eucaristia (CIC 2837), e o perdão dos pecados, para que as coisas santas sejam dadas aos santos (IGMR 81).",
        },
        {
          rubrica:
            "Na Missa, o Pai-Nosso termina sem o \"Amém\". O padre continua com uma oração pela paz, e o povo encerra com uma aclamação de louvor a Deus.",
        },
        { rezar: "pai-nosso" },
      ],
    },
    {
      titulo: "Comunhão: o abraço da paz",
      postura: "de pé",
      blocos: [
        {
          texto:
            "O padre pede a paz para a Igreja e para o mundo e pode convidar todos a se saudarem. Cada um deseja a paz a quem está mais perto, de modo sóbrio. É sinal da comunhão na Igreja e da caridade mútua antes de receber o Sacramento (IGMR 82).",
        },
        { leitura: "MAT 5:23-24" },
      ],
    },
    {
      titulo: "Comunhão: o Cordeiro de Deus",
      postura: "de pé",
      blocos: [
        {
          texto:
            "O padre parte a hóstia, como Jesus partiu o pão na última ceia. Foi por esse gesto que os discípulos de Emaús reconheceram o Senhor ressuscitado, e os primeiros cristãos chamavam a Missa de fração do pão (CIC 1329). Enquanto isso, canta-se ou reza-se o Cordeiro de Deus, pedindo misericórdia e paz.",
        },
        { leitura: "JHN 1:29" },
        {
          texto:
            "O padre mostra a hóstia ao povo e convida para a ceia do Senhor. Todos respondem com humildade, usando as palavras do centurião que pediu a Jesus a cura do seu servo (CIC 1386). Em algumas paróquias, o povo se ajoelha neste momento; siga o costume do lugar.",
        },
        { leitura: "MAT 8:8" },
      ],
    },
    {
      titulo: "Comunhão: receber o Senhor",
      postura: "de pé",
      blocos: [
        {
          texto:
            "Na comunhão recebemos o próprio Cristo, inteiro, em cada parte da hóstia (CIC 1377). Ela nos une a ele, apaga os pecados veniais, nos fortalece contra o pecado grave e nos une a todos os irmãos na Igreja (CIC 1391-1396).",
        },
        { titulo: "Quem pode comungar" },
        {
          texto:
            "Pode comungar o católico que está em estado de graça. Quem tem consciência de um pecado grave deve primeiro se confessar (CIC 1385, 1415). Também é preciso guardar o jejum eucarístico: ficar uma hora sem comer nem beber nada antes da comunhão, exceto água e remédios. Os idosos, os doentes e quem cuida deles estão dispensados desse jejum (CIC 1387; cân. 919).",
        },
        {
          texto:
            "A Igreja pede que todo católico comungue ao menos uma vez por ano, se possível no tempo da Páscoa (cân. 920), e recomenda vivamente a comunhão a cada Missa, estando bem preparado (CIC 1388-1389).",
        },
        { titulo: "Como receber" },
        {
          texto:
            "Vá em fila, sem pressa, e faça antes um sinal de reverência, como uma inclinação da cabeça (Redemptionis Sacramentum 90). O ministro mostra a hóstia e diz que ela é o Corpo de Cristo; você responde \"Amém\", que quer dizer: sim, é verdade (CIC 1396).",
        },
        {
          texto:
            "Na boca: abra a boca, ponha a língua um pouco para fora e deixe que o ministro coloque a hóstia. Na mão: ponha a mão esquerda aberta sobre a direita; receba a hóstia e leve-a à boca com a mão direita ali mesmo, diante do ministro. Nunca saia levando a hóstia. Cada fiel tem sempre o direito de escolher receber na boca, e onde a Conferência dos Bispos permitiu, pode receber na mão (Redemptionis Sacramentum 92).",
        },
        { titulo: "Quem não pode comungar" },
        {
          texto:
            "Quem não pode receber a comunhão continua participando da Missa e pode fazer a comunhão espiritual: unir-se a Jesus pelo desejo de recebê-lo, com fé e amor.",
        },
        { rezar: "comunhao-espiritual" },
      ],
    },
    {
      titulo: "Comunhão: ação de graças",
      postura: "sentado",
      blocos: [
        {
          texto:
            "Depois de comungar, volte ao seu lugar e fique em silêncio com o Senhor, que agora está em você. Pode ficar sentado ou de joelhos. Agradeça, adore, apresente os seus pedidos. Pode haver um canto de louvor.",
        },
        { leitura: "JHN 6:51" },
      ],
    },
    {
      titulo: "Ritos finais: bênção e envio",
      postura: "de pé",
      blocos: [
        {
          texto:
            "Todos se levantam para a oração depois da comunhão, e o povo responde \"Amém\". Se houver avisos da comunidade, são dados agora, de modo breve (IGMR 90).",
        },
        {
          texto:
            "O padre abençoa o povo em nome da Santíssima Trindade, e todos fazem o sinal da cruz. Por fim, ele despede a assembleia, e o povo responde dando graças a Deus. A palavra Missa vem justamente desse envio: quem recebeu Cristo é mandado a viver a vontade de Deus no dia a dia (CIC 1332).",
        },
        {
          texto:
            "Espere o padre sair antes de deixar o banco. Ao sair, faça de novo a genuflexão diante do sacrário.",
        },
      ],
    },
  ],
};

export default guia;
