# Ofício dos Defuntos (a revisar pelo dono)

`src/devocao/oficio-dos-defuntos.ts`, tela `src/pages/OficioDosDefuntos.tsx`
(rota prevista: `/rezar/oficio-dos-defuntos`). Forma tradicional do Breviário
Romano (Officium Defunctorum), com Vésperas, Matinas (três noturnos, nove
lições de Jó) e Laudes.

Todo texto próprio (antífonas, versículos, responsórios, orações, rubricas)
foi traduzido do latim por nós. Os salmos, os cânticos e as lições saem da
nossa Bíblia (Figueiredo revisado), pelo bloco `leitura`, como no Pequeno
Ofício. Nenhuma tradução publicada foi usada.

## Fontes latinas

Divinum Officium (projeto de código aberto, textos do Breviário em domínio
público), `web/www/horas/Latin/`:

- `Commune/C9.txt`: o Ofício dos Defuntos inteiro (antífonas, versículos dos
  noturnos, as nove lições, os responsórios 1 a 9 e o "91", as orações
  "Fidelium", "Absolve" e "Deus indulgentiarum", a conclusão).
- `Psalterium/Common/Prayers.txt`: "A porta inferi", "Requiescant", "Requiem",
  "Deus veniae largitor", "Pater noster Et".
- `Sancti/11-02.txt` (Dia de Finados): confirma o responsório 9 "Libera me de
  morte aeterna" com os três noturnos e Matinas sem Te Deum.
- `web/cgi-bin/horas/specmatins.pl`: com um só noturno, o 9º responsório vira
  o "Libera me, Domine, de viis inferni"; a distribuição dos noturnos pelos
  dias (segunda e quinta o 1º, terça e sexta o 2º, quarta e sábado o 3º).
- Oração pelo pai e pela mãe ("Deus, qui nos patrem et matrem honorare
  praecepisti"): Missal Romano, orações diversas pelos defuntos. Não achada nos
  arquivos do Divinum Officium consultados; latim citado de memória do Missal.
  **Conferir num Missal impresso.**

Vale conferir tudo com um Breviário impresso (edições de 1911 a 1962), porque o
Divinum Officium é transcrição digital.

## Forma escolhida

- Salmos de Laudes pela reforma de 1911 (Divino Afflatu): 50, 64, 62, cântico
  de Ezequias, 150. Antes de 1911 o 62 vinha com o 66, e o 150 com o 148 e o 149.
- Matinas trazem os três noturnos inteiros, com a rubrica de rezar um só por
  dia. A tela não escolhe o noturno pelo dia (diferente do Pequeno Ofício).
- Sem "Deus, vinde em meu auxílio", sem hino, sem bênçãos antes das lições, sem
  "E vós, Senhor, tende piedade de nós" depois delas, sem Te Deum: é assim no
  Ofício dos Defuntos.
- O Requiem ("Dai-lhes, Senhor, o descanso eterno. E brilhe para eles a luz
  perpétua.") substitui o Glória ao fim de cada salmo e cântico, inclusive do
  Salmo 94 do invitatório, e entra no 3º, 6º e 9º responsórios.
- Salmo 145 (Vésperas) e Salmo 129 (Laudes) das preces finais: com a rubrica de
  que se omitem no Dia de Finados e, desde 1955, sempre.
- Orações finais: "Fidelium" (por todos os fiéis defuntos) e, como
  alternativas com rubrica, por um só defunto, no aniversário da morte, pelos
  irmãos, parentes e benfeitores, e pelo pai e pela mãe. Faltam as próprias de
  papa, bispo e sacerdote.
- Sem "Senhor esteja convosco" (é do sacerdote), como no Pequeno Ofício.

## Referências bíblicas (numeração hebraica no código, a tela mostra a grega)

| Hora | Trecho |
|---|---|
| Vésperas | Sl 114 (116,1-9), 119 (120), 120 (121), 129 (130), 137 (138); Magnificat; nas preces, Sl 145 (146,2-10) |
| Invitatório | Sl 94 (95), em cinco partes |
| 1º noturno | Sl 5, 6, 7; lições Jó 7,16-21; 10,1-7; 10,8-12 |
| 2º noturno | Sl 22 (23), 24 (25), 26 (27); lições Jó 13,22-28; 14,1-6; 14,13-16 |
| 3º noturno | Sl 39 (40), 40 (41), 41 (42); lições Jó 17,1-3.11-15; 19,20-27; 10,18-22 |
| Laudes | Sl 50 (51,3-21), 64 (65), 62 (63), Is 38,10-20, Sl 150; Benedictus; nas preces, Sl 129 (130) |

- 1ª lição: o Breviário começa em "Parce mihi"; o versículo 16 tem antes
  "Desperavi, nequaquam ultra jam vivam". A leitura usa `inicio: "Poupa-me"`.
- 4ª lição: o Breviário começa em "Responde mihi" (fim do versículo 22). Para
  não abrir com letra minúscula, a leitura traz o versículo 22 inteiro ("Chama-me,
  e eu te responderei; ou então eu falarei, e tu me responderás").
- Sl 150: cortado antes do "Aleluia" final (`fim`), como no Breviário.
- Lições 2, 3 e 9 são uma fala de Jó dentro de outra fala; a nossa Bíblia
  equilibra as aspas (“‘ … ’”).

## Escolhas de tradução

- "Requiem aeternam dona eis, Domine": "Dai-lhes, Senhor, o descanso eterno",
  como pedido. **A oração "Pelos falecidos" do app diz "o eterno descanso".**
  Decidir uma das duas e igualar.
- "A porta inferi, erue, Domine, animas eorum": "Da porta do inferno. Livrai,
  Senhor, as suas almas." "Inferno" aqui é a morada dos mortos (o Hades), como
  no Figueiredo; o mesmo no 7º responsório ("no inferno não há redenção") e no
  responsório "de viis inferni" (a descida de Cristo à mansão dos mortos).
- "Placebo Domino in regione vivorum": "Agradarei ao Senhor na terra dos vivos",
  igual ao Sl 114,9 da nossa Bíblia.
- "Si iniquitates observaveris": "Se observardes as iniquidades, Senhor, Senhor,
  quem poderá se manter de pé?", próximo do nosso Sl 129,3.
- "Regem, cui omnia vivunt": "Ao Rei, para quem todos vivem, vinde, adoremos."
- 2º responsório: "a monumento foetidum" ficou "do sepulcro ... Lázaro, que já
  cheirava mal" (cf. Jo 11,39); "locum indulgentiae", "o lugar do perdão".
- 4º responsório: "Nec aspiciat me visus hominis": "e já não me veja o olhar do
  homem".
- 9º responsório: "dum discussio venerit atque ventura ira": "enquanto não chegam
  o julgamento e a ira que há de vir".
- "Ne tradas bestiis animas confitentes tibi": "as almas que vos louvam"
  ("confiteri" também é confessar).
- "Absolve ... famuli tui N.": "do vosso servo N. (da vossa serva N.)";
  "defunctus saeculo" ficou "tendo deixado este mundo", para servir a homem e a
  mulher.
- "Deus indulgentiarum ... anniversarium depositionis diem": "cujo aniversário de
  sepultamento recordamos". O Divinum Officium traz a forma no plural.
- Antífona do Benedictus (Jo 11,25-26) traduzida do latim do Breviário, não da
  nossa Bíblia, porque é antífona.

## Pontos para o dono conferir

1. Rubrica do invitatório ("no Dia de Finados, no dia da morte ou do
   sepultamento e quando se rezam os três noturnos"): tirada da tradição do
   Breviário, não está no `C9.txt`. Conferir no Breviário impresso.
2. Rubrica dos Sl 145 e 129 nas preces (omitidos no Dia de Finados e, desde
   1955, sempre): vem da condição do Divinum Officium. Conferir.
3. "Descanso eterno" x "eterno descanso" (ver acima).
4. Oração pelo pai e pela mãe: latim citado de memória do Missal.
5. Conclusão das Matinas quando as Laudes não se seguem (Senhor, ouvi; Fidelium;
   Requiem; Descansem em paz): pelo `11-02.txt` ("Oratio Matutinum").
