# Diocese de Itabuna (BA): fontes da pesquisa de 13/11/2026

Sé em Itabuna, sufragânea de São Salvador da Bahia. Bispo: Dom Jailton de
Oliveira Lino, PSDP (desde 25/02/2025). Cúria: Rua das Nações Unidas, 400,
Itabuna, (73) 3211-3520 (Catholic-Hierarchy). Três foranias: Centro, Norte
e Sul.

## Resumo

- **36 unidades pastorais** em `saida/itabuna.json`: 1 catedral, 34
  paróquias e 1 quase-paróquia (Nossa Senhora de Guadalupe, Itabuna).
- **23 com horário de missa** (confiança alta): todas as que têm página no
  site da diocese com a grade de missas preenchida. Lidas em 13/11/2026; a
  maioria foi atualizada em agosto de 2026 (datas no campo `fontes`).
- **13 sem horário** (confiança baixa, `horarios: []`): a Paróquia N. S. da
  Conceição de Ferradas (página com a grade em branco) e as 12 unidades que
  não têm página no site (ver abaixo). Lista em `SEM-HORARIO-itabuna.txt`.
- Confissão só na Paróquia Santa Terezinha (Potiraguá); adoração em N. S. da
  Conceição (Itabuna), Senhor Deus Menino (Ibicaraí), São José (Una) e
  Senhora Santana (Floresta Azul).
- Capelas e comunidades entraram quando a página dá nome e lugar. As que só
  têm nome (ou só horário) ficaram no `nao_cabe` da matriz: Piedade, Santa
  Rita de Cássia, Santo Antônio de Itororó, Senhora Santana de Floresta
  Azul, Sant'Ana de Buerarema, Senhor do Bonfim de Jussari, Fátima.
- Todo `id_banco` é null.

## Lista das unidades

O site (WordPress) tem um tipo de conteúdo `paroquia` com 24 páginas,
cada uma com forania, contatos, endereço, padre, grade de missas por dia e
um texto com história e comunidades:
https://diocesedeitabuna.com.br/wp-json/wp/v2/paroquia e
https://diocesedeitabuna.com.br/paroquias/ (Centro 10, Norte 9, Sul 5).

Conferência com o GCatholic (https://gcatholic.org/dioceses/diocese/itab1.htm
e https://gcatholic.org/churches/local/itab1, atualizado em 09/11/2026: 33
paróquias em 2022, 35 igrejas) e com as notícias do próprio site. O site
não tem página para 12 unidades que existem:

- Itabuna (Forania Centro, como as demais da cidade): Catedral de São José;
  Paróquia Santa Inês (comunidades pela notícia da posse de 02/2026);
  Paróquia N. S. das Vitórias (Jardim Vitória, Passionistas; matriz dedicada
  em 18/12/2025); Paróquia São Judas Tadeu (bairro não informado);
  Quase-Paróquia N. S. de Guadalupe (Parque Boa Vista, oficializada em
  03/01/2023, ainda citada em 2026; não está no GCatholic); Paróquia Santo
  Antônio, cuja igreja na Av. do Cinquentenário virou o primeiro santuário
  diocesano em 28/12/2025 (o GCatholic a lista como paróquia e como
  santuário; entrou como paróquia com a igreja de tipo `santuario`).
- Forania Sul: São Boaventura (Canavieiras), N. S. da Conceição (Arataca),
  Santa Luzia (Pau Brasil), São Sebastião (Camacan), São Sebastião
  (Mascote), São João Batista (São João do Paraíso). A Forania Sul tinha 11
  paróquias em 2019 (notícia da XVIII Assembleia) e lista 10 em 2023, sem
  Arataca; Arataca ficou na Sul pela notícia de 2019.

Novas em relação ao GCatholic: N. S. das Graças (Jaçanã, criada em
28/11/2024) e a quase-paróquia de Guadalupe. São Francisco de Assis (Rio do
Meio, Itororó) virou paróquia em 03/12/2024. A Paróquia N. S. da Piedade
aparece no GCatholic como "Santuário"; a diocese a trata como paróquia, e a
notícia de 12/2025 diz que o de Santo Antônio é o primeiro santuário.

## Páginas lidas (13/11/2026)

- As 24 páginas de paróquia (URLs no campo `fontes` de cada item).
- Notícias usadas para a lista e as comunidades:
  - https://diocesedeitabuna.com.br/fe-e-unidade-padre-tony-valerio-assume-a-paroquia-santa-ines-em-itabuna/
  - https://diocesedeitabuna.com.br/fe-e-solenidade-igreja-matriz-de-nossa-senhora-das-vitorias-e-dedicada-em-itabuna/
  - https://diocesedeitabuna.com.br/itabuna-bispo-dom-carlos-alberto-oficializa-a-quase-paroquia-nossa-senhora-de-guadalupe/
  - https://diocesedeitabuna.com.br/historia-e-fe-diocese-de-itabuna-encerra-jubileu-da-esperanca-e-cria-seu-primeiro-santuario/
  - https://diocesedeitabuna.com.br/forania-sul-realiza-sua-xxi-assembleia-na-paroquia-sao-sebastiao-em-camaca/
  - https://diocesedeitabuna.com.br/assembleia-da-forania-sul/
  - https://diocesedeitabuna.com.br/paroquia-de-sao-boaventura-acolhe-padre-luiz-alves-em-solenidade-de-posse-canonica/
  - https://diocesedeitabuna.com.br/padre-patrick-santos-toma-possa-na-paroquia-nossa-senhora-da-conceicao-em-arataca-ba/
  - https://diocesedeitabuna.com.br/dom-jailton-lino-nomeia-novos-vigarios-foraneos-para-a-diocese-de-itabuna/

## Contatos

Só telefone e e-mail que a página dá como da paróquia. Ficaram de fora: o
WhatsApp (73) 3211-3520, que é o da cúria e aparece em todas as páginas; os
e-mails e perfis pessoais de padres; o celular (73) 98147-0761, publicado
como telefone de Itapé e também de Santa Cruz da Vitória (parece ser do
padre que passou de uma à outra). Telefone da Santa Maria Goretti publicado
sem DDD (3212-1735); entrou com o 73 da cidade.

## Leituras que pedem cuidado

- Fátima (Itabuna): a Comunidade São João Batista tem missa no sábado às
  16h na grade e às 18h na lista de comunidades; ficou no `nao_cabe`.
- São Francisco de Assis (Rio do Meio): quarta e quinta às 19h a grade não
  diz o lugar; entrou na matriz, com aviso no `nao_cabe`.
- Senhora Sant'Ana (Buerarema): "terça 18h, Santuário" sem dizer qual; ficou
  no `nao_cabe`.
- Itaju do Colônia: a grade está vazia; os horários vieram do texto da
  mesma página.

## O que falta para o próximo estado

- Horários das 13 unidades sem horário (lista em `SEM-HORARIO-itabuna.txt`;
  nenhuma tem perfil citado por fonte oficial).
- Confissão na maioria das paróquias.
- Município de São João do Paraíso (posto como Mascote; o GCatholic dá o
  lugar como cidade).
