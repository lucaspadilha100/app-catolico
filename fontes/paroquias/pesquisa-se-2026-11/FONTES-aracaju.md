# Arquidiocese de Aracaju (SE): fontes da pesquisa de 13/11/2026

Sé em Aracaju; cobre a Grande Aracaju e o agreste de Itabaiana. Arcebispo:
Dom Josafá Menezes da Silva (desde 2024, pelo anuário). Cúria Metropolitana:
Praça Olímpio Campos, 228, Centro, Aracaju, CEP 49010-040, (79) 3216-3000,
comunicacao@arquidiocesedearacaju.org.

## Resumo

- **113 unidades pastorais** em `saida/aracaju.json`: 1 catedral, 106
  paróquias e 6 santuários (São Judas Tadeu, N. S. Aparecida do Bugio,
  Eucarístico N. S. Menina, Arquidiocesano São José, N. S. da Vitória em São
  Cristóvão e o Paróquia Santuário N. S. Divina Pastora). O site organiza
  tudo em 6 vicariatos regionais (São Pedro, São Mateus, São Paulo, São
  Marcos, São João, São Lucas, mais um São Tiago que só aparece nas fichas)
  e 17 foranias.
- **94 com horário** (confiança alta), todas com a fonte na página da
  própria unidade no site da arquidiocese, lida em 13/11/2026.
- **19 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação.
- **105 capelas e comunidades** além das matrizes, só as que a página da
  paróquia nomeia nos horários.
- Todo `id_banco` é null: o banco ainda não tem nada de Sergipe.

## Lista das unidades

A lista vem das três páginas de "Paróquias, Todas" do site (119 fichas), mais
as seis páginas de vicariato (conferidas, não trouxeram unidade nova). Do
total de fichas:

- **4 capelanias ficaram fora do JSON** (o formato não tem a categoria):
  Capelania Bom Jesus dos Pobres (Conj. Augusto Franco, Aracaju, tel (79)
  3021-4522), Capelania do Divino Salvador (R. Laranjeiras, 110, Centro,
  Aracaju, tel (79) 3222-9929, missas dom 7h30, seg a sex 17h30, qua e sáb
  12h30), Capelania Militar São Paulo Apóstolo (igreja São Sebastião, Conj.
  Tiradentes, Aracaju) e Capelania Nosso Senhor dos Passos (Bairro Olaria,
  Aracaju). Se o formato ganhar a categoria, os dados estão nas páginas
  listadas abaixo.
- **2 fichas eram duplicata** e viraram uma entrada só: o Santuário
  Eucarístico N. S. Menina (duas fichas iguais) e a Paróquia N. S.
  Auxiliadora, que o site lista como "Bairro Suissa" e como "Bairro
  Cirurgia" com o mesmo endereço (Rua Dom Bosco, 650) e telefone.

## O que NÃO foi usado: a página agregada "Horários de Missa"

A página https://arquidiocesedearacaju.org/horarios-de-missa mostra, para
dezenas de unidades, o MESMO quadro (domingo 8h e 17h, terça a sábado 19h,
truncado em pontos diferentes), e até repete sob paróquias de Aracaju linhas
de capelas de Itabaiana ("Shopping Peixoto", "Pov. Gandú I"). Ela contradiz
as páginas das próprias unidades (a Catedral, por exemplo: seg a sáb 7h e
16h30, domingo 8h, 10h30, 16h e 18h). Por parecer preenchimento de modelo,
nada saiu de lá; os horários do JSON vêm só das fichas individuais. Das 119
fichas individuais, apenas uma (Capelania Bom Jesus dos Pobres, fora do
JSON) trazia o quadro genérico.

## Páginas do site da arquidiocese (lidas em 13/11/2026)

- https://arquidiocesedearacaju.org/ (menu, contatos da cúria)
- https://arquidiocesedearacaju.org/paroquias-todas/ (3 páginas, a lista)
- https://arquidiocesedearacaju.org/paroquias-vicariato-sao-pedro/ (e são-mateus,
  sao-paulo, sao-marcos, sao-joao, sao-lucas)
- https://arquidiocesedearacaju.org/curia-metropolitana (setores e telefones)
- https://arquidiocesedearacaju.org/catedral-metropolitana (história)
- Ficha de cada unidade em https://arquidiocesedearacaju.org/paroquias/<nome>/
  com vicariato/forania, telefone, e-mail, confissões, endereço, clero e
  "Horários de Missas"; a URL exata de cada uma está em `fontes` no JSON.

## Conferência contra o anuário (não usado para horário)

- https://gcatholic.org/churches/local/arac0.htm (GCatholic, atualizado em
  09/11/2026): 117 igrejas, sendo 1 catedral e cerca de 111 fichas de
  paróquia (4 delas como santuário). Bate com as 113 unidades + 4
  capelanias do site, com as diferenças esperadas: o GCatholic duplica
  Santa Lúcia, ainda não traz a Paróquia Santa Clara de Assis e Santa Dulce
  dos Pobres (Itabaiana) e conta separado o Seminário Maior e igrejas
  históricas de São Cristóvão que não são unidades pastorais; a igreja São
  Sebastião (da capelania militar) aparece lá como "other church".
- https://catholic-hierarchy.org/diocese/darac.html (endereço da cúria e site
  oficial).

## Contatos que ficaram de fora (regra: nunca contato pessoal)

Em 12 fichas o e-mail ou o telefone publicado é claramente de uma pessoa
(nome próprio no endereço, "vivo"/"oi" no número, nome entre parênteses) e
não da secretaria; ficou de fora, com o motivo na observação da unidade:
Alagadiço (Frei Paulo), Lamarão, Santo Antônio (Aracaju), São Lucas
Evangelista, Cumbe, Macambira, São Domingos, Malhador, Sapé, São João
Evangelista (Marcos Freire III), N. S. Aparecida (cidade de N. S. Aparecida)
e São Cristóvão (cidade de N. S. das Dores).

## Pendências

- Horário das 19 unidades sem fonte: Atalaia Nova, Carmópolis, Feira Nova,
  General Maynard, Jesus Misericordioso e N. S. do Carmo (Itabaiana),
  N. S. d'Ajuda e Sant'Ana do Sapé (Itaporanga), Laranjeiras, Malhador,
  Maruim, N. S. Aparecida, N. S. das Dores, Taiçoca de Fora, N. S. do
  Socorro (Centro), Pinhão, Rosário do Catete, Siriri e São Domingos. O
  caminho provável são os perfis das paróquias no Instagram, que a busca não
  indexa por dentro.
- Instagram das paróquias: não levantado nesta rodada (o site não traz os
  perfis; seriam mais de cem buscas uma a uma).
- E-mail de Moita Bonita está como o site publica, com domínio estranho
  (`pstmj01@hotail.com`); e o de Santa Luzia (Aracaju) é
  `santaluziamartir@gmail.com.br`, também como publicado.
- O que não coube no formato ficou em `nao_cabe`: "Celebrações" sem missa
  (Carira, Macambira, Serra do Machado, Ribeirópolis, Rosário de Aracaju),
  missa do dia 13 em Santa Dulce (Aruana), missa da última quarta no Bonfim
  (Rosa Elze), confissões da 5ª quarta em São Pio X, sábados "nas
  comunidades" em Santo Amaro e os 1º e 3º sábados da Capela N. S. de
  Lourdes (Loreto).
- Algumas fichas trazem erro de digitação do próprio site, corrigido só
  quando óbvio ("Quita-feira", "setxa-feira", "Conveto do Carmo"); o resto
  foi mantido como está.
