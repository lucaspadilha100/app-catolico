# Arquidiocese de Botucatu (SP): fontes da pesquisa de 13/11/2026

Sé metropolitana em Botucatu; centro-sul paulista (Botucatu, Avaré, Lençóis
Paulista, São Manuel, Laranjal Paulista, Conchas). Arcebispo: Dom Maurício
Grotto de Camargo. Cúria: Rua Dr. Costa Leite, 668, Centro, Botucatu,
(14) 3811-5900. Padroeira: Sant'Ana (26 de julho).

## Resumo

- **50 unidades** em `saida/botucatu.json`: 1 catedral (Catedral
  Metropolitana Basílica Menor de Sant'Ana), 6 santuários e 43 paróquias, em
  4 regiões pastorais (RP1 a RP4). Cidades: Botucatu (15), Avaré (7),
  Lençóis Paulista (6), São Manuel (3), Laranjal Paulista (3), Anhembi (2) e
  uma em cada: Águas de Santa Bárbara, Arandu, Areiópolis, Bofete, Borebi,
  Cerqueira César, Conchas, Iaras, Igaraçu do Tietê, Itatinga, Macatuba,
  Pardinho, Pereiras, Pratânia.
- **30 com horário de missa** (27 com confiança alta, 3 média) e **20 sem
  horário** (confiança baixa, `horarios: []`, o porquê na observação).
- Nenhum horário de confissão ou adoração publicado: só missas.
- Distritos entraram na cidade do município, com o distrito em `localidade`:
  Aparecida de São Manuel (São Manuel), Maristela (Laranjal Paulista),
  Pirambóia (Anhembi), Rubião Júnior (Botucatu).
- Santuário que é a própria unidade na lista da arquidiocese entrou como
  `santuario` (Aparecida de São Manuel, N. S. das Dores e São Judas Tadeu em
  Avaré, N. S. de Lourdes em Botucatu, N. S. da Piedade em Lençóis Paulista,
  Senhor Bom Jesus em Conchas). Paróquia cuja matriz é santuário entrou como
  `paroquia` com a primeira igreja de tipo `santuario` (Santa Teresinha de
  Cerqueira César, o Santuário das Rosas; São João Batista de Laranjal
  Paulista). O Santuário de Santa Teresinha de São Manuel é igreja da
  Paróquia São Manuel.
- Todo `id_banco` é null.

## Lista das unidades

Fonte principal: o portal novo da arquidiocese,
**https://arquidiocesedebotucatu.com.br/** (Next.js; os dados vêm de um
painel). O domínio antigo citado pelo GCatholic e pelo catholic-hierarchy
(`arquidiocesebotucatu.org.br`) hoje mostra só um índice de diretório vazio.

- https://arquidiocesedebotucatu.com.br/paroquias (50 entradas, com região
  pastoral e padroeiro)
- https://arquidiocesedebotucatu.com.br/horarios-de-missa (a busca de
  horários; os dados vêm estruturados na página: paróquia, locais, tipo do
  local, endereço, dias e horários)
- Uma página por unidade, `/paroquias/<slug>`, com pároco, locais e
  horários, endereço, telefone e e-mail (e-mail decodificado do
  `data-cfemail`). As URLs estão no campo `fontes` de cada item.

As fotos das paróquias foram enviadas ao painel em agosto de 2026 (data no
nome dos arquivos), o que indica cadastro recente; por isso os horários do
portal entraram com confiança alta.

Atenção: partes do portal ainda são modelo de site. "Estrutura" traz
"Dom [Nome do Arcebispo]" e telefones (14) 3111-000X; "Documentos" traz
decretos que não batem com a arquidiocese ("Catedral Nossa Senhora das
Dores", "Criação da Paróquia Santa Cruz em Itatinga"); "Notícias" está
vazia. Nada disso foi usado. O rodapé diz "47 paróquias"; a lista tem 50.

Conferência contra o GCatholic (https://gcatholic.org/churches/local/botu0,
atualizado em 09/11/2026, 51 igrejas):

- Batem 47 paróquias. O GCatholic chama de "Nossa Senhora de Fátima" a
  paróquia que a arquidiocese chama de N. S. do Rosário de Fátima (Botucatu).
- **Só na arquidiocese**: Paróquia Divino Pai Eterno e Paróquia Nossa
  Senhora de Guadalupe (Botucatu), provavelmente criações recentes. Entraram
  como `paroquia`, com a divergência na observação.
- **Santuário N. S. de Lourdes (Botucatu)**: no GCatholic é só santuário;
  a arquidiocese o põe na lista de paróquias, com horários. Entrou como
  `santuario`.
- Do GCatholic e fora da lista de unidades: Capela da Santíssima Trindade
  (Botucatu; entrou como capela da Catedral, onde a arquidiocese a põe),
  Seminário São José (Botucatu) e Santuário de Santa Teresinha (São Manuel;
  entrou como igreja da Paróquia São Manuel).
- Nenhuma cidade desta arquidiocese aparece nos arquivos de outras dioceses
  já pesquisadas, e nenhuma fonte diz que alguma delas é de Botucatu.

## Unidades sem horário no portal: o que foi buscado

O portal diz "Horários não cadastrados" para 22 unidades. Para cada uma se
buscou site próprio e o trecho do Instagram/Facebook da paróquia que a
busca mostra (nenhum perfil foi aberto por dentro). Resultado:

- **Santa Teresinha, Cerqueira César**: site próprio do santuário,
  https://chuvaderosas.com.br/ (lido em 13/11/2026; sem data): domingo 7h30,
  9h30 e 19h; quinta 19h30 (quinta-feira eucarística); comunidades São Lucas
  (sábado 19h) e Sagrada Família (domingo 17h). Confiança média, por não ter
  data. Contatos institucionais do mesmo site (telefone, WhatsApp, e-mail,
  Instagram `chuvaderosascc.st`).
- **N. S. Aparecida, Botucatu**: trecho do perfil `paroquiaparecidabtu`
  mostrado pela busca: segunda 19h; quarta 15h e 19h30 (missa das bênçãos);
  sábado 15h e 19h; domingo 8h, 9h, 17h (Capela São Luís) e 19h. Confiança
  média: sem data, e a página do Facebook da paróquia traria horários um
  pouco diferentes.
- As outras 20 seguem sem horário (confiança baixa): Santa Bárbara (Águas
  de Santa Bárbara), N. S. da Boa Morte (Arandu), Santa Cruz (Areiópolis),
  as cinco paróquias e os dois santuários de Avaré, Sagrada Família, Santa
  Teresinha e São Benedito (Botucatu), Santa Luzia (Iaras), São Roque
  (Laranjal Paulista), N. S. Aparecida, Sant'Ana e São Joaquim e São José
  (Lençóis Paulista), Divino Espírito Santo (Pardinho), N. S. das Graças
  (Pirambóia). O site da Paróquia N. S. de Fátima de Avaré
  (pnsfavare.com.br) não respondeu.

Contatos achados nessa busca (páginas da própria paróquia no
Facebook/Instagram, pelo trecho da busca): Sagrada Família de Botucatu
(Rua Carlos Bauer Filho, 435; (14) 3361-5727; Instagram
`paroquiasagradafamiliabtu`), São Benedito de Botucatu (Praça Carlos Gomes;
(14) 3815-7520), São José de Avaré (Av. Espanha, 1031, Jardim Vera Cruz;
(14) 3731-1700), São Pedro Apóstolo de Avaré (Rua Dr. Félix Fagundes, 973,
Vila Timóteo; `spedro.avare`), N. S. de Fátima de Avaré (Praça Conceição
Borges, 1; (14) 3732-4355, este pelo Buser; `pnsfavare`), Santo Expedito de
Avaré (`paroquiasantoexpeditoavare`), Pardinho (`paroquiades.pardinho`),
São Pedro e São Paulo de Lençóis Paulista
(`paroquia.saopedroesaopaulolp`), Catedral (`catedraldebotucatu`, perfil da
PASCOM da Catedral).

## Decisões de formato

- Missas "último sábado/domingo/sexta do mês", "todo dia 13", "todo dia
  19", "uma vez ao mês, em dias alternados" (20 capelas de Conchas) e "1º
  domingo do mês" sem hora (Saltinho) ficaram no `nao_cabe`.
- Rubião Júnior: a página põe tudo dentro da matriz, com o local no
  horário; separamos Matriz (Igreja do Morro), Centro Pastoral e Capela Mãe
  Rainha (Santa Eliza). Itatinga: a missa de domingo 8h é na Capela de Santa
  Cruz.
- N. S. Aparecida de Botucatu: o trecho não diz onde são as missas de
  domingo 8h e 9h; ficaram na matriz.
- Borebi entrou com confiança média: só quarta e sábado, sem domingo.
- Pereiras: sexta com três horários (15h, 19h, 19h30), como está na página.
- Telefones de 9 dígitos publicados pela arquidiocese como telefone da
  paróquia (Guadalupe, Itatinga) entraram em `telefone`; não há sinal de
  que sejam pessoais. Nenhum contato de padre foi usado.
- Capelas sem bairro na fonte entraram com `localidade` vazia quando têm
  horário (a maioria das capelas de Botucatu, São Manuel e Laranjal).

## O que falta para o próximo estado desta pesquisa

- Horários das 20 unidades sem horário, sobretudo Avaré (7 unidades) e
  Lençóis Paulista (3): reconferir o portal da arquidiocese, que está sendo
  preenchido, ou falar com as secretarias.
- Confissão e adoração: nenhuma fonte publica.
- Endereço da matriz de cerca de 25 unidades (o portal deixa em branco).
- Bairro das capelas que o portal lista só pelo nome.
