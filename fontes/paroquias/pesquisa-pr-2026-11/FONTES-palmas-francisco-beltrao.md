# Diocese de Palmas-Francisco Beltrão (PR): fontes da pesquisa de 13/11/2026

Sé em Palmas, com concatedral em Francisco Beltrão; sudoeste do Paraná.
Cúria: Rua Bispo Dom Carlos, 819, sala 01, Centro, Palmas, (46) 3263-1134.
Padroeiro diocesano: Senhor Bom Jesus. Site:
https://www.diocesepalmasbeltrao.com.br (só com "www"; sem ele o endereço
não responde).

## Resumo

- **48 unidades** em `saida/palmas-francisco-beltrao.json`: a Catedral
  Senhor Bom Jesus da Coluna (Palmas), a Concatedral N. S. da Glória
  (Francisco Beltrão, entrou como `catedral`), 45 paróquias e a Reitoria
  N. S. da Conceição de Dr. Antônio Paranhos (entrou como `area_pastoral`).
  São 7 decanatos, anotados na observação: Dois Vizinhos (8), Palmas (5),
  Realeza (6), Pato Branco (8), Francisco Beltrão (6), São João (9) e
  Barracão (6). Cidades: Francisco Beltrão (5), Pato Branco (4), Dois
  Vizinhos (2), Palmas (2) e uma em cada uma das outras 35.
- **46 com horário de missa**, todas com confiança média: os dados vêm do
  cadastro de paróquias do site (sem data). Vários quadros ainda falam em
  "horário de verão" e "horário de inverno"; entrou o horário de inverno (o
  comum) e o de verão ficou em `nao_cabe`.
- **2 sem horário**, confiança baixa: N. S. Aparecida (Boa Esperança do
  Iguaçu) e Sagrado Coração de Jesus (Pato Branco, a paróquia mais nova,
  ainda fora do GCatholic). Lista em `SEM-HORARIO-palmas-francisco-beltrao.txt`.
- Santuários: 3 dos 4 que a diocese lista entraram como igreja da paróquia
  que a fonte indica: N. S. de Fátima (Palmas, telefone da Catedral, domingo
  8h30), N. S. Aparecida (Linha Santa Catarina, Santa Izabel do Oeste, citado
  no quadro de missas da paróquia, domingo 9h) e N. S. da Saúde (Monte do
  Calvário, Cruzeiro do Iguaçu, mesma caixa postal da paróquia, sem horário).
- Todo `id_banco` é null.

## Fora do JSON, de propósito

- Santuário Diocesano de N. S. da Salette, comunidade de Rio Elias (BR-373,
  Renascença; domingo 14h, terço no dia 19 às 18h, telefone (46) 3234-1351).
  O histórico diz que a capela fica na divisa de Bom Sucesso do Sul com
  Renascença e é atendida pelos padres saletinos desde a criação das
  paróquias de Vitorino, Bom Sucesso do Sul e Renascença; não diz a qual
  pertence. Pendência.
- Paróquia N. S. do Perpétuo Socorro (Pato Branco), listada no GCatholic:
  é de rito ucraniano, fora da diocese latina.

## Conferência da lista

- Site: o menu "Paróquias" é montado por JavaScript a partir de
  `https://www.diocesepalmasbeltrao.com.br/modulos/handlers/paroquias.ashx`
  (`type=list&decanato=N` dá a lista do decanato; `type=detail&id=N` dá o
  cadastro da paróquia com endereço, telefone, e-mail, atendimento e
  "HorarioMissas"). Os decanatos 3, 6, 7, 8, 10, 11 e 12 somam 48 unidades;
  os ids 1 a 62 foram todos consultados e não há outra.
- GCatholic (https://gcatholic.org/churches/local/palm3, atualizado em
  09/11/2026; estatística de 2022: 47 paróquias): bate com o site, menos a
  Sagrado Coração de Jesus de Pato Branco, que não está lá. O GCatholic
  lista também os 4 santuários.

## Endereços lidos (13/11/2026)

- `.../paroquias.ashx?type=list&decanato=3` (e 6, 7, 8, 10, 11, 12)
- `.../paroquias.ashx?type=detail&id=<id>` (no campo `fontes` de cada item)
- `.../santuarios.ashx?type=list` e `?type=detail&id=6` a `9`

## Decisões de leitura

- Dr. Antônio Paranhos não é município: a reitoria entrou com cidade São
  Jorge d'Oeste e localidade Doutor Antônio Paranhos, deduzidas do CEP
  (85579-000, na faixa de São Jorge d'Oeste, 85575-000). Conferir.
- Telefones fora do padrão ficaram de fora, com nota: N. S. de Fátima de
  Pato Branco publica "(46) 32243-6344" (ficou o WhatsApp do endereço) e
  Cristo Rei de Realeza "(46) 35431-4904" (ficou o WhatsApp de 8 dígitos,
  como publicado). N. S. Aparecida de Palmas publica DDD 43; ficou como está.
  Santa Rita de Marmeleiro publica o e-mail incompleto ("paroquiasantarita").
- Linhas só de novena, terço ou louvor não entraram. Dias fixos do mês,
  "última sexta/quinta", missas "na capela" sem nome e "nas casas" ficaram
  em `nao_cabe`.
- Cruzeiro do Iguaçu publica "1º e 3º do mês: 19h" sem dizer o dia; ficou em
  `nao_cabe`.
- São Pedro de Pato Branco: segunda a sábado 7h "na capela" (sem nome)
  ficou em `nao_cabe`; entraram as missas da matriz.
- O cadastro do site não traz Instagram nem Facebook.

## O que falta para o próximo estado

- Confirmar se os quadros ainda valem (sem data, com horário de verão) e qual
  vigora em novembro.
- Horário das 2 paróquias sem quadro.
- Paróquia do Santuário da Salette (Rio Elias).
- Comunidades: o cadastro não as lista.
