# Arquidiocese de Sorocaba (SP): fontes da pesquisa de 13/11/2026

Sé metropolitana em Sorocaba. Arcebispo: Dom José Roberto Fortes Palau
(desde 08/01/2026, GCatholic). Cúria: Av. Dr. Eugênio Salerno, 140, Centro,
Sorocaba, (15) 3221-6880 (opção 2), curia@arquidiocesesorocaba.org.br.
Sufragâneas (GCatholic): Itapetininga, Itapeva, Jundiaí e Registro.

## Resumo

- **58 unidades pastorais** em `saida/sorocaba.json`: 1 catedral (Nossa
  Senhora da Ponte), 1 basílica (Nossa Senhora da Piedade, Piedade) e 56
  paróquias. Doze municípios, os mesmos do filtro "por cidade" da página de
  paróquias da arquidiocese: Sorocaba (36), Votorantim (6), Porto Feliz (3),
  Tietê, Piedade, Cerquilho e Boituva (2 cada), Araçoiaba da Serra, Tapiraí,
  Iperó, Salto de Pirapora e Jumirim (1 cada).
- O porte é menor que o esperado (~100): a arquidiocese tem 58 paróquias,
  número que bate com a estatística do GCatholic ("58 parishes").
- **56 com horário de missa**: 50 com confiança alta, 6 média
  (Fátima de Vila Melges, Medianeira, Rosa Mística, Santíssima Trindade de
  Tietê, Santuário de Aparecidinha, Jumirim). **2 sem horário**, com
  `"horarios": []` e confiança baixa: São Guilherme (a página não publica
  horário) e São João Batista e Imaculada Conceição de Votorantim (a página
  lista como "missa" horários tirados de um texto que mistura confissão,
  grupos e farmácia, sem missa de domingo; o texto bruto ficou no
  `nao_cabe`).
- **25 unidades com horário de confissão** (82 linhas), tirados do campo
  "Horário de confissão" da própria página da paróquia. O que não cabe
  (agendamento, "depois das missas", 1ª e 2ª terça do mês...) ficou no
  `nao_cabe` da matriz. Adoração: nenhuma página traz horário fixo.
- 3 paróquias têm a matriz santuário (São Judas Tadeu, São Geraldo Majella e
  Nossa Senhora da Conceição Aparecida, a "Aparecidinha"); entraram como
  `paroquia` com a primeira igreja de tipo `santuario`, como em Taubaté.
- **78 igrejas além das matrizes**, só as que a fonte dá com nome e lugar
  (endereço ou bairro). Quando a comunidade tem horário mas a página dela só
  traz a cidade, o horário ficou no `nao_cabe` da matriz, com o nome da
  comunidade.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## A fonte: o diretório de paróquias da arquidiocese

O site (WordPress com o plugin de cadastro da Parresia) tem uma página por
paróquia com telefone, endereço, e-mail, redes, expediente, horário de
confissão, clero, a tabela "Horários de Missas" e a lista de comunidades. Os
horários vêm estruturados no atributo `data-item` de cada linha (dias da
semana, semana do mês, hora, observação), e foram lidos daí.

- https://arquidiocesesorocaba.org.br/paroquias/ (a lista, 2 páginas, com o
  filtro por cidade)
- https://arquidiocesesorocaba.org.br/paroquias-sitemap1.xml (59 páginas:
  as 58 unidades e o Mosteiro de São Bento)
- Uma página por paróquia, `https://arquidiocesesorocaba.org.br/paroquias/<nome>/`;
  as URLs estão no campo `fontes` de cada item do JSON.
- 327 páginas de comunidade, `https://arquidiocesesorocaba.org.br/comunidade/<nome>`,
  ligadas a partir das páginas de paróquia (endereço e horários da
  comunidade). O mapa `locais-sitemap1.xml` aponta para endereços antigos
  que dão "página não encontrada".

Contatos: telefone, WhatsApp, Instagram, site e e-mail são os que a página da
paróquia publica (secretaria). Nenhum contato pessoal de padre entrou: o
e-mail do Mosteiro de São Bento, com nome de pessoa, ficou fora. Um e-mail
com vírgula no lugar do ponto foi corrigido (`salesianosorocaba.com.br`).

## Decisões caso a caso

- **Mosteiro de São Bento** (Largo de São Bento, 62, Centro): está no
  diretório de paróquias, mas não é paróquia (o clero é vigário e capelão; o
  GCatholic não o lista). Entrou como comunidade da Catedral, que fica no
  mesmo Centro, com as missas de segunda a sexta às 7h.
- **Santuários que o GCatholic lista e a arquidiocese trata como
  comunidade**: Santa Filomena (Sorocaba) é comunidade da Paróquia São José
  Operário e entrou como igreja de tipo `santuario`; Nossa Senhora dos
  Remédios (Salto de Pirapora) é comunidade da Paróquia São João Batista,
  sem endereço na fonte, citada na observação.
- **Duplicatas da fonte**: parte dos horários foi importada de outro
  cadastro ("Título na origem"). Linhas iguais foram juntadas (Catedral). Na
  Santíssima Trindade de Tietê ficaram horários vizinhos que podem ser do
  mesmo culto (domingo 19h e 19h30, quinta 7h e 8h): confiança média.
- **Fátima de Vila Melges**: a fonte põe tudo como "Igreja Matriz" e anota
  na descrição as comunidades (São Pedro, São Francisco das Chagas,
  Guadalupe, Mãe dos Homens) sem casar horário com lugar. Na matriz ficaram
  só os dois de domingo anotados "Matriz"; o resto foi para o `nao_cabe`.
- **Santa Rita de Cássia**: a missa ao meio-dia de quarta a sábado parece ser
  a votiva do dia 22 cadastrada como semanal; ficou fora, e o dia 22 foi
  para o `nao_cabe`.
- **Nossa Senhora da Piedade (Sorocaba)**: as missas de quarta são no Centro
  Social (Rua Genésio Maria, 326, Jd. Boa Esperança), anotado no `nao_cabe`.
- "1ª sexta-feira, sábado do mês" (Jumirim, São João Batista de Porto Feliz,
  Piedade de Sorocaba) e "última segunda do mês" (São Bento) não cabem no
  formato: ficaram em texto.
- Tietê, Santíssima Trindade: os endereços das 13 capelas vêm da descrição
  dos próprios horários; a missa da 4ª sexta das 15h é na Capela da Santa
  Casa (R. Tenente Gelás, 1035).
- Medianeira: a missa da semana aparece às 6h30, mas o texto de confissão
  fala em "missa das 7h"; seguimos a tabela e anotamos.
- Boituva, São Francisco de Assis: o endereço publicado é o da secretaria.

## Conferência da lista (não usada para horário)

- https://gcatholic.org/dioceses/diocese/soro0.htm (estatística: 58
  paróquias, 4.053 km², atualizado em 09/11/2026)
- https://gcatholic.org/churches/local/soro0 (55 igrejas)

Batida: as 55 igrejas do GCatholic são 53 das nossas unidades mais os
santuários de Santa Filomena e de Nossa Senhora dos Remédios (comunidades,
ver acima). Faltam no GCatholic, mas estão no diretório da arquidiocese:
São Guilherme e Nossa Senhora da Piedade (Sorocaba), uma das duas Nossa
Senhora Aparecida de Sorocaba (Jd. Prestes de Barros, criada em 2016, e
Vila Angélica), Nossa Senhora da Anunciação e dos Arcanjos (Votorantim,
criada em 2015) e Senhor Bom Jesus e São Roque (Jumirim). O GCatholic não
marca como paróquia São Francisco de Assis (Boituva), Nossa Senhora da
Conceição Aparecida (Porto Feliz) e o Santuário São Geraldo Majella; a
arquidiocese os trata como paróquias, e seguimos a arquidiocese.

## Instagram (anotado das páginas da arquidiocese)

Nenhum perfil foi aberto por dentro. catedralsorocaba, bomjesus1926,
paroquiacristoreisorocaba, paroquiadivinosorocaba, anunciacaoarcanjos,
paroquiaaparecidacajurudosul, nsaaparecidasorocaba, aparecidinha.tiete,
paroquiaaparecidasorocaba, nsaparecidavotorantim,
auxiliadorasorocaba.oficial, paroquia.consolata.votorantim,
basilica.nspiedade, paroquiafatimacampolim, nossasenhoradefatimasorocaba,
pnsmedianeira, paroquiasagradocdejesuspiedade, sg.majella,
psaobento.sorocaba, saocarlosborromeusorocaba, pascomsaltodepirapora,
paroquiasaojosedocerrado, spauloapostolosorocaba.

## O que falta para o próximo estado desta pesquisa

- Horário de São Guilherme e de São João Batista e Imaculada Conceição
  (Votorantim); missa de domingo de Jumirim; horários de semana do
  Santuário de Aparecidinha (a página só traz a 1ª sexta).
- Endereço das comunidades cuja página só dá a cidade (a maioria das de
  Tietê N. S. Aparecida, Porto Feliz, Piedade, Araçoiaba da Serra,
  Votorantim e Cajuru do Sul), inclusive as que têm horário.
- Os sites próprios das paróquias (São Judas Tadeu, São Geraldo, Santa Rita,
  Santa Rosália, São José Operário, São Paulo Apóstolo, Vila Assis, Fátima
  do Campolim, São Carlos Borromeu, São João Batista de Salto de Pirapora)
  não foram lidos; servem para reconferir os casos de confiança média.
