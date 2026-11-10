import type { ConteudoDaConsagracao } from "./tipos";

const conteudo: ConteudoDaConsagracao = {
  revisao: "a revisar pelo dono",
  periodos: [
    {
      nome: "Esvaziar-se do espírito do mundo",
      de: 1,
      ate: 12,
      oracoes: [{ rezar: "veni-creator" }, { rezar: "ave-maris-stella" }, { rezar: "magnificat" }],
    },
    {
      nome: "Conhecimento de si mesmo",
      de: 13,
      ate: 19,
      oracoes: [
        { rubrica: "Repita muitas vezes ao longo do dia: Senhor, que eu veja. Senhor, que eu me conheça. Vinde, Espírito Santo." },
        { rezar: "ladainha-do-espirito-santo" },
        { rezar: "ave-maris-stella" },
        { rezar: "ladainha-de-nossa-senhora" },
      ],
    },
    {
      nome: "Conhecimento da Santíssima Virgem",
      de: 20,
      ate: 26,
      oracoes: [
        { rezar: "ladainha-do-espirito-santo" },
        { rezar: "ave-maris-stella" },
        { rezar: "ladainha-de-nossa-senhora" },
        { rubrica: "Nesta semana, reze cada dia o Rosário inteiro ou, ao menos, um terço, pedindo a graça de conhecer melhor Maria." },
        { ir: "/rezar/terco", rotulo: "Rezar o terço" },
      ],
    },
    {
      nome: "Conhecimento de Jesus Cristo",
      de: 27,
      ate: 33,
      oracoes: [
        { rubrica: "Repita muitas vezes ao longo do dia: Senhor, que eu vos conheça. Senhor, que eu veja quem sois." },
        { rezar: "ladainha-do-espirito-santo" },
        { rezar: "ave-maris-stella" },
        { rezar: "ladainha-do-nome-de-jesus" },
        { rezar: "oracao-de-santo-agostinho" },
        { rezar: "o-jesus-que-viveis-em-maria" },
      ],
    },
  ],
  etapas: [
    {
      titulo: "1º dia: Não ameis o mundo",
      blocos: [
        { leitura: "1JN 2:15-17" },
        {
          texto:
            "São Luís pede que a preparação comece por doze dias para nos esvaziarmos do espírito do mundo, que é contrário ao espírito de Jesus Cristo. O mundo, aqui, não é a criação de Deus, que é boa, mas o desejo de prazer, de posse e de aparência que nos afasta dele. Antes de nos enchermos de Jesus por Maria, precisamos abrir espaço no coração. Peçamos ao Espírito Santo a luz para ver o que nos prende.",
        },
        { rubrica: "Para ler mais: Tratado, nº 227; Imitação de Cristo, livro I, capítulo 1." },
        { pratica: "Escolha uma coisa supérflua de que você gosta muito, como um programa, uma compra ou o tempo no celular, e deixe-a de lado durante estes doze dias." },
      ],
    },
    {
      titulo: "2º dia: As bem-aventuranças",
      blocos: [
        { leitura: "MAT 5:1-12" },
        {
          texto:
            "As bem-aventuranças são o retrato de Jesus e o contrário do que o mundo chama felicidade. O mundo louva o rico, o forte e o que se impõe; Jesus chama felizes os pobres de espírito, os mansos, os que choram e os que têm fome de justiça. Maria viveu cada uma delas antes de todos. Perguntemos com sinceridade qual destas palavras mais nos custa aceitar.",
        },
        { pratica: "Releia as bem-aventuranças devagar e escolha uma para viver hoje, numa situação concreta." },
      ],
    },
    {
      titulo: "3º dia: Sal da terra e luz do mundo",
      blocos: [
        { leitura: "MAT 5:13-16" },
        {
          texto:
            "O cristão que se acomoda ao espírito do mundo é como o sal que perdeu a força. Jesus não nos pede que fujamos dos outros, mas que sejamos luz no meio deles, para que vejam as boas obras e glorifiquem o Pai. A luz não chama a atenção para si mesma: mostra o caminho. Que as nossas obras levem a Deus, e não à nossa vaidade.",
        },
        { pratica: "Num lugar onde você costuma esconder a fé, faça hoje o sinal da cruz antes da refeição ou diga uma palavra de esperança a alguém." },
      ],
    },
    {
      titulo: "4º dia: Reconciliar-se com o irmão",
      blocos: [
        { leitura: "MAT 5:20-24" },
        {
          texto:
            "Jesus pede uma justiça maior que a dos fariseus, que chegue ao fundo do coração. Não basta não matar: a ira guardada e a palavra que humilha já ferem o irmão. Deus prefere que deixemos a oferta diante do altar e façamos primeiro as pazes. O espírito do mundo guarda mágoas e quer ter razão; o espírito de Jesus perdoa e procura a paz.",
        },
        { rubrica: "Para ler mais: Imitação de Cristo, livro I, capítulo 16." },
        { pratica: "Pense numa pessoa com quem você está em conflito. Reze por ela hoje e, se for possível, dê o primeiro passo para a reconciliação." },
      ],
    },
    {
      titulo: "5º dia: Amar os inimigos",
      blocos: [
        { leitura: "MAT 5:43-48" },
        {
          texto:
            "Amar quem nos ama é fácil; até os que não conhecem a Deus fazem isso. Jesus nos chama a ser filhos do Pai, que faz nascer o sol sobre bons e maus. Esse amor não nasce de nós: é graça, e por isso o pedimos. Na cruz, Jesus rezou pelos que o crucificavam, e Maria, de pé junto à cruz, uniu-se à oferta do Filho.",
        },
        { pratica: "Reze hoje uma Ave-Maria por alguém que o feriu ou que você tem dificuldade de amar." },
      ],
    },
    {
      titulo: "6º dia: O que se faz em segredo",
      blocos: [
        { leitura: "MAT 6:1-6" },
        {
          texto:
            "O mundo vive de aparência e de aplauso. Jesus nos ensina a dar esmola, rezar e jejuar diante do Pai, que vê o que está escondido. Maria viveu assim em Nazaré, numa vida simples e escondida aos olhos dos homens. Quem busca só o olhar de Deus fica livre da opinião dos outros.",
        },
        { pratica: "Dê hoje uma esmola ou faça um favor sem que ninguém fique sabendo." },
      ],
    },
    {
      titulo: "7º dia: A oração do Pai-Nosso",
      blocos: [
        { leitura: "MAT 6:7-15" },
        {
          texto:
            "Jesus não nos ensina a falar muito, mas a falar como filhos. No Pai-Nosso, os primeiros pedidos são o nome, o reino e a vontade de Deus; só depois vêm as nossas necessidades. O espírito do mundo põe o eu em primeiro lugar, e a oração de Jesus o coloca no fim. Ela nos lembra também que o perdão que pedimos está ligado ao perdão que damos.",
        },
        { pratica: "Reze hoje um Pai-Nosso bem devagar, parando em cada pedido." },
      ],
    },
    {
      titulo: "8º dia: O tesouro no céu",
      blocos: [
        { leitura: "MAT 6:19-24" },
        {
          texto:
            "Onde está o nosso tesouro, aí está o nosso coração. Não se pode servir a Deus e às riquezas, porque cada um quer o coração inteiro. As coisas da terra passam, e quem se apoia nelas fica de mãos vazias. Peçamos um olhar simples, que veja as coisas como Deus as vê.",
        },
        { pratica: "Partilhe hoje alguma coisa sua com quem precisa." },
      ],
    },
    {
      titulo: "9º dia: A confiança no Pai",
      blocos: [
        { leitura: "MAT 6:25-34" },
        {
          texto:
            "A preocupação sem fim com o amanhã é outra marca do espírito do mundo. Jesus aponta as aves do céu e os lírios do campo: o Pai sabe do que precisamos. Isso não nos dispensa do trabalho, mas nos tira a angústia de quem pensa que tudo depende só de si. Buscar primeiro o Reino é pôr a vida nas mãos de Deus.",
        },
        { pratica: "Entregue a Deus, numa oração curta, a preocupação que mais o aflige hoje." },
      ],
    },
    {
      titulo: "10º dia: Não julgar",
      blocos: [
        { leitura: "MAT 7:1-5" },
        {
          texto:
            "É fácil ver o cisco no olho do outro e esquecer a trave no nosso. O juízo apressado nasce do orgulho, que nos coloca acima dos irmãos. Jesus nos manda olhar primeiro para dentro, e é esse o caminho da semana que vem, a do conhecimento de nós mesmos. A medida que usarmos com os outros será usada conosco.",
        },
        { rubrica: "Para ler mais: Imitação de Cristo, livro I, capítulo 14." },
        { pratica: "Hoje, cada vez que estiver para criticar alguém, cale-se e reze por essa pessoa." },
      ],
    },
    {
      titulo: "11º dia: A porta estreita",
      blocos: [
        { leitura: "MAT 7:7-14" },
        {
          texto:
            "O caminho largo é o de quem segue a maioria sem perguntar aonde ela vai. Jesus fala de uma porta estreita, que leva à vida, e garante que o Pai dá coisas boas a quem lhe pede. Ninguém atravessa essa porta sozinho: pedimos, buscamos e batemos. São Luís chama a devoção a Maria de caminho fácil, curto, perfeito e seguro para chegar a Jesus.",
        },
        { rubrica: "Para ler mais: Tratado, nº 152; Imitação de Cristo, livro II, capítulo 11." },
        { pratica: "Peça hoje a Deus, com insistência, a graça da sua própria conversão." },
      ],
    },
    {
      titulo: "12º dia: A casa sobre a rocha",
      blocos: [
        { leitura: "MAT 7:21-27" },
        {
          texto:
            "Não basta dizer: Senhor, Senhor. É preciso fazer a vontade do Pai. A casa construída sobre a rocha resiste à chuva e ao vento porque está firmada na palavra de Jesus posta em prática. Ao fim destes doze dias, olhemos com honestidade para o que mudou e para o que ainda falta.",
        },
        { rubrica: "Para ler mais: Imitação de Cristo, livro I, capítulo 25." },
        { pratica: "Escolha um propósito concreto destes doze dias e escreva-o para não esquecer." },
      ],
    },
    {
      titulo: "13º dia: Senhor, que eu veja",
      blocos: [
        { leitura: "LUK 18:35-43" },
        {
          texto:
            "Começa a primeira semana, em que todas as orações pedem o conhecimento de nós mesmos e a contrição dos pecados. São Luís sugere repetir as palavras do cego: Senhor, que eu veja. Sem a luz de Deus não enxergamos bem a nossa alma, porque o amor-próprio desculpa tudo. Peçamos ao Espírito Santo que nos mostre a verdade com a mesma misericórdia com que Jesus curou o cego.",
        },
        { rubrica: "Para ler mais: Tratado, nº 228." },
        { pratica: "À noite, faça um exame de consciência sincero, sem pressa e sem se desculpar." },
      ],
    },
    {
      titulo: "14º dia: O fariseu e o publicano",
      blocos: [
        { leitura: "LUK 18:9-14" },
        {
          texto:
            "O fariseu reza olhando para si e para os defeitos dos outros; o publicano não ousa levantar os olhos e pede misericórdia. Só o segundo volta para casa justificado. Conhecer-se não é desanimar, mas reconhecer a verdade diante de Deus. A humildade é a porta por onde a graça entra.",
        },
        { rubrica: "Para ler mais: Imitação de Cristo, livro I, capítulo 2." },
        { pratica: "Repita várias vezes hoje a oração do publicano: “Meu Deus, sê propício a mim, que sou pecador.”" },
      ],
    },
    {
      titulo: "15º dia: Caindo em si",
      blocos: [
        { leitura: "LUK 15:17-24" },
        {
          texto:
            "O filho pródigo só volta quando cai em si e vê aonde o levou a vida longe do pai. Conhecer o próprio pecado dói, mas é o começo da volta. E o pai já o esperava: correu ao seu encontro e o abraçou antes de ouvir o pedido inteiro. Assim é Deus com quem se arrepende.",
        },
        { pratica: "Prepare-se para uma boa confissão e veja desde já quando poderá se confessar antes do dia da consagração." },
      ],
    },
    {
      titulo: "16º dia: O mal que não quero",
      blocos: [
        { leitura: "ROM 7:18-25" },
        {
          texto:
            "São Paulo confessa uma luta que todos conhecemos: queremos o bem e fazemos o mal. São Luís lembra que o pecado original e os nossos pecados deixaram em nós más inclinações, que mancham até as nossas boas obras. Por isso entregamos tudo a Maria, que purifica as nossas pobres ofertas e as apresenta a Jesus. A resposta de Paulo é também a nossa: a graça de Deus, por Jesus Cristo.",
        },
        { rubrica: "Para ler mais: Tratado, nº 78 a 82 e 146 a 149." },
        { pratica: "Ao oferecer o seu dia, peça a Maria que o apresente a Jesus em seu lugar." },
      ],
    },
    {
      titulo: "17º dia: Tende piedade de mim, ó Deus",
      blocos: [
        { leitura: "PSA 51:3-14", poema: true },
        {
          texto:
            "O título deste salmo o liga ao arrependimento de Davi depois do pecado com Betsabé. Ele não esconde nada nem culpa os outros: “o meu pecado está sempre diante de mim”. Mas não fica no remorso; pede um coração puro e um espírito novo. A verdadeira contrição une a dor do pecado à confiança no perdão.",
        },
        { rezar: "ato-de-contricao" },
        { rubrica: "Para ler mais: Imitação de Cristo, livro I, capítulo 21." },
        { pratica: "Pense num pecado concreto de que você ainda não se arrependeu de verdade e peça a Deus a dor sincera de tê-lo cometido." },
      ],
    },
    {
      titulo: "18º dia: Somos pó",
      blocos: [
        { leitura: "PSA 103:8-17", poema: true },
        {
          texto:
            "São Luís recorda as três considerações de São Bernardo: o que fomos, o que somos e o que seremos. Viemos do pó, somos frágeis, e os nossos dias passam como a flor do campo. O salmo une essa fraqueza à misericórdia de Deus, que se compadece de nós como um pai. Reconhecer a nossa pequenez nos leva a confiar só nele.",
        },
        { rubrica: "Para ler mais: Imitação de Cristo, livro I, capítulo 22." },
        { pratica: "Reserve alguns minutos de silêncio para pensar na própria morte e no que você gostaria de levar diante de Deus." },
      ],
    },
    {
      titulo: "19º dia: Sou um homem pecador",
      blocos: [
        { leitura: "LUK 5:1-11" },
        {
          texto:
            "Diante do poder de Jesus, Pedro se descobre pecador e cai aos seus pés. Jesus não se afasta dele: chama-o para ser pescador de homens. Conhecer-se de verdade não nos afasta de Deus, mas nos entrega a ele. Terminamos esta semana sabendo que sozinhos nada podemos, e por isso vamos a Jesus pelas mãos de Maria.",
        },
        { rubrica: "Para ler mais: Imitação de Cristo, livro III, capítulo 8." },
        { pratica: "Escreva em poucas palavras o que esta semana lhe mostrou de si mesmo e entregue isso a Maria numa oração." },
      ],
    },
    {
      titulo: "20º dia: A mulher prometida",
      blocos: [
        { leitura: "GEN 3:9-15" },
        {
          texto:
            "Começa a semana dedicada a conhecer Maria, e essa luz se pede ao Espírito Santo. Logo depois da queda, Deus anuncia uma inimizade entre a serpente e a mulher, e entre as suas descendências. A Igreja vê nessa mulher a Mãe do Redentor, a nova Eva (CIC 411). São Luís ensina que essa inimizade dura até o fim dos tempos, entre os filhos de Maria e os seguidores do demônio.",
        },
        { rubrica: "Para ler mais: Tratado, nº 51 a 54." },
        { pratica: "Reze o terço de hoje pedindo ao Espírito Santo que lhe faça conhecer melhor Maria." },
      ],
    },
    {
      titulo: "21º dia: Faça-se em mim",
      blocos: [
        { leitura: "LUK 1:26-38" },
        {
          texto:
            "Deus Pai quis dar o seu Filho ao mundo por meio de Maria, e esperou o seu sim. Ela se chama a si mesma escrava do Senhor, e é por isso que São Luís fala de nos fazermos escravos de amor: entregar-se por inteiro, como ela. O Verbo se fez carne no seu seio, e desde então Jesus vem a nós por ela. O sim de Maria é o modelo do nosso.",
        },
        { rubrica: "Para ler mais: Tratado, nº 16 a 18." },
        { pratica: "Reze o Ângelus ao meio-dia, lembrando o sim de Maria." },
        { ir: "/rezar/oracoes/angelus", rotulo: "Rezar o Ângelus" },
      ],
    },
    {
      titulo: "22º dia: Maria leva Jesus",
      blocos: [
        { leitura: "LUK 1:39-45" },
        {
          texto:
            "Maria não guarda Jesus para si: vai depressa servir Isabel. À sua saudação, o menino salta no ventre e Isabel fica cheia do Espírito Santo. São Luís observa que Jesus quis começar os seus milagres de graça pela palavra de Maria. Quem se entrega a ela aprende a servir e a levar Jesus aos outros.",
        },
        { rezar: "magnificat" },
        { rubrica: "Para ler mais: Tratado, nº 19." },
        { pratica: "Visite ou telefone hoje para alguém que está sozinho ou doente." },
      ],
    },
    {
      titulo: "23º dia: Uma espada traspassará a tua alma",
      blocos: [
        { leitura: "LUK 2:25-35" },
        {
          texto:
            "Ao apresentar Jesus no templo, Maria o oferece ao Pai. Simeão anuncia que uma espada lhe traspassará a alma: a vida dela estará unida, até a cruz, à vida do Filho. Maria não foge da dor; guarda tudo no coração e permanece fiel. Consagrar-se a ela é aprender a oferecer a Deus também as nossas dores.",
        },
        { pratica: "Ofereça a Deus, pelas mãos de Maria, um sofrimento ou uma contrariedade de hoje." },
      ],
    },
    {
      titulo: "24º dia: Fazei tudo o que ele vos disser",
      blocos: [
        { leitura: "JHN 2:1-11" },
        {
          texto:
            "Em Caná, Maria percebe a necessidade antes de todos e a leva ao Filho. Depois, diz aos que serviam: “Fazei tudo o que ele vos disser.” São as últimas palavras dela que os Evangelhos registram, e resumem toda a verdadeira devoção: Maria nunca nos prende a si, sempre nos leva a Jesus. São Luís ensina que Deus quis distribuir as suas graças por meio dela.",
        },
        { rubrica: "Para ler mais: Tratado, nº 23 a 25." },
        { pratica: "Apresente a Maria, com simplicidade, uma necessidade da sua família." },
      ],
    },
    {
      titulo: "25º dia: Eis aí a tua mãe",
      blocos: [
        { leitura: "JHN 19:25-27" },
        {
          texto:
            "Junto à cruz, Jesus entrega Maria ao discípulo amado, e nele a todos nós. Desde aquela hora, o discípulo a recebeu em sua casa. São Luís vê nisso o que faz quem se consagra: dar a Maria um lugar em tudo o que somos e temos. Ela, que esteve de pé junto à cruz, não abandona os filhos na hora da dor.",
        },
        { rubrica: "Para ler mais: Tratado, nº 179." },
        { pratica: "Dê a Maria um lugar visível na sua casa, com uma imagem e um momento de oração em família." },
      ],
    },
    {
      titulo: "26º dia: Um grande sinal no céu",
      blocos: [
        { leitura: "REV 12:1-6" },
        {
          texto:
            "O Apocalipse mostra uma mulher vestida de sol, com a lua debaixo dos pés e uma coroa de doze estrelas. A Igreja reconhece nessa imagem também Maria, a Mãe do Messias, elevada à glória do céu. São Luís ensina que, nos últimos tempos, Deus quer que Maria seja mais conhecida, para que Jesus seja mais conhecido e amado. Terminamos esta semana pedindo que ela reine em nosso coração, para que nele reine Jesus.",
        },
        { rubrica: "Para ler mais: Tratado, nº 49 e 50." },
        { pratica: "Escolha um dos títulos da Ladainha de Nossa Senhora e volte a ele várias vezes ao longo do dia." },
      ],
    },
    {
      titulo: "27º dia: O Verbo se fez carne",
      blocos: [
        { leitura: "JHN 1:1-5.14" },
        {
          texto:
            "A última semana é para conhecer Jesus Cristo, o fim de toda verdadeira devoção. São Luís sugere repetir com Santo Agostinho: Senhor, que eu vos conheça. Aquele que é Deus desde o princípio se fez carne e habitou entre nós, formado no seio de Maria. A Encarnação, celebrada a 25 de março, é o mistério próprio desta consagração.",
        },
        { rubrica: "Para ler mais: Tratado, nº 230 e 243." },
        { pratica: "Faça hoje uma visita ao Santíssimo ou, em casa, ajoelhe-se alguns minutos para adorar o Verbo feito homem." },
      ],
    },
    {
      titulo: "28º dia: Ele se aniquilou",
      blocos: [
        { leitura: "PHP 2:5-11" },
        {
          texto:
            "O Filho de Deus não se apegou à sua glória: tomou a natureza de servo e se humilhou até a morte de cruz. Por isso o Pai lhe deu o nome que está acima de todo nome. Esse é o caminho que ele escolheu, e não há outro para nós. Quem quer conhecer Jesus precisa descer com ele.",
        },
        { pratica: "Aceite hoje, sem reclamar, uma tarefa humilde ou uma humilhação." },
      ],
    },
    {
      titulo: "29º dia: Em Nazaré, obediente",
      blocos: [
        { leitura: "LUK 2:46-52" },
        {
          texto:
            "Depois de se mostrar no templo como Filho do Pai, Jesus desce a Nazaré e vive obediente a Maria e a José. São Luís se admira de que a Sabedoria encarnada tenha passado trinta anos dependendo de sua Mãe. Ensina que, nessa vida escondida, Jesus deu mais glória ao Pai do que se tivesse convertido o mundo inteiro com milagres. A nossa consagração imita essa dependência.",
        },
        { rubrica: "Para ler mais: Tratado, nº 18 e 139." },
        { pratica: "Obedeça hoje de boa vontade a quem tem autoridade sobre você, em casa ou no trabalho." },
      ],
    },
    {
      titulo: "30º dia: O caminho, a verdade e a vida",
      blocos: [
        { leitura: "JHN 14:1-9" },
        {
          texto:
            "Filipe convivia com Jesus havia muito tempo e ainda não o conhecia. Também nós podemos rezar e frequentar a igreja sem conhecer de verdade o Senhor. Jesus é o caminho para o Pai e o fim último de todas as nossas devoções; se a devoção a Maria nos afastasse dele, seria uma ilusão. Peçamos a graça de conhecê-lo e amá-lo cada dia mais.",
        },
        { rubrica: "Para ler mais: Tratado, nº 61 e 62." },
        { pratica: "Leia hoje um capítulo inteiro de um dos Evangelhos, sem pressa." },
      ],
    },
    {
      titulo: "31º dia: Permanecei em mim",
      blocos: [
        { leitura: "JHN 15:1-8" },
        {
          texto:
            "Jesus é a videira, e nós somos os ramos: sem ele nada podemos fazer. São Luís usa essa imagem para lembrar que pertencemos inteiramente a Cristo e que ele espera de nós o fruto das boas obras. Permanecer nele é viver da sua palavra, dos sacramentos e da oração. A poda que às vezes sofremos é cuidado do Pai, para que demos mais fruto.",
        },
        { rubrica: "Para ler mais: Tratado, nº 68." },
        { pratica: "Participe da Missa num dia de semana, se puder, ou faça uma comunhão espiritual." },
        { rezar: "comunhao-espiritual" },
      ],
    },
    {
      titulo: "32º dia: Lembra-te de mim",
      blocos: [
        { leitura: "LUK 23:39-46" },
        {
          texto:
            "Na cruz, Jesus entrega tudo, até o último suspiro, nas mãos do Pai. Um ladrão o insulta; o outro reconhece o próprio pecado e confia: “Senhor, lembra-te de mim quando entrares no teu reino.” Jesus lhe promete o paraíso naquele mesmo dia. Conhecer Jesus é conhecer esse amor que se dá inteiro e nunca recusa quem se volta para ele.",
        },
        { rubrica: "Para ler mais: Imitação de Cristo, livro II, capítulo 12." },
        { pratica: "Reze hoje a Via-Sacra ou passe alguns minutos diante de um crucifixo." },
        { ir: "/rezar/via-sacra", rotulo: "Rezar a Via-Sacra" },
      ],
    },
    {
      titulo: "33º dia: Uma vida nova",
      blocos: [
        { leitura: "ROM 6:3-11" },
        {
          texto:
            "No batismo morremos com Cristo para o pecado e começamos uma vida nova. São Luís ensina que a consagração a Jesus por Maria é uma renovação perfeita das promessas do batismo: renunciamos de novo ao demônio, ao mundo e ao pecado, e nos damos inteiramente a Jesus. Desta vez, porém, somos nós que falamos, e não os padrinhos por nós. Amanhã faremos esse ato com plena liberdade.",
        },
        { rubrica: "Para ler mais: Tratado, nº 126 a 130." },
        { pratica: "Prepare-se para a confissão e a comunhão e leia com calma o ato de consagração." },
        { ir: "/rezar/oracoes/consagracao-a-nossa-senhora", rotulo: "Ler o ato de consagração" },
      ],
    },
  ],
  ato: {
    titulo: "Dia da consagração",
    blocos: [
      {
        texto:
          "Ao fim das três semanas, São Luís pede que nos confessemos e comunguemos com a intenção de nos entregarmos a Jesus Cristo pelas mãos de Maria. Se não for possível confessar-se hoje, faça-o nos dias próximos; e, se não puder comungar, faça a comunhão espiritual. Depois da comunhão, reze o ato de consagração.",
      },
      {
        texto:
          "São Luís fala de escravidão de amor. Assim como o próprio Jesus quis depender de Maria, nós nos entregamos a ele por meio dela, livremente e por amor, renovando as promessas do batismo.",
      },
      { rubrica: "Para ler mais: Tratado, nº 68 a 77, 126 e 231 a 233." },
      { rezar: "veni-creator" },
      { leitura: "JHN 19:25-27" },
      { rubrica: "Reze devagar o ato de consagração. Onde está N., diga o seu nome." },
      { rezar: "consagracao-a-nossa-senhora" },
      { rezar: "magnificat" },
      {
        texto:
          "São Luís recomenda escrever o ato de consagração, ou guardá-lo impresso, e assiná-lo no mesmo dia. Pede também um pequeno tributo a Jesus e a Maria, conforme a devoção e as possibilidades de cada um: um jejum, uma mortificação, uma esmola, uma vela. O que vale é a boa vontade.",
      },
      { pratica: "Todos os anos, no mesmo dia, renove a consagração, fazendo antes as mesmas três semanas de preparação." },
      { linhas: ["Sou todo vosso, e tudo o que tenho vos pertence, ó amável Jesus, por Maria, vossa santa Mãe."], titulo: "Para renovar cada dia" },
    ],
  },
};

export default conteudo;
