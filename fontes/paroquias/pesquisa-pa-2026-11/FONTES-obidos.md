# Diocese de Óbidos (PA): fontes da pesquisa de 13/11/2026

Nome atual: **Diocese de Óbidos**. Prelazia de 1957 a 09/11/2011, quando
virou diocese; sufragânea de Santarém desde 06/11/2019 (GCatholic,
atualizado em 09/11/2026, e Catholic-Hierarchy). Bispo: Dom Bernardo
Johannes Bahlmann, OFM. Padroeira: Sant'Ana. Residência episcopal: Praça
Frei Rogério, 239, Óbidos, CEP 68250-000, (93) 3547-1296. Municípios:
Óbidos, Alenquer, Curuá, Oriximiná, Juruti, Terra Santa e Faro.

## Resumo

- **12 unidades** em `saida/obidos.json`: 1 catedral, 10 paróquias e 1 área
  missionária (Maria Imaculada, Porto Trombetas, Oriximiná).
- **1 com horário** (Catedral de Sant'Ana, confiança alta, pelo site da
  própria catedral). **11 sem horário** (baixa), em `SEM-HORARIO-obidos.txt`.
- Todo `id_banco` é null. Nenhuma unidade tem forania conhecida.

## A dificuldade

O site oficial, **diocesedeobidos.com.br** (citado pelo GCatholic e pela
Wikipédia), não respondeu em 13/11/2026: o proxy chegou a resolver o nome,
mas não conseguiu conectar (testado cinco vezes ao longo do dia, também com
www, http, .org e .org.br). Sem ele, a lista veio do GCatholic e da
Wikipédia, e os horários só da catedral. Vale tentar de novo numa próxima
sessão: o site deve trazer a lista oficial e, talvez, horários.

## Fontes usadas

- https://catedraldeobidos.com.br/horarios/ (página da Pascom da catedral,
  modificada em 18/10/2025; lida pela API do WordPress,
  `/wp-json/wp/v2/pages/61`): missas de domingo às 7h, 9h30 e 19h, segunda e
  sexta às 18h; Santíssimo exposto aos sábados das 8h às 11h; confissões
  "todo sábado às 8h/9h/10h"; WhatsApp da Pascom (93) 99215-6954. O resto do
  site ainda é o tema de demonstração.
- https://gcatholic.org/churches/local/obid0 e as páginas de cada igreja
  (`/churches/brazil/<id>`, ids no campo `fontes`): 44 igrejas, 11 marcadas
  como paróquia (uma em duplicata) mais a catedral; endereço só da catedral
  (Rua Dr. Eloy Simões, 762) e da matriz de Alenquer (Travessa Santo Antônio).
- https://gcatholic.org/dioceses/diocese/obid0.htm: 13 paróquias nas
  estatísticas de 2021.
- https://pt.wikipedia.org/wiki/Diocese_de_%C3%93bidos (lida pela API):
  "11 paróquias e 1 área missionária", com a lista por cidade.
- https://diocesedeobidos.blogspot.com/ (blog antigo da diocese, 2011 a
  2014, pelo feed do Blogger): em 2013 havia a Área Missionária São Francisco
  de Assis (Óbidos), hoje Paróquia São Francisco e Santa Clara, e a Área
  Missionária Santa Terezinha do Menino Jesus (Tabatinga); o menu cita a
  "Missão Tiriyó".
- https://www.catholic-hierarchy.org/diocese/dobid.html (história e
  endereço).

## Divergências e decisões

- A Wikipédia põe a Paróquia São João Batista em Curuá; o GCatholic a põe
  em Faro (coordenada a 4 km de Nhamundá). Ficou Faro.
- A Wikipédia lista "São Sebastião (Juruti)"; o GCatholic dá a igreja em
  Tabatinga, 37 km a leste da sede de Juruti. Ficou Juruti, localidade
  Tabatinga.
- O GCatholic tem duas igrejas "Santa Isabel" marcadas como paróquia em Terra
  Santa (72085 e 116912, a 660 m uma da outra). Entrou uma só paróquia.
- O GCatholic chama a catedral de "Catedral Metropolitana"; Óbidos não é
  arquidiocese. Ficou "Catedral de Sant'Ana", como no site dela.
- Diferença de contagem: GCatholic (2021) fala em 13 paróquias; a Wikipédia
  e a lista de igrejas do GCatholic dão 11 (com a catedral) mais a área
  missionária. Pode haver paróquia nova que só o site da diocese mostraria
  (Alenquer e Oriximiná, as maiores cidades, têm uma paróquia cada nas
  fontes lidas).

## Pendências

- **Missão Tiriyó** (indígena, norte do município de Óbidos): só aparece no
  menu do blog de 2011; não entrou no JSON.
- Igrejas do GCatholic sem paróquia indicada (não entraram no JSON):
  - Alenquer: N. S. de Fátima, N. S. de Nazaré, N. S. do Perpétuo Socorro do
    Planalto, Santa Bárbara, Santa Isabel da Hungria, Santa Rita de Cássia,
    Santo Expedito (Jardim da Praia), São Benedito, São Cristóvão, São
    Francisco de Assis, São João Batista, São José, São Pedro, São Raimundo
    Nonato, São Sebastião, Capela do Hospital Santo Antônio e Capela da Casa
    Paroquial; arredores: Santa Luzia (Fazendinha), N. S. da Conceição (Vila
    Andrade), São Miguel Arcanjo (Grande Vitória), N. S. do Perpétuo Socorro
    (Curumu-Ipanema).
  - Oriximiná: N. S. das Graças, N. S. de Fátima, N. S. de Guadalupe, N. S.
    do Perpétuo Socorro, Santa Terezinha, São Benedito, São Francisco, São
    José.
  - Terra Santa: São Francisco de Assis, São José Operário.
- Contatos e endereços de todas as paróquias, menos a catedral.
- Horários: buscar, na rodada com busca na web, o Instagram de cada
  paróquia (nenhum perfil foi citado por fonte oficial) e tentar de novo o
  site da diocese.
