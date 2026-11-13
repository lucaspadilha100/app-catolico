# Diocese de São Raimundo Nonato (PI): fontes da pesquisa de 13/11/2026

Sé em São Raimundo Nonato; sudeste do Piauí (Serra da Capivara), 25
municípios. Bispo: Dom Ronilton Souza de Araújo, SCJ (posse em
30/09/2023). Cúria: Praça Comendador Piauilino, São Raimundo Nonato,
CEP 64770-000 (Catholic-Hierarchy dá o nº 15 e o telefone (89) 3582-3632;
a Wikipédia dá o nº 185). Padroeiro: São Raimundo Nonato.

## Resumo

- **29 unidades** em `saida/sao-raimundo-nonato.json`: 1 catedral, 1
  santuário com paróquia (N. S. das Mercês, bairro Aldeia) e 27 paróquias.
  Cidades: São Raimundo Nonato (3), São João do Piauí (2), Canto do Buriti
  (2) e uma em cada um dos outros 22 municípios.
- **1 com horário** (confiança média): a Catedral, pelo trecho da página dela
  no Facebook (@catedralsrnpi) que a busca mostrou: domingo 7h, 9h e 19h30;
  sábado 19h30; "dias de semana" 18h15 sem dizer quais (foi para o
  `nao_cabe`). Sem data. As outras 28 entram com `horarios: []` e confiança
  baixa.
- Todo `id_banco` é null: o banco ainda não tem nada do Piauí.

## Dificuldade principal

O site oficial (www.diocesedesaoraimundo.com.br, o da Wikipédia) não
responde: o proxy não alcança o servidor (connect_unreachable), com e sem
"www". Outros nomes tentados (diocesedesaoraimundononato.org.br e .com.br,
diocesesaoraimundononato.org.br, diocesesrn.org.br) também não existem. A
diocese publica pelo Instagram (diocesedesaoraimundononato) e pelo
Facebook, que não se leem por dentro. Por isso o horário depende de trecho
de busca, e a busca quase não indexa as paróquias pequenas.

## Lista das unidades

A lista vem do **Mapa das OSC (IPEA)**, que mostra cada filial do CNPJ da
diocese (06.822.142) com nome e endereço cadastrados. São 30 filiais de
paróquia (0002 a 0031); uma delas (0009, Paróquia de São José, Paes
Landim) ficou fora: Paes Landim não está na lista de municípios da diocese
e a diocese perdeu território para Oeiras em 2008. As 29 restantes cobrem
os 25 municípios que a Wikipédia lista como território da diocese, e a
conta bate com a do Catholic-Hierarchy (29 paróquias no Anuário de 2023,
dados de 2022). A Wikipédia diz 28 paróquias, número mais antigo (a Santa
Teresinha do Galo Branco foi criada em 2012).

Confirmações vindas da Igreja:
- As 3 paróquias da cidade de São Raimundo Nonato (Catedral, Santuário de
  N. S. das Mercês no bairro Aldeia e Santa Teresinha no Galo Branco): nota
  da diocese sobre a chegada de Dom Ronilton, publicada pela CNBB Nordeste 4
  (12/09/2023).
- Paróquia Bom Jesus dos Aflitos, Caracol: CNBB Nordeste 4, 21/07/2026.
- Igrejas jubilares de 2025: Catedral, Santuário Diocesano N. S. das Mercês
  e Santuário Senhor do Bonfim (Dirceu Arcoverde).

Conferência contra o GCatholic (09/11/2026): o GCatholic NÃO tem a lista das
igrejas desta diocese (a página `churches/local/zram0` não existe); tem só
a Catedral, 5 matrizes (Sant'Ana de Canto do Buriti, N. S. de Fátima de
Dirceu Arcoverde, São João Batista de Anísio de Abreu, Bom Jesus dos Aflitos
de Caracol, Bom Jesus de Pedro Laurentino) e 2 santuários (N. S. das Mercês
e Senhor do Bonfim). Tudo isso está na lista. O GCatholic e o
Catholic-Hierarchy dão 39 paróquias para 2023 (Anuário de 2024), salto de 10
em um ano que nenhuma fonte da diocese explica; não achamos nenhuma
paróquia além das 29. Fica como pendência: pode ser erro do anuário ou
paróquias novas que só a diocese pode confirmar.

O nome de cada paróquia é o do cadastro (Mapa das OSC), com acentos
restaurados. Cadastro: "Paroquia de Sao Joao de Anisio de Abreu" virou
Paróquia São João Batista (GCatholic: Igreja São João Batista); "Igreja
Matriz do Divino Espirito Santo" (Ribeira do Piauí) virou Paróquia Divino
Espírito Santo. O endereço do cadastro foi para `endereco` só quando é a
praça do padroeiro (Praça Santana, Praça São Francisco, Praça São José,
Praça Santo Expedito, Praça N. S. do Perpétuo Socorro, Praça Honório Santos,
Praça Francisco Xavier de Macedo); os demais estão na observação, porque o
endereço fiscal pode ser o da casa paroquial.

## Fontes

- Mapa das OSC (IPEA), uma página por filial:
  https://mapaosc.ipea.gov.br/detalhar/422650 (sede), 422651 a 422655,
  426841 a 426864 (lidas em 13/11/2026)
- https://cnbbne4.org.br/dom-ronilton-chega-em-sao-raimundo-nonato-dia-28-diocese-divulga-detalhes-sobre-a-posse/
- https://cnbbne4.org.br/santas-missoes-populares-renovam-a-fe-e-fortalecem-a-acao-evangelizadora-da-igreja-em-caracol-pi/
- https://cnbbne4.org.br/150-anos-da-catedral-de-sao-raimundo-nonato-celebracao-reune-bispos-de-diferentes-geracoes/
- https://cnbbne4.org.br/igreja-constitui-40-locais-de-peregrinacao-no-piaui-por-ocasiao-do-jubileu-da-esperanca/
- https://www.facebook.com/catedralsrnpi/ (só o trecho da busca; o Facebook
  não abre neste ambiente)
- https://pt.wikipedia.org/wiki/Diocese_de_S%C3%A3o_Raimundo_Nonato
  (municípios e número de paróquias)
- https://gcatholic.org/dioceses/diocese/zram0 e as páginas de igreja 2543,
  55599 a 55603, 150742, 150743
- https://www.catholic-hierarchy.org/diocese/dsarn.html

Registros de CNPJ em agregadores (cnpja, econodata, casadosdados, cnpj.biz)
bloquearam ou limitaram a consulta; não foram usados. A Paes Landim (0009)
veio de um trecho de busca do econodata.

## Perfis vistos só pela busca

Catedral: Facebook catedralsrnpi. Sant'Ana de Canto do Buriti: Facebook
"Igreja Matriz de Santana" e YouTube @matrizsantanacdb. São Lourenço:
Facebook paroquiaslp. Diocese: Instagram diocesedesaoraimundononato. Nenhum
Instagram de paróquia apareceu; o campo ficou vazio.

## O que falta para o próximo estado desta pesquisa

- Horários de 28 paróquias e confissões de todas. Precisa do site da
  diocese de volta ou de contato com a Pascom diocesana.
- Foranias/regiões pastorais: nenhuma fonte lida as publica.
- Telefones das secretarias: nenhum publicado pela diocese foi encontrado.
  Um guia de ônibus dá (89) 3582-1446 para o Santuário N. S. das Mercês
  (R. Francisco de A. Macedo, 1415, Aldeia), mas é terceiro e ficou fora.
- Capelas e comunidades: nenhuma lista foi encontrada.
- A diferença 29 x 39 paróquias do Anuário de 2024.
