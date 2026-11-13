# Diocese de Bom Jesus do Gurguéia (PI): fontes da pesquisa de 13/11/2026

Sé em Bom Jesus; extremo sul do Piauí, 21 municípios. Bispo: Dom Marcos
Antônio Tavoni. Cúria: Avenida Getúlio Vargas, 600, Centro, Bom Jesus,
CEP 64900-000, (89) 3562-2496 (fixo citado nas notícias da diocese),
WhatsApp (89) 99984-6349, curia@diocesedebomjesus.org.br. Padroeiro
diocesano: Bom Jesus da Boa Sentença.

## Resumo

- **27 unidades** em `saida/bom-jesus-do-gurgueia.json`: 1 catedral, 24
  paróquias e 2 áreas pastorais (as Diaconias Territoriais de Corrente).
  Cidades: Bom Jesus (4), Corrente (2 paróquias e 2 diaconias) e uma
  paróquia em cada um dos outros 19 municípios.
- **3 com horário de missa** (confiança média): Catedral (com o Santuário do
  Bom Jesus da Boa Sentença), N. S. Aparecida (Alvorada do Gurguéia) e
  N. S. das Mercês (Avelino Lopes). Vêm da tabela "Horários de Missas" das
  páginas de paróquia do site da diocese, sem data. As outras 24 entram com
  `horarios: []` e confiança baixa: as páginas da diocese estão vazias ou não
  existem, e a busca não trouxe perfis de paróquia com horário.
- Todo `id_banco` é null: o banco ainda não tem nada do Piauí.

## Lista das unidades

A diocese publicou, na notícia da criação da Paróquia São José (abril de
2022), a conta oficial: "Bom Jesus passará a contar com 4 paróquias e um
Santuário; e a Diocese somará 25 paróquias. São 21 municípios: 4 paróquias
em Bom Jesus, 2 em Corrente e 19 outras, nos demais municípios". A lista
do JSON fecha essa conta: Catedral, Menino Jesus de Praga, São Pedro
Apóstolo e São José em Bom Jesus; N. S. da Conceição e Divino Espírito
Santo em Corrente; e uma paróquia em cada um dos outros 19 municípios.

O Santuário Diocesano do Bom Jesus da Boa Sentença NÃO é paróquia à parte:
a diocese fala em "4 paróquias e um Santuário" e, em 2024, inaugurou a
"Secretaria Paroquial da Paróquia da Catedral e do Santuário". Entrou como
segunda igreja (tipo `santuario`) da Catedral.

Conferência contra o GCatholic (atualizado em 09/11/2026, 27 igrejas): bate,
com estas diferenças:
- O GCatholic não tem a **Paróquia São José** (Bom Jesus), instalada em
  01/05/2022, e conta o Santuário do Bom Jesus da Boa Sentença como paróquia.
  Seguimos a diocese.
- O GCatholic chama a matriz de Corrente de "Nossa Senhora Imaculada
  Conceição"; a diocese diz "Nossa Senhora da Conceição".
- O Santuário São Raimundo Nonato (Gilbués) e a Capela de São Benedito da
  Palmeira (Riacho Frio) estão no GCatholic sem paróquia. Gilbués e Riacho
  Frio têm uma paróquia só cada; as duas igrejas entraram nelas.
- Catholic-Hierarchy dá 24 paróquias (Anuário de 2023, dados de 2022), antes
  de contar a São José.

O site da diocese tem só 9 paróquias na página de lista e 11 páginas de
paróquia ao todo (ids 3, 9, 10, 11, 17, 32, 33, 42, 43, 44, 45; as de id 17
e 44 são as duas de Avelino Lopes, a 44 vazia). Os dados de lista, padroeiro
e cidade das demais vêm do GCatholic e das notícias da própria diocese.

## Diaconias Territoriais (Corrente)

A diocese criou em junho de 2023 duas "Diaconias Territoriais" em Corrente,
desmembradas da Paróquia N. S. da Conceição: N. S. das Mercês (bairro
Sincerino, 06/06/2023) e Santos Anjos (bairro Aeroporto I, 07/06/2023, com a
comunidade do Calumbi). Segundo a própria diocese, "equipara-se, no Direito
Canônico, a uma área pastoral, ou mais precisamente a uma quase paróquia",
coordenada por diácono permanente, com padre administrador não residente,
como passo para futuras paróquias. Entraram como `area_pastoral`.

**Pendência:** uma terceira, a "Diaconia Imaculada Conceição", foi instalada
num sábado dia 21 (notícia 912, provavelmente de fevereiro ou março de 2026),
com o diácono Renato, mas a notícia não diz a cidade. Ficou fora do JSON até
alguém confirmar o lugar (o diácono Renato das Chagas é de Cristino Castro).

## Regiões pastorais

A diocese tem 4 regiões (a Oeste, "Região Divina Pastora", instalada em
11/06/2021). Pelas notícias da diocese:
- **Norte:** Bom Jesus (4 paróquias), Alvorada do Gurguéia, Cristino Castro,
  Currais, Palmeira do Piauí, Santa Luz.
- **Sul:** Corrente (2 e as diaconias), Cristalândia do Piauí, Riacho Frio,
  Sebastião Barros.
- **Leste:** Avelino Lopes, Curimatá, Júlio Borges, Morro Cabeça no Tempo,
  Parnaguá.
- **Oeste:** Barreiras do Piauí, Gilbués, Monte Alegre do Piauí, Santa
  Filomena, São Gonçalo do Gurguéia.
- Redenção do Gurguéia: nenhuma notícia diz a região.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedebomjesus.org.br/paroquias (lista com 9 paróquias)
- Páginas de paróquia: /paroquia/x/3 (Palmeira do Piauí), /9 (Currais),
  /10 (Júlio Borges, vazia), /11 (Cristino Castro), /17 (Avelino Lopes, com
  horário), /32 (Santuário, com horário), /33 (Catedral, com horário),
  /42 (Alvorada do Gurguéia, com horário), /43 (São Pedro Apóstolo, vazia),
  /44 (Avelino Lopes, vazia), /45 (Curimatá, vazia)
- https://diocesedebomjesus.org.br/clero (função de cada padre; telefone
  fixo da Paróquia N. S. da Conceição de Corrente)
- https://diocesedebomjesus.org.br/contato e /conteudo/governo-diocesano/12,
  /conteudo/historia/1, /conteudo/comunidades-religiosas/36
- As 863 notícias de https://diocesedebomjesus.org.br/noticias (36 páginas),
  lidas por inteiro para achar regiões, capelas, comunidades e perfis. As
  usadas estão no campo `fontes` de cada item. Principais:
  - /noticia/instalacao-da-4a-paroquia-de-bom-jesus-pi-diocese-de-bom-jesus-do-gurgueia/644
  - /noticia/diocese-de-bom-jesus-do-gurgueia-instala-nova-paroquia-em-bom-jesus-pi/647
  - /noticia/instalada-a-diaconia-territorial-nossa-senhora-das-merces-no-sincerino-em-corrente-diocese-de-bom-jesus-do-gurgueia/774
  - /noticia/bairro-do-aeroporto-em-corrente-ganha-diaconia-territorial-santos-anjos-diocese-de-bom-jesus-do-gurgueia/775
  - /noticia/diaconias-territoriais-em-corrente-e-seus-primeiros-passos-diocese-de-bom-jesus-do-gurgueia/714
  - /noticia/intalacao-da-nova-regiao-pastoral-divina-pastora/565
  - /noticia/com-grande-alegria-diocese-de-bom-jesus-do-gurgueia-celebra-inauguracao-da-nova-livraria-catedral-e-da-secretaria-paroquial/881
  - /noticia/diocese-de-bom-jesus-do-gurgueia-divulga-datas-das-posses-paroquiais-de-fevereiro-de-2026/905

## Contatos

- Telefone só onde é institucional: (89) 3573-1361, da Paróquia N. S. da
  Conceição (Corrente), na página do clero. A página de Alvorada do Gurguéia
  traz um celular que é o do ex-pároco (também na página do clero), e ficou
  fora; o mesmo para os celulares e e-mails dos padres da página do clero.
- Instagram anotado das notícias da diocese, sem abrir o perfil:
  igreja_menino_jesus_de_praga (Menino Jesus de Praga, 2020) e
  pascom_santaana (Pascom de Cristalândia do Piauí, 2020). Diocese:
  diocesedebomjesusdogurgueia.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/bomj1 e https://gcatholic.org/dioceses/diocese/bomj1
- https://www.catholic-hierarchy.org/diocese/dbjdg.html
- https://cnbbne4.org.br/igreja-constitui-40-locais-de-peregrinacao-no-piaui-por-ocasiao-do-jubileu-da-esperanca/
  (igrejas jubilares de 2025: Catedral, Santuário, Matriz de Corrente e
  Capela de São Benedito, Riacho Frio)
- Mapa das OSC (IPEA): a diocese só tem o CNPJ da sede (06.556.427/0001-57),
  sem filial por paróquia.

## O que falta para o próximo estado desta pesquisa

- Horários de 24 unidades e confissões de todas. O caminho é a Pascom da
  diocese ou os perfis das paróquias (o buscador não os indexa).
- A cidade da Diaconia Imaculada Conceição (2026).
- Endereço da matriz na maioria das paróquias: o site da diocese só tem
  endereço em 7 páginas.
- Capelas citadas sem lugar: Capela de N. S. de Fátima (São Pedro Apóstolo,
  Bom Jesus, com a comunidade do Morro do Frei), Capela de Santo Antônio
  (Gilbués), Comunidade São Dimas (Monte Alegre do Piauí, sem paróquia
  explícita) e as comunidades rurais de Monte Alegre (Riacho dos Cavalos,
  Piquezeiro, Caraíbas, Contrato, Serrinha, Cerâmica, Umburuçu, Escalvado,
  Minhocas, Lagoa do Mato, Piripiri), citadas em lista sem paróquia definida.
- O site da diocese mostra a Paróquia N. S. das Mercês de Avelino Lopes em
  duas páginas (17 com horário, 44 vazia); vale avisar a Pascom.
