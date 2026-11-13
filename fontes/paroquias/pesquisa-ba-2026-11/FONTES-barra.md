# Diocese de Barra (BA): fontes da pesquisa de 13/11/2026

Sé em Barra (Barra do Rio Grande), médio São Francisco. Bispo: Dom João
Batista Alves do Nascimento, CSsR. Cúria: Rua Dr. Augusto Torres, 02,
Centro, Barra, (74) 3662-2014, diocesedebarraadm@gmail.com. Padroeiro
diocesano: São Francisco das Chagas (4 de outubro).

## Resumo

- **18 unidades pastorais** em `saida/barra.json`: 1 catedral, 15
  paróquias e 2 quase-paróquias (São Francisco de Assis, em Muquém do São
  Francisco, e Nossa Senhora Aparecida, em Barra). Cidades: Barra (3, uma em
  Ibiraba), Brotas de Macaúbas (2, uma no povoado de Cocal), Ibotirama (2),
  Muquém do São Francisco (2, uma no distrito de Javi), Oliveira dos
  Brejinhos (2, uma no povoado de Beira Rio), Xique-Xique (2) e uma em
  Buritirama, Gentio do Ouro, Ipupiara, Itaguaçu da Bahia e Morpará.
- **Nenhuma com horário**: o site da diocese tem uma página por paróquia,
  mas só com a história, o pároco e a tabela de comunidades (lugar,
  padroeiro, dia da festa). Não há horário de missa no site nem nas 354
  notícias. Todas entraram com `horarios: []` e confiança baixa, e estão em
  `SEM-HORARIO-barra.txt`.
- **623 igrejas e comunidades** além das matrizes, das tabelas de cada
  paróquia (só a de Morpará não traz tabela). Comunidade "sem capela" na
  fonte entrou com essa nota no `nao_cabe`; as marcadas "inativa" ficaram
  de fora.
- Nenhum contato institucional de paróquia publicado (nem telefone, nem
  e-mail, nem perfil); o único é o da cúria. Todo `id_banco` é null.
- Foranias: o site não as lista. Só a página da N. S. da Piedade cita a
  "Forania 4".

## Lista das unidades e conferência

- 17 páginas de paróquia no site (lista "Nossas Paróquias" da home) e a
  página do clero (editada em 10/09/2026), que traz ainda a **Quase-Paróquia
  Nossa Senhora Aparecida, em Barra** (administrador: Pe. Advar Francisco
  Morães). Ela não tem página, endereço nem bairro: entrou só com nome e
  cidade.
- O GCatholic diz 25 paróquias, mas não lista as igrejas (só a catedral). O
  Catholic-Hierarchy (Anuário de 2023) diz 21. A diocese, pelo próprio site,
  mostra 18 (16 paróquias e 2 quase-paróquias). A diferença não foi
  resolvida: nenhuma notícia fala de outra paróquia ou quase-paróquia.
- Municípios cobertos: Barra, Brotas de Macaúbas, Buritirama, Gentio do
  Ouro, Ibotirama, Ipupiara, Itaguaçu da Bahia, Morpará, Muquém do São
  Francisco, Oliveira dos Brejinhos e Xique-Xique.

## Páginas lidas (13/11/2026, pela API do WordPress)

- https://diocesedebarra.com.br/ (home, lista de paróquias)
- https://diocesedebarra.com.br/clero-diocesano/ (clero e cargos)
- Páginas das paróquias (as URLs estão no campo `fontes` de cada item), por
  exemplo https://diocesedebarra.com.br/paroquia-catedral-sao-francisco-das-chagas/
  e https://diocesedebarra.com.br/barra-distrito-de-ibiraba-paroquia-santa-cruz/
  (editada em 10/09/2026; as outras são de 2024).
- `/wp-json/wp/v2/posts` (354 notícias) para procurar horários e paróquias
  novas: nada.
- https://gcatholic.org/dioceses/diocese/barr1.htm e
  https://www.catholic-hierarchy.org/diocese/dbarb.html (contagens).

## Decisões

- Catedral: a Igreja de N. S. do Rosário (Centro), a Capela do Hospital São
  Rafael e o Santuário do Bom Jesus dos Navegantes (bairro Bom Jesus,
  santuário desde 1992) entraram com nome próprio.
- N. S. da Guia (Ibotirama): a página mostra a "atual matriz" e o Santuário
  de N. S. da Guia; entraram as duas igrejas, sem endereço.
- Buritirama: as comunidades da sede vêm só com o padroeiro; ficaram com
  `localidade` vazia.
- Itaguaçu da Bahia: a última linha da tabela junta três comunidades
  (Várzea Grande, Grotas e Lajedinho); foram separadas.
- Abreviações da fonte desfeitas ("N. Sra." = Nossa Senhora, "Divino" =
  Divino Espírito Santo, "Irmã Dulce" = Santa Dulce dos Pobres, "V. Sacão" =
  Vereda do Sacão).

## O que falta

- Horários de todas as unidades (próxima rodada: Instagram e Facebook das
  paróquias pela busca; a diocese só cita os perfis dela,
  instagram.com/diocesedebarra e facebook.com/pascomdiocesanadebarra).
- Endereço e contatos das matrizes.
- Comunidades da Paróquia São Pedro (Morpará): a página fala em 38, sem
  listar.
- Confirmar a Quase-Paróquia N. S. Aparecida de Barra (sede, bairro) e o
  número real de paróquias (18, 21 ou 25).
