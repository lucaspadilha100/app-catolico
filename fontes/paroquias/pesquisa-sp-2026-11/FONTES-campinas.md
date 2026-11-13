# Arquidiocese de Campinas (SP): fontes da pesquisa de 13/11/2026

Sé em Campinas. Arcebispo: Dom João Inácio Müller. Cúria: Av. Aquidaban,
744, Vila Lídia, Campinas, (19) 3794-4650. Território: Campinas (com os
distritos de Sousas, Joaquim Egídio e Barão Geraldo), Sumaré, Indaiatuba,
Hortolândia, Valinhos, Vinhedo, Paulínia, Monte Mor e Elias Fausto.

## Resumo

- **108 unidades pastorais** em `saida/campinas.json`: 1 catedral, 1 basílica
  (Nossa Senhora do Carmo), 4 santuários que são paróquia (Guadalupe e Menino
  Jesus de Praga em Campinas, Santa Rita de Cássia em Campinas e em
  Indaiatuba) e 102 paróquias, uma delas pessoal (a coreana São Paulo Chong
  Hasang). Cidades: Campinas (65), Sumaré (10), Indaiatuba (9), Hortolândia
  (7), Valinhos (6), Vinhedo (4), Paulínia (3), Monte Mor (3), Elias Fausto (1).
- **100 com horário de missa**: 60 com confiança alta (página da arquidiocese
  atualizada em 2025 ou 2026) e 40 média (página sem atualização desde 2020 a
  2024, ou com aviso de horário "da pandemia", ou grade montada em parte com o
  site da paróquia). Os horários de missa estão em 700 linhas, em 157 igrejas
  (108 matrizes ou santuários e 49 comunidades e capelas com nome e lugar).
- **8 sem horário, confiança baixa**, cada uma com o porquê na observação:
  N. S. das Graças (Valinhos), N. S. do Amparo (Hortolândia), São João Paulo
  II (Indaiatuba), São João XXIII, São José Operário e São Judas Tadeu do
  Satélite Íris (Campinas) não têm horário na página; Santo Afonso Maria de
  Ligório mistura missa e celebração da Palavra sem dizer qual é a matriz; a
  Paróquia Universitária Santo Tomás de Aquino dá missas por campus da
  PUC-Campinas sem dizer a capela. Nos dois últimos o texto ficou no
  `nao_cabe` da matriz.
- Confissão com horário só na Auxiliadora (site da paróquia), no Sagrado
  Coração de Jesus (1ª sexta) e, em texto, no Menino Jesus de Praga.
- Comunidades sem bairro nem endereço na fonte ficaram no `nao_cabe` da
  matriz, com o horário em texto. "Celebração da Palavra" não entrou como
  missa; quando a fonte diz "missa ou celebração" sem separar, ficou no texto.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do cadastro de "Locais" do site da arquidiocese (WordPress, tipo
próprio `location`): a grade da página "Paróquias" carrega 110 fichas pelo
`admin-ajax.php` (ação `vc_get_vc_grid_data`), batidas com o mapa do site
`wp-sitemap-posts-location-1.xml`, que traz a data da última alteração de
cada ficha (usada no campo `data` das fontes).

Ficaram fora 3 fichas que não são unidades da arquidiocese:

- Capelania Militar Santo Tomás de Aquino (EsPCEx): Ordinariado Militar.
- Paróquia São Charbel: rito maronita (Eparquia Nossa Senhora do Líbano).
- Igreja Nossa Senhora Desatadora dos Nós (Capela Maria Porta do Céu,
  Jardim Santa Genebra): igreja de associação, listada em "Circunscrições
  Pessoais"; o GCatholic a chama de santuário, a arquidiocese não. Missas na
  ficha: segunda e quarta 19h30, sábado 17h, domingo 8h, 11h e 17h.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026: "103
parishes", 92 igrejas listadas): as 90 paróquias, catedral, basílica e
santuários do GCatholic estão na lista da arquidiocese; as outras duas são o
Mosteiro N. S. do Desterro (Vinhedo) e a Desatadora dos Nós, que não são
unidades. O GCatholic põe as paróquias de Valinhos sob "Vinhedo". As que a
arquidiocese tem e o GCatholic ainda não lista são, na maioria, paróquias
novas, entre elas N. S. do Amparo, São Guido Maria Conforti, São João Paulo
II e N. S. Aparecida do Campos Verdes (Hortolândia), Cristo Rei, São João
Paulo II e N. S. do Perpétuo Socorro (Indaiatuba), Santa Paulina, São João
XXIII, São José Operário, Jesus Cristo Libertador e São Judas Tadeu do
Satélite Íris (Campinas). Seguimos a arquidiocese.

## Páginas lidas (13/11/2026)

- https://www.arquidiocesecampinas.com.br/paroquias/ e a grade completa
  pelo `admin-ajax.php`
- https://www.arquidiocesecampinas.com.br/wp-sitemap-posts-location-1.xml
- Uma ficha por unidade em `https://www.arquidiocesecampinas.com.br/location/<nome>/`
  (endereço, telefone, e-mail, site, redes, padroeiro, forania e "Horários
  de missas"); a URL de cada uma está no campo `fontes` do JSON.
- https://www.arquidiocesecampinas.com.br/outras-circunscricoes/ (as
  circunscrições pessoais)
- A página de foranias do site está quebrada (repete as mesmas fichas em
  todas); a forania de cada paróquia saiu da própria ficha.

Sites de paróquia usados para completar (citados nas fontes do item):

- https://salesianossp.org.br/parnsacampinas/horarios/ (Auxiliadora:
  confissões; a missa de sexta 12h ficou no texto)
- https://www.nscandelaria.com.br/ (Candelária: comunidades com endereço,
  telefone novo, WhatsApp, e-mail e Instagram)
- https://www.saocristovaovalinhos.com.br/ (São Cristóvão: comunidades com
  endereço e Instagram)
- https://www.sjbcampinas.com.br/comunidades/ (São João Batista: uma página
  por comunidade, de fev. 2024, mais nova que a ficha da arquidiocese, de 2021)
- https://salesianossp.org.br/pardbcampinas/ (Dom Bosco): grade mais antiga
  (notícias até 2023) que a ficha da arquidiocese (set. 2026); não usada
  para horário.

Sites de paróquia citados nas fichas que não responderam em 13/11/2026 (o
proxy devolveu erro de conexão) e por isso ficaram fora de `site`:
catedraldecampinas.com.br, paroquiacnaparecida.org.br,
paroquiadaimaculada.org.br, paroquiadivino.org.br, igrejansevangelizacao.com.br,
igrejansdores.org.br, paroquiadorosariocampinas.org, sagradocoracaopaulinia.org.br,
santanadecampinas.org.br, santaritaindaia.com.br, santuariosantaritacampinas.com.br,
paroquiasantateresa.com.br, stateresinha.org, paroquiacuradars.com.br,
saobeneditocampinas.com.br, psjemiliani.com.br, saojoseonline.com,
saojoseanchieta.com.br, psjoperario.com.br, saojudaspaulinia.com.br,
saopedroapostolocampinas.net, paroquiasenhordobonfim.org.br,
paroquiacristorei.com.br, paroquiasantanavinhedo.com.br.

## Contatos

- Telefone e WhatsApp das fichas da arquidiocese. WhatsApp só quando a ficha
  diz que o número é WhatsApp; celular sem essa marca ficou fora, a não ser
  quando é o único número da paróquia (São Francisco de Assis de Monte Mor,
  São Judas Tadeu do Satélite Íris, São Sebastião de Valinhos), que foi para
  `telefone`.
- E-mail: o institucional da ficha (quase todos `@arquidiocesecampinas.com`),
  decodificado da proteção do Cloudflare. O de Santa Teresinha (Indaiatuba)
  aparece como `@arquidiocese.com`, domínio que parece errado: ficou vazio.
- Instagram só quando a ficha ou o site da paróquia o nomeia como Instagram
  (13 perfis): basilicadocarmocampinasoficial, guadalupecampinas,
  paroquiaaparecidaproenca, paroquiaconceicaona, paroquiadombosco_,
  pjesuscristolibertador, psantanacps (Campinas); paroquiacristoreiindaiatuba,
  prqsaofranciscoindaiatuba, nscandelaria (Indaiatuba); pnspatrocinio (Monte
  Mor); saocristovaovalinhos, saosebastiaovalinhos (Valinhos). Perfis
  escritos no campo de Facebook da ficha (par.imaculadocoracao.campinas,
  igrejadehelvecia, @saopedrocampin) não entraram. Nenhum perfil foi aberto.

## Nomes

- Nome sem a cidade nem o bairro que o site acrescenta depois de um traço (a
  Sant'Ana de Sousas vira "Paróquia Sant'Ana", com Sousas na `localidade`).
- Matrizes com titular diferente do padroeiro, conforme as fichas: Sagrada
  Família (matriz São José Operário), Jesus Cristo Libertador (matriz Santo
  Oscar Romero). A São José Operário (Vila Perseu) não tem igreja matriz; a
  primeira "igreja" do item é a sede da paróquia.
- A ficha da Imaculado Coração de Maria diz padroeiro "Sagrado Coração de
  Maria"; ficou o título da paróquia.

## O que falta para o próximo estado desta pesquisa

- Horários das 8 unidades com confiança baixa (pedir às paróquias ou ao
  setor de comunicação da arquidiocese).
- As 40 de confiança média, sobretudo as fichas de 2020 a 2022 (São Sebastião
  de Vinhedo, São Judas Tadeu da Vila Lemos, São João Batista, São Francisco
  de Assis de Vinhedo, N. S. Auxílio da Humanidade, Santos Apóstolos, Divino
  Salvador, Santa Inês, Menino Jesus de Praga, São Francisco de Assis de
  Monte Mor).
- Bairro e endereço das muitas comunidades que as fichas citam só pelo nome
  (estão no `nao_cabe` da matriz).
- Instagram oficial das outras 95 unidades.
- Horários de confissão e adoração: quase nenhuma ficha os traz.
