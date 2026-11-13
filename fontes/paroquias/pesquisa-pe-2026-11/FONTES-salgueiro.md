# Diocese de Salgueiro (PE): fontes da pesquisa de 13/11/2026

Sé em Salgueiro; Sertão Central e Araripe pernambucano. Criada em 16/06/2010
(de partes das dioceses de Floresta e Petrolina), instalada em 12/10/2010.
Bispo: Dom José Vicente Pinto de Alencar da Silva. Cúria: Avenida Aurora de
Carvalho Rosa, 2253, Centro, Salgueiro, (87) 3871-2871. Padroeiro diocesano:
Santo Antônio; a futura catedral é dedicada a Nossa Senhora Aparecida.

## Resumo

- **33 unidades pastorais** em `saida/salgueiro.json`: 1 catedral, 29
  paróquias e 3 áreas pastorais, em 3 foranias (São Lucas 11, São Marcos 12,
  São Mateus 10). Cidades: Salgueiro (5, uma no distrito de Umãs), Araripina
  (5, três em distritos: Morais, Rancharia, Nascente), Ouricuri (4, uma em
  Barra de São Pedro), Exu (3, uma em Timorante), Bodocó (3, uma em
  Sipaúba), Ipubi (2, uma em Serrolândia), Parnamirim (2), Trindade (2, uma
  em Mangueira), e uma em Cabrobó, Cedro, Granito, Moreilândia, Serrita,
  Terra Nova e Verdejante.
- **31 com horário de missa**, todos com confiança alta: o site da diocese
  tem uma página por paróquia (tipo de post `paroquia` do WordPress, 33 no
  total) com telefone, e-mail institucional, endereço, atendimento,
  confissões, adoração e a tabela "Horário de Missa". A data de cada fonte
  de horário é a da última alteração da página (entre 10/2024 e 08/2026).
- **2 sem horário** (confiança baixa): Área Pastoral São Pedro Apóstolo
  (Sipaúba, Bodocó) e Área Pastoral Nossa Senhora de Fátima (Parnamirim): a
  página existe, mas a tabela de missas está vazia.
- Missas "do dia N de cada mês" (Dia da Graça, votivas) não cabem no formato
  e foram para `nao_cabe` (Sé, Bom Jesus dos Aflitos de Exu, Fátima de
  Ouricuri, São Francisco de Salgueiro, Santa Cruz, Serrita, Sagrada Família
  de Trindade, Imaculada Conceição de Araripina, Mangueira).
- Capela só uma: a Igreja da Sagrada Família, em Cabrobó (copadroeira da
  paróquia, com a maior parte das missas). As demais páginas falam de
  comunidades só pela contagem (Moreilândia 12, Imaculado Coração de Maria
  20, Umãs 18, Ipubi 25, Serrolândia 16).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da API do site (`/wp-json/wp/v2/paroquia?per_page=100`, 33
itens) e da taxonomia `local_paroquia` (as três foranias, que somam 33),
batida com a página "Horários de Missas", que filtra pelas mesmas foranias.

Conferência contra o GCatholic (atualizado em 09/11/2026: 28 igrejas,
estatística de 2022 com 25 paróquias): todas as paróquias do GCatholic estão
na lista. A diocese tem mais unidades que o GCatholic porque criou paróquias e
áreas pastorais depois de 2022 (Timorante 2023; Imaculado Coração de Maria de
Bodocó, Fátima de Ouricuri, Fátima de Morais, São Francisco de Exu e as áreas
de Mangueira e Fátima de Parnamirim em 2024; Sipaúba sem data publicada). Entradas do
GCatholic que não são unidade: Catedral de Nossa Senhora Aparecida (futura
catedral, terreno), Sagrada Família de Cabrobó (capela, entrou na paróquia de
Cabrobó), N. S. do Perpétuo Socorro duplicada em Ipubi (é a de Serrolândia),
São Francisco de Assis de Salgueiro (hoje paróquia, entrou como tal). A
"Primavera Santa Cruz" do GCatholic é a Paróquia Santa Cruz, no bairro
Primavera de Salgueiro.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedesalgueiro.org.br/paroquias/ e
  https://diocesedesalgueiro.org.br/horarios-de-missas/ (lista e filtro por forania)
- https://diocesedesalgueiro.org.br/wp-json/wp/v2/paroquia e
  https://diocesedesalgueiro.org.br/wp-json/wp/v2/local_paroquia (lista e foranias)
- Uma página por unidade em https://diocesedesalgueiro.org.br/paroquia/<slug>/;
  as URLs estão no campo `fontes` de cada item. E-mails decodificados do
  Cloudflare (data-cfemail).
- Notícias usadas: criação de novas áreas pastorais (21/11/2023), criação da
  Área Pastoral N. S. de Fátima (20/01/2024), Nota da Chancelaria de
  16/06/2025 (vigário responsável pela Igreja de São José, em Exu).

## Observações de dados

- A página da Sé dá o (87) 3871-0774 como WhatsApp; ficou como publicado.
- Fátima de Ouricuri e Fátima de Morais publicam o MESMO endereço (Rua Nossa
  Senhora de Fátima, 231); deve ser cópia numa das duas.
- O e-mail da área de Mangueira está publicado como
  `magueira.ssebastiao@...` (sem o "n"); ficou como publicado.
- Cabrobó: a página não diz em qual igreja são a confissão e a adoração;
  ficaram na matriz, com aviso no `nao_cabe`.
- Instagram: as páginas de paróquia só têm o perfil da diocese
  (diocesedesalgueiro); nenhum perfil de paróquia foi anotado.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/salg0.htm e
  https://gcatholic.org/churches/local/salg0
- https://www.catholic-hierarchy.org/diocese/dsalg.html (site e endereço da cúria)

## O que falta para o próximo estado desta pesquisa

- Horários das áreas pastorais de Sipaúba e de Fátima de Parnamirim.
- Endereço da Igreja da Sagrada Família (Cabrobó) e da Igreja de São José
  (Exu, ligada à Paróquia Bom Jesus dos Aflitos).
- Nomes e lugares das comunidades rurais (as páginas só dão a contagem).
- Adoração da área de Mangueira: só "quinta-feira", sem hora.
