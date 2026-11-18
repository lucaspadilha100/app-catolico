# Fontes: Nossa Senhora da Apresentação (sáb 21/11/2026)

Cópias baixadas em `../apres-dl/` (padroeira.txt, festadaapresentacao2026.txt, os PDFs do Plano Pastoral, vn-festa.txt, mc-pt.txt).

| Fato | Fonte | Situação |
|---|---|---|
| 21/11: memória da Apresentação de Nossa Senhora no calendário geral, cor branca | Motor do app: `src/liturgia/santoral.ts` (linha "1121", M, b) e teste `calendario.test.ts` ("geral... grau memoria") | conferido |
| A festa recorda, segundo os apócrifos, Maria menina levada ao Templo para se consagrar a Deus; o fato "não existe nos Evangelhos"; o centro é o "dom total" de Maria | Vatican News, Festas litúrgicas, 21 de novembro: https://www.vaticannews.va/pt/feriados-liturgicos/apresentacao-de-nossa-senhora-ao-templo---nossa-senhora-da-saude.html | conferido |
| "por detrás do que têm de apócrifo, propõem conteúdos de elevado valor exemplar e continuam veneráveis tradições, radicadas sobretudo no Oriente (21 de novembro: Apresentação de Nossa Senhora)" | São Paulo VI, Marialis Cultus (1974), n. 8: https://www.vatican.va/content/paul-vi/pt/apost_exhortations/documents/hf_p-vi_exh_19740202_marialis-cultus.html | conferido |
| Padroeira da Arquidiocese de Natal | Dom João Santos Cardoso, apresentação do Plano Pastoral 2026-2029 (10/01/2026): "Nossa Senhora da Apresentação, Padroeira da Arquidiocese de Natal" (https://www.arquidiocesedenatal.org.br/_files/ugd/4f31a7_ba108515b51e404ea3ecb4e461ccc544.pdf) | conferido |
| Em Natal, 21/11/2026 é solenidade (Catedral Metropolitana); novena aberta em 11/11 | Plano Pastoral 2026-2029, calendário de novembro (mesmo PDF): "21 Solenidade de Nossa Senhora da Apresentação, Catedral Metropolitana" | conferido; também no motor do app (`src/liturgia/dioceses.ts`, Natal, 1121, solenidade, branco) |
| Padroeira da cidade ("padroeira de Natal") | Arquidiocese de Natal, página Padroeira: https://www.arquidiocesedenatal.org.br/padroeira | conferido |
| "Conta a tradição que na manhã de 21 de novembro de 1753, pescadores encontraram na margem direita do Rio Potengi... um caixote que estava encalhado numa pedra... uma imagem da mãe de Jesus com um menino no colo"; nome dado por ser o dia da Apresentação | idem, página Padroeira (texto do historiador Itamar de Souza, publicado pela Arquidiocese) | conferido |
| "baseia-se na tradição oral. Não há um documento registrando a chegada da sua imagem"; "mesmo sem ter aqui uma imagem, Nossa Senhora da Apresentação é a padroeira desde os primórdios da vida cristã da comunidade natalense" | idem | conferido |
| Missa da Pedra do Rosário, "à beira do Rio do Potengi, local onde a imagem apareceu" | idem; e Festa 2026: https://www.arquidiocesedenatal.org.br/festadaapresentacao2026 ("21 de novembro - Pedra do Rosário") | conferido |
| Veneração, não adoração | Catecismo, n. 2132 (cópia do vatican.va em scratchpad/cic) | conferido |
| Lc 1,38 | Bíblia do app, `public/biblia/f1/LUK.c5f3304bc1.json`, capítulo 1, v. 38 | conferido |
| Tela: Mais > Calendário da diocese > Arquidiocese de Natal; Liturgia de 21/11/2026 mostra "Nossa Senhora da Apresentação, padroeira da Arquidiocese de Natal · Solenidade · Cor: Branco" | captura `cap/liturgia-natal.png` (localhost:5190, preferência `diocese: "natal"`) | conferido |
| Novena em Rezar > Novenas | `src/devocao/catalogo.ts` e captura `cap/novena.png` | conferido |

## Capa
Foto "Pedra do Rosário, Natal (RN)": imagem de Nossa Senhora da Apresentação na Pedra do Rosário, ao fundo o Rio Potengi. Marcos Elias de Oliveira Júnior, 11/09/2021, CC0. https://commons.wikimedia.org/wiki/File:Pedra_do_Ros%C3%A1rio,_Natal_(RN).jpg (arquivo de 1920 px em `../apres-arte/pedra-do-rosario.jpg`).

## Ficou de fora (não confirmado em fonte da Igreja ou oficial)
- Dedicação de Santa Maria Nova em Jerusalém (543) e extensão por Sisto V (1585): só em sites de devoção e Wikipedia; nenhuma fonte da Santa Sé encontrada. (A página da Arquidiocese ainda diz "instituída em 1571", que diverge; não usado.)
- Feriado municipal de 21/11 em Natal: só em jornais; o site da Prefeitura (natal.rn.gov.br) e o Diário Oficial recusaram a conexão (403/502), e a Arquidiocese não menciona o feriado.
- Inscrição no caixote ("No ponto onde der este caixão não haverá nenhum perigo"), vigário Pe. Manoel Correia Gomes Pressurroso, rosário na mão e o nome "Pedra do Rosário", documentos de 1718/1722: estão na página da Arquidiocese, mas deixados de fora para o post ficar curto (podem entrar em outro post).
- Protoevangelho de Tiago pelo nome: a ficha do app cita, mas a fonte da Igreja conferida diz só "Evangelhos apócrifos".
