# Diocese de São Luiz de Cáceres (MT): fontes da pesquisa de 13/11/2026

Sé em Cáceres; oeste de Mato Grosso, fronteira com a Bolívia. Bispo: Dom
Jacy Diniz Rocha. Cúria: R. Antônio Maria, 69, Centro, Cáceres,
(65) 3223-1788 / (65) 3223-1859, WhatsApp (65) 99908-1788,
curia@diocesedecaceres.com.br. Padroeiro diocesano: São Luís, rei da França
(25 de agosto). Criada em 1910; província eclesiástica de Cuiabá.

## Resumo

- **27 unidades pastorais** em `saida/sao-luiz-de-caceres.json`: 1 catedral
  (São Luiz de França) e 26 paróquias, em 6 setores: Setor 1 (8), Setor 2
  (6), Setor 3 (2), Setor 4, cidade de Cáceres (5), Setor 5 (4, contando
  Lambari d'Oeste) e Setor 6 (2).
- **3 com horário**:
  - Paróquia Santíssima Trindade (Cáceres), confiança alta: o site da
    paróquia (pstcaceres.com.br) tem uma página por comunidade, com
    endereço e horários; 11 comunidades entraram, com missas e uma adoração.
  - Catedral São Luiz de França e Paróquia Senhor Bom Jesus (Pontes e
    Lacerda), confiança média: horários só pelo trecho da bio do Instagram
    da própria paróquia mostrado na busca, sem data.
- **24 sem horário** (confiança baixa, `horarios: []`): a página "Horários
  de Missa" do site da diocese (https://www.diocesedecaceres.com.br/horarios)
  existe mas está vazia, e as buscas não acharam horário publicado pelas
  paróquias.
- Todo `id_banco` é null.

## Lista das unidades

Do menu "Paróquias" do site da diocese, com uma página por paróquia
(`https://www.diocesedecaceres.com.br/paroquia/<nome>`: data de fundação,
endereço, telefone, e-mail, clero), todas lidas em 13/11/2026. O setor de
cada uma vem da lista "Paróquias" do rodapé do mesmo site (as páginas
"setor-N-..." do site estão vazias, com erro de PHP).

O endereço do site é **www**.diocesedecaceres.com.br. Sem o "www" o
certificado não confere (é o do provedor) e não abre.

Conferência:
- **GCatholic** (https://gcatholic.org/churches/local/zlui3, atualizado em
  09/11/2026): 25 paróquias e 1 santuário. Faltam no GCatholic as duas
  paróquias mais novas, que o site da diocese lista: **N. S. das Graças, de
  Campos de Júlio** (criada em 21/03/2020) e **São José Operário, de Lambari
  d'Oeste** (02/02/2022). O Santuário Imaculado Coração de Maria (Jauru),
  ao lado da matriz N. S. do Pilar, não é paróquia: citado na observação de
  Jauru, sem entrar como igreja (o GCatholic não diz a que paróquia
  pertence).
- **Regional Oeste 2** (https://cnbbo2.org.br/diocese-de-sao-luiz-de-caceres/):
  "Paróquias: 25", número anterior às duas novas.

Setor 1 tem duas "Paróquia São José" possíveis na lista do rodapé (Setor 1
e Setor 2, sem cidade). Pela geografia, a do Setor 1 foi tomada como a de
Figueirópolis d'Oeste (vizinha de Jauru) e a do Setor 2 como a de São José
dos Quatro Marcos (vizinha de Mirassol). Conferir.

A página de setores da diocese dá coordenadores com dados que não batem com
as páginas de paróquia (ex.: coordenador do Setor 2 com endereço de Reserva
do Cabaçal, que o rodapé põe no Setor 5). O JSON segue as páginas de
paróquia e a lista do rodapé.

## Contatos

Das páginas de paróquia do site da diocese. Onde há dois números, o
primeiro foi para `telefone` e o outro para a observação. Rio Branco: o
número publicado é marcado "(WhatsApp)", foi para os dois campos. Livramento:
o site grafa "diocesedacaceres", corrigido para o domínio da diocese.
Salto do Céu: (65) 3233-1196 na página da paróquia, (65) 3233-1166 na de
setores. Catedral: a página da diocese dá a Rua Frei Grignion van den Hemel,
15; a catedral fica na Praça Barão do Rio Branco.

Santíssima Trindade (Cáceres) diz não ter matriz única: a primeira igreja
do JSON é a Igreja Santíssima Trindade (endereço da diocese, Rua dos Dulce,
s/n, Cohab Nova), e o `nao_cabe` dá o Salão Paroquial (Av. Tancredo Neves,
990, Jardim Padre Paulo), onde são as missas paroquiais. Três comunidades
(Bom Jesus, Santa Luzia, N. S. das Graças) vieram da Paróquia São Luiz em
2026; Bom Jesus, Santa Luzia e N. S. das Graças têm no domingo "Santa Missa
ou Celebração da Palavra", anotado na observação do horário.

## Instagram (só pelo trecho da busca, nenhum perfil aberto por dentro)

paroquiasaoluizcaceres (Catedral; a bio dá "Missas: Ter a Sab 19h; Dom 7h,
e 19h"), paroquia_senhor.bomjesus (Pontes e Lacerda; a bio dá "Matriz:
quinta 19h30, sexta 6h, domingo 8h e 19h", com o telefone (65) 3266-1324,
que bate com a diocese), pstrindadecaceres (link do site da paróquia),
paroquianossasenhoradaguia_ (Comodoro). Comunidades da Santíssima Trindade
com perfil próprio, anotados no site da paróquia: comunidadensboanova,
com_nsradasgracas, _santa_dulce_comunidade.

## Páginas lidas (13/11/2026)

- https://www.diocesedecaceres.com.br/paroquia/<nome> (27 páginas; as URLs
  estão no campo `fontes` de cada item)
- https://www.diocesedecaceres.com.br/pagina/setores-diocesanos
- https://www.diocesedecaceres.com.br/horarios (vazia)
- https://www.diocesedecaceres.com.br/noticias/noticias-da-diocese (site
  ativo, notícias até 10/11/2026)
- https://www.pstcaceres.com.br/p/... (Santíssima Trindade: secretaria e 11
  comunidades)
- https://gcatholic.org/dioceses/diocese/zlui3.htm e as páginas de cada igreja
- https://cnbbo2.org.br/diocese-de-sao-luiz-de-caceres/
- https://catholic-hierarchy.org/diocese/dsalc.html (endereço da cúria)

## O que falta para o próximo estado desta pesquisa

- Horários das 24 unidades sem horário (cerca de 20 buscas para esta
  diocese; Facebook e Instagram das paróquias pequenas quase não aparecem na
  busca). Se a diocese preencher a página de horários, ela resolve tudo.
- Confirmar os horários de Instagram da Catedral e do Senhor Bom Jesus
  numa fonte com data.
- Comunidades rurais da Santíssima Trindade (o site tem o menu, sem
  páginas) e as comunidades das outras paróquias.
- Comunidades citadas sem nome nas páginas: Nova Lacerda atende Conquista
  d'Oeste; Jauru, Vale de São Domingos; Araputanga, Indiavaí; Porto
  Esperidião, Glória d'Oeste. Anotado na observação de cada uma.
- Os municípios de Porto Estrela (citado pelo Regional Oeste 2 como da
  diocese) não aparecem em nenhuma página de paróquia: falta saber qual
  paróquia o atende.
