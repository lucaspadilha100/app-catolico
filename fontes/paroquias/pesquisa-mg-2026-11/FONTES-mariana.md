# Arquidiocese de Mariana (MG): fontes da pesquisa de 13/11/2026

Sé metropolitana em Mariana (Catedral Basílica de Nossa Senhora da
Assunção); sufragâneas: Caratinga, Governador Valadares e Itabira-Coronel
Fabriciano. Arcebispo: Dom Airton José dos Santos. Cúria (Catholic-Hierarchy):
Arcebispado, Rua Direita, 102, Mariana, (31) 3557-1237. Site oficial:
https://arqmariana.com.br.

## Resumo

- **131 unidades** em `saida/mariana.json`: 1 catedral, 3 basílicas
  paroquiais (Pilar de Ouro Preto, São José Operário de Barbacena, Sagrado
  Coração de Jesus de Conselheiro Lafaiete) e 127 paróquias, em 82 municípios
  (90 sedes contando os distritos). Mais de uma: Barbacena (13, contando Correia de Almeida e
  Senhora das Dores), Conselheiro Lafaiete (9), Ouro Preto (8, contando
  Amarantina), Mariana (8, contando cinco distritos), Ouro Branco (4),
  Viçosa (4).
- **Nenhuma com horário**: todas com `"horarios": []`, contatos vazios e
  confiança baixa.
- **Por quê**: o site da arquidiocese (arqmariana.com.br, na Vercel)
  responde 403 com `x-vercel-mitigated: deny` a toda página, inclusive
  robots.txt e sitemap.xml, para o acesso desta sessão. É bloqueio da
  plataforma a acesso automatizado; não foi contornado. O site da CNBB Leste 2
  (cnbbleste2.org) também respondeu 403. Sem busca na web nesta sessão, não
  houve como achar os sites ou perfis próprios das paróquias.
- A lista vem só do GCatholic; por isso também não há forania/região na
  observação (o site da arquidiocese é a fonte disso).

## Lista das unidades

Fonte: https://gcatholic.org/churches/local/mari0 (anuário, atualizado em
09/11/2026, 152 igrejas). Entraram as 131 marcadas como paróquia ou
catedral. Cada item aponta a página da igreja no GCatholic
(`https://gcatholic.org/churches/brazil/<id>`), que só dá cidade e
coordenada.

Contagem: o próprio GCatholic dá, na estatística de 31/12/2022, **136
paróquias e 2 missões**; a Wikipédia cita 132 paróquias em 79 municípios.
Faltam, portanto, de 1 a 5 paróquias que o GCatholic não marca; só o site
da arquidiocese resolve isso.

Ajustes feitos sobre o GCatholic:

- Distritos postos no município: Amarantina (Ouro Preto); Cachoeira do
  Brumado, Cláudio Manuel, Furquim, Monsenhor Horta e Passagem de Mariana
  (Mariana); Correia de Almeida e Senhora das Dores (Barbacena); Granada
  (Abre Campo). O distrito ficou em `localidade`. Joselândia ficou como
  está (município não conferido).
- "Nossa Senhora de Loudes (Paróquia Cristo Rei)", Ouro Preto: entrou como
  Paróquia Cristo Rei, matriz N. S. de Lourdes.
- "Nossa Senhora Conceição", Conselheiro Lafaiete: N. S. da Conceição.
- Matrizes santuário (GCatholic): N. S. da Saúde (Dom Silvério), N. S. da
  Conceição (Ouro Preto), São Judas Tadeu (Conselheiro Lafaiete).

Divergências a conferir:

- O GCatholic põe uma Paróquia São Domingos de Gusmão em **Santa
  Margarida**; a cidade de Santa Margarida é sede de paróquia da Diocese de
  Caratinga (Santa Margarida de Antioquia). Entrou como está, com a dúvida
  na observação.
- **Raul Soares** tem a Paróquia São Sebastião aqui e o distrito de
  Vermelho Velho na Diocese de Caratinga (Paróquia São Francisco de Assis).

Igrejas do GCatholic sem marca de paróquia (fora do JSON, sem paróquia
indicada pela fonte; pendência): Basílica do Senhor Bom Jesus de Congonhas
(santuário, patrimônio mundial), Menino Jesus de Praga e N. S. do Rosário
dos Pretos (Congonhas); Santuário de N. S. das Graças (Catas Altas da
Noruega); N. S. das Dores e N. S. do Perpétuo Socorro (Barão de Cocais);
São Sebastião (Grota); em Mariana, N. S. da Boa Morte, N. S. das Mercês,
N. S. do Carmo, N. S. do Rosário dos Pretos, Santo Antônio, São Francisco de
Assis, São Pedro dos Clérigos e o Seminário São José; São Francisco de Assis
(Ouro Preto); N. S. da Assunção (Piranga); N. S. das Graças e São Vicente
(Santa Bárbara); N. S. do Rosário e Sagrado Coração de Jesus (Santa Bárbara
do Tugúrio).

## Conferência (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/mari0 (estatística, site oficial)
- https://www.catholic-hierarchy.org/diocese/dmari.html (endereço e
  telefone da cúria)
- https://pt.wikipedia.org/wiki/Arquidiocese_de_Mariana (contagem de 132
  paróquias e 79 municípios, citando o site da arquidiocese)

## O que falta para o próximo estado desta pesquisa

- Tudo o que vem do site da arquidiocese: lista oficial por forania,
  endereço, telefone, e-mail, Instagram e horários de cada paróquia. Vale
  tentar de outra rede (o bloqueio é da Vercel para este ambiente) ou pedir
  à arquidiocese o guia geral (o antigo `site_2019/guia-geral.html`).
- As paróquias que o GCatholic não marca (136 na estatística, 131 na
  lista).
- A paróquia de cada igreja histórica de Mariana, Ouro Preto e Congonhas
  listada acima.
