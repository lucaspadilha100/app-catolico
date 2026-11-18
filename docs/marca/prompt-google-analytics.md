Você vai criar e configurar o Google Analytics 4 do site "Minha Igrejinha" (app católico gratuito, sem anúncios). Use a conta Google minhaigrejinha@gmail.com, já logada neste navegador. Não insira forma de pagamento, não vincule nenhum produto do Google (Ads, AdSense, Merchant Center, BigQuery, Search Console) e não mude nada fora do que está listado. Se alguma etapa pedir algo que não está aqui, pare e me pergunte.

1. Abra https://analytics.google.com e clique em "Começar a medir" (ou Administrador > Criar > Conta, se já houver outra conta).
2. Conta: nome "Minha Igrejinha". Na tela de compartilhamento de dados da conta, DESMARQUE todas as opções: Produtos e serviços do Google, Contribuições de modelagem e insights de negócios, Suporte técnico e Recomendações para sua empresa.
3. Propriedade: nome "Minha Igrejinha", fuso horário "Brasil, horário de Brasília (São Paulo)", moeda "Real brasileiro (BRL)".
4. Detalhes da empresa: categoria "Religião e espiritualidade" (ou a mais próxima), tamanho "Pequena". Objetivo: "Entender o tráfego do site" ou "Ver relatórios básicos" (nenhum de publicidade).
5. Aceite os Termos de Serviço do Google Analytics para o Brasil e, se aparecer, os "Termos de processamento de dados" (aceite também em Administrador > Detalhes da conta > Termos de processamento de dados, se não tiver aceitado ainda).
6. Plataforma: Web. URL do site: https://minhaigrejinha.vercel.app . Nome do fluxo: "Site".
7. Ainda na criação do fluxo, clique na engrenagem de "Medição otimizada" e DESLIGUE todas as opções (visualizações de página no histórico do navegador, rolagens, cliques de saída, pesquisa no site, interações de formulário, engajamento com vídeo, downloads de arquivos). Depois desligue o interruptor geral de "Medição otimizada". Salve e crie o fluxo.
8. Copie o "ID da métrica" do fluxo (começa com G-). Guarde para me informar no final.
9. Não instale tag nenhuma no site (feche a tela de instruções de instalação); a instalação já está feita no código.
10. Administrador > Coleta e modificação de dados > Retenção de dados: "Retenção de dados de eventos" = 2 meses; "Retenção de dados do usuário" = 2 meses; "Redefinir dados do usuário em nova atividade" = DESLIGADO. Salve.
11. Administrador > Coleta e modificação de dados > Coleta de dados: deixe "Coleta de dados do Google Signals" DESATIVADA. Em "Configurações avançadas", deixe "Permitir indicadores de personalização de anúncios" DESATIVADO para todas as regiões (ou para o Brasil, se pedir por país).
12. Administrador > Definições personalizadas > Criar dimensões personalizadas. Crie três, todas com Escopo "Evento":
    - Nome da dimensão "Botão", Parâmetro de evento "rotulo"
    - Nome da dimensão "Tela do botão", Parâmetro de evento "tela"
    - Nome da dimensão "Destino do botão", Parâmetro de evento "destino"
13. Administrador > Gerenciamento de acesso à conta: confirme que só minhaigrejinha@gmail.com tem acesso. Não adicione ninguém.

No final, me responda com:
- o ID da métrica (G-...);
- a confirmação de cada item acima (1 a 13), dizendo "feito" ou o que ficou diferente e por quê.
