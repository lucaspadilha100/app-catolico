# Diocese de Jales (SP): fontes da pesquisa de 13/11/2026

Sé em Jales; extremo noroeste paulista, entre os rios Grande, Paraná, São
José dos Dourados e Tietê. Criada em 12/12/1959 (desmembrada de Rio Preto),
instalada em 15/08/1960; perdeu território para a nova Diocese de
Votuporanga em 20/07/2016 e é sufragânea de São José do Rio Preto desde
22/05/2025. Bispo: Dom José Reginaldo Andrietta. Cúria: Rua Vinte, 3036,
Centro, Jales, (17) 3632-1370, curia@diocesedejales.org.br.

## Resumo

- **55 unidades** em `saida/jales.json`: 1 catedral, 1 santuário (Santuário
  Diocesano da Santíssima Trindade, Jales), 30 paróquias e 23
  quase-paróquias, em 45 municípios e 6 setores (Jales, Fernandópolis,
  Ouroeste, Santa Fé/Palmeira, Pereira/Ilha, Auriflama/Salgado). Cidades com
  mais de uma: Fernandópolis (6, contando a de Brasitânia), Jales (5, com a
  Catedral e o Santuário), Santa Fé do Sul (2).
- **55 com horário de missa**: o site da diocese tem uma página por unidade
  com horários da matriz e das comunidades, endereço, telefone, e-mail e
  expediente; todas lidas em 13/11/2026 (pela API do WordPress, tipo
  `paroquias`, e pela página de cada uma). 47 com confiança alta, 8 média:
  - Santuário da Santíssima Trindade: a missa (sábado 18h15) vem da página
    da Catedral; o santuário não tem telefone publicado.
  - Mira Estrela e Mesópolis: páginas sem mudança desde 18/09/2023.
  - Santa Clara d'Oeste, Nova Canaã Paulista e Marinópolis: páginas sem
    mudança desde 11/06/2024.
  - São João Batista de Santa Fé do Sul: a página ainda lista comunidades
    que hoje aparecem na nova Paróquia Nossa Senhora de Fátima, com outros
    horários (ver abaixo).
  - São Francisco: a página se contradiz (texto e quadro de horários).
- Nenhuma página publica horário de confissão com hora (Sud Mennucci só
  diz "terças e quintas à tarde e sábados"); adoração com hora só em São
  João das Duas Pontes e Santana da Ponte Pensa.
- Capelas e comunidades entraram com nome e lugar como a página dá; as com
  horário, com os horários. 226 igrejas no total.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site (54 páginas, filtradas por setor)
e da API `https://diocesedejales.org.br/wp-json/wp/v2/paroquias?per_page=100`
(54 itens), mais o Santuário Diocesano, que tem página própria no menu
"Diocese".

Conferência contra o GCatholic (atualizado em 09/11/2026, 51 igrejas,
"29 parishes, 25 missions"):

- Faltam no GCatholic: Paróquia Nossa Senhora da Penha (Estrela d'Oeste,
  criada em 1942), Paróquia Santo Expedito (Jales, instalada em 04/12/2020),
  Paróquia Nossa Senhora de Fátima (Santa Fé do Sul) e Quase-Paróquia Senhor
  Bom Jesus (Turmalina). Entraram pelo site da diocese.
- Categoria: o GCatholic marca como paróquia Aspásia e São João das Duas
  Pontes, que o site chama de quase-paróquias; e deixa sem marca a de
  Pontalinda, que o site chama de paróquia. Seguimos o site.
- O Santuário da Santíssima Trindade é "Shrine" no GCatholic e tem página
  própria no site; entrou como `santuario`.
- Santo Antônio do Aracanguá, vizinha de Araçatuba, é de Jales pelas duas
  fontes.

Nenhuma cidade desta diocese aparece nos outros arquivos de `saida/`.

## Divergências e escolhas

- **Santa Fé do Sul**: a Paróquia Nossa Senhora de Fátima (matriz na Praça
  Bela Vista, página de 21/05/2025) foi desmembrada da São João Batista. A
  página da São João ainda lista a "Comunidade Bela Vista" (domingo 19h30,
  o mesmo horário da nova matriz) e as comunidades São José Operário,
  Sagrado Coração, Perpétuo Socorro e São Benedito com outros dias. Essas
  ficaram só na Nossa Senhora de Fátima; a São João ficou com as demais.
- **Prudêncio e Moraes** (distrito de General Salgado): a Comunidade São
  Benedito aparece nas páginas de Pontalinda e de São João de Iracema; ficou
  em São João de Iracema, que dá endereço e horário.
- **Mesópolis**: a missa de sábado às 20h aparece também na página de
  Populina (mesmo padre); ficou só na quase-paróquia de Mesópolis.
- **Brasitânia** (distrito de Fernandópolis): a Paróquia Senhor Bom Jesus
  tem página sem telefone; a missa (2º e 4º sábado, 20h) está nela e na
  página de São Pedro, mesmo padre.
- **São Francisco**: o texto diz missa no 2º e 4º sábado às 19h30 e
  celebração da Palavra no 1º e 3º domingo; o quadro de horários da mesma
  página diz 1ª sexta 19h30, domingo 19h e 2º e 4º sábado 19h, e cita
  comunidades em Fandango e Nova Itapirema (Nova Itapirema é distrito de
  Nhandeara, na Diocese de Votuporanga, o que sugere quadro copiado de
  outra página). Entrou só o sábado do texto; o resto ficou no `nao_cabe`.
- **Itapura**: a página repete o CNPJ da Catedral e usa telefone e e-mail
  da paróquia de Ilha Solteira (mesmo padre).
- Várias quase-paróquias usam o telefone e o e-mail da paróquia vizinha que
  as atende (Aspásia e Santa Salete com Urânia; Dirce Reis com Pontalinda;
  Pedranópolis com Meridiano; Suzanápolis com Pereira Barreto; São João de
  Iracema e Nova Castilho com General Salgado). Ficaram como publicados.
- Distritos e povoados entraram com a cidade da paróquia que os atende e o
  lugar em `localidade` (Brasitânia, Arabá, Dalas, Bandeirantes d'Oeste,
  Major Prado, Vicentinópolis, Prudêncio e Moraes, Nova Palmira, Fátima
  Paulista, Santa Izabel do Marinheiro, Dulcelina). Não conferimos no IBGE
  o município de cada um; São Luiz de Japiúba ficou com General Salgado, como
  a página da paróquia, e é o caso mais duvidoso (pode ser de Nova
  Castilho). Exceção: as comunidades rurais de Aspásia e Santa Salete
  listadas na página de Urânia ficaram com a cidade que a página dá.
- Horário de missa que a página dá como "nos bairros", "nas casas", "todo
  dia 19" ou "no CCI" foi para o `nao_cabe`.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedejales.org.br/paroquias/ (lista oficial, por setor)
- https://diocesedejales.org.br/wp-json/wp/v2/paroquias?per_page=100
- Uma página por unidade, `https://diocesedejales.org.br/paroquias/<slug>/`
  (as URLs estão no campo `fontes` de cada item). Os e-mails vêm cifrados
  pelo Cloudflare (`data-cfemail`) e foram decodificados.
- https://diocesedejales.org.br/santuario-diocesano/ (endereço do
  santuário, Rua Roma, 3371)
- https://diocesedejales.org.br/curia-diocesana/ (cúria)
- https://diocesedejales.org.br/historia/ (datas da diocese)

## Instagram (só os ligados nas próprias páginas da diocese)

santo.antonio_jales, paroquiasantoexpeditojales, paroquiansaparecidapontalinda,
quase_paroquia_dircereis, paroquiansradapenha, saofranciscosantaalbertina,
paroquia.saoluizgonzaga, paroquianossasradefatima.sfs. Nenhum perfil foi
aberto por dentro. As demais páginas têm os ícones de rede social sem link.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/jale0.htm e
  https://gcatholic.org/churches/local/jale0 (09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Confissões: nenhuma página dá hora.
- Telefone de Brasitânia, Mesópolis, Vitória Brasil, São João de Iracema,
  Nova Castilho e Nossa Senhora de Fátima de Santa Fé do Sul (páginas sem
  telefone).
- Reconferir as páginas antigas (Mira Estrela, Mesópolis, Santa Clara
  d'Oeste, Nova Canaã Paulista, Marinópolis) e o quadro contraditório de São
  Francisco.
- Endereço da matriz de Rubinéia (campo vazio na página).
