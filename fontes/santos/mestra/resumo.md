# Lista mestra: santos, beatos, veneráveis e servos de Deus brasileiros

Gerada em 14/11/2026 por `bin/montar.py` (roda de novo do zero com `python3 -I bin/montar.py <pasta mestre>`).
Arquivos: `lista-mestra.json` (9.516 entradas), `excluidos.json` (2.300 itens do Wikidata deixados de fora, com o motivo).

## Fontes usadas
- Wikidata: os 12.277 itens com P411 (`wikidata.json`), mais duas consultas próprias: identificadores católicos
  (causesanti.va P9588, santiebeati P6126, CatholicSaints.info P6725, Nominis P4286, Catholic Encyclopedia P3241),
  identificadores ortodoxos (Pravoslavnaya Entsiklopediya P5002, OrthodoxWiki P7819, Orthodox World, Orthodoxie.com),
  "descrito em: Martirológio Romano" (P1343 = Q14705108/Q125252554), ordem religiosa (P611), tipo (P31), partes de grupo
  (P361/P463/P527), precisão das datas, rótulo em português.
- Wikipédia em inglês, 27 páginas de lista (wikitexto lido e analisado por script): canonizados por Leão XIII, Pio XI, Pio XII,
  João XXIII, Paulo VI, João Paulo II, Bento XVI, Francisco e Leão XIV; beatificados por Pio X, Bento XV, Pio XI, João XXIII,
  Paulo VI, João Paulo II, Bento XVI, Francisco e Leão XIV; veneráveis declarados por João XXIII, Paulo VI, João Paulo II,
  Bento XVI, Francisco e Leão XIV (até o decreto de 24/10/2026); "List of venerable people (Catholic)"; "List of Catholic saints"
  (2.396 linhas, usada só para confirmar santos e upgrades com data de canonização); "Martyrs of the Spanish Civil War".
  Cada linha deu nome, link (resolvido para QID), anos, data da cerimônia ou do decreto, grupo ("& N Companions") e
  anotações como "(beatified on ..., canonized on ...)".
- `inventario/brasil.json` (147 entradas conferidas): todas entraram; a situação e a data delas prevalecem.

## Contagens
| situação | entradas | confiança alta | média | baixa |
|---|---|---|---|---|
| santo | 5.909 | 3.515 | 1.589 | 805 |
| beato | 2.481 | 2.148 | 333 | 0 |
| venerável | 1.036 | 449 | 587 | 0 |
| servo de Deus (só Brasil) | 90 | 85 | 5 | 0 |
| **total** | **9.516** | | | |

- 221 entradas são grupos (`pessoas` preenchido), somando 3.929 pessoas. 1.111 membros de grupo sem artigo próprio
  (953 por "parte de" no Wikidata, 158 pela mesma data de cerimônia de um grupo das listas) foram dobrados dentro do grupo
  e ficam em `membros_qid` (1.110 com QID).
- Brasil: 148 entradas marcadas `brasil: true` (6 santos, 16 beatos, 36 veneráveis, 90 servos; o grupo Manuel Gómez González
  e Adílio Daronch virou as duas pessoas). 48 casaram com item do Wikidata ou das listas (2 grupos casados à mão); 99 entraram sem QID.
- Sem QID (só das listas da Wikipédia ou do brasil.json): 697 (537 veneráveis, 85 servos, 68 beatos, 7 santos).

### Por século da morte
| séc. | n | séc. | n | séc. | n |
|---|---|---|---|---|---|
| a.C. | 22 | VIII | 275 | XV | 134 |
| I | 175 | IX | 273 | XVI | 323 |
| II | 176 | X | 141 | XVII | 399 |
| III | 320 | XI | 223 | XVIII | 331 |
| IV | 657 | XII | 273 | XIX | 540 |
| V | 352 | XIII | 273 | XX | 1.775 |
| VI | 433 | XIV | 147 | XXI | 28 |
| VII | 436 | | | sem data | 1.810 |

### Campos
- Dia de festa: 7.994 (7.225 da festa do Wikidata, `data_de: "memoria"`; 769 do dia da morte, `data_de: "falecimento"`);
  1.522 sem dia. Quando o Wikidata traz mais de uma festa, vale a primeira e as outras vão para `observacao`
  (não dá para saber qual é a do Martirológio Romano).
- Imagem do Commons: 4.411 (2.970 santos, 1.129 beatos, 308 veneráveis, 4 servos).
- Wikipédia pt: 2.281; en: 5.104. Ordem religiosa: 2.197. Martirológio Romano marcado `true`: 2.303 (só onde o Wikidata
  o cita; `null` quer dizer "não sabido", não "fora do Martirológio").
- Data da situação: 847 santos, 854 beatos, 921 veneráveis. Os santos pré-congregação não têm data, como é o caso.
- `nome_pt`: rótulo pt do Wikidata (sem "São/Santa/Beato"); 459 ficaram no nome original (`nome_original` preenchido),
  172 deles sem rótulo em pt nem en (nome em russo, polonês etc.).

## O que foi excluído (2.300 do Wikidata, mais 336 servos)
| motivo | n |
|---|---|
| "santo" genérico (Q43115) sem data de morte e sem nenhum sinal católico | 925 |
| "santo" genérico morto depois de 1054 sem sinal católico (em geral ortodoxo russo, grego, sérvio, georgiano) | 620 |
| "The Venerable" (Q12774503), título monástico/ortodoxo, sem decreto católico | 547 |
| servos de Deus que não são do Brasil | 336 |
| não é pessoa (título mariano, página de desambiguação, ficção) | 86 |
| santo de outra religião (hindu, sufi, budista, jainista) | 61 |
| santo só de outra Igreja (anglicana, luterana, ortodoxa oriental) | 24 |
| santo pós-1054 de outra Igreja com só uma fonte fraca (Sérgio de Radonej, Serafim de Sarov, Sava...) | 19 |
| santo pós-1054 de país ortodoxo só com "santo" genérico (Gregório Palamas, João de Kronstadt...) | 13 |
| "bem-aventurado" ortodoxo | 5 |

Sinal católico = religião católica (ou Igreja oriental católica), Martirológio Romano, causesanti.va, lista da Wikipédia,
santiebeati, CatholicSaints.info, Catholic Encyclopedia, ou situação católica no Wikidata (santo canonizado, beato, venerável).

## O que continua incerto
- 767 santos anteriores a 1054 sem nenhuma confirmação de que estão no Martirológio Romano (confiança baixa; muitos são
  orientais tirados da Wikipédia russa). Precisa de conferência com o Martirológio de 2004.
- 23 santos ocidentais pós-1054 sem sinal católico (confiança baixa; podem ser só culto local ou beatos).
- 16 santos do Wikidata mortos depois de 1900 fora de todas as listas de canonização (confiança baixa; ex.: mártires
  greco-católicos ucranianos, que são beatos; Gorazd de Praga, que é ortodoxo). Outros 42 foram rebaixados para beato ou
  venerável porque as listas os dão assim (ex.: Diego Oddi), e 68 receberam a situação do grupo a que pertencem
  (108 mártires poloneses, Nowogródek, Cristeros, Turón).
- 104 itens "The Venerable" com sinal católico foram excluídos sem conferir se há decreto (ex.: Miguel Mañara,
  Hartmann de Brixen, que é beato). Estão em `excluidos.json`.
- 925 "santos" sem data e 620 pós-1054 excluídos podem esconder santos ocidentais com cadastro pobre no Wikidata
  (ex.: Bertha de Marbais, Hombelina). Estão em `excluidos.json` para revisar.
- 15 grupos sem número de pessoas.
- Wikidata tem erros pontuais que passam (ex.: Celestino IV como santo; Giovanni Nadiani, poeta de 2016, com status de
  venerável; por isso o venerável homônimo de 1940 entrou à parte, sem QID).

## Maiores lacunas
1. Data de beatificação faltando em 1.627 beatos (393 deles mortos depois de 1900) e de canonização em 57 santos mortos
   depois de 1600: as listas de Pio IX, Leão XIII (beatificações), Pio X e Bento XV (canonizações) e Pio XII
   (beatificações) não existem na Wikipédia em inglês.
2. Veneráveis anteriores a 1958 só vêm do Wikidata; 537 veneráveis só têm o nome como está na lista em inglês, sem QID,
   sem imagem e sem dia (ligar ao Wikidata/causesanti depois).
3. Conferência oficial de 2025-2026: causesanti.va e newsaints.faithweb.com (Hagiography Circle) não são alcançáveis deste
   ambiente (falta liberar os dois hosts no acesso à rede); press.vatican.va não foi tentado. As listas de Leão XIV da
   Wikipédia vão até o decreto de 24/10/2026; beatificações futuras (28/11/2026: Enrique Shaw e outras) ficaram como
   venerável com a observação "beatificação marcada".
4. 1.810 entradas sem data de morte e 1.522 sem dia de festa.
5. `martirologio` só é sabido para 2.303 entradas.
6. Dois servos de Deus brasileiros que estão no Wikidata e não no `brasil.json` ficaram de fora: Dorothy Stang e Miguel
   Afonso de Andrade Leite.
