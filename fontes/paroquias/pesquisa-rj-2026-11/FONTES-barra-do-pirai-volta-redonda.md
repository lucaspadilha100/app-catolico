# Diocese de Barra do Piraí-Volta Redonda (RJ): fontes da pesquisa de 13/11/2026

Sé em Barra do Piraí (Catedral Senhora Sant'Ana); Médio Paraíba fluminense.
Bispo: Dom Luiz Henrique da Silva Brito. Cúria: Rua Vinte e Cinco B, 44, Vila
Santa Cecília, Volta Redonda, (24) 3340-2801 e (24) 99211-8414,
comunicacao@diocesebpvr.org. Municípios (página institucional da diocese):
Volta Redonda, Barra do Piraí, Resende, Barra Mansa, Itatiaia, Quatis, Porto
Real, Rio Claro, Pinheiral, Mendes, Engenheiro Paulo de Frontin e Piraí.

## Resumo

- **38 unidades pastorais** em `saida/barra-do-pirai-volta-redonda.json`: 1
  catedral (Senhora Sant'Ana, Barra do Piraí), 1 santuário com paróquia (Nossa
  Senhora das Graças e da Medalha Milagrosa, Volta Redonda) e 36 paróquias, em
  4 vicariatos: Volta Redonda (12), Barra do Piraí (9), Resende (9) e Barra
  Mansa (8). Cidades: Volta Redonda (10), Barra Mansa (6), Resende (5), Barra
  do Piraí (4), Piraí (3), Rio Claro, Itatiaia e Engenheiro Paulo de Frontin
  (2 cada), Mendes, Quatis, Porto Real e Pinheiral (1 cada).
- **23 com horário de missa** (confiança alta), todos da página de cada
  paróquia no site da diocese (bloco "Missas na Paróquia ..."), que bate com a
  página geral "Horário das Missas". As páginas não têm data; foram lidas em
  13/11/2026. Nenhuma traz confissão nem adoração.
- **15 sem horário** (`"horarios": []`, confiança baixa), porque a página da
  diocese deixa o bloco de missas vazio: São Paulo Apóstolo, São Sebastião e
  N. S. de Lourdes e São Jorge (Volta Redonda); N. S. da Piedade e Santo
  Antônio de Lídice (Rio Claro); N. S. das Dores (Porto Real); N. S. da
  Conceição (Resende); São José (Itatiaia); São Benedito e N. S. das Dores de
  Dorândia (Barra do Piraí); Santo Antônio e Santa Clara de Assis (Barra
  Mansa); São João Batista e N. S. da Conceição de Sacra Família (Engenheiro
  Paulo de Frontin); São João Batista de Arrozal (Piraí).
- **331 comunidades** ligadas à paróquia que a própria diocese indica (cada
  comunidade tem página com a paróquia, rua, bairro e cidade). A comunidade
  que é a própria matriz não foi repetida. Só uma comunidade tem horário na
  fonte: Sagrado Coração de Jesus (Itapuca, Paróquia Sagrada Família de
  Resende), domingo 7h e 19h e quarta 19h30.
- Todo `id_banco` é null.

## Lista das unidades

Fonte da lista: https://diocesevr.com.br/paroquia ("Nossas Paróquias", 40
entradas, filtradas por vicariato). Entraram as 38 paróquias e o santuário. As
duas **capelanias** listadas ficaram fora, porque não são paróquia nem cabem
nas categorias do formato:

- Capelania Militar Nossa Senhora das Graças, AMAN (Resende, Vicariato de
  Resende): é do Ordinariado Militar; a página não tem telefone, e-mail,
  horário nem comunidades.
- Capelania Pessoal Nossa Senhora do Perpétuo Socorro (Rua Doutor Miguel
  Couto, 78, Jardim Amália I, Volta Redonda, Vicariato de Volta Redonda):
  página sem telefone, e-mail ou horário. Se o app quiser capelanias pessoais,
  ela entra numa próxima leva.

Conferência contra o GCatholic (https://gcatholic.org/churches/local/barr3,
atualizado em 09/11/2026, 39 igrejas; estatística de 2021: 29 paróquias):

- Todas as paróquias do GCatholic estão na lista da diocese, com duas
  divergências:
  - **Vargem Alegre, Sagrada Família (Parish)**: a diocese não tem essa
    paróquia. Vargem Alegre aparece com duas comunidades da Paróquia N. S. das
    Dores de Dorândia (São Benedito, Vila Nova, e São José). Seguimos a
    diocese.
  - **Co-catedral**: o GCatholic marca Santa Cecília de Volta Redonda como
    co-catedral; o site da diocese chama de co-catedral a Paróquia Nossa
    Senhora da Conceição (Conforto, Volta Redonda). Seguimos a diocese: a
    Conceição entrou como `paroquia` com o nome "Paróquia Co-Catedral Nossa
    Senhora da Conceição".
- A diocese tem paróquias que o GCatholic não lista: Cristo Ressuscitado
  (Itatiaia), Senhor Bom Jesus e N. S. de Lourdes e São Jorge (Volta
  Redonda), Santa Clara de Assis (Barra Mansa), São João Batista de Arrozal e
  Santa Teresinha de Santanésia (Piraí), N. S. das Dores de Dorândia (Barra
  do Piraí), N. S. da Conceição de Sacra Família (Engenheiro Paulo de
  Frontin). O "Sagrado Coração de Jesus (Shrine)" de Floriano no GCatholic é a
  Paróquia Coração Eucarístico de Jesus, cuja matriz é o Santuário Coração
  Eucarístico de Jesus.
- A diocese não publica a contagem de paróquias no site; a contagem é a da
  própria lista.

## Decisões de nome e de igreja matriz

- Nomes sem a cidade nem o distrito do título da diocese ("Paróquia Santo
  Antônio - Lídice" virou "Paróquia Santo Antônio", com Lídice na localidade).
- Paróquia Coração Eucarístico de Jesus (Floriano, Barra Mansa): matriz é o
  santuário, `tipo` "santuario".
- Paróquia Sagrada Família (Resende): a página diz "Horário de Missa, Igreja
  de Nossa Senhora da Paz", e a comunidade N. S. da Paz fica no endereço da
  paróquia; a matriz entrou como Igreja de Nossa Senhora da Paz.
- Paróquia Cristo Ressuscitado (Itatiaia): o endereço da matriz é o da
  comunidade "Matriz Cristo Ressuscitado" (Av. Cel. Napoleão Duarte), não o da
  secretaria (Rua Doutor Silveira).
- "Paróquia São Sebastião e área pastoral de Penedo - Serra de Mauá" virou
  "Paróquia São Sebastião e Área Pastoral de Penedo e Serra de Mauá" (matriz
  em Campos Elíseos, Resende).
- Comunidade com lugar no nome ("São Sebastião - Mauá", "Igreja São José
  Operário - Barbará") ficou com o lugar na localidade.

## Contatos

- Telefone e e-mail copiados da página de cada paróquia. O site põe o ícone
  do WhatsApp ao lado do telefone; número de celular foi também para
  `whatsapp`, número fixo só para `telefone`.
- E-mails copiados como publicados, inclusive dois com ".com.br" depois de
  gmail, que parecem erro da fonte: contatoparoquiasaoluisgonzaga@gmail.com.br
  (São Luís Gonzaga, Volta Redonda) e paroquiansp@gmail.com.br (N. S. da
  Conceição, Pinheiral).
- Sem telefone publicado: Cristo Ressuscitado (Itatiaia) e Santa Clara de
  Assis (Barra Mansa, também sem e-mail).
- Instagram só do Santuário N. S. das Graças (santuariomarianovr), visto no
  trecho da busca, que repete os horários de segunda a sábado do site da
  diocese. As páginas da diocese não trazem o Instagram das paróquias.

## Endereços das comunidades

Vêm do cadastro da diocese, que parece preenchido com ajuda de mapa: há
cidades trocadas (Bananal - SP, Mangaratiba, Campos dos Goytacazes, Parapeúna,
Bocaina de Minas, Visconde de Mauá). Quando a cidade da comunidade não é um
dos 12 municípios da diocese, ficou a cidade da paróquia. Comunidades em
bairros vizinhos de outro município da diocese (ex.: comunidades da Co-Catedral
em Barra Mansa, da São Luís Gonzaga em Barra do Piraí) ficaram como a fonte
diz. Endereço "Unnamed Road", "-" ou repetido foi limpo; sem rua, ficou vazio.

## Páginas lidas (13/11/2026)

- https://diocesevr.com.br/paroquia (lista oficial com vicariato)
- https://diocesevr.com.br/paroquia/<n>/<nome> (uma por paróquia: endereço,
  telefone, e-mail, clero, missas e comunidades; URL no campo `fontes`)
- https://diocesevr.com.br/missa (todas as missas numa página)
- https://diocesevr.com.br/comunidade e https://diocesevr.com.br/comunidade/<n>/<nome>
  (353 páginas de comunidade; duas repetidas e as matrizes não entraram)
- https://diocesevr.com.br/institucional (municípios da diocese)
- https://www.instagram.com/santuariomarianovr/ (só o trecho da busca)

A página inicial do site às vezes devolve uma tela de espera anti-robô; as
páginas internas abrem normalmente.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/barr3.htm
- https://gcatholic.org/churches/local/barr3

## O que falta para o próximo estado desta pesquisa

- Horários das 15 paróquias sem missa no site da diocese, e de confissão e
  adoração em todas. Os sites próprios citados nos e-mails
  (paroquiasaosebastiaovr.com.br) não abriram; a busca não achou páginas das
  paróquias com horário.
- Instagram das paróquias (a busca só achou o do santuário).
- Decidir se capelanias (militar e pessoal) entram no app.
