# Diocese de Jaú (SP): fontes da pesquisa de 13/11/2026

Criada em 26/06/2024 com território da Diocese de São Carlos; sufragânea de
Campinas. Sé em Jaú. Bispo: Dom Francisco Carlos da Silva (desde 2024).
Cúria: Rua Major Prado, 598, Centro, Jaú, (14) 4103-7007,
contato@diocesejau.org.br. Padroeira: Nossa Senhora do Patrocínio. Segundo a
página "A Diocese", são 15 municípios e 50 paróquias.

## Resumo

- **50 unidades** em `saida/jau.json`: 1 catedral (N. S. do Patrocínio, Jaú)
  e 49 paróquias, nas três foranias que as páginas citam (N. S. do Patrocínio,
  N. S. das Dores, N. S. do Bom Conselho). Cidades: Jaú (18), Ibitinga (6),
  Itápolis (5), Bariri (3), Barra Bonita (3), Brotas (3), Dois Córregos (3),
  Tabatinga (2) e uma em cada: Bocaina, Borborema, Itaju, Itapuí, Mineiros
  do Tietê, Nova Europa, Torrinha.
- **50 com horário de missa**: o site da diocese tem uma página por paróquia
  com "Celebrações Eucarísticas", endereço, telefone e e-mail, todas lidas em
  13/11/2026. 32 com confiança alta e 18 média. Média quando a página não
  muda desde a carga inicial do site (10 e 11/2024), quando ela ainda lista
  capelas que passaram a outra paróquia (São João Batista de Jaú, Divino
  Espírito Santo de Dois Córregos) ou quando não diz em que igreja é a missa
  (Santa Clara de Jaú, Santuário de Barra Bonita).
- 169 igrejas (matrizes, capelas e comunidades) e 464 horários. Confissão:
  nenhuma página publica. Adoração: só N. S. Aparecida de Curupá (quinta,
  7h às 15h) e Santa Tereza D'Ávila de Ibitinga (1ª sexta, 8h às 19h); a do
  Senhor Bom Jesus de Ibitinga ("em seguida" à missa das 7h) ficou no
  `nao_cabe`.
- Três matrizes são santuário e entraram como `paroquia` com a primeira
  igreja de tipo `santuario`: Barra Bonita (Santuário N. S. da Conceição
  Aparecida, erigido em 08/12/2004), N. S. Aparecida de Bariri (a notícia da
  posse do pároco a chama de Santuário N. S. da Conceição Aparecida) e
  N. S. Aparecida de Dois Córregos (a página diz "Santuário").
- Novena do Perpétuo Socorro escrita só como "novena" foi para o `nao_cabe`;
  quando a página diz "Missa e Novena", entrou como missa com observação.
- Instagram: nenhuma página de paróquia traz o perfil, e a busca não mostrou
  nenhum. Todos vazios.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Lista das unidades

A lista vem do endpoint que o próprio site usa na página "Paróquias"
(`/wp-json/paroquias/v1/cidades-paroquias`, 51 itens por cidade) e do tipo
WordPress `paroquia` (`/wp-json/wp/v2/paroquia`, 54 posts). Ficaram fora:
Seminário de Filosofia e Teologia, Nunciatura Apostólica e "Missionário da
Misericórdia" (posts sem cidade) e o **Mosteiro Paraíso (Agromonges)**, de
Torrinha, que a diocese lista entre as paróquias com um administrador: não é
paróquia (o GCatholic o marca como mosteiro). Entrou como comunidade da
Paróquia São José de Torrinha, a única da cidade, com os horários da página
dele (10/2024). O e-mail dessa página é pessoal de padre e ficou de fora.

Mudanças recentes, conferidas nas notícias do site:
- **Santa Luzia, Ibitinga**: elevada a paróquia em 25/01/2025 (o endereço
  da página ainda diz "quase-paroquia").
- **N. S. do Desterro, Jaú**: quase-paróquia em 2025, instalada como
  paróquia em 30/08/2026, desmembrada da São João Batista.
- **Santa Luzia, Dois Córregos**: quase-paróquia em 07/10/2025, instalada
  como paróquia em 10/09/2026, com as comunidades São Sebastião, Santo
  Antônio de Lisboa (Guarapuã) e São Francisco de Assis.

Conferência contra o GCatholic (atualizado em 09/11/2026: 51 igrejas, "47
parishes, 1 mission"): bate nas cidades e nos titulares, com estas
diferenças:
- Faltam no GCatholic as três unidades novas acima; ele repete "São Paulo
  Apóstolo" duas vezes em Ibitinga (uma deve ser a Santa Luzia).
- Ele marca São Sebastião de Itaju como santuário; a página da diocese diz
  só "Matriz" (entrou como matriz, com a nota).
- Ele lista à parte a Capela Santo Antônio de Sant'Anna Galvão (Jaú), que não
  é unidade; a Paróquia Santa Cruz (Potunduva) cita uma "Capela Frei Galvão".
- Ele põe Curupá e Nova América como cidades; são distritos de Tabatinga e
  Itápolis (o JSON segue a página: cidade do município, distrito na
  localidade). Tapinas idem (Itápolis).

Nenhuma das 15 cidades aparece nos outros arquivos de `saida/`. O
FONTES-sao-carlos.md registra a perda de território para Jaú em 2024 e não
lista nenhuma delas.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesejau.org.br/paroquias/ (os 15 municípios)
- https://diocesejau.org.br/a-diocese/ (15 municípios, 50 paróquias)
- https://diocesejau.org.br/wp-json/paroquias/v1/cidades-paroquias (lista por cidade)
- Uma página por paróquia em https://diocesejau.org.br/paroquia/<slug>/; as
  URLs estão no campo `fontes` de cada item, com a data da última alteração
  da página (campo `modified` da API) em `data`.
- Notícias usadas: elevação da Santa Luzia de Ibitinga (31/01/2025), posse
  na N. S. Aparecida de Bariri (05/11/2025), 20 anos do Santuário de Barra
  Bonita (09/12/2024), instalação da N. S. do Desterro (10/09/2026) e da
  Santa Luzia de Dois Córregos (14/09/2026).

## Escolhas de contato

- Celular só quando a página o publica como telefone ou contato da
  paróquia, sem nome de pessoa (Santa Clara de Jaú, São Pedro e Santa Luzia
  de Ibitinga, Nova Europa, Bom Jesus de Tapinas, N. S. Aparecida de Bariri).
  Números sem dono claro ficaram fora (Santa Luzia de Dois Córregos:
  (14) 98122-4070; Imaculada Conceição de Ibitinga: o "celular").
- São Sebastião de Jaú: o e-mail da página tem "ã" no domínio
  (secretaria@saosebastiãojau.com.br) e o site www.saosebastiaojau.com.br
  não abriu (certificado de outro domínio). Ficaram vazios.
- Imaculada Conceição de Ibitinga: o site citado não resolve; vazio.

## O que falta para o próximo estado desta pesquisa

- Confissões: nenhuma página publica.
- Reconferir as 18 de confiança média quando a diocese atualizar as páginas,
  em especial São João Batista (Jaú) e Divino Espírito Santo (Dois Córregos),
  que ainda listam capelas das paróquias novas, e a Capela São Sebastião de
  Dois Córregos, que aparece em duas paróquias com horários diferentes.
- O "Santuário" de Mineiros do Tietê (missas de domingo 9h e 19h): a página
  não dá nome nem endereço; ficou no `nao_cabe` da matriz.
- Bairro da maioria das capelas: as páginas só dão o nome.
- Perfis de Instagram das paróquias.
