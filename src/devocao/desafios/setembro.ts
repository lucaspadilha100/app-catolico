import type { ConteudoDoDesafio } from "../tipos";

const capitulo = (livro: string, cap: number) => ({ ir: `/biblia/${livro}/${cap}`, rotulo: "Ler o capítulo inteiro" });

const conteudo: ConteudoDoDesafio = {
  revisao: "a revisar pelo dono",
  etapas: [
    {
      titulo: "Dia 1: A criação",
      blocos: [
        { leitura: "GEN 1:1-5.26-28.31" },
        {
          texto:
            "A Bíblia começa com Deus que cria pela palavra, e tudo o que ele faz é bom. O homem e a mulher são criados à sua imagem, capazes de conhecer e de amar o seu Criador (CIC 356). Neste mês vamos percorrer em trinta passos a história da salvação, do Gênesis ao Apocalipse.",
        },
        {
          pratica:
            "Escolha um lugar de honra da casa para a Bíblia e deixe-a aberta no capítulo de hoje. Leia o primeiro capítulo do Gênesis inteiro antes de dormir.",
        },
        capitulo("GEN", 1),
      ],
    },
    {
      titulo: "Dia 2: O pecado e a promessa",
      blocos: [
        { leitura: "GEN 3:8-15" },
        {
          texto:
            "Depois do pecado, o homem se esconde, e é Deus quem vai procurá-lo: Onde estás? Mesmo ao castigar a serpente, Deus já promete a vitória da descendência da mulher. A Igreja chama esta passagem de Protoevangelho, o primeiro anúncio do Redentor, e vê nela Cristo e Maria, a nova Eva (CIC 410-411).",
        },
        {
          pratica:
            "À noite, faça um breve exame de consciência e responda a Deus a pergunta de hoje: onde estou?",
        },
        capitulo("GEN", 3),
      ],
    },
    {
      titulo: "Dia 3: O chamado de Abraão",
      blocos: [
        { leitura: "GEN 12:1-7" },
        {
          texto:
            "Deus chama Abraão a deixar a sua terra sem dizer para onde, e ele parte. Com ele começa o povo escolhido, e nele seriam abençoadas todas as famílias da terra. Por sua obediência, Abraão se tornou o pai de todos os que creem (CIC 145-146).",
        },
        {
          pratica:
            "Pense numa coisa que Deus lhe pede para deixar ou para começar, e dê hoje um pequeno passo nessa direção.",
        },
        capitulo("GEN", 12),
      ],
    },
    {
      titulo: "Dia 4: A fé de Abraão",
      blocos: [
        { leitura: "GEN 15:1-6" },
        {
          texto:
            "Abraão já é velho e não tem filhos, e Deus o leva para fora e lhe pede que conte as estrelas. Ele creu, e a fé lhe foi atribuída como justiça. São Paulo cita esta frase para falar da fé que nos torna justos diante de Deus (Rm 4,3).",
        },
        {
          pratica:
            "À noite, se puder, olhe o céu por alguns minutos e reze um Creio pedindo uma fé como a de Abraão.",
        },
        capitulo("GEN", 15),
      ],
    },
    {
      titulo: "Dia 5: José no Egito",
      blocos: [
        { leitura: "GEN 45:1-8" },
        {
          texto:
            "José foi vendido pelos irmãos e chegou a governar o Egito. Quando os reencontra, perdoa e diz que Deus tirou daquele mal a salvação de muitos. A história de José mostra que Deus conduz tudo, até o que parece perdido (CIC 312).",
        },
        {
          pratica:
            "Leia em família o capítulo inteiro. Se guarda mágoa de alguém, peça hoje a graça de perdoar.",
        },
        capitulo("GEN", 45),
      ],
    },
    {
      titulo: "Dia 6: A sarça ardente",
      blocos: [
        { leitura: "EXO 3:1-8.13-14" },
        {
          texto:
            "No deserto, Deus chama Moisés do meio de uma sarça que arde sem se consumir. Ele viu a aflição do seu povo no Egito e desceu para libertá-lo. Então revela o seu nome: Eu sou aquele que sou (CIC 205-206).",
        },
        {
          pratica:
            "Passe alguns minutos em silêncio diante do Santíssimo ou num lugar quieto da casa, contando a Deus uma aflição sua ou da sua família.",
        },
        capitulo("EXO", 3),
      ],
    },
    {
      titulo: "Dia 7: A Páscoa",
      blocos: [
        { leitura: "EXO 12:1-8.11-14" },
        {
          texto:
            "Na noite da libertação, cada família imola um cordeiro e marca a porta com o seu sangue, e essa ceia será lembrada de geração em geração. Jesus celebrou a Páscoa com os apóstolos e deu a ela o seu sentido definitivo: ele mesmo é o Cordeiro que nos liberta do pecado (CIC 1340).",
        },
        {
          pratica:
            "Na próxima missa, preste atenção ao momento em que o padre mostra a hóstia e diz: Eis o Cordeiro de Deus.",
        },
        capitulo("EXO", 12),
      ],
    },
    {
      titulo: "Dia 8: A passagem do mar",
      blocos: [
        { leitura: "EXO 14:21-31" },
        {
          texto:
            "Deus abre o mar, e o povo passa a pé enxuto da escravidão para a liberdade. A Igreja vê nesta travessia uma figura do Batismo, que nos tira do pecado para a vida nova (CIC 1221).",
        },
        {
          pratica:
            "Descubra a data do seu batismo e agradeça a Deus por ele. Se os seus padrinhos estão vivos, mande-lhes uma mensagem.",
        },
        capitulo("EXO", 14),
      ],
    },
    {
      titulo: "Dia 9: Os Dez Mandamentos",
      blocos: [
        { leitura: "EXO 20:1-17" },
        {
          texto:
            "No Sinai, Deus dá ao povo libertado as dez palavras da aliança. Elas começam lembrando a libertação do Egito: os mandamentos são o caminho de vida de quem Deus já salvou (CIC 2057).",
        },
        {
          pratica:
            "Recite os Dez Mandamentos como estão no catecismo e ensine-os a uma criança da família.",
        },
        capitulo("EXO", 20),
      ],
    },
    {
      titulo: "Dia 10: Ouve, Israel",
      blocos: [
        { leitura: "DEU 6:4-9" },
        {
          texto:
            "Este é o centro da fé de Israel: um só Deus, amado de todo o coração. Jesus respondeu com estas palavras quando lhe perguntaram qual era o primeiro mandamento (Mc 12,29-30). Moisés pede que elas sejam ensinadas aos filhos, em casa e pelo caminho.",
        },
        {
          pratica:
            "Decore o versículo 5 e reze-o ao acordar e ao deitar durante esta semana.",
        },
        capitulo("DEU", 6),
      ],
    },
    {
      titulo: "Dia 11: Fala, Senhor",
      blocos: [
        { leitura: "1SA 3:1-10" },
        {
          texto:
            "O menino Samuel ouve alguém chamar no meio da noite e não sabe que é Deus. O velho Heli o ensina a responder: Fala, Senhor, porque o teu servo ouve. Também nós precisamos de quem nos ensine a escutar a Deus.",
        },
        {
          pratica:
            "Antes de ler a Bíblia, diga as palavras de Samuel. Reze hoje pelos catequistas e por quem ensinou você a rezar.",
        },
        capitulo("1SA", 3),
      ],
    },
    {
      titulo: "Dia 12: Davi, o escolhido",
      blocos: [
        { leitura: "1SA 16:6-13" },
        {
          texto:
            "Deus manda Samuel ungir um dos filhos de Isaí, e o escolhido é o mais novo, que cuidava das ovelhas. O homem vê o que está à vista, mas o Senhor olha o coração. Da casa de Davi, o rei pastor, nasceria Jesus, o Bom Pastor.",
        },
        {
          pratica:
            "Durante o dia, procure olhar uma pessoa difícil como Deus a olha, pelo coração e não pela aparência.",
        },
        capitulo("1SA", 16),
      ],
    },
    {
      titulo: "Dia 13: A promessa a Davi",
      blocos: [
        { leitura: "2SA 7:8-16" },
        {
          texto:
            "Davi quer construir uma casa para Deus, e Deus promete construir uma casa para Davi: uma descendência cujo reino durará para sempre. Essa promessa se cumpre em Jesus, a quem o anjo anuncia o trono de seu pai Davi (Lc 1,32).",
        },
        {
          pratica:
            "Reze em família pela sua casa, entregando a Deus o futuro dos filhos e dos netos.",
        },
        capitulo("2SA", 7),
      ],
    },
    {
      titulo: "Dia 14: Os Salmos",
      blocos: [
        { leitura: "PSA 23:1-6", poema: true },
        {
          texto:
            "Os Salmos são as orações de Israel, muitas delas ligadas ao nome de Davi, e no Saltério a Palavra de Deus se torna oração do homem (CIC 2587). Jesus rezou com os Salmos, e a Igreja os reza todos os dias. Este é o salmo do Bom Pastor, que na numeração da nossa Bíblia é o 22.",
        },
        {
          pratica:
            "Decore este salmo, ou ao menos o primeiro versículo, e reze-o nos momentos de medo.",
        },
        capitulo("PSA", 22),
      ],
    },
    {
      titulo: "Dia 15: Elias e a brisa suave",
      blocos: [
        { leitura: "1KI 19:9-12" },
        {
          texto:
            "O profeta Elias, perseguido e cansado, se refugia numa caverna no monte de Deus. O Senhor não está no vento forte, nem no terremoto, nem no fogo, mas no sopro de uma brisa suave. Deus costuma falar no silêncio.",
        },
        {
          pratica:
            "Fique dez minutos em silêncio, sem rádio, televisão nem celular, apenas na presença de Deus.",
        },
        capitulo("1KI", 19),
      ],
    },
    {
      titulo: "Dia 16: O chamado de Isaías",
      blocos: [
        { leitura: "ISA 6:1-8" },
        {
          texto:
            "Isaías vê a glória de Deus no templo e ouve os serafins cantar: Santo, Santo, Santo. Purificado, ele responde ao chamado: Aqui me tens: envia-me. O canto dos serafins é o mesmo Santo que a Igreja canta em cada missa.",
        },
        {
          pratica:
            "Na próxima missa, cante ou reze o Santo com atenção, lembrando que nos unimos aos anjos.",
        },
        capitulo("ISA", 6),
      ],
    },
    {
      titulo: "Dia 17: O Messias prometido",
      blocos: [
        { leitura: "ISA 9:1-6" },
        {
          texto:
            "Isaías anuncia uma grande luz para o povo que andava nas trevas: um menino que nasce para nós, com nomes que só cabem a Deus. A Igreja lê esta profecia na missa da noite de Natal.",
        },
        {
          pratica:
            "Escolha um dos nomes dados ao menino no versículo 6 e repita-o como oração ao longo do dia.",
        },
        capitulo("ISA", 9),
      ],
    },
    {
      titulo: "Dia 18: A nova aliança",
      blocos: [
        { leitura: "JER 31:31-34" },
        {
          texto:
            "Jeremias viu a queda de Jerusalém e o povo levado para o exílio. No meio da ruína, Deus promete uma nova aliança, com a lei escrita no coração. Jesus fala dessa nova aliança na última ceia, ao dar o cálice do seu sangue.",
        },
        {
          pratica:
            "Copie à mão o versículo 33 e leia-o todas as manhãs durante a semana.",
        },
        capitulo("JER", 31),
      ],
    },
    {
      titulo: "Dia 19: Um coração novo",
      blocos: [
        { leitura: "EZK 36:24-28" },
        {
          texto:
            "Ezequiel fala a um povo exilado, sem templo e sem terra. Deus promete reuni-lo, purificá-lo com água pura e trocar o coração de pedra por um coração de carne. A Igreja vê nesta promessa o dom do Espírito Santo (CIC 715).",
        },
        {
          pratica:
            "Peça na oração um coração novo e marque a sua próxima confissão.",
        },
        capitulo("EZK", 36),
      ],
    },
    {
      titulo: "Dia 20: O Servo sofredor",
      blocos: [
        { leitura: "ISA 53:2-7" },
        {
          texto:
            "Isaías descreve um servo desprezado, que carrega as nossas dores e é levado como um cordeiro ao matadouro. Os apóstolos reconheceram nele Jesus: o diácono Filipe explicou este texto a um funcionário da rainha da Etiópia, que logo pediu o batismo (At 8,27-38).",
        },
        {
          pratica:
            "Leia o capítulo inteiro diante de um crucifixo e agradeça a Jesus por ter carregado as nossas dores.",
        },
        capitulo("ISA", 53),
      ],
    },
    {
      titulo: "Dia 21: A sabedoria",
      blocos: [
        { leitura: "PRO 3:1-6" },
        {
          texto:
            "Os livros sapienciais, como Provérbios, Sabedoria e Eclesiástico, ensinam a viver diante de Deus no dia a dia: no trabalho, na família, no modo de falar. A sabedoria verdadeira começa pela confiança no Senhor, e São Paulo chama Cristo de sabedoria de Deus (1Cor 1,24).",
        },
        {
          pratica:
            "Guarde o versículo 5 e lembre-se dele diante da próxima decisão difícil.",
        },
        capitulo("PRO", 3),
      ],
    },
    {
      titulo: "Dia 22: O Verbo se fez carne",
      blocos: [
        { leitura: "JHN 1:1-5.14" },
        {
          texto:
            "Tudo o que os profetas esperaram se cumpre: a Palavra eterna de Deus se faz homem no seio da Virgem Maria. Por meio de todas as palavras da Escritura, Deus diz uma só Palavra, o seu Filho (CIC 102).",
        },
        {
          pratica:
            "Reze o Ângelus ao meio-dia, que lembra o momento em que o Verbo se fez carne.",
        },
        capitulo("JHN", 1),
      ],
    },
    {
      titulo: "Dia 23: As bem-aventuranças",
      blocos: [
        { leitura: "MAT 5:1-12" },
        {
          texto:
            "No monte, Jesus ensina o caminho da felicidade verdadeira, tão diferente da que o mundo oferece. As bem-aventuranças mostram o rosto do próprio Cristo e respondem ao desejo de felicidade que Deus pôs no nosso coração (CIC 1717-1718).",
        },
        {
          pratica:
            "Escolha uma bem-aventurança e procure vivê-la hoje com um gesto concreto.",
        },
        capitulo("MAT", 5),
      ],
    },
    {
      titulo: "Dia 24: O filho pródigo",
      blocos: [
        { leitura: "LUK 15:11-24" },
        {
          texto:
            "Jesus conta a história do filho que vai embora, gasta tudo e volta envergonhado. O pai o vê de longe, corre ao seu encontro e o abraça antes mesmo de ouvir o pedido de perdão. Assim é Deus com cada um de nós (CIC 1439).",
        },
        {
          pratica:
            "Leia a parábola até o fim, com a parte do filho mais velho, e pergunte-se com qual dos dois filhos você se parece.",
        },
        capitulo("LUK", 15),
      ],
    },
    {
      titulo: "Dia 25: A última ceia",
      blocos: [
        { leitura: "LUK 22:14-20" },
        {
          texto:
            "Na ceia da Páscoa, Jesus toma o pão e o cálice e dá aos apóstolos o seu corpo e o seu sangue: é a nova aliança anunciada pelos profetas. Fazei isto em memória de mim: a Igreja obedece a essa ordem em cada missa (CIC 1341).",
        },
        {
          pratica:
            "Participe de uma missa durante a semana, se puder, ou faça uma visita a Jesus no sacrário.",
        },
        capitulo("LUK", 22),
      ],
    },
    {
      titulo: "Dia 26: A cruz",
      blocos: [
        { leitura: "JHN 19:25-30" },
        {
          texto:
            "Junto à cruz está Maria, e Jesus a entrega como mãe ao discípulo amado e, nele, a todos nós (CIC 964). Depois diz: Tudo está cumprido. As Escrituras se realizam no amor que vai até o fim.",
        },
        {
          pratica:
            "Reze devagar diante de um crucifixo, repetindo as palavras de Jesus deste trecho.",
        },
        capitulo("JHN", 19),
      ],
    },
    {
      titulo: "Dia 27: A ressurreição",
      blocos: [
        { leitura: "MAT 28:1-10" },
        {
          texto:
            "No primeiro dia da semana, as mulheres encontram o sepulcro vazio, e o anjo anuncia: ressuscitou, como tinha dito. Jesus vai ao encontro delas e as envia a levar a notícia aos irmãos. A ressurreição é a verdade culminante da nossa fé em Cristo (CIC 638).",
        },
        {
          pratica:
            "No próximo domingo, vá à missa lembrando que cada domingo celebra a ressurreição do Senhor.",
        },
        capitulo("MAT", 28),
      ],
    },
    {
      titulo: "Dia 28: O Espírito e a Igreja",
      blocos: [
        { leitura: "ACT 2:1-4.42-47" },
        {
          texto:
            "Em Pentecostes, o Espírito Santo desce sobre os discípulos reunidos com Maria (At 1,14), e a Igreja começa a anunciar Cristo. Os primeiros cristãos perseveravam no ensino dos apóstolos, na fração do pão e nas orações.",
        },
        {
          pratica:
            "Reze o Vinde, Espírito Santo e leia com a família o capítulo inteiro dos Atos dos Apóstolos.",
        },
        capitulo("ACT", 2),
      ],
    },
    {
      titulo: "Dia 29: As cartas dos apóstolos",
      blocos: [
        { leitura: "ROM 8:31-39" },
        {
          texto:
            "Os apóstolos escreveram cartas às comunidades para animá-las e corrigi-las, e a Igreja as recebeu como Palavra de Deus. São Paulo, que antes perseguia os cristãos, escreve aos romanos que nada pode nos separar do amor de Deus em Cristo.",
        },
        {
          pratica:
            "Escreva uma carta ou uma mensagem a alguém que está sofrendo, com uma palavra de fé.",
        },
        capitulo("ROM", 8),
      ],
    },
    {
      titulo: "Dia 30: Todas as coisas novas",
      blocos: [
        { leitura: "REV 21:1-5" },
        {
          texto:
            "O último livro da Bíblia mostra o fim da história, quando Deus enxugará toda lágrima e fará novas todas as coisas. Hoje a Igreja celebra São Jerônimo, que dedicou a vida às Escrituras e traduziu a Bíblia para o latim na versão chamada Vulgata, a mesma que o Padre Antônio Pereira de Figueiredo traduziu para o português. Ele ensinava que ignorar as Escrituras é ignorar Cristo (CIC 133).",
        },
        {
          pratica:
            "Escolha um livro da Bíblia para continuar lendo depois deste mês, um capítulo por dia. Pode começar pelo Evangelho de São Marcos.",
        },
        capitulo("REV", 21),
      ],
    },
  ],
};

export default conteudo;
