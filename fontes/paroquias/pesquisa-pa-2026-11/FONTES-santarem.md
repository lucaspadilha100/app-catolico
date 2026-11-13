# Arquidiocese de Santarém (PA): fontes da pesquisa de 13/11/2026

Nome atual: **Arquidiocese de Santarém** (Arquidiocese Metropolitana). Era
prelazia desde 1903, diocese desde 1979 e virou arquidiocese em 06/11/2019,
com as sufragâneas Óbidos, Xingu-Altamira, Alto Xingu-Tucumã e Itaituba
(GCatholic e Catholic-Hierarchy). Arcebispo: Dom Irineu Roman, CSI.
Padroeira: Imaculada Conceição. Cúria: Rua Wilson Dias da Fonseca, 632,
Centro, Santarém, CEP 68005-060, (93) 98412-3579, curia.stm@gmail.com.
Municípios: Santarém, Belterra, Mojuí dos Campos, Aveiro, Almeirim, Monte
Alegre e Prainha.

## Resumo

- **48 unidades pastorais** em `saida/santarem.json`: 1 catedral, 34
  paróquias, 11 áreas pastorais e 2 áreas missionárias (São Rafael Arcanjo,
  em Belterra, e a Área Pastoral Missionária São João Paulo II, no Centro de
  Santarém), em 12 regiões pastorais (01 a 12, anotadas na `observacao`).
  Cidades das matrizes: Santarém (33, contando as vilas de Alter do Chão,
  Boim, Curuai, Arapixuna, Jacamim, Boa Esperança e o Rio Arapiuns), Monte
  Alegre (5), Prainha (3), Almeirim (2), Aveiro (2), Belterra (2) e Mojuí dos
  Campos (1).
- **40 com horário** (38 alta, 2 média); **8 sem horário** (confiança baixa),
  listadas em `SEM-HORARIO-santarem.txt`.
- Média: Santo Antônio de Pádua de Mojuí dos Campos (a página só traz terça e
  sábado, 19h30, nenhuma missa de domingo) e N. S. da Saúde de Alter do Chão
  (só a missa de domingo à noite na matriz; nas comunidades, "missa ou
  celebração da Palavra").
- Igrejas além da matriz: 57, quase todas com bairro e horário, nas páginas
  de Cristo Libertador, São Lucas, São Francisco de Assis (Santarém),
  Perpétuo Socorro, Cristo Ressuscitado, Guadalupe, N. S. de Nazaré, Rosário,
  Alter do Chão, São Mateus, Aveiro, São Francisco de Assis (Monte Alegre),
  Santa Maria Mãe de Deus, Santa Rita e N. S. da Glória. Comunidades que a
  página dá sem lugar ficaram no `nao_cabe` da matriz (Alter do Chão,
  Prainha, Cristo Rei de Monte Alegre, Aveiro, Santa Maria Mãe de Deus).
- Celebração da Palavra não é missa: ficou no `nao_cabe` (capelas de Aveiro,
  comunidades de Prainha e Santa Maria do Uruará, Lago Grande).
- Todo `id_banco` é null.

## Fonte principal (lida em 13/11/2026)

O site oficial (Cúria Online) tem uma página por unidade, com região
pastoral, endereço, expediente, telefone, e-mail, horários por dia da semana
e o clero. As URLs estão no campo `fontes` de cada item.

- https://arquidiocesedesantarem.org.br/paroquias (a lista: 48 unidades,
  ids 1 a 51, sem 2, 3 e 20)
- https://arquidiocesedesantarem.org.br/paroquias/<id>/<nome> (uma por unidade)
- https://arquidiocesedesantarem.org.br/horariosmissa (o mesmo quadro de
  horários, por município; bate com as páginas das unidades)
- https://arquidiocesedesantarem.org.br/municipios (padroeiros dos municípios)

Nenhuma página de unidade cita Instagram ou Facebook; só há site próprio em
N. S. do Perpétuo Socorro (www.paroquiaperpetuosocorro.org.br) e N. S. de
Guadalupe (pguadalupe.com.br), e os dois não responderam em 13/11/2026.

## Como os horários foram lidos

- "1ª sexta-feira do mês" vira `semanas: [1]`; "2º e 4º domingo",
  `[2, 4]`; "no 1º, 2º, 3º domingo", `[1, 2, 3]`.
- "Adoração e Missa" no mesmo horário vira duas linhas (adoração e missa).
- Novena, terço e trezena sozinhos não entraram; missa com novena levou a
  novena na observação.
- Horários sem descrição sob "Horários de Missa" (Cristo Libertador, 19h30 e
  21h de domingo em São Francisco de Assis) entraram como missa.
- Fora do formato, no `nao_cabe`: missa do último domingo do mês (Imaculado
  Coração de Maria, Maicá); "Missa todo 3º e 5º domingo de cada mês" posto no
  sábado (São Raimundo, Vigia), que a fonte deixa ambíguo; missa de todo dia
  22 (Santa Rita); um "00h00" no domingo da Igreja São Cristóvão (Rosário),
  ignorado.
- "Nossa a São José e Missa" (quarta, São Raimundo Nonato) entrou como missa
  sem observação: o texto tem erro de digitação.

## Matrizes deduzidas

- Área Pastoral São Lucas: a página diz que a sede é a Igreja Sagrado
  Coração de Jesus (Urumanduba).
- Área Pastoral N. S. da Glória: matriz é a Igreja N. S. da Glória
  (Conquista), em frente à secretaria.
- Paróquia São Mateus: a página não diz a sede; a secretaria fica na Nova
  Vitória, bairro da Igreja Cristo Rei, que o GCatholic lista como "Cristo
  Rei, Área Pastoral São Mateus". Ficou Cristo Rei como matriz.
- Sem nome de igreja na fonte, a matriz ficou como "Sede da Área ..." em São
  Rafael Arcanjo, São João Paulo II, São Raimundo Nonato (Vila Canp) e N. S.
  de Nazaré Mãe de Jesus (Boa Vista do Cuçari).

## Conferência da lista

- https://gcatholic.org/dioceses/diocese/sant2.htm (atualizado em
  09/11/2026): 46 paróquias nas estatísticas de 2022; a lista de igrejas
  (https://gcatholic.org/churches/local/sant2) tem 49 entradas e marca 28
  paróquias (a catedral à parte). Todas as paróquias do GCatholic estão no site da
  arquidiocese. O site traz, a mais, unidades novas ou áreas que o GCatholic
  lista só como igreja: Santo Antônio (Laguinho), São Simão Pedro, N. S. de
  Guadalupe, São Mateus (o GCatholic ainda a chama Área Pastoral São
  Mateus), N. S. das Graças (Santa Clara), Santa Maria Mãe de Deus e as áreas
  pastorais. Igrejas do GCatholic que não são unidade: Seminário São Pio X;
  N. S. de Fátima, N. S. do Livramento, Santa Clara, Santa Luzia, Santo
  Antônio e São José Operário em Monte Alegre; São Benedito em Prainha.
- https://catholic-hierarchy.org/diocese/dsant.html não serviu (o código
  aponta para outra diocese); usamos o GCatholic para a história.

## Pendências para a próxima rodada (busca na web)

- As 8 unidades sem horário (lista em `SEM-HORARIO-santarem.txt`): nenhuma
  tem perfil citado pela arquidiocese; buscar Instagram pelo nome.
- Mojuí dos Campos: confirmar a missa de domingo.
- Horários de confissão: nenhuma página traz.
- Capela Santa Luzia (Cristo Rei, Monte Alegre) e Capela do Santíssimo
  Sacramento (Aveiro) têm horário de missa, mas a página não diz o lugar.
