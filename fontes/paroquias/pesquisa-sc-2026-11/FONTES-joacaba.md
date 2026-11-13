# Diocese de Joaçaba (SC): fontes da pesquisa de 13/11/2026

Sé em Joaçaba, Meio-Oeste catarinense (vale do Rio do Peixe, Concórdia,
Campos Novos). Criada em 1975; sufragânea de Chapecó desde 2024. Bispo: Dom
Frei Mário Marquez, OFMCap. Padroeira: Santa Teresinha do Menino Jesus.
Cúria: Rua Frei Edgar, 104-B, Centro, Joaçaba, (49) 3522-0848.

## Resumo

- **27 unidades** em `saida/joacaba.json`: 1 catedral (Santa Teresinha do
  Menino Jesus, elevada a Santuário Diocesano em 01/10/2025; a primeira igreja
  entrou como `santuario`) e 26 paróquias.
- **20 com horário de missa**:
  - 1 com confiança alta: a Catedral, horários e confissões publicados pela
    diocese em 02/10/2025, iguais aos da página "Horários de Missas".
  - 19 com confiança média: horários da página de cada paróquia no site da
    diocese, todas atualizadas em abril de 2023.
- **7 sem horário** (confiança baixa; campo vazio na página da paróquia):
  São João Batista (Campos Novos), São Judas Tadeu (Vargem), São Cristóvão
  (Concórdia), Santa Catarina de Alexandria (Piratuba), Sagrada Família de
  Nazaré (Concórdia), Santo Antônio (Concórdia) e São Paulo Apóstolo
  (Capinzal).
- **300 capelas** com nome e lugar, das listas "Comunidades" das páginas de
  paróquia. Comunidades listadas só pelo nome, sem lugar, ficaram no
  `nao_cabe` da matriz (Monte Carlo, Vargem, Água Doce, Herval d'Oeste e
  algumas de Lacerdópolis).
- Confissão só na Catedral; adoração publicada em Vargem Bonita e Jaborá.
- Todo `id_banco` é null.

## Lista das unidades

- **Áreas Pastorais** (https://diocesedejoacaba.org.br/areas-pastorais/): 25
  paróquias em 4 áreas: Campos Novos (6), Concórdia (5), Irani (7) e Joaçaba
  (7, com a Catedral).
- **Categoria "Paróquias"** do site (3 páginas): 26 páginas de paróquia mais
  a da Catedral. Tem duas paróquias de Concórdia que a página de Áreas
  Pastorais não lista: **Sagrada Família de Nazaré** (página atualizada em
  maio de 2025, com o pároco) e **Santo Antônio** (página vazia). A
  observação delas diz que não constam das Áreas; pela cidade, devem ser da
  Área de Concórdia.
- **GCatholic** (https://gcatholic.org/churches/local/joac0, 09/11/2026;
  estatística de 2022: 27 paróquias): bate com as 27. O GCatholic registra a
  Paróquia Santo Antônio de Concórdia na cidade "Santo Antônio"; e lista a
  Igreja São José de Brunópolis e a Igreja N. S. de Lourdes de Joaçaba sem
  marca de paróquia (Brunópolis é comunidade da Paróquia Imaculada Conceição
  de Monte Carlo; N. S. de Lourdes é capela da Catedral).

**Paróquia nova em criação**: notícia da diocese de 10/06/2026
(https://diocesedejoacaba.org.br/diocese-de-joacaba-inicia-processo-para-criacao-de-nova-paroquia-em-campos-novos/):
a futura Paróquia Nossa Senhora de Lourdes, em Campos Novos, será
desmembrada da São João Batista e instalada "dentro de aproximadamente um
ano". Ainda não entrou como unidade; está no `nao_cabe` de Campos Novos,
junto com o Santuário Nossa Senhora Aparecida e as capelas urbanas citadas.

## Páginas lidas (13/11/2026)

- https://diocesedejoacaba.org.br/horarios-de-missas/ (só a Catedral)
- https://diocesedejoacaba.org.br/areas-pastorais/
- https://diocesedejoacaba.org.br/categorias/paroquias/ (e páginas 2 e 3)
- Uma página por paróquia (URLs no campo `fontes` de cada item), com
  telefone, e-mail (protegido pelo Cloudflare, decodificado), redes,
  comunidades, endereço e horário. A API do WordPress do site responde 401;
  as datas vêm do `dateModified` de cada página.
- https://diocesedejoacaba.org.br/catedral-santa-teresinha-do-menino-jesus-e-elevada-a-santuario-diocesano/
  (horários e confissões da Catedral, 02/10/2025)
- https://diocesedejoacaba.org.br/catedral-santa-teresinha-do-menino-jesus/
  (contatos e capelas da Catedral)

## Instagram (anotado das próprias páginas da diocese)

catedraldejoacaba, paroquiaimaculadamc, paroquia.nsrosario,
paroquiasjbirani, saojorgepassosm, paroquiasaoroque2022,
paroquiasrbomjesus, psaopauloapostolo, paroquiasaosebastiaocatanduvas.

## Dificuldades

- Os horários das paróquias são de abril de 2023; podem ter mudado.
- Sites próprios (paroquiasaojorge.org.br, saoroqueparoquia.org.br,
  psaopauloapostolo.com.br) não responderam.
- Quatro buscas na web (Capinzal, Campos Novos, Piratuba, São Cristóvão de
  Concórdia) não deram horário; a cota de buscas acabou em seguida.

## O que falta para o próximo estado

- Horários das 7 paróquias sem horário e reconferência das 19 de 2023.
- Contatos de Piratuba, Santo Antônio e Sagrada Família de Nazaré
  (Concórdia), cujas páginas estão vazias.
- Incluir a Paróquia Nossa Senhora de Lourdes (Campos Novos) quando for
  instalada.
- Missa da primeira sexta-feira em Água Doce e Peritiba: a página não dá a
  hora.
