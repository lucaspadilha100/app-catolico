# Diocese de Naviraí (MS): fontes da pesquisa de 13/11/2026

Sé em Naviraí; cone sul do Mato Grosso do Sul, 19 municípios. Bispo: Dom
Ettore Dotti, CSF (desde a criação, 01/06/2011; desmembrada de Dourados).
Cúria: R. Campanário, 144, Centro, Naviraí, (67) 3461-0318,
curiadiocesanadenavirai@gmail.com. Instagram da diocese: diocesedenavirai.

## Resumo

- **25 unidades pastorais** em `saida/navirai.json`: 1 catedral, 22 paróquias
  e 2 santuários diocesanos, em 4 foranias (Ivinhema, Naviraí, Nova
  Andradina e Tacuru). O Anuário Diocesano 2026 diz "4 Foranias, 23
  Paróquias, 2 Santuários e 226 Comunidades" (a catedral conta entre as 23).
  Sem quase-paróquias nem áreas pastorais.
- **2 com horário** (confiança alta), as duas de Nova Andradina, com fonte na
  página da paróquia no site da diocese, lida em 13/11/2026: Santuário
  Diocesano Imaculado Coração de Maria e Paróquia São Vicente de Paulo.
- **23 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. As páginas das
  paróquias no site da diocese têm a seção "Horário das Missas", mas vazia
  em todas menos as duas acima.
- Todo `id_banco` é null: o banco não tem nada do Mato Grosso do Sul.
- Capelas e comunidades ficaram fora: o anuário conta 226 comunidades, mas
  nenhuma fonte as lista com nome e lugar.
- Todas as sedes ficam em MS; nenhuma unidade precisou do campo `uf`.

## Lista das unidades

A lista vem do site da diocese (/paroquias, 24 unidades em 4 páginas) e do
**Anuário Diocesano 2026** (PDF oficial, seções 4. Foranias e 5. Paróquias,
25 unidades): o anuário acrescenta o Santuário Diocesano Nossa Senhora
Aparecida, de Ivinhema, criado em 12/10/2025, que ainda não tem página no
site. Endereço, e-mail, telefone e data de criação de cada unidade saem do
anuário (mais novo); quando o site diverge, a observação anota.

Conferência contra o anuário GCatholic (20 igrejas, atualizado em
09/11/2026): as 20 batem com a nossa lista; faltam lá as 5 mais novas
(Japorã, de 2019; N. S. da Conceição Aparecida de Ivinhema, de 2020; São
José e São Vicente de Paulo de Nova Andradina, de 2023; o Santuário N. S.
Aparecida de Ivinhema, de 2025). O GCatholic põe a Paróquia São Pedro e São
Paulo em "Nova Andradina" porque a sede fica no distrito de Nova Casa Verde.

Observações de nome: o anuário escreve "Nossa Senhora Imaculada Conceição"
(Iguatemi) e "Rua Vanderli Ortiz Lima" (Tacuru); o site, "da Imaculada
Conceição" e "Wanderlei". O JSON segue o anuário. "Juti" segue a grafia do
IBGE (o site escreve "Jutí").

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedenavirai.org.br/ (menu, contatos)
- https://diocesedenavirai.org.br/paroquias (a lista, 4 páginas)
- https://diocesedenavirai.org.br/paginas/foranias (só os 4 nomes)
- https://diocesedenavirai.org.br/fale-conosco (cúria)
- https://diocesedenavirai.org.br/arquivos/anuario-diocesano →
  https://cdn.diocesedenavirai.org.br/uploads/archive/file/12/anuario_2026.pdf
  (o Anuário Diocesano 2026, a fonte principal: foranias, criação, endereço,
  e-mail e telefone de cada unidade; não traz horários de missa)
- Páginas de paróquia com horários:
  - https://diocesedenavirai.org.br/paroquias/santuario-diocesano-imaculado-coracao-de-maria
  - https://diocesedenavirai.org.br/paroquias/paroquia-sao-vicente
- As outras 22 páginas de paróquia foram lidas (contatos e pároco); a seção
  de horários estava vazia em todas.

## Sites próprios de paróquia

- paroquiadebataypora.com.br (Santo Antônio de Pádua, Batayporã): no ar, mas
  parado desde 2022, com o clero antigo e sem página de horários; não usado
  para horário.
- paroquiadeivinhema.com.br, paroquiasaopedrojatei.com.br e
  paroquianovaandradina.com.br (citados no anuário): fora do ar em
  13/11/2026.

## Instagram

A busca desta sessão não indexa instagram.com: nenhum trecho de perfil de
paróquia apareceu, nem com `site:instagram.com`. Ficou só o perfil da
diocese (diocesedenavirai, link no rodapé do site oficial). Por isso nenhuma
unidade tem `instagram` preenchido.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/navi0 (20 igrejas, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dnavi.html
- https://en.wikipedia.org/wiki/Diocese_of_Navira%C3%AD

## O que falta para o próximo estado desta pesquisa

- Horário das 23 unidades sem fonte: o caminho mais provável são os perfis
  das paróquias no Instagram e no Facebook, que a busca desta sessão não
  mostra por dentro.
- Os nomes e lugares das 226 comunidades e capelas (nenhuma fonte as lista).
- Instagram institucional de cada paróquia.
- A Catedral tem dois telefones a mais no anuário (3461-4867 financeiro,
  9 9871-8047 casa paroquial) que ficaram fora do JSON por não caber no
  formato; o principal está lá.
