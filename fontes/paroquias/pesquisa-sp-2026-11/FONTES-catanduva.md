# Diocese de Catanduva (SP): fontes da pesquisa de 13/11/2026

Sé em Catanduva; noroeste paulista, província eclesiástica de São José do
Rio Preto. Criada em 9 de fevereiro de 2000 (desmembrada de São Carlos,
Jaboticabal e São José do Rio Preto). Bispo: Dom José Benedito Cardoso
(desde 2024). Cúria: Avenida Palmares, 930, Vila Bela, Catanduva, CEP
15804-115, (17) 3521-6501 (página Fale Conosco do site). Padroeiro
diocesano: São Domingos de Gusmão.

## Resumo

- **34 unidades pastorais** em `saida/catanduva.json`: 1 catedral (a
  Catedral Santuário Nossa Senhora Aparecida) e 33 paróquias, em 17
  municípios: Catanduva (13), Novo Horizonte (3), Pindorama (3, uma no
  distrito de Roberto), Catiguá (2) e uma em cada: Ariranha, Elisiário,
  Ibirá, Irapuã, Itajobi, Marapoama, Novais, Palmares Paulista, Paraíso,
  Sales, Santa Adélia, Tabapuã e Urupês.
- **6 com horário de missa, todas com confiança média**; as outras 28
  entraram com `"horarios": []` e confiança baixa (regra do dono). Motivo:
  o site da diocese tem uma página por paróquia, mas TODAS estão vazias
  ("História da Paróquia", "Clero: Nenhum resultado encontrado", "Horários
  de Missas" sem conteúdo; a API do WordPress confirma `content` vazio e
  `acf` vazio nas 34). Nenhuma paróquia tem site próprio no ar. Os seis
  horários vieram de trechos de páginas das próprias paróquias mostrados
  pela busca (Facebook e bio do Instagram), sem data:
  - Catanduva: São Domingos de Gusmão (só segunda a sábado; o trecho não
    traz domingo), N. S. de Fátima (só quarta a sexta; sábado às 16h30 sem
    dizer a igreja, no `nao_cabe`), Santo Antônio de Pádua, São Francisco
    de Assis (bio do Instagram; o sábado às 17h no bairro Santa Rosa ficou
    no `nao_cabe`).
  - Ariranha: São João Batista.
  - Pindorama: Santo Antônio de Pádua (com a Capela Santa Rita, domingo
    7h30).
- A Paróquia N. S. do Carmo (Irapuã) tem a matriz santuário: entrou como
  `paroquia` com a primeira igreja de tipo `santuario` (molde de Taubaté).
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.
- Nenhuma cidade desta diocese aparece nos outros arquivos de `saida/`.

## Lista das unidades

A lista vem do site da diocese: a página "Paróquias" (mapa por cidade) e o
tipo próprio `paroquia` do WordPress
(https://diocesedecatanduva.com.br/wp-json/wp/v2/paroquia?per_page=100,
`X-WP-Total: 34`). Os nomes seguem os títulos dessas páginas.

Conferências:

- **GCatholic** (https://gcatholic.org/churches/local/cata4 e
  https://gcatholic.org/dioceses/diocese/cata4.htm, atualizado em
  09/11/2026: 34 paróquias): bate uma a uma com o site. Marca a catedral e
  a matriz de Irapuã como santuário. As páginas de cada igreja no GCatholic
  não trazem endereço nem telefone (só a catedral, com um número antigo).
- **CNPJ** do Bispado de Catanduva (raiz 03.707.358, filiais 0001 a 0060
  lidas em https://minhareceita.org/ em 13/11/2026; da 0037 em diante
  nenhuma existe): 36 filiais ativas. A 0001 é a cúria; a 0032 é o
  Seminário N. S. da Esperança (Travessa Maracanã, 110). As outras 34 são
  paróquias e batem com o site, com duas diferenças:
  - **Catiguá**: o site e o GCatholic têm DUAS paróquias (Santa Izabel e
    São Sebastião); o CNPJ tem uma filial só, "Paróquia Santa Isabel e São
    Sebastião" (Rua José Menegon, 240). Seguimos a diocese: as duas
    entraram, sem endereço, porque não se sabe qual igreja fica nesse
    endereço.
  - **Paróquia São Pio de Pietrelcina** (filial 0036, aberta em
    09/08/2022, com o endereço da cúria, Rua Bebedouro, 930, sala 1): não
    aparece no site da diocese nem no GCatholic, e a busca não achou nada
    sobre ela. Ficou FORA; conferir com a cúria se é paróquia criada ou só
    um registro.
- A Wikipédia (pt) fala em 33 paróquias e quatro setores; o mapa do site
  mostra "Setor 01" a "Setor 03". Os nomes dos setores não estão
  publicados, por isso não entraram.

## Contatos e endereços

- **Endereço da matriz**: do CNPJ de cada paróquia (é o que a própria
  paróquia declarou à Receita). Em Itajobi o CNPJ dá a Rua Prudente de
  Moraes, 224, que pode ser a secretaria e não a igreja (anotado na
  observação).
- **Telefone**: também do CNPJ. Os números antigos de 7 dígitos
  (ex.: `017 522-8159`) foram passados ao formato atual com o 3 na frente
  (`17 3522-8159`); a conversão foi conferida na São Francisco de Assis,
  que publica o número novo na bio do Instagram.
  São José de Catanduva: telefone (17) 3522-6848 da página da paróquia no
  Facebook (trecho da busca); o CNPJ dela só tem o número da cúria.
  Não entraram os números do CNPJ que são da cúria ((17) 3521-6501, que
  aparece em São José, São Paulo Apóstolo, São Benedito de Catanduva, São
  Sebastião de Novo Horizonte e São Pedro de Pindorama) nem o (17)
  3522-2091 que se repete em várias filiais (São Judas Tadeu, São Sebastião
  de Novo Horizonte, São Pedro). Santa Clara de Assis tem no CNPJ o mesmo
  telefone de São José da Santíssima Trindade e ficou sem telefone.
- Santo Antônio de Catanduva: telefone (17) 3521-6818 da página da
  paróquia no Facebook (o CNPJ dá outro); a página diz Rua Araraquara, 833
  e o CNPJ, 805 (ficou o do CNPJ).
- São Benedito de Catanduva (paróquia de 2016): o CNPJ dá a Rua Luiz Paulo
  de Lima Supi, 120 (Residencial Novo Tarraf); a página do Facebook cita a
  Rua Octávio Alves de Araújo, bairro Santa Helena. Ficou o CNPJ, com a
  divergência na observação.
- O site de cada item é a página da paróquia no site da diocese (vazia, mas
  é o endereço oficial).

## Fontes dos horários (trechos da busca, nenhuma página aberta por dentro)

- https://www.facebook.com/igrejamatrizsaodomingos/ (São Domingos)
- https://www.facebook.com/pnsfatimacatanduva/ (N. S. de Fátima)
- https://www.facebook.com/santoantoniocatanduva/ (Santo Antônio)
- https://www.instagram.com/saofranciscocatanduva/ (São Francisco, bio)
- https://www.facebook.com/paroquiaariranha/ (Ariranha)
- https://www.facebook.com/stoantoniopindorama (Pindorama)

## Instagram (do trecho da busca; nenhum perfil aberto por dentro)

saofranciscocatanduva, matrizsaodomingoscatanduva, saojose.cat (Catanduva),
paroquiaimaculadapalmares (Palmares Paulista). Diocese: diocesedecatanduva.
Ficaram fora: `prstaadelia` (é a Paróquia Santa Adélia do bairro Jardim
Santa Adélia, na cidade de São Paulo) e `padrefabiov` (perfil pessoal de
padre).

## Não usadas

- https://www.horariodemissa.com.br/ e https://www.liriocatolico.com.br/
  (agregadores mantidos por voluntários; as páginas de Catanduva foram
  atualizadas em 2013 e 2015): não são publicação da paróquia nem da
  diocese. Serviram só para achar nomes de páginas das paróquias.
- O endereço `diocesedecatanduva.org.br` (citado pela Wikipédia e pelo
  GCatholic) não responde; o site atual é `diocesedecatanduva.com.br`.

## O que falta para o próximo estado desta pesquisa

- Horários das 28 paróquias sem horário e dos domingos de São Domingos e
  N. S. de Fátima: só a cúria ou as secretarias têm. Vale pedir à diocese
  que preencha as páginas de paróquia do site (o campo já existe).
- Confissão e adoração: nenhuma fonte da paróquia ou da diocese publica.
- Capelas e comunidades: só a Capela Santa Rita (Pindorama) apareceu numa
  fonte da paróquia, sem bairro. O GCatholic conta 58 "missions" na
  diocese, sem nomes.
- Conferir com a cúria a Paróquia São Pio de Pietrelcina (CNPJ de 2022) e
  as duas paróquias de Catiguá.
