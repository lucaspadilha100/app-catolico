# Diocese de Limeira (SP): fontes da pesquisa de 13/11/2026

Sé em Limeira; região de Americana, Araras, Leme e Pirassununga. Bispo: Dom
Carlos José de Oliveira, nomeado em 04/11/2026 (antes, o Pe. Cássio Roberto
Rossette foi administrador diocesano). Cúria: Rua Profª Anita Concilia B.
Clemente dos Santos, 260, Vila Fior, Limeira, (19) 3441-5329,
contato@diocesedelimeira.org.br. Padroeira diocesana: Nossa Senhora das Dores
(15 de setembro).

## Resumo

- **96 unidades pastorais** em `saida/limeira.json`: 1 catedral, 2 basílicas
  (Santo Antônio de Pádua, Americana; N. S. do Patrocínio, Araras), 3
  santuários com território de paróquia (São Manoel e N. S. Aparecida, Leme;
  Senhor Bom Jesus dos Aflitos, Pirassununga; São Sebastião, Porto Ferreira),
  82 paróquias e 8 quase-paróquias, em 5 foranias (N. S. das Dores, N. S. do
  Belém, N. S. do Patrocínio, Santa Gertrudes e Santo Antônio de Pádua).
  Cidades: Limeira (24), Americana (22), Araras (9), Leme (8), Pirassununga
  (6), Nova Odessa (4), Porto Ferreira (4), Conchal, Cordeirópolis,
  Cosmópolis e Descalvado (3 cada), Artur Nogueira e Iracemápolis (2 cada),
  Analândia, Engenheiro Coelho e Santa Cruz da Conceição (1 cada).
- **92 com horário de missa** (85 com confiança alta, 7 média). O site da
  diocese tem uma página por paróquia com endereço, comunidades, horário de
  missa, telefone, e-mail e expediente da secretaria; as 96 foram lidas em
  13/11/2026 (a maioria editada entre agosto e novembro de 2026).
- **4 sem horário** (`horarios: []`, confiança baixa): São Francisco de Assis
  (Americana), N. S. de Fátima (Araras), São Sebastião (Descalvado) e São
  Benedito (Leme). Nas três primeiras o campo de horário está vazio; na de
  Leme ele traz o expediente da secretaria, e o site próprio
  (saobeneditoparoquia.com.br) não resolve.
- Confiança média, com o motivo na observação: Santa Catarina de Sena
  (Americana, domingo "às 9h e às 9h"), Santa Teresinha (Araras, texto com
  linhas repetidas), Santa Luzia (Limeira) e Rosa Mística (Porto Ferreira),
  com horários sem dizer a igreja, São Cristóvão (Limeira, 1ª sexta "19h" e
  "19h30"), Santo Antônio (Pirassununga, só as capelas têm horário) e São
  Francisco de Assis (Pirassununga, página sem edição desde maio de 2024).
- Confissão publicada só no Santuário São Sebastião de Porto Ferreira (a
  fonte junta "confissão/atendimento"). Adoração: 1ª sexta em Santo Antônio
  (Cordeirópolis), Santa Rita (Pirassununga) e Imaculada Conceição (Santa
  Cruz da Conceição).
- Capelas e comunidades: 316, com nome e bairro ou fazenda como a página da
  paróquia lista. Horário de comunidade que não cabe no formato (dia fixo do
  mês, "último sábado", "de 15 em 15 dias", missa nas casas) ficou em
  `nao_cabe`.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do tipo de conteúdo "paroquias" do WordPress da diocese
(`/wp-json/wp/v2/paroquias`, 96 itens, com as taxonomias `cidade` e
`forania`), igual às páginas "Paróquias por Cidades" e "Paróquias por
Foranias" e à página de missas (`/missas/`), que repete os mesmos horários.

Conferência contra o GCatholic (atualizado em 09/11/2026, 99 igrejas na
diocese): batem 95 das 96 unidades. Divergências:

- **São Sebastião (Descalvado)** não está no GCatholic; a diocese a lista
  com página própria (criada em 12/12/2010). Entrou.
- **Santa Luzia (Nova Odessa)** aparece no GCatholic como paróquia; a diocese
  a lista como comunidade da Paróquia São Jorge. Seguimos a diocese.
- **Sagrado Coração de Jesus (Cosmópolis)** aparece no GCatholic como
  paróquia; a diocese tem a Paróquia Sagrado Coração de Jesus em Conchal (que
  o GCatholic também lista) e, em Cosmópolis, só a comunidade de mesmo nome
  da Paróquia Santa Gertrudes. Seguimos a diocese.
- N. S. de Lourdes (Araras) e N. S. da Boa Morte e Assunção (Limeira), sem
  marca de paróquia no GCatholic, são comunidades da Paróquia São Francisco
  de Assis (Araras) e da Catedral.

Nenhuma cidade desta diocese aparece nos arquivos das outras dioceses
paulistas da pesquisa. A cidade de Santa Gertrudes (que dá nome a uma
forania) não é desta diocese: o nome vem da Paróquia Santa Gertrudes de
Cosmópolis.

## Fontes

- https://diocesedelimeira.org.br/paroquias/ e
  https://diocesedelimeira.org.br/paroquias-por-foranias/ (a lista)
- https://diocesedelimeira.org.br/wp-json/wp/v2/paroquias?per_page=100
  (os 96 itens, com cidade e forania)
- Uma página por unidade, `https://diocesedelimeira.org.br/paroquias/<slug>/`,
  no campo `fontes` de cada item (horários e contatos).
- https://diocesedelimeira.org.br/missas/ e
  https://diocesedelimeira.org.br/horarios-de-missas/ (resumo de missas e de
  expediente; mesmos dados das páginas)
- https://basilicasantoantonio.com.br/pastoral/horarios-de-missa/ e
  /contatos/ (site da Basílica de Americana: acrescenta a missa com Laudes de
  segunda a sábado às 6h45, o WhatsApp e o Instagram)
- Conferência: https://gcatholic.org/dioceses/diocese/lime0.htm e
  https://gcatholic.org/churches/local/lime0

Sites próprios que não abriram em 13/11/2026: catedral-limeira.com.br,
nossasenhoradorosario.net.br, saofranciscoararas.com.br,
saobeneditoparoquia.com.br; basilicapatrocinio.com.br só mostra um índice de
pastas; paroquianossasenhora.com.br redireciona para página de domínio à
venda (esses dois ficaram de fora do campo `site`; os quatro primeiros
ficaram como a diocese publica, para reconferir).

## Contatos

- Telefone: o campo "Telefone" de cada página (secretaria). Seis paróquias
  têm número de celular nesse campo (Analândia, N. S. das Graças de Araras,
  N. S. do Rosário de Limeira, São Jorge de Nova Odessa, Santa Luzia de
  Pirassununga, Santa Cruz da Conceição); entraram por serem o contato da
  secretaria publicado pela diocese. WhatsApp só onde a fonte diz
  (Desatadora dos Nós, Basílica de Americana, Santa Cruz da Conceição).
- E-mail: todos no domínio diocesedelimeira.org.br. Correções: o de Sagrado
  Coração (Conchal) vem cortado em ".org.b" e o de Santo Amaro (Nova Odessa)
  com "dioceselimeira.org.br"; ambos foram para o padrão. O da Quase-Paróquia
  Divino Espírito Santo (Americana) aparece como "95@diocesedelimeira.org.br"
  e ficou vazio. Santa Eulália (Limeira) não tem e-mail na página.
- Instagram: só paroquiadesatadoradosnos (página da diocese) e
  basilicasantoantonio (site da Basílica). As demais páginas trazem Facebook,
  que o formato não guarda; nenhum perfil foi aberto por dentro.
- Não entraram: contato pessoal de coordenador (Comunidade Davi), telefones
  de colégio e instituições ligadas às paróquias.

## O que falta para o próximo estado desta pesquisa

- Horários das quatro paróquias sem horário e da matriz de Santo Antônio
  (Pirassununga): pedir à secretaria ou à diocese.
- Confissões: quase nenhuma página publica. Algumas trazem "Atendimento do
  Padre" (Basílica do Patrocínio, Santo André Apóstolo, São Francisco de
  Pirassununga), que não foi lido como confissão.
- Instagram das paróquias: buscar pelo trecho da busca, paróquia por
  paróquia.
- Comunidades sem lugar na fonte (Capela N. S. Aparecida de Engenheiro
  Coelho, Santo Expedito de Conchal, São Bartolomeu de Limeira, entre outras)
  e a Capela de N. S. das Alegrias, que a Paróquia Santa Teresinha de Limeira
  mantém na colônia de praia em Praia Grande (fora da diocese, não entrou).
