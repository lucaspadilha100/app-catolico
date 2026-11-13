# Arquidiocese de São Salvador da Bahia (BA): fontes da pesquisa de 13/11/2026

Sé primacial do Brasil, em Salvador. Arcebispo: Cardeal Dom Sergio da Rocha.
Cúria Metropolitana Bom Pastor: Av. Leovigildo Filgueiras, 270, Garcia,
Salvador, (71) 4009-6666. Cinco municípios: Salvador, Lauro de Freitas,
Itaparica, Vera Cruz e Salinas da Margarida. 12 foranias: 1, 2A, 2B, 3, 4,
5, 6, 7A, 7B, 8, 9 e 10.

## Resumo

- **102 unidades** em `saida/salvador.json`: 1 catedral (Catedral Basílica
  do Santíssimo Salvador, paróquia Transfiguração do Senhor), 2 basílicas
  (Conceição da Praia e Senhor do Bonfim), 2 santuários com território de
  paróquia (Cristo Rei e São Judas Tadeu; Nossa Senhora da Conceição
  Aparecida, Imbuí) e 97 paróquias. Cidades: Salvador 92, Lauro de Freitas 6,
  Vera Cruz 2 (Mar Grande/Duro e Jiribatuba), Itaparica 1, Salinas da
  Margarida 1.
- **6 com horário de missa** (2 alta, 4 média); **96 sem horário**, com
  `"horarios": []` e confiança baixa, listadas em `SEM-HORARIO-salvador.txt`.
- 503 igrejas além das matrizes (comunidades, capelas, santuários), todas
  tiradas das páginas de cada paróquia no site da arquidiocese ("Comunidades
  Eclesiais", com o bairro) ou dos sites das próprias paróquias. Comunidades
  sem bairro na fonte ficaram no `nao_cabe` da matriz.
- Todo `id_banco` é null: o banco ainda não tem nada da Bahia.
- Busca na web indisponível nesta sessão: tudo foi lido com curl.

## A lista das unidades

A lista oficial é a notícia "Você sabe o que é e quais são as paróquias que
formam cada Forania?" (22/10/2025), com as 102 paróquias por forania:
https://arquidiocesesalvador.org.br/voce-sabe-o-que-e-e-quais-sao-as-paroquias-que-formam-cada-forania/
Bate com a contagem que a própria arquidiocese publica em notícias de 2024 a
março de 2026 ("102 paróquias") e com "12 foranias". A forania de cada unidade
está na `observacao`.

A página "Paróquias" do site (https://arquidiocesesalvador.org.br/paroquias/,
sistema Parresia) está quebrada: devolve "Nenhum registro foi encontrado" para
qualquer busca, e a API (`/wp-json/wp-parresia-dashboard/register/*`) pede
login. As páginas individuais, porém, respondem em
`https://arquidiocesesalvador.org.br/paroquia/<slug>/`. Os endereços foram
achados testando o nome da paróquia (e o bairro, nos nomes repetidos, como
"paroquia-sao-bras-plataforma"): 94 das 102 têm página. As 8 sem página
(nenhuma variação de endereço respondeu) entraram com dados de notícias do
próprio site:

- Catedral Basílica do Santíssimo Salvador, Basílica Santuário Nossa Senhora
  da Conceição da Praia e Basílica Santuário Senhor Bom Jesus do Bonfim:
  endereço, telefone, WhatsApp e e-mail da lista de igrejas jubilares de 2025
  (https://arquidiocesesalvador.org.br/orientacoes-como-receber-as-indulgencias-durante-o-jubileu-ordinario-do-ano-2025-jubileu-da-esperanca-na-arquidiocese-de-sao-salvador-da-bahia/).
  A mesma lista dá os contatos do Santuário Arquidiocesano Santa Dulce dos
  Pobres (Largo de Roma), que não é paróquia: entrou como igreja `santuario`
  da Paróquia N. S. da Boa Viagem, que o cita no seu território.
- Ascensão do Senhor (CAB), Ceia do Senhor e Santo André Apóstolo (Cabula VI),
  Conversão de São Paulo (Fazenda Grande do Retiro), Santa Teresa d'Ávila
  (Luís Anselmo) e Jesus Bom Pastor (Vida Nova, Lauro de Freitas): endereço
  de notícias do site (URLs no campo `fontes`).

Conferência contra o GCatholic (https://gcatholic.org/dioceses/diocese/zsal0.htm
e https://gcatholic.org/churches/local/zsal0, atualizado em 09/11/2026: 101
paróquias nas estatísticas de 2022, 118 igrejas). As 101 do GCatholic casam
com a lista da arquidiocese, com estas diferenças de nome (o GCatholic dá o
titular da igreja matriz, não o da paróquia):

- GCatholic "Ressureição do Senhor" (7A) = Paróquia São Gonçalo do Retiro
  (matriz Ressurreição do Senhor).
- GCatholic "São Francisco de Assis" (6, perto de Itapuã) = Paróquia Sagrada
  Família, Nova Brasília de Itapuã (matriz São Francisco de Assis).
- GCatholic "Santo Antônio" (7B) = provavelmente Paróquia São Daniel Comboni
  (Sussuarana), que tem comunidade Santo Antônio; a posição no mapa bate.
- GCatholic "São José" (7B) = provavelmente Paróquia N. S. do Carmo (Sete de
  Abril), que tem a Igreja São José no bairro; a posição no mapa bate.
- GCatholic "Nossa Senhora Aparecida e Santa Catarina de Sena" = Paróquia
  Nossa Senhora Aparecida (Itinga, Lauro de Freitas).
- Paróquia Jesus Bom Pastor (Lauro de Freitas, recente) não está no GCatholic.

Igrejas do GCatholic que não são paróquia (Misericórdia, N. S. da Ajuda, da
Palma, Rosário dos Pretos, São Francisco, São Domingos, Ordem Terceira, São
Pedro dos Clérigos, Mosteiro de São Bento, Santuário Santa Dulce etc.) não
viraram unidade; as que aparecem nas páginas das paróquias entraram como
igreja da paróquia.

## Horários: de onde vieram

O site da arquidiocese quase não publica horário. Só uma página de paróquia
traz a grade de missas; as outras dão expediente da secretaria e comunidades.
Os 6 com horário:

- **Nossa Senhora da Assunção** (Itaigara), alta: página da paróquia no site
  da arquidiocese.
- **Ressurreição do Senhor** (Ondina), alta: página "Celebrações" do site da
  paróquia, https://www.paroquiadeondina.com.br/missas (site publicado em
  novembro de 2026), com matriz, os santuários de São Lázaro e São Roque e de
  N. S. Educadora e quatro comunidades.
- **Nossa Senhora das Candeias** (Pituaçu), média:
  https://nossasenhoracandeias.com.br/ (sem data; menções até 2024).
- **Nossa Senhora da Luz** (Pituba), média: https://www.pnsluz.org.br/ (o
  site avisa que está em reforma). Domingo, sábado e confissões estão claros;
  as linhas "Missa com Crianças QUI" e "Adoração ao Santíssimo SEG A SEX" não
  deixam claro a que dia vai cada horário e ficaram no `nao_cabe`.
- **Divino Espírito Santo** (Vale dos Lagos), média: página Comunidades de
  https://pdesvl.com.br/pdes/index.php?pag=comunidades (sem data; texto
  posterior a dezembro de 2019). Onde a fonte diz "Missa ou Celebração", o
  horário foi para o `nao_cabe`.
- **Santíssimo Sacramento e Sant'Ana** (Nazaré), média:
  https://www.salvesantana.org.br/missas--horaacuterios.html (o jornal do
  site vai só até abril de 2021).

Fontes vistas e NÃO usadas para horário:

- Blog da Paróquia Jesus de Nazaré (anunciaijesusdenazare.blogspot.com):
  traz horários, mas a última postagem é de 2010.
- Blog da Paróquia São João Batista (psjbssa.blogspot.com): última postagem
  de 2015, só o expediente.
- Notícias de Natal, Cinzas, Corpus Christi e Finados (2021 a 2026): horários
  de um dia de festa, não a grade regular.
- Notícia de 20/03/2020 com as transmissões das paróquias na pandemia:
  horários de transmissão, não de missa com povo. Serviu para os perfis
  oficiais de Instagram e Facebook.

## Contatos

- Telefone, e-mail, endereço, data de criação e comunidades: página de cada
  paróquia no site da arquidiocese (e-mail decodificado do `data-cfemail`).
  O e-mail publicado na página da Paróquia N. S. da Conceição (Tororó) é
  pessoal do pároco e ficou fora.
- Instagram: o da página da paróquia quando existe (paroquiansn,
  santoantonioalemdocarmo, paroquiacosmedamiao, psssacramento,
  pfassisbocadorio); senão o da notícia de 2020 (perfis de padres ficaram
  fora). A página da Paróquia São Jorge cita "paroquiasãojorge23", com acento,
  que não é usuário válido: campo vazio.
- Sites citados pela arquidiocese que não responderam em 13/11/2026 (o proxy
  desta sessão não abre http simples, então podem estar só sem https):
  paroquiadavitoria.org.br, nossasenhoradoresgate.com.br,
  paroquiadosalagados.org, igrejadesantana.org.br,
  paroquiasantoamarodeipitanga.com, psaportao.com.br,
  paroquiadesaocaetano.com.br, paroquiasaotiago.org, bomjesusdosmilagres.com,
  pnsdocarmo.org (Salinas), senhordobonfim.org.br (citado pelo GCatholic).
  Ficaram no campo `site` (menos o do Bonfim), para conferir na próxima rodada.
  paroquiadesaopedro.org virou domínio estacionado e ficou fora.
  www.a12salvador.com.br (Santuário de Aparecida) só redireciona para uma
  página em http que não abriu daqui.

## O que falta para o próximo estado desta pesquisa

- Horário de 96 unidades, inclusive a Catedral, a Conceição da Praia e o
  Bonfim. A rodada com busca na web deve começar pelos perfis listados em
  `SEM-HORARIO-salvador.txt` e pelos sites que não responderam.
- Rever a Paróquia N. S. da Luz (dias das missas de quinta e da adoração) e o
  Santíssimo Sacramento e Sant'Ana (site de 2021).
- Confirmar o endereço completo do Bonfim e o telefone da Ascensão do Senhor
  (de notícia de 2020).
- Comunidades citadas sem bairro (Periperi, Guadalupe, Alto do Cabrito,
  Fazenda Coutos, entre outras) ficaram no `nao_cabe` das matrizes.
- Quando a página "Paróquias" do site voltar a listar, conferir os endereços
  das 8 unidades sem página.
