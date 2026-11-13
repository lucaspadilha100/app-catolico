# Diocese de Toledo (PR): fontes da pesquisa de 13/11/2026

Sé em Toledo; oeste do Paraná. Bispo: Dom João Carlos Seneme, CSS. Cúria:
Rua General Rondon, 2006, Jardim La Salle, Toledo, (45) 3252-1417,
curia@diocesetoledo.org. Padroeiro diocesano: Cristo Rei (GCatholic).

## Resumo

- **32 unidades pastorais** em `saida/toledo.json`: 1 catedral (Cristo Rei,
  Toledo) e 31 paróquias, em 4 decanatos: Toledo (12), Rondon (9),
  Palotina (5) e Assis (6). Cidades: Toledo (9, contando os distritos de
  Vila Nova, Novo Sarandi e Dez de Maio), Marechal Cândido Rondon (3,
  contando Vila Margarida), Assis Chateaubriand (2), Guaíra (2) e uma em cada:
  São Pedro do Iguaçu, Ouro Verde do Oeste, Mercedes, Pato Bragado, Entre
  Rios do Oeste, Quatro Pontes, Nova Santa Rosa, Tupãssi, Jesuítas, Formosa
  do Oeste, Nova Aurora, Terra Roxa, Maripá, Palotina.
- **32 com horário de missa** (todas com confiança alta): cada paróquia tem
  uma página no site da diocese com endereço, telefones, e-mail e o quadro
  "Horários de Missa" da matriz. As páginas não têm data.
- Só os horários da MATRIZ: as páginas não listam capelas nem comunidades.
  Confissão e adoração não são publicadas (a única menção é "Com adoração ao
  Santíssimo" na missa de quarta da N. S. Aparecida de Toledo, anotada na
  observação do horário).
- Telefone: o fixo da página; o celular publicado junto ("Fones") entrou
  como WhatsApp da secretaria. Todo `id_banco` é null.

## Lista das unidades

A lista vem do próprio site: o seletor de paróquias da página de horários
(32 nomes) e a página "Paróquias", cujo filtro por decanato
(`/paroquias/list`, categoria 1 a 4) deu o decanato de cada uma: 12 + 9 +
5 + 6 = 32.

Conferência contra o GCatholic (atualizado em 09/11/2026: 32 paróquias,
49 igrejas): bate. As entradas a mais do GCatholic não são unidades
(seminários Maria Mãe da Igreja, N. S. de Fátima, Santa Mônica e São Vicente
Pallotti; igrejas sem marca de paróquia em Palotina, Marechal Cândido
Rondon, Terra Roxa e Toledo; o Santuário N. S. da Salette de Palotina, que
o GCatholic não marca como paróquia).

## Páginas do site da diocese (lidas em 13/11/2026)

- https://www.diocesetoledo.org/paroquias (lista; filtro por decanato)
- https://www.diocesetoledo.org/horarios/missas (horários por dia, cidade e
  paróquia; serviu para conferir os domingos e para os e-mails que faltam na
  página da paróquia: São Luiz Gonzaga, N. S. das Graças de Novo Sarandi,
  São Francisco de Assis de Assis Chateaubriand)
- Uma página por paróquia, `https://www.diocesetoledo.org/paroquias/ler/<id>`
  (ids 234 a 295 e 441); a URL de cada uma está no campo `fontes`.

O site recusa pedido sem cabeçalho `Accept` (erro 406); com os cabeçalhos
normais de navegador abre sem desafio.

## Casos anotados

- Paróquia São Vicente Pallotti (Palotina): a diocese grafa "Palotti".
  Domingo 19h30 só no 2º e 4º domingos.
- Paróquia Santa Rosa de Lima (Nova Santa Rosa): o domingo traz só "19h30 na
  Capela Santo Américo"; foi para o `nao_cabe` (capela sem endereço).
- Paróquia Cristo Rei (Entre Rios do Oeste): sábado diz só "1º e 3º Sábado",
  sem hora; foi para o `nao_cabe`.
- Paróquia São Cristóvão (Toledo): sexta 18h30 "Missa da Saúde" e 1ª sexta
  15h "Missa do Sagrado Coração de Jesus".
- Paróquia N. S. Aparecida (Toledo, Jardim Pancera): criada em 06/02/2022; o
  e-mail publicado é o da antiga capela.

## Instagram

Nenhuma página da diocese cita perfil de paróquia; o campo ficou vazio em
todas.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/tole2.htm e
  https://gcatholic.org/churches/local/tole2 (09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Capelas e comunidades (a diocese não as publica) e horários de confissão.
- As páginas não têm data: reconferir pelos perfis das paróquias quando
  houver busca.

Nenhuma paróquia ficou sem horário: `SEM-HORARIO-toledo.txt` está vazio.
