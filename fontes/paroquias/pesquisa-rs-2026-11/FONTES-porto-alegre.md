# Arquidiocese de Porto Alegre (RS): fontes da pesquisa de 13/11/2026

Sé metropolitana em Porto Alegre; sufragâneas: Caxias do Sul, Montenegro,
Novo Hamburgo e Osório. Arcebispo: Cardeal Jaime Spengler, OFM. Cúria: Rua
Espírito Santo, 95, Centro Histórico, Porto Alegre, (51) 3228-6199,
curia@arquipoa.org.br. 29 municípios: Porto Alegre, Alvorada, Arambaré,
Arroio dos Ratos, Barão do Triunfo, Barra do Ribeiro, Butiá, Cachoeirinha,
Camaquã, Canoas, Cerro Grande do Sul, Charqueadas, Chuvisca, Cristal (em
parte), Eldorado do Sul, Esteio, General Câmara, Glorinha, Gravataí, Guaíba,
Mariana Pimentel, Minas do Leão, Nova Santa Rita, São Jerônimo, Sapucaia do
Sul, Sentinela do Sul, Sertão Santana, Tapes e Viamão.

## Resumo

- **161 unidades** em `saida/porto-alegre.json`: 1 catedral (Madre de Deus),
  1 basílica (Nossa Senhora das Dores), 156 paróquias, 2 santuários sem
  paróquia (Santuário Arquidiocesano Mãe de Deus e Santuário da Gruta de
  Nossa Senhora de Lourdes) e 1 reitoria (Reitoria das Ilhas, Nossa Senhora
  da Boa Viagem, como `area_pastoral`).
- Por cidade: Porto Alegre 85, Canoas 15, Gravataí 10, Viamão 8, Alvorada 6,
  Sapucaia do Sul 5, Cachoeirinha 4, Esteio 4, Guaíba 4, General Câmara 2 e
  uma em cada um dos outros 18 municípios. Cristal não tem paróquia: parte do
  município é atendida pela Paróquia São João Batista de Camaquã e a outra
  parte pela Arquidiocese de Pelotas (Guia Pastoral 2026).
- **148 com horário** (confiança `media`), 823 linhas de horário de missa;
  **13 sem horário** (confiança `baixa`, `horarios: []`), listadas em
  `SEM-HORARIO-porto-alegre.txt`. A Paróquia São João Paulo II (Chuvisca)
  só publica a missa da Capela São José (domingo às 10h, no `nao_cabe`), sem
  missa na matriz; entrou como `media` e também está na lista de sem horário.
- Nenhuma confissão nem adoração publicada para as unidades (a única adoração
  da página é da Igreja Divino Espírito Santo do Bom Fim, que não é unidade;
  ver abaixo).
- Todo `id_banco` é null: o banco não tem nada do Rio Grande do Sul.
- Por que `media` e não `alta`: a página de paróquias do site não tem data e
  está em parte desatualizada (párocos diferentes dos do Guia Pastoral de
  junho de 2026 em várias paróquias, por exemplo Sagrado Coração de Jesus e
  Santa Hedviges em Alvorada, Santa Clara em Porto Alegre, Sagrado Coração de
  Jesus em Canoas). Os horários podem ter mudado junto.

## Fontes oficiais (lidas em 13/11/2026)

1. **Página de paróquias do site da Arquidiocese**:
   https://www.arquipoa.com/paroquias . Uma ficha por paróquia com endereço,
   telefone, WhatsApp, e-mail, clero e "Horário de Missa". A lista inteira
   vem por cidade num POST para `https://www.arquipoa.com/pages/filterCity`
   (`value` = id da cidade, de 1 a 29); o filtro por vicariato
   (`pages/fillVic`) devolve vazio. Foram 169 fichas, 158 delas unidades (as
   outras são igrejas sem paróquia, capelanias militares e o centro do Opus
   Dei; ver abaixo). Fonte dos horários, dos endereços e dos contatos.
2. **Guia Pastoral 2026** (PDF de 129 páginas, "versão atualizada
   23/06/2026"), ligado em https://www.arquipoa.com/guia26 :
   https://drive.google.com/file/d/1-WzHAo9GuVP1Ci5Se4WrUksb61t_7Poq/view .
   Dá a contagem oficial (159 paróquias no quadro por município), os 8
   vicariatos com suas paróquias e áreas, o código e a data de criação de
   cada paróquia, e a seção "Santuários / Capelanias / Igrejas". Usado para a
   lista, para vicariato e área, e para preencher contato que faltava no site.
   Não traz horários de missa.
3. **Página de vicariatos**: https://www.arquipoa.com/vicariatos (os 8
   vicariatos criados em julho de 2024 em Porto Alegre e os 3 de fora:
   Canoas, Gravataí e Guaíba). Está incompleta no Vicariato de Guaíba (faltam
   São Jerônimo, Sentinela do Sul, Sertão Santana e Tapes, que estão no Guia).

## A lista e a contagem

O quadro do Guia soma 159 paróquias (Porto Alegre 85, Vicariato de Canoas
25, Gravataí 29, Guaíba 21), mas a soma das parcelas dá 160 e o quadro põe
14 em Canoas quando a lista do mesmo Guia tem 15. Os 85 de Porto Alegre
incluem os dois santuários do Vicariato Leste e a Reitoria das Ilhas. O JSON
tem 161 porque General Câmara entrou com duas unidades: Santo Amaro (distrito
de Santo Amaro do Sul) e São Nicolau (sede) aparecem no Guia com o mesmo
código (146) e o mesmo CNPJ, mas o site e o GCatholic as listam como duas
paróquias, cada uma com endereço, e-mail e horários próprios.

Vicariatos (Guia Pastoral 2026): Centro, Leste, Norte, Oeste e Sul de Porto
Alegre; Canoas (Canoas, Esteio, Nova Santa Rita, Sapucaia do Sul); Gravataí
(Alvorada, Cachoeirinha, Glorinha, Gravataí, Viamão); Guaíba (os outros 19
municípios). Vicariato e área de cada unidade estão na `observacao`.

Conferência com o GCatholic (https://gcatholic.org/churches/local/pale1 ,
atualizado em 09/11/2026; estatística de 2022: 160 paróquias):

- Todas as paróquias do GCatholic estão no JSON. Diferenças de nome: Viamão
  "Divina Providência" é hoje Nossa Senhora das Graças (o e-mail continua
  divinaprovidencia@); Arroio dos Ratos aparece como "São José" com o nome
  Paróquia Santa Bárbara; Guaíba "Santa Rita" é Santa Rita de Cássia.
- O anuário do GCatholic não tem: Nossa Senhora Desatadora dos Nós (Alvorada,
  criada em 12/08/2022), a Reitoria das Ilhas e, em Porto Alegre, São
  Martinho, São Miguel Arcanjo, São Pedro, São Vicente de Paulo, São Vicente
  Mártir, São Vicente Pallotti e Senhor Bom Jesus (a lista do GCatholic para
  em São Sebastião Mártir). Seguimos a Arquidiocese.
- O GCatholic põe Nossa Senhora do Líbano como igreja maronita "de outro
  rito" no território; a Arquidiocese a conta como paróquia do Vicariato
  Centro (código 017, "paróquia capelania" de 1961). Entrou como paróquia,
  com a nota de rito maronita.
- Fora do JSON, como no GCatholic: os seminários de Viamão (Nossa Senhora da
  Conceição e São João Batista) e a Igreja Cristo Rei de Charqueadas, que é
  comunidade da Paróquia Nossa Senhora dos Navegantes (está no `nao_cabe`).

Matrizes que são santuário (primeira igreja com `tipo: santuario`, a
unidade continua `paroquia`): Nossa Senhora Aparecida (Ipanema), Nossa
Senhora do Rosário (Centro Histórico), Nossa Senhora do Rosário de Fátima,
Nossa Senhora do Rosário de Pompéia, Nossa Senhora do Trabalho e São Luís
Guanella, Nossa Senhora dos Navegantes, Santa Rita de Cássia e Santíssimo
Sacramento e Santa Teresinha (Santuário Arquidiocesano de Santa Teresinha
desde 01/10/2023).

## Igrejas que não são unidade (com o que a Arquidiocese publica)

Não entraram no JSON porque nem o site nem o Guia dizem a que paróquia
pertencem; o Guia só dá o vicariato. Ficam como pendência, com os horários do
site (13/11/2026), para quem for ligá-las a uma paróquia:

- Igreja Divino Espírito Santo, Av. José Bonifácio, 753, Bom Fim (Vicariato
  Centro), (51) 3331-2964. Missa terça a sábado às 17h, domingo às 10h.
  Adoração segunda a sábado das 9h às 16h30 e domingo das 11h às 13h.
- Igreja da Ressurreição (Colégio Anchieta), Av. Nilo Peçanha, 1521, Três
  Figueiras (Vicariato Oeste), (51) 3328-6000. Missa sábado às 18h30,
  domingo às 11h e 18h30.
- Igreja Nossa Senhora de Monte Claro (Capelania dos Poloneses), Av.
  Presidente Franklin Roosevelt, 920, São Geraldo (Vicariato Oeste). Missa
  segunda a sexta às 7h, sábado às 7h30, domingo às 7h30 e 9h30 (em polonês,
  homilia em português).
- Igreja São José (jesuítas), Av. Alberto Bins, 467, Centro (Vicariato
  Centro), (51) 3224-5829, comunidadesaojosepoa@gmail.com. Missa segunda a
  sexta às 12h10, sábado às 17h.
- Igreja Senhor dos Passos (Santa Casa), Rua Annes Dias, 285, Centro
  (Vicariato Centro). Missa segunda a sexta às 12h, sábado às 16h.
- Igreja Senhor Jesus do Bom Fim, Av. Osvaldo Aranha, 462, Bom Fim
  (Vicariato Centro), (51) 3311-0883. Sem horário publicado.
- Igreja Nossa Senhora do Carmo (Carmelitas), Av. Loureiro da Silva, 1735,
  Cidade Baixa (Vicariato Centro), (51) 3224-0412. Só no Guia, sem horário.
- Santuário Nossa Senhora de Schoenstatt, Rua Carajá, 233, Vila Assunção
  (Vicariato Sul). Só no Guia, sem horário.
- Santuário São Rafael, Rua Riachuelo, 508, Centro Histórico: entrou como
  igreja da Basílica Nossa Senhora das Dores, porque a ficha da basílica põe
  a missa de sábado às 16h "na capela São Rafael".
- Fora por serem de outra circunscrição: as capelanias do Ordinariado
  Militar (Nossa Senhora Aparecida, Base Aérea de Canoas; Nossa Senhora do
  Loreto, V COMAR, Canoas; e a capelania do Comando Militar do Sul, Rua dos
  Andradas, 562) e o Centro Cultural Mirador (Prelazia do Opus Dei).

## Comunidades sem endereço

As fichas citam comunidades com horário, mas sem bairro nem endereço. Pela
regra (capela só com nome e lugar), ficaram no `nao_cabe` da matriz, com os
horários em texto: Menino Jesus de Praga, Nossa Senhora do Trabalho, Santa
Rosa de Lima e Divino Espírito Santo (Porto Alegre); Santa Hedviges e São José
Operário (Alvorada); Divino Espírito Santo e São Vicente de Paulo
(Cachoeirinha); Imaculada Conceição, Nossa Senhora da Conceição, Santa Luzia,
Santo Antônio e São Paulo Apóstolo (Canoas); Santa Ana (Gravataí); Nossa
Senhora da Paz (Guaíba); Nossa Senhora Aparecida (Sapucaia do Sul, oito
comunidades com semanas do mês); Nossa Senhora dos Navegantes (Charqueadas,
seis comunidades; a matriz só tem missa no sábado); Santa Bárbara (Arroio
dos Ratos); São João Paulo II (Chuvisca, Capela São José).

Correção feita no texto da Paróquia Nossa Senhora Aparecida de Sapucaia do
Sul: "primeira e terça quinta-feira" e "primeira e terça sexta" viraram
"primeira e terceira" (erro evidente de digitação).

## Divergências entre o site e o Guia Pastoral

O JSON segue o site (mesma página dos horários) e usa o Guia só onde o site
não tem o dado. Diferenças anotadas para conferência:

- Endereço (também na `observacao` da unidade): Desatadora dos Nós, Alvorada
  (site: Av. Vista Alegre, 973, Umbu; Guia: Rua Vista Alegre, 973, Jardim
  Algarve); Nossa Senhora da Conceição, Canoas (site: Rua Engenheiro
  Rebouças, 131; Guia: Rua Teófilo Otoni, 67); Nossa Senhora de Fátima,
  Guaíba (site: Rua Dante Razeira, 39, Colina; Guia: Largo Nossa Senhora de
  Fátima, 107, Ramada); Santo Antônio do Partenon (site: Rua Luís de Camões,
  35; Guia: Rua Paulino Chaves, 291); Santa Teresinha do Menino Jesus
  (São Carlos 445 ou 455); Nossa Senhora das Dores, Sentinela do Sul (Rua
  Joaquim ou Benjamin Rodrigues Barbosa, 125); Santo Amaro (Demétrio
  Ribeiro, 351 ou 353).
- Telefone (o JSON tem o do site): Divino Espírito Santo, Cachoeirinha (site
  3438-5965, Guia 3438-6965); Santa Luzia, Canoas (3472-6854 / 3463-2717);
  Sagrada Família, Gravataí (3047-4368 / 3128-2021); São José, Gravataí
  (3042-3533 / 3497-7741); Nossa Senhora Medianeira, Porto Alegre
  (3209-2461 / 3223-8648); Divino Pai Eterno (2165-1165 / 2165-1162); Nossa
  Senhora do Trabalho (3340-3709 / 2165-5927); Nossa Senhora do Perpétuo
  Socorro (3334-8012 / 3276-6082); São Vicente Pallotti (3273-1432 /
  3391-3326); São Luís Orione (3248-7065 / 3042-1894); São Martinho
  (3249-4477 / 3344-2562).
- Telefone que veio do Guia porque o site não tinha: Desatadora dos Nós
  (2165-3161), Mãe do Perpétuo Socorro (3386-2024), Nossa Senhora dos
  Navegantes de Porto Alegre (99890-1265), Santa Cruz de Porto Alegre
  (3246-3847), São João Paulo II de Chuvisca (99584-2194). Sertão Santana:
  o site dá 99888-4104 sem DDD; ficou o fixo do Guia, 3495-1125.
- Arambaré: o Guia dá um celular com DDD 48 (outro estado, possivelmente
  pessoal); ficou o fixo do site, (51) 3676-1063.
- E-mail: Desatadora dos Nós (site desatadora@, Guia desatadoradosnos@);
  ficou o do site. Nossa Senhora de Fátima (Vila do IAPI): o Guia está
  truncado; ficou nsfatima@ do site.
- WhatsApp da Paróquia Nossa Senhora da Conceição de Canoas: o site publica
  51 9429-9565 (sem o 9 inicial); ficou como publicado.

## Instagram e redes

As fichas do site só citam um perfil: igrejadasdorespoa (Basílica Nossa
Senhora das Dores). Nenhum perfil foi aberto por dentro. As demais fichas
trazem só links do YouTube (vídeos da Arquidiocese sobre a paróquia). Para as
13 unidades sem horário a fonte oficial não cita perfil nenhum; a próxima
rodada de busca terá de achar o perfil pelo nome da paróquia e a cidade.

## Notas por unidade

- Paróquia São Pedro (Porto Alegre): a ficha diz "Até o mês de março estão
  suspensas os horários das 12h e no sábado às 16h", sem ano. Os horários
  entraram completos; o aviso está no `nao_cabe`.
- Paróquia Nossa Senhora da Conceição (Porto Alegre): a ficha avisa que, a
  partir de 12 de outubro, as missas das 16h passaram para as 17h; os
  horários publicados já estão em 17h.
- Paróquia Santa Teresinha do Menino Jesus: as missas de terça, quinta e
  sexta são na capela, com entrada lateral pela Rua São Carlos (na
  `observacao` do horário).
- Nossa Senhora dos Navegantes (Porto Alegre): terça e quinta às 7h com as
  Laudes; "domingo jubilar" no último domingo do mês às 17h (no `nao_cabe`,
  porque "último" não cabe em `semanas`).
- Missas de dia fixo do mês (dia 12, 13, 22, 26, 28) ficaram no `nao_cabe`.

## O que falta para o próximo estado desta pesquisa

- Horários das 13 unidades de `SEM-HORARIO-porto-alegre.txt` (sem busca na
  web nesta sessão; a Arquidiocese não cita site nem perfil delas).
- Confissão e adoração: nenhuma ficha publica (falar com as secretarias).
- Endereço das comunidades citadas sem lugar (lista acima).
- Conferir se os horários do site continuam valendo, dado que o clero das
  fichas está atrás do Guia de junho de 2026.
