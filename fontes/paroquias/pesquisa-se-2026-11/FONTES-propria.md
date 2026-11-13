# Diocese de Propriá (SE): fontes da pesquisa de 13/11/2026

Sé em Propriá; baixo São Francisco sergipano. Bispo: Dom George Luís Amaral
Muniz (nomeado em 25/10/2025).
Cúria: Travessa Municipal, 117, Centro, Propriá, (79) 98171-9112,
diocesedepropriase@gmail.com (a página da Cúria escreve também
diocesepropriase@gmail.com; o rodapé de todo o site usa a primeira forma).

## Resumo

- **31 unidades pastorais** em `saida/propria.json`: 1 catedral e 30
  paróquias, em 3 vicariatos (Santíssima Eucaristia, Bom Jesus dos
  Navegantes e Imaculada Conceição). A diocese não tem quase-paróquia nem
  área pastoral na lista oficial.
- **30 com horário de missa** (29 com confiança alta e 1 média), todas com
  fonte nas páginas de vicariato do site da diocese, lidas em 13/11/2026. O
  site traz um quadro por paróquia: contato, pároco, horários das missas,
  criação, endereço, secretaria e padroeiro.
- **1 sem horário** (confiança baixa): Bom Jesus dos Pobres, em Canhoba; a
  própria página diz "Consultar agenda da paróquia".
- Confiança média: Nossa Senhora das Dores (Povoado Lagoa Bonita), cujo
  domingo é "11h ou 19h, consultar a programação"; ficou só a quinta fixa.
- A diocese só publica horário de MISSA: nenhuma unidade entrou com
  confissão ou adoração.
- Todo `id_banco` é null: o banco não tem nada de Sergipe.

## Lista das unidades

A lista vem das três páginas de vicariato do site oficial (31 quadros, um
por paróquia); a página "Todas as paróquias" repete os mesmos 31. Capelas e
comunidades entraram só quando o quadro de horários as nomeia (Catedral:
Santuário de Nossa Senhora das Graças, Carmelo da Imaculada Conceição,
Igreja do Rosário, Comunidade do Matadouro; Cedro de São João: São
Sebastião, Telha, Poço dos Bois, Bela Vista, São Pedro; Poço Redondo:
Igreja de São José, Capela de Nossa Senhora da Saúde; Itabi: Capela de São
Francisco; Porto da Folha: Capela de Santa Terezinha; Nossa Senhora da
Glória: Igreja Nova; Nossa Senhora de Lourdes: Santuário Eucarístico).

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 35
igrejas): lá estão a catedral, 27 paróquias e 1 santuário; batem com o site
da diocese. O anuário não traz as 3 paróquias mais novas (São José em Lagoa
do Rancho, 2021; Nossa Senhora das Dores em Lagoa Bonita, 2022; São José no
Povoado São José da Caatinga, 2025). As demais igrejas do anuário sem
paróquia própria: a de Telha (Nossa Senhora do Perpétuo Socorro) entrou
como igreja da paróquia de Cedro de São João, porque o quadro de horários
de Cedro traz missas em Telha; o nome da igreja veio do anuário.

Divergências anotadas:
- O site dá à paróquia de Monte Alegre a cidade "Monte Alegre"; o JSON usa o
  nome oficial do município, Monte Alegre de Sergipe (como o anuário).
- O endereço da paróquia de Santa Luzia (Povoado Lagoa da Volta) sai no site
  como "Pov. Lagoa do Rancho", provável engano; ficou de fora do JSON, com a
  nota na observação.
- Telefones com DDD de fora (77 em São Miguel, 82 em Santana do São
  Francisco) são os que a diocese publica; ficaram como estão, com nota.
- A página da catedral data a freguesia de 1718; o quadro da paróquia diz
  1717. Não entra no JSON, fica o registro.

## Páginas do site da diocese (lidas em 13/11/2026)

Site oficial: https://www.diocesedepropria.com (Wix). O domínio
www.diocesedepropria.com.br existe mas está vazio (listagem de diretório).

- https://www.diocesedepropria.com/ (menu, contatos da cúria no rodapé)
- https://www.diocesedepropria.com/vicariato-sant%C3%ADssima-eucar%C3%ADstia
  (11 paróquias, catedral incluída, com horários)
- https://www.diocesedepropria.com/vicariato-bom-jesus-dos-navegantes
  (9 paróquias, com horários)
- https://www.diocesedepropria.com/vicariato-imaculada-concei%C3%A7%C3%A3o
  (11 paróquias, com horários)
- https://www.diocesedepropria.com/todas-as-paroquias (os mesmos 31 quadros)
- https://www.diocesedepropria.com/c%C3%BAria (endereço, telefone, e-mail)
- https://www.diocesedepropria.com/catedral (história; sem horário)

## Instagram

Os usuários vieram do próprio site da diocese (campo Contato de cada
quadro), não foi preciso ler perfil por dentro: diocesedepropria (diocese),
pnsenhoradasaude, paroquiadeilhadasflores, _psjose.caatinga,
paroquiadeneopolis, paroquiadejapoata, paroquiapirambuoficial,
bomjesuscanhoba, paroquiasaofranciscodeassis25,
paroquiasenhordasmisericordias, paroquiadapiedade_graccho,
paroquia.n.s.maedoshomens, paroquialagoadorancho, santaluzialagoadavolta.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/prop0 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dprop.html
- https://en.wikipedia.org/wiki/Diocese_of_Propri%C3%A1

## O que falta para o próximo estado desta pesquisa

- Horário de Canhoba (Bom Jesus dos Pobres) e o domingo de Lagoa Bonita: o
  caminho é a agenda das paróquias no Instagram.
- Horários de confissão e adoração: a diocese não os publica.
- O Santuário da Divina Misericórdia, em Nossa Senhora da Glória, está no
  anuário mas não na lista de paróquias da diocese; ficou na observação da
  paróquia de Nossa Senhora da Glória, fora do JSON como unidade.
- Igrejas do anuário sem fonte que as ligue a uma paróquia: Nossa Senhora
  do Monte Serrat (Canhoba), Nossa Senhora de Fátima (Cedro de São João),
  São Vicente de Paula (Propriá) e Santa Cruz; ficaram fora do JSON.
- E-mail das paróquias: o site não traz nenhum.
