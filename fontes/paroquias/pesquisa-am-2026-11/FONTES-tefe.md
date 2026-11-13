# Prelazia de Tefé (AM): fontes da pesquisa de 13/11/2026

Nome atual: **Prelazia de Tefé** (prelazia territorial; NÃO é diocese).
Prefeitura apostólica em 1910, prelazia em 11/08/1950; sufragânea de Manaus.
O GCatholic (09/11/2026) e o site oficial (prelaziadetefe.org.br) ainda a
tratam como prelazia. Bispo prelado: Dom José Altevir da Silva, CSSp (desde
2022). Padroeira: Santa Teresa. Cúria: Rua Duque de Caxias, 438, Centro,
Tefé, CEP 69550-013, (97) 3343-2563 (GCatholic e catholic-hierarchy);
comunicação: comunicacao@prelaziadetefe.org.br, (97) 98449-5914 (rodapé do
site). Municípios: Tefé, Alvarães, Uarini, Fonte Boa, Jutaí, Juruá, Maraã,
Japurá, Carauari e Itamarati.

## Resumo

- **16 unidades pastorais** em `saida/tefe.json`: 1 catedral (Santa
  Teresa), 13 paróquias e 2 áreas missionárias (São Sebastião, Vila do
  Caiambé; São Francisco, Vila de Tamanicuá). Cidades: Tefé (6, contando a
  Missão e o Caiambé, que são do município de Tefé), Juruá (2) e uma em
  cada: Alvarães, Uarini, Fonte Boa, Jutaí, Maraã, Japurá, Carauari e
  Itamarati.
- Regiões pastorais (do site): 01 Tefé (Santa Teresa, Santo Antônio, Bom
  Jesus, Perpétuo Socorro, Divino Espírito Santo da Missão, Área São
  Sebastião); 02 Carauari e Itamarati; 03 Jutaí, Fonte Boa, Juruá e Área São
  Francisco; 04 Maraã e Japurá; 05 Alvarães e Uarini.
- **15 com horário de missa** (12 alta, 3 média). A única sem horário é a
  Área Missionária São Francisco (Tamanicuá): não tem padre residente e a
  missa depende de visita esporádica (confiança baixa, `horarios: []`).
  Média: Bom Jesus e Missão (a página não diz a igreja de cada missa) e Fonte
  Boa (terça e sexta têm missa sem horário).
- Adoração: Maraã (sexta 19h) e Japurá (quinta, "Missa e Adoração").
  Nenhuma página publica confissão.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do tipo de post `paroquia` do WordPress do site
(`/wp-json/wp/v2/paroquia`, 16 itens), com a taxonomia `local_paroquia`
(Região Pastoral 01 a 05). A página de Uarini diz que ela é "uma das quatorze
paróquias da Prelazia de Tefé": 14 paróquias + 2 áreas missionárias = 16.

Conferência: GCatholic (estatística de 2022) e catholic-hierarchy (2023) dão
**16 paróquias**; bate. O GCatholic não tem lista de igrejas da prelazia (só
a catedral e igrejas "próximas", como São José, São Sebastião e São
Francisco de Assis em Tefé, sem paróquia indicada).

## Páginas do site da prelazia (lidas em 13/11/2026)

Uma página por unidade, `https://prelaziadetefe.org.br/paroquia/<slug>/`,
com ano de criação, telefone, e-mail, atendimento, endereço, clero,
histórico e a tabela "Horários de Missas". A data no campo `fontes` é a da
última edição da página no WordPress (de 2024-09 a 2026-08). E-mails
protegidos pelo Cloudflare foram decodificados do `data-cfemail`.

Notas por unidade:
- Catedral de Santa Teresa: o endereço publicado é o da casa paroquial
  (Rua Quintino Bocaiúva, 414). A tabela não diz a igreja; supusemos a
  catedral.
- Santo Antônio: o histórico dá endereço de 7 comunidades (entraram como
  `comunidade`); o campo de endereço diz Rua Minas Gerais, 582 e o histórico,
  572.
- Japurá: o e-mail publicado tem acento (paroquia.japurá@hotmail.com),
  endereço inválido; ficou vazio.
- Telefones publicados são, em geral, celulares da secretaria paroquial (é o
  único número que a página dá).

## Comunidades sem lugar (pendência)

Ficaram no `nao_cabe` da matriz, sem virar igreja, porque a fonte não dá
bairro: Bom Jesus (São José, Imaculada, Toca de Assis), Carauari (N. S. de
Fátima), Itamarati (São Francisco, São José), Jutaí (6 urbanas), Fonte Boa
(10 urbanas: São Pedro, N. S. de Fátima, São Jorge, Santa Teresa, São João
Batista, São Francisco I e II, Cristo Rei, Santo Antônio), Juruá (São
Francisco), Japurá (Jesus Bom Pastor, Divino Espírito Santo), Alvarães (N. S.
de Fátima, São Francisco, Santa Luzia, São Lázaro, capela do Divino Espírito
Santo), Uarini (N. S. Aparecida, N. S. de Fátima). As comunidades
ribeirinhas (dezenas por paróquia, listadas por setor em Fonte Boa, Alvarães,
Juruá, Jutaí e no Caiambé) não entraram uma a uma.

## Conferência (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/tefe0.htm e
  https://gcatholic.org/churches/brazil/2546 (catedral)
- https://catholic-hierarchy.org/diocese/dtefe.html

## O que falta para o próximo estado desta pesquisa

- Confissão em todas as paróquias.
- Telefone de Perpétuo Socorro, Fonte Boa, Jutaí, Maraã e Alvarães; qualquer
  contato da Área São Francisco.
- Endereço das comunidades urbanas listadas acima.
- Instagram das paróquias: o site só mostra o da prelazia (prelaziadetefe).
