# Diocese de Valença (RJ): fontes da pesquisa de 13/11/2026

Sé em Valença (Catedral Nossa Senhora da Glória); Vale do Café e Centro-Sul
fluminense. Bispo: Dom Nelson Francelino Ferreira. Cúria: Praça Visconde do
Rio Preto, 375, Centro, Valença. Padroeiro diocesano: São Sebastião. Instagram
da diocese: diocesedevalenca. A diocese completou 100 anos em 2025.

## Resumo

- **26 unidades pastorais** em `saida/valenca.json`: 1 catedral, 24 paróquias
  e 1 quase-paróquia (Santa Rita de Cássia, Madruga, Vassouras), em 3
  regionais: Regional I (10), Regional II (12) e Regional III (4). Cidades:
  Valença (9), Três Rios (4) e duas em cada uma de Sapucaia, Comendador Levy
  Gasparian, Paty do Alferes, Vassouras, Miguel Pereira e Paraíba do Sul, mais
  Rio das Flores.
- **5 com horário de missa** (confiança média), todos do trecho do Instagram
  da própria paróquia que a busca mostrou: Catedral, Santa Rosa de Lima
  (Valença), N. S. da Conceição (Vassouras), São José Operário (Três Rios) e
  Santo Antônio (Sapucaia). Só missas da matriz; nenhuma confissão ou
  adoração. O texto do trecho está na observação de cada uma.
- **21 sem horário** (`"horarios": []`, confiança baixa): nem a diocese nem
  uma página da paróquia achada na busca publica horário.
- **258 comunidades e capelas**, ligadas à paróquia pela lista da cúria, com o
  lugar ("Localidade - Padroeiro") na localidade. A fonte não dá endereço de
  comunidade.
- Todo `id_banco` é null.

## Lista das unidades

Fonte: https://www.curiadevalenca.com.br/nossas-paroquias/ (página da cúria
alterada em 09/07/2026, pela API do WordPress). Traz, para cada uma, pároco,
regional, endereço, telefone, e-mail (escondido pelo Cloudflare e decodificado
do `data-cfemail`), data de criação, expediente e comunidades. O site
diocesedevalenca.org manda para essa página.

Conferências:

- O livro "Vida Diocesana" do centenário (PDF de 12/2025 no site da diocese)
  diz "25 paróquias e uma quase-paróquia" e 270 comunidades. Bate com a
  lista: 25 + 1.
- GCatholic (https://gcatholic.org/churches/local/vale2, 09/11/2026) lista 25
  igrejas paroquiais, todas na lista da cúria. Falta lá a Paróquia N. S. de
  Fátima de Três Rios (Monte Castelo), criada em 2020; a cúria noticiou em
  02/03/2021 o decreto dela e o da Paróquia N. S. da Conceição de Avelar. O
  GCatholic chama a paróquia de Conservatória de "Santo Antônio do Rio
  Bonito" e a do Monte d'Ouro de "São Sebastião"; a estatística dele (2022)
  diz 28 paróquias, número que nenhuma fonte da diocese confirma.

## Decisões de nome e de contato

- As duas paróquias de N. S. da Conceição em Paty do Alferes: a da sede ficou
  "Paróquia Nossa Senhora da Conceição"; a do distrito ficou "Paróquia Nossa
  Senhora da Conceição de Avelar" (a cúria a escreve "Paróquia de Nossa
  Senhora da Conceição - Avelar"). A de Avelar está no Regional II, conforme a
  cúria, embora a sede de Paty seja do Regional III.
- E-mail **não entrou** quando é pessoal ou inválido:
  - janthonius@uol.com.br aparece em N. S. da Conceição (Vassouras) e na
    Quase-Paróquia Santa Rita de Cássia; é o endereço do pároco (Padre José
    Antônio da Silva), não da secretaria.
  - "paróquia@saojoseoperariotresrios.com" (São José Operário, Três Rios) tem
    acento no usuário; o site saojoseoperariotresrios.com deu erro 500.
- N. S. de Monte Serrat (Levy Gasparian) tem telefone e e-mail da Paróquia N.
  S. Aparecida de Levy Gasparian; a cúria diz que a secretaria está "em
  processo de reorganização".
- Santo Antônio (Sapucaia): a cúria publica só "Celular: (24) 99319-9026"; a
  bio do Instagram, pelo trecho da busca, dá o mesmo número como WhatsApp.
- Telefones copiados como publicados. "(24) 9 8111-2182" (Santa Isabel) ficou
  24981112182; "(24) 24527518" (São Sebastião do Rio Bonito) ficou
  2424527518.

## Comunidades

- "Matriz - ..." não foi repetida como comunidade.
- Nome "Comunidade <padroeiro>"; quando a fonte já diz "Capela ...",
  "Comunidade de ..." ou outra coisa (Eremitério Frei Ave-Maria, Irmãs
  Franciscanas Alcantarinas), ficou como está.
- Itens sem padroeiro na fonte ficaram com o que a fonte diz: "Hotel dos
  Engenheiros" (Catedral), "Lagoinho", "São Judas Tadeu" e "Conceição"
  (Santo Antônio da Estiva), "Santa Rosa II - Ainda sem padroeiro" (Santa Rosa
  de Lima, entrou como Comunidade Santa Rosa II).
- As três comunidades com asterisco do Monte d'Ouro (Bairro de Fátima,
  Chácara Stivanin, Alicácio/Barroso) são "comunidades itinerantes" na fonte:
  entraram com isso no `nao_cabe`.
- Santo Antônio de Sapucaia lista Santa Tereza d'Ávila duas vezes (Benjamim
  Constant e Benjamin); entrou uma vez. A comunidade São Francisco de Assis de
  Moreiras aparece em duas paróquias de Sapucaia (Imaculada Conceição da
  Aparecida e Santo Antônio); ficou nas duas, como a fonte diz.
- A Quase-Paróquia Santa Rita de Cássia não tem comunidades na fonte.
- N. S. de Fátima de Três Rios e N. S. da Conceição de Avelar listam
  comunidades sem lugar; ficaram com localidade vazia.

## Horários: o que a busca mostrou do Instagram

Nenhum perfil foi aberto por dentro. Trechos lidos na busca (13/11/2026):

- catedraldevalenca: "Horários de Missas: Segunda à sexta: 7h. Sábado: 8h30 e
  19h. Domingo: 8h30; 10h30 e 18h."
- paroquia_santarosadelima: "Missas Matriz: Quarta 19 h e Domingo 09:30 h e
  19h"
- igreja.nscvassouras: "Missas/Matriz: Sábado 19h | Domingo 10:30h e 19:30h"
  (com o telefone (24) 2471-1618, o mesmo da cúria)
- paroquiasaojoseoperariotrrj: "Santa Missa às 19h30 no sábado e às 9h no
  Domingo" (pode estar cortado)
- paroquiastantoniosapucaia: sexta 7h, domingo 8h e 19h (resumo da bio feito
  pela busca, não o texto literal; conferir)

Perfis achados sem horário no trecho: matrizstantoniops (Santo Antônio dos
Pobres, Paraíba do Sul, só o expediente "Seg a Sex de 8h às 12h/13h às 16h 
2263-6126"), imaculadaconceicaopaty (N. S. da Conceição, Paty do Alferes),
paroquiadagloriadeportela (N. S. da Glória, Governador Portela, Miguel
Pereira). Entraram só como Instagram.

## Páginas lidas (13/11/2026)

- https://www.curiadevalenca.com.br/nossas-paroquias/ (a lista oficial)
- https://www.curiadevalenca.com.br/duas-novas-paroquias-em-nossa-diocese-a-dimensao-espiritual-por-tras-da-palavra-paroquia/
  (criação de N. S. de Fátima de Três Rios e N. S. da Conceição de Avelar)
- https://diocesedevalenca.org/paroquia/ (manda para a cúria)
- https://diocesedevalenca.org/wp-content/uploads/2025/12/vida-diocesana-miolo-1-1-1.pdf
  (contagem: 25 paróquias, 1 quase-paróquia, 270 comunidades)
- https://diocesedevalenca.org/wp-content/uploads/2026/02/calendario-diocesano-2026-4.pdf
  (sem horários de missa)

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/vale2.htm
- https://gcatholic.org/churches/local/vale2

## O que falta para o próximo estado desta pesquisa

- Horário de 21 paróquias e da quase-paróquia: a diocese não publica horários,
  os sites próprios (catedralvalenca.org.br, saojoseoperariotresrios.com) não
  abriram, e a busca só achou o trecho de cinco perfis.
- Os cinco horários de Instagram merecem reconferência (confiança média), em
  especial São José Operário e Santo Antônio de Sapucaia.
- Endereço das comunidades (a fonte só dá o lugar).
- E-mail institucional de N. S. da Conceição (Vassouras), da Quase-Paróquia
  Santa Rita de Cássia e de São José Operário (Três Rios).
