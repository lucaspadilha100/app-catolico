# Diocese de Tianguá (CE): fontes da pesquisa de 13/11/2026

Sé em Tianguá; serra da Ibiapaba e litoral oeste do Ceará. Bispo: Dom
Francisco Edimilson Neves Ferreira. Cúria: Av. Pref. Jacques Nunes, 1739,
Bairro Seminário, Tianguá, WhatsApp (88) 3671-1180,
ascomdiocesedetiangua@gmail.com. Instagram da diocese: diocesedetiangua.

## Resumo

- **25 unidades pastorais** em `saida/tiangua.json`: 1 catedral, 21 paróquias
  e 3 áreas missionárias, em 3 regiões episcopais (Centro, Norte e Sul).
- **21 com horário** (confiança alta), todas com fonte no site da diocese,
  lido em 13/11/2026: a página "Horários de missas" traz quase todas num
  lugar só, e cada página de paróquia repete os mesmos horários com endereço,
  telefone e e-mail da secretaria.
- **4 sem horário** (confiança baixa): Paróquia Nossa Senhora da Assunção
  (Viçosa do Ceará), Paróquia da Imaculada Conceição (Inhuçu, São Benedito),
  Área Missionária Nossa Senhora das Graças (Alto Lindo, Ibiapina) e Área
  Missionária Santa Terezinha (Granja). A regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação.
- Todo `id_banco` é null: o banco não tem nada do Ceará.
- Nenhuma unidade fora do Ceará.

## Lista das unidades

A lista vem das três páginas de região episcopal do site da diocese
(10 no Centro, 8 no Norte, 7 no Sul). Duas paróquias se chamam São Pedro
(Ibiapina e Tianguá) e duas Santa Luzia (Oiticicas, em Viçosa do Ceará, e
Timonha, distrito de Granja); a cidade distingue.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 29
igrejas): as 25 unidades batem, menos a Área Missionária Santa Terezinha
(Granja, criada em 2017), que o anuário não traz. As outras 4 entradas do
anuário não são unidades pastorais e ficaram fora do JSON ou como igreja de
paróquia: o Santuário de Nossa Senhora de Lourdes (a gruta de Chaval, igreja
da paróquia de Chaval no JSON), o Santuário de Nossa Senhora de Fátima (São
Benedito, com reitor próprio), o Seminário São José e o Santuário Eucarístico
Diocesano (os dois em Tianguá).

O anuário marca como santuário diocesano a matriz da Paróquia Nossa Senhora
do Livramento (Parazinho, Granja): no JSON ela entrou com tipo `santuario`.

## Páginas do site da diocese (lidas em 13/11/2026)

Site em Drupal: https://diocesedetiangua.org/

- https://diocesedetiangua.org/horarios-de-missas (horários de quase todas)
- https://diocesedetiangua.org/regiao-episcopal-centro
- https://diocesedetiangua.org/regiao-episcopal-norte
- https://diocesedetiangua.org/regiao-episcopal-sul
- 25 páginas de paróquia em https://diocesedetiangua.org/paroquia/... (cada
  uma com pároco, endereço, contatos, horários, setores e histórico; as URLs
  exatas estão nas fontes de cada unidade do JSON)

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/tian0 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dtian.html

## Pendências

- Horário das 4 unidades sem fonte; o caminho provável são perfis locais no
  Instagram, que a busca não indexou (a busca não trouxe perfil de paróquia
  nenhuma desta diocese; só o da diocese, diocesedetiangua).
- O e-mail da Paróquia Nossa Senhora das Dores (Croatá) está truncado no site
  ("paroquianossa@1602gmail.com") e ficou de fora do JSON.
- As páginas das paróquias listam os setores rurais com marca "(+)" para
  capela, mas misturam nome de padroeiro e nome de localidade sem dizer qual
  é o nome da capela: só entraram no JSON as capelas e comunidades que a
  fonte nomeia com clareza (as que têm horário publicado, as três comunidades
  de Timonha e a gruta de Chaval).
- A página da Paróquia São Pedro de Ibiapina não publica missa de domingo na
  matriz (só na Igreja de São Francisco, no 4º domingo); ficou como está.
- Carnaubal publica "missa todo dia 13 e 18 e na 3ª terça do mês" sem hora:
  ficou em `nao_cabe`.
