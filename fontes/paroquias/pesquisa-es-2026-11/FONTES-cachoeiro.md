# Diocese de Cachoeiro de Itapemirim (ES): fontes da pesquisa de 13/11/2026

Sé em Cachoeiro de Itapemirim; sul do Espírito Santo. Bispo: Dom Luiz
Fernando Lisboa, CP. Cúria: Rua Costa Pereira, 41, Centro, Cachoeiro de
Itapemirim. Site: diocesecachoeiro.org.br.

## Resumo

- **44 unidades pastorais** em `saida/cachoeiro.json`: 1 catedral (São Pedro
  Apóstolo) e 43 paróquias, em 8 setores que a diocese chama de "Áreas
  Pastorais" (Cachoeiro, das Rochas, Litorânea, Serrana, Vales do Café, ABC,
  Vale do Caparaó e Montanhas do Caparaó). Esses setores são agrupamentos
  regionais, como foranias, e não unidades: não entraram no JSON.
- **43 com algum horário** (confiança alta), tudo do site da diocese, lido em
  13/11/2026: 35 com missa e 41 com confissão, 226 linhas de horário no total
  (cada página de paróquia traz o campo "Confissões" e, quase sempre, o
  quadro "Horários de missas"). 7 paróquias têm confissão mas não missa
  publicada (Santíssimo Sacramento, Sagrados Corações, Guadalupe em Vargem
  Alta, Santo André em Aracuí, Santo Antônio em Atílio Vivacqua, N. S. das
  Dores em Dores do Rio Preto, N. S. de Lourdes em Celina); em Iconha a
  missa veio como "07h às 19h" e ficou em `nao_cabe`.
- **1 sem horário nenhum** (confiança baixa): Sagrada Família, em Vargem
  Grande de Soturno, cuja página não traz horários nem confissões.
- Todo `id_banco` é null: o banco ainda não tem nada do Espírito Santo.
- Todas as cidades são do ES: nenhuma unidade precisou do campo `uf`.

## Lista das unidades

A lista veio da API WordPress do site da diocese
(`/wp-json/wp/v2/paroquias`, 52 itens = 44 paróquias + 8 páginas de Área
Pastoral), conferida página a página. A própria diocese diz que a Paróquia
Santa Bárbara (Ibitirama, criada em 04/12/2025) é a 44ª paróquia, o que bate
com a contagem.

Conferência contra o anuário (GCatholic,
https://gcatholic.org/churches/local/cach1-n, atualizado em 09/11/2026, 42
igrejas): faltam lá a Paróquia N. S. da Imaculada Conceição de Conceição do
Muqui (Mimoso do Sul) e a Paróquia Santa Bárbara (Ibitirama). 42 + 2 = 44.

O anuário dá o nome da IGREJA paroquial, que em 8 paróquias difere do nome da
paróquia; o JSON usa o nome do anuário para a matriz e anota na observação:
Cristo Redentor (Santíssimo Sacramento), Santa Rita de Cássia (Sagrados
Corações), São Sebastião (São Filipe; Sagrada Família de Soturno; N. S.
Auxiliadora de Jerônimo Monteiro), Imaculada Conceição (Guadalupe, Vargem
Alta), Sagrada Família (Sagrado Coração de Jesus, Itaipava), São João Batista
(Luz dos Povos, Irupi). Em dois casos o próprio site da diocese confirma:
Senhora Sant'Ana em Pequiá (o endereço é "Praça da Matriz Senhora Sant'Ana")
e N. S. da Penha na Praia Central de Marataízes (o quadro de missas da
paróquia Santíssima Trindade diz "Nossa Senhora da Penha (Praia Central)").

## Páginas do site da diocese (lidas em 13/11/2026)

Cada paróquia tem página própria em
`https://diocesecachoeiro.org.br/paroquias/<slug>/` com Setor, Telefone,
E-mail, Funcionamento na Secretaria, Confissões, Pároco, Endereço, Instagram
e o quadro "Horários de missas" (campos ACF: tipo, dia da semana, horário,
observações). As 44 páginas foram baixadas e lidas; os slugs estão nas
`fontes` de cada unidade do JSON.

- https://diocesecachoeiro.org.br/ (contatos, menu)
- https://diocesecachoeiro.org.br/wp-json/wp/v2/paroquias?per_page=100 (a lista)
- https://diocesecachoeiro.org.br/horarios-de-missa/ (página geral: Catedral,
  N. S. da Consolação e Nosso Senhor dos Passos)

Decisões tomadas sobre os dados do site:

- A página da Catedral não preenche o quadro de missas: as missas dela vieram
  da página geral "Horários de Missas". Para Nosso Senhor dos Passos as duas
  páginas divergem (a geral diz domingo "7h, 9h e 9h", com erro evidente, e
  quinta às 7h); valeu a página da própria paróquia (quinta 7h30; domingo 7h,
  9h e 19h). A "Celebração da Palavra" de segunda, terça, quarta e sexta às 7h
  ficou em `nao_cabe` por não ser missa.
- Em Guaçuí o campo de horário vem com um nome colado ("19hLorival Dutra
  Miranda", erro de digitação do site); valeram as horas 7h, 9h e 19h.
- Quando a página traz dois números, o fixo ficou em `telefone` e o celular em
  `whatsapp` (o site não diz expressamente que é WhatsApp). São Paulo Apóstolo
  (Pequiá) lista um terceiro número, que ficou de fora.
- N. S. do Rosário (Ibatiba): telefone, e-mail e endereço da página repetem os
  da paróquia de Iúna (erro do site) e ficaram de fora; valeram o Instagram e
  os horários.
- N. S. das Neves (Presidente Kennedy): o e-mail publicado parece caixa
  pessoal (nome de pessoa em provedor gratuito) e ficou de fora.
- Confissão com hora de início e fim virou linha com a hora de início e
  "Até Xh" na observação (duas faixas, duas linhas). "Por agendamento" sem
  hora foi para `nao_cabe` (São Filipe, N. S. do Rosário).

## Instagram

Todos os usuários de Instagram vieram do link na própria página da paróquia
no site da diocese (nenhum perfil foi aberto por dentro). O da diocese é
diocesecachoeiro.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/cach1-n (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dcadi.html (cúria, site oficial)

## O que falta para o próximo estado desta pesquisa

- Horário de missa de 9 unidades (as 8 só com confissão e a Sagrada Família
  de Soturno) e o horário por extenso da missa de Iconha.
- O site publica, em regra, só a missa da matriz: as centenas de comunidades
  e capelas (cada paróquia diz quantas CEBs tem, de 7 a 50, mas não as
  nomeia) ficaram fora, como manda a regra.
- Horários de adoração: o site da diocese não os publica.
- O Santuário Água Santa (Santa Luzia), em Iúna, citado na página da paróquia
  N. S. Mãe dos Homens, não é unidade pastoral e ficou na observação.
