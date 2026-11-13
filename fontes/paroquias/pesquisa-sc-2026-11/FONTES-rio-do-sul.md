# Diocese de Rio do Sul (SC): fontes da pesquisa de 13/11/2026

Instalada em 03/08/1969, sufragânea de Joinville desde 2024. Bispo: Dom
Adalberto Donadelli Júnior. Cúria: Rua São Ludgero, 79, Centro, CEP
89160-061, Rio do Sul, (47) 3521-0315, diocesederiodosul@gmail.com.
Padroeiro: São João Batista (24 de junho). O próprio site diz: 6 Regiões
Pastorais, 31 paróquias e 437 comunidades em 32 municípios.

## Resumo

- **31 unidades pastorais** em `saida/rio-do-sul.json`: 1 catedral (São
  João Batista) e 30 paróquias, em 6 Regiões Pastorais: Rio do Sul (7, com a
  Catedral), Rio do Oeste (5), Ituporanga (5), Presidente Getúlio (5), Taió
  (5) e Rodeio (4). Rio do Sul tem 6 paróquias, Rio do Campo 2, e as outras
  23 cidades uma cada.
- **29 com horário de missa na matriz**:
  - Catedral: confiança alta, horários de missa, confissão e adoração do
    site da Catedral (https://catedralderiodosul.com.br/horarios), lido em
    13/11/2026; batem com a página da diocese.
  - 28 paróquias: confiança média. Os horários vêm da página de cada
    paróquia no site da diocese, publicadas entre 08/2022 e 09/2023 (data no
    campo `fontes` e na observação).
- **2 sem horário** (confiança baixa): São Miguel Arcanjo (Mirim Doce) e Santa
  Catarina (Vitor Meireles, página quase vazia, sem endereço nem contato).
- Comunidades: as páginas listam as comunidades só pelo nome, sem lugar; não
  entraram. Exceção: a Comunidade Estreito (Alfredo Wagner), que a página da
  Paróquia Bom Jesus dá com horário próprio. A missa de domingo no Complexo
  Turístico Nossa Senhora de Lourdes e do Louvor (Ituporanga) ficou no
  `nao_cabe` da matriz.
- Todo `id_banco` é null.

## Páginas lidas (13/11/2026)

- https://www.dioceseriodosul.com.br/ (o endereço sem "www" também abre;
  "diocesederiodosul.com.br", com "de", não existe). As páginas internas têm
  endereço cifrado; a lista de paróquias e as 6 páginas de Região Pastoral
  saem do menu "Paróquias".
- Uma página por paróquia (31), com data de criação, município, número de
  comunidades, clero, "Horários de Missa na Igreja Matriz", endereço,
  expediente, contatos da secretaria, redes e comunidades. URLs no campo
  `fontes`.
- https://catedralderiodosul.com.br/horarios (Catedral).

Ajustes: a página da Paróquia São José (Rio do Campo) repete o endereço da
Paróquia Cristo Rei de Taió (Rua Padre Eduardo, 112, Taió); a cidade ficou
Rio do Campo e o endereço vazio. "Primeira sexta-feira" virou `semanas` [1];
"todo dia N" e "última quinta-feira" foram para `nao_cabe`. Instagram só
quando a página da paróquia traz o link.

## Conferência da lista

https://gcatholic.org/dioceses/diocese/riod0.htm e
https://gcatholic.org/churches/local/riod0 (09/11/2026), "31 parishes" na
estatística de 2022, mas 32 entradas na lista. Diferenças:

- Alfredo Wagner: o GCatholic diz paróquia "São Cristóvão"; a diocese, Paróquia
  Bom Jesus. Seguimos a diocese.
- Salete: o GCatholic lista também "Nossa Senhora de Salete (Parish, Shrine)",
  além da Imaculada Conceição. A diocese só tem a Paróquia Imaculada
  Conceição em Salete; o santuário não entrou como unidade (pendência:
  conferir se é só santuário).
- A Paróquia Sagrada Família, que o GCatholic põe em Rio do Campo, é a de Rio
  da Prata (Rio do Campo) na diocese.

## Pendências

- Horários da Mirim Doce e de Vitor Meireles; atualizar as 28 páginas de
  2022-2023 (a busca na web acabou, limite da sessão, antes de procurar perfis
  das paróquias).
- Endereço da matriz de São José (Rio do Campo) e de Santa Catarina (Vitor
  Meireles).
- Comunidades só com nome nas páginas da diocese (fora do JSON):

- Paróquia Nossa Senhora do Caravaggio (Agronômica): 10 comunidades.
- Paróquia Bom Jesus (Alfredo Wagner): 24 comunidades.
- Paróquia Sant'Ana (Apiúna): 15 comunidades.
- Paróquia Santo Ambrósio (Ascurra): 22 comunidades.
- Paróquia Cristo Rei (Dona Emma): 6 comunidades.
- Paróquia Santo Huberto (Ibirama): 22 comunidades.
- Paróquia Santo Antônio (Imbuia): 8 comunidades.
- Paróquia Santo Estêvão (Ituporanga): 55 comunidades.
- Paróquia Santo Antônio de Pádua (Laurentino): 8 comunidades.
- Paróquia Santa Luzia (Lontras): 14 comunidades.
- Paróquia São Miguel Arcanjo (Mirim Doce): 9 comunidades.
- Paróquia Nossa Senhora de Fátima (Pouso Redondo): 30 comunidades.
- Paróquia Nossa Senhora do Santíssimo Rosário (Presidente Getúlio): 14 comunidades.
- Paróquia São José (Presidente Nereu): 6 comunidades.
- Paróquia Sagrada Família (Rio do Campo): 27 comunidades.
- Paróquia São José (Rio do Campo): 15 comunidades.
- Paróquia Nossa Senhora Consolata (Rio do Oeste): 18 comunidades.
- Paróquia Divino Espírito Santo (Rio do Sul): 10 comunidades.
- Paróquia Nossa Senhora Aparecida (Rio do Sul): 14 comunidades.
- Paróquia Nossa Senhora das Graças (Rio do Sul): 1 comunidades.
- Paróquia São José Operário (Rio do Sul): 12 comunidades.
- Paróquia São Judas Tadeu (Rio do Sul): 6 comunidades.
- Paróquia São Francisco de Assis (Rodeio): 15 comunidades.
- Paróquia Imaculada Conceição (Salete): 19 comunidades.
- Paróquia Cristo Rei (Taió): 25 comunidades.
- Paróquia Cristo Rei (Trombudo Central): 30 comunidades.
- Paróquia São Sebastião (Vidal Ramos): 26 comunidades.
- Paróquia Nossa Senhora das Graças (Witmarsum): 8 comunidades.
