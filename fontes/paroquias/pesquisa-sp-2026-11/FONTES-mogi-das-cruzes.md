# Diocese de Mogi das Cruzes (SP): fontes da pesquisa de 13/11/2026

Sé em Mogi das Cruzes; alto Tietê, Grande São Paulo. Bispo: Dom Pedro Luiz
Stringhini. Cúria: Avenida Braz de Pina, 560, Vila Vitória, Mogi das Cruzes,
(11) 4724-9734, curiadiocesanamogi@uol.com.br. Facebook: DiocesedeMogidasCruzes.

## Resumo

- **105 unidades pastorais** em `saida/mogi-das-cruzes.json`: 1 catedral,
  94 paróquias, 1 quase-paróquia, 6 áreas pastorais e 3 santuários, em 9
  regiões pastorais (Catedral, Brás Cubas, César de Souza,
  Biritiba-Mirim/Salesópolis, Suzano, Poá, Ferraz de Vasconcelos,
  Itaquaquecetuba e Santa Isabel/Arujá/Guararema). Por cidade: Mogi das
  Cruzes 42, Itaquaquecetuba 17, Suzano 14, Ferraz de Vasconcelos 9, Poá 6,
  Arujá 5, Biritiba Mirim 4, Santa Isabel 3, Guararema 3, Salesópolis 2.
- **103 com horário de missa** (confiança alta), todas com fonte na página
  da própria paróquia dentro do site da diocese, lidas em 13/11/2026.
- **2 sem horário** (confiança baixa): Área Pastoral São Charles Foucauld
  (Suzano) e Área Pastoral Santa Cecília (Ferraz de Vasconcelos). As páginas
  delas no site da diocese existem, mas os blocos de horários estão vazios.
- O site publica só MISSAS; confissão e adoração não têm bloco próprio
  (quando a adoração acompanha uma missa, ficou na observação ou no
  `nao_cabe` da missa).
- 473 igrejas no total (matrizes, capelas e comunidades, que o site lista com
  nome e endereço); 653 horários estruturados; missas votivas de dia fixo do
  mês ("todo dia 22") e casos condicionais foram para `nao_cabe`, sem nada
  inventado.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.
- Nenhuma unidade fora de SP, então nenhum item leva o campo `uf`.

## Lista das unidades

A lista vem da página de paróquias do site da diocese, que as organiza em 9
regiões pastorais (paroquias.php e paroquias_busca.php?id=1 a 9). Cada unidade
tem página própria (paroquias_pagina.php?id=N) com endereço da matriz,
telefone (e se atende WhatsApp), e-mail, site, horários de atendimento e de
missas, e a lista de capelas e comunidades com endereço.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 99
igrejas + 1 maronita): todas as paróquias do anuário estão na lista da
diocese. O anuário não traz as unidades mais novas (as 6 áreas pastorais, a
Quase-Paróquia Nossa Senhora da Paz de Arujá e a paróquia pessoal dos
japoneses), e o site da diocese não lista o Mosteiro da Transfiguração, que
o anuário cita (mosteiro, não unidade pastoral).

Casos especiais, anotados na observação de cada item:

- A matriz de 4 paróquias é santuário diocesano: Sagrado Coração de Jesus
  (Mogi), São Benedito (a matriz é o Santuário Senhor Bom Jesus, Mogi),
  São José (Salesópolis) e Nossa Senhora d'Ajuda (Itaquaquecetuba).
- 3 santuários são unidades próprias: Maria, Mãe do Divino Amor;
  Diocesano Cristo Amor Misericordioso; Nossa Senhora Desatadora dos Nós.
- Paróquia Pessoal para os Japoneses São Maximiliano Kolbe: usa a igreja da
  Paróquia São Maximiliano Kolbe (Vila Lavínia, Mogi) e tem comunidades em
  Biritiba Mirim, Santa Isabel e Suzano.
- Paróquia São Charbel e São Frei Galvão (Jundiapeba, Mogi): rito maronita,
  da Eparquia Nossa Senhora do Líbano; entra porque a diocese a lista.
- Três paróquias Santa Cruz em Mogi das Cruzes: Ponte Grande, Capela do
  Ribeirão (Taiaçupeba) e Biritiba Ussu; os bairros as distinguem.
- A Paróquia Santa Isabel (Santa Isabel) publica também os horários da
  Igreja Nossa Senhora do Rosário, que entrou como segunda igreja.

## Páginas do site da diocese (lidas em 13/11/2026)

O site às vezes derruba a conexão no primeiro pedido; repetir resolve.

- https://diocesedemogi.org.br/ (contatos da cúria, menu)
- https://diocesedemogi.org.br/paroquias.php (o mapa das 9 regiões)
- https://diocesedemogi.org.br/paroquias_busca.php?id=1 a 9 (a lista oficial,
  por região pastoral)
- https://diocesedemogi.org.br/paroquias_pagina.php?id=N (a página de cada
  unidade; o id de cada uma está em `fontes` no JSON). Ids usados: 6-33,
  35-38, 40-53, 55-104 (com buracos), 105, 106, 109-115.

## Instagram

A busca não mostrou o perfil de nenhuma paróquia (perfis do Instagram não se
leem por dentro, e o trecho da busca não trouxe usuário). O site da diocese
publica Facebook, não Instagram, e o formato do JSON não tem campo de
Facebook, então os contatos ficaram com telefone, WhatsApp, e-mail e site.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/mogi0 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dmodc.html (endereço da cúria)
- https://en.wikipedia.org/wiki/Diocese_of_Mogi_das_Cruzes (criação em 1962)

## O que falta para o próximo estado desta pesquisa

- Horário das 2 áreas pastorais sem fonte (São Charles Foucauld e Santa
  Cecília) e das capelas e comunidades, que o site lista quase sempre só com
  nome e endereço (3 capelas têm horário publicado).
- Perfis de Instagram das paróquias.
- O site não diz a data de atualização de cada página; os horários valem
  como publicados em 13/11/2026.
