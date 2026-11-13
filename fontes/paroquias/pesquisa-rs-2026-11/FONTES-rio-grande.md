# Diocese de Rio Grande (RS): fontes da pesquisa de 13/11/2026

Sé em Rio Grande; território: Rio Grande, São José do Norte, Tavares,
Mostardas, Santa Vitória do Palmar e Chuí. Sufragânea de Pelotas. Bispo: Dom
Jorge Pierozan (desde 2024). Cúria: Rua João Alfredo, 532, Centro, Caixa
Postal 108, 96200-970, Rio Grande, (53) 3231-4066,
diocese.riogrande@gmail.com. Padroeiro: São Pedro.

## Resumo

- **17 unidades** em `saida/rio-grande.json`: 1 catedral, 14 paróquias e 2
  áreas pastorais ("Rede de Comunidades Nossa Senhora Medianeira", que a
  diocese chama de Área de Administração Pastoral, e "Rede de Comunidades São
  Lucas", com administrador). Setores da diocese: Centro (4), BR (3), Norte
  (3), Sul (1), Cidade Nova (2), Junção (2), Porto (2).
- **16 com horário**, todas com confiança alta: a página de cada paróquia no
  site da diocese traz endereço, contatos, missas da matriz e, quase sempre,
  as capelas com lugar e horário (inclusive as missas mensais: "2º sábado",
  "4ª quinta-feira"). As páginas não têm data, mas o clero citado é o atual
  (padres ordenados em 2024 e 2025 já aparecem como administradores e
  párocos) e o site publica notícias até 08/11/2026.
- **1 sem horário**: Rede de Comunidades São Lucas (a página só traz contato
  e "9 comunidades", sem nomes).
- Paróquias com matriz santuário: N. Sra. de Fátima (Santuário N. Sra. do
  Rosário de Fátima), entrou como `paroquia` com a primeira igreja de tipo
  `santuario`.
- Todo `id_banco` é null.

## Lista das unidades

Fonte: o menu "Paróquias" do site da diocese, por setor, com uma página por
unidade (https://www.diocesedoriogrande.com.br/area/<n>/<nome>), e a página
do clero (https://www.diocesedoriogrande.com.br/integrantes/3/CleroDiocesanoeReligioso).
As URLs de cada unidade estão no campo `fontes` do JSON. Páginas lidas em
13/11/2026 (o site é em latin-1).

Itens do menu que NÃO viraram unidade:

- **Santíssima Trindade** (area/19): página vazia. A página da Paróquia São
  Jorge diz que em 2020 ela "absorve todas as comunidades da Rede de
  Comunidades Santíssima Trindade"; a Comunidade Santíssima Trindade (bairro
  Trevo) entrou como comunidade da São Jorge.
- **Pastoral do Chuí** (area/22): página vazia. A Capela Santa Terezinha do
  Chuí aparece na página da Paróquia Santa Vitória e entrou nela.
- **Capelania do V Distrito Naval** (Capelania do Comando do V Distrito Naval:
  Nossa Senhora dos Navegantes, Rua Marechal Andreia, 159, Vila Militar):
  capelania militar, sem horário publicado; ficou de fora.

Conferência contra o GCatholic (https://gcatholic.org/churches/local/riog1,
09/11/2026; estatística: 16 paróquias, 3 missões). O GCatholic marca como
paróquia: Mostardas, Auxiliadora, Penha, Carmo, Fátima, Bom Fim, as duas
Sagrada Família, Santa Teresa, Santíssima Trindade, São Jorge, São José
Operário, São Judas, Santa Vitória, São José do Norte e Tavares; e sem marca:
Catedral, Medianeira e o Mosteiro São José. Divergências:

- **Nossa Senhora Auxiliadora (Rio Grande)**: o GCatholic a dá como paróquia
  (a cerca de 1 km do centro), mas o site da diocese não tem página nem menção
  a ela. Ficou fora; pendência.
- **Santíssima Trindade**: absorvida pela São Jorge em 2020 (ver acima).
- **Rede São Lucas** não está no GCatholic; está no site da diocese e na lista
  do clero (administrador).
- O Mosteiro São José (carmelitas) entrou como comunidade da Paróquia do
  Carmo, como a página do Carmo o lista.

## Detalhes de leitura

- Catedral: "durante os meses de janeiro e fevereiro, domingo 9h e 19h" foi
  para o `nao_cabe`.
- Sagrada Família do Cassino: a página traz dois regimes. Gravado o "inverno"
  (da quinta após as Cinzas até 16/12), com a observação "Fora do verão"; o de
  verão e as missas dos dias 12 e 18 ficaram no `nao_cabe`. As 5 capelas têm
  "Missa/Celebração: domingo às 9h", sem dizer qual; ficaram sem horário de
  missa, com o texto no `nao_cabe`.
- São José do Norte, Mostardas e Santa Vitória: missas mensais das capelas com
  `semanas`; "última quinta", "4ª sexta-feira" sem hora e missas só de verão
  ficaram no `nao_cabe`. As celebrações da Palavra (sem padre) não entraram.
- Penha: as 16 capelas vêm de um quadro "Horários das missas" da própria
  página; a notícia de 24/10/2026 confirma a capela da Ilha da Torotama.
- Santa Teresa: confissões "todas as tardes, exceto quarta" ficaram no
  `nao_cabe`; a página diz 4 comunidades e lista 3.
- São Judas Tadeu: a Comunidade N. Sra. Aparecida não tem lugar na fonte; o
  horário dela ficou no `nao_cabe` da matriz.
- Instagram anotado só quando a página da diocese o dá: CatedralPedro
  (gravado em minúsculas), paroquiasaojosesjn, san_toantonio2022,
  paroquiasaojudastadeurg. Facebook citados ficaram na observação.
- O site da Catedral (www.catedraldesaopedro.com.br) respondeu erro 520.

## O que falta para o próximo estado

- Rede São Lucas: nomes, lugares e horários das 9 comunidades.
- Paróquia/igreja N. Sra. Auxiliadora: conferir com a diocese se existe.
- Capelas citadas sem lugar: Santa Inês (Tavares) e N. Sra. Aparecida (São
  Judas Tadeu); a capela N. Sra. de Fátima (Capivaras, São José do Norte) sem
  horário.
- Confissões só publicadas em Fátima, Santa Teresa e Capela N. Sra. da Paz.
