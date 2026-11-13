# Arquidiocese de Belo Horizonte (MG): fontes da pesquisa de 13/11/2026

Sé metropolitana em Belo Horizonte; sufragâneas: Divinópolis, Luz, Oliveira e
Sete Lagoas. Arcebispo: Dom Walmor Oliveira de Azevedo. Padroeira: Nossa
Senhora da Piedade. Cúria: Rua Campo Verde, 103, Juliana, Belo Horizonte,
(31) 3269-3100. 28 municípios. Cinco regiões episcopais: Nossa Senhora
Aparecida (RENSA), Nossa Senhora da Boa Viagem (RENSB), Nossa Senhora da
Conceição (RENSC), Nossa Senhora da Esperança (RENSE) e Nossa Senhora do
Rosário (RENSER).

## Resumo

- **293 unidades** em `saida/belo-horizonte.json`: 1 catedral (Cristo Rei),
  3 basílicas (Paróquia Nossa Senhora de Lourdes, Paróquia Santo Cura d'Ars
  com a Basílica de São João Maria Vianney, e Paróquia Nossa Senhora da
  Piedade na Serra da Piedade), 284 paróquias (inclui as 2 paróquias
  pessoais de rito oriental), 1 curato (entrou como `quase_paroquia`), 1 área
  pastoral e 3 santuários sem paróquia (São Francisco de Assis da Pampulha,
  N. S. do Rosário de Brumadinho, Schoenstatt Tabor da Liberdade em Confins).
- Cidades: Belo Horizonte (152), Contagem (32), Betim (20), Ribeirão das
  Neves (14), Nova Lima (8), Santa Luzia (8), Sabará (7), Caeté (6), Ibirité
  (6), Brumadinho (5), Esmeraldas (5), Lagoa Santa (5), Vespasiano (5),
  Pedro Leopoldo (3), Bonfim (2), Confins (2), Sarzedo (2) e uma em cada:
  Belo Vale, Crucilândia, Moeda, Mário Campos, Nova União, Piedade dos
  Gerais, Raposos, Rio Acima, Rio Manso, São José da Lapa, Taquaraçu de Minas.
- **5 com horário**: Catedral Cristo Rei e Serra da Piedade (confiança alta,
  sites oficiais atualizados), Santuário Senhor Bom Jesus (BH), Santuário de
  Schoenstatt (Confins) e Paróquia N. S. do Carmo (BH) (confiança média). As
  outras 288 entraram com `horarios: []` e confiança baixa; 5 delas têm
  `nao_cabe` com celebração mensal ou adoração (Boa Viagem: adoração 24
  horas; Conceição dos Pobres: dia 8; São Judas Tadeu: dia 28; Santo Antônio
  de Roça Grande: domingos, terças e dia 13).
- Contatos: 283 com telefone, 265 com e-mail, 20 com site, 3 com WhatsApp
  (só onde o catálogo marca "WhatsApp" ou "zap"), 290 com endereço da matriz.
  Telefones com o DDD 31 acrescentado (o catálogo os dá sem DDD; toda a
  arquidiocese é DDD 31). Instagram: nenhum (nenhuma fonte oficial lida o
  cita).
- Todo `id_banco` é null.

## A fonte principal: o Catálogo 2026 da arquidiocese

https://arquidiocesebh.org.br/wp-content/uploads/2026/01/catalogo-01.07.26.pdf
(190 páginas, notícia de 01/01/2026 em
https://arquidiocesebh.org.br/noticias/catalogo-2026-da-arquidiocese-de-belo-horizonte/;
o "Catálogo online" redireciona para esse PDF). Lido em 13/11/2026.

- Seção 7.13 (pp. 141-170): as 273 paróquias numeradas, cada uma com região
  (RENSA etc.), código, data de criação, forania, endereço, telefone, e-mail,
  site e clero. Depois, 2 paróquias pessoais (N. S. do Líbano, maronita;
  Sagrado Coração de Jesus, siríaco), a paróquia militar N. S. de Loreto, o
  Curato Divino Espírito Santo (Contagem) e a Área Pastoral Rainha dos
  Mártires (Lagoa Santa, criada em 11/12/2025).
- Seção 7.14: 15 santuários. 12 são paróquias (o próprio catálogo, na lista
  por município, os chama de paróquia, ou dá "Pároco e Reitor"): Serra da
  Piedade, N. S. da Saúde (Lagoa Santa), Boa Viagem, Conceição dos Pobres
  (Lagoinha), N. S. de Fátima, Saúde e da Paz (Paróquia Sagrados Corações),
  N. S. da Conceição Aparecida (Contagem), Santa Luzia, São José, São Judas
  Tadeu, Santo Antônio de Roça Grande e São Paulo da Cruz. Entraram como
  paróquia com a matriz de tipo `santuario`. Os 3 restantes entraram como
  `santuario`.
- Seção 7.15: paróquias por região/forania e por município (usada só para
  conferir; está um pouco atrás da seção 7.13: não traz, por exemplo, as
  paróquias novas de Nova Lima).
- Observação de cada unidade: região episcopal (com a sigla), forania e data
  de criação, como o catálogo dá.
- Nome: "Paróquia" + o título do catálogo, em caixa normal. Matriz:
  "Igreja Matriz" + título, salvo onde a fonte dá outro nome.

Fica fora do JSON, de propósito: a paróquia militar N. S. de Loreto (Base
Aérea, Vila Asas, Lagoa Santa) e a Capela Militar N. S. de Loreto
(Pampulha); as capelas curiais e especiais sem paróquia indicada (pendência,
abaixo); as capelanias.

### Capelas sem paróquia indicada (pendência)

Capelas curiais do catálogo, todas em BH: Imaculada Conceição (Capela do
Colégio Arnaldo, Rua Ceará, s/nº, Funcionários); N. S. da Conceição
Aparecida (Rua João de Matos, 214, Ipiranga); N. S. do Rosário (Rua São
Paulo, 759, Centro); Santo Expedito (Rua Nicanor de Carvalho, 307, Álvaro
Camargo). Capela especial: Cristo Rei (Rua Itamarati, 640, Padre Eustáquio).

## Horários (fontes oficiais lidas em 13/11/2026)

- Catedral Cristo Rei (em construção): domingo 8h, 10h30 e 15h30.
  https://catedralcristorei.arquidiocesebh.org.br/para-voce/missas-2/
- Serra da Piedade (Caeté): página "Celebrações" do site do santuário,
  modificada em 24/08/2026, via API do WordPress
  (https://santuarionossasenhoradapiedade.arquidiocesebh.org.br/wp-json/wp/v2/pages/55395).
  Basílica Ermida: domingo 8h e 15h; sábado 9h e 15h; quarta a sexta 9h e
  15h (segunda e terça só on-line, santuário fechado). Basílica das Romarias:
  domingo 9h30 e 11h; sábado 11h. No Jubileu (julho a setembro) muda.
- Santuário Senhor Bom Jesus (BH): terça a sábado 19h; domingo 7h, 10h e 19h
  (mais 8h30 na Comunidade Santa Luzia e 17h na Comunidade Santo André, sem
  endereço, no `nao_cabe`). Página do site da arquidiocese, sem data:
  https://arquidiocesebh.org.br/arquidiocese/santuarios/santuario-senhor-bom-jesus/
- Schoenstatt Tabor da Liberdade (Confins): todos os dias 15h. Página do site
  da arquidiocese, sem data.
- Paróquia N. S. do Carmo (BH), site citado no catálogo
  (https://igrejadocarmo.com.br/): a página inicial dá segunda, quarta,
  sexta e sábado 7h e 19h; terça e quinta 7h, 12h e 19h; domingo 8h, 10h e
  19h; adoração segunda a sábado 7h45 às 9h. A página /missas/ omite a
  sexta: confiança média, divergência no `nao_cabe`.
- As demais páginas de santuário do site da arquidiocese (13 páginas) só
  trazem história e festas.

## Sites de paróquia citados no catálogo

Abertos em 13/11/2026: igrejadocarmo.com.br (horários, acima);
santaclaradapiedade.org.br (deu a segunda igreja da paróquia, Igreja Santa
Clara, Av. Presidente Carlos Luz, 835, Caiçara; o site está invadido por
propaganda); cristoredentor.org.br, saojudasbh.com.br,
igrejasaosebastiao.com.br e teresinha.com (sem horário legível no HTML).
**paroquiasaovicentedepaulo.com.br** hoje é de uma paróquia de Mauá (SP):
tirado dos contatos. paroquiaverbodivino.com virou site de apostas (o e-mail
da paróquia ficou; o domínio não é site). Não resolveram em DNS ou não
responderam: divinoticias.org.br, igrejasantaluzia.org, nsrainha.com,
portaldagloria.org.br, paimisericordioso.org, coracaojesus.com,
santaefigenia.org.br, pst.org.br, senhorbomjesus.hjg.com.br,
igrejasaojose.org.br, nslourdes.hpg.com.br, paroquiasaopaulomissionario.com,
nossasenhoradopilar.com.br, basilicadelourdes.com.br; paroquiansnazare.org.br
deu 503. Os que estão no catálogo continuam no campo `site` (exceto o de São
Vicente de Paulo), para a próxima rodada.

## Contatos que NÃO entraram

- Telefone marcado "(Res.)" (residência do padre) e o 2º número quando é
  celular e há fixo.
- E-mail pessoal do pároco da paróquia siríaca; o e-mail de "casamentos" da
  Basílica de Lourdes (ficou o da secretaria); o e-mail do Schoenstatt,
  ilegível no PDF ("tabor da liberdade@yahoo.com.br", com espaços).
- Nomes de padres (o catálogo traz; o JSON não usa).

## Conferência da lista

- GCatholic (https://gcatholic.org/churches/local/belo0, atualizado em
  09/11/2026, 286 igrejas; uma página por igreja lida): todas as igrejas de
  paróquia do GCatholic estão no JSON, com 8 diferenças explicadas: São
  Norberto e Santa Edwiges (Contagem) são UMA paróquia no catálogo (cód.
  262), o GCatholic dá duas; a "Igreja Nova das Romarias" é a Basílica das
  Romarias da Serra da Piedade; Santos Pastorinhos e os santuários de
  Schoenstatt e de Roça Grande só mudam de grafia; N. S. Aparecida e São
  Vicente de Paulo (BH) e N. S. do Rosário de Quinta do Sumidouro (Pedro
  Leopoldo) o GCatholic dá como igreja sem paróquia, e o catálogo não as
  lista. O GCatholic estava atrás do catálogo nas criações recentes (Maria,
  Mãe da Esperança em Betim, 28/09/2025; São Luiz Gonzaga em Contagem,
  26/03/2025; N. S. Rainha dos Anjos em Nova Lima, elevada em 22/08/2024;
  Jesus, Maria e José no Barreiro; Cristo Sol Nascente; Divino Espírito
  Santo e Maria, Mãe de Jesus em Esmeraldas). Estatística do anuário: 295
  paróquias (dado de 2022); a notícia do catálogo diz "quase 300".
- Receita Federal (dados abertos do CNPJ, 2026-10, arquivos.receitafederal.gov.br):
  a Mitra Arquidiocesana de Belo Horizonte é o CNPJ 17.505.249/0001-51, com
  133 filiais ativas de paróquia. Serviu de conferência enquanto o site da
  arquidiocese estava fora do ar; não entrou no JSON. Telefones e e-mails da
  Receita não foram usados (repetem a cúria e a contabilidade).

## O site esteve fora do ar

Das 18h56 às 19h45 de 13/11/2026 o site e todos os subdomínios responderam
erro 552 da GoCache (servidor de origem recusou a conexão). Voltou por volta
das 20h, quando foram lidos o catálogo e as páginas acima. Arquivos da web
não foram usados. Um site de paróquia que respondeu 406 (bloqueio) não foi
contornado (paroquiadombosco.com.br, citado pelo GCatholic).

## Território (para as outras pesquisas de MG)

Pelo catálogo (28 municípios) e pela Receita: Juatuba, Mateus Leme, São
Joaquim de Bicas, Igarapé, Itatiaiuçu e Florestal são da Diocese de
Divinópolis; Itaguara é da Diocese de Oliveira; Capim Branco, Jaboticatubas
e Matozinhos são da Diocese de Sete Lagoas. Há também a Eparquia Greco-
Melquita (Paróquia N. S. do Perpétuo Socorro, Cidade Jardim, BH, CNPJ da
eparquia baixado) e a Eparquia Maronita, jurisdições próprias.

## O que falta para o próximo estado desta pesquisa

- Horários das 288 unidades restantes: o catálogo não traz horário. Caminho:
  sites de paróquia (campo `site`) e, na rodada de busca, o trecho de
  Instagram de cada paróquia.
- Endereço da matriz: N. S. da Misericórdia (BH; o catálogo dá só as
  comunidades N. S. da Paz e N. S. da Piedade, que entraram como comunidade),
  São José (São José do Paraopeba, Brumadinho) e o da Serra da Piedade
  (só caixa postal).
- Capelas e comunidades: o catálogo não as lista por paróquia.
