# Diocese de Jaboticabal (SP): fontes da pesquisa de 13/11/2026

Sé em Jaboticabal; norte do estado, entre Ribeirão Preto, Barretos e
Catanduva. Bispo: Dom Eduardo Pinheiro da Silva, SDB. Cúria: Rua José
Bonifácio, 432, Bairro Aparecida, Jaboticabal, CEP 14882-035, (16) 3202-0390
e 3202-6611, recepcao@diocesejaboticabal.org.br. Padroeira diocesana: Nossa
Senhora do Carmo (16 de julho).

## Resumo

- **45 unidades pastorais** em `saida/jaboticabal.json`: 1 catedral, 1
  basílica (Senhor Bom Jesus, Monte Alto) e 43 paróquias, em 5 foranias
  (Nossa Senhora do Carmo, São Sebastião, Senhor Bom Jesus, São João Batista
  e Nossa Senhora Aparecida). Municípios: Bebedouro (8, com Botafogo),
  Jaboticabal (7), Taquaritinga (5, com Guariroba), Monte Alto (5, com
  Aparecida de Monte Alto), Pitangueiras (3, com Ibitiúva), Barrinha (2),
  Guariba (2) e uma em cada: Dobrada, Pradópolis, Santa Ernestina, Pirangi,
  Cândido Rodrigues, Fernando Prestes, Taiaçu, Taiúva, Vista Alegre do Alto,
  Monte Azul Paulista, Taquaral, Terra Roxa e Viradouro.
- **45 com horário de missa** (42 com confiança alta, 3 média), 360 linhas
  de horário e 153 capelas e comunidades. O site da diocese mantém, para cada
  paróquia, os horários da matriz e de cada comunidade, endereço, telefone e
  WhatsApp. Confiança média nas três páginas paradas desde 2024: Santuário N.
  S. da Conceição Aparecida (26/12/2024), São Judas Tadeu de Jaboticabal
  (09/08/2024) e Santo Antônio de Pádua de Taiúva (12/11/2024). As demais
  foram atualizadas entre agosto de 2025 e outubro de 2026.
- 3 paróquias têm a matriz santuário (N. S. da Conceição Aparecida em
  Jaboticabal, N. S. do Rosário de Fátima em Monte Alto e N. S. da Conceição
  Montesina em Aparecida de Monte Alto); entraram como `paroquia` com a
  primeira igreja de tipo `santuario`. A Basílica Menor Senhor Bom Jesus
  entrou como `basilica`.
- Distritos: a diocese trata como cidade quatro distritos. Seguimos o
  molde das outras dioceses (cidade = município, distrito na `localidade`):
  Botafogo (Bebedouro), Guariroba (Taquaritinga), Ibitiúva (Pitangueiras) e
  Aparecida de Monte Alto (Monte Alto). Taquaral é município.
- Horários de confissão só na Santa Teresa de Jesus (Jaboticabal). Adoração
  só a Hora Santa da 1ª quinta-feira no Sagrado Coração de Bebedouro.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.
- Nenhum município desta diocese aparece nas pesquisas anteriores de SP, e
  nenhuma fonte desta diocese reclama município já pesquisado.

## Lista das unidades

A lista vem da página "Horários de Missas" do site da diocese, que tem busca
por forania, cidade e paróquia. A busca por cidade devolve JSON
(`/busca-cidade?city=...`), com todos os campos de cada paróquia; as 24
"cidades" da lista deram 45 paróquias distintas (a Montesina aparece em
Monte Alto e em Aparecida de Monte Alto). A busca por forania
(`/busca-cidades-por-forania`) deu a divisão em 5 foranias.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 45 igrejas,
estatística de 2022 com 43 paróquias): bate nas 43 paróquias, com estas
diferenças:

- Duas paróquias da diocese que o GCatholic não lista, ambas recentes:
  **N. S. da Conceição Aparecida de Barrinha** (Jardim Horizonte) e
  **N. S. Aparecida de Pitangueiras** (Centro).
- O GCatholic lista em Bebedouro as igrejas Santa Terezinha e Santo Antônio
  sem marca de paróquia: são as comunidades Santa Terezinha do Menino Jesus
  (Paróquia São João Batista) e Santo Antônio (Paróquia N. S. Aparecida).
- Nomes: o GCatholic chama de "Nossa Senhora da Conceição Aparecida" as
  paróquias de Terra Roxa e Viradouro. A diocese chama a de Terra Roxa de
  N. S. Aparecida e a de Viradouro de N. S. da Conceição Aparecida (o
  comunicado de transferências de 03/11/2026 escreve "Nossa Senhora
  Aparecida de Viradouro"). Seguimos a página de horários.
- O GCatholic escreve "Monte Alo" para a Basílica; é Monte Alto.

Matrizes com nome diferente do da paróquia, conforme a fonte: N. S. da
Conceição Aparecida de Barrinha (Igreja Matriz Nossa Senhora Aparecida).

## Páginas do site da diocese (lidas em 13/11/2026)

- https://www2.diocesejaboticabal.org.br/horarios-de-missas (a lista, com as
  buscas por forania, cidade e paróquia)
- https://www2.diocesejaboticabal.org.br/busca-cidade?city=Jaboticabal (e as
  demais cidades: o JSON de cada paróquia, com `updated_at`)
- Uma página por paróquia, `https://www2.diocesejaboticabal.org.br/paroquia/<slug>`,
  com os mesmos horários, endereço, telefone, WhatsApp, link do Facebook e um
  histórico. As URLs estão no campo `fontes` de cada item do JSON. Exemplos:
  - https://www2.diocesejaboticabal.org.br/paroquia/se-catedral
  - https://www2.diocesejaboticabal.org.br/paroquia/basilica-senhor-bom-jesus
  - https://www2.diocesejaboticabal.org.br/paroquia/santa-teresa (a única com
    confissões)
  - https://www2.diocesejaboticabal.org.br/paroquia/santuario-nossa-senhora-de-fatima
    (16 comunidades com horário)
- https://www2.diocesejaboticabal.org.br/contato e
  https://www2.diocesejaboticabal.org.br/governo-e-curia (cúria e foranias)
- https://www2.diocesejaboticabal.org.br/transferencias-presbiteros-11-2026.pdf
  (transferências que valem a partir de janeiro de 2027; não muda horário)

## Contatos

- Telefone e WhatsApp são os que a diocese publica para cada paróquia. Onde
  o WhatsApp é um número fixo, ele foi mantido assim (a diocese o dá como
  WhatsApp). Quatro paróquias têm um celular como telefone da secretaria na
  própria página da diocese (Dobrada, Santo Inácio de Bebedouro, Pirangi e
  N. S. Aparecida de Pitangueiras); entrou por ser o número institucional
  publicado, e a observação do item diz isso.
- Pradópolis: o telefone publicado está incompleto, "(16) 3981-150", e ficou
  de fora.
- Taquaritinga, São Sebastião: a página dá "(16) 3252-2331 e 3252-3516
  (WhatsApp)"; o primeiro foi para `telefone`, o segundo para `whatsapp`.
- Nenhuma página traz e-mail de paróquia.
- Instagram só onde o site da diocese o dá: paroquiansca.barrinha e
  psjtadeu_jaboticabal. As demais paróquias têm só Facebook no site
  (não usado no JSON). Nenhum perfil foi aberto por dentro.

## Decisões de transcrição

- "1ª sexta-feira do mês" vira `semanas: [1]`; "2ª e 4ª quinta", `[2, 4]`.
  "Última sexta/quarta/quinta/sábado do mês" e "todo dia N" ficaram no
  `nao_cabe`.
- Missas em casas, setores, CEBs, asilos, Santa Casa, hospitais, Lar do
  Idoso, Vila Vicentina sem nome de capela, Fazenda Santa Irene, Recanto e
  Comunidade Terapêutica ficaram no `nao_cabe` da matriz: são missas em casas ou em instituições,
  não em igreja de comunidade (capela com nome e lugar entrou como capela).
- Comunidades e capelas com nome entraram como igrejas com os horários da
  página. O lugar entre parênteses na fonte foi para a `localidade`
  (Córrego Rico, Lusitânia, Jurupema, Itagaçaba, Marcondésia, Turvínia,
  Ibitirama, Icoarana, Distrito de Agulha, Morrinho e outros). Muitas
  comunidades não têm bairro na fonte e ficaram com `localidade` vazia, na
  cidade da paróquia.
- Santuário N. S. da Conceição Aparecida (Jaboticabal): a missa diária das
  19h é no santuário no sábado e no domingo e na Capela do Milagre de
  segunda a sexta; entrou no santuário com a observação "Na Capela do
  Milagre".
- Basílica de Monte Alto: a página lista duas vezes "Comunidade São
  Cristóvão" (sábado 19h e domingo 8h); entrou uma só, com os dois
  horários e o aviso no `nao_cabe`.
- Vista Alegre do Alto: "Sexta-feira: 7h (1ª Sexta-feira do mês: 19h)" virou
  7h nas semanas 2 a 5 e 19h na semana 1.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/jabo0.htm e
  https://gcatholic.org/churches/local/jabo0 (anuário, 09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Confissões e adoração fora da Santa Teresa de Jesus e do Sagrado Coração
  de Bebedouro: as páginas da diocese não trazem.
- Bairro das comunidades sem lugar na fonte (a maioria em Jaboticabal,
  Bebedouro, Guariba, Taquaritinga e Monte Alto).
- Reconferir as três páginas paradas desde 2024 (Santuário Aparecida e São
  Judas Tadeu de Jaboticabal, Taiúva) com a paróquia ou com o Instagram.
- Horas que a fonte não dá: missa do padroeiro todo dia 2 em Dobrada, missa
  de São Miguel todo dia 29 na N. S. Aparecida de Bebedouro, o dia da missa
  das 19h na Capela São Vicente de Paulo (Vila Vicentina, Jaboticabal).
