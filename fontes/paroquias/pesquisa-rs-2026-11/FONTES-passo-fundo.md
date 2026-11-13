# Arquidiocese de Passo Fundo (RS): fontes da pesquisa de 13/11/2026

Sé metropolitana em Passo Fundo; norte do Rio Grande do Sul (planalto médio,
Alto Uruguai e a serra de Guaporé). Sufragâneas: Erexim, Frederico Westphalen
e Vacaria. Cúria Metropolitana: Rua Coronel Chicuta, 436, 4º andar, sala 401,
Edifício Nossa Senhora Aparecida, Centro, Passo Fundo, (54) 3045-9240.
Centro de Pastoral: mesma sede, sala 410, (54) 3045-9204. Padroeira:
Nossa Senhora Aparecida.

## Resumo

- **54 unidades** em `saida/passo-fundo.json`: 1 catedral (Catedral
  Metropolitana Nossa Senhora Aparecida), 1 santuário (Santuário Nossa Senhora
  Aparecida, junto ao seminário, na RST 153) e 52 paróquias, em 9 áreas
  pastorais: Passo Fundo (13), Carazinho (4), Casca (5), David Canabarro (4),
  Guaporé (6), Marau (6), Sarandi (6), Tapejara (4) e Tapera (6). A área vai
  no início da `observacao` de cada item.
- **49 com horário de missa**: 38 com confiança alta (dois ou mais horários,
  com domingo) e 11 média (um horário só, ou sem missa de domingo na página).
  **5 sem horário** (confiança baixa): Santo Antônio do Palma, Sagrada
  Família (David Canabarro), São Valentim (São Valentim do Sul), Santo Antão
  (Pontão) e N. S. do Rosário (Charrua). Lista em `SEM-HORARIO-passo-fundo.txt`.
- Confissão só na Catedral (quarta-feira a partir das 9h, "atendimento,
  confissão e aconselhamento"). Adoração: Sagrado Coração de Jesus (Passo
  Fundo) e N. S. de Fátima (Carazinho), ambas na 1ª sexta-feira.
- Capelas: o site só dá o NÚMERO de comunidades de cada paróquia (entrou na
  observação), sem nomes nem lugares; nenhuma capela entrou.
- Todo `id_banco` é null.

## Lista das unidades

O site da arquidiocese (plugin "wp-parresia-register") tem a lista
`/paroquias/` em 6 páginas de 9 (54 cartões) e um filtro por região
(`?region=1` a `9`); a soma das 9 regiões dá as mesmas 54. Cada cartão leva a
uma página `/paroquia/<slug>` com fundação, telefone, endereço, e-mail,
clero, secretaria, número de comunidades e a tabela "Horários de Missas". Os
horários vêm estruturados no atributo `data-item` de cada linha (dias da
semana, horas, recorrência semanal ou mensal, descrição), lido direto do HTML.

Conferência contra o GCatholic (atualizado em 09/11/2026: 53 paróquias e o
Santuário N. S. Aparecida, 54 igrejas): bate um a um. Os nomes de lugar do
GCatholic "Evangelista", "Pulador" e "União da Serra" correspondem às
paróquias Santo Antônio de Evangelista (endereço em Casca), N. S. do Rosário
de Pulador e Santo Antônio de Vila Oeste (ambas dadas pelo site como "União
da Serra"; a de Pulador traz o CEP de Guaporé). As duas dividem o e-mail
psaoeste@. A localidade dessas duas deve ser conferida.

## Como os horários foram lidos

- Linhas de recorrência semanal viraram horários comuns; as mensais com
  "1ª sexta-feira", "2ª quarta", "1º e 3º sábados", "4º fim de semana"
  viraram `semanas`. "Todo dia 13/19/3/12" e "última sexta-feira" foram para
  `nao_cabe`.
- Cristo Rei (Marau): a linha estruturada só traz segunda a quinta 19h; a
  descrição da mesma linha dá a grade inteira (sexta 16h, sábado 18h,
  domingo 8h e 19h), que foi a usada.
- São José (Montauri): um bloco chamado "Teste" (segunda e quarta 19h30) ficou
  de fora.
- Catedral: "Missa da Saúde" às 16h sem dia da semana marcado (em `nao_cabe`).
- N. S. da Saúde (Vila Maria): o bloco mensal "Batizados" não entrou.

## Contatos: cuidado com os telefones do site

O formulário do site acrescenta um 9 na frente de todo número de 8 dígitos:
a Catedral aparece como (54) 3045-9210 no cabeçalho e "(54) 9 3045-9210" na
secretaria; o mesmo em Glória, Tapera, Rondinha, Sarandi e outras. Por isso:

- `telefone` = o fixo do cabeçalho quando ele vem inteiro; senão o fixo da
  secretaria sem o 9 da máscara ("(54) 9 3311-5899" virou 5433115899).
- `whatsapp` = o celular (9 9xxxx ou 9 8xxxx) listado na secretaria.
- Cabeçalhos com número truncado (ex.: "(54) 9619-9321" em Charrua,
  "(54) 9621-3206" em Barra Funda, "(54) 9968-2308" em Gentil) ficaram de fora.
- Cristo Rei (Marau): o fixo do cabeçalho (3332-1361) é o mesmo de Cristo Rei
  (Não-Me-Toque) e o da secretaria é o da Catedral; ficou só o celular.
- N. S. dos Navegantes (Ronda Alta): a secretaria repete o celular e o e-mail
  de Nova Boa Vista; ficaram o fixo e o e-mail do cabeçalho.
- E-mails institucionais do domínio arquidiocesedepassofundo.com.br. Dois
  erros de digitação corrigidos: N. S. da Conceição (cabeçalho
  "matrizconceiceicao", a secretaria traz "matrizconceicao") e São Cristóvão
  ("arquidiocesedepasspfundo").
- Instagram: só São Cristóvão (saocristovaopf) tem perfil próprio na página.
  Nenhuma outra página cita perfil da paróquia (só os da arquidiocese,
  arquipassofundo e arquidiocesepassofundo).

## Páginas lidas (13/11/2026)

- https://arquidiocesedepassofundo.com.br/paroquias/ (e `/page/2/` a `/page/6/`)
- https://arquidiocesedepassofundo.com.br/paroquias/?region=1 a 9 (áreas)
- As 54 páginas `https://arquidiocesedepassofundo.com.br/paroquia/<slug>`,
  citadas no campo `fontes` de cada item.

## Conferência da lista (não usada para horário)

- https://gcatholic.org/dioceses/diocese/pass2.htm
- https://gcatholic.org/churches/local/pass2

## O que falta para o próximo estado

- Horário das 5 paróquias sem missa na página (lista no SEM-HORARIO); as
  páginas não citam perfil de Instagram dessas paróquias.
- Missa de domingo das paróquias cuja página só dá sábado (Pulador, São José
  de Ernestina).
- Nomes e lugares das comunidades (o site só dá a contagem).
- Confissão fora da Catedral.
- Endereço das matrizes de Pulador, Vila Oeste, Montauri e Charrua.
