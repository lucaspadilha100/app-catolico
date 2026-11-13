# Diocese de Paulo Afonso (BA): fontes da pesquisa de 13/11/2026

Diocese Nossa Senhora de Fátima de Paulo Afonso, no nordeste da Bahia
(margem do São Francisco e sertão de Canudos e Jeremoabo). Bispo: Dom Guido
Zendron. Cúria: Avenida Getúlio Vargas, s/n, Centro, Paulo Afonso,
(75) 3281-4268, diocesedepauloafonso23@gmail.com. Instagram da diocese:
diocesepauloafonso.

## Resumo

- **30 unidades pastorais** em `saida/paulo-afonso.json`: 1 catedral, 27
  paróquias e 2 quase-paróquias (Nossa Senhora Rosa Mística em Jeremoabo e
  São José no distrito de Ibó, Abaré, desde jan. 2026), em 5 foranias:
  I São Francisco de Assis (Paulo Afonso e Glória, 9 unidades),
  II São João Batista (Jeremoabo, Pedro Alexandre, Santa Brígida, Canudos,
  Coronel João Sá, 6), III Santa Teresa de Jesus (Cícero Dantas, Ribeira do
  Pombal, Antas, Novo Triunfo, Banzaê, 6), IV Nossa Senhora do Patrocínio
  (Adustina, Sítio do Quinto, Fátima, Paripiranga, 4) e V Senhor do Bonfim
  (Abaré, Macururé, Chorrochó, Rodelas, 5).
- **5 com horário**, todos do cadastro de paróquias do site da diocese
  (registros atualizados entre maio e julho de 2026): São Francisco de Assis
  (Paulo Afonso), Sagrada Família (Paulo Afonso, só domingo: confiança
  média), Ascensão do Senhor e Santa Teresa de Jesus (Ribeira do Pombal) e
  São Francisco de Assis (Fátima). As outras 25 estão com o campo de horário
  vazio no site da diocese.
- Contatos: o site só tem telefone/e-mail/endereço de 5 paróquias. Os
  endereços das matrizes de Paulo Afonso vieram dos decretos de
  reestruturação de 25/05/2025, publicados no site. Instagram: só os perfis
  citados em notícias da própria diocese (2021), alguns da Pascom.
- Capelas: os decretos de 2025 listam as comunidades de cada paróquia de
  Paulo Afonso e de Santa Brígida. Entraram como `igrejas` só as que têm
  povoado ou bairro (39 de Santa Brígida, 6 dos Rodoviários e a antiga matriz
  de Ribeira do Pombal, do GCatholic); as sem lugar foram para o `nao_cabe`
  da matriz.
- Todo `id_banco` é null.

## O site da diocese

`diocesedepauloafonso.com.br` redireciona para https://diocesedepauloafonso.com/ ,
um aplicativo de página única (React) cujo conteúdo vem de uma API tRPC
pública, lida com curl:
- https://diocesedepauloafonso.com/api/trpc/paroquias.list (as 30 unidades:
  nome, cidade, forania, pároco, telefone, e-mail, endereço, horários,
  histórico; lido em 13/11/2026)
- https://diocesedepauloafonso.com/api/trpc/foranias.list (as 5 foranias e
  seus municípios)
- https://diocesedepauloafonso.com/api/trpc/diocese.getInfo (cúria)
- https://diocesedepauloafonso.com/api/trpc/posts.listPublished com
  `input={"json":{"limit":50,"offset":N}}` (as 663 notícias; nenhuma traz
  quadro de horários de paróquia). As notícias abrem em
  https://diocesedepauloafonso.com/noticias/<slug> ; as usadas estão em
  `fontes` de cada item. As principais:
  - Decretos de reestruturação (15/07/2025) da Catedral, São Francisco,
    Perpétuo Socorro, Sagrada Família, Sagrado Coração, N. Sra. da Conceição
    Aparecida (Rodoviários), Bem-Aventurada Virgem Maria da Conceição
    Aparecida (Moxotó) e Santa Brígida.
  - Elevação da Paróquia São José (Quixaba, Glória), 30/01/2022; do
    Sagrado Coração e dos Rodoviários, março de 2022; do Moxotó, 17/12/2023.
  - Quase-paróquia de Ibó (dez. 2025 e jan. 2026).

## Conferência da lista

- GCatholic (09/11/2026): estatística de 2021 com 33 paróquias, lista de 27
  igrejas (24 marcadas como paróquia). Faltam no GCatholic as paróquias
  criadas desde 2020 (Quixaba, Sagrado Coração, Rodoviários, Moxotó,
  Ascensão do Senhor) e as duas quase-paróquias. As igrejas São Pedro e São
  Jorge (Santa Brígida) são comunidades urbanas da paróquia de Santa Brígida
  pelo decreto; Santa Clara (Paulo Afonso) é comunidade do Sagrado Coração.
- A diferença entre 33 (anuário de 2021) e as 30 unidades da diocese não se
  explica com o que foi lido; seguimos a lista da própria diocese.
- Catholic-Hierarchy: a página da diocese não foi achada com o código
  esperado.

## Pendências (próximo estado)

- Horários das 25 unidades sem horário (lista em SEM-HORARIO-paulo-afonso.txt).
- Endereço das matrizes fora de Paulo Afonso (só Ribeira do Pombal e Fátima
  têm) e da Catedral.
- Comunidades listadas nos decretos sem bairro ou povoado.
- A Sagrada Família só publica o domingo.
