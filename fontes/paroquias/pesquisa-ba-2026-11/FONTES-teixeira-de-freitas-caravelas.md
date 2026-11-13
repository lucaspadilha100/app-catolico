# Diocese de Teixeira de Freitas-Caravelas (BA): fontes da pesquisa de 13/11/2026

Sé em Teixeira de Freitas (Catedral São Pedro) e co-catedral em Caravelas
(Santo Antônio), sufragânea de São Salvador da Bahia. Criada em 1962 como
Diocese de Caravelas, com o nome atual desde 1983. Bispo: Dom Aldemiro Sena
dos Santos (desde 04/02/2026). Cinco foranias: São Pedro, Santo Antônio,
Imaculada Conceição, São José e São Cosme e Damião.

## Resumo

- **42 unidades pastorais** em `saida/teixeira-de-freitas-caravelas.json`:
  catedral e co-catedral, 36 paróquias e 4 quase-paróquias. Por forania:
  São Pedro 16 (Teixeira de Freitas), Santo Antônio 4 (Caravelas, Prado,
  Alcobaça), Imaculada Conceição 10 (Medeiros Neto, Itanhém, Ibirapuã,
  Lajedão, Vereda), São José 7 (Mucuri, Nova Viçosa), São Cosme e Damião 5
  (Itamaraju, Jucuruçu, Prado).
- **Nenhuma com horário**: o site da diocese publica, por forania, data de
  ereção, endereço, telefone e e-mail de cada paróquia, clero e coordenação
  leiga, mas nenhuma grade de missas. Todas com `horarios: []` e confiança
  baixa. Lista em `SEM-HORARIO-teixeira-de-freitas-caravelas.txt`.
- Nenhuma página cita perfil de Instagram ou Facebook de paróquia; só os
  da diocese (dioceseteixeiradefreitas no Instagram e no Facebook).
- Só nome da matriz e endereço: as páginas não listam capelas nem
  comunidades.
- Todo `id_banco` é null.

## Lista das unidades

Páginas das foranias (WordPress; atualizadas em 11/09/2026, lidas em
13/11/2026 pela API `?rest_route=/wp/v2/pages/<id>`):

- https://dioceseteixeiradefreitas.com.br/?page_id=126 (São Pedro, itens 1 a 16)
- https://dioceseteixeiradefreitas.com.br/?page_id=128 (Santo Antônio, 17 a 20)
- https://dioceseteixeiradefreitas.com.br/?page_id=140 (Imaculada Conceição, 21 a 30)
- https://dioceseteixeiradefreitas.com.br/?page_id=154 (São José, 31 a 37)
- https://dioceseteixeiradefreitas.com.br/?page_id=17704 (São Cosme e Damião, 5 sem número)
- https://dioceseteixeiradefreitas.com.br/?page_id=14428 (Catedral São Pedro)

Conferência com o GCatholic (https://gcatholic.org/dioceses/diocese/teix0.htm
e https://gcatholic.org/churches/local/teix0, atualizado em 09/11/2026: 39
paróquias em 2022, 38 igrejas): bate com as datas de ereção. Diferenças:

- Novas, ainda fora do GCatholic: Santo Antônio de Nova Lídice
  (06/12/2024), Cristo Rei de Itamaraju (23/11/2024), N. S. da Soledade do
  Distrito de Argolo (15/09/2025) e a quase-paróquia Santa Teresinha de
  Itupeva (Medeiros Neto, sem data).
- O GCatholic ainda dá como quase-paróquia as que a diocese já chama de
  paróquia: Santa Luzia (Teixeira de Freitas, 2022), São Cristóvão (Medeiros
  Neto, 2021) e São José de Alcobaça (paróquia desde 10/05/2025).
- Catedral São Pedro (2017) e Paróquia São Pedro (1984, na antiga catedral)
  são duas unidades na lista da diocese; entraram as duas.

## Contatos

Só o telefone e o e-mail da paróquia. Ficaram de fora todos os telefones e
e-mails da coordenação leiga (são pessoais) e os telefones de padre (Mucuri,
Nova Viçosa, o do cura da Catedral). O e-mail da São Cristóvão tem erro de
digitação no domínio ("freeitas") e ficou de fora. A Catedral, a Santa
Luzia de Teixeira, Nova Lídice e Argolo ficaram sem telefone institucional.

## Outras páginas olhadas, sem horário regular

Busca no site por "horário", "horários das missas" e "missas" (API de
posts): só programações avulsas (Natal de 2021, Corpus Christi, Finados,
"paróquias do litoral" em 12/2019). Nada de grade semanal. A página
"Anuário Diocesano 2025" (?page_id=23736) aponta para um arquivo no
computador de quem publicou (link quebrado) e uma imagem.

## O que falta para o próximo estado

- Horários de todas as 42 unidades (nenhum perfil citado por fonte
  oficial; a busca terá de achar os perfis das paróquias).
- Município de Nova Lídice e do Distrito de Argolo (Argolo posto em Nova
  Viçosa e Nova Lídice em Teixeira de Freitas, a conferir); Batinga posta
  em Itanhém (o endereço publicado repete o de Itanhém).
- Endereço de Nova Lídice, Argolo e São José de Alcobaça.
