# Diocese de Janaúba (MG): fontes da pesquisa de 13/11/2026

Sé em Janaúba, norte de Minas, sufragânea de Montes Claros (criada em 2000
com território de Montes Claros). Catedral Sagrado Coração de Jesus, Praça
Maurício Augusto Azevedo, 66, Centro. Site: https://diocesedejanauba.com.br

## Resumo

- **33 unidades** em `saida/janauba.json`: 1 catedral, 25 paróquias e 7
  quase-paróquias, em 6 foranias (Sagrado Coração de Jesus 6, São Joaquim 5,
  Nossa Senhora da Conceição 8, São Sebastião 7, Bom Jesus 3, Nossa Senhora
  da Glória 4). O GCatholic dá 33 paróquias na estatística (31/12/2022).
- **1 com horário** (Catedral, confiança média): a única grade de missas que
  o site da diocese publica é a arte "Horário Santa Missa" da Pascom da
  Catedral, na página Missas, em imagem de 13/12/2021. Lida na imagem; vale
  conferir se ainda é a atual.
- **32 sem horário** (confiança baixa, `horarios: []`), em
  `SEM-HORARIO-janauba.txt`. O site não tem página por paróquia, não cita
  perfil de Instagram de nenhuma e as notícias (572 posts, lidos pela API)
  não trazem horário de missa.
- Contatos de todas vêm da página "Paróquias" do site (última edição em
  21/12/2021): endereço da matriz, telefone e e-mail da secretaria, número de
  comunidades. Telefones como publicados; os de 8 dígitos sem o 9 (Indaiabira,
  Montezuma, Santo Antônio do Retiro, Ibiracatu) ficaram assim, sem conversão.
- Capelas e comunidades: a lista só dá a contagem de comunidades de cada
  paróquia (de 6 a 101), sem nomes; nenhuma entrou.
- Todo `id_banco` é null.

## Lista das unidades

Fonte da lista: https://diocesedejanauba.com.br/paroquias/ (33 blocos) e
https://diocesedejanauba.com.br/foranias/ (as 6 foranias com as paróquias de
cada uma). As duas páginas batem nos nomes, com estas diferenças, resolvidas
assim:

- Santa Cruz e Nossa Senhora das Dores (Janaúba): a página das foranias diz só
  "Paróquia Nossa Senhora das Dores". Ficou o nome da lista de paróquias.
- Nossa Senhora das Graças (São João do Paraíso): "Paróquia" na lista,
  "Quase Paróquia" nas foranias; o GCatholic também não a marca como
  paróquia. Entrou como quase-paróquia.
- Bom Jesus (Catuti): "Quase Paróquia" nas foranias, mas a lista de
  paróquias diz "Paróquia Bom Jesus, criada em 16 de outubro de 2021" e o
  GCatholic a marca como paróquia. Entrou como paróquia.

Conferência com o GCatholic (https://gcatholic.org/churches/local/jana0,
atualizado em 09/11/2026, 32 igrejas):

- Da diocese e ausentes no GCatholic: Santa Cruz e N. S. das Dores
  (Janaúba), Sagrada Família (Jaíba), São Geraldo (Varzelândia) e Senhora
  Sant'Ana (Verdelândia).
- No GCatholic e fora da lista da diocese: São Francisco de Assis em Matias
  Cardoso, marcada como paróquia (pendência: a diocese lista em Matias
  Cardoso só N. S. da Conceição); N. S. Aparecida em Mato Verde e Santa Maria
  Madalena em Rio Pardo de Minas, sem marca de paróquia (tratadas como igrejas,
  sem paróquia indicada; não entraram).

## Páginas lidas (13/11/2026)

- https://diocesedejanauba.com.br/paroquias/ (contatos de todas)
- https://diocesedejanauba.com.br/foranias/ (foranias)
- https://diocesedejanauba.com.br/missas/ e a imagem
  https://diocesedejanauba.com.br/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-13-at-15.03.27.jpeg
  (horário da Catedral: terça 7h; quarta a sexta 7h e 19h; sábado 7h;
  domingo 7h, 9h30, 17h e 19h)
- API do WordPress do site (`/wp-json/wp/v2/pages` e `/posts`, 572 notícias):
  nenhuma notícia com grade de horário de missa.
- https://gcatholic.org/dioceses/diocese/jana0 e
  https://gcatholic.org/churches/local/jana0 (conferência da lista)

## O que falta para o próximo estado desta pesquisa

- Horários das 32 paróquias sem horário: o site não os publica. Próxima
  rodada: busca na web pelos perfis das paróquias (o site não cita nenhum;
  a diocese tem Instagram e https://www.facebook.com/Diocesedejanaubamg/).
- Confirmar se a grade da Catedral (2021) ainda vale.
- Endereço da matriz em Serranópolis de Minas, Santo Antônio do Retiro e
  São Geraldo (Varzelândia); telefone de São Geraldo.
- A lista de contatos é de 12/2021: párocos e telefones podem ter mudado.
- Paróquia São Francisco de Assis de Matias Cardoso (GCatholic): confirmar se
  existe.
