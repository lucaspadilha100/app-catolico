# Diocese de Januária (MG): fontes da pesquisa de 13/11/2026

Sé em Januária, extremo norte de Minas, margem do São Francisco; sufragânea
de Montes Claros. Bispo: Dom Dorival Souza Barreto Júnior (desde 18/06/2025).
Cúria: (38) 3621-1342, pascom@diocesedejanuaria.com.br. Site:
https://diocesedejanuaria.com.br (Instagram diocese.januaria, Facebook
diocesedejanuariamg).

## Resumo

- **21 unidades** em `saida/januaria.json`: 1 catedral, 19 paróquias e o
  Santuário Diocesano de Santo Antônio de Serra das Araras (Chapada Gaúcha),
  em 4 foranias: Nossa Senhora das Dores (6), Nossa Senhora Aparecida (5),
  São José (7, com o santuário) e Nossa Senhora da Conceição (3).
- **1 com horário**: o santuário (confiança média; página do site da diocese
  atualizada em 08/2025: quinta 19h missa com adoração, sábado 7h, domingo
  19h, e no último domingo do mês 9h).
- **20 sem horário** (confiança baixa), em `SEM-HORARIO-januaria.txt`.
- O site da diocese está desatualizado e **invadido**: a página
  "Paróquias" e outras trazem links de cassino injetados, e 615 dos 703 posts
  são propaganda. A página "Paróquias" (editada em 08/2025) traz só 8
  paróquias, de A a P (Catedral, Cristo Rei, Divino Espírito Santo,
  Imaculada Conceição de Pedras de Maria da Cruz, N. S. Aparecida de Manga,
  de Riachinho e de São Francisco, N. S. da Abadia), com forania, endereço,
  e-mail e telefones. As outras 12 paróquias entraram pelo GCatholic e pelas
  notícias do próprio site, sem contato.
- Nenhuma página da diocese cita perfil de Instagram de paróquia.
- Todo `id_banco` é null.

## Lista das unidades

A diocese diz (página "Quem somos", 12/2022) que tem 20 paróquias, uma
pró-paróquia e um santuário diocesano, em quatro setores (Centro, Norte,
Oeste e Sul), que hoje são as foranias N. S. das Dores, N. S. Aparecida,
São José e N. S. da Conceição (decreto de nomeações de 26/06/2024). Montei
as 20 paróquias assim:

- As 8 da página "Paróquias" (com a forania que ela dá).
- O GCatholic (https://gcatholic.org/churches/local/janu0, 09/11/2026, 21
  igrejas) completou Bonito de Minas, Itacarambi, São Joaquim, Miravânia,
  Juvenília, São João das Missões, Chapada Gaúcha, Icaraí de Minas,
  Urucuia, Santa Fé de Minas, Sagrada Família (Januária) e São José (São
  Francisco). Para essas a forania foi deduzida do setor de 2022 e a
  observação diz "Forania provável".
- Nome pela diocese quando a notícia diverge do GCatholic: Imaculada
  Conceição de Icaraí de Minas (GCatholic: N. S. da Conceição) e São João
  Batista de São João das Missões (GCatholic: Sagrado Coração de Jesus;
  pendência).
- São Francisco: o decreto de 26/06/2024 e uma notícia de 03/2023 falam em
  Paróquia Sagrada Família de Nazaré; o GCatholic e uma notícia de 09/2024
  falam em Paróquia São José. Em 2022 a diocese contava duas paróquias na
  cidade (N. S. Aparecida e mais uma). Entrou uma só, com o nome do decreto,
  e a dúvida na observação.
- Pintópolis: a página "Paróquias" a põe na Forania São José (em 2022 era
  do setor Sul). Ficou a da página.
- Fora do JSON (pendência): a **pró-paróquia** do setor Centro, provavelmente
  em Cônego Marinho (único município do setor sem paróquia conhecida); o site
  não diz o nome nem o padroeiro.
- Igreja Nossa Senhora do Rosário (Barro Alto, Brejo do Amparo, Januária):
  igreja histórica da Mitra, missas suspensas desde 09/2024 por risco
  estrutural (página do site). Não entrou.

## Páginas lidas (13/11/2026)

- https://diocesedejanuaria.com.br/paroquias/ (contatos de 8 paróquias)
- https://diocesedejanuaria.com.br/quem-somos/ (contagem e setores)
- https://diocesedejanuaria.com.br/santuario-de-santo-antonio/ (horários e
  telefone do santuário)
- https://diocesedejanuaria.com.br/paroquia-nossa-senhora-das-dores/ (só
  história)
- https://diocesedejanuaria.com.br/igreja-nossa-senhora-do-rosario/
- https://diocesedejanuaria.com.br/nomeacoes-e-transferencias/ (decreto de
  26/06/2024: foranias e paróquias)
- API do WordPress (`/wp-json/wp/v2/posts`, 82 notícias das categorias
  Diocese, Notícias, artigo e blog): nomes de paróquias citados.
- https://gcatholic.org/dioceses/diocese/janu0 e
  https://gcatholic.org/churches/local/janu0

## O que falta para o próximo estado desta pesquisa

- Horários das 20 paróquias: o site não publica. Próxima rodada: busca pelos
  perfis das paróquias e da Catedral (o site não cita nenhum).
- Contatos das 12 paróquias fora da página "Paróquias"; endereço da matriz
  de N. S. Aparecida de São Francisco (a página traz "-").
- Confirmar o titular de São João das Missões e se Sagrada Família de Nazaré
  e São José de São Francisco são a mesma paróquia.
- Nome e sede da pró-paróquia.
- Avisar a diocese de que o site foi invadido (links de cassino nas
  páginas), se o dono achar oportuno.
