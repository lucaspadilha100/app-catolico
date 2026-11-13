# Diocese de Novo Hamburgo (RS): fontes da pesquisa de 13/11/2026

Sé em Novo Hamburgo; Vale do Sinos, Paranhana e Serra Gaúcha (Gramado,
Canela, Nova Petrópolis). Bispo: Dom João Francisco Salm. Cúria: Rua Bela
Vista, 151, Primavera, Novo Hamburgo, (51) 3593-1755. Padroeiro diocesano:
São Luiz Gonzaga (21 de junho). Criada em 1980.

## Resumo

- **51 unidades** em `saida/novo-hamburgo.json`: 1 catedral (São Luiz
  Gonzaga), 48 paróquias e 2 santuários com clero próprio (Santuário Maria
  Imaculada Mãe Evangelizadora, o "Santuário das Mães", em Novo Hamburgo; e
  Santuário Sagrado Coração de Jesus, o "Santuário do Padre Reus", em São
  Leopoldo). Seis áreas pastorais: Novo Hamburgo (13 paróquias), São
  Leopoldo (10), Sapiranga (9), Taquara (7), Dois Irmãos (5) e Serra (5).
- **40 com horário de missa**: 31 com confiança alta (página da paróquia
  no site da diocese atualizada em 2026) e 9 média (página de 2024, entre
  elas a do Santuário das Mães). Confissão publicada só em Santa Terezinha
  de Campo Bom e no Sagrado Coração de Jesus de Estância Velha; adoração
  nesta e na Sagrada Família de Três Coroas.
- **11 sem horário** (`SEM-HORARIO-novo-hamburgo.txt`): Imaculada Conceição
  (Igrejinha e Morro Reuter), N. S. da Piedade (Novo Hamburgo), N. S.
  Medianeira, Santo Inácio, São João Batista e São Jorge (São Leopoldo),
  Santa Cristina e São João Batista (Parobé), Santa Joana Francisca de
  Chantal (Picada Café) e o Santuário do Padre Reus. As páginas delas no
  site da diocese têm endereço e telefone, mas não o campo de missas.
- 259 comunidades, capelas e o santuário de Canela entraram com nome, bairro ou linha e endereço
  como a diocese publica, a maior parte com horário. Horário que não cabe no
  formato ficou no `nao_cabe` (missa "a cada 15 dias", "domingos revezando
  entre 8h e 9h30", "último domingo do mês", missa sem dia indicado).
- O Santuário Nossa Senhora de Caravaggio de Canela é a capela do Saiqui
  (diz a diocese): entrou como igreja de tipo `santuario` dentro da
  Paróquia N. S. de Lourdes de Canela, com a missa de domingo às 9h30.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da API do site da diocese (WordPress, tipo `paroquias`, 49
itens) e da página "Áreas Pastorais", que dá as 49 paróquias por área
(13 + 10 + 9 + 5 + 7 + 5) com o bairro de cada uma. Os santuários vêm do
tipo `santuarios` (3 itens).

Conferência contra o GCatholic (atualizado em 09/11/2026, 51 igrejas: 48
paróquias e 3 santuários): bate em 47 paróquias. Divergências:

- O GCatholic põe uma "Nossa Senhora do Rosário" em São Leopoldo e não tem
  a de Novo Hamburgo; a diocese tem a Paróquia N. S. do Rosário em Novo
  Hamburgo (Canudos) e, em São Leopoldo, só a Comunidade N. S. do Rosário
  da Paróquia N. S. da Conceição. Seguimos a diocese.
- O GCatholic não tem a Paróquia N. S. Medianeira (Vicentina, São
  Leopoldo), que está na lista da diocese.

A página da Paróquia N. S. Aparecida de São Leopoldo diz "Área Pastoral
Novo Hamburgo"; a lista de áreas e a classificação do site a põem na Área
São Leopoldo, que foi a usada.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesenh.org.br/wp-json/wp/v2/paroquias?per_page=100 (lista e
  data de atualização de cada página de paróquia)
- https://diocesenh.org.br/areas-pastorais/ (áreas e bairros)
- https://diocesenh.org.br/lista-de-santuarios/ e
  https://diocesenh.org.br/wp-json/wp/v2/santuarios
- Uma página por paróquia em https://diocesenh.org.br/paroquias/<slug>/,
  com pároco, comunidades (nome, endereço, missas), missas da matriz,
  horário da secretaria, endereço, telefone, WhatsApp, redes e e-mail
  (protegido pelo Cloudflare e decodificado). As URLs e a data de
  atualização de cada página estão em `fontes`.
- https://diocesenh.org.br/capelinha-historica-de-estancia-velha-se-torna-santuario-paroquial-de-schoenstatt/
  (nome completo da paróquia de Estância Velha e o novo santuário paroquial,
  sem horário)

WhatsApp e Instagram vieram dos links da própria página (wa.me e
instagram.com). Instagram que é página de "local" (explore/locations) ficou
vazio. Alguns números de WhatsApp publicados têm 10 dígitos (sem o 9):
foram mantidos como estão (N. S. Aparecida de Novo Hamburgo, Santa Terezinha
de Campo Bom, São José de Primavera, Santa Teresinha de Taquara).

## Casos anotados

- Paróquia São José aparece duas vezes em Novo Hamburgo: Lomba Grande e
  Primavera. São paróquias distintas (a lista de áreas tem as duas).
- Sagrado Coração de Jesus de Sapiranga: a página traz só as missas das
  comunidades, não as da matriz.
- Sagrada Família de Três Coroas: a página não traz missa de sábado nem de
  domingo na matriz, só durante a semana.
- N. S. de Fátima (Guarani, Novo Hamburgo): as três capelas vêm em texto
  dentro do campo de missas; entraram como capelas, uma delas em Estância
  Velha.
- São Pedro Apóstolo de Ivoti: comunidades também em Presidente Lucena e
  Lindolfo Collor, sem horário; uma comunidade repetida na página entrou
  uma vez só.
- Paróquias rurais com comunidades listadas "sem horário definido" ou sem
  horário: N. S. Auxiliadora (Santa Maria do Herval), N. S. do Rosário
  (Riozinho, 15 comunidades), São Lourenço Mártir (Linha Imperial).

## O que falta para o próximo estado desta pesquisa

- Horário das 11 unidades sem horário: secretaria ou redes da paróquia
  (perfis anotados no SEM-HORARIO e na observação).
- Horário de confissão na maioria das paróquias.
- Missas da matriz do Sagrado Coração de Jesus de Sapiranga e do fim de
  semana na matriz de Três Coroas.
- O Santuário Paroquial de Schoenstatt (Estância Velha), inaugurado em
  8/9/2026, ainda sem horário publicado.
