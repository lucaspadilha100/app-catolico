# Diocese de Montenegro (RS): fontes da pesquisa de 13/11/2026

Sé em Montenegro; Vale do Caí, parte do Vale do Taquari e Triunfo. Bispo:
Dom Carlos Rômulo Gonçalves e Silva. Cúria: Rua Assis Brasil, 1167,
Centro, Montenegro, (51) 3632-3320, recepcao@diocesemontenegro.org.br.
Padroeiro diocesano: São João Batista. Criada em 2008.

## Resumo

- **30 unidades** em `saida/montenegro.json`: 1 catedral (São João Batista)
  e 29 paróquias, em quatro áreas pastorais: Montenegro (6), Bom Princípio
  (9), Estrela (7) e São Sebastião do Caí (7), mais a catedral na Área
  Montenegro. A Paróquia Santo Antônio de Estrela tem a matriz santuário:
  entrou como `paroquia` com a primeira igreja de tipo `santuario`.
- **6 com horário de missa**: Catedral (confiança alta: o cadastro da
  diocese confere com a agenda do site da paróquia), Senhor Bom Jesus
  (Triunfo), Santo Inácio de Loyola (Alto Feliz), N. S. do Rosário
  (Paverama), Santo Antônio (Estrela) e São Sebastião Mártir (São Sebastião
  do Caí), todas com confiança média (cadastro sem data).
- **24 sem horário** (`SEM-HORARIO-montenegro.txt`): o site da diocese não
  publica horário dessas paróquias, e o guia pastoral 2026 não traz
  horários de missa. Os perfis de Facebook e Instagram citados pela diocese
  estão no SEM-HORARIO e, quando não há Instagram, na observação.
- Comunidades só onde o cadastro da diocese as liga à paróquia: 12 da
  Catedral (com horário, três delas em São José do Sul), 3 de Paverama, 6
  de Estrela (sem horário) e 1 do Sagrado Coração de Jesus de Montenegro.
- Todo `id_banco` é null.

## Lista das unidades

O site da diocese (www.diocesemontenegro.org.br, feito na plataforma
Unitas) carrega as paróquias de uma API pública:

- https://montenegro.unitas.app.br/api/churchs-for-maps (53 igrejas: 30
  paróquias e 23 comunidades)
- https://montenegro.unitas.app.br/api/churchs/<slug> (endereço,
  telefones, e-mail, redes, horários)
- https://montenegro.unitas.app.br/api/churchs/<slug>/subchurches
  (comunidades de cada paróquia)

Conferências:

- Guia Pastoral 2026 da diocese (PDF):
  https://storage.unitas.app.br/1/magazines/file/dioc-montenegro-guia-pastoral-2026-digital-Cmt9.pdf
  Seção "6. Paróquias": as mesmas 30 paróquias, por área, com data de
  fundação, endereço, telefones, e-mail, número de comunidades e clero. Foi
  a fonte da área de Brochier, Maratá, Salvador do Sul e São Pedro da
  Serra, que o cadastro do site deixa sem área, e dos telefones fixos.
- GCatholic (https://gcatholic.org/churches/local/montI, 09/11/2026): 30
  paróquias e o Seminário São João Vianney. Bate em tudo.

Nomes que diferem entre o site e o guia (o JSON usa o do site, o guia vai
na observação): Senhor Bom Jesus / "Bom Jesus" (Triunfo); São Miguel
Arcanjo / "São Miguel" (Maratá); Santo Inácio de Loyola / "Santo Inácio"
(Alto Feliz); São Sebastião Mártir / "São Sebastião" (São Sebastião do Caí).

## Sites de paróquia citados pela diocese

- https://www.psjb.org.br/ (Catedral): agenda mensal com as missas, que
  confere com o cadastro da diocese (terça a sexta 18h30, sábado 17h,
  domingo 7h, 9h e 18h).
- https://santuarioestrela.com.br/pagina/1008/?secretaria.html (Santo
  Antônio de Estrela): "Missas: terças 18h30, quintas 15h30, sábados 18h30,
  domingos 8h30 e 19h; Confissões: domingos, durante a missa das 19h". O
  cadastro da diocese diz "sábado a quinta 18h30; domingo 8h30 e 19h". O
  JSON segue o site da paróquia e anota a divergência.

## O que falta para o próximo estado desta pesquisa

- Horário das 24 paróquias sem horário (redes citadas pela diocese, todas
  no Facebook e muitas no Instagram).
- Comunidades das paróquias: o guia dá só o número (de 5 a 23 por
  paróquia); o cadastro do site liga poucas comunidades às paróquias.
- Missas das comunidades de Estrela e confissões em geral.
