# Diocese de Duque de Caxias (RJ): fontes da pesquisa de 13/11/2026

Nome oficial: **Diocese de Duque de Caxias** (assim no site, no GCatholic e no
catholic-hierarchy; "e São João de Meriti" não faz parte do nome: o site diz
"Igreja Católica em Duque de Caxias e São João de Meriti" só para o
território). Criada em 11/10/1980, sufragânea do Rio de Janeiro. Bispo: Dom
Tarcísio Nascentes dos Santos (desde 2012). Cúria: Av. Gov. Leonel de Moura
Brizola, 1.861, Centro, Duque de Caxias, CEP 25010-009, (21) 3552-9900,
contato@diocesededuquedecaxias.org.br. Padroeira diocesana: Nossa Senhora do
Pilar.

## Resumo

- **24 unidades pastorais** em `saida/duque-de-caxias.json`: 1 catedral
  (Santo Antônio), 21 paróquias e 2 quase-paróquias (Sagrada Família, no
  Centro, e Nossa Senhora do Rosário, em Saracuruna), nas 3 regiões pastorais:
  Centro (8), Periferia (7) e São João de Meriti (9). Cidades: Duque de
  Caxias (15) e São João de Meriti (9).
- **3 com horário** (confiança média), nenhuma com confiança alta:
  - N. S. da Glória (Jardim Meriti) e N. S. de Fátima (Vilar dos Teles): o
    trecho do Instagram da própria paróquia que a busca mostra (sem data; o de
    Vilar dos Teles traz só o domingo).
  - São João Batista (Centro de São João de Meriti): as missas de domingo do
    roteiro de uma peregrinação publicado pela diocese em 01/02/2023
    ("6h30 / 8h / 9h45 / 18h: Missas na Igreja Matriz").
- **21 sem horário** (confiança baixa): a diocese não tem página por paróquia
  nem guia de horários, e o Instagram das paróquias não mostrou horário no
  trecho da busca.
- Endereço da matriz só onde uma notícia da diocese o dá: Catedral, N. S. de
  Fátima (Jardim 25 de Agosto), Santa Teresinha (Parque Lafaiete), Pilar (Rua
  Toscana, sem número), Santa Cruz, Rosário (Saracuruna) e São João Batista
  (Praça Getúlio Vargas). As demais têm só o bairro.
- Telefone de secretaria: nenhum publicado pela diocese. Só um WhatsApp, o de
  Coelho da Rocha, que o próprio Instagram da paróquia mostra no trecho da
  busca.
- Todo `id_banco` é null.

## Lista das unidades

O site da diocese (WordPress) não tem lista de paróquias: o menu "Paróquias"
está vazio e a página `/paroquias/` só tem o título. A lista foi montada de:

1. O **mapa da diocese** ("Guia Paroquial" na página inicial, Google My Maps
   `mid=1sOlQq94HVfk-kvCfUFEbZ860ru0`, baixado como KML), com uma pasta por
   região pastoral e cada matriz marcada como "Igreja Matriz da Paróquia X" ou
   "Comunidade Matriz da Paróquia X". Dá 22 unidades.
2. As notícias da diocese (559 posts lidos pela API), sobretudo os dois
   Mutirões de Confissões da Quaresma de 2026 (que listam as paróquias das
   regiões Centro e São João de Meriti) e o Encontro Mundial das Famílias
   (2022). Elas acrescentam as duas que não estão no mapa: São Sebastião
   (Praça da Bandeira, São João de Meriti) e a Quase-Paróquia N. S. do Rosário
   (Saracuruna).

Conferência: o catholic-hierarchy dá 22 paróquias (2021) e o GCatholic, 24
"parishes" na estatística de 2022. Bate com 22 paróquias (catedral inclusa) e
2 quase-paróquias. A lista de igrejas do GCatholic (23 igrejas, 09/11/2026)
está incompleta e mistura capelas; não tem nenhuma paróquia fora da nossa
lista.

Quase-Paróquia N. S. do Rosário: a diocese a chama de quase-paróquia em 2022
e 2023; uma notícia de 12/08/2026 a cita entre as "paróquias", sem falar de
elevação. Mantida como quase-paróquia.

Paróquia Santa Cruz (Santa Cruz da Serra): a notícia de 2022 diz "Igreja
Matriz Nossa Senhora de Fátima" (no Centro Paroquial, Av. Automóvel Clube,
lote 22, quadra A); o mapa marca a Igreja N. S. da Conceição (Praça Bahia,
beira da BR-040) como comunidade matriz. Ficou a de Fátima como matriz e a da
Conceição como capela, com a divergência na observação.

Matrizes com titular diferente da paróquia, conforme o mapa: Imaculada
Conceição (Igreja São Luís Gonzaga e Imaculada Conceição), São João Paulo II
(Igreja Sagrado Coração de Jesus), São Bento (Igreja Sagrada Família), São
Francisco de Assis (Igreja N. S. do Perpétuo Socorro), Santa Clara de Assis
(Igreja Jesus Crucificado) e a Quase-Paróquia Sagrada Família (Igreja Senhor
do Bonfim, "comunidade de referência").

## Páginas lidas (13/11/2026)

- https://diocesededuquedecaxias.org.br/ (endereço da cúria e o mapa)
- https://www.google.com/maps/d/viewer?mid=1sOlQq94HVfk-kvCfUFEbZ860ru0 (KML)
- https://diocesededuquedecaxias.org.br/wp-json/wp/v2/posts (todas as
  notícias, 2021 a 2026); as usadas estão no campo `fontes` de cada item.
  Principais:
  - https://diocesededuquedecaxias.org.br/regiao-pastoral-centro-promove-mutirao-de-confissoes-na-quaresma/
  - https://diocesededuquedecaxias.org.br/regiao-pastoral-sao-joao-de-meriti-promove-mutirao-de-confissoes-na-quaresma/
  - https://diocesededuquedecaxias.org.br/acoes-do-x-encontro-mundial-das-familias-nas-paroquias-da-diocese-de-duque-de-caxias/
  - https://diocesededuquedecaxias.org.br/diocese-recebe-peregrinacao-de-reliquia-e-imagem-de-sao-francisco-de-assis/
    (domingo da matriz de São João Batista)
  - https://diocesededuquedecaxias.org.br/padres-cicm-celebram-60-anos-de-presenca-no-brasil/
- Os horários do mutirão de confissões e de Finados são de um dia só e não
  entraram.

## Instagram (só pelo trecho da busca; nenhum perfil aberto)

Entraram os perfis cujo trecho diz o nome da paróquia e a Diocese de Duque de
Caxias ou o bairro: paroquiasaobentodc, igrejanossasenhoradopilar,
staclaraimbarie, paroquia.santacruz, paroquiadasgracas_eden,
pnsccoelhodarocha, paroquiansradagloria (com horários) e paroquiafatimavilar
(com o domingo).

Ficaram de fora por não dar para confirmar a paróquia:

- nsfatima.paroquia: "Fundada em outubro de 1957; composta por 9 comunidades;
  Diocese de Duque de Caxias". O mapa dá 9 igrejas à de Jardim 25 de Agosto,
  mas o trecho não diz o bairro.
- pasaojoaobatista: Paróquia São João Batista, sem cidade no trecho.
- somosimaculada: Paróquia Imaculada Conceição, sem cidade no trecho.
- Facebook da Pascom da Catedral (pascom.catedraldesantoantonio): só vídeos
  de missa de 2022.

Sites agregadores (horariodemissa.com.br, liriocatolico.com.br) trazem
horários de algumas paróquias, mas não são da paróquia nem da diocese: não
foram usados.

## Pendência: comunidades do mapa sem paróquia escrita

O mapa da diocese marca a paróquia só nas matrizes. As comunidades vêm logo
depois da matriz, na ordem da camada, mas sem dizer a qual paróquia
pertencem; por isso ficaram fora do JSON. Na ordem do mapa (a matriz que
precede cada grupo entre colchetes):

Região Pastoral Centro
- [Catedral] Maria de Nazaré, Santa Luzia.
- [Igreja Senhor do Bonfim, Quase-Paróquia Sagrada Família] Sagrado Coração
  de Jesus, N. S. Aparecida, N. S. das Graças (Camponesa), São Francisco.
- [Imaculada Conceição] Jesus Cristo Libertador, N. S. Aparecida, N. S. da
  Penha, São João Batista, São Francisco de Assis, São Jorge, São Pedro, São
  Sebastião, Santa Clara, Sagrada Família; núcleos Santa Teresa d'Ávila, Santa
  Teresinha, São Camilo de Lellis, São Pedro dos Pescadores, N. S. das Graças.
- [N. S. de Fátima, Jardim 25 de Agosto] N. S. de Belém, N. S. de Guadalupe,
  N. S. Mãe da Igreja, Sagrada Família, São Francisco de Assis, São José
  Operário, São Paulo, São Pedro.
- [São Sebastião, Gramacho] N. S. de Fátima, Santa Clara de Assis, Santo
  Antônio, São Francisco de Assis; núcleo São Jorge.
- [São João Paulo II] N. S. da Conceição, N. S. de Lourdes, São Paulo
  Apóstolo, São Cosme e São Damião, N. S. do Carmo, São João Batista, São José
  Operário (esta entrou no JSON: uma notícia de 2025 a dá como da paróquia,
  na Rua Delgado de Carvalho, 95, Vila Santo Antônio).
- [São Bento] Cristo Rei, Santa Luzia, Divino Espírito Santo, N. S.
  Aparecida, N. S. da Esperança, N. S. do Rosário.
- [Santa Teresinha] São Sebastião, N. S. da Glória, N. S. da Penha, São Judas
  Tadeu, São Pedro, São José, N. S. do Carmo, N. S. das Graças.

Região Pastoral Periferia
- [N. S. das Graças, Xerém] Cristo Operário (entrou no JSON: a notícia de 2022
  a dá em Mantiquira, da paróquia), N. S. de Fátima, N. S. dos Mártires, Santa
  Alice, Santa Maria, Santa Rita de Cássia, Santa Rita de Cássia (Amapá), São
  José, São Lourenço, São Pedro, Santa Helena, N. S. Aparecida (Vila Canaã),
  Santo Isidro, Santa Inês, N. S. Aparecida (Aviário), Santa Rosa de Lima, São
  João Batista, Santo Antônio; núcleos N. S. Aparecida (Lamarão), Cristo
  Redentor (Taboleiro), N. S. de Guadalupe, Sagrado Coração (Piranema), Cristo
  Lavrador (Rebeca), São Sebastião, São Francisco (Riacho Doce), Santa Clara.
- [N. S. de Fátima, Parada Angélica] N. S. do Rosário, Santa Luzia, Jesus
  Ressuscitado, São Bernardo, São Cristóvão, São João Batista, Jesus Bom
  Pastor.
- [Pilar] Imaculada Conceição, N. S. das Graças, N. S. de Fátima, Santa Cruz,
  Santa Rita de Cássia, Santo Antônio, São José Operário; núcleo São
  Francisco.
- [São Francisco de Assis, Campos Elíseos] N. S. Aparecida, Cristo
  Libertador.
- [Santa Clara de Assis, Imbariê] Imaculada Conceição.

Região Pastoral São João de Meriti
- [N. S. das Graças, Agostinho Porto] N. S. Aparecida e São José Operário,
  N. S. Mãe da Divina Providência, Divino Espírito Santo, N. S. de Fátima,
  Sagrada Família, Santa Josefina Bakhita.
- [São João Batista] São Jorge (entrou no JSON: a notícia de 2023 a dá na Vila
  Tiradentes, no roteiro da paróquia), Bom Pastor, Santo Antônio, N. S.
  Aparecida, N. S. de Fátima, São Francisco de Assis, São José, São Vicente de
  Paulo.
- As outras seis matrizes da região aparecem no mapa sem comunidades.

Outras citadas em notícias sem a paróquia: Comunidade São José (Engenheiro
Belfort, São João de Meriti), Comunidade São Francisco de Assis (Dr.
Laureano), Comunidade São Francisco de Assis (Imbariê) e Igreja de Santana
(no roteiro da Paróquia São Francisco de Assis, sem bairro).

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/duqu0.htm e
  https://gcatholic.org/churches/local/duqu0 (09/11/2026)
- https://catholic-hierarchy.org/diocese/ddudc.html (22 paróquias em 2021)

## O que falta para o próximo estado desta pesquisa

- Horário de 21 das 24 unidades. Caminho provável: o perfil de Instagram de
  cada paróquia (só pelo trecho da busca) ou um pedido à cúria, que não
  publica guia.
- Telefone e endereço das secretarias.
- Confirmar se a Quase-Paróquia N. S. do Rosário já é paróquia e qual é a
  matriz da Paróquia Santa Cruz.
- Ligar as comunidades do mapa às paróquias, se o dono aceitar a ordem da
  camada do mapa como indicação.
