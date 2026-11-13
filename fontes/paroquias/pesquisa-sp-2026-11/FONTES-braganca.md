# Diocese de Bragança Paulista (SP): fontes da pesquisa de 13/11/2026

Sé em Bragança Paulista; Bragantina, Serra da Cantareira e parte da Grande
São Paulo (Caieiras, Mairiporã, Francisco Morato, Franco da Rocha). Bispo:
Dom Sérgio Aparecido Colombo. Cúria: Rua Coronel Assis Gonçalves, 521, CEP
12900-480, Bragança Paulista, (11) 91164-2584, curiabraganca@hotmail.com.

## Resumo

- **70 unidades pastorais** em `saida/braganca.json`: 1 catedral, 1 basílica
  (Nossa Senhora do Belém, Itatiba), 3 santuários, 1 área pastoral e 64
  paróquias, em 7 regiões pastorais (Bragança Paulista, Atibaia, Itatiba,
  Socorro, Caieiras, Francisco Morato e Piracaia). Cidades: Bragança Paulista
  (15), Atibaia (9), Itatiba (7), Francisco Morato (7), Caieiras (5),
  Mairiporã (4), Franco da Rocha (4), Jarinu (3), Socorro (3), Piracaia (3),
  Pinhalzinho (2), Nazaré Paulista (2) e uma em cada: Vargem, Morungaba,
  Pedra Bela, Tuiuti, Joanópolis, Bom Jesus dos Perdões.
- **65 com horário de missa** (64 com confiança alta, 1 média): o site da
  diocese mantém uma página por paróquia com horários de missa, endereço,
  padroeiro, contatos e comunidades, todas lidas em 13/11/2026. A de
  confiança média é N. S. de Fátima de Jarinu (duas missas de domingo com
  meia hora de diferença, 18h30 e 19h, como publicado).
- **5 sem horário** (confiança baixa, entraram pela regra do dono): Área
  Pastoral Santa Clara (Bragança Paulista), N. S. Aparecida e São João Paulo
  II (Atibaia), São José Operário (Oratório, Socorro), Santa Rita de Cássia
  (Caieiras) e São João Batista (Joanópolis). As páginas delas não trazem o
  bloco de horários, e a busca na web não achou horário publicado pelas
  próprias paróquias.
- Só missas: o site não publica confissão nem adoração de nenhuma paróquia.
- Santuários: A Senhora de Todos os Povos (Atibaia) e Bom Jesus dos Perdões
  são paróquias-santuário (GCatholic: "Parish, Shrine"); N. S. Virgem dos
  Pobres (Caieiras) é santuário sem marca de paróquia. Os três entraram como
  `santuario`, com a primeira igreja de tipo `santuario`.
- Capelas e comunidades: 108, só onde a página dá nome e bairro (Santa Luzia,
  Santa Paulina, Vargem, São Benedito e São José de Bragança, Fátima de
  Jarinu, Rosário de Fátima de Itatiba, Tuiuti, Santo Afonso de Pinhalzinho,
  Aparecida e Santo Antônio de Caieiras, Lourdes de Mairiporã, Fátima de
  Franco da Rocha, Santo Antônio de Pádua de Francisco Morato, Santa Rita de
  Nazaré Paulista e Joanópolis). Nenhuma tem horário na fonte. As citadas sem
  lugar ficaram no `nao_cabe` da matriz (São Sebastião e São Lázaro de
  Bragança, São Bento de Itatiba, N. S. das Graças de Mairiporã, entre outras).
- Missas em capela sem endereço (Coração Imaculado de Maria, São Lázaro de
  Betânia e São Sebastião de Bragança Paulista) foram para o `nao_cabe`, com
  dia e hora; a matriz ficou só com as missas que são nela.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese (sistema Cúria Online),
organizada por região pastoral: 71 cartões, um por unidade mais o Seminário
Propedêutico São João Paulo II, que ficou fora. As páginas individuais são
`https://diocesedebraganca.com.br/paroquia/?paroquiaid=N` (N de 2 a 73; o 14
não existe), e as capelas, `https://diocesedebraganca.com.br/capela/?capelaid=N`.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026: 72
igrejas, "65 parishes"): bate nas paróquias, com estas diferenças.

- No GCatholic e não na diocese: Santuário Tabor da Mãe Rainha de
  Schoenstatt (Atibaia) e Igreja N. S. do Rosário (Bragança Paulista), sem
  marca de paróquia; ficaram fora.
- O GCatholic põe em Caieiras uma "Basílica N. S. do Rosário, Paróquia N. S.
  das Graças"; a diocese tem a Paróquia N. S. das Graças em Mairiporã (Vila
  Machado) e a comunidade N. S. do Rosário (Melhoramentos) na Paróquia Santo
  Antônio de Caieiras. Seguimos a diocese.
- Na diocese e sem marca de paróquia no GCatholic: Área Pastoral Santa Clara,
  São Miguel, São Rafael e São Gabriel (criada em 2024), São José Operário
  (Oratório) e Santa Paulina (criada em 2025, ausente do GCatholic).
- Nomes: o GCatholic chama de "N. S. do Desterro e São José" a paróquia que
  a diocese chama de N. S. do Desterro (Mairiporã). Seguimos a diocese.

## Ajustes feitos nos dados da diocese

- "Paróquia Nossa Senhora da Conceição / Sé Catedral" virou "Catedral Nossa
  Senhora da Conceição"; "Paróquia Nossa Senhora do Belém (Basílica)" virou
  "Basílica Nossa Senhora do Belém"; "Paróquia Paróquia Bom Jesus da
  Paradinha" perdeu a palavra repetida; "Santo Afonso Maria de Ligório e N.
  Sra. Aparecida" ganhou "Paróquia" e o nome por extenso.
- Mãe Rainha (Schoenstatt): a página dá "Nova Trieste" como cidade; é
  distrito de Jarinu (cidade Jarinu, localidade Nova Trieste). O campo de
  padroeiro traz "Nossa Senhora da Conceição do Jaguary", o mesmo do
  seminário, por engano; usamos o título da paróquia.
- N. S. das Graças: a página grafa "Mairiporã-PR".
- Abreviações e acentos por extenso (Sra., S.C. Jesus, Antonio, Cassia).

## Contatos

Telefone, celular, WhatsApp, e-mail e Instagram vêm do bloco "Contato" de
cada página da diocese. O telefone fixo vai em `telefone`; sem fixo, o
celular da página. Ficaram de fora, por parecerem pessoais: o e-mail de São
Francisco de Assis (Bragança Paulista), que tem o nome do pároco; o de N. S.
da Esperança (Caieiras), com cara de endereço pessoal; e o WhatsApp do
Santuário A Senhora de Todos os Povos, de DDD 37 (Minas Gerais).

Ignorados: os ícones de WhatsApp, Instagram, Facebook e YouTube do rodapé
de todas as páginas apontam para "paroquiatibagi" e um número de DDD 42,
sobra do modelo do sistema Cúria Online, não da diocese.

Instagram (só os que as páginas da diocese trazem; nenhum perfil foi aberto
por dentro): saobeneditobp (São Benedito, Bragança Paulista) e
paroquiarainhadapazfmt (Rainha da Paz, Francisco Morato).

## Páginas lidas (13/11/2026)

- https://diocesedebraganca.com.br/paroquias/ (a lista oficial, por região)
- https://diocesedebraganca.com.br/horarios-de-missa/ (os mesmos horários,
  reunidos; confere com as páginas de paróquia)
- Uma página por unidade (URLs no campo `fontes` de cada item do JSON) e 44
  páginas de capela (só 5 têm horário: 4 capelas da Paróquia São Sebastião de
  Bragança Paulista e a Capela Santo Expedito do Coração Imaculado de Maria).
- https://gcatholic.org/dioceses/diocese/brag3.htm e
  https://gcatholic.org/churches/local/brag3 (conferência da lista)

## O que falta para o próximo estado desta pesquisa

- Horários das 5 unidades sem horário (falar com as secretarias ou achar
  publicação das próprias paróquias).
- Confissão e adoração: nenhuma página publica.
- Instagram oficial da maioria das paróquias: a busca na web não trouxe os
  perfis, e o site da diocese só os dá para duas.
- Endereço das capelas: as páginas só dão o bairro, e várias nem isso.
- A comunidade N. S. do Bom Parto (Campo Largo) aparece nas páginas de São
  José (Bragança Paulista) e de N. S. de Fátima (Jarinu); ficou só em Jarinu.
- O anuário em PDF citado pela busca (`/arquivos/anuario2024.pdf`) não abriu
  (o endereço devolve uma página HTML).
