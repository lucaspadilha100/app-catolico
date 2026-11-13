# Diocese de Itapeva (SP): fontes da pesquisa de 13/11/2026

Sé em Itapeva; sudoeste paulista, na divisa com o Paraná (Alto Paranapanema
e Vale do Ribeira paulista). Bispo: Dom Eduardo Malaspina (desde
28/12/2022, GCatholic). Cúria: Rua Coronel Crescêncio, 311, Centro, Itapeva,
CEP 18400-140. Padroeira: Sant'Ana (26 de julho). Diocese criada em
02/03/1968.

## Resumo

- **37 unidades pastorais** em `saida/itapeva.json`: 1 catedral (Sant'Ana),
  1 santuário (N. S. D'Ajuda, Guapiara), 3 áreas pastorais (distritos de
  Itapeva: Alto da Brancal, Areia Branca, Guarizinho) e 32 paróquias, em 5
  foranias (Centro 12, Leste 8, Sul 7, Oeste 6, Norte 4). Cidades: Itapeva
  (9), Capão Bonito (4), Apiaí, Guapiara, Itararé e Ribeirão Branco (2 cada)
  e uma em cada: Barão de Antonina, Barra do Chapéu, Bom Sucesso de Itararé,
  Buri, Coronel Macedo, Itaberá, Itaí, Itaóca, Itapirapuã Paulista,
  Itaporanga, Nova Campina, Ribeira, Ribeirão Grande, Riversul, Taquarituba,
  Taquarivaí. Todas em São Paulo: nenhuma precisou do campo `uf`.
- **13 com horário de missa** (4 com confiança alta, 9 média) e **24 sem
  horário** (confiança baixa, `horarios: []`, o porquê na observação). A
  tabela da diocese existe para todas, mas em 24 as linhas estão vazias.
- **Confissões**: 12 unidades com horário de missa têm também o de
  confissão em `horarios` (da página de cada paróquia). Nas 24 sem missa o
  horário de confissão ficou no `nao_cabe` da matriz, para não quebrar a
  regra do `horarios: []`.
- Alta = tabela editada em 2026 (Piedade, Divino Espírito Santo de Itararé,
  Lageado, Itaóca); média = tabela editada pela última vez em 2025 (a data
  vai na observação e em `fontes`).
- Sem comunidades: nem o site nem outra fonte oficial lista as capelas.
- Instagram: nenhum. As páginas de paróquia só têm o botão do perfil da
  própria diocese; WhatsApp também não é publicado.
- Todo `id_banco` é null.

## A fonte: o site da diocese (lido em 13/11/2026)

- https://dioceseitapeva.com.br/ (WordPress do sistema Parresia). O domínio
  citado pelo GCatholic com www (www.dioceseitapeva.com.br) não resolve; o
  sem www funciona. diocesedeitapeva.org.br não existe.
- https://dioceseitapeva.com.br/wp-json/wp/v2/paroquia?per_page=100: tipo
  próprio `paroquia`, 37 itens (a lista oficial), com a forania e a cidade
  na taxonomia `local_paroquia` e a data da última edição de cada uma.
- Uma página por unidade, `https://dioceseitapeva.com.br/paroquia/<slug>/`:
  telefone, e-mail (Cloudflare, decodificado), endereço, expediente da
  secretaria, confissões e clero. Não traz missa.
- https://dioceseitapeva.com.br/horarios-de-missas/: a tabela de missas de
  cada paróquia (Tipo, Dia, Horário, Observações), vinda de um campo ACF de
  cada item. 24 tabelas vêm com as linhas em branco; o campo `acf` da API
  vem vazio, então não há outro caminho para esses dados.

Leitura da tabela: "10h e às 18h" vira duas linhas; "1ª Sexta do mês" (no
dia ou na observação) vira `semanas: [1]`; "Todo dia 12 do mês" foi para o
`nao_cabe`; "Celebração da Palavra" (domingo 9h e 19h, N. S. da Conceição de
Capão Bonito) não é missa e foi para o `nao_cabe` (por isso essa paróquia
ficou sem missa de domingo).

Confissões textuais ambíguas ficaram como estão escritas, no `nao_cabe`:
Barra do Chapéu ("Terça a e quinta-feira"), Itapirapuã Paulista ("Quarta
Sexta-feira") e Apiaí ("com horário marcado"). Ribeirão Grande publica como
confissão o mesmo horário da secretaria (anotado).

## Casos especiais

- **N. S. da Conceição (Itararé)**: a página está com texto de modelo
  (lorem ipsum), sem endereço nem contato. Entrou só com nome e cidade.
- **Áreas pastorais Alto da Brancal e Areia Branca**: páginas só com o
  nome. A primeira igreja de cada área é a sede (sem matriz própria na
  fonte), dito na observação.
- **Imaculada Conceição (Distrito do Lageado, Apiaí)**: criada em 2025; o
  GCatholic ainda não a lista. Endereço: Lageado de Araçaíba.
- **Santuário N. S. D'Ajuda (Bairro Capela do Alto, Guapiara)**: tem reitor
  e a diocese o lista entre as paróquias; entrou como `santuario`.
- **São Cristóvão (Capão Bonito)**: sem telefone; o e-mail publicado é o da
  pastoral da comunicação.
- Telefones como publicados: "+55 15 99635-1272" (Lageado) e
  "(14) 99680.1765" (Itaí) viraram só dígitos, sem mudar o número.
- Catedral, São Roque de Itapeva e N. S. da Conceição de Capão Bonito têm a
  secretaria em outro endereço (na observação).

## Conferência da lista com o GCatholic

https://gcatholic.org/dioceses/diocese/itap1.htm e
https://gcatholic.org/churches/local/itap1 (atualizado em 09/11/2026: "28
parishes", 25 igrejas listadas). As 25 batem com o site. O site tem 12 a
mais: as 3 áreas pastorais, o Santuário N. S. D'Ajuda, Lageado (2025),
Itaboa (São João Paulo II, 2023), Divino Espírito Santo (Itararé), São
Cristóvão, N. S. Aparecida e N. S. da Conceição (Capão Bonito), Santo
Antônio e São Camilo (Itapeva). Nomes que divergem: o GCatholic chama
"Nossa Senhora da Conceição Aparecida" as paróquias de Coronel Macedo e Nova
Campina (o site: "Nossa Senhora Aparecida"); seguimos o site.

Capão Bonito, Guapiara e Ribeirão Grande são desta diocese (no GCatholic e
no site), não da de Itapetininga. Nenhuma cidade da diocese aparece nos
outros arquivos de `saida/`.

A busca na web (paróquias de Buri, Itararé, Capão Bonito, Itaí) não achou
página de paróquia com horário; só catálogos de terceiros, que não entram.

## O que falta para o próximo estado desta pesquisa

- Horários de missa das 24 paróquias com a tabela vazia: pedir à diocese
  (ou à Pascom) que preencha a tabela do site.
- Capelas e comunidades: nenhuma lista pública. Um anuário da diocese
  resolveria (o de Itapetininga trouxe as comunidades com bairro).
- Contato e endereço de N. S. da Conceição (Itararé) e das áreas pastorais
  de Alto da Brancal e Areia Branca.
