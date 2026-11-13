# Diocese de Osório (RS): fontes da pesquisa de 13/11/2026

Sé em Osório; Litoral Norte gaúcho, de Palmares do Sul a Torres, e Santo
Antônio da Patrulha. Bispo: Dom Jaime Pedro Kohl, PSDP. Cúria: Rua Santos
Dumont, 2355, Albatroz, Osório, (51) 98410-2649 ou 98410-2498,
mitra@diocesedeosorio.org. Criada em 1999.

## Resumo

- **24 unidades** em `saida/osorio.json`: 1 catedral (N. S. da Conceição),
  22 paróquias e o Santuário Diocesano Nossa Senhora das Lágrimas (Alto
  Caraá), que tem reitoria e reitor próprios desde 2/12/2023. Seis áreas
  pastorais: Santo Antônio (4 paróquias), Terra de Areia (4), Osório (5,
  com a catedral), Torres (3), Três Cachoeiras (3) e Capão da
  Canoa/Tramandaí (4).
- **17 com horário de missa**: 7 com confiança alta (páginas de 2026: Capão
  da Canoa, Imbé, Xangri-lá, Boa Viagem e Santa Teresinha de Santo Antônio
  da Patrulha, São Domingos de Torres, Arroio do Sal), 8 média (páginas de
  2024 e 2025: Catedral, Balneário Pinhal, Palmares do Sul, Santo Antônio
  de Santo Antônio da Patrulha, Santo André Avelino de Maquiné, Amparo de
  Dom Pedro de Alcântara, São José de Três Cachoeiras e o Santuário das
  Lágrimas) e 2 baixa: Imaculada Conceição (Três Forquilhas) e Senhor Bom
  Jesus (Morrinhos do Sul), cujas páginas de horário são de 2018. Os
  horários dessas duas ficaram no JSON para conferência, mas não devem ir ao
  ar antes de confirmados.
- **7 sem horário** (`SEM-HORARIO-osorio.txt`, que também lista as duas de
  2018): Caravaggio (Osório), N. S. da Saúde (Cidreira, só horário de verão
  vencido), N. S. dos Navegantes (Tramandaí, site com erro), São Cristóvão
  (Caraá, só agenda de setembro de 2023), São Pedro (Terra de Areia, site
  com erro), N. S. da Piedade (Maquiné, "em breve") e São José Operário
  (Torres, só calendários mensais em arquivo, o último de novembro de 2025).
- Confissões publicadas: Capão da Canoa (quartas, 14h30 a 17h30) e Balneário
  Pinhal (quartas e sextas, 14h a 17h). Adoração:
  Boa Viagem (sextas, 14h); Xangri-lá (quintas, depois da missa das 8h30,
  no `nao_cabe`). Páginas de confissão de 2018 a 2020 foram só anotadas na
  observação.
- Horários sazonais: Balneário Pinhal publica "baixa temporada" (a usada) e
  "veraneio" (27/12 a 1/3, no `nao_cabe`); Xangri-lá publica a programação
  de inverno, válida até 23/12/2026; Cidreira só tem o verão 2025/2026,
  vencido, posto no `nao_cabe` e sem horário.
- Todo `id_banco` é null.

## Lista das unidades

- https://www.diocesedeosorio.org/areas-pastorais (23 paróquias, por área,
  com o link do site de cada uma)
- https://www.diocesedeosorio.org/mapa-de-paroquias (22 paróquias com
  endereço; a Paróquia Bom Pastor, de Imbé, não está no mapa)
- https://www.diocesedeosorio.org/local/<slug> (uma página por paróquia:
  endereço, pároco, telefone, e-mail, Facebook; URLs em `fontes`)
- https://www.diocesedeosorio.org/santuario-diocesano-n-sra-das-lagrimas
  (horários do santuário, página de fevereiro de 2024)
- https://www.diocesedeosorio.org/curia

O site da diocese recusa pedido sem User-Agent de navegador (403 do
nginx); foi lido com User-Agent de navegador comum.

Conferência contra o GCatholic (https://gcatholic.org/churches/local/osor0,
09/11/2026, 25 igrejas): 22 paróquias e 3 santuários (N. S. das Lágrimas
em Caraá, N. S. de Lourdes em Dom Pedro de Alcântara e "Nossa do Trabalho"
em Capão da Canoa). Falta no GCatholic a Paróquia Bom Pastor (Imbé), que a
diocese lista. O Santuário N. S. de Lourdes (a Gruta) entrou como igreja de
tipo `santuario` da Paróquia N. S. do Amparo, que publica o horário dele; a
N. S. do Trabalho entrou como comunidade da Paróquia N. S. de Lourdes de
Capão da Canoa, como a paróquia a chama.

## Sites das paróquias (subdomínios de diocesedeosorio.org)

Cada paróquia tem site próprio no domínio da diocese, com páginas
"Horários de Missas", "Confissões" e "Secretaria". A data de cada página
veio da API do WordPress (`/wp-json/wp/v2/pages?slug=...`, campo
`modified`) e está em `fontes`. Exemplos:

- https://catedral.diocesedeosorio.org/missas-2 (15/07/2025)
- https://paroquianossasenhoradeloudescc.diocesedeosorio.org/horarios-de-missas (04/11/2026)
- https://saopedroxangrila.diocesedeosorio.org/horarios-de-missas (03/11/2026)
- https://bompastor.diocesedeosorio.org/horarios-de-missas (13/05/2026)
- https://paroquiasaodomingos.diocesedeosorio.org/horarios-de-missas (24/03/2026)
- https://paroquiaimaculadaconceicao.diocesedeosorio.org/horarios-de-missas (04/09/2018)
- https://paroquiasenhorbomjesus.diocesedeosorio.org/horario-das-missas (19/12/2018)

Fora do ar em 13/11/2026 (erro 500 do WordPress, três tentativas):
paroquianavegantes.diocesedeosorio.org (Tramandaí) e
paroquiata.diocesedeosorio.org (Terra de Areia).

O menu "Horários das missas" da diocese aponta para sineiro.com e a página
"horarios-de-missas" do site é um formulário de busca; nenhum dos dois foi
usado.

## Casos anotados

- Paróquia Bom Pastor (Imbé): o site não diz qual igreja é a matriz; a
  primeira da lista é a Igreja N. S. Aparecida, do bairro Mariluz, onde fica
  a secretaria (Avenida Paraguassú, 6900).
- Paróquia Senhor Bom Jesus (Morrinhos do Sul e Mampituba): a página de
  horários não indica a matriz; entrou "Igreja Matriz Senhor Bom Jesus" no
  endereço da paróquia, sem horário, e as 24 comunidades com os horários de
  2018.
- Paróquias com comunidades sem nome de santo na fonte (só o lugar): São
  Domingos de Torres, Arroio do Sal e três de Santo Antônio da Patrulha;
  entraram como "Comunidade de <lugar>".
- Paróquia Santo Antônio de Pádua: a Comunidade N. S. da Conceição fica no
  Quintão, balneário de Palmares do Sul.
- Paróquia São Pedro (Xangri-lá): a Igreja Sagrada Família fica em
  Atlântida Sul, município de Osório.
- E-mail da Imaculada Conceição publicado como imaculada@diocesedesorio.org
  (provável erro de digitação): ficou só na observação.
- Instagram da Catedral publicado como "@nsconceiçãoosorio" (com ç, que o
  Instagram não aceita): ficou vazio.

## O que falta para o próximo estado desta pesquisa

- Horário das 7 paróquias sem horário e confirmação das duas de 2018.
- Horário atual de Cidreira (fora do verão).
- Missas da matriz de Três Cachoeiras e das comunidades listadas sem
  horário (Três Cachoeiras, Caravaggio, São José Operário, Caraá, Santa
  Teresinha).
- Horários do verão 2026/2027 nas paróquias de praia, quando publicados.
