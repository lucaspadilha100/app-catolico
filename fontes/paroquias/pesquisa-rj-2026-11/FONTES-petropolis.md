# Diocese de Petrópolis (RJ): fontes da pesquisa de 13/11/2026

Sé em Petrópolis; Região Serrana (Petrópolis, Teresópolis, São José do Vale
do Rio Preto, Areal), parte da Baixada (Magé e Guapimirim) e os distritos de
Bemposta (Três Rios) e Inconfidência (Paraíba do Sul). Bispo: Dom Joel
Portella Amado (desde 31/01/2024). Cúria: Rua Monsenhor Bacelar, 590,
Valparaíso, Petrópolis, (24) 2231-5212 (catholic-hierarchy.org). Padroeiro
diocesano: São Pedro de Alcântara.

## Resumo

- **49 unidades pastorais** em `saida/petropolis.json`: 1 catedral (São Pedro
  de Alcântara) e 48 paróquias, nos 4 decanatos da diocese: São Pedro de
  Alcântara (15), Nossa Senhora do Amor Divino (12), Santa Teresa (11) e São
  José de Anchieta (11). Cidades: Petrópolis (22), Teresópolis (11), Magé (9),
  Guapimirim (2), São José do Vale do Rio Preto (2), Três Rios (1, Bemposta),
  Areal (1), Paraíba do Sul (1, Inconfidência).
- **34 com horário de missa**, todas com confiança alta: 33 da página da
  paróquia no site da diocese e 1 (Sagrado Coração de Jesus, Centro de
  Petrópolis) do site da própria paróquia, porque a página da diocese não
  traz horário.
- **15 sem horário** (confiança baixa): a página da diocese tem o título
  "Horário de Missa" vazio ou nem tem a seção. São: N. S. da Conceição
  (Bemposta), N. S. das Dores (Areal), N. S. de Fátima (Madame Machado),
  N. S. de Lourdes (Araras), Santa Rita de Cássia (Castrioto), São Sebastião
  (Contendas), N. S. da Conceição (Venda Nova/Nhunguaçu), N. S. do Bom Sucesso,
  Santa Rita de Cássia (Meudon), São Charbel (Pessegueiros), N. S. da Conceição
  (Raiz da Serra), N. S. da Conceição e Santo Aleixo, N. S. da Guia de
  Pacobaíba, Santa Terezinha do Menino Jesus (Parque Caçula) e São Sebastião
  (Piabetá).
- Confissão e adoração entraram onde a página publica dia e hora (Catedral,
  Rosário, Amor Divino, Aparecida de Piabetá e de Parada Modelo, Cascatinha,
  Itamarati, Mosela, Carangola, Nogueira, Itaipava, São José do Vale, Pedro do
  Rio, Santo Tomás, São Cristóvão, Água Quente, São Judas de Teresópolis,
  Suruí, Sagrado Coração). "Atendimento dos padres" sem a palavra confissão
  ficou no `nao_cabe`.
- Capelas e comunidades: 339, todas com o lugar dado pela página da paróquia;
  os horários das capelas foram ligados pelo nome ou pelo bairro que a página
  escreve ao lado do horário.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Lista das Paróquias" do site da diocese (49 links,
atualizada em 23/10/2025) e das quatro páginas de decanato, que somam as
mesmas 49 (15 + 12 + 11 + 11). Cada paróquia tem uma página própria, lida pela
API do WordPress (`/wp-json/wp/v2/pages/<id>`); a data de cada uma está no
campo `fontes` do JSON.

Conferência contra o GCatholic (atualizado em 09/11/2026, 51 igrejas, 48
paróquias na estatística de 2022): bate em 47 paróquias. Faltam no GCatholic
as duas mais novas: São Charbel do Caxambu (Petrópolis, criada em 2022) e São
José de Água Quente (Teresópolis, 2024; o endereço da página ainda diz
"quase-paróquia", o texto diz "elevada a Paróquia em 2024"). O GCatholic
chama São Charbel de Pessegueiros de "São José e São Charbel". Também lista o
Seminário N. S. do Amor Divino, o Santuário de São José de Anchieta (Poço
Bento, Magé), o Santuário do Bom Jesus de Matosinhos (Paraíba do Sul) e a
Capela de Adoração Perpétua Senhor dos Passos (São José do Vale do Rio
Preto), que não são unidades: os dois santuários entraram como igrejas das
suas paróquias (Piedade de Magé e Sant'Ana de Inconfidência), como a página
de cada paróquia os traz; a capela de adoração ficou de fora (nenhuma página
de paróquia a cita).

O Santuário de Nossa Senhora do Amor Divino (Corrêas) é a matriz da paróquia
de mesmo nome: entrou como `paroquia`, com a primeira igreja de tipo
`santuario`.

## Divergências anotadas

- **Santo Antônio de Paquequer (Teresópolis)**: a página da paróquia diz
  "Decanato São Pedro de Alcântara", mas a página do Decanato Santa Teresa a
  lista, e o decano de Santa Teresa usa o endereço dela. Seguimos o decanato.
- **São Sebastião (Piabetá)**: a página copia o cabeçalho da paróquia de São
  Sebastião do Indaiá (subtítulo "Indaiá - Petrópolis", decanato e ano errados);
  o endereço e os contatos são de Piabetá. Entrou no Decanato São José de
  Anchieta, como na página do decanato.
- **Sagrado Coração de Jesus (Barra do Imbuí)**: a página escreve "19n" no
  sábado da matriz; lido como 19h.
- **Amor Divino**: a página lista as missas presenciais e, à parte, as
  "transmitidas com participação presencial"; a do sábado diverge (19h30 na
  lista, 18h30 na transmissão). Ficou a lista; a diferença está no `nao_cabe`.
- **Santo Antônio (Nova Marília)**: o link de e-mail aponta para a paróquia de
  Cascatinha; o texto mostra paroquianovamarilia@diocesepetropolis.org.br, que
  foi o usado.
- **São Pedro (Teresópolis)**: o WhatsApp publicado tem DDD 22; copiado como
  está.
- **Raiz da Serra**: não há telefone da secretaria; os dois números publicados
  levam o nome de quem atende (assuntos pastorais e administrativos). Entrou o
  de assuntos pastorais, que é o contato que a paróquia publica.

## Páginas lidas (13/11/2026)

- https://diocesepetropolis.com.br/lista-das-paroquias/
- https://diocesepetropolis.com.br/decanato-sao-pedro-alcantara-2/
- https://diocesepetropolis.com.br/decanato-nossa-senhora-do-amor-divino-2/
- https://diocesepetropolis.com.br/decanato-santa-teresa-2/
- https://diocesepetropolis.com.br/decanato-sao-jose-de-anchieta/
- https://diocesepetropolis.com.br/decanos/
- Uma página por paróquia (49), no campo `fontes` de cada item. Exemplos:
  - https://diocesepetropolis.com.br/paroquia-sao-pedro-de-alcantara/ (Catedral)
  - https://diocesepetropolis.com.br/paroquia-nossa-senhora-da-piedade-mage/
    (21 capelas com horário, inclusive o Santuário de Anchieta)
  - https://diocesepetropolis.com.br/paroquia-santana-de-inconfidencia-sebollas-paraiba-do-sul/
    (Santuário de Matosinhos)
- https://paroquiadoquitandinha.com.br/ (confere com a página da diocese)
- https://paroquiadosagrado.com.br/atendimento/ (horários, confissões e
  Instagram do Sagrado Coração de Jesus, Centro de Petrópolis)
- santuariomatosinhos.org.br não abriu (erro de conexão).

## Instagram

Só os que aparecem nas páginas da diocese ou da paróquia: paroquiadoquitandinha,
aparecidapiabeta, paroquianossasenhoradorosario_ e paroquiadosagradopetropolis.
Um da busca: santaritadocastrioto (a bio traz "Paróquia Santa Rita de Cássia
do Castrioto" e o endereço). Nenhum perfil foi aberto por dentro.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/petr2.htm e
  https://gcatholic.org/churches/local/petr2 (09/11/2026)
- https://catholic-hierarchy.org/diocese/dpetr.html (endereço da cúria)

## O que falta para o próximo estado desta pesquisa

- Horários das 15 paróquias sem horário na página da diocese (lista acima).
  Buscas no Instagram (Araras, Madame Machado, Areal, Castrioto) não
  mostraram horário no trecho.
- As capelas da paróquia N. S. Aparecida de Piabetá só aparecem em fotos, sem
  lugar (Nossa Senhora da Paz, Nossa Senhora da Piedade, Nossa Senhora das
  Graças, Santana, São Pedro, São José, São Francisco de Assis, São Cristóvão);
  ficaram no `nao_cabe` da matriz.
- Capelas citadas sem lugar: Nossa Senhora de Guadalupe (Cascatinha), São
  Frei Galvão e Divino Espírito Santo (São Jorge, Independência), Nossa
  Senhora de Lourdes (Nogueira), Nossa Senhora de Fátima no Monte (Bom
  Sucesso); as de Itaipava aparecem só com nome e horário. As que têm horário
  entraram sem bairro; as outras estão na observação da paróquia.
- Capelas particulares da Posse (Albertos, Brejal, Fazenda Santa Matilde,
  Nilton Vieira) ficaram de fora.
- A Capela Sagrado Coração de Jesus do Quilombo, da paróquia de São José do
  Vale do Rio Preto, fica no município de Sapucaia, território da Diocese de
  Valença, segundo a própria página.
