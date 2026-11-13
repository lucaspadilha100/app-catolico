# Arquidiocese de Fortaleza (CE): fontes da pesquisa de 13/11/2026

Sé em Fortaleza; capital, região metropolitana, maciço de Baturité e sertão de
Canindé. Arcebispo: Dom Gregório Ben Lâmed Paixão Neto, OSB (desde 2023).
Cúria: Avenida Dom Manoel, 3, Centro, Fortaleza, CEP 60060-090, recepção
(85) 4005-7850.

## Resumo

- **154 unidades pastorais** em `saida/fortaleza.json`: 1 catedral, 143
  paróquias, 8 áreas pastorais, 1 santuário (Sagrado Coração de Jesus, no
  Centro de Fortaleza) e 1 santuário-basílica (São Francisco das Chagas, em
  Canindé), em 9 regiões episcopais:
  - Metropolitana São José: 25
  - Metropolitana Nossa Senhora da Conceição: 26
  - Metropolitana Nossa Senhora da Assunção: 15
  - Metropolitana Bom Jesus dos Aflitos: 15
  - Metropolitana Nossa Senhora dos Prazeres: 15
  - Metropolitana Sagrada Família: 17
  - Praia São Pedro e São Paulo: 19
  - Serra Nossa Senhora da Palma: 14
  - Sertão São Francisco das Chagas: 8
- **153 com horário de missa** e **123 com horário de confissão**, todas da
  página de cada paróquia no site da arquidiocese, lidas em 13/11/2026. O
  site mantém um padrão raro no Brasil: cada paróquia tem a tabela de missas
  da matriz por dia da semana, endereço, contatos e confissões.
- Confiança **alta em 150**; **média em 4**: Pajuçara (Maracanaú), cuja página
  não publica missas, só confissões; e Bom Jesus dos Navegantes (Parajuru),
  N. S. da Conceição (Pacoti) e São José (Alto Luminoso, Cascavel), cujas
  páginas estão sem atualização desde 2011 ou 2016 (anotado na observação).
- **30 capelas, igrejas e comunidades** além das matrizes (25 com horário),
  só onde a página dá nome e lugar com clareza: as igrejas históricas da
  paróquia da Catedral (Seminário da Prainha, São Pedro da Praia de Iracema,
  Rosário), a Igreja N. S. do Patrocínio (reitoria da paróquia São Benedito),
  a Igreja São Judas Tadeu (reitoria da paróquia São Gerardo), as capelas de
  Nazaré (Montese), Cristo Redentor, Piedade, Mucuripe e Timbó, e as
  comunidades da Maraponga, da Praia do Futuro e do Cristo Redentor.
- 141 unidades com Instagram oficial, 13 com site próprio; contatos sempre os
  institucionais da página (secretaria, e-mail da paróquia). Nenhum celular
  ou e-mail pessoal de padre entrou; na paróquia N. S. do Líbano o e-mail da
  página é nominal e ficou fora.
- Todo `id_banco` é null: o banco ainda não tem nada do Ceará. Nenhuma
  unidade fica fora do Ceará (Aruaru é distrito de Morada Nova, CE).

## Lista das unidades

A lista vem das páginas "Paróquias da Região" das 9 regiões episcopais do
site oficial. As 154 páginas de paróquia são páginas WordPress sob
`/arquidiocese/regioes/<região>/paroquias-da-regiao/` (na região N. S. dos
Prazeres o caminho é `agenda-da-regiao-2`), todas listadas pela API
`/wp-json/wp/v2/pages`. O custom post type `paroquias` do site só tem uma
página de teste; o conteúdo real mora nas páginas comuns.

Conferência contra o anuário (GCatholic, lido em 13/11/2026): o Anuário
Pontifício 2026 dá 124 paróquias e a lista de igrejas do GCatholic traz 132;
o site oficial está à frente, com as paróquias criadas de 2022 a 2025 e as
áreas pastorais elevadas a paróquia (vários títulos ainda dizem "Área
Pastoral" no endereço da página, mas a própria página já diz "Paróquia";
seguiu-se o que a página diz). Em Canindé a Paróquia São Francisco das
Chagas e o Santuário-Basílica são unidades distintas, como no site.

Nomes ajustados: "Paróquia São José, Catedral Metropolitana de Fortaleza"
entrou como Catedral Metropolitana São José (categoria catedral, com a
paróquia anotada na observação); "Paróquia São Benedito, Santuário
Arquidiocesano de Adoração" entrou como Paróquia São Benedito, com o título
de santuário na observação.

## Páginas do site da arquidiocese (lidas em 13/11/2026)

- https://www.arquidiocesedefortaleza.org.br/ (menu, regiões)
- https://www.arquidiocesedefortaleza.org.br/arquidiocese/regioes/ (as 9 regiões)
- https://www.arquidiocesedefortaleza.org.br/arquidiocese/curia/ (contatos da cúria)
- https://www.arquidiocesedefortaleza.org.br/wp-json/wp/v2/pages (o índice
  de onde saíram as 154 páginas; cada página de paróquia é a fonte de
  horários e contatos da sua unidade, com a URL anotada em `fontes`)
- O site bloqueia cliente sem User-Agent de navegador (WAF RunCloud): pedir
  as páginas com User-Agent de navegador comum.
- Os links de Instagram, site, Facebook e Youtube das páginas são encurtados
  (bit.ly, encurtador.com.br); foram resolvidos pelo cabeçalho Location (e,
  no encurtador.com.br, pela página intermediária), sem abrir o Instagram.

## Instagram

Só o usuário apontado pelo link oficial da página de cada paróquia; perfis
não se leem por dentro (bloqueio de robôs). 13 unidades não têm link de
Instagram na página (anotadas sem o campo). Em várias o link oficial aponta
o perfil da Pascom ou da rádio paroquial (pascomspsp, pascomdamaraponga,
radio_webprovidencia); ficou o que a página diz.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/fort0.htm (estatísticas; 124
  paróquias no Anuário Pontifício 2026)
- https://gcatholic.org/churches/local/fort0 (lista de 132 igrejas)

## O que falta para o próximo estado desta pesquisa

- Horário de missa da Paróquia N. S. da Conceição da Pajuçara (Maracanaú): a
  página oficial só traz secretaria e confissões.
- Conferir as 3 unidades com página sem atualização desde 2011 ou 2016
  (Parajuru, Pacoti e Alto Luminoso); o caminho provável é o Instagram.
- Capelas que as páginas listam só pelo nome, sem lugar (Menino Jesus no
  Conjunto Industrial, Pajuçara, Vila Velha, Praia do Futuro), ficaram fora
  por falta de lugar; na Praia do Futuro os nomes ficaram na observação.
- Missas de dia fixo do mês (dia 13, dia 12, dia 16, dia 25) não cabem no
  formato e ficaram em `nao_cabe` da igreja.
- As páginas têm data de atualização entre 2024 e 2026 em 151 unidades; numa
  próxima passada vale reler só as alteradas (campo `modified` da API).
