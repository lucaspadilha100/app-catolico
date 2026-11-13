# Prelazia de Lábrea (AM): fontes da pesquisa de 13/11/2026

Nome atual: **Prelazia de Lábrea** (prelazia territorial), criada em
01/05/1925 pela bula "Imperscrutabili Dei consilio", confiada aos
Agostinianos Recoletos; desde 1982 sufragânea de **Porto Velho** (não de
Manaus). Bispo prelado: Dom Santiago Sánchez Sebastián, OAR (desde 2016).
Padroeira: Nossa Senhora de Nazaré. Cúria: Travessa Nazaré, 119, salas 01 e
02, Praça Coronel Labre, Centro, Lábrea, CEP 69830-000, (97) 3331-2364,
prelazialabrea@hotmail.com. Municípios: Lábrea, Canutama, Tapauá e Pauini.

O site oficial é **prelaziadelabrea.com.br** (o GCatholic ainda aponta o
antigo prelaziadelabrea.org.br, que não responde).

## Resumo

- **5 unidades pastorais** em `saida/labrea.json`: 1 catedral (N. S. de
  Nazaré, Lábrea) e 4 paróquias (Santa Rita de Cássia, Tapauá; São João
  Batista, Canutama; Santo Agostinho, Pauini; São Sebastião e São Francisco,
  Belo Monte e Foz do Tapauá).
- **4 com horário de missa**, todas com confiança média: a página "Horários
  de Missa" do site (editada em 22/04/2024) é uma tabela por dia da semana e
  por paróquia, sem dizer a igreja; supusemos a matriz. Ela não traz missa na
  terça nem no sábado em nenhuma paróquia, e em Tapauá dá duas missas às
  19h30 na quinta (anotado no `nao_cabe`).
- A Paróquia São Sebastião e São Francisco (criada em 16/02/2020) não tem
  matriz: "comunidade de comunidades". Entrou com as duas comunidades que a
  fonte nomeia (São Sebastião, Belo Monte, Canutama; São Francisco, Foz do
  Tapauá, Tapauá), ambas de tipo `comunidade`, sem horário nem contato
  (confiança baixa). **Atenção**: é o único item cuja primeira igreja não é
  `matriz`, porque a fonte diz que não há matriz.
- Nenhuma página publica confissão ou adoração.
- A prelazia não publica foranias ou setores. Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Nossas Paróquias" do site (5 paróquias) e dos posts de
cada uma (categoria "Nossas Paróquias", via `/wp-json/wp/v2/`).

Conferência: GCatholic e catholic-hierarchy dão **5 paróquias** (2022/2023),
e o GCatholic soma "1 missão". O GCatholic só lista 4 igrejas (catedral,
Canutama, Tapauá, Pauini), sem a paróquia de 2020. A "missão" não tem nome no
GCatholic; o site da prelazia cita a **Área Missionária KM 70 da Paróquia São
João Batista** (Canutama), que ficou no `nao_cabe` dessa paróquia por ser
parte dela e não ter lugar descrito.

## Páginas do site da prelazia (lidas em 13/11/2026)

- https://prelaziadelabrea.com.br/nossas-paroquias/
- https://prelaziadelabrea.com.br/horarios-de-missa/ (2024-04-22)
- https://prelaziadelabrea.com.br/paroquia-nossa-senhora-de-nazare-sede/
- https://prelaziadelabrea.com.br/paroquia-santa-rita-de-cassia/
- https://prelaziadelabrea.com.br/paroquia-sao-joao-batista/
- https://prelaziadelabrea.com.br/paroquia-santo-agostinho/
- https://prelaziadelabrea.com.br/area-missionaria-sao-sebastiao-e-sao-francisco/
  (é a página da Paróquia São Sebastião e São Francisco)
- https://prelaziadelabrea.com.br/comunidades/ (26 comunidades, cada uma só
  com a paróquia, sem lugar; ficaram no `nao_cabe` das matrizes)
- https://prelaziadelabrea.com.br/missionarios/ e /secretaria-prelaticia/
  (contatos da cúria; os e-mails e celulares das funcionárias são pessoais e
  não entraram)

A data em `fontes` é a da última edição da página no WordPress. Contatos: os
números publicados nas páginas das paróquias como "WhatsApp" ou "Telefone"
da paróquia (Lábrea e Tapauá: WhatsApp; Pauini: telefone).

## Conferência

- https://gcatholic.org/dioceses/diocese/labr1.htm e
  https://gcatholic.org/churches/local/labr1
- https://catholic-hierarchy.org/diocese/dlaba.html

## O que falta para o próximo estado desta pesquisa

- Horários mais novos que abril de 2024 e a igreja de cada missa.
- Lugar (bairro ou rio) das 26 comunidades e da Área Missionária KM 70.
- Contato e horários da Paróquia São Sebastião e São Francisco.
- Telefone da Paróquia São João Batista (Canutama).
