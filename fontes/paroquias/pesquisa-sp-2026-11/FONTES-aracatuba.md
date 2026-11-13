# Diocese de Araçatuba (SP): fontes da pesquisa de 13/11/2026

Sé em Araçatuba; noroeste paulista, entre o Tietê e a divisa com Mato
Grosso do Sul. Criada em 23/03/1994, desmembrada da Diocese de Lins. Bispo:
Dom Sérgio Krzywy. Cúria (Mitra Diocesana): Rua Brigadeiro Luiz Antônio,
342, Bandeiras, Araçatuba, (18) 3624-3561, contato@diocesedearacatuba.com.br.
Padroeira diocesana: Nossa Senhora Aparecida.

## Resumo

- **34 unidades pastorais** em `saida/aracatuba.json`: 1 catedral e 33
  paróquias (uma delas com matriz santuário: São João Batista e São Judas
  Tadeu, em Araçatuba, que entrou como `paroquia` com a primeira igreja de
  tipo `santuario`, como em Taubaté). Quatro regiões pastorais:
  Andradina (6), Guararapes (7), Araçatuba (12) e Birigui (9). Cidades:
  Araçatuba (12), Birigui (4), Andradina (2), Guararapes (2) e uma em cada:
  Castilho, Nova Independência, Murutinga do Sul, Guaraçaí, Mirandópolis,
  Lavínia, Valparaíso, Bento de Abreu, Rubiácea, Coroados, Bilac, Gabriel
  Monteiro, Piacatu e Santópolis do Aguapeí. Brejo Alegre, a 19ª cidade,
  não tem paróquia: só a Capela Sagrado Coração de Jesus (ver abaixo).
- **34 com horário de missa, todas com confiança alta**: a diocese
  publicou em maio de 2026 uma página de horários por paróquia (uma imagem
  por página, lida uma a uma). 153 igrejas no total (34 matrizes e 119
  capelas e comunidades), 276 linhas de horário.
- Só missa: nenhuma página traz confissão ou adoração com dia e hora (a
  de Guaraçaí cita exposição do Santíssimo mensal em data variável, no
  `nao_cabe`).
- Nenhuma cidade desta diocese aparece nos outros arquivos de `saida/`.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem das páginas "Regiões Pastorais" e "Paróquias" do site da
diocese, batida com três outras fontes:

- **CNPJ da Mitra Diocesana de Araçatuba** (raiz 00.033.992, filiais 0001
  a 0060 lidas em https://minhareceita.org/ em 13/11/2026; da 0036 em
  diante nenhuma existe): 35 filiais ativas. A 0001 é a cúria; as outras 34
  são as 34 unidades do site, uma a uma.
- **GCatholic** (https://gcatholic.org/churches/local/arac1, atualizado em
  09/11/2026, 35 igrejas): bate, com duas diferenças. Não marca como
  paróquia a N. S. das Graças de Andradina nem a Nosso Senhor do Bonfim de
  Nova Independência; o site da diocese e o CNPJ as tratam como paróquias,
  e a do Bonfim tem "Fundação: 02/05/2023" na página da diocese (em 2022
  ainda era capela). Seguimos a diocese. O GCatholic lista ainda a igreja
  São Pedro de Andradina (capela da Paróquia São Sebastião) e a Sagrado
  Coração de Jesus de Brejo Alegre, sem marca de paróquia.
- Notícias da diocese de 2020 a 2024 falam em "33 paróquias"; com a do
  Bonfim (2023) e a das Graças, o site e o CNPJ têm 34. Seguimos o site.

**Capela Sagrado Coração de Jesus, de Brejo Alegre**: a diocese a lista
à parte, ao lado das paróquias da Região Pastoral de Birigui, com página
de horário própria (sábado 19h30). Nenhuma fonte diz a que paróquia
pertence. Entrou como capela da Paróquia Imaculada Conceição de Birigui
porque o diácono que a atendia era dessa paróquia (notícias de 24 e
29/10/2024 sobre a morte do diácono Wanderley Seraphim Bueno), com a
ressalva no `nao_cabe` e na observação. Se a diocese disser outra coisa,
mudar.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedearacatuba.com.br/regiao-pastoral-de-andradina/paroquias/
  (a lista oficial por região) e as páginas
  `regiao-pastoral-de-andradina/`, `-guararapes/`, `-aracatuba/`,
  `-birigui/`, que apontam a página de horário de cada paróquia.
- Uma página de horário por paróquia, `regiao-pastoral-de-<região>-<n>/`
  (35 páginas, publicadas em 14 a 26/05/2026; cada uma é uma imagem com os
  horários da matriz e das capelas). As URLs estão no campo `fontes` de
  cada item. Listadas pela API do WordPress:
  https://diocesedearacatuba.com.br/wp-json/wp/v2/pages
- O tipo próprio `locais` (https://diocesedearacatuba.com.br/wp-json/wp/v2/locais)
  tem página só para 5 paróquias da Região de Andradina, com endereço,
  telefone e e-mail: São José (Castilho), São Sebastião e N. S. das Graças
  (Andradina), Nosso Senhor do Bonfim (Nova Independência) e N. S.
  Aparecida (Guaraçaí). A da São Sebastião (atualizada em 24/09/2026) é
  mais nova que a imagem de maio e traz horários um pouco diferentes: o
  JSON segue a página de setembro (Capela São Paulo domingo 19h30, Capela
  São Gabriel sexta 19h, missa mensal nas capelas dos assentamentos
  Timboré) e anota a divergência no `nao_cabe`. A Capela Bom Jesus da
  Lapa (Paranápolis) só está na imagem.

## Contatos

O site não publica telefone das paróquias fora da Região de Andradina.

- Andradina: as páginas `locais` acima.
- Telefones em notícias do próprio site (o JSON cita a notícia em
  `fontes`): Santuário São João Batista e São Judas Tadeu e São Francisco
  de Assis de Araçatuba (2024), N. S. de Fátima (2023), Sant'Ana (2021),
  São Sebastião de Araçatuba (2020, com o WhatsApp da paróquia),
  Imaculada Conceição e São Benedito e São Cristóvão de Birigui (2020).
- Telefone do CNPJ: Nosso Senhor do Bonfim (a página da diocese dá
  "(18) 3744-127", com um dígito a menos), São Brás e Santa Clara de Assis
  (Birigui) e São José (Piacatu). Não usados: o da filial da N. S. das
  Graças de Andradina, que é o da cúria, e o da São Francisco e Santa
  Clara, igual ao da São Francisco de Assis.
- Guaraçaí: entrou só o fixo; a página traz também um número
  "(18) 93630-6310", que não é celular nem fixo válido.
- Endereço: da página da paróquia ou da notícia quando há; senão, do CNPJ.
  Onde os dois existem e divergem, seguimos a notícia mais nova (Sant'Ana:
  Rua Tenente Alcides Theodoro dos Santos, s/n, e não a Praça Diogo Junior,
  630 do CNPJ; Santuário: Praça São João, s/n; São Francisco de Assis: Rua
  João Marques, 351).
- Instagram: nenhuma página da diocese traz o perfil de paróquia; o campo
  ficou vazio. As páginas `locais` citam Facebook (não há campo para ele).

## Leituras duvidosas das imagens

- São Benedito e São Cristóvão: "TQUARTA-FEIRA" lido como quarta-feira.
- N. S. da Conceição (Bilac): a Capela da Ressurreição (cemitério) tem só
  "1ª segunda do mês", sem hora; a Capela Bom Jesus (Imbé) aparece sob
  sexta-feira com "4ª quarta do mês", sem hora. Os dois ficaram no
  `nao_cabe`.
- N. S. das Graças (Andradina): "Capela Nsa. Sra. Aparecida (RURAL - R.
  Alegre)" ficou com a abreviação da fonte.
- São Sebastião (Araçatuba): "Águas Claras e Verde Parque, 15 em 15 dias"
  na quinta, sem hora, no `nao_cabe`.

## O que falta para o próximo estado desta pesquisa

- Telefone da secretaria de 19 unidades (a maioria das de Guararapes,
  Coroados, Bilac, Gabriel Monteiro, Santópolis, Catedral e várias de
  Araçatuba).
- Confissão e adoração: nenhuma fonte da diocese publica.
- Bairro das capelas que a imagem lista sem lugar (Valparaíso, São Brás,
  Bom Jesus da Lapa, Sant'Ana e outras) e o nome das comunidades de
  Mirandópolis (só "nas comunidades, domingo 9h").
- Confirmar a que paróquia pertence a capela de Brejo Alegre.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/arac1 e
  https://gcatholic.org/dioceses/diocese/arac1.htm (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/darat.html (endereço da cúria)
- https://minhareceita.org/00033992000153 e filiais 0002 a 0035
