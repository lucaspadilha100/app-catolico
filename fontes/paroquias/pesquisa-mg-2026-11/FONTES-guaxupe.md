# Diocese de Guaxupé (MG): fontes da pesquisa de 13/11/2026

Sé em Guaxupé, sudoeste de Minas; sufragânea de Pouso Alegre. Bispo: Dom
José Lanza Neto. Site: https://guaxupe.org.br/ (WordPress; tipo de post
próprio `paroquias` em /wp-json/wp/v2/paroquias, com campos ACF:
telefone, e-mail, WhatsApp, Instagram, Facebook, site, endereço, pároco,
histórico e `horarios_de_missa`).

## Resumo

- **91 unidades** em `saida/guaxupe.json`, em 42 cidades e 7 setores
  (Poços de Caldas 19, Passos 16, Guaxupé 16, Alfenas 13, Areado 10, São
  Sebastião do Paraíso 9, Cássia 8):
  - 1 catedral (N. S. das Dores, Guaxupé) e 1 basílica (N. S. da Saúde,
    Poços de Caldas), com os nomes que a diocese usa;
  - 1 área missionária: Área Pastoral Missionária de Três Barras, que nota
    da diocese de 18/12/2023 chama "Distrito de Vilelândia (Três Barras),
    área pastoral São Sebastião", em Alpinópolis
    (https://guaxupe.org.br/noticias/transferencia-do-clero-diocesano-para-2024);
  - 1 área pastoral: N. S. das Dores (Delfinópolis), criada para quatro
    comunidades do município;
  - 87 paróquias. Duas têm a matriz santuário e entraram com a primeira
    igreja de tipo `santuario`: Santa Rita de Cássia (Cássia) e N. S. da
    Penha (Passos).
- **50 com horário** (35 com confiança alta, página da paróquia atualizada
  em 2025 ou 2026; 15 média, atualizada em 2024). O horário vem em texto
  livre no campo `horarios_de_missa`; foi passado ao formato à mão, e o
  que não cabe (dia do mês, "alguns sábados", "capelas rurais
  distribuídas pelo mês") ficou no `nao_cabe`.
- **41 sem horário** (campo vazio no site da diocese): lista em
  `SEM-HORARIO-guaxupe.txt`, com o Instagram ou Facebook que a própria
  página cita.
- 80 capelas, comunidades e santuários, só os que o texto de horários
  nomeia; alguns com bairro ou endereço, a maioria só com o nome.
- Todo `id_banco` é null.

## Lista das unidades

Fonte: as 91 páginas do tipo `paroquias` (https://guaxupe.org.br/paroquias/<slug>),
lidas pela API em 13/11/2026. A cidade e o setor saem das taxonomias
`cidades` e `setores` de cada página. Distritos: Guardinha (São Sebastião
do Paraíso), Barranco Alto (Alfenas), Petúnia (Nova Resende), Palmeiral
(Botelhos), Guaipava (Paraguaçu, pelo e-mail da paróquia), Santa Cruz da
Prata (Guaranésia), Goianases (Capetinga), Distrito Divino Espírito Santo,
que a diocese chama Cavacos (Alterosa), e Vilelândia (Alpinópolis).

Conferência contra o GCatholic (https://gcatholic.org/dioceses/diocese/guax0.htm
e https://gcatholic.org/churches/local/guax0, atualizado em 09/11/2026):
o GCatholic lista 88 paróquias, catedral, basílica e a antiga catedral de
Claraval, todas presentes na lista da diocese. A diocese tem três a mais:
São Félix de Nicosia (Poços de Caldas), a Área Pastoral Missionária de
Três Barras e a Área Pastoral N. S. das Dores (Delfinópolis). Entradas do
GCatholic que não são unidade: Seminário São José (Guaxupé), Santuário
Santo Aníbal Maria di Francia (Passos), Santuário Mãe Rainha de
Schoenstatt e Santuário N. S. de Fátima (Poços de Caldas); este último é
igreja da Paróquia São Félix de Nicosia, segundo a página dela, e entrou
nela com os horários. A estatística do GCatholic (31/12/2022) diz 81
paróquias.

## Escolhas de leitura

- Paróquia São Vicente de Paulo (Alpinópolis): era quase-paróquia na nota
  de 18/12/2023 e foi erigida em 07/02/2024 (histórico da página): entrou
  como `paroquia`.
- N. S. da Assunção (Cabo Verde): o texto traz "Quarta" sem horário; ficou
  só a observação.
- Basílica N. S. da Saúde: a missa de segunda às 15h da Capela Santo
  Antônio está na Basílica enquanto durarem as obras da capela; entrou na
  Basílica com essa observação.
- São Félix de Nicosia: a página dá a secretaria (Praça Dom Inácio Dal
  Monte, 500) e, nos horários, o endereço da matriz (Rua João Antônio de
  Oliveira, 248, Santa Augusta); a matriz ficou com o segundo.
- N. S. do Divino Espírito Santo (Claraval): telefone com DDD 34, como
  publicado.
- Telefones publicados com erro de dígito ficaram vazios (São Joaquim,
  Alterosa: "(35) 9 97760-1316"); os "(00) 00000-0000" também.
- Área Pastoral N. S. das Dores: o único e-mail publicado é de padre
  (nome pessoal) e não entrou.

## O que falta

- Horários das 41 unidades sem horário: perfis em `SEM-HORARIO-guaxupe.txt`.
- Os sites próprios citados (paroquiasaojose.net.br, saojoseparoquia.com.br,
  catedraldeguaxupe.com.br, sousagradosoufeliz.com, paroquiabp.com.br,
  blog de N. S. das Graças de Poços de Caldas) não foram lidos nesta
  sessão; as paróquias deles já têm horário pela diocese.
- Confissão: a diocese não publica.
- Lugar das capelas citadas só pelo nome.
