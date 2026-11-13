# Diocese de Humaitá (AM): fontes da pesquisa de 13/11/2026

Criada como Prelazia de Humaitá em 26/06/1961 (desmembrada de Manaus e da
Prelazia de Porto Velho), diocese desde 16/10/1979, sufragânea de **Porto
Velho** desde 04/10/1982. Território trocado com a Prelazia de Borba em 1996
e 2003. Municípios: Humaitá, Manicoré e Apuí. Padroeira: Nossa Senhora da
Conceição (8 de dezembro). **Sé vacante**: Dom Antônio Fontinele de Melo foi
nomeado bispo de Rio Branco (AC) em 18/09/2026; o administrador diocesano é o
Pe. Alfredo de Souza (página "Sede Vacante" do site, editada em 10/11/2026).
Cúria: Praça da Matriz, Centro, Humaitá, CEP 69800-000 (a normativa de
agosto de 2026 dá Rua Monteiro Brasil, 2263, CEP 69800-070); Cúria Diocesana
(97) 98108-0540, Secretaria Episcopal (97) 98108-1694,
secretaria@diocesedehumaita.com.br, curia@diocesedehumaita.com.br.

## Resumo

- **11 unidades pastorais** em `saida/humaita.json`: 1 catedral, 7 paróquias
  e 3 áreas missionárias, em 3 decanatos:
  - Decanato de Humaitá: Catedral N. S. da Conceição, São Francisco, São
    Domingos Sávio (Humaitá) e a Área Missionária São Francisco de Assis
    (Distrito de Realidade, BR-319).
  - Decanato de Manicoré: N. S. das Dores e Maria Auxiliadora dos Cristãos
    (Manicoré), N. S. Auxiliadora do Uruapiara (Distrito de Auxiliadora,
    Humaitá) e a Área Missionária Santo Antônio (Cachoeirinha, Manicoré,
    criada em 2025).
  - Decanato de Apuí: São Sebastião (Apuí) e Santo Antônio de Pádua (Santo
    Antônio do Matupi, km 180 da BR-230, distrito de Manicoré).
  - Sem decanato na página: Área Missionária N. S. de Nazaré (Beiradão, rio
    Madeira).
- **Nenhuma com horário.** Todas entraram com `"horarios": []` e confiança
  baixa. O site da diocese tem uma página por paróquia com a seção
  "Celebrações", vazia em todas as 11 (conferido no HTML, não só no texto).
  Nenhuma paróquia tem site próprio; as buscas não trouxeram horário
  publicado pela paróquia ou pela diocese. Agregadores não foram usados.
- Capelas e comunidades: entraram só as que a página da paróquia lista com um
  lugar (vicinal, setor, rio, bairro ou nome de lugar). As listadas sem lugar
  ficaram no `nao_cabe` da matriz.
- Todo `id_banco` é null: o banco ainda não tem nada do Amazonas.

## Lista das unidades

A lista vem do tipo de post "paroquias" do site da diocese
(`/wp-json/wp/v2/paroquias`, 11 itens) e das categorias "Decanato de ..."
de cada um (`/wp-json/wp/v2/categories`).

Conferência com o GCatholic (atualizado em 09/11/2026): "8 parishes, 1
mission" (dados de 2022). As 8 paróquias batem: Catedral, São Francisco, São
Domingos Sávio, N. S. das Dores, "Nossa Senhora Auxiliadora, Auxiliadora"
(é a Maria Auxiliadora dos Cristãos, bairro Auxiliadora de Manicoré: fica a
920 m da matriz das Dores), N. S. Auxiliadora de Uruapiara, "Santa Luzia,
Santo Antônio do Matupi" (hoje Santo Antônio de Pádua, nome mudado em 2021) e
São Sebastião de Apuí (o GCatholic não marca a igreja como paróquia, mas a
diocese diz que é desde 1996). Das 3 áreas missionárias da diocese, o
GCatholic conta uma; as outras duas são de 2021 (Realidade) e 2025
(Cachoeirinha). catholic-hierarchy.org dá 8 paróquias (2023). As igrejas do
GCatholic sem marca de paróquia (São José, N. S. Aparecida, Rosa Mística,
N. S. do Carmo e São Cristóvão em Humaitá; Santa Luzia, Santo Antônio, São
Sebastião e Mazzarello em Manicoré) não entraram: a fonte não diz a qual
paróquia pertencem.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedehumaita.com.br/ (lista "Paróquias e Áreas Missionárias")
- https://diocesedehumaita.com.br/paroquias/paroquia-de-imaculada-conceicao/
- https://diocesedehumaita.com.br/paroquias/paroquia-de-sao-francisco/
- https://diocesedehumaita.com.br/paroquias/paroquia-de-sao-domingos-savio/
- https://diocesedehumaita.com.br/paroquias/area-missionaria-sao-francisco-de-assis/
- https://diocesedehumaita.com.br/paroquias/area-missionaria-beiradao/
- https://diocesedehumaita.com.br/paroquias/paroquia-nossa-senhora-da-dores/
- https://diocesedehumaita.com.br/paroquias/paroquia-maria-auxiliadora-dos-cristaos/
- https://diocesedehumaita.com.br/paroquias/paroquia-nossa-senhora-auxiliadora-de-uruapiara/
- https://diocesedehumaita.com.br/paroquias/aria-missionaria-santo-antonio-cachoeirinha/
- https://diocesedehumaita.com.br/paroquias/paroquia-sao-sebastiao/
- https://diocesedehumaita.com.br/paroquias/paroquia-santo-antonio-de-padua-2/
- https://diocesedehumaita.com.br/contato/ e /bispo-diocesano-2/ (sé vacante)
- Notícias usadas para conferir: visita à Área Missionária N. S. de Nazaré
  (2024-03-21), posse do pároco de Uruapiara (2025-03-25), XVIII Assembleia
  Diocesana (2025-11-09, cita a "nova Área Missionária Santo Antônio,
  Cachoeirinha").

E-mails das paróquias decodificados do `data-cfemail` do Cloudflare. Só
entraram os da paróquia (paroquiasfhmt, paroquiasds, paroquia.nsdmatriz,
paroquia.auxiliadora, auxiliadorauruapiara, paroqssebastiao); os da cúria
não foram copiados para as paróquias.

## Instagram

Só um perfil de paróquia aparece no site da diocese: `paroquia.apui` (São
Sebastião, Apuí). Nenhum perfil foi aberto por dentro.

## Decisões e dúvidas

- **Uruapiara**: a diocese põe a paróquia no Decanato de Manicoré, mas o
  Distrito de Auxiliadora é distrito de Humaitá (notícias da Justiça do
  Trabalho e do Portal Amazônia vistas pela busca). Cidade = Humaitá.
- **Beiradão** (Área Missionária N. S. de Nazaré): a página não dá matriz,
  sede nem decanato. Entrou como "comunidade de comunidades", com a primeira
  igreja de tipo `comunidade` (como a Paróquia São Sebastião e São Francisco
  de Lábrea). Cidade suposta Humaitá: o Lago do Antônio é de Humaitá (artigo
  da UFAM visto pela busca). A lista repete nomes no mesmo setor (Menino Deus
  quatro vezes no Lago do Antônio, São Sebastião três no Palhal...): ficou uma
  linha por nome e setor.
- **Área Missionária Santo Antônio (Cachoeirinha)**: a página só dá nome,
  ano (2025) e administrador. A "Igreja de Santo Antônio" como matriz é
  suposição pelo nome da área. A Paróquia N. S. das Dores ainda lista a
  comunidade de Cachoeirinha (página editada em maio de 2025); ficou lá
  também, até a diocese atualizar.
- **São Sebastião (Apuí)**: o número publicado como telefone e WhatsApp é um
  celular da secretaria (secretárias nomeadas na página); entrou só como
  `whatsapp`.
- **São Domingos Sávio**: a diocese dá "margens da BR-230, Transamazônica";
  o GCatholic, Rua Álvaro Maia, 1247. O JSON segue a diocese.
- **Catedral**: a diocese chama a unidade de "Paróquia Imaculada Conceição
  (Catedral)"; o nome segue o GCatholic e o uso corrente. Sem telefone ou
  e-mail próprios na página.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/huma0.htm e
  https://gcatholic.org/churches/local/huma0 (e as 17 páginas de igreja)
- https://catholic-hierarchy.org/diocese/dhuma.html

## O que falta para o próximo estado desta pesquisa

- Horários de todas as unidades: a diocese não os publica; o caminho é a
  própria paróquia preencher (ou a diocese preencher a seção "Celebrações").
- Telefone da Catedral, de São Domingos Sávio, de Uruapiara, de Santo Antônio
  de Pádua e das três áreas missionárias.
- Comunidades da Catedral, de São Francisco e de São Domingos Sávio: as
  páginas não as listam.
- Sede e decanato da Área Missionária N. S. de Nazaré.
