# Diocese de Crateús (CE): fontes da pesquisa de 13/11/2026

Sé em Crateús (Catedral Senhor do Bonfim); sertão dos Inhamuns e sertão de
Crateús, oeste do Ceará. Bispo: Dom Ailton Menegussi (desde 2013). Cúria:
Rua Firmino Rosa, 1064, Centro, Crateús, (88) 3691-2366. Diocese criada em
28/09/1963, desmembrada de Iguatu e Sobral; 13 municípios.

## Resumo

- **17 unidades pastorais** em `saida/crateus.json`: 1 catedral, 15 paróquias
  e 1 área pastoral (Sucesso, distrito de Tamboril). Duas unidades têm sede
  em distrito: Nossa Senhora de Fátima (Nova Fátima, Ipueiras) e Santa Teresa
  (distrito de Santa Teresa, Tauá).
- **0 com horário.** Nenhuma paróquia da diocese publica horários em página
  própria que a pesquisa alcançasse, e os três domínios da diocese estão FORA
  DO AR (sem DNS em 13/11/2026): diocesedecrateus.com.br, .net.br e .org.
  O conteúdo dos sites foi lido pelo que a busca ainda indexa (endereço,
  telefone, CNPJ de cada paróquia), nunca horários. A regra do dono manda
  entrar mesmo assim, com `horarios: []`, confiança baixa e o porquê na
  observação.
- Todo `id_banco` é null: o banco não tem nada do Ceará.
- Todas as unidades ficam no Ceará; nenhuma precisou do campo `uf`.

## Lista das unidades

Montada cruzando três fontes, porque a diocese está sem site:

1. A página "Paróquias" do site antigo da diocese
   (https://www.diocesedecrateus.net.br/paroquias-2/, vista pelo índice da
   busca em 13/11/2026): tabela com telefone, endereço, CEP e CNPJ de cada
   unidade, inclusive a "Área Pastoral Nossa Senhora do Bom Sucesso".
2. A nota de transferências assinada por Dom Ailton em 16/11/2025
   (https://portaloregional.com.br/diocese-de-crateus-promove-mudancas-de-padres-em-paroquias-confira-a-lista,
   lida em 13/11/2026): confirma as unidades em atividade, entre elas as duas
   mais novas, Nossa Senhora de Fátima (Ipueiras) e Santa Teresa (Tauá).
3. Os CNPJs filiais da diocese (raiz 07.168.206, vistos pela busca em
   cadastros públicos): um por paróquia, com a sede de cada uma; foi o que
   situou Nossa Senhora de Fátima no distrito de Nova Fátima e Santa Teresa
   no distrito homônimo de Tauá.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026,
https://gcatholic.org/churches/local/crat0): lista 14 igrejas (13 paróquias,
a catedral e a igreja de Sucesso, esta sem a marca de paróquia), mas a
estatística de 2022 do mesmo anuário dá **17 paróquias e 1 missão** = 18
centros pastorais. A lista daqui fecha com a estatística: as 3 paróquias que
faltam na lista do anuário são Imaculada Conceição (Crateús, criada em
05/2010), Nossa Senhora de Fátima (Ipueiras) e Santa Teresa (Tauá); a
"missão" é a área pastoral de Sucesso. Diferença de contagem: o anuário conta
a catedral como paróquia (17 paróquias + 1 missão); o JSON traz 17 unidades
porque catedral é uma categoria própria.

Divergências anotadas:

- Monsenhor Tabosa tem dois telefones nas páginas da própria diocese:
  (88) 3696-1641 (lista de paróquias, a mesma do anuário) e (88) 3696-1240
  (página da cidade). Ficou o da lista de paróquias.
- Quiterianópolis: a página da paróquia no site diocesedecrateus.org diz que
  a criação, em 15/08/2003, foi "na festa da Padroeira", mas nomeia a
  padroeira como Nossa Senhora da Imaculada Conceição (festa em 08/12), o
  mesmo nome do anuário. Ficou Imaculada Conceição.
- A Rádio Poty transmite missa dominical da catedral (7h), mas rádio não é a
  paróquia publicando horário, e a página tem anos; não entrou.

## Páginas da diocese (vistas pelo índice da busca em 13/11/2026; domínios sem DNS)

- https://www.diocesedecrateus.net.br/paroquias-2/ (a tabela de paróquias:
  telefone, endereço, CEP, CNPJ; snapshot do Wayback de 17/04/2021 existe,
  mas o web.archive.org não respondeu nesta sessão)
- https://www.diocesedecrateus.net.br/taua-paroquia-de-nossa-senhora-do-rosario/
- https://diocesedecrateus.com.br/tamboril, /monsenhor-tabosa, /nova-russas
  (telefone e e-mail por cidade)
- https://diocesedecrateus.org/quiterianopolis/ (história e CNPJ da paróquia)

## Páginas de paróquia (lidas pelo trecho que a busca mostra, 13/11/2026)

Facebook e Instagram não se leem por dentro (bloqueio de robôs); ficou o que
o trecho da busca trouxe.

- facebook.com/paroquiasenhordobonfimcrateus (catedral; há canal no YouTube)
- facebook.com/paroquiaimaculadaconceicaocrateusce (Imaculada, Crateús)
- facebook.com/paroquiadeipaporangaceara (Ipaporanga)
- facebook.com/paroquiadeipueiras (Ipueiras; festa da padroeira 28/11 a 08/12)
- facebook.com/Paroquiataua (Tauá; endereço da matriz na bio)
- instagram.com/paroquiadetamboril (PASCOM Santo Anastácio, Tamboril)

## Notícias e conferência (não usadas para horário)

- https://portaloregional.com.br/diocese-de-crateus-promove-mudancas-de-padres-em-paroquias-confira-a-lista
  (nota da diocese, 16/11/2025: transferências para 2026; redentoristas em
  Independência, capuchinhos em Nova Russas)
- https://diariodonordeste.verdesmares.com.br/regiao/paroquia-da-imaculada-conceicao-oficializada-hoje-1.231333
  (criação da 2ª paróquia de Crateús, 05/2010)
- https://gcatholic.org/churches/local/crat0 e
  https://gcatholic.org/dioceses/diocese/crat0.htm (anuário, 09/11/2026)
- https://pt.wikipedia.org/wiki/Diocese_de_Crateús (municípios, histórico)

## O que falta para o próximo estado desta pesquisa

- Horário das 17 unidades: nenhum achado em fonte própria. O caminho mais
  provável são os perfis das paróquias no Facebook e Instagram, que a busca
  não indexa por dentro, ou o site da diocese voltar ao ar.
- O snapshot do Wayback da página de paróquias (17/04/2021) traria e-mails e
  a tabela completa; o web.archive.org não respondeu nesta sessão.
- Capelas e comunidades: nenhuma fonte as lista com clareza (a catedral tem
  igrejas de bairro, São Vicente e Santa Teresinha, citadas só num blog de
  2010); ficou só a matriz de cada unidade.
- Contato de Nossa Senhora de Fátima (Ipueiras) e Santa Teresa (Tauá): as
  duas mais novas não têm telefone nem página achada.
