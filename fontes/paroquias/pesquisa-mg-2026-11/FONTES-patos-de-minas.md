# Diocese de Patos de Minas (MG): fontes da pesquisa de 13/11/2026

Sé em Patos de Minas; sufragânea de Uberaba. Bispo: Dom Cláudio Nori Sturm,
OFMCap (GCatholic). Cúria: Rua Tiradentes, 388, Centro, Patos de Minas,
(34) 3821-3213 e 3821-3184. Padroeiro: Santo Antônio de Pádua.

## Resumo

- **48 unidades** em `saida/patos-de-minas.json`: 1 catedral (Santo Antônio
  de Pádua), 46 paróquias e 1 quase-paróquia (N. S. Aparecida, Coromandel).
- 6 foranias, como a diocese publica: Santo Antônio (Patos de Minas e Major
  Porto), São Francisco (Rio Paranaíba, Carmo do Paranaíba, Arapuá, Lagoa
  Formosa), Santa Rita (São Gonçalo do Abaeté, Varjão de Minas, Presidente
  Olegário, Lagoa Grande, Lagamar), São José (Guimarânia, Patrocínio, Serra
  do Salitre, Cruzeiro da Fortaleza, Perdizes), São Sebastião (Ibiá, Tiros,
  Matutina, São Gotardo, Guarda dos Ferreiros) e Nossa Senhora da Abadia
  (Coromandel, Abadia dos Dourados, Douradoquara, Monte Carmelo, Iraí de
  Minas).
- **33 com horário (confiança alta), 15 sem horário (baixa)**. Os horários
  vêm da página "Horários de Missas" da diocese, que traz um bloco por
  paróquia no formato "Todo Domingo às 07h00 - Missa / igreja". 311 missas
  lançadas; o JSON tem 48 matrizes e 94 capelas/comunidades. A fonte
  não traz confissão nem adoração.
- Sem horário: 12 paróquias aparecem no quadro com o bloco vazio (Rosário,
  Santa Terezinha, São João Batista e São Vicente de Paulo em Patos de
  Minas; Carmo em Carmo do Paranaíba; Santa Terezinha e São José em
  Patrocínio; Aparecida em São Gotardo; Santa Cruz e N. S. de Fátima em
  Douradoquara; Fátima e Carmo em Monte Carmelo; Rosário em Iraí de Minas)
  e 3 não aparecem no quadro (Cristo Redentor em Patos de Minas, N. S. do
  Rosário em São Gotardo, quase-paróquia N. S. Aparecida em Coromandel).
  Lista em `SEM-HORARIO-patos-de-minas.txt`, com o perfil que a página da
  paróquia cita.
- Todo `id_banco` é null.

## Lista das unidades

A lista é a de https://diocesedepatosdeminas.org.br/paroquias/ (48 links,
48 páginas de paróquia baixadas). Conferida com o GCatholic (09/11/2026, 46
paróquias no anuário de 2022): não estão no GCatholic a Paróquia Cristo
Redentor, a N. S. do Rosário de São Gotardo, a São Sebastião de Guimarânia e
a quase-paróquia de Coromandel. Entradas do GCatholic sem marca de paróquia
(Mãe Rainha, N. S. das Dores, São Sebastião, Santa Rita, Sagrada Família em
Patos de Minas; Menino Jesus de Praga em Monte Carmelo, marcado santuário;
São Francisco e Santa Clara em Carmo do Paranaíba) não são unidades na lista
da diocese.

Mudanças de nome que a diocese já registra:

- "Paróquia São Pedro e São Paulo" (Patos de Minas): a lista e a página a
  chamam de **Paróquia Divino Espírito Santo** (matriz no Ipanema); o quadro
  de horários ainda usa o nome antigo. Entrou com o nome novo.
- "Quase-Paróquia Santa Cruz" (Douradoquara): a página publica o decreto
  que a faz **Paróquia Santa Cruz e Nossa Senhora de Fátima**. Entrou como
  paróquia.
- Paróquia Padre Damião de Molokai (Patrocínio): título "Paróquia São
  Damião de Molokai", matriz N. S. de Fátima.

## Como os blocos de horário foram ligados às paróquias

O quadro tem nomes repetidos (três "Paróquia São Sebastião" na mesma
forania, por exemplo). O mapa do site (`missa-sitemap.xml`) tem um endereço
por missa com o nome e a cidade da paróquia (ex.:
`m-0-domingo-07-00-paroquia-sao-sebastiao--guimarania`), e a contagem de
missas por paróquia bate com os blocos: Guimarânia 11, Serra do Salitre 8,
São Gotardo 18, Lagoa Grande 12, Coromandel (Graças) 14. Esses endereços de
missa dão 404; serviram só para a ligação.

O mapa traz ainda 8 missas de uma "paroquia-nossa-senhora-do-rosario---sao-
sebastiao" que o quadro não mostra; ficaram de fora (nota na unidade do
Rosário de São Gotardo).

## Páginas lidas (13/11/2026)

- https://diocesedepatosdeminas.org.br/horarios-de-missas/
- https://diocesedepatosdeminas.org.br/paroquias/
- https://diocesedepatosdeminas.org.br/missa-sitemap.xml (só para a ligação)
- Uma página por paróquia: `https://diocesedepatosdeminas.org.br/paroquia/<slug>/`
  (endereço da matriz, telefone, WhatsApp, e-mail, festa do padroeiro,
  Instagram e Facebook). As URLs estão em `fontes`.

## Decisões de leitura

- A Paróquia São Pedro de Alcântara (Ibiá) publica como WhatsApp o número da
  cúria; ficou vazio.
- Em Perdizes, o Santuário N. S. da Cabeça é igreja da Paróquia N. S. da
  Conceição (entrou como igreja `santuario`); o Instagram da paróquia é o do
  santuário.
- Em Abadia dos Dourados, as missas "no Santuário N. S. da Abadia" são as da
  matriz (primeira igreja, tipo `santuario`).

## O que falta para o próximo estado

- Os 15 sem horário (ver SEM-HORARIO): buscar trecho de Instagram.
- Confissões e adoração: a diocese não publica.
