# Diocese de Itumbiara (GO): fontes da pesquisa de 13/11/2026

Sé em Itumbiara; sul de Goiás (Itumbiara, Goiatuba, Morrinhos,
Piracanjuba, Pontalina). Bispo: Dom Antônio Fernando Brochini.

## Resumo

- **26 unidades** em `saida/itumbiara.json`: 1 catedral e 25 paróquias, uma
  delas com a matriz santuário (Santuário Diocesano Divino Pai Eterno,
  Panamá: `paroquia` com a primeira igreja de tipo `santuario`). Foranias:
  Santa Rita de Cássia (9), Nossa Senhora d’Abadia (8) e Divino Pai Eterno (9).
- **25 com horário** (24 alta, 1 média): a página "Paróquias" do site da
  diocese, modificada em 08/10/2026, traz de cada uma endereço, telefone,
  e-mail institucional (@diocesedeitumbiara.com.br), atendimento da
  secretaria, confissão e missas. A de confiança média é N. S. da Abadia
  (Buriti Alegre): a fonte dá as missas por igreja (Rosário, São Sebastião)
  sem dizer qual é a matriz; ficaram no `nao_cabe`, e a matriz ficou só com
  o horário de confissão.
- **Sem horário**: São Sebastião (Goiatuba). O bloco da paróquia termina em
  "Atendimento Secretaria", sem missas; nada achado na busca.
- "Atendimento Confissão/Direção Espiritual" com dia e hora entrou como
  `confissao` (observação diz "confissão e direção espiritual"). Onde a
  fonte manda falar com a secretaria, nada entrou.
- Capelas: entraram como igrejas só as que têm lugar (Conjunto Morada dos
  Sonhos, Dionária Rocha, Almerindonópolis, Nilópolis, Sarandi, Feirinha,
  Guarilândia). As demais, com horário mas sem bairro, estão no `nao_cabe`
  da matriz.
- Todo `id_banco` é null.

## Lista das unidades

https://diocesedeitumbiara.com.br/paroquias/ (página do WordPress, lida
pela API `/wp-json/wp/v2/pages`, modificada em 08/10/2026), por forania.

Conferência com o GCatholic (09/11/2026; 27 paróquias e 1 missão nas
estatísticas): a lista de igrejas do GCatholic tem as mesmas 26 paróquias e
mais a igreja São Francisco de Assis de Pontalina, sem marca de paróquia
(é capela da paróquia Santa Rita, com missa na página da diocese).
Diferenças de nome: o GCatholic dá Mairipotaba como "São Sebastião e Nossa
Senhora do Carmo" (a diocese diz "Nossa Senhora do Rosário") e põe "Nossa
Senhora das Graças" como igreja da paróquia São Sebastião de Vicentinópolis.
Seguimos a diocese.

## Observações

- Telefones repetidos entre paróquias, como publicados: Mairipotaba e
  Cromínia (64) 3419-1155; Professor Jamil e Aloândia (64) 99335-3458.
- Água Limpa: a fonte dá só a missa de sábado 19h30.
- Cristo Rei: "Terça 19h (Novena de Santo Expedito)" e "na primeira sexta,
  missa 19h" ficaram no `nao_cabe` (não dizem a igreja).

## Pendências

- Missas da Paróquia São Sebastião (Goiatuba).
- Bairros das capelas citadas só pelo nome (a maioria das paróquias).
- A matriz de Buriti Alegre: confirmar se as missas "Nossa Senhora do
  Rosário" são da matriz.
