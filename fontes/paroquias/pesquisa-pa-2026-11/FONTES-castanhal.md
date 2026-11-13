# Diocese de Castanhal (PA): fontes da pesquisa de 13/11/2026

Sé em Castanhal, nordeste do Pará. Criada em 29/12/2004 (de Belém e de
Bragança do Pará), instalada em 27/02/2005. Bispo: Dom Manoel de Oliveira
Soares Filho (desde 24/03/2026); emérito Dom Carlo Verzeletti. Catedral Santa
Maria Mãe de Deus, Castanhal. WhatsApp da diocese no site: 55 91 9203-1204.
Instagram da diocese: diocesecastanhal; Facebook: diocesedecastanhal.

## Resumo

- **40 unidades** em `saida/castanhal.json`: 1 catedral e 39 paróquias, em 6
  foranias: São José (as 11 de Castanhal), Santa Izabel (7), Nossa Senhora
  Auxiliadora (7, com Inhangapi), Nossa Senhora do Perpétuo Socorro (5), Nossa
  Senhora do Rosário (5) e São Pedro (5: Salinópolis 2, Nova Timboteua,
  Santarém Novo, São João de Pirabas). Inhangapi ficou com a forania de
  Igarapé-Açu, de cuja ficha veio.
- **34 com horário de missa** (31 alta, 3 média), todos do site oficial da
  diocese. Quase sempre o site dá só as missas de domingo e sábado; confissão
  só na Paróquia São José (quinta, 15h30).
- **6 sem horário** (confiança baixa): Jesus Cristo Jovem e N. S. Imaculada
  Conceição de Santarém Novo (a ficha não traz horário); N. S. da Conceição e
  N. S. de Fátima de Santa Izabel do Pará (horários sem o dia, guardados no
  `nao_cabe`); N. S. de Nazaré de Vigia (domingo da paróquia inteira sem
  dizer a igreja, no `nao_cabe`); São Vicente Ferrer de Inhangapi (ver abaixo).
- **1.099 comunidades e capelas** com nome e lugar, ligadas à paróquia que o
  site indica (1.094 comunidades, 3 capelas, 2 santuários: N. S. de Nazaré do
  Apeú e Madre de Deus de Vigia). As que o site lista sem lugar ficaram no
  `nao_cabe` da matriz (Macapazinho, Santa Rita de Santa Maria do Pará e os 5
  "núcleos" rurais de Curuçá).
- Todo `id_banco` é null: o banco não tem nada do Pará.

## A fonte: o site da diocese

https://diocesedecastanhal.com.br/ (lido em 13/11/2026). É um aplicativo
React (feito no Lovable) que não traz texto no HTML: as fichas das paróquias
estão dentro do arquivo
https://diocesedecastanhal.com.br/assets/index-C1rRf3Sj.js, numa lista com
nome, cidade, forania, endereço, telefone, e-mail, horário de missa
(`massSchedule`), clero e comunidades (urbanas e rurais). A página de cada
paróquia é `https://diocesedecastanhal.com.br/paroquias/<n>` (n de 1 a 39),
que é a URL citada em `fontes`. O mesmo arquivo traz a lista do clero com a
forania de cada paróquia (de onde saiu a Forania São Pedro, que as fichas
deixam em branco) e a página "Sobre": 40 paróquias, 6 foranias, 26
municípios. O site é deste ano (imagem de prévia de 30/03/2026; já traz o
bispo novo). Os domínios diocesedecastanhal.com (Wix desligado),
diocesedecastanhal.org ("em construção") e o blog antigo não servem.

Leituras feitas na tela do site:
- São Caetano de Odivelas: "Missas dominicais: 08h00, 18h00 no sábado
  19hs30" lido como domingo 8h e 18h e sábado 19h30 (média).
- Maracanã: "09h00 e 18h00 e 19h00 (sábado)" lido como domingo 9h e 18h e
  sábado 19h.
- Santa Cruz (Castanhal): domingo 9h na Capela do Calvário (N. S. das Dores)
  e sábado 17h na Capela Monte Sinai (São Sebastião) entraram nessas capelas;
  o domingo 18h, sem igreja, ficou no `nao_cabe`.
- Santa Izabel de Portugal: "3º dom 09h00" virou domingo 9h, semana 3.
- São Sebastião de Igarapé-Açu: sábado "19h300" lido como 19h30 (média).

## Inhangapi (a 40ª paróquia)

O site diz 40 paróquias e lista 39. A que falta é a Paróquia São Vicente
Ferrer, de Inhangapi: está no GCatholic (Igreja São Vicente Férrer, marcada
como paróquia, https://gcatholic.org/churches/brazil/72190) e na lista da
Wikipédia (que bate com as 40). No site ela está DENTRO da ficha da Paróquia
São Sebastião de Igarapé-Açu: no meio das comunidades urbanas aparece "São
Vicente Ferrer (matriz), Centro" com quatro comunidades da Vila Nova, e mais
adiante um marcador "INHANGAPI" seguido de 42 comunidades rurais (Patauateua,
Muraiteua, Itaboca...). Separamos: essas comunidades foram para São Vicente
Ferrer. O horário da ficha também vem duplo ("Missas dominicais: 07h00, 09h00,
19h00 | Sábado: 18h00, 19h30 | Missas dominicais: 08h00 e 19h00"): o primeiro
ficou com Igarapé-Açu; o segundo, que parece ser de Inhangapi, ficou só como
texto nas duas, sem virar horário.

## Conferência da lista

- GCatholic (https://gcatholic.org/dioceses/diocese/cast2.htm e
  https://gcatholic.org/churches/local/cast2, atualizado em 09/11/2026): 36
  paróquias em 2022, 56 igrejas, 35 marcadas como paróquia. Todas batem com o
  site. O site tem 5 que o GCatholic não tem (são mais novas): São Barnabé,
  São Carlo Acutis e São Paulo VI (Castanhal), N. S. da Conceição (Santa
  Izabel do Pará) e N. S. Rainha da Paz (Salinópolis, Farol Velho/Atalaia).
  A "Colônia do Prata, São Jorge" do GCatholic deve ser a Paróquia São Jorge
  do Km 18 (Igarapé-Açu); ficou assim, com nota.
- Wikipédia (https://pt.wikipedia.org/wiki/Diocese_de_Castanhal): 40
  paróquias em 6 foranias; a lista inclui São Vicente Ferrer.
- Santa Bárbara do Pará aparece entre os municípios no site de Castanhal,
  mas nenhuma paróquia de lá está nas fichas; as paróquias da cidade estão na
  pesquisa da Arquidiocese de Belém (`saida/belem.json`).

## Contatos

Telefone, e-mail e endereço vêm da ficha do site, como publicados. Ajustes:
o telefone de Colares veio sem DDD (98575-6555, recebeu o 91); o de Santo
Antônio do Tauá veio como "091 91986328225"; o e-mail de N. S. de Fátima de
Santa Izabel está cortado no site e ficou vazio; São Barnabé e São Carlo
Acutis têm a ficha incompleta (telefone vazio). Nenhuma ficha cita Instagram
de paróquia.

## Não usadas

- A imagem da Catedral no site vem do horariosmissa.com.br (agregador): só a
  foto, nada dele entrou.
- A API do site (Supabase) não foi consultada; só o arquivo público da
  página.

## O que falta para o próximo estado desta pesquisa

- Missas de semana e confissões: o site só dá o fim de semana.
- Horários de Jesus Cristo Jovem, Santarém Novo, Inhangapi, das duas
  paróquias de Santa Izabel (sem o dia) e de Vigia (sem a igreja). Perfis de
  Instagram de paróquia: nenhum citado pela diocese; buscar na próxima rodada.
- Confirmar a Colônia do Prata (GCatholic) como a Paróquia São Jorge do Km 18.
