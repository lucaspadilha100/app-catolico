# Arquidiocese de Maringá (PR): fontes da pesquisa de 13/11/2026

Sé metropolitana em Maringá; norte e noroeste do Paraná. Sufragâneas:
Campo Mourão, Paranavaí e Umuarama. Arcebispo: Dom Frei Severino Clasen,
OFM. Cúria: Av. Tiradentes, 740, Zona 1, Maringá, (44) 3227-1706.
Padroeira: Nossa Senhora da Glória (15 de agosto).

## Resumo

- **58 unidades pastorais** em `saida/maringa.json`: 1 catedral (Catedral
  Metropolitana Basílica Menor Nossa Senhora da Glória) e 57 paróquias, em 8
  regiões pastorais: Catedral (7), Jandaia do Sul (10), Mãe de Deus (5),
  Nossa Senhora Aparecida (8), Paranacity (5), Santa Cruz (8), São José
  Operário (8) e Sarandi Nossa Senhora das Graças (7). Cidades: Maringá (25),
  Sarandi (4), Marialva (3), Mandaguari, Paiçandu e Mandaguaçu (2 cada) e uma
  em cada uma das outras 20 cidades.
- **58 com horário de missa** (todas com confiança alta): o site da
  arquidiocese tem uma página por paróquia com os horários da matriz e de
  cada capela, dia a dia, além da página geral "Horários de Missa", que traz
  os mesmos dados. Lidas em 13/11/2026.
- **158 capelas e comunidades** entraram ligadas à paróquia que a página
  indica (157 com horário; 602 horários no total, contando as matrizes). 88
  delas têm o bairro, distrito ou estrada no próprio título da seção
  ("Capela Nossa Senhora Aparecida - Nova Bilac") ou um endereço; as outras
  70 aparecem só com o nome, sem lugar, mas com horário e paróquia, e
  entraram assim. A Capela Santo André (Paróquia São Paulo Apóstolo,
  Sarandi) tem endereço e nenhum horário.
- Três capelas sem horário e sem lugar ficaram no `nao_cabe` da matriz:
  Santa Rita de Cássia (Atalaia), Bom Jesus (Kaloré), Sagrado Coração de
  Jesus (Paranacity).
- A Paróquia e Santuário Santa Rita de Cássia (Maringá) entrou como
  `paroquia` com a matriz de tipo `santuario`. O Santuário de Schoenstatt
  (Paróquia São Bonifácio) entrou como igreja de tipo `santuario` dessa
  paróquia.
- Confissão: só a Catedral publica (segunda e sexta, 7h30 às 11h30 e 14h às
  19h30; quarta e quinta, 7h30 às 11h30 e 14h às 18h, por ordem de chegada).
  Adoração: onde a linha de missa a cita, por exemplo "(19h - Hora Santa de
  Adoração com o Apostolado da Oração)".
- Missas mensais por dia do mês ("Todo dia 22..."), missas nas CEBs e nas
  residências, Celebrações da Palavra e a missa da Quaresma ficaram no
  `nao_cabe` da igreja.
- Contatos: telefone fixo, WhatsApp e e-mail da secretaria vêm das páginas.
  Quando o único número é um fixo marcado como WhatsApp, ele entrou nos dois
  campos. Nenhuma página de paróquia traz Instagram (só o da arquidiocese,
  arquidiocesedemaringa); sites próprios: Catedral
  (catedraldemaringa.com.br) e Santa Maria Goretti (smariagoretti.com.br).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site, organizada por região pastoral,
batida com as 58 páginas individuais (ids 1 a 59, sem o 57).

Conferência contra o GCatholic (atualizado em 09/11/2026: "58 parishes"):
bate nome a nome. O GCatholic lista ainda o Seminário Arquidiocesano Nossa
Senhora da Glória, a capela São Bonifácio (Maringá), a capela Sagrado
Coração de Jesus (Sarandi) e o Santuário de Schoenstatt, que não são
paróquias. A capela histórica São Bonifácio e o Santuário de Schoenstatt
estão na página da Paróquia São Bonifácio; a capela Sagrado Coração de Jesus
de Sarandi está na da Paróquia Nossa Senhora da Esperança.

Observações de nome e lugar:
- Paróquia Bom Jesus fica no distrito de Aquidaban, município de Marialva.
- A Paróquia São Pedro Apóstolo de Inajá tem a Capela Santo Antônio em
  Paranapoema (outro município), com endereço; entrou com cidade Paranapoema.
- Nome da Paróquia São Silvestre I, Papa, como no site (GCatholic: São
  Silvestre).

## Páginas do site da arquidiocese (lidas em 13/11/2026)

O endereço do GCatholic (arquimaringa.org.br) não responde mais; o site
atual é https://www.arquidiocesedemaringa.org.br/.

- https://www.arquidiocesedemaringa.org.br/paroquias (lista por região)
- https://www.arquidiocesedemaringa.org.br/horariosdemissa (todos os
  horários, por dia e cidade)
- Uma página por paróquia, no formato
  https://www.arquidiocesedemaringa.org.br/paroquias/<id>/<nome>, com
  cidade, região pastoral, atendimento da secretaria, data de fundação,
  endereço, bairro, CEP, telefone, e-mail e os horários da matriz e das
  capelas. As URLs estão no campo `fontes` de cada item do JSON.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/mari1.htm
- https://gcatholic.org/churches/local/mari1

## O que falta para o próximo estado desta pesquisa

- Instagram das paróquias: o site não cita nenhum. Buscar numa sessão com
  busca na web.
- Confissões fora da Catedral.
- Lugar das 70 capelas que a página só nomeia.
- Endereço das matrizes que vieram sem número (ex.: São Pedro Apóstolo de
  Doutor Camargo, "Rua Castelo Branco").
