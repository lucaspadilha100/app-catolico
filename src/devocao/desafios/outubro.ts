import type { ConteudoDoDesafio } from "../tipos";

const terco = { ir: "/rezar/terco", rotulo: "Rezar o terço" };
const novenaDeAparecida = { ir: "/rezar/novenas/aparecida", rotulo: "Novena de Nossa Senhora Aparecida" };
const novenaDeSaoJudas = { ir: "/rezar/novenas/sao-judas-tadeu", rotulo: "Novena de São Judas Tadeu" };

const conteudo: ConteudoDoDesafio = {
  revisao: "a revisar pelo dono",
  etapas: [
    {
      titulo: "Dia 1: Santa Teresinha e o mês do Rosário",
      blocos: [
        { leitura: "MAT 18:1-4" },
        {
          texto:
            "Outubro é o mês do Rosário e também o mês das missões, e começa com Santa Teresinha do Menino Jesus. Ela viveu escondida no Carmelo de Lisieux, na França, e morreu em 1897, com 24 anos; mesmo assim, o papa Pio XI a proclamou padroeira das missões. O seu caminho é o da criança que confia no Pai, e é com esse coração simples que vamos rezar o terço todos os dias deste mês.",
        },
        { pratica: "Escolha a hora do dia em que vai rezar o terço durante todo o mês e deixe o terço num lugar à vista." },
        terco,
      ],
    },
    {
      titulo: "Dia 2: Rezar com os anjos",
      blocos: [
        { leitura: "PSA 91:9-13", poema: true },
        {
          texto:
            "Hoje a Igreja celebra os Santos Anjos da Guarda, que Deus põe ao lado de cada um de nós desde o começo da vida (CIC 336). A oração mais repetida do Rosário começa com as palavras de um anjo, Gabriel, à Virgem Maria. Rezar o terço é unir a nossa voz à saudação do céu.",
        },
        { pratica: "Reze hoje a oração ao Santo Anjo com as crianças da sua casa ou por elas." },
        { rezar: "santo-anjo" },
        terco,
      ],
    },
    {
      titulo: "Dia 3: Primeiro mistério gozoso, a Anunciação",
      blocos: [
        { leitura: "LUK 1:30-38" },
        {
          texto:
            "Os mistérios gozosos contam a alegria da chegada de Jesus. No primeiro, Maria ouve o anúncio do anjo e responde: faça-se em mim segundo a tua palavra. Hoje também começa a novena de Nossa Senhora Aparecida, que nos prepara para a festa da padroeira do Brasil.",
        },
        { pratica: "Diga hoje um sim generoso a algo que Deus lhe pede e que você vinha adiando." },
        novenaDeAparecida,
        terco,
      ],
    },
    {
      titulo: "Dia 4: São Francisco de Assis",
      blocos: [
        { leitura: "GAL 6:14-18" },
        {
          texto:
            "São Francisco de Assis deixou tudo para seguir Jesus pobre e crucificado, e morreu em 1226. Dois anos antes, recebeu no próprio corpo as marcas da Paixão do Senhor. Ele amava a pobreza, a paz e toda a criação, porque via em tudo a obra do Pai.",
        },
        { pratica: "Doe hoje algo que você tem guardado sem usar, roupa, alimento ou objeto, a quem precisa." },
        novenaDeAparecida,
        terco,
      ],
    },
    {
      titulo: "Dia 5: Segundo mistério gozoso, a Visitação",
      blocos: [
        { leitura: "LUK 1:39-47" },
        {
          texto:
            "Maria vai depressa servir a sua parente Isabel, levando Jesus consigo. Isabel a saúda com as palavras que repetimos em cada Ave-Maria: bendito é o fruto do teu ventre. Quem reza o terço aprende de Maria a sair de si para servir.",
        },
        { pratica: "Faça hoje uma visita ou um telefonema a uma pessoa idosa ou doente." },
        novenaDeAparecida,
        terco,
      ],
    },
    {
      titulo: "Dia 6: Terceiro mistério gozoso, o Nascimento de Jesus",
      blocos: [
        { leitura: "LUK 2:1-7" },
        {
          texto:
            "O Filho de Deus nasce pobre em Belém, porque não havia lugar para ele na hospedaria. Foi São Francisco quem, em 1223, em Greccio, celebrou o Natal diante de um presépio, para que o povo visse com os olhos a humildade de Deus. Ao contemplar este mistério, peçamos um coração pobre e acolhedor.",
        },
        { pratica: "Abra lugar hoje na sua agenda para alguém que precisa de você, sem pressa." },
        novenaDeAparecida,
        terco,
      ],
    },
    {
      titulo: "Dia 7: Nossa Senhora do Rosário",
      blocos: [
        { leitura: "ACT 1:12-14" },
        {
          texto:
            "Em 7 de outubro de 1571, a armada cristã venceu a batalha naval de Lepanto, enquanto em Roma e em muitos lugares se rezava o Rosário. O papa São Pio V atribuiu a vitória à intercessão de Nossa Senhora e instituiu uma festa em sua honra, que hoje celebramos como Nossa Senhora do Rosário. Em 1883, o papa Leão XIII dedicou todo o mês de outubro ao Rosário.",
        },
        { pratica: "Reze hoje o terço inteiro em família ou com um grupo da sua paróquia." },
        { rezar: "oracao-do-rosario" },
        novenaDeAparecida,
        terco,
      ],
    },
    {
      titulo: "Dia 8: Quarto mistério gozoso, a Apresentação no Templo",
      blocos: [
        { leitura: "LUK 2:33-38" },
        {
          texto:
            "Maria e José oferecem o Menino a Deus no Templo. Simeão anuncia a espada de dor, e a profetisa Ana, já idosa, que servia a Deus noite e dia, fala do Menino a todos os que esperavam. Oferecemos também a Deus a nossa vida, com as suas alegrias e as suas dores.",
        },
        { pratica: "Ofereça hoje a Deus, logo cedo, todo o seu dia, e repita o oferecimento antes de dormir." },
        novenaDeAparecida,
        terco,
      ],
    },
    {
      titulo: "Dia 9: Quinto mistério gozoso, Jesus encontrado no Templo",
      blocos: [
        { leitura: "LUK 2:41-50" },
        {
          texto:
            "Depois de três dias de aflição, Maria e José encontram Jesus no Templo, ocupado com as coisas do Pai. Eles não entendem tudo, mas não desistem de procurá-lo. Quando perdemos Jesus de vista, o terço nos ajuda a reencontrá-lo.",
        },
        { pratica: "Se faz tempo que você não se confessa, procure hoje saber os horários de confissão da sua paróquia." },
        novenaDeAparecida,
        terco,
      ],
    },
    {
      titulo: "Dia 10: Primeiro mistério luminoso, o Batismo de Jesus",
      blocos: [
        { leitura: "MRK 1:9-11" },
        {
          texto:
            "Em 2002, na carta Rosarium Virginis Mariae, São João Paulo II propôs os mistérios luminosos, que contemplam a vida pública de Jesus. Desde então, rezam-se os gozosos na segunda e no sábado, os dolorosos na terça e na sexta, os gloriosos na quarta e no domingo, e os luminosos na quinta. No primeiro deles, Jesus é batizado no Jordão e o Pai o declara seu Filho amado.",
        },
        { pratica: "Descubra a data do seu batismo e agradeça a Deus por ela; se puder, reze pelo seu padrinho e pela sua madrinha." },
        novenaDeAparecida,
        terco,
      ],
    },
    {
      titulo: "Dia 11: Segundo mistério luminoso, as Bodas de Caná",
      blocos: [
        { leitura: "JHN 2:1-11" },
        {
          texto:
            "Em Caná, Maria percebe que falta vinho e leva a necessidade a Jesus. Aos que servem, ela diz: fazei tudo o que ele vos disser. Na véspera da festa de Aparecida, confiemos a ela as necessidades das nossas famílias e do Brasil.",
        },
        { pratica: "Escreva uma necessidade da sua família e coloque-a amanhã aos pés de uma imagem de Nossa Senhora." },
        novenaDeAparecida,
        terco,
      ],
    },
    {
      titulo: "Dia 12: Nossa Senhora Aparecida",
      blocos: [
        { leitura: "LUK 5:4-7" },
        {
          texto:
            "Em 1717, três pescadores lançaram as redes no rio Paraíba do Sul, em São Paulo, e retiraram das águas o corpo e depois a cabeça de uma pequena imagem de Nossa Senhora da Conceição. A tradição conta que, depois disso, a pesca foi abundante. Em 1930, o papa Pio XI proclamou Nossa Senhora Aparecida padroeira do Brasil.",
        },
        { pratica: "Reze hoje o terço pelo Brasil, pelos governantes e pelas famílias mais pobres do país." },
        { rezar: "sub-tuum" },
        terco,
      ],
    },
    {
      titulo: "Dia 13: Terceiro mistério luminoso, o Anúncio do Reino",
      blocos: [
        { leitura: "LUK 4:16-21" },
        {
          texto:
            "Jesus anuncia a boa notícia aos pobres e chama todos à conversão. No dia 13 de outubro de 1917, na última aparição de Fátima, segundo o relato de Lúcia, Nossa Senhora disse aos três pastorinhos que era a Senhora do Rosário e pediu de novo a oração e a conversão. Contemplemos este mistério pedindo um coração que se converte todos os dias.",
        },
        { pratica: "Escolha um defeito concreto e faça hoje um esforço para vencê-lo." },
        { rezar: "fatima" },
        terco,
      ],
    },
    {
      titulo: "Dia 14: Quarto mistério luminoso, a Transfiguração",
      blocos: [
        { leitura: "LUK 9:28-36" },
        {
          texto:
            "No monte, enquanto reza, Jesus mostra aos discípulos a sua glória, e a voz do Pai diz: ouvi-o. A glória do Tabor dá coragem para a cruz que viria depois. Na oração, também nós recebemos luz para os dias difíceis.",
        },
        { pratica: "Leia hoje o Evangelho do dia e procure fazer uma coisa concreta que ele pede." },
        { ir: "liturgia", rotulo: "Liturgia do dia" },
        terco,
      ],
    },
    {
      titulo: "Dia 15: Santa Teresa de Ávila",
      blocos: [
        { leitura: "LUK 10:38-42" },
        {
          texto:
            "Santa Teresa de Jesus, de Ávila, na Espanha, reformou o Carmelo no século XVI e foi a primeira mulher proclamada Doutora da Igreja, em 1970. Ela ensinava que a oração mental é tratar de amizade, muitas vezes a sós, com quem sabemos que nos ama (CIC 2709). Como Maria de Betânia, escolheu a melhor parte: estar com o Senhor.",
        },
        { pratica: "Reze hoje o terço devagar, falando com Jesus e Maria como se fala com um amigo." },
        terco,
      ],
    },
    {
      titulo: "Dia 16: Quinto mistério luminoso, a Instituição da Eucaristia",
      blocos: [
        { leitura: "1CO 11:23-26" },
        {
          texto:
            "Na noite em que foi entregue, Jesus deu aos apóstolos o seu Corpo e o seu Sangue e mandou que fizessem isso em sua memória. A Eucaristia é fonte e ápice de toda a vida cristã (CIC 1324). Maria, que primeiro acolheu Jesus no seu seio, nos ensina a recebê-lo com fé e amor.",
        },
        { pratica: "Participe de uma Missa durante a semana ou faça hoje uma comunhão espiritual." },
        { rezar: "comunhao-espiritual" },
        terco,
      ],
    },
    {
      titulo: "Dia 17: Primeiro mistério doloroso, a Agonia no Horto",
      blocos: [
        { leitura: "MAT 26:36-42" },
        {
          texto:
            "No Getsêmani, Jesus sente angústia e tristeza de morte, e reza: faça-se a tua vontade. Os discípulos dormem, mas ele continua rezando. Na hora da aflição, o terço é a nossa maneira de vigiar com ele.",
        },
        { pratica: "Reze hoje por quem está passando por uma grande angústia: doença, desemprego, depressão." },
        terco,
      ],
    },
    {
      titulo: "Dia 18: Segundo mistério doloroso, a Flagelação",
      blocos: [
        { leitura: "ISA 53:4-7" },
        {
          texto:
            "Jesus é açoitado e carrega as nossas dores, como tinha anunciado o profeta Isaías. Fomos curados pelas suas feridas. Hoje a Igreja celebra São Lucas, o evangelista que nos contou a Anunciação, a Visitação e o Natal, os mistérios que meditamos com Maria.",
        },
        { pratica: "Ofereça hoje uma dor ou um cansaço em silêncio, sem reclamar, unido a Jesus." },
        terco,
      ],
    },
    {
      titulo: "Dia 19: Terceiro mistério doloroso, a Coroação de espinhos",
      blocos: [
        { leitura: "JHN 19:1-5" },
        {
          texto:
            "Os soldados coroam Jesus de espinhos e zombam dele como rei. Ele aceita a humilhação em silêncio, por amor a nós. Hoje também começa a novena de São Judas Tadeu, muito querido do povo brasileiro, que nos leva até a festa do dia 28.",
        },
        { pratica: "Quando alguém o humilhar ou tratar mal hoje, responda com mansidão." },
        novenaDeSaoJudas,
        terco,
      ],
    },
    {
      titulo: "Dia 20: Quarto mistério doloroso, Jesus carrega a cruz",
      blocos: [
        { leitura: "MRK 15:20-22" },
        {
          texto:
            "Jesus sobe ao Calvário carregando a cruz, e Simão de Cirene é obrigado a ajudá-lo. Quem ajuda a carregar a cruz de um irmão ajuda o próprio Cristo. Contemplemos este mistério pensando em quem carrega um peso perto de nós.",
        },
        { pratica: "Ajude hoje alguém a carregar um peso concreto: uma tarefa, uma conta, uma preocupação." },
        novenaDeSaoJudas,
        terco,
      ],
    },
    {
      titulo: "Dia 21: Quinto mistério doloroso, a Crucifixão",
      blocos: [
        { leitura: "JHN 19:25-30" },
        {
          texto:
            "Jesus morre na cruz, e Maria está de pé junto dele. Antes de entregar o espírito, ele dá a sua Mãe por mãe ao discípulo amado (CIC 964), e a maternidade dela se estende a todos nós (CIC 501). Ao pé da cruz aprendemos o tamanho do amor de Deus por nós.",
        },
        { pratica: "Às três da tarde, pare um instante e agradeça a Jesus pela sua morte por nós." },
        novenaDeSaoJudas,
        terco,
      ],
    },
    {
      titulo: "Dia 22: São João Paulo II",
      blocos: [
        { leitura: "MAT 14:26-31" },
        {
          texto:
            "No dia 22 de outubro de 1978, ao começar o seu pontificado, São João Paulo II pediu ao mundo que não tivesse medo e abrisse as portas a Cristo. Poucos dias depois, chamou o Rosário de sua oração predileta (Rosarium Virginis Mariae 2), e foi ele quem nos deu os mistérios luminosos. Como Pedro sobre as águas, pedimos a Jesus que nos segure pela mão.",
        },
        { pratica: "Entregue hoje a Jesus um medo que tira a sua paz e reze por ele em cada dezena do terço." },
        novenaDeSaoJudas,
        terco,
      ],
    },
    {
      titulo: "Dia 23: Primeiro mistério glorioso, a Ressurreição",
      blocos: [
        { leitura: "JHN 20:11-18" },
        {
          texto:
            "Os mistérios gloriosos mostram a vitória de Cristo. Maria Madalena chora junto ao sepulcro, até que Jesus ressuscitado a chama pelo nome. Ele também nos conhece pelo nome e nos envia a anunciar que está vivo.",
        },
        { pratica: "Conte hoje a alguém uma graça que Deus lhe concedeu." },
        novenaDeSaoJudas,
        terco,
      ],
    },
    {
      titulo: "Dia 24: Segundo mistério glorioso, a Ascensão",
      blocos: [
        { leitura: "MAT 28:16-20" },
        {
          texto:
            "Antes de subir ao céu, Jesus envia os discípulos a todas as nações e promete ficar com eles todos os dias. A Ascensão não é despedida: é o começo da missão da Igreja. Neste mês missionário, lembremos que todo batizado é enviado.",
        },
        { pratica: "Convide hoje alguém para rezar o terço com você, pessoalmente ou por mensagem." },
        novenaDeSaoJudas,
        terco,
      ],
    },
    {
      titulo: "Dia 25: Terceiro mistério glorioso, a Vinda do Espírito Santo",
      blocos: [
        { leitura: "ACT 2:1-8" },
        {
          texto:
            "Reunidos em oração com Maria, os apóstolos recebem o Espírito Santo e começam a anunciar Jesus a gente de todas as línguas. O medo dá lugar à coragem. O mesmo Espírito recebido no batismo e na crisma quer agir em nós.",
        },
        { pratica: "Peça hoje ao Espírito Santo coragem para dar testemunho da sua fé numa situação concreta." },
        { rezar: "vinde-espirito-santo" },
        novenaDeSaoJudas,
        terco,
      ],
    },
    {
      titulo: "Dia 26: Quarto mistério glorioso, a Assunção de Maria",
      blocos: [
        { leitura: "1CO 15:53-57" },
        {
          texto:
            "Terminada a sua vida na terra, Maria foi elevada em corpo e alma à glória do céu (CIC 966). Nela vemos o que Deus prepara para todos os que são de Cristo: a vitória sobre a morte. A Assunção enche de esperança quem reza pelos seus falecidos.",
        },
        { pratica: "Reze hoje uma dezena do terço pelos falecidos da sua família." },
        { rezar: "pelos-falecidos" },
        novenaDeSaoJudas,
        terco,
      ],
    },
    {
      titulo: "Dia 27: Quinto mistério glorioso, a Coroação de Maria",
      blocos: [
        { leitura: "REV 12:1-6" },
        {
          texto:
            "Maria é coroada Rainha do céu e da terra, unida ao seu Filho na glória (CIC 966). A Igreja vê nela a Mulher do Apocalipse, a nova Eva, que o inimigo perseguiu sem a alcançar (CIC 2853). Terminamos os vinte mistérios entregando-nos às suas mãos de Mãe e Rainha.",
        },
        { pratica: "Reze hoje a Salve-Rainha com calma e escolha uma virtude de Maria para imitar nesta semana." },
        { rezar: "salve-rainha" },
        novenaDeSaoJudas,
        terco,
      ],
    },
    {
      titulo: "Dia 28: São Simão e São Judas",
      blocos: [
        { leitura: "LUK 6:12-16" },
        {
          texto:
            "Simão, chamado o Zelote, e Judas Tadeu, irmão de Tiago, estão entre os doze que Jesus escolheu depois de uma noite inteira de oração. A tradição conta que os dois anunciaram o Evangelho e deram a vida por Cristo. No Brasil, muita gente recorre a São Judas Tadeu nas causas difíceis, e ele nos leva sempre a confiar em Jesus.",
        },
        { pratica: "Confie hoje a São Judas Tadeu uma causa difícil e reze o terço por ela." },
        terco,
      ],
    },
    {
      titulo: "Dia 29: O terço missionário",
      blocos: [
        { leitura: "ROM 10:13-17" },
        {
          texto:
            "A fé vem pelo ouvir, e alguém precisa anunciar. Para rezar pelas missões, existe o costume do terço missionário: cada dezena pede por um continente, África, Américas, Europa, Ásia e Oceania. O penúltimo domingo de outubro é o Dia Mundial das Missões.",
        },
        { pratica: "Reze hoje cada dezena por um continente e, se puder, ajude a coleta das missões na sua paróquia." },
        terco,
      ],
    },
    {
      titulo: "Dia 30: O terço em família",
      blocos: [
        { leitura: "DEU 6:4-9" },
        {
          texto:
            "Deus pede que as suas palavras sejam lembradas em casa, ensinadas aos filhos e repetidas ao deitar e ao levantar. O terço rezado em família guarda a fé dos pequenos e une a casa em torno de Jesus e Maria. Mesmo uma só dezena rezada juntos já é uma semente.",
        },
        { pratica: "Combine com a sua família um dia da semana para rezar juntos ao menos uma dezena." },
        terco,
      ],
    },
    {
      titulo: "Dia 31: Perseverar com Maria",
      blocos: [
        { leitura: "HEB 12:1-2" },
        {
          texto:
            "Amanhã a Igreja celebra Todos os Santos, a grande nuvem de testemunhas que correram a carreira da fé com os olhos em Jesus. Muitos deles rezavam o terço todos os dias. O mês do Rosário termina, mas o terço pode continuar sendo, com Maria, o nosso caminho até Jesus.",
        },
        { pratica: "Decida em que momento do dia vai continuar rezando o terço, ou ao menos uma dezena, a partir de amanhã." },
        { rezar: "lembrai-vos" },
        terco,
      ],
    },
  ],
};

export default conteudo;
