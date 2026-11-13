# Diocese de Alagoinhas (BA): fontes da pesquisa de 13/11/2026

Sé em Alagoinhas; Agreste e Litoral Norte da Bahia. Criada em 28/10/1974.
Bispo: Dom Francisco de Oliveira Vidal. Cúria: Rua Manoel Vitorino, 368,
Teresópolis, Alagoinhas, (75) 3422-3209 / 9 9716-2224,
curia@diocesedealagoinhas.com. Padroeiro diocesano: Santo Antônio.

## Resumo

- **43 unidades** em `saida/alagoinhas.json`: 1 catedral e 42 paróquias, em 6
  vicariatos (da Esperança, do Discipulado, Mariano, do Litoral, Sagrada
  Família, Sertão da Missão). 25 municípios; Alagoinhas tem 9 unidades.
- **26 com horário** (todas `media`) e **17 sem horário** (baixa), listadas em
  `SEM-HORARIO-alagoinhas.txt`.
- Os horários vêm da página de cada paróquia no site da diocese, em tabela
  (tipo, dia, hora, observação). As páginas foram atualizadas entre outubro e
  dezembro de 2024 (duas em julho de 2025, uma em outubro de 2025): por isso
  `media`. Várias só trazem o domingo, ou só alguns dias.
- **Catedral:** a página da paróquia (2024) dá missa de segunda a sexta às
  12h; a página "Horários de Missa na Catedral" dá terça 7h e quinta 12h. Só o
  domingo (7h30 e 18h30, igual nas duas e confirmado por notícia de março de
  2026) entrou; a divergência está no `nao_cabe`.
- Duas paróquias têm a matriz como santuário (São Francisco de Assis,
  Alagoinhas, elevada em 04/10/2025; N. S. do Monte, Vila do Conde): entraram
  como `paroquia` com a primeira igreja de tipo `santuario`.
- Capelas: só as comunidades das duas paróquias de Jandaíra (das notícias de
  criação) e a Igreja de São Cassiano em Pojuca. As páginas não listam
  comunidades.
- Todo `id_banco` é null.

## Lista das unidades

O site tem um cadastro de paróquias (API WordPress, tipo `paroquias`, 33
páginas), com o vicariato de cada uma (categoria da página). Fora dele, as
notícias da diocese e o GCatholic dão mais 10:

- Criadas depois do cadastro: São Miguel Arcanjo (Alagoinhas, 29/09/2025),
  São José do Buril (Crisópolis, anunciada para 28/08/2025), Santo Antônio
  (Jandaíra, decreto de outubro de 2026, posse em 17/12/2026) e N. S. da Abadia
  (distrito de Abadia, Jandaíra, restabelecida por decreto de outubro de 2026,
  posse em 28/11/2026). O GCatholic ainda tem uma só paróquia em Jandaíra
  ("N. S. da Abadia e Santo Antônio"); entraram as duas do decreto.
- Antigas sem página no site, pelo GCatholic: N. S. da Divina Pastora (Cardeal
  da Silva), N. S. dos Prazeres (Entre Rios), N. S. da Piedade (Esplanada),
  Bom Jesus (Crisópolis), São Francisco de Assis do Litoral (Praia do Forte,
  Mata de São João). As três primeiras estão no Vicariato Mariano segundo a
  notícia da assembleia de 15/02/2025.
- N. S. Rainha da Paz (Baixa Grande, Inhambupe): citada só numa notícia de
  2023; não está no GCatholic nem no cadastro do site. Entrou `baixa`, a
  confirmar.

Contagem: a página da Cúria (2023) diz "38 paróquias"; a notícia de
23/02/2025 chama N. S. da Guia de "41ª paróquia"; depois vieram Buril, São
Miguel e Santo Antônio de Jandaíra, o que daria 44. A lista tem 43. Falta uma
paróquia antiga que nenhuma fonte lida nomeia (pendência para a busca).

Conferência com o GCatholic (09/11/2026, 38 igrejas): todas as paróquias dele
estão na lista. O GCatholic registra a paróquia de Pojuca duas vezes (São
Cassiano e Bom Jesus da Passagem), tem o Santuário da Divina Misericórdia
(Crisópolis), o mosteiro de N. S. do Rosário de Pompéia (Esplanada) e uma
igreja de Santo Antônio em Alagoinhas, que não são unidade. Não tem Raso,
Rainha da Paz, Santa Dulce, N. S. da Guia, Mimoso, São Miguel nem Buril.

## Páginas do site (lidas em 13/11/2026)

- https://diocesedealagoinhas.com/wp-json/wp/v2/paroquias?per_page=100 (cadastro)
- https://diocesedealagoinhas.com/paroquias/<slug>/ (uma por paróquia; URL e
  mês de atualização no campo `fontes`)
- https://diocesedealagoinhas.com/horarios-de-missa-na-catedral/
- https://diocesedealagoinhas.com/curia-diocesana/ e /organizacao-administrativa/
- Notícias: criação de Santa Dulce e da área pastoral N. S. da Guia (2023),
  Mimoso (20/01/2025), área pastoral São Miguel (15/02/2025), assembleia nos
  vicariatos (15/02/2025), N. S. da Guia paróquia (23/02/2025), novas paróquias
  e santuário (14/08/2025), São Miguel instalada (30/09/2025), santuário São
  Francisco (05/10/2025), nomeações (19/03/2026), Jandaíra (15/10/2026).

Atenção: o site está comprometido: há páginas de cassino e apostas em várias línguas
publicadas na API (maio de 2026) e textos de propaganda enxertados em páginas
e notícias. Os dados de paróquia usados não mostram sinal de adulteração, mas
a data de modificação da página da Catedral (27/02/2026) pode ser da invasão.

## Dados que ficaram de fora ou merecem conferência

- Raso (N. S. das Graças, Vicariato Sertão da Missão): a página não diz o
  município; o campo `cidade` ficou vazio de propósito.
- E-mails malformados não entraram: Santa Dulce
  ("@paroquianajobom.alagoinhas@gmail.com") e Itamira
  ("paroquiajose@gmail.com.br").
- Pojuca: a missa de domingo 7h é na Igreja de São Cassiano (lugar não dito).
- O vicariato de Praia do Forte, Crisópolis (2), Rainha da Paz e São José do
  Buril não aparece nas fontes.

## Instagram (anotado das páginas da diocese; nenhum aberto por dentro)

antoniocatedralsanto, fatimaalagoinhas, aparecidaalagoinhas, psjpetrolar,
paroquiaanjobom.alagoinhas, igreja.nossasenhoradaguia2023, paroquia.deusmenino
(Aramari), pdeusmenino (Araçás), paroquiansl1855, santuarionsradomonte,
paroquianossosenhordobomfim, paroquiacristooperariocatu, paroquiasantanacatu,
p.saojoaobatista, paroquiadepojuca, paroquiadeinhambupe, paroquiasaojoseitamira,
paroquiadeapora, pascomnsradoamparo, srdobonfim.areapastoral, pansdc,
paroquiasagrado1991, p.nossasenhoradoamparo, paroquia.n.s.nazare,
paroquiasaopedroesaopaulo29, pnsc_olindina, pnss10, Paroquia_nsdg. A notícia de
Mimoso cita outro perfil, paroquiasrdobonfim.mimoso.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/alag0.htm e
  https://gcatholic.org/churches/local/alag0
- https://www.catholic-hierarchy.org/diocese/dalag.html (endereço da cúria)

## O que falta para o próximo estado desta pesquisa

- Horários das 17 paróquias sem horário (as 10 sem página no site e Santa
  Terezinha, Santuário São Francisco, Acajutiba, Araçás, Itanagra, Teodoro
  Sampaio, Raso).
- Conferir os horários de 2024 com as paróquias (o site não é atualizado desde
  então na maioria das páginas).
- Achar a paróquia antiga que falta na contagem e o município de Raso.
