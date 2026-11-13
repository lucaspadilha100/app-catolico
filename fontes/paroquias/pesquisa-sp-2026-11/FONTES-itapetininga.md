# Diocese de Itapetininga (SP): fontes da pesquisa de 13/11/2026

Sé em Itapetininga; sudoeste paulista, entre Sorocaba e o Vale do
Paranapanema. Bispo: Dom Luiz Antônio Lopes Ricci (desde 25/02/2025,
GCatholic). Cúria: Rua General Carneiro, 409, Centro, Itapetininga, CEP
18200-024, (15) 3272-8557 e (15) 3275-1461. Catedral: Nossa Senhora dos
Prazeres. Diocese criada em 15/04/1998, com território de Sorocaba e de
Itapeva.

## Resumo

- **44 unidades pastorais** em `saida/itapetininga.json`: 1 catedral, 2
  basílicas (Nossa Senhora da Conceição em Tatuí, São Miguel Arcanjo em São
  Miguel Arcanjo), 8 santuários e 33 paróquias, em 5 regiões pastorais
  (Itapetininga, Tatuí, Sul, Norte, Oeste). Cidades: Itapetininga (14),
  Tatuí (11), São Miguel Arcanjo (3), Angatuba (3), Paranapanema (2), Pilar
  do Sul (2) e uma em cada: Alambari, Campina do Monte Alegre, Capela do
  Alto, Cesário Lange, Guareí, Porangaba, Quadra, Sarapuí, Torre de Pedra.
- **40 com horário de missa** (35 com confiança alta, 5 média) e **4 sem
  horário** (confiança baixa, `horarios: []`): Santa Cruz (Distrito da
  Varginha, Itapetininga), Santa Rita de Cássia (Itapetininga), Santuário
  Rainha da Paz (Itapetininga) e Bom Jesus do Bom Fim (Pilar do Sul). As
  páginas dessas quatro no site da diocese têm a tabela de horários vazia.
- Confiança média: Catedral (quatro missas sem o dia da semana), Basílica de
  Tatuí (uma só missa de domingo, pouco para a basílica), Bom Jesus e São
  Roque (Bom Retiro), Sant'Ana e Santa Rita de Tatuí (missa em comunidade sem
  o dia). Atenção geral: o cadastro da diocese costuma dar UMA missa de
  domingo por paróquia; em paróquia grande pode ser só a da matriz.
- Confissão: só a Basílica de São Miguel Arcanjo publica (no site próprio).
  Adoração: nenhuma com horário fixo; a adoração do dia 29 na Basílica de
  São Miguel ficou no `nao_cabe`.
- **358 comunidades** com nome e bairro, todas do Anuário Diocesano 2024 (o
  site de 2026 dá só o nome). Comunidade que o site lista e o anuário não
  traz (ou traz sem lugar) ficou no `nao_cabe` da matriz.
- Todo `id_banco` é null.

## A fonte: o diretório de paróquias da diocese (lido em 13/11/2026)

- https://diocesedeitapetininga.org.br/paroquias/ (5 páginas, em
  `/paroquias/page/N/`; filtro por região em `?region=1..5`): 44 entradas.
- Uma página por unidade, `https://diocesedeitapetininga.org.br/paroquia/<slug>/`
  (as URLs estão no campo `fontes` de cada item). O site é do sistema
  Parresia: horários como JSON no atributo `data-item`; telefone, endereço,
  e-mail (protegido pelo Cloudflare, decodificado do `data-cfemail`),
  Instagram e WhatsApp em campos próprios. A API do cadastro
  (`/wp-json/wp-parresia-dashboard/register/*`) pede login.
- https://diocesedeitapetininga.org.br/horarios-de-missas/ mostra os mesmos
  dados (só as 20 primeiras paróquias sem JavaScript).
- As páginas `/comunidade/<slug>` das comunidades não existem: redirecionam
  para uma notícia qualquer.

Como os horários foram lidos do `data-item`:

- Semanal com dia: uma linha por dia e hora.
- Mensal com nome "1ª Sexta-Feira: 19h30", "1º Sábado: 12h", "1º domingo:
  10h": dia certo e `semanas: [1]`.
- Missa votiva "todo dia 12/13/15/28/29" e a "1ª e 3ª sexta" da Comunidade
  Recado (Tatuí): `nao_cabe`.
- Semanal sem dia da semana (Catedral: 8h30, 17h, 19h, 19h; Bom Retiro:
  19h30) e as missas "[Frei Galvão]" (Santa Rita, Tatuí) e "[Madre Teresa]"
  (Sant'Ana, Itapetininga): `nao_cabe`.
- "[Santo Antônio Galvão] Missa na comunidade", terça 19h30 (São Paulo
  Apóstolo, Itapetininga): entrou na Comunidade Santo Antônio de Sant'Ana
  Galvão (Gramados II). "Missa Santuário Paroquial", segunda a sexta 7h
  (Capela do Alto): entrou no Santuário Paroquial da Mãe Rainha de
  Schoenstatt (Centro).

## Basílica de São Miguel Arcanjo: site próprio

https://basilicasaomiguelarcanjo.org.br/horarios/ (página editada em
02/09/2026) é mais completa que o site da diocese, que dá terça a sexta 17h,
sábado 19h e domingo 7h. Seguimos a Basílica: segunda a sexta 17h, sábado 8h
e 19h, domingo 7h, 9h, 11h e 19h; confissões segunda, terça, quarta e sexta
14h às 16h, quinta 19h às 21h; programação do dia 29 no `nao_cabe`.

## Anuário Diocesano 2024 (comunidades)

https://cdn.diocesedeitapetininga.org.br/wp-content/uploads/2024/01/Anuario-Diocesano-Digital-2024_compressed.pdf
(PDF de 107 páginas, janeiro de 2024; o texto está em curvas, lido como
imagem, páginas 42 a 94). Cada paróquia traz clero, expediente, a lista de
comunidades com o bairro entre parênteses e os contatos. Não traz horário de
missa. Usado para: comunidades e bairros; o fixo de Sarapuí, Guareí e Santa
Cruz de Tatuí (no site o telefone é o celular cortado, com 8 dígitos); o
e-mail de N. S. das Graças (Itapetininga).

## Contatos: o que mudou em relação ao site

- N. S. das Graças (Itapetininga): o site repete o e-mail e o WhatsApp da
  Paróquia Santa Cruz da Varginha; ficou o e-mail do anuário e sem WhatsApp.
- São Pedro (Torre de Pedra): e-mail e WhatsApp são de pessoa (o anuário
  diz "Margarida"); não entraram.
- Telefone cortado (10 dígitos, celular sem o último): Sarapuí, Guareí,
  Santa Cruz (Tatuí), Sagrado Coração (Tatuí), N. S. de Fátima (Tatuí),
  N. S. Aparecida (Gramadão). Ficou o WhatsApp; o fixo do anuário onde há.
- Instagram: 42 perfis, tirados dos botões das páginas da diocese; nenhum
  aberto por dentro. Sagrado Coração e São Lázaro (Tatuí) não têm.
- Site da Basílica de Tatuí (basilicaconceicao.com) veio do anuário; o
  endereço não respondeu daqui.

## Conferência da lista com o GCatholic

https://gcatholic.org/dioceses/diocese/itap0.htm e
https://gcatholic.org/churches/local/itap0 (atualizado em 09/11/2026: "42
parishes", 50 igrejas). Bate nas 42 paróquias. O site da diocese tem duas a
mais: o Santuário N. S. Rainha da Paz (Itapetininga, criado em 2023) e a
Paróquia N. S. das Graças (Tatuí), que o GCatholic lista sem marca de
paróquia. As outras entradas do GCatholic sem marca de paróquia são
comunidades no anuário: N. S. do Rosário, Santo Antônio e São Padre Pio
(Catedral), Santa Teresinha e São Caetano (N. S. das Estrelas), Menino Jesus
de Vila Belo Horizonte (Santa Rita de Itapetininga); e o Seminário São João
Paulo II (comunidade do Santuário Rainha da Paz).

Distritos: Bom Retiro da Esperança (Angatuba), Gramadão (São Miguel
Arcanjo), Varginha (Itapetininga) e Campos de Holambra (Paranapanema) entram
com a cidade do município e o distrito em `localidade`.

Nenhuma cidade da diocese aparece nos outros arquivos de `saida/`. Capão
Bonito, Guapiara e Ribeirão Grande são da Diocese de Itapeva (ver
FONTES-itapeva.md), não de Itapetininga.

Fora da lista: a Capela N. S. de Lourdes do Hospital Léo Orsi Bernardes
(capelania, página 56 do anuário).

## O que falta para o próximo estado desta pesquisa

- Horários das quatro paróquias sem tabela e as missas de comunidade (o
  cadastro da diocese quase só traz a matriz).
- Confirmar a Basílica de Tatuí (uma só missa de domingo na fonte) e os dias
  das missas sem dia da Catedral.
- Confissões: só a Basílica de São Miguel publica.
- Comunidades do site que o anuário 2024 não tem (Bom Retiro tem seis novas).
