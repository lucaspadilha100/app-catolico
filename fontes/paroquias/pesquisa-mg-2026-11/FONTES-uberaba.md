# Arquidiocese de Uberaba (MG): fontes da pesquisa de 13/11/2026

Sé metropolitana em Uberaba; Triângulo Mineiro e Alto Paranaíba. Sufragâneas:
Uberlândia, Patos de Minas e Ituiutaba. Arcebispo: Dom Paulo Mendes Peixoto
(GCatholic). Cúria: Praça Dom Eduardo, 56, Mercês, Uberaba, (34) 3312-9565,
assessoriadeimprensa@arquidiocesedeuberaba.com.br. Padroeiros: Sagrado
Coração de Jesus e Santo Antônio.

## Resumo

- **69 unidades** em `saida/uberaba.json`: 1 catedral (Sagrado Coração de
  Jesus), 3 basílicas (Santíssimo Sacramento em Sacramento, Abadia em Uberaba,
  Abadia d'Água Suja em Romaria), 2 santuários-paróquia (Medalha Milagrosa em
  Uberaba, São Domingos de Gusmão em Araxá), 58 paróquias e 5 quase-paróquias
  (Santa Efigênia, N. S. de Lourdes Mãe da Esperança, Santo Antônio de Pádua,
  São Miguel Arcanjo e São Paulo Apóstolo, todas em Uberaba).
- 9 foranias: Catedral, Nossa Senhora da Abadia, Nossa Senhora das Graças,
  Ressurreição (as quatro em Uberaba), Araxá, Conceição das Alagoas, Frutal,
  Romaria e Sacramento. A forania vai na observação de cada unidade.
- Cidades: Uberaba (33), Araxá (9), Frutal (4), Sacramento (3), Conceição das
  Alagoas (2), Prata (2) e uma em cada: Água Comprida, Aparecida de Minas,
  Campo Florido, Comendador Gomes, Conquista, Delta, Fronteira, Nova Ponte,
  Pedrinópolis, Pirajuba, Planura, Ponte Alta, Romaria, Santa Juliana, Tapira,
  Veríssimo. A cidade é a que a página da paróquia dá; Aparecida de Minas,
  Ponte Alta e Desemboque (Sacramento) parecem ser distritos, a conferir.
- **69 com horário de missa, todas com confiança alta**: cada paróquia tem
  página própria no site da arquidiocese com um bloco de horários (missas na
  matriz, capelas, comunidades, às vezes confissões e adoração). 602 horários
  lançados (535 missas, 37 confissões, 30 adorações) em 269 igrejas (69
  matrizes e 200 capelas/comunidades com nome e lugar).
- O que não cabe no formato foi para `nao_cabe` (missa "todo dia 19",
  "último sábado do mês", setores sem endereço, comunidades rurais com missa
  mensal "conforme programação"). Missa sem hora na fonte não entrou como
  horário.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem de https://arquidiocesedeuberaba.com.br/paroquias (4 páginas) e
das páginas por cidade (`/paroquias/cidade/<cidade>`, Uberaba em 2 páginas),
que somam 69 páginas de paróquia, todas baixadas.

Conferência com o GCatholic (atualizado em 09/11/2026: 67 paróquias no
anuário de 2022, 69 igrejas listadas):

- Estão no site e não no GCatholic: Paróquia de São João Batista (Uberaba,
  criada em 10/04/2026), Quase-Paróquia Santa Efigênia (2022), Quase-Paróquia
  São Miguel Arcanjo, Paróquia Nossa Senhora do Desterro (Desemboque,
  Sacramento) e Paróquia Menino Jesus de Praga e São Francisco de Assis
  (Frutal, criada em 30/10/2025; o GCatholic lista a igreja sem marca de
  paróquia).
- Está no GCatholic e não no site: **Paróquia Pessoal de Nossa Senhora da
  Saúde** (Igreja Divino Espírito Santo, Uberaba, criada em 11/02/2007).
  Ficou fora do JSON: a arquidiocese não a lista. Pendência.
- O GCatholic marca "N. S. Rainha da Paz" (Uberaba) como paróquia; no site
  ela é comunidade da Paróquia Santo Antônio de Sant'Anna Galvão e entrou
  assim.

## Páginas lidas (13/11/2026)

- https://arquidiocesedeuberaba.com.br/paroquias e páginas de cidade
- Uma página por unidade: `https://arquidiocesedeuberaba.com.br/paroquia/<slug>`
  (a URL de cada uma está em `fontes`). Campos usados: cidade, forania,
  e-mail, telefone, redes sociais, endereço e o bloco "Expediente" com os
  horários.
- O GCatholic dá o site antigo (arquidiocesedeuberaba.org.br), que não
  resolve mais; o atual é arquidiocesedeuberaba.com.br.
- O servidor responde 406 (Mod_Security) a um navegador genérico; com o
  cliente padrão do curl respondeu normalmente. Nada foi contornado.

## Decisões de leitura

- Catedral: a página se chama "Paróquia do Sagrado Coração de Jesus e de
  Santo Antônio e São Sebastião, Catedral Metropolitana de Uberaba"; entrou
  como "Catedral Metropolitana Sagrado Coração de Jesus".
- N. S. das Graças (Uberaba): a fonte traz domingo "7h, 9h3 e às 19h"; o
  "9h3" não foi lançado (vai em `nao_cabe`).
- Quase-Paróquia São Miguel Arcanjo: a página própria dá quarta 19h30 e
  domingo 17h; a página da Paróquia N. S. de Lourdes dá domingo 17h e quarta
  17h30. Ficou a página própria.
- Paróquia N. S. do Desterro: só a 3ª quinta-feira do mês às 19h; a
  secretaria é a da Basílica de Sacramento (mesmo telefone e Instagram).
- Comunidades religiosas (congregações, colégios) só entraram quando a
  página dá missa com hora.
- Telefones como publicados; WhatsApp só quando a página o marca.

## Instagram (anotado das páginas da arquidiocese)

Os perfis vieram dos botões "Redes Sociais" de cada página; nenhum foi aberto.
Todas as unidades têm horário, então não há lista de busca pendente.

## O que falta para o próximo estado

- A Paróquia Pessoal de Nossa Senhora da Saúde (GCatholic) precisa de
  confirmação: existe ainda? pertence a Uberaba?
- Confissões fora das unidades que publicam (a maioria diz "agendar").
- Datas das missas mensais das comunidades rurais (Basílica de Sacramento,
  Romaria, Prata, Tapira) que seguem "programação divulgada mensalmente".
