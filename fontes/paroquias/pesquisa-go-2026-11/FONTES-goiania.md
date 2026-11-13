# Arquidiocese de Goiânia (GO): fontes da pesquisa de 13/11/2026

Sé metropolitana em Goiânia; Região Metropolitana de Goiânia e municípios
vizinhos do centro-sul goiano. Catedral Metropolitana Nossa Senhora
Auxiliadora (Praça Dom Emanuel, s/n, Setor Central). Sufragâneas, segundo o
GCatholic: Anápolis, Goiás, Ipameri, Itumbiara, Jataí, Rubiataba-Mozarlândia
e São Luís de Montes Belos.

## Resumo

- **133 unidades** em `saida/goiania.json`: 1 catedral, 3 basílicas
  (Santuário Basílica do Divino Pai Eterno em Trindade; Paróquia e Santuário
  Basílica Sagrada Família, Vila Nova Canaã; Paróquia N. S. da Conceição e
  Santuário Basílica de N. S. do Perpétuo Socorro, Campinas), 122 paróquias,
  4 quase-paróquias e 3 reitorias (entraram como `area_pastoral`, como em
  Campos e na Administração São João Maria Vianney).
- 5 vicariatos episcopais territoriais e 23 foranias; cada item traz o seu na
  `observacao`.
- Cidades: Goiânia (77), Aparecida de Goiânia (21), Senador Canedo (7),
  Trindade (3), Goianira (3), Inhumas (2) e uma em cada: Abadia de Goiás,
  Aragoiânia, Araçu, Bela Vista de Goiás, Bonfinópolis, Brazabrantes,
  Caldazinha, Campestre de Goiás, Caturaí, Cristianópolis, Gameleira de Goiás,
  Guapó, Hidrolândia, Itauçu, Leopoldo de Bulhões, Santo Antônio de Goiás,
  São Miguel do Passa Quatro, Silvânia, Varjão, Vianópolis.
- **133 com horário de missa na matriz** (130 com confiança alta, 3 média:
  São José de Vianópolis e N. S. da Abadia de Caldazinha, sem missa de domingo
  na matriz, e Santa Rosa de Lima, só com a de sábado; é o que a página traz).
- **503 capelas e comunidades** com nome e lugar, 476 delas com horário
  (1.560 linhas de missa no total, 19 de confissão, 9 de adoração).
- Todo `id_banco` é null: o banco ainda não tem nada de Goiás.

## A fonte: o site da arquidiocese (lido em 13/11/2026)

O site (WordPress refeito em 2026) tem um tipo de conteúdo `paroquia` com
133 páginas, uma por unidade, cada uma com telefone, site, e-mail, endereço,
expediente, cartões de "Horários de Missas" e a lista de "Comunidades" com
endereço e horário. Tudo foi lido pela API e pelas páginas:

- https://arquidiocesedegoiania.org.br/wp-json/wp/v2/paroquia (a lista, 133)
- https://arquidiocesedegoiania.org.br/paroquia/<nome>/ (uma por unidade; a
  URL de cada uma está no campo `fontes` do JSON). Exemplos:
  - https://arquidiocesedegoiania.org.br/paroquia/nossa-senhora-auxiliadora-catedral-metropolitana/
  - https://arquidiocesedegoiania.org.br/paroquia/santuario-basilica-do-divino-pai-eterno-trindade/
  - https://arquidiocesedegoiania.org.br/paroquia/divino-pai-eterno-trindade/ (36 comunidades)
- https://arquidiocesedegoiania.org.br/missas/ (página "Horários": repete os
  mesmos cartões das páginas de paróquia; atualizada em 12/11/2026)
- https://arquidiocesedegoiania.org.br/vicariatos/ (vicariatos e foranias com
  a lista das unidades; atualizada em 16/07/2026, usada para a forania)
- https://arquidiocesedegoiania.org.br/vicariatos-episcopais-territoriais/
  (versão anterior, de 20/01/2026; só para conferência)

Os contatos são os da página de cada unidade: telefone da secretaria, e-mail
institucional (quase todos @arquidiocesedegoiania.org.br) e o número do botão
"Enviar uma mensagem" como WhatsApp, como publicado. Três botões têm número
malformado (dígitos a mais: São João Bosco, São João Paulo II de Gameleira,
Sant'Ana de Inhumas) e ficaram de fora. Instagram só onde a própria página o
põe no lugar do site (paroquiamaedemisericordia, guadalupegyn,
paroquiasaojose_ap, saojudasgyn); nenhum perfil foi aberto.

Como os horários foram lidos:

- Cartões com observação foram tratados um a um: "Celebração da Palavra",
  novena sem missa (terças do Perpétuo Socorro em Campinas), missa votiva de
  dia fixo do mês (dias 13, 14, 19, 22), feriados e "nas casas" foram para o
  `nao_cabe`; confissões e adoração viraram linhas próprias com "Até ..." na
  observação.
- "1ª sexta-feira do mês" e afins viraram `semanas`. Ficaram no `nao_cabe` os
  casos ambíguos: "4ª quarta-feira", "5ª quinta-feira" (quarta-feira toda
  semana ou a 4ª do mês?), "2ª e 4ª-feira do mês", "última sexta", "a cada 15
  dias", "nos meses pares".
- Comunidade cuja missa é só "nas casas" (sem igreja) ou sem lugar nenhum na
  página não virou igreja: foi para o `nao_cabe` da matriz, com o horário.
- Abreviações de bairro foram escritas por extenso (St. = Setor, Jd. = Jardim,
  Pq. = Parque, Res. = Residencial, Conj. = Conjunto).

## Conferência da lista

- **Arquidiocese**: 133 páginas de unidade; a página dos vicariatos lista 132
  delas (falta a Reitoria São José, do Setor dos Aeroviários) mais duas
  capelas (ver pendências). Bate em todo o resto.
- **GCatholic** (https://gcatholic.org/dioceses/diocese/goia0.htm e
  https://gcatholic.org/churches/local/goia0, atualizado em 09/11/2026): 133
  igrejas, das quais o seminário, a Igreja Todos os Santos (Senador Canedo,
  comunidade da Paróquia N. S. Aparecida do Jardim das Oliveiras), a Capela da
  Vila São José Cottolengo (comunidade do Divino Pai Eterno de Trindade), o
  "futuro" Santuário do Divino Pai Eterno e a Capela N. S. das Graças do
  Ordinariado Militar não são unidades. A estatística de 2022 dá 122
  paróquias. Divergências:
  - **Igreja Santa Bárbara, Santa Bárbara de Goiás**: o GCatholic a dá como
    paróquia da Arquidiocese de Goiânia "atendida pela Diocese de São Luís de
    Montes Belos"; o site da arquidiocese não tem nada sobre ela. Ficou fora
    do JSON (ver pendências).
  - A Paróquia São Bento (Jardim Rosa do Sul, Aparecida) é a "Igreja Menino
    Jesus" do GCatholic; o e-mail dela ainda é mjesuspraga@.
  - São Lucas (Bairro Rio Branco): a lista de foranias diz quase-paróquia; a
    página e o GCatholic, paróquia. Entrou como paróquia.
  - A Imaculada Conceição de Aparecida está na lista de foranias como "Vila
    Oliveira"; a página dá Setor Pontal Sul I.
  - Menino Jesus (Fazenda Gameleira) está na Forania N. S. Auxiliadora na
    lista de jul/2026 e estava na Forania Bom Jesus na de jan/2026.
- Os quatro "decretos" do portal (entre eles "Criação da Paróquia Santa
  Rita", 16/09/2026) estão sem texto e parecem conteúdo de exemplo; não foram
  usados.

## Circunscrições de Goiás (GCatholic)

O GCatholic lista 11 circunscrições com sede ou igrejas em Goiás: Goiânia,
Anápolis, Goiás, Ipameri, Itumbiara, Jataí, Luziânia, Formosa,
Rubiataba-Mozarlândia, São Luís de Montes Belos e Uruaçu. Todas estão nos
pedidos desta pesquisa; não há prelazia nem diocese nova.

## O que falta para o próximo estado desta pesquisa

- Paróquia Santa Bárbara (Santa Bárbara de Goiás): confirmar a quem pertence
  (Goiânia, segundo o GCatholic, ou São Luís de Montes Belos, que a atende).
- Capelas citadas na lista de foranias sem paróquia indicada: Capela Nossa
  Senhora do Rosário de Fátima (Forania Jesus Bom Pastor) e Capela Nossa
  Senhora das Graças, Capelania da Polícia Militar (Forania São Lucas).
- Endereço da matriz de cinco unidades cuja página não traz endereço nem
  telefone: N. S. da Abadia (Caldazinha), São João Batista (Brazabrantes),
  Santo Antônio de Pádua (Caturaí), Santo Antônio (Jardim dos Buritis,
  Aparecida) e a Quase-Paróquia Santo Antônio de Pádua (Goianira).
- Horários de confissão: só 5 unidades os publicam (na matriz ou numa comunidade).
- Comunidades com horário ambíguo ou "nas casas" (ver `nao_cabe`).
