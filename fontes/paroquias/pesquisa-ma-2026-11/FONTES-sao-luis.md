# Arquidiocese de São Luís do Maranhão (MA): fontes da pesquisa de 13/11/2026

Sé metropolitana em São Luís; Ilha do Maranhão (São Luís, São José de
Ribamar, Paço do Lumiar, Raposa) e municípios do Munim, do Itapecuru e dos
Lençóis. Arcebispo: Dom Gilberto Pastana de Oliveira. Cúria: Avenida Dom
Pedro II, s/n, Centro, São Luís, 65010-904. Site: https://arquislz.org.br;
Instagram oficial: arquislz. Padroeiro da arquidiocese: São Luís de França
(25 de agosto).

## Resumo

- **61 unidades** em `saida/sao-luis.json`: 1 catedral (Nossa Senhora da
  Vitória), 56 paróquias, 3 quase-paróquias (São João Paulo II, Nossa
  Senhora da Conceição de Primeira Cruz e a "Comunidade Paroquial" São Roque,
  no Lira) e 1 santuário (Nossa Senhora do Carmo, Centro). 11 foranias: Nossa
  Senhora da Vitória, Anjo da Guarda, São Luís Rei de França, Nossa Senhora
  da Conceição, São Judas Tadeu, Nossa Senhora de Nazaré, São Francisco e
  Santa Clara, São Cristóvão, São José de Ribamar, São Benedito e São João
  Calábria (a de cada unidade está na `observacao`).
- Cidades: São Luís (41), Paço do Lumiar (4), São José de Ribamar (4) e uma
  em cada: Raposa, Axixá, Presidente Juscelino, Bacabeira, Cachoeira Grande,
  Icatu, Humberto de Campos, Morros, Primeira Cruz, Rosário, Santa Rita,
  Santo Amaro do Maranhão.
- **61 com horário, confiança alta**: o site da arquidiocese tem uma página
  por paróquia (missas, missas votivas, confissões, contatos, expediente) e
  uma página por capela (bairro, endereço e missas). 59 matrizes têm horário
  próprio; as 2 sem horário são a de São João Batista (Centro, em reforma: as
  missas estão na Igreja de Sant'Ana, que recebeu os horários) e a da
  Quase-Paróquia São João Paulo II (só as 8 capelas têm horário).
- **743 capelas e comunidades**, todas ligadas à paróquia pela própria página
  da paróquia, com bairro ou povoado em `localidade`; **386 delas com
  horário**. As da Paróquia de Morros entraram como "Comunidade de <povoado>",
  porque a arquidiocese as nomeia só pelo lugar.
- Confissões publicadas em 15 unidades.
- Paróquias com matriz santuário: Nossa Senhora da Conceição (Monte
  Castelo), Nossa Senhora de Nazaré (Cohatrac) e São José de Ribamar
  (primeira igreja de tipo `santuario`).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Foranias e Paróquias" do site
(https://arquislz.org.br/foranias/), com 63 entradas, cada uma com página
`https://arquislz.org.br/paroquia/?paroquiaid=<n>` (as URLs estão no campo
`fontes`). Dessas 63:

- 60 são unidades pastorais (57 paróquias, contando a Catedral, e 3
  quase-paróquias). Bate com o GCatholic: "57 parishes, 3 missions"
  (estatística de 2022).
- A **Igreja Nossa Senhora do Carmo** (Praça João Lisboa, Centro), igreja
  conventual sem paróquia, entrou como `santuario`: o GCatholic a chama
  "Shrine of Our Lady of Mount Carmel".
- A **Igreja Santo Antônio** (Centro) é capela da Paróquia São João Batista
  (a página da paróquia a lista): entrou como capela dela, com os horários da
  própria página.
- **Pendência:** a **Igreja Menino Jesus de Praga** (capela conventual, Rua
  Euclides Farias, 25, Cohama, (98) 3015-4626,
  igrejameninojesusdepraga@hotmail.com,
  https://arquislz.org.br/paroquia/?paroquiaid=67), listada na Forania São
  Luís Rei de França, não aparece como capela de nenhuma paróquia. Ficou de
  fora do JSON. Horários publicados: missas de segunda a sábado às 6h30 e
  18h; domingo às 6h30, 8h30, 11h, 16h e 18h; confissões de terça a quinta,
  9h às 11h, e quarta e sexta, 15h às 17h. Falta saber a que paróquia
  pertence (ou se entra como reitoria).

Conferência contra o GCatholic (https://gcatholic.org/churches/local/zlui1,
atualizado em 09/11/2026, 56 igrejas): todas as paróquias do GCatholic estão
na lista da arquidiocese. A arquidiocese tem a mais as criadas depois:
Santa Clara de Assis (2021), Nossa Senhora do Carmo de Lima Verde (2018),
Quase-Paróquia São João Paulo II (2023) e a Comunidade Paroquial São Roque.
A "Nossa Senhora da Conceição" de Primeira Cruz, sem marca de paróquia no
GCatholic, é a quase-paróquia.

Circunscrições do Maranhão no GCatholic (província eclesiástica de São
Luís do Maranhão): a arquidiocese e as dioceses de Bacabal, Balsas, Brejo,
Carolina, Caxias do Maranhão, Coroatá, Grajaú, Imperatriz, Pinheiro, Viana e
Zé Doca. Todas estão cobertas pelas pesquisas deste lote; nenhuma prelazia
ou diocese a mais.

## Como os horários foram lidos

- Texto de cada página de paróquia e de capela, transformado em linhas do
  formato por um leitor automático e conferido à mão paróquia por paróquia
  (os casos que o leitor não entendia foram corrigidos ou foram para
  `nao_cabe`).
- Algumas páginas trazem, além do texto, um quadro resumido gerado pelo site
  ("Sábado: Missa às 19:30") que perde a semana do mês ("1º sábado"). Quando
  o texto tem as missas, valeu o texto; o quadro só foi usado quando era a
  única informação.
- "Todo dia 13", "todo dia 8" e outras missas por dia do mês, "último
  domingo/sexta", novenas e "mediante agendamento" ficaram em `nao_cabe`.
- Capelas onde a página diz "podendo ser missa ou celebração da Palavra"
  (Paróquia Nossa Senhora de Fátima, Vila Luizão) levam isso em `nao_cabe`.
- Batizados, reuniões de batismo, nomes e telefones de coordenadores de
  comunidade não entraram.

## Ajustes na lista de capelas

- Icatu: a página lista várias capelas duas vezes (mesmo nome e mesmo
  povoado, com números de página diferentes) e algumas com um "x" antes do
  nome. As repetidas entraram uma vez só; o "x" foi tirado. A comunidade São
  Pedro, no Centro, que a arquidiocese chama "Comunidade Matriz", entrou como
  "Comunidade São Pedro".
- Capelas que são a própria matriz (mesmo endereço ou mesmo nome no Centro e
  os mesmos horários) não foram repetidas: São Daniel Comboni (Nossa Senhora
  do Povo, mesmo endereço), Icatu, Santo Amaro e Presidente Juscelino.
- 16 links de capela levam a páginas vazias (ids 182, 310, 358, 406, 412,
  427, 455, 467, 483, 532, 618, 642, 731, 770, 784, 855): ignorados.

## Contatos

- Telefone, e-mail e Instagram da página de cada paróquia. Ficaram de fora
  os celulares no formato antigo de 8 dígitos (Remédios (98) 9141-0557,
  Sagrado Coração do Bequimão (98) 8844-0733, São Maximiliano Kolbe
  (98) 8561-6253, São José do Bonfim (98) 8175-0021, São Roque
  (98) 8161-0519) e um número incompleto (Glória e São Judas, "559832431").
- O e-mail da página da Paróquia Nossa Senhora da Boa Viagem é o da Paróquia
  São Cristóvão e ficou de fora.
- Instagram sem o "@" e sem espaços; perfis com mais de 30 caracteres ficaram
  vazios.

## Fontes (lidas em 13/11/2026)

- https://arquislz.org.br/foranias/ (lista das 63 entradas por forania)
- https://arquislz.org.br/paroquia/?paroquiaid=<n> (uma por unidade)
- https://arquislz.org.br/capela/?capelaid=<n> (780 páginas de capela lidas;
  as que têm horário estão no campo `fontes` da paróquia)
- GCatholic: https://gcatholic.org/dioceses/diocese/zlui1.htm e
  https://gcatholic.org/churches/local/zlui1 (conferência da lista e das
  circunscrições do estado)
- O anuário 2025 ligado na página da Paróquia São João Calábria
  (https://arquislz.org.br/wp-content/uploads/2025/04/Anuario-2025-1.pdf) é
  o calendário dessa paróquia, quase todo em imagem: não foi usado.

## O que falta para o próximo estado desta pesquisa

- Horários de 357 capelas cuja página não traz missa (as de Morros, Icatu,
  Santo Amaro, Boa Viagem e Santa Rita são as maiores listas).
- Bairro de algumas capelas: a página só dá o endereço.
- Resolver a Igreja Menino Jesus de Praga (acima).
- O limite de buscas na web desta rodada acabou antes de qualquer busca;
  tudo aqui veio do site da arquidiocese e do GCatholic.
