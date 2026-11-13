import type { ConteudoDoDesafio } from "../tipos";

const liturgia = { ir: "liturgia", rotulo: "Leituras da missa de hoje" };
const viaSacra = { ir: "/rezar/via-sacra", rotulo: "Rezar a Via-Sacra" };
const semanaSanta = { ir: "/rezar/semana-santa", rotulo: "Semana Santa" };

const conteudo: ConteudoDoDesafio = {
  revisao: "a revisar pelo dono",
  etapas: [
    {
      titulo: "Quarta-feira de Cinzas",
      blocos: [
        { leitura: "JOL 2:12-14" },
        {
          texto:
            "Com as cinzas na testa, começamos os quarenta dias que preparam a Páscoa. O Senhor não pede roupas rasgadas, mas um coração que volta para ele. A Igreja nos dá três caminhos para essa volta: a oração, o jejum e a esmola (CIC 1434).",
        },
        {
          pratica:
            "Hoje é dia de jejum e abstinência (cân. 1251). O jejum obriga os maiores de idade, isto é, de dezoito anos completos (cân. 97), até começarem os sessenta anos, e a abstinência, os que completaram catorze anos (cân. 1252); o modo de guardá-los segue as normas da CNBB (cân. 1253), e o pároco pode dispensar por causa justa (cân. 1245). Escolha também uma coisa simples que você vai oferecer a Deus durante toda a Quaresma.",
        },
      ],
    },
    {
      titulo: "Quinta-feira depois das Cinzas",
      blocos: [
        { leitura: "DEU 30:15-20" },
        {
          texto:
            "Deus coloca diante de nós a vida e a morte, e nos pede que escolhamos a vida. Converter-se é essa escolha, feita de novo a cada dia. A conversão começa por dentro, no coração, antes de aparecer nas obras (CIC 1430).",
        },
        {
          pratica:
            "Marque um horário fixo para rezar todos os dias desta Quaresma, nem que sejam dez minutos, e reze hoje nesse horário.",
        },
      ],
    },
    {
      titulo: "Sexta-feira depois das Cinzas",
      blocos: [
        { leitura: "ISA 58:6-9" },
        {
          texto:
            "O jejum que agrada a Deus não fica no estômago: ele abre as mãos para quem tem fome. A Quaresma e cada sexta-feira, em memória da morte do Senhor, são tempos fortes de penitência na Igreja (CIC 1438; cân. 1250). Privar-se de algo só tem sentido quando nos torna mais livres para amar.",
        },
        {
          pratica:
            "Hoje, guarde a abstinência das sextas-feiras (cân. 1251), conforme as normas da CNBB, abra mão de algo de que gosta e reserve o que economizar para dar a quem precisa.",
        },
        viaSacra,
      ],
    },
    {
      titulo: "Sábado depois das Cinzas",
      blocos: [
        { leitura: "LUK 5:27-32" },
        {
          texto:
            "Jesus olha para Levi, sentado no meio do seu trabalho, e lhe diz: “Segue-me.” Ele não veio para os que se acham justos, mas para os doentes que reconhecem precisar de médico. A Quaresma começa quando deixamos que ele nos olhe como somos.",
        },
        {
          pratica:
            "Hoje, antes de dormir, peça a Jesus que lhe mostre uma coisa da sua vida que precisa mudar nesta Quaresma.",
        },
      ],
    },
    {
      titulo: "1º Domingo da Quaresma",
      blocos: [
        { leitura: "DEU 8:2-6" },
        {
          texto:
            "Neste primeiro domingo, a Igreja nos leva com Jesus ao deserto. Cada ano, nos quarenta dias da Quaresma, ela se une ao Senhor que jejuou e foi tentado (CIC 540). O deserto é o lugar onde se descobre o que há no coração e onde se aprende que não vivemos só de pão.",
        },
        liturgia,
        {
          pratica:
            "Participe da missa com atenção e, em casa, desligue a televisão e o celular por uma hora para ficar em silêncio com Deus.",
        },
      ],
    },
    {
      titulo: "Segunda-feira da 1ª semana",
      blocos: [
        { leitura: "MAT 4:1-4" },
        {
          texto:
            "Depois de quarenta dias de jejum, Jesus tem fome, e o tentador lhe oferece pão. Ele responde que a palavra de Deus alimenta mais que o pão. O jejum nos ensina a ter fome de Deus.",
        },
        {
          pratica:
            "Hoje, deixe de comer algo entre as refeições e use esse tempo para ler devagar um trecho do Evangelho.",
        },
      ],
    },
    {
      titulo: "Terça-feira da 1ª semana",
      blocos: [
        { leitura: "MAT 4:5-7" },
        {
          texto:
            "O tentador quer que Jesus obrigue o Pai a mostrar o seu poder. Jesus confia sem pedir provas. Também nós somos tentados a rezar como quem cobra de Deus, em vez de entregar a ele a nossa vida.",
        },
        {
          pratica:
            "Hoje, na sua oração, não peça nada: apenas agradeça a Deus por cinco coisas que ele já lhe deu.",
        },
      ],
    },
    {
      titulo: "Quarta-feira da 1ª semana",
      blocos: [
        { leitura: "MAT 4:8-11" },
        {
          texto:
            "O tentador oferece todos os reinos do mundo em troca de adoração. Jesus responde que só a Deus se adora e só a ele se serve. O dinheiro, o poder e a fama continuam pedindo o lugar de Deus no nosso coração.",
        },
        {
          pratica:
            "Hoje, dê a alguém que precisa uma coisa sua de que você gosta, e não apenas o que está sobrando.",
        },
      ],
    },
    {
      titulo: "Quinta-feira da 1ª semana",
      blocos: [
        { leitura: "MAT 6:7-13" },
        {
          texto:
            "Jesus não nos ensina muitas palavras, mas uma oração de filhos. No Pai-nosso pedimos o pão de cada dia, o perdão e a força para não cair em tentação. Rezada com o coração, essa oração basta para um dia inteiro.",
        },
        {
          pratica:
            "Hoje, reze o Pai-nosso bem devagar, parando um pouco em cada pedido.",
        },
      ],
    },
    {
      titulo: "Sexta-feira da 1ª semana",
      blocos: [
        { leitura: "1CO 10:12-13" },
        {
          texto:
            "Ninguém está tão firme que não possa cair, e ninguém está tão fraco que Deus o abandone. Ele é fiel e não permite que sejamos tentados além das nossas forças. A penitência da sexta-feira nos ajuda a vigiar e a confiar.",
        },
        {
          pratica:
            "Hoje, fique sem carne e sem redes sociais ou televisão durante o dia, e ofereça isso pela conversão dos pecadores.",
        },
        viaSacra,
      ],
    },
    {
      titulo: "Sábado da 1ª semana",
      blocos: [
        { leitura: "HEB 4:14-16" },
        {
          texto:
            "Jesus foi tentado em tudo como nós, menos no pecado. Por isso ele compreende as nossas fraquezas e nos chama a chegar perto com confiança. Quem foi consolado por ele aprende a consolar os outros.",
        },
        {
          pratica:
            "Hoje, visite ou telefone para uma pessoa idosa, doente ou sozinha que você conhece.",
        },
      ],
    },
    {
      titulo: "2º Domingo da Quaresma",
      blocos: [
        { leitura: "2PE 1:16-18" },
        {
          texto:
            "No caminho para a cruz, o Senhor deixa os discípulos verem um pouco da sua glória, para que não desanimem. A voz do Pai pede uma só coisa: escutar o Filho amado. Esta semana é um convite a escutar mais e a falar menos.",
        },
        liturgia,
        {
          pratica:
            "Depois da missa, guarde uma frase do Evangelho de hoje e repita-a em silêncio algumas vezes ao longo do dia.",
        },
      ],
    },
    {
      titulo: "Segunda-feira da 2ª semana",
      blocos: [
        { leitura: "LUK 6:36-38" },
        {
          texto:
            "Jesus nos pede que sejamos misericordiosos como o Pai. Não julgar, não condenar, perdoar e dar são as quatro portas por onde a misericórdia entra em nós. A medida que usamos com os outros é a que receberemos.",
        },
        {
          pratica:
            "Hoje, quando for julgar alguém em pensamento ou em palavra, pare e reze uma Ave-Maria por essa pessoa.",
        },
      ],
    },
    {
      titulo: "Terça-feira da 2ª semana",
      blocos: [
        { leitura: "ISA 1:16-18" },
        {
          texto:
            "Ainda que os nossos pecados sejam vermelhos como o escarlate, Deus pode deixá-los brancos como a neve. Ele nos pede que deixemos o mal e aprendamos a fazer o bem. A língua é um dos primeiros lugares onde essa mudança se mostra.",
        },
        {
          pratica:
            "Hoje, faça jejum de palavras: nada de fofoca, de queixa ou de comentário que fira alguém.",
        },
      ],
    },
    {
      titulo: "Quarta-feira da 2ª semana",
      blocos: [
        { leitura: "MAT 20:25-28" },
        {
          texto:
            "Entre os discípulos, o maior é o que serve. O Filho do Homem não veio para ser servido, mas para dar a sua vida. Servir sem ser visto é uma forma de penitência que alegra o coração de Deus.",
        },
        {
          pratica:
            "Hoje, faça em casa um serviço que normalmente cabe a outra pessoa, sem dizer nada a ninguém.",
        },
      ],
    },
    {
      titulo: "Quinta-feira da 2ª semana",
      blocos: [
        { leitura: "LUK 16:19-25" },
        {
          texto:
            "O rico deixou o pobre Lázaro, todos os dias, à sua porta sem socorro. O Senhor nos adverte de que seremos separados dele se descuidarmos das necessidades graves dos pobres (CIC 1033). As obras de misericórdia nos ensinam a socorrer o próximo nas suas necessidades (CIC 2447).",
        },
        {
          pratica:
            "Hoje, separe uma quantia, mesmo pequena, e dê a uma pessoa pobre ou a uma obra de caridade da sua paróquia.",
        },
      ],
    },
    {
      titulo: "Sexta-feira da 2ª semana",
      blocos: [
        { leitura: "JHN 3:14-17" },
        {
          texto:
            "Deus amou tanto o mundo que deu o seu Filho, não para condenar, mas para salvar. A cruz que olhamos nas sextas-feiras é a prova desse amor. Fazer penitência é responder a esse amor com um pouco do nosso.",
        },
        {
          pratica:
            "Hoje, fique sem carne e coma de forma mais simples, e reze diante de um crucifixo agradecendo o amor de Deus.",
        },
        viaSacra,
      ],
    },
    {
      titulo: "Sábado da 2ª semana",
      blocos: [
        { leitura: "LUK 15:17-24" },
        {
          texto:
            "O filho que se perdeu cai em si e decide voltar. O pai já o esperava e corre ao seu encontro antes de ouvir o pedido de perdão. Assim Deus nos espera na nossa volta.",
        },
        {
          pratica: "Hoje, à noite, reze o Ato de Contrição com calma, pensando no abraço do Pai.",
        },
      ],
    },
    {
      titulo: "3º Domingo da Quaresma",
      blocos: [
        { leitura: "EZK 36:25-28" },
        {
          texto:
            "A Quaresma é também o tempo em que a Igreja prepara os catecúmenos, que receberão o Batismo na Vigília Pascal. Nestes domingos, ela reza por eles de modo especial. Esta semana, olhamos para o nosso próprio Batismo, a água pura e o coração novo que Deus nos deu.",
        },
        liturgia,
        {
          pratica:
            "Reze hoje pelos que serão batizados na Vigília Pascal, especialmente os da sua paróquia.",
        },
      ],
    },
    {
      titulo: "Segunda-feira da 3ª semana",
      blocos: [
        { leitura: "ROM 6:3-11" },
        {
          texto:
            "No Batismo fomos sepultados com Cristo para ressuscitar com ele numa vida nova. Ele é o fundamento de toda a vida cristã (CIC 1213). Na noite de Páscoa, renovaremos as promessas que foram feitas no nosso Batismo.",
        },
        {
          pratica:
            "Descubra a data do seu Batismo, se ainda não sabe, e agradeça hoje a Deus pelos pais e padrinhos que o levaram à pia batismal.",
        },
      ],
    },
    {
      titulo: "Terça-feira da 3ª semana",
      blocos: [
        { leitura: "JHN 3:1-8" },
        {
          texto:
            "Nicodemos vem de noite, cheio de perguntas, e Jesus lhe fala de nascer da água e do Espírito. Ninguém se faz cristão sozinho: é Deus quem faz nascer de novo. Pedimos que o Espírito Santo renove em nós a graça recebida.",
        },
        {
          pratica:
            "Hoje, reze ao Espírito Santo e peça a graça de uma mudança que você não consegue fazer sozinho.",
        },
      ],
    },
    {
      titulo: "Quarta-feira da 3ª semana",
      blocos: [
        { leitura: "PSA 42:2-6", poema: true },
        {
          texto:
            "Como o cervo procura a água, a alma procura a Deus. Muitas vezes tentamos matar essa sede com coisas que não saciam. O jejum deixa espaço para que a verdadeira sede apareça.",
        },
        {
          pratica:
            "Hoje, beba apenas água, sem refrigerante, doce ou bebida alcoólica, e a cada copo lembre-se de que a sua alma tem sede de Deus.",
        },
      ],
    },
    {
      titulo: "Quinta-feira da 3ª semana",
      blocos: [
        { leitura: "1PE 2:9-10" },
        {
          texto:
            "Pelo Batismo não fomos salvos sozinhos: fomos feitos povo de Deus. Quem antes não era povo agora é família, chamada a anunciar as maravilhas do Senhor. A paróquia é a casa onde essa família se encontra.",
        },
        {
          pratica:
            "Hoje, ofereça a sua ajuda para alguma necessidade da sua paróquia ou da sua comunidade.",
        },
      ],
    },
    {
      titulo: "Sexta-feira da 3ª semana",
      blocos: [
        { leitura: "COL 3:12-15" },
        {
          texto:
            "Assim como o Senhor nos perdoou, também nós devemos perdoar. O perdão é muitas vezes a penitência mais difícil, porque não se faz com o corpo, mas com o coração. Na cruz, Jesus perdoou os que o feriam.",
        },
        {
          pratica:
            "Hoje, fique sem carne e reze pelo nome de uma pessoa que o magoou, pedindo a Deus a graça de perdoá-la.",
        },
        viaSacra,
      ],
    },
    {
      titulo: "Sábado da 3ª semana",
      blocos: [
        { leitura: "ISA 55:6-9" },
        {
          texto:
            "O Senhor se deixa encontrar e está perto de quem o procura. Os seus caminhos não são os nossos, e o seu perdão é maior do que imaginamos. A metade da Quaresma é um bom momento para buscá-lo de novo.",
        },
        {
          pratica:
            "Hoje, faça uma visita a Jesus no Santíssimo Sacramento, numa igreja aberta, nem que seja por poucos minutos.",
        },
      ],
    },
    {
      titulo: "4º Domingo da Quaresma",
      blocos: [
        { leitura: "ISA 66:10-13" },
        {
          texto:
            "Este domingo é chamado de domingo da alegria, e nele o padre pode usar a cor rosa. Passamos da metade do caminho, e a Páscoa já se deixa ver. A penitência cristã não é tristeza: é preparação para uma alegria maior.",
        },
        liturgia,
        {
          pratica:
            "Hoje, convide alguém que está só para uma refeição ou uma visita, e partilhe com ele a alegria do domingo.",
        },
      ],
    },
    {
      titulo: "Segunda-feira da 4ª semana",
      blocos: [
        { leitura: "PSA 51:3-12", poema: true },
        {
          texto:
            "Este salmo é a oração de quem reconhece o próprio pecado e confia na misericórdia de Deus. Ele não pede apenas perdão, mas um coração novo. Começamos esta semana a preparar uma boa confissão para a Páscoa.",
        },
        {
          pratica: "Hoje, reze este salmo de novo, devagar, como oração sua.",
        },
      ],
    },
    {
      titulo: "Terça-feira da 4ª semana",
      blocos: [
        { leitura: "1JN 1:8-2:2" },
        {
          texto:
            "Quem diz que não tem pecado engana a si mesmo. Mas, se confessamos os nossos pecados, Deus é fiel e nos perdoa. Ver o próprio pecado sem desespero já é uma graça.",
        },
        {
          pratica:
            "Hoje, faça um exame de consciência com calma, pelos Mandamentos, e anote o que vai levar à confissão.",
        },
      ],
    },
    {
      titulo: "Quarta-feira da 4ª semana",
      blocos: [
        { leitura: "JHN 20:19-23" },
        {
          texto:
            "Só Deus perdoa os pecados, e Jesus ressuscitado deu aos apóstolos o poder de perdoar em seu nome (CIC 1441 e 1442). Na confissão é ele mesmo quem nos absolve pela voz do sacerdote. Quem tem pecados graves deve confessá-los ao menos uma vez por ano (CIC 1457), e a Igreja pede a comunhão ao menos uma vez por ano, se possível no tempo pascal, preparada pela Reconciliação (CIC 1389).",
        },
        {
          pratica:
            "Hoje, procure saber os horários de confissão da sua paróquia e escolha o dia em que você vai se confessar antes da Páscoa.",
        },
      ],
    },
    {
      titulo: "Quinta-feira da 4ª semana",
      blocos: [
        { leitura: "PSA 103:8-13", poema: true },
        {
          texto:
            "O Senhor não nos trata segundo os nossos pecados. Como um pai que se compadece dos filhos, ele afasta de nós as nossas culpas. Quem foi tratado com tanta bondade aprende a ser bondoso.",
        },
        {
          pratica:
            "Hoje, ajude com comida, roupa ou um pagamento atrasado alguém que está passando necessidade perto de você.",
        },
      ],
    },
    {
      titulo: "Sexta-feira da 4ª semana",
      blocos: [
        { leitura: "LUK 18:9-14" },
        {
          texto:
            "O fariseu jejua e reza, mas se acha melhor que os outros. O publicano só bate no peito e pede piedade, e volta para casa perdoado. A penitência que agrada a Deus nasce da humildade.",
        },
        {
          pratica:
            "Hoje, fique sem carne e repita ao longo do dia a oração do publicano: “Meu Deus, sê propício a mim, que sou pecador.”",
        },
        viaSacra,
      ],
    },
    {
      titulo: "Sábado da 4ª semana",
      blocos: [
        { leitura: "LUK 19:1-10" },
        {
          texto:
            "Zaqueu recebe Jesus com alegria e logo decide reparar o mal que fez. A conversão verdadeira se mostra no bolso e nas relações. A confissão perdoa o pecado, mas pede também que reparemos o dano causado ao próximo (CIC 1459).",
        },
        {
          pratica:
            "Se ainda não se confessou, vá à confissão hoje ou no dia que escolheu, e repare algum mal que você fez: devolva o que deve, pague o que está atrasado, peça perdão.",
        },
      ],
    },
    {
      titulo: "5º Domingo da Quaresma",
      blocos: [
        { leitura: "ROM 5:6-11" },
        {
          texto:
            "A Páscoa se aproxima, e a liturgia volta o nosso olhar para a Paixão do Senhor. Em muitas igrejas, as cruzes e imagens são cobertas a partir deste domingo. Cristo morreu por nós quando ainda éramos pecadores, e é desse amor que vamos fazer memória.",
        },
        liturgia,
        {
          pratica:
            "Hoje, fique alguns minutos diante de um crucifixo, em silêncio, olhando para Jesus que se entregou por você.",
        },
      ],
    },
    {
      titulo: "Segunda-feira da 5ª semana",
      blocos: [
        { leitura: "NUM 21:4-9" },
        {
          texto:
            "O povo se cansa do caminho e murmura contra Deus. Os que olham para a serpente de bronze ficam curados. Jesus disse que também ele seria levantado, para que todo aquele que olhar para ele com fé tenha a vida.",
        },
        {
          pratica:
            "Hoje, faça jejum de reclamação: não se queixe de nada nem de ninguém durante o dia inteiro.",
        },
      ],
    },
    {
      titulo: "Terça-feira da 5ª semana",
      blocos: [
        { leitura: "MRK 8:34-38" },
        {
          texto:
            "Quem quer seguir Jesus deve renunciar a si mesmo e tomar a sua cruz. A cruz de cada dia raramente é grande: é o cansaço, a doença, o trabalho, a pessoa difícil. Aceita com amor, ela se torna penitência unida à de Cristo.",
        },
        {
          pratica:
            "Hoje, aceite sem reclamar uma contrariedade do dia e ofereça-a a Deus em silêncio.",
        },
      ],
    },
    {
      titulo: "Quarta-feira da 5ª semana",
      blocos: [
        { leitura: "1CO 1:18-25" },
        {
          texto:
            "Para o mundo, a cruz é loucura; para nós, é o poder de Deus. Deus não nos salvou com força, mas com amor que se entrega. Fazer o sinal da cruz é confessar essa fé.",
        },
        {
          pratica:
            "Hoje, faça o sinal da cruz com atenção ao acordar, antes das refeições e ao deitar, sem vergonha de ser visto.",
        },
      ],
    },
    {
      titulo: "Quinta-feira da 5ª semana",
      blocos: [
        { leitura: "GAL 2:19-20" },
        {
          texto:
            "São Paulo diz que o Filho de Deus o amou e se entregou por ele. Cada um de nós pode dizer o mesmo. Quem se sabe amado assim aprende a se dar também.",
        },
        {
          pratica:
            "Hoje, dedique uma hora do seu tempo a alguém que precisa de companhia, de ajuda ou de ser ouvido.",
        },
      ],
    },
    {
      titulo: "Sexta-feira da 5ª semana",
      blocos: [
        { leitura: "ISA 53:3-7" },
        {
          texto:
            "Séculos antes, o profeta viu o Servo do Senhor, desprezado e ferido pelos nossos pecados. Pelas suas feridas fomos curados. Na última sexta-feira antes da Semana Santa, ficamos perto dele.",
        },
        {
          pratica:
            "Hoje, fique sem carne, faça uma refeição mais simples e reze a Via-Sacra, sozinho ou na sua paróquia.",
        },
        viaSacra,
      ],
    },
    {
      titulo: "Sábado da 5ª semana",
      blocos: [
        { leitura: "JHN 11:47-53" },
        {
          texto:
            "Os chefes decidem a morte de Jesus, e Caifás, sem saber, anuncia que ele morreria para reunir os filhos de Deus dispersos. A cruz é o lugar onde Deus junta o que estava separado. Às vésperas da Semana Santa, é tempo de desfazer as nossas divisões.",
        },
        {
          pratica:
            "Hoje, dê o primeiro passo para fazer as pazes com alguém da sua família ou da sua comunidade, e veja os horários das celebrações da Semana Santa.",
        },
      ],
    },
    {
      titulo: "Domingo de Ramos",
      blocos: [
        { leitura: "ZEC 9:9-10" },
        {
          texto:
            "Hoje entramos com Jesus em Jerusalém. Ele vem como rei, mas pobre e montado num jumentinho, a caminho da cruz. A mesma multidão que o aclama logo pedirá a sua morte, e somos convidados a ficar com ele até o fim.",
        },
        liturgia,
        semanaSanta,
        {
          pratica:
            "Participe da procissão de Ramos e coloque o ramo bento em casa, junto do crucifixo ou de uma imagem.",
        },
      ],
    },
    {
      titulo: "Segunda-feira Santa",
      blocos: [
        { leitura: "JHN 12:1-8" },
        {
          texto:
            "Maria derrama sobre os pés de Jesus um perfume de grande preço, e a casa inteira se enche do seu cheiro. Judas acha que é desperdício. O amor verdadeiro não faz contas com Deus.",
        },
        semanaSanta,
        {
          pratica:
            "Hoje, dê aos pobres algo de valor, não o que está sobrando, como Maria deu o seu perfume.",
        },
      ],
    },
    {
      titulo: "Terça-feira Santa",
      blocos: [
        { leitura: "MAT 26:31-35" },
        {
          texto:
            "Pedro promete que nunca vai negar o Senhor, e naquela mesma noite o nega três vezes. Jesus conhece a nossa fraqueza melhor do que nós mesmos. Não confiamos nas nossas promessas, mas na sua fidelidade.",
        },
        semanaSanta,
        {
          pratica:
            "Se ainda não se confessou, procure hoje um sacerdote. Depois, peça a Deus a graça de perseverar no bem que começou nesta Quaresma.",
        },
      ],
    },
    {
      titulo: "Quarta-feira Santa",
      blocos: [
        { leitura: "MAT 26:14-16" },
        {
          texto:
            "Judas entrega o Mestre por trinta moedas de prata. A traição começa pequena, quando outra coisa passa a valer mais que Jesus. Às portas do Tríduo, perguntamos com sinceridade o que ainda disputa o lugar dele em nós.",
        },
        semanaSanta,
        {
          pratica:
            "Hoje, deixe de lado uma coisa a que você é muito apegado e ofereça esse sacrifício em reparação pelos pecados.",
        },
      ],
    },
    {
      titulo: "Quinta-feira Santa",
      blocos: [
        { leitura: "1CO 11:23-26" },
        {
          texto:
            "Na noite em que foi entregue, Jesus instituiu a Eucaristia e deixou aos apóstolos o mandamento de fazer isto em sua memória (CIC 1337). Com a Missa da Ceia do Senhor, à tarde, começa o Tríduo Pascal. Depois dela, a Igreja fica em vigília com Jesus, como ele pediu aos discípulos no horto.",
        },
        semanaSanta,
        {
          pratica:
            "Participe da Missa da Ceia do Senhor e fique um tempo em adoração diante do Santíssimo depois dela.",
        },
      ],
    },
    {
      titulo: "Sexta-feira da Paixão",
      blocos: [
        { leitura: "JHN 19:25-30" },
        {
          texto:
            "Junto da cruz estão Maria e o discípulo amado. Jesus dá a sua mãe por mãe ao discípulo (CIC 964), diz que tudo está cumprido e entrega o espírito. Hoje não há missa: a Igreja celebra a Paixão do Senhor e adora a cruz.",
        },
        semanaSanta,
        viaSacra,
        {
          pratica:
            "Hoje é dia de jejum e abstinência (cân. 1251), com as mesmas idades e as mesmas normas da Quarta-feira de Cinzas. Participe da celebração da Paixão e, como é costume, guarde silêncio às três horas da tarde.",
        },
      ],
    },
    {
      titulo: "Sábado Santo",
      blocos: [
        { leitura: "MAT 27:57-61" },
        {
          texto:
            "O corpo de Jesus repousa no sepulcro, e a Igreja espera em silêncio, junto de Maria. Não há missa durante o dia. À noite, a Vigília Pascal acende o fogo novo e anuncia a Ressurreição.",
        },
        semanaSanta,
        {
          pratica:
            "Viva o dia em recolhimento, com menos barulho e menos palavras, e participe da Vigília Pascal, onde renovaremos as promessas do Batismo.",
        },
      ],
    },
  ],
};

export default conteudo;
