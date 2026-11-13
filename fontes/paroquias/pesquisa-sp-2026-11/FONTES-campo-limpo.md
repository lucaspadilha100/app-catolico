# Diocese de Campo Limpo (SP): fontes da pesquisa de 13/11/2026

Sé na cidade de São Paulo (zona sudoeste: Campo Limpo, Capão Redondo, M'Boi
Mirim, Morumbi, Butantã em parte) e municípios vizinhos. Bispo: Dom Valdir
José de Castro, SSP (desde 2022). Cúria: Rua Campina Grande, 400, Jardim Bom
Refúgio, São Paulo, CEP 05788-250, (11) 3584-9000. Catedral: Catedral
Santuário Sagrada Família, no mesmo endereço.

## Resumo

- **113 unidades pastorais** em `saida/campo-limpo.json`: 1 catedral, 111
  paróquias e 1 área pastoral (a Unidade Pastoral Nossa Senhora Aparecida,
  Itaquaciara, Itapecerica da Serra), em 9 foranias: M'Boi Mirim (16),
  Morumbi (16), Campo Limpo (15), Embu das Artes (13), Itapecerica (13),
  Taboão da Serra (11), São José - Capão Redondo (10), Mirim-Guaçu (10) e
  São Luiz - Capão Redondo (9).
- Cidades: São Paulo (71), Embu das Artes (13), Taboão da Serra (11),
  Itapecerica da Serra (10), Embu-Guaçu (4), Juquitiba (3, uma delas no
  distrito de Barnabés) e São Lourenço da Serra (1).
- **113 com horário de missa** (103 com confiança alta, 10 média). O site da
  diocese tem uma página por paróquia com missas da matriz, confissões,
  adoração, contatos e a lista de comunidades, todas lidas em 13/11/2026.
  69 matrizes têm horário de confissão no formato e 71 têm adoração; o resto
  ("agendar na secretaria", "antes das missas", "1ª quinta-feira do mês" sem
  hora) ficou no `nao_cabe`.
- 4 paróquias têm a matriz santuário e entraram como `paroquia` com a
  primeira igreja de tipo `santuario`: N. S. dos Prazeres e Divina
  Misericórdia (Itapecerica da Serra), Santa Terezinha (Taboão da Serra), São
  José Operário (Capão Redondo) e Senhor Bom Jesus de Piraporinha. A
  Catedral é "Catedral Santuário Sagrada Família".
- **314 capelas e comunidades**, só com nome e lugar (bairro, endereço), como
  a página de cada paróquia as lista. 14 são "Comunidade Itinerante", sem
  endereço: entraram com essa nota no `nao_cabe`. Dois santuários aparecem
  como comunidade de paróquia e entraram com tipo `santuario`: Santa Cruz da
  Reconciliação (Paróquia Santo Antônio do Caxingui) e o Santuário Diocesano
  da Mãe Três Vezes Admirável de Schoenstatt (Paróquia São Pedro e São Paulo,
  Cidade Jardim). As missas dominicais das comunidades também estão nas
  páginas da diocese, mas não entraram (regra desta pesquisa: comunidade só
  com nome e lugar).
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## A página de cada paróquia e os dois quadros de missa

Cada página (`https://dcl.org.br/paroquias/<nome>`, as URLs estão no campo
`fontes` de cada item) mostra os horários de missa da matriz DUAS vezes: um
quadro em grade e outra lista logo abaixo. Em 102 paróquias os dois batem (ou
só existe um). Em 11 não batem:

- Santa Suzana e São Carlo Acutis: a grade traz domingo 8h30, a lista não. O
  site da própria paróquia (santasuzana.org.br) confirma a grade: domingo
  8h30 e segunda a sábado 18h na Capela da Imaculada, a matriz provisória.
  Entrou a grade, confiança alta.
- Santa Inês (Embu), Santa Maria Goretti, Santo Antônio de Sant'Anna Galvão,
  São Benedito (Vila Sônia), São João Batista (Pq. Figueira Grande), São João
  Maria Vianney (Taboão), São José Operário (Vl. Pirajussara), São Luís
  Gonzaga (Pq. Novo Santo Amaro), São Marcos (Embu) e São Vicente de Paulo
  (Jd. Caiçara): entraram só os horários que aparecem nos dois quadros; os
  que aparecem num só ficaram descritos no `nao_cabe` da matriz, e a
  confiança é média. São Luís Gonzaga ficou sem missa semanal (os dois quadros
  dão domingo 7h30 e 19h contra 8h e 19h30), só com a missa da 1ª quinta.
  Para Vianney, o site da paróquia (sem data) dá quinta 20h e domingo 8h e
  19h; anotado no `nao_cabe`.

O JSON-LD de cada página (dados para o Google) segue a lista, não a grade.

"Missas ocasionais" de cada página: "1ª sexta-feira do mês às 20h" e afins
viraram horário com `semanas`; quando já existia a missa semanal no mesmo dia
e hora, não se repetiu. Casos que não cabem (todo dia 19, todo dia 28, as
missas nos CEM da Santa Margarida Maria Alacoque, a Capela de São Lázaro em
reforma) ficaram no `nao_cabe`. Sagrado Coração de Jesus (Jd. Jaqueline):
a adoração das quintas aparece como 15h às 19h num lugar e 14h às 17h em
outro; ficou só no `nao_cabe`.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese (13 páginas de 9, 113
unidades), batida com as 113 páginas individuais.

Conferência contra o GCatholic (atualizado em 09/11/2026: 110 paróquias e 1
missão nas estatísticas de 2022; 111 paróquias e a catedral na lista de
igrejas): bate em quase tudo, com nomes diferentes em vários casos (o
GCatholic lista pela igreja matriz e põe o nome da paróquia como apelido).
Divergências:

- **São Pedro e São Paulo (Jd. Sampaio, Itapecerica da Serra)**, criada em
  07/10/2023: falta no GCatholic.
- **Sagrado Coração de Jesus (Jd. Jaqueline, São Paulo)**: o GCatholic lista
  a mesma paróquia (mesma data de criação, 29/07/2008, e mesmo lugar) como
  "São Mateus"; a diocese dá o nome e a matriz como Sagrado Coração de Jesus,
  e o Instagram publicado é "psaomateus.jd.jaqueline". Seguimos a diocese.
- **Sagrado Coração de Jesus (Jd. Jangadeiro)**, criada em 2021: o GCatholic
  tem a igreja (Church ID 118875, 16/03/2021) mas a diocese tem quatro
  paróquias Sagrado Coração na capital e o GCatholic marca três como
  paróquia. Seguimos a diocese.
- **Santuário Santa Cruz da Reconciliação**: o GCatholic marca como
  paróquia e santuário; a diocese o lista como comunidade da Paróquia Santo
  Antônio (Caxingui). Entrou como igreja dessa paróquia.
- **Unidade Pastoral Nossa Senhora Aparecida (Itaquaciara)**: a diocese a
  chama de unidade pastoral (criada em 13/04/2011); o GCatholic, de
  paróquia. Entrou como `area_pastoral`.
- **Basílica de Nossa Senhora do Rosário de Fátima (Embu das Artes)**: está
  no GCatholic como basílica, sem paróquia. Na diocese aparece a "Comunidade
  Nossa Senhora do Rosário de Fátima" (Estrada Ponta Porã, 1080, Capuava),
  da Paróquia Menino Jesus e Santa Paulina, a 3,5 km da matriz; anotado na
  observação da paróquia, sem confirmação de que é o mesmo templo.

Cidades: o filtro da lista da diocese marca São Paulo para três paróquias
cujo endereço é de outro município. Seguimos o endereço: N. S. Aparecida
(Chácara Flórida, Embu-Guaçu), Menino Jesus e Santa Paulina (Jd. Novo Embu,
Embu das Artes) e São Pedro e São Paulo (Jd. Sampaio, Itapecerica da Serra).
O mesmo filtro oferece Cotia, Miracatu e Pedro de Toledo, mas nenhuma
paróquia da diocese tem matriz nessas cidades. Quatro comunidades ficam em
Cotia: N. S. da Penha (Samambaia, da Paróquia N. S. dos Prazeres) e três
da Paróquia Menino Jesus e Santa Paulina (N. S. de Fátima no Jd. Caputera,
Sagrado Coração de Jesus e São Pedro na Ressaca). Cotia é da Diocese de
Osasco (`saida/osasco.json`), que não lista essas quatro; no Bairro da
Ressaca ela tem a matriz de Santa Teresinha e São Roque, outra igreja. As
comunidades entraram aqui, na paróquia a que a página da diocese as liga.

Sem repetição com as outras pesquisas: nenhum arquivo de `saida/` tinha
Taboão da Serra, Embu das Artes, Itapecerica da Serra, Embu-Guaçu, Juquitiba
ou São Lourenço da Serra. `osasco.json` tem cinco paróquias na cidade de São
Paulo (Jd. Dracena, Vila Piauí, Jd. Arpoador, Vila Jaguara, Jd.
Educandário), nenhuma delas na lista de Campo Limpo.

Nomes: tiramos o bairro que a diocese pôs no nome para distinguir paróquias
iguais ("Paróquia Nossa Senhora Aparecida Monte Kemel", "Peri Peri", "-
Jangadeiro", "- Pq. Ipê", "- Taboão"): o lugar vai em `localidade`. A
"Paróquia Catedral Sagrada Família" entrou como "Catedral Sagrada Família".
Quando o titular da matriz é outro, a observação diz qual (ex.: Paróquia
Cristo Ressuscitado, matriz de São Mateus).

## Contatos

Telefone, WhatsApp, e-mail, Instagram e site vieram do cabeçalho de cada
página da diocese. O e-mail vem codificado em base64 no atributo `text` do
elemento `joomla-hidden-mail`. O WhatsApp é o número do link "Clique Aqui".
Ficaram fora:

- Unidade Pastoral N. S. Aparecida: o e-mail publicado (com o sobrenome do
  administrador paroquial) e o celular, que aparentam ser pessoais.
- O Instagram "juventude_sjt" da Paróquia São Judas Tadeu e Santa Clara (é
  do grupo de jovens, não da paróquia).

O e-mail da Paróquia da Divina Misericórdia está publicado como
`pdmisericordia33@gmail.com.br` (domínio provavelmente errado); ficou como
publicado. O site da Paróquia São Benedito (saobenedito.org.br) não
resolveu DNS em 13/11/2026; ficou como publicado.

## Páginas lidas (13/11/2026)

- https://dcl.org.br/paroquias (a lista, com `?start=0` a `?start=108`)
- https://dcl.org.br/paroquias/<nome> (113 páginas; a URL de cada uma está
  no `fontes` do item)
- https://www.santasuzana.org.br/ (horários da Santa Suzana)
- https://www.vianney.org.br/web/index.php/missas-e-confissao (Vianney)
- https://gcatholic.org/dioceses/diocese/camp6.htm e
  https://gcatholic.org/churches/local/camp6 (conferência da lista)

O site da diocese só responde a navegador (com outro agente devolve 403).

## O que falta para o próximo estado desta pesquisa

- As 11 paróquias com quadros divergentes: confirmar com a secretaria ou com
  o site/aviso da própria paróquia.
- As missas dominicais das comunidades, que a diocese publica em cada página
  (ficaram fora por regra).
- A Basílica de N. S. do Rosário de Fátima: confirmar a qual paróquia
  pertence.
- Confissões das 27 paróquias que mandam agendar na secretaria.
