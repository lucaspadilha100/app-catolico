# Diocese de São José dos Pinhais (PR): fontes da pesquisa de 13/11/2026

Sé em São José dos Pinhais; região metropolitana sul e leste de Curitiba e o
sul do Paraná até Rio Negro (14 municípios). Bispo: Dom Celso Antônio
Marchiori. Cúria: Rua Mendes Leitão, 2694, Centro, (41) 3035-9800,
diocese@diocesesjp.org.br (página da diocese no site do Regional Sul 2 da
CNBB). Padroeiro diocesano: São José.

## Resumo

- **38 unidades** em `saida/sao-jose-dos-pinhais.json`: 1 catedral e 37
  paróquias. Cidades: São José dos Pinhais (13), Araucária (4), Fazenda Rio
  Grande (4), Lapa (3, uma delas no distrito de Mariental), Piraquara (3),
  Contenda (2, uma no distrito de Catanduvas do Sul), Rio Negro (2) e uma em
  Agudos do Sul, Campo do Tenente, Mandirituba, Piên, Quatro Barras,
  Quitandinha e Tijucas do Sul.
- **7 com horário de missa** (5 com confiança alta, 2 média), todos tirados
  de sites próprios das paróquias: Catedral de São José, Nossa Senhora do
  Monte Claro e Senhor Bom Jesus (São José dos Pinhais), São Gabriel da Virgem
  Dolorosa (Fazenda Rio Grande), Santo Antônio (Lapa, com o Santuário de São
  Benedito e 31 capelas), Nossa Senhora do Perpétuo Socorro e Nossa Senhora
  dos Remédios (Araucária; médias).
- **31 sem horário** (confiança baixa, `horarios: []`), listados em
  `SEM-HORARIO-sao-jose-dos-pinhais.txt`.
- Todo `id_banco` é null.

## O problema desta diocese: o site está fora do ar

https://www.diocesesjp.org.br (e qualquer caminho dele, inclusive
`/wp-json/`, `/paroquias/` e `/sitemap.xml`) devolve só a página "Estamos em
manutenção", com endereço e telefone da cúria. A intranet
(diocesesjp.net.br) pede senha. Nenhum subdomínio óbvio responde. Sem busca
na web nesta sessão, não houve como achar outra lista oficial.

Por isso:

- **A lista veio do GCatholic** (https://gcatholic.org/churches/local/zjosD,
  atualizado em 09/11/2026): 38 igrejas com marca de paróquia (a Catedral, o
  Santuário Nossa Senhora dos Remédios de Araucária e 36 igrejas paroquiais).
- **A lista provavelmente está incompleta.** As estatísticas do anuário no
  próprio GCatholic dão 42 paróquias em 2022 (eram 35 em 2013, 38 em 2015 a
  2018, 41 em 2020 e 2021). Faltam umas 4 paróquias criadas nos últimos anos,
  cujo nome não se achou. É a primeira pendência para a próxima rodada.
- As duas Paróquias Nossa Senhora Aparecida de São José dos Pinhais têm o
  mesmo nome; a observação distingue pelo ano de criação e pelo número do
  GCatholic (55772, de 2003; 55773, de 1982). Uma delas é a do bairro Xingu.
- Ficaram fora: Mosteiro Trapista Nossa Senhora do Novo Mundo (Campo do
  Tenente), que é mosteiro, e a "Capela das Aparições de Nossa Senhora da Rosa
  Mística" (São José dos Pinhais), que o GCatholic lista como santuário e
  que não é unidade pastoral.
- O Santuário de São Benedito (Lapa), que o GCatholic lista sem marca de
  paróquia, entrou como igreja da Paróquia Santo Antônio da Lapa, como diz o
  site dessa paróquia.
- Setores pastorais: a diocese não publica. O blog da Pastoral Familiar
  diocesana (https://pastoralfamiliarsjpinhais.blogspot.com, 2016 a 2018) põe
  no setor 3 as paróquias da cidade de São José dos Pinhais: Catedral, Fátima,
  Monte Claro, São Pedro, Bom Jesus, São Cristóvão, Santo Antônio, São Marcos
  e Sagrado Coração; isso está na observação dessas paróquias.

## Sites de paróquia usados (lidos em 13/11/2026)

Os sites que o GCatholic cita e mais os achados por nome de domínio,
conferidos pelo conteúdo (cidade, endereço e diocese):

- **Catedral de São José**: https://www.catedralsaojose.com.br/horarios/
  (revisada em 04/11/2025) e /capela/ (11/11/2025, Capela Sagrado Coração de
  Jesus, bairro São Domingos). WhatsApp da secretaria e Instagram catedralsjp.
  O telefone fixo (41) 3282-0243 é do GCatholic.
- **Nossa Senhora do Monte Claro**: https://paroquiamonteclaro.org.br/
  (início revisado em 27/02/2026; capelas em 22/12/2025). As páginas das 5
  capelas e comunidades dão o lugar, não o horário.
- **Senhor Bom Jesus (SJP)**: https://bomjesussjp.com.br/horarios-diversos/
  (revisada em 01/12/2025). A agenda da página inicial, com datas de 10 a 16
  de novembro de 2026, confirma sábado 15h e 19h, domingo 8h, 10h30 e 19h e a
  missa de sábado 7h30 na Capelinha. De segunda a sexta a paróquia escreve
  "missa ou celebração": foi para o `nao_cabe`. A página da Capela Nossa
  Senhora de Guadalupe é de 2019 (domingo 9h15) e não foi usada para horário.
- **São Gabriel da Virgem Dolorosa (Fazenda Rio Grande)**:
  https://www.paroquiasaogabrielfrg.com.br/horarios e as páginas das duas
  capelas (bairro Iguaçu), site de 2026.
- **Santo Antônio (Lapa)**: https://santoantoniolapa.com.br/agenda-das-celebracoes
  (revisada em 19/09/2026); capelas em /capelas-da-paroquia-santo-antonio-da-lapa
  (09/01/2025, 31 capelas em 7 setores, com a comunidade); contato em /contato.
  A quarta-feira do Perpétuo Socorro tem oito horários de "missa e novena ou
  celebração e novena": foi para o `nao_cabe`. As capelas têm escala mensal
  nas redes sociais.
- **Nossa Senhora do Perpétuo Socorro (Araucária)**:
  https://www.perpetuosocorroaraucaria.com/ (comunidades e contato). Os
  horários da matriz (quarta, quinta e sábado 19h; domingo 9h30) foram tirados
  da "Programação Junho 2026" em PDF ligada na página inicial, onde se repetem
  toda semana: confiança média. As 16 comunidades entraram só com o lugar.
- **Nossa Senhora dos Remédios (Araucária)**:
  https://www.santuariodosremedios.com.br/novo/expediente/expediente1.html
  (Last-Modified 29/10/2023): confiança média. A página de comunidades do
  mesmo site tem fotos de 2012 (Campina das Palmeiras, Campo Redondo, Espigão
  Alto, Fazendinha, Fonte Nova, Jardim Iguaçu, Mato Dentro, Onças, Palmital,
  São Sebastião/Tindiquera, Seminário, Tietê) e não entrou no JSON: Araucária
  ganhou paróquias depois disso, e não se sabe quais comunidades continuam
  nesta paróquia. Fica como pendência.

Sites citados pelo GCatholic que não responderam em 13/11/2026:
matrizsaocristovao.com.br (São Cristóvão, SJP) e paroquiasaopedrosjp.com.br
(São Pedro, SJP). O sementesdoreino.com.br, citado para os Remédios, abre o
mesmo site do santuário.

## Conferência da lista

- https://gcatholic.org/dioceses/diocese/zjosD.htm (estatísticas: 42
  paróquias em 2022)
- https://gcatholic.org/churches/local/zjosD e as 41 páginas de igreja
  (https://gcatholic.org/churches/brazil/<número>, citadas no campo `fontes`):
  data de criação, endereço e site de algumas.
- https://cnbbs2.org.br/arquidiocese/sao-jose-dos-pinhais/ (cúria e bispo)

## O que falta para o próximo estado desta pesquisa

- Ler o site da diocese quando voltar do ar: lista oficial com as cerca de 42
  paróquias (achar as 4 que faltam), setores, contatos e horários.
- Horários das 31 paróquias sem horário (perfis citados: Facebook
  saosebastiaosjp, pascompnsdc em Agudos do Sul, paroquiaimaculada em
  Catanduvas do Sul; os demais sem perfil citado).
- Bairro e endereço das matrizes sem endereço.
- Comunidades da Paróquia dos Remédios (Araucária), lista de 2012.
- Qual das duas paróquias Nossa Senhora Aparecida de SJP é a do Xingu.
