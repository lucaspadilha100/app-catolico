# Diocese de Piracicaba (SP): fontes da pesquisa de 13/11/2026

Sé em Piracicaba; 15 municípios entre o rio Piracicaba, Rio Claro e Santa
Bárbara d'Oeste. Bispo: Dom Devair Araújo da Fonseca. Cúria: Av.
Independência, 1146, Alto, Piracicaba, (19) 2106-7575. Padroeiro diocesano:
Santo Antônio (13 de junho).

## Resumo

- **70 unidades** em `saida/piracicaba.json`: 1 catedral, 67 paróquias,
  1 quase-paróquia (Santa Cruz, Anhumas) e 1 santuário que não é paróquia
  (Santuário Diocesano de N. S. da Boa Morte e Assunção, Rio Claro). Somam
  as **68 paróquias, 1 quase-paróquia** que a própria diocese declara
  ("Formação da diocese" e "Diocese hoje"), mais o santuário. A capelania
  São Francisco de Assis (Cúria, criada em 2019) não entrou: não é unidade
  paroquial.
- Cidades: Piracicaba (28 paróquias e a quase-paróquia), Rio Claro (12
  paróquias e o santuário), Santa Bárbara d'Oeste (12), Capivari (3), Rio das
  Pedras (2), São Pedro (2) e uma em cada: Águas de São Pedro, Charqueada,
  Corumbataí, Ipeúna, Mombuca, Rafard, Saltinho, Santa Gertrudes, Santa
  Maria da Serra. Ajapi, Ártemis e Tupi são distritos (Rio Claro e
  Piracicaba).
- **57 com horário**: 4 de confiança alta, lidas direto no site da paróquia
  ou da congregação que a dirige (Catedral, Santuário N. S. dos Prazeres,
  Santa Cruz de Rio Claro, São Pedro e São Paulo de Rio Claro pelo site dos
  Claretianos); 52 de confiança média, das páginas de paróquia do site da
  diocese lidas só pelo trecho que a busca mostra (ver abaixo); 1 de
  confiança baixa (Maria Estrela da Evangelização: página da diocese sem
  atualização há cerca de 11 anos).
- **14 de confiança baixa**, 13 sem horário (regra do dono: entram com
  `horarios: []` e o porquê na observação): Santa Teresinha, Sagrada
  Família, Bom Jesus do Monte, São João Batista (Ártemis), São Lucas, Santa
  Rosa de Lima, São João Batista Precursor (Piracicaba); Santo Antônio
  (Ajapi), São Francisco de Assis e Imaculado Coração de Maria (Rio Claro);
  N. S. de Lourdes (Rafard, matriz em obras até 08/12/2026); São Pedro (São
  Pedro); Imaculada Conceição (Santa Bárbara d'Oeste).
- A matriz da Paróquia N. S. dos Prazeres é santuário: entrou como
  `paroquia` com a primeira igreja de tipo `santuario` (como em Taubaté).
- Todo `id_banco` é null.

## O site da diocese não abre para robôs

`diocesedepiracicaba.org.br` está atrás do "Vercel Security Checkpoint"
(HTTP 429 para qualquer página, inclusive robots.txt e sitemap). A pesquisa
não tentou contornar o bloqueio. O conteúdo foi lido pelo **trecho que a
busca mostra**, em 13/11/2026, de dois conjuntos de páginas:

- o site antigo, uma página por paróquia:
  `https://diocesedepiracicaba.org.br/capa.asp?paroquia=<n>` (endereço,
  telefone, e-mail, pároco, horários da matriz e das capelas; sem data);
  capelas em `capa.asp?capela=<n>`;
- o site novo, `https://www.diocesedepiracicaba.org.br/paroquias/<slug>`,
  que a busca indexou para poucas paróquias (São Francisco Xavier, São
  Sebastião e N. S. Aparecida de Santa Bárbara, N. S. Aparecida de Rio das
  Pedras, São José Operário de Rio Claro). Onde há as duas, os horários da
  matriz coincidem.

Por isso esses horários ficaram com confiança **média**: são da diocese, mas
lidos por resumo de busca e sem data. Merecem reconferência quando o site
abrir para a pesquisa (ou pelo `horarios-das-missas` do site novo).

Mapa das páginas antigas usadas (n → paróquia): 5 Águas de São Pedro; 15 São
João Batista (Capivari); 16 São Benedito (Capivari); 17 N. S. de Fátima
(Capivari); 19 Charqueada; 21 Corumbataí; 23 Ipeúna; 25 Mombuca; 34
Saltinho; 35 Santa Gertrudes; 36 Santa Maria da Serra; 38 São José (São
Pedro); 39 Bom Jesus (Rio das Pedras); 40 N. S. Aparecida (Rio das Pedras);
42 São José Operário, 43 São João Batista, 45 Santa Cruz, 46 Sant'Ana, 47
N. S. da Saúde, 48 N. S. Aparecida, 49 Imaculado Coração de Maria, 50
Espírito Santo, 93 Bom Jesus, 95 São Pedro e São Paulo (Rio Claro); 52
Senhor Bom Jesus, 54 São Paulo Apóstolo, 55 São Judas Apóstolo, 56 São José,
57 São João Batista, 58 São Francisco de Assis, 59 Santo Antônio, 60 Santa
Bárbara, 61 N. S. Auxiliadora, 63 N. S. Aparecida (Santa Bárbara d'Oeste);
64 Divino Pai Eterno, 65 Imaculada Conceição (Vila Rezende), 66 Imaculado
Coração de Maria, 67 Menino Jesus de Praga, 68 N. S. Aparecida
(Piracicamirim), 71 Sagrado Coração de Jesus, 72 Sant'Ana, 73 Santa
Catarina, 74 Santa Clara, 75 Santa Cruz e São Dimas, 78 Catedral, 79 São
Francisco de Assis, 80 São Francisco Xavier, 81 São José, 82 São José de
Tupi, 83 São Judas Tadeu, 85 São Paulo Apóstolo, 88 Nova Suíça, 89 antiga
quase-paróquia Imaculada Conceição e Sant'Ana, 94 Maria Estrela da
Evangelização (Piracicaba).

## Lista das unidades

Montada pelos **CNPJs filiais da Diocese de Piracicaba** (raiz
44.802.999, lidos um a um em https://minhareceita.org/ em 13/11/2026: filiais
0001 a 0081; da 0082 à 0160 nenhuma existe). Há 68 filiais ativas com nome de
paróquia (a Catedral é a 0005) e 2 de quase-paróquia (0052 Santa Cruz rural,
Anhumas; 0066 N. S. do Rosário da Pompeia). As demais são a sede, seminários,
Carmelo, convento, centro de espiritualidade e entidades baixadas.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026,
https://gcatholic.org/churches/local/pira0): 68 igrejas marcadas como
paróquia, e a estatística dá 68 paróquias. Batem uma a uma com as 68
paróquias dos CNPJs (os nomes "Santa Terezinha" e "Santa Teresinha de
Piraci" do anuário são bairros de Piracicaba: Santa Teresinha e Maria
Estrela da Evangelização). Ficaram fora as entradas sem paróquia: Divino
Espírito Santo, N. S. Aparecida e São Benedito em Piracicaba (capelas),
Seminário São Fidélis, São Benedito de Santa Maria da Serra e a igreja
maronita N. S. do Líbano. O Santuário da Boa Morte, que o anuário lista,
entrou como santuário.

**A quase-paróquia.** A diocese diz que há uma só; os CNPJs têm duas.
A Pompeia aparece como capela da Paróquia São Paulo Apóstolo (página 85) e
entrou assim. Santa Cruz (Anhumas) aparece como capela na página da Nova
Suíça (88), mas a prefeitura de Piracicaba ainda a chama de "Matriz da
Quase-paróquia Santa Cruz" e o CNPJ segue ativo: entrou como
`quase_paroquia`, com observação para conferir. Em 2019 a quase-paróquia
Santo Antônio de Ajapi virou paróquia (página "Formação da diocese").

## Sites próprios (lidos em 13/11/2026)

- https://catedraldepiracicaba.org.br/horarios-de-missas,
  /confissoes e /secretaria (Catedral: missas, adoração, confissões, contatos)
- https://santuarionsp.com.br/principal e
  https://santuarionsp.com.br/capa.asp?p=273&ref=confissoes (Santuário N. S.
  dos Prazeres; o site traz dois blocos de horário que diferem em 15 minutos
  na segunda e na terça: valeu o bloco detalhado, anotado no `nao_cabe`)
- https://www.paroquiasantacruzrioclaro.com.br/ (Santa Cruz, Rio Claro;
  agenda "atualizado em 25/02/2025")
- https://claretianos.com.br/paroquias/rio-claro-sao-paulo/ (São Pedro e
  São Paulo, Rio Claro, horários da matriz e das capelas)
- https://orionitas.com.br/paroquia-rio-claro/ (N. S. da Saúde, Rio
  Claro: endereço e telefone)

Sites que não abriram ou não servem: paroquiastacatarina.com.br,
bomjesusdomonte.com.br, paroquiaimaculadaconceicao.com.br,
paroquiasantoantoniosbo.com.br, senhoradelourdes.net (fora do ar ou 404);
paroquiasaopedropiracicaba.com.br (certificado inválido; lido pelo trecho
da busca); paroquiasaude-rc.com (domínio hoje é de outra coisa). Descartados
por serem de homônimas de outras dioceses: paroquiastateresinha.com
(Brasília), meninojesusdepraga.org.br (São José do Rio Preto),
psantarosadelima.blogspot.com (Salvador).

## Outras fontes

- https://santuarionsp.com.br/capa.asp?n=1595 (notícia diocesana: matriz de
  Santa Teresinha na Rua Virgílio da Silva Fagundes, 398)
- https://diocesedepiracicaba.org.br/capa.asp?p=714 (Missionários de São
  José: contatos da Sagrada Família)
- https://emfoco.org.br/capa.asp?n=1841 (centenário da igreja de Ártemis;
  elevada a paróquia em 30/03/2014)
- https://www.jornalosemanario.com.br/ (Rafard: matriz em obras desde
  fevereiro de 2025, reabertura anunciada para 08/12/2026)
- http://www2.camarasantabarbara.sp.gov.br/Sino.Siave/arquivo?Id=214303
  (Imaculada Conceição de Santa Bárbara: endereço e telefone)
- https://catholic-hierarchy.org/diocese/dpira.html (endereço da cúria)

## Instagram (só o trecho que a busca mostra, em 13/11/2026)

Nenhum perfil foi aberto por dentro. Entraram só os que vieram do site da
paróquia ou cujo trecho batia com a paróquia (nome, cidade, telefone ou
horários): catedraldepiracicaba, nspsantuario (dos sites);
paroquia_santacruzrc (site da paróquia); paroquia.saopedroesaopaulo.rc (site
dos Claretianos); paroquiasaopedro.piracicaba; pnsa.rc (N. S. Aparecida, Rio
Claro); pstabarbara.sbo; paroquiassoeste (São Sebastião, Santa Bárbara);
paroquia.saltinho. Ficaram fora, por dúvida de dono: paroquia.icdm,
paroquia.saojoseoperario, paroquia.espiritosanto, paroquiafcoxavier,
matrizpascom.

## Telefones

Os telefones dos CNPJs são, na maioria, do escritório de contabilidade da
diocese (19 2106-75xx, 19 3432-6486, 19 3426-5000): não entraram. Valeram os
das páginas da paróquia (diocese ou site próprio).

## O que falta para o próximo estado desta pesquisa

- Reler as 52 páginas de confiança média direto no site da diocese quando
  ele abrir para a pesquisa (de preferência o site novo e a busca
  `horarios-das-missas`), e dar data aos horários.
- As 13 paróquias sem horário (lista acima), em especial São Pedro (cidade
  de São Pedro), Santa Teresinha, Bom Jesus do Monte e São Lucas, cujas
  páginas na diocese a busca não mostrou.
- Confirmar qual é a quase-paróquia em vigor (Santa Cruz de Anhumas ou
  nenhuma das duas dos CNPJs).
- Endereço das muitas capelas que as páginas citam só pelo nome (ficaram no
  `nao_cabe` da matriz).
- Rafard: horários depois da reabertura da matriz (08/12/2026).
