# Arquidiocese de Teresina (PI): fontes da pesquisa de 13/11/2026

Sé metropolitana em Teresina; sufragâneas: Parnaíba, Campo Maior, Oeiras,
Picos, Floriano, Bom Jesus do Gurguéia e São Raimundo Nonato. Arcebispo: Dom
Juarez Marques Sousa da Silva. Cúria: Av. Frei Serafim, 1693, Centro,
Teresina. Padroeira: Nossa Senhora das Dores (15 de setembro).

## Resumo

- **101 unidades pastorais** em `saida/teresina.json`: 1 catedral, 77
  paróquias, 11 áreas pastorais (`area_pastoral`) e 12 diaconias territoriais
  (`quase_paroquia`). É exatamente o que o Diretório 2026 conta no "Quadro
  geral": 78 paróquias (a catedral entre elas), 11 áreas pastorais
  (quase-paróquias) e 12 diaconias territoriais (quase-paróquias).
- Organização: 3 vicariatos territoriais e 13 foranias. Entre Rios (Teresina):
  Centro, Norte I, Sul I, Sul II, Sul III. Além Rio (Teresina e interior
  norte): Sudeste, Leste I, Leste II, Norte II, Rural III. Interior Sul: Rural
  I, Rural II, Rural IV. A forania e o vicariato estão na `observacao` de cada
  unidade.
- Cidades: Teresina (65 unidades, contando povoados da zona rural da capital)
  e mais 31 municípios: Miguel Alves (3), União (2), Valença do Piauí (2),
  Regeneração (2) e uma unidade em Lagoa Alegre, Amarante, Monsenhor Gil, Água
  Branca, São Pedro do Piauí, Angical do Piauí, São Gonçalo do Piauí,
  Palmeirais, Agricolândia, Jardim do Mulato, Hugo Napoleão, Curralinhos, Olho
  d'Água do Piauí, Pimenteiras, Inhuma, Novo Oriente do Piauí, Aroazes, Santa
  Cruz dos Milagres, Elesbão Veloso, São Félix do Piauí, Francinópolis, Barro
  Duro, Prata do Piauí, Passagem Franca do Piauí, Demerval Lobão, Nazária e
  Lagoa do Piauí.
- **98 com horário de missa**, todos do Diretório 2026 (março de 2026): 95 com
  confiança alta e 3 média (São Cristóvão de Teresina, Sagrado Coração de
  Nazária e Área Pastoral de Prata do Piauí, onde o Diretório dá uma "missa
  semanal" sem dizer o dia; o texto foi para `nao_cabe`).
- **3 sem horário** (`horarios: []`, confiança baixa): Área Pastoral Santo
  André (Bom Princípio, linha de missas em branco no Diretório), Área Pastoral
  Santa Rita (Povoado Santa Rita, criada em 22/02/2026, linha em branco) e Área
  Pastoral São Francisco das Chagas (Hugo Napoleão, criada em 07/03/2026, sem
  linha de missas).
- Três paróquias têm a matriz como santuário arquidiocesano e entraram como
  `paroquia` com a primeira igreja de tipo `santuario`: Nossa Senhora da Paz
  (Vila da Paz), São Francisco de Assis (Dirceu I) e Santa Cruz dos Milagres
  (santuário de romaria).
- Horário de confissão e adoração: o Diretório não publica, e nenhum entrou.
- Todo `id_banco` é null: o banco ainda não tem nada do Piauí.

## Fonte principal

- **Diretório Pastoral e Litúrgico Arquidiocesano 2026** (PDF de 300 páginas,
  criado em 30/03/2026), publicado no site da arquidiocese:
  https://arquidiocesedeteresina.org.br/wp-content/uploads/2026/03/Diretorio-Pastoral-e-Liturgico-Arquidiocesano-2026.pdf
  Páginas 58 a 92: uma ficha por unidade com endereço, telefone, Instagram,
  e-mail, data de criação, número de comunidades, festa do padroeiro,
  expediente da secretaria, MISSAS (MATRIZ) e clero. Página 151: o quadro geral
  com a contagem (112 circunscrições pastorais).
- Os telefones, Instagram e e-mails do JSON são os do Diretório. Quando a ficha
  traz dois telefones, o primeiro foi para `telefone` e o outro ficou na
  `observacao`. A paróquia Santo Inácio de Loyola tem um segundo número com DDD
  74 que ficou de fora.

## Conferências

- Páginas de forania do site (https://arquidiocesedeteresina.org.br/forania-centro/,
  `-norte-i`, `-norte-ii`, `-leste`, `-sudeste`, `-sul-i`, `-sul-ii`,
  `-rural-i`, `-rural-ii`, `-rural-iii`, `-rural-iv`), lidas em 13/11/2026:
  versão anterior da mesma lista, sem horários, com 10 foranias (ainda sem Sul
  III e com Leste único). Quando diverge do Diretório (pároco, telefone,
  e-mail), seguimos o Diretório, que é de 2026. A Catedral aparece ali com o
  endereço Rua Olavo Bilac, 1330 e o telefone (86) 3222-2584 (anotado na
  observação).
- https://nsfatima.org.br/horariosdemissas/ (site da Paróquia N. S. de
  Fátima, bairro de Fátima, página de 10/02/2024): mesmos horários da matriz
  que o Diretório, e mais a Igreja do Sagrado Coração de Jesus (Alto da Graça),
  com missa segunda e sábado às 19h. Entrou como comunidade da paróquia.
- https://www.santuariodesantacruzdosmilagres.com/ (site do santuário): mesmos
  horários do Diretório.
- GCatholic: https://gcatholic.org/dioceses/diocese/tere0.htm (estatística
  de 2022: 110 paróquias e 31 missões; página atualizada em 09/11/2026) e
  https://gcatholic.org/churches/local/tere0 (78 igrejas, 70 marcadas como
  paróquia). Toda paróquia do GCatholic corresponde a uma unidade do
  Diretório. O GCatholic está atrasado: não tem as criadas desde 2019 (Santa
  Edwiges, Santa Rita de Cássia e São Paulo VI, São José e Santa Luzia, São
  José de Jardim do Mulato, São Sebastião de União, as áreas pastorais de 2025
  e 2026, entre outras) e marca sem "paróquia" algumas unidades que hoje são
  áreas pastorais ou diaconias (Santa Clara, Prata do Piauí, Olho d'Água do
  Piauí, Nossa Senhora Aparecida). Ficaram fora do JSON as entradas que não
  são unidade: o Seminário Sagrado Coração de Jesus (Angelim) e o antigo
  santuário de Santa Cruz dos Milagres (o GCatholic lista o novo e o antigo).

## O que ficou fora do JSON (pendências)

O Diretório conta também 2 diaconias setoriais, 3 capelanias e 6 capelas.
Não têm território de paróquia, e a fonte não diz a que paróquia pertencem;
ficam aqui com o que foi publicado:

- Capela Mater Dolorosa (Colégio Dom Barreto), Rua Gabriel Ferreira, 743,
  Centro-Norte. (86) 98150-6432, @capelamaterdolorosa123,
  cmaterdolorosa@gmail.com. Missas: domingo 9h e 17h; segunda, quarta, quinta
  e sexta 6h50. Forania Centro.
- Capela Nossa Senhora das Graças (Hospital Getúlio Vargas), Rua 1º de Maio,
  s/n, Centro. (86) 98819-0698. Missas: domingo 7h e 9h no pátio do hospital;
  segunda a sexta 12h; quarta 17h; quinta 8h. Forania Centro; é a referência
  da Diaconia Setorial Nossa Senhora da Saúde.
- Capela do Colégio das Irmãs (Sagrado Coração de Jesus), Av. Frei Serafim,
  1793, Centro. Sem horário.
- Capela do Colégio Diocesano (São Francisco de Sales), Praça Saraiva, 363,
  Centro. Sem horário.
- Capelania Nossa Senhora do Perpétuo Socorro (Assembleia Legislativa), Av.
  Marechal Castelo Branco, 201, Cabral. Sem horário.
- Capelania São José (Hospital Areolino de Abreu), Rua José Soares Ferry,
  2420. Sem horário. Forania Norte I.
- Capela São José (Cemitério São José), Rua Rui Barbosa, s/n, Mafuá. Sem
  horário. Forania Norte I.
- Capelania São José (Lar de Misericórdia), Rua Professor Madeira, 1300, Horto
  Florestal. (86) 3232-4868. Missas: domingo 10h e 17h; terça a sexta 7h30;
  sábado 17h. Forania Leste I.
- Capela São Judas Tadeu (Cemitério São Judas Tadeu), Av. João XXIII, s/n,
  Noivos. Linha de missas em branco. Forania Leste I.
- Diaconia Setorial Nossa Senhora da Saúde (hospitais) e Diaconia Setorial
  Effatá (pessoas com deficiência sensorial; Capela São Miguel Arcanjo, Av.
  Frei Serafim, 3200, Centro). Sem horário.

Jurisdição do Ordinariado Militar (não é da arquidiocese, fora do JSON):
Paróquia Militar Santa Teresinha do Menino Jesus (25º BC, Praça Marechal
Floriano Peixoto, Centro-Norte) e Capelania São Sebastião da Polícia Militar
(Rua Higino Cunha, s/n, Ilhotas; missas domingo 7h30 e 11h, sábado 19h).

## Contatos que ficaram como publicados ou de fora

- Instagram com acento ou cedilha (fora): capelinhagraça (N. S. das Graças,
  Capelinha de Palha), paróquiarosariodefatima (Santa Fé), senhoradorosário.ang
  (Angical do Piauí).
- Instagram que parece ter erro, mas está como publicado: diaconia_saoloureco,
  diaconia_sagradocoracaodejesu, paroq_uiasaojoao, areapastoralclaraefrrancisco.
- E-mail com acento (fora): Perpétuo Socorro do Mafrense e Área Pastoral de
  Prata do Piauí. E-mail da Paróquia São Paulo está como publicado
  (paroquiasaopaulodrive@gamil.com).

## O que falta para o próximo estado desta pesquisa

- Confissão e adoração: nenhuma fonte oficial publica.
- Missas das comunidades: o Diretório só dá as da matriz, e a arquidiocese tem
  1.277 comunidades. Só a Igreja do Sagrado Coração de Jesus (paróquia de
  Fátima) entrou.
- Os dias da "missa semanal" de São Cristóvão (18h), Nazária (19h) e Prata do
  Piauí (6h30).
- Horários das três áreas pastorais novas (Santo André, Santa Rita, Hugo
  Napoleão).

## Circunscrições do Piauí (conferência pedida)

O GCatholic dá a província de Teresina com 7 sufragâneas: Bom Jesus do
Gurguéia, Campo Maior, Floriano, Oeiras, Parnaíba, Picos e São Raimundo
Nonato; a lista de igrejas especiais do Brasil
(https://gcatholic.org/churches/data/all-BR) tem 8 catedrais no Piauí, uma por
circunscrição. São as 8 dos pedidos; nenhuma prelazia ou diocese nova. Fora
delas, só o Ordinariado Militar, com a paróquia e a capelania de Teresina
listadas acima.

Atenção para a pesquisa de Oeiras: Valença do Piauí, Pimenteiras, Inhuma, Novo
Oriente do Piauí, Aroazes, Elesbão Veloso, São Félix do Piauí, Francinópolis,
Barro Duro, Prata do Piauí, Passagem Franca do Piauí e Santa Cruz dos Milagres
são de Teresina (foranias Rural II e Rural IV), segundo o Diretório 2026.
