# Diocese de Sinop (MT): fontes da pesquisa de 13/11/2026

Sé em Sinop; norte de Mato Grosso (eixo da BR-163, vale do Teles Pires e
Alta Floresta). Bispo: Dom Canísio Klaus. Cúria: Av. das Itaúbas, 1655,
Jardim Paraíso II, Sinop, (66) 3532-0789 e 3531-3105 (catholic-hierarchy e
perfil @diocesedesinop no Instagram). Padroeiro diocesano: Sagrado Coração
de Jesus.

## Resumo

- **33 unidades pastorais** em `saida/sinop.json`: 1 catedral e 32
  paróquias, em 6 foranias: Sinop (6), Vera (5), Alta Floresta (7), Colíder
  (4), Juara (4) e Peixoto de Azevedo (7). Cidades: Sinop (5), Sorriso (2),
  Alta Floresta (2), Peixoto de Azevedo (2, uma com sede no distrito de União
  do Norte) e uma em cada: Cláudia, Vera, Feliz Natal, Nova Ubiratã, Apiacás,
  Carlinda, Nova Bandeirantes, Nova Monte Verde, Paranaíta, Colíder, Itaúba,
  Marcelândia, Nova Canaã do Norte, Juara, Novo Horizonte do Norte, Porto dos
  Gaúchos, Tabaporã, Terra Nova do Norte, Novo Mundo, Guarantã do Norte,
  Matupá e Nova Guarita.
- **3 com horário de missa**:
  - Paróquia São Pedro Apóstolo (Sorriso), confiança alta: o site da própria
    paróquia (pspedrosorriso.com.br) tem página de horários e uma página por
    comunidade; entraram a matriz e 17 igrejas com bairro.
  - Catedral Sagrado Coração de Jesus (Sinop) e Paróquia São Francisco de
    Assis (Sinop), confiança média: perfis das paróquias no Instagram, lidos
    só pelo trecho da busca (o da catedral, publicação de cerca de dois anos).
- **30 sem horário**, com `"horarios": []` e confiança baixa: nenhuma
  publicação da paróquia ou da diocese com horário foi achada.
- Todo `id_banco` é null.

## O site da diocese está parado

https://diocesedesinop.com.br/ (WordPress) tem uma página por forania e uma
por paróquia, todas criadas e não mais alteradas desde 02/06/2020; a última
notícia é de 14/11/2022. As páginas só trazem endereço, CEP, telefone e
e-mail; nenhuma tem horário.

- O HTML das páginas de paróquia chega cortado (cerca de 46 KB, sem o
  conteúdo). Foi lido pela API: `/wp-json/wp/v2/pages?slug=<slug>` traz o
  campo `content` inteiro. As páginas de forania trazem a lista completa de
  cada forania.
- Telefones: o site dá só os 8 dígitos (3xxx-xxxx). Todos os municípios da
  diocese são do DDD 66; o JSON leva "66" na frente, e nada mais foi mudado
  no número.
- E-mails deixados de fora por serem pessoais (nome de padre ou de pessoa):
  Apiacás, Nova Monte Verde e Peixoto de Azevedo. O de Nova Bandeirantes
  (`p_sãopedro@hotmail.com`) tem caractere inválido e também ficou fora.
- Quando um perfil da própria paróquia (Instagram ou Facebook, pelo trecho
  da busca) traz dado mais novo, o JSON segue o perfil e a observação guarda
  o que dizia o site da diocese: São Camilo (endereço), Santo Antônio de
  Sinop (telefone), Terra Nova do Norte (e-mail no domínio
  diocesedesinop.com.br, WhatsApp, Instagram) e São Pedro Apóstolo de Sorriso
  (endereço Rua Cândido Rondon, 2845-B; o site da diocese dava a Av.
  Natalino Brescansin, 1592).
- Onde a única página da paróquia é no Facebook, o endereço dela foi para o
  campo `site` (Bom Pastor e Santa Cruz de Alta Floresta, Nova Monte Verde,
  Paranaíta, Colíder, Juara, Porto dos Gaúchos, Tabaporã, Peixoto de
  Azevedo, Terra Nova do Norte, Novo Mundo). Nenhuma página do Facebook foi
  aberta por dentro.

Páginas (todas lidas em 13/11/2026):

- https://diocesedesinop.com.br/foranias/forania-de-sinop/
- https://diocesedesinop.com.br/foranias/forania-de-vera/
- https://diocesedesinop.com.br/foranias/forania-de-alta-floresta/
- https://diocesedesinop.com.br/foranias/forania-de-colider/
- https://diocesedesinop.com.br/foranias/forania-de-juara/
- https://diocesedesinop.com.br/foranias/forania-de-peixoto-de-azevedo/
- uma página por paróquia; as URLs estão no campo `fontes` de cada item.

## Conferência da lista

- GCatholic (https://gcatholic.org/churches/local/sino0, atualizado em
  09/11/2026): 33 igrejas, a catedral e 32 paróquias, nas mesmas 6 foranias
  ("deanery"). Bate uma a uma com o site da diocese.
- A estatística do GCatholic e o catholic-hierarchy (Anuário Pontifício de
  2023 e 2024) dão **34 paróquias**. A 34ª não foi achada: nem o site da
  diocese (parado em 2022) nem as buscas mostraram paróquia criada depois de
  2020. Pendência.
- https://catholic-hierarchy.org/diocese/dsino.html (endereço da cúria).

## Sorriso: o site da Paróquia São Pedro Apóstolo

- https://www.pspedrosorriso.com.br/institucional/horarios-de-missa (todas
  as igrejas)
- https://www.pspedrosorriso.com.br/secretaria (telefones e expediente)
- https://www.pspedrosorriso.com.br/comunidade/<igreja>/ (uma página por
  comunidade, com bairro e, às vezes, endereço e horário)
- As missas da matriz são celebradas no GESP, segundo a própria paróquia.
- Onde a página de horários e a da comunidade discordam, o JSON segue a
  mais detalhada e a outra fica no `nao_cabe`: Nossa Senhora da Saúde (3ª
  quinta), Navegantes (2ª quarta), Sagrado Coração (2º e 4º sábado),
  Santíssima Trindade (2ª sexta), Santa Catarina (1º domingo). Em Nossa
  Senhora de Fátima e no Santíssimo Redentor as duas páginas dão dia e hora
  diferentes; ficou a página de horários e a outra versão está no `nao_cabe`.
- O "Santuário Nossa Senhora do Sorriso" é uma comunidade da paróquia com
  santuário em construção; entrou como `comunidade`.
- Sem bairro na fonte, só no `nao_cabe` da matriz: Imaculado Coração de
  Maria, Nossa Senhora do Rosário e São Cristóvão.

## Instagram e Facebook (só o trecho da busca, nada aberto por dentro)

Instagram: catedralsinop, paroquiasfasinop, p.saocamilosinop,
saocristovaosinop, paroquiasantoantoniosinop, p.n.senhoradagloria (Cláudia),
pspedrosorriso, papa.xxiii (Colíder), paroquiaterranovadonorte (citado na
página da paróquia no Facebook), diocesedesinop.

## Pendências para o próximo estado desta pesquisa

- Horários de 30 paróquias. Os perfis de Instagram e as páginas de Facebook
  das cidades pequenas quase não aparecem na busca; vale pedir à diocese ou
  esperar que as paróquias se cadastrem.
- A 34ª paróquia do Anuário.
- Igreja Mãe de Deus (Sinop, perfis @igrejamaededeus e
  facebook.com/maededeussinop): a busca mostrou horários desencontrados
  (domingo 18h30 no Instagram; 1º, 2º e 4º domingo 8h e 3º domingo 9h30 no
  Facebook) e nenhuma fonte diz de que paróquia ela é. Ficou fora.
- Comunidade Atenas (Alta Floresta), da Paróquia Santa Cruz: sem bairro na
  fonte, ficou no `nao_cabe` da matriz.
- Paranaíta: a página da paróquia no Facebook usa o nome "Paróquia Santo
  Antônio e São Pedro"; o JSON segue o nome da diocese e do GCatholic.
- O site da diocese ainda chama a paróquia de Colíder de "Papa João XXIII";
  o padroeiro foi canonizado em 2014 (São João XXIII).
