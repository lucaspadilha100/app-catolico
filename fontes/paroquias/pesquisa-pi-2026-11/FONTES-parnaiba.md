# Diocese de Parnaíba (PI): fontes da pesquisa de 13/11/2026

Sé em Parnaíba; litoral e norte do Piauí, 29 municípios. Bispo: Dom
Edivalter Andrade. Cúria: Rua Josias Moraes, 676, Centro, Parnaíba, Caixa
Postal 70, CEP 64.218-440, (86) 9 9406-0604 (telefone e WhatsApp),
diocesedeparnaibapi@gmail.com. Padroeira: Nossa Senhora Mãe da Divina Graça.

## Resumo

- **43 unidades pastorais** em `saida/parnaiba.json`: 1 catedral, 40
  paróquias, 1 área pastoral (Santa Isabel, Parnaíba) e 1 santuário (Mãe dos
  Pobres e Senhora do Piauí, Ilha Grande), em 4 zonais: Norte I (14), Norte
  II (7), Sul I (13) e Sul II (9).
- **Nenhuma com horário**: todas entraram com `"horarios": []` e confiança
  baixa (regra do dono). As páginas de paróquia que conseguimos ler só trazem
  pároco, endereço, telefone, e-mail, secretaria e Instagram. Ver
  "Dificuldades".
- Contatos e Instagram de todas as 43 vieram das páginas da própria diocese.
- Uma única lista de comunidades com lugar: a da nova Paróquia São Francisco
  de Assis de Piripiri (19 comunidades, da notícia da ereção canônica).
- Todo `id_banco` é null.

## Dificuldades

- **diocesedeparnaiba.org.br** (e www.) responde com o "Vercel Security
  Checkpoint" (HTTP 429, desafio em JavaScript) para qualquer caminho, até
  robots.txt e sitemap. Não foi contornado. Pela busca, esse domínio tem hoje
  um site novo com `/paroquias` ("36 paróquias encontradas") e páginas como
  `/paroquias/parquia-nossa-senhora-de-ftima`; é ali que podem estar os
  horários. Conferir num navegador.
- O mesmo site da diocese continua publicado na plataforma Ofertório em
  **https://diocesedeparnaiba.app.ofertorio.com/** (os links internos apontam
  para www.diocesedeparnaiba.org.br; notícias até setembro de 2026). Foi daí
  que vieram a lista e os contatos.
- Instagram e Facebook das paróquias não foram abertos por dentro, e a busca
  não devolveu trecho com horário. Agregadores (horariodemissa,
  buscamissa, horariodemissahoje) aparecem na busca e não foram usados.
- Sites próprios citados (paroquiadefatimaphb.com, paroquiadefatimaphb.blogspot.com)
  não resolvem no ambiente; catedralphb.wordpress.com parou em 2020.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese
(https://diocesedeparnaiba.app.ofertorio.com/paroquia/), por zonal, batida
com a página de cada unidade e com as notícias de criação:

- Morro do Chapéu do Piauí: Área Pastoral São Francisco das Chagas elevada a
  paróquia em 17/09/2025 (notícia de 18/09/2025; o Zonal Sul II passou a 9
  paróquias).
- Piripiri: Paróquia São Francisco de Assis erigida em 01/02/2026,
  desmembrada da N. S. dos Remédios (notícia de 03/02/2026).
- Cajueiro da Praia: Área Pastoral Sagrado Coração de Jesus elevada a
  paróquia em 11/02/2026 (notícia de 12/02/2026).

A página "Quem somos" ainda diz "03 Áreas Pastorais, 40 paróquias, 1
santuário": é anterior a essas três mudanças. Hoje: 41 paróquias contando a
Catedral, 1 área pastoral e 1 santuário.

Conferência contra o GCatholic (09/11/2026, 42 igrejas, zonas Norte, Sul I e
Sul II): bate em 40 unidades. Faltam no GCatholic a Área Pastoral Santa
Isabel, a Paróquia Sagrado Coração de Jesus de Cajueiro da Praia e a São
Francisco de Assis de Piripiri. O GCatholic junta Norte I e Norte II numa
zona "Norte" e ainda marca Morro do Chapéu como igreja sem paróquia.

Matrizes que são santuário: São Francisco de Assis de Lagoa de São Francisco
(GCatholic: "Shrine, Parish"; endereço "Praça Santuário São Francisco"),
entrada como `paroquia` com a matriz de tipo `santuario`. O Santuário Mãe dos
Pobres e Senhora do Piauí (Ilha Grande) é unidade própria na lista da
diocese, com reitor, mas com o mesmo endereço e telefone da Paróquia N. S.
da Conceição de Ilha Grande.

## Páginas do site da diocese (lidas em 13/11/2026, endereço Ofertório)

- https://diocesedeparnaiba.app.ofertorio.com/paroquia/ (a lista por zonal)
- Uma página por unidade (URLs no campo `fontes` de cada item, com a data de
  modificação da página). A da Paróquia Sagrado Coração de Jesus de Parnaíba
  tem link quebrado na lista; a página existe em
  https://diocesedeparnaiba.app.ofertorio.com/paroquia-sagrado-coracao-de-jesus-parnaiba/
- https://diocesedeparnaiba.app.ofertorio.com/historico-da-diocese/ (Quem somos)
- https://diocesedeparnaiba.app.ofertorio.com/feed/ (28 páginas de notícias,
  2024 a 2026), em especial:
  - https://diocesedeparnaiba.app.ofertorio.com/2025/09/18/diocese-de-parnaiba-ganha-nova-paroquia-em-morro-do-chapeu/
  - https://diocesedeparnaiba.app.ofertorio.com/2026/02/03/diocese-de-parnaiba-celebra-erecao-canonica-da-paroquia-sao-francisco-de-assis-em-piripiri/
  - https://diocesedeparnaiba.app.ofertorio.com/2026/02/12/diocese-de-parnaiba-eleva-area-pastoral-sagrado-coracao-de-jesus-a-paroquia-em-cajueiro-da-praia/

## Contatos: o que ficou de fora ou como publicado

- Cajueiro da Praia: a página traz endereço com CEP de Parnaíba (o mesmo da
  São João XXIII) e o telefone da Área Pastoral Santa Isabel; parece cópia,
  ficou só o Instagram.
- E-mails inválidos deixados de fora: Catedral (divinagraça.phb@hotmail.com,
  com cedilha) e Santa Dorotéia (…@gmai.com).
- Quando há dois telefones, o primeiro fixo entrou em `telefone` e o outro
  foi para a observação; WhatsApp só onde a página diz WhatsApp (Fátima,
  Sagrado Coração de Parnaíba, Milton Brandão).
- Paróquia Sagrado Coração de Jesus de Parnaíba: o Instagram publicado é o da
  Pascom (`pascompscjofc`).

## Pendências

- Capelanias listadas sem paróquia: Capela de Santo Antônio (Colégio Nossa
  Senhora das Graças), Praça Santo Antônio, 802, Centro, Parnaíba; Capela da
  Santa Casa de Misericórdia, Praça Antônio Monte, 1080, Parnaíba (telefone
  (86) 3322-4121). Ficaram fora do JSON até a diocese dizer a que paróquia
  pertencem.
- Horários de todas as 43 unidades: ler o site novo em
  diocesedeparnaiba.org.br num navegador, ou os perfis de Instagram anotados
  no JSON.
- Comunidades das demais paróquias: a diocese não as lista.
