# Diocese de Itabira-Coronel Fabriciano (MG): fontes da pesquisa de 13/11/2026

Sé em Itabira (Catedral Nossa Senhora do Rosário) e co-sé em Coronel
Fabriciano (Co-Catedral São Sebastião). Província Eclesiástica de Mariana.
Administrador diocesano: Pe. Pascifal José do Nascimento (Dom Francisco Cota
de Oliveira foi nomeado bispo e aguarda a posse, segundo as notícias do site).
Site: https://dioceseitabira.org.br. O site diz: 24 municípios, 3 regiões
pastorais, 50 paróquias.

## Resumo

- **52 unidades** em `saida/itabira-fabriciano.json`: 2 catedrais (a
  Catedral de Itabira e a Co-Catedral de Coronel Fabriciano) e 50 paróquias,
  nas 3 regiões pastorais (Região 1: 14; Região 2: 13; Região 3: 25).
  Cidades com mais paróquias: Ipatinga (10), Itabira (9, contando os
  distritos de Ipoema e Senhora do Carmo), João Monlevade (4), Coronel
  Fabriciano (4), Timóteo (4).
- **47 com horário de missa** (40 alta, 7 média) e **5 sem horário**
  (baixa). 326 igrejas no total (matrizes, capelas e comunidades com
  horário), 587 linhas de horário (11 de adoração; nenhuma de confissão: só a
  Co-Catedral publica atendimento, e por período do dia, sem hora).
- A confiança segue a data de modificação de cada página da diocese
  (`article:modified_time`, posta em `fontes[].data`): de 10/2025 em diante,
  alta; páginas de 02 e 03/2025 ou com horários sem dia ou sem local, média.
- Sete unidades tiveram os horários tomados do site próprio (citado pela
  página da diocese e mais novo que ela), lido em 13/11/2026: Catedral
  (catedralitabira.com.br), N. S. da Saúde (paroquiadasaude.com.br),
  Sagrado Coração de Jesus de Ipatinga (pscjdi.org.br), Santo Antônio de
  Coronel Fabriciano (santoantoniofabriciano.com.br), São Geraldo Magela
  (paroquiasaogeraldo.com.br), Senhor do Bonfim (paroquiasenhordobonfim.com.br)
  e a Co-Catedral (saosebastiaofabriciano.com.br). Na Co-Catedral as missas
  de sábado e domingo estão no Salão Paroquial (o site traz campanha de
  reforma do templo); a página da diocese ainda tem um aviso da quarentena.
- Onde a página separa "missa" e "celebração da Palavra" por domingo do mês
  (Cristo Redentor, Santana, São José de Timóteo, São Luís Montfort), só as
  missas entraram, com `semanas`.
- Horários sem dia, com "missa ou celebração", "última semana do mês" ou
  "todo dia N" foram para `nao_cabe`.

## Lista das unidades

Fonte da lista: https://dioceseitabira.org.br/paroquias/ (abas por região
pastoral) e uma página por paróquia em
`https://dioceseitabira.org.br/paroquia/<nome>/` (53 páginas; as URLs estão
no campo `fontes` de cada item). Cada página traz endereço, telefone, e-mail,
redes sociais, comunidades e o quadro "Horários de Missas e Celebrações".

A lista da diocese tem 52 páginas de paróquia e uma de santuário. O texto do
site diz "50 paróquias"; as 52 páginas entram (a diferença parece ser as duas
catedrais). O **Santuário Nossa Senhora da Piedade** (Córrego Alto, Coronel
Fabriciano) não é paróquia: a Paróquia São Francisco Xavier o lista entre as
suas comunidades, com o mesmo telefone; entrou como igreja `santuario` dela.

Conferência contra o GCatholic (https://gcatholic.org/churches/local/itab0,
atualizado em 09/11/2026, 59 igrejas, 52 com marca de paróquia ou catedral):
bate em quase tudo. Diferenças:

- O GCatholic lista "Nossa Senhora da Conceição Aparecida" em Itabira como
  paróquia; a diocese não tem essa paróquia. Em Itabira a diocese tem a
  Paróquia São João Batista (bairro João XXIII), que o GCatholic não lista.
- O GCatholic não lista a Paróquia São Francisco de Assis (bairro Alegre,
  Timóteo).
- O GCatholic dá duas entradas para São Sebastião de Coronel Fabriciano
  (co-catedral e paróquia); a diocese diz que matriz e co-catedral "formam
  um único espaço pastoral", uma paróquia só.
- Nomes de matriz que o GCatholic confirma: a Paróquia Cristo Libertador tem
  como sede o Santuário São Judas Tadeu; a Paróquia São Luís de Maria
  Montfort, a igreja do Sagrado Coração de Jesus (Cruzeiro Celeste).
- A Paróquia Sagrada Família (Ipatinga) tem como matriz a igreja de São
  Pedro (Rua Icó, 45, Caravelas), conforme a própria página.
- Nova Era: o GCatholic lista quatro igrejas sem paróquia (N. S. das Graças,
  N. S. do Rosário, Sagrada Família, São Caetano), que são comunidades da
  Paróquia São José da Lagoa.

## Contatos

Telefone, e-mail e site vêm das páginas da diocese (o e-mail é quase sempre
`@dioceseitabira.org.br`). Instagram e WhatsApp, dos ícones de rede social
de cada página. Ficaram fora:

- Sites que não resolvem mais (DNS) em 13/11/2026: paroquiadecristorei.com.br,
  pnscjm.com.br, saogeraldomajela.com.br, nsdoperpetuosocorro.com.br,
  psfipatinga.com.br, paroquiasaojosedalagoa.com.br, saojoseacesita.com.br;
  e igrejasantana.com.br, que hoje leva a um portal de notícias.
- O WhatsApp da Paróquia São Sebastião de Timóteo (31 8798-1843), que parece
  o da Co-Catedral sem o 9.
- Link de Instagram que é convite (Cristo Libertador) e não dá o perfil.
- O Instagram da Paróquia N. S. da Penha (Itabira) é o do Santuário São
  Geraldo Majela, que pertence a ela.

## Sem horário (5)

N. S. da Piedade (Itabira), N. S. de Fátima (Coronel Fabriciano), Santo
Antônio de Pádua (Vargem Linda, São Domingos do Prata), São João Batista
(Itabira) e São Sebastião (Timóteo): o quadro de horários da página está
vazio. Perfis citados em `SEM-HORARIO-itabira-fabriciano.txt`.

## O que falta para o próximo estado desta pesquisa

- Horários das 5 paróquias acima (perfis de Instagram/Facebook citados pela
  diocese, para a rodada de busca).
- São José Operário (João Monlevade): a página dá horários sem o dia da
  semana; ficaram em `nao_cabe`.
- Confissões: nenhuma página traz horário de confissão com hora.
- Comunidades sem horário (centenas, sobretudo rurais) não entraram; estão
  listadas, com bairro ou córrego, nas páginas de cada paróquia.
- Conferir com a diocese a contagem "50 paróquias" contra as 52 páginas.
