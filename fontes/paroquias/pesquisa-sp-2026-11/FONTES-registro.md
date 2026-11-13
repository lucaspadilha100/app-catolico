# Diocese de Registro (SP): fontes da pesquisa de 13/11/2026

Sé em Registro; Vale do Ribeira e litoral sul paulista. Bispo: Dom Manoel
Ferreira dos Santos Júnior, MSC. Cúria: Rua São Francisco Xavier, 165,
Centro, Registro, (13) 3821-1595 e (13) 3821-3644,
mitradiocesanaderegistro@hotmail.com. Padroeiro diocesano: São Francisco
Xavier (3 de dezembro). Província eclesiástica de Sorocaba.

## Resumo

- **20 unidades pastorais** em `saida/registro.json`: 1 catedral, 1
  basílica (Paróquia Nossa Senhora das Neves, Iguape, cuja matriz é a
  Basílica Santuário do Senhor Bom Jesus), 17 paróquias e 1 quase-paróquia.
  Cidades: Registro (5), Iguape (2) e uma em cada: Barra do Turvo, Cajati,
  Cananéia, Eldorado, Ilha Comprida, Iporanga, Itariri, Jacupiranga, Juquiá,
  Miracatu, Pariquera-Açu, Pedro de Toledo e Sete Barras.
- **2 com horário de missa**:
  - Paróquia São João Batista (Sete Barras), confiança alta: a página de
    paróquias da diocese traz os horários da Igreja Matriz.
  - Paróquia Nossa Senhora das Neves (Iguape), confiança média: horários do
    site do Santuário (Basílica, Igreja do Rosário e Igreja de São Benedito).
- **18 sem horário** (`"horarios": []`, confiança baixa): a diocese não
  publica horário dessas paróquias e nenhuma tem site próprio; só páginas
  de Facebook, que não se leem por dentro. A busca na web (WebSearch) não
  trouxe nenhum trecho de horário dessas paróquias.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese (modificada em
17/09/2026), com endereço, secretaria, e-mail e clero de cada uma.

Conferência contra o GCatholic (atualizado em 09/11/2026, 18 igrejas):
bate nas 18. A diocese tem mais duas, que o GCatholic ainda não lista,
ambas em Registro:

- **Paróquia Nossa Senhora do Carmo**: a página só dá o nome e o pároco
  (Pe. Clemente Addae Kyei, SVD; a página do clero cita também o vigário
  paroquial, Pe. Martín Islas, SVD). Sem endereço, telefone ou e-mail. A
  notícia da formação da Pastoral Familiar (18/05/2026) a cita entre as
  paróquias presentes.
- **Quase-Paróquia Nossa Senhora do Sagrado Coração** (Rua Jatobá, 20,
  Arapongal): o contato publicado é um celular, (13) 99633-7104, mais o
  e-mail paroquianssagradocoracao@gmail.com. Entrou como telefone da
  unidade porque a diocese o publica como "Contato" da quase-paróquia, sem
  nome de pessoa.

O GCatholic marca a matriz de Miracatu (N. S. das Dores) como santuário; a
diocese não. Seguimos a diocese (igreja tipo matriz) e anotamos.

Santuários extraordinários: pelo decreto de 16/06/2026 (Ano Jubilar
Franciscano), as paróquias Santo Antônio de Cajati e Santo Antônio de Juquiá
são "Santuários Extraordinários Diocesanos" durante o Ano Santo. Título
temporário: entraram como `paroquia`, com nota na observação.

Paróquia Santuário Nossa Senhora da Guia (Eldorado) entrou como `paroquia`
com a primeira igreja de tipo `santuario`, como em Taubaté.

## Iguape: dois quadros de horário diferentes

- Site do Santuário (https://senhorbomjesusdeiguape.com.br/, página inicial
  modificada em 09/02/2026), usado no JSON:
  - Segunda a sexta: Basílica 7h; Igreja do Rosário 19h.
  - Sábado: Basílica 10h e 18h; Igreja do Rosário 19h.
  - Domingo: Basílica 7h e 10h; Igreja São Benedito 17h; Igreja do Rosário 19h.
- Página de paróquias da diocese ("Horários de missa na Basílica"):
  domingo 7h, 10h e 19h; segunda a sexta 19h; sábado 10h e 18h.

O site do Santuário é da própria paróquia e separa as igrejas; o quadro da
diocese parece pôr na Basílica as missas das 19h que o Santuário dá na Igreja
do Rosário. Por isso confiança média. O site do Santuário ainda tem textos
de modelo ("Lorem ipsum") e os itens "Horários de Confissões" e "Agenda
mensal" do menu não abrem página: sem horário de confissão.

A Igreja do Rosário e a Igreja de São Benedito entraram como capelas da
paróquia N. S. das Neves, sem endereço (o site não dá).

Contatos de Iguape: a diocese dá a secretaria paroquial (13) 3841-1131,
senhorbomjesusdeiguape@yahoo.com.br, e a do Santuário (13) 3841-4910,
contato@senhorbomjesusdeiguape.com.br (anotado na observação). O Instagram
senhorbomjesusdeiguape vem do link no próprio site do Santuário (a
diocese não o cita); nenhum perfil foi aberto por dentro.

## Páginas lidas (13/11/2026)

- https://diocesederegistro.com.br/paroquias/ (lista oficial, contatos e
  os dois blocos de horário)
- https://diocesederegistro.com.br/clero/ (clero de cada paróquia)
- https://diocesederegistro.com.br/curia-diocesana/ (cúria)
- https://diocesederegistro.com.br/decreto-diocese-de-registro-celebra-ano-jubilar-franciscano-com-santuarios-extraordinarios/
- https://diocesederegistro.com.br/diocese-de-registro-anuncia-nomeacoes-transferencias-e-novas-assessorias-pastorais-para-2027/
  (comunicado de 02/10/2026, em imagem: a partir de 2027 Pe. Francisco
  Rodrigues da Rocha Neto passa a pároco da Catedral e Pe. Vedinel Zattor
  a pároco de Sete Barras; não muda unidade nem contato)
- https://diocesederegistro.com.br/wp-json/wp/v2/pages e /posts (todas as
  páginas e notícias, para procurar paróquia nova e horários)
- https://senhorbomjesusdeiguape.com.br/ (horários de Iguape)

## Contatos como publicados

- E-mails com "gmail.com.br" (Sant'Ana de Pedro de Toledo e São Paulo
  Apóstolo de Pariquera-Açu) ficaram como a diocese publica; é provável que
  seja gmail.com, mas não foi conferido.
- "psguia@uol.com.br r" (Eldorado) virou psguia@uol.com.br.
- Juquiá: entrou só a secretaria; o número da "Residência" dos padres ficou
  fora.
- A diocese só dá Facebook das paróquias (Cajati, Eldorado, Iporanga,
  Jacupiranga, Catedral, São José Operário, N. S. Aparecida de Registro,
  Itariri, Juquiá, Miracatu, Pedro de Toledo, Cananéia, Santuário de Iguape,
  Ilha Comprida); o formato não tem campo para Facebook e `site` ficou vazio.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/regi1 e
  https://gcatholic.org/dioceses/diocese/regi1.htm (anuário, 09/11/2026;
  estatística de 2022: 19 paróquias)
- https://www.catholic-hierarchy.org/country/dbr2.html

O CNPJ da Mitra não foi encontrado (o site não o publica e a busca não o
achou), então a conferência pelas filiais da Receita não foi feita.

## O que falta para o próximo estado desta pesquisa

- Horários de 18 unidades: pedir às secretarias ou à Pascom diocesana; a
  página de paróquias da diocese já tem o molde (bloco "Horários de missa")
  em duas delas.
- Endereço e contato da Paróquia N. S. do Carmo (Registro).
- Endereço das igrejas do Rosário e de São Benedito (Iguape) e bairro da
  matriz de N. S. do Rocio.
- Comunidades e capelas: nenhuma fonte as lista com nome e lugar.
