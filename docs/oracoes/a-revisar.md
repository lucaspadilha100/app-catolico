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
