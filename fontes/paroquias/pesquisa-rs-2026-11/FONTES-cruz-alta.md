# Diocese de Cruz Alta (RS): fontes da pesquisa de 13/11/2026

Sé em Cruz Alta; planalto médio e alto Jacuí. Sufragânea de Santa Maria.
Bispo: Dom Nélio Domingos Zortea. Padroeiro: Divino Espírito Santo.

## Resumo

- **31 unidades** em `saida/cruz-alta.json`: 1 catedral (Divino Espírito
  Santo) e 30 paróquias, nas 5 regiões do site: Cruz Alta (6), Espumoso (6),
  Ijuí (7), Panambi (5), Soledade (6), mais Lagoão (sem região).
- **20 com horário de missa** (12 alta, 8 média: só sábado, sem domingo na
  página, ou com ambiguidade). **11 sem horário** (baixa): Imaculada
  Conceição (Cruz Alta), N. S. Aparecida (Boa Vista do Incra), N. S. de
  Lourdes (Ibirubá), N. S. dos Navegantes (Salto do Jacuí), N. S. da
  Natividade e Sagrado Coração de Jesus (Ijuí), São José (Augusto Pestana),
  N. S. da Soledade (Soledade), N. S. dos Navegantes (Mormaço), Sagrado
  Coração de Jesus (Saldanha Marinho) e São João Batista (Lagoão). Lista em
  `SEM-HORARIO-cruz-alta.txt`.
- Confissão e adoração: só São Jorge (Espumoso), 1ª sexta-feira às 17h.
- Igrejas além das matrizes: Comunidade Menino Deus (Jacuizinho, ligada a
  Tunas, sábado 17h) e a igreja N. S. de Fátima de Panambi (missão da
  paróquia São João Batista segundo o GCatholic).
- Todo `id_banco` é null.

## Lista das unidades

O site (tema "minhaparoquia") tem uma página por região em
`/locais_category/regiao-de-<nome>` e uma página por paróquia em
`/locais/<slug>`, com endereço, telefone, e-mail (mdcaNNNN@diocesecruzalta.com.br),
pároco, secretária e as abas "Missas" e "Atendimento". As páginas são de
2019 (data das fotos) e não trazem data de atualização; a da Catedral e
algumas outras citam clero atual.

Conferência contra o GCatholic (09/11/2026; 31 paróquias em 2022, 32 igrejas
e o Monumento de N. S. de Fátima): as 30 paróquias do site batem. O GCatholic
tem mais duas: São João Batista de **Lagoão** (marcada como paróquia; entrou
com confiança baixa, sem contato, porque não aparece no site da diocese) e
N. S. de Fátima de Panambi (marcada como igreja, missão de São João Batista;
entrou como capela desta).

Fora da lista: a "Capelania Militar" (Rua General Osório, 1050, Cruz Alta,
(55) 3322-6566), que o site põe no menu de paróquias, é do Ordinariado
Militar, não da diocese.

## Acesso ao site

O site diocesecruzalta.com.br responde de forma intermitente com uma página
de verificação anti-robô ("One moment, please... Please wait while your
request is being verified"). Não houve tentativa de contornar: as páginas
foram pedidas de novo com pausas de 15 a 20 segundos até virem normais.
Todas as 31 páginas de região e de paróquia acabaram lidas. A busca da API
do WordPress (`/wp-json/wp/v2/posts?search=`) ignora o termo e não ajudou.

## Como os horários foram lidos

- Catedral: terça 18h; quarta 15h com bênção da saúde; quinta, sexta e
  sábado 18h; domingo 8h, 10h e 18h.
- Condor: "1º, 2º e 3º sábado às 19h" virou `semanas [1,2,3]`; "último
  domingo às 9h" foi para `nao_cabe`.
- São João Batista (Panambi): "Todos as sextas-feiras: 15h / Missa da Saúde,
  todos os domingos às 8h30min, e na 1ª terça-feira do mês missa com Bênção
  dos pães às 19h30min": sexta 15h, domingo 8h30 e 1ª terça 19h30; a quem
  se refere "Missa da Saúde" ficou em `nao_cabe` (confiança média).
- São José do Herval: "quarta 16h celebração com bênção da saúde" não é
  necessariamente missa: `nao_cabe`.
- Fátima (Cruz Alta): "todo dia 13 às 19h" em `nao_cabe`.

## Contatos

- Telefone e e-mail como na página. Um erro corrigido: São Marcos (Alto
  Alegre) traz "mdca0007@diocesecruzalta.co.br"; ficou ".com.br", como todos
  os outros. Soledade e Santa Bárbara do Sul não têm e-mail na página.
- Segundo número publicado no formato "3332 1568/6604" foi para a observação.
- Instagram: nenhuma página cita perfil da paróquia (só o da diocese,
  diocese_de_cruzalta).

## Páginas lidas (13/11/2026)

- https://diocesecruzalta.com.br/locais_category/regiao-de-cruz-alta (e
  regiao-de-espumoso, regiao-de-ijui, regiao-de-panambi, regiao-de-soledade)
- As 30 páginas `https://diocesecruzalta.com.br/locais/<slug>` (URLs no
  campo `fontes`)

## Conferência da lista (não usada para horário)

- https://gcatholic.org/dioceses/diocese/cruz0.htm
- https://gcatholic.org/churches/local/cruz0
- https://gcatholic.org/churches/brazil/104399.htm (Lagoão)
- https://gcatholic.org/churches/brazil/43943.htm e 43944.htm (Panambi)

## Pendências

- Confirmar com a diocese se Lagoão é paróquia ativa e quem a atende.
- Horário das 11 unidades sem missa na página e missa de domingo das que só
  dão sábado (Fortaleza dos Valos, Campos Borges, Santa Bárbara do Sul,
  Cristo Rei de Ijuí, Jóia).
- Monumento/Santuário de N. S. de Fátima (Cruz Alta, no GCatholic como
  santuário): a fonte não diz a qual paróquia pertence.
- Endereço da matriz do Sagrado Coração de Jesus (Ijuí, só caixa postal).
- Nomes e lugares das capelas (o site não lista).
