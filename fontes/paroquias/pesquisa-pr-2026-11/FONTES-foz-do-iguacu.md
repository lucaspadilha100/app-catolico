# Diocese de Foz do Iguaçu (PR): fontes da pesquisa de 13/11/2026

Sé em Foz do Iguaçu; extremo oeste do Paraná, 14 municípios. Bispo: Dom
Sergio de Deus Borges. Padroeiro diocesano: São João Batista (GCatholic).
Catedral: Nossa Senhora de Guadalupe (Vila A); a antiga catedral é a Igreja
São João Batista (Centro).

## Resumo

- **30 unidades pastorais** em `saida/foz-do-iguacu.json`: 1 catedral e 29
  paróquias, em 5 decanatos: N. S. de Guadalupe (6), São Francisco de Assis
  (5), São João Batista (5), N. S. Medianeira (8) e N. S. de Caravaggio (6).
  A página "Paróquias" da diocese diz "30 paróquias, divididas em cinco
  decanatos": bate. Cidades: Foz do Iguaçu (15), Medianeira (2), Santa Helena
  (2) e uma em cada: Santa Terezinha de Itaipu, São Miguel do Iguaçu,
  Itaipulândia, Serranópolis do Iguaçu, Missal, Matelândia, Céu Azul, São
  José das Palmeiras, Ramilândia, Vera Cruz do Oeste, Diamante D'Oeste.
- **27 com horário de missa**: 12 com confiança alta (página alterada em
  2026) e 15 média (página alterada pela última vez em junho a agosto de
  2025). Data de alteração tirada da API do WordPress
  (`/wp-json/wp/v2/pages`, campo `modified`), anotada em `fontes`.
- **3 sem horário** (confiança baixa): Itaipulândia, Serranópolis do Iguaçu
  e Céu Azul têm a tabela de horários vazia na página. Os perfis de
  Instagram citados pela diocese estão em `contatos.instagram` e em
  `SEM-HORARIO-foz-do-iguacu.txt`.
- 221 capelas e comunidades com nome e lugar (bairro, linha, distrito),
  ligadas à paróquia que as lista. 37 delas receberam horário, quando a
  tabela da paróquia dá o nome da capela sem ambiguidade.

## Como a tabela de horários foi lida

Cada página de paróquia tem uma tabela "Dia da semana | Horário | Capela",
em que cada célula junta várias linhas. Regras usadas:

- Mesma quantidade de dias, horários e lugares: um para um.
- Um dia só (ex.: "Domingo") com vários horários: todos semanais.
- Dia geral seguido de semanas do mês (ex.: "Domingo / 1º Domingo do mês /
  2º ..."): o dia geral fica com os primeiros lugares (em geral a matriz) e
  cada semana com os seguintes, quando a conta fecha; os casos de dúvida
  foram vistos um a um (`overrides` no script).
- Quando a tabela não deixa saber a semana de cada missa, nada foi
  adivinhado: o trecho foi para o `nao_cabe` da matriz como "Tabela sem
  dizer a semana de cada missa (...)". Aconteceu em: Catedral (sexta), São
  Pedro (sábado), Santa Teresinha de Itaipu (sexta e sábado), Menino Jesus
  (quarta), Missal (domingo), Matelândia (domingo) e Ramilândia (sábado).
- Lugar que não é igreja (condomínio, Lar dos Velhinhos, cemitério),
  "última sexta do mês" e capela sem lugar na lista da paróquia também foram
  para o `nao_cabe` da matriz, com o horário como publicado.
- "Capela do Santíssimo" e "Cripta" da Catedral contam como a própria
  catedral (observação no horário).

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedefoz.org.br/paroquias/ (lista, decanatos, bairro)
- Uma página por paróquia (30), com clero, capelas, contato, expediente,
  Instagram e a tabela de horários; a URL está em `fontes` de cada item.
  Exemplos: https://diocesedefoz.org.br/catedral-nossa-senhora-de-guadalupe/,
  https://diocesedefoz.org.br/paroquia-nossa-senhora-de-caravaggio-matelandia/
- WhatsApp publicado sem DDD recebeu o 45 (todos os números da diocese são
  do DDD 45). Onde a página dá dois fixos, o segundo está na observação.

## Conferência contra o GCatholic

GCatholic (09/11/2026) lista 26 paróquias (a estatística de 2022 diz 28
paróquias e 2 missões). Diferenças:

- Não estão no GCatholic: Anunciação do Senhor (Foz), N. S. de Lourdes
  (Foz, Jardim Petrópolis), N. S. do Perpétuo Socorro (Medianeira, Condá) e
  São Roque (Santa Helena, distrito de São Roque). Entraram pela diocese.
- O GCatholic tem "Bom Jesus do Migrante (Parish)" em Foz; a diocese lista a
  Paróquia Santo Antônio (Jardim América), que tem a Capela Bom Jesus do
  Migrante (Vila Portes), e cita o Instagram bjm.pascom. Seguimos a diocese.

## Instagram (anotado das páginas da diocese; nenhum perfil aberto)

catedralfoz, paroquiadasgracasfoz, paroquiasaopedro_foz, paroquia_nsluz,
paroquiadefatimafoz, paroquiasaofranciscofoz, paroquiaanunciacaodosenhor,
paroquiasti, paroquia_saude, pascomparoquiameninojesus, matrizsjbfoz,
paroquiaperpetuos, paroquiaes.nsa, paroquia_sp, bjm.pascom,
paroquiansmedianeira, par.saomiguel, pnsaita, paroquiasantoantonio_sh,
perpetuosocorroconda, paroquiansrafatima26, paroquiaconceicaomissal,
paroquiacaravaggiomatelandia, paroquiaceuazul, paroq.sagradafamilia,
sca_paroquia, aparecidadediamante. Sem perfil na página: N. S. de Lourdes
(Foz), São José (São José das Palmeiras, só Facebook) e São Roque.

## Pendências

- Paróquia Santo Antônio (Santa Helena): a página lista 41 comunidades só
  pelo lugar, várias repetidas na lista da Paróquia São Roque (que parece
  ter sido desmembrada dela): Bairro São Cristóvão; Bairro São Luiz; Bairro
  Vila Rica; Braço do Norte; Cabeceira da Moreninha; Capela Santa Helena;
  Coroados; Cristo Rei; Esquina Bela Vista; Esquina Céu Azul; Esquina Rosa;
  Linha Aparecida; Linha Buricá; Linha Gaúcha; Linha Guarani; Linha
  Maraskim; Linha Santa Cruz; Linha São Luiz; Linha São Paulo; Linha União;
  Linha Vera Cruz; Moreninha; Navegantes; Nova Esperança; Pacuri; Sanga
  Natal; Santa Clara; Santa Helena Velha; Santa Terezinha; Sto. Antônio,
  Faz. Rainha; Santo Antônio Morenão; São Brás; São Clemente; São Gabriel;
  São Jorge; São Miguelzinho; São Paulo Morenão; São Roque; São Vicente
  Chico; Sub Sede; Vila Celeste. Ficaram fora do JSON até a diocese separar
  o que é de cada paróquia.
- Capelas listadas sem lugar (ficaram fora como igreja; os horários delas
  estão no `nao_cabe` da matriz): Anunciação do Senhor (5), Espírito Santo e
  N. S. Aparecida (9), Menino Jesus (7), N. S. da Luz (6), N. S. da Saúde
  (6), N. S. das Graças (3), N. S. de Fátima de Foz (3), Santa Teresinha de
  Itaipu (12), São Pedro (9), São João Batista (1), São Paulo Apóstolo (1),
  Ramilândia (10), Serranópolis (Capela Cristo Rei), Medianeira (Capela São
  Miguel Arcanjo), São Miguel do Iguaçu (Santuário N. S. do Rocio, sem
  lugar).
- Capelas de mesmo nome na mesma paróquia (Matelândia: três "São José")
  não receberam o horário que a tabela dá só pelo nome.
- Confissão e adoração: não publicadas (só "com exposição/bênção do
  Santíssimo" na quinta do Menino Jesus).
- As 15 páginas de 2025 merecem reconferência pelo Instagram.
