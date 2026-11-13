# Diocese de Formosa (GO): fontes da pesquisa de 13/11/2026

Sé em Formosa; nordeste goiano, do Entorno do DF (Planaltina, Formosa) à
Chapada dos Veadeiros e ao vale do Paranã. Bispo: Dom Adair José Guimarães.
Cúria: Rua Olímpio Jacinto, 433, Centro, Formosa, (61) 3631-8837. Criada em
16/10/1979, sufragânea de Brasília.

## Resumo

- **37 unidades** em `saida/formosa.json`: 1 catedral, 35 paróquias e 1
  quase-paróquia (São Bento, zona rural de Formosa), em 5 foranias:
  - Imaculada Conceição (12): Formosa (9, com a quase-paróquia), Distrito do
    Bezerra, Cabeceiras, Vila Boa.
  - Divino Espírito Santo (6): todas em Planaltina.
  - Nossa Senhora da Guia (6): Flores de Goiás, Alvorada do Norte, Mambaí,
    Simolândia, Damianópolis (atende Sítio d'Abadia), Buritinópolis.
  - Sant'Ana de Posse (7): São Domingos, Posse (2), Nova Roma, Iaciara,
    Divinópolis de Goiás, Guarani de Goiás.
  - Sant'Ana de Cavalcante (6): Cavalcante, Teresina de Goiás, Alto Paraíso,
    São João d'Aliança, Água Fria de Goiás, Colinas do Sul.
- **3 com horário de missa** (confiança alta): Catedral, Santa Luzia
  (Formosa) e Sant'Ana (Cavalcante). As outras 34 entraram com
  `"horarios": []` e confiança baixa: as páginas da diocese trazem endereço,
  telefone, e-mail, pároco e capelas, mas não horários, e a busca não achou
  horário publicado pela paróquia.
- 258 capelas e comunidades com nome e lugar (sem horário, salvo as três de
  Santa Luzia), tiradas da lista "Capelas | Comunidades | Festejos" de cada
  paróquia.
- Todo `id_banco` é null.

## Acesso ao site

O endereço do GCatholic (diocesedeformosa.org.br) redireciona para
https://diocesedeformosa.com.br/. O certificado do site é do Let's Encrypt
pela raiz nova "ISRG Root YE", que o pacote de certificados do ambiente
ainda não tinha. A raiz foi baixada de https://letsencrypt.org/certificates/
e somada a um arquivo de CA local; a verificação TLS continuou ligada.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedeformosa.com.br/diocese/foranias/ (menu com todas as
  paróquias por forania e cidade; dados de população por forania)
- https://diocesedeformosa.com.br/wp-json/wp/v2/posts?categories=423&per_page=100
  (categoria "paroquia": 37 páginas de paróquia e 21 páginas antigas de
  cidade, de 2022, que não foram usadas). A URL de cada paróquia está no
  campo `fontes`; quase todas editadas entre março e junho de 2026. A mais
  antiga é a de N. S. Aparecida (Parque Vila Verde, Formosa), de 2023.
- Horários publicados:
  - https://diocesedeformosa.com.br/paroquia/catedralnossasenhoraimaculadaconceicao/
  - https://diocesedeformosa.com.br/paroquia/santaluzia/
  - https://diocesedeformosa.com.br/paroquia/santana/ (também traz horários
    de duas capelas, N. S. de Fátima e N. S. Aparecida, sem dizer qual
    comunidade; ficaram em `nao_cabe` da matriz)
- https://www.catedraldeformosa.com.br/ tem quadro de horários em imagem;
  valeu o texto da página da diocese.

## Conferência da lista

GCatholic (https://gcatholic.org/churches/local/form1, 09/11/2026): 34
igrejas, 32 marcadas como paróquia; a estatística de 2022 fala em 35
paróquias. Diferenças:

- Faltam no GCatholic: Sant'Ana (Posse), Santo Antônio e São José Operário
  (Planaltina), São Gabriel Arcanjo e N. S. Aparecida (criada em 2023),
  Santa Terezinha do Menino Jesus (Teresina de Goiás, criada em 23/01/2026)
  e a quase-paróquia São Bento.
- O GCatholic marca como paróquia N. S. d'Abadia de Sítio d'Abadia; a
  diocese a dá como capela da Paróquia Santa Catarina de Sena
  (Damianópolis). Seguimos a diocese.
- "Posse Santa Luzia" e "Divinópolis Divino Espírito Santo", sem marca de
  paróquia no GCatholic, são capelas (Sagrada Família de Posse e São João
  Batista de Divinópolis) e entraram como tal.

## Escolhas

- Telefone: o primeiro número publicado; WhatsApp só onde a página diz
  (Imaculado Coração de Maria, Santíssima Trindade).
- A Paróquia Santo Antônio (Planaltina) ainda lista as capelas N. S.
  Aparecida de Nova Petrópolis e de São Gabriel, que passaram à Paróquia São
  Gabriel Arcanjo em 2023; entraram só na nova.
- A Paróquia São João Batista (São João d'Aliança) lista sete capelas de
  Água Fria que atende; ficaram fora para não duplicar com a Paróquia N. S.
  de Fátima de Água Fria, que tem lista própria. Pendência: Terra
  Conquistada, Montes Claros, Pontezinha, Rola Pedra, Sítio Bom Jesus,
  Ribeiro, Santo Antônio das Brancas.
- Capelas citadas sem lugar, fora do JSON: Beato Frederico Ozanam e Centro
  de Convivência do Idoso (N. S. Aparecida, Formosa); Sagrado Coração de
  Jesus e São Pedro e São Paulo (São Vicente de Paulo); Santa Rita de Cássia,
  N. S. de Fátima (orfanato) e São Bento (Santíssima Trindade); N. S. das
  Graças e as comunidades Bauzinho, Lapa, Loteamento Santa Maria, Bela Vista
  I e Canjica (Santo Antônio, Planaltina).
- A Capela N. S. da Rosa Mística da Paróquia Imaculado Coração de Maria fica
  no Morumbi, Distrito Federal (cidade "Brasília" no JSON).

## Instagram (links das próprias páginas da diocese)

catedraldeformosa, paroquiacristorei.fsa, saojoseformosa_, saosebastiao.fsa,
paroquiasaovicentefsa, paroquiasantaluziafsa, paroquia_santo_expedito,
paroquians.aparecida, pa.santarosadelima, paroquiasaosebastiaovb,
pd_espiritosanto, psstplango, pcordemaria, paroquiasaojosego,
paroquiasantoantoniogo, paroquiasaogabrielgo, srarosariofg,
paroquiansguia_go, paroquia_imaculada_mambai, p.santacatarinadesena,
paroquia.sfx, paroquiasaodomingosdgusmao, paroquiasantana.posse,
paroquiasagradafamilia.posse, paroquiasaosebastiao.nr,
paroquiasantoantonioiaciarago, psjbatista_dvg, paroquiaabadia.guarani_go,
paroquiasenhorasantanacvc, paroquia_senhoradasgracas,
paroquia.saojoaobatistasja, paroquiansradefatimaaguafriago,
pscjesuscolinasdosul. Nenhum perfil foi aberto por dentro.

## Buscas

Cerca de 12 buscas (gerais e restritas a instagram.com) para horários de
Cristo Rei, São Sebastião e Santo Expedito (Formosa), das paróquias de
Planaltina, de Sant'Ana de Posse e de Alto Paraíso: nenhum trecho com
horário dessas paróquias. Sites agregadores (Buser e afins) apareceram e
não foram usados.

## O que falta para o próximo estado desta pesquisa

- Horários de 34 paróquias: o caminho é pedir à diocese que publique, ou ler
  os perfis de Instagram acima por outro meio que não seja robô.
- As capelas sem lugar listadas acima.
