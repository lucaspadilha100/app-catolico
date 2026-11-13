# Diocese de Araçuaí (MG): fontes da pesquisa de 13/11/2026

Sé em Araçuaí; Vale do Jequitinhonha. Bispo: Dom Geraldo dos Reis Maia.
Cúria: Rua Goiás, 339, Alto Santuário, Araçuaí, (33) 9 9826-7876,
curiaracuai@yahoo.com.br. Padroeiro da catedral: São José.

## Resumo

- **29 unidades pastorais** em `saida/aracuai.json`: 1 catedral, 1
  quase-paróquia (N. S. Aparecida e São Sebastião, José Gonçalves de Minas)
  e 27 paróquias, em 5 regiões pastorais: Araçuaí (8), Itaobim (5), Minas
  Novas (6), Novo Cruzeiro (5) e Pedra Azul (5).
- **18 com horário de missa**, todas com confiança alta (páginas das
  paróquias no site da diocese, atualizadas entre julho de 2025 e março de
  2026).
- **11 sem horário estruturado** (confiança baixa): 9 sem página no site
  (Francisco Badaró, Coronel Murta, Itaobim, Itinga, Ponto dos Volantes,
  Comercinho, Itaipé, Caraí e Curral de Dentro), mais José Gonçalves de
  Minas ("domingo, 9h ou 19h") e Águas Vermelhas ("9h e 19h", sem dia), que
  ficaram no `nao_cabe`.
- Capelas e comunidades com lugar: Virgem da Lapa (Bela Vista,
  Novorizonte), Medina (Tuparecê, General Dutra), Chapada do Norte (Céu Azul,
  Santa Rita do Araçuaí, Cachoeira do Norte, Boa Vista), Turmalina (Peixe
  Cru, Caçaratiba) e Divisa Alegre (Nova Serrana, Bela Vista, Abacaxi,
  Gissaras, Cariri). Igrejas da cidade sem bairro (Santuário N. S. da Lapa,
  Igreja do Rosário de Minas Novas, Santuário N. S. da Conceição de Pedra
  Azul e outras) ficaram no `nao_cabe` da matriz, com os horários.
- O site não traz Instagram das paróquias; só Leme do Prado cita o da
  Pascom (pascom.lp).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Mapa da Diocese" (as 29 unidades por região
pastoral), batida com a página "Paróquias" (20 com página própria, no tipo
"team" do site) e com a página "Clero" (que cita as 29 com o pároco). Bate
com o GCatholic (atualizado em 09/11/2026, "29 parishes"). As igrejas do
GCatholic sem marca de paróquia (N. S. de Fátima e N. S. do Rosário de
Araçuaí, N. S. de Fátima de Francisco Badaró, Bom Jesus de Marambainha, N.
S. do Amparo e São Gonçalo de Minas Novas, N. S. Aparecida de Padre Paraíso,
Santuário N. S. da Lapa) não entraram como unidade.

Nomes: o mapa e as páginas dizem "N. Sra. da Conceição" para Berilo,
Francisco Badaró, Comercinho e Pedra Azul; a página do clero diz "Imaculada
Conceição". Seguimos o mapa e anotamos na observação. A página do clero
chama a catedral de "Quase-paróquia Catedral Santuário São José e Santa
Teresinha do Menino Jesus"; entrou como catedral.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedearacuai.com.br/team/<slug>/ (uma por paróquia, com
  horários, clero, telefone, e-mail e endereço; data de atualização tirada do
  sitemap wp-sitemap-posts-neeon_team-1.xml).
- https://diocesedearacuai.com.br/paroquias/
- https://diocesedearacuai.com.br/mapa-da-diocese/
- https://diocesedearacuai.com.br/clero/

## Decisões

- A página da catedral só traz os contatos da Cúria: ficaram fora dos
  contatos da catedral.
- Santo Antônio (Araçuaí): "1ª quinta, 7h missa com o Santíssimo exposto o
  dia todo; 19h hora santa" entrou como missa às 7h e adoração às 19h.
- Telefone de Turmalina como publicado ("(38) 91603923", 8 dígitos).

## Pendências

- Contatos e horários das 9 paróquias sem página e horários de José
  Gonçalves de Minas e Águas Vermelhas (lista `SEM-HORARIO-aracuai.txt`).
- Bairro das igrejas urbanas que ficaram no `nao_cabe`.
