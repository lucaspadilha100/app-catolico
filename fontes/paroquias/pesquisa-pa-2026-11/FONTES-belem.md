# Arquidiocese de Belém do Pará (PA): fontes da pesquisa de 13/11/2026

Sé metropolitana em Belém. Arcebispo: Dom Julio Endi Akamine, SAC (desde
06/08/2025); emérito: Dom Alberto Taveira Corrêa. Cúria: Av. Governador José
Malcher, 915, Nazaré, Belém, (91) 3215-7001. Padroeira: Santa Maria de Belém
(Nossa Senhora de Belém). Território: Belém (com os distritos de Icoaraci,
Mosqueiro, Outeiro e as ilhas), Ananindeua, Marituba, Benevides e Santa
Bárbara do Pará, em oito Regiões Episcopais: Sant'Ana, Santa Maria Goretti,
Santa Cruz, São João Batista, Coração Eucarístico de Jesus, Menino Deus, São
Vicente de Paulo e Nossa Senhora do Ó.

## Resumo

- **109 unidades pastorais** em `saida/belem.json`: 1 catedral, 1 basílica
  (Nazaré), 99 paróquias e 8 áreas missionárias. Por cidade: Belém 68,
  Ananindeua 26, Marituba 9, Benevides 4, Santa Bárbara do Pará 2.
- **99 com horário de missa** (97 confiança alta, 2 média) e **10 sem
  horário** (confiança baixa, `horarios: []`, lista em
  `SEM-HORARIO-belem.txt`).
- Fonte principal: o buscador "Paróquias e Missas" do site da arquidiocese,
  lido pela chamada que a própria página faz
  (`admin-ajax.php`, ação `bdgetparishes`). Devolve para cada unidade nome,
  endereço, telefone, e-mail, clero, missas por dia da semana, coordenadas e
  a Região Episcopal. O clero do buscador já traz as nomeações anunciadas em
  28/12/2025, sinal de que é mantido; a página foi alterada em 16/02/2026.
  O buscador só tem missas: confissão e adoração vieram dos sites próprios
  (Basílica de Nazaré e São Miguel).
- As 8 paróquias-santuário (São Judas Tadeu, N. S. da Conceição Aparecida,
  São João Batista e N. S. das Graças, N. S. do Ó, Santa Rita de Cássia,
  N. S. das Graças da Medalha Milagrosa, N. S. do Bom Remédio, mais o
  Perpétuo Socorro dos Redentoristas, que o GCatholic marca como santuário)
  entraram como `paroquia` com a primeira igreja de tipo `santuario`. A
  Basílica de Nazaré entrou como `basilica`, com 5 comunidades com endereço e
  horário (site da Basílica).
- Todo `id_banco` é null.

## A lista e a contagem

A arquidiocese numera as instalações em sequência, contando paróquias e
áreas missionárias juntas. O post da Área Missionária Santo Agostinho
(10/02/2025) dá a última: "109ª Área Missionária Santo Agostinho (fevereiro
2025)", e lista as anteriores (108ª N. S. da Esperança, 107ª Sagrado Coração
de Jesus, 106ª Divino Espírito Santo, 105ª N. S. do Cenáculo, 104ª Menino
Jesus, 103ª São José dos Verdejantes, 102ª São Pio de Pietrelcina, 101ª São
João Bosco, 100ª São Vicente de Paulo). O buscador tem exatamente 109
unidades fora as reitorias: as listas batem. Nenhum post depois de
fevereiro de 2025 fala de paróquia ou área nova (só a Reitoria de Lourdes,
dezembro de 2025).

Conferência com o GCatholic (atualizado em 09/11/2026; estatística de
31/12/2022: 103 paróquias e 7 missões): a lista de igrejas tem 95 entradas,
que são 91 das nossas unidades mais as 4 reitorias. Faltam no GCatholic as
18 unidades criadas ou elevadas nos últimos anos: as 8 áreas missionárias e
as paróquias Ascensão do Senhor, Cristo Redentor, Menino Jesus, N. S. do
Perpétuo Socorro (Canaã), Sagrado Coração de Jesus (Cremação), Santa
Teresinha da Amazônia, Santíssima Trindade (Ananindeua), São José dos
Verdejantes, São José Esposo de Maria e São Pio de Pietrelcina. Divergência:
o GCatholic põe a Igreja N. S. do Carmo em Belém (Cidade Velha); a paróquia
N. S. do Carmo do buscador é a de Benevides (endereço e coordenadas), e foi
assim que entrou.

## Reitorias: ficaram FORA do JSON (pendência para o dono)

A arquidiocese tem 4 reitorias. O post de instalação da de Lourdes diz que
"diferente das paróquias e áreas missionárias a reitoria não tem comunidades
e nem área geográfica", tem livros próprios e pertence à Região Episcopal,
não a uma paróquia. Como não há paróquia indicada, ficaram fora, com os dados
do buscador abaixo para quando se decidir a categoria:

- **Reitoria Nossa Senhora das Mercês** (Igreja das Mercês), Campina, Belém.
  (91) 3212-3102. Missas todos os dias às 12h e 17h.
- **Reitoria Nossa Senhora de Lourdes** (Capela de Lourdes, jesuítas), Av.
  Governador José Malcher, 1169, Nazaré, Belém. (91) 3223-5728,
  capela.secretaria@gmail.com. Missas: domingo 7h, 9h, 17h30 e 19h30;
  segunda 6h e 18h; terça a sábado 6h30 e 18h. Instalada em 11/12/2025; era
  comunidade da Paróquia São José (Doca).
- **Reitoria São João Batista**, Igreja de São Joãozinho, Rua João Diogo,
  Cidade Velha, Belém. (91) 2121-3722, secretaria@catedraldebelem.com.br
  (o reitor é o cura da Catedral). Missas: domingo 11h; quarta e sexta 7h15;
  sábado 17h.
- **Reitoria Nossa Senhora Mãe da Divina Providência**, na Igreja São João
  Paulo II, Travessa Mauriti, Pedreira, Belém. (91) 3236-1188,
  secretaria@comunidadecaju.com.br, site comunidadecaju.com.br, Instagram
  comunidadecaju. Missas: domingo 10h e 17h; quarta e quinta 19h.

## Páginas lidas (13/11/2026)

- https://arquidiocesedebelem.com.br/paroquias-e-missas/ (buscador; dados
  pela chamada `admin-ajax.php` com `action=bdgetparishes`, também por cidade
  para conferir o município de cada unidade)
- API do site: `/wp-json/wp/v2/posts` (1.046 posts baixados para achar
  datas de criação, comunidades, endereços e perfis), em especial:
  - instalacao-da-107-paroquia-da-arquidiocese-de-belem (Sagrado Coração,
    composição da Região Sant'Ana)
  - instalada-a-area-missionaria-santo-agostinho (a contagem 100ª a 109ª)
  - instalacao-da-reitoria-nossa-senhora-de-lourdes (as 4 reitorias)
  - a-102-paroquia..., area-missionaria-sao-jose-dos-verdejantes...,
    instalacao-da-area-missionaria-menino-jesus,
    criacao-da-area-missionaria-divino-espirito-santo,
    area-missionaria-sao-clemente-e-elevada-a-paroquia,
    criacao-da-area-missionaria-sao-jose-esposo-de-maria,
    instalacao-da-paroquia-ascensao-do-senhor, novas-paroquias-na-arquidiocese-de-belem
    (comunidades de cada uma, no `nao_cabe` da matriz)
  - instalacao-do-terceiro-santuario..., arquidiocese-de-belem-instala-oitavo-santuario
    (os 8 santuários e endereços de São Judas e do Bom Remédio)
  - transferencias-de-padres-2026 (nomeações de 28/12/2025)
- https://www.basilicadenazare.com.br/paroquia-de-nazare/horario-de-missa/horarios-de-missas
  e as 5 páginas de comunidade (N. S. das Graças, Sagrada Família, Santa
  Bernadete, Santo Antônio Maria Zaccaria, São Brás)
- https://www.catedraldebelem.com.br/ (missas iguais às do buscador,
  telefone fixo e Instagram)
- https://www.paroquiasaomiguelcremacao.com.br/ (quadro de horários com
  adoração às quintas, sem data e citando o "Ano de São José"; ficou no
  `nao_cabe`, e as missas seguem o buscador)
- Sites que não abriram (DNS): paroquiadenazare.com.br,
  perpetuosocorrobelem.com.br, spfrassinetti.com.br, imaculada-outeiro.com.
  trindade-pa.com.br está "em manutenção"; paroquiadasantacruz.com.br vazio.

## Conferência (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/bele0.htm e
  https://gcatholic.org/churches/local/bele0
- https://gcatholic.org/churches/data/all-BR (circunscrições do Pará)

## Circunscrições do Pará no GCatholic

15: Belém (arquidiocese), Santarém (arquidiocese), Abaetetuba, Bragança do
Pará, Cametá, Castanhal, Marabá, Óbidos, Ponta de Pedras, Santíssima
Conceição do Araguaia, Xingu-Altamira (dioceses), Itaituba, Marajó e Alto
Xingu-Tucumã (prelazias). Todas estão nos pedidos desta rodada. Macapá,
sufragânea de Belém, é do Amapá.

## Instagram (só os citados pela arquidiocese ou pelo site da própria paróquia)

catedraldebelem (site da Catedral), sjtbelem (post da festividade de São
Judas, 2023), santuariodasgracasoficial (Santuário da Medalha Milagrosa,
Ananindeua, posts dos Círios de 2023 e 2024), paroquiasjbnsg (Santuário São
João Batista e N. S. das Graças, Icoaraci, post de 2021),
paroquiasaomiguelcremacao (site da paróquia). Nenhum perfil aberto por dentro.

## Decisões e cuidados

- Nomes sem o sufixo de lugar do buscador ("- Icoaraci", "- Benfica"): o
  lugar foi para `localidade`. Distritos de Belém (Icoaraci, Mosqueiro,
  Outeiro, Cotijuba) ficaram na localidade com cidade Belém; Benfica e
  Murinin com cidade Benevides.
- Missas repetidas no buscador (domingo das 17h30 no Perpétuo Socorro, das 7h
  na Santa Maria Mãe de Deus, das 8h30 na Santa Teresinha da Amazônia)
  ficaram uma só. O Perpétuo Socorro (Telégrafo) e N. S. de Nazaré (Marituba)
  ficaram com confiança média: o buscador mistura horários que parecem de
  comunidades (missas a 30 minutos uma da outra) e, no Perpétuo Socorro, uma
  missa de terça às 5h30.
- O buscador não diz em que igreja é cada missa: tudo foi para a matriz.
- E-mail com nome de pessoa (São Francisco de Assis, Icoaraci) não entrou.
- Cristo Redentor: o endereço publicado diz Belém (CEP 66670) e o filtro de
  cidade do buscador diz Ananindeua; ficou Belém. São Paulo Apóstolo: o
  endereço diz Marituba e o filtro, Ananindeua; ficou Marituba.

## O que falta para o próximo estado desta pesquisa

- As 10 unidades sem horário (lista em `SEM-HORARIO-belem.txt`): no
  buscador elas aparecem com um "00:00" de domingo, isto é, sem missa
  cadastrada. Nenhum perfil delas foi citado pela arquidiocese; a rodada com
  busca na web precisa achar o Instagram de cada uma.
- Confissão e adoração de quase todas as paróquias (o buscador só tem missa).
  O "Mutirão de Confissões 2026" (post de 27/02/2026) é só da Quaresma.
- Decidir a categoria das 4 reitorias.
- Comunidades com bairro e endereço: só as da Basílica de Nazaré entraram
  como igreja; as outras listas (Ascensão, Menino Jesus, Santo Agostinho,
  Divino Espírito Santo, São Clemente, São José Esposo de Maria, Santa Teresa
  de Calcutá, Verdejantes, São Pio, Sagrado Coração) estão no `nao_cabe` da
  matriz, com o ano do post.
- Endereço da matriz sem rua: N. S. do Ó (Vila, Mosqueiro), N. S. da
  Conceição (Benfica), Perpétuo Socorro (Canaã), São Francisco das Ilhas
  (Cotijuba), Coração Eucarístico (Mangueirão), Santa Teresa de Calcutá
  (Conjunto Eduardo Angelim II).
