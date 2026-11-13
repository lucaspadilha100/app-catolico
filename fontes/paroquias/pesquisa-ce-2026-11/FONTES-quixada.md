# Diocese de Quixadá (CE): fontes da pesquisa de 13/11/2026

Sé em Quixadá; sertão central do Ceará. Bispo: Dom Aurélio Pinto de Sousa.
Cúria: Rua Basílio Emiliano Pinto, 1149, Combate, Quixadá, (88) 3412-0548,
diocesequixada@gmail.com.

## Resumo

- **25 unidades** em `saida/quixada.json`: 1 catedral, 20 paróquias, 3 áreas
  pastorais e 1 santuário, em 10 municípios (Banabuiú, Boa Viagem,
  Capistrano, Choró, Ibaretama, Itapiúna, Itatira, Madalena, Quixadá e
  Quixeramobim), em 4 foranias (Quixadá, Quixeramobim, Itapiúna e Madalena).
- **1 com horário** (confiança alta): o Santuário de Nossa Senhora Imaculada
  Rainha do Sertão, pela página de eventos do site do próprio santuário
  (missa de segunda e de quarta a sexta às 17h30, sábado 12h, domingo 11h e
  16h; confissões sábado e domingo das 9h30 às 12h; terça não há missa).
- **24 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. O site da diocese dá
  de todas o pároco, a data de criação, o endereço e quase sempre telefone e
  e-mail da secretaria, mas não os horários de missa.
- Todo `id_banco` é null: o banco ainda não tem nada do Ceará.
- Nenhuma unidade fora do CE (sem campo `uf`).

## Lista das unidades

A lista vem inteira da página de paróquias do site da diocese, que traz as
24 unidades pastorais num quadro só, por município (as URLs de cada paróquia
devolvem a mesma página). O texto da página ainda diz "vinte paróquias e
duas áreas pastorais": ficou para trás das criações de 2026 (Área Pastoral
Sant'Ana, em Dom Maurício, 03/01/2026, e Paróquia Imaculada Conceição, em
Quixeramobim, 21/01/2026), que o mesmo quadro já lista. A página de foranias
confirma 23 delas; só a Imaculada Conceição de Quixeramobim falta lá.

O Santuário de Nossa Senhora Imaculada Rainha do Sertão (Serra do Urucum,
Quixadá) não está no quadro de paróquias (o site da diocese o lista em
Instituições), mas é igreja com programação própria e entrou como a 25ª
unidade, categoria santuário.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 26
igrejas): batem a catedral (Jesus, Maria e José, "Cathedral, Parish"), as
paróquias, as 3 áreas pastorais (Custódio, Dom Maurício e Palmatória, sem o
selo "Parish") e o santuário ("Shrine"). O anuário não traz a Paróquia
Imaculada Conceição de Quixeramobim (21/01/2026); traz a mais o Seminário
Diocesano (não é unidade pastoral) e a Igreja São Vicente de Paulo, em
Quixeramobim, sem selo de paróquia, que ficou fora do JSON.

Grafia corrigida no JSON: a página da diocese escreve "Paróquia Nossa
Senhora do Perpétuo do Socorro" (Nenelândia); o JSON segue "Nossa Senhora do
Perpétuo Socorro", como o anuário e o e-mail da própria paróquia.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedequixada.org.br/ (home; Instagram diocesedequixada)
- https://diocesedequixada.org.br/paroquias/ (o quadro oficial: criação,
  padroeiro, pároco, endereço, telefone e e-mail de cada unidade)
- https://diocesedequixada.org.br/a-diocese/foranias/ (as 4 foranias)
- https://diocesedequixada.org.br/curia/ (endereço e telefones da cúria)

## Site do santuário (lido em 13/11/2026)

- https://santuariorainhadosertao.com.br/eventos (a programação semanal de
  missas e confissões, a única fonte de horário desta pesquisa)
- https://santuariorainhadosertao.com.br/ (o site não traz telefone do
  santuário; o WhatsApp que aparece é o do hotel, e ficou fora)

## Instagram (só o trecho que a busca mostra, em 13/11/2026)

Perfis não se leem por dentro (bloqueio de robôs); ficou anotado o que o
trecho da busca trouxe. Nenhum trecho trazia horário de missa.

- diocesedequixada (diocese, pelo link do próprio site)
- santuario_rainhadosertao (santuário; bio: Serra do Urucum, Quixadá)
- paroquiadesaofrancisco (São Francisco de Assis, Quixadá; bio: fundada em
  05/08/1979)
- pnsaibaretama (N. S. Auxiliadora, Ibaretama)
- paroquia.nsps (Perpétuo Socorro, Nenelândia, Quixeramobim; bio confirma
  endereço e telefone do site da diocese)
- pnsbv_ (N. S. da Boa Viagem, Boa Viagem; bio: fundada em 1862, Diocese de
  Quixadá)
- paroquiadaguia (N. S. da Guia, Boa Viagem)
- pnsfatimaboaviagemce (N. S. de Fátima, Boa Viagem; bio: fundada em
  10/05/2009)
- paroquiameninodeusitatira (Menino Deus, Itatira; bio: a igreja de 1870
  nasceu capela de Belém do Machado)

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/quix0 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dquix.html
- https://en.wikipedia.org/wiki/Diocese_of_Quixad%C3%A1

## Pendências

- Horário das 24 unidades sem fonte: o caminho mais provável são os perfis
  das paróquias no Instagram (9 achados), que a busca não indexa por dentro.
- Confissão e adoração fora do santuário (nenhuma fonte as publica).
- Instagram da catedral e das demais 15 unidades: a busca não achou.
- A página da diocese lista o telefone do pároco de Boa Viagem junto ao nome
  dele; por ser celular pessoal, ficou fora do JSON (só as linhas da
  secretaria entraram).
- "São Miguel" (São Miguel Arcanjo) e "Maravilha" (São Francisco de Assis)
  entraram como localidade de Quixeramobim, como o site escreve; conferir se
  são bairro ou distrito quando houver fonte melhor.
