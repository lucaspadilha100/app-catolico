# Diocese de Barretos (SP): fontes da pesquisa de 13/11/2026

Sé em Barretos; norte do estado, divisa com Minas Gerais. Sufragânea de São
José do Rio Preto desde 22/05/2025 (antes, de Ribeirão Preto). Bispo: Dom
Milton Kenan Júnior. Cúria: Rua 20, 1600, Jockey Club, Barretos,
(17) 3322-3565, comunicacao@diocesedebarretos.com.br. Padroeiro diocesano:
Divino Espírito Santo (Pentecostes).

## Resumo

- **27 unidades pastorais** em `saida/barretos.json`: 1 catedral, 1 santuário
  (Santuário Diocesano de N. S. Aparecida, Olímpia, que é paróquia), 24
  paróquias e 1 área pastoral (São Bento e Santa Rita, Barretos), em 13
  municípios e 4 regiões pastorais (Barretos, Colina, Guaíra, Olímpia).
  Cidades: Barretos (11), Olímpia (4), Guaíra (2) e uma em cada: Cajobi,
  Colina, Colômbia, Embaúba, Guaraci, Ipuã, Jaborandi, Miguelópolis, Morro
  Agudo, Severínia.
- **25 com horário de missa** (24 com confiança alta, 1 média). Duas sem
  horário (confiança baixa), por erro de cópia na página da diocese:
  N. S. Aparecida de Guaíra e São João Batista de Olímpia (ver abaixo).
- Horário de confissão: nenhum publicado de forma regular. Adoração: só a
  da São João Batista de Barretos (quinta, 14h às 19h).
- Capelas e comunidades entraram com o nome e, quando a fonte dá, o bairro;
  endereço só onde a fonte publica (Área Pastoral São Bento e Santa Rita e
  comunidades do Santuário de Olímpia). Missas "nas comunidades", "nos
  setores" ou "nas casas" sem nome de lugar ficaram no `nao_cabe`.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias e Horários de Missas" do site da diocese,
organizada por cidade (27 blocos, um por unidade, com horários, endereço,
telefone, e-mail, expediente e clero). O WordPress diz que a página foi
alterada pela última vez em 24/02/2026. Os 13 municípios batem com a página
"Nossa História" (Barretos, Cajobi, Colina, Colômbia, Embaúba, Guaíra,
Guaraci, Ipuã, Jaborandi, Miguelópolis, Morro Agudo, Olímpia e Severínia);
nenhum deles aparece nas outras dioceses já pesquisadas.

Conferência contra o GCatholic (atualizado em 09/11/2026, 25 igrejas): bate
nas 24 paróquias antigas. Diferenças:

- O GCatholic não tem as três unidades novas: Área Pastoral São Bento e
  Santa Rita (03/03/2024), Paróquia São Judas Tadeu e Santo Expedito
  (Olímpia, 2024) e Paróquia São José e São Judas Tadeu (Barretos, erigida em
  20/03/2026).
- A Capela da Casa de Apoio Madre Paulina (Barretos), listada pelo GCatholic,
  é capelania hospitalar e ficou fora.

Mudanças recentes que o próprio site ainda não acompanhou por inteiro:

- **São José e São Judas Tadeu (Barretos)**: Área Pastoral São José (2022),
  quase-paróquia em 31/07/2025 e paróquia em 20/03/2026 (notícia da
  diocese). A página de horários ainda diz "Quase Paróquia". Entrou como
  `paroquia`.
- **São Judas Tadeu e Santo Expedito (Olímpia)**: a página de horários dá
  fundação em 2024 e o título "Paróquia"; o texto "Nossa História" (mais
  antigo) ainda diz quase-paróquia. Entrou como `paroquia`.
- **Área Pastoral São Bento e Santa Rita**: desmembrada da Paróquia N. S.
  Aparecida; ainda sem igreja matriz (pedra fundamental no San Diego em
  09/02/2025). A Capela São Francisco ficou em primeiro lugar, com tipo
  `capela`.

## Erros de cópia na página da diocese (o que foi decidido)

- **N. S. Aparecida de Guaíra**: o bloco traz os horários e comunidades de
  Colômbia (idênticos, inclusive o Assentamento Formigas) e o endereço,
  telefones, e-mail e expediente de Cajobi. Os dados foram atribuídos a
  Colômbia porque o Projeto de Assentamento Formiga é de Colômbia (editais do
  INCRA). Guaíra ficou sem horário, sem contato e sem endereço, confiança
  baixa.
- **São João Batista de Olímpia e São Benedito de Barretos**: os dois blocos
  têm o mesmo quadro de horários (segunda e sexta 15h, terça e quinta 7h,
  sábado 19h30, domingo 7h, 9h e 18h30; Capela N. S. Aparecida, Com. N. S.
  de Lourdes, Com. Rural Lagoinha), com endereço e contatos diferentes. O
  blog da paróquia de Olímpia (último informativo, setembro de 2023) mostra
  outro quadro e outras comunidades (Santa Rita, Renascer, São Pedro, São
  José do distrito de Baguaçu). O quadro ficou com São Benedito (confiança
  média); São João Batista de Olímpia ficou sem horário (baixa).
- **Jaborandi**: título "Paróquia São Gabriel Arcanjo", subtítulo "Paróquia
  São Miguel Arcanjo". Seguimos o título, o e-mail (arcanjosaogabriel) e o
  GCatholic.
- Repetições menores anotadas no `nao_cabe`: Comunidade N. S. de Guadalupe
  duas vezes na São José de Olímpia; missa da 1ª sexta (Apostolado da
  Oração) repetida na Capela São Sebastião de Ipuã; duas "Comunidade São
  Francisco" e uma "Santa Cecília" na N. S. Aparecida de Barretos, que podem
  ser as capelas que passaram à Área Pastoral São Bento e Santa Rita.

## Páginas lidas em 13/11/2026

- https://diocesedebarretos.com.br/horarios-missas/ (todas as unidades; a
  âncora de cada bloco está no campo `fontes` do JSON, ex.:
  `#p-barretos-catedral-do-divino-espirito-santo-de-barretos-baf2`)
- https://diocesedebarretos.com.br/a-diocese/historia/ (municípios, regiões
  pastorais)
- https://diocesedebarretos.com.br/paroquia-sao-jose-e-sao-judas-tadeu-e-erigida-canonicamente-em-barretos/
  (21/03/2026)
- https://diocesedebarretos.com.br/lancado-o-projeto-arquitetonico-da-futura-paroquia-de-sao-bento-e-santa-rita-em-barretos/
  (01/05/2025)
- Santuário de Olímpia, site próprio: /horarios-de-missas, /comunidades
  (endereços e horários das 7 comunidades), /contato, /secretaria-do-santuario
  em https://santuarioaparecidaolimpia.com.br/. O site dá segunda a sexta 12h
  e 19h (a diocese escreve só "segunda") e o endereço Rua Bernardino de
  Campos, 485 (a diocese dá Rua José Coronel Medeiros, 356; a secretaria fica
  na Rua Floriano Peixoto, 392). Seguimos o site do santuário.
- Miguelópolis, site próprio: https://www.paroquiademiguelopolis.com.br/
  (agenda da semana, contato). A agenda confirma a missa de sábado na Capela
  N. S. das Graças e os três horários de domingo na matriz, e acrescenta
  Missa da Saúde na quarta e uma missa de quinta 7h na Capela N. S. das
  Graças (a diocese põe a de quinta 7h na Capela N. S. Aparecida). Os
  acréscimos ficaram no `nao_cabe`.
- https://paroquiasaojoaobatistaolimpia.blogspot.com/ (parado em 2023; só
  para a conferência acima)

## Contatos

- Só os institucionais publicados pela diocese ou pelo site da paróquia.
  Telefones celulares entraram só quando a diocese os dá como telefone da
  secretaria (São Benedito, Santo Antônio de Pádua, São Luís Gonzaga, São
  José e São Judas Tadeu, Ipuã, São José de Olímpia, Área Pastoral). Ficaram
  fora o celular de Guaraci (rotulado só "Celular") e o segundo número da
  Bom Jesus.
- **Severínia**: o e-mail publicado (mariorus@uol.com.br) é pessoal do pároco
  e ficou de fora.
- Instagram: só o do Santuário de Olímpia (santuarioaparecidaolimpia), do
  site do próprio santuário. A página da diocese não traz Instagram das
  paróquias, e a busca não mostrou perfis confirmados; nenhum perfil foi
  aberto.
- Sites que o GCatholic aponta e que não servem: paroquiabomjesus.org.br é de
  outra paróquia (Bueno Brandão, MG); minibasilica.com.br, saoluisgonzaga.com,
  paroquiasjose.com.br e saojosebarretos.com.br não respondem; os blogspot
  (Guaíra São Sebastião, Cajobi, Ipuã, Santo Antônio de Pádua) são antigos.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/barr6.htm e
  https://gcatholic.org/churches/local/barr6 (09/11/2026)
- Páginas de igreja do GCatholic (https://gcatholic.org/churches/brazil/43965.htm
  a 43983.htm, 43030 a 43034 e 2730)
- Editais do INCRA (gov.br/incra) para situar o Assentamento Formiga em
  Colômbia.

## O que falta para o próximo estado desta pesquisa

- N. S. Aparecida de Guaíra: horários, endereço e contatos (a diocese precisa
  corrigir o bloco; a busca não achou site nem perfil).
- São João Batista de Olímpia: horários atuais; e reconferir se o quadro
  atribuído à São Benedito de Barretos é mesmo dela.
- Endereço e bairro das capelas e comunidades de Barretos, Colina, Cajobi,
  Jaborandi, Miguelópolis, Severínia e das outras paróquias de Olímpia.
- Horários de confissão (a diocese só publicou mutirões de Natal).
- Instagram das paróquias.
