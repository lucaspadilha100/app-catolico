# Diocese de Dourados (MS): fontes da pesquisa de 13/11/2026

Sé em Dourados; sul do Mato Grosso do Sul (17 municípios). Criada em 15/06/1957
pela bula Inter Gravissima (Pio XII), sufragânea de Campo Grande, Regional
Oeste 1 da CNBB. Bispo: Dom Henrique Aparecido de Lima, C.SS.R.
Cúria: Rua Duque de Caxias, 1284, Jardim Paulista, Dourados, (67) 3422-6910,
WhatsApp (67) 3422-6911, comunicacao@diocesededourados.org.br.
Instagram da diocese: diocesededourados.

## Resumo

- **39 unidades pastorais** em `saida/dourados.json`: 1 catedral, 37 paróquias
  e 1 área missionária (a Região Pastoral Missionária Vista Alegre e Itahum),
  em 6 foranias (Dourados Oeste, Dourados Leste, Amambai, Ponta Porã, Rio
  Brilhante e Fátima do Sul). Bate com o próprio site: "38 Paróquias" em 2025
  (a catedral conta como paróquia) mais a Região Pastoral.
- **18 com horário** (confiança alta), todas com fonte na página da própria
  paróquia no site da diocese, lida em 13/11/2026: Catedral, Bom Jesus, São
  Carlos, Santo André, N. S. do Carmo, Rainha dos Apóstolos, Santa Teresinha,
  São Francisco e São Pedro (Santuário N. S. Aparecida), em Dourados; São
  José (Itaporã), N. S. Auxiliadora (Amambai), São Francisco de Assis
  (Caarapó), Jesus Misericordioso e Santa Faustina (Itamaraty), São José e
  São Vicente de Paulo (Ponta Porã), N. S. Aparecida (Douradina),
  N. S. Auxiliadora (Indápolis) e N. S. de Fátima (Fátima do Sul).
- **21 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. Quase todas têm
  telefone, endereço e e-mail da secretaria tirados da página oficial.
- Todo `id_banco` é null: o banco ainda não tem nada do Mato Grosso do Sul.
- Nenhuma unidade fora do MS (Ponta Porã faz fronteira com o Paraguai, mas
  todas as sedes são do MS): o campo `uf` não foi preciso.

## Lista das unidades

A lista vem do site oficial (diocesededourados.org.br): a página /paroquias/
(paginada em /paroquias/page/2 a /page/5, 38 itens) mais duas páginas de
paróquia que EXISTEM mas faltam na lista, N. S. Aparecida de Douradina e
N. S. Aparecida de Aral Moreira, confirmadas pela página de foranias
(História da Diocese). A mesma página de foranias fecha a conta: 38
paróquias nas 6 foranias mais a Região Pastoral Missionária Vista Alegre /
Itahum (Forania de Ponta Porã).

O Mosteiro Santa Maria dos Anjos (Dourados, 2009), que o site lista junto
das paróquias, ficou FORA do JSON: é mosteiro, não unidade pastoral, e não
há categoria para ele no formato.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 36
igrejas): o anuário não traz Santa Edwiges (Dourados, 2025), São Francisco
de Assis (Caarapó) nem a Região Pastoral Missionária; lista a Auxiliadora de
Indápolis sob "Indápolis" (distrito de Dourados, como a forania de Fátima do
Sul também mostra) e dá a cidade de Laguna Carapã como "Laguna Caarapã". As
estatísticas do GCatholic (2021) dizem 37 paróquias; a Wikipédia em
português, desatualizada, 30.

## Páginas do site da diocese (lidas em 13/11/2026)

Cada paróquia tem página própria em /paroquia/<nome>, com telefone, endereço,
e-mail, redes sociais, secretaria e, em 18 delas, a tabela "Horários de
Missas" (dados estruturados no próprio HTML, atributo data-item). A lista
/paroquias/ carrega por página (page/2, page/3...).

- https://diocesededourados.org.br/ (contatos da cúria, menu)
- https://diocesededourados.org.br/historia-da-diocese/ (foranias, a lista
  oficial e a contagem de 2025)
- https://diocesededourados.org.br/paroquias/ (a lista, paginada)
- https://diocesededourados.org.br/paroquia/<slug>/ (uma por unidade; as 40
  páginas baixadas, 38 da lista + Douradina + Aral Moreira)

Instagram e e-mail de cada paróquia vieram da própria página oficial (não da
busca); os e-mails estavam protegidos pelo Cloudflare e foram decodificados
do atributo data-cfemail.

## Avisos sobre os dados do site

- Dia da semana divergente em 3 unidades: a Catedral e Santo André mostram
  uma missa com o NOME de um dia ("Sábado", "Quinta-feira") cadastrada em
  outro dia; essas linhas foram para `nao_cabe`, sem adivinhar. Rainha dos
  Apóstolos e Jesus Misericordioso têm missa "mensal" sem dizer a semana
  (também em `nao_cabe`).
- Telefone do topo truncado em algumas páginas (Santo André, Santa Teresinha,
  Santo Elias, São Vicente, Jesus Misericordioso): usamos o número da seção
  Secretaria Paroquial da mesma página, que é o mesmo número por inteiro.
- Várias unidades antigas aparecem com "Fundada em 22 de agosto de 2025"
  (São José Operário, São José de Ponta Porã, Vicentina, Divino de Rio
  Brilhante, São Vicente de Paulo, Jesus Misericordioso, Região Pastoral):
  parece a data de um recadastro ou reorganização diocesana, não a fundação;
  as datas não entraram no JSON.
- O site não lista capelas nem comunidades: cada unidade entrou só com a
  matriz. A matriz da Paróquia São Pedro é o Santuário Diocesano Nossa
  Senhora Aparecida (Vila São Pedro, BR 163), como o próprio nome oficial da
  paróquia diz.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/dour0 (anuário, atualizado 09/11/2026)
- https://catholic-hierarchy.org/diocese/ddour.html (cúria, bispo)
- https://pt.wikipedia.org/wiki/Diocese_de_Dourados (desatualizada: 30 paróquias)
- Notícia da romaria de N. S. Aparecida na BR-163 (midiamax.com.br, 2026):
  confirma o santuário na Vila São Pedro.

## O que falta para o próximo estado desta pesquisa

- Horário das 21 unidades sem fonte: o caminho mais provável são os perfis
  das paróquias no Instagram (vários já anotados nos contatos), que a busca
  não indexa por dentro, ou a secretaria por telefone.
- Horário de confissão e adoração: o site só publica missas.
- As capelas e comunidades rurais (o GCatholic fala em 326 "missões") não têm
  lista pública; dependem das paróquias.
- O site antigo (www.diocesededourados.com.br, citado na Wikipédia) está fora
  do ar; o atual é diocesededourados.org.br.
