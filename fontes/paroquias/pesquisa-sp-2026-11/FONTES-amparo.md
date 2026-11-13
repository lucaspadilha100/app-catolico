# Diocese de Amparo (SP): fontes da pesquisa de 13/11/2026

Sé em Amparo; criada em 23/12/1997 (bula "Ecclesiae Universae"), instalada em
25/03/1998, com território tirado da Arquidiocese de Campinas e de um pedaço
da Diocese de Limeira. Bispo: Dom Luiz Gonzaga Fechio. Padroeira: Nossa
Senhora do Amparo. Onze municípios: Amparo, Mogi Mirim, Itapira, Holambra,
Santo Antônio de Posse, Pedreira, Jaguariúna, Monte Alegre do Sul, Serra
Negra, Lindóia e Águas de Lindóia.

## Resumo

- **36 unidades pastorais** em `saida/amparo.json`: 1 catedral, 33 paróquias
  e 2 áreas pastorais (Santa Edwiges, Jaguariúna, criada em 29/10/2025; Nossa
  Senhora de Guadalupe, Santo Antônio de Posse, criada em 12/12/2025), em 5
  foranias: Jesus Bom Pastor (Amparo, 6), Nossa Senhora do Rosário (Águas de
  Lindóia, Lindóia, Monte Alegre do Sul e Serra Negra, 6), São José (Mogi
  Mirim, 7), Nossa Senhora da Penha (Itapira, 7) e Sant'Ana (Holambra,
  Jaguariúna, Pedreira e Santo Antônio de Posse, 8 paróquias e as 2 áreas).
- **36 com horário de missa** (34 alta, 2 média): o anuário diocesano 2026 traz,
  para cada unidade, endereço, telefones, e-mail, expediente, horários de missa
  e a lista de comunidades e capelas com bairro. O site da diocese tem uma
  página por unidade com contatos, Instagram e horários.
  - Média: Santuário do Senhor Bom Jesus (Monte Alegre do Sul), porque o
    anuário e a página de abril de 2026 discordam na missa de domingo de
    manhã (8h30 contra 8h) e no dia da novena; e São Benedito (Mogi Mirim),
    porque o anuário não traz missa de domingo na matriz e as de 10h e 19h
    vêm só da página da paróquia (setembro de 2025).
- 284 comunidades e capelas com nome e bairro, quase todas do anuário. As
  citadas sem lugar ficaram no `nao_cabe` da matriz.
- 420 linhas de horário: 404 de missa, 11 de adoração, 5 de confissão.
  Confissão só onde a fonte diz "confissões" (São Benedito e São José
  Operário, em Amparo); o "atendimento do padre" das outras não entrou.
- Missas mensais que não cabem no formato (todo dia 13, 19, 22, 26; última
  semana do mês; meses pares e ímpares, alternância entre comunidades) estão
  no `nao_cabe` da igreja, em texto.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Lista das unidades

A lista vem do site da diocese (tipos `paroquia` e `area-pastoral` do
WordPress, 35 + 1 páginas) e bate com o anuário 2026, que relaciona as
unidades de cada forania. A página "Santa Edwiges" está no tipo `paroquia`,
mas o anuário e a própria página (criação em 29/10/2025) dizem que é área
pastoral; entrou como `area_pastoral`.

Conferência contra o GCatholic (https://gcatholic.org/churches/local/ampa0,
36 igrejas): bate nas 33 paróquias mais antigas. Divergências:

- O GCatholic não tem a **Paróquia Santa Josefina Bakhita** (Itapira, criada
  em 08/02/2022) nem as duas áreas pastorais de 2025. Seguimos a diocese.
- O GCatholic chama a paróquia de Jaguariúna de "Beata Irmã Dulce"; a
  diocese, de **Santa Dulce dos Pobres** (canonizada em 2019).
- As outras três igrejas do GCatholic que não são paróquia (Cristo Rei em
  Águas de Lindóia, N. Sra. de Fátima e N. Sra. do Rosário em Amparo)
  entraram como igrejas da paróquia a que pertencem.

Nenhuma das onze cidades aparece nas pesquisas das outras dioceses. Socorro,
Morungaba, Pinhalzinho, Pedra Bela e Tuiuti, vizinhas, estão em
`braganca.json` e não são desta diocese segundo o anuário.

## Fontes (lidas em 13/11/2026)

- **Anuário Diocesano 2026**:
  https://diocesedeamparo.org.br/wp-content/uploads/2026/04/Anuario_2026v2.pdf
  (PDF de 20/03/2026, publicado em 24/04/2026; páginas 26 a 70 têm as
  paróquias). Há uma cópia idêntica em
  `wp-content/uploads/2024/08/Anuario_2026v2-7.pdf`.
- Páginas das unidades no site da diocese (as URLs e a data da última
  alteração de cada uma estão no campo `fontes` do JSON), por exemplo:
  - https://diocesedeamparo.org.br/paroquia/paroquia-catedral-nossa-senhora-do-amparo/
  - https://diocesedeamparo.org.br/paroquia/paroquia-santuario-do-senhor-bom-jesus/
  - https://diocesedeamparo.org.br/paroquia/paroquia-santa-edwiges-jaguariuna/
  - https://diocesedeamparo.org.br/area-pastoral/area-pastoral-nossa-senhora-de-guadalupe-santo-antonio-de-posse/
- Lista por API: https://diocesedeamparo.org.br/wp-json/wp/v2/paroquia?per_page=100
  e https://diocesedeamparo.org.br/wp-json/wp/v2/area-pastoral (a forania
  de cada uma vem na classe `local_paroquia-forania-*`).

### Qual fonte vale quando discordam

O anuário e as páginas do site às vezes trazem horários diferentes. Regra
usada: **vale a mais nova**. O anuário é de março de 2026; vale para todas as
unidades cuja página foi alterada antes disso. Quatro páginas são mais novas
e foram usadas para os horários:

- São João Batista, Amparo (20/05/2026): de fim de semana bate com o anuário.
- Santuário do Senhor Bom Jesus, Monte Alegre do Sul (15/04/2026).
- Área Pastoral Santa Edwiges, Jaguariúna (18/10/2026).
- Área Pastoral N. Sra. de Guadalupe, Santo Antônio de Posse (27/06/2026).

Exceção: São Benedito de Mogi Mirim, cujas missas de domingo na matriz só a
página traz (ver Resumo). Cada divergência que mexe em horário ou endereço
está anotada na `observacao` da unidade. As principais:

- Endereço da matriz diferente na página antiga: São Francisco de Assis
  (Serra Negra), Santa Rita de Cássia (Itapira), Sagrado Coração de Jesus
  (Jaguariúna) e o número do Santuário do Bom Jesus (10 na página, 45 no
  anuário; ficou o 10, da página mais nova).
- Paróquia São Sebastião (Amparo): a fonte só dá o endereço da secretaria;
  a matriz fica no Bairro Ribeirão, sem endereço publicado.
- Paróquia Santa Dulce dos Pobres: nenhuma missa é dada "na matriz"; as
  missas são nas comunidades. A matriz entrou com o endereço da secretaria
  (Rua Maranhão, 3102, Guedes de Baixo) e sem horário.
- Paróquia N. Sra. das Graças (Águas de Lindóia): tem matriz velha (N. Sra.
  das Graças) e matriz nova (Cristo Rei); o endereço da paróquia foi posto na
  primeira, sem a fonte dizer de qual é.

## Contatos

Telefone, e-mail e endereço do anuário (o mais novo), salvo nas quatro
unidades acima. Só números e e-mails da paróquia; celular entrou em
`whatsapp` quando a fonte diz "WhatsApp", e "Cel." sem essa indicação ficou
de fora. A Área Pastoral Santa Edwiges tem só um celular na página da
diocese, posto em `telefone`.

Os sites de paróquia citados no anuário não abriram em 13/11/2026
(paroquiaarcadas.com.br, paroquiasaobeneditoamparo.org.br,
paroquiadesaobenedito.org.br, paroquiasbi.org.br, paroquiasagrado.com.br,
psantoantoniopedreira.com.br, paroquiasai.org.br; sbjesus.com.br mostra só a
página da hospedagem). O campo `site` ficou vazio em todas.

## Instagram (dos links das páginas da diocese)

Nenhum perfil foi aberto por dentro. catedral_nsra_amparo, pascom_nsaparecida,
pascomsbenedito, psjbamparo, sjoamparo, pssamparo (Amparo); paroquiaal,
paroquiansraapaguas (Águas de Lindóia); santuariobj (Monte Alegre do Sul);
paroquiansblindoia (Lindóia); paroquia.saofrancisco, paroquiadorosariosn
(Serra Negra; o segundo é do anuário, porque a página liga para um "local" do
Instagram); matriz_imaculada, paroquiasantacruzmogimirim, saobeneditomogi,
saojoaquimesantana.mm, saojosemogimirim, saopedromogi, paroquiasr.bomjesus
(Mogi Mirim); nsaparecidadosprados, paroquia.nspenha, paroquiasritacassia,
paroquiasantajosefinabakhita, paroquiasai, saobeneditoitapira,
sjudastadeuparoquia (Itapira); p.divinoespiritosantoholambra (Holambra);
sagradocoracaodejesusjgu, paroquiasantadulce, pstamariajaguariuna,
areapastoralsantaedwigesjaguar (Jaguariúna); nsaparecidatriunfo,
paroquiasantanapedreira, santoantoniopedreira (Pedreira); pasantoantonio,
areapastoralguadalupe (Santo Antônio de Posse).

Divergência: o anuário escreve @sjo.amparo para a Paróquia São José
Operário; a página liga para sjoamparo, que foi o usado.

## O que falta para o próximo estado desta pesquisa

- Horários de confissão: quase todas as paróquias só publicam o
  "atendimento do padre", sem dizer se é confissão.
- Comunidades rurais sem horário (Santa Cruz de Mogi Mirim tem 24 capelas e
  comunidades, N. Sra. do Rosário de Serra Negra tem 11 sem horário).
- Reconferir o Santuário do Senhor Bom Jesus (domingo 8h ou 8h30) e a missa
  de domingo na matriz de São Benedito (Mogi Mirim) com a secretaria ou com
  o próximo anuário.
- Endereço da matriz de São Sebastião (Amparo) e qual é a igreja matriz da
  Paróquia Santa Dulce dos Pobres.
