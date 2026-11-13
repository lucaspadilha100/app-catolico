# Arquidiocese de Santa Maria (RS): fontes da pesquisa de 13/11/2026

Sé metropolitana em Santa Maria; região central do Rio Grande do Sul.
Arcebispo: Dom Leomar Antônio Brustolin. Cúria: Rua Silva Jardim, 2038,
Santa Maria, (55) 3290-6236 ou 3290-6237, ascom@arquism.com.br; Instagram
@arquidiocesesantamaria (página da arquidiocese no site do Regional Sul 3
da CNBB). Sufragâneas: Cachoeira do Sul, Cruz Alta, Santa Cruz do Sul,
Santo Ângelo e Uruguaiana.

## Resumo

- **40 unidades pastorais** em `saida/santa-maria.json`: 1 catedral, 1
  basílica (Medianeira) e 38 paróquias. Cidades: Santa Maria (16, contando
  os distritos de Arroio Grande e Boca do Monte e o lugar Bom Fim) e uma em
  cada: Cacequi, Dilermando de Aguiar, Dona Francisca, Faxinal do Soturno,
  Formigueiro, Itaara, Ivorá, Jaguari, Júlio de Castilhos, Mata, Nova
  Esperança do Sul, Nova Palma, Pinhal Grande, Quevedos, Restinga Seca, São
  João do Polêsine (2, uma em Vale Vêneto), São Martinho da Serra, São Pedro
  do Sul, São Sepé, São Vicente do Sul, Silveira Martins, Tupanciretã e Vila
  Nova do Sul.
- **Nenhuma com horário, nenhuma com contato.** Todas com `horarios: []` e
  confiança baixa, listadas em `SEM-HORARIO-santa-maria.txt` (sem perfil
  citado: a fonte oficial não pôde ser lida).
- Duas matrizes são santuário: Nossa Senhora de Lourdes (Paróquia
  Ressurreição, Santa Maria) e Nossa Senhora das Vitórias (Cacequi). A
  Medianeira entrou como `basilica` com a igreja de tipo `santuario`.
- Forania de cada paróquia: não informada (ver abaixo).
- Todo `id_banco` é null.

## Por que tão pouco

O site oficial, https://www.arquism.com (também arquism.com.br), responde a
toda página, inclusive robots.txt e sitemap.xml, com o "Vercel Security
Checkpoint" (HTTP 429, `x-vercel-mitigated: challenge`). É um bloqueio
anti-robô; não foi contornado. Tentado três vezes ao longo do dia
13/11/2026. Outros endereços testados não existem (DNS não resolve):
arquidiocesedesantamaria.org.br, arquidiocesesm.org.br, arquism.org.br e
domínios de paróquia como basilicamedianeira.com.br,
santuariomedianeira.org.br, catedralsantamaria.com.br. A Rádio Medianeira
(radiomedianeira.com.br) é emissora comercial e não publica horários de
missa.

## Lista das unidades

A lista vem do GCatholic (https://gcatholic.org/churches/local/zmar7,
atualizado em 09/11/2026), uma página por igreja, com a data de criação de
cada paróquia (vai na observação). O GCatholic tem 40 paróquias, mais o
Santuário Tabor de Schoenstatt e o Seminário São José, que não são
paróquias e ficaram fora.

Contagem da própria arquidiocese (texto do site do Regional Sul 3 da CNBB,
editado em 03/12/2024): **39 paróquias, uma quase-paróquia e uma área
missionária**, 41 unidades, em 26 municípios. Ou seja, falta uma unidade, e
não se sabe quais são a quase-paróquia e a área missionária. Dois municípios
da arquidiocese não têm paróquia no GCatholic: **Jari** e **Toropi**; é
provável que a unidade que falta, ou a área missionária, esteja num deles.
Nada disso entrou no JSON sem fonte.

Lugares: o GCatholic põe "Arroio Grande" (São Pedro), "Boca do Monte" (São
Caetano) e "Bom Fim" (Nosso Senhor do Bom Fim) como cidade; são distritos ou
lugar de Santa Maria e entraram com `cidade` Santa Maria e o lugar em
`localidade`. "Vale Vêneto" (Corpus Christi) é de São João do Polêsine.

## Fontes

- https://gcatholic.org/dioceses/diocese/zmar7.htm (estatística de
  31/12/2022: 40 paróquias, 569 missões)
- https://gcatholic.org/churches/local/zmar7 e uma página por igreja,
  https://gcatholic.org/churches/brazil/<id>.htm (URL no campo `fontes`)
- https://cnbbsul3.org.br/arquidiocese-de-santa-maria_/ (contagem,
  municípios e contatos da cúria)
- https://www.catholic-hierarchy.org/diocese/dsmbr.html (endereço da cúria)

## O que falta para o próximo estado desta pesquisa

- Tudo o que o site da arquidiocese teria: horários, contatos, endereços,
  foranias e capelas das 40 paróquias. Se o bloqueio do site continuar, a
  rodada com busca precisa achar os perfis de cada paróquia (a fonte oficial
  só cita o perfil da arquidiocese, @arquidiocesesantamaria).
- Identificar a quase-paróquia, a área missionária e a 41ª unidade (olhar
  Jari e Toropi).
- Endereço e horários do Santuário Tabor (Schoenstatt), que não é paróquia.
