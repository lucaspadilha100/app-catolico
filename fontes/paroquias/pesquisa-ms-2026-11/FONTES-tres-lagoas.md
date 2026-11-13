# Diocese de Três Lagoas (MS): fontes da pesquisa de 13/11/2026

Sé em Três Lagoas; leste do Mato Grosso do Sul (Bolsão), 10 municípios:
Água Clara, Aparecida do Taboado, Brasilândia, Cassilândia, Chapadão do Sul,
Inocência, Paranaíba, Santa Rita do Pardo, Selvíria e Três Lagoas. Criada em
03/01/1978; padroeiro Sagrado Coração de Jesus. Bispo: Dom Luiz Gonçalves
Knupp (desde 2015). Cúria: Rua Oscar Guimarães, 1074, Lapa, Três Lagoas,
(67) 3521-3027, comunicacao@diocese3lagoas.org.br. Foranias (deanatos):
Três Lagoas e Paranaíba.

## Resumo

- **16 unidades pastorais** em `saida/tres-lagoas.json`: 1 catedral (a
  Paróquia Santo Antônio, com sede na Catedral do Sagrado Coração de Jesus),
  13 paróquias, 1 santuário (Aparecida do Taboado) e 1 área pastoral (Santa
  Dulce dos Pobres, distrito de Arapuá, criada em 24/06/2024).
- **3 com horário** (confiança media): a Paróquia Santo Antônio (Instagram
  santoantonio3lagoas, pelo trecho da busca), a Paróquia Santa Rita de Cássia
  de Três Lagoas (página no Facebook, telefone e endereço batem com a página
  da diocese) e a Paróquia São Pedro Apóstolo de Chapadão do Sul (Instagram
  psaopedroapostolochs, telefone bate com a diocese).
- **13 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. O site da diocese traz
  contatos, endereço e ano de criação de cada uma, mas nenhum horário.
- Todo `id_banco` é null: o banco ainda não tem nada do Mato Grosso do Sul.
- Nenhuma unidade fora do MS (nenhum campo `uf` foi preciso).

## Lista das unidades

A lista vem do diretório oficial de paróquias do site da diocese
(diocese3lagoas.org.br/paroquia/, 2 páginas, 16 unidades, lido em
13/11/2026). Cada página de paróquia traz ano de criação, telefone, e-mail,
atendimento da secretaria, endereço, história e clero; nenhuma traz horário.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 16
igrejas): o total coincide por acaso. O anuário conta em separado a Catedral
do Sagrado Coração de Jesus e uma "Igreja Santo Antônio (Parish)" em Três
Lagoas, que na prática são a mesma paróquia (a sede da Paróquia Santo
Antônio é a catedral, como a própria diocese publica); e não traz a Área
Pastoral Santa Dulce dos Pobres, de 2024. O Catholic-Hierarchy (Anuário
Pontifício 2023) dá 15 paróquias, o que bate com 15 paróquias + 1 área
pastoral de hoje.

Peculiaridade local: a cidade tem Santo Antônio como padroeiro e a paróquia
mais antiga leva o nome dele, mas a igreja construída para ser a matriz (e
depois catedral) foi dedicada ao Sagrado Coração de Jesus. A histórica
Igreja de Santo Antônio, do início do século 20, fica a 700 m da catedral;
nenhuma fonte diz com clareza a que paróquia pertence, então não entrou como
capela.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocese3lagoas.org.br/ (menu, contatos)
- https://diocese3lagoas.org.br/paroquia/ e /paroquia/page/2/ (o diretório)
- https://diocese3lagoas.org.br/contato/ (cúria)
- As 16 páginas de paróquia, uma por unidade, em
  https://diocese3lagoas.org.br/paroquia/<slug>/ (os slugs estão nas fontes
  de cada item do JSON). Todas com contatos; nenhuma com horário.

O site não apareceu nas primeiras buscas (o domínio é diocese3lagoas.org.br,
não "diocesedetreslagoas"); quem o entregou foi a página da diocese no
Facebook, vista pela busca.

## Instagram e Facebook (só o trecho que a busca mostra, em 13/11/2026)

Perfis não se leem por dentro (bloqueio de robôs); ficou anotado o que o
trecho da busca trouxe.

- diocese3l (Instagram da diocese; link no cabeçalho do próprio site);
  facebook.com/diocese3lagoas (página da diocese, com o site e o e-mail
  secretaria@diocese3lagoas.org.br)
- santoantonio3lagoas (Paróquia Santo Antônio/Catedral; o trecho trouxe os
  horários: segunda a sábado 6h, terça a sábado 19h, domingo 9h, 17h e 19h)
- psfranciscodeassistl (São Francisco de Assis, Três Lagoas; sem horário no
  trecho)
- psaopedroapostolochs (São Pedro Apóstolo, Chapadão do Sul; o trecho trouxe
  matriz sábado 19h, domingo 7h e 19h)
- facebook.com/santarita3l (Santa Rita de Cássia, Três Lagoas; o trecho
  trouxe quarta e sábado 19h, quinta 6h, domingo 7h, 9h30 e 19h, mais missas
  em capela sem nome)
- facebook.com/ParoquiaSantaLuziaTL, facebook.com/catedralSCJd3L,
  facebook.com/paroquiasantanaparanaibams, facebook.com/paroquiasantoantonioms,
  facebook.com/Diocesede3LagoasParoquiaSaoJose, facebook.com/paroquiacbp,
  facebook.com/santuariodotaboado, facebook.com/PascomChapSul,
  facebook.com/capelansg3l (existem; sem horário no trecho)
- Um perfil @_paroquiasantaluzia apareceu com horários e DDD 67, mas sem
  nada que o amarre a Três Lagoas (Campo Grande também é 67): ficou de fora.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/tres0-n (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dtrla.html (estatísticas, cúria)
- https://www.radiocacula.com.br/diocese-acompanhe-o-dia-de-finados-em-tres-lagoas-e-cidades-vizinhas/
  (01/11/2026; a programação de Finados da diocese confirma o pároco de cada
  unidade, a Área Pastoral Santa Dulce dos Pobres em Arapuá e o distrito de
  São Pedro em Inocência)
- https://www.rcn67.com.br/tres-lagoas/diocese-de-tres-lagoas-divulga-os-horarios-das-missas-de-final-e-inici/
  (2016; confirma que a sede da Paróquia Santo Antônio é a Catedral Sagrado
  Coração de Jesus)
- https://treslagoas.ms.gov.br/tres-lagoas-celebra-o-dia-de-santo-antonio
  (a histórica Igreja de Santo Antônio e o padroeiro da cidade)

## Pendências para o próximo estado desta pesquisa

- Horário das 13 unidades sem fonte: o caminho mais provável são as páginas
  das paróquias no Facebook e no Instagram, que a busca não indexa por
  dentro. O site da diocese seria o lugar natural, mas hoje não publica
  horários.
- Os horários aceitos vieram de trechos de busca sem data visível: conferir
  quando a diocese ou as paróquias publicarem algo datado.
- Capelas e comunidades rurais: nenhuma fonte as lista com nome e lugar
  (só a Capela Nossa Senhora das Graças de Três Lagoas, no Facebook, sem a
  paróquia dona); por isso cada unidade entrou só com a matriz.
- A Paróquia São José de Cassilândia está sem data de criação (a página da
  diocese deixa o campo vazio).
