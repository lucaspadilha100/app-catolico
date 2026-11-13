# Arquidiocese de Montes Claros (MG): fontes da pesquisa de 13/11/2026

Sé metropolitana em Montes Claros, norte de Minas. Arcebispo: Dom José Carlos
de Souza Campos (desde 14/12/2022). Sufragâneas: Janaúba, Januária e
Paracatu. Secretaria arquiepiscopal: Rua Januária, 371, Centro, Montes
Claros, (38) 3222-9434, secretaria@arquimoc.org. Site: https://arquimoc.org

## Resumo

- **69 unidades** em `saida/montes-claros.json`: 1 catedral
  (Nossa Senhora Aparecida), 67 paróquias (uma delas a Paróquia
  Santuário Senhor do Bonfim, de Bocaiúva) e 1 quase-paróquia (São João Batista, São João
  do Pacuí), em 12 foranias: Nossa Senhora da Conceição e São José 6, Nossa Senhora da Consolação 5, Nossa Senhora do Perpétuo Socorro 5, Santo Antônio 4, Santos Reis 5, Santíssimo Coração de Jesus 7, Senhor do Bonfim 6, Senhora Sant'Ana 6, São Gonçalo 5, São João Batista 4, São Norberto 6, São Sebastião 10.
  Montes Claros tem 26 unidades (contando o distrito de Nova Esperança); as demais
  ficam em 39 municípios.
- **59 com horário**: 49 com confiança alta e 10 média. 176 igrejas com
  horário (563 linhas de missa, 94 de confissão, 5 de adoração).
- **10 sem horário** (confiança baixa), em `SEM-HORARIO-montes-claros.txt`,
  com o Instagram que a página da paróquia cita.
- 65 unidades com Instagram anotado (link da própria página da paróquia,
  sem abrir o perfil).
- Todo `id_banco` é null.

## Como o site organiza os dados

O site usa a plataforma Parresia: cada paróquia e cada comunidade tem uma
página própria (`/paroquia/<nome>` e `/comunidade/<nome>`), com endereço,
setores (secretaria com telefone, WhatsApp, e-mail e texto de confissões),
clero e uma tabela "Horários de Missas". Cada linha da tabela traz no
atributo `data-item` um JSON com tipo (missa, celebração, outro),
recorrência (semanal ou mensal), dias, horários e uma descrição. Foi isso que
li, página a página (as 69 das paróquias e as cerca de 1.050 das
comunidades ligadas a elas). A API de cadastro da plataforma pede login
(401); não foi usada.

- A **lista oficial** (69 paróquias) está no atributo `data-cascade` da página
  https://arquimoc.org/foranias-e-paroquias/ (cada instituição com tipo,
  cidade e forania). Bate com as 69 páginas de paróquia do tipo de conteúdo
  `paroquias` da API do WordPress (mais 7 capelanias).
- **Horário por igreja**: quando as comunidades têm horário na própria
  página, o JSON usa o horário de cada comunidade, na igreja certa. O que a
  página da paróquia tem a mais, sem igreja, ficou no `nao_cabe` da matriz.
- Confiança **média** (10): Paróquia São Sebastião (Taiobeiras), Paróquia Nossa Senhora da Paz (Padre Carvalho), Paróquia São José (Josenópolis), Paróquia Senhor Bom Jesus (Santa Cruz de Salinas), Paróquia São José Operário (Montes Claros), Paróquia Nossa Senhora do Carmo (Montes Claros), Paróquia Sant'Ana (Olhos D'Água), Paróquia Santo Antônio (Luislândia), Paróquia São Gonçalo (Francisco Sá), Paróquia Santa Isabel de Portugal (Fruta de Leite).
  Nelas só a página da paróquia tem horário, sem dizer a igreja (ou, em São
  José Operário, a matriz não tem página); os horários foram postos na matriz.
- **Confissões**: do texto da secretaria; o que tem dia e hora virou linha
  `confissao` (com "Até ..." na observação); o resto ("após a missa",
  "agendamento") ficou no `nao_cabe`.
- Descrições das linhas: "Missa das crianças", "Missa votiva", "Missa de
  cura e libertação" viraram observação; "Celebração com as crianças" e as
  celebrações da Palavra ficaram no `nao_cabe` (não são missa). Onde a
  descrição corrige a hora ("18:30 (Adoração) e 19:00 (Missa)", "Adoração...
  Missa às 19:00"), a missa ficou na hora certa e a adoração em linha própria.
- Comunidades sem horário entraram com nome e lugar (o nome da página é
  "Santo - Lugar").

## Correções e dúvidas

- Terra Branca é distrito de Bocaiúva (o endereço antigo da página no site
  é "terra-branca-bocaiuva-mg" e o CEP 39390-000 é o de Bocaiúva): cidade Bocaiúva, localidade Distrito de Terra Branca. O
  e-mail publicado é o da Paróquia de Olhos D'Água; não foi usado.
- Nova Esperança: o site a trata como cidade; é distrito. Ficou em Montes
  Claros (forania Santos Reis, da cidade). Conferir.
- Jequitaí: o Instagram publicado (paroquiafd) é o da Paróquia de Francisco
  Dumont; não foi usado.
- Textos de confissão copiados de outra paróquia, não usados: Campo Azul
  (igual ao de Ibiaí, com endereço de Ibiaí), Berizal (igual ao de N. S. do
  Perpétuo Socorro e Todos os Santos), Japonvar e Fruta de Leite (iguais
  entre si).
- Paróquia São Norberto (Montes Claros): é o nome atual no site; o GCatholic a
  chama de Nossa Senhora das Graças e São Norberto.
- Paróquia São José Operário (Montes Claros): nenhuma comunidade da lista é a
  matriz, que entrou pelo nome do padroeiro e recebeu os horários da página
  da paróquia que não são de nenhuma comunidade (por isso confiança média).
- Paróquia São Geraldo (Salinas): a matriz é a comunidade "São Geraldo -
  Bairro São Geraldo" (não há comunidade chamada Matriz).

## Conferência com o GCatholic

https://gcatholic.org/churches/local/mont3 (09/11/2026) lista 56 igrejas, e a
estatística (31/12/2022) dá 68 paróquias. O site da arquidiocese tem 69. Todas
as 56 do GCatholic estão no site (algumas com outro nome: Bom Jesus de Claro
dos Poções, Nossa Senhora das Graças e São Norberto). Estão no site e não no
GCatholic: São Sebastião (Taiobeiras), N. S. da Paz (Padre Carvalho), São
Geraldo (Salinas), São José (Josenópolis), Senhor Bom Jesus (Rubelita), São
Sebastião (Berizal), Senhor Bom Jesus (Santa Cruz de Salinas), N. S.
Imaculada Conceição (Novorizonte), São Judas Tadeu e São João Paulo II
(Montes Claros), N. S. da Esperança (Nova Esperança) e Santa Isabel de
Portugal (Fruta de Leite, criada em 2025). O GCatholic marca sem "Parish"
igrejas que o site dá como paróquia (Botumirim, Campo Azul, Engenheiro
Navarro, Guaraciama, Ponto Chique, São João da Lagoa). Ficou a lista da
arquidiocese.

## Capelanias (fora do JSON, pendência)

O site lista 7 capelanias, sem paróquia indicada; não entraram como unidade
nem como capela:

- Capela da Santa Casa (Hospital Santa Casa N. S. das Mercês), Praça Honorato
  Alves, 22, Centro: missas domingo 7h e 9h; segunda, terça, sexta e sábado 7h
  e 12h.
- Capelania Militar Santa Efigênia (10º Batalhão da PM), Av. Dep. Plínio
  Ribeiro, 2810, Cintra: domingo 8h, sábado 19h30.
- Capela do Colégio Imaculada Conceição (Irmãs do Sagrado Coração de Maria
  de Berlaar), Av. Cel. Prates, 276, Centro: 7h de domingo e de terça a
  sábado.
- Carmelo Maria Mãe da Igreja e São Paulo VI, Av. Independência, 2578,
  Carmelo: domingo 8h30, segunda a sexta 7h, sábado 17h.
- Hospital Universitário Clemente Farias, Hospital Aroldo Tourinho e
  Hospital Dilson Godinho: sem horário.

Também aparece na busca de horários do site a Capela Nossa Senhora do Rosário
(Igrejinha do Rosário), Praça Portugal, Centro: está como comunidade da
paróquia que a lista.

## Páginas lidas (13/11/2026)

- https://arquimoc.org/foranias-e-paroquias/ (lista oficial em `data-cascade`)
- https://arquimoc.org/wp-json/wp/v2/paroquias (76 itens: 69 paróquias e 7
  capelanias)
- As 69 páginas de paróquia (`https://arquimoc.org/paroquias/<nome>/`, que
  redireciona para `/paroquia/<nome>/`; três delas só abrem por
  `/paroquia/`: Campo Azul, Fruta de Leite e Francisco Dumont) e as páginas
  de comunidade (`https://arquimoc.org/comunidade/<nome>`); as usadas para
  horário estão no campo `fontes` de cada item.
- https://arquimoc.org/horarios-de-missa/ (a busca carrega por JavaScript;
  não foi usada)
- https://gcatholic.org/dioceses/diocese/mont3 e
  https://gcatholic.org/churches/local/mont3

## O que falta para o próximo estado desta pesquisa

- Horários das 10 paróquias sem tabela no site (lista no
  `SEM-HORARIO-montes-claros.txt`).
- Confirmar Nova Esperança (distrito de qual município) e os contatos
  copiados entre paróquias.
- Decidir se as capelanias entram (são igrejas com missa, sem paróquia).
