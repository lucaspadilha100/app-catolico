# Arquidiocese de São Paulo, Regiões Episcopais Lapa e Brasilândia: fontes da pesquisa de 13/11/2026

Parte da pesquisa da Arquidiocese de São Paulo dividida em três: esta cobre
só as Regiões Episcopais **Lapa** (zona oeste e noroeste) e **Brasilândia**
(zona norte e noroeste). Sé e Ipiranga, Belém e Santana estão em outros
arquivos. Todas as unidades ficam na cidade de São Paulo.

- Região Lapa: vigário episcopal Dom Edilson de Souza Silva. Sede: Rua
  Afonso Sardinha, 62, Lapa, (11) 3834-7141, reglapa@uol.com.br.
- Região Brasilândia: vigário episcopal Dom Carlos Silva, OFMCap. Sede: Rua
  Rodrigues Blandi, 25, Parque São Luís, (11) 3924-0020,
  pastbrasilandia@gmail.com.

## Resumo

- **82 unidades pastorais** em `saida/arqsp-lapa-brasilandia.json`, todas
  paróquias (a arquidiocese não lista quase-paróquia, área pastoral nem
  santuário com paróquia nestas duas regiões):
  - **Lapa: 40** em 3 decanatos (São Simão 14, São Bartolomeu 13, São Tito 13).
  - **Brasilândia: 42** em 4 decanatos (São Barnabé 9, Santa Isabel e São
    Zacarias 10, São Pedro 11, São Filipe 12).
- **12 com horário de missa** (6 com confiança alta, 6 média): Lapa 6 de 40
  (N. S. de Fátima da Vila Leopoldina, N. S. Aparecida da Vila Beatriz,
  Mãe do Salvador/Cruz Torta, Monte Serrate, Santo Alberto Magno, N. S. do
  Líbano), Brasilândia 6 de 42 (N. S. da Conceição do Jaraguá, Santo Antônio
  de Pádua do Parque Nações Unidas, Bom Jesus dos Passos, N. S. de Fátima
  da Vila Bonilha, São José da Vila Palmeira, N. S. das Graças da Vila dos
  Andrades). São 129 linhas de horário; confissão publicada em 4 delas, adoração em 3.
- As outras **70 entraram com `horarios: []` e confiança baixa** (regra do
  dono), com o motivo na observação.
- 20 comunidades e capelas com nome e lugar ligadas à paróquia que a fonte
  indica; comunidades sem lugar ficaram no `nao_cabe` da matriz.
- Cada observação começa com a Região Episcopal e o decanato.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Por que tão poucas com horário

A arquidiocese tem uma página por paróquia (tipo `parish` do WordPress,
listado por `/wp-json/wp/v2/parish?per_page=100`, categoria `regiao-lapa` e
`regiao-brasilandia`; o conteúdo só vem na página HTML), com pároco, data de
fundação, decanato, endereço, contato e um campo "Expediente". Quase todas
foram regravadas em 15 e 16/01/2026. Só em três o campo "Expediente" traz
missas: N. S. da Conceição (Jaraguá), N. S. das Graças (Vila dos Andrades)
e Santo Antônio de Pádua (Parque Nações Unidas, página de agosto de 2026).
Nas demais ele traz **só o horário da secretaria** ("Sábado, das 08:00 as
12:00"; não são missas, não entraram) ou vem vazio. Na N. S. Aparecida da
Vila Beatriz o histórico da página repete as missas do site da Pascom.

Para as outras, buscamos o site que a própria página da arquidiocese
indica. Deram horário: nsrafatima.org.br, cruztorta.org.br (WordPress,
página de horários de 07/2023, site ativo em 11/2026), nsmonteserrate.com.br,
pascomnsapvb.wixsite.com, paroquiastoalberto.wixsite.com,
igrejanossasenhoradolibano.blogspot.com, fatimavilabonilha.com.br,
bomjesusdospassos.com.br (WordPress, página de 29/04/2026) e psj19.com.br
(Google Sites). Os blogs da Santa Terezinha da Vila Terezinha (cerca de
2012), da São José Operário do Jardim Damasceno (2015) e da São João Batista
da Vila Mangalot (2013) têm horários antigos demais: os horários ficaram
fora, as comunidades com endereço entraram.

Não responderam em 13/11/2026 (domínio sem DNS, 502 no proxy, conexão
recusada, 403 ou certificado vencido ou inválido): nossasenhoradalapa.com.br,
paroquiadombosco.org.br, pnslourdes.com.br, santissimatrindadebutanta.com.br,
nsenhoraaparecida.com.br, paroquiasaodomingossavio.com.br,
paroquiaassuncao.com.br (403), santarosadelimaperus.com.br,
nossasenhoradaconceicao.com, slg21.com.br, nsazatt.com.br,
paroqnsgvnc.com.br, nossasenhoradoo.com.br, paroquiadolimao.com,
saoluizgonzaga.no.comunidades.net, paroquiasagradafamilia.net,
fatimadionisia.org. Vale tentar de novo com a rede liberada. Instagram e
Facebook não foram abertos; a busca na web não devolve trecho das páginas e
não achou horário.

Horários com observação de faixa ("Até 11h30") seguem o molde de Taubaté:
a hora é o início. Missa de dia do mês (dia 6, 13, 19, 27) e missa em
capela sem nome ficaram no `nao_cabe`. Celebrações de comunidade em que a
página não diz se é missa também ficaram no `nao_cabe` da comunidade.

## Lista das unidades

A lista vem das páginas das regiões, que dão as paróquias por decanato
(https://arquisp.org.br/regiao-lapa/ e https://arquisp.org.br/regiao-brasilandia/),
batidas uma a uma com as páginas de paróquia: 40 e 42, as mesmas contagens
das categorias `regiao-lapa` e `regiao-brasilandia` na API do site.
A arquidiocese fala em "seis regiões episcopais em 24 decanatos"
(https://arquisp.org.br/reorganizacao-pastoral-e-administrativa/); o
decreto dos decanatos (PDF de 01/2024) é só imagem e não foi lido.

Conferência contra o anuário (GCatholic, https://gcatholic.org/churches/local/zpau0,
334 igrejas na arquidiocese, agrupadas pelos SETORES antigos, não pelos
decanatos de 2024):

- **Lapa**: as 40 estão no GCatholic, nos setores Lapa, Leopoldina,
  Pinheiros, Butantã, Rio Pequeno e Pirituba (Cristo Rei do Jardim Britânia
  e N. S. das Graças do Jardim Anhanguera aparecem no setor Perus). O setor
  Pinheiros do GCatholic tem ainda Santa Maria Madalena e São Miguel Arcanjo,
  São Paulo da Cruz e Senhor Bom Jesus dos Passos, que a arquidiocese não
  põe na Região Lapa (ficam para a pesquisa de Sé e Ipiranga).
- **Brasilândia**: o GCatholic está incompleto. Bate nos setores Jaraguá,
  Perus, Pereira Barreto, Freguesia do Ó, São José Operário e parte de Casa
  Verde (São Luiz Gonzaga e São Miguel Arcanjo, este marcado "Paróquia São
  Luiz Gonzaga"). Não achamos com o mesmo nome: Santo Antônio da Brasilândia,
  N. S. do Carmo (Vila Cruz das Almas), Bom Pastor, São José Operário (Jardim
  Damasceno), Sagrada Família (Jardim Peri), São Francisco de Assis (Jardim
  Guarani), N. S. de Fátima (Vila Dionísia), Santa Terezinha (Vila
  Terezinha), Santo Antônio de Pádua (Parque Nações Unidas, criada em
  15/08/2026) e São Judas Tadeu (Morada do Sol), que o GCatholic parece
  chamar de "Área Pastoral Santo Agostinho" (igreja São Judas Tadeu, setor
  Perus). Seguimos a arquidiocese, que a lista como paróquia.
- O setor São José Operário do GCatholic tem uma paróquia "Nossa Senhora e
  Sant'Ana" que não está em nenhuma das duas listas; o setor Guarani do
  GCatholic (Natividade do Senhor, N. S. Aparecida e São Luciano, Perpétuo
  Socorro, Santa Clara, Santo Antônio de Pádua, São Pio X e Santa Luzia)
  também não está nestas regiões.

## Dados repetidos entre páginas (ficaram fora ou pendentes)

As páginas da arquidiocese têm cópias de uma paróquia para outra. Onde o
dado é claramente de outra paróquia, ficou fora e a observação diz:

- São Judas Tadeu (Morada do Sol) repete endereço, telefone e e-mail da
  N. S. da Paz; N. S. do Carmo (Vila Cruz das Almas) repete os da N. S. das
  Graças (Vila Carolina); São Miguel Arcanjo (Vila Prado) repete os da São
  Luiz Gonzaga (Vila Santa Maria), até o site; São João Bosco repete o
  endereço da N. S. de Fátima da Vila Leopoldina. Endereço da matriz
  pendente nas quatro.
- Telefone (11) 3768-3203 em São Patrício, Santíssima Trindade (Vila São
  Domingos) e N. S. da Imaculada Conceição Aparecida (ficou só na São
  Patrício); (11) 3904-0549 em São Domingos Sávio e São João Batista da Vila
  Mangalot (ficou na São Domingos Sávio); (11) 3644-8327 e
  parostoestevaorei@hotmail.com em Santo Estêvão Rei e N. S. de Lourdes
  (ficaram na Santo Estêvão).
- pnscomunidades@gmail.com e (11) 3975-2569 aparecem em cinco páginas
  (N. S. das Graças da Vila Carolina, N. S. do Carmo, Santíssima Trindade de
  Perus, Cristo Libertador, Montfort): ficaram só na N. S. das Graças, com
  aviso para conferir.
- E-mails pessoais de padre ou de pessoa ficaram fora (N. S. Aparecida da
  Vila Anglo, N. S. da Imaculada Conceição Aparecida, Sagrado Coração do
  Parque Continental, São José do Jaguaré, Santa Luzia da Vila Jaguari), e
  também os malformados (N. S. da Paz e Santa Terezinha do Jardim Sydney,
  ambos com "gmail.com.br").
- A página da N. S. Mãe de Deus traz no histórico a biografia do Cardeal
  Agnelo Rossi, não a da paróquia.
- São José Operário do Jardim Sarah: a página dos Joseleitos de Cristo
  (2021) dá outro endereço (Rua Engenheiro Pedro Garcin, 274, Vila Antônio).

## Páginas lidas (13/11/2026)

- https://arquisp.org.br/regiao-lapa/ e https://arquisp.org.br/regiao-brasilandia/
  (lista por decanato, vigário episcopal e sede)
- https://arquisp.org.br/wp-json/wp/v2/parish (as 82 páginas; as URLs estão
  no campo `fontes` de cada item, com a data de modificação da página)
- https://arquisp.org.br/mapa/ (mesmos endereços, com coordenadas)
- Sites das paróquias com horário:
  - https://www.nsrafatima.org.br/ (N. S. de Fátima, Vila Leopoldina)
  - https://cruztorta.org.br/horario-de-missas/ e /expediente/ (Mãe do Salvador)
  - https://www.nsmonteserrate.com.br/horarios (Monte Serrate, missas e confissões)
  - https://pascomnsapvb.wixsite.com/nsapvilabeatriz (Vila Beatriz)
  - https://paroquiastoalberto.wixsite.com/stoalberto (Santo Alberto Magno)
  - https://igrejanossasenhoradolibano.blogspot.com/p/horario-missa.html (Líbano)
  - https://fatimavilabonilha.com.br/horarios-de-missa/, /atendimentos-e-confissoes/,
    /mae-rainha/, /nossa-senhora-aparecida/, /santo-antonio/ (Fátima, Vila Bonilha)
  - https://www.bomjesusdospassos.com.br/missas/ (Bom Jesus dos Passos)
  - https://www.psj19.com.br/ (São José, Vila Palmeira)
- Blogs antigos, só comunidades: https://paroquiaterezinhabrasilandia.blogspot.com/p/horario-das-missas.html,
  https://saojosedamasceno.blogspot.com/p/comunidades.html

## Instagram (só os que as próprias páginas indicam; nenhum aberto por dentro)

nsrafatima.vlsp, paroquiacruztorta, nsmonteserrate (Lapa); pstoantoniopadua,
bjpassos6, fatimavilabonilha, nsazatt, psjose19, igrejadezincosantosapostolos,
nsgracas_vnc (Brasilândia).

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/zpau0 e https://gcatholic.org/dioceses/diocese/zpau0.htm
- Páginas de igreja do GCatholic para as capelas sem paróquia na lista
  (churches/brazil/78574, 78575, 78573, 78894, 78960, 52855)

## Pendências para o próximo estado desta pesquisa

- **Santuário Mãe, Rainha e Vencedora Três Vezes Admirável de Schoenstatt**
  (Jaraguá, padres de Schoenstatt; igreja jubilar de 2025 no GCatholic): não
  está na lista da arquidiocese como unidade e não tem endereço na fonte.
  Ficou fora do JSON.
- Igrejas do GCatholic sem paróquia indicada: Capela Santo Aníbal Maria di
  Francia (setor Lapa, perto da São João Maria Vianney), Capela São João
  Batista (setor Pirituba, perto da São João Batista da Vila Mangalot),
  Igreja São Francisco de Assis (setor Rio Pequeno, sem marca de paróquia) e
  Mosteiro São João Gualberto (Pirituba). Ficaram fora.
- Comunidades citadas sem lugar (no `nao_cabe` da matriz): Santo Antônio de
  Pádua do Parque Nações Unidas (4), Espírito Santo (2), Sagrada Família
  (3), Imaculado Coração de Maria (antiga Área Pastoral do Elisa Maria),
  Capela São Benedito da N. S. das Graças da Vila dos Andrades, Comunidade
  City Pinheirinho da N. S. do Líbano.
- As comunidades da Santa Terezinha (Vila Terezinha) e da São José Operário
  (Jardim Damasceno) vêm de blogs de 2012 e 2015: conferir se continuam.
- Endereço da matriz de São Judas Tadeu (Morada do Sol), N. S. do Carmo,
  São Miguel Arcanjo e São João Bosco.
- Horários das 70 paróquias sem horário: reabrir os sites que não
  responderam e, quando possível, pedir a página atualizada à arquidiocese
  (o campo "Expediente" das páginas é o lugar natural).
