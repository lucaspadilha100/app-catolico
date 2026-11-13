# Diocese de Criciúma (SC): fontes da pesquisa de 13/11/2026

Sé em Criciúma; extremo sul catarinense (Araranguá, Içara, Urussanga, Nova
Veneza, Turvo, Sombrio). Bispo: Dom Jacinto Inácio Flach; bispo coadjutor:
Dom Milton Zonta, SDS (nomeado em 30/12/2025). Cúria: Rua Pedro Manoel
Apolinário, 90, Santa Bárbara, Criciúma. Padroeiro diocesano: São José.

## Resumo

- **49 unidades** em `saida/criciuma.json`: 1 catedral (São José), 46
  paróquias (uma delas, Nossa Senhora Mãe dos Homens de Araranguá, com a
  matriz elevada a santuário diocesano em 2018), 1 basílica (Basílica
  Santuário Sagrado Coração Misericordioso de Jesus, Içara) e 1 santuário
  (Nossa Senhora de Caravaggio, Nova Veneza). A basílica e o santuário de
  Caravaggio são reitorias, sem território de paróquia; entraram porque a
  diocese os lista no anuário junto com as paróquias ("Paróquias e
  Santuários diocesanos") e porque têm horário próprio.
- 8 comarcas: Araranguá, Criciúma Norte, Criciúma Sul, Içara, Nova Veneza,
  Santa Rosa do Sul, Turvo e Urussanga (anotadas na observação de cada item).
- **38 com horário de missa** (confiança alta), todos da página "Horários de
  Missa" do site da diocese, que é a mesma base que aparece na página de
  cada paróquia (lida em 13/11/2026). Na Basílica os horários foram
  conferidos também no site do santuário, que traz o nome de cada missa e
  o recesso de fim de ano.
- **11 sem horário** (confiança baixa, `horarios: []`): Santa Rosa de Lima
  (Santa Rosa do Sul), São José e São Francisco de Assis (Araranguá), Santo
  Antônio (Quarta Linha) e Sagrada Família de Nazaré (Criciúma), São Miguel
  Arcanjo e Santa Rita de Cássia (Içara), São Francisco de Assis (Balneário
  Rincão), Nossa Senhora das Graças (Ermo), Santa Cruz (Morro Grande) e São
  Roque (Morro da Fumaça). A página dessas paróquias no site da diocese
  existe, mas sem bloco de horários.
- **499 comunidades** com nome, bairro/localidade e município, todas da
  lista "Seu território abrange as seguintes comunidades" da página de cada
  paróquia. Comunidade em outro município fica com a cidade que a fonte dá
  (ex.: comunidades de Siderópolis da Paróquia São Marcos de Nova Veneza).
  Duas comunidades de Siderópolis vieram sem localidade ("Centro de
  Peregrinação Nossa Senhora de Fátima" e "Gruta de Santa Bárbara").
- Uma missa de comunidade entrou na comunidade: quinta às 15h na Santa
  Augusta (Paróquia Nossa Senhora de Guadalupe).
- Contatos: o **Anuário Pastoral 2026** (PDF da diocese) dá endereço com CEP,
  telefone (com marca "Wpp" quando é WhatsApp), e-mail institucional
  (`...@diocesecriciuma.com.br`), Instagram e site de cada unidade; ele foi
  preferido ao site quando os dois divergem (é mais novo). O site completou
  o Instagram onde o anuário não tem. Três e-mails aparecem nas duas fontes
  como `@diocesedecriciuma.com.br` (Salete, Santo Agostinho, Santo Antônio
  de Quarta Linha) e foram mantidos como publicados.
- Todo `id_banco` é null.

## Lista das unidades e conferência

A lista vem do anuário 2026 (49 entradas, por comarca) e das 49 páginas de
paróquia do site, que batem uma a uma.

GCatholic (atualizado em 09/11/2026; estatística de 2022: 43 paróquias, 1
missão): lista 41 paróquias, a basílica e o santuário de Caravaggio. Faltam
nele as paróquias criadas depois: Santa Rita de Cássia (Içara, 2022), Santa
Catarina de Alexandria (Estação Cocal, 2022), Sagrada Família de Nazaré
(Criciúma, 2023), Nossa Senhora Auxiliadora (Mina do Mato, 2024), Nossa
Senhora das Graças (Ermo, 2024), Santa Cruz (Morro Grande, 31/01/2026) e São
Francisco de Assis (Araranguá, 01/02/2026). O "Oratório Menino Jesus de
Praga" de Balneário Rincão (GCatholic) é a comunidade Menino Jesus de Praga
da Paróquia São Francisco de Assis.

Matrizes com titular diferente do padroeiro da paróquia (dado da própria
diocese, anotado na observação): Sagrada Família de Araranguá (São
Cristóvão), São José de Araranguá (Santa Catarina de Alexandria), N. S. da
Conceição de Maracajá (São Pedro), São Pedro Apóstolo de Balneário Arroio do
Silva (N. S. dos Navegantes), São Francisco de Assis de Balneário Rincão (N.
S. dos Navegantes), N. S. da Saúde de Forquilhinha (São José), N. S.
Auxiliadora de Balneário Gaivota (N. S. do Bom Parto) e N. S. dos Navegantes
de Passo de Torres (São Pedro).

## Páginas lidas (13/11/2026)

- https://www.diocesecriciuma.com.br/paroquias (lista com links)
- https://www.diocesecriciuma.com.br/horarios-de-missa (todas as missas; o
  filtro por cidade, `?pg=horarios&tipo=missa&cidade=...`, foi usado para
  saber a cidade de cada bloco)
- https://www.diocesecriciuma.com.br/paroquia/<nome> (49 páginas; a URL de
  cada uma está em `fontes`)
- https://www.diocesecriciuma.com.br/pdf/anuario-2026.pdf (Anuário Pastoral
  2026: comarcas, endereços, telefones, e-mails, redes, comunidades)
- https://santuarioscmj.com.br/horarios-de-missa/ (Basílica de Içara)

Conferência: https://gcatholic.org/dioceses/diocese/cric0.htm e
https://gcatholic.org/churches/local/cric0

## Dificuldades e observações

- O site da diocese só publica missas: não há confissão nem adoração, salvo a
  adoração antes da missa da saúde de Timbé do Sul.
- Erros da própria fonte, corrigidos com cuidado: a página da Paróquia São
  Francisco de Assis (Araranguá) diz "A Paróquia Santa Cruz foi instalada
  em 1 de fevereiro de 2026" (texto copiado da Santa Cruz; o anuário confirma
  São Francisco de Assis, fundação 01/02/2026); "Santa Antônio" virou Santo
  Antônio; "Ermol" virou Ermo.
- Telefone de Morro da Fumaça (São Roque): o anuário 2026 dá (48) 3801-9379
  como telefone e WhatsApp; o site dá (48) 3434-1128 "somente WhatsApp".
  Ficou o do anuário.
- O site da Paróquia São Francisco de Assis de Balneário Rincão
  (psfarincao.com.br) é um calendário montado por script a partir de agendas
  do Google; a leitura dessas agendas não foi feita nesta rodada. Fica como
  fonte para o próximo estado (tem uma agenda por igreja da paróquia).
- Sites próprios que não abriram daqui: santuariomaedoshomens.com.br (403),
  santuariodecaravaggio.com.br e paroquiasaodonato.com.br (conexão recusada),
  p47.com.br (Siderópolis).
- O limite de buscas na web da rodada estava esgotado quando esta diocese
  foi feita: nenhum trecho de Instagram foi consultado.

## O que falta para o próximo estado

- Horários das 11 paróquias sem horário (Instagram das paróquias pela busca;
  o perfil de cada uma está em `contatos.instagram`).
- Confissões e adoração em geral.
- Horários das comunidades (o site só traz os da matriz, com a exceção de
  Santa Augusta).
