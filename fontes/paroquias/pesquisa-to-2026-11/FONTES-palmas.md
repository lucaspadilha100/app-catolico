# Arquidiocese de Palmas (TO): fontes da pesquisa de 13/11/2026

Sé em Palmas; capital e região do Jalapão (11 municípios). Arcebispo: Dom
Pedro Brito Guimarães. Cúria: 504 Sul, Alameda 04, Lote 62, CEP 77021-690,
Palmas, (63) 3218-8400 e 3218-8401, curiapalmas@gmail.com. Instagram da
arquidiocese: arquidiocese.palmas. Site: arquidiocesedepalmas.org.br.

## Resumo

- **39 unidades pastorais** em `saida/palmas.json`: 1 catedral, 34 paróquias,
  2 santuários (N. S. de Fátima e Mãe Rainha, os dois também paróquias),
  1 área missionária (Santa Dulce dos Pobres) e 1 área pastoral missionária
  (São José de Anchieta), em 3 regiões pastorais (São Pedro e São João em
  Palmas, São Paulo no interior). 28 unidades em Palmas, 11 no interior.
- **35 com horário** (32 de confiança alta, 3 de média), todas com fonte no
  site da arquidiocese (página da paróquia ou a página "Horários de Missas"),
  no site próprio da paróquia (catedral, São João Batista, Matriz Aparecida,
  Mãe Rainha, Coração de Maria) ou no Instagram/Facebook da paróquia (Monte
  do Carmo), lidas em 13/11/2026.
- **4 sem horário** (Cristo Rei, N. S. do Rosário de Taquaruçu, N. S. das
  Graças de Novo Acordo e São Sebastião de Tocantínia): a regra do dono manda
  entrar mesmo assim, com `horarios: []` e o porquê na observação. Para
  Cristo Rei e Tocantínia o site da arquidiocese só traz as celebrações das
  comunidades, que ficaram em `nao_cabe`.
- Todo `id_banco` é null: o banco ainda não tem nada do Tocantins.

## Lista das unidades

O miolo da lista veio de duas divulgações da própria arquidiocese: a página
"Horários de Missas" e as páginas de paróquia do site (uma por unidade), mais
o aviso de Quarta-feira de Cinzas de 28/02/2025 (relayado pelo Conexão
Tocantins), que enumera as paróquias pelas 3 regiões pastorais e confirmou
três unidades que faltam no anuário: a Área Pastoral Santa Dulce (o site da
arquidiocese a chama "Área Missionária Santa Dulce dos Pobres"), a Paróquia
Sagrado Coração de Jesus (Setor Santa Fé) e a Área Pastoral Missionária São
José de Anchieta (Jardim Santa Helena).

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 39
igrejas): batem as 36 unidades que ele traz (35 paróquias + 1 missão; as
outras 3 igrejas são o mosteiro das Clarissas, o seminário interdiocesano e o
Centro de Evangelização Casa de Maria, que não são unidades pastorais e
ficaram fora do JSON). O anuário não traz as 3 unidades mais novas acima.
Catholic-Hierarchy registra 36 paróquias desde 2016. A lei municipal
3.114/2024 de Palmas (calendário dos festejos católicos) lista as paróquias
da capital e confirmou Sagrado Coração de Jesus, os bairros dos Aurenys e o
Taquari (o PDF não abre no ambiente, certificado quebrado; o conteúdo veio
pelos trechos da busca).

Nomes que o anuário traz diferente: "Santo Antônio" é a Paróquia Santo
Antônio de Lisboa (Aureny III) e "Santa Teresa" é a Paróquia Santa Teresa
d'Ávila (Santa Tereza do Tocantins), como o site da arquidiocese as chama.

## Páginas lidas (13/11/2026)

⚠️ O site da arquidiocese não respondeu direto deste ambiente (as páginas
dinâmicas estouram o tempo; só os arquivos de `wp-content` abrem). Todo o
conteúdo das páginas abaixo veio pelos resumos da busca em modo estendido,
que leu as páginas; a página da paróquia do Imaculado Coração de Maria
constava como atualizada há menos de um mês, a da catedral idem, e as demais
entre 11 e 31 meses.

- https://arquidiocesedepalmas.org.br/horarios-de-missas/ (a grade por paróquia)
- https://arquidiocesedepalmas.org.br/paroquias/<paroquia>/ (uma página por
  unidade; as URLs exatas estão nas fontes de cada item do JSON)
- Sites das próprias paróquias: catedraldepalmas.com.br,
  santuariodefatimapalmas.com.br, santuariomaerainha.com.br,
  cordemaria.com.br, matrizaparecida.com.br, psjb.palmas.br
- https://conexaoto.com.br/2025/02/28/arquidiocese-de-palmas-divulga-horarios-das-missas-da-quarta-feira-de-cinzas
  (a lista oficial pelas 3 regiões pastorais; horários daquele dia, não usados
  como grade)

## Instagram e Facebook (só o que a busca mostrou, em 13/11/2026)

Perfis não se leem por dentro (bloqueio de robôs); esta busca quase não
indexa o Instagram, então a colheita de perfis ficou curta.

- arquidiocese.palmas (arquidiocese, citado pelo Conexão Tocantins em 2020)
- santuariodefatimapalmas (Santuário N. S. de Fátima)
- paroquiamontedocarmo (N. S. do Monte do Carmo; a grade de missas bate com o
  site da arquidiocese, com sábado 8h a mais)
- Facebook: maerainhapalmas, psfilomena, pstmjpalmas, pascompps (Perpétuo
  Socorro de Aureny IV), taquarucuparoquia, paroquiabomjesusdaserra,
  ParoquiaNossaSenhoraDoMonteDoCarmo

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/palm0 (anuário, 09/11/2026; baixado e
  lido na íntegra, com as 39 páginas de igreja)
- https://catholic-hierarchy.org/diocese/dplms.html (estatísticas, cúria)
- https://legislativo.palmas.to.gov.br/media/leis/lei-ordinaria-3.114-2024-12-04-5-12-2024-14-51-4.pdf
  (lista municipal das paróquias de Palmas, pelos trechos da busca)
- Plano Estratégico Evangelizador 2026-2029 (PDF no site da arquidiocese;
  confirma a estrutura "Paróquias, Áreas Pastorais e Missão Indígena", sem
  lista)

## O que falta para o próximo estado desta pesquisa

- Horário das 4 unidades sem grade (Cristo Rei, Taquaruçu, Novo Acordo,
  Tocantínia) e o domingo de Jesus de Nazaré: o caminho é o site da
  arquidiocese aberto de um ambiente que ele não bloqueie, ou os perfis das
  paróquias no Instagram.
- Em Santa Filomena o Facebook da paróquia diverge do site da arquidiocese
  nos dias de semana (7h contra 19h); ficou a grade do site, com a
  divergência anotada.
- Telefone da catedral: o site próprio só traz o WhatsApp (63) 98467-6166; o
  anuário traz (63) 3213-2119, não usado por parecer antigo.
- As comunidades e capelas citadas sem lugar (São Miguel Arcanjo, Santa
  Luzia, Madre Rossello, Santíssima Trindade, Santa Júlia, N. S. de
  Guadalupe, N. S. do Desterro e outras) ficaram em `nao_cabe` da matriz; só
  viraram igreja as que a fonte situa (capela Maria de Nazaré em Aureny IV,
  Mutúm e Lajeadinho em Lajeado, Terra Dura, Três Pedras e Mansinha em Rio
  Sono).
- O Centro de Evangelização Casa de Maria, Rainha da Paz (missas diárias,
  muito procurado; página própria no site da arquidiocese) não é paróquia e
  ficou fora do JSON.
