# Diocese de Crato (CE): fontes da pesquisa de 13/11/2026

Sé no Crato; Cariri cearense, com Juazeiro do Norte e suas romarias. Bispo:
Dom Magnus Henrique Lopes, OFMCap. Cúria: Rua Dom Quintino, 808, Centro,
Crato, (88) 3521-1110, curia@diocesedecrato.org.

## Resumo

- **63 unidades pastorais** em `saida/crato.json`: 1 catedral, 1 basílica
  (Basílica Santuário de Nossa Senhora das Dores, Juazeiro do Norte),
  2 santuários (Eucarístico Diocesano e Nossa Senhora do Rosário de Fátima,
  os dois no Crato), 2 áreas pastorais (Santa Fé e Caldas) e 57 paróquias,
  em 5 regiões forâneas.
- **32 com horário**: 4 com confiança alta (a página da própria paróquia no
  site da diocese traz os horários: Nossa Senhora Aparecida do Crato, São
  Francisco das Chagas de Juazeiro com a programação completa de missas e
  confissões, Porteiras e Penaforte) e 28 com confiança media, vindas do
  quadro "Horários de Missas" do site da diocese, que não tem data de
  publicação e só cobre as Foranias I a III.
- **31 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. As Foranias IV e V
  inteiras estão sem horário publicado.
- Todo `id_banco` é null: o banco ainda não tem nada do Ceará. Nenhuma
  unidade fora do CE (sem campo `uf`).

## Lista das unidades

A lista vem das cinco páginas de Região Forânea do site da diocese (62
unidades), mais o Santuário de Nossa Senhora do Rosário de Fátima, erigido
canonicamente em 13/12/2025 junto à imagem monumental de Nossa Senhora de
Fátima, no Crato: a notícia da diocese o confirma, mas ele ainda não entrou
nas páginas de forania.

As duas paróquias de São Sebastião criadas em janeiro de 2026 (Dom Quintino,
distrito de Crato, em 21/01; e Mauriti, em 20/01) já aparecem na Forania I e
na Forania III; o quadro de horários ainda traz Dom Quintino como "Área
Pastoral São Sebastião".

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 64
igrejas; a estatística da diocese lá diz 57 paróquias e 3 missões): bate com
as 57 paróquias do JSON. O anuário não traz as duas paróquias de janeiro de
2026 nem as duas áreas pastorais, e traz a mais o Seminário São José, uma
capela militar de São Sebastião em Juazeiro e a "Statue of Our Lady of
Fatima" no Crato, que corresponde ao novo santuário.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedecrato.org/ (contatos da cúria, menu)
- https://diocesedecrato.org/regiao-forania-1/ (Crato; e regiao-foranea-2 a
  regiao-foranea-5: Juazeiro do Norte e Barbalha; Brejo Santo e Mauriti;
  Lavras da Mangabeira e Aurora; Campos Sales e Assaré)
- https://diocesedecrato.org/horarios-de-missas/ (o quadro por forania,
  sem data de publicação; só Foranias I a III, várias linhas vazias)
- Uma página por unidade (62 páginas, endereço, telefone, redes e clero;
  quatro delas com horários: paroquia-nossa-senhora-aparecida-crato,
  paroquia-sao-francisco-das-chagas-juazeiro,
  paroquia-nossa-senhora-da-conceicao de Porteiras e
  paroquia-nossa-senhora-da-saude-penaforte)
- https://diocesedecrato.org/diocese-de-crato-celebra-erecao-canonica-do-santuario-de-nossa-senhora-do-rosario-de-fatima/
  (15/12/2025, o novo santuário)
- https://diocesedecrato.org/criacao-da-paroquia-sao-sebastiao-em-dom-quintino-distrito-de-crato-21-de-janeiro-de-2026/
  e https://diocesedecrato.org/criacao-da-paroquia-sao-sebastiao-em-mauriti-20-de-janeiro-de-2026/
  (galerias das criações; sem texto)
- https://diocesedecrato.org/comunidade-do-dom-leme-em-santana-do-cariri-celebra-a-bencao-e-dedicacao-do-novo-altar-da-capela-de-santo-antonio/
  (28/11/2025; a Capela de Santo Antônio de Dom Leme entrou como capela da
  paróquia de Santana do Cariri, única paróquia do município)

## Instagram e sites

Todos os usuários de Instagram do JSON vieram das próprias páginas da
diocese, não de busca: paroquiadefatimacrato, paroquia_sagrada_familia_crato,
santuarioeucaristicodiocesano, maedasdoresjuazeiro, santuariofranciscanosjn,
pnsajua, areapastoral.bjesus, paroquiasaofranciscobs.

Sites de paróquia citados pela diocese e testados em 13/11/2026:
maedasdoresjuazeiro.com e paroquiasantoantoniobarro.com.br não resolvem mais
(ficaram fora do JSON, anotados na observação); paroquiasaofranciscobs.org
não respondeu (ficou no JSON, com a ressalva na observação).

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/crat1 (anuário, 09/11/2026)
- https://gcatholic.org/churches/brazil/98448 (situa a paróquia do Grangeiro
  em Farias Brito; a diocese dá o lugar só como "Grangeiro")
- https://catholic-hierarchy.org/diocese/dcrat.html (site oficial e cúria)
- Notícia da diocese sobre Palestina ("distrito de Mauriti") e lei estadual
  1154/1985 citada pelo IBGE: Palestina do Cariri é distrito de Mauriti

## Erros visíveis da fonte (anotados, não corrigidos por conta própria)

- Quadro de horários: Nossa Senhora Auxiliadora com "29h" no domingo (foi
  para `nao_cabe` como erro de digitação; só 6h e 10h entraram).
- São Sebastião de Mangabeira com o mesmo telefone da paróquia de Várzea
  Alegre (ficou, com a ressalva na observação).
- Santo Antônio de Araripe com o endereço copiado da paróquia de Assaré
  (ficou de fora, com o porquê na observação).
- "Ruão São Francisco" na página de Nossa Senhora de Lourdes (entrou como
  Rua São Francisco).

## O que falta para o próximo estado desta pesquisa

- Horário das Foranias IV e V (nenhuma unidade tem) e dos dias de semana da
  maioria das demais: o quadro da diocese preenche quase só o domingo e, no
  Crato, segunda e terça. O caminho provável são os perfis das paróquias no
  Instagram, que a busca não indexa por dentro.
- A Capela do Socorro, onde está o túmulo do Padre Cícero, não aparece como
  unidade nem em página de paróquia da diocese; ficou fora do JSON por falta
  de fonte que diga a que paróquia pertence.
- A Capela de Santo Antônio de Missão Nova (1725, a primeira igreja do
  Cariri, notícia da diocese de 31/05/2025) ficou fora: Missão Velha tem duas
  unidades e a fonte não diz a qual o distrito de Missão Nova pertence.
- A capela militar de São Sebastião, em Juazeiro (anuário), ficou fora: não é
  unidade pastoral da diocese.
- Horário do novo Santuário de Nossa Senhora do Rosário de Fátima: a notícia
  fala em missas diárias, sem horas.
