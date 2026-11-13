# Arquidiocese de Chapecó (SC): fontes da pesquisa de 13/11/2026

Sé metropolitana em Chapecó, no Oeste e Extremo Oeste catarinense, na
fronteira com a Argentina, o Paraná e o Rio Grande do Sul. Elevada a
arquidiocese em 05/11/2024 (instalada em 09/02/2025), com as sufragâneas
Caçador, Joaçaba e Lages. Arcebispo: Dom Odelir José Magri, MCCJ. Padroeiro:
Santo Antônio. Cúria: curia@arquidiocesechapeco.com.br.

## Resumo

- **46 unidades pastorais** em `saida/chapeco.json`: 1 catedral (Santo
  Antônio, Chapecó) e 45 paróquias, em 80 municípios. A arquidiocese diz "46
  paróquias e 1488 comunidades" na página de história (a descrição antiga do
  site ainda fala em 45).
- **1 com horário**: só a Catedral, com o quadro fixo do site da própria
  paróquia (catedralchapeco.org.br), confiança média porque as notícias mais
  novas do site são de 2019; a busca no Facebook da catedral confirmou os
  mesmos dias e horas e citou ainda uma missa às 10h no domingo, que ficou no
  `nao_cabe`.
- **45 sem horário** (`"horarios": []`, confiança baixa): nem o site da
  arquidiocese, nem o Anuário Pastoral 2026, nem o Diretório Diocesano trazem
  horário de missa, e as buscas por trecho de Instagram e Facebook não
  devolveram nada das paróquias (só de homônimas de outros estados).
- Contatos completos para as 46: endereço, telefone, WhatsApp e e-mail da
  secretaria.
- Todo `id_banco` é null.

## Lista das unidades

Fonte principal da lista: a página "Paróquias" do site da arquidiocese, com
uma ficha por paróquia (46 fichas). O site é feito na plataforma SiteXpresso
e monta tudo por JavaScript; o conteúdo foi lido pelos próprios endereços que
a página chama:

- `https://arquidiocesechapeco.com.br/?ajax=get&path=/paroquias` (a lista)
- `https://arquidiocesechapeco.com.br/?ajax=get&comp=<código>` (cada ficha,
  com endereço, telefone, WhatsApp, e-mail, clero e redes sociais)

Conferida contra o **Anuário Pastoral 2026** da arquidiocese
(https://arquidiocesechapeco.com.br/files/2752319/66da2a0cf5fdee5e6a56df9c3cf5a288/download,
página "Arquivos e documentos"), que traz "Endereços das Paróquias da
Arquidiocese" numerados de 1 a 46. Bate um a um com o site. Onde o anuário e
a ficha do site divergem, o JSON segue o anuário (mais novo): e-mails novos
de Caibi, São Paulo Apóstolo, Perpétuo Socorro, Dionísio Cerqueira, Modelo,
Nova Itaberaba, São Domingos e São João do Oeste; WhatsApp de várias; e os
endereços de Galvão (Av. Sete de Setembro, 830), Ipuaçu (Rua Zanella, s/n),
Itá (Rua 5, 264), Mondaí (Avenida Lajú, 31), São José do Cedro (Rua Santa
Maria, s/n), Xanxerê (Rua Rui Barbosa, 31) e Xavantina (Praça Rio Branco,
68). Celular sem a marca "WhatsApp" ou "secretaria" não entrou.

Conferência contra o **GCatholic** (https://gcatholic.org/churches/local/chap0,
atualizado em 09/11/2026; estatística de 2022: 47 paróquias): 45 das 46
batem. Diferenças:

- **Ipuaçu, Paróquia Santa Luzia**: falta no GCatholic (é a mais nova; está no
  site e no anuário).
- O GCatholic põe a Paróquia N. S. do Perpétuo Socorro de Chapecó em "Linha
  Cachoeira"; a arquidiocese dá Rodovia BR 282, Linha Colônia Cella, Chapecó.
- O GCatholic dá à matriz de Ipumirim o título de N. S. de Salete (a paróquia
  é a Sagrada Família); o JSON segue isso no nome da igreja.
- Os 9 santuários que o GCatholic lista não são paróquias (ver abaixo).

## Regiões pastorais

A arquidiocese tem nove regiões pastorais (Diretório Diocesano, item 14), mas
nenhuma fonte dela lista as paróquias de cada uma. A região de cada paróquia
veio do GCatholic (campo "Pastoral Region" da página de cada igreja, lidas em
13/11/2026): Campo Erê, Chapecó, Itapiranga, Palmitos, Pinhalzinho, Quilombo,
São Miguel do Oeste, Seara e Xanxerê. Os nomes batem com os do cronograma do
Anuário 2026 ("Região Pastoral de Xanxerê", "RP de Itapiranga" etc.). Ipuaçu
ficou com a região "não informada".

## Santuários e capelas (pendências)

As fichas das paróquias não listam comunidades (o anuário diz 1488). O
GCatholic lista estes santuários, que não são paróquia e cuja paróquia a
fonte não indica; ficaram fora do JSON:

- Gruta Nossa Senhora de Lourdes, Figueira (região de Chapecó)
- Santuário Imaculada Conceição, Faxinal dos Guedes
- Santuário Nossa Senhora da Salette, Faxinal dos Guedes
- Santuário Jubilar Nossa Senhora da Anunciação, São Lourenço do Oeste
- Santuário Nossa Senhora do Caravaggio, Guaraciaba
- Santuário Nossa Senhora Aparecida, Xanxerê
- Santuário Nossa Senhora da Salette, Seara
- Santuário Nossa Senhora Aparecida, Saudades

O Santuário Nossa Senhora da Salette de Caibi entrou na Paróquia São Domingos
(Caibi), porque a história da paróquia, na ficha do site, conta a fundação
dele em 1960.

## Páginas lidas (13/11/2026)

- https://arquidiocesechapeco.com.br/paroquias (lista e 46 fichas)
- https://arquidiocesechapeco.com.br/diocese (história, 46 paróquias)
- https://arquidiocesechapeco.com.br/arquivos-e-documentos (Anuário Pastoral
  2026 e Diretório Diocesano, PDF de 2022)
- https://www.catedralchapeco.org.br/ (quadro "Missas" da Catedral)
- https://gcatholic.org/dioceses/diocese/chap0 e as 54 páginas de igreja

## Dificuldades

- O site da arquidiocese não tem página de horários, e as fichas de paróquia
  só têm contato e história.
- Sites próprios de paróquia: paroquiapalmitos.com.br (certificado não
  verificado e o endereço sem https não resolve) e psbjxanxere.com.br (não
  respondeu). O da Catedral está no ar mas parado em 2019.
- Busca na web: 18 buscas gastas em Chapecó e Joaçaba, só a da Catedral deu
  horário. A cota de buscas, dividida entre as pesquisas que rodavam ao mesmo
  tempo, acabou antes de tentar as demais paróquias uma a uma.

## O que falta para o próximo estado

- Horário de missa das 45 paróquias: o caminho é o Instagram de cada uma
  (perfis anotados no campo `instagram`, vindos das fichas do site: São Paulo
  Apóstolo, São Francisco de Assis, Santa Dulce dos Pobres, São Cristóvão,
  Cunha Porã, Dionísio Cerqueira, Faxinal dos Guedes, Iporã do Oeste, Ipuaçu,
  Ipumirim, Itapiranga, Maravilha, São Carlos, São Lourenço do Oeste, São
  Miguel do Oeste, Seara, Vargeão, Xanxerê e Xaxim) ou contato direto com a
  secretaria.
- Confirmar a missa das 10h no domingo da Catedral.
- Ligar os oito santuários acima às suas paróquias.
- Região pastoral de Ipuaçu.
