# Diocese de Santíssima Conceição do Araguaia (PA): fontes da pesquisa de 13/11/2026

Nome atual confirmado: **Diocese de Santíssima Conceição do Araguaia** (forma
curta usada pela própria diocese: Diocese de Conceição do Araguaia).
Prelazia em 1911, suprimida em 1969, restaurada em 1976, diocese desde
16/10/1979. Província de Belém do Pará. Bispo: Dom Dominique You. Padroeira:
Nossa Senhora da Conceição. Cúria: Rua Dom Sebastião Tomás, 1315, Centro,
Conceição do Araguaia, (94) 99160-8519 (Catholic-Hierarchy dá a antiga
Trav. Frei André Blatgé, 335, (94) 3421-1307).

## Resumo

- **13 unidades** em `saida/conceicao-do-araguaia.json`: 1 catedral, 11
  paróquias e 1 quase-paróquia (São João Batista, Sapucaia). Cidades:
  Redenção (2), Santa Maria das Barreiras (2) e uma em cada: Conceição do
  Araguaia, Piçarra, São Geraldo do Araguaia, Rio Maria, Santana do
  Araguaia, Sapucaia, Floresta do Araguaia, Xinguara, Pau d'Arco.
- **Nenhuma com horário**: o site da diocese não publica horário de missa
  (nem a página de paróquias, nem as páginas próprias, que estão vazias, nem
  o site antigo). Todas com `"horarios": []` e confiança baixa. Lista em
  `SEM-HORARIO-conceicao-do-araguaia.txt`.
- Contatos: WhatsApp e e-mail institucional (`@diocesedeconceicao.org.br`)
  de cada paróquia, da página de paróquias. Onde a página diz "Fone/WhatsApp",
  o número foi para os dois campos; onde diz só "WhatsApp", só para o
  WhatsApp. A Senhora Sant'Ana está sem número (a página deixa o campo vazio).
- Regiões pastorais: só três aparecem nas notícias (São João = Catedral e
  Senhora Sant'Ana; São Tomé = Xinguara e Sapucaia; Santo André = Cristo
  Libertador e Guadalupe). As outras ficaram como "não publicada".
- Só a matriz de cada unidade: a diocese não publica capelas ou comunidades
  ligadas a paróquia. Todo `id_banco` é null.

## Lista das unidades

Fonte: https://diocesedeconceicao.org.br/paroquias/ (13 blocos, com
endereço, data de instalação, clero, congregações e contato), a mesma
contagem do tipo `_paroquias` da API do site
(https://diocesedeconceicao.org.br/wp-json/wp/v2/_paroquias, 13 itens,
atualizados entre 2023 e 01/01/2026). As páginas individuais
(`/_paroquias/<slug>/`) só repetem o título e o rodapé da cúria.

Conferência:

- GCatholic (https://gcatholic.org/churches/local/zcon0, 09/11/2026): 13
  paróquias (estatística de 2022) e 26 igrejas. Bate com a diocese, com
  estas diferenças: o GCatholic não tem a São Pedro (Casa de Tábua, 2022), a
  quase-paróquia de Sapucaia nem a Sagrada Família de Pau d'Arco (paróquia em
  08/09/2025); lista igrejas sem paróquia indicada (ver abaixo).
- Catholic-Hierarchy (https://www.catholic-hierarchy.org/diocese/dscar.html):
  13 paróquias em 2022 (Anuário 2023).
- Notícia da elevação de Pau d'Arco: "Instalação da Paróquia Sagrada
  Família de Nazaré em Pau D'Arco e posse do primeiro pároco" (16/09/2025).

Notas:

- **Floresta do Araguaia**: a página da diocese não escreve a cidade da
  Paróquia N. S. das Dores; o CEP 68543-000, o GCatholic e a notícia das
  peregrinações jubilares dão Floresta do Araguaia.
- **São Pedro**: Rua SWG, s/n, distrito de Casa de Tábua, município de Santa
  Maria das Barreiras (como a página escreve).
- Endereço da Catedral: a página de paróquias dá Rua Dom Sebastião Tomás,
  237; o rodapé do site dá a cúria no nº 1315 da mesma rua.

## Pendências (igrejas sem paróquia indicada, só no GCatholic)

Redenção: N. S. Aparecida, N. S. do Perpétuo Socorro, Santa Clara, Santa
Luzia, Santo Antônio, São João Batista, São Raimundo Nonato. Floresta do
Araguaia: Sagrado Coração de Jesus. Piçarra: Sant'Ana. Xinguara: N. S. do
Perpétuo Socorro, São João Batista. São Geraldo do Araguaia: São Geraldo
Magela (e "Cristo Libertador", que o GCatholic chama de igreja de N. S. de
Fátima). Vila Barreira dos Campos: Sagrado Coração de Jesus. São José: São
José Pai Adotivo. Fazenda da Esperança: Jesus, Mestre das Bem-aventuranças.
Fazenda Itaipava: São Joaquim. Ficaram fora do JSON porque a fonte não diz
a paróquia.

## Perfis citados pela fonte oficial

Nenhuma paróquia tem perfil próprio citado. O site cita os da diocese:
Instagram diocesedeconceicao, Facebook diocesedeconceicao, YouTube
c/diocesedeconceicao.

## O que falta para o próximo estado

- Horários de missa das 13 unidades.
- Telefone da Paróquia Senhora Sant'Ana.
- Regiões pastorais das paróquias de Redenção, Rio Maria, Santana do
  Araguaia, Floresta do Araguaia, Pau d'Arco e São Pedro.
- Capelas e comunidades de cada paróquia.
