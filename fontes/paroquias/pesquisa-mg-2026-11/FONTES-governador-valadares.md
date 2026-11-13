# Diocese de Governador Valadares (MG): fontes da pesquisa de 13/11/2026

Sé em Governador Valadares; Vale do Rio Doce. Bispo: Dom Antônio Carlos
Félix. Cúria: Avenida Brasil, 2770, Centro, Governador Valadares, (33)
3271-6056, contato@diocesevaladares.com.br. Padroeiro da catedral: Santo
Antônio.

## Resumo

- **54 unidades pastorais** em `saida/governador-valadares.json`: 1
  catedral e 53 paróquias (a Paróquia Santa Rita de Cássia de Governador
  Valadares tem a matriz como santuário). Cinco foranias: Nossa Senhora do
  Carmo (11), Senhora Sant'Ana (8), Sagrado Coração de Jesus (6), Sagrada
  Família (16, contando Santa Luzia de Mathias Lobato, que a lista põe também
  na Forania Santo Antônio) e Santo Antônio (13, com a catedral). Cidades:
  Governador Valadares (23 unidades) e mais 29 municípios.
- **53 com horário de missa**: 51 com confiança alta (página da paróquia no
  site da diocese, atualizada entre 2025 e 2026) e 2 com confiança média
  (São João XXIII, cujos horários vêm da página geral de 2024, e São José de
  São José da Safira, que publica duas missas por dia na semana).
- **1 sem horário estruturado**: Santa Dulce (Vila União Penha). A página
  dá os horários por comunidade, sem bairro, sem dizer qual é a matriz e sem
  o dia de uma das missas; tudo ficou no `nao_cabe`.
- Capelas e comunidades só com nome e lugar (bairro, córrego ou distrito):
  catedral (capela da Av. Minas Gerais), Santa Rita do Itueto, Imaculada
  Conceição, N. S. da Piedade de Açucena (18 comunidades), N. S. de Fátima
  de Vila Isa, N. S. de Lourdes (4 comunidades com endereço), Santa Bárbara
  (Vila Rainha), Santa Efigênia (5), Santa Luzia (Chonim de Baixo), Santa
  Rosa de Lima, Sant'Ana de Coroaci (Tronqueiras), São Geraldo do Baixio (7),
  São João XXIII (4) e São Sebastião de Periquito (6). Comunidades sem lugar
  ficaram no `nao_cabe` da matriz.
- WhatsApp: o número do ícone de WhatsApp da página de cada paróquia (sem o
  55). Instagram: o perfil do ícone da página; vazio quando a página só tem
  Facebook (o Facebook ficou na observação).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do tipo de conteúdo "paroquia" do site da diocese (API do
WordPress, 56 entradas: 54 paróquias, a página da Mitra e a de Alvarenga),
batida com a lista "Foranias e Setores da Diocese de Valadares 2026"
(atualizada em 28/05/2026), que tem as mesmas 54 paróquias.

- **Alvarenga ficou de fora**: o município passou para a Diocese de
  Caratinga em 2 de setembro de 2026 (decreto executado na Cúria de
  Caratinga; notícia em
  https://diocesecaratinga.org.br/noticia/dom-airton-executa-decreto-que-altera-os-limites-entre-as-dioceses-de-governador-valadares-e-caratinga/).
  A página da paróquia ainda está no site de Valadares; a pesquisa de
  Caratinga já a incluiu.
- **Santa Luzia (Mathias Lobato)** aparece em duas foranias da lista de
  2026 (Sagrada Família, Região 4, e Santo Antônio). Entrou uma vez.

Conferência contra o GCatholic (atualizado em 09/11/2026, "54 parishes"):

- Não estão no GCatholic: Santa Dulce (Vila União Penha) e São Cristóvão
  (distrito de Santo Antônio do Pontal), paróquias novas.
- O GCatholic tem Alvarenga (agora de Caratinga), o Seminário N. S.
  Auxiliadora, Senhor Bom Jesus de Fernandes Tourinho e N. S. Aparecida de
  Resplendor (estas duas sem marca de paróquia; não entraram).
- Títulos diferentes: Goiabeira é "Ressurreição" no GCatholic e Santa Helena
  na diocese; Mathias Lobato é "São José" no GCatholic e Santa Luzia na
  diocese. Seguimos a diocese.
- O GCatholic marca N. S. de Fátima de Resplendor como santuário; a diocese
  não. Entrou como paróquia comum.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesevaladares.com.br/paroquia/<slug>/ (uma por paróquia, com
  setor, telefone, e-mail, redes, endereço, horários e comunidades; as URLs
  e a data de atualização de cada uma estão no campo `fontes`).
- https://diocesevaladares.com.br/wp-json/wp/v2/paroquia (a lista, com a
  data de atualização de cada página).
- https://diocesevaladares.com.br/horarios-de-missa/ (quadro geral por setor,
  atualizado em 14/06/2024): usado só onde a página da paróquia está sem
  horários (São João XXIII). Onde os dois discordam, valeu a página da
  paróquia, mais nova (ex.: N. S. de Lourdes, Santa Rita de Cássia, Sant'Ana
  de Coroaci, catedral).
- https://diocesevaladares.com.br/foranias (link para a lista de foranias de
  2026 em PDF; também há um mapa das foranias em PDF).

## Decisões

- O campo "Setor" das páginas de paróquia está desatualizado (muitas dizem
  "I - Nossa Senhora do Carmo" por padrão); a forania e a região pastoral
  das observações vêm da lista de 2026.
- "1ª sexta: adoração ao Santíssimo seguida de missa ou celebração" (N. S. de
  Lourdes e comunidades) entrou como `adoracao`.
- A página de Conselheiro Pena traz, por engano, o quadro de comunidades da
  Paróquia São João XXIII (Vila dos Montes, Cidade Jardim, Conquista,
  Córrego Esgotão): esse quadro foi para São João XXIII.
- Missa "durante a semana" sem dias (Cuparaque), "última sexta/quinta",
  "todo dia 8/18/25/28" e missas em capela sem nome foram para `nao_cabe`.

## Pendências

- Santa Dulce: qual igreja é a matriz e o dia da missa das 9h e 19h30 na
  Comunidade N. S. Aparecida.
- Bairro das comunidades sem lugar (Guadalupe, Santa Rita de Cássia GV,
  Sant'Ana de Altinópolis, Santa Teresinha, Cristo Redentor, Santa Rita do
  Itueto).
- São José da Safira: conferir o quadro de duas missas diárias.
