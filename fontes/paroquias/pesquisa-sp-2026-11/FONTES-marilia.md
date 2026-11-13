# Diocese de Marília (SP): fontes da pesquisa de 13/11/2026

Sé em Marília; centro-oeste paulista, da Alta Paulista à divisa com Mato
Grosso do Sul. Bispo: Dom Luiz Antônio Cipolini. Cúria: Av. Nelson
Spielmann, 521, Marília, (14) 3401-2360, curia@diocesedemarilia.org.br.
Centro Diocesano de Pastoral: Rua José Bonifácio, 380, (14) 3413-3124.

## Resumo

- **67 unidades pastorais** em `saida/marilia.json`: 1 catedral (Catedral
  Basílica de São Bento), 6 santuários-paróquia (N. Sra. da Glória e São
  Judas Tadeu em Marília, N. Sra. de Lourdes em Garça, Sagrado Coração de
  Jesus em Vera Cruz, São José em Osvaldo Cruz, N. Sra. de Fátima em
  Dracena) e 60 paróquias, em 3 Regiões Pastorais (I: 29, II: 21, III: 17)
  e 37 municípios. Marília tem 21 (20 na cidade e a de Avencas).
- **67 com horário de missa**: o site da diocese tem uma página por
  paróquia, com horários da matriz, secretaria, e-mail, telefone e as
  capelas. 52 com confiança alta (página editada em 2025 ou 2026) e 15
  média (página editada em 2024; os horários batem com o buscador de missas
  da diocese, de 19/06/2026, que foi montado das mesmas páginas e por isso
  não é uma confirmação independente).
- Confissão publicada só no Santuário N. Sra. da Glória (1ª sexta, 19h às
  19h45) e em Avencas (terça, 17h às 19h, e depois das missas). Adoração:
  Glória (1ª sexta 19h) e Hora Santa em São Francisco de Assis de
  Adamantina (1ª sexta 19h).
- **206 capelas e comunidades** com nome e lugar. O horário delas está em
  texto no `nao_cabe` ("Celebrações: ..."), como a página dá, sem virar
  horário estruturado. Exceção: a Igreja São Pio X, da Paróquia Santa
  Isabel (Marília), que a página põe junto das missas da matriz (domingo
  10h e 19h).
- Todo `id_banco` é null. Instagram só da Paróquia São Pedro Apóstolo de
  Tupã (`spedroapostolo`, do site da própria paróquia); as páginas da
  diocese não trazem redes sociais, e a busca na web não mostrou perfis.

## Lista das unidades

A lista vem das páginas das três Regiões Pastorais do site da diocese, com
uma página por paróquia (67 páginas filhas, lidas pela API do WordPress).

O cabeçalho do site diz "66 Paróquias", e a Região I diz "28 paróquias (19
na cidade de Marília)". A diferença é a **Paróquia São João Bosco e Nossa
Senhora Auxiliadora** (Marília), criada em 31/01/2026, que já tem página e
horários mas não entrou nas contagens. A Região I tem ainda a de Avencas
(distrito de Marília).

Conferência contra o GCatholic (atualizado em 09/11/2026, 68 igrejas): as
66 paróquias do GCatholic batem uma a uma com a lista da diocese. Fora da
lista: o Seminário Provincial Sagrado Coração de Jesus (Marília) e a igreja
Sagrado Coração de Jesus de Junqueirópolis, sem marca de paróquia (a
página da diocese a lista como capela da Paróquia Santo Antônio). A São
João Bosco e N. Sra. Auxiliadora ainda não está no GCatholic.

Nenhuma cidade desta diocese aparece nos outros arquivos de `saida/`. A
diocese registra que o distrito de Amadeu Amaral (comarca de Marília)
pertence canonicamente à Diocese de Assis.

Cidade de distritos: Avencas entrou com `cidade` Marília e localidade
"Distrito de Avencas"; Paulópolis com `cidade` Pompéia e localidade
"Distrito de Paulópolis" (a página diz "Paulópolis (Pompéia)-SP").

## Páginas do site da diocese (lidas em 13/11/2026)

O endereço `diocesedemarilia.org.br` não fecha a conexão segura; o site
responde em `diocesedemarilia.com.br`.

- https://diocesedemarilia.com.br/paroquias/ (números da diocese e o
  buscador "Horários de Missa", com os dados de cada paróquia embutidos na
  página; editada em 19/06/2026)
- https://diocesedemarilia.com.br/paroquias/regiao-i/ ,
  https://diocesedemarilia.com.br/paroquias/regiao-ii/ ,
  https://diocesedemarilia.com.br/paroquias/regiao-iii/ (a lista oficial
  por cidade, com o clero)
- https://diocesedemarilia.com.br/diocese/nossa-historia/informacoes-gerais/
  (37 municípios, 21 distritos, regiões pastorais)
- Uma página por paróquia; a URL e a data da última edição estão no campo
  `fontes` de cada item.

Quando a página da paróquia e o buscador divergem, o JSON segue a página
mais recente:

- N. Sra. Auxiliadora (Tupã): domingo 7h, 9h30 e 19h (página de 19/10/2026);
  o buscador dá 7h30, 9h e 19h.
- São José (Osvaldo Cruz): missa das 7h de terça a sábado (página de
  16/10/2026); o buscador acrescenta a segunda.
- Santa Cecília (Álvaro de Carvalho): o buscador põe terça 19h30 na matriz;
  a página diz que é a "missa nos setores", que ficou no `nao_cabe`.
- N. Sra. Aparecida (Nova Guataporanga): a página traz o 1º sábado às 9h,
  que o buscador não tem; quinta 19h30 exceto a 1ª quinta.

## Contatos

Telefone fixo em `telefone`; o celular entra em `whatsapp` quando a página
tem o link de WhatsApp, senão em `telefone`. Todos são da secretaria ou da
paróquia. Divergências anotadas no JSON:

- Senhor Bom Jesus (Arco-Íris): o celular escrito (14 99790-0886) e o do
  link de WhatsApp (14 99811-8424) não batem; WhatsApp ficou vazio.
- N. Sra. Auxiliadora (Avencas): sem secretaria; o telefone é o da
  coordenação do conselho pastoral, como a página publica.
- Paulópolis e Flora Rica são atendidas pelas secretarias de Quintana e de
  Irapuru; o e-mail é o dessas paróquias.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/mari4.htm e
  https://gcatholic.org/churches/local/mari4 (anuário, 09/11/2026)
- https://www.matrizsaopedro.org.br/ (site da Paróquia São Pedro Apóstolo de
  Tupã: Instagram e site)

## O que falta para o próximo estado desta pesquisa

- Horários de confissão: quase todas as páginas só dão o atendimento do
  padre, sem dizer que é confissão.
- Missas de dia fixo do mês (dia 22 em Santa Rita, dia 28 em São Judas
  Tadeu e Santa Antonieta, dia 25 em Frei Galvão de Dracena) e "última
  quinta" ficaram no `nao_cabe`: o formato não tem dia do mês.
- Instagram das paróquias: nenhuma página da diocese traz.
- Quatro paróquias sem missa de domingo publicada na matriz (Pracinha, Flora
  Rica, Santa Mercedes, e São João do Pau d'Alho, que só tem quarta e
  sábado): conferir com a secretaria.
- As 15 de confiança média, cuja página não é editada desde 2024.
