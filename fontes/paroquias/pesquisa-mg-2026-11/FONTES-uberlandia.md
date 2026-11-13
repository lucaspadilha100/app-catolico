# Diocese de Uberlândia (MG): fontes da pesquisa de 13/11/2026

Sé em Uberlândia; sufragânea de Uberaba. Bispo: Dom Paulo Francisco Machado.
Cúria: Praça Nossa Senhora Aparecida, 134, Aparecida, Uberlândia,
(34) 3235-0144. Padroeira: Santa Teresinha do Menino Jesus.

## Resumo

- **53 unidades** em `saida/uberlandia.json`: 1 catedral (Santa Teresinha do
  Menino Jesus), 3 santuários-paróquia (N. S. Aparecida, N. S. da Abadia e
  São Judas Tadeu, este elevado a santuário em notícia recente da diocese),
  47 paróquias e 2 capelanias (N. S. da Saúde, no Cazeca, e Jesus Bom
  Pastor, no Jardim Holanda), que a diocese lista entre as paróquias, com
  matriz, pároco e horários. As capelanias entraram como `paroquia` (o
  formato não tem categoria própria), com a explicação na observação.
- 7 foranias: Santa Teresinha, São João Evangelista, São Lucas, São Marcos,
  São Mateus (Uberlândia), São Paulo (Araguari, Cascalho Rico, Estrela do
  Sul, Indianópolis) e São Pedro (Monte Alegre de Minas, Araporã,
  Tupaciguara). A Capelania N. S. da Saúde está sem forania na fonte.
- Cidades: Uberlândia (38), Araguari (9) e uma em cada: Araporã, Cascalho
  Rico, Estrela do Sul, Indianópolis, Monte Alegre de Minas, Tupaciguara.
- **53 com horário, todas com confiança alta**: o site da diocese tem um
  diretório de missas ("203 igrejas com missa, 11 cidades") que embute os
  dados estruturados na própria página (`window.MISSAS_DADOS`: paróquias,
  locais com coordenadas e 588 missas com dia, hora e frequência). Foi lido
  daí, sem chamar API. 582 horários lançados (551 missas, 21 adorações, 10
  confissões) em 203 igrejas (53 matrizes e 150 comunidades/capelas).
- Missas "primeiro/segundo/terceiro/quarto do mês" viraram `semanas`;
  "último ... do mês" e "todo dia N" foram para `nao_cabe`.
- Adoração e confissão vêm do bloco "Outros horários" de cada página de
  paróquia (lidos a mão; 18 paróquias publicam algum).
- Todo `id_banco` é null.

## Lista das unidades

A lista é a da página https://diocesedeuberlandia.org.br/paroquias/ (53
páginas de paróquia) e bate uma a uma com as 53 paróquias do diretório de
missas.

Conferência com o GCatholic (09/11/2026: 51 paróquias no anuário de 2022,
50 igrejas listadas): não aparecem no GCatholic a Paróquia São Geraldo
Magela, a N. S. das Graças (Ipanema) e a Imaculada Conceição (Shopping
Park), nem as duas capelanias. O GCatholic ainda chama a Paróquia Santa
Mônica e Santa Elena Guerra só de Santa Mônica. Entradas do GCatholic sem
marca de paróquia (Sagrada Família repetida, N. S. do Rosário e São
Benedito em Uberlândia, que é comunidade da catedral) não são unidades.

## Páginas lidas (13/11/2026)

- https://diocesedeuberlandia.org.br/missas/ (horários; dados embutidos)
- https://diocesedeuberlandia.org.br/paroquias/ (lista)
- Uma página por paróquia: `https://diocesedeuberlandia.org.br/paroquias/<slug>/`
  (padroeiro, e-mail, Instagram, WhatsApp, CEP, comunidades, outros
  horários). As URLs estão em `fontes`.
- A API do WordPress do site responde "rest_forbidden" com o aviso de que os
  dados não ficam abertos para uso fora do site; não foi usada.
- O GCatholic dá o site antigo dioceseuberlandia.org.br, que não resolve;
  o atual é diocesedeuberlandia.org.br.

## Decisões de leitura

- WhatsApp: só o número do botão "Mensagem no WhatsApp" da página; o da
  Sagrada Família vinha com um dígito a mais e ficou vazio.
- Nomes de comunidade em caixa alta foram normalizados; o lugar depois do
  travessão ou entre parênteses foi para `localidade`.
- Missas com observação "exceto feriado" (catedral, 12h) e "com as
  crianças" levaram a observação.

## O que falta para o próximo estado

- Confissões: a maioria das paróquias não publica horário.
- Endereço das comunidades sem rua na fonte.
