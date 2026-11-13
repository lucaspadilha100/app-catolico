# Diocese de Santo Amaro (SP): fontes da pesquisa de 13/11/2026

Sé na Catedral de Santo Amaro (Largo 13 de Maio, Santo Amaro, São Paulo).
Zona sul da cidade de São Paulo: Santo Amaro, Campo Belo, Brooklin, Cidade
Ademar, Pedreira, Jabaquara (parte), Cidade Dutra, Interlagos, Grajaú,
Parelheiros e Marsilac. Bispo: Dom José Negri, PIME; bispo auxiliar: Dom
Marcelo Antônio da Silva. Mitra: Av. Mascote, 1171, Vila Mascote (aviso de
privacidade do site).

## Resumo

- **113 unidades pastorais** em `saida/santo-amaro.json`: 1 catedral, 5
  santuários (todos com paróquia: São Judas Tadeu, Nossa Senhora de Fátima,
  Nossa Senhora Mãe de Deus, Nossa Senhora Mãe dos Aflitos e Jesus
  Misericordioso) e 107 paróquias, em 11 setores (foranias): Cupecê,
  Grajaú, Interlagos, Jordanópolis, Parelheiros, Pedreira, Sabará, Santa
  Catarina, Santo Amaro, Varginha e Veleiros.
- **Todas na cidade de São Paulo.** A diocese não tem município vizinho;
  nenhuma repete os arquivos já feitos (os 5 itens de São Paulo em
  `osasco.json` são de outros bairros, sem coincidência).
- **91 com horário** (67 com confiança alta, 24 média). Mais a Santa
  Gertrudes (média, sem horário na matriz: está em reforma e as missas
  dela acontecem no Santuário Mãe dos Aflitos; o texto ficou no
  `nao_cabe`). **21 sem horário** (confiança baixa, com o porquê na
  observação).
- 103 capelas e comunidades, só as que a fonte dá com nome e endereço ou
  bairro; muitas com horário próprio.
- Confiança: **alta** quando a página da paróquia no site da diocese foi
  atualizada em 2024 ou depois; **média** quando a última atualização é de
  2020 a 2023 (a observação diz o ano); **baixa** sem horário. Santa
  Bárbara (fala em suspensão "na pandemia"), São Joaquim (horários "na
  pandemia" e "sem pandemia") e o Santuário Mãe dos Aflitos (diverge da
  página da Santa Gertrudes) ficaram em média.
- Todo `id_banco` é null.

## Lista das unidades

Fonte principal: o site da diocese (WordPress). As páginas das paróquias
são filhas da página 723 ("Paróquias da Diocese de Santo Amaro") e foram
baixadas pela API: `https://diocesedesantoamaro.org.br/wp-json/wp/v2/pages?parent=723&per_page=100`
(127 páginas: 11 de setor, 116 de unidade). Cada página traz forania,
pároco, endereço, telefone, e-mail, secretaria, horários de missa,
confissão e adoração e as comunidades. A data em `fontes[].data` é a da
última alteração da página (campo `modified` da API).

Três listas do próprio site não batem entre si, e a união delas foi
conferida com o GCatholic e com o mapa territorial da diocese:

- https://diocesedesantoamaro.org.br/paroquias-da-diocese-de-santo-amaro/
  (lista geral com telefone; 104 itens; sem Santa Maria Goretti, Mãe do
  Salvador no Veleiros, São Tiago Maior, Carlo Acutis, a nova São João
  Batista do Varginha e a São José da Pedreira; troca os telefones das duas
  Santa Rita de Cássia)
- https://diocesedesantoamaro.org.br/paroquias-da-diocese-de-santo-amaro/setor-cupece/
  e as outras 10 páginas de setor (cada uma diz quantas paróquias tem;
  Pedreira, Varginha e Veleiros mostram uma a menos que o número do título:
  Medalha Milagrosa, Santuário Jesus Misericordioso e São Pancrácio, que
  estão na lista geral e no GCatholic)
- Mapa territorial (Google My Maps ligado no menu "Mapa territorial"),
  baixado em KML: https://www.google.com/maps/d/kml?mid=1CidcSigKhAAvxRTygHTYJNn_v3O9-2o&forcekml=1
  (cada paróquia e comunidade como ponto, com o link da página; serviu
  para saber a que paróquia pertence cada comunidade)

Ficaram FORA três páginas: duas cópias antigas da Imaculado Coração de
Maria (`-2` e `-3`, jan/2024, sem horário) e a Paróquia Nossa Senhora
Auxiliadora (Chácara Flora; página de 2018), que não aparece em nenhuma das
listas, nem no mapa, nem no GCatholic.

## Conferência com o GCatholic

https://gcatholic.org/dioceses/diocese/zama0.htm e
https://gcatholic.org/churches/local/zama0 (atualizado em 09/11/2026; 103
igrejas listadas; a estatística de 2022 fala em 111 paróquias). As 103
batem com o site. Faltam no GCatholic, e entraram pelo site: São Francisco
Xavier, São João Paulo II, São Joaquim e Santana, São Raimundo Nonato,
Verbo Encarnado, Santa Terezinha do Menino Jesus (todas do setor Pedreira),
Santa Maria Goretti (Veleiros), a terceira São José (Pedreira/Jardim
Cupecê), a segunda São João Batista (Varginha, criada em 26/01/2025) e a
Paróquia Universitária São Carlo Acutis (criada em 2023). Total: 103 + 10 =
113.

A tentativa de conferir pelas filiais do CNPJ da Mitra não foi feita: o
site da diocese não publica o CNPJ.

## Casos particulares

- **Santa Gertrudes e Santuário Mãe dos Aflitos** (Vila Gea): mesmo pároco,
  telefone e e-mail. A matriz Santa Gertrudes está em reforma e a página diz
  que todas as missas acontecem no santuário; as duas páginas dão listas
  diferentes (domingo 11h ou 11h30). O santuário ficou com os horários da
  própria página; os da Santa Gertrudes, em texto no `nao_cabe` dos dois.
- **São João Batista do Varginha** (2025) recebeu comunidades da São Pio de
  Pietrelcina (Santa Teresa de Calcutá e a própria Capela São João Batista,
  hoje matriz) e da São Jorge (São Judas, Rua Ana Velha, 3), como mostra o
  mapa. As páginas antigas da São Pio e da São Jorge ainda as listam; aqui
  elas entraram só na nova paróquia, e os horários antigos dessas capelas
  na página da São Pio foram descartados.
- **Três paróquias São José**: Americanópolis (Cupecê), Jardim Cupecê (a
  página diz forania Cupecê; o setor Pedreira a lista; e-mail
  "saojosepedreira") e Vila Quintana (Interlagos). Também há três Nossa
  Senhora Aparecida (Jardim Miriam, Grajaú, Jardim Pedreira), duas Nossa
  Senhora de Fátima, duas Santa Cruz, duas Santa Rita de Cássia, duas
  Sant'Ana e duas São João Batista; a observação diz o setor quando ajuda.
- **Mãe do Salvador** aparece nos setores Jordanópolis e Veleiros; a página
  diz Jordanópolis.
- **Santo Expedito e N. S. Aparecida** (Colônia): matriz = Igreja Nova
  (Rua Nossa Senhora Aparecida, 3), com as missas de sábado e domingo; a de
  quinta é na Igrejinha Histórica (n.º 1-A), que entrou como capela.
- **Nossa Senhora da Boa Viagem**: a missa do 2º domingo na "Capela São
  Frei Galvão" foi posta na Capela Santo Antônio de Sant'Ana Galvão (Jardim
  Represa), única capela com esse nome na lista da paróquia.
- **Rainha Santa Isabel**: a missa tridentina de domingo 12h é na Capela da
  Santa Casa de Santo Amaro (Av. Adolfo Pinheiro, 235), que não é capela da
  paróquia; ficou no `nao_cabe`.
- **Telefones**: Navegantes usa o da lista geral (5974-9446), porque a
  página repete o da Cristo Ressuscitado; Santa Inês usa o da página
  (5662-4422), porque a lista geral repete o da São Miguel Arcanjo. A
  página da São Tiago Maior é um esboço com e-mail e mapa de outras
  paróquias: ficou só com o telefone.
- **E-mails com cedilha** publicados pela diocese (nsassunção@,
  nsdaesperança@) ficaram fora; erros de digitação aparentes
  (nsdaconsolocao@, santapaulinia@, santaclara@santoamaro.org) foram
  mantidos como publicados.
- **Instagram**: só os perfis ligados nas próprias páginas da diocese;
  nenhum aberto por dentro. O perfil ligado na São Francisco de Assis
  (caravana_doespiritosanto) é de um grupo e ficou fora.

## O que falta para o próximo estado desta pesquisa

- As 21 unidades sem horário: Cristo Rei, N. S. da Assunção, N. S.
  Aparecida (Pedreira), Medalha Milagrosa, Santa Amélia e São Francisco,
  Santa Clara e São Francisco de Assis, Santa Paulina, Santa Rita de Cássia
  (Vila Joaniza), Santa Terezinha do Menino Jesus, São Joaquim e Santana,
  São Raimundo Nonato, Santa Cruz (Parelheiros), Santa Inês, São Carlos
  Borromeu, São Bernardo, N. S. dos Navegantes, Santo Antônio de Sant'Ana
  Galvão, São Benedito e N. S. de Fátima, São Tiago Maior, São Carlo
  Acutis e o Santuário Jesus Misericordioso (divulga as missas só nas redes
  sociais). A busca na web não achou página própria com horário para
  nenhuma delas.
- Os sites próprios citados pelas páginas (santabarbarasp.org,
  saopancracio.com.br, paroquiansaparecidagrajau.com.br,
  paroquiasantacatarina.com.br, psaomiguel.com.br, pspa.org.br) não
  responderam deste ambiente em 13/11/2026; os horários vieram das páginas
  da diocese.
- As 24 unidades de confiança média têm página parada desde 2020-2023 e
  merecem reconferência.
- Comunidades citadas sem endereço ficaram no `nao_cabe` da matriz (Santa
  Bárbara da N. S. do Rosário; Santa Luzia e São José da São João Paulo II).
