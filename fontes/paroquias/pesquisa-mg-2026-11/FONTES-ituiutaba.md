# Diocese de Ituiutaba (MG): fontes da pesquisa de 13/11/2026

**A diocese existe**: criada em 16/10/1982 (bula Quo melius), desmembrada de
Uberaba e Uberlândia, sufragânea de Uberaba (GCatholic,
https://gcatholic.org/dioceses/diocese/itui0.htm). Bispo: Dom Valter Magno de
Carvalho, desde 22/05/2025. Padroeiro: São José. GCatholic (anuário de
2022): 36 paróquias, 46 padres.

## Resumo

- **37 unidades** em `saida/ituiutaba.json`: 1 catedral (São José), 5
  santuários-paróquia (N. S. d'Abadia e N. S. Aparecida em Ituiutaba; N. S.
  de Fátima, São Francisco e Santa Jacinta Marto em Iturama; Santa Rita de
  Cássia em Alexandrita; N. S. da Medalha Milagrosa em Campina Verde) e 31
  paróquias. A diocese publica "São 37 Paróquias, 15 municípios e 5
  distritos".
- 5 foranias: São José (Ituiutaba, 12), Cristo Rei (Canápolis, Centralina,
  Capinópolis, Cachoeira Dourada, Ipiaçu: 6), Nossa Senhora das Vitórias
  (Santa Vitória, Gurinhatã, Chaveslândia: 4), Nossa Senhora de Fátima
  (Iturama, Alexandrita, Honorópolis, Itapagipe, São Francisco de Sales,
  Campina Verde: 10) e Nossa Senhora Aparecida e São Sebastião (Carneirinho,
  Limeira do Oeste, Estrela da Barra, União de Minas, São Sebastião do
  Pontal: 5). A página diz 12 na Forania São José e lista 11; a 12ª é a
  Paróquia São João Batista, que está no menu.
- **Nenhuma com horário: 37 com confiança baixa.** O site de paróquias da
  diocese (Webnode) traz histórico, clero, endereço, telefone e às vezes
  e-mail, mas nenhum horário de missa; o blog da diocese só publica notícias
  e reflexões do bispo. Lista em `SEM-HORARIO-ituiutaba.txt`; nenhuma página
  cita Instagram ou Facebook de paróquia.
- Todo `id_banco` é null.

## Lista das unidades

- https://diocese-de-ituiutaba.webnode.page/ ("Paróquias - Diocese de
  Ituiutaba"), ligado pelo blog https://diocesedeituiutaba.blogspot.com/
  (o site que o GCatholic indica). O endereço webnode.com redireciona para
  webnode.page.
- 37 páginas de paróquia baixadas; URLs em `fontes`.

Conferência com o GCatholic (09/11/2026, 37 igrejas, 36 paróquias): a
Paróquia Divino Pai Eterno (Campina Verde) não está no GCatholic. O GCatholic
lista um "Santuário Santa Teresinha do Menino Jesus" em Iturama, que não é
unidade na lista da diocese, e põe o Santuário Santa Rita de Cássia em
"Monte Alto" (a diocese diz Distrito de Alexandrita). O GCatholic põe a
Paróquia N. S. das Vitórias em Ituiutaba; a diocese a põe em Santa Vitória.

## Decisões de leitura

- Distritos: a diocese escreve "Distrito de Alexandrita", "Distrito de
  Honorópolis", "Distrito de Chaveslândia", "Distrito de Estrela da Barra" e
  "Distrito de São Sebastião do Pontal" sem dizer o município. O campo
  `cidade` ficou com o nome do distrito, e o município fica a conferir.
- Telefone: só como publicado; dois vêm sem DDD (São João Batista de
  Ituiutaba, 3269-2660; Santo Antônio de Itapagipe, 3424-1359) e ficaram
  fora do campo, anotados na observação. O segundo número de algumas
  secretarias (celular, sem a marca de WhatsApp) não entrou.
- Só uma capela tem nome e endereço na fonte: Capela Imaculada Conceição
  (Setor Norte, Ituiutaba), ligada à Catedral.

## O que falta para o próximo estado

- Horários de todas as 37: buscar trecho de Instagram ou o perfil da
  diocese numa sessão com busca.
- Municípios dos cinco distritos.
