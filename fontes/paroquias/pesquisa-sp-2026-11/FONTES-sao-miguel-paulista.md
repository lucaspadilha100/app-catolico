# Diocese de São Miguel Paulista (SP): fontes da pesquisa de 13/11/2026

Zona leste da cidade de São Paulo (Penha, São Miguel, Itaquera, Guaianases,
Itaim Paulista e vizinhanças). Bispo: Dom Algacir Munhak, CS. Cúria: Praça
Pe. Aleixo Monteiro Mafra, 11, fundos, São Miguel Paulista, CEP 08011-010.
Padroeiro diocesano: São Miguel Arcanjo. Todas as unidades ficam no
município de São Paulo; nenhuma cidade fora da capital, então não há
sobreposição com os outros arquivos de `saida/` (os únicos itens com cidade
"São Paulo" em `osasco.json` são da zona oeste).

## Resumo

- **109 unidades** em `saida/sao-miguel-paulista.json`: 1 catedral, 1
  basílica (Nossa Senhora da Penha), 1 santuário (Santuário Eucarístico
  Nossa Senhora da Penha), 102 paróquias e 4 áreas pastorais (2 áreas
  pastorais e 2 "comunidades" com padre responsável que a lista da diocese
  traz fora da numeração das paróquias).
- **12 com horário de missa**: 10 com confiança alta (o horário está na
  própria página da paróquia no site da diocese) e 2 com confiança média
  (Basílica e Santuário Eucarístico da Penha, pelo site da Basílica, sem
  data).
- **97 sem horário**, com `"horarios": []` e confiança baixa, pela regra do
  dono: a página da diocese de cada uma só traz clero, endereço, telefone e
  comunidades, e a busca não achou site da paróquia com horários.
- Horário de confissão só na Basílica e no Santuário Eucarístico; adoração
  só no Santuário Eucarístico (Santíssimo exposto o dia todo, menos na
  segunda, sem hora: foi para o `nao_cabe`).
- Capelas e comunidades: entraram como igreja só as que a fonte dá com
  endereço (5 da N. S. Aparecida do Jardim Helena e 1 do Sagrado Coração de
  Jesus de Cidade Tiradentes, Rua Francisco Pawlik). As demais (são muitas:
  12 só na Cohab Prestes Maia) ficaram listadas no `nao_cabe` da matriz,
  com os horários quando a página da diocese os dá.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Lista de Paróquias" do site da diocese (108 links,
numerados de 001 a 104, mais as duas áreas pastorais e as duas comunidades),
com a página "Santuários" (3 santuários). Cada link foi baixado e lido.

Conferência contra o GCatholic (atualizado em 09/11/2026: "104 parishes,
244 missions", 111 igrejas): bate nas 104 paróquias (catedral, Basílica da
Penha, N. S. da Paz como paróquia e santuário, N. S. da Esperança como
paróquia e mosteiro, e as demais com as mesmas repetições de titular, por
exemplo 10 de N. S. Aparecida e 7 de São José). Diferenças:

- O GCatholic não lista a Área Pastoral N. S. do Perpétuo Socorro nem a
  Comunidade São José do Tabor; a diocese lista. Entraram.
- O GCatholic traz Santa Terezinha e São Benedito o Negro sem marca de
  paróquia (batem com a Comunidade Santa Terezinha do Jardim Jaú e a Área
  Pastoral São Benedito o Negro) e um "São José Operário" sem marca de
  paróquia que não tem par na lista da diocese (fora).
- O Santuário Eucarístico aparece duas vezes no GCatholic (duplicata); o
  Seminário Diocesano ficou fora.

Decisões:

- **Paróquia de Nossa Senhora da Penha** (nº 020, Rua Santo Afonso, 199) é a
  Basílica: entrou como `basilica`, com a igreja de tipo `santuario`.
- **Santuário Eucarístico Nossa Senhora da Penha** (a igreja antiga do
  Largo da Penha) tem reitor próprio na página de santuários da diocese:
  entrou como unidade `santuario`. A diocese dá Praça N. S. da Penha, 01 e
  (11) 2091-8194; o site da Basílica dá o número 20 e (11) 2092-4421. O JSON
  segue o site da Basílica e anota a diferença.
- **Santuário Nossa Senhora da Paz** é a matriz da Paróquia N. S. da Paz
  (mesmo reitor e telefone): a igreja entrou com tipo `santuario`. A página
  da paróquia dá o nº 1561 da Av. Maria Luiza Americano; a de santuários,
  1550.
- **Comunidade Santa Terezinha** (Jardim Jaú) e **Comunidade São José do
  Tabor** (Jardim São Gonçalo) estão na lista de paróquias com "Responsável",
  sem número: entraram como `area_pastoral`, com a própria igreja como sede.
  A Santa Terezinha tem o mesmo padre (Pe. Ataíde Rodrigues Fontes) e o
  mesmo telefone do Santuário Eucarístico.
- **São Sebastião Mártir** (Vila Nova Itaim, 2019) e **São José Patriarca**
  (Vila Nova Curuçá, 2017) são paróquias novas; o endereço da página da
  primeira ainda diz "área pastoral".
- As duas áreas pastorais (N. S. do Perpétuo Socorro, Jardim Helian; São
  Benedito o Negro, Parque Cruzeiro do Sul) não declaram matriz: a igreja do
  endereço é a sede, dito na observação.

## Páginas lidas em 13/11/2026

- https://diocesesaomiguel.org.br/index.php/paroquias/lista-de-paroquias
  (a lista; cada item do JSON aponta a página da sua paróquia em `fontes`)
- https://diocesesaomiguel.org.br/index.php/santuarios
- https://diocesesaomiguel.org.br/index.php/basilica-da-penha/programacao-da-basilica
  (grade antiga, sem data, diferente da do site da Basílica; não usada)
- https://www.basilicadapenha.com.br/ (missas da Basílica e do Santuário
  Eucarístico, missa votiva do dia 8)
- https://www.basilicadapenha.com.br/secretaria-confissoes.html (confissões
  dos dois)
- https://www.basilicadapenha.com.br/santuario-eucaristico.html (história;
  "local de adoração eucarística perpétua da Diocese")

Páginas da diocese com bloco "HORÁRIOS DAS MISSAS" (as 10 de confiança
alta): N. S. Aparecida (Vila Pauabe), N. S. de Fátima (Jardim Fernandes),
Santa Luzia (Vila Cisper), Santa Maria de Nazaré, São Benedito (Guaianases),
São Paulo Apóstolo (Vila Rui Barbosa), São Pedro Apóstolo (Jardim São
Pedro), São João XXIII, Bom Jesus das Oliveiras e Imaculado Coração de Maria.
As páginas não têm data, mas o formato (com e-mail e bloco de horários) é o
mais novo do site, e o clero listado é o atual.

E-mails: o Joomla esconde os endereços (`joomla-hidden-mail`); foram lidos
do atributo `text` em base64. O e-mail da Basílica vem do `data-cfemail` do
site dela.

## Contatos

- Telefones como publicados, com DDD 11 acrescentado onde a página omite.
  Onde só há celular de secretaria (N. S. de Fátima do Jardim São João, N.
  S. Aparecida do Jardim Helena, Sagrado Coração de Jesus de Cidade
  Tiradentes), é o número que a diocese publica para a paróquia.
- Instagram só da Basílica (`basilicadapenhasp`, do site dela). Nenhum
  perfil aberto por dentro.
- A diocese publica para São Benedito (Guaianases) o site
  paroquiamatrizsaobenedito.com.br e um e-mail do mesmo domínio; o domínio
  não resolve (13/11/2026) e os dois ficaram de fora.

## Buscas que não deram nada

Busca geral por horários de missa nas paróquias da zona leste (Santa
Tereza de Artur Alvim, N. S. do Carmo de Itaquera, N. S. das Graças da
Parada XV, N. S. da Esperança, Santa Luzia do Jardim Nordeste, N. S. do
Belo Ramo, Santa Verônica Giuliani, Santo Onofre, N. S. de Monte Virgem) e
por um guia ou anuário diocesano em PDF: nenhum site de paróquia com
horários, nenhum anuário. Os resultados traziam só agregadores (Horário de
Missa, Missa Hora), que não são fonte permitida, e paróquias homônimas de
outras dioceses (o site paroquiansesperanca.org.br, por exemplo, é de
Moema, Diocese de Santo Amaro). O artigo da diocese sobre a Capela de São
Miguel Arcanjo (2022) deu 404.

## O que falta para o próximo estado desta pesquisa

- Horários das 97 unidades sem horário: o caminho é o Instagram de cada
  paróquia (pelo trecho da busca) ou telefonema; a diocese não publica.
- A Capela de São Miguel Arcanjo (a "capela dos índios", Praça Pe. Aleixo
  Monteiro Mafra, ao lado da Catedral) não entrou: nenhuma fonte lida diz a
  que unidade pertence nem dá horário.
- Endereço das comunidades listadas só pelo nome.
- Reconferir o telefone e o número do Santuário Eucarístico (diocese e site
  da Basílica divergem).
