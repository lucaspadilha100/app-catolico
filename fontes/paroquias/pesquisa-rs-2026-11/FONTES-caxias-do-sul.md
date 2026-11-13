# Diocese de Caxias do Sul (RS): fontes da pesquisa de 13/11/2026

Sé em Caxias do Sul; Serra Gaúcha (Bento Gonçalves, Farroupilha, Garibaldi,
Flores da Cunha, Nova Prata, Veranópolis) e Campos de Cima da Serra (São
Francisco de Paula, Cambará do Sul, Jaquirana). Bispo: Dom José Gislon,
OFMCap. Padroeira diocesana: Nossa Senhora de Caravaggio (26 de maio).
Site: https://www.diocesedecaxias.org.br/

## Resumo

- **73 unidades** em `saida/caxias-do-sul.json`: 1 catedral (Santa Teresa
  d'Ávila), 1 santuário (Nossa Senhora de Caravaggio, Farroupilha, sede da
  paróquia de mesmo nome) e 71 paróquias. A diocese diz ter "73 paróquias,
  uma paróquia da Diocese de Vacaria atendida pela Diocese de Caxias, dois
  santuários diocesanos, dois santuários paroquiais e 983 comunidades"
  (página Histórico, ano 2026). Cidades: Caxias do Sul (29, contando os
  distritos de Ana Rech, Fazenda Souza, Galópolis, Forqueta, Criúva, Vila
  Oliva, Santa Lúcia do Piaí e Terceira Légua), Farroupilha (6), Bento
  Gonçalves (4), São Francisco de Paula (3) e mais 27 municípios.
- **70 com horário de missa**: 64 com confiança alta, 6 média (Cristo
  Operário, São Vicente de Paulo, Guabiju, Imigrante e Santa Bárbara de São
  Valentim do Sul, onde a diocese publica só uma missa; Mãe de Deus de Carlos
  Barbosa, cujas comunidades vêm de página da paróquia sem data). **3 sem
  horário** (confiança baixa): Jesus Bom Pastor e São João Batista e Jesus
  Ressuscitado (Farroupilha), São Sebastião (Jaquirana).
- Confissão: Catedral (seg a sex 14h às 16h, sáb 9h às 12h) e São Leonardo
  Murialdo (ter a sáb, 15h às 18h). Garibaldi: confissão no horário da
  secretaria (no `nao_cabe`). Adoração em 8 paróquias.
- **45 igrejas além das matrizes**, só onde a fonte dá horário ou lugar: 11
  comunidades dos Santos Apóstolos, 20 da Mãe de Deus (Carlos Barbosa), 6 de
  Santa Maria do Belo Horizonte (Cazuza Ferreira), 3 de N. S. das Graças (São
  Francisco de Paula), a Igreja São Pedro (Petrópolis) da paróquia de
  Lourdes, a Comunidade Santos Anjos (Cristo Operário), o Mosteiro N. S. do
  Brasil (Flores da Cunha) e duas igrejas de Garibaldi (Freis Capuchinhos e
  Ermida N. S. de Fátima).
- Todo `id_banco` é null.

## Fonte principal

O site da diocese é um aplicativo Next.js; a página
https://www.diocesedecaxias.org.br/paroquias/all/0 traz no `__NEXT_DATA__`
as 73 paróquias com endereço, telefone, e-mail, clero, número de comunidades
e horários de missa (lidas em 13/11/2026). Cada item do JSON aponta a página
individual (`/paroquias/<cidade>/<id>`). O texto não tem data, mas o clero
está atualizado (diáconos ordenados em julho e agosto de 2026).

Páginas próprias das paróquias que trouxeram mais que a diocese (lidas em
13/11/2026) e prevaleceram onde divergem:

- https://www.caravaggio.org.br/horarios (Santuário de Caravaggio: domingo
  com 6h30 e 16h, adoração de quinta às 20h; a diocese dá outra grade)
- https://www.catedraldecaxias.org.br/pagina/horarios e
  https://www.catedraldecaxias.org.br/sacramentos/confissoes
- https://www.paroquiasaopedrogaribaldi.com.br/horarios-de-missas-e-confissoes
  (domingo à noite às 18h; a diocese diz 19h)
- https://www.paroquiadelourdes.com.br/ e /comunidades/0
- https://www.paroquiamaededeus.org.br/horarios/ (matriz igual à diocese;
  missas mensais de 20 comunidades; página sem data, ainda com o Natal de 2023)

Sites citados e não aproveitados: www.saopelegrino.com.br e
www.paroquianovaprata.com.br (só carregam por JavaScript);
www.paroquiasantoantoniobg.com.br (horários em componente dinâmico; ficou a
grade da diocese).

## Regiões pastorais

A página Cúria/Colégios lista as regiões: Caxias do Sul, Farroupilha,
Flores da Cunha, Garibaldi, Bento Gonçalves, São Francisco de Paula e o
Vicariato de Nova Prata (criado em 2013). O site não diz que paróquia está
em que região; a observação de cada item dá a região só quando a cidade é a
sede dela ("pela cidade") e, nas outras, registra que não foi informada.

## Conferência da lista

- GCatholic, https://gcatholic.org/churches/local/caxi1 (atualizado em
  09/11/2026): 73 paróquias. Bate com a diocese. O GCatholic nomeia algumas
  paróquias de Caxias pela rede e não pela matriz: Divino Espírito Santo
  (N. S. de Fátima, bairro Fátima), Santíssima Trindade (N. S. de Fátima,
  Cidade Nova), Santa Fé (Santa Rita de Cássia), Cristo Operário (igreja
  Santos Anjos) e Santos Apóstolos (igreja São Romédio). Seguimos os nomes da
  diocese e anotamos o outro na observação.
- A Paróquia São Sebastião de André da Rocha é da **Diocese de Vacaria**,
  atendida pelo pároco de Protásio Alves; entrou em `vacaria.json`.

## Instagram (só os citados pelos sites oficiais das paróquias)

catedraldecaxias, santuario.caravaggio, paroquiasantoantoniobg,
paroquiadelourdes, saopedrogdi. O perfil da diocese é diocesedecaxias.

## O que falta para o próximo estado

- Horários das três paróquias sem horário (Farroupilha: Jesus Bom Pastor e
  São João Batista, Jesus Ressuscitado; Jaquirana: São Sebastião). Nenhuma
  fonte oficial cita perfil de rede social delas.
- Missas de semana e domingo em Guabiju, Imigrante, São Valentim do Sul e
  São Vicente de Paulo (só a de sábado está publicada).
- As 983 comunidades: a diocese só dá o número por paróquia.
- Confissões fora da Catedral, Murialdo e Garibaldi.
- Telefone de Guabiju publicado incompleto: (54) 3272.107.
- Região pastoral de cada paróquia.
