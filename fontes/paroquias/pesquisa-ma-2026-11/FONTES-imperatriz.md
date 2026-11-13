# Diocese de Imperatriz (MA): fontes da pesquisa de 13/11/2026

Sé em Imperatriz; sudoeste do Maranhão, divisa com Pará e Tocantins.
Bispo: Dom Vilsom Basso, SCJ. Cúria: Av. Dorgival Pinheiro de Sousa, 396,
Centro, Imperatriz. Padroeira diocesana: Santa Teresa d'Ávila (15 de outubro).

## Resumo

- **34 unidades pastorais** em `saida/imperatriz.json`: 1 catedral e 33
  paróquias, nas microrregiões que a diocese publica (Imperatriz/Centro,
  Imperatriz/Leste, Imperatriz/Norte, Cacau, Açailândia/Itinga,
  João Lisboa/Amarante, Coquelândia/São Pedro). Cidades: Imperatriz (18,
  com Coquelândia), Açailândia (5), e uma em cada: Amarante do Maranhão
  (a diocese escreve "Amarante"), Buritirana, Cidelândia, Davinópolis,
  Governador Edison Lobão, Itinga do Maranhão, João Lisboa, Senador La
  Rocque, São Francisco do Brejão, São Pedro da Água Branca, Vila Nova dos
  Martírios.
- **16 com horário de missa na matriz** (confiança média): o site da
  diocese tem uma página por paróquia e uma por igreja ("locais"), com
  horários em tabela (dia, hora, observação). As páginas foram editadas
  entre 2021 e 2024 (data no mapa do site), por isso a confiança é média.
- **18 sem horário da matriz** (confiança baixa): a página da paróquia
  existe, com contatos e endereço, mas a tabela de horários está vazia.
  São José do Egito tem três comunidades listadas, também sem horário.
- **108 comunidades** ligadas às paróquias (81 com missa em horário fixo).
  Cada uma tem página própria no site da diocese, com a paróquia, o
  endereço e os horários. "Celebração da Palavra" e missas em dia fixo do
  mês ("dia 13 de cada mês") ficaram no `nao_cabe`. Quando o endereço da
  comunidade diz outra cidade (comunidades da paróquia de Senador La
  Rocque em João Lisboa e Buritirana), a comunidade ficou com essa cidade.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do próprio site, pela API do WordPress
(`/wp-json/wp/v2/paroquias`, 34 registros) e pelo mapa do site
(`paroquias-sitemap.xml`, `locais-sitemap.xml`, 141 igrejas). A contagem
bate com o anuário: o GCatholic (atualizado em 09/11/2026) diz 34
paróquias nas estatísticas, embora a lista de igrejas dele tenha só 27.
As 7 que faltam no GCatholic: N. S. da Conceição (Vila Cafeteira, 2018),
N. S. das Dores (Vila Fiquene, 2019), Santa Inês (2014), São José do
Egito (2017), São José (2022), todas em Imperatriz; Santa Luzia (Piquiá,
2013) e São Rafael (2022), em Açailândia.

Divergências anotadas na observação de cada item:

- **Governador Edison Lobão**: a página da paróquia se chama "Santa Rita
  de Cássia" (editada em 2023, "criada em 2022"), mas o e-mail, o link da
  paróquia e a página da matriz falam em "Maria Mãe da Igreja", que é o
  nome dado pelo GCatholic (igreja de 1994). Seguimos o título da página;
  a conferir.
- **São Rafael (Açailândia)**: a página da paróquia diz "Paróquia"; a da
  matriz ainda diz "Área Pastoral". Entrou como paróquia.
- **N. S. Aparecida (Imperatriz)**: o GCatholic a dá como paróquia e
  santuário; a diocese não fala em santuário. Ficou como matriz.
- **Davinópolis**: o endereço publicado é igual ao da paróquia de
  Amarante (erro de cópia aparente) e ficou fora.

## Páginas lidas (13/11/2026)

- https://diocesedeimperatriz.org.br/ (menu e contato da cúria)
- https://diocesedeimperatriz.org.br/wp-json/wp/v2/paroquias?per_page=100
- https://diocesedeimperatriz.org.br/paroquias-sitemap.xml e
  https://diocesedeimperatriz.org.br/locais-sitemap.xml (datas de edição)
- Uma página por paróquia, `https://diocesedeimperatriz.org.br/paroquias/<nome>/`
  (34), com cidade, microrregião, ano de criação, e-mail, telefone,
  WhatsApp, Instagram, endereço, expediente e horários da matriz.
- Uma página por igreja, `https://diocesedeimperatriz.org.br/locais/<nome>/`
  (141), com a paróquia, o endereço e os horários. As URLs usadas estão no
  campo `fontes` de cada item.

Quando a página da paróquia e a página da matriz divergem, valeu a mais
nova: na Catedral (página da matriz editada em 02/2024: domingo 17h em vez
de 16h, missas de sábado 6h30 e de quarta e quinta 19h) e na Santa Cruz
(terça 19h30 na página da matriz, 05h na da paróquia).

E-mails decodificados da proteção do Cloudflare (`data-cfemail`). Fora do
JSON: e-mail com nome de pessoa (N. S. da Penha).

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/impe0.htm e
  https://gcatholic.org/churches/local/impe0 (09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Horários das 18 matrizes sem tabela no site: Cristo Salvador, N. S. da
  Conceição, N. S. das Dores, Santa Inês, Santa Rita de Cássia, São
  Francisco de Assis, São José, São José do Egito (Imperatriz); São João
  Batista, São Rafael, São Sebastião (Açailândia); Bom Jesus da Lapa
  (Itinga), Perpétuo Socorro (João Lisboa), Sagrado Coração (Amarante e
  Cidelândia), Santo Antônio (Davinópolis), São Francisco (Brejão), São
  Pedro Apóstolo (São Pedro da Água Branca). A cota de buscas na web acabou
  antes de procurar os trechos de Instagram destas paróquias (os perfis
  estão no campo `instagram`).
- Comunidades das paróquias de Imperatriz que a página cita sem horário
  (São José do Egito: Bom Jesus, São Sebastião, Navegantes).
- Confissão: nenhuma página traz horário.
- Nome atual da paróquia de Governador Edison Lobão.
