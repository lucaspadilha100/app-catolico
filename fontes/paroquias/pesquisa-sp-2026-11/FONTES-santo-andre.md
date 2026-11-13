# Diocese de Santo André (SP): fontes da pesquisa de 13/11/2026

Sé em Santo André (Catedral Nossa Senhora do Carmo); o território é o Grande
ABC: Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema, Mauá,
Ribeirão Pires e Rio Grande da Serra. Bispo: Dom Pedro Carlos Cipollini.
Cúria: Praça do Carmo, 36, Centro, Santo André, (11) 4469-2077,
contato@diocesesa.org.br.

## Resumo

- **108 unidades pastorais** em `saida/santo-andre.json`: 1 catedral, 1
  basílica menor (Nossa Senhora da Boa Viagem, a 1ª paróquia, de 1812), 3
  santuários paroquiais (Senhor do Bonfim, Nossa Senhora Aparecida em SBC e o
  Santuário Diocesano da Imaculada Conceição em Mauá), 101 paróquias (uma
  pessoal, a da Colônia Alemã) e 2 oratórios diocesanos, em 10 foranias.
- **368 igrejas**: as 108 matrizes mais 260 capelas e comunidades, cada uma
  com página própria no site da diocese, com nome, endereço, bairro e
  horário de missa. 841 linhas de horário no total.
- **107 unidades com horário** (confiança alta), tudo do site oficial da
  diocese, lido em 13/11/2026. Só missas: o site não publica horários de
  confissão nem de adoração.
- **1 sem horário** (confiança baixa): a Paróquia Pessoal São Miguel, da
  Colônia Alemã, cuja página tem a seção de horários vazia. A Paróquia São
  Maximiliano Maria Kolbe (SBC) também não publica o horário da matriz, mas
  tem o das comunidades.
- Todo `id_banco` é null: o banco ainda não tem nada da Diocese de Santo André.

## Lista das unidades

O site oficial (diocesesa.org.br, WordPress) expõe os cadastros pela API:

- `https://diocesesa.org.br/wp-json/wp/v2/paroquias` traz as 108 unidades
  (menu "Igrejas > Santuários, Paróquias e Oratórios").
- `https://diocesesa.org.br/wp-json/wp/v2/comunidades` traz as 260 capelas e
  comunidades, cada uma ligada à sua paróquia.

Cada página de paróquia (`https://diocesesa.org.br/paroquias/<slug>/`) traz a
forania, o número de criação ("Nª paróquia diocesana", que foi para a
observação), os horários de missa da matriz, telefones, e-mail, endereço e
redes sociais. Cada página de comunidade
(`https://diocesesa.org.br/comunidades/<slug>/`) traz o horário de missa, o
endereço e a paróquia a que pertence. As 368 páginas foram baixadas e lidas
em 13/11/2026.

Conferência contra o anuário (GCatholic, página "Churches in the Diocese of
Santo André", 150 igrejas) e a imprensa local (Diário do Grande ABC: "106
paróquias"): as 108 unidades do site menos os 2 oratórios dão exatamente as
106 paróquias; as 10 foranias do site batem com as do anuário.

## Decisões de registro

- Os 2 **oratórios diocesanos** (Nossa Senhora Aparecida, em Santo André, e
  Imaculada Conceição e São Maximiliano Maria Kolbe, em SBC) têm missa
  regular e página própria entre as unidades, mas não são paróquias e o
  formato não tem essa categoria: entraram como `quase_paroquia`, com o fato
  anotado na observação.
- **Telefones**: o site lista até dois números por paróquia com o aviso
  "alguns telefones fixos podem ser whatsapp". O primeiro foi para
  `telefone`; o segundo, quando é celular, foi para `whatsapp`.
- A Paróquia Senhor Bom Jesus de **Paranapiacaba** (distrito de Santo André)
  publica os mesmos contatos da Paróquia São Sebastião de Rio Grande da
  Serra; ficou como está no site.
- A página da Capela Casa de Retiro Irmã Celenir não renderizou a paróquia
  mãe ("Não foi possível exibir a paróquia"); o endereço da página no site
  diz "par-sao-joao-batista-maua" e ela entrou na Paróquia São João Batista
  de Mauá.
- A Comunidade Nossa Senhora da Esperança (Paróquia Mãe de Deus e dos
  Órfãos) não tem igreja: a página da paróquia diz "Reunem-se nas casas dos
  fiéis", o que foi para `nao_cabe`.
- Nomes de capela e comunidade com abreviação do site foram desdobrados
  ("N. Sra." para "Nossa Senhora", "S. Teresinha" para "Santa Teresinha");
  complementos entre parênteses viraram sufixo com hífen ("Capela Santa Cruz
  - Parque do Pedroso").
- Horários irregulares entraram com `semanas` (1º sábado do mês etc.); a
  "missa da saúde" das terças na Paróquia São Jorge ficou na observação do
  horário.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/zand2 (anuário, 150 igrejas)
- https://en.wikipedia.org/wiki/Diocese_of_Santo_Andre
- https://www.catholic-hierarchy.org/diocese/dsandb.html
- Diário do Grande ABC (clero e contagem de paróquias e capelas)

## O que falta para o próximo estado desta pesquisa

- Horários de confissão e adoração: o site da diocese não os publica; o
  caminho são as redes das paróquias (quase todas têm Instagram, já
  anotado nos contatos).
- O horário da matriz de São Maximiliano Maria Kolbe e qualquer horário da
  Paróquia Pessoal São Miguel (Colônia Alemã).
- O site publica também o expediente de secretaria e o atendimento do padre
  de cada paróquia, que não cabem no formato e ficaram de fora.
