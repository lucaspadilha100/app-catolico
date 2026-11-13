# Diocese de Nazaré (PE): fontes da pesquisa de 13/11/2026

Sé em Nazaré da Mata; Zona da Mata Norte e parte do Agreste de Pernambuco,
35 municípios. Bispo: Dom Francisco de Assis Dantas de Lucena. Cúria: Praça
Herculano Bandeira, 35, Nazaré da Mata, (81) 3633-1009,
diocesedenazare@hotmail.com.

## Resumo

- **51 unidades pastorais** em `saida/nazare.json`: 1 catedral, 49 paróquias
  e 1 área pastoral (N. S. das Dores, Umari, Bom Jardim), em 7 regiões
  pastorais (Carpina, Goiana, Limoeiro, Nazaré, Orobó, Surubim e Timbaúba).
- **3 com horário de missa** (confiança média), **48 sem horário**
  (confiança baixa). O site da diocese não publica horários; os três vieram
  do trecho da bio do Instagram da paróquia que a busca mostrou (sem data):
  - São José, Surubim (`paroquiasaojosesurubim`): segunda, quinta e sábado
    19h; domingo 7h, 9h e 19h; confissão às quintas sem hora (no `nao_cabe`);
  - N. S. das Dores, Condado (`paroquiacondadope`): quinta e sábado 19h;
    domingo 7h e 19h;
  - São Sebastião, Lagoa de Itaenga (`pascom_itaenga`): segunda a sexta 17h;
    confissão quinta das 9h às 12h. O trecho não traz o domingo.
- Capelas e comunidades: as 13 comunidades da Paróquia São Lourenço (Goiana)
  do decreto de criação, entre elas a Igreja de N. S. do Ó em Ponta de
  Pedras (a notícia escreve "Catuama Cocota" sem vírgula; entraram como
  duas comunidades, conferir); o Santuário de São Severino do Ramos (Paudalho, privado, atendido
  pela Paróquia Divino Espírito Santo) e o Santuário de N. S. de Lourdes
  (Umari, privado, no território da área pastoral), conforme a página
  "Santuários" da diocese.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem das sete páginas de Região Pastoral do site da diocese (lidas
pela API do WordPress em 13/11/2026), que dão para cada paróquia o clero,
endereço, telefone e e-mail:

- https://diocesedenazare.org.br/regiao-pastoral-carpina/ (8)
- https://diocesedenazare.org.br/regiao-pastoral-goiana/ (4)
- https://diocesedenazare.org.br/regiao-pastoral-limoeiro/ (8)
- https://diocesedenazare.org.br/regiao-pastoral-nazare/ (9)
- https://diocesedenazare.org.br/regiao-pastoral-orobo/ (6, com a área
  pastoral)
- https://diocesedenazare.org.br/regiao-pastoral-surubim/ (8)
- https://diocesedenazare.org.br/regiao-pastoral-timbauba/ (7)

Mais a **Paróquia N. S. de Fátima (Baraúnas, Surubim)**, criada em
13/10/2026 como 50ª paróquia, desmembrada da São Sebastião de Surubim, que
ainda não está na página da região (notícia de 16/10/2026:
https://diocesedenazare.org.br/diocese-de-nazare-cria-a-50a-paroquia-dedicada-a-nossa-senhora-de-fatima-em-surubim/).
Sem endereço nem contato publicados.

Contagem: a página "Dados Gerais" (07/2026) diz 49 paróquias e 1 área
pastoral; com a de Fátima, 50 paróquias (a notícia confirma "50ª") e 1 área.
Bate com o JSON.

Conferência com o GCatholic (https://gcatholic.org/churches/local/naza0,
atualizado em 09/11/2026; dados de 2022: 41 paróquias e 3 missões). O
GCatholic está atrasado. Diferenças:

- Lista como paróquias a Igreja de N. S. do Amparo (Goiana) e a de N. S. do
  Ó (Ponta de Pedras). Ponta de Pedras é comunidade da Paróquia São
  Lourenço (decreto de 2023). O Amparo (Igreja de N. S. do Amparo dos Homens
  Pardos, Praça da Bandeira, Centro de Goiana, reaberta em 2022) não aparece
  como paróquia no site; a notícia da reabertura não diz a que paróquia
  pertence: pendência.
- Chama a matriz de Paudalho de N. S. do Livramento; a diocese chama a
  paróquia de Divino Espírito Santo (Praça do Espírito Santo, 14).
- Não lista as paróquias criadas depois: N. S. Auxiliadora (Guadalajara,
  Paudalho), Sagrado Coração e Santo Antônio (Carpina), São Lourenço
  (Goiana), N. S. do Carmo (Limoeiro), N. S. Auxiliadora (Caueiras), N. S. do
  Rosário (Angélicas) e São José (Murupé) em Vicência, São Severino Mártir
  (Matinadas, Orobó), São João Batista (Lagoa de João Carlos, Frei
  Miguelinho), N. S. da Conceição (Mocós, Timbaúba), Imaculado Coração de
  Maria (Timbaúba) e N. S. de Fátima (Surubim).
- Lista uma Paróquia São Sebastião em Carpina, que o site não tem (em
  Carpina o site dá Sagrado Coração, Santo Antônio e São José; a São
  Sebastião da região fica em Lagoa de Itaenga, que o GCatholic também
  lista). Ficou com a diocese.
- Igrejas sem marca de paróquia no GCatholic: Santa Terezinha (Nazaré da
  Mata), N. S. do Rosário (Paudalho) e São Vicente de Paula (Salgadinho). A
  fonte não diz a que paróquia pertencem: pendência.

Outras páginas usadas:

- https://diocesedenazare.org.br/dados-gerais/
- https://diocesedenazare.org.br/curia-diocesana/
- https://diocesedenazare.org.br/santuarios/
- https://diocesedenazare.org.br/catedral/
- https://diocesedenazare.org.br/criada-a-paroquia-sao-lourenco-em-goiana/
  (área pastoral elevada a paróquia em 10/08/2023, com a lista de
  comunidades)
- https://diocesedenazare.org.br/jubileu-de-esperanca-nomeacoes-e-decreto-marcam-ultima-reuniao-do-clero-do-ano/
  (igrejas peregrinas do Jubileu 2025, anotadas na observação)

## Contatos

- Telefone e e-mail como a página da região pastoral publica (vários
  telefones de paróquia são celulares; são os que a diocese dá como telefone
  da paróquia). Onde a diocese dá dois números, ficou o primeiro.
- Sem telefone publicado: N. S. das Dores (Salgadinho), N. S. Auxiliadora
  (Caueiras, "sem telefone"), N. S. do Rosário (Angélicas) e São Sebastião
  (Machados).
- São Severino Mártir (Matinadas, Orobó) tem telefone com DDD 83, como
  publicado.
- E-mail de São Sebastião (Lagoa de Itaenga) publicado com acento
  ("paroquiasaosebastião1901"); gravado sem o acento.
- Instagram (só o título do perfil e o trecho que a busca mostrou; nenhum
  perfil foi aberto por dentro): saojosecarpinaoficial, psantoniocarpina
  (Carpina), pascom_itaenga, paroquiacondadope, paroquiadegoiana,
  apresentacao.limoeiro, paroquiadesaosebastiaolimoeiro (Limoeiro),
  paroquiadesalgadinhope, pascom_itaquitinga, paroquiadesantanabj (Bom
  Jardim), pascom_joaoalfredo, paroquiasaojosesurubim. Perfil da diocese:
  diocesedenazare.

## Buscas

Cerca de 40 buscas para esta diocese, quase todas no Instagram, uma por
paróquia ou cidade. Só três trouxeram horário. A busca devolve muito perfil
de paróquia homônima de outros estados; só ficou o que o título do perfil
liga à cidade certa.

## O que falta para o próximo estado desta pesquisa

- Horários de missa de 48 unidades, inclusive a Catedral. Caminhos: perfis
  das paróquias nas redes sociais, contato com a cúria ou com as secretarias
  (telefones no JSON).
- Endereço e contato da Paróquia N. S. de Fátima (Surubim), criada em
  outubro de 2026.
- A que paróquia pertencem a Igreja do Amparo (Goiana), Santa Terezinha
  (Nazaré da Mata), N. S. do Rosário (Paudalho) e São Vicente de Paula
  (Salgadinho).
- Capelas e comunidades das demais paróquias: o site não as lista.
