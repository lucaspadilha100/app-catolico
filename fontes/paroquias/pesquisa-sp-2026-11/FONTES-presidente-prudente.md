# Diocese de Presidente Prudente (SP): fontes da pesquisa de 13/11/2026

Sé em Presidente Prudente; Oeste Paulista (Alta Sorocabana e Pontal do
Paranapanema). Bispo: Dom Benedito Gonçalves dos Santos. Cúria: Rua Padre
João Goetz, 400, Jardim Esplanada, Presidente Prudente, CEP 19061-460,
(18) 3918-5000. Padroeiro diocesano: São Sebastião (20 de janeiro).

## Resumo

- **57 unidades pastorais** em `saida/presidente-prudente.json`: 1 catedral
  (São Sebastião), 5 santuários diocesanos com função de paróquia (N. S. do
  Carmo, N. S. Aparecida, Santa Teresinha do Menino Jesus e da Sagrada Face e
  São Miguel Arcanjo, em Presidente Prudente; Santo Expedito, em Santo
  Expedito) e 51 paróquias, em 4 regiões pastorais.
- Cidades das matrizes (27): Presidente Prudente (24, contando a de
  Montalvão, distrito), Presidente Epitácio (3), Álvares Machado (2, uma no
  Parque dos Pinheiros), Presidente Bernardes (2, uma no distrito de
  Araxans), Presidente Venceslau (2), Rosana (2, uma no distrito de
  Primavera), Teodoro Sampaio (2) e uma em cada: Alfredo Marcondes, Anhumas,
  Caiabu, Caiuá, Emilianópolis, Estrela do Norte, Euclides da Cunha Paulista,
  Indiana, Marabá Paulista, Martinópolis, Mirante do Paranapanema, Narandiba,
  Piquerobi, Pirapozinho, Regente Feijó, Sandovalina, Santo Anastácio, Santo
  Expedito, Taciba e Tarabai.
- **57 com horário de missa na matriz** (56 com confiança alta, 1 média). O
  site da diocese tem uma página por paróquia com contatos, endereço e uma
  tabela de horários por igreja (matriz e cada capela), com notas para as
  missas mensais. A de confiança média é Santa Luzia de Araxans: a tabela só
  traz o sábado, e a nota cita missas na primeira e terceira terça e na
  primeira sexta sem dizer a hora.
- **301 capelas e comunidades**, todas com nome e lugar como a diocese
  publica; 229 com horário de missa. As outras têm "consultar a secretaria"
  em `nao_cabe` (Santo Anastácio, Teodoro Sampaio, Presidente Venceslau,
  Montalvão, Álvares Machado e outras).
- Só há horário de **missa**: nenhuma página publica confissão ou adoração
  (a diocese publicou só as datas de confissão do Advento, que não são
  semanais).
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Lista das unidades

A lista vem do sitemap de paróquias do site da diocese
(`wp-sitemap-posts-paroquia-1.xml`, 57 páginas). A página "História" do
mesmo site diz "57 paróquias", o que bate. O mesmo texto fala em "21
cidades", número antigo: as matrizes estão em 27 municípios.

Conferência contra o GCatholic (atualizado em 09/11/2026, 56 igrejas, 55
paróquias mais o Seminário Diocesano N. S. Mãe da Igreja): bate em tudo,
com estas diferenças.

- **Paróquia São Miguel Arcanjo (Maré Mansa, Presidente Prudente)**: falta
  no GCatholic. É paróquia nova: a página da diocese foi publicada em
  02/03/2026, e a matriz é a antiga Capela São Miguel Arcanjo da paróquia N.
  S. Aparecida do Parque dos Pinheiros.
- **Paróquia São Sebastião (Estrela do Norte)**: falta no GCatholic. Página
  da diocese de 01/02/2024; antes era capela da paróquia de Sandovalina, que
  ainda a lista (Rua Prefeito José Carlos, 515). A capela saiu da lista de
  Sandovalina e ficou a paróquia (mesma rua, número 533).
- **N. S. do Perpétuo Socorro (Teodoro Sampaio)**: o GCatholic a mostra sem
  a marca de paróquia, e a página dela no Facebook (citada pela diocese) se
  chama "Q-Paróquia", o que sugere quase-paróquia. A diocese a lista como
  paróquia, com o título "Paróquia"; seguimos a diocese e anotamos.
- **N. S. Aparecida do Parque dos Pinheiros**: o GCatholic a põe em
  Presidente Prudente; a diocese dá o endereço em Álvares Machado (Rua Clóvis
  Beviláqua, 580) e a põe na 1ª Região Pastoral, a de Presidente Prudente.
  Ficou com cidade Álvares Machado.
- O GCatholic chama a padroeira de Santo Anastácio de "St. Anastasia"; a
  diocese diz Paróquia Santo Anastácio.

Cidades vizinhas que NÃO são da diocese: Rancharia, Quatá, João Ramalho,
Iepê e Nantes são da Diocese de Assis (ver FONTES-assis.md). Nenhuma cidade
desta lista aparece nos outros arquivos de `saida/`.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://www.diocesepresidenteprudente.com.br/ e
  https://www.diocesepresidenteprudente.com.br/a-diocese/ (história, regiões
  pastorais, "57 paróquias")
- https://www.diocesepresidenteprudente.com.br/wp-sitemap-posts-paroquia-1.xml
  (a lista das 57 páginas)
- Uma página por paróquia em
  `https://www.diocesepresidenteprudente.com.br/paroquia/<nome>/`, com
  padres, telefone, e-mail, endereço da matriz, Instagram e Facebook. As URLs
  estão no campo `fontes` de cada item; a data da fonte é a da última
  alteração da página (`dateModified`), entre 15/09/2026 e 09/11/2026.
- Os horários não estão no HTML da página: a página tem uma lista de locais
  (matriz e capelas) e busca a tabela de cada um por
  `POST /wp-admin/admin-ajax.php` com `action=getHorarios`, `paroquia=<id>` e
  `local=<id>`. Os dois ids estão no próprio HTML da página. Foram lidas as
  365 tabelas. Cada tabela traz o endereço do local, os horários por dia da
  semana e uma nota no rodapé. Toda página diz "Última atualização de
  horários ocorreu em julho de 2025"; é texto fixo do modelo (aparece igual
  até na paróquia criada em 2026), por isso não serviu de data.

## Como as notas viraram horário

- "Somente na primeira sexta-feira do mês" e semelhantes viraram `semanas`
  no horário daquele dia e hora.
- "Última terça/quinta/sexta/domingo do mês" não cabe em `semanas` (última
  não é a quinta): o horário saiu da lista e a nota foi para `nao_cabe`
  (Fazenda Formosa e Centro de Formação, em Martinópolis; três capelas de
  Euclides da Cunha Paulista).
- "Celebração da Palavra" não é missa: os horários marcados assim saíram
  (São Benedito e São Pedro, em Martinópolis; São Padre Pio, do Santuário do
  Carmo; São Brás, da Desatadora dos Nós).
- Missas de dia do mês (todo dia 11, 16, 19, 28) foram para `nao_cabe`
  (Lourdes, São José, São Judas Tadeu e N. S. do Perpétuo Socorro, em
  Presidente Prudente; Capela São Judas Tadeu, em Emilianópolis).
- Paróquia São José de Álvares Machado: "na primeira sexta-feira do mês, as
  missas ocorrem somente às 8h e 20h". Entrou sexta 7h nas semanas 2 a 5,
  e 8h e 20h na semana 1.
- Quando a nota e a tabela não batem no dia da semana, o horário ficou fora
  e as duas versões foram para `nao_cabe`: Capelas Sagrado Coração de Jesus e
  Imaculado Coração de Maria e Santa Zita (Santa Rita de Cássia, Presidente
  Prudente), N. S. Aparecida da Agrovila 3 e São João Batista da Agrovila 4
  (Caiuá), N. S. Desatadora dos Nós (Santuário do Carmo), Igreja N. S. da
  Esperança (Pirapozinho), Santo Antônio de Sete Copas (Indiana). Duas
  divergências se resolveram pelo texto da própria nota: N. S. do Sagrado
  Coração de Jesus (Indiana, "terceiro sábado", tabela no sábado) e São Luiz
  Gonzaga (São Pedro de Presidente Epitácio, "segundo e quarto domingo",
  tabela no domingo).

## Capelas que ficaram fora (repetidas na lista da diocese)

- Paróquia N. S. Aparecida do Parque dos Pinheiros: a Capela São Miguel
  Arcanjo (hoje matriz da Paróquia São Miguel Arcanjo) e a Capela Sagrado
  Coração de Jesus e Imaculado Coração de Maria (Jardim Novo Bongiovani), que
  aparece também, com o mesmo endereço, na nova paróquia. Ficou só na nova.
- Paróquia Santa Terezinha (Marabá Paulista): três entradas antigas com
  horário diferente das novas no mesmo lugar ("Capela do bairro Paraíso",
  "Capela Santa Carmem" e "Capela Santa Maria"). Ficaram as novas: Capela São
  Sebastião (Bairro Paraíso), Capela N. S. do Carmo (Assentamento Santa
  Carmem) e Capela N. S. de Fátima (Assentamento Santa Maria). A "Capela da
  Fazenda Santa Carmem" ficou, por ter nome próprio.
- Paróquia N. S. do Perpétuo Socorro (Teodoro Sampaio): duas "Capela Sagrado
  Coração de Jesus" sem lugar nem horário; entrou uma.
- Paróquia Santo Antônio de Pádua (Sandovalina): a Capela São Sebastião de
  Estrela do Norte, que virou paróquia.

## Contatos

- Telefone, WhatsApp e e-mail vêm da página de cada paróquia. Todos os
  e-mails são da secretaria, no domínio da diocese
  (`<paroquia>@diocesepresidenteprudente.com.br`). Número marcado
  "(WhatsApp)" foi para `whatsapp`; quando a paróquia só publica um fixo com
  WhatsApp, ele está nos dois campos. Celular sem a marca ficou em
  `telefone` (Caiabu, Estrela do Norte). Nenhum número foi convertido.
- A Paróquia Santa Luzia de Araxans publica o telefone e o e-mail da paróquia
  de Emilianópolis.
- Instagram: só os perfis que a própria página da paróquia linka, sem abrir
  nenhum por dentro. 45 unidades têm perfil.

## Endereços

- O endereço da matriz é o da página da paróquia. Onde a tabela de horários
  traz outro número, seguimos a página (ex.: Perpétuo Socorro de Teodoro
  Sampaio, 1297 na página e 1184 na tabela).
- O das capelas é o da tabela de horários; muitas são rurais (assentamentos,
  sítios, quilômetros de rodovia) e só têm o lugar, que foi para
  `localidade`. Distritos ficaram com a cidade do município: Montalvão,
  Ameliópolis, Eneida e Floresta do Sul (Presidente Prudente), Primavera
  (Rosana), Araxans e Nova Pátria (Presidente Bernardes), Costa Machado
  (Mirante do Paranapanema), Espigão (Regente Feijó), Teçaindá e Vila Escócia
  (Martinópolis), Iubatinga e Esperança do Oeste (Caiabu), Itororó do
  Paranapanema (Pirapozinho), Planalto do Sul (Teodoro Sampaio). Cuiabá
  Paulista entrou em Marabá Paulista, como a diocese publica.
- Capelas fora do município da matriz: Capela Bom Jesus (Santo Anastácio) em
  Ribeirão dos Índios; capelas de Sandovalina em Itororó do Paranapanema
  (Pirapozinho) e no Assentamento King Meat (Mirante do Paranapanema); Capela
  N. S. Aparecida do Assentamento Primavera, da paróquia Santo Antônio de
  Lisboa (Presidente Venceslau); Capela Santo Expedito do Terceiro Milênio,
  da paróquia do Parque dos Pinheiros, em Presidente Prudente.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/pres0.htm e
  https://gcatholic.org/churches/local/pres0 (anuário, 09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Confissão e adoração: nenhuma fonte da diocese publica.
- Horário das 72 capelas sem horário: 59 com "consultar a secretaria"
  (Santo Anastácio, Teodoro Sampaio, Presidente Venceslau, Montalvão,
  Álvares Machado e outras), 7 com nota e tabela em conflito, 5 com missa
  na "última semana do mês" e 1 só com missa no dia 28.
- Os 7 conflitos entre nota e tabela listados acima, e a hora das missas de
  terça e sexta de Araxans.
- Confirmar se a N. S. do Perpétuo Socorro de Teodoro Sampaio é paróquia ou
  quase-paróquia.
- Lugar das 11 capelas da N. S. do Perpétuo Socorro de Teodoro Sampaio.
