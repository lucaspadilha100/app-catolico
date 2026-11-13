# Diocese de Miracema do Tocantins (TO): fontes da pesquisa de 13/11/2026

Sé em Miracema do Tocantins; centro-norte do Tocantins, província de Palmas.
Bispo: Dom Philip Dickmans (desde 2008). Cúria: Praça Derocy Moraes, 123,
Centro, Miracema do Tocantins, (63) 3366-2285; o site da diocese dá o fone
(63) 99957-9384, diocesedemiracema@gmail.com e pascom.miracematins@gmail.com
(Pascom). Instagram da diocese: diocesedemiracemadotocantins (bio: "22
Paróquias e 1 Área Missionária").

## Resumo

- **25 unidades pastorais** em `saida/miracema.json`: 1 catedral (que é
  paróquia), 21 paróquias e 3 áreas missionárias, em 4 regiões pastorais
  (São Mateus, São Marcos, São Lucas e São João).
- **Nenhuma com horário.** Nem o site da diocese, nem as páginas e perfis
  encontrados das paróquias publicam horário de missa, confissão ou adoração.
  Pela regra do dono, todas entram com `horarios: []`, confiança baixa e o
  porquê na observação. Endereço, telefone e e-mail institucionais vieram
  das páginas da própria diocese, uma por paróquia, lidas em 13/11/2026.
- Todo `id_banco` é null: o banco não tem nada do Tocantins.

## Lista das unidades

A lista vem das 4 páginas de região pastoral do site da diocese (22 itens:
21 paróquias + a Área Missionária de Juarina), mais 2 áreas missionárias
criadas em 2024 que aparecem DENTRO das páginas das paróquias que as
administram: Nossa Senhora das Graças em Itaporã do Tocantins (13/06/2024,
na página de Colméia) e Nossa Senhora do Perpétuo Socorro em Brasilândia do
Tocantins (08/05/2024, na página de Presidente Kennedy).

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 20
igrejas): bate nas 20; o anuário não traz as unidades mais novas (Goianorte,
Rio dos Bois e as 3 áreas missionárias). A soma do site (22 paróquias + 1
área missionária) é a mesma da bio do Instagram da diocese; as 2 áreas de
2024 ficam fora dessa conta.

A página de Juarina avisa ainda: "aprovada pelo conselho, a ser criada:
Área Missionária Indígena Krâno". Não entrou no JSON (ainda não existe).

## Site da diocese (lido em 13/11/2026)

⚠️ A home de https://diocesedemiracemato.org.br responde com o site da
Diocese de Cristalândia (mesmo servidor); as páginas internas `/conteudo/...`
são as da diocese de Miracema e funcionam normalmente.

- https://diocesedemiracemato.org.br/conteudo/paroquias/3 (índice)
- Regiões: /conteudo/01-regiao-pastoral-sao-mateus/121 ·
  /conteudo/02-regiao-pastoral-sao-marcos/136 ·
  /conteudo/03-regiao-pastoral-sao-lucas/141 ·
  /conteudo/04-regiao-pastoral-sao-joao/147
- Uma página por paróquia (URLs no campo `fontes` de cada item do JSON):
  pároco, endereço, CEP, secretaria, fone, e-mail e horário de ATENDIMENTO
  da secretaria; nenhuma traz horário de celebração.
- Erros de digitação do site mantidos como publicados e anotados na
  observação: `paroquiabp@outlokk.com` (Dois Irmãos) e
  `paroquiansra.ap.colinas.@hotmail.com` (Colinas I). "Rua Tiracentes"
  (Juarina) entrou corrigida como Rua Tiradentes.

## Outras fontes de contato

- https://fradesfranciscanos.com.br/location/paroquia-n-sra-da-divina-providencia-araguacema
  (13/11/2026): confirma endereço e e-mail de Araguacema; fone
  (63) 99115-1630; frades desde 1960; festa da padroeira em 19/11.
- Facebook achado pela busca (não lido por dentro): catedralst (Catedral),
  ParoqnsasraAparecida e saosebastiaocolinas (Colinas do Tocantins); foram
  para o campo `site`.
- Instagram: a busca só mostrou o perfil da diocese e os de pastorais
  (caritasmiracema, pjmiracema, rccdiocesedemiracema). Nenhum perfil de
  paróquia confirmado; para Araguacema a busca sugeriu
  "paroqdivinaprovidencia" (metadado do canal do YouTube da paróquia), sem
  confirmação, por isso ficou fora do JSON.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/mira0 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dmidt.html (cúria, municípios,
  perda de Barra do Ouro, Campos Lindos e Goiatins para Araguaína em 2023)
- https://pt.wikipedia.org/wiki/Diocese_de_Miracema_do_Tocantins

## O que falta para o próximo estado desta pesquisa

- Horários de TODAS as 25 unidades: nenhuma fonte oficial os publica. O
  caminho provável são os perfis das paróquias no Facebook e Instagram, que
  a busca não indexa por dentro, ou a diocese passar a publicá-los.
- Confirmar o Instagram de cada paróquia (só o da diocese foi confirmado).
- Capelas e comunidades rurais: as páginas da diocese só nomeiam as
  comunidades de Centenário, Recursolândia e Abreulândia (entraram no JSON)
  e citam a Comunidade São João Batista como sede em Dois Irmãos e a
  Comunidade Santo Antônio em Pequizeiro (ficaram na observação, sem clareza
  se são a própria matriz).
- A Área Missionária Indígena Krâno, quando for criada.
