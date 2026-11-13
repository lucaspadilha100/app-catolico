# Arquidiocese de Cuiabá (MT): fontes da pesquisa de 13/11/2026

Sé metropolitana em Cuiabá. Arcebispo: Dom Wellington de Queiroz Vieira
(nomeado em 14/10/2026; até a posse, administrador arquidiocesano Pe.
Deusdedit Monge de Almeida). Cúria: Praça do Seminário, 489, Dom Aquino,
Cuiabá, (65) 3321-3631. Padroeiro: Senhor Bom Jesus de Cuiabá. Território:
Cuiabá (com o Distrito da Guia), Várzea Grande, Acorizal, Barão de Melgaço,
Jangada, Nobres, Rosário Oeste e Santo Antônio do Leverger.

## Resumo

- **34 unidades pastorais** em `saida/cuiaba.json`: 1 catedral (Catedral
  Basílica Senhor Bom Jesus), 32 paróquias e 1 área pastoral (Santíssima
  Trindade, criada em 1º/08/2025). Bate com a contagem que a própria
  arquidiocese publica nas notícias de 2026: "33 paróquias e uma Área
  Pastoral" (posse de Dom Wellington, 14/10/2026; Finados, 29/10/2026).
- Cidades: Cuiabá (20, incluindo o Distrito da Guia), Várzea Grande (7),
  Santo Antônio do Leverger (2), e uma em Acorizal, Barão de Melgaço,
  Jangada, Nobres e Rosário Oeste.
- **31 com horário de missa** (28 alta, 3 média). Sem horário (confiança
  baixa, `horarios: []`): Nossa Senhora das Dores (Barão de Melgaço), Rural
  de Santa Cruz das Palmeiras (Agrovila das Palmeiras, Santo Antônio do
  Leverger) e a Área Pastoral Santíssima Trindade. As duas paróquias têm
  página vazia no site da arquidiocese; a área pastoral não tem página.
- Confiança média: N. S. da Guia do Distrito da Guia (página sem contatos;
  a notícia do retiro do clero de 2026 dá outro horário de semana), N. S. do
  Pantanal (sem contatos; nome da matriz só numa notícia) e Santuário da
  Medalha Milagrosa (a página só traz o domingo).
- Três paróquias são santuários (Santuário Eucarístico N. S. do Bom
  Despacho, Santuário Eucarístico São João Paulo II e Santuário N. S. da
  Medalha Milagrosa): entraram como `paroquia` com a primeira igreja de tipo
  `santuario`, como em Taubaté. Têm pároco e secretaria paroquial e estão
  entre as 33 paróquias do site.
- 162 igrejas no total: 128 capelas e comunidades com nome e lugar dados
  pela arquidiocese. As que a fonte cita sem bairro ficaram no `nao_cabe` da
  matriz (com os horários, quando a fonte os dá: Santa Edwiges e
  Universitária São José Operário).
- Todo `id_banco` é null.
- Foranias: a arquidiocese não publica foranias, setores nem vicariatos. A
  observação de cada unidade diz a "região" quando a programação de Corpus
  Christi 2026 ou a festa de Aparecida 2026 a nomeiam (Central, Morada da
  Serra, CPA, Morada do Ouro, Coxipó, Pascoal Ramos, Imperial, Várzea
  Grande, Região Metropolitana).
- Instagram: nenhum. O site da arquidiocese não publica perfis de paróquia,
  e a busca na web não devolve páginas do Instagram para estas paróquias.

## Lista das unidades e conferência

A lista vem do tipo de conteúdo `paroquia` do WordPress da arquidiocese
(API `wp-json/wp/v2/paroquia`, 33 itens) e da página "Horários de Missas",
que mostra os mesmos 33. A Área Pastoral Santíssima Trindade vem das
notícias de criação (24/07/2025 e 05/08/2025).

Conferência contra o GCatholic (atualizado em 09/11/2026; 33 igrejas,
estatística de 2022 com 31 paróquias):

- No GCatholic e no site: as 29 paróquias mais antigas.
- Só no site (posteriores ou não registradas no GCatholic): N. S. do
  Pantanal (Várzea Grande), Rural de Santa Cruz das Palmeiras, São Mateus
  Apóstolo e Evangelista (criada em 2024) e São Sebastião de Três Barras
  (criada em 2024), além da Área Pastoral Santíssima Trindade (2025).
- O GCatholic marca o Bom Despacho e o São João Paulo II só como santuário;
  o site os trata como paróquias.
- O GCatholic tem duas entradas "Nossa Senhora da Guia" em Cuiabá (uma em
  Coxipó e outra em Cuiabá): no site há uma só, a do Coxipó da Ponte. Lida
  como duplicata.
- Ficaram fora por não serem unidades: Santuário N. S. Auxiliadora (Centro
  de Cuiabá, salesiano), Santuário N. S. da Salette (Várzea Grande, entrou
  como igreja da Paróquia N. S. da Guia de Várzea Grande, cujo pároco e
  reitor são saletinos) e o Seminário Maior Jesus Bom Pastor.

## Páginas da arquidiocese (lidas em 13/11/2026)

- https://arquidiocesecuiaba.org.br/horarios-de-missas/ (os 33 quadros de
  missa)
- https://arquidiocesecuiaba.org.br/paroquias/ e a API
  https://arquidiocesecuiaba.org.br/wp-json/wp/v2/paroquia?per_page=100
- Uma página por paróquia em https://arquidiocesecuiaba.org.br/paroquia/<nome>/
  com telefone, e-mail (protegido pelo Cloudflare, decodificado),
  atendimento, confissões, endereço, comunidades e missas. As páginas foram
  modificadas entre junho e setembro de 2026.
- https://arquidiocesecuiaba.org.br/historia-da-arquidiocese/ (33 paróquias
  e os municípios)
- Notícias usadas para comunidades, lugares e conferência (todas no campo
  `fontes` de quem as usa):
  - 33 comunidades com N. S. Aparecida como padroeira (01/10/2026): a lista
    de comunidades por paróquia, com o lugar.
  - Missas de Finados (29/10/2026): capelas e comunidades por paróquia.
  - Festa de Aparecida (07/10/2026): matriz da Paróquia N. S. do Pantanal
    (Nossa Senhora de Guadalupe), comunidades de Barão de Melgaço, Santo
    Antônio do Leverger e Rosário-São Benedito, os 4 santuários.
  - Retiro do clero (23/03/2026): Igreja Senhor Bom Jesus (Guarita, N. S. do
    Pantanal), Igreja Imaculado Coração de Maria (Florais, Distrito da
    Guia), matriz da Guia de Várzea Grande = N. S. do Carmo.
  - Corpus Christi 2026 (03/06/2026): as regiões.
  - Criação da Área Pastoral Santíssima Trindade (24/07/2025 e 05/08/2025):
    as 12 comunidades com bairro.
- https://coracaoimaculado.no.comunidades.net/ (site da própria Paróquia
  Coração Imaculado de Maria: horários iguais aos da arquidiocese, adoração
  e o bairro de cada comunidade; a lista de 16 comunidades é anterior à
  criação da Paróquia São Sebastião de Três Barras em 2024, por isso só as 7
  que a arquidiocese hoje atribui a ela entraram).

## Decisões de leitura

- "Sexta 19h, 1ª do mês" (N. S. do Pantanal, Rosário e São Benedito,
  Jangada, Aparecida do Coxipó) virou missa de sexta com `semanas: [1]`. Em
  Jangada a página diz "Sexta-feira 19h" com a nota "1ª sexta às 19h": pode
  ser toda sexta; ficou só a primeira.
- Missas "todo dia 12", "todo dia 13" e "todo dia 21" foram para o
  `nao_cabe`.
- A Paróquia N. S. da Guia de Várzea Grande celebra na Igreja Matriz N. S.
  do Carmo (texto da própria página); a Igrejinha da Guia, no centro, entrou
  como capela.
- O nome da matriz da Paróquia N. S. do Pantanal (N. S. de Guadalupe) vem só
  da notícia de 07/10/2026; a notícia de 12/12/2024 diz que só há uma matriz
  de Guadalupe na arquidiocese (a da paróquia de mesmo nome, no Quilombo).
  Reconferir.
- Telefones: o primeiro número fixo publicado; os outros, na observação.
  Dois contatos ficaram fora por erro na fonte: o e-mail da São Sebastião
  de Várzea Grande (domínio "cuiabaarquidiosece") e um celular da N. S. das
  Graças com um dígito a mais.

## Pendências para o próximo estado

- Horários de N. S. das Dores (Barão de Melgaço), Rural de Santa Cruz das
  Palmeiras e da Área Pastoral Santíssima Trindade; contatos de N. S. de
  Guadalupe, N. S. do Pantanal e N. S. da Guia do Distrito da Guia.
- Endereço das matrizes de Acorizal, Barão de Melgaço, Distrito da Guia,
  Guadalupe, Pantanal e o bairro da São João Bosco.
- Santuário N. S. Auxiliadora (Centro de Cuiabá, salesiano, missas nas
  notícias): a fonte não diz a que paróquia pertence (provavelmente São
  Gonçalo ou São João Bosco, ambas salesianas). Não entrou.
- Comunidades citadas sem lugar (estão no `nao_cabe` das matrizes) e as 21
  comunidades rurais de Jangada, das quais a fonte nomeia 6.
- Instagram de cada paróquia: não há fonte oficial que os liste.

## Circunscrições de Mato Grosso (GCatholic, 13/11/2026)

https://gcatholic.org/dioceses/diocese/cuia0.htm: a Província de Cuiabá é a
arquidiocese mais 8 sufragâneas, todas em Mato Grosso: Barra do Garças,
Diamantino, Juína, Primavera do Leste-Paranatinga, Rondonópolis-Guiratinga,
São Luiz de Cáceres, Sinop e a Prelazia de São Félix. Não há outra
circunscrição latina com sede no estado. Ficam de fora só as de alcance
nacional (Ordinariado Militar e as eparquias e ordinariato de rito
oriental), que não são divisões territoriais do estado.
