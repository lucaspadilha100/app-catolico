# Pesquisa de unidades pastorais do Acre (novembro de 2026)

Duas circunscrições cobrem o estado: a Diocese de Rio Branco (vales do Acre e
do Purus) e a Diocese de Cruzeiro do Sul (vale do Juruá). As duas avançam
sobre municípios vizinhos: a de Rio Branco inclui Boca do Acre (AM) e os
distritos de Extrema e Nova Califórnia, em Porto Velho (RO); a de Cruzeiro do
Sul inclui Eirunepé, Guajará, Ipixuna e Envira (AM). Essas unidades entram no
arquivo da sua diocese, com o estado anotado na observação.

Consulta feita em 13/11/2026. O ambiente desta sessão não alcança os sites
diretamente: cada página foi lida pelo resumo do buscador, por consultas
limitadas ao domínio de cada diocese. As páginas das duas dioceses não trazem
data de publicação (o buscador indicou idades entre 3 meses e 2 anos para as
de Cruzeiro do Sul), por isso o campo `data` das fontes ficou vazio e nenhuma
unidade recebeu confiança "alta": "media" quando o horário vem do site da
diocese, "baixa" quando a página só deu contato ou nem isso. O banco não tem
nada do Acre: todo `id_banco` é null.

## Diocese de Rio Branco (rio-branco.json)

43 unidades: 1 catedral (reitoria), 33 paróquias, 4 quase-paróquias e 5 áreas
missionárias. 24 com algum horário de fonte oficial, 19 sem horário (entram
com `horarios: []` e o motivo na observação). O total bate com o GCatholic,
que registra 43 centros pastorais em 31/12/2022.

Páginas usadas (todas em 13/11/2026):

- https://www.diocesederiobranco.org.br/nossas-paroquias (lista por regiões
  pastorais, 2 a 10; os cabeçalhos da página têm falhas de formatação)
- https://www.diocesederiobranco.org.br/horarios-de-missa
- http://www.diocesederiobranco.org.br/paroquias/<paroquia> (página de cada
  unidade: endereço, contato, comunidades e horários; as URLs exatas estão no
  campo `fontes` de cada item)
- http://www.diocesederiobranco.org.br/diocese/historia (criação das
  paróquias; a catedral deixou de ser paróquia e virou reitoria)
- https://gcatholic.org/churches/local/riob0 (conferência da lista; única
  fonte da Quase-Paróquia São Paulo Apóstolo, que não aparece no site da
  diocese, e da paróquia de Epitaciolândia antes de achá-la no site)

Observações:
- A diocese usa duas paróquias São Sebastião vizinhas: Xapuri (1910) e
  Epitaciolândia (2001).
- A Área Missionária São Camilo aparece na Região 2 sem localidade; ficou com
  cidade vazia.
- Não foi encontrado perfil institucional de Instagram da diocese nem das
  paróquias; o campo ficou vazio.

## Diocese de Cruzeiro do Sul (cruzeiro-do-sul.json)

15 unidades: 1 catedral (Paróquia Nossa Senhora da Glória), 13 paróquias e
1 área missionária. 14 com horário de fonte oficial; só a Área Missionária da
Santa Luzia (BR-364) ficou sem, porque a escala é mensal, por semana do mês,
e não cabe no formato.

Páginas usadas (todas em 13/11/2026):

- https://diocesecruzeirodosul.org.br/paroquias/ e a página inicial (lista
  das 14 paróquias e da área missionária)
- https://diocesecruzeirodosul.org.br/horarios-de-missa/
- https://diocesecruzeirodosul.org.br/paroquia/<paroquia>/ (página de cada
  unidade; URLs no campo `fontes`)
- https://diocesecruzeirodosul.org.br/historia-da-diocese/ (Prelazia do Alto
  Juruá, 1931; diocese em 1987; 12 municípios)
- https://gcatholic.org/churches/brazil/2693 (endereço e telefone da catedral)

Observações:
- O rodapé do site da diocese repete o endereço da cúria (Avenida 28 de
  Setembro, 213, Centro, Cruzeiro do Sul) em várias páginas de paróquia; esse
  endereço não foi atribuído a nenhuma paróquia.
- Jordão não tem padre residente: é atendida pelos padres de Tarauacá, e sem
  padre o domingo tem celebração da Palavra.
- Guajará é atendida em parceria com a Igreja de São José do Rio Preto (SP),
  no projeto Igrejas Irmãs.

## Fuso

Acre inteiro em UTC-5. Os municípios do Amazonas atendidos pelas duas
dioceses (Boca do Acre, Eirunepé, Guajará, Ipixuna, Envira) ficam a oeste do
meridiano de divisão e também seguem UTC-5. Extrema e Nova Califórnia (RO)
seguem UTC-4. Os horários gravados são sempre os locais, como as fontes
publicam.
