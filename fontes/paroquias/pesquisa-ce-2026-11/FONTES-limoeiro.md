# Diocese de Limoeiro do Norte (CE): fontes da pesquisa de 13/11/2026

Sé em Limoeiro do Norte; vale do Jaguaribe, do sertão ao litoral (Aracati,
Icapuí, Fortim). Bispo: Dom André Vital Félix da Silva, SCI. Cúria: Rua
Professor Ricart, 650-A, Centro, Limoeiro do Norte, (88) 3423-1171,
dioceselimoeirodonorte@gmail.com.

## Resumo

- **28 unidades pastorais** em `saida/limoeiro.json`: 1 catedral, 26
  paróquias e 1 área pastoral, em 21 municípios (a própria diocese diz
  "28 paróquias, 21 municípios, 6 zonais pastorais" na página de paróquias).
  Majorlândia é distrito de Aracati; Lagoinha, de Quixeré; Roldão, de Morada
  Nova; Flores, de Russas; Feiticeiro, de Jaguaribe; com isso a conta dos 21
  municípios fecha.
- **2 com horário**: São João Batista (São João do Jaguaribe), a única
  página do site da diocese com a tabela "Horários de Missa" (confiança
  alta), e Divino Espírito Santo (Limoeiro do Norte, Cidade Alta), pela bio
  do Instagram no trecho que a busca mostra (confiança média).
- **26 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. O site da diocese dá
  de todas o pároco, o endereço, o telefone e o e-mail da secretaria, mas
  não os horários de missa.
- Todo `id_banco` é null: o banco ainda não tem nada do Ceará.

## Lista das unidades

A lista vem inteira do site novo da diocese (no ar desde 2026), página
/paroquias/ e as 28 páginas de paróquia, que o WordPress expõe também em
/wp-json/wp/v2/paroquia (28 itens; o conteúdo útil só está no HTML de cada
página). Endereço, secretaria, telefone e e-mail de cada unidade saíram da
página da própria paróquia.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026, 27
igrejas): o anuário não traz a Paróquia de São José (Lagoinha, Quixeré) nem
a Área Pastoral Santa Cruz (Jaguaribe); traz a mais o Santuário de Nossa
Senhora da Saúde, no distrito de Olho d'Água da Bica (Tabuleiro do Norte),
que não é unidade pastoral e entrou no JSON como igreja (tipo santuário) da
Paróquia de Nossa Senhora das Brotas, a única da cidade. Zonais no anuário:
Banabuiú, Castanhão, Figueiredo, Praia, Vale e Várzea.

Divergência pequena: em Jaguaretama a diocese diz "Nossa Senhora da
Conceição" e o anuário "Imaculada Conceição"; o JSON segue a diocese.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedelimoeirodonorte.org/ (home)
- https://diocesedelimoeirodonorte.org/paroquias/ (a lista oficial, com os párocos)
- https://diocesedelimoeirodonorte.org/contato/ (cúria, setores, congregações)
- https://diocesedelimoeirodonorte.org/paroquia/paroquia-sao-joao-batista/
  (a única com horários de missa: matriz, quinta 19h, domingo 7h e 19h)
- As outras 27 páginas /paroquia/<slug>/ (só contatos), por exemplo:
  - https://diocesedelimoeirodonorte.org/paroquia/paroquia-imaculada-conceicao-catedral/
  - https://diocesedelimoeirodonorte.org/paroquia/paroquia-nossa-senhora-do-rosario-2/ (Russas)
  - https://diocesedelimoeirodonorte.org/paroquia/area-pastoral-santa-cruz/

## Instagram (só o trecho que a busca mostra, em 13/11/2026)

Perfis não se leem por dentro (bloqueio de robôs); ficou anotado o que o
trecho da busca trouxe.

- diocesedelimoeiro (diocese)
- paroquiaimaculadalimoeiro (catedral; bio dá o (88) 3423-3047 como WhatsApp
  da secretaria)
- paroquiadivinolimoeirodonorte (Divino Espírito Santo, Cidade Alta; bio:
  "Santa Missa (Matriz) aos Domingos 19h" e o pároco)
- paroquiansdascandeias (Jaguaribe; bio: ereção canônica em 30/11/1863)
- psjlagoinhaquixere (São José, Lagoinha, Quixeré)

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/limo0 (anuário, atualizado em 09/11/2026)
- https://catholic-hierarchy.org/diocese/dlidn.html
- https://en.wikipedia.org/wiki/Diocese_of_Limoeiro_do_Norte

## O que falta para o próximo estado desta pesquisa

- Horário das 26 unidades sem fonte: o caminho mais provável são os perfis
  das paróquias no Instagram e no Facebook, que a busca não indexa por
  dentro; só catedral, Candeias e São José (Lagoinha) tiveram perfil achado.
- Confissão e adoração de todas as unidades (nenhuma fonte as publica).
- O site antigo www.diocesedelimoeiro.org, que o catholic-hierarchy ainda
  aponta, não resolve mais; o atual é diocesedelimoeirodonorte.org.
- A diocese anunciou site novo lançado na Assembleia Diocesana de 2026:
  vale reler as páginas de paróquia de tempos em tempos, porque a tabela de
  horários (hoje só em São João do Jaguaribe) deve ir aparecendo nas outras.
