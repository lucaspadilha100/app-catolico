# Arquidiocese de Niterói (RJ): fontes da pesquisa de 13/11/2026

Sé em Niterói; Niterói, São Gonçalo, Leste Fluminense e Região dos Lagos.
Arcebispo: Dom José Francisco Rezende Dias; bispo auxiliar: Dom Geraldo de
Paula Souza, C.SS.R. Cúria: Rua Gavião Peixoto, 250, sobreloja, Icaraí,
Niterói, (21) 3602-1700 (anuário 2024; a página da CNBB Leste 1 dá
3601-1700), gabinete@arqnit.org.br. Padroeiro: São João Batista; padroeira
aeque principalis: Nossa Senhora Auxiliadora.

## Resumo

- **81 unidades pastorais** em `saida/niteroi.json`: 1 catedral, 1 basílica
  (Nossa Senhora Auxiliadora, Santa Rosa), 77 paróquias e 2 quase-paróquias
  (Santa Luzia e Nossa Senhora da Conceição de Engenho Pequeno, ambas em
  São Gonçalo), em 6 vicariatos: Niterói (20), São Gonçalo (16), Lagos (16),
  Alcântara (11), Oceânico (9) e Rural (9). Cidades: São Gonçalo (29),
  Niterói (23), Itaboraí (5), Cabo Frio (5), Araruama (4), Maricá (3), Rio
  Bonito (3), São Pedro da Aldeia (2), Saquarema (2) e uma em Tanguá, Silva
  Jardim, Arraial do Cabo, Iguaba Grande e Armação dos Búzios.
- **40 com horário de missa** (4 com confiança alta, 36 média); **41 sem
  horário** (confiança baixa, `horarios: []`, e a observação diz por quê).
- Confiança **alta**: horário lido no site da própria paróquia, com data
  recente ou atualizado (São Francisco Xavier e Porciúncula de Sant'Ana em
  Niterói, Santíssima Trindade em São Gonçalo, Nossa Senhora da Conceição
  do Centro de Rio Bonito).
- Confiança **média**: horário da página da paróquia no site da arquidiocese,
  sem data visível, lido pelo trecho que a busca devolve (ver "Dificuldade");
  e o Santuário das Almas (Icaraí), cujo site não data a lista de missas.
- 106 igrejas no total: além das matrizes, capelas só onde a fonte dá nome e
  bairro (São Francisco Xavier, Rio Bonito Centro com 10 capelas, Piratininga,
  Maricá, Itaipu, Porto das Caixas, Bacaxá, Búzios). Capelas sem bairro na
  fonte ficaram no `nao_cabe` da matriz, com os horários que a fonte dá.
- Todo `id_banco` é null: o banco ainda não tem nada do Rio de Janeiro.
- Vários nomes se repetem na mesma cidade (duas Paróquias Nossa Senhora
  Aparecida e duas Nossa Senhora da Conceição em São Gonçalo, duas Nossa
  Senhora da Conceição em Rio Bonito, duas São José, duas São Judas Tadeu,
  três Nossa Senhora de Fátima): o bairro em `localidade` as distingue.

## Dificuldade: o site da arquidiocese bloqueia leitura automática

- `arquidiocesedeniteroi.org.br` (o endereço esperado) redireciona para um
  domínio estranho (`d9ert.xyz`): não é da arquidiocese, não foi seguido.
- O site oficial é **arqnit.org.br** (link do GCatholic e da CNBB Leste 1),
  com o portal novo em `/portal/` e `/portalarqnit/` e o site antigo em
  **arqnit.org** (`/arqnit/` e `/arqnitfinal/`). Os dois domínios respondem
  com o desafio "Just a moment..." do Cloudflare a qualquer acesso
  automatizado, inclusive ao `wp-json`, ao sitemap e aos PDFs do anuário. O
  `robots.txt` também barra os robôs de IA. O desafio não foi contornado.
- Por isso os dados do site da arquidiocese foram lidos **só pelo trecho que a
  busca na web devolve** (resumo do buscador sobre a página indexada). Quando
  o trecho veio confuso (dia e local trocados, capelas misturadas), o horário
  ficou fora dos campos e foi para o `nao_cabe`, e a unidade ficou com
  confiança baixa (São Pedro de Alcântara, Porto das Caixas, Iguaba Grande).
- As páginas de paróquia do site antigo (arqnit.org) não têm data. Algumas
  têm cerca de um ano de atualização segundo a busca; outras passam de dez
  anos (São João Batista de Itaboraí, Santo Antônio de Bacaxá): essas duas
  não tiveram horário usado.
- Os e-mails das páginas da arquidiocese vêm protegidos pelo Cloudflare e não
  apareceram nos trechos em alguns casos (Caramujo, Engenhoca): sem o HTML,
  não deu para decodificar o `data-cfemail`.

## Lista das unidades

A lista vem da página "Municípios" do portal da arquidiocese
(https://arqnit.org.br/portalarqnit/municipios/, com o código P de cada
paróquia, data de criação, endereço, telefone e e-mail), lida por partes nos
trechos da busca, e das páginas de vicariato do site antigo (Niterói: 20
paróquias; Alcântara: 10 paróquias; Rural: 9 paróquias). Batida com:

- a Wikipédia em português (navbox por vicariato, 78 paróquias e 3
  quase-paróquias): fecha uma a uma;
- o GCatholic (https://gcatholic.org/churches/local/nite0, atualizado em
  09/11/2026, 84 igrejas; estatística de 2022: 78 paróquias): fecha, contando
  que "São José, Piratininga" do GCatholic é a mesma "São José, Cafubá" da
  Wikipédia e da arquidiocese, e que o "Santuário de Jesus Crucificado" é a
  matriz de Porto das Caixas;
- o anuário 2023 da arquidiocese (trecho da busca): "86 paróquias", sendo 78
  paróquias, 3 quase-paróquias e 5 paróquias militares. As **5 militares
  ficaram fora** (são do Ordinariado Militar, não da arquidiocese, e o trecho
  não as nomeia).
- Em 07/04/2024 a quase-paróquia São João Batista de La Salle (Itaipu) foi
  elevada a paróquia (notícia do portal, 11/04/2024): daí 79 paróquias e 2
  quase-paróquias. O anuário 2024 fala em "87 paróquias"; a diferença para
  79 + 2 + 5 = 86 não foi esclarecida pelos trechos (pendência).
- Busca por paróquias criadas em 2025 e 2026 no portal: nada encontrado.

Ficaram fora: o Seminário Arquidiocesano São José (Santa Rosa), a Nova
Catedral (em obras) e a Capela São João Paulo II do terreno da Nova Catedral
(anúncio de cerca de 2015).

## Sites de paróquia lidos direto (13/11/2026)

- https://www.paroquiasaofranciscoxavier.org.br/horarios-de-missas/ (horário
  em imagem do Jubileu 2025, matriz e 5 capelas com endereço) e
  `/secretaria-paroquial/`
- https://www.porciunculaniteroi.com.br/horarios-de-missas (grade no rodapé)
- https://santuariodasalmas.org.br/ e `/avisos/` (Santuário das Almas,
  Icaraí; o site `santuariodasalmas.com.br` é de outro santuário, em São
  Paulo, e não foi usado)
- https://sstrindade.org/ (cartaz `horarios-de-missas.png`, julho de 2026)
- https://pnsconceicao.org/ e `/comunidades/` (Rio Bonito, Centro: grade fixa
  e as 10 capelas com endereço)
- https://paroquiadebuzios.com.br/horarios-de-missas/ (só a agenda da
  semana; não virou horário fixo)
- https://paroquiasaosebastiaoitaipu.blogspot.com/ (blog de 2017; horários
  não usados, só os nomes das capelas)

Sites citados pela arquidiocese que não responderam: auxiliadoraniteroi.com,
paroquiadesaojudastadeu.org.br (desafio do Cloudflare),
maedivinaprovidencia.com.br, paroquiasantateresinha.org,
saosebastiaodeitaipu.com.br, paroquiauxiliadora.com, pnsaparecidagb.com.br,
vozdoamarante.com.br, paroquiasaopedrovp.com.br, paroquiadesaovicente.org,
paroquiasaocristovao.org.br, nazarethsaquarema.com.br (fora do ar),
pnsfatimamanilha.com.br (403), pnsfatimaitaipuacu.wixsite.com (404).

## Contatos

- Telefone e e-mail: da página "Municípios" (a mais recente), ou do site da
  paróquia quando lido direto. O "Cel/Wpp." dessa página entrou como
  `whatsapp`. Números copiados como publicados, só com o DDD acrescentado
  quando a fonte o omitia (São Francisco Xavier, "2711-1670").
- Instagram só quando o site da paróquia o liga (saofranciscoxavier.nit,
  paroquiaporciunculadesantana, santuariodasalmasniteroi,
  paroquiasstrindade, nsconceicaorb, paroquiadebuzios.oficial) ou a página
  da arquidiocese o cita (obatistaitaborai). Nenhum perfil foi aberto.

## O que falta para o próximo estado desta pesquisa

- **Ler o site da arquidiocese de verdade**: com o desafio do Cloudflare
  resolvido por um navegador de pessoa, a página "Municípios", as páginas de
  paróquia do portal (`arqnit.org.br/portal/paroquia-...`) e os anuários 2023
  e 2024 em PDF devem dar a grade de quase todas as 41 unidades sem horário e
  confirmar as 36 de confiança média.
- Unidades sem horário: Catedral, Basílica Auxiliadora, Barreto, Caramujo,
  Cubango, Engenhoca, Santa Teresinha (Fonseca), São Domingos, São João
  Batista (Tenente Jardim), São Lourenço, Pendotiba, São Sebastião (Itaipu),
  São José (Imbassaí), Fátima (Itaipuaçu), Pacheco, Amendoeira, São José
  Operário (Jardim Catarina), São Pedro de Alcântara, Apollo II, Santa
  Luzia, Galo Branco, Patronato, Neves, Antonina, Gradim, Rocha, Porto Novo,
  Porto das Caixas, São João Batista (Itaboraí), Boa Esperança, Silva Jardim,
  São Sebastião (Araruama), São Vicente de Paulo, Bananeiras, Praia Seca,
  Unamar, Iguaba Grande, São João Batista (São Pedro da Aldeia), Nazaré
  (Saquarema), Bacaxá e Búzios.
- Capelas citadas sem bairro (pendência; estão no `nao_cabe` de cada
  matriz): Dores (N. S. das Graças, N. S. de Fátima), Ilha da Conceição
  (N. S. Aparecida), Sagrados Corações (N. S. da Penha, N. S. de Fátima),
  Santo Cristo (Santo Antônio, Orfanato Santo Antônio, N. S. Aparecida, São
  José Operário), São Judas de Icaraí (N. S. Aparecida), Venda da Cruz (São
  José, N. S. Aparecida), Piratininga (N. S. de Bonsucesso, Santo Antônio),
  La Salle (N. S. Rainha dos Anjos, Sagrada Família, Santos Papas), Rio do
  Ouro (Santa Rita, N. S. da Boa Esperança, São Jorge), Tribobó (Santa
  Edwiges, N. S. da Penha e Santo Antônio, N. S. da Conceição), Trindade
  (Santa Rita, Santa Teresinha), Santa Catarina Labouré (São João Batista),
  Laranjal (seis capelas), Mutondo (São José, N. S. das Graças, São Vicente),
  Porto Velho (três capelas), Itaúna (três capelas), Covanca (São
  Francisco), Mutuá (N. S. da Conceição), Engenho Pequeno (São Vicente),
  Manilha (Sagrado Coração), Arraial do Cabo (N. S. dos Remédios, N. S.
  Aparecida, São José Operário, Divino Espírito Santo), São Cristóvão (Santo
  Expedito, Santo Antônio, Santos Anjos), Tamoios (Sagrados Corações, Santa
  Ana, Santo Antônio), Venda das Pedras (Muriqui, Areal, Engenho Velho, Reta
  Nova, Pico, Quissamã, Reta Velha, Nova Cidade: lugares sem nome de
  capela), Cubango (Santo Expedito), Búzios (Desatadora dos Nós, Imaculado
  Coração de Maria).
- Divergências a conferir: Ititioca (a página de Niterói mistura o bloco de
  horários com o de outra paróquia em um dos trechos), Santo Cristo dos
  Milagres (duas páginas com horários diferentes nas capelas), Venda das
  Pedras (domingo 7h30 e 19h ou 8h), endereço de Maricá Centro (Praça
  Medeiros Corrêa ou Praça Orlando de Barros Pimentel), endereço de São
  Pedro de Alcântara (Rua São Pedro de Alcântara ou Praça Carlos Gianelli).
- A diferença entre "87 paróquias" (anuário 2024) e a lista de 79 + 2.
