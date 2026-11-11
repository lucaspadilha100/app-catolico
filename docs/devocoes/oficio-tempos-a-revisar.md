# Pequeno Ofício: Advento e Natal (a revisar pelo dono)

O Pequeno Ofício de Nossa Senhora (`src/devocao/oficio.ts`) ganhou as duas
variações próprias do Officium Parvum tradicional. A forma "durante o ano"
continua a mesma, sem nenhuma mudança de texto (conferido por comparação do
conteúdo antes e depois).

Todo texto novo foi traduzido do latim por nós. As leituras (lições e
capítulos) saem da nossa Bíblia, pelo bloco `leitura`, como as demais.

## Regra das datas (`src/devocao/tempo-do-oficio.ts`)

| Tempo | De | Até |
|---|---|---|
| Advento | Vésperas do sábado antes do 1º domingo do Advento | Noa de 24 de dezembro |
| Natal | Vésperas de 24 de dezembro | 2 de fevereiro, inclusive (todas as horas) |
| Durante o ano | 3 de fevereiro | Noa do sábado antes do Advento |

- O Advento começa nas **Vésperas do sábado** porque o domingo litúrgico começa
  nas primeiras Vésperas. Ex.: 2026, 1º domingo do Advento em 29/11; no sábado
  28/11, Laudes e Noa ainda são "durante o ano", Vésperas e Completas já são
  Advento.
- O Natal começa nas Vésperas da Vigília (24/12) e vai até a Purificação
  (2/2). Em 2/2 todas as horas usam o Natal; a Ave, Rainha dos céus começa em
  3/2, como já dizia a rubrica do app.
- A hora decide: na lista das horas, o subtítulo mostra o tempo da hora do
  momento ("Agora"); dentro da hora, o tempo daquela hora.
- Testado com datas de 2025, 2026 e 2027 (`devocoes.node.test.ts`, "tempo do
  Pequeno Ofício").

## Fontes latinas

Textos latinos tirados do Divinum Officium (projeto de código aberto, textos do
Breviário em domínio público), arquivos `web/www/horas/Latin/`:

- `Commune/C12.txt`: o Ofício Parvo durante o ano.
- `Commune/C12A.txt`: Advento (e Anunciação).
- `Commune/C12N.txt`: Natal até a Purificação.
- `Sancti/03-25.txt` (Anunciação): antífonas, capítulos, responsórios 1 e 2.
- `Sancti/01-01.txt` (Oitava do Natal): antífonas, oração.
- `Tempora/Adv1-0.txt` (antífona "Spiritus Sanctus in te descendet"),
  `Tempora/Adv1-1.txt` (responsório "Suscipe verbum").
- `Psalterium/Mariaant.txt`: Alma Redemptoris Mater com versículo e oração.
- A regra das datas: `web/cgi-bin/horas/horascommon.pl` (redireciona para C12N
  de 24/12 nas Vésperas até 2/2, e para C12A nos dias do Advento).

Vale conferir com um Officium Parvum impresso (edições de 1950 a 1962), porque
o Divinum Officium é transcrição digital.

## O que muda em cada hora

### Advento

| Hora | O que muda |
|---|---|
| Matinas | Sem Te Deum. Lições: Lc 1,26-28; 1,29-33; 1,34-38. Responsórios próprios (abaixo). No 3º noturno (quarta e sábado), a 3ª antífona "Depois do parto" vira "O Anjo do Senhor anunciou a Maria, e ela concebeu do Espírito Santo". |
| Laudes | Antífonas da Anunciação; capítulo Is 11,1-2; Benedictus com "O Espírito Santo descerá sobre ti"; antífona final Alma Redemptoris. |
| Prima | Antífona 1; capítulo Is 7,14-15; oração "Ó Deus, que quisestes que o vosso Verbo". |
| Terça | Antífona 2; capítulo Is 11,1-2; mesma oração. |
| Sexta | Antífona 3; capítulo Lc 1,32-33; mesma oração. |
| Noa | Antífona 5; capítulo Is 7,14-15; versículo "O Anjo do Senhor anunciou a Maria"; mesma oração. |
| Vésperas | As cinco antífonas da Anunciação; capítulo Is 11,1-2; Magnificat com "O Espírito Santo descerá sobre ti"; mesma oração. |
| Completas | Capítulo Is 7,14-15; versículo "O Anjo do Senhor"; Nunc dimittis com "O Espírito Santo descerá sobre ti"; mesma oração; Alma Redemptoris. |

A rubrica da Septuagésima (Louvor a vós, Senhor) não aparece no Advento.

### Natal

| Hora | O que muda |
|---|---|
| Matinas | Nada (Te Deum continua). |
| Laudes | Antífonas "Ó admirável troca"; Benedictus com "Hoje se revela um mistério admirável"; oração "Ó Deus, que pela virgindade fecunda"; Alma Redemptoris. |
| Prima, Sexta, Noa | Antífonas 1, 3 e 5 do Natal; oração "pela virgindade fecunda". |
| Terça | Antífona 2 do Natal (a oração já era essa). |
| Vésperas | As cinco antífonas do Natal; Magnificat com "Grande mistério da herança"; oração "pela virgindade fecunda". |
| Completas | Nunc dimittis com "Grande mistério da herança"; oração "pela virgindade fecunda"; Alma Redemptoris. |

Capítulos e versículos do Natal são os de durante o ano.

## Cada texto próprio (latim e a nossa tradução)

### Antífonas do Advento (Laudes, Vésperas e horas menores)
1. *Missus est Gabriel Angelus ad Mariam Virginem desponsatam Joseph.*
   O anjo Gabriel foi enviado à Virgem Maria, desposada com José.
2. *Ave, Maria, gratia plena; Dominus tecum: benedicta tu in mulieribus.*
   Ave, Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres.
3. *Ne timeas, Maria, invenisti gratiam apud Dominum: ecce concipies et paries filium.*
   Não temas, Maria, achaste graça diante do Senhor: eis que conceberás e darás à luz um filho.
4. *Dabit ei Dominus sedem David, patris ejus, et regnabit in aeternum.*
   O Senhor lhe dará o trono de Davi, seu pai, e ele reinará para sempre.
5. *Ecce ancilla Domini: fiat mihi secundum verbum tuum.*
   Eis aqui a serva do Senhor: faça-se em mim segundo a vossa palavra.

Benedictus, Magnificat e Nunc dimittis: *Spiritus Sanctus in te descendet,
Maria: ne timeas, habebis in utero Filium Dei, alleluia.* O Espírito Santo
descerá sobre ti, Maria: não temas, terás em teu seio o Filho de Deus, aleluia.

3º noturno, 3ª antífona: *Angelus Domini nuntiavit Mariae, et concepit de
Spiritu Sancto.* O Anjo do Senhor anunciou a Maria, e ela concebeu do Espírito
Santo.

### Responsórios das Matinas do Advento
1. *Missus est Gabriel Angelus ad Mariam Virginem desponsatam Joseph, nuntians
   ei verbum; et expavescit Virgo de lumine: ne timeas, Maria, invenisti gratiam
   apud Dominum: Ecce concipies et paries, et vocabitur Altissimi Filius. V.
   Dabit ei Dominus Deus sedem David, patris ejus, et regnabit in domo Jacob in
   aeternum.*
2. *Ave, Maria, gratia plena; Dominus tecum: Spiritus Sanctus superveniet in
   te, et virtus Altissimi obumbrabit tibi: quod enim ex te nascetur Sanctum,
   vocabitur Filius Dei. V. Quomodo fiet istud, quoniam virum non cognosco? Et
   respondens Angelus, dixit ei.*
3. *Suscipe verbum, Virgo Maria, quod tibi a Domino per Angelum transmissum
   est: concipies et paries Deum pariter et hominem, Ut benedicta dicaris inter
   omnes mulieres. V. Paries quidem filium, et virginitatis non patieris
   detrimentum: efficieris gravida, et eris mater semper intacta.* Com Glória ao
   Pai (como na Anunciação, 03-25), por ser o último responsório.

### Antífonas do Natal (Laudes, Vésperas e horas menores)
1. *O admirabile commercium: Creator generis humani, animatum corpus sumens, de
   Virgine nasci dignatus est; et procedens homo sine semine, largitus est nobis
   suam Deitatem.*
2. *Quando natus es ineffabiliter ex Virgine, tunc impletae sunt Scripturae:
   sicut pluvia in vellus descendisti, ut salvum faceres genus humanum: te
   laudamus, Deus noster.*
3. *Rubum, quem viderat Moyses incombustum, conservatam agnovimus tuam
   laudabilem virginitatem: Dei Genitrix, intercede pro nobis.*
4. *Germinavit radix Jesse, orta est stella ex Jacob: Virgo peperit
   Salvatorem; te laudamus, Deus noster.*
5. *Ecce Maria genuit nobis Salvatorem, quem Joannes videns, exclamavit,
   dicens: Ecce Agnus Dei, ecce qui tollit peccata mundi, alleluia.*

Benedictus: *Mirabile mysterium declaratur hodie: innovantur naturae, Deus homo
factus est: id quod fuit permansit, et quod non erat assumpsit; non
commixtionem passus, neque divisionem.*

Magnificat e Nunc dimittis: *Magnum hereditatis mysterium: templum Dei factus
est uterus nescientis virum: non est pollutus ex ea carnem assumens; omnes
gentes venient dicentes: Gloria tibi, Domine.*

### Antífona final (Advento e Natal)
*Alma Redemptoris Mater, quae pervia caeli porta manes, et stella maris,
succurre cadenti, surgere qui curat, populo: tu quae genuisti, natura mirante,
tuum sanctum Genitorem, Virgo prius ac posterius, Gabrielis ab ore sumens illud
Ave, peccatorum miserere.*

- Advento: V. *Angelus Domini nuntiavit Mariae.* R. *Et concepit de Spiritu
  Sancto.* Oração *Gratiam tuam* (tradução própria, próxima da do Ângelus do app).
- Natal: V. *Post partum, Virgo, inviolata permansisti.* R. *Dei Genitrix,
  intercede pro nobis.* Oração *Deus, qui salutis aeternae*, com a conclusão
  breve.

### Orações
- Advento, em todas as horas (Completas inclusive): *Deus, qui de beatae
  Mariae Virginis utero* (a mesma de Laudes durante o ano).
- Natal, em todas as horas (Completas inclusive): *Deus, qui salutis aeternae*
  (a mesma de Terça durante o ano).

## Pontos para conferir
1. **Tu e vós.** As palavras do anjo seguem a nossa Bíblia (Lc 1: "Não temas,
   Maria", "descerá sobre ti"), com "tu". O que se diz a Maria fora da fala do
   anjo (Ave, Maria; Recebei, Virgem Maria) fica com "vós", como no resto do
   Ofício. O responsório 2 junta os dois: "Ave, Maria... o Senhor é convosco. O
   Espírito Santo virá sobre vós", tudo em "vós".
2. **"Serva" ou "escrava".** A antífona 5 do Advento diz "a serva do Senhor",
   como o Ângelus do app; a nossa Bíblia (Lc 1,38) diz "a escrava do Senhor".
3. **Capítulos cortados no meio do versículo.** Is 11,1-2 termina em "o espírito
   do Senhor" e Lc 1,32-33 começa em "O Senhor Deus lhe dará" e termina em "não
   terá fim": como o latim, mas sem ponto final na tela. Is 7,14-15 começa em
   "Eis que uma virgem".
4. **Capítulos do Advento por hora** (Laudes, Terça e Vésperas: Is 11; Prima,
   Noa e Completas: Is 7; Sexta: Lc 1,32-33) seguem o Divinum Officium; conferir
   com um impresso.
5. **"Ó admirável troca"** (*commercium*) e "tomando um corpo dotado de alma"
   (*animatum corpus*): escolhas de tradução.
6. **Não feito:** o Divinum Officium usa a forma do Advento também na festa da
   Anunciação (25 de março). Não entrou: a tarefa era só Advento e Natal, e a
   Anunciação cai quase sempre na Quaresma.
7. **Rubrica da antífona final durante o ano** continua igual (não cita a Alma
   Redemptoris, que agora aparece sozinha no Advento e no Natal).
