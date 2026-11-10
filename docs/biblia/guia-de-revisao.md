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
