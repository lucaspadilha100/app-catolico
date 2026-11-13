# Diocese de Patos (PB): fontes da pesquisa de 13/11/2026

Sé em Patos; sertão central da Paraíba. Bispo: Dom Eraldo Bispo da Silva.
Cúria: Rua Peregrino Filho, 76, Centro, Patos, (83) 3421-2250,
diocesedepatospb@gmail.com e contato@diocesedepatospb.org.br.

## Resumo

- **42 unidades pastorais** em `saida/patos.json`: 1 catedral, 38 paróquias e
  3 áreas pastorais, em 7 foranias (Vale das Espinharas, Vale do Sabugi,
  Malta, Serra de Teixeira, Serra de Princesa Isabel, Vale do Piancó e Serra
  do Cariri).
- **13 com horário** (confiança alta), todas com fonte no site da diocese,
  lido em 13/11/2026: Catedral N. S. da Guia, Santo Antônio (Patos), Área
  Pastoral São Francisco (Patos), Mãe d'Água, Santana dos Garrotes, Assunção,
  Imaculada, Desterro, Vista Serrana, Nova Olinda, Cacimbas, Tavares e
  Catingueira.
- **29 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. Para várias ficou o
  Instagram ou um dado de contexto (ano de criação, padroeiro).
- Todo `id_banco` é null: o banco ainda não tem nada da Paraíba.

## Lista das unidades

A lista vem da página de foranias da diocese (41 unidades) mais a Paróquia de
Santa Teresinha do Menino Jesus, em Emas, criada em 2019: falta na página de
foranias, mas as páginas das paróquias de Catingueira (de onde foi
desmembrada) e de Piancó (que a conta na Forania do Piancó) a confirmam.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 34
igrejas): o anuário não traz as unidades mais novas (Várzea, Cacimbas, Juru,
São José do Bonfim, N. S. das Neves em Patos, Emas e as 3 áreas pastorais).

Divergência anotada: em Manaíra a página de foranias diz "Nossa Senhora das
Dores", mas o IBGE e o anuário dão o Divino Espírito Santo como padroeiro
(paróquia de 1887); o JSON segue o Divino Espírito Santo, com a divergência
na observação. "Nossa Senhora das Dores" é a paróquia de Mãe d'Água, que a
mesma página lista na forania das Espinharas.

## Páginas do site da diocese (lidas em 13/11/2026)

O site fica atrás de uma tela de carregamento ("One moment, please..."): às
vezes é preciso pedir a página mais de uma vez.

- https://diocesedepatospb.org.br/ (contatos da cúria, menu)
- https://diocesedepatospb.org.br/foranias/ (a lista oficial, por forania)
- https://diocesedepatospb.org.br/paroquias/ (13 páginas de paróquia)
- https://diocesedepatospb.org.br/catedral/ (história da catedral)
- Páginas de paróquia com horários e contatos:
  - https://diocesedepatospb.org.br/paroquias/paroquia-nossa-senhora-da-guia/
  - https://diocesedepatospb.org.br/paroquias/paroquia-santo-antonio/ (traz
    também os horários da Área Pastoral São Francisco)
  - https://diocesedepatospb.org.br/paroquias/paroquia-de-mae-dagua/
  - https://diocesedepatospb.org.br/paroquias/paroquia-de-senhora-santana/
  - https://diocesedepatospb.org.br/paroquias/paroquia-nossa-senhora-da-assuncao/
  - https://diocesedepatospb.org.br/paroquias/paroquia-nossa-senhora-da-conceicao-imaculada-pb/
  - https://diocesedepatospb.org.br/paroquias/paroquia-nossa-senhora-do-desterro-pb/
  - https://diocesedepatospb.org.br/paroquias/paroquia-nossa-senhora-do-desterro-vista-serrana-pb/
  - https://diocesedepatospb.org.br/paroquias/paroquia-nossa-senhora-dos-remedios-nova-olinda-pb/
  - https://diocesedepatospb.org.br/paroquias/paroquia-sao-jose-cacimbas-pb/
  - https://diocesedepatospb.org.br/paroquias/paroquia-sao-miguel-arcanjo/
  - https://diocesedepatospb.org.br/paroquias/paroquia-sao-sebastiao/ (Catingueira)
  - https://diocesedepatospb.org.br/paroquias/paroquia-santo-antonio-de-pianco/ (só história, sem horário)

## Instagram (só o trecho que a busca mostra, em 13/11/2026)

Perfis não se leem por dentro (bloqueio de robôs); ficou anotado o que o
trecho da busca trouxe.

- diocesedepatospb (diocese)
- nsdaguiapatos (Catedral)
- paroquiadefatimapatos (N. S. de Fátima, Patos; bio diz criada em 13/05/1962)
- paroquiasaopedropatos (São Pedro, Patos)
- paroquiadosagradopatos (Sagrado Coração, Patos)
- paroquiasaosebastiaopatos (São Sebastião, Patos; só o título apareceu)
- paroquiasantaluziapb (Santa Luzia, cidade de Santa Luzia)
- psaojoseoperariosl (São José Operário, Santa Luzia; a busca o mostra como
  "Paróquia", a página de foranias ainda diz área pastoral)
- pascom_novaolinda e pascomcacimbas (vieram das páginas da diocese)

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/pato0 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dpato.html
- https://en.wikipedia.org/wiki/Diocese_of_Patos
- IBGE, documentação territorial dos municípios (padroeiros históricos:
  Manaíra, Malta, Teixeira, Santa Teresinha)
- Assembleia Legislativa da PB (festas reconhecidas: Várzea, Teixeira,
  Maturéia, Água Branca, Piancó, São Mamede)

## O que falta para o próximo estado desta pesquisa

- Horário das 29 unidades sem fonte: o caminho mais provável são os perfis
  das paróquias no Instagram, que a busca não indexa por dentro.
- Endereço e telefone da maioria das unidades fora das 13 páginas da diocese.
- A diocese tem ainda o Santuário da Cruz da Menina, em Patos (memorial e
  romaria; página própria no site), que não é unidade pastoral e ficou fora
  do JSON; o Santuário de Deus Pai Todo Poderoso, em Malta, citado no
  anuário, ficou só na observação da paróquia de Malta.
