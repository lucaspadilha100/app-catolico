# Diocese de Paranaguá (PR): fontes da pesquisa de 13/11/2026

Sé em Paranaguá; todo o litoral do Paraná e a serra do Vale do Ribeira
(13 municípios). Bispo: Dom Paulo Alves Romão (desde 20/08/2025, segundo o
GCatholic). Padroeira diocesana: Nossa Senhora do Rosário. Site:
https://diocesedeparanagua.org.br (WordPress, API aberta).

## Resumo

- **26 unidades** em `saida/paranagua.json`: 1 catedral, 22 paróquias
  (3 delas com a matriz santuário: Fátima em Campina Grande do Sul, Pilar em
  Antonina e São José em Praia de Leste), 1 quase-paróquia, 1 área pastoral e
  2 santuários não territoriais (Nossa Senhora do Rocio e São Francisco das
  Chagas, ambos em Paranaguá), em 4 regiões pastorais: Serra (9), Litoral (6),
  Marumbi (3) e Paranaguá (8).
- **25 com horário de missa** (23 com confiança alta, 2 média). A diocese
  mantém uma página por unidade com pároco, telefone, e-mail, Instagram,
  endereço e "Horário das Santas Missas", quase todas revisadas em 2026.
- Sem horário: Paróquia Nossa Senhora do Perpétuo Socorro (Adrianópolis), cuja
  página diz "Sem informação". A Paróquia São Francisco de Assis (Tunas do
  Paraná) só tem horários das 11 comunidades; a matriz ficou sem.
- Confiança média: Santo Antônio (Bocaiúva do Sul), porque a lista mistura
  "segunda a sexta 06h30", "terça a sexta 06h30 e 18h" e "quarta 09h e 19h"
  (lida como publicada, dúvida no `nao_cabe`); e Tunas do Paraná, pela matriz
  sem horário.
- Comunidades e capelas entraram quando a página dá o horário delas; a maioria
  sem bairro (localidade vazia), porque a página só dá o nome. As duas
  comunidades da Ilha do Mel (Encantadas e Nova Brasília), atendidas pela
  Paróquia São Pedro e São Paulo de Pontal do Paraná, ficaram com cidade
  Paranaguá (a ilha é do município de Paranaguá).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site
(https://diocesedeparanagua.org.br/paroquias/, revisada em 29/09/2026),
organizada por região pastoral, batida com as 26 páginas de unidade. O texto
da própria página diz: "vinte e duas paróquias, duzentas e vinte e oito
comunidades ... uma área pastoral, dois santuários não territoriais e dois
seminários". A quase-paróquia São Sebastião e Nossa Senhora Desatadora dos Nós
(Cerro Azul) é mais nova que esse texto (página de 28/09/2026). Conta: 22 + 1
+ 1 + 2 = 26.

Conferência contra o GCatholic (atualizado em 09/11/2026, 28 igrejas):

- Bate em tudo, salvo a quase-paróquia, que o GCatholic ainda não tem.
- O GCatholic marca o Santuário do Rocio como "Parish, Shrine"; a diocese o
  conta entre os santuários não territoriais. Seguimos a diocese
  (`categoria` santuario).
- O GCatholic chama a Paróquia Santuário São José de "Paróquia São José e São
  Sebastião" (nome que ainda está no e-mail e no endereço da página).
- Ficaram fora, por não serem unidade pastoral: Seminário Senhora do Rocio
  (Campina Grande do Sul), Igreja Nossa Senhora Aparecida (Paranaguá) e Igreja
  Nossa Senhora de Fátima (Jardim Alvorada), estas duas tratadas como
  comunidades da Paróquia Nossa Senhora da Paz.
- O GCatholic dá ao Pilar (Antonina) e ao Rocio o selo de santuário, como a
  diocese.

## Páginas do site da diocese (lidas em 13/11/2026)

A data de cada fonte no JSON é a da última revisão da página no WordPress
(campo `modified` da API `wp-json/wp/v2/posts?categories=7`): quase todas
18/04/2026; Bom Jesus dos Perdões 09/06/2026; São João Batista (Paranaguá)
28/07/2026; Santuário São José 08/09/2026; quase-paróquia e Pilar
05/11/2026; São Francisco das Chagas 10/11/2026.

- https://diocesedeparanagua.org.br/paroquias/ (lista por região)
- https://diocesedeparanagua.org.br/wp-json/wp/v2/posts?categories=7 (as 26
  páginas de unidade, com datas)
- Uma página por unidade; as URLs estão no campo `fontes` de cada item.
  Exemplos: /18-paroquia-nossa-senhora-do-rosario/ (Catedral),
  /20-santuario-estadual-nossa-sra-do-rocio/,
  /6-seminario-diocesano-senhora-do-rocio-e-reitoria-nossa-senhora-da-saude/
  (Área Pastoral Nossa Senhora da Saúde).

Atenção: o link da lista para a unidade 1 (Perpétuo Socorro de Adrianópolis)
é https://diocesedeparanagua.org.br/paranagua/.

## Contatos

Telefone, e-mail e Instagram vêm das páginas de cada unidade. Onde a página
dá um celular como "Telefone" da unidade (Área Pastoral da Saúde, quase-
paróquia, Pontal do Sul, Praia de Leste, Morretes, Antonina, Guaraqueçaba),
ele entrou no campo telefone, por ser o número publicado para a unidade e não
o de um padre. Segundos telefones ficaram na observação.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/para5.htm e
  https://gcatholic.org/churches/local/para5 (anuário, 09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Horários da Paróquia Nossa Senhora do Perpétuo Socorro (Adrianópolis):
  Instagram perpetuo_socorro_adp, Facebook perpetuosocorroadp.
- Horários da matriz de São Francisco de Assis (Tunas do Paraná): Instagram
  paroquia_s.f.a.
- Bocaiúva do Sul: confirmar se a quarta-feira tem missa às 18h além das 09h
  e 19h.
- Bairro das comunidades (a diocese só dá o nome) e as comunidades sem
  horário das 228 que a diocese conta.
- Matinhos: comunidades Albatroz, Perequê, Riviera e Cohapar II, com missa
  "conforme calendário mensal".
- Confissões e adoração: nenhuma página publica.
