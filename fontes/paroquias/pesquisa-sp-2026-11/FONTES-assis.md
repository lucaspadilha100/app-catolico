# Diocese de Assis (SP): fontes da pesquisa de 13/11/2026

Sé em Assis; Oeste Paulista, na divisa com o Paraná (Vale do Paranapanema).
Bispo: Dom Argemiro de Azevedo, CMF. Cúria e Centro Diocesano de Pastoral:
Rua Dom José Lázaro Neves, 414, CEP 19814-391, Assis, (18) 3322-2614 e
(18) 3322-2279. Padroeiro diocesano: São Francisco de Assis (4 de outubro).
Província eclesiástica de Botucatu.

## Resumo

- **28 unidades pastorais** em `saida/assis.json`: 1 catedral, 1 basílica
  (São Vicente de Paulo, Assis) e 26 paróquias, em 4 regiões pastorais.
  Cidades: Assis (9), Palmital (2), Maracaí (2, uma delas no distrito de São
  José das Laranjeiras) e uma em cada: Cândido Mota, Quatá, João Ramalho,
  Paraguaçu Paulista, Rancharia, Iepê, Nantes, Tarumã, Florínea, Cruzália,
  Pedrinhas Paulista, Echaporã, Platina, Oscar Bressane e Lutécia. Borá
  entra como comunidade da paróquia de Paraguaçu Paulista.
- **8 com horário de missa**, todas com confiança média; **20 sem horário**
  (`"horarios": []`, confiança baixa, motivo na observação).
  - 7 de Assis (Catedral, Basílica, Santuário N. S. das Graças, N. S. das
    Dores, N. S. de Fátima, N. S. Aparecida, Santa Cecília): horários do campo
    "Observações" da página de cada paróquia no site da diocese. A página não
    tem data, e na maioria o texto é o mesmo da lista diocesana de 13/02/2014
    (só a Basílica e Santa Cecília mostram atualização). Por isso média, não
    alta. Em N. S. Aparecida o texto está truncado ("Sábado: 19h - e 19h"):
    entrou só o que é legível.
  - Paraguaçu Paulista (N. S. da Paz, agostinianos recoletos): o site da
    paróquia publica um calendário semanal em imagem. Entraram só os
    horários que se repetem nas semanas de 26 a 31/10 e 01 a 08/11/2026, mais
    as confissões fixas da página da secretaria (terça a sexta, 8h30 às 10h e
    14h30 às 16h). Missas que alternam (Conceição de Monte Alegre e Roseta) ou
    que divergem da página da capela (Lar dos Idosos) ficaram em `nao_cabe`.
- Santuários: o Santuário N. S. das Graças (Assis) é paróquia e entrou como
  `paroquia` com a primeira igreja de tipo `santuario`. Os demais santuários
  da diocese não são paróquia e entraram como igreja `santuario` da paróquia
  do lugar: Santa Clara (Cândido Mota, dedicado em 07/08/2024), Santa
  Terezinha do Menino Jesus (Maracaí, dedicado em 01/10/2024), São Pio de
  Pietrelcina (Pedrinhas Paulista, santuário jubilar em 2025) e Santuário da
  Misericórdia (Quatá, notícia de 2016). Nenhum tem horário publicado.
- Capelas e comunidades só com nome e lugar, das páginas da diocese, da lista
  de 2014 (Cândido Mota com os distritos Frutal do Campo, Nova Alexandria e
  Porto Almeida; capelas rurais de São Nicolau) e da página "Comunidades" do
  site de Paraguaçu Paulista (22 igrejas e comunidades, inclusive os
  distritos Sapezal, Roseta e Conceição de Monte Alegre). Capelas sem lugar
  na fonte ficaram fora, salvo as que têm horário publicado (N. S. das Dores,
  N. S. de Fátima, N. S. Aparecida e Santa Cecília de Assis).
- Os horários da lista de 2014 NÃO foram usados onde a página atual não os
  repete (São Nicolau, Cândido Mota): têm 12 anos e a divisão das paróquias
  mudou (São Judas Tadeu virou paróquia em 2017; a capela do Parque
  Universitário passou de N. S. das Dores para Santa Cecília).
- Todo `id_banco` é null.

## Lista das unidades

Do menu "Paróquias" do site da diocese (Região I: Assis e Cândido Mota;
Região II: Quatá, João Ramalho, Paraguaçu Paulista, Rancharia, Iepê, Nantes;
Região III: Tarumã, Maracaí, Florínea, Cruzália, São José das Laranjeiras,
Pedrinhas Paulista; Região IV: Palmital, Echaporã, Platina, Oscar Bressane,
Lutécia), com 28 páginas de paróquia e 2 de capela (São Francisco de Assis,
Vila Glória, da Catedral; Cristo Rei, Vila Ribeiro, da Basílica).

Conferência contra o GCatholic (atualizado em 09/11/2026, 30 igrejas: 28
paróquias e as mesmas 2 capelas): bate um a um, sem divergência. Nenhuma
cidade da diocese aparece nos arquivos das outras dioceses já pesquisadas.
Ourinhos e as cidades do leste (desmembradas em 1998) são da Diocese de
Ourinhos; Presidente Prudente e região, da Diocese de Presidente Prudente.

Padroeiros: o título de cada paróquia (é também o titular da matriz em
todas). A Catedral é Sagrado Coração de Jesus e São Francisco de Assis; o
orago é o Sagrado Coração (página "História" da diocese).

## Páginas lidas em 13/11/2026

- https://www.diocesedeassis.org/ (menu com as regiões e cidades)
- https://www.diocesedeassis.org/paroquias/1/1/assis (e as demais
  `/paroquias/<região>/<n>/<cidade>`: a lista por cidade)
- Uma página por paróquia, `https://www.diocesedeassis.org/paroquia/<n>/...`
  (endereço, bairro, telefone, e-mail, clero e, em 7, horários); as URLs
  estão no campo `fontes` de cada item. Fotos enviadas em 2018 e 2021, sem
  data de atualização do texto.
- https://www.diocesedeassis.org/capela/27/capela-sao-francisco-de-assis-assis-sp
  e https://www.diocesedeassis.org/capela/31/capela-cristo-rei-assis-sp
- https://www.diocesedeassis.org/historia (cúria, telefones, padroeiro)
- https://www.diocesedeassis.org/noticia/387/horarios-das-missas-regiao-pastoral-01
  (lista de 13/02/2014 da Região I: só nomes e lugares de capelas)
- Notícias da diocese sobre os santuários e capelas: 2235 (Santa Clara),
  2255 (Santa Terezinha), 511 e 2334 (São Pio), 1172 (Misericórdia, Quatá),
  2351 (Capela São Sebastião, Frutal do Campo), 392 (Capela São Sebastião,
  Água da Fortuna), 562 (Capela São Vicente de Paulo, João Ramalho).
- https://paroquianspaz.com.br/ (site da Paróquia N. S. da Paz, WordPress):
  `/secretaria-paroquia/`, `/comunidades/` e as páginas de cada comunidade
  (pela `/wp-json/wp/v2/`), `/agenda/` e as imagens do calendário semanal
  (`/wp-content/uploads/2026/11/11-01.11-a-08.11Calendario-semanal.jpeg` e
  `/wp-content/uploads/2026/10/10-26.10-A-31.10-CALENDARIO-SEMANAL-E-AVISOS-PAROQUIAIS.jpeg`).

## Contatos

Telefone e e-mail de cada paróquia vêm da página dela no site da diocese.
Quatro paróquias publicam celular como telefone da secretaria (Catedral,
São Donato de Pedrinhas Paulista) ou como WhatsApp (N. S. Aparecida de Assis,
N. S. da Paz de Paraguaçu Paulista): entraram como publicados. A Paróquia
N. S. da Paz tem a secretaria na Rua Santos Dumont, 859; o endereço da matriz
segue a diocese (Rua Prefeito Jayme Monteiro, 263).

Instagram: só `nossasenhoradapazppta` (link do site da própria paróquia).
Nenhum perfil foi aberto por dentro, e as buscas não trouxeram perfil oficial
das outras paróquias.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/assi1.htm e
  https://gcatholic.org/churches/local/assi1 (09/11/2026)

## Fontes vistas e NÃO usadas

- divisaodaigreja.com (diretório de terceiros): dá para Quatá e São Judas
  Tadeu exatamente o mesmo quadro de horários de Santa Cecília; parece cópia.
- Uma escala de acólitos de Rancharia publicada por voluntário (GitHub), com
  missas de domingo: não é publicação da paróquia.
- Página de Facebook da Catedral (vista só pelo trecho da busca) com missas
  às 12h nos dias de semana, que a página da diocese não traz.
- Notícias de jornais locais (Assiscity, O Diário do Vale, i7 Notícias, TV
  Paraguaçu) com horários de festas e da época da pandemia.

## O que falta para o próximo estado desta pesquisa

- Horários das 20 paróquias sem horário: o site da diocese só tem horários
  de Assis, e nenhuma delas tem site próprio encontrado. O caminho é a
  secretaria (telefones no JSON) ou um perfil oficial confirmado.
- Reconferir os horários de Assis: a página da diocese não tem data e repete
  o texto de 2014; o domingo da matriz de N. S. Aparecida está truncado.
- Paraguaçu Paulista muda os horários das comunidades a cada semana: vale
  reler o calendário semanal antes de publicar.
- Lugar das capelas urbanas de Cândido Mota (Santa Teresinha, São Francisco
  de Assis, Perpétuo Socorro, São José, Sagrada Família, São Judas Tadeu,
  Santíssima Trindade) e da Basílica (Perpétuo Socorro, Santa Edwiges,
  N. S. Aparecida): a lista de 2014 dá só o nome.
- Endereço dos santuários Santa Clara, Santa Terezinha e da Misericórdia.
