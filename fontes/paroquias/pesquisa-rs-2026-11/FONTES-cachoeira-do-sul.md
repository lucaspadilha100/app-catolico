# Diocese de Cachoeira do Sul (RS): fontes da pesquisa de 13/11/2026

Sé em Cachoeira do Sul; centro do Rio Grande do Sul (Vale do Jacuí, Centro
Serra e Serra do Sudeste). Bispo: Dom Edson Batista de Mello. Cúria: Rua
Moron, 1007, Centro, Cachoeira do Sul, (51) 3722-1875,
mitracachoeira@outlook.com.br (página da diocese no site do Regional Sul 3
da CNBB). Sufragânea de Santa Maria.

## Resumo

- **14 unidades pastorais** em `saida/cachoeira-do-sul.json`: 1 catedral e
  13 paróquias, em 4 áreas pastorais (Área Centro, Área Norte, Área Pé da
  Serra e Área Sul). Cidades: Cachoeira do Sul (4) e uma em cada: Arroio do
  Tigre, Sobradinho, Segredo, Ibarama, Lagoão, Agudo, Cerro Branco, Novo
  Cabrais (matriz no Cortado), Caçapava do Sul e Santana da Boa Vista.
- **14 com horário de missa**, todos do site novo da diocese, lido em
  13/11/2026. 9 com confiança alta e 5 com média (ver abaixo).
- **184 capelas e comunidades** com nome e lugar, ligadas à paróquia que a
  página de cada uma indica. Atendem também municípios sem paróquia
  própria: Lagoa Bonita do Sul e Passa Sete (Sobradinho e Segredo) e
  Paraíso do Sul (Novo Cabrais e Cerro Branco).
- Todo `id_banco` é null.
- `SEM-HORARIO-cachoeira-do-sul.txt` está vazio: nenhuma paróquia ficou sem
  horário.

## Lista das unidades

A lista vem do diretório "Paróquias e comunidades" do site da diocese
(14 paróquias), batida com a página "Horários de Missa" (14) e com as 14
páginas individuais.

Conferência contra o GCatholic (atualizado em 09/11/2026: 13 paróquias e o
Santuário Mãe do Redentor): bate em tudo, com uma diferença. A Paróquia São
João Batista de Lagoão (erigida em 03/11/2015, diz a página dela) não está
no GCatholic. O Santuário Mãe do Redentor (Cachoeira do Sul, destino da
Romaria Diocesana no terceiro domingo de outubro) não é paróquia e ficou
fora; a fonte não diz a qual paróquia pertence, nem traz horários regulares.

## Atenção: o site é novo e tem dados de modelo

O site diocesecachoeiradosul.com.br foi lançado em 18/10/2026 (notícia de
15/10/2026) e a página "Telefones Úteis" avisa que vários contatos estão
"em validação". As páginas da Área Norte, da Área Pé da Serra e a de São
José Operário são completas (história, clero, comunidades, contatos que
batem com WhatsApp e e-mail próprios). Já a Catedral, N. S. da Penha,
N. S. da Assunção (Caçapava do Sul) e Santa Ana (Santana da Boa Vista) têm
sinais de dado de exemplo:

- telefones redondos: (51) 3722-1010, (51) 3722-3030, (55) 3281-1300,
  (53) 3273-1100;
- WhatsApp redondos: (51) 99722-0000, (51) 99722-2222, (55) 99855-1300,
  (53) 99866-1100;
- e-mails no domínio diocesecs.org.br, que não existe (DNS não resolve);
- endereço da Catedral "Rua Sete de Setembro, 1234".

Esses telefones, WhatsApp, e-mails e o endereço da Catedral ficaram FORA do
JSON. Os horários dessas quatro foram mantidos, com confiança **média** e o
aviso na observação. Santo Antônio de Cachoeira do Sul também ficou média:
a página só tem a missa de sábado e "contatos em breve".

Os Instagram citados nas páginas (catedralcachoeiradosul,
paroquiasobradinho, paroquiasagrada_familia, paroquia_sao_marcos) foram
anotados, sem abrir os perfis. O de Ibarama veio escrito como frase
("paroquia são Paulo Ibarama") e ficou vazio.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesecachoeiradosul.com.br/paroquias (diretório e áreas)
- https://diocesecachoeiradosul.com.br/utilidade-publica/missas (horários)
- https://diocesecachoeiradosul.com.br/utilidade-publica/telefones
  (contatos, com o aviso "em validação")
- https://diocesecachoeiradosul.com.br/diocese/curia
- https://diocesecachoeiradosul.com.br/romaria (Santuário Mãe do Redentor)
- Uma página por paróquia, em
  https://diocesecachoeiradosul.com.br/paroquias/<nome-cidade>; as URLs
  estão no campo `fontes` de cada item do JSON.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/cach0.htm e
  https://gcatholic.org/churches/local/cach0 (09/11/2026)
- https://www.catholic-hierarchy.org/diocese/dcads.html (endereço da cúria)
- https://cnbbsul3.org.br/diocese-de-cachoeira-do-sul/

O endereço antigo citado pelo GCatholic, www.diocesenet.com.br, responde com
o desafio anti-robô do Cloudflare; não foi usado.

## O que falta para o próximo estado desta pesquisa

- Confirmar telefone, WhatsApp, e-mail e endereço da Catedral, de N. S. da
  Penha, de N. S. da Assunção e de Santa Ana (perfis citados: só o da
  Catedral, @catedralcachoeiradosul), e reconferir os horários delas.
- Santo Antônio (Cachoeira do Sul): endereço, contatos e as missas além do
  sábado.
- Confissões só aparecem na Catedral (sábado 16h às 18h), em São José e em
  Caçapava do Sul (antes das missas).
- Paróquias rurais (Agudo, Segredo, Ibarama, Sobradinho) só dão as missas
  da matriz ou da paróquia, sem dizer a escala das comunidades. Em Agudo a
  página só traz o sábado e o quinto domingo.
- Três comunidades de Cerro Branco sem lugar na fonte (N. S. das Graças,
  Santa Clara, Santa Terezinha) ficaram no `nao_cabe` da matriz.
