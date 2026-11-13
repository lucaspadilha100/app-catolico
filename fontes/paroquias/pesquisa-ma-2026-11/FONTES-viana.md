# Diocese de Viana (MA): fontes da pesquisa de 13/11/2026

Sé em Viana, na Baixada Maranhense e no vale do Pindaré. Bispo: Dom Evaldo
Carvalho dos Santos, C.M. Cúria: (98) 3351-1174 (topo do site da diocese).
Site: https://diocesedeviana.org.br; Instagram oficial: diocesedeviana.

## Resumo

- **30 unidades pastorais** em `saida/viana.json`: 1 catedral (Nossa Senhora
  da Conceição, Viana), 26 paróquias e 3 quase-paróquias, em 7 foranias
  (I Santa Rita de Cássia, II São Francisco Xavier, III Santa Inês, IV
  Imaculada Conceição, V Santa Teresinha, VI Todos os Santos, VII São Pedro e
  São Paulo). A forania de cada uma está na `observacao`.
- **Só 2 com horário** (confiança média): Paróquia São Bento (Bacurituba,
  domingo às 19h) e Paróquia São Pedro Apóstolo e Nossa Senhora do Rosário
  (Pedro do Rosário, domingo às 8h e 19h na matriz e o rodízio mensal de 11
  comunidades). As outras 28 entraram com `"horarios": []` e confiança
  baixa: a página de cada paróquia no site da diocese só traz endereço,
  pároco, telefone e e-mail.
- A Paróquia Santuário Santa Luzia (Santa Luzia) entrou como `paroquia`
  com a primeira igreja de tipo `santuario` (santuário desde 13/12/2006,
  anuário 2017).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese
(https://diocesedeviana.org.br/paroquias), organizada por forania, com 30
entradas, cada uma com página própria em `/local/<nome>` (as URLs estão no
campo `fontes` de cada item). O mapa do site (`wp-sitemap-posts-location`)
tem as mesmas 30 páginas.

Conferência contra o GCatholic (https://gcatholic.org/churches/local/vian0,
atualizado em 09/11/2026: 28 igrejas, "27 parishes" na estatística de
2022): bate nas 27 paróquias. Diferenças:

- O GCatholic não lista a Paróquia Santa Luzia de Terra Bela (Buriticupu,
  criada em 2003 segundo o anuário 2017) nem as quase-paróquias São Pedro
  Apóstolo (Auzilândia, Alto Alegre do Pindaré) e São Francisco de Assis e
  Nossa Senhora da Conceição (Segundo Núcleo, Buriticupu). Seguimos a diocese.
- O GCatholic lista em Vitória do Mearim uma igreja Nossa Senhora Aparecida
  (sem marca de paróquia), que corresponde à Quase-Paróquia São Sebastião e
  Nossa Senhora Aparecida (Povoado Coque, Vitória do Mearim).
- **Pendência:** o GCatholic lista uma "Paróquia Santo Antônio" em Vitória
  do Mearim, que não aparece no site da diocese nem no anuário 2017. Ficou de
  fora até alguma fonte da diocese confirmar.
- **Pendência:** o anuário 2017 traz o "Setor Missionário São Sebastião
  Mártir" (Povoado Jacaré, Penalva, (98) 3358-8001), que não está na lista
  atual do site. Ficou de fora.
- O GCatholic dá a matriz da Paróquia da Transfiguração (Bom Jesus das
  Selvas) como igreja de São Francisco; a diocese não dá o nome da igreja.
  Seguimos o GCatholic no nome da matriz.

## Horários: o que o site tem e o que foi descartado

O site usa um modelo de página de paróquia com um quadro de missas por
semana do mês. Três páginas trazem esse quadro com conteúdo de exemplo e
não foram usadas:

- Quase-Paróquia São Francisco de Assis e Nossa Senhora da Conceição
  (Segundo Núcleo): quadro vazio, só "Todo Domingo: 19h30 Matriz" e
  atividades de exemplo (terço dos homens, reunião dos jovens).
- Quase-Paróquia São Sebastião e Nossa Senhora Aparecida (Coque) e Paróquia
  São Vicente Férrer: o MESMO quadro, comunidade por comunidade (Boa
  Esperança, Caçoada, Santa Rosa, Vila Palmeira...), com as mesmas contagens
  de comunidades e as mesmas atividades de exemplo. Não há como saber de qual
  das duas é (nem se é de alguma), então nenhuma recebeu horário.

A página de Pedro do Rosário usa o mesmo modelo, mas o quadro foi
preenchido com lugares do município (Fala Só, Novo Horizonte, Anta, Rua
Nova, Núcleo 08, Bela Vista, Nova República, Tocos, Lagoa, Pedreiras, 03 de
Maio): entrou, com confiança média. As atividades de exemplo dela (catequese
9h15, terço dos homens, reunião dos jovens) não entraram.

## Contatos

- Telefones como publicados na página de cada paróquia. Ficaram de fora os
  celulares no formato antigo de 8 dígitos (ex.: Catedral (98) 8126-6376 e
  8913-7907; Monção (98) 8422-3469; Conceição do Lago-Açu (98) 8315-0164;
  Cajari (98) 8750-5784; Tufilândia (98) 9147-2573), um número de DDD 85 na
  página de Nossa Senhora de Nazaré de Viana e o telefone e e-mail
  particulares do diácono na página de São João Batista (Igarapé do Meio).
  Também ficou de fora o e-mail com nome de padre na página de São Cristóvão
  (Santa Inês); entrou o da secretaria (saocristovao@diocesedeviana.org.br).
- O anuário 2017 dá telefones fixos que a página atual não traz (ex.:
  Catedral (98) 3351-1952, Matinha (98) 3357-1789, Vitória do Mearim
  (98) 3352-1249, Tufilândia (98) 3684-1038, Olinda Nova (98) 3359-2036,
  Santuário Santa Luzia (98) 3654-5139). Não entraram no JSON por serem de
  2017; servem para conferir.
- Nenhuma página de paróquia dá Instagram.

## Fontes (lidas em 13/11/2026)

- https://diocesedeviana.org.br/paroquias (lista por forania)
- https://diocesedeviana.org.br/local/... (uma página por unidade; URL no
  campo `fontes`)
- https://diocesedeviana.org.br/wp-sitemap-posts-location-1.xml (conferência
  das 30 páginas)
- Anuário da Diocese de Viana 2017 (PDF):
  https://diocesedeviana.org.br/wp-content/uploads/2017/11/Anuario_Diocesede_VIANA.pdf
  (lista das paróquias com data de fundação, endereço, telefone e expediente;
  sem horários de missa)
- GCatholic: https://gcatholic.org/dioceses/diocese/vian0.htm e
  https://gcatholic.org/churches/local/vian0 (conferência da lista)

## O que falta para o próximo estado desta pesquisa

- Horários de missa de 28 unidades. O limite de buscas na web desta rodada
  acabou antes de começar a busca por trechos de Instagram das paróquias, que
  é o caminho que sobra (a diocese não publica horários). Os sites próprios
  citados (santuarioluz.com.br, diariodesantarita.blogspot.com) não
  responderam.
- Capelas e comunidades: o site não as lista (o anuário 2017 só dá a
  contagem por paróquia, de 5 a 120).
- Confirmar a "Paróquia Santo Antônio" de Vitória do Mearim (GCatholic) e o
  Setor Missionário de Jacaré (Penalva, anuário 2017).
