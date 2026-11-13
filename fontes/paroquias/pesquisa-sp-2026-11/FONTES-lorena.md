# Diocese de Lorena (SP): fontes da pesquisa de 13/11/2026

Sé em Lorena; Vale do Paraíba paulista, do Embaú à divisa com o Rio
(Vale Histórico). Bispo: Dom Joaquim Wladimir Lopes Dias.
Cúria: Rua Hepacaré, 28, Centro, Lorena, (12) 3153-1256,
curia@diocesedelorena.com. Instagram: dioceselorena.

## Resumo

- **34 unidades pastorais** em `saida/lorena.json`: 1 catedral (Nossa Senhora
  da Piedade, Lorena), 1 basílica menor (Imaculada Conceição, Cruzeiro),
  28 paróquias e 4 santuários sem paróquia (Pai das Misericórdias e Nossa
  Senhora da Santa Cabeça em Cachoeira Paulista; São Benedito e Dom Bosco em
  Lorena). Sem quase-paróquias nem áreas pastorais: a diocese organiza as
  paróquias em 4 setores (Lorena, Cruzeiro, Cachoeira Paulista e Vale
  Histórico e Climático).
- **20 com horário** (19 com missa; Areias só publica as confissões):
  Catedral, N. S. Aparecida e Santo Expedito (Lorena), N. S. de Fátima,
  Santa Cecília, Santa Rita e São Sebastião, São Pedro e São Paulo e Senhor
  Bom Jesus (Cruzeiro), N. S. Auxiliadora (Canas), São Miguel Arcanjo
  (Piquete), São Francisco de Paula (Lavrinhas), N. S. da Conceição
  (Silveiras), Sant'Ana (Areias), Santo Antônio de Pádua (Arapeí), São José
  (São José do Barreiro), Senhor Bom Jesus do Livramento (Bananal), N. S. da
  Conceição (Cunha), N. S. dos Remédios (Campos de Cunha) e os santuários
  Santa Cabeça, Pai das Misericórdias e São Benedito.
- **14 sem horário** (confiança baixa): 6 paróquias de Lorena, a basílica de
  Cruzeiro, as 4 de Cachoeira Paulista, Santo Antônio de Pádua (Piquete),
  Queluz e o Santuário Dom Bosco. A regra do dono manda entrar mesmo assim,
  com `horarios: []` e o porquê na observação.
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.
- Todas as unidades ficam em cidades paulistas (nenhum campo `uf`).

## Lista das unidades

A lista vem da API aberta do site da diocese (WordPress,
`/wp-json/wp/v2/paroquias?per_page=100`): 30 paróquias, com a página de cada
uma (endereço, secretaria, redes e, em 16 delas, os horários). Os 4
santuários sem paróquia vêm da página Santuários do mesmo site.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 35
igrejas): 29 "Parish" + 1 Cathedral = as mesmas 30 paróquias da API; os 4
santuários (Santa Cabeça como "National Shrine"; Pai das Misericórdias, São
Benedito e Dom Bosco como "Shrine") batem com a página da diocese; a 35ª
entrada é o Seminário Nossa Senhora Mãe dos Sacerdotes (Lorena), que não é
unidade pastoral e ficou fora do JSON. A Imaculada Conceição de Cruzeiro
aparece como "Minor Basilica, Parish"; entrou como `basilica`. A estatística
do GCatholic (30 paróquias e 4 missões em 2021) confere.

Divergências anotadas:

- A página da Paróquia Santo Antônio de Pádua (Piquete) repete, por engano,
  o telefone, o Facebook e a grade de missas inteira da Catedral de Lorena;
  os horários NÃO entraram (confiança baixa) e o site próprio da matriz
  (matrizsantoantoniopiquete.com.br) está fora do ar (DNS não resolve).
- A página da Paróquia Santo Antônio de Pádua (Arapeí) repete endereço,
  festa e secretaria de Areias (o mesmo pároco atende as duas). Os horários
  publicados nela entraram em Arapeí com confiança media e a mistura anotada
  na observação.
- A Paróquia Nossa Senhora dos Remédios fica em Campos de Cunha (distrito de
  Cunha); o slug da diocese diz "campos-novos-de-cunha". Entrou com cidade
  Cunha e localidade Campos de Cunha.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedelorena.com/ (menu, contatos da cúria)
- https://diocesedelorena.com/paroquias/ (a lista; o conteúdo carrega da API)
- https://diocesedelorena.com/wp-json/wp/v2/paroquias?per_page=100 (as 30
  páginas de paróquia de uma vez; `X-WP-Total: 30`)
- https://diocesedelorena.com/santuarios/ (os 4 santuários, com contatos e,
  em 2 deles, horários; cita também o santuário-matriz de São Miguel
  Arcanjo em Piquete)
- https://diocesedelorena.com/contato/ (cúria)
- Horários de missa nas páginas de paróquia: Catedral, N. S. Aparecida e
  Santo Expedito (Lorena), N. S. de Fátima, Santa Cecília, Santa Rita e São
  Sebastião, São Pedro e São Paulo e Senhor Bom Jesus (Cruzeiro), Canas,
  São Miguel Arcanjo (Piquete), Lavrinhas, Silveiras, Arapeí, São José do
  Barreiro, Bananal, Cunha e Campos de Cunha. Areias publica só confissões.
- As páginas têm data de modificação de 2022 a 2025 (a da Catedral,
  01/10/2025): horários podem estar defasados; a data anotada em `fontes` é
  a da leitura.

## Horários fora do site da diocese

- https://santuario.cancaonova.com/missas/ (Santuário do Pai das
  Misericórdias, lido em 13/11/2026; o próprio site avisa que a grade é
  atualizada toda segunda-feira, por isso a observação da unidade manda
  conferir lá)

## Instagram (só o que as páginas oficiais linkam; nenhum perfil foi aberto)

dioceselorena (diocese), catedrallorena, paroquiacristoreilorena, pnsalorena,
pnsase_, pnsglorena, pnsflorena, paroquiasaopedrolorena, piccruzeiro,
paroquiasrss, par.santo.antoni.cp, paroquiadecunha, pdosremedios,
paroquiasaojoaobatistaqueluz, santuario.db.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/lore0 (anuário, 09/11/2026)
- https://catholic-hierarchy.org/diocese/dlore.html

## O que falta para o próximo estado desta pesquisa

- Horário das 14 unidades sem fonte, em especial as 6 paróquias de Lorena e
  as 4 de Cachoeira Paulista: o caminho mais provável são os perfis das
  paróquias no Instagram, que a busca não indexa por dentro.
- Piquete (Santo Antônio): avisar a diocese do copia-e-cola da Catedral na
  página, ou achar fonte própria da paróquia.
- Arapeí e Areias: separar o que é de cada uma (a página mistura as duas).
- Confirmar o endereço da matriz de São Pedro e São Paulo (Cruzeiro) e o de
  Arapeí, que as páginas não trazem.
