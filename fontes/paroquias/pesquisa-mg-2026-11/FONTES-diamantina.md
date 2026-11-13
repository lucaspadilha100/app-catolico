# Arquidiocese de Diamantina (MG): fontes da pesquisa de 13/11/2026

Sé metropolitana em Diamantina; Vale do Jequitinhonha, Serra do Espinhaço,
Curvelo e Pirapora. Arcebispo: Dom Darci José Nicioli. Cúria: Rua Jogo da
Bola, 173, Romana, Diamantina; pascom@arquidiamantina.org.br. Sufragâneas:
Almenara, Araçuaí, Guanhães e Teófilo Otoni. Site: https://arquidiamantina.org.br

## Resumo

- **58 unidades** em `saida/diamantina.json`: 1 catedral (Santo Antônio da
  Sé), 2 basílicas (Sagrado Coração de Jesus, em Diamantina, que é paróquia;
  São Geraldo, em Curvelo, dos Redentoristas), 53 paróquias, 1 quase-paróquia
  (N. S. de Fátima, distrito de Contrato, Itamarandiba, erigida em
  21/12/2025) e 1 santuário (Santa Luzia, Inimutaba). Seis foranias:
  Diamantina 13, Curvelo 13, Itamarandiba 9, Corinto 8, Pirapora 8, Serro 7.
- **52 com horário**, todas com confiança alta: o site da arquidiocese tem
  uma página por paróquia com telefone, e-mail, endereço, redes sociais,
  comunidades e uma tabela "Horários de Missas" (dia, horário e igreja),
  lida campo a campo (campos ACF do Elementor). 582 linhas de horário em
  334 igrejas; confissões da Basílica do Sagrado Coração, da Basílica de São
  Geraldo e de N. S. da Graça (Capelinha).
- **6 sem horário** (a página da paróquia não tem a tabela): N. S. da
  Conceição (Augusto de Lima), N. S. da Conceição (Buenópolis), Santuário de
  Santa Luzia (Inimutaba), São Sebastião (Senador Mourão), N. S. do Carmo
  (Lassance), N. S. das Dores (Presidente Kubitschek). Em
  `SEM-HORARIO-diamantina.txt`, com o Instagram que a página cita.
- **Capelas e comunidades**: cada linha de horário diz a igreja; a que não
  era a matriz virou capela ou comunidade (com o lugar quando a página dá).
  As comunidades da lista "Comunidades Paroquiais" de cada página entraram
  com nome e lugar, sem horário. A lista mistura formatos ("Santo X -
  Lugar", "Lugar - Padroeiro X", "Lugar (Santo X)"); o padroeiro e o lugar
  foram separados por regra, e pode haver uma ou outra comunidade repetida
  quando o horário cita só o lugar e a lista o santo.
- Linhas de horário que não cabem no formato ficaram no `nao_cabe`: "fim
  do mês", "dia 28", "última sexta-feira", "ª quarta-feira" (número
  faltando na página), celebração da Palavra, missa que reveza entre duas
  comunidades, e locais vagos ("comunidade rural", "ponto de celebração",
  "salão paroquial").
- Todo `id_banco` é null.

## Lista das unidades

Fonte: o tipo de conteúdo `paroquias` do site (API
`https://arquidiamantina.org.br/wp-json/wp/v2/paroquias`, 58 itens) e a
página de cada uma (URL no campo `fontes`). A forania vem da categoria da
página.

Conferência com o GCatholic (https://gcatholic.org/churches/local/diam0,
09/11/2026; estatística de 2022: 55 paróquias e 1 missão): as 55 paróquias
batem com o site. O site tem a mais a Basílica de São Geraldo (no GCatholic é
basílica sem paróquia; entrou como `basilica`), o Santuário de Santa Luzia
de Inimutaba (ligado à Paróquia Santo Antônio de Inimutaba; entrou como
`santuario`) e a quase-paróquia de Contrato (criada depois do anuário).
Santuários do GCatholic que não são unidade: N. S. da Abadia (Carbonita),
N. S. Aparecida (Diamantina, aparece como igreja da Paróquia Divino Pai
Eterno) e N. S. das Dores da Serra do Caroula (Serro; pendência: não há
horário dele na página da Paróquia do Serro).

Escolhas:

- Felixlândia (N. S. da Piedade) e Santo Antônio de Corinto: a matriz é
  santuário (GCatholic), primeira igreja de tipo `santuario`.
- São Judas Tadeu (Capelinha): a primeira igreja é o Santuário São Judas
  Tadeu (Jardim Aeroporto); a secretaria fica na Praça Piedade, na Igreja de
  N. S. da Piedade, que também tem missas.
- Divino Pai Eterno (Diamantina): os horários publicados são de duas igrejas
  da paróquia (Pão de Santo Antônio e Santuário N. S. Aparecida); nenhum na
  matriz.
- Distritos: Inhaí e São João da Chapada (Diamantina), São José da Lagoa
  (Curvelo), São Gonçalo do Rio das Pedras (Serro) e Contrato (Itamarandiba)
  ficaram com a cidade do município e o distrito em `localidade`.
- Telefones e e-mails da página (e-mails do Cloudflare decodificados);
  WhatsApp só do link wa.me da página.

## Páginas lidas (13/11/2026)

- https://arquidiamantina.org.br/wp-json/wp/v2/paroquias (lista) e
  https://arquidiamantina.org.br/wp-json/wp/v2/categories (foranias)
- As 58 páginas `https://arquidiamantina.org.br/paroquias/<nome>/`, por
  exemplo:
  - https://arquidiamantina.org.br/paroquias/santo-antonio-da-se-diamantina/
  - https://arquidiamantina.org.br/paroquias/senhor-bom-jesus-diamantina/
  - https://arquidiamantina.org.br/paroquias/basilica-de-sao-geraldo/
  - https://arquidiamantina.org.br/paroquias/pro-paroquia-n-sra-fatima/
- https://gcatholic.org/dioceses/diocese/diam0 e
  https://gcatholic.org/churches/local/diam0 (conferência)

## Instagram

Vieram dos links "Redes sociais" das páginas (sem abrir os perfis): 43 das 58
unidades têm perfil anotado no campo `instagram`.

## O que falta para o próximo estado desta pesquisa

- Horários das 6 unidades sem tabela (ver `SEM-HORARIO-diamantina.txt`).
- Confissões fora das 3 igrejas citadas: as páginas não trazem.
- Revisar à mão as comunidades das listas longas (Felixlândia, Santo Antônio
  do Itambé, Itamarandiba, Angelândia), onde o formato varia muito.
- Linhas no `nao_cabe` que dependem de calendário (fim do mês, dia 28).
