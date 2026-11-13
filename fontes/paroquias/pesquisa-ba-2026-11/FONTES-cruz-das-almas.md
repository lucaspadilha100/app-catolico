# Diocese de Cruz das Almas (BA): fontes da pesquisa de 13/11/2026

Sé em Cruz das Almas; Recôncavo baiano. Bispo: Dom Antonio Tourinho Neto.
Cúria: Praça Senador Temístocles, s/n, Centro, Cruz das Almas, (75)
3199-1954, contato@diocesedecruzdasalmas.com.br. Padroeira: Nossa Senhora do
Bom Sucesso (catedral).

## Resumo

- **20 unidades** em `saida/cruz-das-almas.json`: 1 catedral, 18 paróquias e
  1 área pastoral, em 4 foranias. Cidades: Cruz das Almas (4), Santo Amaro (4),
  Muritiba (2), Cabaceiras do Paraguaçu (2), Cachoeira (2), Maragogipe (2) e
  uma em Sapeaçu, Governador Mangabeira, São Félix e Saubara.
- **17 com horário** (todas `media`) e **3 sem horário** (baixa): N. S.
  Aparecida (Pumba), Área Pastoral São José (São José do Itaporã) e N. S. da
  Purificação (Santo Amaro). Ver `SEM-HORARIO-cruz-das-almas.txt`.
- Os horários vêm de um único quadro da diocese ("Horários de Missa", em três
  janelas do site), sem data. Ele ainda chama São Roque de "Área Pastoral",
  portanto é anterior a 07/08/2025; por isso nenhum horário passou de `media`.
  Só a igreja matriz de cada paróquia aparece no quadro.
- **Santo Amaro, Purificação:** o quadro dá a ela exatamente o mesmo texto de
  São Roque (dom 8h, qui 17h, 1ª sex 7h, sáb 19h). Parece cópia; não entrou e
  a paróquia ficou `baixa`.
- O site não lista capelas nem comunidades das paróquias; nenhuma entrou.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site (endereço `/cópia-paróquias`, a
versão em vigor, com 4 foranias):

- Forania 1, N. S. do Bom Sucesso: Catedral, São José Operário, São Roque
  (Chapadinha), N. S. Aparecida (Pumba), N. S. da Conceição (Sapeaçu).
- Forania 2, São Pedro do Monte: São Pedro do Monte (Muritiba), N. S. da
  Conceição (Governador Mangabeira), São João Batista (Cabaceiras), Santo
  Antônio (Geolândia), Área Pastoral São José (São José do Itaporã).
- Forania 3, São Tiago: São Tiago do Iguape, N. S. do Rosário (Cachoeira),
  Senhor Deus Menino (São Félix), São Bartolomeu (Maragogipe), N. S. da Vitória
  (São Roque do Paraguaçu).
- Forania 4, N. S. da Purificação: Purificação e Rosário (Santo Amaro), N. S.
  da Oliveira (Oliveira dos Campinhos), N. S. da Soledade (Acupe), São Domingos
  de Gusmão (Saubara).

A página antiga `/paróquias` ainda mostra 3 foranias e 17 paróquias. A quarta
forania nasceu do decreto de 16/12/2025.

Conferência com a contagem da diocese: notícia de 04/06/2025 diz que, com São
Roque e N. S. Aparecida, a diocese passaria a "19 paróquias em 10 municípios";
a notícia da instalação da Pumba confirma 19. Com a Área Pastoral São José
(criada em 19/03/2026), são 20 unidades. Bate.

Conferência com o GCatholic (09/11/2026, 20 igrejas): faltam lá São Roque
(Chapadinha), N. S. Aparecida (Pumba) e a Área Pastoral São José. O GCatholic
tem o Santuário Santo Antônio de Sant'Anna Galvão (Cachoeira), Menino Jesus de
Praga e Sagrada Família (Cruz das Almas), sem marca de paróquia: não são
unidade. Marca a Purificação de Santo Amaro como basílica menor.

## Páginas do site da diocese (site Wix, lidas em 13/11/2026)

- https://www.diocesedecruzdasalmas.com.br/c%C3%B3pia-par%C3%B3quias (lista)
- As fichas de cada paróquia e o quadro de horários abrem em janelas (lightbox)
  sem endereço próprio; o conteúdo foi lido do arquivo de dados público de cada
  janela, `https://static.wixstatic.com/sites/c9f3f7_<id>_746.json.z?v=3`
  (os endereços exatos estão no campo `fontes`). Quadro de horários: janelas
  "Horários Missa 1", "2" e "3".
- Notícias usadas (blog do site):
  - /post/criação-de-duas-novas-paróquias-é-anunciada-em-reunião-do-clero (04/06/2025)
  - /post/paróquia-são-roque-é-criada-em-cruz-das-almas (agosto de 2025)
  - /post/pumba-nova-paróquia-é-instalada-na-diocese
  - /post/novo-decreto-desmembra-e-cria-nova-forania (16/12/2025)
  - /post/criação-da-área-pastoral-são-josé-fortalece-presença-da-igreja-em-são-josé-do-itaporã (20/03/2026)

O site próprio da Paróquia São José Operário (psjcruzdasalmas.com.br), citado
na ficha, não respondeu.

## Observações por unidade

- Muritiba: o quadro avisa que as celebrações estavam temporariamente na
  Igreja do Bonfim.
- Área Pastoral São José: a ficha repete "Padroeiro: São Roque, 16 de agosto"
  (cópia da ficha de São Roque); o titular é São José.
- Saubara: a ficha diz Forania 3 (antiga); a lista nova a põe na Forania 4.
  O telefone publicado tem um dígito a mais e ficou de fora.
- Telefones: celulares publicados como "Fone" entraram em `telefone`; só os
  marcados "WhatsApp" (Geolândia, Muritiba, São Félix) entraram em `whatsapp`.

## Instagram

As fichas não trazem Instagram de paróquia; o site só cita o da diocese
(@diocesecruzdasalmas).

## O que falta para o próximo estado desta pesquisa

- Horário atual de cada paróquia (o quadro é anterior a agosto de 2025),
  principalmente Purificação, Pumba e São José do Itaporã.
- Capelas e comunidades (São Roque tem 14 comunidades; a Pumba é rural).
