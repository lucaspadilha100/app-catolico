# Diocese de Campos (RJ): fontes da pesquisa de 13/11/2026

Sé em Campos dos Goytacazes; Norte e Noroeste Fluminense. Bispo: Dom Roberto
Francisco Ferrería Paz. Padroeiro diocesano: Santíssimo Salvador (6 de
agosto). Dois vicariatos (Norte e Noroeste) e nove foranias.

## Resumo

- **70 unidades pastorais** em `saida/campos.json`: 1 catedral (também
  basílica menor), 60 paróquias, 7 quase-paróquias, 1 reitoria (São
  Sebastião de Comendador Venâncio, entrou como `area_pastoral`) e 1
  santuário sem território (Perpétuo Socorro, dos redentoristas). Cidades:
  Campos dos Goytacazes (29), Itaperuna (10), Bom Jesus do Itabapoana (4),
  Santo Antônio de Pádua (4), Miracema, São João da Barra e São Fidélis (3
  cada), Porciúncula, Cambuci, Cardoso Moreira e São Francisco do
  Itabapoana (2 cada) e uma em cada: Natividade, Varre-Sai, Italva, Laje do
  Muriaé, Aperibé, São José de Ubá.
- **1 com horário**: o Santuário Nossa Senhora do Perpétuo Socorro, pelo
  site do próprio santuário (missas da semana e confissões), confiança
  alta. As outras 69 entraram com `"horarios": []` e confiança baixa: a
  diocese não publica horários (a página de paróquia do site é um modelo
  com texto Lorem Ipsum e "missas às 02:30") e os sites de paróquia
  citados pela diocese não abriram (psbj.com.br, psja.org.br,
  psagradocoracao.com.br).
- Contatos: a lista oficial dá endereço, telefone e e-mail de quase todas.
  Nenhum Instagram de paróquia aparece nas fontes oficiais; só o do
  santuário (rodapé do site).
- Todo `id_banco` é null.

## Lista das unidades

Fonte da lista: a página "Paróquias" do site da diocese, numerada de 2 a 75
(faltam os números 1, 20, 27, 35 e 40, que a própria página pula), com
endereço, telefone, e-mail e clero de cada unidade, batida com a página
"Foranias", que dá a forania de cada uma. A forania e o vicariato vão na
observação de cada item. A nova paróquia de Barcelos (São João da Barra)
foi criada em 10/11/2026, segundo notícia da diocese de 09/11/2026; entrou
como paróquia.

Conferência contra o GCatholic (atualizado em 09/11/2026, 77 igrejas na
diocese): bate com todas as paróquias que ele marca. Diferenças:

- O GCatholic não tem as quase-paróquias recentes (Tocos, São Joaquim,
  Parque Aurora, N. S. da Glória e São José em Pádua, Rosal).
- O GCatholic marca como paróquia Santo Antônio de Bom Jesus do
  Itabapoana, que é a Paróquia Santo Antônio e Santa Paulina de Carabuçu.
- O GCatholic situa N. S. das Graças (Baixa Grande) em Mussurepe e Santa
  Maria em "Santa Maria dos Campos"; seguimos o endereço da diocese.
- A matriz de São Benedito de Itaperuna aparece no GCatholic e em notícias
  da diocese como Santuário da Divina Misericórdia.

Divergências entre a lista e a página das foranias, anotadas na observação
de cada item:

- Santo Antônio de Raposo: "Paróquia" na lista, "Reitoria" nas foranias
  (o e-mail também diz reitoria). Entrou como paróquia.
- Sant'Ana e São Joaquim de Retiro do Muriaé: "Quase-Paróquia" na lista,
  "Paróquia" nas foranias. Entrou como quase-paróquia. A cidade
  (Itaperuna) foi suposta pelo distrito: a lista não dá endereço.
- São Joaquim e Santa Teresinha (Cardoso Moreira): quase-paróquia na lista,
  "Paróquia de Sant'Ana, São Joaquim e Santa Teresinha" nas foranias.
- Santa Teresinha de Miracema: paróquia na lista, quase-paróquia nas
  foranias. Santo Amaro de Grussaí: paróquia na lista, quase-paróquia nas
  foranias.
- São João Batista de São João do Paraíso (Cambuci) não está em nenhuma
  forania.

Dados publicados com defeito: o e-mail de N. S. das Graças e São Pio
(Pádua) tem cedilha e não foi usado; a diocese escreve "Pieltrecina".

## Páginas lidas (13/11/2026)

- https://diocesedecampos.org.br/paroquias/ (a lista oficial)
- https://diocesedecampos.org.br/foranias/ (as nove foranias)
- https://diocesedecampos.org.br/organizacao-das-paroquias/ e
  https://diocesedecampos.org.br/vicariatos-2/ (cidades de cada vicariato)
- https://diocesedecampos.org.br/alegria-barcelos-sera-paroquia-em-nossa-diocese/
  (Barcelos paróquia)
- https://diocesedecampos.org.br/wp-json/wp/v2/paroquia (só 5 páginas de
  paróquia, de modelo, com horários fictícios: não usadas)
- https://santuarioperpetuosocorro.org.br/missas-e-celebracoes/,
  /confissoes/ e /contato/ (horários e contatos do santuário)

## Instagram

Só `santuarions` (Santuário do Perpétuo Socorro), do rodapé do site do
santuário. Nenhum perfil foi aberto.

## Conferência da lista (não usada para horário)

- https://gcatholic.org/churches/local/camp9 e as páginas de cada igreja
  (anuário, 09/11/2026)

## Pendências: capelas e igrejas sem paróquia indicada

A lista da diocese dá estas capelas e casas com capelão próprio, sem dizer
a que paróquia pertencem. Ficaram fora do JSON:

- Capela Imaculado Coração de Maria, Rua Manoel Aguiar, 177, Cardoso
  Moreira (Forania do Senhor Bom Jesus)
- Capela N. Sra. do Bom Sucesso, Rua Saldanha da Gama, 60, Centro, Italva
- Capela Nossa Senhora de Bom Sucesso, Rua Antônio Carlos Alberione, Laje
  do Muriaé (Forania de Natividade)
- Capela Nossa Senhora de Fátima, Rua Waldemar Campelo Torres, 10, Miracema
- Capela Nossa Senhora Auxiliadora (salesianos), Av. Apolo, 49, Parque
  Tamandaré, Campos
- Capela Nossa Senhora Auxiliadora, Instituto Maria Auxiliadora, Rua
  Salvador Corrêa, 139, Centro, Campos
- Capela Nossa Senhora Auxiliadora, Instituto Profissional Laura Vicunha,
  Rua Benta Pereira, 183, Centro, Campos
- Capelania São José do Colégio Eucarístico, Rua Tenente Coronel Cardoso,
  595, Centro, Campos (nº 67 da lista; capelania, não paróquia)
- Mosteiro de São Bento (Forania da Baixada Litoral, sem endereço) e
  Seminário Diocesano Maria Imaculada

Do GCatholic, sem paróquia indicada: Santuário Menino Jesus de Praga e
Igreja São Francisco de Assis (antiga catedral), em Campos; Santuário de
Nossa Senhora da Penha, em São João da Barra (provavelmente da Paróquia São
João Batista e N. S. da Penha); Igreja Santa Filomena, em Varre-Sai
(notícia da diocese chama a paróquia de "São Sebastião e Santa Filomena");
Igreja N. S. de Fátima, em Goitacazes.

## O que falta para o próximo estado desta pesquisa

- Horários de todas as paróquias: tentar de novo os sites psbj.com.br,
  psja.org.br e psagradocoracao.com.br, e os perfis de Instagram pela busca.
- Endereço de N. S. da Glória e São José (Pádua) e Sant'Ana e São Joaquim
  (Rosal e Retiro do Muriaé).
- Confirmar a cidade de Retiro do Muriaé (suposta Itaperuna).
