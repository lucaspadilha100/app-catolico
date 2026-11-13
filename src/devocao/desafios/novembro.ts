import type { ConteudoDoDesafio } from "../tipos";

const condicoes =
  "Condições de costume: confissão, comunhão, oração nas intenções do Papa e desapego de todo pecado, mesmo venial.";

const indulgencia = {
  rubrica: `De 1º a 8 de novembro, quem visita com devoção um cemitério e reza pelos defuntos, mesmo só mentalmente, pode receber, uma vez por dia, a indulgência plenária, aplicável somente às almas do purgatório. ${condicoes}`,
};

const conteudo: ConteudoDoDesafio = {
  revisao: "a revisar pelo dono",
  etapas: [
    {
      titulo: "Dia 1: Todos os Santos",
      blocos: [
        { leitura: "REV 7:9-14" },
        {
          texto:
            "Em 1º de novembro a Igreja recorda todos os santos, conhecidos e desconhecidos, a multidão que ninguém pode contar. No Brasil, quando a data cai em dia de semana, a solenidade é celebrada no domingo entre 1º e 7 de novembro. Entre esses santos estão muitas pessoas simples, que viveram com fidelidade e já veem a Deus.",
        },
        indulgencia,
        {
          pratica:
            "Escreva os nomes dos seus falecidos, familiares, amigos e vizinhos, e guarde a lista para rezar por eles todos os dias deste mês.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 2: Os fiéis defuntos",
      blocos: [
        { leitura: "WIS 3:1-6" },
        {
          texto:
            "No dia 2 de novembro a Igreja reza por todos os fiéis defuntos. Desde os primeiros séculos, os cristãos honram a memória dos mortos e oferecem por eles orações, sobretudo a Missa (CIC 1032). Rezamos com esperança, porque as almas dos justos estão nas mãos de Deus.",
        },
        indulgencia,
        {
          rubrica: `Neste dia, a indulgência plenária pelos defuntos também pode ser recebida visitando com devoção uma igreja ou um oratório e rezando ali o Pai-Nosso e o Creio. ${condicoes}`,
        },
        { rezar: "pai-nosso" },
        { rezar: "creio" },
        {
          pratica:
            "Participe da Missa pelos fiéis defuntos e, se puder, visite o túmulo de alguém da sua família, levando uma flor e uma oração.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 3: A comunhão dos santos",
      blocos: [
        { leitura: "HEB 12:1-2" },
        {
          texto:
            "No Creio professamos a comunhão dos santos: a Igreja é uma só família, que une os que caminham na terra, os que se purificam depois da morte e os que já estão na glória (CIC 954). Os santos intercedem por nós, nós rezamos pelos falecidos, e o bem de cada um ajuda a todos (CIC 955-959). A morte não rompe esse laço de caridade.",
        },
        indulgencia,
        { pratica: "Peça hoje a intercessão de um santo da sua devoção por um falecido da sua família." },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 4: Rezar pelos mortos",
      blocos: [
        { leitura: "2MA 12:43-46" },
        {
          texto:
            "Judas Macabeu mandou oferecer um sacrifício pelos que tinham morrido, para que fossem livres dos seus pecados. A Igreja vê nesse trecho o testemunho antigo da oração pelos mortos (CIC 1032). Rezar a Deus pelos vivos e defuntos é uma das obras de misericórdia espirituais (Compêndio do Catecismo, apêndice), e a Igreja recomenda sobretudo o sacrifício eucarístico pelos mortos (CIC 1032).",
        },
        indulgencia,
        {
          pratica:
            "Procure a secretaria da paróquia e peça que uma Missa seja celebrada na intenção de um falecido da sua família.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 5: O purgatório",
      blocos: [
        { leitura: "1CO 3:11-15" },
        {
          texto:
            "A Igreja ensina que quem morre na graça de Deus, mas ainda não está de todo purificado, passa depois da morte por uma purificação, para entrar na alegria do céu (CIC 1030). Essa purificação se chama purgatório e é bem diferente do castigo dos condenados (CIC 1031). As almas do purgatório estão salvas e esperam, e a nossa oração pode ajudá-las.",
        },
        indulgencia,
        {
          pratica:
            "Ofereça hoje uma esmola, uma penitência ou uma obra de caridade em favor das almas do purgatório (CIC 1032).",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 6: As indulgências",
      blocos: [
        { leitura: "MAT 16:15-19" },
        {
          texto:
            "A indulgência é o perdão, diante de Deus, da pena temporal que resta pelos pecados já perdoados quanto à culpa (CIC 1471). A Igreja a concede pelo poder de ligar e desligar que recebeu de Cristo, abrindo o tesouro dos méritos de Cristo e dos santos (CIC 1478). Pode ser oferecida pelos defuntos, e a plenária só se recebe uma vez por dia.",
        },
        indulgencia,
        {
          pratica:
            "Se ainda não se confessou neste mês, procure a confissão: ela é uma das condições da indulgência e o caminho mais seguro de paz.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 7: A morte cristã",
      blocos: [
        { leitura: "PHP 1:20-24" },
        {
          texto:
            "Para o cristão, a morte não é o fim, mas a passagem para estar com Cristo. Pelo Batismo, já morremos com ele para viver com ele (CIC 1010). Por isso São Paulo chega a dizer que morrer é lucro, porque o encontro com o Senhor é muito melhor.",
        },
        indulgencia,
        {
          pratica:
            "Ao visitar o túmulo de um falecido, reze ali o Creio, renovando a fé que vocês receberam no mesmo batismo.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 8: Não como quem não tem esperança",
      blocos: [
        { leitura: "1TH 4:13-18" },
        {
          texto:
            "Hoje é o último dia da indulgência plenária ligada à visita ao cemitério. Choramos os nossos mortos, mas não como quem não tem esperança: cremos que Jesus morreu e ressuscitou. Essa fé nos consola e nos ajuda a consolar os outros.",
        },
        indulgencia,
        {
          pratica:
            "Escreva ou telefone para alguém que perdeu uma pessoa querida neste ano e diga que está rezando por ela.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 9: Cristo ressuscitou",
      blocos: [
        { leitura: "1CO 15:12-20" },
        {
          texto:
            "Toda a esperança cristã se apoia num fato: Cristo ressuscitou dos mortos. Se ele não tivesse ressuscitado, a nossa fé seria vazia. Ele é o primeiro dos que dormem, e nós o seguiremos (CIC 989).",
        },
        {
          pratica:
            "Reze hoje o Creio devagar, parando nas palavras: creio na ressurreição da carne e na vida eterna.",
        },
        { rezar: "creio" },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 10: A ressurreição da carne",
      blocos: [
        { leitura: "1CO 15:35-38.42-43" },
        {
          texto:
            "Cremos que no último dia Deus dará vida nova aos nossos corpos, unindo-os de novo às almas (CIC 997). Como o grão que morre na terra e se torna planta, o corpo semeado na fraqueza ressuscitará na glória. O modo como isso acontecerá ultrapassa a nossa imaginação, e só a fé o alcança (CIC 1000).",
        },
        {
          pratica:
            "Cuide do seu corpo como dom de Deus: escolha hoje um cuidado que você vem adiando, como uma consulta ou uma caminhada.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 11: Eu sou a ressurreição",
      blocos: [
        { leitura: "JHN 11:21-27" },
        {
          texto:
            "Diante do túmulo do irmão, Marta ouve de Jesus: eu sou a ressurreição e a vida. A ressurreição não é só um acontecimento do fim: é uma pessoa, e quem crê nele já tem a vida que não acaba. Jesus faz também a nós a pergunta: crês nisto?",
        },
        {
          pratica:
            "Responda com as palavras de Marta, em voz baixa: Sim, Senhor, eu creio que tu és o Cristo, o Filho de Deus vivo.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 12: O corpo, templo do Espírito",
      blocos: [
        { leitura: "ROM 8:9-11" },
        {
          texto:
            "O corpo do cristão foi templo do Espírito Santo e está destinado à ressurreição. Por isso os corpos dos falecidos devem ser tratados com respeito, e enterrar os mortos é obra de misericórdia (CIC 2300). A Igreja recomenda insistentemente o sepultamento; permite a cremação quando ela não põe em causa a fé na ressurreição (CIC 2301), e as cinzas devem ser conservadas em lugar sagrado (Ad resurgendum cum Christo 3 e 5).",
        },
        {
          pratica:
            "Ao passar por um cemitério ou por um velório, faça o sinal da cruz e reze pelo falecido.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 13: Lembra-te do teu fim",
      blocos: [
        { leitura: "SIR 7:36-40" },
        {
          texto:
            "A tradição chama de novíssimos as últimas coisas: a morte, o juízo, o inferno e o paraíso. O Eclesiástico aconselha lembrar-se do fim em todas as obras, não para viver com medo, mas para viver bem. No mesmo trecho, pede que a nossa generosidade chegue também aos mortos.",
        },
        {
          pratica:
            "Antes de dormir, pergunte-se: se hoje fosse o meu último dia, o que eu teria feito diferente? E comece a fazer amanhã.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 14: Morre-se uma só vez",
      blocos: [
        { leitura: "HEB 9:24-28" },
        {
          texto:
            "A morte é o fim da caminhada nesta terra, do tempo de graça e de misericórdia que Deus nos dá (CIC 1013). Morremos uma só vez: não há reencarnação depois da morte. Por isso cada dia desta vida tem um valor enorme.",
        },
        {
          pratica: "Reconcilie-se hoje com alguém de quem você está afastado, ou ao menos dê o primeiro passo.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 15: O juízo particular",
      blocos: [
        { leitura: "LUK 16:19-26" },
        {
          texto:
            "Logo depois da morte, cada pessoa recebe de Deus a retribuição da sua vida, num juízo particular (CIC 1021-1022). O rico da parábola deixou o pobre sem socorro à sua porta, e o Senhor nos adverte de que seremos separados dele se descuidarmos das necessidades graves dos pobres (CIC 1033). O Catecismo lembra a palavra de São João da Cruz: ao entardecer desta vida, seremos examinados no amor (CIC 1022).",
        },
        {
          pratica:
            "Repare hoje em alguém que está à sua porta, na rua, no trabalho ou na família, e faça algo por essa pessoa.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 16: O juízo final",
      blocos: [
        { leitura: "MAT 25:31-40" },
        {
          texto:
            "Quando Cristo voltar na sua glória, haverá o juízo final, e se tornará conhecido o bem que cada um fez ou deixou de fazer (CIC 1038-1039). O critério será o amor aos mais pequenos, nos quais o próprio Cristo está. A lembrança desse dia nos chama à conversão enquanto ainda há tempo (CIC 1041).",
        },
        {
          pratica: "Escolha uma das obras de misericórdia do Evangelho de hoje e pratique-a ainda nesta semana.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 17: O inferno",
      blocos: [
        { leitura: "MAT 25:41-46" },
        {
          texto:
            "A Igreja ensina que existe o inferno: quem morre em pecado mortal, sem se arrepender, separa-se de Deus para sempre por sua livre escolha (CIC 1033-1035). Deus não predestina ninguém ao inferno (CIC 1037). Estas palavras de Jesus são um chamado sério à conversão, e a Igreja reza para que ninguém se perca.",
        },
        {
          pratica: "Reze hoje pela conversão dos pecadores, especialmente dos que estão perto da morte.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 18: O céu",
      blocos: [
        { leitura: "1JN 3:1-3" },
        {
          texto:
            "O céu é a vida perfeita com a Santíssima Trindade, com a Virgem Maria, os anjos e os santos, a felicidade que não acaba (CIC 1024). Lá veremos a Deus face a face, tal como ele é (CIC 1023). Essa esperança já nos santifica agora.",
        },
        {
          pratica: "Agradeça hoje a Deus por ter feito de você seu filho, rezando com calma um Pai-Nosso.",
        },
        { rezar: "pai-nosso" },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 19: Novo céu e nova terra",
      blocos: [
        { leitura: "REV 21:1-5" },
        {
          texto:
            "No fim dos tempos, o Reino de Deus chegará à sua plenitude, e o próprio universo será renovado (CIC 1042-1043). Deus enxugará todas as lágrimas, e não haverá mais morte nem dor. Os bons frutos do nosso esforço, feitos no Espírito do Senhor, serão encontrados de novo, purificados e transfigurados (CIC 1050).",
        },
        {
          pratica: "Faça hoje algo que deixe o mundo um pouco melhor: limpe, plante, conserte ou ajude alguém.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 20: Estai preparados",
      blocos: [
        { leitura: "LUK 12:35-40" },
        {
          texto:
            "Jesus pede que estejamos preparados como servos que esperam o seu senhor voltar. Não sabemos o dia nem a hora da nossa morte. Vigiar é viver na graça de Deus, em paz com ele e com os irmãos.",
        },
        {
          pratica:
            "Se você tem algum pecado grave na consciência, não deixe para depois: procure a confissão o quanto antes.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 21: Agora e na hora da nossa morte",
      blocos: [
        { leitura: "JHN 19:25-27" },
        {
          texto:
            "No dia 21 de novembro a Igreja recorda a Apresentação de Nossa Senhora. Maria esteve de pé junto à cruz na hora da morte do Filho, e Jesus a deu por Mãe a cada discípulo. Por isso pedimos tantas vezes que ela rogue por nós agora e na hora da nossa morte.",
        },
        { pratica: "Reze uma Ave-Maria pelas pessoas que vão morrer hoje." },
        { rezar: "ave-maria" },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 22: A casa nos céus",
      blocos: [
        { leitura: "2CO 5:1-8" },
        {
          texto:
            "São Paulo compara o corpo a uma tenda: um dia será desmontada, mas temos da parte de Deus uma casa eterna nos céus. Andamos pela fé, e não pela visão, e por isso vivemos confiantes. Lembrar disso nos ajuda a não nos prender ao que passa.",
        },
        {
          pratica: "Doe hoje algo que você guarda sem usar e que pode servir a outra pessoa.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 23: O fim do ano litúrgico",
      blocos: [
        { leitura: "MRK 13:28-33" },
        {
          texto:
            "Nas últimas semanas do ano litúrgico, as leituras da Missa falam do fim dos tempos e da vinda do Senhor. O céu e a terra passarão, mas as palavras de Jesus não passarão. A Igreja nos convida a olhar para o fim sem medo, como quem espera alguém que ama.",
        },
        { pratica: "Leia o Evangelho da Missa de hoje e guarde uma frase para levar no coração durante o dia." },
        { ir: "liturgia", rotulo: "Liturgia do dia" },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 24: Cristo Rei",
      blocos: [
        { leitura: "JHN 18:33-37" },
        {
          texto:
            "O ano litúrgico termina com a solenidade de Nosso Senhor Jesus Cristo, Rei do Universo, no último domingo antes do Advento. Jesus é rei, mas o seu reino não é deste mundo: ele reina pela verdade e pelo amor que deu a vida. Pertence ao seu reino quem ouve a sua voz.",
        },
        {
          pratica: "Pense em que parte da sua vida Jesus ainda não reina e entregue-a hoje a ele numa oração simples.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 25: A esperança da criação",
      blocos: [
        { leitura: "ROM 8:18-23" },
        {
          texto:
            "Os sofrimentos de agora não se comparam com a glória que há de vir. Toda a criação espera ser libertada, e nós também esperamos a redenção do nosso corpo. A esperança cristã não é simples otimismo, mas confiança na promessa de Deus.",
        },
        {
          pratica: "Ofereça a Deus um sofrimento seu deste dia, unido à cruz de Cristo, por um falecido.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 26: Jesus chorou",
      blocos: [
        { leitura: "JHN 11:32-36" },
        {
          texto:
            "Diante da dor de Maria e da morte do amigo, Jesus chorou. A fé não proíbe as lágrimas: o próprio Senhor as derramou. Quem está de luto pode chorar diante dele e encontrar consolo.",
        },
        {
          pratica: "Visite ou acompanhe alguém que está de luto, mesmo que seja só para ouvir.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 27: Do mais profundo",
      blocos: [
        { leitura: "PSA 130:1-8", poema: true },
        {
          texto:
            "Este salmo é rezado há séculos pelos fiéis defuntos. Do fundo da nossa pobreza clamamos a Deus, porque nele está a misericórdia e a redenção abundante. Lembramos hoje as almas esquecidas, por quem talvez ninguém mais reze.",
        },
        {
          pratica: "Reze hoje pelas almas esquecidas e por quem morreu sozinho, sem família por perto.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 28: A graça de uma boa morte",
      blocos: [
        { leitura: "LUK 2:25-32" },
        {
          texto:
            "Simeão esperou a vida inteira e pôde partir em paz depois de ver o Salvador. A Igreja nos anima a pedir a graça de uma boa morte e a nos confiar a São José, padroeiro da boa morte (CIC 1014). Preparar-se para a morte é viver hoje como amigos de Deus.",
        },
        {
          pratica: "Peça hoje a São José a graça de uma boa morte para você e para as pessoas da sua família.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 29: Os sacramentos da última hora",
      blocos: [
        { leitura: "JAS 5:13-16" },
        {
          texto:
            "Na doença grave e na velhice, a Igreja oferece a Unção dos Enfermos, que dá reconforto, paz e coragem e perdoa os pecados (CIC 1520). A quem está para partir, dá a Eucaristia como viático, o alimento para a passagem (CIC 1524). Não é preciso esperar o último momento para chamar o padre.",
        },
        {
          pratica:
            "Se há na sua família alguém doente ou idoso, converse com ele e com a paróquia para combinar a visita de um padre.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
    {
      titulo: "Dia 30: Vem, Senhor Jesus",
      blocos: [
        { leitura: "REV 22:16-17.20-21" },
        {
          texto:
            "O mês dos fiéis defuntos termina com o clamor que a Igreja repete desde o tempo dos apóstolos: vem, Senhor Jesus (CIC 1130, 2817). O Advento, que começa por estes dias, renova essa espera. Continuemos a rezar pelos nossos mortos, na esperança de reencontrá-los um dia na casa do Pai.",
        },
        {
          pratica:
            "Guarde a lista dos seus falecidos na Bíblia ou no livro de orações e continue a rezar por eles todos os meses.",
        },
        { rezar: "pelos-falecidos" },
      ],
    },
  ],
};

export default conteudo;
