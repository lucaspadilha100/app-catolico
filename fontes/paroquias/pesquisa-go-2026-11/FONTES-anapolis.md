# Diocese de Anápolis (GO): fontes da pesquisa de 13/11/2026

Sé em Anápolis; centro de Goiás, entre Goiânia e Brasília (Pirenópolis,
Corumbá de Goiás, Jaraguá, Alexânia, Abadiânia). Bispo: Dom Waldemar
Passini Dalbello. Cúria: Rua Engenheiro Portela, Qd. I-01, Lt. 01, Vila
Nossa Senhora D'Abadia, Anápolis, (62) 3329-3400,
curia@diocesedeanapolis.org.br.

## Resumo

- **61 unidades** em `saida/anapolis.json`: 1 catedral (Bom Jesus), 59
  paróquias (entre elas 2 capelanias que a diocese lista como unidades) e 1
  área pastoral (Região Pastoral Nossa Senhora de Fátima, Edilândia).
- Quatro regiões pastorais: 1 Anápolis Sul (21), 2 Anápolis Norte (16),
  3 Região Leste (11) e 4 Região Oeste (13). A região está na observação de
  cada unidade.
- Três paróquias têm a matriz santuário e entraram como `paroquia` com a
  primeira igreja de tipo `santuario`: Santuário Diocesano de Sant'Ana
  (Anápolis), Santuário Santo Antônio (Anápolis) e Santuário Diocesano
  Nossa Senhora D'Abadia (Posse d'Abadia, Abadiânia).
- **4 com horário de missa**, confiança média:
  - Catedral Bom Jesus, Santuário de Sant'Ana e N. S. D'Abadia (Vila Góis):
    horários dos dados embutidos na página de detalhes de paróquia do site
    da diocese (código da página alterado em 22/06/2026). O próprio código
    diz que os horários foram preenchidos "apenas para as 3 primeiras". A
    Catedral e a Abadia têm quadros idênticos (só sábado e domingo), o que
    pede conferência.
  - São Judas Tadeu: só a Capela Santa Bernadete (Bairro da Lapa), quinta
    19h e sábado 18h, pelo trecho do Instagram da capela mostrado pela
    busca; a matriz ficou sem horário e a unidade com confiança baixa.
- **57 sem horário** (`"horarios": []`, confiança baixa).
- Nenhuma capela além da Santa Bernadete: a diocese não publica capelas.
- Todo `id_banco` é null.

## O site da diocese

As páginas de paróquia (`/paroquia?id=...`), "Horários de Missas" e
"Horários de Confissões" (Anápolis e outras cidades) estão quebradas: o
bloco de listagem mostra "Please select listing to show." A lista
completa das 63 entradas (61 unidades e os 2 seminários) com endereço,
telefone, e-mail, data de criação, clero e Instagram está num vetor de
dados dentro do código das páginas novas:

- https://www.diocesedeanapolis.org.br/paroquias-26-old/ (lista com
  cidade e telefone; alterada em 22/06/2026)
- https://www.diocesedeanapolis.org.br/detalhes-da-paroquia-old/ (o mesmo
  vetor, com os horários das 3 primeiras)
- https://www.diocesedeanapolis.org.br/paroquias-por-regiao/ (as 4 regiões
  pastorais)

Telefones e e-mails do JSON são os desse vetor. Quando há dois números, o
primeiro fixo da secretaria foi para `telefone` e o resto ficou na
observação. A Capelania da Saúde São Camilo ficou sem telefone e e-mail: os
publicados parecem pessoais do capelão.

## Lista das unidades

Conferência contra o GCatholic (atualizado em 09/11/2026: 58 paróquias,
61 igrejas): bate nas paróquias, com estas diferenças:

- Não estão no GCatholic: Jesus Bom Pastor (criada em 25/08/2024), São
  Pedro Apóstolo e Santo Antônio de Sant'Ana Galvão (2019) e a Região
  Pastoral de Edilândia.
- O GCatholic põe a Paróquia São Pedro e São Paulo de Abadiânia na cidade
  de Anápolis (há duas "São Pedro e São Paulo" em Anápolis na lista dele);
  a diocese a dá em Abadiânia.
- A Capelania Militar N. S. de Loreto está no GCatholic como paróquia do
  Ordinariado Militar no território da diocese; a diocese a lista na
  Região 1. Entrou, com a observação.
- Nomes: Interlândia é "Paróquia São Sebastião" na diocese e "N. S.
  d'Abadia e São Sebastião" no GCatholic; Souzânia é "N. S. D'Abadia".
  Seguimos a diocese.
- Ficaram fora (seminários): Seminário Maior Diocesano Imaculado Coração
  de Maria e Seminário Propedêutico São José (Miranápolis), e o Mosteiro da
  Santa Cruz (Miranápolis), do GCatholic.

Pendência (santuários sem paróquia indicada): o GCatholic lista, como
igrejas jubilares de 2025 da diocese, três santuários que a diocese não
põe em lista nenhuma: Santuário Divino Pai Eterno (Monte Castelo, Região
Oeste), Santuário Nossa Senhora d'Abadia (Alvelândia, Região Oeste) e
Santuário da Divina Misericórdia (Vale da Misericórdia, Região Leste).
Sem a paróquia a que pertencem, ficaram fora do JSON.

Cidades e distritos: Souzânia e Interlândia são distritos de Anápolis;
Posse d'Abadia (Abadiânia Velha), de Abadiânia; Olhos d'Água, de Alexânia;
Girassol, de Cocalzinho de Goiás; Jaranápolis, de Pirenópolis. Edilândia
ficou como cidade, como a diocese escreve; falta conferir o município.

## Instagram

Do vetor da diocese: catedraldosenhorbomjesus, abadiaanapolis,
saomateus_paroquia, santuariosantoantonioanapolis, paroquia_sjbatista,
saojudastadeu.anapolis, pnsl.aps, paroquia_sta_terezinha,
sagradafamiliaparoquia, rosamisticaanapolis, pascom_sje, nscarmo.aps,
paroquiacoracaosagrado. Corrigidos pela busca (perfil com o mesmo
endereço): São Sebastião é paroquiasaosebastiaofc (a diocese escreve
"...ofc" com dois "o") e São Francisco de Assis é saofrancisco.anapolis (a
diocese dá psfaanapolis, que a busca não achou). Achados só pela busca:
paroquiansabadiaszn (Souzânia), par.nsabadia (Santa Rosa de Goiás, mesmo
telefone da secretaria), paroquiajaranapolis. Nenhum trecho de busca
trouxe horário de matriz.

## Sites que não respondem

Os sites que o GCatholic dá para N. S. de Lourdes, Rosa Mística, São
Francisco de Assis, Divino Pai Eterno, Santa Clara, Santuário Santo
Antônio, São Cristóvão, Abadiânia, Corumbá, Rosário de Pirenópolis, Santa
Bárbara e São Benedito de Nerópolis: nomes que não resolvem, erro do
WordPress (São Francisco) ou acesso negado (São Cristóvão). O site do
e-mail da Santíssima Trindade também não respondeu.

## O que falta para o próximo estado desta pesquisa

- Horários de 57 paróquias e da matriz de São Judas Tadeu. O caminho
  natural é o site da diocese quando a página de paróquias voltar a
  funcionar (o filtro por dia e hora em /paroquias-26/ indica que os
  horários estão sendo cadastrados).
- Conferir os horários da Catedral e da Abadia, que vieram iguais.
- Capelas e comunidades de cada paróquia.
- Município de Edilândia e os três santuários do GCatholic sem paróquia.
