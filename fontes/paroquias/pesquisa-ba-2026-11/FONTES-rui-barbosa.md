# Diocese de Ruy Barbosa (BA): fontes da pesquisa de 13/11/2026

Sé em Ruy Barbosa (grafia oficial do município); Chapada Diamantina e
Piemonte do Paraguaçu. Bispo: Dom Estevam dos Santos Silva Filho.
Padroeiro: Santo Antônio. Sufragânea de Feira de Santana.

## Resumo

- **25 unidades** em `saida/rui-barbosa.json`: 1 catedral (Santo Antônio,
  Ruy Barbosa), 22 paróquias, 1 quase-paróquia (Bom Pastor, povoado de Pau
  Ferro, Ipirá, criada em 25/04/2021) e 1 área pastoral (Santa Dulce dos
  Pobres, Itaberaba, criada em 17/04/2021), em 4 foranias: Santa Dulce dos
  Pobres (5), Santa Luzia (6), São Francisco (7) e Senhora Sant'Ana (7).
- **Nenhuma com horário**: as fichas de paróquia do site da diocese trazem
  endereço, telefone, e-mail, redes, forania e clero, sem missas. Busca no
  site (API) por "horário das missas" não achou nada. Todas com confiança
  baixa e em `SEM-HORARIO-rui-barbosa.txt`, com o Instagram e o Facebook
  que a ficha cita.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese
(https://diocesederuybarbosa.com.br/paroquias/, que redireciona para
/paroquias-app/), com uma ficha por unidade em
https://diocesederuybarbosa.com.br/paroquia/<nome>/ (as URLs estão no campo
`fontes`). As foranias vêm das fichas e das páginas de categoria
/category/paroquias/forania-*/.

Conferência contra o GCatholic (https://gcatholic.org/churches/local/ruyb0,
09/11/2026): as 23 paróquias do GCatholic estão todas no site da diocese.
O site tem a mais a quase-paróquia Bom Pastor e a área pastoral Santa Dulce
dos Pobres; o GCatholic dá 25 "paróquias" na estatística, o que fecha com
as 25 unidades. Ficaram fora, por não serem unidade pastoral: o Santuário
da Caridade (Povoado Alagoas), a Igreja da Casa da Caridade (Ruy Barbosa)
e o Mosteiro Cisterciense (Mundo Novo), que o GCatholic lista à parte.

A Paróquia N. S. Mãe do Divino Pastor fica no povoado de Jequitibá (Mundo
Novo), junto ao Mosteiro Cisterciense. A ficha HTML dela respondeu com erro
504 várias vezes; os dados vieram da mesma ficha pela API do site
(https://diocesederuybarbosa.com.br/wp-json/wp/v2/paroquia?slug=jequitiba-paroquia-n-sra-mae-do-divino-pastor-1981,
modificada em 27/09/2023). O site do mosteiro (abadiadejequitiba.org) não
respondeu.

## Contatos

- WhatsApp só quando a ficha dá o link wa.me; telefone fixo da secretaria
  quando a ficha dá ("Tel. fixo", "Funcionamento na Secretaria").
- E-mails decodificados da proteção do Cloudflare das fichas.
- A ficha da quase-paróquia Bom Pastor repete as redes da Paróquia Senhora
  Sant'Ana de Ipirá; não foram atribuídas a ela.
- A ficha de Bonito começa o endereço com "217,"; entrou "Rua Tancredo
  Neves, 141".
- O e-mail de Nova Redenção (paroquiasebatiaonr@gmail.com) entrou como
  publicado, embora pareça faltar um "s".

## O que falta para o próximo estado desta pesquisa

- Horários das 25 unidades: os Instagram citados pelas fichas estão no
  JSON (campo `instagram`) e no SEM-HORARIO; Ibiquera e Jequitibá não
  citam rede nenhuma.
- Capelas e comunidades: nenhuma ficha as lista.
