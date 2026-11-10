# Guia de revisão da Bíblia do Santinho

Tom aprovado pelo dono em 10/11/2026 (amostra: Marcos 1 e Salmo 22).

## A regra que não muda
- **A base é só o Figueiredo** (`fontes/biblia/figueiredo-1950/<LIVRO>.json`).
  Cada versículo revisado nasce do versículo do Figueiredo, um a um.
- **Nunca usar outra tradução como modelo**, nem de memória: Ave-Maria, CNBB,
  Jerusalém, Pastoral, Almeida, NVI. Vale o estilo de uma Bíblia moderna, nunca
  as frases dela. Se uma frase "vier pronta" da memória, reescrever.
- **Fidelidade ao Figueiredo**: não acrescentar, não tirar, não interpretar.
  Onde o Figueiredo se afasta do latim, fica o Figueiredo (Mc 1,24 "és o Santo
  Deus"). Sem notas, sem títulos de seção, sem referências cruzadas.
- **Cada versículo continua sendo o mesmo versículo**: mesmo número, mesma
  quantidade. Versículo vazio no original continua vazio.

## Fontes de conferência e como decidir
Decisão do dono (10/11/2026): as dúvidas se resolvem pelas fontes, sem
esperar por ele, e **toda a Bíblia é conferida com pelo menos três fontes**.
Régua, nunca texto, todas livres de direitos:
1. o latim da **Vulgata Clementina** (`fontes/vulgata/`), de onde o
   Figueiredo traduziu;
2. a **Douay-Rheims**, Bíblia católica aprovada, traduzida da Vulgata
   (`fontes/douay-rheims/`);
3. o **texto original** (`fontes/originais/`): hebraico no Antigo Testamento,
   grego da Septuaginta nos deuterocanônicos, grego no Novo Testamento.
O original ajuda a entender o sentido; quando ele difere da Vulgata por
tradição textual, vale a Vulgata (é a Bíblia que o Figueiredo traduziu).
- **Erro evidente da edição de 1950** (palavra que contradiz o contexto, letra
  trocada, negação invertida, palavra ou frase que falta) e a Vulgata e a
  Douay-Rheims concordam em outra leitura, sem o original contrariar: corrige
  por elas. Ex.: Sl 104,18 "o erro" → "o ferro"; Sl 89,13
  "inexorável" → "deixa-te aplacar"; Sl 24,3 "amigos" → "inimigos".
- **Escolha de tradução do Figueiredo que faz sentido** (mesmo diferente do
  latim): fica o Figueiredo.
- **Interpretação do revisor** (explicação acrescentada, sujeito trocado):
  volta ao sentido literal do Figueiredo.
- Tudo o que for corrigido pela régua vai para `docs/biblia/decisoes.md`.
- **Texto restaurado** (frase que a edição de 1950 perdeu) entra INTEIRO: nunca
  encurtar para passar no conferir. Ponha o versículo ("cap,v") em
  `fontes/biblia/revisao/<LIVRO>/restaurados.json`, que libera o limite de tamanho. Versículo que ficou curto porque a fonte trazia
  nota de rodapé ou cabeçalho grudado vai em `notas-removidas.json` (mesmo formato),
  depois de conferir pela Vulgata que o texto está inteiro.
- **Versículo que a edição de 1950 não imprimiu** (e as três réguas trazem) entra
  no fim do capítulo, com "cap,v" em `acrescentados.json` (ex.: 2Rs 14,29).

## Termos fixos
- "nova aliança" (testamento do sangue: Mt 26,28; Mc 14,24; Lc 22,20; 1Cor 11,25);
  "aliança" sempre que "testamento/concerto/pacto" é a aliança de Deus com o povo
  (Gl 4,24 "as duas alianças"); "testamento" só onde o argumento é o testamento
  que vale pela morte de quem o fez (Hb 9,16-17)
- "Josué" quando o "Jesus" do Figueiredo é Josué, filho de Nun (Hb 4,8; At 7,45),
  ou o sumo sacerdote Josué, filho de Josedec (Esdras, Ageu, Zacarias)
- "poder" quando "virtude" é força (de Deus, de Cristo, dos milagres);
  "Senhor dos exércitos" / "Deus dos exércitos" para "Senhor das virtudes";
  "virtude" fica quando é qualidade moral
- "loucura" para "estultícia"; "fraqueza" para "enfermidade" quando é fraqueza
- "Igreja" no Novo Testamento; "assembleia" no Antigo (Salmos incluídos)
- "chefes dos sacerdotes" (príncipes dos sacerdotes, pontífices); "sumo
  sacerdote" para um só quando a Vulgata diz pontifex, sacerdos magnus ou
  princeps sacerdotum; quando a Vulgata diz só "sacerdos", "sacerdote"; "denário"; "barco"; "Em verdade vos digo"; "gentios"
- "filisteus" para "Palestina/palestinos" do Figueiredo (o povo antigo)
- "prostrar-se" / "inclinar-se diante de" quando "adorar" é reverência a uma
  pessoa; "adorar" só para Deus (ou ídolos)
- "aliança" para "concerto"; nomes de lugar na grafia atual (Betel, Harã,
  Siquém); Aram (filho de Sem) e Arã (irmão de Abrão), nunca "Arão" para eles
- Nomes: a mesma pessoa ou lugar com a mesma grafia em toda a Bíblia (Gat,
  Joaquim o pai e Joaquin o filho, rei de Judá; Amnon, filho de Davi; Jeroão)
- "Assim diz o Senhor" (nunca "Isto diz o Senhor").
- Profetas: o oráculo (o Senhor falando pela boca do profeta, "Assim diz o
  Senhor...") vai SEM aspas; aspas só em diálogo e em fala citada dentro do
  oráculo (como em Jeremias 1-26 e nos profetas menores).
- Sem referências cruzadas entre parênteses nos títulos.

## Ordem e numeração
- Os Evangelhos (e, daqui em diante, os livros revisados) seguem a **ordem e a
  divisão de versículos das Bíblias católicas de hoje e do lecionário** (Nova
  Vulgata, tabela aberta `fontes/versificacao/org.vrs`), não a da Vulgata antiga
  que o Figueiredo usou. Mudam o lugar e o corte do versículo; as palavras
  continuam as do Figueiredo. Ex.: Mt 5,4 "os que choram" e 5,5 "os mansos".
- Livro novo com numeração atual entra em `NUMERACAO_MODERNA` e, se o corte
  mudou, em `DIVISAO_REFEITA` (`scripts/biblia/numeracao.mjs`).
- Os Salmos continuam na numeração grega (Sl 22 "O Senhor é meu pastor"), como
  nas Bíblias católicas do Brasil.

## O tom
- **Falas entre aspas curvas** “ ”. Fala dentro de fala: ‘ ’.
- **Frases curtas e na ordem natural** do português de hoje.
- **Menos "E" no começo** dos versículos quando ele só repete o latim *et*.
  Fica quando liga de fato duas ações.
- **Palavras de hoje**: "Após de mim" → "Depois de mim"; "jornaleiros" →
  "empregados"; "descobertamente" → "abertamente"; "espírito imundo" →
  "espírito impuro"; "à roda de seus lombos" → "na cintura"; "quam" → "como".
- **Mantém o tom bíblico**: "vós" e "vos" ("Vinde comigo", "Eu vos digo"),
  "Bem-aventurados", "Fazei penitência", "Reino de Deus", "Filho do Homem".
- **Vocabulário católico do Figueiredo fica**: penitência, graça, fariseus,
  escribas, sinagoga, publicanos, sumo sacerdote.
- Nomes próprios na grafia brasileira atual: Isaías, Judeia, Galileia,
  Cafarnaum, Belém, Nazaré, Zebedeu, Herodes, Pôncio Pilatos.
- Pontuação simples: vírgula, ponto, dois-pontos, ponto e vírgula.
  **Nunca travessão** (— ou –).
- Números por extenso como no original ("quarenta dias").

## Exemplos aprovados (Marcos 1)
| Figueiredo 1950 | Revisado |
|---|---|
| E saía concorrendo a êle tôda a terra de Judéia, e todos os de Jerusalém, e eram batizados por êle no rio Jordão, confessando os seus pecados. | Toda a região da Judeia e todos os moradores de Jerusalém iam até ele, e eram batizados por ele no rio Jordão, confessando os seus pecados. |
| Após de mim vem outro mais forte do que eu: Ante o qual não sou digno de me prostrar para lhe desatar a correia dos sapatos. | “Depois de mim vem alguém mais forte do que eu. Não sou digno nem de me abaixar para desamarrar a correia dos seus sapatos. |
| E ouviu-se dos Céus esta voz: Tu és aquêle meu Filho singularmente amado, em ti tenho pôsto tôda a minha complacência. | E dos céus veio uma voz: “Tu és o meu Filho muito amado; em ti tenho todo o meu agrado.” |
| E disse-lhes Jesus: Vinde após mim, e eu vos farei pescadores de homens. | Jesus lhes disse: “Vinde comigo, e eu farei de vós pescadores de homens.” |
| E no mesmo ponto, deixadas as redes, o seguiram. | Na mesma hora, eles deixaram as redes e o seguiram. |
| Mas Jesus o ameaçou, dizendo: Cala-te e sai dêsse homem. | Jesus o repreendeu: “Cala-te e sai desse homem!” |

Texto completo da amostra aprovada: `docs/biblia/amostra-aprovada.json`.

## Formato do trabalho
- Saída: um arquivo por capítulo, `fontes/biblia/revisao/<LIVRO>/<capítulo>.json`,
  só com a lista dos versículos: `["v1", "v2", ...]`.
- `node scripts/conferir-capitulo.mjs <LIVRO> <capítulo>` a cada capítulo.
- Termos fixos: "chefes dos sacerdotes" (príncipes dos sacerdotes, pontífices);
  "sumo sacerdote" (um só: Caifás, Anás); "barco"; "Em verdade vos digo".
- Dúvidas (texto do Figueiredo estranho, possível erro de digitação, divergência
  do latim mantida) vão para `fontes/biblia/revisao/<LIVRO>-notas.md`, uma linha
  por caso: `Mc 1,24: ...`.
- `node scripts/conferir-revisao.mjs <LIVRO>` precisa passar antes de entregar.
