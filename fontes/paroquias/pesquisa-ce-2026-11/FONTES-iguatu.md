# Diocese de Iguatu (CE): fontes da pesquisa de 13/11/2026

Sé em Iguatu (Catedral de São José, dedicada em 14/10/2006); centro-sul do
Ceará. Bispo: Dom Geraldo Freire Soares, C.Ss.R. (desde 2022). Cúria: Rua
Eduardo Lavôr, 475, São Sebastião, Iguatu. Instagram da diocese:
diocesedeiguatu. Site: diocesedeiguatu.org.br.

## Resumo

- **40 unidades pastorais** em `saida/iguatu.json`: 1 catedral, 30 paróquias,
  3 quase-paróquias, 3 áreas pastorais e 3 áreas missionárias, em 7 zonais
  (Iguatu e Quixelô; Icó, Cedro e Orós; Cariús e Jucás; Mombaça, Pedra Branca
  e Piquet Carneiro; Senador Pompeu, Milhã, Irapuan Pinheiro e Solonópole;
  Acopiara e Catarina; Aiuaba, Arneiroz e Saboeiro).
- **669 igrejas** no total: o site da diocese publica, para quase toda
  unidade, a lista das igrejas e comunidades com padroeiro e lugar, e elas
  entraram como capelas e comunidades. Comunidades marcadas "Sem Igreja" ou
  listadas só pelo lugar (sem padroeiro) ficaram fora.
- **2 com horário**: Nossa Senhora das Dores em Senador Pompeu (confiança
  alta, site próprio da paróquia) e Nossa Senhora do Perpétuo Socorro em
  Acopiara (confiança media, bio do Instagram da paróquia vista pela busca).
- **38 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. O site da diocese traz
  endereço, telefone, e-mail e a lista das igrejas de cada unidade, mas
  nenhuma página de horários.
- Todo `id_banco` é null: o banco ainda não tem nada do Ceará.
- Todas as unidades ficam no Ceará; nenhuma precisou do campo `uf`.

## Lista das unidades

A lista vem da página oficial "Paróquias, Cidades" do site da diocese
(https://www.diocesedeiguatu.org.br/paroquias/paroquias-cidades/, lida em
13/11/2026), que dá as 40 unidades com a categoria de cada uma. Cada unidade
(menos a Área Missionária São João Batista, de Flamengo) tem página própria
em /paroquias/zona-1/ a /zona-7/, com endereço, telefone, pároco, e-mail
(ofuscado pelo Cloudflare; decodificado do HTML) e a lista das igrejas.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 42
igrejas): https://gcatholic.org/churches/local/igua0. Fecha bem com a lista
da diocese. Divergências anotadas:

- GCatholic marca "Menino Jesus de Praga" (Senador Pompeu) como paróquia na
  lista, mas a página da própria igreja diz "Mission of: Igreja Nossa Senhora
  das Dores", e a diocese a lista como igreja do bairro Caracará dentro da
  paróquia de Nossa Senhora das Dores. Não entrou como unidade.
- GCatholic marca "Sagrada Família" (Saboeiro) como paróquia; é capela da
  paróquia de Nossa Senhora da Purificação (na página da diocese, Sítio
  Jatobá). A Área Missionária Sagrada Família de Nazaré fica em Ibicuã,
  Piquet Carneiro.
- GCatholic não marca Santo Expedito (Iguatu) como paróquia; a diocese diz
  paróquia. Seguiu-se a diocese.
- GCatholic põe o Santuário Diocesano Mãe Rainha em Cariús; a página da
  paróquia de Pedra Branca lista um Santuário Mãe Rainha no bairro Santa
  Maria (entrou como igreja dessa paróquia). Fica a conferir.
- O Santuário Senhor do Bonfim (Icó), citado no anuário, não é unidade
  pastoral e ficou fora do JSON; a igreja de Nosso Senhor do Bonfim do
  distrito do Bonfim (Senador Pompeu) entrou na paróquia de lá.
- O material de imprensa da diocese (2022) falava em 26 paróquias; desde
  então vieram as quase-paróquias, áreas pastorais e áreas missionárias que a
  página de cidades lista hoje.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://www.diocesedeiguatu.org.br/ (menu, notícias)
- https://www.diocesedeiguatu.org.br/paroquias/paroquias-cidades/ (a lista oficial)
- https://www.diocesedeiguatu.org.br/paroquias/zona-1/ a /zona-7/ e as 39
  páginas de unidade sob elas (endereço, telefone, pároco, e-mail e a lista
  das igrejas com padroeiro, lugar e dia da festa; sem horários de missa)

## Sites de paróquia (lidos em 13/11/2026)

- https://paroquiadesenadorpompeu.com/ (Nossa Senhora das Dores, Senador
  Pompeu): horários de missa, confissão e adoração da matriz, WhatsApp da
  secretaria, endereços da matriz e da secretaria. Única fonte de horário
  com confiança alta.
- https://nossasenhoradaconceicaotrussu.blogspot.com/ (Área Pastoral Nossa
  Senhora da Conceição, Trussu): confirma a criação canônica em 2026 e a
  instalação solene em 13/06/2026; traz Instagram e YouTube; sem horários.

## Instagram (só o trecho que a busca mostra, em 13/11/2026)

Perfis não se leem por dentro (bloqueio de robôs); ficou anotado o que o
trecho da busca trouxe.

- diocesedeiguatu (diocese)
- perpetuosocorroacopiara (Acopiara; a bio traz os horários de missa que
  entraram no JSON: quarta 18h30, sábado 19h, domingo 7h, 9h e 19h)
- paroquiasenhorasantanamatriz (Senhora Sant'Ana, Iguatu; bio: 1719/1831,
  primeira catedral da diocese)
- paroquiasantoexpedito (Santo Expedito, Iguatu)
- pascomprado (N. S. do Perpétuo Socorro, Prado, Iguatu)
- paroquiasaojoaobatistacedro (Cedro)
- pascomoros (N. S. do Perpétuo Socorro, Orós)
- paroquiansgloriambc (N. S. da Glória, Mombaça)
- paroquiasaosebastiaopb (São Sebastião, Pedra Branca; bate com o e-mail da
  página da diocese)
- paroquiadesenadorpompeu (Senador Pompeu; veio de um currículo público e do
  site da paróquia)
- ap_nsradaconceicaotrussu (Trussu; veio do blog oficial)

Um perfil "catedral.saojose" aparece na busca por "catedral são josé
iguatu", mas a bio não confirma a cidade e ele ficou fora.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/igua0 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/digua.html
- Material de imprensa da posse de Dom Geraldo (2022, no site da diocese):
  contatos da cúria e redes da diocese

## Pendências

- Horário das 38 unidades sem fonte: o caminho mais provável são os perfis
  das paróquias no Instagram e no Facebook, que a busca não indexa por
  dentro, e a secretaria de cada uma por telefone.
- E-mails que a página da diocese publica com erro e ficaram fora: Nossa
  Senhora da Expectação (Icó, grafado "hotmal"), Nossa Senhora da Glória
  (Mombaça, quebrado pelo cedilha no HTML) e Imaculada Conceição (Milhã,
  parece ser o endereço da paróquia de Irapuan Pinheiro). Quatro páginas
  traziam e-mail de pessoa (não institucional) e ele ficou fora: Mombaça
  Perpétuo Socorro, Santa Cruz do Banabuiú, Acopiara São Francisco e
  Saboeiro.
- As listas de igrejas da diocese não trazem endereço nem horário das
  capelas; muitas entradas rurais ("Sítio X") não têm como ser geolocalizadas
  sem trabalho de campo.
- A Quase-Paróquia São Sebastião (José de Alencar, Iguatu) lista 23
  comunidades só pelo lugar, sem padroeiro; ficaram fora do JSON.
- A página da Várzea da Conceição (Cedro) diz "Paróquia" no título, mas a
  lista oficial de cidades diz quase-paróquia; seguiu-se a lista de cidades.
