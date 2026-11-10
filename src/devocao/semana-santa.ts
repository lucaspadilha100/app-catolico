import type { ConteudoDoDesafio } from "./tipos";

const silencio = { rubrica: "Alguns minutos de silêncio." };

const conteudo: ConteudoDoDesafio = {
  revisao: "a revisar pelo dono",
  etapas: [
    {
      titulo: "Domingo de Ramos",
      blocos: [
        {
          texto:
            "Domingo de Ramos e da Paixão do Senhor. A Igreja recorda a entrada de Jesus em Jerusalém, aclamado pelo povo com ramos, e começa a Semana Santa. A missa se abre com a bênção dos ramos e a procissão; depois, as leituras passam da aclamação à cruz, e se proclama a Paixão segundo um dos três primeiros Evangelhos, conforme o ano. Todos os anos, a segunda leitura canta o Cristo que se humilhou até a morte de cruz e foi exaltado pelo Pai.",
        },
        { leitura: "PHP 2:6-11" },
        { ir: "liturgia", rotulo: "Leituras da missa de hoje" },
        {
          pratica:
            "Participe da procissão de Ramos e leve para casa o ramo bento. Coloque-o junto ao crucifixo ou a uma imagem: ele lembra que Jesus é o nosso Rei, e que o seguimos também no caminho da cruz.",
        },
      ],
    },
    {
      titulo: "Segunda-feira Santa",
      blocos: [
        {
          texto:
            "De segunda a quarta-feira, a Igreja acompanha os últimos dias de Jesus antes da Páscoa, e a primeira leitura traz, a cada dia, um dos cânticos do Servo do Senhor, do profeta Isaías. Hoje o Evangelho conta a ceia em Betânia: Maria unge os pés de Jesus com um perfume de grande preço, e ele vê nesse gesto o anúncio da sua sepultura.",
        },
        { leitura: "JHN 12:1-8" },
        { ir: "liturgia", rotulo: "Leituras da missa de hoje" },
        {
          pratica:
            "Dê hoje a Jesus algo que lhe custe: um tempo de oração em silêncio, sem pressa, ou um gesto de cuidado gratuito com alguém que precisa.",
        },
      ],
    },
    {
      titulo: "Terça-feira Santa",
      blocos: [
        {
          texto:
            "O Evangelho de hoje nos leva à mesa da Última Ceia. Jesus anuncia que um dos doze o vai entregar, e Judas sai para a noite. Logo depois, Pedro promete dar a vida pelo Mestre, e Jesus lhe diz que, antes de o galo cantar, ele o terá negado três vezes.",
        },
        { leitura: "JHN 13:21-30" },
        { ir: "liturgia", rotulo: "Leituras da missa de hoje" },
        {
          pratica:
            "Faça um exame de consciência sincero e, se ainda não o fez nesta Quaresma, procure a confissão antes do Tríduo.",
        },
      ],
    },
    {
      titulo: "Quarta-feira Santa",
      blocos: [
        {
          texto:
            "O Evangelho conta que Judas foi aos chefes dos sacerdotes e combinou entregar Jesus por trinta moedas de prata. À mesa, Jesus anuncia a traição, e cada discípulo pergunta: porventura sou eu? É o último dia antes do Tríduo Pascal.",
        },
        { leitura: "MAT 26:14-16.21-25" },
        { ir: "liturgia", rotulo: "Leituras da missa de hoje" },
        {
          pratica:
            "Pergunte a si mesmo o que hoje vale mais do que Jesus na sua vida. Renuncie a um gasto que não é necessário e dê esse valor a quem precisa.",
        },
      ],
    },
    {
      titulo: "Quinta-feira Santa",
      blocos: [
        {
          texto:
            "Pela manhã, ou em outro dia próximo, o bispo celebra com os seus padres a Missa do Crisma, em que abençoa os óleos e consagra o santo crisma, e os padres renovam as promessas do sacerdócio. A Quaresma termina ao entardecer: com a missa vespertina da Ceia do Senhor começa o Tríduo Pascal. Nela a Igreja recorda a instituição da Eucaristia e do sacerdócio e o mandamento do amor (CIC 1337); onde se faz o lava-pés, o padre lava os pés de alguns fiéis, como Jesus fez com os apóstolos. Ao Glória tocam os sinos, que depois se calam até a Vigília Pascal.",
        },
        { leitura: "1CO 11:23-26" },
        { ir: "liturgia", rotulo: "Leituras da missa de hoje" },
        {
          texto:
            "Depois da missa, o Santíssimo Sacramento é levado em procissão ao altar da reposição, e o altar principal é despojado. Os fiéis são convidados a ficar em adoração noite adentro; depois da meia-noite, a adoração continua sem solenidade.",
        },
        {
          pratica:
            "Participe da missa da Ceia do Senhor e fique uma hora com Jesus diante do altar da reposição. Se não puder ir à igreja, faça a Hora Santa em casa, diante do crucifixo.",
        },
        { titulo: "Hora Santa" },
        { rezar: "sinal-da-cruz" },
        {
          linhas: [
            "Senhor Jesus, na noite em que fostes entregue, quisestes ficar conosco no sacramento do vosso Corpo e do vosso Sangue. Pedistes aos discípulos que vigiassem convosco uma hora. Aqui estamos, pobres e distraídos, mas desejosos de vos fazer companhia. Abri o nosso coração à vossa palavra. Amém.",
          ],
        },
        { titulo: "O lava-pés" },
        { leitura: "JHN 13:12-15" },
        {
          texto:
            "O Senhor e Mestre se ajoelha diante dos discípulos e lava os seus pés, trabalho de servo. Ele não pede que o admiremos de longe, mas que façamos o mesmo uns pelos outros. Pensemos em quem precisa hoje do nosso serviço humilde, em casa e perto de nós.",
        },
        silencio,
        { titulo: "O mandamento novo" },
        { leitura: "JHN 13:34-35" },
        {
          texto:
            "O mandamento é novo porque a medida é nova: amar como Jesus nos amou, até o fim. É por esse amor que o mundo vai reconhecer os seus discípulos. Peçamos perdão pelas vezes em que o nosso modo de viver escondeu o rosto de Cristo.",
        },
        silencio,
        { titulo: "Não se perturbe o vosso coração" },
        { leitura: "JHN 14:1-3" },
        {
          texto:
            "Na véspera da sua morte, é Jesus quem consola os discípulos. Ele vai à frente preparar-nos um lugar na casa do Pai e promete voltar para nos levar consigo. Entreguemos a ele as preocupações que hoje nos tiram a paz.",
        },
        silencio,
        { titulo: "Permanecei no meu amor" },
        { leitura: "JHN 15:4-5.9-12" },
        {
          texto:
            "Sem a videira, o ramo seca; sem Jesus, nada podemos fazer. Permanecer nele é rezar, receber os sacramentos e guardar a sua palavra. Diante da Eucaristia, digamos a ele que queremos permanecer no seu amor.",
        },
        silencio,
        { titulo: "A oração de Jesus pelos seus" },
        { leitura: "JHN 17:20-23" },
        {
          texto:
            "Antes de sair para o horto, Jesus reza ao Pai pelos apóstolos e também por nós, que haveríamos de crer pela palavra deles. O seu pedido é que sejamos um, como ele e o Pai são um. Rezemos pela unidade da Igreja, das nossas famílias e das nossas comunidades.",
        },
        silencio,
        { titulo: "A agonia no Getsêmani" },
        { leitura: "MAT 26:36-41" },
        { leitura: "LUK 22:41-44" },
        {
          texto:
            "No horto, Jesus sente tristeza e angústia de morte, e o seu suor se torna como gotas de sangue. Ele pede ao Pai que afaste o cálice, mas entrega tudo à vontade dele. Os discípulos dormem; ele nos pede, nesta noite, que vigiemos e oremos com ele. Ofereçamos-lhe esta hora e digamos com ele: não a minha vontade, mas a vossa.",
        },
        silencio,
        {
          linhas: [
            "Senhor Jesus, obrigado por esta hora junto de vós. Vós vos entregastes por nós e ficastes conosco na Eucaristia. Não permitais que durmamos quando nos pedis que vigiemos, e dai-nos a graça de fazer sempre a vontade do Pai. Amém.",
          ],
        },
        { rezar: "comunhao-espiritual" },
      ],
    },
    {
      titulo: "Sexta-feira da Paixão",
      blocos: [
        {
          texto:
            "Sexta-feira da Paixão do Senhor. Hoje a Igreja não celebra a missa. Por volta das três da tarde, hora em que Jesus morreu, ou mais tarde, celebra a Paixão do Senhor: a liturgia da Palavra, com a Paixão segundo São João; a oração universal solene; a adoração da Santa Cruz; e a comunhão, com as hóstias consagradas na missa da véspera. Hoje e amanhã não se celebram os sacramentos, a não ser a Confissão e a Unção dos Enfermos.",
        },
        { leitura: "JHN 19:28-30" },
        { ir: "liturgia", rotulo: "Leituras da celebração" },
        {
          texto:
            "Hoje é dia de jejum e de abstinência de carne (cân. 1251). O jejum obriga quem tem de 18 a 59 anos completos: faz-se uma só refeição completa, e pode-se tomar um pouco de alimento em outras duas. A abstinência de carne obriga a partir dos 14 anos completos (cân. 1252). Quem está doente ou tem outro motivo sério está dispensado.",
        },
        {
          pratica:
            "Guarde o jejum e a abstinência, participe da celebração da Paixão e, às três da tarde, pare onde estiver para lembrar a morte do Senhor.",
        },
        { ir: "/rezar/via-sacra", rotulo: "Rezar a Via-Sacra" },
        {
          texto:
            "Segundo o Diário de Santa Faustina, Jesus pediu que a novena da Divina Misericórdia começasse na Sexta-feira Santa, como preparação para o Domingo da Divina Misericórdia, o segundo da Páscoa.",
        },
        { ir: "/rezar/novenas/divina-misericordia", rotulo: "Novena da Divina Misericórdia" },
      ],
    },
    {
      titulo: "Sábado Santo",
      blocos: [
        {
          texto:
            "Sábado Santo. A Igreja permanece junto ao sepulcro do Senhor, meditando a sua Paixão e morte e a sua descida à mansão dos mortos (CIC 631-637), e espera a ressurreição em oração e jejum. Durante o dia não há missa: o altar fica despojado, e a comunhão só se leva aos que estão para morrer. É o grande dia do silêncio.",
        },
        { leitura: "LAM 3:25-26" },
        {
          texto:
            "A tradição da Igreja vê em Maria aquela que, neste dia, guardou viva a fé e a esperança enquanto o Filho repousava no sepulcro. Fiquemos perto dela, esperando com ela.",
        },
        {
          texto:
            "Depois do anoitecer, a Igreja celebra a Vigília Pascal, a maior de todas as celebrações do ano, que Santo Agostinho chamou de mãe de todas as santas vigílias. Ela começa no escuro, com a bênção do fogo novo e o círio pascal, sinal de Cristo ressuscitado, e o anúncio da Páscoa. Seguem as leituras da história da salvação, o Glória com os sinos, o Aleluia, a liturgia do Batismo, com a renovação das promessas batismais, e a Eucaristia. Já é a Páscoa: a Vigília começa depois do cair da noite e termina antes da aurora do domingo.",
        },
        { leitura: "ROM 6:3-5", titulo: "Na Vigília Pascal" },
        { ir: "liturgia", rotulo: "Leituras da Vigília Pascal" },
        {
          pratica:
            "Viva o dia em recolhimento, com menos barulho, televisão e celular. Onde for possível, a Igreja recomenda prolongar até a Vigília o jejum da Sexta-feira (Sacrosanctum Concilium 110). À noite, participe da Vigília Pascal.",
        },
      ],
    },
    {
      titulo: "Domingo de Páscoa",
      blocos: [
        {
          texto:
            "Domingo da Páscoa na Ressurreição do Senhor, a maior festa do ano. Cristo ressuscitou dos mortos e venceu o pecado e a morte (CIC 638-655). Começa o Tempo Pascal, cinquenta dias de alegria até Pentecostes; os oito primeiros dias formam a Oitava da Páscoa, celebrada como um só dia de festa. Até Pentecostes, no lugar do Ângelus, reza-se a Rainha do Céu.",
        },
        { leitura: "JHN 20:1-9" },
        { ir: "liturgia", rotulo: "Leituras da missa de hoje" },
        { rezar: "regina-caeli" },
        {
          pratica:
            "Participe da missa da Páscoa e comungue, como a Igreja pede a todos ao menos uma vez por ano, no tempo pascal (CIC 2042). Leve a alegria da Ressurreição a alguém que está triste ou sozinho.",
        },
      ],
    },
  ],
};

export default conteudo;
