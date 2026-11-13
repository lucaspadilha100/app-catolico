# Arquidiocese de Ribeirão Preto (SP): fontes da pesquisa de 13/11/2026

Sé metropolitana em Ribeirão Preto; nordeste paulista. Arcebispo: Dom
Moacir Silva. Cúria: Rua Tibiriçá, 879, Centro, Ribeirão Preto, (16)
3610-8477, curia@arquidioceserp.org.br. Sufragâneas: Franca, Jaboticabal e
São João da Boa Vista (desde 2025 o GCatholic não lista mais Barretos,
Catanduva, Jales, São José do Rio Preto e Votuporanga como sufragâneas).

## Resumo

- **95 unidades** em `saida/ribeirao-preto.json`: 1 catedral, 1 basílica
  (Santo Antônio de Pádua, Ribeirão Preto), 86 paróquias, 2 quase-paróquias
  (Sant'Ana e São Joaquim, Ribeirão Preto; Sagrado Coração de Jesus,
  Sertãozinho, criada em 05/02/2026), 1 área pastoral (Cândido Portinari e
  Parque dos Flamboyants), 1 comunidade eclesial missionária (N. S.
  Desatadora dos Nós, que entrou como `area_missionaria`) e 3 santuários sem
  paróquia (Sete Capelas, Bom Jesus da Lapa de Jardinópolis e o Templo
  Votivo de São Benedito, ver abaixo). 9 foranias.
- Cidades: Ribeirão Preto (51, contando Bonfim Paulista), Sertãozinho (9,
  contando Cruz das Posses), Batatais (5), Jardinópolis (5, contando
  Jurucê), Cajuru (3), Serrana (3), Pontal, Cravinhos, Santa Rita do Passa
  Quatro, Santa Rosa de Viterbo e São Simão (2 cada, São Simão contando
  Bento Quirino) e uma em cada: Dumont, Luís Antônio, Guatapará, Serra Azul,
  Santa Cruz da Esperança, Cássia dos Coqueiros, Altinópolis, Brodowski e
  Santo Antônio da Alegria. Nenhuma cidade coincide com as já pesquisadas
  em outras dioceses.
- **93 com horário de missa** (88 com confiança alta, 5 média). Duas sem
  horário, confiança baixa, `horarios: []`: Jesus de Belém (Ribeirão Preto)
  e Santo Antônio de Pádua (Santo Antônio da Alegria); a página da
  arquidiocese só traz contatos, e a busca não achou horário publicado pela
  paróquia.
- Confiança média: N. S. Aparecida de Jardinópolis (horário só no cartaz de
  2021 da página), Quase-Paróquia Sagrado Coração de Jesus (só a adoração e
  a missa de quinta na capela de Fátima), e as páginas paradas desde
  2022/2023: Divino Espírito Santo (Serra Azul), N. S. das Dores e Sagrado
  Coração de Jesus (Serrana).
- 241 igrejas (matrizes, capelas e comunidades com nome e lugar) e 728
  linhas de horário. Capela ou comunidade sem lugar na fonte não virou
  igreja: o nome e o horário foram para o `nao_cabe` da matriz.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do site da arquidiocese: a categoria "Paróquias" do WordPress
tem 97 páginas, uma por unidade, cada uma marcada com a forania e a cidade
(https://arquidioceserp.org.br/wp-json/wp/v2/posts?categories=25&per_page=100).
As 9 foranias somam 97 e as 20 cidades também. Duas das 97 ficaram fora:

- **Santo Antônio, Pão dos Pobres (Reitoria)**, Av. da Saudade, 222,
  Campos Elíseos: reitoria, sem paróquia dita na página. Missa domingo 9h.
- **Igreja Nossa Senhora das Graças**, Rua Padre Euclides, 49, Campos
  Elísios: reitoria, a página só tem endereço e o e-mail pessoal do reitor.

O **Templo Votivo de São Benedito** (Rua Prudente de Morais, 657, Centro)
também tem reitor, mas o GCatholic o dá como "Parish, Shrine"; entrou como
`santuario`, com essa ressalva na observação. Rever.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 95
igrejas): bate com estas diferenças.

- O GCatholic não tem a Comunidade Eclesial Missionária Desatadora dos Nós
  nem a Quase-Paróquia Sagrado Coração de Jesus de Sertãozinho (2026).
- O GCatholic lista o Seminário Maria Imaculada (Brodowski) e as reitorias
  acima; ficaram fora.
- Sem marca de paróquia no GCatholic, mas paróquia ou quase-paróquia no
  site: Sant'Ana e São Joaquim ("Chapel"), São José de Serrana (elevada a
  paróquia em 2024), São Francisco de Assis de Sertãozinho (o endereço da
  página diz "quase-paróquia-2014", o texto traz pároco: entrou como
  paróquia), a segunda Santa Rita de Cássia de Ribeirão Preto (Portal do
  Alto, elevada em 06/05/2024) e N. S. do Perpétuo Socorro (é a matriz da
  área pastoral).
- Santuário Bom Jesus da Lapa (Jardinópolis): o site o põe entre as
  paróquias, com reitor e "secretaria paroquial"; o GCatholic só como
  santuário. Entrou como `santuario`.
- Matrizes santuário que são paróquia (GCatholic "Parish, Shrine"): N. S.
  Aparecida e N. S. do Rosário (Ribeirão Preto), Santa Rita de Cássia (Santa
  Rita do Passa Quatro), N. S. de Fátima (Cajuru), Bom Jesus da Cana Verde
  (Batatais). Entraram como `paroquia` com a primeira igreja `santuario`.

Cidades que se poderia esperar e que NÃO estão na lista da arquidiocese:
Barrinha e Pradópolis (Diocese de Jaboticabal, segundo o GCatholic).

## Páginas do site da arquidiocese (lidas em 13/11/2026)

- https://arquidioceserp.org.br/ (menu de foranias e cidades)
- A API do WordPress acima (97 páginas de unidade, texto e data de
  atualização de cada uma; as datas vão de 2022 a outubro de 2026). As URLs
  de cada página estão no campo `fontes` do JSON, com a data de atualização.
- https://arquidioceserp.org.br/curia/ (endereço da cúria)
- Cartazes de horário publicados nas próprias páginas (pasta
  `wp-content/uploads/`), lidos quando completavam ou eram mais novos que o
  texto; cada um está no `fontes` da unidade. Onde cartaz e texto
  divergem, seguiu-se o mais recente e a divergência ficou no `nao_cabe`
  (Brodowski, N. S. das Graças, Basílica/Lar Padre Euclides, Área Pastoral,
  N. S. de Fátima de Jardinópolis).

## Contatos

Só os institucionais das páginas: telefone e WhatsApp da secretaria,
e-mail da paróquia, site e Instagram. Quando a página dá dois e-mails, um da
paróquia e outro de padre, ficou só o da paróquia. Celular sem a marca
"WhatsApp" entrou como telefone só quando era o único número da secretaria.
Nenhum perfil de Instagram foi aberto; todos vêm das páginas da
arquidiocese.

## Observações pontuais

- Duas paróquias chamadas Santa Rita de Cássia em Ribeirão Preto (Jardim
  Independência e Portal do Alto): mesmo nome, endereços na observação.
- Sertãozinho: a página da Paróquia Senhor Bom Jesus ainda lista as
  comunidades Sagrado Coração de Jesus e N. S. de Fátima, que formaram a
  quase-paróquia em 2026; ficaram só na quase-paróquia.
- N. S. de Fátima de Jardinópolis: página e tabela trocam os horários das
  comunidades São Lucas e São Miguel Arcanjo (terça 19h30 / sábado 18h);
  as duas entraram sem horário, com a nota no `nao_cabe`.
- São Pedro de Jurucê: o e-mail publicado tem acento e não entrou.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/ribe0 e
  https://gcatholic.org/dioceses/diocese/ribe0.htm (anuário, 09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Horário de Jesus de Belém e de Santo Antônio da Alegria.
- Horários da Quase-Paróquia Sagrado Coração de Jesus (Sertãozinho) além
  da quinta-feira.
- Reconferir as páginas antigas (Serra Azul, Serrana, Jardinópolis N. S.
  Aparecida).
- Confissões: a maioria das páginas manda agendar na secretaria.
- Decidir a categoria do Templo Votivo de São Benedito e o destino das
  reitorias Pão dos Pobres e N. S. das Graças.
- Muitas capelas e comunidades sem endereço (Santa Rosa de Viterbo, Serra
  Azul, Cravinhos, Batatais) estão só no `nao_cabe`.
