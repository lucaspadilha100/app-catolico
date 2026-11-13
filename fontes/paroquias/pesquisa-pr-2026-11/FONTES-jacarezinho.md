# Diocese de Jacarezinho (PR): fontes da pesquisa de 13/11/2026

Sé em Jacarezinho, norte pioneiro e Campos Gerais do Paraná; sufragânea de
Londrina. Bispo: Dom Antonio Braz Benevente. Cúria: Avenida Getúlio Vargas,
262, Centro, Jacarezinho, (43) 3525-0707. Padroeira: Imaculada Conceição
(copadroeiro São Sebastião). Centenário em 2026.

## Resumo

- **58 unidades** em `saida/jacarezinho.json`: 1 catedral (Imaculada
  Conceição), 56 paróquias e 1 área pastoral (Divino Espírito Santo, Lavrinha,
  Pinhalão), em 6 decanatos (Bandeirantes, Ibaiti, Jacarezinho, Jaguariaíva,
  Siqueira Campos, Santo Antônio da Platina).
- **53 com horário** (confiança alta), 5 sem horário (confiança baixa;
  `SEM-HORARIO-jacarezinho.txt`): São Francisco e Santa Teresinha
  (Jaguariaíva), Santuário do Divino Espírito Santo (Ribeirão do Pinhal) e
  Sant'Ana (Santana do Itararé), cujas páginas não existem mais no site; Bom
  Jesus (Ouro Verde, Sengés), cuja página não traz horário; e a área pastoral
  de Lavrinha.
- 448 capelas/comunidades com nome e lugar, das listas "Comunidades Urbanas"
  e "Comunidades Rurais" de cada página; as que têm missa fixa levam o
  horário. Nome "Capela de ..." quando a fonte diz capela, "Comunidade de ..."
  nos demais casos. As citadas sem lugar ficaram no `nao_cabe` da matriz.
- Santuários com paróquia (primeira igreja de tipo `santuario`): Santa
  Teresinha (Bandeirantes), Sagrado Coração de Jesus (Ibaiti), Senhor Bom
  Jesus da Pedra Fria (Jaguariaíva), Divino Espírito Santo (Ribeirão do
  Pinhal) e N. S. da Conceição Aparecida e Santo Inocêncio (Tomazina; o
  GCatholic a dá como basílica menor, o site da diocese não). Santuários que
  são outra igreja da paróquia entraram como igreja `santuario` dela:
  Igrejinha São João Batista (Arapoti), São Vicente Pallotti (Ribeirão Claro)
  e Senhor Bom Jesus da Cana Verde (Siqueira Campos), com os horários que a
  página da paróquia publica.
- Distritos: Campinho (Ibaiti), Ouro Verde (Sengés), Alemoa (Siqueira
  Campos), na `localidade`.
- Todo `id_banco` é null.

## Lista das unidades

Da página "Paróquias em Ordem de Cidades" do site
(https://diocesejacarezinho.org/paroquias/), 58 links, batida com:

- a lista por decanato da página "A Diocese"
  (https://diocesejacarezinho.org/diocese/a-diocese/), que diz "56 paróquias"
  e repete a Imaculada Conceição de Jacarezinho (1880 e 1926, a mesma
  catedral); não tem a São José de Wenceslau Braz (2018) nem a São José e São
  Pantaleão de Carlópolis (criada em 18/03/2025); estas duas ficaram com o
  decanato "não informado" na observação;
- o GCatholic (https://gcatholic.org/churches/local/jaca1, 09/11/2026, 56
  paróquias): bate, menos a São José e São Pantaleão (nova).
- O link "Santuário Diocesano Igrejinha São João Batista" da lista leva a
  página inexistente; o santuário é da Paróquia São João Batista de Arapoti
  (mesmo reitor e endereço na página de santuários) e entrou nela.
- A Área Pastoral Divino Espírito Santo (Lavrinha, Pinhalão) vem da página
  "Rádios, Comunidades, Museu e Capelanias"
  (https://diocesejacarezinho.org/radios-comunidades-museu-capelanias/), com
  capelão, telefone, e-mail e cinco comunidades. Pode ser uma das "3 missões"
  que o GCatholic conta.

## Fontes de horário e contato (lidas em 13/11/2026)

- Uma página por paróquia no site da diocese, com pároco, horários de missa,
  data de criação, endereço, telefone, e-mail e comunidades. URLs no campo
  `fontes`; exemplos:
  - https://diocesejacarezinho.org/paroquias/paroquia-imaculada-conceicao-jacarezinhopr/
  - https://diocesejacarezinho.org/paroquias/paroquia-sao-jose-e-sao-pantaleao-carlopolis-pr/
- https://diocesejacarezinho.org/santuarios/ (reitores, endereços e telefones
  dos 14 santuários; dali vêm o endereço de Ribeirão do Pinhal, do Santuário
  São Vicente Pallotti e do Santuário da Cana Verde).
- Notícias usadas só para nome: posse do pároco da Paróquia São Francisco e
  Santa Teresinha de Jaguariaíva (26/05/2026) e visita pastoral à Paróquia
  Sant'Ana e São Joaquim de Santana do Itararé (05/2024).
- A API do WordPress do site responde 403 (bloqueio de segurança); as páginas
  comuns abrem.

## Decisões

- Carlópolis: a página da Paróquia Senhor Bom Jesus ainda lista a Capela São
  Pantaleão e São José (Vista Alegre) e as comunidades Espírito Santo, Santo
  Expedito, Diogos, Ribeirão Bonito, Teolândia e Monte Azul, que a página da
  nova Paróquia São José e São Pantaleão dá como dela (só pelos nomes).
  Ficaram só na nova paróquia, com o lugar tirado da lista da Senhor Bom
  Jesus; as missas da Capela São Pantaleão listadas na página antiga (quarta
  19h, domingo 8h) foram descartadas, porque a nova página dá outros horários.
- Bandeirantes: as capelas São João Batista (Seis Anos), Santa Rita (Bairro
  Santa Rita) e Santa Catarina de Alexandria (Água da Onça) aparecem nas
  páginas do Santuário Santa Teresinha e da N. S. Aparecida; ficaram só no
  Santuário.
- Sapé (Tomazina/Quatiguá): a diocese lista a Capela São Sebastião do Sapé
  como capelania (Rua Quatiguá, 473, Tomazina); a página de Quatiguá a dá
  como comunidade dela, com missa no domingo às 9h. Ficou em Quatiguá.
- E-mails com acento (Arapoti N. S. Aparecida, Joaquim Távora) ou com espaço
  (Pedra Fria): o de Arapoti e o da Pedra Fria foram corrigidos (sem acento,
  sem espaço); o de Joaquim Távora ficou de fora. O de Ribeirão Claro
  (pe.germano.sac@...) parece pessoal de padre e ficou de fora.
- Telefone marcado "(whatsapp)" que é fixo foi para os dois campos.

## Pendências

- Capelania São Cristóvão (Marques dos Reis, Jacarezinho), sem paróquia
  indicada.
- Santuários sem paróquia indicada: Nossa Senhora de Guadalupe e Mãe e Rainha
  (Jacarezinho), São Miguel Arcanjo (Bandeirantes, BR 369), Santíssimo Nome de
  Jesus (Joaquim Távora), Nossa Senhora das Graças da Medalha Milagrosa
  (Ibaiti) e Nossa Senhora das Graças (Santo Antônio da Platina, mesmo
  endereço da matriz Santo Antônio de Pádua). Notícia de 2026 cita a
  instituição do Santuário Santa Rita de Cássia em Pinhalão.
- Horário e contato das 4 paróquias sem horário; confissões (nenhuma página
  publica).
- Comunidades de Conselheiro Mairinck (14 urbanas) e de Ouro Verde (12
  rurais) sem nome e lugar juntos: estão no `nao_cabe`.
