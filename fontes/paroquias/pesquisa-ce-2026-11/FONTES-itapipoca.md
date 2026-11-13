# Diocese de Itapipoca (CE): fontes da pesquisa de 13/11/2026

Sé em Itapipoca; litoral oeste e vales do Curu e do Aracatiaçu (20 municípios
ou distritos, 11.266 km²). Bispo: Dom Rosalvo Cordeiro de Lima (desde
07/10/2020). Cúria: Av. Duque de Caxias, 1125, Itapipoca, (88) 3631-2022.
Padroeira da diocese: Nossa Senhora das Mercês. Criada em 13/03/1971,
desmembrada da Arquidiocese de Fortaleza.

## Resumo

- **37 unidades pastorais** em `saida/itapipoca.json`: 1 catedral, 35
  paróquias e 1 paróquia santuário (N. S. da Penha de França, distrito de
  Santa Cruz, Itapajé).
- **Nenhuma com horário.** O site oficial (diocesedeitapipoca.org.br) está
  FORA DO AR: o domínio não resolve em DNS (conferido em 13/11/2026 por três
  caminhos diferentes), e só sobram páginas antigas no índice do Google. A
  diocese publica no Instagram (@diocesedeitapipoca) e no Facebook, que não
  se leem por dentro, e a busca não mostrou nenhum horário em trecho de bio
  ou de post. Pela regra do dono, todas entram com `horarios: []` e
  confiança baixa, com o porquê na observação.
- **3 com Instagram** confirmado pelo trecho da busca: Catedral
  (`paroquiadasmerces_`, perfil "Catedral de Itapipoca-CE"), Jesus Cristo
  Redentor de Itapipoca (`paroquiajesuscristo`) e N. S. dos Remédios de
  Paracuru (`pascomparacuru`). As demais não apareceram na busca.
- Todo `id_banco` é null: o banco ainda não tem nada do Ceará.

## Lista das unidades

Com o site da diocese fora do ar, a lista veio do **cadastro da Receita
Federal**: a Diocese de Itapipoca é o CNPJ 07.440.969, e cada paróquia é uma
filial com o nome no `nome_fantasia` (lido pela API pública minhareceita.org
em 13/11/2026, filiais 0001 a 0037; a 0038 em diante não existe). São 36
filiais de paróquia, todas ATIVAS, com endereço da matriz, bairro ou
distrito e data de abertura, mais a matriz 0001 (a cúria). A 37ª unidade é a
Paróquia de São José de Missi (Irauçuba), criada em 2026 e ainda sem CNPJ
próprio, confirmada por notícia local.

- Telefones do cadastro da Receita NÃO entraram no JSON: as filiais repetem
  o telefone da cúria (88 3631-2022) ou celulares de quem registrou,
  que podem ser pessoais.
- Paróquias com CNPJ aberto em 2024-2026 (prováveis criações recentes de Dom
  Rosalvo): São João Batista de Brotas (Miraíma, 12/2024), N. S. das Mercês
  de Arapari e São João Batista de Deserto (Itapipoca, 04/2026), Paróquia
  Santuário N. S. da Penha de França (Itapajé, 07/2026), Imaculado Coração
  de Maria de Retiro (Tejuçuoca, 07/2026), São Joaquim e Sant'Ana (Umirim,
  07/2026), N. S. Imaculada Conceição de Poço Doce (Paracuru, 09/2026). A
  data de abertura do CNPJ não é a data canônica; ficou na observação como
  "CNPJ aberto em".

## Conferência contra o anuário

- https://gcatholic.org/churches/local/itap2 (atualizado em 09/11/2026): 26
  igrejas. Bate com o cadastro da Receita no que é comparável; faltam no
  anuário as 11 unidades mais novas (São José do Cruzeiro conta lá, mas não
  Assunção, Arapari, Deserto, Canaã, Alto São Francisco, Almofala, Santa
  Rita de Itapajé, Penha de França, Brotas, Retiro, São Joaquim, Poço Doce e
  Missi) e sobram 3 igrejas que não são sede de paróquia (Sagrado Coração de
  Jesus em Uruburetama, Santo Antônio e São José em Pentecoste).
- Divergências anotadas: o anuário dá "São José" como igreja de PENTECOSTE,
  mas a filial da Receita põe a Paróquia de São José no distrito de Canaã,
  em TRAIRI (o JSON segue a Receita); para a igreja de Icaraí de Amontada o
  anuário traz os dois nomes, "Nossa Senhora dos Navegantes (Parish)" e
  "Paróquia São Francisco de Assis" (o JSON segue a Receita: N. S. dos
  Navegantes).
- https://catholic-hierarchy.org/diocese/ditap.html: 36 paróquias no anuário
  pontifício de 2024 (dado de 2023), o que casa com as 36 filiais.
- https://pt.wikipedia.org/wiki/Diocese_de_Itapipoca (municípios abrangidos;
  artigo curto, sem lista de paróquias).

## Fontes por unidade (lidas em 13/11/2026)

- minhareceita.org (Receita Federal), uma URL por filial, no JSON de cada
  unidade: nome, endereço da matriz, bairro ou distrito, situação ATIVA.
- Instagram, só o trecho que a busca mostra: `paroquiadasmerces_` (Catedral),
  `paroquiajesuscristo` (bio cita Pe. Danisio como pároco),
  `pascomparacuru` (bio diz paróquia criada em 14/02/1954), e o perfil da
  diocese `diocesedeitapipoca`.
- Santa Rita de Cássia (Itapajé): criada em 10/01/2022, desmembrada da São
  Francisco de Assis
  (https://noticias.fmatitude.com.br/noticia/11371/bispo-dom-rosalvo-confirmacao-implantacao-da-paroquia-de-santa-rita-de-cassia-em-itapaje).
- São José de Missi (Irauçuba): criação noticiada em agosto de 2026, com
  missa de instalação em 19/09/2026 e Pe. Alisson Silva como primeiro pároco
  (https://www.adrianofurtado.com.br/2026/08/diocese-de-itapipoca-cria-nova-paroquia.html;
  o site estava inacessível na leitura, ficou o trecho da busca).
- Paróquia Santuário N. S. da Penha de França (Santa Cruz, Itapajé):
  festejos de 22/12 a 01/01, citados no PL 496/26 da Assembleia Legislativa
  do Ceará (https://www2.al.ce.gov.br/legislativo/tramit2026/pl496_26.pdf).
- Santa Rita de Cássia (Paraipaba): blog paroquial antigo, sem data recente
  (https://jornalparoquialdeparaipaba.blogspot.com/): inaugurada em
  13/05/1979; só avisos de eventos, nenhuma grade fixa de horários.

## O que falta para o próximo estado desta pesquisa

- Horário das 37 unidades: o caminho mais provável é o Instagram da diocese
  e das paróquias (a busca não os indexa por dentro) ou contato com as
  secretarias; o site da diocese, se voltar ao ar, resolve de uma vez.
- Telefone, WhatsApp e e-mail institucionais de todas as unidades.
- Instagram das outras 34 unidades.
- Capelas e comunidades de cada paróquia: nenhuma fonte as lista com nome e
  lugar.
- Confirmar a data canônica das paróquias com CNPJ de 2024-2026 e o
  vínculo da Igreja do Sagrado Coração de Jesus (Uruburetama) e das igrejas
  Santo Antônio e São José (Pentecoste), que o anuário traz sem paróquia.
