# Diocese de Umuarama (PR): fontes da pesquisa de 13/11/2026

Sé em Umuarama; noroeste do Paraná, na divisa com Mato Grosso do Sul.
Sufragânea de Maringá. Cúria: Avenida Padre José Germano Neto Júnior, 4260,
Umuarama, (44) 3622-1301.

## Resumo

- **51 unidades pastorais** em `saida/umuarama.json`: 1 catedral (Divino
  Espírito Santo) e 50 paróquias. Decanatos, como o site os dá no filtro da
  lista: Cianorte (8), Douradina (6), Iporã (6), São Francisco de Assis (6),
  Catedral (5), Pérola (4), Tapejara (4), Nova Olímpia (4) e Indianópolis
  (3). Cinco paróquias não aparecem em nenhum decanato no site e estão assim
  na observação: N. S. do Rocio (São Manoel do Paraná), Santo Antônio
  (Esperança Nova), Santo Antônio (Indianópolis), São José Operário
  (Umuarama) e São Tomé (São Tomé). Cidades das matrizes: Umuarama (14),
  Cianorte (9) e uma em cada uma das outras 28 cidades.
- **46 com horário de missa** (confiança alta). O horário está em texto
  livre no bloco "Sobre" de cada página de paróquia ("Domingo: 08h e 19h;
  Segunda: 06h30; ..."); foi transcrito à mão, linha por linha, em 13/11/2026.
  33 paróquias também publicam confissão, que entrou como `confissao` com o
  fim do atendimento na observação ("Até 11h30").
- **5 sem horário** (confiança baixa, listadas em
  `SEM-HORARIO-umuarama.txt`): N. S. Aparecida (Tapejara), N. S. das Graças
  (Cianorte), São Sebastião (Altônia) e Santa Maria Goretti e São José
  Operário (Cidade Gaúcha) têm o bloco "Sobre" vazio; São Tomé publica só
  confissões (segunda e sábado), que entraram.
- "Atendimento do padre" que a página não chama de confissão, missas por dia
  do mês, missas "nas capelas" ou "em uma das comunidades", Celebração da
  Palavra, Celebração da Saúde e novenas ficaram no `nao_cabe` da matriz.
  Sagrado Coração de Jesus (Umuarama) chama o bloco de "atendimentos e
  confissões": entrou como confissão, com "atendimento e confissão" na
  observação.
- Santuário Eucarístico Diocesano N. S. de Fátima (Cianorte): a página põe
  as missas de sábado (7h e 19h30) sob "1º sábado do mês"; entraram com
  semanas [1], e o `nao_cabe` avisa que a página não diz se há missa nos
  outros sábados. Conferir.
- Três paróquias com matriz santuário entraram como `paroquia` com a
  primeira igreja de tipo `santuario`: Perpétuo Socorro (Umuarama), Santo
  Antônio (Iporã) e São José (Alto Piquiri); a de Cianorte, com o Santuário
  Eucarístico Diocesano.
- Paróquias em distrito: N. S. Aparecida (Vidigal, Cianorte), Sagrado
  Coração de Jesus (Santa Eliza, Umuarama), Santo Antônio (Serra dos
  Dourados, Umuarama) e São Lourenço (São Lourenço, Cianorte).
- **166 capelas e comunidades** entraram ligadas à paróquia cuja página as
  lista, cada uma com o endereço da sua própria página (/capela/...). Quatro
  capelas de Alto Paraíso têm só "Alto Paraíso - PR" como endereço e ficaram
  no `nao_cabe` da matriz.
- Horário nas capelas: a página de cada capela tem um campo "Celebrações"
  em texto livre. Ele mistura missa e Celebração da Palavra, e a maioria das
  linhas não diz qual é ("Celebrações: 4º Sexta-feira: 19h30"). Por isso
  **só entrou como `missa` o que a página chama de missa** (20 capelas, quase
  todas de Pérola, Santa Clara de Assis e Santo Antônio de Serra dos
  Dourados). As outras 101 capelas com texto ficaram com o texto no
  `nao_cabe`, precedido de "Celebrações (a página não diz se é missa)"; 45
  não têm texto. Se o dono decidir que "Celebrações" vale como missa, o texto
  está todo no `nao_cabe`, pronto para virar horário.
- Contatos: telefone, WhatsApp (do link wa.me), e-mail (protegido pelo
  Cloudflare, decodificado do data-cfemail), Instagram (44 das 51) e
  Facebook (na observação). Os telefones foram copiados como estão; muitos
  têm a forma "(44) 9362-2160", de 8 dígitos começando por 9, e não foram
  convertidos.
- Nome: o site escreve "Paróquia da Ressureição" (Ivaté); entrou
  "Ressurreição", como no GCatholic, com a grafia do site na observação.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site (8 por página, 6 páginas), com 52
links: 51 paróquias e uma entrada vazia chamada "Mato Grosso do Sul" (sem
nenhum dado), que ficou fora. O decanato de cada uma veio do filtro da
lista (`/paroquias/?region=<id>`).

Conferência contra o GCatholic (atualizado em 09/11/2026: "48 parishes", 47
igrejas listadas): bate nome a nome com 47 das 51. As quatro que o
GCatholic ainda não tem são novas, pelas datas de fundação do site: N. S.
das Graças (Cianorte, 27/11/2022), N. S. Aparecida (Vidigal, 17/12/2022),
Divina Misericórdia (Cianorte, 15/04/2023) e Santo Antônio (Serra dos
Dourados, 07/02/2025).

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedeumuarama.org.br/paroquias/ (e /paroquias/page/2/ a 6)
- https://diocesedeumuarama.org.br/paroquias/?region=<7 a 19> (filtro por
  decanato)
- Uma página por paróquia: https://diocesedeumuarama.org.br/paroquia/<nome>,
  com fundação, telefone, endereço, e-mail, redes, o bloco "Sobre" com os
  horários e a lista de capelas. As URLs estão no campo `fontes`.
- Uma página por capela: https://diocesedeumuarama.org.br/capela/<nome>
  (170 lidas), com endereço e o campo "Celebrações". As capelas cujo horário
  de missa entrou estão também no campo `fontes` da paróquia.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/umua1.htm
- https://gcatholic.org/churches/local/umua1

## O que falta para o próximo estado desta pesquisa

- Horário das 5 paróquias sem horário (perfis em `SEM-HORARIO-umuarama.txt`).
- Saber se as "Celebrações" das capelas são missas.
- O decanato das 5 paróquias que o site não põe em nenhum.
- Endereço das quatro capelas de Alto Paraíso.
