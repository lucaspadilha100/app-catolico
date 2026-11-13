# Diocese de Caruaru (PE): fontes da pesquisa de 13/11/2026

Sé em Caruaru; Agreste pernambucano, 19 municípios. Bispo: Dom José Ruy
Gonçalves Lopes, OFMCap. Cúria: Praça Deputado Henrique Pinto, 99, Centro,
Caruaru, (81) 3721-1653 (página da diocese no site do Regional Nordeste 2 da
CNBB).

## Resumo

- **54 unidades pastorais** em `saida/caruaru.json`: 1 catedral, 45
  paróquias, 2 quase-paróquias (São José, Alto do Moura; Sagrado Coração de
  Jesus, Toritama) e 6 áreas pastorais, em 6 foranias (Nossa Senhora das
  Dores, São Francisco de Assis, Santo Amaro, São José, Nossa Senhora da
  Conceição e Nossa Senhora do Ó).
- **45 com horário de missa** (12 com confiança alta, 33 média), **9 sem
  horário** (confiança baixa).
  - Alta: as 12 unidades cuja página no site da diocese (atualizada em
    25/08/2026) traz os horários de missa e, quase sempre, de confissão.
  - Média: horários só da tabela "Encontre sua Missa" do mesmo site,
    atualizada em 22 a 27/08/2025 (mais de um ano).
  - Baixa: a linha da unidade na tabela está vazia e nada mais foi achado:
    Altinho (N. S. do Ó), Barra de Guabiraba, Encruzilhada de São João
    (Bezerros), Alto Bonito (Bonito), Vila de Peladas, N. S. de Lourdes
    (Gravatá), São Caetano (São Caitano), Santo Amaro (Taquaritinga do Norte)
    e Pão de Açúcar (Taquaritinga do Norte).
- Comunidades com nome, lugar e horário vieram das páginas de São Paulo
  Apóstolo (7), São Francisco (2), São José de Petrópolis (2), Guadalupe (2,
  as outras 5 sem bairro ficaram no `nao_cabe`) e da Catedral (Igreja do Bom
  Jesus, Monte Bom Jesus). A Área Pastoral São João Paulo II ganhou a
  comunidade de Uruçu-Mirim (a tabela dá a missa de lá).
- Todo `id_banco` é null.

## O site da diocese

O endereço antigo `diocesedecaruaru.com.br` hoje abre um site de apostas, e
`diocesedecaruaru.org` está à venda. O site atual é
**https://www.diocesedecaruarupe.com/** (Wix), achado pela referência da
Wikipédia. As páginas são montadas no navegador, mas o HTML que o servidor
entrega já traz os dados da página (bloco `wix-warmup-data`); tudo foi lido
desse HTML, sem chamar nenhuma API do site.

- https://www.diocesedecaruarupe.com/encontremissa (tabela "Encontre sua
  Missa": 57 linhas, uma por igreja, com domingo, cada dia da semana e a
  primeira sexta; atualizada em 08/2025)
- https://www.diocesedecaruarupe.com/foraniadasdores (9 paróquias, com
  endereço, telefone, e-mail, Instagram, horários de missa e de confissão,
  comunidades; atualizada em 25/08/2026)
- https://www.diocesedecaruarupe.com/foraniasaofrancisco (9 paróquias, 1
  quase-paróquia, 1 área pastoral; mesma data)
- https://www.diocesedecaruarupe.com/foraniasantoamaro (só 3 das 9 unidades
  da forania, sem horários)
- https://www.diocesedecaruarupe.com/dados-estat%C3%ADsticas
- https://www.diocesedecaruarupe.com/confissoes (página vazia no HTML)

Quando a página da paróquia (2026) e a tabela (2025) divergem, o JSON segue a
página da paróquia: Catedral (segunda a sexta 12h e 17h, e não só 17h na
segunda), Monte Carmelo (quinta 19h), São Francisco e São José de Petrópolis
(a tabela tinha missas que a página não tem mais). Endereços também: Assunção
(Av. Plácido de Souza, 500) e N. S. das Graças de Cidade Jardim (Rua Maria
Adelaide de Andrade, 100).

## Lista das unidades e a contagem

- O site publica só três foranias. As outras três (São José, N. S. da
  Conceição e N. S. do Ó) e a distribuição das cidades vêm da tabela da
  Wikipédia, que cita a página "Foranias e Paróquias" do próprio site da
  diocese (consultada em 25/12/2024, hoje fora do ar):
  https://pt.wikipedia.org/wiki/Diocese_de_Caruaru . Ibirajuba não aparece
  nessa tabela; entrou em N. S. do Ó porque é a sétima paróquia que fecha a
  conta da forania. Conferir.
- A lista de unidades é a da tabela "Encontre sua Missa", batida com as
  páginas de forania: 46 paróquias (contando a Catedral) + 2 quase-paróquias
  + 6 áreas pastorais. As contagens por forania batem com a Wikipédia (9, 9,
  7, 8, 6 e 7).
- **Divergência**: a página "Dados Estatísticos" da diocese diz 48 paróquias,
  2 quase-paróquias e 6 áreas pastorais. Faltam duas paróquias que não
  aparecem em nenhuma página do site (talvez criadas depois da tabela de
  2025). O GCatholic (atualizado em 09/11/2026, dados de 2022) diz 45
  paróquias e 1 missão.
- Conferência com o GCatholic (https://gcatholic.org/churches/local/caru0):
  todas as paróquias do GCatholic estão no JSON. O GCatholic lista sem marca
  de paróquia igrejas que a diocese chama de paróquia (Cristo Rei em São
  Caitano, Santo Agostinho em Santa Cruz, Assunção, Santa Teresinha e as duas
  N. S. das Graças de Caruaru), de quase-paróquia (São José, Alto do Moura) e
  de área pastoral (São João Batista em Bezerros, N. S. de Lourdes em Gravatá,
  São João Paulo II em Mandacaru). Ficaram fora, por não serem unidade: o
  Seminário Interdiocesano N. S. das Dores, o Mosteiro da Escuta do Senhor
  (Chã Grande), a Igreja Mãe Rainha (Altinho) e o Santuário da Mãe Rainha
  (Mandacaru), estes dois sem paróquia indicada (pendência).

## Pendências

- **Capela São Sebastião**, Av. Agamenon Magalhães, 268, Maurício de Nassau,
  Caruaru: está na tabela com horários (domingo 8h, 10h e 17h; segunda a
  sábado 17h30), mas a fonte não diz a que paróquia pertence. Ficou fora.
- **Igreja de São Sebastião de Riacho das Almas** (domingo 17h): sem
  endereço, ficou no `nao_cabe` da matriz de Riacho das Almas.
- **Paróquia São João Batista (Vila de Peladas)**: a diocese a põe em
  Caruaru (forania São Francisco), mas o endereço publicado diz "Vila Pelada,
  São Caitano". O JSON ficou com Caruaru; conferir o município. O e-mail
  publicado (`apscjesus@`) parece ser de outra unidade e ficou fora.
- Instagram da Catedral publicado como "catedrelcaruaru.oficial" (o Facebook é
  catedralcaruaru.oficial): parece erro de digitação e ficou fora.
- Confissões da Paróquia N. S. do Rosário: publicado "Quinta e Sábado: 8h30 e
  12h", sem dizer se são dois horários ou um intervalo; ficou no `nao_cabe`.
- As unidades fora de Caruaru e de Taquaritinga do Norte não têm telefone nem
  e-mail: o site não publica a página delas.
- E-mails das paróquias são `@diocesedecaruaru.com` (sem .br), como o site
  publica.

## Instagram

Todos vieram das páginas de paróquia do site da diocese, exceto
`paroquiadesaocaetanosercom` (São Caetano), que veio do título do perfil na
busca ("Paróquia de São Caetano-PE", ligado à Diocese de Caruaru). Nenhum
perfil foi aberto por dentro.

## Buscas

Usadas cerca de 6 buscas para esta diocese (achar o site atual e tentar os
horários das unidades vazias). Sem resultado de horário.
