# Diocese de Cristalândia (TO): fontes da pesquisa de 13/11/2026

Sé em Cristalândia; sudoeste do Tocantins (com a Ilha do Bananal) e norte de
Goiás. Prelazia de 1956 a 2019, quando virou diocese. Sé vacante desde
14/10/2026 (Dom Wellington de Queiroz Vieira foi transferido para Cuiabá).
Cúria: Av. Dom Jaime Antônio Schuck, 2050, Centro, Cristalândia,
(63) 99287-8320 (assessoria de comunicação; o mesmo número com final 9886
aparece como WhatsApp no site), diocesedecristalandia@gmail.com. Facebook:
DioceseDeCristalandia.BR; não achei Instagram da diocese.

## Resumo

- **20 unidades pastorais** em `saida/cristalandia.json`: 1 catedral e 19
  paróquias, em 4 foranias (Nossa Senhora do Perpétuo Socorro, São João
  Batista e São José Operário no Tocantins; Nossa Senhora da Piedade no
  norte de Goiás: Porangatu, Mutunópolis, Bonópolis, Novo Planalto e São
  Miguel do Araguaia).
- **7 com horário** (confiança alta), todas da página "Horário de Missa" do
  site da diocese, lida em 13/11/2026: Catedral (Cristalândia), N. S. do
  Carmo (Pium), N. S. do Carmo (Divinópolis), N. S. do Perpétuo Socorro e
  São José Operário (Paraíso do Tocantins), N. S. da Piedade e Santíssima
  Trindade (Porangatu). A página lista as missas por comunidade, então essas
  7 entraram com as capelas e comunidades nomeadas (73 igrejas ao todo), mas
  sem o endereço de cada uma.
- **13 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. Todas têm endereço da
  matriz e contato institucional da página da própria diocese.
- Todo `id_banco` é null: o banco não tem nada do Tocantins nem de Goiás.

## Lista das unidades

A lista vem das 4 páginas de forania do site da diocese (20 paróquias, cada
uma com página própria de endereço e contatos). A mais nova é a Paróquia do
Bom Jesus, em Caseara (2024).

Conferência contra o anuário: o Anuário Pontifício 2024 (via
catholic-hierarchy.org) dá 19 paróquias; a 20ª é Caseara. O GCatholic
(atualizado em 09/11/2026) lista 20 igrejas, mas sem Caseara: traz a mais a
igreja de São Sebastião em Porangatu (comunidade da Paróquia Santíssima
Trindade, não paróquia). Nenhuma quase-paróquia, área pastoral ou santuário
nas fontes.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedecristalandia.org.br/ (menu, contatos no rodapé)
- https://diocesedecristalandia.org.br/horario-de-missa/ (a única fonte de
  horários: missas por hora, cada linha com comunidade e paróquia)
- https://diocesedecristalandia.org.br/categoria/paroquias/forania-nossa-senhora-da-piedade/
- https://diocesedecristalandia.org.br/categoria/paroquias/forania-nossa-senhora-do-perpetuo-socorro/
- https://diocesedecristalandia.org.br/categoria/paroquias/forania-sao-joao-bastista/
- https://diocesedecristalandia.org.br/categoria/paroquias/forania-sao-jose-operario/
- https://diocesedecristalandia.org.br/administracao-e-curia/ (bispo, vigário
  geral, cargos)
- As 20 páginas de paróquia (endereço, telefone, e-mail, clero), uma por
  unidade, no molde `/paroquia-<nome>-<cidade>-<uf>/`.

## Instagram (só o trecho que a busca mostra, em 13/11/2026)

Perfis não se leem por dentro (bloqueio de robôs); ficou anotado o que o
trecho da busca trouxe.

- paroquiasaojoseoperario.pso (São José Operário, Paraíso; redentoristas,
  bate com o e-mail da página da diocese)
- paroquiasaomiguelarcanjo.sma (São Miguel Arcanjo, São Miguel do Araguaia;
  a bio diz Diocese de Cristalândia)
- santaluzia.porangatu (comunidade Santa Luzia, da Paróquia N. S. da
  Piedade; a bio diz missa aos sábados às 19h, enquanto a página da diocese
  dá domingo às 18h; ficou a da diocese)

As demais paróquias não apareceram na busca com perfil identificável.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/cris0 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dcris.html (estatísticas; territórios
  da diocese: 16 municípios do Tocantins e 5 de Goiás)
- https://en.wikipedia.org/wiki/Diocese_of_Cristal%C3%A2ndia

## Decisões e pendências

- A página de horários traz "Paróquia N. Sra. Aparecida (Divinópolis-TO)" na
  missa de domingo às 7h30: essa paróquia não existe (a de Divinópolis é
  N. S. do Carmo; a de N. S. Aparecida é em Nova Rosalândia). A missa ficou
  na comunidade Aparecida de Divinópolis, com a divergência na observação.
- "Com. N. Sra. da Piedade (V. Matriz)" em Porangatu entrou como comunidade
  com localidade "Velha matriz" (a igreja velha do Descoberto da Piedade);
  conferir no lugar.
- Na Paróquia São José Operário (Paraíso) a Capela São Pedro aparece na
  novena (urbana) e num sábado "(Rural)": ficaram duas entradas; pode ser a
  mesma capela.
- O e-mail da Santíssima Trindade aparece no site sem o ".com" final
  ("parsantissimatrindade@gmail"); entrou completado. As comunidades
  Sant'Ana e Imaculada Conceição dessa paróquia têm fone e e-mail próprios
  na página da diocese (62 98488-1738 e 62 98488-1733).
- Caseara: a diocese publica só o celular do padre ("a Paróquia não tem
  Secretaria Paroquial"); pela regra, não entrou.
- Horário das 13 unidades sem fonte: o caminho mais provável são os perfis
  das paróquias no Instagram, que a busca não indexa por dentro.
- A página de horários não diz quando foi atualizada; não cobre nenhuma
  paróquia da forania São João Batista nem as 4 paróquias menores da forania
  da Piedade.
