# Arquidiocese de Campo Grande (MS): fontes da pesquisa de 13/11/2026

Sé em Campo Grande; abrange 8 municípios: Campo Grande, Bandeirantes,
Corguinho, Jaraguari, Ribas do Rio Pardo, Rochedo, Sidrolândia e Terenos
(Rio Negro passou à Prelazia de Coxim em 1978). Arcebispo: Dom Dimas Lara
Barbosa. Cúria: Rua Amando de Oliveira, 448, Amambaí, Campo Grande,
(67) 98156-3340, sminder@arqcgr.org.br.

## Resumo

- **54 unidades pastorais** em `saida/campo-grande.json`: 1 catedral, 4
  paróquias-santuário (categoria `santuario`: N. S. da Abadia, Santuário
  Estadual N. S. do Perpétuo Socorro, São Judas Tadeu e Santo Antônio de
  Pádua em Terenos) e 49 paróquias, em 7 foranias (Centro, Leste, Norte,
  Oeste, Rural, Sudoeste e Sul).
- **Todas as 54 com horário** (confiança alta), do site oficial da
  arquidiocese, lido em 13/11/2026.
- **315 igrejas** no total: 54 matrizes e 261 capelas e comunidades com a
  paróquia dita pela própria fonte (a página de horários da arquidiocese).
  694 linhas de horário; o que não coube no formato (última semana do mês,
  dia fixo do mês, Celebração da Palavra) ficou em `nao_cabe`.
- Todo `id_banco` é null: o banco ainda não tem nada do Mato Grosso do Sul.
- Nenhuma unidade fora do MS (sem campo `uf`).

## As duas fontes de horário do site, e qual vale

O site guarda os horários em dois lugares que DIVERGEM:

1. A tabela na página de cada paróquia (`/paroquias/<slug>/`): registros
   atualizados em 2026 (julho e agosto, pela API do WordPress). É a fonte da
   MATRIZ de cada unidade.
2. A página geral `/horarios-de-missas/` (341 registros, um por igreja):
   quase todos parados em 2024. É a única fonte das CAPELAS e comunidades, e
   da matriz de São Mateus e de quem não tem tabela na própria página.

Quando as duas discordam (ex.: São Pedro Apóstolo, Cristo Rei, Maria Mãe da
Igreja), o JSON segue a página da paróquia, que é mais nova. Os horários de
capela são, portanto, do cadastro de 2024.

## Lista das unidades

A lista vem da página "Nossas Paróquias" (56 registros no tipo `paroquias`
do WordPress). Dois registros não são unidade pastoral e ficaram fora:

- Capelania Militar - Comando Militar do Oeste (e a Capela N. S. do Loreto,
  na Base Aérea): são do Ordinariado Militar do Brasil, e o formato não tem
  categoria para capelania.
- `capela-senhor-bom-jesus`: registro de uma capela da Paróquia N. S. da
  Conceição Aparecida no cadastro de paróquias, sem dados próprios.

Casos decididos:

- **Santo Expedito**: criada quase-paróquia em 12/08/2021; o cadastro no
  site foi renomeado "PARÓQUIA SANTO EXPEDITO" em 08/2026, mas a página de
  horários ainda diz quase-paróquia. O JSON a traz como `paroquia`, com a
  dúvida na observação.
- **Rochedo**: o slug do site e o anuário dizem "São Sebastião Mártir", mas
  o título da página, o e-mail e o Instagram dizem Paróquia Senhor Bom
  Jesus. O JSON segue o site; divergência na observação.
- **Bandeirantes**: o site não a chama santuário, mas o anuário GCatholic e
  o Instagram (santuariobandeirantesms) sim; ficou `paroquia` com a nota.
- O slug `paroquia-santo-afonso-maria-de-ligorio` é, na verdade, a Paróquia
  São Francisco de Sales (o título da página corrige o slug); a Santo Afonso
  é o slug `-2`.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 52
igrejas): bate com a lista do site, menos a Paróquia Santo Expedito e a
Paróquia São José de Anchieta (criada em 31/05/2024), que o anuário não
traz; o anuário ainda chama a de Rochedo de São Sebastião Mártir e lista
N. S. do Rosário e São Benedito como igreja não paroquial (no JSON ela é a
comunidade da Paróquia Santa Clara, como diz a página de horários).

## Páginas do site da arquidiocese (lidas em 13/11/2026)

- https://arquidiocesedecampogrande.org.br/ (contatos da cúria)
- https://arquidiocesedecampogrande.org.br/nossas-paroquias/ (a lista, por forania)
- https://arquidiocesedecampogrande.org.br/paroquias/<slug>/ (56 páginas:
  forania, ano de criação, e-mail, telefone, WhatsApp, site, endereço,
  Instagram e a tabela de horários da matriz)
- https://arquidiocesedecampogrande.org.br/horarios-de-missas/ (341
  registros de horário, um por igreja, com a paróquia de cada capela)
- API do WordPress (`/wp-json/wp/v2/paroquias` e `/wp-json/wp/v2/horario-missa`),
  usada para enumerar os registros e datar as atualizações.

Os Instagram vieram das próprias páginas das paróquias (link oficial), não
de busca.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/camp1 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dcmgr.html (cúria, municípios,
  Rio Negro cedido a Coxim em 1978)

## Registros da página de horários que ficaram fora do JSON

- 3 registros de teste do próprio site (Capela N. S. Perpetuo Socorro,
  Capela Santa Rita de Cássia e Capela N. S. do Rosário, os três com as
  mesmas linhas e observações "Teste", "Obs" e "Completa").
- Um registro paralelo "Santuário Paróquia São Judas Tadeu" com horários
  divergentes do registro principal do santuário; ficou o principal.
- Capelas sem paróquia identificável na fonte (sem taxonomia e sem a
  paróquia no título): Capela Santíssimo Sacramento (Centro), Capela Santa
  Clara (Oeste), Capela Santa Isabel da Hungria (Oeste), Capela São João
  Batista, Comunidade N. S. Aparecida em Igrejinha, Capela Santo Antônio em
  Fortaleza, Comunidade Irmã Dulce (Rural), Capela N. S. de Caacupê no
  Assentamento Primavera, 3 variantes de Capela N. S. Auxiliadora (uma no
  Colégio N. S. Auxiliadora), Capela N. S. Aparecida em Anjico e 2 sem
  lugar, Capela Água Boa (Rural) e Assentamento N. S. das Graças.
- Prováveis duplicatas sem atribuição, descartadas em favor do registro
  atribuído: Capela Maria Mãe do Bom Pastor e Capela Santos Apóstolos Pedro
  e Paulo (Santo Expedito), Comunidade Sagrado Coração de Jesus e Capela
  São Mateus (São Mateus), Comunidade São Caetano de Thiene (São João
  Batista grafa "Tiene").

## O que falta para o próximo estado desta pesquisa

- Endereço e contatos da Paróquia São Mateus: a página dela no site está
  vazia (só o título) e a busca não achou; o anuário a põe na zona sul de
  Campo Grande, perto das Moreninhas. Ficaram só os horários.
- Endereço das capelas: a fonte dá o nome, a paróquia e às vezes o
  assentamento ou distrito, nunca a rua.
- Horários das capelas datam do cadastro de 2024 da página de horários; as
  matrizes estão com a tabela de 2026.
- As capelas sem paróquia identificável, acima, se alguém da arquidiocese
  confirmar de quem são.
