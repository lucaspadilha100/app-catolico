# Diocese de Franca (SP): fontes da pesquisa de 13/11/2026

Sé em Franca; nordeste paulista, na divisa com Minas Gerais. Bispo: Dom
Paulo Roberto Beloto. Cúria: Rua Carlos de Vilhena, 3099, Vila Chico Júlio,
Franca, (16) 3721-2294, curia@diocesefranca.org.br. CNPJ da Mitra:
45.313.061/0001-47.

## Resumo

- **45 unidades pastorais** em `saida/franca.json`: 1 catedral e 44
  paróquias (uma delas com a matriz no Santuário Diocesano Santo Antônio,
  em Franca: entrou como `paroquia` com a primeira igreja de tipo
  `santuario`, como em Taubaté). Cidades: Franca (24), São Joaquim da Barra
  (2), Orlândia (2), Ituverava (2) e uma em cada: Aramina, Buritizal,
  Cristais Paulista, Guará, Igarapava, Itirapuã, Jeriquara, Nuporanga,
  Patrocínio Paulista, Pedregulho, Restinga, Ribeirão Corrente, Rifaina,
  Sales Oliveira e São José da Bela Vista.
- **45 com horário de missa**: 13 com confiança alta e 32 média. Nenhuma
  ficou sem horário.
  - **Alta**: quando duas fontes da própria Igreja batem (página da
    diocese e portal da paróquia) ou quando a fonte tem data de 2024 em
    diante. Catedral, Menino Jesus de Praga, Cristo Rei (Orlândia),
    N. S. Aparecida (Capelinha), N. S. da Guia, N. S. das Graças, Santa
    Luzia, Santa Mônica, São Crispim, São Judas Tadeu, São Pedro, São
    Sebastião (Franca) e São Sebastião e Santo Antônio (Guará).
  - **Média**: só a página da paróquia no site da diocese, que não tem data
    (as imagens dessas páginas são de abril a junho de 2021; o texto foi
    mexido depois em algumas, por exemplo Itirapuã cita pároco empossado em
    2022), ou quando diocese e paróquia divergem (Restinga, Jeriquara, Rosa
    Mística).
- 144 capelas e comunidades, quase todas com endereço ou bairro e horário,
  tiradas das mesmas páginas. Capelas citadas sem lugar nem horário ficaram
  no `nao_cabe` da matriz.
- Confissão só na N. S. das Graças (portal da paróquia, por agendamento).
  Adoração na N. S. da Guia, no Santuário Santo Antônio, no Sagrado Coração
  de Jesus e numa capela da Santa Gianna.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Lista das unidades

O site da diocese (https://www.diocesefranca.org.br, sistema próprio, não
WordPress) tem a página "Paróquias" (`?menu=noticia_detalhe&id=2013`) só com
texto; as paróquias são páginas soltas da mesma categoria. Elas foram
achadas varrendo os ids 2014 a 2400: 45 páginas da categoria "Paróquia",
"Santuário" ou "Sé Catedral" (ids 2014 a 2017, 2041 a 2047, 2049 a 2080,
2230 e 2257).

Conferência:

- **CNPJ** (minhareceita.org, filiais 0001 a 0050 da Mitra): 45 filiais
  com nome de paróquia, todas ativas; batem uma a uma com as 45 páginas.
  As outras filiais são a cúria, o Seminário N. S. do Patrocínio, a Casa de
  Teologia (Sales Oliveira), o Tribunal Eclesiástico e a Casa Presbiteral
  São Paulo VI. A filial 0048 (2022) é o escritório da Paróquia N. S. Rosa
  Mística, em outro endereço.
- **GCatholic** (https://gcatholic.org/dioceses/diocese/fran0.htm e
  https://gcatholic.org/churches/local/fran0, atualizado em 09/11/2026):
  estatística de 2022 com "45 parishes, 1 mission", o mesmo número. A lista
  de igrejas dele tem só 41 (catedral, seminário e 39 paróquias): faltam
  N. S. da Abadia (Cristais Paulista), Santa Cruz (Ribeirão Corrente),
  Sagrada Família e N. S. Rosa Mística (Franca) e São João Batista
  (Ituverava), todas no site da diocese e no CNPJ. A "1 mission" não
  aparece nomeada em lugar nenhum; nenhuma quase-paróquia ou área pastoral
  foi achada no site.

Nenhuma cidade desta diocese aparece nas outras pesquisas de SP, e nenhuma
fonte daqui cita cidade de outra diocese.

## Portais das paróquias (o mesmo sistema, `?id_orgao=N`)

A diocese hospeda um portal para 30 paróquias (`id_orgao` 2 a 31; o 32 é a
Cáritas e o 33 o Tribunal). Muitos têm o menu "Horários de Missas", mas
vários só com imagem genérica. As imagens enviadas levam data no nome do
arquivo (`images/AAAAMMDDhhmmss_...`), e essa data foi usada como data da
fonte. Quando o portal traz texto, ele foi comparado com a página da
diocese:

- Batem: Catedral (26), Menino Jesus (2), Cristo Rei (22, 2023), N. S.
  das Graças (6, 2023), N. S. da Guia (10, 2023), São Crispim (11, 2024),
  Santa Mônica (15, 2024), São Judas Tadeu (7, 2025), São Pedro (19,
  quadro de 2023 lido como imagem), São Sebastião de Franca (29, 2024).
- Seguimos o portal, mais novo: **Santa Luzia** (quadro de fevereiro de
  2026, lido como imagem; a página da diocese está velha), **Capelinha**
  (31, 2024: quinta 19h é celebração da Palavra; São Mateus 2º e 4º domingo
  10h), **Rosa Mística** (14, 2024), **Jeriquara** (4, 2023) e **Restinga**
  (30, sem data, id de 2024). Nos três últimos a divergência está na
  observação e a confiança ficou média.
- Seguimos a diocese: **Guará**, cuja página foi editada em setembro de
  2024, depois do portal (2023).

## Correções feitas sobre a fonte

- A página da São Judas Tadeu ainda lista as capelas de antes de 2020:
  Guadalupe, Santa Clara e Santa Maria dos Anjos (hoje da Sagrada Família)
  e Frei Galvão e Bom Jardim (hoje da Rosa Mística). Ficaram só nas
  paróquias novas.
- A página da Santa Rita de Franca tem os links de Facebook e Instagram da
  Sagrada Família; ficaram fora.
- Nomes: "Nossa Senhora da D'Abadia" virou Nossa Senhora da Abadia (como no
  CNPJ); "São Judas" virou São Judas Tadeu; "Santa Gianna" virou Santa
  Gianna Beretta Molla (CNPJ e portal).
- Duas paróquias N. S. Aparecida em Franca e São Joaquim da Barra, e outras
  três com o mesmo título no interior: o nome não leva a cidade (regra do
  FORMATO); a de Franca é a "Capelinha", dita na observação e na localidade.

## Páginas lidas (13/11/2026)

- https://www.diocesefranca.org.br/ e as páginas de paróquia
  `?menu=noticia_detalhe&id=<id>&id_orgao=1` (URLs no campo `fontes`)
- `?menu=noticia_detalhe&id=2026` e `id=2032` (cúria, CNPJ)
- Portais `https://diocesefranca.org.br/?id_orgao=2` a `31` e as páginas de
  horário de cada um
- https://minhareceita.org/45313061000147 e filiais (contatos de Ribeirão
  Corrente, cuja página não traz telefone)
- https://www.psaojose.org.br/horarios/ (site antigo da São José de São José
  da Bela Vista, com horários diferentes; não usado)

## Instagram

Das páginas da diocese e dos portais das paróquias; nenhum perfil foi aberto
por dentro. Onde portal e diocese divergem, ficou o do portal (Jeriquara:
paroquiasaosebastiao_df). Os de Buritizal (pascomburitizal), Sagrada
Família (areapastoralsagradafamilia) e Pedregulho (aparecida12deoutubro) são
os que a página da paróquia aponta.

## O que falta para o próximo estado desta pesquisa

- Reconferir com as secretarias as 32 de confiança média, a começar pelas
  três com divergência (Restinga, Jeriquara, Rosa Mística).
- Confissões: quase nenhuma página publica horário; a maioria remete à
  secretaria ou ao atendimento dos padres.
- Os sites próprios de Menino Jesus (paroquiameninojesus.org.br), São
  Vicente de Paulo (certificado inválido), São Francisco (prsaofrancisco.com.br)
  e Santa Rita de Sales Oliveira não abriram daqui.
- Capelas sem endereço na fonte (Itirapuã, Aramina, Cristais Paulista,
  Sales Oliveira, Igarapava): pedir bairro às paróquias.
- A "1 mission" do GCatholic.
