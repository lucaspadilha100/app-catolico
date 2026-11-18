import { NOME_DO_APP } from "@/marca";
export const CONTATO = "minhaigrejinha@gmail.com";

export const ATUALIZADO_EM = "18 de novembro de 2026";

export interface Secao {
  titulo: string;
  paragrafos: string[];
}

export const PRIVACIDADE: Secao[] = [
  {
    titulo: "Quem somos",
    paragrafos: [
      `O app ${NOME_DO_APP} é um aplicativo católico gratuito e sem anúncios. Este texto explica que dados o app usa, para quê, onde ficam e como você pode apagá-los, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).`,
    ],
  },
  {
    titulo: "Sem conta, nada sai do seu aparelho",
    paragrafos: [
      "Você pode usar o app inteiro sem criar conta. Nesse caso, o que você marca (novenas, terços, leitura da Bíblia, santos de devoção, falecidos, exame de consciência, diário e propósitos) fica guardado só no seu aparelho.",
      "O exame de consciência, os propósitos e o diário ficam embaralhados com o PIN que só você sabe. Sem o PIN, ninguém consegue ler, nem nós.",
    ],
  },
  {
    titulo: "Com conta",
    paragrafos: [
      "A conta é opcional e serve para guardar as suas marcações na nuvem e levá-las para outro aparelho. Para entrar, você usa e-mail e senha ou a sua conta Google. Guardamos o e-mail e as marcações que você fez no app; a senha é guardada embaralhada pelo serviço de login, e ninguém a vê.",
      "O exame de consciência, os propósitos e o diário continuam embaralhados com o seu PIN antes de sair do aparelho. No servidor fica só o conteúdo embaralhado: nem a equipe do app consegue lê-lo. Se você esquecer o PIN, não há como recuperar.",
      "Os dados ficam no Supabase, serviço de banco de dados usado pelo app, protegidos por regras de acesso: cada pessoa só lê o que é seu.",
    ],
  },
  {
    titulo: "Dados sensíveis",
    paragrafos: [
      "As suas práticas de fé são dado sensível pela lei (convicção religiosa). Por isso coletamos o mínimo: o que você guarda ao criar a conta e, só se você aceitar, os dados de uso descritos em \"Cookies de uso\". Nunca vendemos, emprestamos ou usamos esses dados para propaganda.",
    ],
  },
  {
    titulo: "Avisos de erro e contagem de uso",
    paragrafos: [
      "Quando você usa o botão \"Avisar erro\" na Bíblia, enviamos o versículo, o tipo de erro e o seu comentário, sem o seu nome.",
      "Para saber se o app está sendo útil, contamos quantas vezes ele é aberto por dia, sem cookie e sem guardar quem abriu. Essa contagem é separada do Google Analytics e não depende do seu aceite.",
    ],
  },
  {
    titulo: "Cookies de uso",
    paragrafos: [
      "No site, se você aceitar, usamos o Google Analytics, serviço do Google, para saber quais telas e botões mais se usam e decidir o que melhorar. Se você recusar ou não responder, o Google Analytics não é carregado. No app instalado pela loja (Android e iOS), ele não é usado.",
      "Com o seu aceite, coletamos: quais telas foram abertas, sem os dados de busca do endereço; o nome dos botões e links tocados e a tela onde estavam; de onde veio a visita, como um link, uma busca no Google ou uma rede social; o tipo de aparelho, o sistema e o navegador; a cidade ou região aproximada, que o Google deduz pela conexão; e se você já visitou o site antes, por meio de um código aleatório guardado num cookie do seu navegador.",
      "Nunca coletamos: nada nas telas de exame de consciência, diário, conta, intenções e pedidos de oração, falecidos, grupos, terços em grupo, escalas, correntes de oração e roteiros; nenhum texto que você digita; nenhuma busca; nada do que está protegido pelo seu PIN. Não enviamos nome, e-mail nem o código da sua conta. O Google usa o endereço IP só para estimar a região e não o guarda.",
      "As telas abertas num app católico podem mostrar a sua prática de fé, que a lei trata como dado sensível. Por isso a base legal é o seu consentimento, pedido de forma específica e em destaque (Lei 13.709/2018, art. 7º, I, e art. 11, I). Os dados servem só para melhorar o app: não são usados para propaganda, não são vendidos e não são cruzados com outros dados do Google, porque os sinais do Google e a personalização de anúncios ficam desligados.",
      "O Google trata esses dados em nome do app, como operador, e os guarda em servidores fora do Brasil, principalmente nos Estados Unidos. Ao aceitar, você concorda com essa transferência internacional (art. 33, VIII). Só a equipe do app vê os relatórios, que mostram números de conjunto, sem identificar ninguém.",
      "Os dados de cada visita ficam guardados por 2 meses no Google Analytics e depois são apagados; ficam só os totais, como quantas vezes uma tela foi aberta num mês. O cookie fica no seu navegador por até 13 meses, ou até você desligar a coleta ou limpar os dados do navegador.",
      "Você pode mudar de ideia quando quiser: em Mais, Preferências, o interruptor \"Cookies de uso\" liga e desliga a coleta. Ao desligar, a coleta para na hora e os cookies do Google Analytics são apagados do seu navegador. Recusar ou desligar não muda nada no uso do app: tudo continua funcionando igual.",
    ],
  },
  {
    titulo: "Vídeos do YouTube",
    paragrafos: [
      "Em Assistir, os vídeos de homilia, missa e terço são dos próprios canais e tocam no player do YouTube, no modo de privacidade reforçada. Ao dar o play, o YouTube recebe a visita como em qualquer site e pode mostrar os anúncios do canal; o Minha Igrejinha não tem anúncios nem recebe nada por eles.",
    ],
  },
  {
    titulo: "Os seus direitos",
    paragrafos: [
      "Você pode, a qualquer momento, ver o que está guardado, corrigir, levar para outro aparelho e apagar. Em Mais, Conta, o botão \"Apagar minha conta\" apaga a conta e tudo o que estava guardado na nuvem, de uma vez.",
      "Os dados do Google Analytics não ficam ligados à sua conta nem ao seu nome, por isso não temos como encontrá-los e apagá-los um a um. Para parar a coleta, desligue \"Cookies de uso\"; o que já foi coletado é apagado no prazo de 2 meses.",
    ],
  },
  {
    titulo: "Contato",
    paragrafos: ["Dúvidas sobre os seus dados: CONTATO."],
  },
];

export const TERMOS: Secao[] = [
  {
    titulo: "Uso do app",
    paragrafos: [
      `O app ${NOME_DO_APP} é gratuito, sem anúncios, e pode ser usado sem conta. Ao criar uma conta, você concorda com estes termos e com a política de privacidade.`,
    ],
  },
  {
    titulo: "Conteúdo",
    paragrafos: [
      `Os textos de oração, reflexões e histórias dos santos foram preparados com cuidado e seguem a doutrina da Igreja Católica, mas não substituem a orientação de um padre ou os documentos oficiais da Igreja. O app ${NOME_DO_APP} não é um aplicativo oficial da Igreja.`,
      "O texto bíblico é a tradução do Pe. Antônio Pereira de Figueiredo (domínio público), revisado pela equipe em linguagem atual. Se encontrar um erro, use o botão \"Avisar erro\".",
    ],
  },
  {
    titulo: "Sua conta",
    paragrafos: [
      "Você é responsável pela sua senha, pelo acesso ao seu e-mail e pelo seu PIN. O PIN não pode ser recuperado: se for esquecido, o conteúdo protegido por ele se perde.",
      "Você pode apagar a sua conta quando quiser, pelo próprio app.",
    ],
  },
  {
    titulo: "Mudanças",
    paragrafos: ["Se estes termos ou a política de privacidade mudarem, o app avisará."],
  },
];
