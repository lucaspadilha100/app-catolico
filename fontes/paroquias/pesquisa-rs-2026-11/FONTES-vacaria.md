# Diocese de Vacaria (RS): fontes da pesquisa de 13/11/2026

Sé em Vacaria; Campos de Cima da Serra e nordeste gaúcho (Lagoa Vermelha,
Sananduva, São José do Ouro, Ipê, Bom Jesus). Sufragânea de Passo Fundo.
Bispo: Dom Sílvio Guterres Dutra. Padroeira: Nossa Senhora da Oliveira.
Cúria: Rua Ramiro Barcelos, 806, Centro, Vacaria, (54) 3231-1373,
mitra@diocesevacaria.com.br. Site: https://www.diocesevacaria.com.br/

## Resumo

- **28 unidades** em `saida/vacaria.json`: 1 catedral (N. S. da Oliveira) e
  27 paróquias, em 5 foranias (Vacaria, Lagoa Vermelha, São José do Ouro,
  Sananduva e Ipê).
- **11 com horário de missa** (10 alta, 1 média: Muitos Capões, só domingo).
  **17 sem horário** (confiança baixa): a página de cada paróquia no site da
  diocese tem um bloco "Horários de Missa" que muitas deixaram de preencher.
  Lista em `SEM-HORARIO-vacaria.txt`.
- Nenhuma paróquia publica confissão ou adoração fixa (Cacique Doble: missa
  da 1ª sexta com adoração).
- **297 comunidades e capelas** com nome e lugar, das listas "Comunidades"
  de cada página (formato "Padroeiro (Lugar)" ou "Lugar - Padroeiro").
  Abreviações abertas: L. = Linha, B. = Bairro, Cox. = Coxilha, Faz. =
  Fazenda. Comunidades sem lugar ficaram no `nao_cabe` da matriz. Onde a
  fonte dá o município (Caseiros: Muliterno, Ibiraiaras, Ibiaçá; Fátima de
  Vacaria: Monte Alegre dos Campos; São Paulo Apóstolo: Capão Bonito do Sul;
  Esmeralda: Pinhal da Serra), a capela entrou com aquela cidade.
- Todo `id_banco` é null.

## Fontes (lidas em 13/11/2026)

- API do WordPress do site da diocese:
  https://www.diocesevacaria.com.br/wp-json/wp/v2/pages?parent=631 (27
  páginas de paróquia; a data de cada uma, campo `modified`, está no `fontes`
  do JSON; vão de 2021 a outubro de 2026). Há cópias antigas (2024) de três
  páginas fora da pasta /paroquias/, que não foram usadas.
- https://www.diocesevacaria.com.br/paroquias/ (o objeto `dados` no código da
  página liga cada paróquia à sua forania).
- https://www.diocesevacaria.com.br/diocese/curia-diocesana/ e /contato/.

## Conferência da lista

- GCatholic, https://gcatholic.org/churches/local/vaca0 (09/11/2026): 28
  paróquias. Bate com as 27 do site mais a **Paróquia São Sebastião de André
  da Rocha**, que não tem página no site de Vacaria. O site da Diocese de
  Caxias do Sul confirma que ela é de Vacaria e é atendida por Caxias (o
  pároco de Protásio Alves); entrou com confiança baixa, sem contato.
- A página "Paróquia Santo Expedito" está no endereço
  .../nossa-senhora-das-dores-barracao/ (erro de endereço no site); a de
  Barracão está em .../paroquia-nossa-senhora-das-dores-barracao/.

## Instagram (citados nas páginas da diocese)

nsdoresbarracao, santuariotupanci, santuariosantoexpeditors,
paroquia_caseiros, paroquiasaoluizrei_ipe. Esmeralda cita "Instagram
(paroquia esmeralda pinhal da serra)", sem o nome do perfil.

## Dados publicados com defeito (mantidos como estão ou deixados vazios)

- Bom Jesus e São José dos Ausentes: e-mail "p.bomjesus2022@gmail" (sem o
  domínio completo); não entrou.
- São Paulo Apóstolo (Lagoa Vermelha): telefone (54) 9908-1901, com 8
  dígitos; entrou como publicado.
- Paróquia São Paulo (Vila São Paulo, Ipê): a página repete o endereço de
  Vila Segredo; endereço deixado vazio.
- Catedral: "Quinta-feira 18h (no Santuário)", sem dizer qual santuário; no
  `nao_cabe`.

## O que falta para o próximo estado

- Horários das 17 paróquias sem horário (perfis citados no SEM-HORARIO).
- Endereço e contato da Paróquia São Sebastião de André da Rocha.
- Horários das comunidades (nenhuma página traz).
