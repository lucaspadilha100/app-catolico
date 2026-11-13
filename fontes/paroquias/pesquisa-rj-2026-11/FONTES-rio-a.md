# Arquidiocese de São Sebastião do Rio de Janeiro, parte A: fontes da pesquisa de 13/11/2026

Vicariatos Episcopais **Urbano, Sul, Norte e Leopoldina**. O pedido falava em
"Centro": a arquidiocese não tem vicariato com esse nome; o equivalente é o
**Vicariato Episcopal Urbano** (Centro, Lapa, Glória, Santa Teresa, Saúde,
Gamboa, Santo Cristo, São Cristóvão, Caju, Benfica e Paquetá). Os outros nove
vicariatos territoriais (Anchieta, Barra, Campo Grande, Cascadura,
Jacarepaguá, Oeste, Santa Cruz, Suburbano e Tijuca) estão na parte B
(`saida/rio-b.json`, `FONTES-rio-b.md`).

- **Urbano**: vigário episcopal Pe. Wagner Toledo Moreira. Rua Benjamin
  Constant, 23, 3º andar, Glória, (21) 3916-3144, vicurbano@arqrio.org.br.
- **Sul**: Pe. Geovane Ferreira Silva. Rua Hilário de Gouveia, 36, 10º andar,
  Copacabana, (21) 2235-0233, vicsul@arqrio.org.br.
- **Norte**: Côn. Aldo de Souto Santos. Av. Paulo de Frontin, 566, Rio
  Comprido, (21) 3251-5001, vicnorte@arqrio.org.br (o site
  vicariatonorterj.com.br não respondeu).
- **Leopoldina**: Pe. Alberto Gonzaga de Almeida. Largo da Penha, 19, Penha,
  (21) 99725-7138, vicleopoldina@arqrio.org.br.

## Resumo

- **116 unidades** em `saida/rio-a.json`, todas na cidade do Rio de Janeiro:
  **113 paróquias** (das 300 da arquidiocese) e **3 santuários que não são
  paróquia**.

  | Vicariato | Paróquias | Santuários sem paróquia | Unidades | Com horário | Igrejas |
  |---|---|---|---|---|---|
  | Urbano | 22 (com a Catedral) | 1 | 23 | 17 | 122 |
  | Sul | 28 | 1 | 29 | 14 | 102 |
  | Norte (sem a Tijuca) | 19 | 0 | 19 | 11 | 48 |
  | Leopoldina | 44 | 1 | 45 | 26 | 126 |
  | **Total** | **113** | **3** | **116** | **68** | **398** |

  Com os 187 da parte B, as paróquias somam **300**, o número que a Cúria
  publica ("Arquidiocese em Números").
- Foranias (pelo cadastro da Cúria): Urbano 1ª 5, 2ª 7, 3ª 4, 4ª 6 (a
  Catedral na 1ª); Sul 1ª 5, 2ª 8, 3ª 6, 4ª 4, 5ª 5; Norte 1ª 5, 2ª 5, 3ª 4,
  4ª 5; Leopoldina 1ª 8, 2ª 4, 3ª 7, 4ª 7, 5ª 5, 6ª 4, 7ª 5, 8ª 4. A
  observação de cada unidade diz o vicariato e a forania.
- **68 com horário**: 4 com confiança **alta** (Catedral, Basílica do
  Imaculado Coração de Maria no Méier, Santuário da Penha e Santuário do
  Cristo Redentor, com o site próprio lido em 13/11/2026) e 64 **média**
  (grade do cadastro da Cúria, que não tem data de atualização). Em 3 delas
  (Sagrado Coração de Jesus da Glória, Anunciação a Nossa Senhora e
  Imaculada Conceição e São Sebastião) o cadastro só traz missa de capela,
  não da matriz; a observação avisa.
- **48 sem horário** (confiança baixa, `horarios: []`): a regra do dono manda
  entrar mesmo assim; a observação diz que o cadastro da Cúria não traz
  missas e que não se achou grade publicada pela paróquia.
- Confissão só aparece em 2 unidades (Méier e Penha, pelos sites): o
  cadastro da Cúria não tem esse tipo de atividade. Adoração em 50 (campo
  "Adoração Eucarística" do cadastro).
- Categorias: 1 catedral; 3 paróquias com matriz basílica entraram como
  `basilica` (Imaculada Conceição e São João Batista da Lagoa, em Botafogo;
  Imaculado Coração de Maria, no Méier), como fez Taubaté; matrizes que a
  Cúria marca "(Santuário)" ficaram `paroquia` com a primeira igreja de tipo
  `santuario` (Salette, Fátima do Centro, Sant'Ana, Santa Edwiges, Santa
  Rita, Santa Teresa, São Judas Tadeu, Conceição do Engenho Novo, Conceição
  Aparecida do Cachambi, São Geraldo). Paróquias pessoais (Cúria: "para os
  fiéis de língua inglesa / polonesa"): Nossa Senhora da Misericórdia e
  Nossa Senhora do Monte Claro, nomeadas "Paróquia Pessoal". O texto do
  vicariato fala em 3 pessoais no Sul; a Cúria não marca a terceira.
- Todo `id_banco` é null.

## A lista das unidades

Fonte da lista: o cadastro oficial da Cúria, no domínio antigo,
https://www.arqrio.com.br/curia/paroquias.php, filtrado por vicariato
(`?v=63` Urbano, `?v=62` Sul, `?v=59` Norte, `?v=58` Leopoldina). O filtro
por VICARIATO traz as 113, inclusive as 4 do Sul que faltam no filtro por
forania (N. S. da Divina Providência, N. S. da Paz, Santa Margarida Maria e
São José da Lagoa); a ficha de cada uma diz a forania (4ª do Sul).

- O site novo (https://arqrio.org.br/vicariatos/) ainda descreve a divisão
  antiga e dá números diferentes: Urbano 21, Sul 27, Norte 40 (com a
  Tijuca), Leopoldina 42 + 1 santuário mariano em 7 foranias. O cadastro
  da Cúria, que é o atualizado, tem 22, 28, 19 e 44, e a Leopoldina em 8
  foranias. Seguimos o cadastro.
- **Tijuca**: o cadastro tem o Vicariato Tijuca (criado em 31/10/2025,
  desmembrado do Norte), com 22 paróquias; elas estão na parte B e NÃO
  entraram aqui.
- **Santuários que não são paróquia** (lista "Santuários" da Cúria, ficha
  em `ajaxLocaisCultoRecuperarDetalhes.php`): entraram como unidade
  `santuario`, com a observação "fica no território da Paróquia X; não é
  sede de paróquia", e saíram da lista de capelas dessa paróquia:
  - Santuário Basílica de Nossa Senhora da Penha (Leopoldina, território do
    Bom Jesus da Penha);
  - Santuário do Cristo Redentor do Corcovado (Sul, território de São Judas
    Tadeu);
  - Santuário de São Jorge e São Gonçalo Garcia, Rua da Alfândega (Urbano,
    território do Santíssimo Sacramento da Antiga Sé; santuário criado em
    09/04/2026).
  A parte B tratou o santuário equivalente da Tijuca (Medalha Milagrosa)
  como igreja da paróquia; se preferirem o mesmo molde, estes três viram
  igrejas `santuario` das paróquias indicadas.

Conferência contra o GCatholic (https://gcatholic.org/churches/local/zseb0,
atualizado em 09/11/2026: 267 igrejas, 244 marcadas como paróquia, sem
divisão por vicariato). Os nomes das nossas 113 batem, com grafias
diferentes em alguns (ex.: "São Francisco Xavier do Engenho Velho", "Nossa
Senhora das Mercês de Ramos"). Entradas que o GCatholic marca como paróquia
e que, na Cúria, são só igrejas de paróquia nossas (ficaram como capela ou
igreja, ligadas à paróquia que a Cúria indica):

- Santa Cruz dos Militares (irmandade, Paróquia da Candelária);
- São Francisco da Prainha (Paróquia de Santa Rita);
- Menino Deus (Paróquia de Santo Antônio dos Pobres);
- Nossa Senhora da Glória do Outeiro (irmandade, Paróquia do Sagrado
  Coração de Jesus, Glória);
- Nossa Senhora do Monte do Carmo (Paróquia do Carmo da Antiga Sé);
- São Crispim e São Crispiniano (irmandade, Paróquia de N. S. de Fátima do
  Centro);
- Santa Teresinha no Palácio Guanabara (Paróquia de N. S. da Glória,
  Laranjeiras).

O GCatholic também lista uma "São Conrado" como paróquia; a Cúria não tem
paróquia com esse nome no Sul.

## Contatos

Da ficha de cada paróquia (`ajaxParoquiasRecuperarDetalhes.php?id=N`):
endereço da matriz, primeiro telefone publicado e o e-mail institucional
(todos @arqrio.org.br, da secretaria). Telefones copiados como estão, só os
dígitos. Nenhum celular ou e-mail de padre. WhatsApp só onde a própria
paróquia publica como WhatsApp da secretaria (Méier).

Instagram: só o que veio de página oficial, sem abrir perfil:
santacatarinadealexandria (ficha da Cúria), catedralrjoficial
(catedral.com.br), igrejadapenharj (igrejadapenharj.org.br),
cristoredentoroficial (santuariocristoredentor.com.br).

## Horários

1. **Cadastro da Cúria**: cada igreja tem "Atividades" em
   https://www.arqrio.com.br/curia/ajaxExibeAtividadesLocal.php?id=N (N é
   o id do local de culto, que está no campo `fontes`). Usamos "Missa" e
   "Adoração Eucarística"; Terço, Grupo de Oração e cursos ficaram fora.
   Sem data de atualização: confiança média. Ajustes feitos à mão (script
   no rascunho da pesquisa):
   - "Celebração da Palavra", "Terço dos Homens" e "Grupo de Oração"
     listados como missa não viraram missa (os dois primeiros ficaram em
     `nao_cabe` quando no lugar de missa);
   - "última sexta/quinta/terça do mês", "todo dia 13/24/25" foram para
     `nao_cabe` (o formato só aceita semanas 1 a 5);
   - notas com a grade inteira foram desdobradas: Bonsucesso ("8h 9;30
     11:00 e 18h" no domingo), Santa Rita dos Impossíveis ("de domingo a
     domingo 7h30; às 19 exceto terças e sábados; domingo 7h30, 10h e 19h"),
     Sant'Ana (adoração perpétua: 2ª a 6ª 9h às 19h, noturna diária 21h às
     6h);
   - missas que a nota diz serem em capela foram para a capela (Parada de
     Lucas: Capela São Sebastião; Cordovil: Capela São Justino);
   - Hora Santa de Sant'Ana virou adoração.
2. **Sites próprios** (lidos em 13/11/2026, confiança alta):
   - https://catedral.com.br/ ("missas diárias às 12h e aos domingos às
     10h", igual à Cúria);
   - https://www.basilicacoracaodemaria.com/funcionamento (missas e
     confissões do Méier);
   - https://www.igrejadapenharj.org.br/horarios-de-missa e
     https://www.igrejadapenharj.org.br/confissoes;
   - https://www.santuariocristoredentor.com.br/missas (missas ordinárias:
     2ª a sábado 11h e 15h; domingo 11h e 14h).

## Capelas

Todas as igrejas que a ficha da Cúria lista em "Locais de culto" entraram,
ligadas à paróquia, com endereço e bairro. Capelas de hospital, colégio,
cemitério, quartel ou clube levam o nome da instituição no começo do
endereço (o nome não leva parênteses). Irmandades, ordens terceiras e
confrarias viraram "Igreja de ...". Os 11 oratórios de comunidades novas
(Canção Nova, Shalom, Coração Novo, Pequeno Rebanho etc., alguns em
apartamento) ficaram FORA: são oratórios privados, não igrejas abertas.

## O que falta para o próximo estado desta pesquisa

- As 48 paróquias sem horário. As buscas na web (Nossa Senhora da Paz,
  Ressurreição, São João Batista da Lagoa, Santa Margarida Maria, N. S. da
  Glória do Largo do Machado, Santíssimo Sacramento, N. S. da Ajuda e
  outras) só acharam guias de turismo, sem grade oficial; os sites
  paroquiadaressurreicao.com.br e nsdagloria.com.br estão fora do ar.
- Confissões: quase nenhuma paróquia publica; o cadastro da Cúria não tem.
- O Santuário de São Jorge e São Gonçalo Garcia (Rua da Alfândega) foi
  criado em 2026 e não tem grade no cadastro.
- O vicariato Norte com o nome antigo de sede (vicariatonorterj.com.br) não
  respondeu; se voltar, pode ter grade das paróquias.
