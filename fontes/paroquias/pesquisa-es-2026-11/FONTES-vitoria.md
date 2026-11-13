# Arquidiocese de Vitória (ES): fontes da pesquisa de 13/11/2026

Sé em Vitória; Grande Vitória, litoral sul e região serrana central do
Espírito Santo. Arcebispo: Dom Ângelo Ademir Mezzari, RCJ (desde 30/12/2024).
Cúria: Rua Soldado Abílio Santos, 47, Centro, Vitória, CEP 29015-620.

## Resumo

- **92 unidades pastorais** em `saida/vitoria.json`: 1 catedral (Nossa Senhora
  da Vitória), 1 basílica (Santuário Basílica de Santo Antônio), 2 santuários
  (Convento da Penha, em Vila Velha, e Santuário do Rosário de Fátima, na
  Serra) e 88 paróquias, em 15 municípios (Vila Velha 20, Serra 18, Cariacica
  15, Vitória 14, Guarapari 8, Viana 3, Domingos Martins 3, Anchieta 2,
  Marechal Floriano 2, Afonso Cláudio 2, e 1 em Alfredo Chaves, Fundão, Santa
  Leopoldina, Santa Maria de Jetibá e Brejetuba).
- **9 com horário** (confiança alta): Basílica de Santo Antônio, Convento da
  Penha, N. S. do Rosário (Vila Velha), Bom Pastor (Vila Velha), Bom Pastor
  (Serra, com 5 comunidades), Santíssima Trindade (Cariacica), N. S. da
  Assunção (Anchieta, o Santuário Nacional de São José de Anchieta), N. S. de
  Lourdes (Pontões, Afonso Cláudio, com 3 capelas) e São Camilo de Lellis
  (Vitória, só confissões).
- **83 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. Quase todas têm
  telefone, e-mail e endereço da página oficial da arquidiocese.
- Todo `id_banco` é null: o banco ainda não tem nada do Espírito Santo.
- Nenhuma unidade fora do ES (sem campo `uf`).

## Lista das unidades

A lista vem do site oficial da arquidiocese (www.aves.org.br), que tem um
tipo de post `paroquias` aberto na API REST
(`/wp-json/wp/v2/paroquias?per_page=100`): 95 itens em 13/11/2026. Três
ficaram fora do JSON:

- "Centro de treinamento Dom João Batista" (instituição, não unidade);
- "Área Pastoral Vitória" e "Área Pastoral Cariacica Viana": na Arquidiocese
  de Vitória, área pastoral é REGIÃO que agrupa paróquias (a de
  Cariacica-Viana reúne 18, diz o próprio site), não unidade com matriz,
  diferente do uso no RN e na PB.

Cada item tem página própria com pároco, fundação, telefone, e-mail e
endereço; 8 páginas usam um leiaute novo sem esses campos (as duas áreas, Bom
Pastor da Serra, N. S. da Assunção, N. S. da Conceição Aparecida, Santíssima
Trindade, São Francisco de Assis de Porto de Santana e São Pedro Apóstolo), e
o que faltou saiu dos posts da própria página (endereço da matriz, horários,
atendimento) ou ficou vazio.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 96
igrejas mais a capela militar): bate com a lista. O anuário NÃO traz São
Vicente de Paulo (Aribiri, Vila Velha), Divino Espírito Santo (Santa
Leopoldina) e N. S. de Lourdes (Pontões); traz a mais igrejas que não são
unidades pastorais (dois seminários, a antiga matriz de Guarapari e a igreja
histórica de N. S. da Ajuda em Araçatiba). Divergência anotada: para a
paróquia São Francisco Xavier (Iriri, Anchieta) o anuário dá a igreja como
"Nossa Senhora das Graças"; ficou a observação.

Matrizes que são santuário (tipo `santuario` na primeira igreja): Convento da
Penha, Santuário do Rosário de Fátima, Santuário Bom Pastor (Campo Grande,
Cariacica, "Parish, Shrine" no anuário), Santuário Nacional de São José de
Anchieta (matriz da paróquia N. S. da Assunção) e o Santuário do Divino
Espírito Santo (segunda igreja da paróquia do Rosário, Vila Velha).

## Páginas do site da arquidiocese (lidas em 13/11/2026)

- https://www.aves.org.br/paroquias/ e as 95 páginas de paróquia
  (contatos e endereços; a API REST entrega a lista completa)
- Posts de horários e atendimento (a data é a de publicação):
  - https://www.aves.org.br/horarios-de-missa-2/ (N. S. da Assunção,
    Anchieta, 31/05/2021) e /atendimento-na-paroquia-2/ (confissões, idem)
  - https://www.aves.org.br/horarios-de-missas-santissima-trindade/
    (Santíssima Trindade, Cariacica, 03/02/2022); /horarios-fixos-de-missa/
    traz a tabela completa por semana do mês, que não coube no formato
  - https://www.aves.org.br/matriz-bom-pastor/ (Bom Pastor, Serra,
    03/01/2023), /atendimento-2/ (contatos, 24/10/2022) e os posts
    /ceb-nossa-senhora-do-rosario/, /ceb-nossa-senhora-da-penha/,
    /ceb-nossa-senhora-da-vitoria/, /ceb-sagrada-familia/ e
    /ceb-nossa-senhora-aparecida/ (as comunidades, 2022 e 2023)
  - https://www.aves.org.br/atendimento-na-paroquia-4/ (São Camilo de
    Lellis, confissões, 08/06/2021)
  - https://www.aves.org.br/atendimento-na-paroquia-3/ (N. S. da Conceição
    Aparecida, telefones, 02/06/2021)
- Posts de horários VAZIOS (só imagem, nada aproveitado):
  /horarios-de-missas/ (Aparecida) e /horarios-de-missa-3/ (N. S. das
  Graças, Jucutuquara)

## Sites das próprias paróquias (lidos em 13/11/2026)

- https://basilicadesantoantonio.com.br/missas/ e /confissoes/ (Basílica)
- https://conventodapenha.org.br/horarios-de-missas/ (Convento da Penha)
- https://paroquiadorosario.com/horarios-de-missa/ (N. S. do Rosário, Vila
  Velha: santuário, matriz e 8 comunidades; as comunidades entraram só na
  observação porque a página não dá o endereço de cada uma)
- https://bompastorpraia.com.br/ (Bom Pastor, Praia da Costa)
- https://paroquiavilapontoes.webnode.page/copia-de-missas/ e
  /copia-de-horarios/ (N. S. de Lourdes, Pontões, com as 3 capelas)
- Sem quadro fixo: https://nspsocorro.com.br/ (calendário dinâmico),
  https://portadeassis.com.br/ (agenda mensal dinâmica; nomeia as
  comunidades Sagrado Coração de Jesus, São Pedro Pescador e Santa Clara de
  Assis, sem endereço), https://www.paroquiasaofranciscojp.com/missas
  (Wix, conteúdo não carrega sem navegador)
- Fora do ar na pesquisa: pspj.com.br (São Pedro, Jacaraípe),
  psaopedro.org.br (São Pedro, Praia do Suá), pspaserra.com.br (São Paulo
  Apóstolo), santuariobompastor.com.br (Bom Pastor, Campo Grande),
  paroquiasaotiagomaior.com.br (São Tiago Maior)

## Instagram

Quase todos os usuários vêm do campo Instagram da página de cada paróquia no
site da arquidiocese (não foi preciso abrir o Instagram): epifania, Conceição
da Serra, Esperança, Penha de Jardim Limoeiro, Saúde, Santa Luzia de
Jacaraípe, Santo André, Santuário de Fátima, São Benedito, São Francisco de
Laranjeiras, São José de Fundão, Calasanz, São José Operário, São Paulo
Apóstolo, São Pedro de Jacaraípe, Sagrados Corações, Sagrada Família de
Guarapari e São João Batista. Só `catedralvix` veio de trecho de notícia (A
Tribuna) mostrado pela busca. O site escreve "@pnsesperança_serra"; gravado
sem o cedilha, que o Instagram não aceita.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/vito0 (anuário, 09/11/2026)
- Notícias locais (A Tribuna, A Gazeta, Folha Vitória) só para contexto:
  bairro da paróquia N. S. da Conceição Aparecida (Cobilândia), matriz e
  comunidades da paróquia do Rosário, Instagram da catedral. Nenhum horário
  saiu de notícia.

## O que falta para o próximo estado desta pesquisa

- Horário das 83 unidades sem fonte: o caminho mais provável são os perfis
  das paróquias no Instagram (18 usuários já anotados) e os 5 sites fora do
  ar.
- Os horários vindos do site da arquidiocese são de posts de 2021 a 2023
  (Assunção, Trindade, Bom Pastor da Serra, São Camilo): valem como
  publicação oficial, mas merecem conferência; os dos sites próprios
  (Basílica, Convento, Rosário, Bom Pastor da Praia da Costa, Pontões) foram
  lidos ao vivo em 13/11/2026.
- A catedral não publica horário em página própria nem na arquidiocese, só
  em notícias; ficou sem.
- Endereço falta em 4 unidades (Assunção, São Pedro Apóstolo, Santíssima
  Trindade matriz, São Francisco de Porto de Santana) e telefone em 3.
- O e-mail de São João XXIII aparece no site como "joão23.pba@gmail.com";
  gravado sem o acento, que o Gmail não aceita.
- A paróquia de Pontões é dedicada a N. S. de Lourdes, mas o site dela chama
  a igreja da vila de "N. Sra da Penha"; ficou como está, com observação.
