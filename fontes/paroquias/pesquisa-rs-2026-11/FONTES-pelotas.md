# Arquidiocese de Pelotas (RS): fontes da pesquisa de 13/11/2026

Sé metropolitana em Pelotas; sufragâneas: Bagé e Rio Grande. Arcebispo: Dom
Jacinto Bergmann. Cúria (Mitra): Centro Arquidiocesano Dom Antônio Zattera,
Av. Domingos de Almeida, 3150, Areal, Pelotas, (53) 3225.8055,
secretariado@arquidiocesedepelotas.org.br. Padroeiro: São Francisco de Paula.

## Resumo

- **28 unidades** em `saida/pelotas.json`: 1 catedral, 25 paróquias e 2
  santuários (Adoração Perpétua e Nossa Senhora de Guadalupe), nas três
  áreas pastorais do site: Pelotas (13 paróquias + 2 santuários; a cúria fala
  em comarcas Norte e Sul de Pelotas, sem dizer qual paróquia fica em qual),
  Canguçu (6) e Jaguarão (7).
- **16 com horário** (13 alta, 3 média): 11 das 12 paróquias da cidade de Pelotas
  que aparecem na página "Locais e Horários de Missas e Celebrações", os dois
  santuários, São Lourenço (São Lourenço do Sul), São João Batista (Reserva) e
  São José (Pedro Osório). Média: Operários de Cristo (só a missa de domingo
  da matriz), Santuário de Guadalupe (o site do santuário diverge) e São
  Lourenço (bloco de domingo lido pela posição na página).
- **12 sem horário** (confiança baixa): Senhor Ressuscitado (Pelotas), Santa
  Tecla (Capão do Leão), Medianeira (Turuçu), Sant'Ana (Colônia Maciel),
  Bonfim (Morro Redondo), Conceição (Canguçu), Conceição (Piratini), Rosário
  (Cerrito), Divino Espírito Santo e Imaculada Conceição (Jaguarão), São João
  Batista (Herval) e N. Sra. da Graça (Arroio Grande). Lista com perfis em
  `SEM-HORARIO-pelotas.txt`.
- Capelas e comunidades: todas as que as páginas de área pastoral listam com
  lugar (bairro, distrito ou endereço) entraram ligadas à sua paróquia; as
  sem lugar ficaram no `nao_cabe` da matriz ou na observação.
- Todo `id_banco` é null.

## Lista das unidades

Fonte da lista: as três páginas de área pastoral do site da arquidiocese, que
dão para cada paróquia data de fundação, igreja matriz, clero, endereço,
telefone, e-mail e a lista numerada de comunidades:

- https://www.arquidiocesedepelotas.org/pelotas
- https://www.arquidiocesedepelotas.org/cangucu
- https://www.arquidiocesedepelotas.org/jaguarao
- https://www.arquidiocesedepelotas.org/areas-pastorais (os nomes das áreas)
- https://www.arquidiocesedepelotas.org/curia (comarcas)

Conferência: GCatholic (https://gcatholic.org/churches/local/pelo0,
atualizado em 09/11/2026) lista 26 paróquias, 2 santuários e o seminário;
bate um a um. Única diferença: o GCatholic ainda chama de "Santo Cura d'Ars"
a paróquia que desde 24/05/2024 é Santíssima Trindade (a antiga matriz Santo
Cura d'Ars virou comunidade). A estatística do GCatholic (26 paróquias, 2
missões) também bate.

Matrizes com titular diferente do padroeiro, segundo a arquidiocese:
Operários de Cristo (Com. N. Sra. de Lourdes), Senhor Ressuscitado (Com.
Imaculada Conceição), Medianeira de Turuçu (Com. São José Operário), Rosário
de Cerrito (Com. Imaculado Coração de Maria), Santíssima Trindade (Comunidade
Eclesial da Trindade).

## Horários

- https://www.arquidiocesedepelotas.org/locais-e-horarios-missas : lista por
  dia da semana de todas as missas da cidade de Pelotas, mais blocos de São
  Lourenço do Sul (paróquias São Lourenço e Reserva) e Pedro Osório. Página
  sem data; o conteúdo é posterior a maio de 2024 (já traz a Paróquia
  Santíssima Trindade). O sitemap dá a mesma data (2026-06-08) para todas as
  páginas do site, por isso não foi usado como data.
  - O bloco "Domingo: 8h Com. São José, 9h30 Com. Matriz, 19h Navegantes,
    19h30 Santa Rita de Cássia" aparece no texto depois de Reserva, mas no
    código da página está na mesma linha da grade que o título "Paróquia São
    Lourenço" (coluna da direita), e as comunidades são da São Lourenço: foi
    atribuído a ela.
  - Na lista de sábado, a Com. N. Sra. Aparecida da Paróquia de Fátima
    aparece duas vezes (17h30 e 18h): ficou no `nao_cabe`, sem horário.
- https://www.arquidiocesedepelotas.org/confissoes : confissões da N. Sra. da
  Luz e da N. Sra. de Fátima (esta sem hora).
- https://www.arquidiocesedepelotas.org/santuario-de-adoracao : missas e
  confissões de terça a sábado; reitor desde 2026.
- https://www.arquidiocesedepelotas.org/santuario-nossa-senhora-de-guadalup :
  missas de terça a sábado 7h30, quinta 19h (saúde), domingo 10h e 15h. O
  site do santuário (https://www.santuarioguadalupepelotas.com.br/, rodapé de
  2022) traz só quinta 17h e domingo 15h; seguimos a arquidiocese, cujas duas
  páginas concordam.

## Não usadas para horário

- https://www.arquidiocesedepelotas.org/redes-sociais : grade de missas
  transmitidas na pandemia (cita "dezena pelo fim da pandemia"); usada só para
  os Facebook das paróquias sem horário.
- https://www.arquidiocesedepelotas.org/post/missas-de-finados-na-arquidiocese
  (27/10/2026): só as missas de 2 de novembro; confirma que as matrizes de
  Senhor Ressuscitado, Sant'Ana, Turuçu, Morro Redondo, Herval, Piratini,
  Cerrito e Divino Espírito Santo têm missa, mas não dá o horário comum.
- Capelanias (página de Pelotas): UCPel, Santa Casa (é também comunidade da
  Catedral e entrou nela), Hospital São Francisco de Paula e Carmelo Sagrado
  Coração de Jesus (Laranjal). A "Capela do Carmelo Coração Eucarístico de
  Jesus" tem missa todos os dias às 7h e a "Capela do Hospital São Francisco
  de Paula" às segundas, quartas e sextas às 10h, mas a arquidiocese não as
  liga a paróquia nenhuma: ficaram de fora, como pendência.

## Contatos: o que foi gravado como publicado

- Telefones e WhatsApp como estão na página, inclusive celulares com 8
  dígitos (Santa Teresinha, Sagrado Coração, Sant'Ana, Pedro Osório, Arroio
  Grande) e o (53) 8469-3248 da Imaculada Conceição de Jaguarão.
- N. Sra. de Fátima: o cabeçalho traz "(53) 9927.0955" e a linha da matriz
  "3227.0955"; gravado o fixo.
- E-mails com erro aparente mantidos: nsradagraca@arquiocesedepelotas.org.br
  (Arroio Grande). O do Santuário de Guadalupe na página da arquidiocese tem o
  domínio "arquidiocesdepelotas" e não foi gravado.
- Nenhum e-mail pessoal de padre entrou (a página de capelanias traz alguns).

## O que falta para o próximo estado

- Horários das 12 paróquias sem horário (todas fora da cidade de Pelotas,
  menos Senhor Ressuscitado) e das comunidades das paróquias da cidade que
  não aparecem na lista geral.
- Confissões: só Luz, Fátima (sem hora), Pedro Osório e os dois santuários.
- Comarca (Norte ou Sul) de cada paróquia da cidade de Pelotas.
- Ligar a capela do Carmelo e a do Hospital São Francisco de Paula a uma
  paróquia, se a arquidiocese indicar.
