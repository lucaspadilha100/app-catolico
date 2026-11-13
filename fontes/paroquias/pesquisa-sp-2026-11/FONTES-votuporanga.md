# Diocese de Votuporanga (SP): fontes da pesquisa de 13/11/2026

Sé em Votuporanga; noroeste paulista, entre Jales e São José do Rio Preto.
Criada em 20/07/2016 com território desmembrado das dioceses de Jales e de
São José do Rio Preto (GCatholic; o site da diocese confirma a data e conta
a passagem de cada paróquia: Cardoso, por exemplo, era de Jales; Planalto,
Parisi, Lourdes e Zacarias eram de Rio Preto). Era sufragânea de Ribeirão
Preto e passou à nova Província de São José do Rio Preto em 22/05/2025.
Bispo: Dom Moacir Aparecido de Freitas (desde a criação). Cúria: Rua
Alagoas, 2830, Parque 8 de Agosto, Votuporanga, (17) 3421-7009 e
(17) 99789-5350 (anuário 2026).

## Resumo

- **33 unidades** em `saida/votuporanga.json`: 1 catedral, 31 paróquias e
  1 quase-paróquia, em 24 municípios (mais União Paulista, que é comunidade
  da paróquia de Planalto) e 4 foranias: São Mateus (7), São Marcos (8),
  São Lucas (6) e São João (12). Votuporanga tem 9 unidades; Tanabi, 2.
- **33 com horário de missa** (32 com confiança alta, 1 média): o site da
  diocese tem uma página por paróquia com horários, endereço, telefone e
  expediente; todas lidas em 13/11/2026 pela API do WordPress (categoria
  `paroquias`). A de confiança média é a Quase-Paróquia Santo Antônio
  (Votuporanga): a capela Santo Expedito, que passou a ela, só tem horário
  na página de Parisi, escrita antes da mudança.
- Nenhuma página publica horário de confissão; adoração com hora em São
  Cristóvão e São Benedito e Nossa Senhora de Fátima (Votuporanga) e em
  Nova Luzitânia.
- 120 igrejas no total. Capelas e comunidades com nome e lugar como a página
  dá; muitas páginas só citam capelas no meio do histórico, e entraram as que
  vêm com nome.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do **Anuário Diocesano 2026** , que
traz as quatro foranias com cada paróquia (post do site de 24/02/2026), batida com as 33 páginas de
paróquia do site (categoria `paroquias`).

Conferência contra o GCatholic (atualizado em 09/11/2026, 32 igrejas, "31
parishes"): bate, com duas diferenças.

- **São Francisco e Santa Clara** (Votuporanga): o GCatholic a lista sem
  marca de paróquia; o anuário 2026 e o título da página no site dizem
  Paróquia (o endereço da página ainda é "comunidade-..."). Entrou como
  paróquia.
- **Quase-Paróquia Santo Antônio** (Votuporanga, Parque das Nações): falta
  no GCatholic. Decreto de 13/08/2025, instalada em 23/08/2025 (notícias do
  site); a Capela Santo Expedito (Parque Colinas) passou a ela.
- **União Paulista**: o anuário lista a "Comunidade Nossa Senhora Aparecida"
  na Forania São Mateus; a notícia de 22/09/2024 diz que ela é vinculada à
  Paróquia Divino Espírito Santo de Planalto, e a página de Planalto diz que
  foi anexada a ela em 2016. Entrou como capela de Planalto. A página própria
  da comunidade no site está vazia.

Nenhuma cidade desta diocese aparece nos outros arquivos de `saida/`, nem a
fonte diz que alguma cidade já pesquisada é daqui.

## Divergências e escolhas

- **Parisi**: a página ainda lista as capelas Santo Expedito e Santo
  Antônio de Votuporanga (Região Pastoral Santo Expedito, criada junto com a
  paróquia de Parisi). Desde agosto de 2025 as duas são da Quase-Paróquia
  Santo Antônio; ficaram lá. Os horários da página da quase-paróquia (sábado
  18h30, domingo 10h) batem com os que Parisi dava para a Santo Antônio.
- **Magda**: o anuário escreve "Santa Teresinha do Menino Jesus" e o site,
  "Santa Terezinha"; seguimos o anuário.
- **Cosmorama**: as capelas aparecem pelo nome do lugar (Violin, Estação,
  Carrilho...); entraram como "Comunidade do Violin" etc. A de "Santa Rita"
  diz só "quarta-feira do mês" e ficou sem horário.
- **São Francisco e Santa Clara**: o e-mail publicado
  ("sãofranciscoesantaclaravotu@gmail.com") tem acento no usuário e ficou
  de fora; o Instagram saofranciscostaclaravotu vem da própria página.
- **Catedral**: a página liga para www.nossasenhoravotuporanga.com.br, que
  não resolve; ficou sem site.
- Distritos com a cidade do município e o distrito em `localidade`: Simonsen
  (Votuporanga), São João do Marinheiro e Vila Alves (Cardoso), Ida Iolanda
  (Nhandeara, atendida pela paróquia de Sebastianópolis do Sul).
- Missa "nos setores", "nas casas", "uma vez por mês" ou no "último domingo"
  foi para o `nao_cabe`.
- Telefone: quando a página dá dois números sem dizer qual é WhatsApp, entrou
  o fixo (em alguns casos o outro número foi para a observação).

## Páginas lidas (13/11/2026)

- https://diocesevotuporanga.org.br/wp-content/uploads/2026/02/Diocese-votuporanga-ANUARIO-2026.pdf
  (foranias, cúria, clero)
- https://diocesevotuporanga.org.br/wp-json/wp/v2/posts?categories=48&per_page=100
  (as páginas de paróquia; URLs no campo `fontes` de cada item)
- https://diocesevotuporanga.org.br/paroquias/
- https://diocesevotuporanga.org.br/capela-santo-antonio-de-votuporanga-sera-elevada-para-quase-paroquia/
  e https://diocesevotuporanga.org.br/comunidade-santo-antonio-e-elevada-a-quase-paroquia-em-votuporanga/
- https://diocesevotuporanga.org.br/comunidade-de-uniao-paulista-tem-novo-administrador/
- https://diocesevotuporanga.org.br/comunidade-nossa-senhora-aparecida-uniao-paulista/ (vazia)

O endereço https://diocesevotuporanga.org.br/anuario-diocesano-2025/ devolve
uma tela de verificação contra robôs; o PDF de 2026 foi achado pela busca da
API do site.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/votu0.htm e
  https://gcatholic.org/churches/local/votu0 (09/11/2026; criação em
  20/07/2016 a partir de Jales e Rio Preto)

## O que falta para o próximo estado desta pesquisa

- Confissões: nenhuma página dá hora.
- Instagram das paróquias: o site da diocese não os liga (só o da São
  Francisco e Santa Clara).
- Horários da comunidade de União Paulista e da Capela Santo Expedito na
  página da Quase-Paróquia Santo Antônio.
- E-mails: quase nenhuma página publica.
