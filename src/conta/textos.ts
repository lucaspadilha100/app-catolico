import { NOME_DO_APP } from "@/marca";
export const CONTATO = "";

export const ATUALIZADO_EM = "11 de novembro de 2026";

export interface Secao {
  titulo: string;
  paragrafos: string[];
}

export const PRIVACIDADE: Secao[] = [
  {
    titulo: "Quem somos",
    paragrafos: [
      `O ${NOME_DO_APP} é um aplicativo católico gratuito e sem anúncios. Este texto explica que dados o app usa, para quê, onde ficam e como você pode apagá-los, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).`,
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
      "As suas práticas de fé são dado sensível pela lei (convicção religiosa). Por isso coletamos o mínimo, só com a sua ação de criar a conta, e nunca vendemos, emprestamos ou usamos esses dados para propaganda.",
    ],
  },
  {
    titulo: "Avisos de erro e contagem de uso",
    paragrafos: [
      "Quando você usa o botão \"Avisar erro\" na Bíblia, enviamos o versículo, o tipo de erro e o seu comentário, sem o seu nome.",
      "Para saber se o app está sendo útil, contamos quantas vezes ele é aberto por dia, sem guardar quem abriu. Não usamos cookies de rastreio nem ferramentas de anúncio.",
    ],
  },
  {
    titulo: "Os seus direitos",
    paragrafos: [
      "Você pode, a qualquer momento, ver o que está guardado, corrigir, levar para outro aparelho e apagar. Em Mais, Conta, o botão \"Apagar minha conta\" apaga a conta e tudo o que estava guardado na nuvem, de uma vez.",
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
      `O ${NOME_DO_APP} é gratuito, sem anúncios, e pode ser usado sem conta. Ao criar uma conta, você concorda com estes termos e com a política de privacidade.`,
    ],
  },
  {
    titulo: "Conteúdo",
    paragrafos: [
      `Os textos de oração, reflexões e histórias dos santos foram preparados com cuidado e seguem a doutrina da Igreja Católica, mas não substituem a orientação de um padre ou os documentos oficiais da Igreja. O ${NOME_DO_APP} não é um aplicativo oficial da Igreja.`,
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
