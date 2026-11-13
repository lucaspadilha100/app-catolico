# Diocese de Paranavaí (PR): fontes da pesquisa de 13/11/2026

Sé em Paranavaí; noroeste do Paraná, na divisa com São Paulo e Mato Grosso
do Sul. Sufragânea de Maringá. Padroeira: Nossa Senhora Mãe da Igreja.
Cúria: Rua Francisco Vieira Borges, 373, Jardim América, Paranavaí, (44)
3423-1045, curiaparanavai1@hotmail.com.

## Resumo

- **36 unidades pastorais** em `saida/paranavai.json`: 1 catedral (Maria Mãe
  da Igreja), 33 paróquias, 1 quase-paróquia (São Francisco de Assis,
  Paranavaí) e 1 área pastoral (Capela São Benedito, Nova Aliança do Ivaí;
  ver abaixo), em 4 decanatos: Paranavaí (10), Loanda (10), Paraíso do Norte
  (8) e Terra Rica (8). Cidades: Paranavaí (10), Loanda, Santa Isabel do
  Ivaí e Terra Rica (2 cada) e uma em cada uma das outras 20 cidades.
- **36 com horário de missa** (todas com confiança alta): cada paróquia tem
  página no site da diocese com os horários por dia, em cartões (hora,
  data e observação), e a página geral "Horários de Missa" repete os mesmos
  dados. Lidas em 13/11/2026.
- Duas paróquias com matriz santuário entraram como `paroquia` com a
  primeira igreja de tipo `santuario`: Santuário Nossa Senhora do Carmo e
  Paróquia São Sebastião (Paranavaí, Centro) e Santuário Santo Antônio de
  Pádua (Alto Paraná). A Paróquia Nossa Senhora do Carmo (Jardim São Jorge,
  Paranavaí) é outra paróquia.
- Paróquias em distrito: Nossa Senhora das Graças (Graciosa, Paranavaí),
  Nossa Senhora de Fátima (Sumaré, Paranavaí), Nossa Senhora de Fátima (São
  José do Ivaí, Santa Isabel do Ivaí) e São Pio X (Adhemar de Barros, Terra
  Rica).
- Comunidades: entraram as que a página da paróquia lista com o lugar entre
  parênteses (Catedral: Sagrado Coração de Jesus, Jardim Monte Cristo, e
  São Pedro, Zona Leste; N. S. do Carmo: São Pedro, Vila Rural Águia
  Dourada; N. S. de Fátima de Amaporã: N. S. Aparecida, Assentamento Rozeli
  Nunes; São João Batista de São João do Caiuá: N. S. Aparecida,
  Assentamento Taperivá) e as que os cartões de horário do Santuário do
  Carmo citam (Comunidade São Vicente, Jardim São Vicente, e Comunidade
  Nossa Senhora das Graças, sem bairro). As listadas sem lugar ficaram no
  `nao_cabe` da matriz: Sagrado Coração de Jesus (N. S. de Fátima,
  Paranavaí), Comunidade das Águas (Santa Rita, Paranavaí), Asilo Lar
  Vincentino (São José Operário, Paranavaí), Santa Honesta (São João do
  Caiuá), São Francisco (Guairaçá), Beata Elena Guerra (Santo Antônio,
  Terra Rica) e São João Batista "(SP/PR)" (Itaúna do Sul).
- Missas na última semana do mês, no dia 12 do mês e o Terço dos Homens de
  Porto Rico (que está na grade de missas) ficaram no `nao_cabe`.
- Nenhuma página publica confissão ou adoração.
- Contatos: telefone, WhatsApp, Instagram, Facebook e e-mail vêm das
  páginas. 34 das 36 têm Instagram; sem Instagram: N. S. de Fátima (São José
  do Ivaí) e São João Batista (Mirador). O Facebook foi para a observação.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site, por decanato, com 36 entradas,
batida com as 36 páginas (paroquiaid 1 a 36).

Conferência contra o GCatholic (atualizado em 09/11/2026: "34 parishes, 1
mission"): bate nome a nome com as 34 paróquias (a Catedral conta como
paróquia). A Quase-Paróquia São Francisco de Assis e a Capela São Benedito
de Nova Aliança do Ivaí não aparecem no GCatholic.

**Capela São Benedito (Nova Aliança do Ivaí)**: a diocese a lista entre as
paróquias do Decanato de Paraíso do Norte, com padre, secretaria (só aos
sábados), Instagram (saobenedito.capela) e seis missas na semana, mas o
nome é de capela e a página não diz se é paróquia, quase-paróquia ou
missão. Entrou como `area_pastoral` para não ficar fora; conferir a
categoria (pode ser a "1 mission" do GCatholic).

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedeparanavai.org.br/paroquias/ (lista por decanato)
- https://diocesedeparanavai.org.br/horarios-de-missa/ (todos os horários)
- Uma página por paróquia:
  https://diocesedeparanavai.org.br/paroquia?paroquiaid=<1 a 36>, com
  decanato, endereço, cidade, padroeiro, contatos, atendimento, horários de
  missa e comunidades. As URLs estão no campo `fontes`.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/para6.htm
- https://gcatholic.org/churches/local/para6

## O que falta para o próximo estado desta pesquisa

- Confirmar a categoria da Capela São Benedito de Nova Aliança do Ivaí.
- Lugar das comunidades listadas sem bairro.
- Confissões.
