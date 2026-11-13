# Diocese de Ponta Grossa (PR): fontes da pesquisa de 13/11/2026

Sé em Ponta Grossa; Campos Gerais e região de Irati. Bispo: Dom Bruno Elizeu
Versari (desde 2024). Cúria: Praça Marechal Floriano Peixoto, 581, 1º andar,
Centro, Ponta Grossa, (42) 3224-1140, WhatsApp (42) 99943-0056,
curia@diocesepontagrossa.org.br. Padroeira diocesana: Nossa Senhora Mãe da
Divina Graça.

## Resumo

- **53 unidades** em `saida/ponta-grossa.json`: 1 catedral (Sant'Ana), 51
  paróquias e 1 reitoria (Sagrado Coração de Jesus, Ponta Grossa, que entrou
  como `area_pastoral`, como nas outras reitorias do lote). A diocese divide
  as paróquias em 8 setores (Setor 1 a Setor 8), anotados na observação de
  cada unidade. Cidades: Ponta Grossa (30), Irati (4), Castro (4), Telêmaco
  Borba (2) e uma em cada: Carambeí, Fernandes Pinheiro, Guamiranga, Imbaú,
  Imbituva, Ipiranga, Ivaí, Ortigueira, Piraí do Sul, Reserva, Teixeira
  Soares, Tibagi, Ventania.
- **48 com horário de missa**, todas com confiança alta: o site da diocese
  tem uma página por paróquia com clero, horários, endereço e contato. As
  páginas não têm data, mas o site está em dia (clero de 2026 e as cinco
  paróquias novas de Ponta Grossa já com página).
- **5 sem horário**, confiança baixa: as cinco paróquias novas de Ponta
  Grossa (N. S. Aparecida, N. S. de Nazaré, N. S. dos Anjos, Santa Isabel de
  Portugal e Santa Luzia). A notícia de 11/11/2026 conta as visitas
  missionárias nelas; as páginas trazem só endereço e telefone. Lista em
  `SEM-HORARIO-ponta-grossa.txt`.
- Confissão publicada só na Catedral (segunda e quinta, 13h30 às 17h) e na
  Santa Rita de Cássia (1ª sexta, 17h às 20h30). Adoração: Sant'Ana de Castro
  (quinta, 9h às 17h).
- Duas paróquias têm o santuário como sede, no mesmo endereço: São José
  (Santuário Diocesano de N. S. do Perpétuo Socorro) e São Sebastião
  (Santuário Diocesano de N. S. Aparecida). Entraram como paróquia com a
  primeira igreja de tipo `santuario`.
- O Santuário Diocesano de N. S. das Brotas (Piraí do Sul) tem página própria
  e horário próprio (segunda 19h, domingo 11h30 e 16h); o reitor é o pároco
  do Senhor Menino Deus, cuja missa de segunda é "no Santuário". Entrou como
  igreja da Paróquia Senhor Menino Deus.
- Comunidades: só as 23 da Paróquia Cristo Rei (Ivaí), que a página lista com
  lugar e padroeiro (Imbuia fica no município de Reserva e Pinhalzinho em
  Cândido de Abreu, como a página diz).
- Todo `id_banco` é null.

## Fora do JSON, de propósito

- Rito ucraniano: o site lista 4 paróquias da Arquieparquia de São João
  Batista e da Eparquia de Prudentópolis (Transfiguração em Ponta Grossa,
  Imaculado Coração de Maria em Irati, Sagrado Coração de Jesus em Ivaí,
  N. S. do Perpétuo Socorro em Reserva). Não são da diocese latina.
- Paróquia São João Batista de Canutama (AM): é da Prelazia de Lábrea; o site
  a lista como "Igreja Irmã".
- As páginas próprias dos santuários de Aparecida e do Perpétuo Socorro (sem
  horário), que já são a sede das paróquias acima.

## Conferência da lista

- Site: a página "Paróquias" (61 links) e os 8 setores
  (`pg/ajax/veparoquias.php`, o que a página inicial carrega), que somam
  exatamente as 53 unidades.
- GCatholic (https://gcatholic.org/churches/local/pont2, atualizado em
  09/11/2026; estatística de 2022: 47 paróquias): 45 entradas latinas
  marcadas como paróquia ou catedral, todas no JSON. Faltam no GCatholic as
  sete paróquias mais novas de Ponta Grossa (as cinco sem horário, São
  Francisco de Assis do Borato e São João Paulo II) e a N. S. do Perpétuo
  Socorro de Castro. O GCatholic chama a matriz do Rosário de Castro de
  "Vila Rio Branco"; o site diz Castro, bairro Rio Branco.
- O GCatholic lista também o Santuário de N. S. Mãe da Divina Graça (Vila
  Velha, Ponta Grossa), a capela São Judas Tadeu de Carambeí, o seminário e o
  mosteiro da Ressurreição: o site da diocese não os liga a nenhuma
  paróquia. Pendência.

## Páginas lidas (13/11/2026)

- https://www.diocesepontagrossa.org.br/paroquias
- https://www.diocesepontagrossa.org.br/horarios-de-missa (o mesmo quadro
  das páginas de paróquia)
- Uma página por paróquia, `https://www.diocesepontagrossa.org.br/paroquia/<slug>`
  (o endereço de cada uma está no campo `fontes` do JSON)
- https://www.diocesepontagrossa.org.br/noticias/diocese-conclui-missoes-em-cinco-novas-paroquias-2026-11-11-09-38-16
- https://www.diocesepontagrossa.org.br/telefones e /pagina/padroeira

## Decisões de leitura

- "Sexta-feira 19h (1ª Sexta-feira do mês, Missa do Sagrado Coração)" virou
  missa só na 1ª sexta (`semanas: [1]`), salvo onde a página dá também uma
  sexta comum no mesmo horário.
- Linhas só de novena, terço, grupo de oração ou celebração da palavra não
  entraram. "Quarta 10h, 12h, 14h, 16h, 18h e 20h (Novena)" do Perpétuo
  Socorro do São José ficou fora (são novenas, não missas).
- N. S. de Fátima de Telêmaco Borba: as missas de terça, quinta e sexta são
  no "Templo de Adoração"; ficaram na matriz com essa observação.
- Senhor Menino Deus (Piraí do Sul): as missas na Igreja São José (sexta 19h,
  domingo 8h e 19h) ficaram em `nao_cabe`, porque a página não dá o bairro
  da igreja.
- Telefones como publicados. Bom Jesus de Uvaranas publica "(42) 3226-10411"
  (um dígito a mais): ficou o segundo número. Santa Luzia publica um celular
  com 8 dígitos. O e-mail do Perpétuo Socorro de Ponta Grossa vem com acento
  ("paróquia.p.socorro@..."), deixado de fora. Ventania publica o WhatsApp
  com DDD 41.

## Instagram (só os citados pelas páginas da diocese)

catedralpg, paroquiasaudepontagrossa, paroquiapilarpg, paroquiaemchamas
(Santa Rita), paroquia.sao.josepg, saosebastiaopg, paroquiasjbirati,
saojudas_tadeucastro, pnsnazare_, paroquiasantaisabelpg. Nenhum foi aberto
por dentro.

## O que falta para o próximo estado

- Horário das 5 paróquias novas (os perfis citados estão no
  `SEM-HORARIO-ponta-grossa.txt`; a busca não estava disponível nesta sessão).
- Comunidades e capelas: várias páginas de paróquia trazem no histórico a
  lista de comunidades (Menino Jesus de Reserva, N. S. dos Remédios de
  Tibagi, São João Batista de Irati, Imaculada Conceição de Uvaranas, entre
  outras), em texto corrido, sem lugar claro; não foram extraídas.
- Confissão fora da Catedral e da Santa Rita.
