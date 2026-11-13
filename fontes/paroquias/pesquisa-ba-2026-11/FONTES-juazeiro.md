# Diocese de Juazeiro (BA): fontes da pesquisa de 13/11/2026

Sé em Juazeiro, no Vale do São Francisco. Bispo: Dom Valdemir Vicente
Andrade Santos (desde 2024). Cúria: Rua Carmela Dutra, 24, Centro, Juazeiro,
(74) 3611-7825, diocese@diocesedejuazeiro.org.br. Padroeira diocesana: Nossa
Senhora das Grotas (8 de setembro). Instagram da diocese: diocesejuazeiroba.

## Resumo

- **20 unidades pastorais** em `saida/juazeiro.json`: 1 catedral (Catedral
  Santuário Nossa Senhora das Grotas), 18 paróquias e 1 área pastoral (São
  Geraldo, criada em 26/03/2022), em 4 foranias (decreto de 30/12/2022):
  - Nossa Senhora das Grotas: as paróquias da cidade de Juazeiro, menos
    Maniçoba (Catedral, Área Pastoral São Geraldo, N. Sra. Aparecida, N. Sra.
    de Fátima, Santa Teresinha, Santa Teresinha de Lisieux em Carnaíba do
    Sertão, Santo Afonso, Santo Antônio, São Cosme e São Damião);
  - Bom Jesus: Curaçá, Uauá e São Francisco de Assis (distrito de Maniçoba);
  - Nossa Senhora do Rosário: Pilão Arcado, Remanso, Campo Alegre de Lourdes;
  - São José: Casa Nova (São José Operário, Sant'Ana em Santana do Sobrado,
    São Sebastião em Pau a Pique), Sobradinho e Sento Sé.
- **1 com horário** (a Catedral, confiança média). As outras 19 entraram com
  `horarios: []` e confiança baixa: as páginas de paróquia do site da
  diocese trazem só endereço, telefone e e-mail, e a página "Horários de
  Missas" do site é um texto sobre a Missa, sem nenhum horário.
- Contatos: todos do site da diocese (uma página por paróquia). Ficaram de
  fora o celular e o e-mail pessoal do padre que a página de Pau a Pique dá
  como contato.
- Todo `id_banco` é null.

## Lista das unidades

Do site da diocese: as quatro páginas de forania (`/locais/forania-*/`)
somam 19 páginas de paróquia (`/local/<nome>/`); a Área Pastoral São Geraldo
aparece na página da Catedral e na notícia da sua criação.

Conferência: GCatholic (atualizado em 09/11/2026) dá "19 parishes, 1
mission" em 2022 e lista 18 igrejas: bate, com duas diferenças de lista que
seguem a diocese:
- São Francisco de Assis (Maniçoba) não está na lista de igrejas do GCatholic;
- Santa Teresinha de Carnaíba do Sertão aparece no GCatholic sem a marca de
  paróquia; o site da diocese a chama de "Paróquia Santa Teresinha de
  Lisieux" (o e-mail ainda é do antigo "setor pastoral").
Catholic-Hierarchy (anuário de 2024): 19 paróquias.

## Páginas lidas (13/11/2026)

- https://diocesedejuazeiro.org.br/foranias/ e
  https://diocesedejuazeiro.org.br/locais/forania-n-sra-das-grotas/ (e as
  outras três foranias): a lista.
- Uma página por paróquia, por exemplo
  https://diocesedejuazeiro.org.br/local/catedral-santuario-nossa-senhora-das-grotas/
  (as URLs estão em `fontes` de cada item).
- https://diocesedejuazeiro.org.br/dom-beto-breis-publica-decreto-de-criacao-de-foranias-na-diocese-de-juazeiro/
  (30/12/2022, as foranias).
- https://diocesedejuazeiro.org.br/clima-de-alegria-e-festa-marcam-a-criacao-da-area-pastoral-sao-geraldo-e-acolhida-do-pe-gilvan-regio-e-irmas-da-fraternidade-esperanca/
  (30/03/2022).
- https://diocesedejuazeiro.org.br/horarios-de-missas/ (sem horário).
- O site é WordPress, mas o tipo "local" (paróquias) não está na API; a
  busca da API (`/wp-json/wp/v2/search`) não achou mais nada com horário.

## Catedral: blog da paróquia

O site da diocese cita como site da Catedral o blog
https://santuariomaedasgrotas.blogspot.com/ . A página
https://santuariomaedasgrotas.blogspot.com/p/horarios-das-celebracoes.html
(sem data; a última postagem do blog é de dezembro de 2023) deu os horários:
domingo 9h e 19h; segunda a sexta 18h (terça com a Novena Perpétua);
quinta exposição do Santíssimo das 9h às 17h30; sábado 19h (no texto "1 9h",
lido como 19h, do mesmo jeito que "1 1h 30min" é o Ofício das 11h30).
Por isso a confiança é média. A página de comunidades do blog deu duas
comunidades no Centro (Santíssimo Redentor e Santa Joana Francisca).

## Blogs antigos de paróquia (não usados para horário)

O blog da Catedral lista blogs de sete paróquias. Todos param entre 2013 e
2017 (paroquiacal, paroquiacosminho, paroquiadepilao, paroquiasantateresinha,
paroquiasantoantoniojuazeiroba; o de Remanso e o de Uauá devolvem 404). Nada
de horário foi tirado deles. Do de Santa Teresinha (Piranga) vieram só as
seis comunidades com bairro (página `p/comunidades.html`, por volta de 2014).

## Pendências (próximo estado)

- Horários das 19 paróquias sem horário: a rodada de busca deve olhar o
  Instagram de cada paróquia (nenhum perfil de paróquia é citado pela
  diocese) ou a secretaria por telefone.
- Comunidades da Catedral no blog que podem ter passado à Área Pastoral São
  Geraldo (criada com comunidades da Catedral e de Maniçoba): São Pedro (Rua
  Petronília de Jesus, Novo Encontro) e São Vicente (Rua Eng. Jaime Martins
  Souza, Loteamento Morada do Rio). Ficaram fora do JSON.
- Comunidade de Massaroca (distrito de Massaroca), listada em 2014 pela
  Paróquia Santa Teresinha: pode hoje ser de outra unidade; ficou fora.
- Confirmar os horários da Catedral (blog sem data).
