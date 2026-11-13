# Diocese de Camaçari (BA): fontes da pesquisa de 13/11/2026

Sé em Camaçari; Região Metropolitana de Salvador e Recôncavo norte. Criada em
15/12/2010 (desmembrada de Salvador), instalada em 19/02/2011. Bispo: Dom
Dirceu de Oliveira Medeiros. Cúria (Mitra Diocesana): Rua da Bomba, 302,
Natal, Camaçari, (71) 3627-3393 / 3627-6334, WhatsApp (71) 9 9995-3272,
secretaria@diocesedecamacari.com.br. Padroeiro diocesano: São Thomaz de
Cantuária. Municípios: Camaçari, Candeias, Dias d'Ávila, Madre de Deus, São
Francisco do Conde, São Sebastião do Passé, Simões Filho e Terra Nova.

## Resumo

- **26 unidades** em `saida/camacari.json`: 1 catedral, 22 paróquias e 3
  quase-paróquias, em 5 foranias (São Thomaz de Cantuária, Divino Espírito
  Santo, São Miguel, Sagrada Família, São Sebastião). Cidades: Camaçari (10),
  Candeias (3), Simões Filho (4), São Sebastião do Passé (3), Dias d'Ávila (2),
  São Francisco do Conde (2), Madre de Deus (1), Terra Nova (1).
- **15 com horário** (13 alta, 2 média) e **11 sem horário** (baixa), listadas
  em `SEM-HORARIO-camacari.txt`.
- Média: Divino Espírito Santo (a página geral e a página de verão do litoral
  divergem no domingo) e São Francisco de Assis de Candeias (terça e quinta
  divergem entre a página da paróquia e a página geral; só entrou o que bate).
- A Paróquia N. S. das Candeias tem a matriz elevada a Santuário Diocesano
  (2014): entrou como `paroquia` com a primeira igreja de tipo `santuario`.
- 248 capelas e comunidades com nome e lugar, ligadas à paróquia que a página
  da diocese indica; as que têm horário na página geral levam o horário.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese, organizada por forania
(27 entradas). Duas não são unidade: "Paróquias do Litoral de Camaçari" (página
de programação de verão das 4 paróquias da orla) e a "Capelania Santa Maria"
(Condomínio Interlagos, criada em 30/12/2022, capelão próprio): esta entrou
como capela da Paróquia Divino Espírito Santo, que a lista entre suas igrejas.

Conferência com o GCatholic (atualizado em 09/11/2026, 27 igrejas): bate, com
estas diferenças:
- O GCatholic não marca como paróquia N. S. de Fátima (Barra do Pojuca), nem
  São José Operário (Camaçari), nem Sagrado Coração de Jesus (que chama de
  "Jacuípe"); a diocese lista as três (a primeira como paróquia, as outras como
  quase-paróquias).
- Falta no GCatholic a Quase-Paróquia N. S. de Nazaré da Passagem (Candeias),
  criada em 16/03/2025.
- O GCatholic tem o Seminário São João Paulo II e a Capela Menino Jesus
  (Simões Filho), que não são unidade.
- A diocese não publica a contagem total no site; a soma da lista é 26.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://www.diocesedecamacari.com.br/paroquias (lista por forania)
- https://www.diocesedecamacari.com.br/horarios-de-missa (horários de todas as
  paróquias com horário, por dia e por comunidade)
- https://www.diocesedecamacari.com.br/paroquia/... (uma página por paróquia:
  ano de criação, clero, padroeiro, comunidades, endereço e telefone; as URLs
  estão no campo `fontes`)
- https://www.diocesedecamacari.com.br/pagina/catedral (horários completos da
  Catedral, inclusive confissão e exposição do Santíssimo)
- https://www.diocesedecamacari.com.br/pagina/santuario (Santuário de Candeias)
- https://www.diocesedecamacari.com.br/paroquia/paroquias-do-litoral-de-camacari
  (programação de verão; usada só como conferência)
- https://www.diocesedecamacari.com.br/pagina/historia-da-diocese e /pagina/curia

O site do Santuário de Candeias (santuariodecandeias.com.br), citado pela
diocese, respondeu erro 500.

## Instagram

Nenhuma página de paróquia traz perfil de Instagram; o site só cita o perfil
da diocese (@diocesedecamacari). A rodada de busca deve procurar os perfis das
11 paróquias sem horário.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/cama1.htm
- https://gcatholic.org/churches/local/cama1

## O que falta para o próximo estado desta pesquisa

- Horários das 11 paróquias sem horário no site (todas de Simões Filho, São
  Francisco do Conde, Madre de Deus, Terra Nova, São Sebastião do Passé e
  Santa Marcelina).
- Divergências de comunidade entre paróquias vizinhas: Luz do Monte e São
  Gonçalo (São Francisco do Conde) listam as mesmas capelas de Caípe, Engenho
  de Baixo, Santo Estêvão e ilhas; ficaram em São Gonçalo. A comunidade N. S.
  de Loreto (Boa União) aparece em Arembepe e, na página de verão, em Abrantes;
  ficou em Arembepe.
- Comunidades citadas sem lugar ficaram no `nao_cabe` da matriz (Divino
  Espírito Santo, São Miguel de Cotegipe) ou na observação (Madre de Deus,
  N. S. da Conceição de Simões Filho).
- Divino Espírito Santo: missas por lugar sem nome de igreja (Alphaville,
  Cordoaria, Catu, Cajazeiras, Phoc, Buris, Mutirão, Malícia) ficaram na
  observação.
- A Quase-Paróquia São José Operário não tem telefone publicado.
