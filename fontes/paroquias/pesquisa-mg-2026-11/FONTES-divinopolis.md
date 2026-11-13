# Diocese de Divinópolis (MG): fontes da pesquisa de 13/11/2026

Sé em Divinópolis, centro-oeste de Minas; sufragânea de Belo Horizonte.
Bispo: Dom Geovane Luís da Silva. Cúria: Rua Mato Grosso, 503, Centro,
Divinópolis, CEP 35500-027, (37) 3229-9300, contato@diocesedivinopolis.org.br.
Padroeira diocesana: Nossa Senhora da Conceição. Site:
https://diocesedivinopolis.org.br/ (WordPress; o tipo `templo` não está na
API, então as páginas foram lidas em HTML; o servidor recusa pedido sem
cabeçalho de navegador comum, com 406).

## Resumo

- **56 unidades** em `saida/divinopolis.json`, em 25 cidades e 7 foranias
  (Divino Espírito Santo 10, Imaculada Conceição 9, Nossa Senhora do Carmo
  8, Nossa Senhora da Piedade 8, São Bento 7, Sant'Ana 7, Santo Antônio 5)
  mais 2 sem forania na página:
  - 1 catedral (Divino Espírito Santo, Divinópolis);
  - 2 santuários com reitor, que a diocese lista entre as paróquias: São
    Frei Galvão (Divinópolis) e Santuário Diocesano de N. S. da Conceição
    (Conceição do Pará);
  - 53 paróquias. Em 7 delas a matriz é santuário e entrou como a primeira
    igreja, de tipo `santuario` (N. S. Aparecida, Santo Antônio, São Judas
    Tadeu e Senhor Bom Jesus em Divinópolis; N. S. da Piedade em Pará de
    Minas; N. S. do Desterro em Marilândia; Senhor Bom Jesus em Pedra do
    Indaiá). Outros dois santuários entraram como igreja da paróquia: N. S.
    Aparecida (São Gonçalo do Pará) e São Geraldo (Floresta, Pará de Minas).
- **56 com horário de missa**: 55 com confiança alta (cada página de
  paróquia traz "Horários de missa", e todas foram atualizadas entre
  setembro de 2025 e outubro de 2026, pela data da própria página) e 1
  média (N. S. da Saúde, Perdigão: a página traz duas tabelas das
  comunidades que não batem entre si; ficaram a matriz e as duas capelas
  em que as tabelas concordam).
- **463 capelas e comunidades**, todas tiradas das tabelas de horário das
  páginas (nome, bairro ou lugar e, quando publicado, endereço), cada uma
  com os seus horários. Missas de "dia 28", "último domingo", "meses
  ímpares" e o que é só celebração da Palavra foram para `nao_cabe` ou
  para a observação do horário.
- Confissão: só aparece como "com agendamento na secretaria" (Catedral, N. S.
  Aparecida e São José Operário de Divinópolis), em `nao_cabe`. Adoração
  com hora fixa entrou como `adoracao` onde a página dá a hora (São
  Cristóvão, Santo Antônio dos Campos, Igaratinga, Leandro Ferreira,
  Araújos, N. S. Aparecida de Cláudio).
- Todo `id_banco` é null.

## Lista das unidades

- https://diocesedivinopolis.org.br/foranias-e-paroquias/ (58 páginas
  `templo`: 56 unidades, a Cúria e o Seminário)
- https://diocesedivinopolis.org.br/missas/ (mesma lista)
- https://diocesedivinopolis.org.br/forania-templo/<forania>/ (as 7
  foranias: divino-espirito-santo, imaculada-conceicao,
  nossa-senhora-da-piedade, nossa-senhora-do-carmo, santana, santo-antonio,
  sao-bento)
- Uma página por unidade, `https://diocesedivinopolis.org.br/templo/<slug>/`,
  com governo pastoral, horários, contato e expediente (endereços no campo
  `fontes` de cada item; a data é a `article:modified_time` da página).

Conferência contra o GCatholic (atualizado em 09/11/2026: 54 paróquias, 74
igrejas): as 54 paróquias batem com as 54 paróquias da diocese. O GCatholic
põe a de N. S. do Desterro em "Itapecerica" (Marilândia é distrito de
Itapecerica) e a de Santo Antônio dos Campos como "Santo Antônio,
Divinópolis". Não registra o Santuário São Frei Galvão e põe o de N. S. da
Conceição (Conceição do Pará) só como santuário, como a diocese (reitoria).
O santuário de São Judas Tadeu em São José da Varginha (GCatholic) não
aparece no site.

Sem forania nas páginas de forania: São Francisco (Pará de Minas) e o
Santuário de N. S. da Conceição (Conceição do Pará).

## Divergências e decisões

- **Cláudio**: a página da Paróquia N. S. Aparecida lista 15 comunidades
  pelo nome do lugar (Frazão, Matias, Bocaina, Sete Lagoas, Ribeirão São
  Vicente, Boa Vista, Cachoeira dos Pios, Jacarandá, Formiguinha, Bananal,
  São Bento...), e várias delas aparecem com capela e horário na página da
  Paróquia N. S. da Conceição. Mantivemos as capelas com horário na
  Conceição e os nomes da Aparecida só em `nao_cabe`. A página da
  Conceição traz também a "Igreja do Rosário" (domingo 18h) e a "Capela de
  N. S. do Rosário, Bairro do Rosário" (1º e 3º domingo 18h), que podem ser
  a mesma igreja; entraram as duas.
- **Perdigão**: duas tabelas divergentes de comunidades (ex.: Engenho na
  2ª sexta ou na 1ª terça; Batista no 2º domingo 9h30 ou no 3º domingo
  10h30). As capelas entraram sem horário, menos Peniche e Perdigão da Roça.
- **São Francisco (Pará de Minas)** e **Santo Antônio (Igaratinga)**: o
  endereço publicado termina em "Divinópolis-MG" e "Igarapé-MG"; a página e
  o GCatholic dão a cidade certa.
- **São Sebastião do Oeste**: "Domingo: 8h e 7h30" na matriz, mantidos os
  dois como publicados.
- **Conceição do Pará**: telefone publicado com 8 dígitos depois do DDD,
  (31) 8445-9765, como WhatsApp; mantido como publicado.
- Igarapé: "Capela de Nossa Senhora do Paraído" e "Beato F. Spoto" (o beato
  Francesco Spoto) como no site.
- WhatsApp com nome de secretário (São João Bosco, Nova Serrana) ficou fora;
  entrou o telefone da secretaria.

## Instagram

Só uma página de paróquia cita perfil: São Judas Tadeu (Divinópolis),
`saojudastadeudivinopolis`. Nenhum foi aberto por dentro.

## Pendências (capelas sem lugar na fonte)

- N. S. do Pilar (Pitangui): Capela de Santa Rita de Cássia (1º e 3º sábado,
  18h), sem bairro.
- São Sebastião (Itatiaiuçu): "Comunidade São Francisco, Capela Santo
  Expedito" (1º e 3º sábado, 19h30), sem lugar.
- Várias capelas urbanas entraram sem bairro porque a página só dá o nome
  (Coração de Jesus de Itaúna, Sagrada Família de Divinópolis, São José
  Operário de Divinópolis, N. S. da Piedade de Pará de Minas e outras): a
  cidade é a da paróquia.

## O que falta para o próximo estado desta pesquisa

- N. S. das Dores (Divinópolis, bairro Nações): endereço e telefone não
  publicados.
- Horários de confissão: nenhuma paróquia publica horário fixo.
- Resolver as duas tabelas de Perdigão e a sobreposição de comunidades
  entre as duas paróquias de Cláudio.
