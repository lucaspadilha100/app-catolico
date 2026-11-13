# Arquidiocese de Juiz de Fora (MG): fontes da pesquisa de 13/11/2026

Sé metropolitana em Juiz de Fora; Zona da Mata e Serra da Mantiqueira
mineiras. Arcebispo: Dom Marco Aurélio Gubiotti (desde 08/01/2026). Cúria:
Av. Barão do Rio Branco, 4516, Alto dos Passos, Juiz de Fora, (32) 3229-5450.
Padroeiro: Santo Antônio. Sufragâneas: Leopoldina e São João del-Rei.

## Resumo

- **94 unidades pastorais** em `saida/juiz-de-fora.json`: 1 catedral
  (Catedral Metropolitana de Santo Antônio), 1 basílica (Basílica Santuário
  Senhor Bom Jesus do Livramento, Liberdade), 89 paróquias e 3
  quase-paróquias (Nossa Senhora Aparecida de Granjas Betânia, São Geraldo
  de Filgueiras, Santa Maria Eterna do Humaitá). Três paróquias têm a matriz
  como santuário: Sagrado Coração de Jesus (Bairu), N. S. das Mercês (Mar de
  Espanha) e São Miguel e Almas (Santos Dumont).
- Cidades: Juiz de Fora (45, contando os distritos de Rosário de Minas,
  Sarandira, Torreões e Paula Lima), Santos Dumont (7), São João Nepomuceno
  (4), e outras 34 cidades com uma ou duas.
- **Todas as 94 com horário de missa**, do sistema de horários do próprio
  site da arquidiocese: 79 com confiança `alta` (páginas de igreja
  atualizadas de 2023 a 2026) e 15 com `media` (páginas de 2018 a 2022,
  ou sem a página de igreja baixada para conferir a data). São 472 igrejas
  e 939 linhas de horário.
- 12 foranias: Bom Jesus, Mãe de Deus, N. S. da Conceição, N. S. das Dores,
  N. S. do Líbano, Sant'Ana, Santa Luzia, Santa Teresinha, Santo Antônio,
  São José, São Miguel e São Vicente. Três páginas de paróquia não dizem a
  forania (Conceição de Ibitipoca, Mar de Espanha, Santa Rita de Jacutinga).
- Todo `id_banco` é null.

## Lista das unidades

- https://arquidiocesejuizdefora.org.br/lista-de-paroquias/ (94 itens, cada
  um com página própria: telefone, e-mail, forania, cidade, Instagram,
  endereço e "Locais, Capelas e Comunidades"). As 94 páginas foram lidas em
  13/11/2026; as URLs estão no campo `fontes`.
- Conferência: GCatholic (https://gcatholic.org/churches/local/juiz0,
  09/11/2026) dá 91 paróquias (estatística de 2022) e lista as mesmas
  igrejas paroquiais; a diferença são as 3 quase-paróquias, que o GCatholic
  não traz. Também bate com o filtro de horários do site (97 opções: as 94
  mais a Igreja Melquita, uma opção repetida de Rio Preto e uma de Santa
  Maria Eterna).
- Fora da lista: Paróquia São Jorge (Santa Helena, Juiz de Fora), que é da
  Igreja Greco-Melquita (Eparquia Nossa Senhora do Paraíso), não da
  arquidiocese; o site lista seus horários (domingo 9h e 19h, sábado 19h).
  Avisar se o app quiser igrejas católicas orientais: é outra circunscrição.
  Mosteiro da Santa Cruz, Seminário Santo Antônio e o Santuário Eucarístico
  São João Evangelista (Juiz de Fora) não são paróquias.
- A "Paróquia Santo Antônio de Pádua (Santo Antônio do Alto do Rio Grande)",
  em Bocaina de Minas, aparece no filtro de horários como "Quase-Paróquia";
  seguimos a lista (paróquia) e anotamos.

## Horários

- https://arquidiocesejuizdefora.org.br/horarios-de-celebracoes/: a página
  tem um filtro por paróquia que lista as igrejas e capelas com uma tabela
  (tipo, dia, hora, observação). Os resultados vêm do próprio site (o mesmo
  pedido que o navegador faz ao escolher a paróquia), lidos em 13/11/2026.
- Cada igreja tem página própria em `/locais/<nome>/`, com paróquia,
  endereço e os mesmos horários. Delas saíram o bairro e o endereço das
  capelas. O site respondeu muito devagar (páginas sem cache levando mais de
  40 s): só 375 das 626 páginas de igreja foram
  baixadas. As igrejas cuja página não veio e que não têm bairro no nome
  (146 capelas e comunidades em 39 paróquias) foram para o `nao_cabe`
  da matriz, com nome e horários ("Igrejas sem bairro na fonte: ..."), como
  no molde de Taubaté.
- Conversões: "1º domingo do mês" vira `semanas`; "dia 15 de cada mês",
  "último domingo do mês", "mês par/ímpar", "bimestral", "trimestral" e
  Celebração da Palavra (que não é missa) foram para `nao_cabe`. Observação
  "A celebração começa às 6h20" ou "Horário exato às 12h15" trocou a hora;
  "adoração às 18h" antes da missa virou linha de adoração;
  "18h às 19h, atendimento de confissões" virou linha de confissão.

## Contatos

- Das páginas de paróquia. Celular publicado como telefone da paróquia ficou
  em `telefone`; quando há fixo e celular, o fixo vai no campo e o celular
  na observação. E-mails vêm protegidos pelo Cloudflare e foram decodificados.

## O que falta para o próximo estado desta pesquisa

- Baixar as páginas de igreja que faltaram (as que estão no `nao_cabe` das matrizes) para
  tirar as capelas do `nao_cabe` e dar a elas bairro e endereço.
- Horário de confissão: o sistema do site quase só traz missas.
- Capelas listadas na página da paróquia sem horário e sem página baixada
  (11 itens, abaixo) ficaram fora.

### Capelas sem horário e sem lugar (fora do JSON)

- Comunidade Santo Afonso (Paróquia Nossa Senhora do Perpétuo Socorro, Juiz de Fora)
- Capela Senhor dos Passos (Paróquia Nossa Senhora do Rosário, Juiz de Fora)
- Comunidade Vila Verde (Paróquia Nosso Senhor dos Passos, Rio Preto)
- Comunidade Nossa Senhora do Perpétuo Socorro (Paróquia Nosso Senhor dos Passos, Rio Preto)
- Comunidade São João Batista (Paróquia São Pedro, Juiz de Fora)
- Comunidade Nossa Senhora das Graças (Paróquia São Pedro, Juiz de Fora)
- Comunidade Beata Nhá Chica (Paróquia São Pedro, Juiz de Fora)
- Capela São Sebastião (Paróquia São Pedro, Juiz de Fora)
- Área Missionária Santa Catarina (Paróquia Universitária Nossa Senhora de Fátima, Juiz de Fora)
- Área Missionária São José (Paróquia Universitária Nossa Senhora de Fátima, Juiz de Fora)
