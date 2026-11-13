# Arquidiocese de São Paulo, Regiões Sé e Ipiranga: fontes da pesquisa de 13/11/2026

Parte da Arquidiocese de São Paulo (Cardeal Dom Odilo Pedro Scherer). As
Regiões Belém e Santana e as Regiões Lapa e Brasilândia estão em
`saida/arqsp-belem-santana.json` e `saida/arqsp-lapa-brasilandia.json`.

- **Região Episcopal Sé**: vigário episcopal Dom Rogério Augusto das Neves.
  Sede: Av. Pacaembu, 954, Pacaembu, (11) 3826-4999, regiaose@regiaose.org.br.
- **Região Episcopal Ipiranga**: vigário episcopal Dom Celso Alexandre.
  Sede: R. Xavier de Almeida, 818, Ipiranga, (11) 2274-8500,
  documentos@regiaoipiranga.com.br.

## Resumo

- **103 unidades** em `saida/arqsp-se-ipiranga.json`, todas na cidade de
  São Paulo:
  - **Região Sé: 62** (a Catedral e 61 paróquias, 8 delas pessoais). Decanato
    São João Evangelista 20 (com a Catedral), São Tiago de Alfeu 15, São
    Paulo 14, São Tomé 13.
  - **Região Ipiranga: 41** paróquias (1 pessoal, a francesa). Decanato
    Santo André 15, São Mateus 13, São Marcos 13.
- **Com horário: 52 unidades.** Sé 32 (26 de confiança alta, 6 média),
  Ipiranga 20 (17 alta, 3 média).
- **Sem horário (confiança baixa, `horarios: []`): 51.** Sé 30, Ipiranga
  21. O motivo está na observação de cada uma.
- A observação de cada unidade diz a Região Episcopal e o decanato (o
  "setor" da arquidiocese hoje se chama decanato).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do site da arquidiocese, que publica as paróquias como tipo de
conteúdo próprio do WordPress (`/wp-json/wp/v2/parish`, 312 itens) com a
categoria da região (`parish_cat`): **Região Sé 61, Região Ipiranga 41**, mais
a "Catedral da Sé" na categoria "Outras Igrejas". A contagem bate com as
páginas das regiões (https://arquisp.org.br/regiao-se/ e
https://arquisp.org.br/regiao-ipiranga/), que listam as paróquias por
decanato: 15 + 14 + 19 + 13 na Sé e 15 + 13 + 13 no Ipiranga. A página da
Catedral a põe no Decanato São João Evangelista.

Conferência contra o GCatholic (https://gcatholic.org/churches/local/zpau0,
334 igrejas na arquidiocese, agrupadas pelos setores antigos): as 102
paróquias da arquidiocese aparecem lá nos setores Catedral, Bom Retiro, Brás,
Santa Cecília, Perdizes, Jardins, Pinheiros (em parte), Cerqueira César,
Aclimação, Paraíso, Ipiranga, Anchieta, Cursino, Vila Mariana, Vila Prudente
(em parte) e Imigrantes. Divergências:

- **Santo Estevão** e **São Domingos de Gusmão** (setor Cursino, marcadas
  como paróquia no GCatholic, ids 78847 e 78848) não aparecem em nenhuma
  região no site da arquidiocese. Ficaram FORA; pendência: confirmar com a
  Região Ipiranga se foram suprimidas ou unidas a outra paróquia.
- O GCatholic não lista à parte a Paróquia Pessoal Universitária Imaculado
  Coração de Maria, a dos Fiéis Latino-Americanos, a Italiana nem a Paróquia
  Nossa Senhora da Assunção e São Paulo (ele junta esta à Catedral).
  Seguimos a arquidiocese, que as publica uma a uma.
- **Catedral e paróquia da Sé**: a arquidiocese tem a página "Catedral da Sé"
  (cura próprio) e a "Paróquia Nossa Senhora da Assunção e São Paulo"
  (fundada em 1591), cujo endereço é a Igreja de São Gonçalo (Praça Dr. João
  Mendes, 108), a mesma da Paróquia Pessoal Nipo-Brasileira São Gonçalo.
  Entraram as três; as duas de São Gonçalo sem horário, então não há missa
  repetida.
- Igrejas que dividem endereço: Rua Monte Alegre, 948 (Imaculado Coração de
  Maria de Perdizes e a Pessoal Universitária); Rua do Glicério, 225, Missão
  Paz (Nossa Senhora da Paz, Latino-Americanos e Italiana).
- O GCatholic põe no setor Vila Prudente a Paróquia Nossa Senhora Imaculada
  Conceição dos **ucranianos** e no setor Ipiranga a **Capelania russa** da
  Anunciação: são de outros ritos, fora da lista da arquidiocese, e ficaram
  fora.
- Paróquias dos setores Vila Prudente, Brás e Pinheiros que a arquidiocese
  põe em outras regiões (São Carlos Borromeu, São Pedro Apóstolo, Nossa
  Senhora Aparecida dos Ferroviários, Monte Serrate, Mãe do Salvador) ficaram
  para as outras pesquisas.

Matrizes que são santuário (primeira igreja com tipo `santuario`): São
Judas Tadeu (Jabaquara), Sagrado Coração de Jesus em Sufrágio das Almas
(Santuário das Almas), Nossa Senhora do Rosário de Fátima (Sumaré), Santa
Edwiges (Sacomã), Nossa Senhora Aparecida (Ipiranga) e São Francisco de Assis
(Largo São Francisco). Basílicas menores que são matriz de paróquia, com a
categoria `paroquia`: Nossa Senhora do Carmo (Bela Vista) e Nossa Senhora da
Conceição (Santa Ifigênia).

## Fontes dos horários

1. **Página da paróquia no site da arquidiocese** (uma por unidade; a URL está
   em `fontes`). Quase todas só trazem o expediente da secretaria; trazem
   missas: Catedral (com confissões), Nossa Senhora Mãe da Igreja, Nossa
   Senhora das Dores e São Peregrino, Santa Rita de Cássia (Mirandópolis), São
   Francisco de Sales (Vila Gumercindo), Santa Ângela e São Serapião, a
   Pessoal Coreana (só as missas em português) e a Pessoal Francesa (só a
   missa em francês).
2. **Site próprio da paróquia**, lido em 13/11/2026, para as demais. Alguns
   achados à parte: o site da Rainha dos Apóstolos mudou para
   igrejansra.com.br (aviso no site antigo); São Januário está em
   paroquiasangennaro.com.br; Divino Espírito Santo em
   igrejadivinoespiritosanto.org.br; Santo Antônio da Barra Funda e São Dimas
   têm site que a arquidiocese não lista. Horário só em imagem: Imaculada
   Conceição do Ipiranga e Santo Emídio (lidas na imagem).
3. Instagram e Facebook não foram abertos por dentro. A busca na web
   disponível nesta sessão não trouxe trecho com horário de nenhuma paróquia.

Casos com confiança média (o porquê também está na observação):

- Imaculada Conceição (Ipiranga) e Santo Emídio: horário em imagem (2022/2024).
- Divino Salvador: a grade do site não traz missa de domingo.
- Imaculada Conceição (Bela Vista): a grade do domingo traz "02h" e "00h",
  deixados de fora.
- Pessoal Coreana: só as missas em português; Pessoal Francesa: só a missa
  em francês.
- Pessoal Chinesa: site com avisos de 2024 junto dos horários.
- Nossa Senhora de Casaluce: só o resumo da página inicial (quinta e domingo).
- São Domingos (Perdizes): página inicial ainda com aviso da pandemia.

Divergência registrada: Nossa Senhora Mãe da Igreja tem domingo 9h, 10h30,
12h, 17h, 18h30 e 20h no site da paróquia e 9h, 10h30, 12h, 18h e 19h30 na
página da arquidiocese. Seguimos o site da paróquia.

## Contatos

Telefone, e-mail e site das páginas da arquidiocese; quando o site da
paróquia dá outro e-mail institucional, vale o do site (Santo Inácio,
Sagrada Família, Assunção, Mãe de Jesus, Santa Cecília, São Januário).
WhatsApp só quando marcado como WhatsApp da secretaria. Ficaram fora: o
e-mail da Pessoal Chinesa (parece pessoal do pároco), o de São Joaquim
(publicado como "gmail.com.br", inválido) e celulares sem marca de
secretaria. Sites só entram se responderam em 13/11/2026.

## Dificuldades

- **Sites fora do ar** (DNS ou conexão recusada) em 13/11/2026: São Vito,
  Auxiliadora (Bom Retiro), São Luís Gonzaga, Santa Rita (Vila Mariana), São
  Joaquim, Capela PUC (as duas de Perdizes), Imaculado Coração de Maria (Vila
  Buarque), Pompéia, Missão Paz (o domínio missaonspaz.org virou página
  estacionada: as três paróquias do Glicério), Santa Ifigênia, Santa Teresa
  (Itaim), Bom Jesus dos Passos, Santa Cândida, São Vicente de Paulo.
- **Verificação anti-robô** (página "One moment, please..."): São Cristóvão,
  Santa Rosa de Lima e parte das páginas do Calvário e de São Gabriel (os
  horários desses dois saíram da página inicial, que abriu).
- franciscanos.org.br (Santo Antônio do Pari e São Francisco do Largo) não
  respondeu pelo proxy nem pelo WebFetch.
- Nossa Senhora das Graças (Cidade Vargas): horários num Google Agenda
  embutido, que não se lê sem navegador.
- O link de Santo Agostinho leva ao site da província agostiniana, sem
  horários da paróquia.

## Pendências (próximo estado)

- As 51 paróquias sem horário, em especial as grandes do centro: Santa
  Ifigênia, São Francisco (Largo São Francisco), Pompéia, Auxiliadora, São
  Cristóvão, Santa Teresa (Itaim), São Luís Gonzaga, Imaculado Coração de
  Maria (Vila Buarque).
- **Igrejas históricas e capelas sem paróquia indicada na fonte** (GCatholic,
  setores Catedral, Bom Retiro, Brás, Santa Cecília e Ipiranga; não entraram
  no JSON): Mosteiro de São Bento (basílica abacial), Pátio do Colégio (São
  José de Anchieta), Igreja das Chagas do Seráfico Pai São Francisco, Ordem
  Terceira do Carmo, Nossa Senhora da Boa Morte, Nossa Senhora do Rosário dos
  Homens Pretos, Nossa Senhora dos Aflitos, Santa Cruz das Almas dos
  Enforcados, Santo Antônio (Praça do Patriarca), Menino Jesus e Santa Luzia,
  Mosteiro da Luz (Santo Antônio de Sant'Ana Galvão), Santo Expedito, Capela
  Dom Bosco, Capela Nossa Senhora da Misericórdia, Capela Nossa Senhora de
  Sion e Capela Sagrada Família e Santa Paulina.
- Comunidades citadas sem endereço, que ficaram no `nao_cabe` da matriz:
  Comunidade Nossa Senhora Aparecida (Santa Edwiges) e Capela Cristo Operário
  (Sagrada Família); o Centro Comunitário do Divino Espírito Santo (Rua
  Avanhandava, 575) também está só no `nao_cabe`.
- Missas em coreano (Pessoal Coreana) e as demais da Pessoal Francesa.
- Santo Estevão e São Domingos de Gusmão (ver "Lista das unidades").

## Páginas (lidas em 13/11/2026)

- https://arquisp.org.br/regiao-se/ e https://arquisp.org.br/regiao-ipiranga/
- https://arquisp.org.br/wp-json/wp/v2/parish e
  https://arquisp.org.br/wp-json/wp/v2/parish_cat
- https://arquisp.org.br/igrejas/catedral-da-se/
- Página de cada paróquia e site de cada paróquia: no campo `fontes` de cada
  item do JSON.
- https://gcatholic.org/churches/local/zpau0 (conferência da lista)
