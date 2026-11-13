# Diocese de Uruaçu (GO): fontes da pesquisa de 13/11/2026

Sé em Uruaçu; norte de Goiás (vale do Tocantins, Serra da Mesa). Bispo: Dom
Giovani Carlos Caldas Barroca. Cúria: Rua Leopoldo de Bulhões, 25, Qd. 19,
Lts. 5/7, Centro, Uruaçu, (62) 3357-1230, curia@diocesedeuruacu.com.br.
Catedral do Imaculado Coração de Maria, sede da Paróquia Santa Ana.

## Resumo

- **36 unidades** em `saida/uruacu.json`: 1 catedral (Paróquia Santa Ana,
  na Catedral Imaculado Coração de Maria), 34 paróquias e o Santuário
  Diocesano Nossa Senhora d'Abadia do Muquém (Niquelândia), que a diocese
  lista à parte, com reitor e capelas próprias. Duas paróquias têm a matriz
  santuário e entraram como `paroquia` com a primeira igreja de tipo
  `santuario`: N. S. da Penha (Guarinos) e Santuário São José (Niquelândia,
  antiga catedral).
- Cinco foranias: São Mateus (7), São Marcos (6), São Lucas (8), São João
  Evangelista (7) e São Paulo Apóstolo (7 paróquias e o Muquém). A forania
  está na observação de cada unidade.
- **8 com horário de missa**, todos da página da própria paróquia no site da
  diocese: Barro Alto, Campinaçu, Campinorte, Sagrada Família (Goianésia),
  N. S. Aparecida (Minaçu), Santa Isabel, Santa Tereza de Goiás e São
  Sebastião (Uruaçu). Sete com confiança alta (páginas atualizadas entre
  novembro de 2025 e junho de 2026); Santa Isabel ficou média (página de
  agosto de 2025). São Sebastião de Uruaçu é a única com horário de
  confissão; Campinaçu e Santa Tereza têm adoração.
- **28 sem horário** (`"horarios": []`, confiança baixa): a página da
  paróquia traz contatos e capelas, mas não traz missa. Em Santa Terezinha
  de Goiás, Hidrolina e Formoso o título "Horários de Missa e Atendimento"
  existe e a seção está vazia.
- **285 capelas e comunidades** com nome e lugar, todas tiradas das páginas
  das paróquias (capelas urbanas e rurais). Nas paróquias com horário, as
  capelas trazem o horário próprio; missas de meses pares ou ímpares
  ("1º sábado dos meses ímpares") ficaram no `nao_cabe` da capela.
  Capelas sem lugar na fonte e comunidades "não definido" ficaram no
  `nao_cabe` da matriz (Amaralina, Estrela do Norte, Guarinos, Itapaci,
  Campos Verdes, Minaçu N. S. das Graças, Trombas, Santa Tereza).
- Todo `id_banco` é null.

## Lista das unidades

A lista é a página "Paróquias" do site da diocese, com a ordenação por
cidade e por forania, batida com as 36 páginas individuais (uma por
paróquia e a do Muquém).

Conferência contra o GCatholic (atualizado em 09/11/2026: 35 paróquias,
58 igrejas): bate nas 35 paróquias. O GCatholic lista também capelas
(Goianésia, Minaçu, Niquelândia, Rialma, Uruaçu) e o Seminário São José,
que não são unidades. Divergências:

- Estrela do Norte: o GCatholic chama a igreja de N. S. do Perpétuo
  Socorro; a diocese dá a paróquia como N. S. Aparecida e lista Perpétuo
  Socorro como capela urbana. Seguimos a diocese.
- Catedral: o GCatholic separa "Catedral Imaculado Coração de Maria" e
  "Paróquia de Sant'Ana"; é a mesma unidade (a diocese: "Paróquia Santa Ana,
  Catedral").
- O Muquém aparece no GCatholic como paróquia e santuário; a diocese o põe
  como santuário diocesano. Entrou como `santuario`.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedeuruacu.com.br/paroquias/ (lista por cidade e forania)
- Uma página por paróquia em https://diocesedeuruacu.com.br/paroquias/<nome>/;
  a URL e a data da última alteração (pela API do WordPress) estão no campo
  `fontes` de cada item. Exemplos:
  - https://diocesedeuruacu.com.br/paroquias/paroquia-sao-sebastiao-uruacu/
    (missas, confissões e 7 capelas urbanas com horário)
  - https://diocesedeuruacu.com.br/paroquias/paroquia-nossa-senhora-aparecida-minacu/
    (matriz e 13 capelas com horário)
  - https://diocesedeuruacu.com.br/paroquias/santuario-diocesano-nossa-senhora-dabadia-do-muquem/
- Datas das páginas: https://diocesedeuruacu.com.br/wp-json/wp/v2/posts

## Instagram

Da página da diocese: paroquia.barroalto, pascomsraabadia (Campinaçu).
Achados pela busca (perfil com nome e cidade batendo, sem abrir por dentro):
catedraluruacu, pnsgminacu (Minaçu, N. S. das Graças),
paroquianossasenhoradabadianiq (Niquelândia). Nenhum trecho de busca trouxe
horário.

## Sites citados que não respondem

paroquiasantaritago.com.br (Santa Rita do Novo Destino), am15.com.br
(Muquém) e paroquiaesantuariosaojose.com.br (Santuário São José, citado
pelo GCatholic): o nome não resolve.

## O que falta para o próximo estado desta pesquisa

- Horário das 28 paróquias sem missa na página da diocese, sobretudo a
  Catedral, as três de Niquelândia, Goianésia (N. S. da Abadia, Fátima,
  Sagrado Coração), Itapaci, Rialma, Minaçu N. S. das Graças e o Muquém
  (fora da romaria de agosto). As buscas por Instagram e Facebook dessas
  paróquias acharam perfis, mas nenhum trecho com horário.
- Capelas sem lugar na fonte (listadas no `nao_cabe` das matrizes).
- O número (62) 9919-2040 de Rianápolis está publicado com 8 dígitos depois
  do DDD; ficou como está.
