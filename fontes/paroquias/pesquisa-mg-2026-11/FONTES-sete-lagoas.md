# Diocese de Sete Lagoas (MG): fontes da pesquisa de 13/11/2026

Sé em Sete Lagoas, região central de Minas; sufragânea de Belo Horizonte.
Sé vacante: Dom Francisco Cota de Oliveira foi transferido para
Itabira-Fabriciano em 13/10/2026 (GCatholic). Cúria: Rua Major Campos, 154,
Centro, Sete Lagoas, (31) 3773-2270, secretaria@diocesedesetelagoas.com.br.
Padroeira diocesana: Imaculada Conceição.

## Resumo

- **41 unidades** em `saida/sete-lagoas.json`, em 24 cidades e 7 foranias
  (Nossa Senhora da Abadia 7, Santa Luzia 7, Santíssimo Sacramento 7,
  Santo Antônio 6, São Geraldo 5, Sant'Ana e São Joaquim 5, Senhor Bom
  Jesus 4):
  - 1 catedral (Santo Antônio, Sete Lagoas);
  - 1 santuário: Santuário de Adoração São Pedro Julião Eymard (Sete
    Lagoas), que a diocese lista entre as paróquias e o GCatholic só como
    santuário;
  - 39 paróquias (17 delas em Sete Lagoas).
- **39 com horário de missa**, todas com confiança alta: a página de cada
  paróquia no site da diocese traz "Horários de Missa" (sem data). A diocese
  só publica missa; nenhuma confissão ou adoração.
- **2 sem horário** (a página diz "Horários não disponíveis"): Santo Antônio
  (Maravilhas) e Sant'Ana e São Joaquim (Santana de Pirapama). Lista em
  `SEM-HORARIO-sete-lagoas.txt`.
- Missas em dia fixo do mês ("No dia 8 do mês") foram para `nao_cabe`.
- Só a matriz de cada paróquia: o site não lista capelas nem comunidades (a
  API tem o filtro `hierarchy=comunidade`, que volta vazio).
- Todo `id_banco` é null.

## Lista das unidades

O site (Next.js na plataforma Unitas) entrega a lista inteira de paróquias
dentro da própria página `/paroquias` e também por uma API aberta:

- https://www.diocesedesetelagoas.com.br/paroquias (41 unidades, com
  forania, bairro e endereço)
- https://diocese-sete-lagoas.unitas.app.br/api/churchs?page=1&hierarchy=paroquia
  (3 páginas, os mesmos 41)
- https://diocese-sete-lagoas.unitas.app.br/api/churchs/<slug> (detalhe: tipo
  de cada telefone, e-mail, redes, horários por categoria e texto extra)

Cada paróquia tem página em
`https://www.diocesedesetelagoas.com.br/paroquias/<slug>?city=<cidade>`
(os endereços estão no campo `fontes` de cada item). Cinco paróquias de
Santo Antônio, três de São Sebastião, duas de Sant'Ana e duas do Sagrado
Coração têm o MESMO slug; a API devolve só a primeira de cada nome, então
para essas os dados vieram da página com `?city=`, que separa pela cidade
(telefone sem o tipo; nenhuma delas publica WhatsApp).

Conferência contra o GCatholic (atualizado em 09/11/2026: 41 paróquias, 52
igrejas): bate em 40. Divergências:

- **Santa Teresa dos Andes** (Sete Lagoas, paróquia desde 1993, forania
  Sant'Ana e São Joaquim, segundo o GCatholic) não aparece na lista da
  diocese. Não entrou; pendência.
- O **Santuário Eymard** está na lista da diocese como paróquia e no
  GCatholic só como santuário. Entrou como `santuario`.
- A Paróquia **Nossa Senhora da Conceição do Barreiro** aparece no site com
  "Barreiro" como cidade; o CEP (35701-531) e o GCatholic a põem em Sete
  Lagoas. Entrou em Sete Lagoas, localidade Barreiro.
- "Martinhos Campos" (site) = Martinho Campos; "Cachoeira do Prata" (site) =
  Cachoeira da Prata.
- A diocese chama de "Paróquia Sant'Ana" (Boa Vista, Sete Lagoas) a que o
  GCatholic lista como Sant'Ana e São Joaquim.

## Contatos

- Telefone fixo em `telefone`; o número que a API marca como `whatsapp` em
  `whatsapp` (às vezes é o próprio fixo, como publicado).
- São Cristóvão (Sete Lagoas): o WhatsApp publicado tem um dígito a mais,
  "(31)9 9 7575-6553"; ficou fora do campo e anotado na observação.
- Divino Espírito Santo (Sete Lagoas): a página publica o e-mail
  santanaesaojoaquimsl@, o mesmo da Paróquia Sant'Ana; ficou fora.
- Instagram: só os perfis que a própria página da paróquia cita
  (catedral.santoantonio, paroquiasagradafamilia7l, paroquiasantana7l,
  paroquiasaojoseop.7l, paroquiadodivino, paroquiacordisburgo,
  pnsrfunilandia, paroquiansra.docarmo, paroquiasaojose_doalmeida).
  Nenhum foi aberto por dentro.
- Sem telefone publicado: Araçaí, Cachoeira da Prata, Fortuna de Minas,
  Maravilhas, Papagaios, Pequi, Prudente de Morais e Santana do Riacho.

## Outras páginas lidas (13/11/2026)

- https://www.diocesedesetelagoas.com.br/vigarios-foraneos (nomes das
  foranias)
- https://www.diocesedesetelagoas.com.br/horarios-das-missas (carrega pela
  mesma API; nada além das páginas de paróquia)
- https://gcatholic.org/dioceses/diocese/sete0.htm e
  https://gcatholic.org/churches/local/sete0 (conferência da lista)

## O que falta para o próximo estado desta pesquisa

- Horários de Maravilhas e de Santana de Pirapama (nenhum perfil próprio
  citado pela diocese).
- Confissões e adoração: a diocese não publica.
- Capelas e comunidades: o site não lista nenhuma (o GCatholic cita, sem
  marca de paróquia, N. S. Aparecida em Sete Lagoas, São Judas Tadeu em
  Maravilhas, N. S. da Paz, São José e São Paulo Apóstolo em Matozinhos,
  N. S. do Rosário em Cordisburgo e em Cachoeira da Prata, São Vicente em
  Cachoeira da Prata, N. S. das Graças em Caetanópolis, Imaculada Conceição
  em Araçaí), sem dizer a qual paróquia pertencem.
- Confirmar se a Paróquia Santa Teresa dos Andes ainda existe (ou se foi
  unida a outra).
