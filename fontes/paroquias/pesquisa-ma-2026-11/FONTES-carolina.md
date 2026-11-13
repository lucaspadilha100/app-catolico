# Diocese de Carolina (MA): fontes da pesquisa de 13/11/2026

Sé em Carolina; sul do Maranhão, à margem do Tocantins. Bispo: Dom
Francisco Lima Soares. Cúria: (99) 98525-2380, diocesecarolina@gmail.com
(secretaria de segunda a sexta, 8h às 12h e 14h às 18h; sábado 8h às 12h).
Padroeiro diocesano: São Pedro de Alcântara.

## Resumo

- **15 unidades pastorais** em `saida/carolina.json`: 1 catedral, 12
  paróquias e 2 áreas pastorais (a diocese diz "Região Pastoral"), em 4
  microrregiões pastorais. Cidades: Carolina (2), Estreito (3), Porto
  Franco (2), São João do Paraíso (2, com a Região Pastoral de Vão do
  Marco), Campestre do Maranhão (2, com a Região Pastoral de Cabeceira
  Grande), São Pedro dos Crentes, Lajeado Novo, Ribamar Fiquene e Montes
  Altos.
- **15 com horário de missa** (confiança média): cada paróquia tem uma
  página no site da diocese, publicada em 24/04/2025 (Cabeceira Grande em
  08/05/2025), com a matriz e as comunidades, cada uma com o horário.
- **145 igrejas e comunidades** além das matrizes, 111 com missa em
  horário fixo. A página dá a distância em km, não o bairro, em muitas
  comunidades rurais; quando não há lugar, `localidade` ficou vazia.
  Missa "aos sábados" sem dizer qual sábado do mês (comunidades rurais da
  Catedral e de Ribamar Fiquene), "último sábado" e "todo dia 19" ficaram
  no `nao_cabe`. Onde a página diz "Missa sexta-feira" sem mais, entrou
  como semanal.
- Todo `id_banco` é null.

## Lista das unidades

A página "Paróquias" do site lista 15 páginas (13 paróquias, a Área
Pastoral Cabeceira Grande e a comunidade de Vão do Marco). A página da
microrregião pastoral confirma as 13 paróquias em 4 microrregiões:

1. Carolina e São Pedro dos Crentes: Catedral São Pedro de Alcântara,
   Santo Antônio (Carolina), São Pedro Apóstolo (São Pedro dos Crentes).
2. Estreito: São Sebastião, São João Batista, São Francisco de Assis.
3. Porto Franco, São João do Paraíso e Lajeado Novo: Imaculada
   Conceição e N. S. de Fátima (Porto Franco), São João Batista (São João
   do Paraíso), São Francisco de Assis (Lajeado Novo).
4. Campestre, Ribamar Fiquene e Montes Altos: São Raimundo Nonato
   (Campestre), São Sebastião (Ribamar Fiquene), Sant'Ana (Montes Altos).

A página do clero dá ainda duas regiões pastorais com padre próprio:
Cabeceira Grande (Campestre) e Nossa Senhora Aparecida, Vão do Marco (São
João do Paraíso). Entraram como `area_pastoral`. O santuário de Nossa
Senhora da Serra (Serra da Cinta, 52 km de São João do Paraíso, construído
em 2003) entrou como igreja da região de Vão do Marco.

Conferência com o GCatholic (09/11/2026: 14 paróquias e 1 missão nas
estatísticas de 2022; 11 igrejas na lista): bate com as 13 paróquias e as
2 regiões pastorais. Diferenças: o GCatholic lista uma Paróquia Nossa
Senhora das Graças em Carolina e um Santuário do Menino Jesus em Carolina,
que a diocese não lista (a Paróquia Santo Antônio tem uma capela do Menino
Jesus no bairro Sucupira e uma comunidade de N. S. das Graças existe em
Estreito, no bairro Valec). Seguimos a diocese.

Comunidades atribuídas: a página da Paróquia São Sebastião (Estreito) diz
que cinco comunidades urbanas e as de Água Amarela e Região do São Luiz
são da Paróquia São João Batista, mas atendidas pela São Sebastião;
entraram na São Sebastião, uma vez só.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://www.diocesedecarolina.com.br/paroquias2/ (a lista)
- https://www.diocesedecarolina.com.br/pastoral-diocesana-da-catequese/
  (as 4 microrregiões pastorais)
- https://www.diocesedecarolina.com.br/clero/ (padres e onde servem)
- Páginas de paróquia em `https://www.diocesedecarolina.com.br/l/<n>/`:
  15 (Catedral), 14 (Santo Antônio), 13 (São Pedro Apóstolo), 12 (São
  Sebastião, Estreito), 11 (São João Batista, Estreito), 10 (São Francisco,
  Estreito), 9 (São João Batista, São João do Paraíso), 8 (Imaculada
  Conceição), 7 (N. S. de Fátima), 6 (São Raimundo Nonato), 5 (São
  Francisco, Lajeado Novo), pp (São Sebastião, Ribamar Fiquene),
  este-e-um-blog-com-imagens (Sant'Ana), este-e-um-blog-simples (Vão do
  Marco), area-pastoral-cabeceira-grande.
- https://www.diocesedecarolina.com.br/peregrinacao-a-senhora-da-serra-serra-da-cinta-vao-do-marco/

Contatos: o e-mail da paróquia quando a página dá um; os e-mails com nome
de padre ficaram fora. Os telefones são celulares publicados junto do
e-mail da paróquia ou do nome do secretário (Catedral, Santo Antônio, São
João Batista e São Francisco de Estreito, Imaculada Conceição, N. S. de
Fátima, São Raimundo Nonato, Sant'Ana). Na Paróquia São João Batista de
Estreito, o celular ao lado do e-mail do pároco ficou fora. O de São João
do Paraíso tem 8 dígitos depois do DDD, como publicado.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/caro0.htm e
  https://gcatholic.org/churches/local/caro0

## O que falta para o próximo estado desta pesquisa

- Endereço das capelas urbanas (a página dá só o bairro) e o lugar das
  comunidades sem nome de povoado (Estreito: São Francisco de Assis;
  Lajeado Novo).
- Comunidade N. S. de Fátima da Catedral (50 km, sem lugar) e as regiões
  "a definir" de Montes Altos (Cercadinho, Rancharia, Sobral, Canaveral),
  que não entraram.
- Confissão e adoração: só a adoração de quinta às 7h na igreja do
  Sagrado Coração (Porto Franco) é publicada.
- Instagram das paróquias: o site da diocese não traz.
