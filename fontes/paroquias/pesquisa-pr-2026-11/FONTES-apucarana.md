# Diocese de Apucarana (PR): fontes da pesquisa de 13/11/2026

Sé em Apucarana, norte central do Paraná; sufragânea de Londrina. Sé vacante
desde 04/11/2026 (Dom Carlos José de Oliveira foi para Limeira). Cúria: Rua
José Miskowski, 240, Jardim Malibu, Apucarana, (43) 3423-1428,
contato@diocesedeapucarana.com.br. Padroeira: Nossa Senhora de Lourdes.

## Resumo

- **62 unidades** em `saida/apucarana.json`: 1 catedral (Catedral Basílica
  Nossa Senhora de Lourdes) e 61 paróquias, em 6 decanatos (Apucarana, Centro,
  Centro Norte, Norte, Centro Sul, Sul), 36 municípios.
- **55 com horário de missa** (54 com confiança alta, 1 média), 7 sem horário
  (confiança baixa; lista em `SEM-HORARIO-apucarana.txt`).
- A média é São Francisco de Assis (Califórnia): a página ainda fala de uma
  missa "do período de pandemia" (não incluída).
- Paróquias cuja matriz é santuário entraram como `paroquia` com a primeira
  igreja de tipo `santuario`: Santa Rita de Cássia (Lunardelli), Nossa Senhora
  Aparecida (Arapongas, Palotinos), Santíssima Trindade e Santuário Divino Pai
  Eterno (Arapongas), Santuário São José (Apucarana) e São Sebastião (Astorga,
  matriz Santuário Nossa Senhora Aparecida).
- 30 capelas/comunidades, só onde a fonte dá nome e lugar. As citadas sem
  lugar ficaram no `nao_cabe` da matriz, com o horário.
- Distritos: Pirapó (Apucarana), Jacutinga (Ivaiporã), Aricanduva (Arapongas)
  entraram com a cidade do município e o distrito em `localidade`.
- Todo `id_banco` é null.

## Lista das unidades

Da página "Paróquias" do site da diocese
(https://diocesedeapucarana.com.br/paroquias), batida com os filtros por
decanato (6 decanatos somam as mesmas 63 entradas). O site diz "62 paróquias"
em https://diocesedeapucarana.com.br/historico-diocese e
https://diocesedeapucarana.com.br/mapa-diocese. A 63ª entrada é a "Igreja
Espírito Santo, Rito Ucraniano" (Rua Osório Ribas de Paula, 1534, Apucarana):
ficou fora, porque é da Eparquia Ucraniana São João Batista (o GCatholic a
lista à parte, "Ukrainian").

Conferência com o GCatholic (https://gcatholic.org/churches/local/apuc0,
atualizado em 09/11/2026, 64 paróquias):

- No GCatholic e não no site da diocese: São Sebastião (Apucarana), Sagrado
  Coração de Jesus (Colônia Esperança), São Pedro (Miquelão) e Santa Luzia
  (Santa Luzia da Alvorada). O filtro de cidades do site tem "Colônia
  Esperança", "Distrito Caixa São Pedro" e "Santa Luzia da Alvorada", sem
  paróquia ligada. A página da Santa Rita de Arapongas cita o "curato do
  Sagrado Coração de Jesus da Colônia Esperança". Pendência: não entraram
  (a diocese conta 62).
- No site e não no GCatholic: Nossa Senhora do Bom Conselho e São Miguel
  Arcanjo (ambas em Apucarana; a São Miguel teve a primeira missa e a posse
  do pároco em 01/03/2026) e Nossa Senhora do Rocio (Jardim Alegre).
- "Bom Jesus, Arapongas" do GCatholic é a Senhor Bom Jesus do Distrito de
  Aricanduva; "Nossa Senhora de Lourdes, Ivaiporã" é a do Distrito de
  Jacutinga; "Santo Antônio de Pádua, Pirapó" é a do Distrito do Pirapó.

## Fontes de horário e contato

- Uma página por paróquia no site da diocese (63 páginas lidas em
  13/11/2026), com decanato, endereço, telefones, e-mail, horário de missas e
  histórico. URLs no campo `fontes` de cada item; exemplos:
  - https://diocesedeapucarana.com.br/paroquias/catedral-basilica-menor-nossa-senhora-de-lourdes
  - https://diocesedeapucarana.com.br/paroquias/paroquia-sao-benedito
- Site do Santuário Nossa Senhora Aparecida de Arapongas, citado pela
  diocese: https://santuarioarapongas.com.br/horarios (cadastro de horários
  atualizado em 29/09/2026, com missas, confissões e adoração). Difere da
  página da diocese nas missas da noite (19h30, não 19h) e no número do
  endereço (1201, não 1195); seguimos o site do santuário.
- Site do Santuário de Astorga (santuarioastorga.com.br, citado pela diocese,
  redireciona para santuarioaparecidaastorga.com.br): páginas "Secretaria"
  (missas e confissões do santuário, missas das comunidades) e "Comunidades".
  As duas divergem no domingo à noite da Comunidade São Luiz e Santa Zélia
  (19h ou 19h30): ficou no `nao_cabe`.
- Telefones e e-mails só os institucionais da página de cada paróquia. Números
  publicados sem DDD receberam o DDD da região, o mesmo que a própria página
  usa nos outros números. O telefone publicado para São Pedro Apóstolo (Mauá
  da Serra) é o mesmo da Catedral e ficou de fora.

## Instagram

As páginas da diocese só trazem os perfis da própria diocese
(instagram.com/dioceseapucarana). Os dois perfis do JSON vieram dos sites
próprios dos santuários: santuario.arapongas e santuarioastorga.

## Sites próprios citados que não ajudaram

- www.santaritalunardelli.com.br: o item "Missas" leva a uma página sem
  horário.
- www.imaculadaborrazopolis.com.br e www.paroquiadesantafe.com.br: erro de
  certificado.
- www.paroquiasaojosedecambira.com e www.trindadearapongas.com: não abriram.
- www.paroquiacristoprofeta.com.br: modelo de site sem dados reais.

## O que falta para o próximo estado

- Horário das 7 sem horário: Santa Rita (Lunardelli), Imaculada Conceição
  (Borrazópolis), N. S. Aparecida (Cruzmaltina), N. S. de Lourdes (Jacutinga),
  Santo Antônio (Pitangueiras), São José (Arapuã), São José (Cambira).
- Confissões: só Arapongas (Santuário) e Astorga publicam.
- Endereço das capelas citadas só pelo nome (ver `nao_cabe` das matrizes) e
  da matriz provisória da São Miguel Arcanjo (Capela Santa Edwiges).
- Decidir as 4 paróquias que só o GCatholic lista (acima).
