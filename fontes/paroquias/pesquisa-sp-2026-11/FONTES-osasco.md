# Diocese de Osasco (SP): fontes da pesquisa de 13/11/2026

Sé em Osasco; sufragânea da Arquidiocese de São Paulo, criada em 15/03/1989.
Bispo: Dom Frei João Bosco Barbosa de Sousa, OFM. Cúria: Rua Dom Ercílio
Turco, 60, Vila Osasco, Osasco, (11) 3683-4522, curia@diocesedeosasco.com.br.
Território (página Área Geográfica da diocese): 13 municípios (Alumínio,
Araçariguama, Barueri, Carapicuíba, Cotia, Ibiúna, Itapevi, Jandira,
Mairinque, Osasco, São Roque, Vargem Grande Paulista) e uma área pequena da
cidade de São Paulo. O pedido desta pesquisa citava Santana de Parnaíba,
Pirapora do Bom Jesus e Cajamar, mas esses municípios NÃO são da diocese;
valeu o território que a própria diocese publica.

## Resumo

- **89 unidades pastorais** em `saida/osasco.json`: 1 catedral e 88
  paróquias, em 9 regiões pastorais (Santo Antônio, Bonfim, São José
  Operário, Carapicuíba, Barueri, Itapevi, Cotia, Ibiúna e São Roque).
  Por cidade: Osasco 27, Carapicuíba 14, Cotia 9, Barueri 8, Ibiúna 6,
  Itapevi 5, São Paulo 5, São Roque 5, Jandira 3, Vargem Grande Paulista 3,
  Mairinque 2, Alumínio 1, Araçariguama 1.
- **540 igrejas**: as 89 matrizes mais 451 capelas e comunidades, todas com
  nome, cidade e bairro ou endereço, tiradas das páginas de capela e
  comunidade do site da diocese ligadas a cada paróquia.
- **35 unidades com horário** (confiança alta): 31 pelo site da diocese
  (seção Horários de Missas da página de cada paróquia, que alimenta a busca
  /horarios-de-missa/) e 4 pelo site da própria paróquia (Catedral, São
  Pio X de Cotia, N. S. de Lourdes e N. S. Mãe da Igreja de Barueri). São
  334 linhas de horário; o que não coube no formato (última sexta do mês,
  todo dia 10, confissão só com agendamento) ficou em `nao_cabe`.
- **54 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação.
- Contatos institucionais do site da diocese: telefone em 88 unidades,
  e-mail em 89 (protegidos por Cloudflare na página; decodificados do
  atributo data-cfemail), site próprio em 16, WhatsApp em 6, Instagram em 1.
- Todo `id_banco` é null: o banco ainda não tem nada da região.

## Lista das unidades

A lista vem da página Nossas Paróquias do site da diocese
(https://diocesedeosasco.com.br/paroquias-osasco/, 10 páginas servidas em
/paroquias-osasco/page/N/), lida em 13/11/2026: 89 unidades, cada uma com
página própria em /paroquia/<slug>/. As páginas são do sistema Parresia
(sitesparresia.com) e trazem os horários como JSON no atributo `data-item`,
o que dispensou interpretar texto corrido.

Conferência contra o anuário (GCatholic, página da diocese lida em
13/11/2026): bate 1 a 1 nas 89 (o GCatholic anuncia "90 churches" no título,
mas lista 89 unidades; a página Área Geográfica da diocese também fala em
"90 paróquias"). Os casos de nome repetido na mesma cidade conferem com o
anuário: 4 Paróquias N. S. Aparecida em Osasco (Jardim Helena Maria,
Jaguaribe, Jardim Padroeira II, Jardim Piratininga), 2 São José Operário
(Jardim D'Abril, Munhoz Júnior) e 2 São João Batista (Jardim Conceição,
Rochdale); distinguem-se pelo bairro da matriz.

- A "Paróquia Imaculada Conceição | Dracena" do site é o bairro Jardim
  Dracena, na parte de São Paulo que pertence à diocese; não é a cidade de
  Dracena.
- O site da diocese dá a cidade "Sp" em duas matrizes com endereço mal
  preenchido; o JSON corrigiu pela cidade do anuário e do próprio endereço
  (N. S. da Penha em Araçariguama; Santa Catarina de Alexandria em
  Mairinque, bairro Dona Catarina).

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedeosasco.com.br/ (menu, contatos)
- https://diocesedeosasco.com.br/area-geografica/ (territorio, 9 regiões)
- https://diocesedeosasco.com.br/curia-diocesana/ (contatos da cúria)
- https://diocesedeosasco.com.br/paroquias-osasco/ (a lista, 10 páginas)
- https://diocesedeosasco.com.br/horarios-de-missa/ (busca de horários;
  mesma base de dados das páginas de paróquia, paginada em /page/N/)
- /paroquia/<slug>/ das 89 unidades (contatos, endereço, capelas, horários)
- /capela/<slug>/ e /comunidade/<slug>/ das 451 capelas e comunidades
  (endereço e bairro de cada uma; algumas com horário próprio)

## Sites das próprias paróquias (lidos em 13/11/2026)

Com horário aproveitado no JSON:

- https://catedraldeosasco.com.br/horario-de-missas/ e
  /horarios-de-confissoes/ (Catedral Santo Antônio)
- https://www.paroquiasaopiox.com/horário-de-missa (São Pio X, Cotia;
  matriz e 5 comunidades)
- https://lourdesalpha.org.br/horarios/ (N. S. de Lourdes, Barueri; o site
  da diocese ainda aponta lourdesalpha.com.br, que redireciona)
- https://www.pmaedaigreja.com.br/ (N. S. Mãe da Igreja, Barueri)

Não abriram em 13/11/2026 (anotado na observação da unidade):

- paroquianossasenhoradaescada.com (certificado TLS inválido)
- paroquiadosremedios.com e paroquiasfp.com.br (servidor não respondeu)
- paroquiasaojoseitapevi.org.br (servidor não respondeu)
- saopedroesaopaulo.com.br (DNS não resolveu)

Os demais sites próprios pertencem a unidades que já tinham horário no site
da diocese e não foram lidos.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/osas0 (anuário)
- https://catholic-hierarchy.org/diocese/dosas.html
- https://en.wikipedia.org/wiki/Diocese_of_Osasco

## Decisões e limites

- "Monjas da Ordem dos Pregadores (Dominicanas)", em São Roque, aparece na
  busca de horários da diocese com missas diárias, mas é casa religiosa,
  não unidade pastoral: ficou fora do JSON.
- As páginas de paróquia trazem "Criada em <data de 2026>": é a data do
  cadastro no sistema novo do site, não a criação da paróquia; não foi
  usada.
- Clero de cada paróquia não entrou (o formato não pede), e nenhum contato
  pessoal de padre foi colhido: telefone e e-mail são os da secretaria,
  publicados pela diocese.
- Instagram não foi levantado de forma sistemática (a diocese já dá telefone
  e e-mail de todas as unidades); só entrou o perfil que a própria página da
  paróquia linka (Rainha Santa Isabel). Levantar os perfis das outras 88 é
  trabalho para o próximo estado, pelo trecho que a busca mostra.
- Tipo de igreja: o site da diocese chama quase tudo de "Comunidade" (440) e
  poucas de "Capela" (11); o JSON seguiu o nome que a diocese usa.

## O que falta para o próximo estado desta pesquisa

- Horário das 54 unidades sem fonte: o caminho mais provável são os sites
  que estavam fora do ar e os perfis das paróquias no Instagram.
- A diocese não publica quase-paróquias nem áreas pastorais separadas: tudo
  aparece como paróquia (e é assim que o JSON traz).
