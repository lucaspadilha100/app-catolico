# Arquidiocese de Joinville (SC): fontes da pesquisa de 13/11/2026

Sé metropolitana desde 05/11/2024 (antes Diocese de Joinville, criada em
1927), com Blumenau e Rio do Sul como sufragâneas. Arcebispo: Dom Francisco
Carlos Bach. Cúria: Rua Jaguaruna, 147, CEP 89.201-450, Joinville,
contato@arquijoinville.com.br. Padroeiro: São Francisco Xavier (3 de dezembro).

## Resumo

- **67 unidades pastorais** em `saida/joinville.json`: 1 catedral (São
  Francisco Xavier) e 66 paróquias, em 6 comarcas: Joinville Norte (17),
  Joinville Sul (16), Jaraguá do Sul (13), São Francisco do Sul (9), São Bento
  do Sul (7) e Mafra (5). São as contagens que a própria página "Comarcas" do
  site publica, e batem com a lista de paróquias do site.
- Cidades: Joinville (31), Jaraguá do Sul (7), Guaramirim, Mafra, São Bento do
  Sul e São Francisco do Sul (3 cada), Araquari, Barra Velha, Campo Alegre,
  Itaiópolis e Rio Negrinho (2 cada) e uma em Balneário Barra do Sul, Corupá,
  Garuva, Itapoá, Massaranduba, Schroeder e São João do Itaperiú.
- **61 com horário de missa na matriz** (confiança alta) e **6 sem horário**
  (confiança baixa; a página da paróquia não publica): Senhor Bom Jesus
  (santuário, Araquari), São José (Corupá), Nossa Senhora das Graças (Barra do
  Rio Cerro, Jaraguá do Sul), São Paulo Apóstolo (João Costa, Joinville), São
  José (Mafra) e Nossa Senhora Aparecida (santuário, Mafra). Algumas dessas têm
  horário em comunidades.
- **341 comunidades** com nome e lugar, ligadas à paróquia que o site indica;
  246 delas com horário. Total de igrejas no arquivo: 408, 307 com horário.
- 4 paróquias têm a matriz santuário e entraram como `paroquia` com a
  primeira igreja de tipo `santuario` (molde de Taubaté): Sagrado Coração de
  Jesus (Bucarein, Joinville), Nossa Senhora Aparecida (Mafra), Nossa Senhora
  da Graça (São Francisco do Sul) e Senhor Bom Jesus (Araquari).
- Adoração entrou só onde o texto da página dá dia e hora (Barra Velha,
  Santa Paulina de São Francisco do Sul e 7 comunidades dela, Avaí, Adhemar
  Garcia, Serra Alta, São Sebastião de Jaraguá, Bom Jesus de Guaramirim, Barra
  do Sul, e as comunidades Santo Amaro, Santa Paulina de Adhemar Garcia e São
  Luiz Gonzaga de Jaraguá). Confissão com hora
  fixa: nenhuma página publica.
- Instagram só quando a própria página da paróquia traz o link (11 paróquias).
- Todo `id_banco` é null.

## Como os dados foram lidos

O site (https://www.arquidiocesejoinville.com.br/) é feito na plataforma
Unitas (Next.js). Os dados vêm no próprio HTML, no bloco de dados do
React (`self.__next_f`), e foram lidos com curl, sem navegador:

- https://www.arquidiocesejoinville.com.br/paroquias : a lista
  `allChurches` com 451 igrejas (67 paróquias e 384 comunidades), cada
  uma com nível, comarca, cidade, endereço e horários.
- https://www.arquidiocesejoinville.com.br/paroquias/<slug> : uma página por
  paróquia (67 lidas em 13/11/2026) com telefone, e-mail, redes, o texto
  livre da paróquia e a lista `subChurches` (as comunidades dela, 364 no
  total). As URLs estão no campo `fontes` de cada item.
- https://www.arquidiocesejoinville.com.br/comarcas : as 6 comarcas, com o
  número de paróquias e os bairros de cada uma.
- https://www.arquidiocesejoinville.com.br/horarios-das-missas (mesmos
  horários, confere).

O campo de horários de cada igreja vem estruturado ("Domingo: 08h00 e
10h00", "1ª Sexta do mês: 19h00", "No dia 19 do mês: 15h00", "Última Quinta
do mês: 19h00"). "Nª X do mês" virou `semanas`; "dia N do mês" e "última X
do mês" foram para `nao_cabe`. Repetição de 1ª sexta igual à missa semanal
foi descartada.

Correções sobre o dado estruturado, feitas a partir do texto da própria página:

- Comunidades de Santa Paulina (São Francisco do Sul): o quadro marca como
  missa o que o texto diz ser celebração da Palavra ou Infância Missionária;
  ficou o que o texto diz ser missa, o resto em `nao_cabe` (Pedro Apóstolo,
  Sagrado Coração, São Francisco, Santo Antônio, Santa Clara, São Judas
  Tadeu, Nossa Senhora Aparecida).
- Santo Amaro (Barra do Sul) e Santa Paulina (Adhemar Garcia): a quinta 15h
  e o sábado 15h são adoração, não missa.
- Catedral: o quadro dá domingo 8h, 10h e 19h; o texto livre da mesma página
  dá só 8h e 10h. Ficou o quadro (anotado na observação).
- Cidade errada no site: Garuva e Itapoá apareciam como Joinville (e as
  comunidades de Itapoá também); "São João de Itaperiú" virou São João do
  Itaperiú. A comunidade Santa Paulina do Santuário de Mafra vem com endereço
  geocodificado em Blumenau: ficou como pendência.
- A paróquia Imaculada Conceição (Boa Vista) vem sem comarca no site; a página
  de comarcas põe Boa Vista em Joinville Norte.

Telefone: o primeiro fixo publicado; WhatsApp só quando a página diz que o
número é WhatsApp. E-mails são os da secretaria (psecNN@diocesejoinville.com.br
ou @arquijoinville.com.br).

## Conferência da lista

- https://gcatholic.org/dioceses/diocese/join0.htm e
  https://gcatholic.org/churches/local/join0 (atualizado em 09/11/2026):
  catedral e 65 paróquias de rito latino, estatística de 2022 com "65
  parishes". Bate cidade a cidade com o site, menos uma: a **Paróquia Sagrado
  Coração de Jesus de Bateias de Baixo (Campo Alegre)**, que o site lista como
  paróquia e o GCatholic não. Seguimos a arquidiocese.
- O GCatholic põe o "Instituto Padre Aloísio" junto da paróquia do Rosário de
  Jaraguá; não é unidade pastoral e ficou fora.
- No território há 2 paróquias ucranianas (Sagrada Família, Itaiópolis; N. S.
  do Perpétuo Socorro, Mafra), de outra circunscrição (rito bizantino
  ucraniano). Não entram aqui.

## Pendências

Comunidades que o site lista sem paróquia (não estão em nenhuma
`subChurches`); ficaram fora do JSON:

  - Comunidade Imaculada Conceição (Guaramirim, comarca Jaraguá do Sul): Estrada Jacu-Açu, s/n
  - Comunidade Santíssima Trindade (Guaramirim, comarca Jaraguá do Sul): SC-108, 41 - Barro Branco, Guaramirim - SC, 89270-000, Brasil
  - Comunidade Nossa Senhora Aparecida (Itaiópolis, comarca Mafra): Contagem Worell
  - Comunidade Nossa Senhora Aparecida (Itaiópolis, comarca Mafra): Made-Mate
  - Comunidade Nossa Senhora das Graças (Mafra, comarca Mafra): Mafra - SC, 89300-000, Brasil
  - Comunidade Nossa Senhora de Fátima (Mafra, comarca Mafra): Rio Preto do Sul, Mafra - SC, 89300-000, Brasil
  - Comunidade Santa Cruz (Mafra, comarca Mafra): Rio Preto do Sul, Mafra - SC, 89300-000, Brasil
  - Comunidade Nossa Senhora Auxiliadora (Massaranduba, comarca Jaraguá do Sul): R. 11 de Novembro - Centro, Massaranduba - SC, 89108-000, Brasil
  - Comunidade Nossa Senhora da Glória (Massaranduba, comarca Jaraguá do Sul): Massarandubinha S/N
  - Comunidade Nossa Senhora da Saúde (Massaranduba, comarca Jaraguá do Sul): Segundo Braço do Norte, S/N
  - Comunidade Nossa Senhora das Dores (Massaranduba, comarca Jaraguá do Sul): Treze de Maio Alto S/N
  - Comunidade Nossa Senhora de Fátima (Massaranduba, comarca Jaraguá do Sul): Treze de Maio Baixo S/N
  - Comunidade Nossa Senhora do Bom Parto (Massaranduba, comarca Jaraguá do Sul): Alto Freimann S/N
  - Comunidade São Domingos Sávio (Massaranduba, comarca Jaraguá do Sul): Patrimônio, Massaranduba - SC, 89108-000, Brasil
  - Comunidade São José (Massaranduba, comarca Jaraguá do Sul): Braço Direito S/N
  - Comunidade São João Bosco (Massaranduba, comarca Jaraguá do Sul): Estr. Ribeirão da Lagoa, Massaranduba - SC, 89108-000, Brasil
  - Comunidade São Miguel (Massaranduba, comarca Jaraguá do Sul): Alto Massarandubinha S/N
  - Comunidade São Cristóvão (Rio Negrinho, comarca São Bento do Sul): Campo Lençol Rio negrinho/SC, Rio Negrinho
  - Comunidade São Jorge (Rio Negrinho, comarca São Bento do Sul): Serro Azul Rio negrinho/SC, Rio Negrinho
  - Comunidade São José (Rio Negrinho, comarca São Bento do Sul): Queimados Rio negrinho/SC, Rio Negrinho

Comunidades de uma paróquia que vêm sem lugar (só a cidade ou endereço
inválido); ficaram fora do JSON:

  - Comunidade Nossa Senhora da Luz (Paróquia Nossa Senhora da Medalha Milagrosa, Itaiópolis)
  - Comunidade Santo Antônio (Paróquia Nossa Senhora da Medalha Milagrosa, Itaiópolis)
  - Comunidade Santa Isabel (Paróquia Nossa Senhora Imaculada Conceição, Itapoá)
  - Comunidade São João Batista (Paróquia Nossa Senhora Medianeira, Joinville)
  - Comunidade São João Batista (Paróquia São Domingos Sávio, Joinville)
  - Comunidade Sagrado Coração de Jesus (Paróquia Nossa Senhora das Graças, Mafra)
  - Comunidade Santo Antônio (Paróquia Nossa Senhora das Graças, Mafra)
  - Comunidade Nossa Senhora de Fátima (Paróquia Nossa Senhora das Graças, Mafra)
  - Comunidade Nossa Senhora de Lourdes (Paróquia São José, Mafra)
  - Comunidade Santa Paulina (Paróquia São José, Mafra)
  - Comunidade Divino Espírito Santo (Paróquia São José, Mafra)
  - Comunidade Escola Corredeiras (Paróquia São José, Mafra)
  - Comunidade Nossa Senhora da Glória (Paróquia São José, Mafra)
  - Comunidade São Sebastião (Paróquia São José, Mafra)
  - Comunidade São Pedro e São Paulo (Paróquia São José, Mafra)
  - Comunidade Santa Paulina (Paróquia Nossa Senhora Aparecida, Mafra)
  - Comunidade Divino Espírito Santo (Paróquia Nossa Senhora Aparecida, Mafra)
  - Comunidade Cristo Rei (Paróquia Nossa Senhora Aparecida, Mafra)
  - Comunidade Nossa Senhora Aparecida (Paróquia Nossa Senhora Aparecida, Mafra)
  - Comunidade Nossa Senhora da Glória (Paróquia Nossa Senhora Aparecida, Mafra)
  - Comunidade Nossa Senhora da Piedade (Paróquia Nossa Senhora Aparecida, Mafra)
  - Comunidade Nossa Senhora da Salete (Paróquia Nossa Senhora Aparecida, Mafra)
  - Comunidade Nossa Senhora das Mercês (Paróquia Nossa Senhora Aparecida, Mafra)

Outras pendências:

- Horário das 6 matrizes sem horário (ver Resumo). A busca na web acabou
  (limite de buscas da sessão) antes de procurar perfis dessas paróquias.
- O site não publica confissão com hora em nenhuma paróquia.
- A Paróquia São José de Mafra e o Santuário Aparecida de Mafra têm 15
  comunidades cada, metade sem lugar.
