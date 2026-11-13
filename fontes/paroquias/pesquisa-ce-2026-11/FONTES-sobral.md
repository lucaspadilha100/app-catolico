# Diocese de Sobral (CE): fontes da pesquisa de 13/11/2026

Sé em Sobral; noroeste do Ceará (29 municípios, 17.634,7 km²). Bispo: Dom
José Luiz Gomes de Vasconcelos. Cúria: Rua Maestro José Pedro, 70, Centro,
Sobral, (88) 3611-0545, diocesedesobral@yahoo.com.br. A diocese se divide em
4 Regiões Episcopais: Sede, Vale do Acaraú, Vale do Coreaú e Araras.

## Resumo

- **50 unidades pastorais** em `saida/sobral.json`: 1 catedral, 44 paróquias,
  3 áreas pastorais (N. S. da Saúde no Jordão, Divina Misericórdia em Sobral,
  São Francisco em Rafael Arruda) e 2 áreas missionárias (São Francisco de
  Assis em Parapuí, São Pedro em Cauassu). A lista vem das 4 páginas de
  Região Episcopal do site da diocese, que batem com a página Dados Gerais
  ("45 Paróquias, 5 Áreas Pastorais").
- **Nenhuma com horário.** O site da diocese publica endereço e redes
  sociais de cada unidade, mas nenhum horário fixo de missa; só achamos
  posts de eventos (Cinzas de um ano, mutirão de confissões), que não valem
  como horário regular. As paróquias publicam no Instagram e no Facebook,
  que não se leem por dentro, e a busca não mostrou nenhum horário em
  trecho de bio. Pela regra do dono, todas entram com `horarios: []` e
  confiança baixa, com o porquê na observação.
- **38 com Instagram** copiado das páginas da diocese. Alguns perfis a
  diocese imprime com acento ou apóstrofo (catedralsé, @ParoquiadeSantoAntônio,
  @paroquiasenhorasant'ana), forma que não existe como usuário do Instagram:
  esses ficaram FORA do JSON, anotados na observação da unidade. Dois
  handles entraram como a diocese os publicou e podem ter erro de digitação
  dela: `areapastoralnossasenhoradadaudejordao` (Jordão) e
  `paroquianossasenhoradoperpetuosocooromassape` (Massapê).
- **3 santuários diocesanos** entraram como igreja (`tipo: santuario`) da
  paróquia que a página de Santuários nomeia: Tabor da Mãe Rainha (Cristo
  Ressuscitado, Sobral), N. S. de Fátima (Santo Antônio, Aracatiaçu) e
  Sagrado Coração de Jesus (São Manuel, Marco).
- Todo `id_banco` é null: o banco ainda não tem nada do Ceará.

## Lista das unidades

As 4 páginas de Região Episcopal do site oficial (WordPress; lidas pela API
`/wp-json/wp/v2/` em 13/11/2026) dão a lista completa, com endereço e redes:

- https://diocesedesobral.com.br/regioes-episcopais/sede/ (12 paróquias + 2
  áreas pastorais; 8 paróquias na cidade de Sobral e 4 nos distritos)
- https://diocesedesobral.com.br/regioes-episcopais/acarau/ (12 paróquias +
  2 áreas missionárias)
- https://diocesedesobral.com.br/regioes-episcopais/coreau/ (12 paróquias +
  1 área pastoral)
- https://diocesedesobral.com.br/regioes-episcopais/araras/ (9 paróquias)
- https://diocesedesobral.com.br/regioes-episcopais/santuarios/ (5 santuários)
- https://diocesedesobral.com.br/dados-gerais/ (45 paróquias + 5 áreas
  pastorais + 4 santuários diocesanos; descrição de cada região)
- https://diocesedesobral.com.br/curia-diocesana/ (contatos da cúria)
- Páginas Paróquias A-E, F-J e K-O (datas de criação e CEP; a K-O está
  truncada, só Catunda): https://diocesedesobral.com.br/paroquias-a-e/ ,
  https://diocesedesobral.com.br/paroquias-f-j/ , https://diocesedesobral.com.br/k-o/
- https://diocesedesobral.com.br/se-catedral-de-sobral/ (história da
  Catedral; sem horários)

Divergências anotadas:
- A Divina Misericórdia (Sobral) é "Área Pastoral" na página da Região Sede
  e "quase paróquia" em Dados Gerais; o JSON segue a página da região, com a
  divergência na observação.
- Parapuí é "Área Missionária" na página do Acaraú e "área pastoral" em
  Dados Gerais; o JSON segue a página da região.
- Dados Gerais cita "uma área missionária do Ipaguaçu Mirim" no Vale do
  Coreaú que NÃO aparece na página da região (que traz Rafael Arruda no
  lugar); ficou fora do JSON.
- A página de Santuários traz ainda o Santuário São Francisco de Assis
  (Centro de Sobral, sem paróquia nomeada) e o Santuário Diocesano São Bento
  (Fazenda da Esperança, que é organismo, não paróquia): os dois ficaram
  fora do JSON por não dar para ligar a uma unidade.

## Conferência da lista (não usadas para horário nem contato)

- https://gcatholic.org/churches/local/sobr0.htm (anuário, atualizado em
  09/11/2026): 48 igrejas + o Santuário São Francisco. O anuário não traz as
  unidades mais novas (Santa Luzia de Sobral, de 2021; Divina Misericórdia;
  Parapuí; São Pedro de Cauassu) e traz igrejas que não são sede de unidade
  (Igreja da Ressurreição em Sobral, N. S. da Saúde em Rafael Arruda, São
  Sebastião em Acaraú). No que é comparável, as listas batem.
- https://catholic-hierarchy.org/diocese/dsobr.html e
  https://en.wikipedia.org/wiki/Diocese_of_Sobral (criação em 10/11/1915;
  territórios cedidos a Crateús em 1963/64 e a Tianguá e Itapipoca em 1971).

## O que falta para o próximo estado desta pesquisa

- Horário das 50 unidades: o caminho mais provável são os perfis das
  paróquias no Instagram (38 handles já no JSON), que a busca não indexa por
  dentro, ou contato direto com as secretarias.
- Telefone e e-mail das unidades: o site da diocese não os publica (a página
  K-O traz um celular de secretária paroquial de Catunda e um e-mail pessoal
  do pároco, que não entram por serem contatos pessoais).
- Capelas e comunidades de cada paróquia: nenhuma fonte oficial as lista.
- Confirmar os 2 handles com provável erro de digitação (Jordão e Massapê) e
  os perfis impressos com acento (Catedral, Patrocínio, Fátima, Santo
  Antônio de Aracatiaçu, Sant'Ana de Santana do Acaraú).
