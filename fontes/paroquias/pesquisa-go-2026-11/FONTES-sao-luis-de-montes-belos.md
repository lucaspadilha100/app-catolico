# Diocese de São Luís de Montes Belos (GO): fontes da pesquisa de 13/11/2026

Sé em São Luís de Montes Belos; oeste de Goiás (Iporá, Anicuns, Palmeiras de
Goiás, Aragarças). Bispo: Dom Lindomar Rocha Mota. Cúria: Rua Cidade de
Goiás, 500, Centro, São Luís de Montes Belos. A página de história fala em
37 municípios e 43 paróquias.

## Resumo

- **43 unidades** em `saida/sao-luis-de-montes-belos.json`: 1 catedral e 42
  paróquias, em cinco foranias: São Luís Gonzaga (10), São Paulo da Cruz (8),
  São Sebastião (10), Senhora Sant’Ana (7) e Nossa Senhora Aparecida (8).
- **1 com horário**: Santa Bárbara (Santa Bárbara de Goiás), sábado e
  domingo 19h, pelo trecho do Instagram da paróquia visto na busca
  (confiança média). As outras 42 entraram com `horarios: []` e confiança
  baixa: as páginas de paróquia do site da diocese (maio a outubro de 2026)
  trazem clero, endereço, telefone, e-mail, histórico e comunidades, mas
  nenhum horário.
- 224 capelas e comunidades com lugar na fonte entraram como igrejas
  (nomes e lugares copiados das listas "Com. Urbanas" e "Com. Rurais" de
  cada página; as sem lugar ficaram de fora).
- Todo `id_banco` é null.

## Lista das unidades

O site (https://www.diocesesaoluis.org.br/home/, WordPress) tem o tipo de
post `paroquia`, lido pela API (`/wp-json/wp/v2/paroquia`, 43 itens), e a
página "Paróquias" com a mesma lista. A forania de cada uma vem da classe
`forania-*` do post. Datas no campo `fontes` = data de modificação. O site
está infestado de posts de cassino (spam), mas as páginas de paróquia são
legítimas. O endereço antigo diocesesaoluis.org.br sem "www" redireciona.

Conferência com o GCatholic (09/11/2026; 41 paróquias nas estatísticas de
2022): a lista do GCatholic tem a catedral, Amorinópolis, Baliza e
Cachoeira de Goiás sem marca de paróquia (a diocese as tem como paróquias),
"São Paulo VI" em Iporá (a diocese tem a Paróquia São José, criada em 2018;
deve ser a mesma) e o Cristo Redentor de Paraúna como santuário (monumento,
fora da lista da diocese). Não tem N. S. Aparecida de Anicuns (elevada em
2024) nem Santa Bárbara.

**Santa Bárbara de Goiás** (pedido da coordenação): o site desta diocese a
lista como paróquia sua, na Forania Senhora Sant’Ana, com página própria
(https://www.diocesesaoluis.org.br/home/paroquia/paroquia-santa-barbara-santa-barbara-de-goias/,
20/05/2026): Pe. Eduardo Farias de Morais, Praça Sebastião Vaz, Qd. 61,
Lt. 21, Setor Central (dentro da igreja), (62) 99955-2327; "até dezembro de
2020 esteve sob os cuidados dos Missionários Redentoristas de Trindade". O
perfil @paroquia.santa.barbara se diz da Diocese de São Luís de Montes
Belos. Entrou no JSON. O GCatholic a põe na Arquidiocese de Goiânia,
"atendida" por esta diocese.

## Dados que não entraram

- E-mails com acento, como publicados (inválidos):
  pnsgpalminópolis@gmail.com (Palminópolis) e
  paróquia.sao.benedito_@hotmail.com (Acreúna).
- Comunidades repetidas ou duvidosas: "São Sebastião do Rio Claro" aparece
  em Ivolândia e em Moiporá (ficou só em Moiporá); "N. S. Aparecida
  (Baliza)" na lista de Amorinópolis (Baliza é outra paróquia);
  "Imaculada Conceição (Vila Itajubá)" na lista da Paróquia São José de
  Iporá, que é o endereço da Paróquia N. S. da Imaculada Conceição.
- A página da Paróquia São João Bosco (Israelândia) repete o histórico de
  administrações de N. S. Auxiliadora de Iporá (erro de cópia; não afeta os
  dados usados).
- Avelinópolis, Jaupaci e Moiporá têm e-mail de "quase-paróquia"; a
  diocese as chama paróquias.

## Pendências

- Horários de todas as paróquias, menos Santa Bárbara. A busca por
  Instagram rendeu pouco: só @paroquia.santa.barbara (com horário) e
  @paroquia.sao.sebastiao (Palmeiras de Goiás, sem horário no trecho).
- Contato da Paróquia N. S. Aparecida (Anicuns), endereço de Palestina de
  Goiás.
- Comunidades sem lugar (Montes Claros de Goiás tem 13, Imaculada Conceição
  de Iporá 6).
