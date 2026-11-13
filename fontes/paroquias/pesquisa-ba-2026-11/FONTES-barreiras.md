# Diocese de Barreiras (BA): fontes da pesquisa de 13/11/2026

Sé em Barreiras; oeste baiano, além do Rio São Francisco. Bispo: Dom Moacir
Silva Arantes. Cúria: Rua 26 de Maio, 427, Centro, Barreiras, CEP 47800-145,
(77) 3611-5926 e (77) 9 9995-5515 (WhatsApp), diocesedebarreiras@gmail.com.
Padroeiro diocesano: São João Batista (24 de junho).

## Resumo

- **24 unidades pastorais** em `saida/barreiras.json`: 1 catedral e 23
  paróquias, em 4 foranias: I São Mateus (Barreiras e São Desidério, 8),
  II São Marcos (Angical, Baianópolis, Brejolândia, Cotegipe, Cristópolis,
  Tabocas do Brejo Velho, Wanderley, 7), III São Lucas (Formosa do Rio
  Preto, Mansidão, Riachão das Neves, Santa Rita de Cássia, 4) e IV São João
  Evangelista (Luís Eduardo Magalhães e Roda Velha, 5). Cidades: Barreiras
  (7), Luís Eduardo Magalhães (4), São Desidério (2, uma delas a de Roda
  Velha) e uma em cada uma das outras 11.
- **24 com horário de missa** (todas com confiança alta), mais 22 igrejas e
  comunidades com missa em horário fixo. Confissão com dia e hora em 12
  paróquias; adoração em 4.
- **504 igrejas e comunidades** além das matrizes, com nome e lugar tirados
  das listas "COMUNIDADES" de cada paróquia. Onde a lista dá o padroeiro, o
  nome é "Comunidade <padroeiro>"; onde não dá, "Comunidade de <lugar>".
- O Santuário Nossa Senhora do Perpétuo Socorro (Barreiras) é sede de
  paróquia: entrou como `paroquia` com a primeira igreja de tipo `santuario`.
  O Santuário Diocesano Senhor dos Aflitos (Cantinho, 20 km de Barreiras)
  não é paróquia; entrou como igreja de tipo `santuario` da Catedral, porque
  a Catedral o lista entre suas comunidades e o reitor é o administrador
  dela.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem das quatro páginas de forania do site da diocese, cada uma com
todas as paróquias da forania (endereço, telefone, e-mail, ano de criação,
clero, expediente, horários de missa e confissão, pastorais e comunidades).

Conferência: o GCatholic (atualizado em 09/11/2026) dá 24 paróquias e 216
missões, e as 24 batem uma a uma com as da diocese (inclusive Roda Velha,
que o GCatholic põe como cidade). As igrejas do GCatholic sem marca de
paróquia (Santuário Senhor dos Aflitos; Santa Cruz em Formosa do Rio Preto;
N. S. do Rosário em Santa Rita de Cássia; São Sebastião em Wanderley) são
comunidades que já estão nas listas das paróquias.

## Páginas lidas (13/11/2026)

- https://diocesedebarreiras.org.br/paroquiasforaniasaomateus/ (editada em 28/07/2026)
- https://diocesedebarreiras.org.br/paroquiasforaniasaomarcos/ (09/12/2025)
- https://diocesedebarreiras.org.br/paroquiasforaniasaolucas/ (06/12/2025)
- https://diocesedebarreiras.org.br/paroquiasforaniasaojoaoevangelista/ (06/12/2025)
- https://diocesedebarreiras.org.br/santuariosenhordosaflitos/ (missa no 1º e
  3º domingo às 10h; celebração da Palavra no 2º e 4º)
- https://diocesedebarreiras.org.br/santuarionossasenhoradoperpetuosocorro/
- https://diocesedebarreiras.org.br/igrejasaobento/ e /contato/
- Site da própria paróquia do Perpétuo Socorro, citado pela diocese:
  https://www.perpetuosocorrobarreiras.com.br/ (home com "Horários das
  celebrações", /comunidades/ e /secretaria-informacoes-gerais/). Foi ele
  que resolveu o texto ambíguo da diocese ("Terça à sexta: 06:45 e 19:30 /
  Quarta, quinta e sexta: 06:45"): terça 6h45 e 19h30 (novena), quarta a
  sexta 6h45. Ele também traz a notícia da posse do novo pároco e reitor
  (fevereiro de 2026).
- API do WordPress (`/wp-json/wp/v2/pages` e busca em `/posts`) para achar
  as páginas e conferir se houve paróquia nova (não houve).

## Decisões

- Comunidades com missa em horário fixo receberam o horário (São Pedro na
  São Sebastião; as sete urbanas da Santa Rafaela; Rio Grande e Vila Nova na
  Santa Luzia; quatro igrejas da sede em Formosa do Rio Preto; N. S.
  Aparecida da sede de Riachão das Neves; N. S. de Fátima e Centro
  Comunitário Dom Ricardo na São José de LEM; Santa Terezinha na Catedral;
  as três do Perpétuo Socorro).
- Comunidades da sede sem bairro na fonte (Formosa do Rio Preto, Riachão
  das Neves, Santa Rita de Cássia) ficaram com `localidade` vazia: a fonte
  diz só "Sede" ou "Comunidades urbanas".
- Ficaram de fora: comunidades marcadas como inativas (Grapiúna, na São
  Sebastião), as cinco "comunidades em formação, sem capela" de Formosa do
  Rio Preto, a "Comunidade São João Batista" de Cotegipe e o "Abrigo Santa
  Clara e São Francisco" de LEM (sem lugar), e os "setores de fazendas" de
  Roda Velha (sem nomes). Em Angical, as três listas da fonte repetem
  comunidades; as repetidas entraram uma vez. As comunidades de Tabocas do
  Brejo Velho marcadas "(Brejolândia)" entraram com cidade Brejolândia.
- A Paróquia Santo Antônio de Roda Velha entrou com cidade São Desidério e
  localidade Roda Velha (distrito de São Desidério).
- Telefone de LEM publicado sem DDD (3628-1737): entrou com 77. O e-mail da
  São José de LEM vem com acento ("são.joselem@hotmail.com") e não entrou.
  O de Brejolândia vem com um espaço ("s antana...") e foi juntado.
- Quando a página de forania e a página própria do santuário divergem, ficou
  o site da paróquia; a missa de domingo às 9h na Comunidade N. S. de
  Fátima (Flamengo), que só a página da comunidade traz, ficou no
  `nao_cabe`.

## Pendências

- **Igreja São Bento (reitoria)**, Rua Ipanema, 200, Vila Dulce, Barreiras,
  (77) 3611-5926, igreja.saobento11@gmail.com: missa aos domingos às 10h e
  confissões às quartas, das 9h às 11h. É reitoria desde 2016 (antes,
  comunidade da Paróquia São José) e não tem paróquia indicada hoje; não
  entrou no JSON.
- Santa Rafaela Maria: confissões "das 9h às 11h", sem o dia.
- Formosa do Rio Preto: "de terça a sexta, missas às 18h na zona rural",
  sem dizer em quais comunidades.
- Os nomes de padres das páginas de forania IV (dezembro de 2025) já estão
  em parte desatualizados (ex.: São José de LEM); os horários podem ter
  mudado também. Vale reconferir na próxima rodada.

## Instagram

Só o do Perpétuo Socorro (santuarionspsoficial), citado pela diocese e pelo
site da paróquia. A diocese: instagram.com/diocesedebarreiras.
