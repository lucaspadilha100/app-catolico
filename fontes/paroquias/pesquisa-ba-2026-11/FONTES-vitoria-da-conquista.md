# Arquidiocese de Vitória da Conquista (BA): fontes da pesquisa de 13/11/2026

Sé metropolitana em Vitória da Conquista; planalto do sudoeste baiano e
vale do Rio Pardo (Itapetinga). Arcebispo: Dom Vítor Agnaldo de Menezes
(posse em 2025). Província: Caetité, Jequié, Livramento de Nossa Senhora e
Bom Jesus da Lapa. WhatsApp oficial no site: (77) 2101-5764. Padroeira:
Nossa Senhora das Vitórias.

## Resumo

- **41 unidades pastorais** em `saida/vitoria-da-conquista.json`: 1
  catedral (Catedral Metropolitana N. Sra. das Vitórias) e 40 paróquias.
  Vitória da Conquista tem 18 (com as dos distritos de Lagoa das Flores,
  José Gonçalves, Inhobim e Pradoso), Itapetinga 3, Poções 2, Cândido Sales
  2 (uma no distrito de Quaraçu) e as demais cidades uma cada.
- O site organiza em 6 foranias (São João, São Lucas, São Marcos, São
  Mateus, São Paulo Apóstolo e São Pedro) e 4 vicariatos (São João, São
  Lucas, São Marcos e São Mateus); a observação de cada item dá os dois.
- **39 com horário** (38 alta, 1 média). Missas e, onde a página dá,
  adoração (8 horários). Confissão: o site não publica.
- **2 sem horário** (confiança baixa): N. Sra. Mãe da Divina Providência
  (bairro Felícia) e São Francisco de Assis (Pradoso). As páginas dizem só
  "Missa", sem dia nem hora.
- A de confiança média é N. Sra. Aparecida (Jurema): a lista de horários não
  traz missa na matriz e põe missas na "Comunidade Mãe da Divina
  Providência", que hoje parece ser a paróquia nova do bairro Felícia.
- 52 capelas e comunidades, todas nomeadas nas próprias listas de horário
  das paróquias. Sem bairro na fonte, ficaram com a cidade e a localidade
  vazia (exceto Lindo Horizonte, distrito de Vitória da Conquista).
- Horários que não cabem no formato ficaram em `nao_cabe`: "dia 13 de cada
  mês" e "última terça" (Barra do Choça), "último domingo" (Capela Menino
  Jesus de Praga, Itapetinga), missa na UNEX (N. Sra. das Graças) e a missa
  do 2º domingo às 15h sem local (Ribeirão do Largo).
- O site não publica telefone, e-mail nem perfil de rede das paróquias:
  `contatos` vazio em todas.
- Todo `id_banco` é null.

## Lista das unidades

O endereço que o GCatholic e a Wikipédia dão (arquiconquista.org.br) está
fora do ar: o Cloudflare responde "404 page not found" para qualquer
caminho. O site atual é https://arquiconquista.digital (é o link oficial na
Wikipédia; o site tem o WhatsApp, o Instagram arquiconquista e o app da
arquidiocese). A lista vem da API desse site
(WordPress, tipo `paroquia`, 41 itens) e bate com a página "Nossas
Paróquias" e com a página "Horário das Missas".

Conferência contra o GCatholic (atualizado em 09/11/2026: 33 igrejas, 31
paróquias; estatística de 2022 com 34): as 31 batem. As 10 que o GCatholic
ainda não tem: Bom Jesus (Lagoa das Flores; o GCatholic tem lá só a Igreja
Santo Antônio, sem marca de paróquia), N. Sra. Aparecida (Itapetinga), N.
Sra. da Conceição e São Francisco de Assis (José Gonçalves), N. Sra. da
Piedade (Quaraçu), N. Sra. do Rosário, N. Sra. Mãe da Divina Providência,
Sagrado Coração de Jesus, Santa Dulce dos Pobres, Santa Rita de Cássia
(Poções) e São Francisco de Assis (Pradoso). Fora da lista: o Seminário
Arquidiocesano N. Sra. das Vitórias. A Wikipédia fala em 28 paróquias
(número antigo).

## Páginas lidas em 13/11/2026

- https://arquiconquista.digital/paroquias/
- https://arquiconquista.digital/horario-das-missas/
- https://arquiconquista.digital/wp-json/wp/v2/paroquia?per_page=100 (os 41
  itens, com forania e vicariato; data de alteração entre 01/08/2026 e
  04/11/2026, usada como data das fontes)
- https://arquiconquista.digital/wp-json/wp/v2/vicariato e
  .../local_paroquia (nomes das foranias e vicariatos)
- Uma página por paróquia (https://arquiconquista.digital/paroquia/<slug>/),
  com endereço, padre responsável e lista de horários (dia, hora, local);
  URL no campo `fontes` de cada item.

## Pendências

- Poções: a Paróquia Divino Espírito Santo lista uma "Comunidade Santa
  Rita" com missa de domingo às 17h; a Paróquia Santa Rita de Cássia, nova,
  tem missa de domingo às 8h e 17h na matriz. Pode ser a mesma igreja.
- N. Sra. das Candeias lista a "Comunidade N. Sra. de Guadalupe e Santa
  Dulce dos Pobres"; as duas viraram paróquias. Conferir se a comunidade
  ainda é das Candeias.
- Ibicuí: a missa e a adoração de quinta não dizem o local (ficaram na
  matriz).
- Contatos de secretaria: o site não publica; a rodada de busca pode tirar
  dos perfis das paróquias.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/vito2.htm e
  https://gcatholic.org/churches/local/vito2
- https://pt.wikipedia.org/wiki/Arquidiocese_de_Vitória_da_Conquista (só
  para achar o endereço novo do site e a lista de municípios)
