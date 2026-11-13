# Arquidiocese de São José do Rio Preto (SP): fontes da pesquisa de 13/11/2026

Sé em São José do Rio Preto; noroeste paulista. Desde 22/05/2025 é
**arquidiocese metropolitana** (antes Diocese de São José do Rio Preto), com
as sufragâneas Barretos, Catanduva, Jales e Votuporanga. Arcebispo: Dom
Antônio Emídio Vilar, SDB. Cúria Arquidiocesana Imaculado Coração de Maria:
Avenida Constituição, 1372, Boa Vista, CEP 15025-075, (17) 2136-8699.
Padroeiros: São José e o Imaculado Coração de Maria.

## Resumo

- **73 unidades pastorais** em `saida/sao-jose-do-rio-preto.json`: 1
  catedral (Catedral Metropolitana de São José), 1 basílica (Basílica Menor
  de Nossa Senhora Aparecida, que é paróquia), 70 paróquias e 1 área
  missionária (Santa Maria Madalena, em Rio Preto), em 9 foranias (Beata
  Assunta Marchetti, Monsenhor Angelo Angioni, Nossa Senhora Aparecida,
  Nossa Senhora do Carmo, Sagrado Coração de Jesus, Santo Antônio de Pádua,
  São José, São Judas Tadeu e Senhor Bom Jesus dos Castores).
- Cidades: São José do Rio Preto (41, contando os distritos de Talhados e
  Engenheiro Schmitt), Mirassol (5), José Bonifácio (3), Monte Aprazível (2)
  e uma em cada: Adolfo, Altair, Bady Bassitt, Bálsamo, Cedral, Guapiaçu,
  Icém, Ipiguá, Jaci, Mendonça, Mirassolândia, Neves Paulista, Nipoã, Nova
  Aliança, Nova Granada, Onda Verde, Orindiúva, Palestina, Poloni,
  Potirendaba, Uchoa e Ubarana. Nenhuma coincide com cidade já pesquisada em
  outra diocese.
- **60 com horário de missa**: 53 com confiança alta (páginas atualizadas
  entre junho e outubro de 2026) e 7 média (páginas no formato antigo, de
  agosto de 2025: Altair, São José e Sagrada Família de José Bonifácio,
  Potirendaba, Santa Mônica, Santa Edwiges e Nossa Senhora do Brasil).
- **13 sem horário, confiança baixa** (regra do dono: entram com
  `horarios: []`): a página da paróquia no site da arquidiocese tem a aba
  "Celebrações" vazia. São elas: Nossa Senhora do Carmo (Mirassol), Nossa
  Senhora de Fátima e Senhor Bom Jesus (Monte Aprazível), São Sebastião
  (Ipiguá), São João Batista (Palestina), São João Batista (Onda Verde),
  Nossa Senhora D'Abadia (Icém), e em Rio Preto: Santuário São Judas Tadeu,
  São Francisco de Assis, São Sebastião (Talhados), Santo Antônio de Lisboa,
  Santo Antônio de Pádua e a Área Missionária Santa Maria Madalena. A busca
  na web não achou página própria de nenhuma delas com horário (só
  diretórios de turismo, que não usamos).
- 5 paróquias têm a matriz santuário (N. S. da Paz em Bálsamo; São Judas
  Tadeu, N. S. das Graças, N. S. do Perpétuo Socorro e São João Batista e
  Santuário das Almas em Rio Preto): entraram como `paroquia`, com a
  primeira igreja de tipo `santuario`, como em Taubaté.
- Capelas e comunidades: entram como igreja só quando a fonte dá o lugar
  (bairro, distrito ou endereço), com os horários da página da paróquia e da
  página própria da capela. Capelas que o site lista só com nome e cidade
  ficaram no `nao_cabe` da matriz.
- Todo `id_banco` é null. Instagram vazio em todas: o site não publica
  perfis de paróquia e nenhum perfil foi aberto.

## Lista das unidades

A lista vem do site oficial (WordPress), pela API pública:
`/wp-json/wp/v2/posts?categories=286` (categoria "Paróquia", 72 páginas) e
`categories=323` ("Área Missionária", 1 página). Cada página tem abas
História, Padre/Diácono, Celebrações, Secretaria, Endereço e Confissões. As
capelas são a categoria 317 (161 páginas), com o mesmo molde; a aba
Secretaria diz a qual paróquia cada uma pertence ("Atendimento na
Paróquia ..."). As páginas de capela sem conteúdo foram ligadas à paróquia
pelo pároco e pela categoria da cidade.

O site também tem a página "Horários de Missa", feita das etiquetas
(`tag`) de cada página de paróquia ("domingo-as-08h00"...). As etiquetas
foram usadas só para conferir; o texto da aba Celebrações manda. Ajudaram
num caso: Nova Aliança, onde o texto diz "às1 9h00" e a etiqueta é 19h.

Conferência contra o GCatholic (atualizado em 09/11/2026, "71 parishes",
69 marcadas como paróquia na lista de igrejas): batem 69. Estão no site e
não no GCatholic: Santo Antônio de Pádua (Mirassol), São João Paulo II,
Santa Mônica e a Área Missionária Santa Maria Madalena (Rio Preto).
Diferenças de nome: GCatholic "Santa Izabel" (Uchôa) = site "Santa Isabel";
GCatholic "Regissol Mirassol, Santa Luzia" = Santa Luzia de Mirassol, no
bairro Regissol; GCatholic "São José do Rio Preto, São Sebastião" = São
Sebastião do distrito de Talhados. Ficaram fora: Seminário Sagrado Coração
de Jesus, a igreja maronita Nossa Senhora do Líbano e a igreja Nossa
Senhora da Esperança (no site, capela da Paróquia Santo Antônio de Pádua de
Rio Preto, sem endereço).

## Páginas lidas (13/11/2026)

- https://arquidiocesesjrp.org.br/ e https://arquidiocesesjrp.org.br/curia-arquidiocesana/ (endereço e telefone da cúria)
- https://arquidiocesesjrp.org.br/horarios-de-missa/ (etiquetas por dia e hora)
- Uma página por paróquia; a URL está no campo `fontes` de cada item, com a
  data em que a página foi alterada pela última vez (não a data da leitura).
  Exemplos:
  - https://arquidiocesesjrp.org.br/catedral-metropolitana-de-sao-jose-s-j-rio-preto-sp/
  - https://arquidiocesesjrp.org.br/basilica-menor-de-nossa-senhora-aparecida-s-j-rio-preto-sp/
  - https://arquidiocesesjrp.org.br/paroquia-sao-benedito-nova-granada-sp/ (9 igrejas)
  - https://arquidiocesesjrp.org.br/paroquia-sao-sebastiao-guapiacu-sp/ (8 igrejas)
- Páginas de capela usadas aparecem também no `fontes` da paróquia.

## Divergências anotadas no JSON

- Nova Granada, Capela São João Batista (Mangaratu): a paróquia diz 1º
  sábado; a capela, 2º sábado. Ficou o da paróquia, com observação.
- Capela Santa Paulina (Vila Anchieta, N. S. do Carmo): paróquia diz domingo
  8h; capela, sábado 16h. Capela Santa Paulina (Estância Primavera,
  Pompeia): paróquia diz domingo 17h30; capela, sábado 17h30. Ficou o da
  paróquia, com observação.
- Mendonça: o link do WhatsApp aponta para o número de outra paróquia
  (Mont Serrat); ficou o número escrito na página.
- Sagrada Família e Santos Reis (José Bonifácio): link e texto do WhatsApp
  diferem num dígito; ficou o texto.
- Capela Santo Antônio (Perobas), da Paróquia de Nova Aliança, tem endereço
  em Jaci; a igreja entrou com cidade Jaci.

## O que falta para o próximo estado desta pesquisa

- Horários das 13 paróquias sem a aba Celebrações preenchida (vale pedir à
  arquidiocese ou à secretaria de cada uma).
- Capela Santa Filomena (Mirassol): a página tem como pároco o Pe. Jeová
  Bezerra da Silva, enviado em 2026 para Cruzeiro do Sul (AC); não dá para
  saber de qual paróquia é. Ficou fora. Também fora: Capela União Fraterna
  (Rio Preto), página vazia, sem pároco.
- Capelas listadas sem endereço (Potirendaba tem 11; Monte Aprazível, 12;
  Onda Verde, 5; Talhados, 4; e outras): só nome, no `nao_cabe`.
- Hora das capelas Beata Assunta Marchetti e N. S. Aparecida (São Pedro
  Apóstolo, Mirassol): a página traz o dia e deixa a hora em branco.
- Perfis de Instagram das paróquias.
