# Nomes dos santos revisados (12/11/2026)

Regra: santo antigo e popular fica com o nome português de sempre; santo ou
beato moderno que o Brasil conhece pelo nome original fica com o original;
nome traduzido que a Igreja no Brasil usa e que é o conhecido fica como está.
O `id` não mudou em nenhum caso. O nome antigo foi para `nomes` (a busca
continua achando).

Dos 490 nomes, 10 mudaram.

| id | antes | depois | motivo |
|---|---|---|---|
| sao-joao-diego-cuauhtlatoatzin | São João Diego Cuauhtlatoatzin | São Juan Diego Cuauhtlatoatzin | O Brasil o conhece por Juan Diego |
| sao-joao-henrique-newman | São João Henrique Newman, presbítero e doutor da Igreja | São John Henry Newman, presbítero e doutor da Igreja | Conhecido pelo nome inglês (Vatican News em português usa John Henry) |
| beata-chiara-badano | Beata Chiara Badano | Beata Chiara Luce Badano | Conhecida como Chiara Luce |
| sao-bartolo-longo | São Bártolo Longo | São Bartolo Longo | Grafia usada no Brasil, sem acento; igual à de Nossa Senhora de Pompeia no próprio app |
| sao-jose-gregorio-hernandez | São José Gregório Hernández | São José Gregorio Hernández | Nome original, como saiu na canonização |
| santa-isabel-ana-seton | Santa Isabel Ana Seton | Santa Elizabeth Ann Seton | Santa moderna, conhecida pelo nome original |
| beatos-pedro-claverie-e-companheiros | Beatos Pedro Claverie, bispo, e companheiros, mártires da Argélia | Beatos Pierre Claverie, bispo, e companheiros, mártires da Argélia | Nome original; no texto também Christian de Chergé e Henri Vergès |
| sao-pedro-to-rot | São Pedro To Rot | São Peter To Rot | Nome original, como saiu na canonização |
| beato-miguel-agostinho-pro | Beato Miguel Agostinho Pro | Beato Miguel Agustín Pro | Nome original; "Miguel Pro" também entrou na busca |
| beatos-jose-e-vitoria-ulma-e-filhos | Beatos José e Vitória Ulma e filhos, mártires | Beatos Józef e Wiktoria Ulma e filhos, mártires | Nome original; "família Ulma" também entrou na busca |

Junto com o nome mudaram, para não haver duas formas no app: o santoral
(`src/liturgia/santoral.ts`, Juan Diego e Newman), a festa de Nossa Senhora
de Guadalupe, a reflexão de Lc 1 (`src/reflexoes/dados/LUK-1.ts`), as
orações do devocionário (`src/oracao/devocionario/santos-4.ts`) e os títulos
das imagens (`imagens-commons.json`).

Só busca (o nome que aparece não mudou): "Madre Teresa" em Santa Teresa de
Calcutá, "Irmã Dulce" em Santa Dulce dos Pobres, "Martinho de Porres" em São
Martinho de Lima.

## Conferidos e mantidos

- Já corretos: São Charbel Makhluf, Santa Faustina Kowalska, São Josemaría
  Escrivá, São Carlo Acutis, São Pier Giorgio Frassati, Santa Gianna Beretta
  Molla, São José Sánchez del Río (com "Joselito" na busca), Santa Josefina
  Bakhita, Santa Teresa de Calcutá, São João Paulo II, São João XXIII, São
  Paulo VI, São Charles de Foucauld, Santa Bernadette Soubirous.
- São Maximiliano Maria Kolbe: é o nome do calendário litúrgico; "Kolbe" e
  "Maximiliano" já acham.
- Santo Óscar Romero: "Santo" antes de vogal (como Santo Alberto Hurtado).
  "São Óscar Romero" também se usa muito no Brasil.
- Beata Paulina Jaricot: a mensagem do papa às Pontifícias Obras
  Missionárias em português (2022) usa "Paulina".
- Nomes do calendário traduzidos pela liturgia brasileira (São Pio de
  Pietrelcina, Santa Teresa Benedita da Cruz, Santo Antônio de Sant'Ana
  Galvão, São João Maria Vianney) ficam: o nome popular (Padre Pio, Edith
  Stein, Frei Galvão, Cura d'Ars) já está no resumo ou em `nomes`.
- Santa Kateri Tekakwitha não está no acervo.
