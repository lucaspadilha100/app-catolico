# Diocese de Diamantino (MT): fontes da pesquisa de 13/11/2026

Sé em Diamantino; médio-norte de Mato Grosso. Bispo: Dom Vital Chitolina,
SCJ. Cúria: Av. Irmão Miguel Abib, 614, Jardim Eldorado, Diamantino,
(65) 3336-1055, contato@diocesedtno.com.br (secretaria: (65) 99904-1958,
diocesedtno@uol.com.br). Província eclesiástica de Cuiabá, Regional Oeste 2
da CNBB. Prelazia em 1929, diocese em 1979; jubileu do centenário em 2029.

## Resumo

- **21 unidades pastorais** em `saida/diamantino.json`: 1 catedral
  (Imaculada Conceição, Diamantino) e 20 paróquias, em 5 foranias:
  Diamantino (3), Arenápolis (6), Tangará da Serra (4), Nova Mutum (3) e
  Lucas do Rio Verde (5). Cidades com duas paróquias: Tangará da Serra, Nova
  Mutum e Lucas do Rio Verde; as demais têm uma.
- **1 com horário de missa** (confiança alta): Paróquia Nossa Senhora do
  Rosário de Fátima, de Lucas do Rio Verde, cujo site publica os horários da
  matriz e de 11 comunidades (lidos em 13/11/2026 no endereço que o próprio
  site consulta, `modulos/handlers/horarios.ashx`).
- **20 sem horário** (confiança baixa, `horarios: []`): o site da diocese
  não publica horários, e as buscas não acharam horário publicado pela
  paróquia (Instagram, Facebook ou site) para nenhuma delas.
- Todo `id_banco` é null.

## Lista das unidades

Da página "Paróquias" do site da diocese
(https://diocesedtno.com.br/paroquias/), lida em 13/11/2026. A página traz
um cartão por paróquia, em IMAGEM (enviadas em fevereiro de 2026), separados
por forania; os cartões foram lidos um a um (endereço, bairro, telefone,
e-mail, pároco). Arquivos: `wp-content/uploads/2026/02/1-1-scaled.png` e
`2-scaled.png` a `21-scaled.png`.

Conferência:
- **GCatholic** (https://gcatholic.org/churches/local/diam1, atualizado em
  09/10/2026): 21 igrejas paroquiais, as mesmas 21 do site da diocese. Bate.
- O GCatholic também lista em Diamantino a Antiga Catedral Nossa Senhora da
  Conceição (ligada à paróquia da catedral; ficou no `nao_cabe` da
  catedral) e as igrejas São Benedito, São Cristóvão e São José Operário,
  sem paróquia indicada (o campo "Mission of" delas aponta, por erro, para
  uma igreja na França). Ficaram fora: pendência.
- A página da diocese no site do Regional Oeste 2
  (https://cnbbo2.org.br/diocese-de-diamantino/) diz "Paróquias: 17", número
  antigo; a lista de municípios dela bate com as cidades das 21 paróquias.

## Contatos

Telefone e e-mail vêm dos cartões da diocese. Onde o cartão traz dois
números, o primeiro foi para `telefone` e o outro para a observação. Os
números são os da paróquia como publicados (muitos são celulares de
secretaria; nenhum é de padre). Catedral: a diocese chama a unidade de
"Paróquia Imaculada Conceição"; entrou como `catedral` (GCatholic).

Lucas do Rio Verde, N. S. do Rosário de Fátima: o cartão da diocese dá a
Av. Paraná, 1045 E; o site da paróquia, a Rua Guarapuava, 189 E (bairro
Pioneiro nos dois). O JSON segue o site da paróquia e anota a divergência.

## Instagram (só pelo trecho da busca, nenhum perfil aberto por dentro)

paroquiadelucas (link do site da paróquia), paroquia_rosamistica_delucas,
sagradafamilianm, santateresinhanm (Nova Mutum), paroquiasantaterezinhatga
(Tangará da Serra; a bio dá o WhatsApp (65) 99643-2325). Diocese:
diocesedediamantino. Facebook da paróquia da catedral: paroquiadtno.

## Páginas lidas (13/11/2026)

- https://diocesedtno.com.br/paroquias/ (lista e cartões)
- https://diocesedtno.com.br/2025/11/10/diocese-de-diamantino-anuncia-novas-nomeacoes-e-transferencias-com-destaque-para-formacao-e-coordenacao-pastoral/
  (nomeações de 09/11/2025; confirmam os cartões)
- https://diocesedtno.com.br/wp-json/wp/v2/ (API do WordPress: nenhuma
  página ou post por paróquia; a página "A Catedral" está vazia)
- https://www.paroquiadelucas.com.br/ e
  https://www.paroquiadelucas.com.br/modulos/handlers/comunidade.ashx /
  `horarios.ashx?nome=...` (horários de N. S. do Rosário de Fátima)
- https://gcatholic.org/dioceses/diocese/diam1.htm e as páginas de cada igreja
- https://cnbbo2.org.br/diocese-de-diamantino/

## Não abriu

- paroquiarosamistica.net e paroquiarosamistica.net.br (Rosa Mística, Lucas
  do Rio Verde): o proxy não conectou.

## O que falta para o próximo estado desta pesquisa

- Horários das 20 unidades sem horário. As buscas (cerca de 15 para esta
  diocese) acharam só os perfis acima, sem horário no trecho. Um post sem
  data da diocese no Facebook cita "Missa Local: Catedral Imaculada
  Conceição, domingo 19h30"; não está claro se é horário fixo, então ficou
  só no `nao_cabe` da catedral.
- Comunidades das paróquias: só as de Lucas do Rio Verde (Rosário de Fátima)
  entraram. Santa Bárbara e Santa Luzia, dessa paróquia, não têm bairro na
  fonte. As igrejas São Benedito, São Cristóvão e São José Operário, de
  Diamantino (GCatholic), esperam a paróquia que as atende.
- Endereço exato da Antiga Catedral N. S. da Conceição (igreja tombada).
