# Diocese de Uruguaiana (RS): fontes da pesquisa de 13/11/2026

Sé em Uruguaiana; Fronteira Oeste do Rio Grande do Sul. Bispo: Dom Clésio
Facco, SAC (posse em 17/08/2025). Cúria: Rua Santana, 2612, Centro,
Uruguaiana, (55) 3412-1246. Padroeiros diocesanos: São Miguel Arcanjo e
Nossa Senhora Conquistadora. Província eclesiástica de Santa Maria.

## Resumo

- **17 unidades pastorais** em `saida/uruguaiana.json`: 1 catedral (Sant'Ana)
  e 16 paróquias. Cidades: Uruguaiana (4), Alegrete (3), São Borja (2) e uma
  em cada: Barra do Quaraí, Itacurubi, Itaqui, Maçambará, Manoel Viana,
  Quaraí, Santiago, São Francisco de Assis.
- **14 com horário de missa**, todas com confiança média: os horários vêm da
  página de cada paróquia no site da diocese (iguais aos da página "Missas"),
  sem data de atualização. O site está mantido (bispo empossado em 2025,
  paróquia criada em 2023), mas a página da Imaculada Conceição (São Borja)
  ainda fala de "horário de verão", que não existe desde 2019.
- **3 sem horário** (confiança baixa; campo de horários vazio no site):
  N. S. da Conceição (Santiago), Sagrado Coração de Jesus (Maçambará) e São
  José Operário (Barra do Quaraí). Lista em `SEM-HORARIO-uruguaiana.txt`.
- Confissão: nenhuma página publica. Adoração: São Francisco de Borja
  (quinta, 6h às 16h45) e a bênção do Santíssimo de Quaraí (1ª e 3ª quinta,
  11h); a da Catedral e a de São Miguel Arcanjo não têm hora (ficaram no
  `nao_cabe`).
- O site não divulga foranias nem regiões pastorais; a observação de cada
  item diz isso. Nenhuma página de paróquia cita Instagram ou Facebook
  próprio (só os da diocese).
- Todo `id_banco` é null: o banco não tem nada do Rio Grande do Sul.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese (17 paróquias por
cidade), batida com as 17 páginas individuais.

Conferência:
- GCatholic (atualizado em 09/11/2026): 16 paróquias. Falta a São José
  Operário de Barra do Quaraí, criada em 2023 e confiada a comunidade
  religiosa (Obra de Maria). O GCatholic lista também a Capelania Militar de
  Uruguaiana (do Ordinariado Militar), que ficou fora.
- CNBB Sul 3 (página da diocese, ainda com a sé vacante): "16 Paróquias,
  sendo uma coordenada por Comunidade Religiosa"; o GCatholic dá 16 paróquias
  e 268 missões. A diferença é a paróquia nova.

Ficou fora: o "Santuário Diocesano" de Nossa Senhora Conquistadora, que a
diocese apresenta como obra em construção, com "missa mensalmente, sempre no
dia 15", sem dizer onde.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://www.diocesedeuruguaiana.org.br/paroquias/ (lista oficial)
- https://www.diocesedeuruguaiana.org.br/espiritualidade/missas/ (todos os
  horários numa página)
- Uma página por paróquia, com pároco, horários, expediente, endereço,
  telefone e e-mail: https://www.diocesedeuruguaiana.org.br/paroquias/<nome>
  (as URLs estão no campo `fontes` de cada item).
- https://www.diocesedeuruguaiana.org.br/diocese/bispo e
  .../diocese/santuario-diocesano

Contatos: só telefone e e-mail que a página dá como da paróquia (bloco
"Contato"). Os e-mails dos padres que aparecem no bloco "A Paróquia" ficaram
fora. Onde a página dá dois números, o segundo (celular) foi para a
observação. Em Barra do Quaraí só há o e-mail do pároco, que ficou fora.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/urug0.htm e
  https://gcatholic.org/churches/local/urug0
- https://cnbbsul3.org.br/diocese-de-uruguaiana/

## O que falta para o próximo estado desta pesquisa

- Horários de Santiago, Maçambará e Barra do Quaraí: perfis próprios das
  paróquias (nenhum citado pela diocese), na rodada com busca na web.
- Reconferir os horários com data: nenhuma página tem data, e a de São Borja
  (Imaculada Conceição) tem texto anterior a 2019.
- Capelas e comunidades: o site não lista nenhuma (a diocese fala em quase
  300 comunidades).
- Bairro das matrizes: o site só dá rua e número (exceto São José de
  Alegrete, Cidade Alta).
