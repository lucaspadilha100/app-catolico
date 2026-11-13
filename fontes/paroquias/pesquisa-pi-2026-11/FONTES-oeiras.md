# Diocese de Oeiras (PI): fontes da pesquisa de 13/11/2026

Sé em Oeiras, sul do Piauí; padroeira Nossa Senhora da Vitória (também
padroeira do Piauí). Bispo: Dom Edilson Soares Nobre (o GCatholic marca a sé
como vacante em 13/11/2026; o site da diocese ainda o traz como bispo).
Cúria: Av. Professor Rafael Farias, 534, Centro, Oeiras,
contato@diocesedeoeiras.org.

## Resumo

- **21 unidades pastorais** em `saida/oeiras.json`: 1 catedral, 17 paróquias
  e 3 áreas pastorais (Nossa Senhora do Carmo em Barra D'Alcântara, São
  Miguel Arcanjo em São Miguel do Fidalgo e São João Batista em São João da
  Varjota), em 4 setores: Setor 1 Nossa Senhora da Vitória, Setor 2 Santa Rosa
  de Lima, Setor 3 Sagrado Coração de Jesus, Setor 4 São José.
- Cidades: Oeiras (3), Colônia do Piauí, Santo Inácio do Piauí, São João da
  Varjota, Santa Rosa do Piauí, Várzea Grande, Arraial, Tanque do Piauí, Barra
  D'Alcântara, Francisco Ayres, Simplício Mendes, Conceição do Canindé, Isaías
  Coelho, Bela Vista do Piauí, Campinas do Piauí, São Francisco de Assis do
  Piauí, Paes Landim, Socorro do Piauí, São Miguel do Fidalgo.
- **20 com horário de missa**, todas com confiança média (uma baixa): os
  horários vêm da página "Horários de Missa" do site da diocese, que é uma
  página estática publicada em 25/06/2020 e nunca mais alterada (conferido
  pela API do WordPress: `modified` 2020-06-25). Não achamos horário mais novo
  em notícia da diocese nem no trecho de busca do Instagram de alguma paróquia.
- A Paróquia da Imaculada Conceição (Francisco Ayres) ficou com confiança
  baixa: a página de 2020 dá os horários a uma "Área Pastoral de Nossa
  Senhora da Conceição, Rua José Ferreira, 355"; em 2020 a única área com esse
  nome era a de Francisco Ayres (paróquia desde 29/11/2021, e a página dela no
  site ainda tem o endereço `area-pastoral-de-nossa-senhora-da-conceicao-4`),
  mas o endereço não bate com o da página atual.
- **Sem horário**: Área Pastoral São João Batista (São João da Varjota),
  instalada em 2023, depois da página de horários.
- As páginas de paróquia não listam capelas nem comunidades: só a matriz
  entrou.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese (organizada por setor,
21 itens) e das 21 páginas individuais, lidas pela API do WordPress
(`/wp-json/wp/v2/posts?include=...`).

Conferência contra o GCatholic (atualizado em 13/11/2026; "17 parishes, 3
missions", 20 igrejas): bate com 20 das 21. Falta no GCatholic só a Área
Pastoral São João Batista, de São João da Varjota, instalada em 11/02/2023.
Divergências de categoria: o GCatholic marca Barra D'Alcântara e São Miguel do
Fidalgo como paróquias; o site da diocese os chama de "Área Pastoral", e assim
entraram.

Nenhum dos doze municípios que o Diretório Pastoral 2026 de Teresina põe na
Arquidiocese (Valença do Piauí, Pimenteiras, Inhuma, Novo Oriente do Piauí,
Aroazes, Elesbão Veloso, São Félix do Piauí, Francinópolis, Barro Duro, Prata
do Piauí, Passagem Franca do Piauí, Santa Cruz dos Milagres) aparece na lista
de Oeiras nem no GCatholic de Oeiras: sem divergência.

## Como os horários foram ligados às paróquias

A página de horários traz, por dia da semana, o nome da paróquia e um
endereço (quase sempre o da secretaria ou casa paroquial). Onde o nome é
ambíguo (duas "Santo Antônio", duas "São José", duas "São Francisco de
Assis"), a ligação foi feita pelo endereço:

- Santo Antônio, Rua Maria Cândida: Várzea Grande; Rua Sebastião Tapety:
  Colônia do Piauí.
- São José, Travessa São Pedro, 170: Paes Landim (a página da paróquia diz
  70); "Valentim Marques Barbosa": Bela Vista do Piauí (Av. Vereador Virgílio
  Valentim Marques).
- São Francisco de Assis, José de Morais Rêgo: Campinas do Piauí; Praça da
  Matriz, 166: São Francisco de Assis do Piauí.
- Área Pastoral de São Miguel Arcanjo, "Rua Velha"; Área Pastoral de Nossa
  Senhora do Carmo, Av. Francisco Guedes de Sousa, 100 (só sábado).

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedeoeiras.org/paroquias/ (a lista por setor)
- https://diocesedeoeiras.org/horarios-de-missa/ (horários, de 2020)
- https://diocesedeoeiras.org/contato/ (cúria)
- Uma página por unidade, com endereço da matriz e da secretaria, telefone,
  e-mail e expediente; as URLs estão no campo `fontes` de cada item. A data de
  cada fonte é a última alteração da página na API.

Contatos: entrou o telefone da secretaria como publicado (vários são
celulares, listados como "Telefone" ou "Contatos" da secretaria). E-mails
pessoais de padre (a maioria das páginas só traz esses) não entraram; ficaram
só os da paróquia (Catedral, Várzea Grande, Isaías Coelho). O e-mail da
Imaculada Conceição foi publicado com cedilha e ficou de fora.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/oeir0.htm e
  https://gcatholic.org/churches/local/oeir0 (13/11/2026)
- https://cnbbne4.org.br/diocese-de-oeiras-2/ (histórico)

## O que falta para o próximo estado desta pesquisa

- Horários atuais: a única fonte da diocese é de 2020. Vale pedir à Pascom
  diocesana (formação da Pascom no Setor 1 em abril de 2026) uma lista nova.
- Confissão e adoração: nenhuma fonte publica.
- Capelas e comunidades rurais: nenhuma página as lista.
- Confirmar a igreja dos horários "Área Pastoral de Nossa Senhora da
  Conceição, Rua José Ferreira, 355".
