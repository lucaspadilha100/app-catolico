# Administração Apostólica Pessoal São João Maria Vianney (RJ): fontes da pesquisa de 13/11/2026

Circunscrição pessoal (não territorial), criada em 18/01/2002, sujeita
direto à Santa Sé, com sede em Campos dos Goytacazes. Celebra no rito
romano tradicional (forma extraordinária, Missal de 1962). Administrador
apostólico: Dom Fernando Arêas Rifan. Cúria: Rua Dom Licínio Rangel, 169,
Parque Riachuelo, Campos dos Goytacazes, (22) 2723-8417 (GCatholic).
Não se mistura com a Diocese de Campos (ver `FONTES-campos.md`), embora as
igrejas fiquem no mesmo território.

## Resumo

- **16 unidades** em `saida/sao-joao-maria-vianney.json`: 12 paróquias, 1
  quase-paróquia (São Judas Tadeu e Santa Clara, distrito de Santa Clara,
  Porciúncula) e 3 reitorias em Campos (N. S. Aparecida, N. S. do Carmo e
  São José), que entraram como `area_pastoral` porque o formato não tem
  reitoria. Cidades: Campos dos Goytacazes (7), e uma ou duas em Bom Jesus
  do Itabapoana, Itaperuna, Natividade, Porciúncula (2), Santo Antônio de
  Pádua, São Fidélis, São João da Barra e Varre-Sai.
- **Nenhuma com horário.** Todas entraram com `"horarios": []`, confiança
  baixa e a observação de que a missa é no rito romano tradicional. O site
  oficial (adapostolica.org, com as páginas "Paróquias" e "Atualização das
  Paróquias") fica atrás de um bloqueio de robôs do Cloudflare: o curl recebe
  403 e o WebFetch não resolve o nome. Só se viu, pela busca, o trecho da
  página "Paróquias" com o endereço e o telefax da Igreja Principal e de
  algumas paróquias, sem horários. As listas de terceiros com horários
  (missatridentina.com.br, blogs) não foram usadas: não são da
  Administração nem da paróquia.
- A Administração não publica divisão em setores ou foranias; a observação
  de cada item diz isso.
- Todo `id_banco` é null.

## Lista das unidades

A Wikipédia (verbete da Administração, que cita a carta pastoral) dá 12
paróquias, 1 quase-paróquia e 4 reitorias, e uma tabela com os nomes. O
GCatholic (09/11/2026) lista 16 igrejas, uma por unidade, com endereço e
telefone. As duas listas batem, com uma divergência:

- **Varre-Sai**: a Wikipédia põe ali uma "Reitoria de Nossa Senhora do
  Carmo" (o mesmo nome da reitoria de Campos) e só 11 paróquias na tabela;
  o GCatholic e o trecho da página "Paróquias" da Administração visto pela
  busca dão a Paróquia de Nossa Senhora das Graças e São Sebastião, Rua
  Luis Amitti, s/n. Seguimos o GCatholic e a Administração: com ela as
  paróquias fecham em 12 e as reitorias ficam em 3.

Endereços e telefones vêm do GCatholic (que reproduz os dados da
Administração). Exceção: o telefax da Igreja Principal, (22) 2732-9480, é o
da página "Paróquias" da Administração (trecho da busca); o GCatholic dá
(22) 2732-6852, anotado na observação. O telefone da Conceição de Ururaí,
(22) 9968-2820, foi copiado como publicado, sem acrescentar o 9.

Bairros só onde a fonte diz: Parque Leopoldina (Igreja Principal), Ururaí
(Conceição) e Guarus (São Geraldo Magela), estes dois pela Wikipédia.

## Páginas lidas (13/11/2026)

- https://pt.wikipedia.org/wiki/Administra%C3%A7%C3%A3o_Apost%C3%B3lica_Pessoal_S%C3%A3o_Jo%C3%A3o_Maria_Vianney
  (lista das paróquias, quase-paróquia e reitorias, com o número de
  comunidades de cada uma)
- https://gcatholic.org/churches/local/zjoa3 e as páginas de cada igreja
  (https://gcatholic.org/churches/brazil/4059, 24413 a 24427), atualizadas
  em 09/11/2026
- https://gcatholic.org/dioceses/diocese/zjoa3.htm (cúria e site oficial)
- https://adapostolica.org/paroquias/ (só pelo trecho da busca; o site não
  abre daqui)

## Instagram

Nenhum perfil institucional apareceu nas fontes usadas.

## Pendências

- As capelas e comunidades: a Wikipédia conta 115 templos e dá o número de
  comunidades de cada paróquia (por exemplo, 24 em São Fidélis, 20 em Bom
  Jesus do Itabapoana, 15 em Santo Antônio de Pádua), sem os nomes. A
  página "Atualização das Paróquias" do site oficial lista as capelas de
  cada paróquia, mas não foi possível lê-la.
- As comunidades atendidas fora do território (Rio de Janeiro, Niterói,
  Nova Iguaçu, Nova Friburgo, São Paulo, Belo Horizonte, Vitória e outras)
  não são unidades da Administração e ficaram fora.
- Horários de todas as unidades: precisam do site oficial liberado (o host
  adapostolica.org passa por um desafio do Cloudflare) ou de contato com as
  secretarias.
- Bairros das demais igrejas de Campos e endereços a reconferir quando o
  site oficial puder ser lido.
