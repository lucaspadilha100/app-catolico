# Diocese de Luziânia (GO): fontes da pesquisa de 13/11/2026

Sé em Luziânia; Entorno do Distrito Federal, a sul e oeste de Brasília.
Bispo: Dom Francisco Agamenilton Damascena (desde 28/05/2025). Cúria: Av.
Claro Carneiro de Mendonça, 199, Parque JK, Luziânia, (61) 3621-2022,
contato@diocesedeluziania.com.br.

## Resumo

- **36 unidades** em `saida/luziania.json`: 1 catedral (N. S. da
  Evangelização), 1 santuário diocesano (Jardim da Imaculada, Cidade
  Ocidental) e 34 paróquias, em 8 foranias e 3 vicariatos:
  - Vicariato Norte: Forania Padre Bernardo e Mimoso de Goiás (2), Águas
    Lindas de Goiás (6), Santo Antônio do Descoberto (3).
  - Vicariato Centro: Forania Novo Gama (2), Valparaíso de Goiás (5), Cidade
    Ocidental e Jardim Ingá (6, mais o santuário).
  - Vicariato Sul: Forania Luziânia (6, mais a nova São João Batista do
    Pedregal), Cristalina (4).
- Cidades da matriz: Luziânia (9, contando Jardim Ingá, Jardim Jockey Club e
  Mingone), Águas Lindas (6), Valparaíso (5), Cidade Ocidental (4), Santo
  Antônio do Descoberto (3), Novo Gama (3, contando o Pedregal), Cristalina
  (3, contando Campos Lindos), Padre Bernardo (2, contando Vendinha) e
  Ipameri (1: Bom Jesus da Lapa, no distrito de Domiciano Ribeiro, que a
  diocese põe na Forania Cristalina).
- **36 com horário de missa** (35 com horário da matriz; a São Francisco de
  Assis de Águas Lindas só publica o das capelas). Confiança: 28 alta
  (página da paróquia atualizada em 2025 ou 2026) e 8 média (página de 2021
  a 2024, ou com dado contraditório).
- 242 capelas e comunidades com nome, lugar e horário, quase todas tiradas da
  própria página de cada paróquia. Onde a fonte não dá bairro, a capela
  entrou com localidade vazia e isso está na observação.
- Nenhum horário de confissão ou adoração publicado nas páginas.
- Todo `id_banco` é null.

## Fonte principal: o site da diocese

O site (WordPress) tem um tipo de conteúdo próprio, `paroquias`, lido pela
API em 13/11/2026:

- https://diocesedeluziania.com.br/paroquias/ (lista por forania e por
  vicariato, com resumo de cada paróquia)
- https://diocesedeluziania.com.br/wp-json/wp/v2/paroquias?per_page=100 (36
  páginas: 35 paróquias e o santuário, cada uma com pároco, matriz, missas,
  endereço, telefone, e-mail, território e capelas com horário). As URLs
  estão no campo `fontes` de cada item; a data é a da última edição.
- O tipo `missas` (https://diocesedeluziania.com.br/missas/) é de 2021 e
  ficou de fora: as páginas de paróquia são mais novas.

Páginas mais antigas (confiança média): Sagrado Coração de Jesus de
Valparaíso (2021), N. S. da Imaculada Conceição de Novo Gama (2021), São
Marcos e São Pedro Apóstolo de Águas Lindas (2022), São Sebastião de
Cristalina (2022), N. S. Imaculada Conceição de Águas Lindas (2024).

## Conferência da lista

- **Diocese**: a página de foranias soma 34 paróquias; a lista detalhada
  traz ainda a Paróquia São João Batista (Pedregal, Novo Gama), página de
  março de 2026, e o Santuário Jardim da Imaculada com pároco próprio.
- **GCatholic** (https://gcatholic.org/churches/local/luzi0, atualizado em
  09/11/2026; https://gcatholic.org/dioceses/diocese/luzi0.htm): 33
  paróquias e o santuário "Imaculada". Faltam lá a São João Batista do
  Pedregal (nova) e a Bom Jesus da Lapa de Domiciano Ribeiro. Todas as 33
  do GCatholic batem com a diocese.

## Divergências e escolhas

- **Jesus Misericordioso** (Cidade Ocidental): a página escreve "Igreja
  Matriz: Nossa Senhora de Guadalupe" e repete o pároco da Catedral. O nome
  da matriz seguiu o GCatholic ("Jesus Misericordioso"); confiança média.
- **Santuário Jardim da Imaculada**: a própria página dá missas de segunda a
  sexta às 6h30 e 19h; a página da Paróquia Santo Antônio, no mesmo
  território, dá 6h30 e 20h. Ficou a do santuário.
- **N. S. da Imaculada Conceição de Novo Gama** (página de 2021) ainda lista
  as capelas São João Batista (Pedregal), N. S. das Graças (Vale das
  Andorinhas) e Santa Isabel (Araguaia), que a nova Paróquia São João
  Batista (2026) traz como suas. Entraram só na nova.
- **Divino Espírito Santo** (Padre Bernardo): a diocese dá a matriz como
  "Nossa Senhora do Carmo". Mantido. A capela São Sebastião aparece com
  duas missas em lugares diferentes (Bebedouro e Mimoso); viraram duas
  capelas, a de Mimoso em Mimoso de Goiás.
- **Sagrado Coração de Jesus** (Águas Lindas): o telefone publicado é o
  mesmo da paróquia homônima de Valparaíso; ficou vazio em Águas Lindas.
- **N. S. de Guadalupe**: telefone publicado incompleto ("61 9.9881/5398"),
  não entrou.
- Celebrações da Palavra, "última sexta/sábado/terça do mês", a novena
  perpétua de Santo Antônio e as missas mensais de capelas rurais sem data
  fixa foram para `nao_cabe`.
- WhatsApp só onde a página diz WhatsApp (São Francisco de Assis de
  Valparaíso, São João Batista e Santa Clara, N. S. Aparecida do Jardim
  Ingá).

## Instagram (anotado das próprias páginas da diocese)

saofranciscodeassis_paroquia1, sagradafamiliaipanema, paroquiadefatimaa,
santuariodesantoantonio, paroquiadivinoes, santuariosantaluziago,
senhora_delourdes, paroquia_santoantonio_, paroquiaimcmingone. Nenhum
perfil foi aberto.

## O que falta para o próximo estado desta pesquisa

- Horário da matriz da São Francisco de Assis (Águas Lindas).
- Bairro das capelas de São Pedro Apóstolo, São Marcos e Sagrado Coração de
  Jesus (Águas Lindas), São José (Santo Antônio do Descoberto), da Catedral
  e de seis capelas urbanas de N. S. Aparecida de Cristalina.
- Reconferir as páginas de 2021 e 2022 quando a diocese as atualizar.
- Horários de confissão (nenhuma página publica).
