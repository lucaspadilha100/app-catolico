# Diocese de Caratinga (MG): fontes da pesquisa de 13/11/2026

Sé em Caratinga (Catedral de São João Batista). Província Eclesiástica de
Mariana. Bispo: Dom Juarez Delorto Secco. Cúria: Praça Cesário Alvim, 156,
Centro, Caratinga, (33) 3321-4600. Site: https://diocesecaratinga.org.br.
O site diz: 9 foranias, 61 paróquias, 54 cidades.

## Resumo

- **61 unidades** em `saida/caratinga.json`: 1 catedral e 60 paróquias, nas
  9 foranias (Caratinga, Inhapim, Ipanema, Iapu, Santa Margarida, Manhuaçu,
  Carangola, Manhumirim, Bom Jesus do Galho). Cidades com mais de uma:
  Caratinga (8, contando o distrito de Santo Antônio do Manhuaçu), Manhuaçu
  (5, contando os distritos de Vilanova e São Sebastião do Sacramento) e
  Carangola (2).
- **Nenhuma com horário**: as 61 entraram com `"horarios": []` e confiança
  baixa. O site da diocese não tem quadro de horários de missa nas páginas
  de paróquia (só Padroeiro, História e Comunidades); nenhuma página cita
  Instagram, e só uma cita site próprio (pnsacarangola.com.br, que não
  resolve em 13/11/2026).
- Contatos (telefone, WhatsApp, e-mail) e endereço da matriz vêm das páginas
  da diocese. Telefones e WhatsApp como publicados, inclusive os de 8
  dígitos depois do DDD. O e-mail da Paróquia do Bom Pastor está publicado
  com erro de digitação ("yhaoo") e foi mantido como está.
- Matrizes santuário: Coração Eucarístico de Jesus (Caratinga) e Senhor Bom
  Jesus (Bom Jesus do Galho, "Santuário do Senhor Bom Jesus (Igreja Matriz)"
  na lista de comunidades).

## Lista das unidades

Fonte da lista: https://diocesecaratinga.org.br/foranias-e-paroquias/
(paróquias agrupadas por forania) e uma página por paróquia em
`https://diocesecaratinga.org.br/paroquia/<nome>/` (61 páginas, todas lidas
em 13/11/2026; as URLs estão no campo `fontes`).

Conferência contra o GCatholic (https://gcatholic.org/churches/local/cara4,
atualizado em 09/11/2026, 60 igrejas, 53 com marca de paróquia ou catedral):

- Estão na diocese e não no GCatholic: Santo Antônio de Pádua (Caratinga,
  bairro Santo Antônio), São José (Manhuaçu, Bela Vista), Santo Antônio de
  Pádua (Caparaó), São João Batista (Reduto), Santa Bárbara (Fervedouro),
  São Sebastião (Bugre), N. S. da Saúde (Alvarenga) e N. S. da Piedade
  (Piedade de Caratinga). Seguimos a diocese.
- Está no GCatholic e não na diocese: N. S. da Imaculada Conceição de Dom
  Lara (distrito de Caratinga). Na página da Paróquia Santo Antônio de Pádua
  de Caratinga, Dom Lara aparece como comunidade; não entrou como unidade.
- O GCatholic marca o Coração Eucarístico de Jesus só como santuário; a
  diocese o lista como paróquia.
- **Alvarenga**: o município passou da Diocese de Governador Valadares para
  a de Caratinga em 2 de setembro de 2026 (notícia de 10/09/2026:
  https://diocesecaratinga.org.br/noticia/dom-airton-executa-decreto-que-altera-os-limites-entre-as-dioceses-de-governador-valadares-e-caratinga/).
  A paróquia está "ad experimentum" e sem telefone na página. A pesquisa de
  Governador Valadares não deve repetir Alvarenga.
- **Bugre**: o endereço da página diz "quase-paróquia", mas o título e a
  lista dizem "Paróquia São Sebastião do Bugre"; entrou como paróquia.

## Comunidades

54 páginas trazem a lista de comunidades (às vezes mais de 30 por paróquia,
quase todas rurais, em formatos variados: "Córrego X - Padroeiro",
"Padroeiro (Lugar)", por setor). Sem horário, não entraram no JSON; ficam
como pendência para quando houver horários.

## O que falta para o próximo estado desta pesquisa

- Horários das 61 paróquias: a diocese não publica. Nenhuma página cita
  perfil de rede social, então a rodada de busca terá de achar o perfil pelo
  nome da paróquia e da cidade (lista em `SEM-HORARIO-caratinga.txt`).
- Telefone da Paróquia N. S. da Saúde (Alvarenga) e de Santa Bárbara do
  Leste (só e-mail).
- Endereço da matriz de Vilanova (a página dá Rua Mons. Rocha, 137, Realeza).
