# Diocese de Erexim (RS): fontes da pesquisa de 13/11/2026

Sé em Erechim (a cidade se escreve com "ch"; a diocese, com "x"); Alto
Uruguai gaúcho. Sufragânea de Passo Fundo. Bispo: Dom Adimir Antônio Mazali.
Cúria: Avenida Sete de Setembro, 1251, Fátima, Erechim, (54) 3522-3611,
curia@diocesedeerexim.org.br. Site: https://diocesedeerexim.org.br/

## Resumo

- **31 unidades** em `saida/erexim.json`: 1 catedral (São José), 29
  paróquias e o Santuário diocesano Nossa Senhora de Fátima (Erechim), que
  não é paróquia mas tem missa diária. Em 7 áreas pastorais: Erechim (7
  paróquias e o santuário), Aratiba (4), Gaurama (5), Getúlio Vargas (3),
  Jacutinga (4), São Valentim (4) e Severiano de Almeida (3).
- **28 com horário de missa**: 23 alta, 5 média (Santuário de Fátima, página
  de março de 2025; Marcelino Ramos, sem missa de domingo publicada;
  Benjamin Constant do Sul, só domingo; São Caetano e Santa Isabel da
  Hungria, ver abaixo). **3 sem horário**: Viadutos, Capo-Erê e Mariano Moro.
- Adoração fixa: Salette (quinta, com a missa), Marcelino Ramos (quinta 17h),
  São Valentim (1ª sexta). Adorações perpétuas mensais (dia fixo do mês) no
  `nao_cabe`. Nenhuma paróquia publica confissão com horário.
- **37 igrejas além das matrizes**: capelas e comunidades de São Caetano
  (14), São Valentim (13), Santa Isabel da Hungria (6), as igrejas de
  Erebango e Ipiranga do Sul (Paróquia Santa Teresinha de Estação, com
  horários), a Gruta N. S. de Lourdes (Paulo Bento) e o Santuário Santa Cruz
  (Catedral, sem horário).
- Todo `id_banco` é null.

## Fontes (lidas em 13/11/2026)

- As paróquias são posts do WordPress nas categorias "AP Erechim", "AP
  Aratiba" etc. (uma por área pastoral):
  https://diocesedeerexim.org.br/wp-json/wp/v2/posts?categories=53,54,55,56,57,58,59
  (30 posts, atualizados entre novembro de 2025 e novembro de 2026; a data de
  cada um está no `fontes` do JSON).
- Santuário de Fátima: https://diocesedeerexim.org.br/santuario/ e
  https://diocesedeerexim.org.br/horarios-de-missa-santuario/.
- https://diocesedeerexim.org.br/santuarios/ (três santuários: N. S. do
  Rosário de Fátima, N. S. da Santa Cruz, N. S. da Salette).
- Informativos semanais das paróquias (categoria "Informativo Paroquial"):
  - Santa Isabel da Hungria (Três Arroios), PDF de 06/11/2026 com a
    programação de novembro: domingo 9h na matriz, 1ª sexta 15h; sábado 18h
    só em alguns sábados. A página da paróquia não traz horários; confiança
    média.
  - São Caetano (Severiano de Almeida), 07/11/2026: confirma domingo 9h (a
    página diz "8h; a partir de 12/04/2026, 9h").

## Conferência da lista

- GCatholic, https://gcatholic.org/churches/local/erex0 (09/11/2026): 30
  paróquias e os santuários de Fátima (Erechim) e da Salette (Marcelino
  Ramos). Bate com os 30 posts. O GCatholic dá a matriz da Paróquia São
  Francisco de Assis (Erechim) como Nossa Senhora Aparecida.
- Sede Dourado e Capo-Erê são distritos; entraram como cidade, como fazem a
  diocese e o GCatholic.

## Pendências de capelas

- Santuário Nossa Senhora da Salette (Marcelino Ramos): sem paróquia
  indicada pela diocese nem horário; não entrou (anotado na observação de
  São João Batista de Marcelino Ramos).
- Santuário Santa Cruz: entrou como igreja da Catedral porque um vigário da
  Catedral é o capelão; sem endereço nem horário.
- Endereço do Santuário de Fátima: a página não dá; o cabeçalho do site traz
  o da cúria (Av. Sete de Setembro, 1251, bairro Fátima), que não usamos.

## Instagram (citados nas páginas da diocese)

catedralerexim, nossasenhoraaparecidadeerechim, paroquia_santaluzia.atlantico,
psc.saocristovao, paroquia_salete, paroquiasaopedro.erechim, pic.gv,
santaterezinhaestacao, paroquia.capoere, psjb_marcelino,
paroquia_santaana1925, paroquiasaovalentim_rs, paroquianossasenhoradorosario,
paroquia.ervalgrande, paroquiasaoroque_bcs.

## O que falta para o próximo estado

- Horários de Viadutos (Facebook facebook.com/Viadtos), Capo-Erê
  (instagram paroquia.capoere) e Mariano Moro (facebook.com/saofranciscomarianomoro).
- Missa de domingo em Marcelino Ramos (a página não traz).
- Horários das capelas: as paróquias anunciam semana a semana, sem grade fixa.
