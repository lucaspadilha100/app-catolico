# Diocese de Ji-Paraná (RO): fontes da pesquisa de 13/11/2026

Sé em Ji-Paraná; região central de Rondônia, da BR-364 (Jaru a Vilhena) ao
sul do estado. Bispo: Dom Norbert Hans Christoph Foerster, SVD (desde 2020).
Cúria: Av. Marechal Rondon, 400, Centro, Ji-Paraná, (69) 3416-4203 e
3416-4204, informatica@diocesedejiparana.org.br. Criada em 1983 (antes,
Prelazia de Vila Rondônia, 1978); padroeiro São João Bosco.

## Resumo

- **24 unidades pastorais** em `saida/ji-parana.json`: 1 catedral, 21
  paróquias, 1 santuário (o Santuário Diocesano Nossa Senhora Aparecida de
  Ouro Preto do Oeste, que é paróquia) e 1 área pastoral (Chupinguaia).
- **3 com horário** (confiança alta): Catedral São João Bosco e Paróquia
  Cristo Ressuscitado de Alvorada D'Oeste (páginas da diocese) e Paróquia
  São João Batista de Presidente Médici (site próprio da paróquia).
- **21 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. Quase todas têm
  endereço, telefone e e-mail da página da diocese.
- Todo `id_banco` é null: o banco não tem nada de Rondônia.
- Número de celular da secretaria foi posto no campo `whatsapp` quando a
  página lista um fixo e um celular; a fonte não diz "WhatsApp".

## Lista das unidades

A lista vem da página de paróquias do site da diocese (22 unidades, em duas
páginas: `paroquias.php` e `paroquias.php?pg=2`), mais duas que o próprio
site confirma sem página própria:

- **Paróquia Nossa Senhora das Graças (Vilhena)**: a história da Paróquia
  Nossa Senhora Auxiliadora registra o decreto de ereção de 21/03/2010; o
  anuário a lista.
- **Área Pastoral de Chupinguaia**: a mesma página diz que a Paróquia
  Nossa Senhora Auxiliadora "atende a Área Pastoral de Chupinguaia, com 19
  comunidades". Sem nome de igreja, padroeiro ou contato publicados; entrou
  com `igrejas: []`.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026): 22
igrejas listadas, batendo com o site da diocese, com duas diferenças que se
anulam: o anuário traz a Nossa Senhora das Graças de Vilhena e não traz a
Divino Espírito Santo de Nova Brasilândia D'Oeste. A estatística do anuário
(31/12/2022) dá **24 paróquias**, o mesmo total do JSON.

Divergências anotadas na observação de cada item: o anuário dá outro nome à
igreja matriz em Governador Jorge Teixeira (Nossa Senhora da Anunciação, não
Santa Rita de Cássia), Mirante da Serra (Bom Jesus dos Migrantes) e Urupá
(São João Batista); o JSON segue a diocese e nomeia a matriz pela paróquia.
Em Nova Brasilândia a própria diocese diz que a matriz é a igreja Nossa
Senhora Aparecida (decreto de 2015), e o JSON a segue.

Cone Sul fora de Vilhena e Chupinguaia não é desta diocese: Colorado do
Oeste, Cerejeiras, Cabixi, Corumbiara e Pimenteiras do Oeste estão na lista
do anuário da Diocese de Guajará-Mirim, assim como São Miguel do Guaporé e
Seringueiras.

## Páginas do site da diocese (lidas em 13/11/2026)

Site antigo (PHP); cada paróquia é uma página `noticias-det.php?cod=N` com
nome, município, data de criação, endereço, telefone e e-mail (protegido
por Cloudflare, decodificado do atributo `data-cfemail`).

- https://www.diocesedejiparana.org.br/ (contatos da cúria)
- https://www.diocesedejiparana.org.br/paroquias.php (e `?pg=2`: a lista)
- Páginas de paróquia (`noticias-det.php?cod=`): 493 Catedral São João
  Bosco (com horários), 3299 N. S. de Fátima Ji-Paraná, 497 São José
  Ji-Paraná, 3300 São Sebastião Ji-Paraná, 495 Jaru, 3302 Governador Jorge
  Teixeira, 3435 Santuário de Ouro Preto do Oeste, 3534 Vale do Paraíso,
  3303 Mirante da Serra, 414 Alvorada D'Oeste (com horários), 3456 Urupá,
  496 Presidente Médici, 3221 Pimenta Bueno, 3218 Sagrada Família Cacoal,
  4692 São Judas Tadeu Cacoal, 3219 Ministro Andreazza, 503 Espigão
  D'Oeste, 4405 Nova Brasilândia D'Oeste, 3222 Rolim de Moura, 3445 Santa
  Luzia D'Oeste, 3427 Alta Floresta D'Oeste, 3535 Vilhena (N. S.
  Auxiliadora; traz a criação da N. S. das Graças e a Área Pastoral de
  Chupinguaia).

## Sites próprios de paróquia

- https://paroquiasjb.vercel.app (Presidente Médici; horários em `/missas`,
  lido em 13/11/2026; o domínio www.paroquiasjb.org.br está desativado e
  aponta para lá). Dá o endereço da matriz (Av. São João Batista, 1626);
  a página da diocese dá outro (Av. 7 de Setembro, 2044), possivelmente a
  antiga secretaria; o JSON segue o site da paróquia.
- https://santuarioopo.com (Santuário de Ouro Preto do Oeste, citado pela
  diocese): não abriu na pesquisa, Cloudflare bloqueia robôs. É o caminho
  mais provável para os horários do santuário.

## Instagram (só o trecho que a busca mostra, em 13/11/2026)

Perfis não se leem por dentro (bloqueio de robôs); a busca indexou pouco
das paróquias desta diocese.

- pascomsaosebastiaojipa (São Sebastião, Ji-Paraná)
- paroquiasjbatistaro (São João Batista, Presidente Médici; o site próprio
  da paróquia confirma)

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/jipa0 e
  https://gcatholic.org/dioceses/diocese/jipa0.htm (anuário, 09/11/2026)
- https://gcatholic.org/churches/local/guaj0-n (limites com Guajará-Mirim)
- https://catholic-hierarchy.org/diocese/djipa.html
- https://pt.wikipedia.org/wiki/Diocese_de_Ji-Paraná (história e bispos;
  sem lista de paróquias)

## O que falta para o próximo estado desta pesquisa

- Horário das 21 unidades sem fonte: o caminho mais provável são o site do
  santuário de Ouro Preto do Oeste (bloqueado para robôs) e os perfis de
  Facebook e Instagram das paróquias, que a busca não indexa por dentro.
- Nome da igreja, padroeiro e contato da Área Pastoral de Chupinguaia.
- Endereço e contato da Paróquia Nossa Senhora das Graças de Vilhena.
- As páginas das paróquias listam dezenas de comunidades e capelas (Alvorada
  D'Oeste traz 42, Rolim de Moura 83, com nomes e linhas rurais), mas o
  texto vem corrompido (OCR ou tradução automática) e sem endereço: ficaram
  fora do JSON; só as matrizes entraram.
- Divergência de datas sem resolver: Mirante da Serra (criação 04/03/1990 no
  campo da página, 15/08/1994 na história) e Vilhena (11/02/1976 no campo,
  fundação da igreja em 24/05/1970 na história). O JSON cita o ano do campo.
