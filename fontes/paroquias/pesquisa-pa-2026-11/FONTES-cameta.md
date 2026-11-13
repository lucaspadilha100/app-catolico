# Diocese de Cametá (PA): fontes da pesquisa de 13/11/2026

Nome atual conferido: **Diocese de Cametá** (Prelazia de Cametá de 1952,
elevada a diocese em 06/02/2013; GCatholic, Catholic-Hierarchy e CNBB Norte
2). Sé em Cametá, no Baixo Tocantins, com a Transamazônica a oeste
(Tucuruí, Breu Branco, Novo Repartimento, Pacajá). Municípios: Baião, Breu
Branco, Cametá, Igarapé-Miri, Limoeiro do Ajuru, Mocajuba, Novo Repartimento,
Oeiras do Pará, Pacajá e Tucuruí. Bispo: Dom Ivanildo Oliveira Almeida
(desde 2023). Cúria: Estrada (Avenida) Cônego Siqueira, 1653, Brasília,
Cametá; (91) 99269-1597 e (91) 99394-5598; secretaria@diocesecameta.com.br;
Instagram @diocesedecameta.

## Resumo

- **22 unidades** em `saida/cameta.json`: 1 catedral (Paróquia Catedral São
  João Batista) e 21 paróquias, em 2 regiões e 4 áreas episcopais:
  - Região Tocantina, Área São Lucas (6): Catedral, Santa Maria, São José
    das Ilhas, São Benedito (Cametá), N. Sra. da Assunção (Oeiras do Pará),
    Imaculada Conceição (Limoeiro do Ajuru).
  - Região Tocantina, Área São Marcos (7): N. Sra. do Carmo (Vila do Carmo),
    N. Sra. do Carmo e São Benedito (Vila de Carapajó), N. Sra. do Pilar
    (Vila de Curuçambaba), todas no interior de Cametá; N. Sra. da Conceição
    (Mocajuba); Sant'Ana e N. Sra. de Nazaré (Vila Maiauatá), em
    Igarapé-Miri; Santo Antônio de Pádua (Baião).
  - Região Transamazônica, Área São Paulo (5): São José, Santa Rita de
    Cássia, Sagrado Coração de Jesus e Menino Jesus (Tucuruí); São
    Sebastião (Breu Branco).
  - Região Transamazônica, Área Maria Mãe dos Povos (4): São Francisco de
    Assis, São José (distrito de Maracajá) e N. Sra. Aparecida (distrito de
    Vitória da Conquista, Rio Gelado), em Novo Repartimento; Cristo Rei
    (Pacajá).
- **21 com horário** (19 de confiança alta, 2 média) e **1 sem horário**
  (São José das Ilhas, confiança baixa).
  - Alta: horário da página da própria paróquia no site da diocese.
  - Média: Breu Branco e Novo Repartimento (São Francisco), cujas páginas no
    site não trazem horário; os horários vêm do Anuário Diocesano 2025
    (janeiro de 2025).
  - Confissão: onde o site não fala de confissão e o Anuário 2025 dá dia e
    hora, a confissão entrou com a observação "anuário 2025".
- **713 capelas e comunidades**, ligadas à paróquia pela lista "Padroeiros
  das comunidades cristãs / bairro ou localidade" de cada paróquia no
  Anuário 2025 (tipo `comunidade`, "Comunidade X" ou "Grupo X" para os
  grupos de evangelização; a Capela Bom Jesus dos Aflitos, da Catedral, como
  `capela`, com a missa de sábado). Em Oeiras do Pará o anuário só dá o
  distrito de cada comunidade (Espírito Santo, Nova Aliança, Esperança,
  Palmares e Assunção, Pe. Arnoldo, Nazaré, São João e São Sebastião,
  Sagrada Família), e é ele que está na localidade. As comunidades criadas
  depois de janeiro de 2025 não estão na lista.
- Todo `id_banco` é null.

## Lista das unidades

A lista é a coleção "Paróquias" do site da diocese (WordPress, tipo
`dc_paroquia`, lido pela API em 13/11/2026: 22 páginas) e as páginas das
quatro áreas episcopais (São Lucas, São Marcos, São Paulo, Maria Mãe dos
Povos), que repartem as mesmas 22. Bate com o Anuário 2025 (20 paróquias e 2
áreas pastorais) e com as notícias do site:

- **São Benedito (Cametá)**: área pastoral em 28/12/2024, quase-paróquia,
  elevada a paróquia em 05/10/2025, com posse do primeiro pároco (notícia de
  07/10/2025).
- **N. Sra. do Pilar (Vila de Curuçambaba, Cametá)**: área pastoral em
  02/01/2025, quase-paróquia, elevada a paróquia em 30/11/2025 (notícia
  "Nova Paróquia Nossa Senhora do Pilar", 02/12/2025).
- As duas páginas do site ainda dizem "Quase-Paróquia"; entraram como
  `paroquia`, pelas notícias.

Conferência contra o GCatholic (atualizado em 09/11/2026; estatística de
2022: 20 paróquias e 1 missão): as 20 paróquias que o GCatholic marca batem
com a diocese, mais as duas recentes acima, que ele ainda não tem. Grafias
diferentes no GCatholic: a paróquia de Vila do Carmo aparece como "Carmo do
Tocantins", São José das Ilhas como "Cupijó", Rio Gelado como "Nova
Conquista", e a matriz de São José de Tucuruí como "Santuário São José" (a
diocese não usa o título). As igrejas sem marca de paróquia no GCatholic (N.
Sra. de Nazaré em Baião; N. Sra. das Graças, das Mercês, de Fátima, do
Perpétuo Socorro, do Rosário, Imaculada Conceição, Santa Rita, São Benedito
dos Inocentes e São Francisco de Assis em Cametá) são igrejas de comunidade.

A "Vila Bom Jardim" (comunidade São Pedro e São Paulo, Paróquia Cristo Rei,
Pacajá) aparece no Anuário 2025 com a nota "nova paróquia". O site, mais
recente, não tem paróquia ali; ficou como comunidade de Cristo Rei.
Conferir numa próxima rodada.

## Páginas lidas (13/11/2026)

- https://diocesecameta.com.br/wp-json/wp/v2/dc_paroquia?per_page=100 (as
  22 páginas de paróquia, com endereço, telefone, e-mail, horário da matriz
  e clero; todas com data de modificação 06/10/2026, que é a data que o
  `fontes` registra. O conteúdo é de 2025 em diante: já traz os párocos das
  transferências de 2025 e os párocos das duas paróquias novas).
- https://diocesecameta.com.br/paroquias/ e as páginas das áreas
  episcopais: /sao-lucas/, /sao-marcos/, /sao-paulo/, /maria-mae-dos-povos/
- https://diocesecameta.com.br/wp-content/uploads/2025/01/ANUARIO-DIOCESANA-ANO-2025-FINAL.pdf
  (Anuário Diocesano 2025: por paróquia, data de criação, endereço,
  telefone/WhatsApp, e-mail, missas na matriz, confissão, clero e a lista
  das comunidades com o lugar)
- As 214 notícias do site (API `posts`), lidas para achar paróquia nova,
  santuário e perfis de rede social.
- https://cnbbn2.com.br/diocese-de-cameta/ (municípios, histórico, cúria)

Quando o site e o anuário divergem (telefone, endereço, e-mail, horário), o
JSON segue o site, que é mais recente. Telefone e WhatsApp do anuário só
entraram onde o site não dá telefone (Limoeiro do Ajuru, Santa Maria,
Carapajó) ou como WhatsApp a mais (Baião). Em Breu Branco o telefone do site
está com um dígito a mais; ficou o do anuário, (94) 99255-3233.

## Redes sociais

O site só cita o Instagram da diocese (@diocesedecameta) e, em duas
páginas, um Facebook (Limoeiro do Ajuru:
facebook.com/imaculadaconceicao.conceicao.3) e um canal do YouTube (Novo
Repartimento). Nenhum Instagram de paróquia; o campo ficou vazio em todas.

## Comunidades sem lugar (ficaram fora do JSON)

- Paróquia São José (Tucuruí): comunidades N. Sra. de Fátima, N. Sra. da
  Luz, Santa Luzia, Cristo Salvador, Cristo Vive e São Jorge, sem bairro no
  anuário.
- Paróquia Cristo Rei (Pacajá): comunidades São José, São Francisco de
  Assis, São Vicente de Paulo, Santa Luísa de Marillac, N. Sra. Aparecida e
  N. Sra. de Nazaré, sem lugar (provavelmente urbanas).
- Paróquia N. Sra. da Assunção (Oeiras do Pará): a lista repete "C.C Nossa
  Senhora Aparecida" no Distrito Espírito Santo; entrou uma só.

## Conferência (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/came1.htm e
  https://gcatholic.org/churches/local/came1 (30 igrejas, 09/11/2026), com
  a página de cada igreja
- https://www.catholic-hierarchy.org/diocese/dcame.html

## O que falta para o próximo estado

- Horário da Paróquia São José das Ilhas (nem o site nem o anuário trazem).
- Horários das comunidades: o site e o anuário só dão a matriz (exceção:
  Capela Bom Jesus dos Aflitos e a igreja do Perpétuo Socorro de
  Igarapé-Miri).
- Confirmar se Vila Bom Jardim (Pacajá) virou paróquia.
- Lista de comunidades das paróquias novas (Pilar e São Benedito já estão,
  pelo anuário, quando ainda eram áreas pastorais).
