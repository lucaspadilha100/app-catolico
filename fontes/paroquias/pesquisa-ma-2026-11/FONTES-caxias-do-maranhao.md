# Diocese de Caxias do Maranhão (MA): fontes da pesquisa de 13/11/2026

Sé em Caxias; leste maranhense, divisa com Teresina (Timon). Bispo: Dom
Sebastião Lima Duarte. Cúria: Praça Magalhães de Almeida, 744, Centro,
Caxias, CEP 65606-060; chancelaria (99) 98828-0059,
diocesedecaxiaschancelaria@gmail.com; ASCOM (99) 98191-2139,
contato@diocesedecaxiasdomaranhao.org. Padroeira diocesana: N. S. da
Medalha Milagrosa (GCatholic). Site: https://diocesedecaxiasdomaranhao.org/
(não confundir com diocesedecaxias.org.br, que é Caxias do Sul).

## Resumo

- **32 unidades** em `saida/caxias-do-maranhao.json`: 1 catedral (N. S. dos
  Remédios), 30 paróquias e 1 santuário (Santuário Diocesano de São
  Francisco das Chagas, Alto do São Francisco, Caxias). Organização em 6
  zonais e 4 vicariatos episcopais: N. S. das Graças (zonal I), São Domingos
  (zonais II e III), São João Batista (zonal IV) e São José (zonais V e VI).
  Cidades: Caxias (7 com o santuário), Timon (5) e uma em cada um dos outros
  20 municípios (Senador Alexandre Costa e outras).
- **9 com horário de missa**, todos das páginas do site da diocese
  (confiança média, sem data): o santuário, Aldeias Altas, Governador
  Eugênio Barros, Governador Luís Rocha, Graça Aranha, Parnarama, São
  Francisco do Maranhão, São João dos Patos e São José (Timon). As outras 23
  entraram com `horarios: []` e confiança baixa: a página da paróquia mostra
  só o contato da cúria.
- **Comunidades com lugar** (bairro) entraram ligadas à paróquia: Colinas
  (17), Aldeias Altas (8), São Francisco do Maranhão (5), Governador Eugênio
  Barros (3), Governador Luís Rocha (1), São João dos Patos (Santa Luzia,
  Centro). Sem lugar ficaram no `nao_cabe` da matriz: Graça Aranha,
  Parnarama, São João dos Patos e São José (Timon).
- São João dos Patos tem missas no "Santuário de São Francisco de Assis"
  (quarta) e na "Igreja de São Francisco" (domingo 6h): tratados como a
  mesma igreja, de tipo `santuario`, sem endereço.
- Instagram só no santuário (`altodesaofrancisco`, citado na página dele).
  Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site (com filtro por zonal) e do "Mapa
da Diocese", que diz "32 paróquias". As 32 entradas incluem duas páginas
idênticas da Paróquia Divino Espírito Santo de Senador Alexandre Costa
(`paroquia-divino-espirito-santo` e `paroquia-divino-espirito-santo-`, uma
marcada Zonal II e outra Zonal IV na lista): entrou uma só. Ficam 31
paróquias (contando a catedral), o mesmo número do GCatholic ("31
parishes"). O santuário diocesano não está na lista de paróquias: entrou à
parte, como `santuario`.

Conferência contra o GCatholic (09/11/2026, 24 igrejas listadas): batem
todas. O GCatholic põe N. S. de Nazaré em "Trezidela" (bairro de Caxias) e
escreve "Paranarama"; lista em Matões uma igreja do Divino Espírito Santo à
parte (sem marca de paróquia). As 23 igrejas paroquiais dele batem; faltam
nele oito: N. S. do Perpétuo Socorro (Caxias), Graça Aranha, Governador Luís
Rocha, Jatobá, São João do Sóter, Sucupira do Riachão, São José (Timon) e
Santos Apóstolos Pedro e Paulo (Timon). 23 + 8 = 31.

Divergências de zonal entre a lista e a página da paróquia (ficou a
página): São Francisco do Maranhão (lista I, página V), São José de Timon
(lista V, página VI) e Menino Jesus de Praga (a página diz Zonal V no
campo e VI no rodapé; ficou VI). A página da
Catedral traz "Zonal I · Aldeias Altas/MA" no rodapé, erro do modelo da
página.

A Paróquia São José é de Timon (a página e a notícia "Paróquia São José
Celebra Festejo em Timon-MA", 17/03/2025), embora o e-mail tenha "caxias".

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedecaxiasdomaranhao.org/paroquias
- https://diocesedecaxiasdomaranhao.org/mapa (22 municípios, 32 paróquias,
  4 vicariatos)
- https://diocesedecaxiasdomaranhao.org/santuario (horários do santuário)
- https://diocesedecaxiasdomaranhao.org/noticias?cat=das-paroquias
- Uma página por paróquia, `https://diocesedecaxiasdomaranhao.org/paroquia/<nome>`,
  com município, zonal, vicariato, ano de fundação (algumas), comunidades,
  pároco, horários e contato; as URLs estão no campo `fontes`.

## Contatos deixados de fora

- O botão "Falar no WhatsApp" de todas as páginas leva ao número da
  chancelaria da cúria, não da paróquia: não entrou em paróquia nenhuma.
- O e-mail de Parnarama vem com cedilha ("graçasp@gmail.com"), endereço
  inválido.
- Telefones como publicados: Aldeias Altas "99 8819-3776" (8 dígitos depois
  do DDD) e Menino Jesus de Praga "9998470-9272".

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/caxi0.htm e
  https://gcatholic.org/churches/local/caxi0 (09/11/2026)
- https://www.cnbbne5.org/circunscricoes-eclesiasticas (a CNBB ainda dá a
  cúria com (99) 3521-1658 e dio.caxma@yahoo.com.br)

## O que falta para o próximo estado desta pesquisa

- Horários e contatos das 23 paróquias cujas páginas só mostram a cúria,
  entre elas a Catedral e as outras cinco paróquias urbanas de Caxias e
  quatro de Timon. As redes sociais não foram buscadas (o limite de buscas
  da pesquisa acabou).
- Endereço das matrizes sem endereço na página (a Catedral inclusive).
- Confissões no santuário: a página diz que há, sem hora.
