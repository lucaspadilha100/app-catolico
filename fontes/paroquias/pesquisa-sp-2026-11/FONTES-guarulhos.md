# Diocese de Guarulhos (SP): fontes da pesquisa de 13/11/2026

Sé em Guarulhos; região metropolitana de São Paulo, sufragânea da Arquidiocese
de São Paulo. Bispo: Dom Edmilson Amador Caetano, O. Cist. Cúria: Avenida
Gilberto Dini, 519, Jardim Bom Clima, Guarulhos, (11) 2408-0403,
curia@diocesedeguarulhos.org.br. Site: diocesedeguarulhos.org.br.

## Resumo

- **53 unidades pastorais** em `saida/guarulhos.json`: 1 catedral, 46
  paróquias, 3 santuários e 3 áreas pastorais, em 6 foranias (Imaculada,
  Rosário, Aparecida, Bonsucesso, Fátima e Carmo). 171 igrejas no total
  (matrizes, capelas e comunidades), 664 horários.
- **53 com horário** (confiança alta): todas têm página própria no site da
  diocese, com endereço, contatos e horários de missa, e todas as páginas
  foram atualizadas em 2026 (a data de cada uma está em `fontes`).
- O território da diocese é SÓ o município de Guarulhos (GCatholic: 341 km²).
  A tarefa citava Arujá, mas Arujá não aparece em nenhuma fonte da diocese;
  pertence à Diocese de Mogi das Cruzes, de onde Guarulhos foi desmembrada
  em 1981. Uma capela da Paróquia Nossa Senhora de Guadalupe fica no
  Marmelo, município de Mairiporã (mesmo estado, por isso sem campo `uf`).
- Todo `id_banco` é null: o banco ainda não tem nada da diocese de Guarulhos.

## Lista das unidades

A lista vem da página de paróquias do site da diocese (55 páginas, uma por
unidade), batida com o Anuário Diocesano 2026 (PDF oficial, janeiro de 2026),
que traz as mesmas 55 unidades por forania. Dessas 55, duas são capelanias e
ficaram FORA do JSON por não serem unidade pastoral das categorias do
formato:

- **Capelania Nossa Senhora Stella Maris** (hospital, Itapegica): Rua Stella
  Maris, 351, fone (11) 2423-8500 ramal 351. Missas: terça, quarta e sexta
  7h; quinta 8h; sábado 16h30; domingo 11h.
- **Capelania Militar Nossa Senhora Aparecida** (Base Aérea de São Paulo,
  Ordinariado Militar do Brasil): Av. Monteiro Lobato, 5339, portão G2,
  Vila Militar de Cumbica, fone (11) 2482-2193, @capelaniabasp. Missas:
  domingo 10h; quinta 19h30; adoração quinta 15h.

A Paróquia Maronita São Charbel (Eparquia Nossa Senhora do Líbano, de rito
maronita) ENTROU como paróquia, com a jurisdição anotada na observação: a
diocese a lista junto das suas paróquias.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026): 46
paróquias no dado de 2022, o que bate com as 46 do JSON menos as duas mais
novas (São João Bosco, 2023, e São Francisco Xavier, 03/12/2025) e mais a
catedral contada como paróquia. Os dois santuários com paróquia (São Judas
Tadeu e Nossa Senhora do Bonsucesso) entraram como `santuario`, com a nota
de paróquia santuário na observação; o Santuário Bom Jesus da Cabeça é
santuário diocesano atendido pela Paróquia Santa Rosa de Lima.

Divergência anotada: a página da Área Pastoral São Geraldo Majella
(atualizada em 23/10/2026) traz o título "Paróquia São Geraldo Majella",
mas mantém "Administrador" e a criação de 20/05/2025, e o anuário 2026 e a
lista de paróquias do site a dão como área pastoral; o JSON segue área
pastoral, com a divergência na observação.

## Fontes

### Site da diocese (todas lidas em 13/11/2026)

Fonte principal de TUDO (lista, contatos, endereços e horários): as 55
páginas de unidade em https://diocesedeguarulhos.org.br/paroquias/ (duas
fora desse caminho: /area-pastoral-sao-judas-tadeu/ e
/paroquia-sao-francisco-xavier/). A data em `fontes` de cada unidade é a
data de última modificação da página, lida pela API do WordPress
(/wp-json/wp/v2/pages): todas entre março e novembro de 2026.

### Anuário Diocesano 2026 (PDF oficial, janeiro de 2026)

https://diocesedeguarulhos.org.br/wp-content/uploads/2026/01/ANUARIO-DIOCESANO-2026-Vs3.pdf

Usado para montar e conferir a lista por forania e como segunda fonte de
contatos e horários. Onde a página do site e o anuário divergem, valeu a
página do site, que é mais nova (ex.: horários de Santa Teresinha de
Cumbica, telefone de São João Bosco e da Aparecida da Bela Vista). Um
endereço veio só do anuário: a capela Santa Francisca Xavier Cabrini e São
José (Rua Angical, 170, Jardim Ansalca), que a página de Santa Luzia do
Alvorada lista sem endereço. No PDF, a forania da página 108 sai com o
título repetido "Forania Bonsucesso", mas é a Forania Carmo (o sumário e o
vigário forâneo confirmam).

### Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/guar5 (anuário, 09/11/2026)
- https://gcatholic.org/dioceses/diocese/guar5.htm (46 paróquias, 341 km²)
- https://catholic-hierarchy.org/diocese/dgurl.html
- https://pt.wikipedia.org/wiki/Diocese_de_Guarulhos (45 paróquias e 1 área
  pastoral, desatualizada)

## Decisões e observações

- O e-mail da Paróquia Nossa Senhora de Loreto divulgado pela diocese é o
  pessoal do padre; ficou de fora (regra dos contatos institucionais).
- Capela sem horário na fonte ficou com `horarios: []` (Capela São Benedito
  e a comunidade Imaculado Coração de Maria, do Santuário de Bonsucesso).
- "Missa ou celebração" (capelas que alternam missa e celebração da
  palavra) entrou como missa com a observação "Missa ou celebração".
- Setores sem endereço (dois de Santo Antônio dos Pimentas) ficaram no
  `nao_cabe` da matriz; com endereço viraram `comunidade` (São Geraldo
  Majella, Normandia, São João Batista, Área Pastoral São Judas Tadeu).
- Missas de dia fixo do mês (dia 13, dia 28...) e as de "última sexta"
  foram para `nao_cabe`.
- Instagram: o site da diocese publica o usuário de cada paróquia na
  própria página (seção de contatos); nenhum perfil foi aberto por dentro.

## O que falta para o próximo estado desta pesquisa

- Endereço da comunidade Santo Expedito e N. Sra. das Graças é o do
  condomínio (Av. Salgado Filho, 3938); conferir o acesso.
- As duas capelanias (Stella Maris e BASP) ficaram fora do JSON; se o app
  ganhar categoria para capelania, os dados estão no resumo acima.
- Horários de confissão existem só onde a página os publica com dia e hora
  (catedral, São Pedro Apóstolo, Vila Galvão, Santo Alberto, Taboão e as
  capelas de São Geraldo Majella); nas demais, o "atendimento do padre"
  não diz que é confissão e ficou de fora.
