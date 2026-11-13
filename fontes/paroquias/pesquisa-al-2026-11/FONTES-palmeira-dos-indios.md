# Diocese de Palmeira dos Índios (AL): fontes da pesquisa de 13/11/2026

Sé em Palmeira dos Índios; parte do agreste e todo o sertão alagoano.
Bispo: Dom Giovanni Crippa, IMC (nomeado em 25/09/2026; antes, sede vacante
desde a transferência de Dom Manoel de Oliveira Soares Filho em 24/03/2026).
34 municípios e quatro setores pastorais: Palmeira dos Índios, Batalha,
Santana do Ipanema e Delmiro Gouveia.

## Resumo

- **38 unidades pastorais** em `saida/palmeira-dos-indios.json`: 1 catedral,
  36 paróquias e 1 santuário (o Santuário Senhora Sant'Ana, em Santana do
  Ipanema, que é sede paroquial).
- **1 com horário** (confiança alta): a Catedral Nossa Senhora do Amparo, com
  missas publicadas na própria página do site da diocese.
- **37 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. O site da diocese traz
  endereço, CEP, data de criação e pároco de cada uma, mas o campo
  "Horários das Missas" está vazio em todas, menos na Catedral.
- Todo `id_banco` é null: o banco não tem nada de Alagoas.
- Nenhuma unidade fora de Alagoas (sem campo `uf`).

## A lista das unidades

Vem do site oficial da diocese (diocesedepalmeiradosindios.com.br), lido em
13/11/2026. O site está em reconstrução: as páginas renderizam um aviso de
obra ("Pardon our dust"), mas o conteúdo real de cada página existe e foi
lido pela API pública do WordPress
(`/wp-json/wp/v2/pages?per_page=100&_fields=id,slug,title,content`), que
devolve endereço, CEP, data de criação, pároco e, na Catedral, os horários.
A lista de paróquias do site (página `/paroquias/`) bate com as 38 páginas
individuais.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 37
igrejas): bate em 37 unidades; o anuário ainda não traz a Paróquia Imaculada
Conceição, de Mar Vermelho, criada em 08/02/2024 (a data e a cidade vêm da
página da paróquia no site da diocese). Uma matéria do Tribuna do Sertão de
26/03/2026 dá o mesmo porte: 34 municípios, 36 paróquias e 4 setores
pastorais (36 = as paróquias sem contar a Catedral e o Santuário como itens
próprios).

Divergências anotadas no JSON:

- O site chama a unidade de Santana do Ipanema de "Santuário Senhora
  Sant'Ana"; o anuário a registra como paróquia (Senhora Sant'Ana). Entrou
  como `santuario`, com a nota de que é sede paroquial.
- Em Batalha, o anuário registra a matriz também como santuário de Nossa
  Senhora da Penha; o site da diocese a chama só de paróquia. Entrou como
  `paroquia`, com a nota.
- "Paróquia de São Vicente" (Palmeira dos Índios) aparece no anuário como
  São Vicente de Paulo; o padroeiro do JSON segue o anuário.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedepalmeiradosindios.com.br/ (home; em obra)
- https://diocesedepalmeiradosindios.com.br/paroquias/ (a lista)
- https://diocesedepalmeiradosindios.com.br/clero/ (padres; não usado no JSON)
- Uma página por unidade, no padrão
  `https://diocesedepalmeiradosindios.com.br/<slug>/` (os 38 slugs estão no
  campo `fontes` de cada item do JSON). Só a da Catedral
  (`/paroquia-nossa-senhora-do-amparo-catedral/`) traz horários:
  domingos 6h, 9h30, 17h e 19h; sábados 6h e 19h; terça a sexta 6h;
  primeira sexta do mês 6h, 9h e 19h (a das 6h já está na linha de toda
  sexta). Traz também o Instagram (paroquiasenhoradoamparo) e o YouTube
  (@nsdoamparo) da Catedral.

## Instagram (só o trecho que a busca mostra, em 13/11/2026)

Perfis não se leem por dentro (bloqueio de robôs); ficou anotado o que o
trecho da busca trouxe.

- diocesedepalmeira (a diocese; bio diz criada em 19/08/1962)
- paroquiasenhoradoamparo (Catedral; também na página do site da diocese)
- saocristovaosantana (São Cristóvão, Santana do Ipanema; bio bate com o
  site: ereção canônica 01/03/1964, pároco Pe. Marcos Renildo)
- paroquiasantoantonioourobranco (Santo Antônio de Pádua, Ouro Branco; bio
  diz Diocese de Palmeira dos Índios, criada em 2005, igual ao site)
- paroquia_sj (São José, Olho d'Água do Casado; o trecho da busca diz
  Diocese de Palmeira dos Índios)

As buscas pelas demais paróquias (Batalha, Pão de Açúcar, Delmiro Gouveia,
Igaci, São José da Tapera, Olho d'Água das Flores, entre outras) só
devolveram paróquias homônimas de outros estados.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/palm4 e
  https://gcatholic.org/dioceses/diocese/palm4.htm (anuário, 09/11/2026:
  37 igrejas; estatística de 2022: 36 paróquias e 4 missões)
- https://catholic-hierarchy.org/diocese/dpadi.html
- Tribuna do Sertão, 26/03/2026 (34 municípios, 36 paróquias, 4 setores) e
  25/09/2026 (nomeação de Dom Giovanni Crippa)

## O que falta para o próximo estado desta pesquisa

- Horário das 37 unidades sem fonte: o caminho mais provável é o site da
  diocese terminar de sair da obra (os campos "Horários das Missas",
  "Contatos", "Instagram" e "Capelas" já existem em todas as páginas, vazios)
  ou os perfis das paróquias no Instagram, que a busca não indexa por dentro.
- Telefone e e-mail institucionais: o site não traz nenhum (nem da cúria).
- Capelas e comunidades: o campo "Capelas" do site está vazio em todas as
  páginas; nenhuma unidade entrou com capela.
- A data de criação da paróquia de Piranhas (o site deixa o campo em branco).
