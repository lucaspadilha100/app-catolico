Você vai preparar o Instagram @minhaigrejinhaapp para publicar posts e stories pela API oficial da Meta (Instagram API com login do Instagram), e guardar o acesso como segredo no GitHub. Use as contas já logadas neste navegador (Instagram @minhaigrejinhaapp, Facebook/Meta for Developers da conta minhaigrejinha@gmail.com, GitHub lucaspadilha100). Não insira forma de pagamento, não publique nada, não mude nada fora do que está aqui. NUNCA escreva o token em nenhum lugar além do campo de segredo do GitHub (nem em nota, nem em chat, nem em arquivo). Se algo pedir uma decisão que não está aqui, pare e me pergunte.

PARTE 1: conta Empresa
1. No Instagram (instagram.com, logado como @minhaigrejinhaapp): Configurações > Tipo de conta e ferramentas (ou "Para profissionais"). Se a conta for "Criador de conteúdo", mude para "Empresa" (conta comercial). Categoria: "Aplicativo" ou "Software" (a que já estiver, se estiver). Não conecte página do Facebook se não for obrigatório. Se já for Empresa, só confirme.

PARTE 2: app no Meta for Developers
2. Abra https://developers.facebook.com/apps e clique em "Criar app".
3. Caso de uso: escolha o que menciona Instagram ("Gerenciar mensagens e conteúdo no Instagram" ou equivalente). Tipo: Empresa, se perguntar. Nome do app: "Minha Igrejinha Publicador". E-mail de contato: minhaigrejinha@gmail.com. Não vincule portfólio empresarial se for opcional.
4. No painel do app, vá em Instagram > "Configuração da API com login do Instagram" (API setup with Instagram login).
5. Em "Gerar tokens de acesso", clique em "Adicionar conta", entre/autorize @minhaigrejinhaapp e aceite as permissões pedidas (devem incluir instagram_business_basic e instagram_business_content_publish). Se pedir que a conta seja "testadora do Instagram", aceite o convite em Instagram > Configurações > Apps e sites > Convites de testador, e volte.
6. Depois de autorizar, aparecem o ID da conta do Instagram (um número) e o botão "Gerar token". Gere o token (é um texto longo, de 60 dias). Copie o token para a área de transferência, sem colar em nenhum outro lugar.

PARTE 3: segredos no GitHub
7. Abra https://github.com/lucaspadilha100/app-catolico/settings/secrets/actions
8. "New repository secret": Name = IG_TOKEN ; Secret = cole o token. Salve.
9. "New repository secret": Name = IG_USER_ID ; Secret = o ID numérico da conta do Instagram do passo 6. Salve.
10. Confirme que os dois segredos aparecem na lista (o GitHub não mostra o valor, só o nome).

PARTE 4: renovação automática do token (o token do Instagram vence a cada 60 dias; o GitHub renova sozinho toda segunda-feira, mas precisa de uma chave para guardar o token novo)
11. Abra https://github.com/settings/personal-access-tokens/new (Fine-grained token).
12. Nome: "Minha Igrejinha - renovar token do Instagram". Expiração: 1 ano (a maior oferecida, se for menor). Resource owner: lucaspadilha100. Repository access: "Only select repositories" > app-catolico.
13. Permissions > Repository permissions: "Secrets" = Read and write. (Metadata fica Read-only automaticamente.) Nada mais.
14. Gere o token e copie, sem colar em nenhum outro lugar.
15. Em https://github.com/lucaspadilha100/app-catolico/settings/secrets/actions, "New repository secret": Name = GH_PAT ; Secret = cole esse token. Salve.

No final, me responda SÓ com:
- "conta Empresa: ok" (ou o que ficou diferente);
- "app criado: Minha Igrejinha Publicador";
- "segredos IG_TOKEN, IG_USER_ID e GH_PAT salvos no GitHub";
- as permissões que apareceram na autorização (nomes);
- NÃO escreva o token nem o ID na resposta.
