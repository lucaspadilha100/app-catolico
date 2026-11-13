import type { ConteudoDoDesafio } from "../tipos";

const NOVENA = { ir: "/rezar/novenas/natal", rotulo: "Novena de Natal" };
const LITURGIA = { ir: "liturgia", rotulo: "Leituras da missa de hoje" };

const conteudo: ConteudoDoDesafio = {
  revisao: "a revisar pelo dono",
  etapas: [
    {
      titulo: "1º Domingo do Advento",
      blocos: [
        { leitura: "PSA 25:1-5", poema: true },
        {
          texto:
            "Começa hoje o Advento, o tempo em que a Igreja se prepara para celebrar a primeira vinda do Senhor, no Natal, e renova o desejo da sua volta no fim dos tempos (CIC 524). Há muitos séculos a missa deste domingo começa com as primeiras palavras deste salmo, em latim Ad te levavi: a ti, Senhor, elevei a minha alma. Ninguém esperou Jesus como Maria, que o trouxe no seio durante nove meses. Com ela aprendemos a esperar com paciência e confiança.",
        },
        {
          pratica:
            "Monte uma coroa do Advento, mesmo simples, e acenda a primeira vela numa oração em família. Se não for possível, escolha um lugar da casa para rezar todos os dias até o Natal.",
        },
        LITURGIA,
      ],
    },
    {
      titulo: "Segunda-feira da 1ª semana",
      blocos: [
        { leitura: "ISA 11:1-5" },
        {
          texto:
            "Isaías vê uma vara sair do tronco de Jessé, o pai de Davi: da família real, que parecia cortada, Deus faria brotar o Salvador. Sobre ele repousa o Espírito do Senhor com os seus dons, os mesmos que o Espírito dá aos fiéis (CIC 1831).",
        },
        {
          pratica:
            "Reze devagar o Vinde, Espírito Santo e peça um dos dons que Isaías enumera, aquele de que mais precisa neste Advento.",
        },
        { ir: "/rezar/oracoes/vinde-espirito-santo", rotulo: "Vinde, Espírito Santo" },
      ],
    },
    {
      titulo: "Terça-feira da 1ª semana",
      blocos: [
        { leitura: "ISA 7:10-14" },
        {
          texto:
            "O rei Acaz não quis pedir um sinal, e o próprio Deus o deu: uma virgem conceberá e dará à luz um filho. São Mateus lê nesta profecia o nascimento de Jesus da Virgem Maria (Mt 1,22-23). Emanuel quer dizer Deus conosco: Deus não fica longe, vem morar no meio do seu povo.",
        },
        {
          pratica:
            "Durante o dia, repita em silêncio: Deus está comigo. Antes de dormir, lembre-se de um momento do dia em que sentiu a presença dele e agradeça.",
        },
      ],
    },
    {
      titulo: "Quarta-feira da 1ª semana",
      blocos: [
        { leitura: "ISA 9:1-6" },
        {
          texto:
            "O povo que andava nas trevas viu uma grande luz. Isaías anuncia um menino que traz uma paz sem fim e recebe nomes que só cabem a Deus. Maria guardou nos braços essa luz pequena e frágil, e é ela quem a mostra ao mundo.",
        },
        {
          pratica:
            "Pense numa situação escura na sua vida ou na sua família e entregue-a a Deus numa Ave-Maria. Se puder, acenda uma vela no lugar de oração da casa.",
        },
      ],
    },
    {
      titulo: "Quinta-feira da 1ª semana",
      blocos: [
        { leitura: "ISA 40:1-5" },
        {
          texto:
            "Consolai o meu povo: a promessa de Deus começa com uma palavra de ternura. A voz que clama no deserto pede que se endireitem os caminhos, e esse caminho passa dentro de nós, pela conversão. Foi de Maria que o Filho de Deus, na plenitude dos tempos, recebeu a nossa natureza (CIC 488; Gl 4,4).",
        },
        {
          pratica:
            "Escolha uma coisa torta para endireitar nesta semana: uma conversa adiada, um pedido de perdão, um costume que afasta de Deus. Dê hoje o primeiro passo.",
        },
      ],
    },
    {
      titulo: "Sexta-feira da 1ª semana",
      blocos: [
        { leitura: "ISA 35:1-6" },
        {
          texto:
            "O deserto vai florir, os cegos verão, o coxo saltará como o cervo. Quando João Batista mandou perguntar se Jesus era aquele que havia de vir, Jesus respondeu apontando estes mesmos sinais (Mt 11,2-5). Diante do que parece seco e sem saída, Maria nos ensina a crer que para Deus nada é impossível.",
        },
        {
          pratica:
            "Visite ou telefone para alguém doente ou desanimado e leve uma palavra de coragem: o próprio Deus virá e vos salvará.",
        },
      ],
    },
    {
      titulo: "Sábado da 1ª semana",
      blocos: [
        { leitura: "MIC 5:1-3" },
        {
          texto:
            "Belém era pequena entre as cidades de Judá, e foi a escolhida para o nascimento do Rei pastor. O profeta fala daquela que há de dar à luz, e a Igreja reconhece nela a Virgem Maria (Lumen Gentium 55). Deus gosta de começar pelo que é pequeno.",
        },
        {
          pratica:
            "O sábado é dia dedicado a Nossa Senhora. Reze hoje os mistérios gozosos do terço, acompanhando a espera de Maria.",
        },
        { ir: "/rezar/terco", rotulo: "Rezar o terço" },
      ],
    },
    {
      titulo: "2º Domingo do Advento",
      blocos: [
        { leitura: "PSA 85:9-14", poema: true },
        {
          texto:
            "No salmo, a misericórdia e a verdade se encontram, e a verdade brota da terra. Santo Agostinho, comentando este salmo, ensina: a verdade brotou da terra porque Cristo nasceu de uma mulher; a Verdade nasceu da Virgem Maria (Comentário ao Salmo 84, 13). A Igreja continua a preparar o caminho do Senhor.",
        },
        {
          pratica:
            "Acenda a segunda vela da coroa. Procure saber onde e quando há confissão perto de você nestes dias, para chegar ao Natal reconciliado com Deus.",
        },
        LITURGIA,
      ],
    },
    {
      titulo: "Segunda-feira da 2ª semana",
      blocos: [
        { leitura: "ISA 30:18-21" },
        {
          texto:
            "O Senhor espera para ter misericórdia: não somos só nós que esperamos, Deus também espera por nós. Ele promete uma voz que dirá: este é o caminho, andai por ele. Maria ouviu essa voz e caminhou nela a vida inteira.",
        },
        {
          pratica:
            "Reserve dez minutos de silêncio, sem celular e sem televisão, para perguntar a Deus que caminho ele lhe pede neste tempo.",
        },
      ],
    },
    {
      titulo: "Terça-feira da 2ª semana",
      blocos: [
        { leitura: "ISA 40:25-31" },
        {
          texto:
            "Deus chama cada estrela pelo nome e não se esquece de ninguém. Aos cansados ele promete forças novas, como asas de águia. Maria também fez a longa viagem até Belém e não encontrou lugar na hospedaria (Lc 2,4-7), mas confiou em Deus até o fim.",
        },
        {
          pratica:
            "Se está cansado, diga isso a Deus com simplicidade. Depois ofereça ajuda a alguém mais cansado do que você, em casa ou no trabalho.",
        },
      ],
    },
    {
      titulo: "Quarta-feira da 2ª semana",
      blocos: [
        { leitura: "ZEP 3:14-17" },
        {
          texto:
            "Alegra-te, filha de Sião: o Senhor está no meio de ti. A Igreja chama Maria de excelsa filha de Sião, com quem se cumpre a longa espera da promessa (CIC 489; Lumen Gentium 55). Neste tempo celebramos também a Imaculada Conceição, a 8 de dezembro: Maria foi preservada intacta de toda mancha do pecado original desde o primeiro instante da sua conceição (CIC 491).",
        },
        {
          pratica:
            "Faça hoje algo que traga alegria a alguém da sua casa, sem esperar agradecimento.",
        },
      ],
    },
    {
      titulo: "Quinta-feira da 2ª semana",
      blocos: [
        { leitura: "MAT 3:1-6" },
        {
          texto:
            "João Batista, filho de Isabel, parenta de Maria (Lc 1,36), prepara o povo para a chegada de Jesus. Ele não fala de si mesmo: pede penitência, porque o Reino está perto. Os que o ouviam confessavam os seus pecados, e o Advento nos convida ao mesmo.",
        },
        {
          pratica:
            "Faça um exame de consciência com calma e marque o dia da sua confissão antes do Natal.",
        },
      ],
    },
    {
      titulo: "Sexta-feira da 2ª semana",
      blocos: [
        { leitura: "LUK 3:10-14" },
        {
          texto:
            "Que devemos fazer? João responde com coisas simples: repartir a roupa e a comida, ser honesto no trabalho, não maltratar ninguém. A conversão do Advento cabe no dia a dia. Maria viveu assim em Nazaré, numa vida escondida e fiel.",
        },
        {
          pratica:
            "Separe uma peça de roupa em bom estado ou um alimento e leve hoje a quem precisa.",
        },
      ],
    },
    {
      titulo: "Sábado da 2ª semana",
      blocos: [
        { leitura: "MAL 3:1-4" },
        {
          texto:
            "Malaquias anuncia um mensageiro que prepara o caminho e o Senhor que vem ao seu templo. Jesus disse que esse mensageiro era João Batista (Mt 11,10). Quando Maria e José levaram o Menino ao Templo, o Senhor entrou de fato na sua casa (Lc 2,22).",
        },
        {
          pratica:
            "Neste sábado, dia dedicado a Nossa Senhora, reze o Ângelus ao meio-dia, lembrando o sim de Maria.",
        },
        { ir: "/rezar/oracoes/angelus", rotulo: "Ângelus" },
      ],
    },
    {
      titulo: "3º Domingo do Advento",
      blocos: [
        { leitura: "PHP 4:4-7" },
        {
          texto:
            "Este é o domingo Gaudete, palavra latina que quer dizer alegrai-vos. O nome vem da antífona de entrada da missa, tirada destas palavras de São Paulo. Com o Natal já perto, a Igreja convida à alegria, e neste dia o padre pode usar vestes cor-de-rosa. A alegria de Maria nasce da mesma certeza: o Senhor está perto.",
        },
        {
          pratica:
            "Acenda a terceira vela da coroa, que em muitas casas é rosa. Entregue a Deus uma preocupação, como pede São Paulo, e agradeça por três coisas boas desta semana.",
        },
        LITURGIA,
      ],
    },
    {
      titulo: "Segunda-feira da 3ª semana",
      blocos: [
        { leitura: "NUM 24:15-17" },
        {
          texto:
            "Balaão, um estrangeiro, vê de longe uma estrela que nasce de Jacó. Muitos séculos depois, os magos do Oriente seguiriam uma estrela até Belém (Mt 2,2). Na Ladainha, a Igreja chama Maria de Estrela da manhã.",
        },
        {
          pratica:
            "Reze a Ladainha de Nossa Senhora e preste atenção aos títulos que falam de luz e de estrela.",
        },
        { ir: "/rezar/oracoes/ladainha-de-nossa-senhora", rotulo: "Ladainha de Nossa Senhora" },
      ],
    },
    {
      titulo: "Terça-feira da 3ª semana",
      blocos: [
        { leitura: "ISA 61:10-11" },
        {
          texto:
            "Eu me alegrarei no Senhor, e a minha alma exultará no meu Deus: com estas palavras de Isaías começa a missa da Imaculada Conceição. A Igreja as canta de Maria, que Deus vestiu com as vestes da salvação, cheia de graça desde a sua conceição (CIC 490-491). Como a terra faz brotar a semente, o Senhor fará brotar a justiça diante das nações.",
        },
        {
          pratica:
            "Plante uma semente num vaso ou cuide de uma planta da casa, como sinal da espera que cresce em silêncio.",
        },
      ],
    },
    {
      titulo: "Quarta-feira da 3ª semana",
      blocos: [
        { leitura: "ISA 45:8" },
        {
          texto:
            "Derramai, ó céus, o vosso orvalho, e as nuvens façam chover o Justo. Este versículo, em latim Rorate caeli, é cantado há séculos no Advento. O Salvador que a terra devia fazer brotar nasceu da Virgem Maria.",
        },
        {
          pratica:
            "Copie o versículo de hoje num papel e deixe-o num lugar onde o veja todos os dias até o Natal.",
        },
      ],
    },
    {
      titulo: "Quinta-feira da 3ª semana",
      blocos: [
        { leitura: "ISA 54:5-10" },
        {
          texto:
            "Deus fala ao seu povo como o esposo fala à esposa que se sentia abandonada: com misericórdia eterna tive compaixão de ti. Os montes podem se abalar, mas o seu amor não se afasta. São José também foi esposo fiel: acolheu Maria e o Menino e os protegeu nos perigos (Mt 2,13-14).",
        },
        {
          pratica:
            "Reze por um casal que passa por dificuldade. Se for casado, faça hoje um gesto de carinho ou de perdão com o seu cônjuge.",
        },
      ],
    },
    {
      titulo: "Sexta-feira da 3ª semana",
      blocos: [
        { leitura: "JHN 5:33-36" },
        {
          texto:
            "Jesus chama João Batista de lâmpada que ardia e iluminava. João não era a luz, mas apontava para ela. Maria faz o mesmo em Caná, quando diz aos servos que façam tudo o que Jesus mandar (Jo 2,5).",
        },
        {
          pratica:
            "Convide alguém que está afastado da Igreja para ir com você à missa do Natal.",
        },
      ],
    },
    {
      titulo: "17 de dezembro",
      blocos: [
        { leitura: "MAT 1:1-2.16-17" },
        {
          texto:
            "A partir de hoje, a liturgia se volta inteira para o Natal. A genealogia mostra que o Filho de Deus entrou numa família humana, com nomes e histórias, e no fim da lista aparece Maria, da qual nasceu Jesus. De 17 a 23 de dezembro, a oração da tarde da Igreja canta cada dia uma antífona que começa com Ó e chama o Messias por um título dos profetas.",
        },
        {
          antifona:
            "Ó Sabedoria, que saístes da boca do Altíssimo e alcançais de um extremo ao outro, ordenando tudo com firmeza e com doçura: vinde e ensinai-nos o caminho da prudência.",
        },
        {
          pratica:
            "Monte o presépio em casa, se ainda não montou, e deixe a manjedoura vazia até a noite de Natal.",
        },
        NOVENA,
      ],
    },
    {
      titulo: "18 de dezembro",
      blocos: [
        { leitura: "MAT 1:18-24" },
        {
          texto:
            "José descobre que Maria está grávida e, por ser justo, decide deixá-la em segredo. Deus lhe fala em sonho, e ele obedece sem dizer palavra. A antífona de hoje chama o Senhor de guia da casa de Israel, que deu a lei a Moisés: José se deixou guiar por ele.",
        },
        {
          antifona:
            "Ó Adonai, guia da casa de Israel, que aparecestes a Moisés no fogo da sarça e no Sinai lhe destes a lei: vinde resgatar-nos com o vosso braço estendido.",
        },
        {
          pratica:
            "Reze a Ladainha de São José pelos pais de família, especialmente pelos que estão sem trabalho.",
        },
        { ir: "/rezar/oracoes/ladainha-de-sao-jose", rotulo: "Ladainha de São José" },
        NOVENA,
      ],
    },
    {
      titulo: "19 de dezembro",
      blocos: [
        { leitura: "LUK 1:8-17" },
        {
          texto:
            "No templo, o anjo anuncia a Zacarias o nascimento de João, que virá com o espírito e o poder de Elias. Zacarias e Isabel esperaram a vida inteira, e Deus não esqueceu a oração deles; seis meses depois, o mesmo anjo seria enviado a Maria. A antífona de hoje chama o Messias de Raiz de Jessé, lembrando a profecia de Isaías.",
        },
        {
          antifona:
            "Ó Raiz de Jessé, erguida como sinal para os povos, diante de quem os reis se calarão e a quem as nações dirigirão as suas preces: vinde libertar-nos, não tardeis mais.",
        },
        {
          pratica:
            "Reze por um casal que deseja ter filhos, ou por alguém que espera há muito tempo uma resposta de Deus.",
        },
        NOVENA,
      ],
    },
    {
      titulo: "20 de dezembro",
      blocos: [
        { leitura: "LUK 1:26-38" },
        {
          texto:
            "O anjo anuncia a Maria que o seu filho receberá o trono de Davi e reinará para sempre. Maria pergunta como será, e depois se entrega: faça-se em mim segundo a tua palavra. A antífona de hoje chama Cristo de Chave de Davi, que abre e ninguém fecha: pelo sim de Maria, ele abriu para nós a porta da salvação.",
        },
        {
          antifona:
            "Ó Chave de Davi e cetro da casa de Israel, que abris e ninguém fecha, fechais e ninguém abre: vinde e tirai da prisão o cativo que está sentado nas trevas e na sombra da morte.",
        },
        {
          pratica:
            "Reze três Ave-Marias agradecendo o sim de Maria e diga a Deus um sim concreto para este Natal.",
        },
        NOVENA,
      ],
    },
    {
      titulo: "21 de dezembro",
      blocos: [
        { leitura: "LUK 1:39-45" },
        {
          texto:
            "Depois da Anunciação, Maria vai às pressas à casa de Isabel. Ao ouvir a sua saudação, João salta de alegria no ventre da mãe, e Isabel a chama bendita entre as mulheres. A antífona de hoje chama Cristo de Sol nascente: Maria leva essa luz consigo pelas montanhas da Judeia.",
        },
        {
          antifona:
            "Ó Sol nascente, esplendor da luz eterna e sol da justiça: vinde e iluminai os que estão sentados nas trevas e na sombra da morte.",
        },
        {
          pratica:
            "Faça uma visita, mesmo curta, a um parente ou vizinho idoso, ou telefone para alguém que está sozinho nestes dias.",
        },
        NOVENA,
      ],
    },
    {
      titulo: "22 de dezembro",
      blocos: [
        { leitura: "LUK 1:46-55", poema: true },
        {
          texto:
            "Na casa de Isabel, Maria canta o Magnificat. Ela não fala de si, mas do que Deus fez: olhou para a pequenez da sua serva, derrubou os poderosos e elevou os humildes. A Igreja reza este cântico todos os dias, na oração da tarde.",
        },
        {
          antifona:
            "Ó Rei das nações, por elas desejado, pedra angular que de dois povos fazeis um só: vinde e salvai o homem que formastes do barro.",
        },
        {
          pratica:
            "À noite, reze de novo o Magnificat, devagar, e agradeça a Deus por três coisas que ele fez neste ano por você e pela sua família.",
        },
        NOVENA,
      ],
    },
    {
      titulo: "23 de dezembro",
      blocos: [
        { leitura: "LUK 1:57-66" },
        {
          texto:
            "Nasce João, e Zacarias, que estava mudo, volta a falar quando escreve: João é o seu nome. Hoje se canta a última antífona Ó, que chama o Senhor de Emanuel, Deus conosco. Lidas de trás para a frente, as iniciais dos sete títulos em latim formam ERO CRAS, que quer dizer: amanhã estarei aí.",
        },
        {
          antifona:
            "Ó Emanuel, nosso Rei e legislador, esperança das nações e seu Salvador: vinde salvar-nos, Senhor nosso Deus.",
        },
        {
          pratica:
            "Combine com a família a oração da noite de Natal: quem vai ler o Evangelho e quem vai pôr o Menino no presépio.",
        },
        NOVENA,
      ],
    },
    {
      titulo: "24 de dezembro",
      blocos: [
        { leitura: "LUK 1:68-79", poema: true },
        {
          texto:
            "Zacarias, cheio do Espírito Santo, bendiz a Deus que visitou o seu povo. Ele fala do sol que nasce do alto para iluminar os que estão nas trevas: esta noite, essa luz nasce em Belém. Maria chega ao fim da espera, e nós com ela.",
        },
        {
          pratica:
            "Antes da ceia, reúna a família diante do presépio, leia o nascimento de Jesus no Evangelho de São Lucas e coloque o Menino na manjedoura.",
        },
        { ir: "/biblia/LUK/2", rotulo: "O nascimento de Jesus" },
        NOVENA,
      ],
    },
  ],
};

export default conteudo;
