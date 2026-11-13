# Diocese de São José dos Campos (SP): fontes da pesquisa de 13/11/2026

Sé em São José dos Campos; criada em 1981, desmembrada de Taubaté (só Igaratá
veio de Mogi das Cruzes). Bispo: Dom José Valmor César Teixeira, SDB.
Cúria: Av. São João, 2650, Jardim das Colinas, São José dos Campos,
(12) 3928-3911.

O território é só o destas 6 cidades: São José dos Campos, Jacareí, Monteiro
Lobato, Igaratá, Paraibuna e Santa Branca. Caraguatatuba, Ilhabela e São
Sebastião, citadas no pedido da pesquisa, são da Diocese de Caraguatatuba, e
Jambeiro é da Diocese de Taubaté: não entram aqui.

## Resumo

- **45 unidades pastorais** em `saida/sao-jose-dos-campos.json`: 1 catedral
  (São Dimas), 1 santuário que é paróquia (São Judas Tadeu) e 43 paróquias,
  em 9 regiões pastorais (São José, Santana, Santo Antônio, São Judas Tadeu,
  São Paulo Apóstolo, N. Sra. de Lourdes, Imaculada Conceição, N. Sra. da
  Santíssima Trindade e São Francisco Xavier, conforme a página de cada
  unidade). Por cidade: 31 em São José dos Campos, 10 em Jacareí e 1 em cada
  uma das outras 4.
- **45 com horário** (confiança alta): o site da diocese mantém a página de
  cada paróquia com as abas Informações, Missas e Atendimento, todas lidas em
  13/11/2026. Não ficou nenhuma unidade sem horário.
- 146 igrejas e 724 horários no JSON. Capela ou comunidade só virou igreja
  própria quando a fonte deu nome e lugar (bairro ou endereço); as missas de
  capelas que a fonte lista só pelo nome ficaram no `nao_cabe` da matriz,
  para nada se perder.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Lista das unidades

A lista vem da página de paróquias do site da diocese (46 páginas em
`/local/`). Dela ficou de fora a **Capelania Militar Nossa Senhora de
Loreto** (DCTA): a própria página diz que pertence à Arquidiocese Militar do
Brasil, e os contatos dela misturam e-mail pessoal.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 47
igrejas): bate por completo. As 47 do anuário são as mesmas 45 unidades daqui
mais a capelania militar (que ele chama de paróquia N. Sra. de Loreto) e o
Seminário Santa Teresinha, que não é unidade pastoral. A diocese não tem
quase-paróquia nem área pastoral listada.

Particularidades anotadas no JSON:

- A matriz da Paróquia N. Sra. da Santíssima Trindade (Jacareí) é a Igreja de
  Nossa Senhora do Bom Sucesso; a paróquia também usa o Santuário de Nossa
  Senhora do Carmo.
- Dois pares de paróquias homônimas: N. Sra. de Fátima (Altos de Santana e
  Jardim Oriente, as duas em SJC) e São Benedito (Alto da Ponte e Residencial
  Galo Branco, as duas em SJC); São José Operário existe em SJC (Vila Paiva)
  e em Jacareí.
- "Paróquia Matriz São José" (Centro de SJC) entrou como Paróquia São José.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocese-sjc.org.br/ (contatos da cúria, menu)
- https://diocese-sjc.org.br/locais/paroquias/ (a lista oficial, com as 46 páginas)
- https://diocese-sjc.org.br/local/<slug>/ (uma página por unidade; todas as
  46 baixadas e lidas; as URLs exatas estão nas `fontes` de cada item do JSON)
- https://diocese-sjc.org.br/horario-de-missas/ (buscador de missas do site;
  o formulário devolve vazio para qualquer dia e hora, então os horários
  vieram das páginas das paróquias)

## Instagram (só o que as próprias páginas da diocese dão)

Três paróquias usam o Instagram como página oficial no site da diocese, e o
usuário foi anotado no JSON: imaculadaconceicaoeugmelo (Imaculada Conceição,
Eugênio de Melo), paroquiaguadalupejacarei (N. Sra. de Guadalupe, Jacareí) e
santateresinhasjc (Santa Teresa do Menino Jesus). Nenhum perfil foi aberto
por dentro.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/zjos6 (anuário, 09/11/2026)
- https://pt.wikipedia.org/wiki/Diocese_de_S%C3%A3o_Jos%C3%A9_dos_Campos
  (criação em 1981 e as 6 cidades do território)

## O que falta para o próximo estado desta pesquisa

- Bairro ou endereço das capelas que ficaram no `nao_cabe` das matrizes
  (Coração Eucarístico, Santíssima Trindade, N. Sra. do Paraíso, Santa Luzia,
  Santa Rita, São José Operário de Jacareí, São Sebastião, São Silvestre,
  São José do Centro e a Capela Santa Edwiges de São José Esposo de Maria);
  o caminho provável são os sites próprios dessas paróquias.
- Endereço das capelas que têm bairro mas não rua (várias).
- Várias páginas avisam que os horários mudam sem aviso e pedem confirmação
  na secretaria; o site da diocese não data as páginas, então a data anotada
  é a da leitura.
