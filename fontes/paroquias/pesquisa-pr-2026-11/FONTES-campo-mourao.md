# Diocese de Campo Mourão (PR): fontes da pesquisa de 13/11/2026

Sé em Campo Mourão; centro-oeste do Paraná. Sufragânea de Maringá.
Padroeiro: São José. Cúria: Rua Harrison José Borges, 811, Centro, Campo
Mourão, (44) 3525-1824.

## Resumo

- **41 unidades pastorais** em `saida/campo-mourao.json`: 1 catedral (São
  José) e 40 paróquias, em 5 decanatos: Campo Mourão (10), Engenheiro
  Beltrão (10), Goioerê (10), Iretama (6) e Juranda (5). Cidades: Campo
  Mourão (10), Goioerê (3), Barbosa Ferraz, Engenheiro Beltrão, Iretama e
  Moreira Sales (2 cada) e uma em cada uma das outras 20 cidades.
- **41 com horário de missa** (todas com confiança alta): o site da diocese
  tem uma página por paróquia com os horários da matriz dia a dia, além da
  página geral "Horários de Missa". Lidas em 13/11/2026.
- Só a matriz de cada paróquia: as páginas não listam capelas nem
  comunidades.
- Três paróquias têm a matriz santuário e entraram como `paroquia` com a
  primeira igreja de tipo `santuario`: Santuário Santa Rita de Cássia
  (Barbosa Ferraz), Santuário Diocesano Santa Teresinha do Menino Jesus e da
  Sagrada Face (Campina da Lagoa) e Paróquia Santuário Nossa Senhora
  Aparecida (Campo Mourão, bairro Vila Urupês).
- Três paróquias ficam em distrito: São Gabriel Arcanjo e São Sebastião
  (Ivailândia, Engenheiro Beltrão), São Francisco de Assis (Águas de
  Jurema, Iretama) e São Pedro (Paraná d'Oeste, Moreira Sales).
- Santuário Santa Teresinha (Campina da Lagoa): a página põe a missa das 15h
  na sexta e avisa "Missa na sexta-feira somente na 1ª sexta de todo mês";
  entrou com semanas [1].
- Missas mensais por dia do mês (dia 22 em Santa Rita, dia 18 em Peabiru,
  dia 28 em Terra Boa), a missa "Comunidades" das quartas no Santuário
  Aparecida e a Celebração da Palavra das terças em São Francisco de Assis
  ficaram no `nao_cabe` da matriz.
- Nenhuma página publica confissão ou adoração.
- Contatos: telefone, WhatsApp e e-mail da secretaria vêm das páginas.
  Nenhuma traz Instagram. Facebook citado: Catedral (facebook.com/catedralsjcm)
  e Santo Antônio de Ubiratã (facebook.com/paroquiadeubirataoficial), na
  observação. Os nomes das atendentes que as páginas trazem não entraram.
- Cidade: as páginas não têm o campo cidade; veio do endereço e do CEP de
  cada uma, conferido com a página geral de horários (organizada por cidade)
  e com o GCatholic.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site, por decanato, com 43 entradas,
batida com as 43 páginas individuais (ids 63 a 107, sem o 64 e o 75).

Duas entradas da diocese ficaram FORA do JSON: a Paróquia Santíssima
Trindade (Rito Ucraniano), em Campo Mourão (Rua São Josafat, 1437, Centro,
(44) 3523-4695, contato@pstrindade.com), e a Paróquia São Nicolau (Rito
Ucraniano), em Roncador (Avenida Santo Antônio, 815). São paróquias
greco-católicas ucranianas: pertencem à Eparquia ucraniana (São João Batista
em Curitiba), não à Diocese de Campo Mourão, e o GCatholic as põe em "Other
Churches Within the Diocesan Territory". As duas páginas não têm nenhum
horário preenchido.

Conferência contra o GCatholic (atualizado em 09/11/2026: "41 parishes"):
bate nome a nome com as 41 latinas. O GCatholic põe a Paróquia Santuário
Nossa Senhora Aparecida em "Vila Urupês", que é o bairro dela em Campo
Mourão.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://www.diocesecampomourao.org.br/paroquias (lista por decanato)
- https://www.diocesecampomourao.org.br/horariosdemissa (todos os horários,
  por dia e cidade)
- Uma página por paróquia, no formato
  https://www.diocesecampomourao.org.br/paroquias/<id>/<nome>, com
  decanato, atendimento, fundação, endereço, CEP, telefone, WhatsApp,
  e-mail, festa do padroeiro e horários. As URLs estão no campo `fontes`.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/camp8.htm
- https://gcatholic.org/churches/local/camp8

## O que falta para o próximo estado desta pesquisa

- Instagram das paróquias: o site não cita nenhum.
- Capelas e comunidades: o site não as lista.
- Confissões.
- Decidir se as duas paróquias ucranianas entram pela circunscrição própria
  (Eparquia São João Batista em Curitiba, que não está em nenhum pedido).
