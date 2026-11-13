# Diocese de São Mateus (ES): fontes da pesquisa de 13/11/2026

Sé em São Mateus; norte do Espírito Santo. Bispo: Dom Paulo Bosi Dal'Bó.
Cúria: Av. João XXIII, 410, Centro, São Mateus, CEP 29930-420,
(27) 3763-1177 e (27) 99984-5026 (página de contato do site).

## Resumo

- **28 unidades pastorais** em `saida/sao-mateus.json`: 1 catedral (Paróquia
  São Mateus, cuja matriz é a Catedral de São Mateus), 26 paróquias e 1 setor
  missionário (Santa Teresinha do Menino Jesus, em Cedrolândia, Nova Venécia;
  no formato entrou como área missionária), em 4 foranias: Praiana (8),
  Capixaba (9), Mineira (5) e Baiana (6).
- **1 com horário** (confiança alta): a Paróquia Nossa Senhora Aparecida e
  Imaculado Coração de Maria, de Montanha, pelo Santuário Diocesano do
  Imaculado Coração de Maria, em Vinhático, com página própria no site da
  diocese (missa de quarta às 19h30 e de domingo às 9h e 19h; confissões
  antes da missa de quarta e depois das de domingo).
- **27 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. As páginas de paróquia
  do site da diocese trazem forania, endereço, telefones, e-mail e redes,
  mas nenhuma traz horário de celebração.
- Todo `id_banco` é null: o banco não tem nada do Espírito Santo.
- Nenhuma unidade fica fora do ES (não foi preciso o campo `uf`).

## Lista das unidades

A lista vem do site da diocese, que é WordPress com a API aberta:
`https://diocesedesaomateus.org.br/wp-json/wp/v2/paroquias?per_page=100`
devolve as 28 unidades de uma vez, com o nome e a forania de cada uma
(a listagem em HTML pagina de 10 em 10). O conteúdo de cada página é
Elementor, então o texto veio do HTML de cada uma, não da API.

Conferência contra o anuário (GCatholic, lido em 13/11/2026, 29 igrejas):
bate com 26 paróquias + catedral (estatística de 2022: 26 paróquias). O
anuário não traz as duas unidades mais novas (Paróquia Nossa Senhora do
Perpétuo Socorro, em São Gabriel da Palha, e o Setor Missionário Santa
Teresinha do Menino Jesus); traz a mais o Santuário do Imaculado Coração de
Maria (Vinhático, segunda igreja da paróquia de Montanha no JSON) e a antiga
catedral ("Igreja Velha" de São Mateus), que não é unidade pastoral e ficou
fora.

Casos anotados:

- A paróquia de Ponto Belo aparece na diocese como "Nossa Senhora de Fátima /
  Sagrado Coração de Jesus"; o anuário dá a Igreja do Sagrado Coração de
  Jesus como sede e lista também a de Nossa Senhora de Fátima, as duas em
  Ponto Belo. O JSON pôs o Sagrado Coração como matriz e a outra como
  comunidade.
- Duas paróquias Nossa Senhora das Graças (Boa Esperança e Vila Valério) e
  duas São José (Águia Branca e Alto Rio Novo): a cidade distingue.
- Sedes em distrito: Braço do Rio (Conceição da Barra), Nestor Gomes
  (São Mateus), Guriri (São Mateus), Água Limpa (Jaguaré) e Cedrolândia
  (Nova Venécia).

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedesaomateus.org.br/ (menu, contatos)
- https://diocesedesaomateus.org.br/paroquias/ (listagem; a API wp-json deu a
  lista completa)
- https://diocesedesaomateus.org.br/paroquias/catedral/ e as outras 27
  páginas de paróquia (as URLs estão no campo `fontes` de cada unidade do
  JSON): forania, padres, endereço, telefones, e-mail e Instagram de cada uma
- https://diocesedesaomateus.org.br/santuario-imaculado-coracao-de-maria/
  (a única página com horários de celebração)
- https://diocesedesaomateus.org.br/contato/ (cúria)

Os telefones das páginas de paróquia entraram como estão lá: fixo em
`telefone` e o segundo número, celular, em `whatsapp`; paróquia com um número
só ficou com ele em `telefone`. Os e-mails seguem o padrão diocesano
`dsm.<cidade>@gmail.com`.

## Instagram (só o usuário, anotado da página da diocese)

Os perfis vieram dos links nas páginas de paróquia do site da diocese;
nenhum foi lido por dentro (bloqueio de robôs), e a busca não mostrou
horário em trecho nenhum. Diocese: diocesedesaomateus. Cinco unidades não
têm perfil ligado na página (Conceição da Barra, Boa Esperança, Ponto Belo,
Santa Rita de Cássia e São João Paulo II).

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/zmat0.htm e
  https://gcatholic.org/churches/local/zmat0 (anuário, 13/11/2026)
- https://catholic-hierarchy.org/diocese/dsamt.html (não foi preciso abrir)
- PDFs do site da diocese (nomeações de 07/2025 e 11/2025, "Livro Vida e
  Sacramentos 2024", "275 anos da Paróquia São Mateus"): confirmam nomes de
  paróquias; nenhum traz horário.

## O que falta para o próximo estado desta pesquisa

- Horário das 27 unidades sem fonte: o caminho mais provável são os perfis
  das paróquias no Instagram e no Facebook, que a busca não indexa por
  dentro, e a rádio diocesana Kairós FM 94,7.
- Capelas e comunidades: nenhuma fonte as lista com nome e lugar, então o
  JSON ficou só com as matrizes (e o santuário de Vinhático).
- O porte estimado na tarefa (~40 paróquias) não se confirmou: são 28
  unidades, conferidas pela API do site e pelo anuário.
