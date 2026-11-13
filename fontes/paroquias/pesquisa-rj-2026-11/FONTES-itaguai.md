# Diocese de Itaguaí (RJ): fontes da pesquisa de 13/11/2026

Sé em Itaguaí; Costa Verde fluminense. Bispo: Dom Paulo Celso Dias do
Nascimento. Cúria: Rua Coronel Freitas, 45, Centro, Itaguaí, (21) 2688-3292,
diocese@dioceseitaguai.org.br. Municípios: Itaguaí, Seropédica, Mangaratiba,
Angra dos Reis e Paraty.

## Resumo

- **20 unidades pastorais** em `saida/itaguai.json`: 1 catedral (São
  Francisco Xavier) e 19 paróquias, em 6 setores de 2 regionais: Regional
  Par (setores Angra 1, Angra 2 e Paraty) e Regional Sim (setores Itaguaí,
  Seropédica e Mangaratiba). Cidades: Angra dos Reis (8), Itaguaí (4),
  Mangaratiba (4), Seropédica (3), Paraty (1).
- **20 com horário de missa** (19 com confiança alta, 1 média): o site da
  diocese mantém uma página por paróquia com a grade de missas estruturada
  (atributo `data-item` de cada linha, com dia, hora e o lugar: "Matriz" ou o
  nome da capela) e uma página geral de horários, revista em 26/06/2026, que
  bate linha por linha com as páginas de paróquia. A de confiança média é
  N. S. das Graças de Muriqui, que não tem página própria (ver abaixo).
- Nenhuma fonte da diocese traz confissão ou adoração; só missa.
- 126 igrejas no total (20 matrizes, 106 capelas e comunidades com lugar).
- Todo `id_banco` é null.

## Lista das unidades

- https://dioceseitaguai.org.br/paroquias/ (página de 09/07/2026): 19 cartões
  de paróquia, cada um levando a /paroquia/<nome>. O filtro por setor
  (`?setor=1` a `?setor=9`) deu o setor de cada uma.
- https://dioceseitaguai.org.br/horarios-das-missas/ (revista em 26/06/2026):
  a grade da semana inteira da diocese, com 19 rótulos de paróquia. Traz uma
  que falta nos cartões: **N. S. das Graças de Muriqui** (Mangaratiba).

Conferência contra o GCatholic (https://gcatholic.org/dioceses/diocese/itag0.htm
e https://gcatholic.org/churches/local/itag0, atualizados em 09/11/2026): 20
igrejas, todas paróquias, incluindo N. S. das Graças em Muriqui e N. S. das
Graças em Seropédica. Bate com as 20 do JSON. A estatística de 2022 do
GCatholic diz "21 parishes"; a diocese e a lista de igrejas do próprio
GCatholic dão 20. Seguimos as 20.

## O caso de N. S. das Graças (Seropédica e Muriqui)

O site da diocese tem uma só página de paróquia com esse nome
(/paroquia/paroquia-nossa-senhora-das-gracas). O cabeçalho é o de Seropédica
(Rua do Cruzeiro, Ecologia, (21) 2682-1298), mas a grade de missas é a de
Muriqui (matriz domingo 8h e sábado 19h, capelas N. S. da Glória e São Pedro
do Sahy), igual ao rótulo "Nossa Senhora das Graças, Muriqui" da página geral
de horários. Por isso:

- Seropédica: contatos da página da paróquia, horários do rótulo
  "Nossa Senhora das Graças, Seropédica" da página geral.
- Muriqui: horários da página geral; endereço (Rua 12 de Outubro, 392, Vila
  Muriqui), telefone (21) 2780-1674 e capelas do post da diocese
  https://dioceseitaguai.org.br/comunidades-da-paroquia-nossa-senhora-das-gracas/
  (publicado em 2015, revisto em 2019). Confiança média.

## Horários

- Fonte principal: a página de cada paróquia no site da diocese (lida em
  13/11/2026); URLs no campo `fontes` de cada item.
- N. S. dos Remédios (Paraty) tem grade só na página da paróquia (não está na
  página geral).
- Santíssima Trindade (Jacuecanga): o site da própria paróquia
  (https://santissimatrindadeangra.com.br/horarios-de-missa/, revisto em
  28/10/2024) detalha o que a diocese dá como semanal: nas capelas de Água
  Santa, Caputera 1 e Caputera 2 a missa das 8h30 é só no 1º, 2º e 3º domingo
  (nos outros, celebração da Palavra); a missa das 19h30 de sexta é votiva,
  só na 1ª sexta, alternando Village e Monsuaba; há ainda a 1ª quinta em
  rodízio. O JSON segue o site da paróquia nesses pontos (semanas e
  `nao_cabe`).
- Horário de capela que a fonte não liga a um lugar certo (por exemplo,
  "Capela Nossa Senhora da Penha" quando a paróquia tem duas) ficou no
  `nao_cabe` da matriz, com o nome que a fonte usa.

## Capelas e comunidades

Os nomes vêm da lista "Comunidades" de cada página de paróquia e dos rótulos
da grade de missas. O bairro vem, nesta ordem:

1. do próprio nome na página atual (ex.: "Capela Bom Jesus - Belém", Cristo
   Rei; as 29 comunidades de Paraty);
2. dos posts "Comunidades da Paróquia ..." da diocese
   (https://dioceseitaguai.org.br/comunidades/, dez posts de 17/03/2015,
   revistos em 29/04/2019), para Catedral, Maria Mãe da Igreja, Conceição de
   Jacareí, N. S. das Graças (Seropédica e Muriqui), Santa Teresinha
   (Piranema e Seropédica), São Francisco de Assis, São Paulo Apóstolo e
   Senhora Sant'Anna;
3. do quadro antigo, hoje oculto, da página geral de horários, só para
   Navegantes (Marinas), São Nicolau (Glória II) e São Pedro (Praia do
   Jardim), da Paróquia N. S. Aparecida do Balneário, e para a Capela de São
   Francisco de Assis (Chácara da Saudade) e a Igreja do Rosário (Centro
   Histórico), de Paraty.

Capelas de Conceição de Jacareí em Portogalo e Garatucaia entraram com cidade
Angra dos Reis (são localidades de Angra, no setor Angra 1); a de Cantagalo
ficou com Mangaratiba, a conferir.

Pendências (capelas sem lugar na fonte, só no `nao_cabe` ou fora):

- N. S. da Guia (Mangaratiba), São José Operário (Parque Mambucaba) e São
  Sebastião (Frade): a grade cita as capelas, mas nenhuma fonte dá o bairro.
  Todos os horários dessas capelas estão no `nao_cabe` da matriz.
- Cristo Rei: capelas Cristo Ressuscitado e Santa Cruz.
- N. S. Aparecida (Balneário): N. S. dos Anjos, N. S. da Glória, Santa Cruz,
  São Cristóvão; e os rótulos "Glória I" e "Morro da Cruz" da grade.
- Catedral: duas capelas de N. S. Aparecida (Campelo e Raiz da Serra) com
  missa sábado e domingo às 16h, sem dizer qual é qual.
- N. S. das Graças (Seropédica): capelas N. S. Aparecida e N. S. de Fátima
  (a lista de 2015 tem "N. S. Aparecida e N. S. de Fátima, Incra" e duas
  outras Aparecidas) e a missa de quinta na Universidade Rural.
- São Paulo Apóstolo: uma segunda Capela de N. S. Aparecida (Jardim América
  ou Chaperó, pela lista de 2015) sem horário.
- Paraty: horários de capelas com nome repetido (Penha, Conceição, São João
  Batista, Santa Cruz, Carmo).

## Contatos

- Telefone, endereço, e-mail (escondido pelo Cloudflare, decodificado do
  `data-cfemail`), site e Instagram dos campos da página de cada paróquia.
- Instagram anotados das páginas da diocese, nenhum perfil aberto:
  pascomcatedraldeitaguai, cristorei.angra, teresinhapiranema,
  santateresinhaseropedica, santissimatrindadeangra, saopauloapostoloitaguai,
  pascomfrade.
- Quando o campo "site" da diocese é uma página do Facebook (Conceição de
  Jacareí, São José Operário), ele não foi para `site`.
- Santíssima Trindade: e-mail do site da paróquia (trindadeangra@gmail.com);
  a diocese dá trindadeangra@oi.com.br.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/itag0.htm e
  https://gcatholic.org/churches/local/itag0 (09/11/2026)
- https://dioceseitaguai.org.br/institucional/ (história e território)

## O que falta para o próximo estado desta pesquisa

- Confissão e adoração: nenhuma fonte da diocese publica. Os sites das
  paróquias (igrejaparati.com.br, mariamaedaigreja.com.br,
  catedralsaofranciscoxavier.com, santateresinhaseropedica.com,
  conceicaodejacarei.com.br) não abriram daqui.
- A página própria de N. S. das Graças de Muriqui, quando a diocese corrigir
  o site; o telefone de Muriqui é de 2015.
- Bairro das capelas listadas nas pendências.
- Endereço da matriz de Maria Mãe da Igreja: a página da paróquia dá Rua
  Manoel de Matos, 5, Parque Jacimar; o quadro antigo da diocese dá Rua Pedro
  Galvão, km 40, Campo Lindo, e põe a Igreja de São Jorge na Rua Manoel de
  Matos, 6. O JSON segue a página atual.
