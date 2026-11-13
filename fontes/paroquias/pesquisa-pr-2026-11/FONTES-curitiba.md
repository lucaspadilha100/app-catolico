# Arquidiocese de Curitiba (PR): fontes da pesquisa de 13/11/2026

Sé metropolitana em Curitiba; sufragâneas: Guarapuava, Paranaguá, Ponta
Grossa, São José dos Pinhais e União da Vitória. Arcebispo: Dom José
Antônio Peruzzo; auxiliares: Dom Reginei José Modolo e Dom Adenis Roberto
de Oliveira. Cúria: Rua Jaime Reis, 369, Alto São Francisco, Curitiba,
CEP 80510-010, (41) 2105-6300. Padroeira: Nossa Senhora da Luz dos Pinhais
(8 de setembro).

Nesta sessão não houve busca na web: tudo veio do site da Arquidiocese
(lido com curl), do GCatholic e do Catholic-Hierarchy.

## Resumo

- **143 unidades** em `saida/curitiba.json`: 1 catedral, 16 santuários que
  são paróquia (entraram com categoria `santuario` e a primeira igreja de
  tipo `santuario`) e 126 paróquias (aí contadas a Igreja da Ordem Terceira
  de São Francisco das Chagas e a Igreja Nossa Senhora do Rosário, que o
  site lista entre as paróquias e o GCatholic marca como paróquia, e a
  Paróquia Nossa Senhora da Ternura, itinerante).
- Organização: 3 Regiões Episcopais com 5 setores cada (está na observação
  de cada item). Centro-Oeste: Campo Largo, Centro, Mercês, Orleans - Campo
  Comprido, Santa Felicidade. Norte: Almirante Tamandaré, Cabral, Cajuru,
  Colombo, Pinhais. Sul: Boqueirão, Capão Raso, Pinheirinho, Portão,
  Rebouças.
- Cidades: Curitiba (114), Campo Largo (8), Colombo (6), Pinhais (5),
  Almirante Tamandaré (3), Campo Magro (2) e uma em cada: Itaperuçu, Porto
  Amazonas, Palmeira, Rio Branco do Sul, Balsa Nova.
- **103 com horário** (102 com confiança alta, 1 média) e **40 sem horário**
  (confiança baixa, listadas em `SEM-HORARIO-curitiba.txt` com o perfil de
  Instagram que a própria Arquidiocese cita, quando cita).
- 769 linhas de horário: missas, adoração em 12 unidades e confissão em 4
  (N. S. da Saúde de Pinhais, São João Batista do Tingui, Santuário da
  Salette, Santuário São Judas Tadeu).
- 26 capelas com nome e lugar: 23 comunidades da Paróquia N. S. da Conceição
  de Almirante Tamandaré (com as semanas do mês), a Capela São Judas Tadeu
  da Cascatinha (Santa Felicidade), a Igreja Antiga do Senhor Bom Jesus do
  Portão e a Capela São Miguel Arcanjo (Jardim Amélia, Pinhais, da Paróquia
  São José Operário). As demais capelas e comunidades que as páginas citam
  só pelo nome, sem bairro, ficaram no `nao_cabe` da matriz com os
  horários delas (Anjo da Guarda, N. S. Auxiliadora, Boa Esperança, N. S. da
  Paz, N. S. da Saúde de Pinhais, Rosário de Belém, Profeta Elias, Sagrado
  Coração de Jesus do Tatuquara, São Miguel, Senhor Bom Jesus de Colombo,
  Medianeira, Santa Cruz e Santa Efigênia e outras).
- Todo `id_banco` é null.

## A lista das unidades

Fonte principal: a página "Paróquias" do site da Arquidiocese
(https://arquidiocesedecuritiba.org.br/paroquias/, 8 páginas de 20,
com filtro por região, setor e cidade). Foram lidas a lista inteira
(`/paroquias/page/N/`) e a lista de cada setor (`?setor=1` a `?setor=15`),
para saber o setor de cada uma, e as 145 páginas individuais
(`/paroquia/<nome>`).

Das 145 entradas do site:

- 142 entraram;
- 3 ficaram fora por serem capelanias, não paróquias: Capela Nossa Senhora
  Aparecida - PMPR (capelania da Polícia Militar, Rebouças), Capelania da 5ª
  Região Militar e Capelania da Aeronáutica (N. S. de Loreto, Cindacta II,
  Bacacheri). As duas militares são do Ordinariado Militar.

E entrou 1 que o site não lista: a **Paróquia São José Operário do Alto
Boqueirão** (setor Boqueirão), que o GCatholic marca como paróquia
(https://gcatholic.org/churches/brazil/105073) e que a própria Arquidiocese
cita em notícia de 09/07/2026 (quermesse, "Rua Francisco Derosso, 5500,
Curitiba"). A página "São José Operário" do site é a de Pinhais (Maria
Antonieta), outra paróquia.

Conferência:

- GCatholic, igrejas da arquidiocese (https://gcatholic.org/churches/local/curi0,
  atualizado em 09/11/2026): 140 igrejas marcadas como paróquia, das quais 2
  são ucranianas (N. S. Auxiliadora e Santa Ana, rito ucraniano, fora); com
  a Catedral, 139 latinas. Setor a setor, batem com as nossas 143 menos 4
  que o GCatholic ainda não tem: Paróquia N. S. da Ternura (itinerante,
  setor Centro), N. S. do Rosário de Fátima da CIC e Sagrado Coração de
  Jesus do Tatuquara (setor Capão Raso) e N. S. Aparecida do Sítio Cercado
  (setor Pinheirinho). A Igreja da Ordem e a Igreja do Rosário estão no
  GCatholic como paróquia. O que o GCatholic lista e não é unidade: 3 seminários (Bom
  Pastor, N. S. de Belém, Rainha dos Apóstolos), 2 capelanias (N. S. de
  Loreto, N. S. das Vitórias do Pinheirinho), a capelania da PM, o Santuário
  Tabor Magnificat de Schoenstatt (sem paróquia) e 5 igrejas do Pilarzinho
  sem marca de paróquia (Beato Giácomo Cusmano, N. S. da Misericórdia, N. S.
  da Perseverança, N. S. do Pilar, São João Neumann), que não foram ligadas a
  nenhuma paróquia porque a fonte não diz de qual são.
- Estatística do GCatholic/Catholic-Hierarchy (31/12/2022): 143 paróquias,
  523 missões. Bate com as 143 unidades.

Nomes: tiramos a cidade ou o bairro que o site acrescenta ao nome ("Paróquia
Imaculada Conceição - Atuba - Colombo" virou "Paróquia Imaculada Conceição",
localidade Atuba), corrigimos abreviações e acentos ("Par." e "N Sra",
"Rosario de Fatima", "Margarida Martir", "Santo Antonio") e "São Francisco
da Chagas" virou "das Chagas". Padroeiro: o título da paróquia; o campo de
padroeiro do site vem vazio em quase todas, com a mesma data (28 de agosto)
em todas.

## O que o site tem e como foi lido

Cada página de paróquia traz telefone, endereço, e-mail (protegido pelo
Cloudflare, decodificado do `data-cfemail`), links (WhatsApp, Instagram,
Facebook, YouTube, site), clero, a secretaria ("Atendimentos e Setores",
com telefone e horário de expediente) e a tabela "Horários de Missas", que
vem estruturada no atributo `data-item` de cada linha (dias da semana,
horas, recorrência e descrição). O cadastro (plugin "wp-parresia-register")
tem API, mas ela pede login; a leitura foi pelo HTML.

Os horários foram passados à mão para `horarios.txt` (pasta temporária),
linha a linha, porque o cadastro é feito por cada paróquia e mistura coisas:

- linhas do tipo "Missa" que são terço, grupo de oração, célula ou Cerco de
  Jericó ficaram fora;
- "Adoração" virou `adoracao`; "Celebração da Palavra" e novenas sem missa
  foram para o `nao_cabe`;
- descrição "Capela X" ou "Comunidade X" levou o horário para a capela;
- "1ª sexta-feira" virou `semanas: [1]`; mensal sem a semana, ou sem hora,
  foi para o `nao_cabe`;
- linha sem dia da semana (o cadastro às vezes perde o dia) foi para o
  `nao_cabe` com o texto, sem adivinhar o dia (Senhor Bom Jesus dos Perdões,
  N. S. das Dores, Menino Jesus de Praga, São João Batista Precursor).

Problemas do cadastro que pesaram:

- **Telefone**: o campo principal da página aplica máscara de celular ao
  fixo e sai como "(41) 9 3249-4640" ou, pior, "(41) 9324-6354" (para o fixo
  3246-3542). O JSON usa primeiro o telefone da secretaria; sem ele, o do
  cabeçalho quando é fixo normal; quando o cabeçalho tem o "9 " solto antes
  de um fixo (34 casos), entrou o fixo, e a observação avisa. Celular
  antigo de 8 dígitos e "(00) 0000-0000" não entraram. WhatsApp só quando o
  link wa.me é celular válido (muitos repetem o fixo com o 9).
- **E-mail**: "comunicacao@mitradecuritiba.org.br" (da Arquidiocese) e
  "sememail@..." aparecem como e-mail de várias paróquias; não entraram.
- **Páginas copiadas**: a da Paróquia Santa Cândida repete os horários, as
  capelas e a secretaria da Boa Esperança (Pinhais); a da N. S. da
  Anunciação de Campo Largo (Ferraria) e a da N. S. da Anunciação do Capão
  Raso têm os mesmos horários e capelas. Nenhuma das três entrou com
  horário (estão no SEM-HORARIO com a explicação no `nao_cabe`).
- **Cidade**: o filtro do site trata "Uberaba" (bairro de Curitiba) como
  cidade; a página de São Sebastião de Bateias diz Curitiba (Bateias é de
  Campo Largo, Estrada do Cerne km 30); a de N. S. da Saúde diz Curitiba
  para o Jardim Cláudia, em Pinhais. O JSON corrige e diz na observação.
- **Endereços truncados**: São Pio X ("Hermes Fontes.073, 1"), Santa
  Quitéria ("Fábio de Souza.126, 1") e Santa Isabel ("8320, 621 090")
  entraram só com a rua.
- O telefone de secretaria da Paróquia N. S. do Rosário de Fátima do
  Osternack é o mesmo da página da Rosário de Fátima da CIC; ficou só na
  da CIC.

Sites próprios citados pela Arquidiocese:

- https://claretianos.com.br/paroquias/pinhais-parana/ (Paróquia N. S. da
  Luz de Pinhais, dos Missionários Claretianos): a página da Arquidiocese
  não tem horário, este site tem (confiança média, sem data).
- santateresinhadelisieux.com (Paróquia Santa Teresinha de Lisieux,
  Colombo): domínio à venda.

## Instagram

Só os perfis citados nas páginas da própria Arquidiocese (nenhum foi aberto
por dentro). 95 unidades têm perfil no JSON; as sem horário estão com o
perfil no SEM-HORARIO, para a rodada de busca.

## Circunscrições do Paraná (GCatholic, províncias eclesiásticas)

- Curitiba: Curitiba, Guarapuava, Paranaguá, Ponta Grossa, São José dos
  Pinhais, União da Vitória.
- Cascavel: Cascavel, Foz do Iguaçu, Palmas-Francisco Beltrão, Toledo.
- Londrina: Londrina, Apucarana, Cornélio Procópio, Jacarezinho.
- Maringá: Maringá, Campo Mourão, Paranavaí, Umuarama.
- Rito ucraniano (fora): Arquieparquia São João Batista em Curitiba e
  Eparquia Imaculada Conceição em Prudentópolis.

São 18 latinas, todas cobertas pelos pedidos desta rodada. Não há prelazia
no Paraná.

Páginas: https://gcatholic.org/dioceses/country/BR-province e
https://gcatholic.org/dioceses/diocese/curi0.htm.

## O que falta para o próximo estado desta pesquisa

- Horários das 40 unidades sem horário (lista em `SEM-HORARIO-curitiba.txt`),
  a começar pelas grandes do centro e dos bairros antigos: Santa Teresinha
  do Batel, Santíssimo Sacramento, São Benedito, São Cristóvão, Santa
  Quitéria, N. S. de Lourdes do Jardim Botânico, Universitária Jesus Mestre,
  Santuário da Divina Misericórdia, Santuário N. S. do Equilíbrio.
- Confirmar com as paróquias qual das duas N. S. da Anunciação tem os
  horários que aparecem nas duas páginas, e os horários reais de Santa
  Cândida.
- Endereço, telefone e horários da São José Operário do Alto Boqueirão.
- Bairro e número das matrizes com endereço truncado (São Pio X, Santa
  Quitéria, Santa Isabel) e bairro do Santuário do Perpétuo Socorro e da
  Paróquia N. S. da Ternura (Praça Portugal).
- Confissões: quase nenhuma página publica; vale a busca por paróquia.
