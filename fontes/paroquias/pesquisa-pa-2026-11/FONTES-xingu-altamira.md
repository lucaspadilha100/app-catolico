# Diocese de Xingu-Altamira (PA): fontes da pesquisa de 13/11/2026

Nome atual confirmado: **Diocese de Xingu-Altamira**. Era a Prelazia do
Xingu (1934); em 06/11/2019 (bula Tamquam fidei nomen) virou diocese, cedeu
território à Diocese de Marabá e à nova Prelazia do Alto Xingu-Tucumã e
passou a sufragânea de Santarém. Bispo: Dom João Muniz Alves, OFM. Sé:
Catedral Sagrado Coração de Jesus, Altamira. Padroeira: Nossa Senhora de
Nazaré. Cúria: Av. João Pessoa, 1212, Centro, Altamira, (93) 3515-1761,
diocesexingualtamira@outlook.com. Municípios: Altamira, Anapu, Brasil Novo,
Gurupá, Medicilândia, Placas, Porto de Moz, Senador José Porfírio, Uruará e
Vitória do Xingu.

## Resumo

- **13 unidades** em `saida/xingu-altamira.json`: 1 catedral, 11 paróquias
  e 1 área pastoral (Sant'Ana, Altamira). Cidades: Altamira (4) e uma em
  cada: Anapu, Brasil Novo, Gurupá, Medicilândia, Placas, Porto de Moz,
  Senador José Porfírio, Uruará, Vitória do Xingu.
- **4 com horário** (confiança média), todos da página "Horários de Missa" e
  das páginas de paróquia do site da diocese, sem data: N. S. Imaculada
  Conceição de Altamira (domingo 8h e 19h), Imaculada Mãe dos Pobres de
  Medicilândia (domingo 19h30), São Braz de Porto de Moz (terça e domingo
  19h30) e N. S. Auxílio dos Cristãos de Vitória do Xingu (domingo 19h).
  Só a matriz; nenhuma página dá dias de semana completos nem confissão.
- Placas: a página publica a missa de domingo como "80h00"; ficou no
  `nao_cabe`, fora da lista de horários.
- 9 sem horário, com confiança baixa: lista em
  `SEM-HORARIO-xingu-altamira.txt`.
- Só a matriz de cada unidade (o site não lista comunidades). Todo
  `id_banco` é null.

## Atenção: o site da diocese está parado em 2020

https://xingualtamira.com.br/ (o endereço vem da Wikipédia; o GCatholic e o
Catholic-Hierarchy não citam site) foi feito ainda no tempo da prelazia:
as últimas notícias são de julho de 2020, a "história" da área pastoral é
texto de preenchimento (lorem ipsum) e várias páginas de paróquia não têm
endereço nem contato. Por isso os horários ficaram com confiança média e
todas as observações avisam que o site é de 2020.

## Lista das unidades

Fonte: https://xingualtamira.com.br/paroquias (13 itens, páginas
`/paroquias/63` a `/paroquias/75`; os outros números não existem) e
https://xingualtamira.com.br/area_pastoral. A cidade de cada paróquia sem
endereço veio da página do pároco no próprio site ("Pároco - Paróquia Santa
Luzia - Anapu" etc., páginas `/padres/<n>` e `/freis/<n>`).

Conferência:

- GCatholic (https://gcatholic.org/churches/local/xing0, 09/11/2026): 12
  igrejas, todas paróquias, nas mesmas 10 cidades. Diferenças: em Anapu o
  GCatholic tem N. S. de Fátima, a diocese tem Santa Luzia (seguida a
  diocese); em Gurupá o GCatholic tem a igreja de São Benedito com a nota
  "Paróquia Santo Antônio". O total "30 parishes, 6 missions" da página da
  diocese no GCatholic não bate com nada e parece erro.
- Catholic-Hierarchy (https://www.catholic-hierarchy.org/diocese/dxing.html):
  12 paróquias em 2022 (Anuário 2023). Bate com as 12 paróquias do site.

## Pendências (fora do JSON)

- **Área Pastoral Jesus Bom Pastor**: está no menu "Área Pastoral" do site
  (https://xingualtamira.com.br/area_pastoral/1/historia), mas a página só
  tem texto de preenchimento, sem cidade nem endereço.
- A Wikipédia (https://pt.wikipedia.org/wiki/Diocese_de_Xingu-Altamira)
  lista, além das 12 paróquias, a **Paróquia Nossa Senhora Aparecida da
  Transamazônica** (Uruará e Medicilândia) e as **áreas pastorais Assurini**
  (Senador José Porfírio e Altamira), **Padre Frederico Tschol**
  (Altamira), **Sant'Ana** (Altamira, a que entrou) e **São Domingos de
  Gusmão** (Altamira). Nenhuma fonte oficial confirma as quatro que faltam;
  ficaram fora até haver fonte.

## Páginas lidas (13/11/2026)

- https://xingualtamira.com.br/horariosdemissa
- https://xingualtamira.com.br/paroquias e as 13 páginas de paróquia
  (URLs no campo `fontes` de cada unidade)
- https://xingualtamira.com.br/padres, /freis, /diaconos e as páginas de
  cada padre (cidade e paróquia de cada um)
- https://xingualtamira.com.br/noticias (só 8 notícias, de 2018 a 2020)

## Perfis citados pela fonte oficial

Só o Facebook da Paróquia N. S. Imaculada Conceição (Altamira):
facebook.com/ParoquiaImaculadaConceicaoAltamiraPa. O site cita o Facebook
antigo da Prelazia do Xingu e um canal do YouTube da diocese.

## O que falta para o próximo estado

- Horários de missa de 9 unidades e os dias de semana das 4 que só têm o
  domingo.
- Endereço e contato da Catedral, da Perpétuo Socorro (Altamira), Santa
  Luzia (Anapu), Corpo e Sangue de Cristo (Brasil Novo), Santo Antônio
  (Gurupá), São Francisco Xavier (Senador José Porfírio) e N. S. de Fátima
  (Uruará).
- Confirmar as áreas pastorais e a paróquia que só a Wikipédia cita.
- Achar um site ou anuário atual da diocese (o de 2020 é o único que
  respondeu).
