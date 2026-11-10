# Santinho: plano de construção

Tudo o que está em `docs/definicao.md`, dividido em LEVAS. Cada leva termina
com o app funcionando, testado, na `main` e com prévia das telas enviada ao
dono. A ordem é de propósito: primeiro o conteúdo que funciona sem servidor
(leve, offline, custo zero), depois o que precisa de conta e banco, por fim o
celular e o lançamento.

Legenda: ✅ pronto · 🔨 em andamento · ⬜ a fazer · 👤 precisa do dono

## Feito

### Leva 0. Definição ✅
- ✅ Produto definido com o dono (`docs/definicao.md`)
- ✅ Regras do projeto (`CLAUDE.md`), nome Santinho e ícone final

### Leva 1. Esqueleto ✅
- ✅ Web + PWA (instala e funciona offline) + Android e iOS (Capacitor)
- ✅ Navegação: Hoje · Rezar · Bíblia · Missas · Mais
- ✅ Tema claro e escuro, tamanho da letra, modo simples
- ✅ Cor litúrgica do dia pintando o app

### Leva 2. Calendário litúrgico ✅
- ✅ Tempos, semanas, ciclos A/B/C e par/ímpar, cor do dia
- ✅ Todos os santos do ano: Calendário Romano e Próprio do Brasil
- ✅ Precedência (o que se celebra em cada dia) e transferências do Brasil
- ✅ Conferido dia a dia com o calendário publicado de 2024 a 2027
- ✅ Tela Hoje com celebração, memória e santos do dia

### Leva 3. Lecionário ✅
- ✅ Referências de todos os dias: domingos A/B/C, semana I/II, Advento,
  Natal (4 missas), Quaresma, Tríduo, Vigília Pascal, Páscoa, solenidades,
  festas, santos e próprio do Brasil (Aparecida, Guadalupe)
- ✅ Versículos na numeração do lecionário brasileiro; Salmos "Sl 22(23)";
  Eclesiástico, Tobias e Daniel na numeração do Brasil
- ✅ Memórias: leituras do dia de semana, ou as próprias quando obrigatórias
- ✅ Tela Liturgia do dia (navega entre os dias) e resumo na tela Hoje
- ✅ Teste: todo dia de 2024 a 2035 tem leituras; 95% idêntico, referência por
  referência, à liturgia brasileira publicada (o resto é diferença de formato)

## A fazer

### Leva 4. Bíblia 🔨
- ✅ Texto do Figueiredo (edição de 1950), 73 livros, 35.198 versículos,
  estruturado por versículo; 940 de 1.334 capítulos batendo exatamente com a
  Vulgata, o resto listado em `fontes/biblia/pendencias.txt`
- ✅ Ortografia atual automática (nível 1) conferida no dicionário
- ✅ Tela Bíblia: livros, capítulos, leitura, "ir para" (Mc 4, Jo 3,16)
- ✅ Progresso: capítulos lidos, % por livro e da Bíblia, continuar lendo
- ✅ Liturgia do dia com o texto completo das leituras
- ✅ 👤 Regra de fidelidade: quando o Figueiredo se afasta do latim, segue o Figueiredo
- ✅ 👤 Amostra em linguagem atual aprovada (Mc 1 e Sl 22, segunda versão)
- ✅ Revisão em linguagem atual dos quatro Evangelhos (3.777 versículos),
  conferida capítulo a capítulo; dúvidas em `fontes/biblia/revisao/<LIVRO>-notas.md`
- ✅ Revisão em linguagem atual dos 150 Salmos (numeração grega, como nas
  Bíblias católicas do Brasil); dúvidas em `fontes/biblia/revisao/PSA-notas.md`
- ✅ Evangelhos na ordem e divisão de versículos atuais (Mt 5,4-5 e outros 8 casos)
- ✅ Teste de integridade: numeração e toda leitura da liturgia de 2024 a 2035
- ✅ Versículos perdidos na extração dos PDFs recuperados (de 1.245 para 3,
  que a própria edição de 1950 junta ou omite)
- ✅ Revisão em linguagem atual dos 73 livros
- ✅ Conferência de fidelidade de TODOS os versículos com três fontes
  (Vulgata, Douay-Rheims e original hebraico/grego), decidida pelas fontes
  (decisão do dono); registro em `docs/biblia/decisoes.md` e
  `fontes/biblia/revisao/conferencia/`
- ✅ Botão "Avisar erro" no versículo
- ✅ Passada final de nomes próprios: 129 nomes na mesma grafia na Bíblia toda
  (`fontes/biblia/revisao/conferencia/nomes.md`)
- ⬜ 👤 Leitura dos Evangelhos e Salmos revisados (e, se possível, um padre ou
  catequista da paróquia)
- ⬜ Introdução curta dos 73 livros
- ✅ Leitura direta: abre no capítulo onde parou (ou Gênesis 1), livro e
  capítulo escolhidos no topo, um versículo por parágrafo (10/11/2026)
- ✅ Leitura contínua: um capítulo emenda no outro ao rolar (até 8 na tela,
  cada livro baixado só quando a leitura chega nele)
- ⬜ Grifar versículos (cores) e uma aba com os trechos grifados (pedido do
  dono, 10/11/2026: "como quem grifa a Bíblia"); sincroniza com a conta
- ⬜ Busca no texto, notas, planos de leitura

### Leva 5. Terço e orações 🔨
- ✅ Terço guiado completo: sinal da cruz, oferecimento, Creio, três Ave-Marias,
  mistérios com passagem bíblica e meditação, dezenas, oração de Fátima,
  Salve-Rainha e oração final; modo contas (toque na tela inteira e vibração),
  intenção, contador pessoal e retomar de onde parou (`src/oracao/terco.ts`,
  `components/TercoGuiado.tsx`)
- ✅ Meditação curta dos 20 mistérios com a passagem bíblica (texto da nossa Bíblia)
- ⬜ 👤 Revisão das 20 meditações dos mistérios (`MEDITACOES.revisao` em
  `src/oracao/terco.ts` está "a revisar pelo dono"; mudar para "revisado")
- ✅ Terço da Misericórdia, Terço de São Miguel (o mesmo componente)
- ✅ Orações tradicionais em português e latim, com busca (`src/oracao/oracoes.ts`)
- ✅ Ângelus (vira Regina Caeli no Tempo Pascal), manhã, noite, refeições,
  comunhão espiritual, pelos falecidos e as ladainhas de Nossa Senhora, do
  Sagrado Coração e de São José
- ✅ Teste: português e latim em toda oração, referências dos mistérios,
  contagem de cada terço (53 Ave-Marias no comum) e nenhum travessão
- ⬜ 👤 Leitura das orações em português (forma tradicional de reza no Brasil)
- ⬜ Rosário completo (4 mistérios seguidos)

### Leva 6. Devoções 🔨
- ✅ 18 novenas (6 de Nossa Senhora, 4 do Senhor, 8 de santos, com a Trezena de Santo Antônio), que começam sozinhas na data da festa e marcam "4º dia de 9"
- ✅ Consagração a Nossa Senhora em 33 dias (Montfort), escolhendo a festa e o dia
- ✅ Via-Sacra guiada, com o Stabat Mater
- ✅ Semana Santa dia a dia, com Hora Santa na Quinta-feira
- ✅ Pequeno Ofício de Nossa Senhora, as oito horas, no tempo comum
- ✅ Tempos e meses: Advento com Maria, Quaresma, maio, junho, setembro (Bíblia), outubro e novembro
- ✅ "Em andamento" na tela Hoje e "você rezou N dias nesta semana"
- ✅ Novas orações: Veni Creator, Ave Maris Stella, Magnificat, Te Deum, Stabat Mater, ladainhas do Espírito Santo e do Nome de Jesus
- ✅ Testes: datas de todas as novenas e tempos, toda leitura existe, toda oração ligada existe
- ⬜ 👤 Revisar os textos (`docs/devocoes/a-revisar.md` lista os pontos de cada um)
- ⬜ Pequeno Ofício no Advento e no Natal; Ofício dos Defuntos
- ⬜ Lembrete da novena (entra com as notificações, Leva 15 e 16)

### Leva 7. Santos e calendário 🔨
- ✅ História de todos os santos e festas do calendário do Brasil (cerca de 230), mais os de devoção popular (Expedito, Cristóvão, Bárbara) e os beatos Nhá Chica e Lindalva
- ✅ Acervo além do calendário: santos, beatos, veneráveis e servos de Deus do Brasil, jovens (Carlo Acutis, Frassati), Nossa Senhora (títulos e aparições), dos nossos tempos, devoção popular e veneráveis do mundo, com selo e "Conhecer" por grupo
- ✅ 69 imagens em domínio público (Art Institute of Chicago), com crédito na tela
- ✅ Busca de santos, "Meus santos" e "Seu santo" (pelo nome e pelo dia do nascimento)
- ✅ Tela Calendário: mês, cor, festas, missa obrigatória, jejum e penitência; aviso na tela Hoje
- ✅ Calendário da Arquidiocese de Natal (Mártires de Cunhaú e Uruaçu, Dedicação da Catedral, Nossa Senhora da Apresentação), escolhido em Mais
- ⬜ 👤 Revisar as histórias (`docs/santos/a-revisar.md`) e o calendário de Natal com o Diretório Litúrgico da arquidiocese
- ⬜ Outras dioceses, aos poucos

### Leva 8. Reflexões 🔨
- ✅ Reflexão de cada Evangelho que o app mostra de 2025 a 2036 (454 passagens: domingos A, B e C, dias de semana, festas e santos), com uma pergunta para a oração
- ✅ Na Liturgia do dia e em resumo na tela Hoje
- ✅ Teste: nenhum Evangelho sem reflexão nesses 12 anos
- ⬜ 👤 Revisão das reflexões, a começar pelos domingos (`docs/reflexoes/a-revisar.md`)

### Leva 9. Confissão e vida espiritual 🔨
- ✅ Exame de consciência por estado de vida (criança, jovem, adulto, casado), 119 perguntas com o nº do Catecismo
- ✅ Cofre com PIN: exame, propósitos e diário embaralhados no aparelho; "Fui me confessar" apaga os pecados e guarda os propósitos e a data
- ✅ Guia da confissão e guia da missa (com a postura em cada parte)
- ✅ Falecidos com 7º dia, 30º dia e aniversário na tela Hoje; aniversário de batismo
- ✅ Diário espiritual e propósitos
- ⬜ 👤 Revisar o exame e os guias (`docs/confissao/a-revisar.md`)
- ⬜ Sincronizar com a conta (Leva 10)

### Leva 10. Conta e sincronização 🔨
- ✅ Banco com regras de acesso, testadas num Postgres em memória; a integração do GitHub aplicou a migração sozinha
- ✅ Tela Conta: criar conta e entrar com e-mail e senha, ou com Google; sair; apagar a conta
- ✅ Sincronização entre aparelhos: novenas, dias de oração, falecidos, santos de devoção, leitura da Bíblia, terços, preferências e o cofre (exame, propósitos e diário embaralhados com o PIN)
- ✅ Política de privacidade e termos de uso
- ✅ Contagem anônima de uso (quantas aberturas por dia, sem identificar ninguém)
- ✅ Supabase e Google configurados: conta com e-mail e senha sem depender de e-mail; Google ligado e publicado (sem logotipo, para não exigir verificação)
- ⬜ "Esqueci a senha" e confirmação de e-mail: quando houver domínio e envio de e-mail próprio (SMTP)
- ⬜ Entrar com Apple: obrigatório na App Store quando há login do Google (Leva 16)
- ⬜ 👤 Contato do responsável na política de privacidade (`src/conta/textos.ts`, `CONTATO`)

### Leva 11. Missas e paróquias 🔨
- ✅ Perfil da paróquia: endereço, como chegar, secretaria, WhatsApp, Instagram, site, avisos
- ✅ Horários de missa, confissão e adoração, com semanas do mês e datas especiais
- ✅ Busca perto de mim (agora, hoje, domingo), por nome, bairro e cidade
- ✅ Sugerir correção, horário ou paróquia nova (com conta); selo "confirmado há N dias"
- ✅ Painel: fila de sugestões, cadastro e edição, paróquia verificada (a secretaria edita a própria página)
- ✅ Minha paróquia na tela Hoje
- ✅ 👤 Administrador criado pelo SQL Editor
- ✅ 58 igrejas de Natal e região da planilha do Missas.com.br (decisão do
  dono), completadas por pesquisa (endereço, Instagram, telefone) com nota de
  fonte e confiança para cada uma; painel "Para conferir / Conferidas"
- ✅ Sant'Ana separada em duas (Capim Macio e Soledade II), conferidas pelo dono
- ✅ Tela Missas refeita: perto de mim com raio (2 a 50 km) ou por cidade,
  dia da semana e período, por horário ou por igreja, "em 20 min"
- ✅ Pronta para o Brasil inteiro: cidade só por busca (com recentes e
  vizinhas), horários, igrejas e painel em páginas, contados no banco
- ✅ Página da paróquia: dias iguais juntos, próxima missa, compartilhar no
  WhatsApp, contatos num cartão
- ⬜ 👤 Conferir as outras igrejas uma a uma no Painel (as notas dizem o que
  ficou em dúvida: Rainha da Paz repetida, N. S. de Lourdes, Imaculada,
  Comunidade Reviver, Áreas Pastorais)
- ✅ RN inteiro: 735 igrejas novas (matrizes, capelas, comunidades,
  santuários) em 165 das 167 cidades, dos sites das três dioceses (Natal,
  Mossoró e Caicó, com o Anuário 2026), cada uma com nota de fonte e
  confiança no Painel; 327 com ponto no mapa (as outras aparecem pela cidade)
- ⬜ 👤 Jundiá e Senador Georgino Avelino: nenhuma igreja achada na pesquisa
- ⬜ 👤 Conferir no Painel as de confiança "média" (muitas capelas de Assu e
  Mossoró vêm só do mapa) e os casos anotados (endereços divergentes,
  comunidades de Maxaranguape em Ceará-Mirim, capelas de Taipu e São José
  de Mipibu que a pesquisa não achou)
- ⬜ 👤 Decidir sobre o OpenStreetMap: as igrejas que vieram só do mapa
  mostram "© colaboradores do OpenStreetMap" (licença aberta ODbL, pede o
  crédito; quem copiar a lista inteira do app tem de manter a mesma licença)
- ⬜ Mapa (OpenFreeMap, só ao tocar em "Mapa"), se o dono quiser

### Leva 12. Terço da Juventude 🔨
- ✅ Cadastro por qualquer pessoa com conta (paróquia ou comunidade, dia,
  hora, semanas do mês, endereço, Instagram, WhatsApp), no máximo 5 por
  pessoa; nasce "aguardando revisão" e o admin aprova no Painel
- ✅ Busca junto com Missas (chip "Terço": perto de mim, cidade, dia, período)
- ✅ Roteiro do encontro: mistérios (os do dia, ou outros), quem conduz cada
  dezena, música entre as dezenas (título e link, nunca a letra), intenções, avisos
- ✅ Terço ao vivo: o responsável conduz e todos acompanham pelo celular,
  inclusive de longe (testado com duas telas no banco de verdade)
- ✅ Seguir um terço (guardado e sincronizado com a conta); compartilhar no WhatsApp
- ✅ Regras de acesso testadas (quem cadastra, aprova, monta e conduz)
- ⬜ Foto do grupo (precisa de armazenamento de imagens)
- ⬜ Mais de um responsável por terço (hoje só quem cadastrou e o admin)
- ⬜ Lembrete do encontro da semana para quem segue (com as notificações, Leva 15 e 16)
- ⬜ 👤 Revisar e aprovar os primeiros terços cadastrados no Painel

### Leva 13. Comunidade ⬜
- ⬜ Intenções guiadas com "rezei por você"
- ⬜ Grupos por convite (família, grupo de oração, pastoral)
- ⬜ Campanhas coletivas
- ⬜ Denúncia e moderação

### Leva 14. Música ⬜
- ⬜ 👤 Montar as playlists por tempo e tema com o dono
- ⬜ Tela Músicas e repertório sugerido da missa de domingo

### Leva 15. Acabamento 🔨
- ✅ Listas agrupadas no app inteiro (um cartão por seção), Mais reorganizado
  (sem itens "em preparação"; Ajudar e Sobre), janelas de tela cheia ao lado
  da barra lateral no computador
- ⬜ Tela Hoje mais curta, com a próxima missa da sua paróquia no topo
- ⬜ Rezar com o que está em andamento em cima
- ⬜ Boas-vindas em 3 passos
- ⬜ Lembretes (evangelho, Ângelus, terço, novena, falecidos)
- ⬜ Compartilhar liturgia no WhatsApp e versículo como imagem
- ⬜ Páginas abertas ao Google (cada dia, capítulo, santo, paróquia)
- ⬜ Revisão de acessibilidade e de desempenho em celular simples

### Leva 16. Celular ⬜
- ⬜ Builds Android e iOS, ícones e tela de abertura
- ⬜ Notificações locais, vibração no terço, widget do evangelho
- ⬜ 👤 Teste em aparelho (Android Studio; iPhone precisa de Mac)

### Leva 17. Lançamento ⬜
- ✅ 👤 Vercel ligado ao GitHub (cada push publica) e Supabase aplicando as migrações sozinho
- ⬜ 👤 Domínio `appsantinho.com.br`, INPI, nome definitivo do app
- ⬜ 👤 Conta Google Play e 12 testadores por 14 dias
- ⬜ Lançamento em Natal e mensagens de divulgação

## Depois, com apoio
Página "Apoie" (PIX e transparência) · App Store · áudio com IA (evangelho,
reflexão, terço guiado, Bíblia narrada) · terço com voz · licenças (CNBB,
editoras) · associação sem fins lucrativos · plano para paróquias · outras
dioceses.
