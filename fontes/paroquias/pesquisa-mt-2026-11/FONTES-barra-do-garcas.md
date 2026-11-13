# Diocese de Barra do Garças (MT): fontes da pesquisa de 13/11/2026

Sé em Barra do Garças (Catedral Nossa Senhora da Guia); leste de Mato
Grosso. Bispo: Dom Paulo Renato Fernandes Gonçalves de Campos. Cúria: Rua
Carlos Gomes, 567, Campinas, Barra do Garças, CEP 78600-172, (66)
3401-9025, curia@diocesebarradogarcas.org.br. Padroeira: Nossa Senhora da
Guia.

## Resumo

- **21 unidades pastorais** em `saida/barra-do-garcas.json`: 1 catedral, 1
  santuário diocesano que é paróquia (Nossa Senhora das Graças, Nova
  Xavantina) e 19 paróquias, em 4 foranias (Norte, Central, Sul e
  Indígena). Cidades: Barra do Garças (5), General Carneiro (3), Nova
  Xavantina (3) e uma em cada: Pontal do Araguaia, Araguaiana, Araguainha,
  Ponte Branca, Ribeirãozinho, Torixoréu, Água Boa, Cocalinho, Nova Nazaré e
  Canarana.
- **19 com horário de missa** (18 alta, 1 média). Fonte: o quadro "Horários
  de Missa" do site da diocese, com um registro por igreja (99 registros,
  quase todos de julho a outubro de 2026), ligado à paróquia por uma
  taxonomia.
- A média é a **São Francisco de Assis** (Barra do Garças): o quadro tem
  entradas de setembro de 2025 e de julho de 2026 para as mesmas
  comunidades (a de 2026 já organizada em áreas pastorais). Valeu a de 2026;
  as de 2025 sem par entraram (Guadalupe, Vale dos Sonhos) ou foram para o
  `nao_cabe` (missas em bairros sem igreja nomeada).
- **2 sem horário**: Nossa Senhora da Piedade (Araguaiana), que avisa no
  próprio quadro não ter horário fixo por causa das missões rurais; e a
  Paróquia Pessoal do Povo Xavante (São Domingos Sávio), sem horário
  publicado.
- **39 capelas e comunidades** com nome e lugar (bairro, aldeia, assentamento
  ou fazenda), quase todas com horário. As sem lugar na fonte ficaram, com o
  horário, no `nao_cabe` da matriz.
- Todo `id_banco` é null.

## Lista das unidades

A página "Paróquias" do site lista 21 unidades, e a página "Forania" as
reparte (pela ordem das colunas): Norte (São Sebastião e Nossa Senhora das
Graças de Nova Xavantina, Água Boa, Cocalinho, Nova Nazaré, Canarana);
Central (Catedral, Auxiliadora, Santo Antônio e São Francisco de Barra do
Garças, Pontal do Araguaia); Sul (Araguaiana, Bom Jesus da Lapa de General
Carneiro, Araguainha, Ponte Branca, Ribeirãozinho, Torixoréu); Indígena
(Sagrado Coração de Meruri e Paredão, São José de Sangradouro, Nossa
Senhora Auxiliadora de São Marcos, São Domingos Sávio do Povo Xavante).

Conferência: o GCatholic (24 igrejas, "20 parishes", 09/11/2026) tem as
mesmas paróquias; as três igrejas de Nova Xavantina sem marca de paróquia
(Bom Jesus, Nossa Senhora da Guia, São José) são capelas desta lista. A
CNBB Regional Oeste 2 fala em 19 paróquias (contagem antiga).

**Paróquia São Domingos Sávio**: a Diocese de Primavera do Leste-Paranatinga
também a lista (Paróquia Missionária Itinerante, Forania Diác. Wilton
Alves). Entrou só aqui; endereço (Casa Beato Filipe Rinaldi, Praça Dom
Bosco, 10, Xavantina Velha) e telefone vêm da página de Primavera.

## Páginas do site da diocese (lidas em 13/11/2026)

⚠ O site tem páginas pichadas ("Hacked by ...") criadas por invasores; nada
delas foi usado. As páginas de paróquia e o quadro de horários são do
conteúdo normal do site.

- https://diocesebarradogarcas.org.br/horarios-de-missa/ (o quadro carrega
  sob demanda; lido pela mesma chamada que a página faz, com o filtro de
  paróquia do próprio site, uma paróquia por vez)
- `/wp-json/wp/v2/horarios-das-missas` (99 registros, com a data de
  modificação de cada um) e `/wp-json/wp/v2/paroquias` (as 20 paróquias da
  taxonomia; a São Domingos Sávio não tem horário cadastrado)
- https://diocesebarradogarcas.org.br/paroquias/ e
  https://diocesebarradogarcas.org.br/forania/ (lista e foranias)
- Páginas de paróquia de março de 2023 (endereço, telefone, e-mail e
  horários antigos; os horários foram trocados pelos do quadro de 2026, e os
  bairros das capelas vieram delas), por exemplo
  https://diocesebarradogarcas.org.br/paroquia-sao-sebastiao/ e
  https://diocesebarradogarcas.org.br/paroquia-sao-francisco-de-assis/
- https://diocesebarradogarcas.org.br/curia-diocesana/

## Observações

- Em 2023 as capelas do centro de Nova Xavantina eram listadas na página da
  São Sebastião; no quadro de 2026 a maioria está ligada ao Santuário Nossa
  Senhora das Graças. O JSON segue 2026.
- Água Boa, Sangradouro e São Marcos não têm página de paróquia: sem
  contatos. Nova Nazaré e Cocalinho só têm endereço.
- Celebração da Palavra (Pontal do Araguaia, quarta) não entrou como missa.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/barr2.htm e
  https://gcatholic.org/churches/local/barr2
- https://cnbbo2.org.br/diocese-de-barra-do-garcas/

## O que falta para o próximo estado desta pesquisa

- Contatos de Água Boa, Sangradouro, São Marcos e do Santuário de Nova
  Xavantina.
- Bairro das comunidades que a fonte dá sem lugar (no `nao_cabe`).
- Horários de confissão (só aparecem em Pontal do Araguaia).
