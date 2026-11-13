# Arquidiocese de Aparecida (SP): fontes da pesquisa de 13/11/2026

Sé em Aparecida; Vale do Paraíba paulista. Arcebispo: Dom Mário Antônio da
Silva (desde 2026). Cúria: Rua Barão do Rio Branco, 412, Centro, Aparecida,
(12) 3104-2707 e (12) 3104-2700, contato@arqaparecida.org.br.

## Resumo

- **21 unidades pastorais** em `saida/aparecida.json`: 1 catedral (a Catedral
  Basílica Santuário Nacional, com a Basílica Histórica como segunda igreja),
  19 paróquias e 1 santuário arquidiocesano (Frei Galvão), em 5 municípios:
  Aparecida (3 paróquias), Guaratinguetá (13), Lagoinha, Potim e Roseira
  (1 cada).
- ATENÇÃO: a encomenda citava Cunha e um porte de ~35 paróquias: os dois dados não
  batem com as fontes. A lista oficial da arquidiocese, a Wikipédia e o
  anuário dão **19 paróquias em 5 municípios, sem Cunha** (Cunha fica com a
  Diocese de Lorena).
- **12 com horário de missa**: Santuário Nacional + Basílica Histórica,
  Santuário Frei Galvão, Santo Afonso (Aparecida), N. S. Aparecida e São
  Benedito (Aparecida), N. S. da Glória, N. S. de Fátima, Santa Luzia, Santo
  Expedito, São Francisco de Assis, São Miguel Arcanjo, São Pedro Apóstolo
  (Guaratinguetá) e N. S. da Conceição (Lagoinha).
- **9 sem horário** (confiança baixa): a página "Horário de Missas" delas no
  site da arquidiocese diz "Não existe horário cadastrado", e não se achou
  outra fonte oficial. A regra do dono manda entrar mesmo assim, com
  `horarios: []` e o porquê na observação.
- Capelas e comunidades: o site da arquidiocese lista as comunidades de cada
  paróquia (nome + bairro, algumas com missa); entraram todas, 128 igrejas
  no total contando as matrizes.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Páginas do site da arquidiocese (lidas em 13/11/2026)

- https://arqaparecida.org.br/ (menu, revista)
- https://arqaparecida.org.br/paroquias (a lista oficial das 19, "atualizado
  em 31/01/2017", mas com a paróquia de Santa Luzia, criada em 2021)
- https://arqaparecida.org.br/fale-conosco (contatos da cúria)
- Cada paróquia tem página própria (endereço, CEP, e-mail, telefone, data de
  criação), com subpáginas "Horário de Missas" e "Comunidades" (paginada, um
  item por página: `/comunidades` e `/comunidades/1..N`). 10 paróquias com
  horário de matriz preenchido; as outras 9 dizem "Não existe horário
  cadastrado". As datas de atualização das páginas variam (2017 a 2023).

## Santuário Nacional (a12.com, 13/11/2026)

O site oficial a12.com bloqueia robôs (403 do GoCache): os horários vieram
pelo resumo da busca das páginas oficiais, não pela leitura direta, por isso
a confiança ficou "media". Páginas:

- https://www.a12.com/santuario/missa/pastoral-horarios-de-missa-santuario-nacional
  (Santuário: seg a sex 6h45/9h/10h30/12h/16h/18h; Basílica Histórica: seg a
  sex 8h/18h)
- https://www.a12.com/area-do-devoto/central-de-ajuda/contato (sábado
  6h/9h/10h30/12h/16h/18h/20h; domingo 5h30/8h/10h/12h/14h/16h/18h; Basílica
  Histórica sáb/dom 15h/19h)
- https://www.a12.com/redacaoa12/santuarionacional/veja-a-programacao-deste-fim-de-semana-no-santuario-nacional
  (confissões: sáb 7h30-11h30 e 14h-16h45; dom 7h30-11h30 e 14h-16h)
- Desde novembro de 2016 a Basílica do Santuário Nacional tem o título de
  Catedral Arquidiocesana (antes era a Igreja de Santo Antônio de
  Guaratinguetá, catedral de 1996 a 2016).
- A Basílica Histórica (Basílica Velha) entrou como segunda igreja da mesma
  unidade: o a12 publica as duas grades juntas e as duas ficam aos cuidados
  dos Missionários Redentoristas. O GCatholic a marca como paróquia; a lista
  oficial da arquidiocese não a traz como paróquia.

## Santuário Frei Galvão (lido em 13/11/2026)

- https://santuariofreigalvao.com/santuario/horarios (missas, confissões,
  adoração; sem missa das 7h na quarta, confissões exceto quarta)
- https://santuariofreigalvao.com/ (endereço, telefone)
- Instagram santuariofreigalvao citado em boletim da Prefeitura de
  Guaratinguetá (busca).
- O domínio www.santuariofreigalvao.com (com www) não resolve; o certo é sem
  www.

## Outras páginas de paróquia

- https://paroquiadeaparecida.com.br/ (Paróquia N. S. Aparecida e São
  Benedito; horários da Matriz de São Benedito mais novos que os do site da
  arquidiocese, que davam sábado 16h e domingo 18h; o JSON segue a paróquia)
- https://www.psaopedro.com.br/ (São Pedro Apóstolo): fora do ar em
  13/11/2026; ficou como contato por constar no site da arquidiocese.
- http://pnscl.blogspot.com.br/ (Lagoinha): idem, só contato.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/apar0 (anuário, atualizado em
  09/11/2026, 21 igrejas): as 19 paróquias + o Santuário Frei Galvão + a
  Basílica Histórica. Bate com o JSON.
- https://pt.wikipedia.org/wiki/Arquidiocese_de_Aparecida (19 paróquias em 5
  municípios; a transferência do título de catedral em 2016)
- https://catholic-hierarchy.org/diocese/dapar.html (19 paróquias)

## O que falta para o próximo estado desta pesquisa

- Horário das 9 paróquias sem fonte: o caminho provável são os perfis delas
  no Instagram, que a busca não indexa por dentro. O site da arquidiocese diz
  "Não existe rede social cadastrada" para todas.
- Confissão e adoração das paróquias comuns: nenhuma página oficial traz.
- Confissões de dia de semana no Santuário Nacional: existem, mas a grade só
  veio com hora para sábado e domingo.
- O site da paróquia de Aparecida linka um Instagram com erro de digitação
  (paroquiaaoarecidasaobenedito); ficou de fora até confirmar o usuário certo.
- Capela de São Frei Galvão no Gomeral, bendita em 06/11/2026 (Caminho da
  Fé): a notícia não diz a qual unidade pertence; ficou fora do JSON.
