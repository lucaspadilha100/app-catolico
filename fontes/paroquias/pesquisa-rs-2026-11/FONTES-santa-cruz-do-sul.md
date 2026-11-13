# Diocese de Santa Cruz do Sul (RS): fontes da pesquisa de 13/11/2026

Sé em Santa Cruz do Sul; Vales do Rio Pardo e do Taquari, Serra do Sudeste.
Bispo: Dom Itacir Brassiani, MSF. Cúria: Rua Ramiro Barcelos, 717, Centro,
Santa Cruz do Sul, (51) 3711-3668, recepcaocuria@mitrascs.com.br.
Padroeiro diocesano: São João Batista. Sufragânea de Santa Maria.

## Resumo

- **52 unidades pastorais** em `saida/santa-cruz-do-sul.json`: 1 catedral,
  50 paróquias e 1 quase-paróquia (Jesus Mestre da Palavra), em 11 comarcas
  eclesiásticas: Santa Cruz do Sul, Linha Santa Cruz, Venâncio Aires, Rio
  Pardo, Candelária, Encruzilhada do Sul, Lajeado, Arroio do Meio,
  Encantado, Arvorezinha e Boqueirão do Leão. A comarca vai na observação.
- **Nenhuma com horário.** O site da diocese tem diretório completo, com
  contatos, endereço e coordenadas, mas o campo de horários de celebração
  está vazio em todas as fichas (conferido pela API do próprio site). Todas
  entraram com `horarios: []` e confiança baixa, e a lista está em
  `SEM-HORARIO-santa-cruz-do-sul.txt` com o Instagram ou Facebook que o site
  cita.
- **16 comunidades** com nome e lugar: 10 de Muçum e 5 de São Cristóvão
  (Lajeado), ligadas pela própria ficha; e a Comunidade Sagrado Coração de
  Jesus do Belvedere, que a ficha diz integrar a Catedral.
- Todo `id_banco` é null.

## Lista das unidades

O site (https://diocesesantacruz.com.br/paroquias/) é um aplicativo que lê
o diretório de um endereço próprio, que devolve JSON:

- https://diocesesantacruz.com.br/api/directory?section=places (72 fichas:
  51 paróquias, 1 santuário, 16 comunidades, 3 capelas, 1 "outro")
- https://cms.diocesesantacruz.com.br/api/parishes?limit=200 (as mesmas
  fichas, com contatos e redes)
- https://diocesesantacruz.com.br/api/place-profile?slug=<ficha> (clero,
  comunidades e horários de cada uma; horários vazios em todas)

Ajustes feitos:

- A ficha "São Paulo - Ilópolis" (santuário) e a ficha "São Paulo"
  (paróquia) são a mesma unidade: entrou uma paróquia com a matriz Santuário
  São Paulo Apóstolo.
- "São João Batista - Nova Brécia" (tipo "outro") repete a de Nova Bréscia;
  foi juntada, e dela veio o endereço.
- A Comunidade Nossa Senhora do Nó tem endereço em Porto Alegre; não é desta
  diocese e ficou fora.
- Há três fichas "Sagrado Coração de Jesus" de comunidade: duas do Belvedere
  (uma repetida, ligada à Catedral pelo texto) e uma no bairro Renascença,
  Rua Oscár Hugo Martin, 676, Santa Cruz do Sul, **sem paróquia indicada**:
  ficou como pendência.

Contagem: a página de História do site numera 52 paróquias (o item 9 falta
no texto) e o site do Regional Sul 3 da CNBB diz "51 paróquias em 11
comarcas eclesiásticas" (página editada em 03/12/2024). O diretório tem 51
paróquias; a 52ª é a **Paróquia Jesus Mestre da Palavra**, que o histórico
descreve como região pastoral criada em 15/11/2002 "na condição de
quase-paróquia". Ela não tem ficha no diretório, mas está no GCatholic
(Santa Cruz do Sul, sem endereço). Entrou como `quase_paroquia`, sem contato.

Conferência contra o GCatholic (09/11/2026, 52 paróquias na estatística):
bate com o diretório mais Jesus Mestre da Palavra. Fora da lista ficaram os
santuários sem paróquia (Cristo Protetor em Encantado, Schoenstatt em Santa
Cruz do Sul) e os seminários.

Nomes que mudaram em relação ao histórico do site (seguimos o diretório,
que é o atual): Três Mártires Rio-grandenses de Linha Santa Cruz = Santos
Mártires das Missões; São Miguel de Monte Alverne = Nossa Senhora de
Lourdes de Monte Alverne; N. S. de Lourdes da Estância Mariante = N. S. de
Lourdes da Estância Nova.

Cidade: São José do Patrocínio de Itapuca tem no site o endereço "Estr.
Itapuca, 164 - Itapuca, Anta Gorda"; o GCatholic põe em Itapuca. Entrou
como Itapuca, com o aviso na observação.

## Contatos

Telefone fixo e WhatsApp como publicados nas fichas. Celular sem marca de
WhatsApp foi para `telefone`. Ficaram de fora: o telefone de N. S. da
Glória (Sinimbu), publicado com um dígito a mais; o "WhatsApp" de Santo
Inácio de Loyola, que é número fixo; e o Facebook citado para N. S. da
Natividade, que é perfil pessoal. O link de Instagram de N. S. do Perpétuo
Socorro (Arroio do Meio) não é um perfil válido.

## Fontes

- https://diocesesantacruz.com.br/paroquias/<ficha>/ (uma por paróquia,
  no campo `fontes` de cada item) e a API acima, lidas em 13/11/2026
- https://diocesesantacruz.com.br/diocese/historia/ (lista numerada das
  paróquias com a data de criação; lida dentro do código do site)
- https://cnbbsul3.org.br/diocese-de-santa-cruz-do-sul_/ (contagem e
  contatos da cúria)
- https://gcatholic.org/dioceses/diocese/zcru1.htm e
  https://gcatholic.org/churches/local/zcru1 (09/11/2026)
- https://www.catholic-hierarchy.org/diocese/dscsu.html

Sites próprios citados nos e-mails (pssm.com.br de São Sebastião Mártir,
paroquiademoinhos.com.br de N. S. da Conceição de Lajeado) não respondem
(DNS não resolve). O site antigo da diocese, www.mitrascs.com.br, hoje só
redireciona para o Facebook.

## O que falta para o próximo estado desta pesquisa

- Os horários das 52 unidades: o site da diocese não os publica. A rodada
  com busca deve começar pelos perfis em `SEM-HORARIO-santa-cruz-do-sul.txt`
  (13 Instagram e 15 Facebook citados pelo próprio site).
- Contatos e endereço da Quase-Paróquia Jesus Mestre da Palavra e a qual
  paróquia pertence a Comunidade Sagrado Coração de Jesus do bairro
  Renascença.
- Comunidades das demais paróquias: o diretório só traz as de Muçum e de
  São Cristóvão (Lajeado).
- A Missa por cura e libertação do Santuário São Paulo Apóstolo (Ilópolis),
  no 4º domingo do mês, não tem hora publicada.
