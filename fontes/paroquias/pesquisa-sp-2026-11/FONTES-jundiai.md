# Diocese de Jundiaí (SP): fontes da pesquisa de 13/11/2026

Sé em Jundiaí; região de Jundiaí, Itu, Salto e o oeste da Grande São Paulo
(Santana de Parnaíba, Cajamar, Pirapora do Bom Jesus). Bispo: Dom Arnaldo
Carvalheiro Neto (desde 2022). Cúria: Rua Engenheiro Roberto Mange, 400,
Anhangabaú, Jundiaí. Padroeira diocesana: Nossa Senhora do Desterro. Site:
https://dj.org.br/ (o antigo diocesedejundiai.org.br redireciona para ele).

## Resumo

- **74 unidades pastorais** em `saida/jundiai.json`: 1 catedral, 70
  paróquias, 1 área pastoral missionária e 2 santuários que não são paróquia
  (Santuário Eucarístico Diocesano, em Jundiaí, e Santuário Nacional do
  Sagrado Coração de Jesus, em Itu). Cidades: Jundiaí (28), Itu (11), Várzea
  Paulista (7), Salto (6), Santana de Parnaíba (6), Campo Limpo Paulista (4),
  Cabreúva (3), Cajamar (3), Itupeva (2), Louveira (2), Pirapora do Bom Jesus
  (2).
- **74 com horário de missa** (63 com confiança alta, 11 média). O site da
  diocese tem uma página por paróquia com endereço, telefone, e-mail,
  secretaria, horários da matriz e, na maioria, a lista das comunidades com
  endereço e horários. A confiança ficou **média** nas 11 páginas que não
  mudam desde setembro ou outubro de 2024 (data de modificação dada pela API
  do site), e isso está na observação de cada uma.
- 369 igrejas (74 matrizes e 295 capelas e comunidades), 1.098 horários: 1.070
  de missa, 23 de confissão (5 paróquias publicam) e 5 de adoração.
- O campo `fontes.data` de cada unidade é a data da última modificação da
  página da paróquia no site (campo `modified` da API do WordPress), não a data
  da leitura (13/11/2026).
- 3 paróquias têm a matriz santuário (Santuário Diocesano Nossa Senhora
  Aparecida e Santuário Diocesano Santa Rita de Cássia, em Jundiaí, e
  Santuário Diocesano Senhor Bom Jesus, em Pirapora do Bom Jesus); entraram
  como `paroquia` com a primeira igreja de tipo `santuario`, como em Taubaté.
- Capelas e comunidades só com nome e lugar (bairro, fazenda, condomínio ou
  endereço). Comunidades sem lugar na página ficaram no `nao_cabe` da matriz
  (Santo Antônio e São Francisco de Assis, de Várzea Paulista; Nossa Senhora
  de Guadalupe, do Sagrado Coração de Louveira).
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Lista das unidades

A lista vem do tipo de conteúdo `paroquia` do site (API aberta:
https://dj.org.br/wp-json/wp/v2/paroquia?per_page=100), com 76 entradas, e da
página https://dj.org.br/paroquias/ (filtros por região pastoral, cidade e
santuário). Das 76, duas são páginas repetidas de santuários que também são
paróquia (Santuário Diocesano Nossa Senhora Aparecida e Santuário Diocesano
Senhor Bom Jesus têm página como santuário e como paróquia; ficou a de
paróquia, mais nova). Sobram 71 paróquias (a Catedral entre elas), 1 área e
2 santuários sem paróquia.

O total bate com a própria diocese: na instalação da Paróquia São Benedito
(Várzea Paulista, 11/05/2025) o site anunciou "Somos 71 paróquias"; a Santa
Luzia (Várzea Paulista, 03/12/2024) foi a 70ª. Depois disso, só a Área
Pastoral Missionária Nossa Senhora Aparecida (Pirapora do Bom Jesus,
17/01/2026), desmembrada do Santuário Senhor Bom Jesus.

Notícias do site usadas para o estado de cada unidade:
- https://dj.org.br/somos-71-paroquias-diocese-celebra-instalacao-da-paroquia-sao-benedito-em-varzea-paulista/ (13/05/2025)
- https://dj.org.br/fieis-celebram-instalacao-da-paroquia-santa-luzia/ (06/12/2024)
- https://dj.org.br/a-igreja-que-se-faz-proxima-dom-arnaldo-cria-sua-primeira-area-pastoral-missionaria/ (20/01/2026)
- https://dj.org.br/dom-arnaldo-celebra-a-instalacao-da-quase-paroquia-maria-de-nazare-em-cabreuva/ (13/02/2023)
- https://dj.org.br/instalacao-da-quase-paroquia-sao-vicente-de-paulo/ (31/03/2023)
- https://dj.org.br/a-quase-paroquia-santa-cruz-em-salto-ja-e-realidade/ (21/02/2021)
- https://dj.org.br/diocese-de-jundiai-anuncia-sua-nova-organizacao-pastoral/
  (10/02/2026: as 11 regiões pastorais viraram 5 foranias, São Marcos, São
  Lucas, São Mateus, São João Evangelista e São Paulo; as páginas de paróquia
  ainda mostram a região antiga)

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 70
igrejas, "66 parishes" na estatística de 2022): bate em tudo, com estas
diferenças.

- O GCatholic não lista **Maria de Nazaré** (Cabreúva), **São Vicente de
  Paulo** (Itupeva), **Santa Luzia** e **São Benedito** (Várzea Paulista) nem
  a Área Pastoral de Pirapora. Santa Luzia e São Benedito foram instaladas
  como paróquia em 2024 e 2025. Maria de Nazaré e São Vicente de Paulo foram
  instaladas como quase-paróquias em 2023; o site já as chama de paróquia
  (página, título e documentos de patrimônio de 2025) e as conta nas 71.
  Entraram como `paroquia`, com isso na observação.
- **Santa Cruz** (Salto) foi instalada como quase-paróquia em 2021; site e
  GCatholic a listam como paróquia.
- O GCatholic também lista o Seminário Nossa Senhora do Desterro, que não é
  unidade pastoral e ficou fora.
- Os dois santuários sem paróquia estão no GCatholic e no filtro "Santuários"
  do site. O Santuário Eucarístico Diocesano (Igreja Nossa Senhora do Rosário
  e São Benedito) aparece também como comunidade da Catedral, com os mesmos
  horários; o Santuário Nacional (Igreja do Bom Jesus, Itu) aparece também na
  lista da Paróquia da Candelária. Cada um entrou só como unidade própria, sem
  repetir na paróquia.

## Páginas do site da diocese (lidas em 13/11/2026)

- Uma página por unidade, no formato https://dj.org.br/paroquia/<nome>/; a URL
  de cada uma está no campo `fontes` do JSON. Exemplos:
  - https://dj.org.br/paroquia/paroquia-catedral-nossa-senhora-do-desterro/
  - https://dj.org.br/paroquia/paroquia-nossa-senhora-da-candelaria-itu/
    (matriz, convento do Carmo, dois mosteiros, um asilo e três igrejas do centro de Itu)
  - https://dj.org.br/paroquia/paroquia-sagrada-familia-e-santa-isabel/
    (13 comunidades com horário)
  - https://dj.org.br/paroquia/area-pastoral-missionaria-nossa-senhora-aparecida-pirapora-do-bom-jesus/
- As páginas têm dois formatos: a maioria traz os horários em texto corrido
  ("Domingo, 7h, 10h e 18h"); as mais novas usam uma tabela (dia, tipo,
  horário, local), em que o local diz se é a matriz ou qual comunidade.
- E-mails protegidos pelo Cloudflare foram decodificados do `data-cfemail`.

## Instagram

Só os perfis ligados nas próprias páginas da diocese (ícone ou texto); nenhum
perfil foi aberto. 53 unidades têm perfil. A Paróquia Nossa Senhora da Piedade
(Cabreúva) liga o perfil de outra paróquia por engano
(`paroquiafredericoozanam`); ficou o da Pascom dela,
`pascom_nossasenhoradapiedade`, que a mesma página traz. Maria de Nazaré e São
Vicente de Paulo ainda usam perfis com "quaseparoquia" no nome. A Catedral
tem o ícone do Instagram sem link e ficou sem perfil.

## Pontos que não couberam no formato (estão no `nao_cabe`)

- Missas mensais por dia do mês (dia 14 em São Camilo de Lellis, Itu; dia 22
  no Santuário Santa Rita de Cássia), missa "uma vez por mês" com data a
  confirmar (São Pedro Apóstolo, Jundiaí) e a missa no Cemitério do
  Montenegro às segundas.
- Celebrações da Palavra nas comunidades do Montenegro e as "celebrações/missas"
  das comunidades de Nossa Senhora do Rosário (Santana de Parnaíba), que a
  página não separa em missa e celebração.
- Horários publicados de forma contraditória: "Domingo, 19h30 (2ª quinta)" e
  "Domingo, 16h (2º Sábado)" (Santa Cruz, Salto); "Sábado, 8h e 18h (1º
  sábado do mês)" (São Sebastião, Itupeva); "3ª feira do mês" (Santo Antônio
  de Ponunduva, Cajamar).
- A terça-feira de São João Bosco (Jundiaí) aparece como "1930" e foi lida
  como 19h30 (está na observação).

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/jund0.htm e
  https://gcatholic.org/churches/local/jund0 (anuário, 09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Reconferir as 11 paróquias de confiança média (páginas paradas desde 2024),
  de preferência pelo site ou pela secretaria de cada uma.
- Endereço e horário das comunidades citadas sem lugar (Várzea Paulista e
  Louveira) e das que têm lugar mas não têm horário (as sete de N. S.
  Aparecida de Itu, várias de São Camilo de Lellis, Santa Edwiges de São João
  Batista de Itu, Rainha da Paz do Bom Pastor).
- Horários de confissão: só 5 paróquias publicam; as demais mandam falar com
  a secretaria.
- Confirmar se Maria de Nazaré e São Vicente de Paulo já foram elevadas a
  paróquia por decreto (o site as trata assim, sem notícia da elevação).
- Quando as páginas passarem a mostrar a forania em vez da região pastoral,
  registrar a forania de cada paróquia.
