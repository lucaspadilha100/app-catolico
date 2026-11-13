# Diocese de Taubaté (SP): fontes da pesquisa de 13/11/2026

Sé em Taubaté; Vale do Paraíba paulista e Serra da Mantiqueira. Bispo: Dom
Wilson Luís Angotti Filho. Cúria: Av. Professor Moreira, 327, Jardim das
Nações, Taubaté, (12) 3632-2855, suporte@diocesedetaubate.org.br. Padroeiro
diocesano: São Francisco das Chagas (4 de outubro).

## Resumo

- **49 unidades pastorais** em `saida/taubate.json`: 1 catedral, 1 basílica
  (Senhor Bom Jesus, Tremembé) e 47 paróquias, em 7 foranias (Bom Jesus,
  Menino Jesus, Nossa Senhora D'Ajuda, Nossa Senhora da Conceição, Nossa
  Senhora do Bom Sucesso, São Bento e São Francisco das Chagas). Cidades:
  Taubaté (20), Pindamonhangaba (10), Caçapava (6), Tremembé (3), Campos do
  Jordão (3), Natividade da Serra (2) e uma em cada: Jambeiro, São Bento do
  Sapucaí, Santo Antônio do Pinhal, Redenção da Serra, São Luiz do Paraitinga.
- **49 com horário de missa** (48 com confiança alta, 1 média): o site da
  diocese mantém uma página por paróquia com horários, contatos e endereço,
  todas lidas em 13/11/2026. A de confiança média é N. S. Rainha dos
  Apóstolos (Pindamonhangaba), cuja página é a notícia da instalação da
  paróquia com um bloco de horários sem data.
- 4 paróquias têm a matriz santuário (Santa Teresinha e São Benedito em
  Taubaté, Bom Sucesso em Pindamonhangaba, Santo Antônio de Pádua em
  Caçapava); entraram como `paroquia` com a primeira igreja de tipo
  `santuario`. A Basílica do Senhor Bom Jesus entrou como `basilica`.
- Capelas e comunidades só onde a fonte dá nome e lugar: Catedral (Convento
  Santa Clara e Missão Sede Santos), N. S. do Belém, N. S. D'Ajuda (5
  igrejas com endereço), São Benedito de Campos do Jordão (6 comunidades) e
  N. S. da Saúde. Comunidades sem bairro na fonte ficaram no `nao_cabe` da
  matriz (N. S. de Fátima de Pindamonhangaba, São José Operário de Caçapava,
  Rainha dos Apóstolos).
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Lista das unidades

A lista vem da página "Todas as Paróquias" do site da diocese, organizada
por cidade, batida com as 50 páginas individuais de paróquia do mesmo site.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 53
igrejas na diocese): bate em tudo, com uma divergência. O GCatholic lista o
Convento Santa Clara (Taubaté) como paróquia; a página da Catedral diz que o
Convento Santa Clara e a Missão Sede Santos "fazem parte do território
pastoral da paróquia São Francisco das Chagas". Seguimos a diocese: o
convento entrou como comunidade da Catedral, com as missas e confissões da
sua própria página. As demais entradas do GCatholic que não são unidade
(Seminário São José de Anchieta, duas igrejas greco-melquitas, N. S. das
Graças em Redenção da Serra e São Benedito em Santo Antônio do Pinhal, sem
marca de paróquia) ficaram fora.

Sobre as cidades esperadas e que NÃO são da diocese:

- **Ubatuba** deixou a Diocese de Taubaté em 1982 (foi para a Diocese de
  Santos) e hoje é da Diocese de Caraguatatuba, criada em 1999
  (catholic-hierarchy.org e gcatholic.org).
- **Lagoinha** é da Arquidiocese de Aparecida (Paróquia N. S. da Conceição,
  listada pelo GCatholic sob Aparecida).

Matrizes com titular diferente do padroeiro da paróquia, conforme as páginas
da diocese: N. S. D'Ajuda de Caçapava (matriz São João Batista), N. S. da
Assunção de Pindamonhangaba (matriz São Benedito), São Pio X de Caçapava
(matriz São Benedito), Rainha dos Apóstolos (matriz São Pedro e São Paulo),
Espírito Santo de Taubaté (comunidade matriz N. S. Aparecida).

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedetaubate.org.br/ (menu com todas as paróquias)
- https://diocesedetaubate.org.br/paroquias/ (a lista oficial, por cidade,
  com clero, endereço, telefone e expediente de cada uma)
- https://diocesedetaubate.org.br/foranias/ (os nomes das 7 foranias)
- Uma página por paróquia com horários de missa (50 páginas, uma por unidade
  mais a do Convento Santa Clara); as URLs estão no campo `fontes` de cada
  item do JSON. Exemplos:
  - https://diocesedetaubate.org.br/catedral/
  - https://diocesedetaubate.org.br/santateresinha/
  - https://diocesedetaubate.org.br/bomjesus/ (Basílica, Tremembé)
  - https://diocesedetaubate.org.br/nsdajuda/ (traz as 6 igrejas da paróquia
    com endereço e horários)
  - https://diocesedetaubate.org.br/saobeneditocampos/ (6 comunidades com
    bairro e horário)
  - https://diocesedetaubate.org.br/santaclara/ (missas e confissões do
    Convento Santa Clara)

Quando a página da paróquia e a lista geral divergem em telefone ou e-mail,
o JSON segue a página da paróquia, que aparenta ser a mais atualizada
(ex.: Catedral, Basílica do Bom Jesus, São José Operário de Taubaté).

## Instagram (anotado das próprias páginas da diocese)

Os perfis vieram das páginas de paróquia do site; nenhum perfil foi aberto
por dentro. catedraldetaubate, santuario.santateresinha, saosebastiaotaubate,
psantissimatrindadetaubate, sjp2.oficial (Taubaté), bomjesusdetremembe,
bomsucessopinda, par_saomiguel, paroquiansdasgracaspinda (Pindamonhangaba),
nsdajudacpv (Caçapava).

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/taub0.htm e
  https://gcatholic.org/churches/local/taub0 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dtaub.html (histórico do território,
  endereço da cúria)

## O que falta para o próximo estado desta pesquisa

- Horários de confissão fora da Catedral, do Santuário Santa Teresinha e do
  Convento Santa Clara: a maioria das páginas só manda falar com a
  secretaria.
- As comunidades rurais citadas sem nome ou sem bairro (São Vicente de Paulo
  de Taubaté tem nove, São João Paulo II tem dez, N. S. da Conceição de
  Quiririm tem nove): as páginas da diocese não as listam uma a uma.
- A paróquia N. S. Rainha dos Apóstolos merece reconferência quando a
  diocese publicar uma página normal (hoje é a notícia da instalação).
- Endereço da matriz da Paróquia Imaculada Conceição (Bairro Alto,
  Natividade da Serra): a página só dá o distrito e o telefone.
