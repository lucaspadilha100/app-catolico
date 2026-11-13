# Diocese de São Carlos (SP): fontes da pesquisa de 13/11/2026

Sé em São Carlos; região central do estado. Bispo: Dom Luiz Carlos Dias.
Padroeiro diocesano: São Carlos Borromeu (4 de novembro). Desde 26/06/2024,
quando perdeu território para a nova Diocese de Jaú, a diocese tem 14
municípios (página "Diocese em Números"). O site não publica o endereço da
cúria.

## Resumo

- **81 unidades** em `saida/sao-carlos.json`: 1 catedral, 1 basílica
  (São Bento, Araraquara), 75 paróquias, 2 quase-paróquias (N. S. Aparecida
  em Itirapina e São João Batista em Guarapiranga, Ribeirão Bonito) e 2
  santuários que não são paróquia (N. S. Aparecida da Babilônia, em São
  Carlos, e o Santuário da Mãe Rainha, de Schoenstatt, em Araraquara).
- Cidades: São Carlos (30), Araraquara (22), Matão (11), Ibaté (4), Américo
  Brasiliense (3), Itirapina (2), Ribeirão Bonito (2) e uma em cada: Boa
  Esperança do Sul, Dourado, Gavião Peixoto, Motuca, Rincão, Santa Lúcia e
  Trabiju. Nenhuma delas aparece nos arquivos das outras dioceses.
- **63 com horário de missa** (confiança alta): o site da diocese tem uma
  página por paróquia com a tabela de missas estruturada (atributo
  `data-item` com dia, recorrência e horas), lida em 13/11/2026. 617
  horários no total, 66 capelas e comunidades.
- **18 sem horário** (confiança baixa, `"horarios": []`): a página da diocese
  não tem a tabela e a pesquisa não achou site da paróquia. São Carlos: N. S.
  Aparecida, Santa Eudóxia, Santo Antônio de Pádua (Vila Prado), São
  Francisco de Assis, São Nicolau de Flue, São Roque (Água Vermelha);
  Araraquara: Santa Teresinha do Menino Jesus, São Dimas, São Geraldo,
  Santuário da Mãe Rainha, N. S. da Candelária; Matão: N. S. Aparecida,
  Santa Rosa de Lima; Dourado, Ibaté (Santo Antônio), Motuca, Rincão e a
  quase-paróquia de Guarapiranga.
- Confissão: nenhuma página publica horário fixo (só mutirões da Quaresma e
  do Advento, com data). Adoração: só a Paróquia São Miguel Arcanjo (São
  Carlos), pelo site da própria paróquia.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Lista das unidades

A lista vem do diretório "Paróquias" do site da diocese, lido por cidade
(filtro `?city=`; a paginação sem filtro muda de ordem e esconde páginas),
80 páginas. Conferida contra:

- a página "Diocese em Números" do mesmo site, que lista as unidades por
  vicariato (São Carlos Borromeu, São Bento e Senhor Bom Jesus) e conta 77
  paróquias do clero diocesano, 2 quase-paróquias, 1 paróquia do clero
  religioso e 3 santuários diocesanos;
- o GCatholic (78 igrejas, atualizado em 09/11/2026).

Divergências e decisões:

- **N. S. da Candelária** (Araraquara): está em "Diocese em Números", mas
  não tem página no diretório nem está no GCatholic. Instalada como paróquia
  em 02/02/2025 (era quase-paróquia desde 2020). Entrou com o endereço e as
  comunidades das notícias da instalação: Rua Januário de Freitas Jesus,
  120, Jardim Maria Luiza; comunidades do Jardim Planalto e Rosa Martins,
  Capela do Sagrado Coração de Jesus (Bueno de Andrada) e capelas de São
  Francisco de Assis e Santa Luzia (Assentamento Monte Alegre).
- **Quase-Paróquia São João Batista** (Guarapiranga, Ribeirão Bonito):
  criada em 01/11/2024, desmembrada da Paróquia Senhor Bom Jesus da Cana
  Verde. Sem página no diretório; entrou só com nome e lugar.
- **Itirapina**: "Diocese em Números" chama a quase-paróquia de "Nossa
  Senhora das Graças" (instalada em 29/11/2020 na comunidade do Broa, com
  território tirado de Itirapina e de Brotas). O diretório traz a "Quase
  Paróquia Nossa Senhora Aparecida", Avenida 10, 98, Vila Monte Alto, sem
  cidade; a notícia de 12/05/2026 e a lista de confissões de 03/03/2026 a
  põem em Itirapina, e o telefone é (19) 3575. Entrou como uma unidade só,
  com o nome do diretório. Não se sabe se a igreja do Broa ainda pertence a
  ela; ficou fora.
- **"Paróquia da Saúde, São Carlos"**: aparece só em "Diocese em Números".
  Não tem página no diretório, nem notícia no site, nem entrada no
  GCatholic. Ficou FORA até alguém confirmar o que é.
- **Santuário N. S. Aparecida da Babilônia** (São Carlos): o diretório e o
  GCatholic o dão como paróquia e santuário (a página tem pároco), mas
  "Diocese em Números" não o põe na lista de paróquias. Entrou como
  `santuario`. Fica na zona rural (antiga Fazenda Babilônia, a 18 km do
  centro); a página não dá rua.
- **Santuário da Mãe Rainha** (Araraquara): santuário de Schoenstatt
  (Tabor Morada da Alegria Vitoriosa, 2001). O GCatholic o marca como
  paróquia; a diocese não o lista entre as paróquias. Entrou como
  `santuario`, sem horário.
- **Igreja Santa Cruz, dos Missionários Redentoristas** (Centro,
  Araraquara): está no diretório, mas não é paróquia (nem na lista da
  diocese nem no GCatholic). Seguindo o caso do Mosteiro de São Bento de
  Sorocaba, entrou como comunidade da Basílica São Bento, a paróquia do
  Centro, com as missas da sua página. A página não diz a que paróquia
  pertence: é uma escolha pela vizinhança, a conferir. A novena de N. S. do
  Perpétuo Socorro das quartas ficou no `nao_cabe`.
- Paróquias que são santuário: São Pio X (São Carlos) e Santo Antônio
  (Araraquara) entraram como `paroquia` com a primeira igreja de tipo
  `santuario`. A Basílica São Bento entrou como `basilica`.
- Bairros que a página não dá e vieram do GCatholic: Antenor Garcia (N. S.
  da Rosa Mística) e Jardim Embaré (São João Paulo II), ambas em São Carlos.
  Distritos pela própria diocese: Santa Eudóxia e Água Vermelha (São
  Carlos), São Lourenço do Turvo (Matão), Guarapiranga (Ribeirão Bonito).

## Páginas do site da diocese (lidas em 13/11/2026)

- https://www.diocesesaocarlos.org.br/paroquias/ (diretório, com filtro por
  cidade: `?city=São Carlos` etc.)
- https://www.diocesesaocarlos.org.br/diocese-em-numeros/ (lista por
  vicariato e contagem)
- Uma página por unidade, `https://www.diocesesaocarlos.org.br/paroquia/<slug>`;
  as URLs estão no campo `fontes` de cada item do JSON. Cada página traz
  telefone, endereço, e-mail (protegido pelo Cloudflare, decodificado do
  `data-cfemail`), WhatsApp e às vezes Instagram, Facebook ou site.
- Notícias usadas: instalação da Candelária
  (`/paroquia-nossa-senhora-da-candelaria-sera-instalada-no-domingo-2/`,
  `/instalacao-da-paroquia-nossa-senhora-da-candelaria-em-araraquara/`),
  criação da quase-paróquia de Guarapiranga
  (`/criacao-da-quase-paroquia-sao-joao-batista-em-guarapiranga/`),
  quase-paróquia de Itirapina (`/instalacao-da-quase-paroquia-nossa-senhora-das-gracas/`,
  `/quase-paroquia-n-s-ap-faz-festa-do-milho-em-itirapina/`,
  `/confissoes-no-vicariato-sao-carlos-borromeu/`), Babilônia
  (`/santuario-diocesano-de-n-s-ap-da-babilonia-celebra-160-anos/`) e Mãe
  Rainha (`/25-anos-do-santuario-tabor-morada-da-alegria-vitoriosa/`).
- Site da Paróquia São Miguel Arcanjo (São Carlos):
  https://sites.google.com/view/paroquiasaomiguelsc (missas iguais às da
  diocese, adoração e endereço das capelas São Rafael e São Gabriel).

## Como a tabela de missas virou o JSON

- O nome de cada linha diz a igreja: "Missa - Capela X", "Missa -
  Comunidade Y", "Missa - Santuário Z" viraram igrejas próprias da
  paróquia; "Matriz" ou nada, a matriz. Capelas sem bairro na fonte
  entraram com `localidade` vazia; quando o nome traz o lugar ("Capela Santa
  Luzia do Monte Carlo", "Assentamento Bela Vista", "Zavaglia", "Nova
  Paulicéia", "Silvânia", "Nova Cidade") ele foi para a `localidade`.
- "Primeira sexta-feira do mês", "Primeiro sábado", "Segunda sexta",
  "4º sábado" viraram `semanas`; "1º e 3º sábado" (descrição) virou [1, 3].
- Foram para o `nao_cabe`: "última quinta-feira do mês" (São João Paulo II,
  no formato que o importador entende), "todo dia 28" (São Judas Tadeu, São
  Carlos), missas nas casas e nos setores, a linha "Missa pelas almas - 1ª
  sexta-feira do mês" de Matão (Divino Espírito Santo) marcada na segunda,
  as Comunidades Malvinas e Centenário (Ribeirão Bonito, duas comunidades
  numa linha), uma "Capela" sem nome (Guadalupe, São Carlos) e um
  "Santuário" sem nome (N. S. Aparecida, Américo Brasiliense).
- A Paróquia São Sebastião de Matão escreve a igreja na descrição de cada
  linha ("10h - Capela São João Batista (Silvânia)"): foi lida à mão.

## Contatos

- Telefone, e-mail e WhatsApp são os que a página da diocese mostra para a
  paróquia (secretaria). O site não dá nome de pessoa nesses campos.
- Telefones com 8 dígitos começando por 9 (celular sem um dígito) ficaram
  vazios: Babilônia "(16) 9361-8152", Dourado "(16) 9811-0769", Itirapina
  "(19) 9713-4751", Motuca "(16) 9976-2378" e Trabiju "(16) 9978-2659".
- Vários WhatsApp do site são o telefone fixo com um 9 na frente
  (wa.me/5516933668553 para (16) 3366-8553): quando o número sem o 9 é o
  telefone da paróquia, entrou o fixo; quando não é, ficou vazio (Babilônia,
  wa.me/5516936181528, que não bate com o telefone, e N. S. do Perpétuo
  Socorro de Ibaté, wa.me/5516921200425).
- O e-mail da N. S. de Guadalupe (São Carlos) está como o site publica,
  `guadalupesaocarlos@yhaoo.com`, provavelmente erro de digitação.
- A página da N. S. do Perpétuo Socorro (São Carlos) dá o endereço como
  "MATRIZ:, 85 ... CEP 13569-180", sem a rua: endereço vazio.
- Instagram (dos próprios campos da página, nenhum perfil aberto):
  paroquiasaocristovaoscsp, joaopauloiioficial (São Carlos),
  paroquia_stoantoniodeitirapina (Itirapina), paroquiasaosebastiao.matao.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/zcar4 e
  https://gcatholic.org/dioceses/diocese/zcar4.htm (anuário, 09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Horários das 18 unidades sem tabela no site da diocese (pedir à
  secretaria ou esperar a diocese preencher as páginas).
- Bairro e endereço das capelas: o site só dá o nome.
- Confirmar o que é a "Paróquia da Saúde" de São Carlos e a que paróquia
  pertence a Igreja Santa Cruz dos Redentoristas.
- Contatos da Candelária e da quase-paróquia de Guarapiranga, e se a igreja
  do Broa (Itirapina) segue na quase-paróquia N. S. Aparecida.
