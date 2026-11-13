# Diocese de Paracatu (MG): fontes da pesquisa de 13/11/2026

Sé em Paracatu; noroeste de Minas. Sufragânea de **Montes Claros**
(GCatholic), não de Uberaba. Bispo: Dom Jorge Alves Bezerra, SSS. Mitra:
Praça Caldeira Brant, 147, Centro, Paracatu, (38) 3671-3463 (telefone e
WhatsApp), contato@dioceseparacatu.org.br. Padroeira: Nossa Senhora do Carmo.

## Resumo

- **33 unidades** em `saida/paracatu.json`: 1 catedral (Santo Antônio de
  Pádua), 2 santuários-paróquia (N. S. da Lapa em Vazante, Santa Rita de
  Cássia em Guarda-Mor) e 30 paróquias. O Seminário Maior São João XXIII,
  que o site lista entre as paróquias, ficou fora.
- 6 regiões, cada uma com nome de apóstolo ou evangelista (o site não diz
  "forania"): São Pedro Apóstolo (Paracatu), São João Evangelista
  (Guarda-Mor e Vazante), São Lucas Evangelista (João Pinheiro), São Marcos
  Evangelista (Unaí, Cabeceira Grande, Uruana), São Mateus Evangelista
  (Bonfinópolis, Dom Bosco, Natalândia, Brasilândia) e São Paulo Apóstolo
  (Formoso, Buritis, Arinos).
- Cidades: Paracatu (7), João Pinheiro (6, incluindo as matrizes de
  Luizlândia do Oeste e Canabrava, que a diocese dá como "... - João
  Pinheiro"), Unaí (5), Cabeceira Grande (2, uma em Palmital de Minas),
  Vazante (2), Brasilândia de Minas (2), Buritis (2) e uma em cada:
  Guarda-Mor, Uruana de Minas, Bonfinópolis de Minas, Natalândia, Dom Bosco,
  Arinos, Formoso.
- **23 com horário** (22 alta, 1 média) e **10 sem** (baixa). Os horários
  vêm da página "Horários de Missas e Celebrações" da diocese, texto corrido
  por paróquia e dia da semana, lido a mão. 331 horários (328 missas, 3
  adorações) em 222 igrejas (33 matrizes e 189 capelas/comunidades).
- Sem horário (fora do quadro e sem horário na página da paróquia): Santa
  Rita de Cássia (Paracatu), Santuário Santa Rita (Guarda-Mor), São
  Cristóvão, São João Maria Vianney e N. S. Aparecida, Sagrada Família
  (Canabrava), N. S. de Fátima (Unaí, Água Branca), São José (Cabeceira
  Grande), São João Bosco (Dom Bosco), N. S. d'Abadia (Formoso) e Santa
  Luzia (Buritis). Lista em `SEM-HORARIO-paracatu.txt`.
- Todo `id_banco` é null.

## Lista das unidades

A lista é a de https://dioceseparacatu.org.br/paroquias/ (34 links: 33
unidades e o seminário), batida com as 34 páginas individuais.

Conferência com o GCatholic (09/11/2026: 32 paróquias no anuário de 2022,
28 igrejas listadas): não estão no GCatholic a Santa Rita de Cássia de
Paracatu (2019), a Senhor do Bonfim (Bonfinópolis de Minas), as duas de
Brasilândia de Minas (N. S. Aparecida e São José Operário, 2019), a N. S. de
Fátima de Natalândia e a N. S. de Fátima de Unaí. O GCatholic chama a
paróquia Sant'Ana e São Joaquim de João Pinheiro de "Sant'Ana dos Alegres".

## Páginas lidas (13/11/2026)

- https://dioceseparacatu.org.br/horarios-de-missas-e-celebracoes/
- https://dioceseparacatu.org.br/paroquias/
- Uma página por paróquia: `https://dioceseparacatu.org.br/paroquia/<slug>/`
  (pároco, festa do padroeiro, endereço da matriz, telefone, WhatsApp,
  e-mail, Instagram, data de criação). As URLs estão em `fontes`.

## Decisões de leitura

- Catedral: o quadro não traz missa na própria catedral; as missas do centro
  estão na Igreja do Rosário, em São Benedito e em outras igrejas da
  paróquia. A matriz ficou sem horário, as igrejas com os delas.
- Igrejas em rodízio ("São Luís ou São Sebastião", "Santa Luzia ou São
  Lourenço") ficaram sem horário estruturado, com o rodízio em `nao_cabe`.
- Paróquia São Sebastião (Palmital de Minas): o quadro da diocese dá
  domingo 9h e 19h, quinta 19h e outras; a página da própria paróquia dá
  domingo 9h, quarta 19h e 1º domingo 11h na N. S. Aparecida. Ficou o
  quadro, com confiança **média** e a divergência na observação.
- Arinos: o quadro lista cerca de 75 comunidades urbanas e rurais com missa
  mensal por semana do mês; entraram a matriz e a Comunidade São Sebastião
  (missa todo domingo), o resto ficou como nota em `nao_cabe`.
- O e-mail do Santuário Santa Rita (Guarda-Mor) vem truncado na página
  (".com.b") e ficou vazio.
- Uruana de Minas: "Cercado" e "N. S. Aparecida - Cercado" (sábados) viraram
  uma comunidade só.

## Instagram (anotado das páginas da diocese)

Perfis das próprias páginas de paróquia, sem abrir nenhum. Os das unidades
sem horário estão em `SEM-HORARIO-paracatu.txt`.

## O que falta para o próximo estado

- As 10 unidades sem horário.
- As comunidades de Arinos uma a uma.
- Confirmar o quadro de Palmital de Minas.
