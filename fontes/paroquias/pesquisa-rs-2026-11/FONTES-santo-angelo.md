# Diocese de Santo Ângelo (RS): fontes da pesquisa de 13/11/2026

Sé em Santo Ângelo; região das Missões e Noroeste do Rio Grande do Sul.
Bispo: Dom Liro Vendelino Meurer. Cúria: Rua Marquês do Herval, 1113,
Santo Ângelo, (55) 3313-5308, mitra.angelopolitana@gmail.com. Padroeiros:
Santos Anjos da Guarda. Província eclesiástica de Santa Maria.

## Resumo

- **40 unidades pastorais** em `saida/santo-angelo.json`: 1 catedral (Santo
  Anjo da Guarda) e 39 paróquias, em 6 foranias: Santo Ângelo (8), São Luiz
  Gonzaga (7), Cerro Largo (6), Santo Cristo (5), Santa Rosa (6) e Três de
  Maio (8).
- **1 com horário**: Paróquia Todos os Santos do Caaró (Caibaté), cuja matriz
  é o Santuário Diocesano do Caaró; a página do santuário no site da diocese
  diz "Todos os Domingos às 10h" (sem data, confiança média).
- **39 sem horário** (confiança baixa), em `SEM-HORARIO-santo-angelo.txt`.
  O site da diocese (Wix) só dá a lista das paróquias por forania. As seis
  páginas de forania ("Par. Forania S.A." etc.) têm só o título, e o botão
  "Guia Diocesano 2021" não tem arquivo ligado. Não há endereço, telefone,
  e-mail nem Instagram de paróquia em nenhuma página da diocese, por isso os
  contatos ficaram vazios.
- A página do clero (https://www.diocesedesantoangelo.com.br/clero) serviu
  para saber os municípios de cada paróquia (ex.: São Roque cobre Tucunduva e
  Novo Machado; Santa Lúcia, Caibaté e Mato Queimado; Santo Antônio, Santo
  Antônio das Missões e Garruchos) e as congregações que atendem algumas
  (MSF, SJ, SCJ, SDB, OFM). Nomes de padres não entraram no JSON.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese
(https://www.diocesedesantoangelo.com.br/paroquias), "Paróquias por
foranias", lida em 13/11/2026.

Conferência:
- CNBB Sul 3 (https://cnbbsul3.org.br/diocese-de-santo-angelo/): "40
  paróquias, rurais e urbanas, e mais de 1000 comunidades espalhadas por 47
  municípios". Bate.
- GCatholic (atualizado em 09/10/2026): "40 parishes"; as 40 igrejas
  marcadas como paróquia batem com a lista da diocese. O GCatholic tem ainda
  a Igreja São João Batista de Entre-Ijuís (sem marca de paróquia) e as ruínas
  da Missão de São Miguel (patrimônio da UNESCO), que ficaram fora.

Decisões:
- Paróquia Três Mártires das Missões: a diocese diz "Entre-Ijuís e Vitória
  das Missões". A cidade da matriz (Vitória das Missões) segue o GCatholic,
  que põe ali a igreja Três Mártires; a de Entre-Ijuís é São João Batista.
  Falta confirmar.
- Paróquia Todos os Santos do Caaró: categoria `paroquia`, matriz de tipo
  `santuario` (Santuário Diocesano dos Santos Mártires do Caaró, localidade
  Caaró).
- Paróquia São Miguel (São Miguel das Missões): nome da lista; a página do
  clero escreve "São Miguel Arcanjo".
- Cidades com o nome oficial do município: Doutor Maurício Cardoso (a lista
  escreve "Dr. Maurício Cardoso") e Chiapetta (a lista escreve "Chiapeta").
- Bairros dados pela lista: Santo Antônio de Santo Ângelo no Pippi, Sagrada
  Família de Santa Rosa no Cruzeiro; N. S. da Saúde na Vila Cinquentenário
  (Tuparendi).

## Tentativas sem resultado (13/11/2026)

- Páginas de forania e "Guia Diocesano" do site da diocese: vazias (a
  estrutura da página, lida no arquivo público do Wix, só tem o título).
- ELO Diocesano de novembro de 2026 (PDF no Dropbox, ligado pela diocese):
  sem horários nem contatos de paróquia.
- https://www.santuariocaaro.com.br/ (ligado pela diocese): não respondeu.
- Domínios de paróquia testados por nome: catedralangelopolitana.com.br está
  "em construção"; paroquiasaoluizgonzaga.com.br só redireciona para uma
  revista no FlipHTML5 (Revista Eternidade, de julho, sem ano visível). Os
  demais nomes testados não existem ou são de paróquias de outros estados.
- Sem busca na web nesta sessão: nenhum perfil de Instagram foi achado.

## O que falta para o próximo estado desta pesquisa

- Horários, endereço e contatos de 39 paróquias: com a busca na web
  (perfis de Instagram/Facebook das paróquias, sites próprios). A diocese não
  cita nenhum perfil de paróquia.
- Confirmar a missa dominical do Caaró com data e a cidade da matriz da
  Paróquia Três Mártires das Missões.
- O Guia Diocesano 2021, se a cúria o publicar de novo.
