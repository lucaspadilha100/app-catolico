# Diocese de União da Vitória (PR): fontes da pesquisa de 13/11/2026

Sé em União da Vitória; sul e sudeste do Paraná, na divisa com Santa
Catarina. Sé vacante (o site fala em Administrador Diocesano; o GCatholic
marca "Bishop: vacant"). Padroeiro diocesano: Sagrado Coração de Jesus.
Mitra: (42) 3522-3595, mitra@dioceseunivitoria.org.br. Site:
https://www.dioceseunivitoria.org.br (WordPress; a API `wp-json` responde
403, as páginas abrem normalmente).

## Resumo

- **25 unidades** em `saida/uniao-da-vitoria.json`: 1 catedral e 24
  paróquias (uma com a matriz santuário: Paróquia e Santuário Diocesano Nossa
  Senhora do Rosário, em Rio Claro do Sul, Mallet), em 5 setores: Catedral
  (6), Sagrada Família (6), São Mateus (6), Bituruna (3) e Rio Azul (4).
  Cidades: União da Vitória (8), São Mateus do Sul (3), Cruz Machado (2),
  Mallet (2), Bituruna (2) e uma em Porto Vitória, Paula Freitas, São João do
  Triunfo, Antônio Olinto, General Carneiro, Rio Azul, Rebouças e Paulo
  Frontin.
- **24 com horário de missa**, todas com confiança média: cada paróquia tem
  página no site da diocese com expediente, telefone, e-mail, endereço e
  "Missas", mas sem data de atualização, e o clero de algumas já está
  desatualizado (notícias de novembro de 2026 dão novos administradores a
  Santa Bárbara e Santo Antônio, em Bituruna).
- Sem horário: Paróquia São Sebastião Mártir (União da Vitória), cuja página
  deixa "Missas" em branco.
- As páginas não listam capelas nem comunidades: todo item tem só a matriz.
- Nenhuma página cita Instagram ou Facebook da paróquia; os e-mails são todos
  do domínio da diocese (dois publicados com ".org" sem ".br": Sagrada Família
  de Nazaré e São Sebastião Mártir, mantidos como estão).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página https://www.dioceseunivitoria.org.br/paroquias/, por
setor, batida com as 25 páginas de paróquia (uma por link). Contagem da
diocese: 25 paróquias (o GCatholic dá 25 paróquias e 399 a 422 comunidades
nas estatísticas do anuário de 2013 a 2022).

Conferência contra o GCatholic (09/11/2026): as 25 paróquias latinas batem
uma a uma. O GCatholic lista ainda 6 paróquias greco-católicas ucranianas no
território (Antônio Olinto, Cruz Machado, Dorizon, Mallet, Paulo Frontin e
União da Vitória), que pertencem à Eparquia Imaculada Conceição de
Prudentópolis / Metropolia de São João Batista, não a esta diocese: ficaram
fora.

Nomes: a Catedral se chama "Catedral Sagrado Coração de Jesus e Nossa Senhora
Aparecida" na lista da diocese; a igreja entrou como "Catedral Sagrado Coração
de Jesus". Santo Antônio (Bituruna) tem sede no distrito de Santo Antônio do
Iratim, e Sant'Ana (Cruz Machado) na localidade de Santana. A legenda "Nova
Matriz em Construção" da lista é da Paróquia São Joaquim e Senhora Sant'Ana
(Paulo Frontin), anotada na observação.

## Leitura dos horários

- "Segunda a sábado: 7h e 19h" virou seis linhas de cada hora.
- Novena do Perpétuo Socorro com missa: anotada na observação do horário.
- Nossa Senhora do Rocio: "Quinta-feira: 18h30 adoração ao Santíssimo seguido
  de Missa às 19h" entrou como adoração 18h30 e missa 19h.
- Perpétuo Socorro (São Mateus do Sul): a terça às 19h aparece como "Terço dos
  Homens" na lista de missas; ficou no `nao_cabe`.

## Páginas lidas em 13/11/2026

- https://www.dioceseunivitoria.org.br/paroquias/ (lista por setor)
- Uma página por paróquia em https://www.dioceseunivitoria.org.br/paroquias/<nome>/
  (URLs no campo `fontes`).
- https://www.dioceseunivitoria.org.br/wp-content/uploads/2026/02/Agenda-Diocesana-2026-Digital.pdf
  (agenda; não traz horários de paróquia).
- Página inicial, para as notícias de posse de novembro de 2026.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/unia0.htm e
  https://gcatholic.org/churches/local/unia0 (09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Horários da Paróquia São Sebastião Mártir (nenhum perfil citado; telefone
  (42) 99812-6682).
- Capelas e comunidades: a diocese conta cerca de 400, e as páginas de
  paróquia não as listam.
- Confissões: nenhuma página publica.
- Reconferir os horários quando as páginas forem atualizadas com o clero de
  novembro de 2026.
