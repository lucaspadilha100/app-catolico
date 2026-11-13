# Diocese de Frederico Westphalen (RS): fontes da pesquisa de 13/11/2026

Sé em Frederico Westphalen; Médio e Alto Uruguai, noroeste do Rio Grande do
Sul. Sufragânea de Passo Fundo. Cúria: Rua do Comércio, 672, 3º andar,
Frederico Westphalen, (55) 3744-3782 e (55) 3744-2789,
secretariafw@diocesefw.com.br. Padroeiros diocesanos: Beatos Manuel Gómez
González e Adílio Daronch.

## Resumo

- **43 unidades** em `saida/frederico-westphalen.json`: 1 catedral (Santo
  Antônio), 40 paróquias, 1 quase-paróquia (Santa Isabel da Hungria, Vista
  Gaúcha) e 1 reitoria (N. S. de Lourdes, distrito de Osvaldo Cruz,
  Frederico Westphalen), que entrou como `area_pastoral` por não haver
  categoria de reitoria.
- **Só 3 com horário de missa**: Catedral (alta: segunda a sexta 7h30 e 18h
  na cripta, sábado 16h30, domingo 7h30, 9h e 19h), Iraí (média: quinta e
  sábado 19h, domingo 8h30) e Erval Seco (média: quarta e sábado 19h; a
  página fala de eventos de 2024 e não traz missa de domingo). As outras 40
  páginas de paróquia do site são só histórico e contato: entraram com
  `horarios: []` e confiança baixa. Lista em `SEM-HORARIO-frederico-westphalen.txt`.
- 151 igrejas no total: além das matrizes, as capelas e comunidades que as
  páginas listam com nome e lugar (Alpestre 18, Cerro Grande 18 com a de Novo
  Tiradentes, Coronel Bicaco 13, Iraí 17, Nova Candelária 7, Novo Barreiro 16,
  Santa Teresinha de Padre Gonzales 18) e o Santuário Diocesano dos Beatos
  Manuel e Adílio, ligado à paróquia de Nonoai pelo quadro de 2017.
- Todo `id_banco` é null.

## Lista das unidades

A página https://www.diocesefw.com.br/paroquias lista 43 entradas, cada uma
com página `/paroquia/<id>/<slug>`. Conferência:

- GCatholic (09/11/2026): 39 igrejas paroquiais, estatística de 2022 "40
  parishes, 3 missions". Bate com as 39 paróquias antigas do site. Não estão
  no GCatholic: Pinhal (N. S. Imaculada Conceição), Santa Teresinha do Menino
  Jesus de Padre Gonzales (Três Passos, criada em 2024, desmembrada de Santa
  Inês), a Quase-Paróquia de Vista Gaúcha e a Reitoria de Osvaldo Cruz
  (criada em 2012, desmembrada de Taquaruçu do Sul).
- Lista telefônica da diocese (PDF de 09/2026): as mesmas 43 entradas, mais
  seminários, livraria e o Santuário da Divina Misericórdia.

Áreas: o site tem a página de foranias com 7 foranias (São Mateus, São Paulo,
São Lucas, São Tiago, São João, São Pedro e São Marcos) e o vigário forâneo
de cada uma, mas não diz quais paróquias formam cada forania. O único quadro
com a divisão é o PDF "Diocese de FW (dados)" de 2017, com 7 áreas pastorais
(Frederico Westphalen, Planalto, Caiçara, Palmeira das Missões, Santo
Augusto, Crissiumal e Três Passos). A observação de cada item dá essa área
de 2017, sem tentar casar com o nome atual da forania.

## Contatos

- Telefones e e-mails da lista telefônica de 09/2026 (a mais nova). O PDF tem
  as colunas "Telefone fixo" e "Celular / WhatsApp": o fixo foi para
  `telefone` e o da segunda coluna para `whatsapp`; quando a segunda coluna
  traz um fixo (Alpestre, Constantina, Santo Augusto, Trindade do Sul), ele
  foi para `telefone`. A maioria das paróquias tem só celular, publicado
  pela diocese como o número da paróquia.
- Números de formato "(55) 93618-xxxx" (Palmitinho, Seberi, Taquaruçu do
  Sul; também os setores da Cúria) foram mantidos como publicados.
- Quando a lista não traz número, ficou o da página da paróquia (Caiçara,
  Vicente Dutra; fixos de Nova Candelária, Palmitinho, Vista Alegre e Três
  Palmeiras).
- Divergências entre a página e a lista: Campo Novo (99949-1270 na página,
  99649-1270 na lista), Três Passos (999299384 na página, 99929-9374 na
  lista), e-mails de Jaboticaba, Derrubadas, Redentora, Palmeira das Missões
  e Taquaruçu do Sul; seguimos a lista de 2026.
- Ficaram de fora: números de padres listados à parte (o fixo-celular de
  Coronel Bicaco na coluna de fixo), e-mails pessoais (Gmail, Hotmail), o
  contato da Causa de Canonização.
- Endereços: lista de endereços da diocese (PDF de 31/08/2022), trocada pela
  página da paróquia quando esta é mais detalhada (Três Passos, Vista Alegre).
- Instagram: nenhuma página de paróquia cita perfil próprio; só os da
  diocese (diocese_frederico_westphalen).

## Páginas lidas (13/11/2026)

- https://www.diocesefw.com.br/paroquias e as 43 páginas de paróquia
  (URLs no campo `fontes`)
- https://www.diocesefw.com.br/_arquivos/informacoes/listatelefonica.pdf (09/2026)
- https://www.diocesefw.com.br/_arquivos/informacoes/listaenderecos.pdf (08/2022)
- https://www.diocesefw.com.br/areaspastorais (foranias)
- https://www.diocesefw.com.br/img/pastorais/diocese.pdf (áreas pastorais, 2017)
- https://www.diocesefw.com.br/santuarios

## Conferência da lista (não usada para horário)

- https://gcatholic.org/dioceses/diocese/fred0.htm
- https://gcatholic.org/churches/local/fred0

## Pendências

- Horário de missa de 40 unidades. O site cita o site paroquiadeconstantina.com.br
  (não abriu, domínio sem resposta). A diocese tem aplicativo próprio
  (br.com.innovareweb.diocesefw), não lido.
- Santuários sem paróquia indicada pela fonte: Santuário Diocesano da Divina
  Misericórdia (Morada do Senhor, Frederico Westphalen, reitor próprio,
  (55) 3744-2735) e Santuário de Schoenstatt Tabor Porta do Céu (Frederico
  Westphalen). A diocese também lista um Santuário Diocesano do Sagrado
  Coração de Jesus em Vista Alegre; não está claro se é a própria matriz.
- O Santuário dos Beatos no local do martírio aparece na lista de capelas de
  Padre Gonzales, sem lugar; ficou de fora.
- Capelas citadas sem lugar: Taquaruçu do Sul (8 capelas e 6 capitéis só com
  o nome); em Cerro Grande, a "Capela I.M.C (Esquina Raimundi)" e o capitel
  Santo Antônio (Bocó do Zatti) ficaram de fora pela sigla.
- As capelas de Padre Gonzales foram postas em Três Passos (cidade da
  paróquia), exceto São Pedro (Esperança do Sul); algumas linhas podem ficar
  em Esperança do Sul.
- Endereço das matrizes de Pinhal, Vista Gaúcha e Padre Gonzales.
