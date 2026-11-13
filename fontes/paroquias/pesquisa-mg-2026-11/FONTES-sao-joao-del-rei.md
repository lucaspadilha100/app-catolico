# Diocese de São João del-Rei (MG): fontes da pesquisa de 13/11/2026

Sé em São João del-Rei; Campo das Vertentes e sul de Minas (São João
del-Rei, Lavras, Barroso, Andrelândia, Nazareno, Tiradentes). Bispo: Dom José
Eudes Campos do Nascimento. Cúria: Praça Frei Orlando, 130, Centro, São João
del-Rei, (32) 3371-4746 / (32) 3371-1011. Padroeira: Nossa Senhora do Pilar.

## Resumo

- **44 unidades pastorais** em `saida/sao-joao-del-rei.json`: 1 catedral
  (Catedral Basílica N. S. do Pilar) e 43 paróquias. 6 têm a matriz como
  santuário (São João Bosco, Senhor Bom Jesus de Matosinhos, N. S. da
  Conceição de Conceição da Barra de Minas, N. S. da Piedade de Piedade do
  Rio Grande, Santa Rita de Ritápolis, N. S. de Nazaré de Nazareno), pelas
  fichas da diocese e pelo GCatholic.
- **7 com horário, todos com confiança `media`**: Catedral (programação
  adotada durante a restauração, out/2024), Menino Jesus de Praga (quadro
  da instalação, set/2022) e as fichas atualizadas em maio/2022 de N. S.
  Mãe de Deus (Madre de Deus de Minas), São Vicente Ferrer (São Vicente de
  Minas), São Sebastião (Lavras), Santa Rita (Ritápolis) e N. S. de Nazaré
  (Nazareno). As outras 37 entram com `"horarios": []` e confiança `baixa`.
- 6 foranias (filtro do clero no site): N. S. do Pilar, Senhor Bom Jesus de
  Matosinhos, N. S. da Conceição, N. S. de Nazaré, N. S. do Porto da Eterna
  Salvação e Sant'Ana. As fichas de paróquia, quase todas de 2016 a 2020,
  ainda usam os nomes antigos (Forania de São João del-Rei, de Lavras, de
  Prados, de Andrelândia); a observação de cada paróquia dá o nome que a
  ficha usa e diz quando é o antigo. A correspondência certa entre nomes
  antigos e novos não está publicada (só Andrelândia = Porto da Eterna
  Salvação e Lavras/São Sebastião = Sant'Ana aparecem nas fichas).
- Todo `id_banco` é null.

## Lista das unidades

O site novo da diocese (WordPress, tipo `paroquia`) só tem a ficha da
Catedral. A lista foi montada com:

- As 40 fichas antigas de paróquia (páginas do site, API
  `https://diocesedesaojoaodelrei.com.br/wp-json/wp/v2/pages`, atualizadas
  de 2016 a 2023), com endereço, telefone e padroeiro.
- Paróquias criadas depois das fichas, pelas notícias do site:
  - Menino Jesus de Praga (bairro Pio XII, São João del-Rei), criada em
    22/06/2022 e instalada em 16/09/2022:
    https://diocesedesaojoaodelrei.com.br/bispo-diocesano-cria-nova-paroquia/
  - São Sebastião (distrito de Macuco de Minas, Itumirim), criada em
    27/12/2023:
    https://diocesedesaojoaodelrei.com.br/diocese-ganha-nova-paroquia-no-distrito-de-macuco-de-minas/
  - São Judas Tadeu (bairro Cohab, Lavras), criada em 28/02/2018:
    https://diocesedesaojoaodelrei.com.br/padre-nelio-toma-posse-como-paroco-em-nova-paroquia-de-lavras/
    (e citada em 29/10/2026 com a de São João del-Rei).
  - Santo Antônio e Bem-Aventurada Nhá Chica (distrito do Rio das Mortes,
    São João del-Rei), citada em 20/04/2026:
    https://diocesedesaojoaodelrei.com.br/paroquia-festeja-os-216-anos-do-batismo-de-nha-chica/

Conferência: GCatholic (https://gcatholic.org/churches/local/zjoa2,
09/11/2026) dá 42 paróquias (estatística de 2021) e lista 39 igrejas
paroquiais; 42 + Menino Jesus de Praga (2022) + Macuco (2023) = 44, que bate
com a nossa lista. O GCatholic lista a Igreja da Beata Nhá Chica (Rio das
Mortes) sem marca de paróquia e chama de "Arcângelo" o distrito de São
Miguel do Cajuru. Ficaram fora: Santuário da Santíssima Trindade
(Tiradentes, pertence à paróquia de Santo Antônio), N. S. do Rosário (São
João del-Rei e Conceição da Barra), Santo Antônio e São José Operário
(Conceição da Barra de Minas), que não são paróquias.

## Horários (fontes)

- Catedral: https://diocesedesaojoaodelrei.com.br/paroquia/paroquia-da-catedral-basilica-nossa-senhora-do-pilar/
  (06/11/2024) e
  https://diocesedesaojoaodelrei.com.br/com-reforma-da-catedral-paroquia-do-pilar-adota-nova-programacao-para-celebracoes/
  (21/10/2024). A Catedral fechou para restauração em 21/10/2024, com obra
  prevista para 18 meses; as missas foram para as igrejas do Rosário, das
  Mercês, do Carmo e a Capela do Divino. Conferir se já reabriu.
- Menino Jesus de Praga: imagem do quadro de horários em
  https://diocesedesaojoaodelrei.com.br/nova-paroquia-define-horarios-de-missas-nas-comunidades/
  (22/09/2022), lida à mão.
- Fichas de maio/2022 (URL em `fontes` de cada item).

Vistos e não usados: ficha do Senhor Bom Jesus de Matosinhos (maio/2022, de
antes da criação da Paróquia Menino Jesus de Praga, que levou parte das
igrejas); ficha de São Sebastião da Vitória (2016); missas das comunidades
na ficha de São Judas Tadeu (texto histórico, sem data); ficha de Minduri
("Domingo 8h às 10h", ambíguo, posto em `nao_cabe`).

## O que falta para o próximo estado desta pesquisa

- Horários das 37 paróquias sem horário (lista em
  `SEM-HORARIO-sao-joao-del-rei.txt`). A diocese quase não cita perfis de
  Instagram; a busca terá de achar o perfil de cada paróquia.
- Endereço e telefone de Menino Jesus de Praga, Macuco de Minas, São Judas
  Tadeu (Lavras) e Santo Antônio e Nhá Chica (Rio das Mortes).
- Correspondência das foranias antigas (Lavras, Prados, São João del-Rei)
  com os nomes novos.
- Capelas e comunidades: só entraram as que as fichas listam com nome e
  lugar (Coronel Xavier Chaves, Ingaí, N. S. de Fátima de Lavras, Madre de
  Deus de Minas, Macuco de Minas, Menino Jesus de Praga, Nazareno e as
  igrejas da Catedral). São Sebastião de Lavras tem 18 comunidades sem
  nomes na ficha.
