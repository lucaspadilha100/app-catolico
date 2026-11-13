# Arquidiocese de Florianópolis (SC): fontes da pesquisa de 13/11/2026

Sé metropolitana em Florianópolis; litoral central de Santa Catarina, da
Grande Florianópolis ao Vale do Itajaí-Mirim e à foz do Itajaí. Arcebispo:
Dom Wilson Tadeu Jönck, SCJ; bispo auxiliar: Dom Onécimo Alberton. Cúria:
Rua Esteves Júnior, 447, Centro, Florianópolis, (48) 3224-4799,
imprensa@arquifln.org.br. Padroeira: Santa Catarina de Alexandria (25 de
novembro). Desde 05/11/2024 a província de Florianópolis tem só Criciúma e
Tubarão como sufragâneas (Joinville e Chapecó viraram metropolitanas).

## Resumo

- **78 unidades** em `saida/florianopolis.json`: 1 catedral, 76 paróquias
  (75 paróquias mais a reitoria) e 1 santuário (Santa Paulina, Nova Trento),
  em 13 foranias (Biguaçu, Brusque, Camboriú, São José, São José Barreiros,
  Florianópolis Centro-Sul, Florianópolis Continente, Florianópolis Norte,
  Itajaí, Itapema, Palhoça, Santo Amaro e Tijucas). Cidades: Florianópolis
  (20), São José (10), Itajaí (8), Brusque (5), Palhoça (5), Balneário
  Camboriú (3), Camboriú (3), Biguaçu, Itapema e Nova Trento (2 cada) e uma em
  cada um dos outros 18 municípios.
- **649 igrejas** (matrizes, capelas e comunidades), quase todas da lista de
  comunidades que o site da arquidiocese mantém em cada paróquia (nome +
  localidade). A Revista de Verão 2026 conta 636 comunidades na arquidiocese.
- **23 unidades com horário de missa** (17 de confiança alta, 6 média), 118
  igrejas com horário, 372 linhas de horário. **55 unidades sem horário**
  (`horarios: []`, confiança baixa).
- Todo `id_banco` é null.

## Por que tão poucos horários

1. O site da arquidiocese (arquifln.org.br) **não publica horário de missa**
   nas páginas de paróquia: só endereço, expediente, telefone, e-mail,
   clero, redes sociais e comunidades. A única página com missas é a de
   Santuários (atualizada em 30/05/2023).
2. Dos 37 sites próprios de paróquia citados nessas páginas, 12 não
   respondem (domínio fora do ar ou expirado: pscruz.org.br,
   paroquiaponte.com.br, paroquiascjmeiapraia.com.br,
   santoantonioparoquia.com, franciscanos.org.br, paroquiadalagoa.org,
   paroquiadecapoeiras.org.br, santuarioangelina.com.br,
   matrizdepalhoca.com.br, paroquiadafazenda.com, santuariodefatima.net.br,
   psjgaropaba.com.br), 5 redirecionam para o próprio site da arquidiocese
   (paroquiadaagronomica.org.br, azambuja.org.br, saosebastiaoanitapolis.org.br,
   psbomjesus.org.br, pnsr.org.br), dombosco.net é o site da inspetoria
   salesiana e paroquiasantainesbc.com.br responde com verificação antirrobô
   (não contornada).
3. **O limite de buscas na web já estava esgotado** quando esta pesquisa
   começou (a primeira busca voltou "budget used up", limite compartilhado
   entre as pesquisas que rodaram juntas). Nenhum trecho de Instagram foi
   consultado. As 55 paróquias sem horário são o alvo da próxima rodada.

## Lista das unidades

Fonte da lista: a página "Paróquias" do site da arquidiocese
(https://arquifln.org.br/paroquias, modificada em 25/03/2025), que traz 82
entradas por cidade, batida com o tipo de post "Igrejas" da API WordPress
(https://arquifln.org.br/wp-json/wp/v2/post_causes, 83 posts, um por
unidade, com a forania na taxonomia `wpl_causes_category`).

Contagem oficial (Revista de Verão 2026, p. sobre o centenário,
https://arquifln.org.br/wp-content/uploads/2026/01/Revista-2026-site.pdf):
"76 paróquias, 8 santuários, 1 reitoria, 1 capelania e 4 capelanias
militares, totalizando 636 comunidades". Bate: 83 posts menos 4 militares,
menos a capelania universitária, menos a reitoria e menos o Santuário Santa
Paulina dá 76 paróquias (a catedral entre elas). Os outros 7 santuários são
igrejas de paróquias (Fátima do Estreito, Imaculada Conceição da Lagoa,
Azambuja, Angelina, Bom Socorro em Nova Trento, Senhor Bom Jesus da Santa
Cruz em São Pedro de Alcântara e, pelo site da paróquia, o Sagrado Coração de
Jesus dos Ingleses).

Entraram também, além das 76 paróquias:
- **Santuário Santa Paulina** (Nova Trento), categoria `santuario`: tem reitor
  e página própria na lista de unidades; o GCatholic o marca como "Parish,
  Shrine".
- **Reitoria da Igreja Santa Catarina de Alexandria** (Colégio Catarinense,
  Centro), categoria `paroquia` por falta de categoria própria: a lista da
  arquidiocese a chama "Paróquia Santa Catarina de Alexandria (Colégio
  Catarinense)", o GCatholic a marca como paróquia, e a página dela diz
  "Reitoria". Merece decisão do dono (pode virar igreja da Catedral).

Ficaram fora (não são da arquidiocese ou não são unidade territorial):
- Paróquia Militar Nossa Senhora de Loreto (Base Aérea, Tapera), Capelania
  Militar Cristo Rei (Polícia Militar, Trindade), Capelania Militar Santa
  Catarina (Exército, Centro) e Capelania Militar Nossa Senhora dos Navegantes
  (Marinha, Estreito): Ordinariado Militar do Brasil (o GCatholic põe Loreto e
  Cristo Rei em "Other Churches Within the Diocesan Territory").
- Capelania Spiritus Veritatis (UNIVALI, Itajaí): capelania universitária.
- Do GCatholic: Seminários Bom Pastor e Emaús, Carmelo Santa Teresa (Itajaí) e
  Carmelo Cristo Redentor (São José).

Paróquias novas (criadas depois da última atualização do GCatholic de várias
delas): Nossa Senhora do Bom Sucesso (Camboriú, 25/01/2025), Nossa Senhora
de Fátima (Itajaí, 04/02/2024), São Sebastião (Palhoça, 01/05/2022), São João
Batista (Biguaçu, 14/08/2022), Nossa Senhora do Sagrado Coração (Campeche,
27/02/2022), Nossa Senhora dos Navegantes e São Pedro (Serraria, São José,
2017). As comunidades que passaram a elas foram tiradas da paróquia de
origem quando a lista antiga ainda as trazia (São Vicente de Paulo, Senhor
Bom Jesus de Nazaré, São João Evangelista).

Conferência contra o GCatholic (https://gcatholic.org/churches/local/flor0,
atualizado em 09/11/2026, 72 paróquias na lista, contando a Reitoria e o Santuário Santa Paulina, mais as duas militares):
todas as paróquias do GCatholic estão na lista da arquidiocese. Faltam no
GCatholic as seis mais novas: Bom Sucesso (Camboriú), Fátima (Itajaí), São
Sebastião (Palhoça), São João Batista (Biguaçu), Nossa Senhora do Sagrado
Coração (Campeche) e Navegantes e São Pedro (Serraria, São José). O GCatholic põe a Paróquia Nossa Senhora da Lapa em "Freguesia do
Ribeirão" como cidade; no JSON ela é Florianópolis, bairro Ribeirão da Ilha.

## Páginas lidas (13/11/2026)

Site da arquidiocese:
- https://arquifln.org.br/paroquias (lista por cidade)
- https://arquifln.org.br/wp-json/wp/v2/post_causes?per_page=100 e as 83
  páginas `https://arquifln.org.br/igrejas/<slug>` (endereço, expediente,
  telefone, e-mail decodificado do Cloudflare, clero, redes e a lista de
  comunidades com localidade); cada URL está no campo `fontes` da unidade,
  com a data de modificação do post (quase todos 29/07/2026).
- https://arquifln.org.br/wp-json/wp/v2/wpl_causes_category (foranias)
- https://arquifln.org.br/santuarios (missas de Fátima do Estreito, Lagoa,
  Santa Paulina, Bom Socorro, Azambuja e Angelina; modificada em 30/05/2023)
- Revista de Verão 2026 (PDF acima): missas da Catedral no verão e da Igreja
  Nossa Senhora do Rosário e São Benedito (domingo, 16h30).

Sites das paróquias com horário (um por unidade no JSON):
- Catedral: https://www.catedralflorianopolis.org.br/missas-e-sacramentos
  (missas, confissões, adoração)
- Campeche: https://paroquiadocampeche.org.br/horarios-de-missas/ (26/01/2025)
- Lapa (Ribeirão da Ilha): https://nossasenhoradalapa.org.br/horarios/ (24/01/2025)
- Trindade: https://paroquiadatrindade.com/paroquia/horarios/ (15/12/2025;
  missas, confissões e adoração)
- Boa Viagem: https://boaviagem.org.br/ e as páginas
  `boaviagem.org.br/comunidades/<slug>` (07/04/2025; endereço de cada
  comunidade)
- Glória (Balneário): https://pnsg.org.br/horario-das-missas-e-secretaria/ (10/11/2026)
- Coqueiros: https://paroquiadecoqueiros.org.br/horarios-das-missas/
  (02/09/2026) e as páginas das comunidades São Judas Tadeu e N. S.
  Aparecida (08/11/2024)
- Canasvieiras: https://paroquiadecanasvieiras.org.br/missas/ (19/05/2026)
- Ingleses: https://www.paroquiaingleses.com.br/missas (com endereço de cada
  igreja)
- Santo Antônio (Campinas, São José): https://paroquiasantoantonio.net/
- São Judas Tadeu (Barreiros): https://saojudastadeubarreiros.org.br/missas/ (03/10/2024)
- Sagrados Corações (Barreiros): https://sagradoscoracoes.org.br/site/horarios-de-missas/ (05/02/2026)
- São João Evangelista (Biguaçu): https://psje.org.br/ (quadro de horários da
  página inicial)
- São Luís Gonzaga (Brusque): https://www.paroquiasaoluisgonzaga.com/institucional/horarios-de-missa
- Santa Catarina (Brusque): https://paroquiasantacatarina.com/horario-das-missas/ (16/06/2026)
- Santíssimo Sacramento (Itajaí): https://paroquiasantissimoitajai.com.br/2026/10/19/paroquia-santissimo-sacramento-anuncia-novos-horarios-de-missas-a-partir-de-novembro/
  (horários a partir de 01/11/2026). O endereço do site não aparece na página
  da arquidiocese; foi achado tentando o domínio pelo Instagram da paróquia.
- São Cristóvão (Itajaí): https://www.paroquiasaocristovao.com/ (matriz e
  Igreja São José) e as páginas das comunidades (endereços)
- São Virgílio (Nova Trento): https://paroquiasaovirgilio.com.br/horarios-de-missas/
  (29/12/2024) e https://santuarionsbomsocorro.com.br/
- Santuário Santa Paulina: https://santuariosantapaulina.org.br/horarios-de-missas-santuario-santa-paulina/
  (15/02/2026; missas e confissões)

## Decisões e divergências

- Paróquia Sagrado Coração de Jesus (Ingleses): a arquidiocese dá como
  matriz a igreja N. S. dos Navegantes (Santinho, 1839), e ela é a primeira
  igreja no JSON; o site da paróquia chama a igreja dos Ingleses de
  "Santuário Sagrado Coração de Jesus" (secretaria e missas diárias), que
  entrou como segunda igreja, tipo `santuario`.
- Nossa Senhora Aparecida (Morro do Limoeiro, Boa Viagem): a página inicial
  diz domingo 18h; a página da comunidade diz 2º e 4º domingos. Ficou a da
  comunidade, com a divergência no `nao_cabe`.
- Santíssimo Sacramento (Itajaí): as igrejas Imaculada Conceição e N. S. da
  Paz têm horário sem dia no site; ficou no `nao_cabe`.
- São João Evangelista (Biguaçu): o site lista missas nas igrejas São
  Sebastião (Fundos) e Santo Antônio (Tijuquinhas), localidades que a lista da
  arquidiocese não traz; ficaram no `nao_cabe` da matriz.
- Endereços: em geral é o endereço da paróquia publicado pela arquidiocese,
  que costuma ser a secretaria junto da matriz. Na Catedral é a secretaria
  (Rua Padre Miguelinho, 55); na Lapa, a secretaria ao lado da matriz.
- Telefones e WhatsApp como publicados. WhatsApp tirado do botão do site da
  paróquia quando havia (Lapa, Trindade, Sagrados Corações, Ingleses,
  Canasvieiras, Santíssimo Sacramento).
- E-mail com acento ("secretária@paroquiadocampeche.org.br") ficou fora; o
  campo de e-mail da página de São João Batista de Biguaçu repete o endereço.
- Paróquias de mais de um município: Angelina (com Rancho Queimado) e Santo
  Amaro (com Águas Mornas). Comunidades sem município certo ficaram com
  `cidade` vazia, menos as que trazem o nome do município na localidade.
- Sagrados Corações: a API põe a paróquia na Forania Biguaçu; a lista de
  paróquias a põe em São José. Navegantes e São Pedro (Serraria) e Bom
  Sucesso não têm forania na API; Bom Sucesso ficou Camboriú (pela cidade).
- A localidade das comunidades segue a lista da arquidiocese; abreviações
  dela foram mantidas quando não havia certeza (H.G.C.R., C.E.M. Jesus,
  Provincialado D.P., Col. Bom Jesus/C. de Jesus, na Catedral).

## Instagram (da página de cada paróquia no site da arquidiocese)

Anotados no campo `instagram`, nenhum aberto por dentro. Ex.: catedralfloripa,
paroquiadocampeche, paroquiadatrindade, paroquia_de_canasvieiras,
pscj_ingleses, santuariodeazambuja, santuario.santapaulina,
paroquiasantissimoitajai, paroquiadepalhoca, psaojoaquimgrp.

## O que falta para o próximo estado desta pesquisa

- Horário de missa das 55 paróquias com `confianca: "baixa"`. Caminho:
  trecho de Instagram pela busca (cada paróquia tem perfil anotado) e sites
  próprios que voltem ao ar. Prioridade pelo tamanho: Florianópolis
  (Agronômica, Capoeiras, Coloninha, Jardim Atlântico, Monte Verde, Santo
  Antônio de Lisboa, Prainha, Santo Antônio do Centro, Reitoria do Colégio
  Catarinense), São José (São José Centro Histórico, Sant'Ana, Forquilhinhas,
  Santa Cruz, Procasa, Rosário, Serraria), Palhoça (5), Itajaí (6),
  Balneário Camboriú (3), Camboriú (3), Brusque (2), Itapema, Bombinhas,
  Porto Belo, Tijucas, Garopaba e as do interior.
- Horários das comunidades de São Cristóvão (Itajaí), do restante da
  Catedral, da Lagoa, de Azambuja, de Angelina, de Fátima do Estreito e de São
  Virgílio (só matriz e Bom Socorro publicados).
- Confissões fora da Catedral, da Trindade e do Santuário Santa Paulina.
- Reconferir os quatro santuários cuja única fonte é a página de 2023
  (Fátima do Estreito, Lagoa, Azambuja, Angelina).
- Decidir se a Reitoria Santa Catarina de Alexandria fica como unidade.

## Circunscrições de Santa Catarina (conferência no GCatholic)

Pelos dados de igrejas do GCatholic (https://gcatholic.org/churches/data/all-BR),
Santa Catarina tem 10 circunscrições: as arquidioceses de Florianópolis,
Joinville e Chapecó e as dioceses de Blumenau, Caçador, Criciúma, Joaçaba,
Lages, Rio do Sul e Tubarão. Todas estão nos pedidos desta rodada; nenhuma
falta. (Os fiéis ucranianos do estado são da Eparquia de São João Batista,
com sede em Curitiba, PR, e o Ordinariado Militar é nacional.)
