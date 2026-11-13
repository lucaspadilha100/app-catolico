# Diocese de Bragança do Pará (PA): fontes da pesquisa de 13/11/2026

Sé em Bragança, nordeste do Pará (antiga Prelazia do Gurupi, 1928, depois
Prelazia do Guamá; diocese desde 1979, nome atual desde 1981). Bispo: Dom
Raimundo Possidônio Carrera da Mata; eméritos Dom Jesus Maria Cizaurre
Berdonces e Dom Luís Ferrando (mora em Ulianópolis). Cúria: Praça da
Catedral, 368, Centro, Bragança, (91) 3425-1108,
secretario@diocesedebragancapa.org.br. Instagram da diocese:
diocesedebragancapa. Padroeira: Nossa Senhora do Rosário.

## Resumo

- **31 unidades** em `saida/braganca-do-para.json`: 1 catedral, 29 paróquias
  e 1 área pastoral (São José, Capitão Poço), em 5 regiões episcopais: Nossa
  Senhora do Rosário (9), São Francisco de Assis (8), Padre Marino Conti (5),
  Dom Luís Ferrando (5) e Dom Eliseu Coroli (4).
- **13 com horário de missa** (6 alta, 7 média), todos das páginas de
  paróquia do site da diocese. Média quando a página é de 2023 ou mistura
  quadro antigo (pandemia) com o normal, ou está incompleta (Rondon do Pará
  só tem os dias de semana).
- **18 sem horário** (confiança baixa): 12 paróquias não têm página no site
  e 6 têm página com o quadro de horários vazio.
- Duas matrizes santuário: N. S. do Perpétuo Socorro (Bragança) e Santo
  Antônio Maria Zaccaria (Capitão Poço), as duas dos barnabitas; entraram como
  `paroquia` com a primeira igreja de tipo `santuario`.
- 10 igrejas além das matrizes: a Igreja de São Benedito da Catedral (às
  margens do Rio Caeté), 6 comunidades urbanas do Sagrado Coração de
  Bragança e 3 de Rondon do Pará, todas com bairro ou quilômetro na fonte.
  As comunidades citadas sem bairro (Catedral, Viseu, Santa Luzia, Cristo
  Crucificado, Santa Helena de Rondon) ficaram no `nao_cabe` da matriz.
- Todo `id_banco` é null.

## Lista das unidades

1. Anuário Diocesano e Calendário 2025 (PDF de 84 páginas):
   https://novo.diocesedebragancapa.org.br/images/arquivos/Anurio_e_Calendrio_2025.pdf
   Seção 14 (regiões episcopais e suas paróquias) e seção 16 ("Paróquias
   (29)", por município, com endereço, telefone da secretaria e e-mail), mais
   2 áreas pastorais (São José de Capitão Poço e Santa Luzia de Paragominas,
   ambas de 2024). Total 31. O anuário retirou os telefones pessoais (LGPD).
2. A página "Anuário" do site (https://novo.diocesedebragancapa.org.br/index.php/pastorais/anuario)
   diz "31 Paróquias" e 5 regiões episcopais.
3. A lista "Paróquias" do site (https://novo.diocesedebragancapa.org.br/index.php/paroquias),
   com 19 páginas de paróquia; a de Santa Luzia de Paragominas (20/12/2025)
   já a chama de paróquia, fundada em 2025.
4. GCatholic (https://gcatholic.org/dioceses/diocese/brag1.htm e
   https://gcatholic.org/churches/local/brag1, 09/11/2026): 29 paróquias em
   2022, 27 igrejas. Bate com o anuário; faltam no GCatholic as mais novas
   (São João Batista de Bragança, Santa Teresinha e Santa Luzia de
   Paragominas, Área Pastoral São José, N. S. do Rosário de Curupaiti) e o
   GCatholic dá a de Itinga como Dom Eliseu (Itinga do Pará é distrito de Dom
   Eliseu). O GCatholic marca a matriz de Ourém como antiga catedral.

## Horários: as páginas de paróquia (lidas em 13/11/2026)

A data de cada fonte no JSON é a `dateModified` da página (Joomla).
- 732-rosario-catedral (13/02/2026): Catedral, missas, confissões, missas
  mensais nas comunidades.
- 735-perpetuo-socorro-braganca (28/03/2025), 127-cristo-crucificado
  (28/03/2025), 53-santa-luzia (07/08/2024), 76-sagrado-braganca (03/03/2024),
  82-santa-teresinha-do-menino-jesus (27/05/2026): alta.
- 79-nossa-senhora-aparecida2 (Rondon, 13/02/2026): só segunda a sexta.
- 81-nossa-senhora-de-nazare (Viseu), 36-nossa-senhora-da-divina-providencia,
  52-sagrado-ulianopolis, 80-nossa-senhora-da-piedade (Irituia),
  78-nossa-senhora-aparecida (Dom Eliseu), todas revistas em 19/04/2023, e
  77-sao-jose (Paragominas, 03/03/2024, pároco e endereço diferentes do
  anuário): média.
- Com quadro vazio: 733 (São Miguel Arcanjo, Augusto Corrêa; o slug diz
  "rosario-catedral-2"), 736 (São João Batista, Bragança), 737 (São
  Sebastião, Tracuateua), 728 (São Francisco, Açaiteua), 731 (N. S. do
  Rosário, Curupaiti), 2236 (Santa Luzia, Paragominas, só o cartão).

Leituras: no Sagrado Coração de Bragança o domingo da noite está "as 119h"
(lido como 19h). Em Dom Eliseu valeu o quadro "normal (fora da pandemia)";
as "missas semanais às 18h30" sem dia ficaram no `nao_cabe`. Em Irituia
valeu o quadro normal, e a confissão de quinta às 16h saiu do quadro de
atendimento dos padres. Em Rondon a missa de segunda é "Missa/Celebração da
Palavra" e ficou no `nao_cabe`.

## Contatos

Telefone e e-mail do anuário 2025 (o da secretaria). Quando a página da
paróquia é mais nova e dá outro número, valeu a página e o outro número foi
para a observação (Catedral: página 3425-4520, também WhatsApp; anuário
3425-1520). WhatsApp só quando a fonte diz "zap" ou WhatsApp. O celular do
padre em Itinga não entrou. Instagram só os citados nas páginas da diocese:
pccrucificado.oficial, paroquia_desantaluzia, paroquiaviseu,
paroquiadeirituia, paroquiasantateresinhapgm, paroquiaderondon.

Sites de paróquia citados pela diocese e que não responderam em 13/11/2026:
paroquiaviseu.com, paroquiadeirituia.com.br, saojosepgm.com.br/psj/.

## Outras leituras

- Notícia de 04/11/2026 (transferências de padres para 2027):
  https://novo.diocesedebragancapa.org.br/index.php/noticias/noticias-da-diocese/2357-diocese-de-braganca-anuncia-transferencias-de-padres-para-o-ano-de-2027
  Não cria nem fecha paróquia. Cita o envio de dois padres à Prelazia do
  Alto Xingu-Tucumã (PA).
- A busca do site por "horário de missa" não achou nada útil.

## O que falta para o próximo estado desta pesquisa

- Horários das 18 sem horário (lista em SEM-HORARIO-braganca-do-para.txt),
  sobretudo as 12 sem página no site: Aurora do Pará, Bonito, Cachoeira do
  Piriá, Capitão Poço (2), Itinga, Garrafão do Norte, Ipixuna do Pará, Mãe do
  Rio, Ourém, Sagrado Coração de Paragominas e São Miguel Arcanjo de São
  Miguel do Guamá.
- Sábado e domingo de Rondon do Pará.
- Reconferir as páginas de 2023 (Viseu, Nova Esperança do Piriá, Ulianópolis,
  Irituia, Dom Eliseu) e a de São José de Paragominas.
- As comunidades (1.158 no total, segundo o anuário) não estão listadas por
  nome e lugar em fonte da diocese.
