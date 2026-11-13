# Diocese de Guanhães (MG): fontes da pesquisa de 13/11/2026

Sé em Guanhães; Vale do Suaçuí e Serra do Espinhaço. Bispo: Dom Otacílio
Ferreira de Lacerda. Catedral: São Miguel e Almas (Praça JK, 12).

## Resumo

- **27 unidades pastorais** em `saida/guanhaes.json`: 1 catedral e 26
  paróquias, em 4 áreas pastorais: Área 1 São João Evangelista (9), Área 2
  Nossa Senhora do Patrocínio (4), Área 3 Nossa Senhora da Conceição (6) e
  Área 4 São Miguel (8).
- **2 com horário de missa** (confiança alta, páginas de 2026): N. S.
  Aparecida (Pito, Guanhães) e N. S. do Porto (Senhora do Porto).
- **25 sem horário** (confiança baixa): as páginas das paróquias no site da
  diocese trazem pároco, comunidades, histórico e contato, mas não horários.
- Comunidades com lugar: São José do Jacuri (19, com o padroeiro de cada
  uma) e Santo Antônio do Cruzeiro (Paróquia Santo Antônio, Tapera). As
  outras páginas listam comunidades só pelo nome do lugar, sem padroeiro;
  ficaram de fora.
- Nenhuma página de paróquia cita Instagram. O site da diocese cita o canal
  @catedraldeguanhaes no YouTube.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do tipo de conteúdo "paroquias" do site (API do WordPress, 27
entradas) e da página "Paróquias", batida com a página "Áreas Pastorais"
(01/09/2026) e com o GCatholic (atualizado em 09/11/2026): as 27 batem nome
por nome. O resumo do GCatholic ainda diz "25 parishes", número antigo. O
Santuário do Bom Jesus de Matosinhos (Conceição do Mato Dentro) está no
GCatholic sem marca de paróquia e não entrou como unidade.

Três paróquias ficam em distritos de Conceição do Mato Dentro: a da sede
(N. S. da Conceição), Córregos (título "N. S. da Conceição Aparecida", do
GCatholic) e Santo Antônio do Norte, a Tapera (Santo Antônio). A Paróquia
N. S. Aparecida é a do bairro Pito, em Guanhães.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedeguanhaes.com.br/paroquias/<slug>/ (as URLs estão no campo
  `fontes`; atualizadas em abril e maio de 2026).
- https://diocesedeguanhaes.com.br/paroquias-diocese-de-guanhaes/ (a lista).
- https://diocesedeguanhaes.com.br/areas-pastorais/ (as 4 áreas, com as
  paróquias de cada uma).
- As notícias com "horários de missa" no site são de 2020 (pandemia) e não
  foram usadas.

## Decisões

- O e-mail publicado da catedral ("paroquiaguanhães@gmail.com", com til)
  não é um endereço válido e ficou de fora.
- WhatsApp de São Pedro do Suaçuí com 8 dígitos, como publicado.
- Senhora do Porto: as missas da 2ª e 4ª quinta-feira e da Capela do Rosário
  (1º sábado) não têm hora na página e foram para o `nao_cabe`.

## Pendências

- Horários das 25 paróquias da lista `SEM-HORARIO-guanhaes.txt`.
- Patrono da Paróquia de Córregos (o título vem só do GCatholic).
