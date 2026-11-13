# Diocese de Coari (AM): fontes da pesquisa de 13/11/2026

Nome atual: **Diocese de Coari**. Nasceu como Prelazia Territorial de Coari
(13/07/1963, desmembrada da Arquidiocese de Manaus) e foi elevada a diocese
em 09/10/2013; sufragânea de Manaus. Bispo: Dom Marek Marian Piątek, CSsR.
Padroeira diocesana: Sant'Ana (26 de julho). Cúria: Rua Gilberto Mestrinho,
227, Centro, Coari, CEP 69460-000, informativodiocesedecoari@gmail.com (o
GCatholic e o catholic-hierarchy escrevem nº 277 e dão o telefone
(97) 3561-2227). Território: Coari, Codajás, Anori, Anamã, Beruri,
Caapiranga e Manacapuru.

## Resumo

- **11 unidades pastorais** em `saida/coari.json`: 1 catedral (Sant'Ana e
  São Sebastião) e 10 paróquias. Cidades: Coari (3), Manacapuru (3) e uma em
  cada: Anamã, Anori, Beruri, Caapiranga, Codajás.
- **11 com horário de missa**, todas com confiança alta: o site da diocese
  tem uma página por paróquia com endereço, expediente da secretaria,
  telefone, e-mail e "Horários de Missa". As páginas não têm data, mas o site
  está ativo (notícias de 2 de novembro de 2026); lidas em 13/11/2026.
- Adoração entrou onde a página diz "Adoração e Missa" ou "Adoração ao
  Santíssimo". Terço dos Homens, Terço das Mulheres e Apostolado da Oração
  ficaram fora (não são missa, confissão nem adoração); novena sem missa foi
  para o `nao_cabe` (N. S. de Nazaré de Manacapuru, Santo Afonso).
- Nenhuma página publica confissão.
- A Paróquia Santuário São Francisco (Anamã) entrou como `paroquia` com a
  primeira igreja de tipo `santuario`.
- A diocese não publica foranias, setores ou regiões.
- Todo `id_banco` é null: o banco ainda não tem nada do Amazonas.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese (11 paróquias), batida
com as 11 páginas individuais.

Conferência contra o anuário: o GCatholic (atualizado em 09/11/2026, mas com
estatística de 31/12/2022) e o catholic-hierarchy (dados de 2023) dão **10
paróquias**; o blog antigo da diocese também falava em "dez paróquias" em
2018. A diferença é a **Paróquia Santo Afonso** (Terra Preta, Manacapuru),
que está na lista atual da diocese e não aparece no GCatholic. Seguimos a
diocese. O GCatholic chama a Paróquia São Pedro de "São Pedro e São João
Batista" (criada em 14/02/2010); seguimos o nome da diocese.

Igrejas que o GCatholic lista sem marca de paróquia e sem dizer a que
paróquia pertencem (ficaram fora, pendência): em Coari, Espírito Santo,
Nossa Senhora de Fátima, São Francisco de Assis e São João; em Beruri, São
Francisco.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesecoari.org.br/paroquias (a lista oficial)
- Uma página por paróquia, `https://diocesecoari.org.br/paroquias/<n>/<nome>`
  (n de 48 a 58); as URLs estão no campo `fontes` de cada item.
- https://diocesecoari.org.br/pascom (uma página por Pascom paroquial): dela
  vieram os perfis de Instagram e o número de endereço de Codajás (Praça Dom
  Mário, 21). Os telefones e e-mails das Pascoms são de responsáveis
  (pessoas) e não entraram.
- https://diocesecoari.org.br/noticias (conferência de que o site está ativo)

## Instagram (anotado das páginas da Pascom no site da diocese)

Nenhum perfil foi aberto por dentro. pascom_pnspsocorro (N. S. do Perpétuo
Socorro, Coari), pascompsp (São Pedro, Coari), imaculada_web (Pascom e web
rádio da Imaculada Conceição, Anori).

## Outras fontes

- https://diocesedecoari.blogspot.com (blog antigo, último post em 2019): a
  comunidade de Itapeua pertence à Paróquia N. S. do Perpétuo Socorro
  (post de 28/07/2019).
- http://paroquia-saofranciscoanama.blogspot.com (blog da paróquia de
  Anamã, parado em 2011, só programação de festa; não usado).
- https://gcatholic.org/dioceses/diocese/coar0.htm e
  https://gcatholic.org/churches/local/coar0 (lista, endereço da catedral
  na Tv. Raimundo Mota, anos de criação)
- https://catholic-hierarchy.org/diocese/dcoar.html (contagem de
  paróquias, endereço da cúria)

## O que falta para o próximo estado desta pesquisa

- Confissão: nenhuma paróquia publica horário.
- Comunidades urbanas e ribeirinhas: o site não as lista; só Itapeua (Perpétuo
  Socorro) tem paróquia indicada.
- As igrejas do GCatholic sem paróquia (Espírito Santo, Fátima, São Francisco
  de Assis e São João em Coari; São Francisco em Beruri).
- Números de endereço de várias matrizes (a diocese só dá rua e bairro).
