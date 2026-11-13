# Diocese de Porto Nacional (TO): fontes da pesquisa de 13/11/2026

Sé em Porto Nacional; centro-sul do Tocantins, mais dois municípios de Goiás
(Campos Belos e Monte Alegre de Goiás). Sé vacante: bispo eleito Dom José
Paulino Francisco Neto (nomeado em 08/09/2026, segundo o GCatholic).
Cúria: Rua Dr. Francisco Aires, 306, Centro, Porto Nacional, (63) 3363-1392,
diocese@dioceseportonacional.org.br. Instagram da diocese: diocesedeportonacional.

## Resumo

- **48 unidades pastorais** em `saida/porto-nacional.json`: 1 catedral, 46
  paróquias e 1 santuário diocesano (Senhor do Bonfim, povoado Bonfim,
  Natividade), em 7 foranias (Alvorada, Campos Belos, Gurupi, Natividade,
  Palmeirópolis, Porto Nacional e Taguatinga).
- **6 com horário** (confiança media): Catedral N. S. das Mercês (Porto
  Nacional), N. S. Aparecida, N. S. da Abadia e Santo Antônio (Gurupi),
  N. S. da Conceição (Conceição do Tocantins) e Santana (Silvanópolis).
  Todas com fonte na página da própria paróquia dentro do site da diocese,
  lida em 13/11/2026. As páginas não trazem ano de publicação e algumas
  mostram párocos que a página de foranias (mais nova) já troca, por isso
  media e não alta.
- **42 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. O site da diocese
  publica contatos de todas, menos Novo Alegre e Santa Luzia (Porto
  Nacional), que ficam só com o nome e a cidade.
- Capelas só onde a fonte dá nome e lugar: as 4 da Paróquia N. S. da Abadia
  e a capela N. S. Aparecida (setor Industrial) da Paróquia Santo Antônio,
  as duas em Gurupi. Capela citada sem endereço ficou no `nao_cabe` da
  matriz, com os horários em texto.
- Todo `id_banco` é null: o banco ainda não tem nada do Tocantins.

## Lista das unidades

A lista vem da página "Foranias e Paróquias" do site da diocese (47
paróquias, contando a Paróquia Catedral) mais o Santuário Diocesano do
Senhor do Bonfim, que a mesma página lista na Forania de Natividade e tem
página própria no site.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 49
igrejas): bate por inteiro. As 49 do anuário são as 47 paróquias (45 no
Tocantins e 2 em Goiás), o Santuário do Senhor do Bonfim e a igreja de
Nossa Senhora do Rosário dos Pretos, em Natividade, que é igreja histórica
e não unidade pastoral (ficou fora do JSON). O GCatholic lista a paróquia
de N. S. de Fátima de Luzimangues sob o município de Porto Nacional.

Divergências anotadas:
- Talismã: a página antiga da paróquia diz "Quase Paróquia de São
  Sebastião"; a página de foranias (mais nova) diz paróquia. O JSON segue a
  página de foranias, com a divergência na observação.
- Gurupi, N. S. da Abadia: elevada a santuário diocesano em 22/10/2021
  (Conexão Tocantins); a página de foranias segue chamando de paróquia. O
  JSON mantém a categoria paroquia, com a matriz como "Santuário de Nossa
  Senhora da Abadia" (tipo santuario) e a elevação na observação.
- São Valério: a diocese escreve "São Valério da Natividade", nome antigo
  do município; o JSON usa o nome atual do IBGE.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://dioceseportonacional.org.br/ (menu, contatos da cúria, Instagram)
- https://dioceseportonacional.org.br/foranias-e-paroquias/ (a lista
  oficial por forania, com endereço, telefone e e-mail; os e-mails ficam
  atrás da proteção da Cloudflare e foram decodificados do HTML)
- https://dioceseportonacional.org.br/santuario/ (Santuário do Senhor do
  Bonfim: história, reitor, romaria de agosto)
- https://dioceseportonacional.org.br/fale-conosco/ (cúria)
- https://dioceseportonacional.org.br/categorias/paroquias/ (39 páginas de
  paróquia, uma por unidade; quase todas só com endereço, telefone e nomes)
- Páginas de paróquia com horários:
  - https://dioceseportonacional.org.br/paroquia-de-nossa-senhora-das-merces/ (Catedral)
  - https://dioceseportonacional.org.br/paroqouia-de-nossa-senhora-dabadia-de-gurupi/ (com as capelas)
  - https://dioceseportonacional.org.br/paroquia-de-santo-antonio/ (Gurupi; programação em tabela)
  - https://dioceseportonacional.org.br/paroquia-de-nossa-senhora-aparecida-2/ (Gurupi, Vila Íris)
  - https://dioceseportonacional.org.br/paroquia-de-nossa-senhora-da-conceicao-3/ (Conceição do Tocantins)
  - https://dioceseportonacional.org.br/paroquia-de-santana-4/ (Silvanópolis)

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/pnac0 (anuário, 09/11/2026; baixado
  por curl, o WebFetch não resolve o host nesta sessão)
- https://catholic-hierarchy.org/diocese/dpona.html
- https://en.wikipedia.org/wiki/Diocese_of_Porto_Nacional
- https://conexaoto.com.br/2021/10/23/paroquia-nossa-senhora-da-abadia-e-elevada-a-santuario
  (elevação do Santuário N. S. da Abadia, Gurupi)

## Contatos deixados de fora, de propósito

- Peixe: o e-mail publicado (parocojose@...) parece de uso pessoal do
  pároco; fora, pela regra de contato só institucional.
- Arraias: o e-mail publicado tem o domínio com erro de grafia ("gmai.com");
  fora, para não entregar contato quebrado.
- Palmeirópolis: o e-mail sai cortado no site (a parte visível tem "ç");
  fora.
- Santa Cruz (Luzimangues): o telefone publicado tem dígitos a mais
  ((63) 991212-7929); fora.
- E-mails pessoais de padres que aparecem nas páginas das paróquias
  (hotmail/yahoo com nome do padre) ficaram todos de fora.

## O que falta para o próximo estado desta pesquisa

- Horário das 42 unidades sem fonte. As paróquias desta diocese quase não
  publicam horários na web aberta; a busca não trouxe perfis de Instagram
  de paróquia (nem pelo trecho da busca), só o da diocese. O caminho mais
  provável são os perfis das paróquias no Instagram e no Facebook, que a
  busca não indexa por dentro.
- As 6 programações vêm de páginas sem data no site da diocese, com párocos
  que já mudaram: conferir com a secretaria antes de marcar `conferida_em`.
- Nenhum perfil de Instagram de paróquia entrou (não achado); só o da
  diocese, anotado acima.
- A igreja de Nossa Senhora do Rosário dos Pretos, em Natividade (histórica,
  do século XVIII), ficou fora por não ser unidade pastoral; pode entrar
  depois como igreja da Paróquia N. S. da Natividade se uma fonte ligar as
  duas com clareza.
