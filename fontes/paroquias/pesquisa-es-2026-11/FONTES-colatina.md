# Diocese de Colatina (ES): fontes da pesquisa de 13/11/2026

Sé em Colatina; noroeste e norte do Espírito Santo, 17 municípios. Bispo: Dom
Lauro Sérgio Versiani Barbosa (desde 2021). Cúria: Rua Santa Maria, 350,
Centro, Colatina, (27) 2102-5024, curia@diocesedecolatina.org.br. Padroeira
diocesana: Nossa Senhora da Saúde (21 de novembro).

## Resumo

- **32 unidades pastorais** em `saida/colatina.json`: 1 catedral, 30 paróquias
  e 1 santuário diocesano (Nossa Senhora da Saúde, Ibiraçu, com reitor e
  missas próprias). A diocese não tem quase-paróquia nem área pastoral como
  unidade: são 31 paróquias (a catedral entre elas), como o noticiário local
  também diz ("31 paróquias e 17 municípios").
- **24 com horário** (confiança alta), todas com fonte na página da própria
  unidade no site da diocese, lida em 13/11/2026.
- **8 sem horário** (confiança baixa), com o porquê na observação: Bom Pastor
  (Linhares), Imaculada Conceição (Coqueiral, Aracruz), Nossa Senhora da
  Glória (Colatina), Nossa Senhora da Penha (Colatina), Santa Luzia (Pancas),
  São Domingos (São Domingos do Norte), São Marcos (Ibiraçu) e São Paulo
  Apóstolo (Bebedouro, Linhares). As páginas delas no site da diocese trazem
  endereço e contato, mas não horários.
- **119 igrejas** no total: as 32 matrizes e 87 comunidades, incluídas só
  quando a página da paróquia as lista com nome e lugar (São José de João
  Neiva com 28, São João Paulo II, Santa Rita de Cássia, Santíssima Trindade,
  Nossa Senhora Auxiliadora de Itarana, Nossa Senhora da Penha e Santa
  Teresinha de Aracruz). Comunidade citada sem lugar ficou fora, contada na
  observação da unidade.
- Todo `id_banco` é null: o banco ainda não tem nada do Espírito Santo.
  Nenhuma unidade fora do ES (sem campo `uf`).

## Particularidades anotadas

- Matriz com nome diferente do da paróquia (a própria página diz): Sagrada
  Família (Colatina) tem como matriz a Igreja de São Vicente de Paulo;
  Santíssima Trindade (Linhares), a Matriz Sagrado Coração de Jesus (Novo
  Horizonte); São João Paulo II (Linhares), a Matriz São José; Santa
  Teresinha (Aracruz), a Matriz São José Operário; Nossa Senhora Auxiliadora
  (Itarana) chama a própria matriz de São Sebastião na lista de comunidades.
- Instagram omitido em duas unidades por dado duvidoso na fonte: Santa Rita
  de Cássia (a página grafa o usuário com acento) e São José de João Neiva
  (a página traz "Mitra.colatinap.sao", que não parece um usuário real).
- O Mosteiro Santíssima Trindade (clarissas, Colatina) tem página no site,
  mas não é unidade pastoral: ficou fora do JSON.

## Páginas do site da diocese (lidas em 13/11/2026)

Site oficial: https://diocesedecolatina.org.br/ (WordPress). A lista veio de
https://diocesedecolatina.org.br/paroquias/ (31 unidades + santuário), e cada
unidade tem página própria com história, endereço, contatos e, em 23 delas,
horários. Páginas usadas (uma por unidade):

- /sagrado-coracao-de-jesus-catedral/ (Catedral)
- /bom-pastor-2/ · /coracao-eucaristico-de-jesus/ · /cristo-rei/
- /divino-espirito-santo/ · /imaculada-conceicao/ · /imaculado-coracao-de-maria/
- /nossa-senhora-auxiliadora-2/ (Marilândia) · /pe-devaldo-lorencutti-3/ (Itarana)
- /nossa-senhora-da-conceicao/ · /nossa-senhora-da-gloria/
- /paroquia-nossa-senhora-da-penha/ · /nossa-senhora-do-rosario-de-fatima/
- /nossa-senhora-medianeira-de-todas-as-gracas/ · /sagrada-familia-4-2/
- /santa-clara-de-assis/ · /santa-luzia-3/ · /santa-teresa/
- /santa-teresinha-do-menino-jesus/ · /santissima-trindade-3/
- /pe-devaldo-lorencutti-2/ (Santa Rita de Cássia) · /pe-devaldo-lorencutti-2-2/ (São João Paulo II)
- /sao-domingos/ · /sao-francisco-de-assis-2/ · /sao-joao-batista-3/
- /sao-jose-3-2/ · /sao-marcos-2/ · /sao-paulo-apostolo-3/ · /sao-pedro-4/
- /sao-roque/ · /sao-sebastiao-2/
- /santuario-diocesano/ (Santuário Nossa Senhora da Saúde, com horários)
- /fale-com-a-diocese/ e /estrutura/ (contatos da cúria)

Três paróquias têm o endereço da página trocado no site ("pe-devaldo-
lorencutti-*"): o conteúdo é o da paróquia certa, conferido pelo texto.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/cola0.htm (anuário, lido em
  13/11/2026): catedral + 31 igrejas paroquiais + mosteiro + santuário.
  Duas divergências com o site da diocese: o anuário traz "Igreja São Pedro"
  e "Igreja São Vicente" em Colatina e não traz a Paróquia Santa Clara de
  Assis (criada em 2008, bairro São Vicente) nem distingue a matriz São
  Vicente de Paulo da Sagrada Família; o JSON segue o site da diocese.
  O anuário também nomeia a igreja de Santa Teresa como "Paróquia Divino
  Espírito Santo", mas o site da paróquia é paroquiasantateresadavila.org.br
  e o site diocesano a chama Santa Teresa: o JSON usa Santa Teresa d'Ávila.
- https://catholic-hierarchy.org/diocese/dcola.html e
  https://en.wikipedia.org/wiki/Diocese_of_Colatina (criação em 1990, bispo).
- A Gazeta (agazeta.com.br): "formada por 31 paróquias e 710 comunidades,
  em 17 municípios" (bate com a lista do site).

## O que falta para o próximo estado desta pesquisa

- Horário das 8 unidades sem fonte: o caminho mais provável são os perfis no
  Instagram (que não se leem por dentro) e os sites próprios de Nossa Senhora
  da Glória (paroquiansgloria.org.br) e São João Batista
  (paroquiasjbatista.com.br), não baixados nesta rodada.
- Horários de capelas e comunidades do interior: nenhuma página da diocese
  os publica; só os da matriz.
- Telefone fixo da Catedral tem duas linhas ((27) 2102-5010 e 5011); o JSON
  guarda a primeira.
