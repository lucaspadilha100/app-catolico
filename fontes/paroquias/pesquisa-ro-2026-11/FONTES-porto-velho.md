# Arquidiocese de Porto Velho (RO): fontes da pesquisa de 13/11/2026

Sé em Porto Velho; cobre 13 municípios do norte de Rondônia. Arcebispo: Dom
Roque Paloschi. Mitra Arquidiocesana: Av. Carlos Gomes, 964, Centro, Porto
Velho, (69) 3221-2270 (telefone e WhatsApp),
coord.pastoral@arquidiocesedeportovelho.org.com. Instagram: arquidiocesepvh.
A arquidiocese celebra o centenário em 2026-2027.

## Resumo

- **36 unidades pastorais** em `saida/porto-velho.json`: 1 catedral, 1
  santuário arquidiocesano, 28 paróquias, 5 áreas missionárias e 1 área
  pastoral. Municípios: Porto Velho (18 unidades, contando os distritos de
  Jaci-Paraná, União Bandeirantes, Vista Alegre do Abunã, São Carlos e Calama),
  Ariquemes (3), Alto Paraíso, Buritis, Cacaulândia, Campo Novo de Rondônia,
  Candeias do Jamari, Cujubim, Itapuã do Oeste, Machadinho d'Oeste, Monte
  Negro, Rio Crespo e Vale do Anari (1 cada). Todas as sedes ficam em
  Rondônia; a única igreja fora do estado é a comunidade de Vila Curuquetê
  (Lábrea, AM), da paróquia de Vista Alegre do Abunã.
- **35 com horário** (confiança alta, menos Vila DNIT, média, pela cidade
  deduzida), todas com fonte na página da própria unidade no site da
  arquidiocese, lida em 13/11/2026.
- **1 sem horário** (confiança baixa): Área Missionária Alto Rio Madeira. A
  página mistura os blocos: o "Expediente na secretaria" da seção de Nova
  Mutum traz o que parecem ser celebrações (sexta 19h, domingo 7h30) sem o
  título certo, e nada entrou.
- Todo `id_banco` é null: o banco ainda não tem nada de Rondônia.

## Lista das unidades

A lista vem da página de paróquias do site da arquidiocese (36 unidades, cada
uma com página própria: clero, endereço, telefone, e-mail, expediente,
horários de celebração e, em muitas, as comunidades com endereço).

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 30
igrejas): o anuário não traz Vale do Anari, Cacaulândia, Vista Alegre do
Abunã nem as áreas missionárias de Campo Novo, Vila DNIT, Santa Dulce dos
Pobres, São Roque e União Bandeirantes; a sede de Jaci-Paraná aparece lá como
"paróquia Coração Sagrado de Jesus". Em compensação o anuário lista como
paróquias de Porto Velho um "Divino Espírito Santo" e um "São João Batista"
que não estão na página da arquidiocese: pelas coordenadas, batem com a
comunidade Divino Espírito Santo (da Paróquia São Luiz Gonzaga ou da N. S.
das Graças) e com a comunidade São João Batista do Tucumanzal (da Paróquia
São José Operário); o JSON segue o site da arquidiocese. A imprensa local
(Portal Amazônia) fala em "29 paróquias e 6 áreas missionárias", o que fecha
com as 36 do site contando catedral à parte e a área pastoral entre as áreas.

Decisões anotadas:

- **Área Pastoral Nossa Senhora dos Migrantes** (União Bandeirantes): o site
  a titula "Paróquia", mas a URL e a história da própria página dizem área
  pastoral instituída em 2018; ficou `area_pastoral`, com a divergência na
  observação.
- **Paróquia Nossa Senhora de Fátima** (Porto Velho): o site a chama
  "Santuário Paróquia"; ficou `paroquia` com a matriz como `santuario`.
- **Área Missionária São Roque** (Rio Crespo): a URL diz "paróquia de São
  Roque", mas o título da página e a lista dizem área missionária.
- **Área Missionária N. S. Aparecida de Campo Novo**: a página diz que
  pertence à Paróquia São José de Monte Negro; as comunidades do núcleo vêm
  da página daquela paróquia.
- Capelas e comunidades entraram só quando a página as lista com nome e
  lugar. Santa Marta (Buritis) traz 16 "áreas missionárias rurais" com 81
  comunidades sem endereço, e Auxiliadora (Alto Paraíso, 63 comunidades) e
  Machadinho (58) só dão o total: ficou só a matriz, com o número na
  observação.
- Horário de comunidade marcado como "celebração" (sem dizer missa) foi para
  `nao_cabe`, não para `horarios` (comunidades do Santuário Aparecida).
- Contatos de coordenadores de comunidade (celulares pessoais nas páginas de
  Cristo Rei e Santa Clara) ficaram de fora.

## Páginas do site da arquidiocese (lidas em 13/11/2026)

- https://arquidiocesedeportovelho.org.br/ (contatos da mitra, menu)
- https://arquidiocesedeportovelho.org.br/paroquias/ (a lista das 36)
- https://arquidiocesedeportovelho.org.br/paroquia/<unidade>/ (as 36 páginas;
  a URL exata de cada uma está nas `fontes` do JSON)

Erros do próprio site, anotados e não copiados:

- Calama (São João Batista do Baixo Madeira): e-mail e Pascom publicados são
  os da paróquia de Cujubim; ficaram de fora.
- São Roque (Rio Crespo): e-mail publicado sem arroba
  (paroquia.sroque2.gmail.com); ficou de fora.
- Auxiliadora (Alto Paraíso): CEP publicado com um dígito a menos (6862-000)
  e telefone com 8 dígitos; o telefone entrou como está impresso.
- Vila DNIT: a página não traz endereço nem cidade; a imprensa local
  (rondoniaovivo.com) trata a Vila DNIT como área de Porto Velho, e assim
  entrou, com confiança média.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/pvel0 (anuário, 09/11/2026)
- https://gcatholic.org/churches/brazil/55059 e /61932 (as duas "paróquias"
  extras do anuário, conferidas pelas coordenadas)
- https://catholic-hierarchy.org/diocese/dpove.html
- https://en.wikipedia.org/wiki/Archdiocese_of_Porto_Velho
- Portal Amazônia (portalamazonia.com): 13 municípios, 29 paróquias e 6
  áreas missionárias; endereço do Santuário Aparecida

## O que falta para o próximo estado desta pesquisa

- Instagram das unidades: a busca não trouxe perfil confirmado de nenhuma
  paróquia (só o da arquidiocese, arquidiocesepvh); perfis não se leem por
  dentro. Ficaram todos vazios.
- Horário da Área Missionária Alto Rio Madeira (Jaci-Paraná e Nova Mutum).
- Endereço da matriz de São Carlos, Calama, Vila DNIT e São Roque (as
  páginas só dão caixa postal ou nada).
- As dioceses vizinhas de Rondônia (Ji-Paraná e Guajará-Mirim) ainda não
  foram pesquisadas.
