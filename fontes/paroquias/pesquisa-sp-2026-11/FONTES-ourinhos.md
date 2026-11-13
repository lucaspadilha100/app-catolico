# Diocese de Ourinhos (SP): fontes da pesquisa de 13/11/2026

Sé em Ourinhos; Médio Paranapiranema, na divisa com o Paraná. Cúria: Rua
Arlindo Luz, 442, Centro, Ourinhos, (14) 3322-4929,
diocesedeourinhos@hotmail.com (página Contato do site da diocese).
Catedral do Senhor Bom Jesus (festa do padroeiro em 4 de agosto, diz a
página da paróquia).

## Resumo

- **44 unidades pastorais** em `saida/ourinhos.json`: 1 catedral e 43
  paróquias, em 4 foranias. Ourinhos (14 unidades, com Canitar, Chavantes e
  Salto Grande), Ocauçu (8: Alvinlândia, Campos Novos Paulista, Ibirarema,
  Lupércio, Ocauçu, Ribeirão do Sul, São Pedro do Turvo, Ubirajara), Piraju
  (12: Fartura 2, Manduri, Óleo, Piraju 4, Sarutaiá, Taguaí, Tejupá,
  Timburi) e Santa Cruz do Rio Pardo (10: Bernardino de Campos, Espírito
  Santo do Turvo, Ipaussu e 7 em Santa Cruz do Rio Pardo).
- **2 com horário de missa** (confiança alta), os dois publicados pelo site
  da própria paróquia: São Benedito e Santuário N. S. do Rosário de Fátima,
  ambos em Santa Cruz do Rio Pardo, com confissões.
- **42 sem horário** (`"horarios": []`, confiança baixa). O site da diocese
  tem uma página por paróquia com endereço, telefone, e-mail, redes, data de
  fundação, festa do padroeiro, capelas e história, mas nenhuma traz horário
  de missa. A única página de horários da diocese
  (https://diocesedeourinhos.com.br/horarios/, editada em 23/12/2025) é a
  programação de Natal e Ano Novo (24/12, 25/12, 31/12 e 01/01): não entrou
  como horário regular. As buscas por Instagram e Facebook das paróquias
  só mostraram endereços ou eventos avulsos.
- Três paróquias têm a matriz santuário e entraram como `paroquia` com a
  primeira igreja de tipo `santuario`: N. S. de Guadalupe e N. S. Aparecida
  do Vagão Queimado (Ourinhos) e N. S. do Rosário de Fátima (Santa Cruz do
  Rio Pardo, frades dominicanos). A Paróquia Santo Antônio de Ourinhos tem
  ainda o Santuário Paroquial Santa Maria Redenção da Família (Vila Santa
  Maria), que entrou como segunda igreja.
- Capelas e comunidades: as que a página de cada paróquia lista em
  "Capelas pertencentes", com o bairro ou sítio quando a página dá. Tejupá
  tem mais 13 comunidades rurais sem nome; São Pedro do Turvo cita três
  comunidades sem padroeiro (no `nao_cabe`); Bernardino de Campos cita
  quatro capelas sem lugar (no `nao_cabe`). Os lugares das duas capelas de
  Tejupá (Taquaras e Ribeirão Bonito) vêm da programação de Natal.
- Todo `id_banco` é null. Nenhuma cidade fica fora de SP: as paróquias da
  margem paranaense do rio são da Diocese de Jacarezinho (PR).

## Lista das unidades

A lista vem das quatro páginas de forania do site da diocese, cada uma com
as paróquias e a cidade, batidas com as 44 páginas de paróquia (lidas pela
API do WordPress do site, `wp-json/wp/v2/pages`).

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026: "44
parishes", 46 igrejas): bate nas 44. As duas igrejas a mais do GCatholic
são capelas para a diocese: Sagrado Coração de Jesus de Campos Novos
Paulista (capela da Paróquia São José) e a Capela N. S. de Fátima de
Ourinhos (do Vagão Queimado). Divergências:

- **Taguaí**: o GCatholic registra a igreja como Nossa Senhora Aparecida; a
  diocese dá Paróquia Santa Rita de Cássia (festa em 22 de maio). Seguimos a
  diocese.
- **Vagão Queimado**: o GCatholic dá o nome alternativo "Paróquia São
  Pedro"; a diocese não usa esse nome.

Cidades das outras pesquisas de SP: nenhuma cidade desta diocese aparece em
outro arquivo de `saida/`, e nenhuma fonte desta diocese cita cidade já
pesquisada.

## Páginas lidas (13/11/2026)

- https://diocesedeourinhos.com.br/forania-de-ourinhos/,
  /forania-de-ocaucu/, /forania-de-piraju/,
  /forania-de-santa-cruz-do-rio-pardo/ (a lista)
- Uma página por paróquia (URLs no campo `fontes` de cada item), por
  exemplo https://diocesedeourinhos.com.br/paroquia-catedral-senhor-bom-jesus/
  e https://diocesedeourinhos.com.br/paroquia-santuario-nossa-senhora-de-guadalupe/
- https://diocesedeourinhos.com.br/contato/ (cúria)
- https://diocesedeourinhos.com.br/horarios/ (Natal e Ano Novo 2025; só
  para nomes e lugares de capelas)

## Sites das paróquias

- https://saobeneditoscrp.com.br/ (página inicial com missas e confissões
  da matriz, da Capela Santa Cruz e da Capela São Joaquim e Sant'Ana)
- https://www.santuarionsfatima.com.br/horarios (missas de segunda a
  domingo, missa votiva de todo dia 13 e confissões)
- https://paroquiasantoantonioscrpardo.blogspot.com/ (blog da Santo Antônio
  de Pádua, Santa Cruz do Rio Pardo; sem horários)
- Não responderam: https://www.igrejamatrizsaosebastiao.com.br/ (São
  Sebastião, Santa Cruz do Rio Pardo) e www.santoantonioourinhos.com (Santo
  Antônio, Ourinhos), os dois citados pela diocese.

## Contatos

- Telefone, e-mail e Instagram vêm da página de cada paróquia no site da
  diocese. Quando a página dá dois números, o primeiro entrou em
  `telefone` e o outro ficou na observação (a página não diz se é WhatsApp).
- Números publicados com erro ficaram fora do campo e foram copiados na
  observação: Timburi ("(14) 99616-58286", um dígito a mais) e o fixo de São
  Pedro do Turvo ("(14) 3377-110", um a menos).
- O e-mail da São José de Santa Cruz do Rio Pardo termina em `sapo.pt`,
  como a diocese publica.
- Instagram (das páginas da diocese): santuarioguadalupeouri,
  santoantonioourinhos, santuariodovagao, perpetuosocorroourinhos,
  saoluizgonzagaourinhos (Ourinhos), paroquia_sao_jose_cnpta,
  pnsl_ibirarema, paroquia_saopedro.spt, pnsadasdores, nsfatimafartura,
  saofranciscopiraju, nossasenhoraaparecidapiraju, staritataguai,
  matriz.saosebastiao, SaoBeneditoSCRP, nossa_senhora_aparecidasantacr,
  paroquiasantoantonioscrp, nsdasgracasscrp, saojosescrp,
  santuarionsrdefatima. O da Catedral (catedralourinhos) veio do resultado
  da busca. Nenhum perfil foi aberto por dentro.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/ouri0 e
  https://gcatholic.org/dioceses/diocese/ouri0.htm (anuário, 09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Horário de missa de 42 paróquias: a diocese não publica, e a maioria só
  tem Facebook (não lido). A Catedral, o Vagão Queimado e várias outras
  aparecem em sites agregadores de horário de missa, que não são fonte da
  paróquia e não foram usados.
- As 13 comunidades rurais de Tejupá e as comunidades sem nome ou sem lugar
  de São Pedro do Turvo, Bernardino de Campos e Fartura (N. S. de Fátima).
- O telefone de Santa Edwiges (Ourinhos): a página da diocese não traz.
