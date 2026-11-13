# Diocese de Teófilo Otoni (MG): fontes da pesquisa de 13/11/2026

Sé em Teófilo Otoni; Vale do Mucuri. Bispo: Dom Messias dos Reis Silveira.
Cúria: Rua Padre Virgulino, 751, Centro, Teófilo Otoni, (33) 3522-2618.
Padroeira da catedral: Nossa Senhora Imaculada Conceição.

## Resumo

- **43 unidades pastorais** em `saida/teofilo-otoni.json`: 1 catedral, 1
  santuário que é também paróquia (Senhor Bom Jesus, Teófilo Otoni) e 41
  paróquias, em 7 setores: Teófilo Otoni (10), Itambacuri (7), Malacacheta
  (6), Mantena (8), Águas Formosas (5), Nanuque (4) e Ataléia (3).
- **32 com horário de missa**: 7 com confiança alta (páginas atualizadas em
  2025 e 2026) e 25 com confiança média (páginas de 2023 e 2024, ou com
  divergência, como a catedral).
- **11 sem horário de missa** (confiança baixa): N. S. das Graças (Mantena),
  N. S. da Glória (Franciscópolis), N. S. D'Ajuda (Novo Oriente de Minas),
  N. S. Aparecida (Frei Inocêncio), Imaculada Conceição de Frei Gaspar,
  Setubinha e Nanuque, N. S. dos Anjos (Itambacuri), São Geraldo (Central de
  Minas), Senhor Bom Jesus de Concórdia do Mucuri (só confissões) e Senhor
  Bom Jesus (Crisólita, página vazia).
- Confissões: entraram as que a página dá com dia e hora (muitas são na
  secretaria; a observação traz o "até").
- O site não publica Instagram nem WhatsApp das paróquias (só os da
  diocese): os campos ficaram vazios.
- Capelas e comunidades com lugar: São Jacinto (17 comunidades, pelo
  histórico da página) e Mendes Pimentel (Comunidade São Francisco de Assis,
  Flórida). Capelas sem bairro no `nao_cabe` (Pescador, São Sebastião de
  Teófilo Otoni).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do tipo de conteúdo "paroquias" do site da diocese (API do
WordPress, 44 entradas: 43 paróquias e uma notícia arquivada por engano no
mesmo tipo). Bate com o GCatholic (atualizado em 09/11/2026, "43
parishes"), nome por nome. As igrejas do GCatholic sem marca de paróquia
(Divino Espírito Santo de Epaminondas Otoni, N. S. da Penha de Mairinque,
santuário de Taquara, Topázio e as igrejas N. S. Aparecida, Sagrada Família,
Santa Clara e São Cristóvão de Teófilo Otoni) não entraram.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://dioceseteofilotoni.com.br/paroquias/<slug>/ (uma por paróquia, com
  setor, telefone, e-mail, secretaria, confissões, endereço e horários; as
  URLs estão no campo `fontes`, com a data de atualização da página).
- https://dioceseteofilotoni.com.br/wp-json/wp/v2/paroquias (a lista).
- https://dioceseteofilotoni.com.br/horarios-de-missa/ (página geral, sem
  data, que só preenche a catedral e N. S. de Fátima).

## Decisões

- Catedral: a página da catedral (2025) dá segunda a quinta 19h, quarta
  também 7h, sábado 19h e domingo 7h, 10h, 17h e 19h; a página geral dá
  segunda 19h e terça a sexta 7h e 19h. Valeu a da catedral, com confiança
  média.
- "Concórdia" é a sede da Paróquia Senhor Bom Jesus; o GCatholic a chama de
  Concórdia do Mucuri. Entrou com cidade Ladainha e localidade Concórdia do
  Mucuri (distrito): conferir o município.
- O nome da paróquia de Jampruca vem "Sagrada Coração" no site; entrou como
  Sagrado Coração de Jesus.
- "Missa 18h30, adoração ao Santíssimo" às quartas em São Jacinto entrou
  como adoração.

## Pendências

- Horários das 11 paróquias da lista `SEM-HORARIO-teofilo-otoni.txt` (o site
  da diocese não cita perfis de rede social das paróquias: a busca terá de
  achar pelo nome e cidade).
- As páginas de 2023 e 2024 merecem reconferência.
- Comunidades das demais paróquias: o site não as lista com lugar.
