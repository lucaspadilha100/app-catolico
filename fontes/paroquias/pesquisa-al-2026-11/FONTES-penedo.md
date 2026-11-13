# Diocese de Penedo (AL): fontes da pesquisa de 13/11/2026

Sé em Penedo; sul de Alagoas e baixo São Francisco, com concatedral em
Arapiraca. Bispo: Dom Valdemir Ferreira dos Santos (posse em 15/10/2021).
Cúria: Rua Siqueira Campos, 187, Centro, Penedo, (82) 3551-2227,
(82) 99324-7944 (WhatsApp), economato.curia33@gmail.com.

## Resumo

- **62 unidades pastorais** em `saida/penedo.json`: 1 catedral (Penedo),
  1 concatedral (Arapiraca, entrou com categoria `catedral` e a nota na
  observação), 57 paróquias e 3 áreas pastorais (Roteiro, distrito de
  Piranhas em Traipu e Olho d'Água Grande), em 7 vicariatos (Penedo,
  Arapiraca, São Miguel dos Campos, Traipu, Anadia, Limoeiro de Anadia e
  Junqueiro). Bem mais que as ~35 esperadas: a diocese criou 15 ou mais
  paróquias novas entre 2016 e 2023, quase todas em Arapiraca e no
  vicariato de Junqueiro.
- **1 com horário** (confiança média): Nossa Senhora da Assunção, em
  Pindorama (Coruripe), pela bio do Instagram vista no trecho da busca
  (quinta 18h; domingo 9h30 e 19h30).
- **61 sem horário** (confiança baixa): a regra do dono manda entrar mesmo
  assim, com `horarios: []` e o porquê na observação. O site da diocese
  lista endereço, telefone e e-mail de cada paróquia, mas nenhum horário;
  as bios de Instagram que a busca mostrou também não trazem.
- Todo `id_banco` é null: o banco ainda não tem nada de Alagoas.
- Nenhuma unidade fora de Alagoas (sem campo `uf`).
- Capela e comunidade: nenhuma fonte as lista com clareza (nome + lugar),
  então cada unidade entrou só com a matriz.

## Lista das unidades

A lista vem inteira da página de paróquias do site oficial da diocese
(hospedado no Webnode), organizada por vicariato, com endereço, telefone,
e-mail, pároco e data de criação de cada unidade. A matriz da Paróquia de
Nossa Senhora da Conceição de Girau do Ponciano (sede) é santuário
diocesano (GCatholic a marca como Shrine e a Pascom local se chama
Santuário Diocesano); entrou com `tipo: santuario`.

Conferência contra o anuário (GCatholic, atualizado em 09/11/2026): o
anuário lista 45 igrejas, das quais ~38 como paróquia. Faltam nele as
unidades criadas de 2016 em diante (Canaã, Santa Dulce dos Pobres, Rainha
da Paz, São Miguel Arcanjo, Madre Teresa de Calcutá, Santa Isabel da
Hungria, Nossa Senhora das Graças e São Luiz Gonzaga em Arapiraca; São
Pedro em Folha Miúda; Nossa Senhora de Fátima em Coruripe; São Gonçalo de
Amarante em Massapê; Santa Luzia em Pé Leve; São Sebastião no Retiro; São
Francisco de Assis e São José em Teotônio Vilela; Nossa Senhora Mãe do
Povo em Tanque d'Arca; São Sebastião em Belém; a área pastoral de
Piranhas), e ele traz como igreja sem paróquia algumas que o site da
diocese dá como unidade (Nossa Senhora Auxiliadora em Penedo, criada em
2020; Bananeiras; Roteiro; Olho d'Água Grande; Belém). A entrada de
Craíbas aparece duplicada no anuário (são de fato duas paróquias no
município: a sede e Folha Miúda). A cobertura da posse do bispo (2021)
falava em 31 municípios e 46 paróquias, antes da leva de criações de 2022.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedepenedo.webnode.page/ (contatos da cúria, menu)
- https://diocesedepenedo.webnode.page/paroquias/ (a lista oficial, por
  vicariato, com endereços e contatos; sem horários)
- https://diocesedepenedo.webnode.page/curiaciocesana/ (cúria, bispo,
  vigário geral, conselhos)

O endereço antigo https://diocesedepenedo.webnode.com/ (o que a Wikipédia
aponta) redireciona para o `.page`.

Contatos que o site publica junto do nome do pároco e pareceram pessoais
ficaram de fora do JSON (e-mails como freilenilson@hotmail.com e
laurosavinon@gmail.com; o telefone de Porto Real do Colégio com DDD 24).
O e-mail da Paróquia Santa Madre Teresa de Calcutá está no site com a
grafia gamil.com e também ficou de fora.

## Instagram (só o trecho que a busca mostra, em 13/11/2026)

Perfis não se leem por dentro (bloqueio de robôs); ficou anotado o que o
trecho da busca trouxe.

- diocesedepenedooficial (diocese; a busca também mostrou a página dela no
  Facebook)
- paroquiapindorama (N. Sra. da Assunção, Pindorama, Coruripe; a bio traz
  os horários que entraram no JSON e o nome Nossa Senhora Assunta ao Céu)
- paroquiasantaluziapenedoal (Santa Luzia, Penedo)
- saojosearapiraca (São José, Arapiraca)
- paroquiadocarmoarapiraca (N. Sra. do Carmo, Arapiraca)
- rainhadapazarapiraca (Rainha da Paz, Arapiraca)
- paroquiadosantissimoredentor (Santíssimo Redentor, Arapiraca)
- paroquia_nso (N. Sra. do Ó, São Miguel dos Campos)
- santuariodiocesanogirau (Pascom do Santuário de Girau do Ponciano)

O perfil paroquiadobomconselho apareceu na busca sem cidade no trecho e
ficou de fora (pode ser a concatedral de Arapiraca, mas não deu para
confirmar). O site www.paroquiadocarmo-al.com, citado pela diocese, está
fora do ar.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/churches/local/pene0 (anuário, 09/11/2026)
- https://gcatholic.org/dioceses/diocese/pene0
- https://catholic-hierarchy.org/diocese/dpene.html
- https://pt.wikipedia.org/wiki/Diocese_de_Penedo (aponta o site oficial)
- Notícias locais (aquiacontece.com.br, boainformacao.com.br,
  tribunadosertao.com.br): posse do bispo, festas; só programação de
  evento, nunca horário fixo, por isso nada delas entrou como horário.

## O que falta para o próximo estado desta pesquisa

- Horário das 61 unidades sem fonte: o caminho mais provável são os perfis
  das paróquias no Instagram e no Facebook, que a busca não indexa por
  dentro (o Facebook da concatedral existe: facebook.com/concatedralarapiraca).
- Padroeiros conferidos um a um (hoje derivados da invocação no nome).
- Capelas e comunidades de cada paróquia: nenhuma fonte pública as lista.
- O diretório horariodemissa.com.br tem páginas para Penedo, mas é
  colaborativo (não é a paróquia publicando) e ficou de fora pela regra.
