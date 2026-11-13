# Diocese de Blumenau (SC): fontes da pesquisa de 13/11/2026

Criada em 19/04/2000 (território tirado de Joinville), sufragânea de Joinville
desde 2024. Bispo: Dom Rafael Biernaski. Cúria: Rua Sete de Setembro, 1086,
Centro, CEP 89010-204, Blumenau, (47) 3322-4435. Padroeiro: São Paulo
Apóstolo (25 de janeiro).

## Resumo

- **41 unidades pastorais** em `saida/blumenau.json`: 1 catedral (São Paulo
  Apóstolo) e 40 paróquias, em 5 comarcas: Timbó (10), Blumenau/Sul (9),
  Blumenau/Norte (8), Navegantes (8) e Gaspar (6). Cidades: Blumenau (17),
  Gaspar (4), Navegantes (4), Indaial (3), Balneário Piçarras, Benedito Novo,
  Ilhota e Timbó (2 cada), Doutor Pedrinho, Luiz Alves, Penha, Pomerode e Rio
  dos Cedros (1 cada).
- **Só 4 com horário**, e 38 com confiança baixa. O site da diocese não
  publica horário de missa (só 2 das 41 páginas trazem algum, e de forma
  solta), e a maioria dos sites de paróquia que a diocese indica está fora do
  ar. Com horário:
  - Santuário Nossa Senhora dos Navegantes (Navegantes): página "Horários" do
    site do santuário, com 4 comunidades com endereço; confiança alta.
  - Santa Inês (Indaial): programação semanal do site da paróquia; alta.
  - Cristo Rei (Velha, Blumenau): trecho da página da paróquia no Facebook
    mostrado pela busca, sem data; média.
  - São Pio X (Ilhota): trecho da página da paróquia no Facebook, só quarta e
    1ª sexta; ficou baixa por estar incompleto.
- 2 paróquias têm a matriz santuário (Nossa Senhora Aparecida, Itoupava Norte,
  Blumenau; Nossa Senhora dos Navegantes, Navegantes): entraram como
  `paroquia` com a primeira igreja de tipo `santuario`.
- Todo `id_banco` é null. Nenhum Instagram: a diocese não publica perfil
  das paróquias e nenhum perfil foi confirmado pela busca.

## Páginas lidas (13/11/2026)

- https://diocesedeblumenau.org.br/pagina-paroquias/ e a API do WordPress:
  https://diocesedeblumenau.org.br/wp-json/wp/v2/paroquias?per_page=100 (41
  paróquias; campo `comarca` = 398 Blumenau/Norte, 399 Blumenau/Sul, 400
  Gaspar, 401 Navegantes, 402 Timbó, conforme
  https://diocesedeblumenau.org.br/wp-json/wp/v2/comarca). Cada página traz
  data de criação, endereço, telefone, e-mail, clero e a lista de comunidades.
  As páginas foram editadas em 12/2024 e 01-02/2025 (data no campo `fontes`).
- https://diocesedeblumenau.org.br/pagina-santuarios/ (2 santuários).
- https://www.santuariodenavegantes.com.br/horarios e as páginas
  /comunidade/... do mesmo site (endereço das comunidades).
- https://www.santainesindaial.com.br/ (programação semanal; blog com data de
  09/2026).
- Facebook, só pelo trecho da busca: https://www.facebook.com/paroquiacristoreiblumenau
  e https://www.facebook.com/sao.pio.x.ilhota/.

Sites citados nas páginas da diocese que não abriram (DNS ou conexão):
catedraldeblumenau.org.br, imaculadabnu.org.br, paroquiagaspar.com.br.
paroquiasaoluizgonzaga.com.br redireciona para uma revista em PDF (sem
horário).

Não usados: a reportagem do NSC Total com horários da Catedral (fonte de
terceiro, sem data) e os PDFs de Finados da diocese (horário de um dia só).

## Conferência da lista

- https://gcatholic.org/dioceses/diocese/blum0.htm e
  https://gcatholic.org/churches/local/blum0 (09/11/2026): catedral e 40
  paróquias, "41 parishes" na estatística de 2022. Bate um a um com a
  diocese. O GCatholic lista também o Santuário Nossa Senhora de Fátima de
  Doutor Pedrinho, sem marca de paróquia; a diocese não o lista como paróquia
  (a página de santuários só traz Navegantes e Aparecida) e ele ficou fora.

## Pendências

- Horário de 37 paróquias. A busca na web acabou (limite de buscas da
  sessão) depois de 11 buscas para Blumenau; as paróquias que restam
  precisam de busca de perfil (Instagram ou Facebook) da própria paróquia.
- Comunidade Nossa Senhora de Lourdes (Navegantes): o site do santuário não dá
  endereço; o horário ficou no `nao_cabe` da matriz.
- Comunidades listadas na página da diocese só pelo nome, sem lugar (fora do
  JSON):

- Paróquia Nossa Senhora da Paz (Balneário Piçarras): Nossa Senhora de Fátima, Sagrado Coração de Jesus, Nossa Senhora da Imaculada Conceição.
- Paróquia Santo Antônio de Pádua (Balneário Piçarras): São Brás, Santa Catarina, Nossa Senhora Aparecida, São Roque, Santa Terezinha, Nossa Senhora das Graças, São Francisco de Assis.
- Paróquia Nossa Senhora de Lourdes (Benedito Novo): Imaculado Coração de Maria, São Roque, São José Operário, Nossa Senhora da Luz, Santa Catarina de Alexandria.
- Paróquia São Roque (Benedito Novo): Nossa Senhora do Caravaggio, Santa Luzia, Nossa Senhora do Perpétuo Socorro, São José Operário, Santo Estanislau, São Sebastião, São Cristóvão, São João Batista, Nossa Senhora de Fátima, Santa Rosa de Lima.
- Catedral São Paulo Apóstolo (Blumenau): Santa Luzia, São Francisco de Assis.
- Paróquia Cristo Rei (Blumenau): Santa Ana, São João Batista.
- Paróquia Nossa Senhora Aparecida (Blumenau): Santa Maria, São João Maria Vianney, São João Batista, São José.
- Paróquia Nossa Senhora Imaculada Conceição (Blumenau): São Lourenço.
- Paróquia Nossa Senhora da Glória (Blumenau): Nossa Senhora de Fátima, Nossa Senhora Aparecida.
- Paróquia Nossa Senhora do Perpétuo Socorro (Blumenau): Santo Antônio, Nossa Senhora de Fátima.
- Paróquia Sagrado Coração de Jesus (Blumenau): Santa Catarina, Nossa Senhora de Lourdes, São José, Nossa Senhora do Perpetuo Socorro, Missão Cristo Libertador.
- Paróquia Santa Cruz (Blumenau): Nossa Senhora Aparecida, São Pedro, Santa Bárbara, Nossa Senhora de Fátima.
- Paróquia Santa Isabel (Blumenau): Mãe das Mães Maria, Nossa Senhora das Dores, São Cristóvão, São João Batista.
- Paróquia Santa Terezinha (Blumenau): Nossa Senhora Aparecida, Santo Expedito, São Cristóvão, São Paulo Apóstolo.
- Paróquia Santo Antônio (Blumenau): Nossa Senhora do Perpétuo Socorro, Sagrado Coração de Jesus, São José, Informações: Facebook/paroquiasantoantonio.
- Paróquia Santo Estêvão (Blumenau): Santo Estêvão, Santíssimo Redentor, Imaculado Coração de Maria.
- Paróquia São Francisco de Assis (Blumenau): Santa Clara, Nossa Senhora de Fátima, Santa Paulina.
- Paróquia São José Operário (Blumenau): São Miguel Arcanjo, São João Batista, Nossa Senhora de Fátima, Santa Paulina, São Domingos Sávio, Santa Filomena, Nossa Senhora Aparecida, Santíssima Trindade.
- Paróquia São João Batista (Blumenau): Nossa Senhora Aparecida, Nossa Senhora das Graças, São Pedro Apóstolo.
- Paróquia São Luiz Gonzaga (Blumenau): Sagrado Coração de Jesus.
- Paróquia Nossa Senhora da Glória (Doutor Pedrinho): Nossa Senhora Aparecida, Nossa Senhora das Candeias, Santo Antônio, São Paulo Apóstolo, São Francisco de Assis, Nossa Senhora do Rosário, Cristo Rei, Capitéis:, Frei Bruno Linden, Nossa Senhora da Medalha Milagrosa, Nossa Senhora Aparecida.
- Paróquia Nossa Senhora Imaculada Conceição (Gaspar): São Francisco, Santa Bárbara.
- Paróquia Nossa Senhora do Rosário (Gaspar): Santo Agostinho, Santa Luzia, Nossa Senhora das Graças, Santa Catarina, Nossa Senhora Aparecida, Santo Afonso.
- Paróquia Sagrado Coração de Jesus (Gaspar): São José, Santa Catarina, Santa Ana, Bom Jesus.
- Paróquia São Pedro Apóstolo (Gaspar): Santa Clara, Jesus Cristo Libertador, Bom Jesus, Santa Rita de Cássia, São Cristóvão, São Sebastião, Santa Paulina, Nossa Senhora Aparecida, Nossa Senhora de Fátima, Santa Terezinha, Virgem de Nazaré, São João Batista, São Judas Tadeu, Santo Antônio, São Brás.
- Paróquia Nossa Senhora da Glória (Ilhota): Cristo Rei, Santa Paulina, Sagrado Coração de Jesus, Nossa Senhora Aparecida, Sagrada Família, Nossa Senhora da Imaculada Conceição, Nossa Senhora do Rosário.
- Paróquia São Pio X (Ilhota): Santo Antônio, Santa Terezinha, São João Batista, Nossa Senhora do Perpétuo Socorro, Santa Luzia, São José, São Luiz Gonzaga.
- Paróquia Nossa Senhora de Fátima (Indaial): São José Operário, Santa Luzia, São Daniel Comboni, São Judas Tadeu.
- Paróquia Santa Inês (Indaial): Nossa Senhora Aparecida, São Bonifácio, Santo Estanislau, São João Batista, Sagrada Família, Santa Rita de Cássia, Nossa Senhora Aparecida, São Luíz, Santo Antônio, Nossa Senhora do Perpétuo Socorro, Santa Paulina, Santa Terezinha.
- Paróquia São Francisco de Assis (Indaial): Sagrado Coração de Jesus, São Cristóvão, Nossa Senhora da Confiança, Santa Isabel.
- Paróquia São Vicente de Paulo (Luiz Alves): Santa Paulina, São João Bosco, Nossa Senhora Auxiliadora, São Joaquim, Nossa Senhora de Fátima, Santo Antônio, São João Batista, São Cristóvão, Cristo Rei, Sagrado Coração de Jesus, São José Operário, Nossa Senhora da Imaculada Conceição (Gruta), Nossa Senhora Aparecida, Nossa Senhora do Livramento, São Sebastião.
- Paróquia Nossa Senhora dos Navegantes (Navegantes): Nossa Senhora de Fátima, Nossa Senhora de Lourdes, Nossa Senhora da Paz, Nossa Senhora do Perpétuo Socorro, São João Evangelista.
- Paróquia Santa Luzia (Navegantes): Santa Terezinha do Menino Jesus, Santo Agostinho, São José, Nossa Senhora Aparecida, Nossa Senhora de Fátima, Sagrado Coração de Jesus, São Francisco de Assis.
- Paróquia Santa Paulina (Navegantes): São Miguel, São Pedro, São Judas, Santa Lídia.
- Paróquia São Domingos de Gusmão e Nossa Senhora do Carmo (Navegantes): São Paulo Apóstolo, Nossa Senhora do Rosário, Nossa Senhora das Graças, Imaculado Coração de Maria.
- Paróquia Nossa Senhora da Penha (Penha): Matriz Nossa Senhora da Penha, Nossa Senhora Aparecida, São João Batista, Senhor Bom Jesus, São Judas Tadeu, São José, Cristo Rei, São Nicolau, São Cristóvão, Nossa Senhora de Fátima.
- Paróquia São Ludgero (Pomerode): Nossa Senhora das Graças, Nossa Senhora do Rosário, Santa Terezinha, São José, Santo Antônio, Bom Pastor (Capela Ecumênica).
- Paróquia Nossa Senhora Imaculada Conceição (Rio dos Cedros): Nossa Senhora Auxiliadora (Rio Cunha), Nossa Senhora de Fátima (Rio Palmito), Nossa Senhora da Glória (Alto Pomeranos), Nossa Senhora das Dores (Dolorata), Nossa Senhora de Fátima (Alto São Bernardo), Nossa Senhora de Caravaggio (Pomeranos Central), Nossa Senhora do Rosário (Rio Rosina), Santa Ana (Rio Herta), Santa Terezinha (Alto Cedros), Santo Antonio de Pádua (Barra do Avencal), Santo Antonio de Pádua (Pomeranos), Santo Inácio de Loyola (Alto Pedra Preta), São Bernardo (São Bernardo), São Francisco de Sales (Rio Esperança), São João (Cedro Alto), São Jorge (Pedra Preta), São José (Cedro Central), São Judas Tadeu (Rio Bonito), São Miguel (Rio Milanês), São Paulo Apóstolo (Rio Ada), São Roque (Mergulhão), São Sebastião (Palmeiras), Santa Paulina (Tiroleses), Capitéis, Nossa Senhora Aparecida, Nossa Senhora de Salete, Nossa Senhora das Graças (São Bernardo), Santo Antônio (Rio Assis).
- Paróquia Nossa Senhora da Imaculada Conceição Aparecida (Timbó): Nossa Senhora da Imaculada Conceição, Nossa Senhora de Fátima.
- Paróquia Santa Terezinha (Timbó): São Cristóvão, São José Operário, Santa Rita de Cássia, Bom Jesus, Sagrado Coração de Jesus, São Roque.
