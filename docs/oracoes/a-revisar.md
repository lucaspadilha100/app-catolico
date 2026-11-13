# Devocionário: o que o dono precisa revisar

O devocionário (12/11/2026) tem 603 orações novas em `src/oracao/devocionario/`.
Cada oração traz `fonte`:

- `tradicional`: texto de domínio público (oração antiga, hino latino, encíclica
  antiga). A tradução para o português é NOSSA, feita a partir do original, para
  não copiar tradução com direitos.
- `magisterio`: fórmula da Igreja citada por referência (número do Catecismo,
  passagem bíblica) com texto nosso.
- `propria`: texto escrito pela equipe do app. É a maioria (cerca de 520), porque
  as orações que circulam para santos recentes costumam ser de causas de
  canonização, dioceses ou congregações, com dono.

## Prioridade de revisão

1. **Verdades da fé** (`verdades.ts`): fórmulas catequéticas. Conferir se cada
   lista bate com o Catecismo citado.
2. **Traduções de textos tradicionais**: A vós São José (Leão XIII), Pange
   lingua, Adsumus, oração de Santo Tomás antes do estudo, Consagração de
   Montfort, Ladainhas. Conferir fidelidade ao latim.
3. **Orações próprias aos santos** (`santos-1..4.ts`, `nossa-senhora.ts`):
   conferir que nenhum fato citado está errado e que nenhuma frase soa a
   revelação privada afirmada como fato.

## Decisões tomadas (mudar se o dono preferir)

- Veneráveis e Servos de Deus: a oração é "para pedir a glorificação", sem
  "rogai por nós" (culto público só a partir de beato).
- Padre Cícero: texto sóbrio, sem milagres nem a história polêmica.
- Charles de Foucauld: sem a "Oração do abandono" (a forma que circula pode ter
  arranjo posterior com direitos); o texto próprio só pede o abandono.
- Santa Faustina e Santa Margarida Maria: "por meio de quem se espalhou a
  devoção", sem afirmar a revelação como fato.
- Aparições: só as reconhecidas são citadas como aparição (Banneux, Pontmain,
  Knock, La Salette, Beauraing, Kibeho, Champion, Caravaggio); Pilar entra com
  "a tradição conta".
- Nomes de santos: ver `docs/santos/nomes-revisados.md`. Pendentes de decisão
  do dono: Santo ou São Óscar Romero; Paulina ou Pauline Jaricot; Maximiliano
  Maria Kolbe ou Maximiliano Kolbe; nomes originais (Ulma, Seton, To Rot,
  Claverie, Miguel Pro, Newman) ou aportuguesados.

## Como está escrito no app

Na página da oração, o rodapé mostra a origem ("Texto da equipe do app",
"tradução da equipe do app"), com honestidade e sem alarde.

## Conferência de 13/11/2026

Verdades da fé (`verdades.ts`) conferidas no texto oficial do Catecismo
(vatican.va, português), número a número:

- Dez Mandamentos: a lista é a fórmula catequética usada no Brasil. O quadro do
  Catecismo fica antes do n. 2052 (e não "2052 em diante"); a origem passou a
  dizê-lo. No texto do vatican.va (português de Portugal) o 6º e o 9º estão como
  "guardar castidade nas palavras e nas obras" e "nos pensamentos e nos
  desejos": mesmo conteúdo, outra redação.
- Mandamentos da Igreja: são cinco no n. 2041 a 2043 (a origem dizia só 2042 e
  2043). O 4º dizia "abster-se de carne"; o Catecismo diz "guardar abstinência
  e jejuar nos dias determinados pela Igreja" (a abstinência pode ser de outro
  alimento, conforme a Conferência Episcopal). Corrigido.
- Mistérios principais da fé: o n. 234 trata só da Santíssima Trindade; a
  origem passou a dizer isso. A fórmula dos dois mistérios é catequética.
- Sete sacramentos: a divisão em iniciação, cura e serviço da comunhão vem do
  n. 1210 e 1211; acrescentados à origem.
- Virtudes: "que têm Deus por origem e por fim" virou "por origem, motivo e
  objeto", como no n. 1812 (acrescentado à origem).
- Dons do Espírito Santo: batem com o n. 1831.
- Frutos do Espírito Santo: a ordem não batia com nada. Passou à ordem da
  Vulgata (Gl 5,22-23) e da nossa Bíblia: paciência, benignidade, bondade,
  longanimidade. São os mesmos doze do n. 1832.
- Obras de misericórdia: o n. 2447 cita só parte delas; a lista de catorze é
  catequética, e a origem passou a dizê-lo.
- Pecados capitais: os sete batem com o n. 1866; as virtudes contrárias não
  estão no Catecismo, e a origem passou a dizer que são da fórmula catequética.
- Bem-aventuranças: "mansos" vinha antes de "os que choram"; o n. 1716 e a nossa
  Bíblia (Mt 5,4-5) têm "os que choram" antes. Corrigido.
- Mandamento do amor (n. 2055) e novíssimos (n. 1020 em diante; purgatório no
  n. 1030): batem.

Consagração de Montfort e Ladainha do Espírito Santo: ver
`docs/devocoes/a-revisar.md`, seção "Conferência de 13/11/2026".
