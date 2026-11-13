# Diocese de Picos (PI): fontes da pesquisa de 13/11/2026

Sé em Picos, centro-sul do Piauí; padroeira Nossa Senhora dos Remédios.
Bispo: Dom Plínio José Luz da Silva. Cúria (Centro de Pastoral): R. Padre
Madeira, São Sebastião, Picos, (89) 3422-1961, pascom@dp15.com. Site:
https://dp15.com.

## Resumo

- **31 unidades pastorais** em `saida/picos.json`: 1 catedral, 27 paróquias
  e 3 áreas pastorais (Nossa Senhora Aparecida em Geminiano, São João Batista
  em Alagoinha do Piauí, Sagrado Coração de Jesus em Caridade do Piauí), em 8
  zonais (I a VIII).
- **5 com horário de missa** (4 alta, 1 média), todos da página da própria
  unidade no site da diocese: Catedral (diária), São Francisco de Assis do
  Junco (matriz e 11 capelas, com semana do mês), Acauã, Alagoinha do Piauí e
  Geminiano (média: o sábado vem da página da Paróquia São Francisco de
  Assis, de que Geminiano era o Setor III). As outras 26 páginas têm o campo
  "Horários de Missa" vazio: entraram com `horarios: []` e confiança baixa.
- **646 capelas e comunidades**, ligadas à paróquia que a página indica. Com
  padroeiro na fonte: "Capela de <padroeiro>", localidade = o lugar. Sem
  padroeiro: "Comunidade <lugar>". A cidade é a da sede da paróquia, salvo
  quando a página separa por município (Aroeiras do Itaim, Massapê do Piauí,
  Vera Mendes, Caldeirão Grande do Piauí, Vila Nova do Piauí) ou marca a
  comunidade como "(cidade)" (Sussuapara, Belém do Piauí, Jacobina do Piauí,
  Francisco Macedo, São Luís do Piauí, Wall Ferraz, Paquetá). Muitas
  comunidades rurais podem estar em município vizinho.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do tipo de conteúdo `paroquia` do site da diocese
(`/wp-json/wp/v2/paroquia`, 31 itens) com a taxonomia `local_paroquia`
(Zonal I a VIII), e das 31 páginas individuais, que trazem zonal, data de
criação, festa do padroeiro, telefone, e-mail, endereço, horários e
comunidades.

Contagem da diocese: notícia de 27/10/2024 ("27 paróquias e 4 áreas
pastorais, 42 municípios, 600 comunidades"). Depois disso a Área Pastoral
Nossa Senhora do Carmo (Picos) virou paróquia (criada em 16/06/2025,
instalada em 16/07/2025): 28 paróquias contando a Catedral e 3 áreas = 31,
como no site.

Conferência contra o GCatholic (13/11/2026; "27 parishes, 9 missions", 25
igrejas listadas): as 25 batem. Faltam no GCatholic: Nossa Senhora do Carmo
(Picos, 2025), São Julião, São José do Piauí, e as áreas de Geminiano,
Alagoinha do Piauí e Caridade do Piauí. O GCatholic lista Acauã, Curral Novo
do Piauí e São João da Canabrava sem marca de paróquia; o site da diocese os
dá como paróquias.

Divergência de zonal: a página da Paróquia São José Operário (Picos) diz Zonal
VI, mas a taxonomia do site a põe no Zonal I (o da cidade de Picos, com a
Catedral, São Francisco de Assis e Nossa Senhora do Carmo). Seguimos a
taxonomia.

Unidades internas citadas nas páginas, sem página própria (ficaram como
comunidades da paróquia que as cita, sem virar unidade):
- "Área Pastoral São José", de Caldeirão Grande do Piauí, dentro da lista da
  Paróquia São Cristóvão (Marcolândia).
- Wall Ferraz e Paquetá, marcadas "(ÁREA PASTORAL)" na lista da Paróquia
  Senhora Sant'Ana (Santa Cruz do Piauí).

## Páginas do site da diocese (lidas em 13/11/2026)

- https://dp15.com/paroquias/ (lista com filtro por zonal)
- https://dp15.com/wp-json/wp/v2/paroquia (os 31 itens) e
  https://dp15.com/wp-json/wp/v2/local_paroquia (os 8 zonais)
- Uma página por unidade em https://dp15.com/paroquia/<slug>/ (URLs no campo
  `fontes`). Exemplos:
  - https://dp15.com/paroquia/paroquia-nossa-senhora-dos-remedios-catedral/
    (horários: segunda a sábado 19h; domingo 9h, 17h e 19h; dia 13 às 12h)
  - https://dp15.com/paroquia/paroquia-sao-francisco-de-assis/ (horários da
    matriz e das capelas)
- Notícias usadas: https://dp15.com/diocese-de-picos-celebra-50-anos-de-criacao/
  (contagem), https://dp15.com/diocese-de-picos-instala-nova-paroquia-na-cidade-de-picos/
  (Nossa Senhora do Carmo), https://dp15.com/igreja-nossa-senhora-das-merces-reabre-as-portas-apos-quase-dois-anos-interditada-em-jaicos-pi/
- https://dp15.com/contato/ (cúria)

Contatos: telefone e e-mail como publicados na página da unidade; o WhatsApp
é o do botão "Nossas Redes Sociais" da mesma página (wa.me). E-mails com nome
de pessoa (Queimada Nova, Alagoinha do Piauí) não entraram. O telefone de
Francisco Santos está truncado na página; entrou só o WhatsApp. Instagram só
o da Paróquia do Junco (`paroquiadojunco`), linkado pela própria página; o
site paroquiadojunco.com.br não respondeu.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/pico0.htm e
  https://gcatholic.org/churches/local/pico0 (13/11/2026)

## O que falta para o próximo estado desta pesquisa

- Horários de 26 unidades: as páginas têm o campo vazio. Buscas no
  Instagram (só trecho de busca) não acharam os perfis das paróquias do
  interior. O aplicativo "Diocese de Picos" (Parresia) não foi lido.
- Comunidades com município incerto (rurais listadas sob a sede).
- Na lista da Catedral, Passagem Funda, Tinguis e Chapada dos Mirôs vêm logo
  depois do grupo de Aroeiras do Itaim, sem título: ficaram em Picos.
- A página da Paróquia Nossa Senhora do Carmo começa a lista do Setor 01 no
  item 2 (o item 1 falta).
