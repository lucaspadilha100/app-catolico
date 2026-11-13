# Diocese de Santos (SP): fontes da pesquisa de 13/11/2026

Sé em Santos; Baixada Santista (Santos, São Vicente, Cubatão, Guarujá,
Bertioga, Praia Grande, Mongaguá, Itanhaém e Peruíbe). Bispo: Dom Joaquim
Giovani Mol Guimarães (desde 05/11/2025). Cúria: Av. Conselheiro Rodrigues
Alves, 254, Santos, (13) 3228-8888.

## Resumo

- **50 unidades pastorais** em `saida/santos.json`: 1 catedral, 2 basílicas
  menores (Pompéia e Embaré), 2 santuários paroquiais (Sagrado Coração de
  Jesus e São Judas Tadeu, em Santos) e 45 paróquias. Por cidade: Santos 20,
  São Vicente 9, Guarujá 6, Praia Grande 5, Cubatão 3, Itanhaém 3, Peruíbe 2,
  Bertioga 1, Mongaguá 1.
- **50 com horário** no site da diocese (lido em 13/11/2026). Nas 3 paróquias
  de Cubatão (N. S. da Lapa, São Francisco de Assis e São Judas Tadeu) o site
  traz só os horários das capelas, não os da matriz: ficaram com confiança
  "média" e a falta anotada na observação. As demais 47 têm horário da matriz
  e são confiança "alta".
- **265 igrejas** no total (matrizes, capelas e comunidades, com endereço e
  horários quando o site os dá). As duas reitorias que a diocese conta à
  parte entraram assim: a Reitoria N. S. do Amparo como igreja da Paróquia
  São Vicente Mártir (a página da reitoria diz "Paróquia: São Vicente
  Mártir"); a Reitoria Bom Jesus dos Navegantes ficou FORA (ver pendências).
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Lista das unidades

A lista vem das páginas por cidade do site da diocese
(`/paroquias/<cidade>`), que somam 55 páginas. Cinco não são unidades e
foram tratadas assim:

- **Convento Nossa Senhora do Carmo** (Santos): convento carmelita, não é
  paróquia; ficou fora do JSON (ver pendências).
- **Santuário Santo Antônio do Valongo**: a própria página diz "Paróquia:
  Nossa Senhora da Assunção"; entrou como igreja (tipo santuário) dessa
  paróquia, com os horários.
- **Santa Edwiges - Stella Maris**: a própria página diz "Paróquia: Nossa
  Senhora dos Navegantes"; entrou como capela dessa paróquia.
- **Reitoria Nossa Senhora do Amparo**: igreja da Paróquia São Vicente
  Mártir (dito nas duas páginas).
- **Reitoria Bom Jesus dos Navegantes** (Vila Margarida, São Vicente):
  nenhuma página diz a que paróquia pertence; ficou fora (ver pendências).

## Conferência contra o anuário (GCatholic, atualizado em 09/11/2026)

https://gcatholic.org/churches/local/sant4 lista 56 igrejas, das quais 51
com condição de paróquia (incluída a catedral). Casado com as 50 do JSON:

- O anuário traz como paróquias separadas **Santa Edwiges**, **Santo Antônio
  do Valongo** e **São Benedito** (Santos); o site da diocese traz Santa
  Edwiges e o Valongo como igrejas de outras paróquias, e São Jorge e São
  Benedito como UMA paróquia ("Paróquia São Jorge e São Benedito"). O JSON
  segue a diocese, com a divergência na observação de cada uma.
- O anuário não traz as mais novas **Paróquia Cristo Rei** (Guarujá,
  Balneário Pernambuco) e **Paróquia São Gaspar Bertoni** (Praia Grande,
  criada em 08/01/2024). 51 - 3 + 2 = 50: as listas batem.
- A carta pastoral de Dom Tarcísio (2023, no site da diocese) fala em "50
  paróquias ... e 2 reitorias", o mesmo total do JSON.
- As demais igrejas do anuário sem condição de paróquia (Seminário São José,
  Convento e igreja de Sant'Ana em Itanhaém, Amparo e Bom Jesus dos
  Navegantes) conferem com o tratamento acima; Sant'Anna de Itanhaém entrou
  como igreja da Paróquia N. S. da Conceição, em obras, sem atividades.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://www.diocesedesantos.org.br/ (menu, contatos da cúria)
- https://www.diocesedesantos.org.br/paroquias/santos (e as outras 8 páginas
  por cidade: sao-vicente, cubatao, guaruja, bertioga, praia-grande,
  mongagua, itanhaem, peruibe)
- As 55 páginas de paróquia/igreja em
  `https://www.diocesedesantos.org.br/paroquias/<cidade>/<paroquia>`, cada
  uma com atendimento (telefone, endereço, e-mail), horários de missas e a
  lista de capelas com endereço e horário. As URLs usadas estão nos campos
  `fontes` de cada unidade do JSON.
- E-mails: o site os esconde do robô (Joomla), mas o próprio HTML traz o
  endereço em base64; foram decodificados do HTML baixado. O da Paróquia São
  Tiago Apóstolo veio truncado na página e ficou de fora.

## Instagram

O site da diocese quase só dá Facebook (que o JSON não guarda). Instagram só
onde a própria página o traz: nsconceicaoitanhaem (N. S. da Conceição,
Itanhaém) e nsradesionitanhaem (N. S. de Sion, Itanhaém). Os perfis das
demais paróquias não foram pesquisados um a um (ver pendências).

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/sant4 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dsnts.html
- Carta pastoral "Caminhemos juntos" (PDF no site da diocese, 2023):
  50 paróquias, 271 comunidades, 2 reitorias.

## O que falta para o próximo estado desta pesquisa

- Os horários da MATRIZ das 3 paróquias de Cubatão (o site só dá os das
  capelas); o caminho provável é o Facebook de cada uma (@paroquiansradalapa,
  @paroquiasfrancisco, @paroquiasjtcasqueiro).
- A **Reitoria Bom Jesus dos Navegantes** (Rua Alcides Alves de Carvalho,
  1430, Vila Margarida, São Vicente; missas quarta e sábado 19h30, domingo
  9h30 e 19h, no site da diocese): falta descobrir a que paróquia pertence
  para entrar como igreja dela.
- O **Convento Nossa Senhora do Carmo** (Praça Barão do Rio Branco, 16,
  Centro, Santos, (13) 3234-5566; missas seg a sex 7h30, 12h30 e 18h, sáb
  7h30 e 17h, dom 8h, 11h e 18h): igreja aberta ao público, mas não é
  unidade pastoral nem o site diz a que paróquia o território pertence.
- Instagram das paróquias (o site quase só dá Facebook).
- Celebrações da Palavra e horários que não couberam no formato ficaram em
  `nao_cabe` de cada igreja.
- Alguns dados do site parecem antigos: a Comunidade Santo Inácio de Loyola
  (Santuário Sagrado Coração) consta "fechada em função da pandemia", e a
  Capela N. S. Rosa Mística (Cristo Rei, Guarujá) tem missa "até o final de
  abril" sem dizer de que ano.
