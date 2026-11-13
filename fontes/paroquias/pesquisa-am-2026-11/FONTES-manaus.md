# Arquidiocese de Manaus (AM): fontes da pesquisa de 13/11/2026

Sé metropolitana em Manaus. Arcebispo: Cardeal Leonardo Ulrich Steiner,
OFM. Cúria: Av. Joaquim Nabuco, 1023, Centro, Manaus, (92) 3212-9000 /
3212-9018. Abrange 8 municípios: Manaus, Careiro, Careiro da Várzea,
Iranduba, Manaquiri, Novo Airão, Presidente Figueiredo e Rio Preto da Eva.
Três regiões episcopais e 13 setores:

- Região Nossa Senhora dos Remédios: setores Centro Histórico, Parque Dez,
  Avenida Brasil, Alvorada, Rio Negro.
- Região Nossa Senhora dos Navegantes: Santa Rita de Cássia, Maria Mãe da
  Igreja, São José Leste, Dom Luiz Soares Vieira, Rio Solimões.
- Região Nossa Senhora Aparecida: Padre Pedro Vignola, Rios e Cachoeiras,
  Padre Ruggero Ruvoletto.

## Resumo

- **98 unidades** em `saida/manaus.json`: 1 catedral, 3 santuários com
  paróquia (São José Operário, Nossa Senhora Aparecida e Nossa Senhora de
  Fátima, todos no Centro Histórico), 53 paróquias e 41 áreas missionárias.
  Cidades: Manaus (87), Iranduba (3), Careiro (2), Presidente Figueiredo
  (2), Careiro da Várzea, Manaquiri, Novo Airão e Rio Preto da Eva (1 cada).
- **27 com horário** (24 com horário na matriz, 3 só em comunidades):
  3 com confiança alta (sites das próprias paróquias lidos direto: Santuário
  São José Operário, São Raimundo Nonato, São Francisco de Assis), 23 média,
  72 baixa. As 71 sem horário entram com `"horarios": []` e confiança baixa,
  com o motivo na observação.
- Cada observação traz o setor e a região episcopal. O setor das unidades
  sem página lida vem do GCatholic, que dá o setor de cada igreja.
- Todo `id_banco` é null: o banco ainda não tem nada do Amazonas.

## A grande dificuldade: o site da arquidiocese bloqueia leitura direta

O site oficial (arquidiocesedemanaus.org.br, WordPress) tem uma página por
paróquia e área missionária em `/paroquia/<nome>/`, com endereço, telefone,
setor, comunidades e horários. Mas o site responde **406 (bloqueio do
Cloudflare)** a toda página que não esteja em cache: só a capa, o feed e
duas páginas institucionais abriram. A API `/wp-json/`, o mapa, a lista
`/paroquias/` e todas as páginas de paróquia deram 406. Não tentamos
contornar o bloqueio.

Por isso:

1. As páginas de paróquia foram lidas **pelo trecho que a ferramenta de
   busca mostra** (cerca de 50 páginas indexadas). Esses dados entram com
   confiança média no máximo: a busca resume a página, e a maior parte delas
   tem idade de cerca de dez anos no índice (só Ternura de Deus e São Pedro
   Apóstolo de Rio Preto da Eva aparecem atualizadas em outubro de 2026).
   Toda URL está no campo `fontes` de cada item.
2. A cota de buscas da sessão acabou antes de chegar a umas 50 unidades.
   Essas ficaram com o nome, o setor e a cidade (GCatholic), às vezes o
   bairro ou o endereço tirado dos informativos da arquidiocese, e sem
   horário.
3. Os informativos mensais em PDF ("Arquidiocese em Notícias", em
   `/wp-content/uploads/`) abriram normalmente e foram lidos inteiros:
   IAN 219 (jan/2024), 229 (nov/2024), 231 (jan/2025), 235 (mai/2025), 236
   (jun/2025), 237 (jul/2025), 238 (ago/2025), 240 (nov/2025), 241 (dez/2025)
   e 242 (jan/2026). Deles vieram endereços de agenda, nomes de unidades
   novas e as comunidades da Paróquia São José Operário (Leste).

## Contagem oficial e conferência com o GCatholic

- Página "Abrangência e dados eclesiais" (lida pela busca): 13 setores, 59
  paróquias, 34 áreas missionárias, 934 comunidades e 3 capelanias militares.
- Notícia de 19/03/2026: 57 paróquias e 39 áreas missionárias.
- Instrumento de trabalho da Assembleia Sinodal (2022, PDF): 57 paróquias e
  36 áreas missionárias.
- GCatholic (atualizado em 09/11/2026): 95 paróquias e 2 missões, 99
  igrejas listadas com o setor de cada uma. Ele marca como paróquia as 57
  paróquias e lista as áreas missionárias pela igreja-sede, sem marca.

O JSON tem 57 paróquias (53 + 3 santuários + catedral), batendo com a
contagem de 2026, e **41 áreas missionárias**, duas a mais que as 39
oficiais. Provável duplicidade entre as áreas que só o GCatholic nomeia
(pela igreja-sede, setor Padre Ruggero Ruvoletto principalmente) e as que só
os informativos nomeiam (São Daniel Comboni, São José do Rio Negro, Tarumã,
Sagrada Família do Japiim, São João XXIII). Ver pendências.

Fora do JSON, de propósito:

- **Nossa Senhora de Loreto, Nossa Senhora do Sameiro e Nossa Senhora dos
  Navegantes (militar)**: paróquias do Ordinariado Militar do Brasil dentro
  do território (GCatholic); não são da arquidiocese.
- **Santuário da Misericórdia (Fazenda da Esperança, Rios e Cachoeiras)**:
  santuário sem paróquia.
- **Seminário São José** (Chapada).

## Sites das paróquias lidos direto (13/11/2026)

- https://www.santuariosaojoseoperario.com.br/horarios-de-missa e /contato
- https://psrnmanaus.com.br/horarios-de-missa/ e /como-chegar/ (São
  Raimundo Nonato; e-mail decodificado do Cloudflare)
- https://www.sfassis.org.br/p/contatos.html (São Francisco de Assis)
- https://www.rainhadosapostolos-am.org.br/ (Rainha dos Apóstolos; rodapé
  2014-2020, por isso confiança média)
- https://nossasenhoradelourdesam.blogspot.com/p/asas.html (Lourdes, sem
  data)
- https://paroquiasantaluziamanaus.blogspot.com/p/horarios-de-missa.html
  (Santa Luzia, mais antigo que o Facebook da paróquia)
- https://scalabrinianos.com/paroquia-sao-geraldo-manaus/ (contatos de São
  Geraldo)

Não abriram: saopedroapostolo.org.br (certificado incompleto; lido pela
busca), guadalupemanaus.com.br, catedralnsconceicao.org,
santuarioaparecidamanaus.net, saosebastiaoesaofrancisco.com.br e
sacramentinos.org.br (certificado vencido).

## Instagram e Facebook (só pelo trecho da busca, nunca por dentro)

- catedraldemanaus: horários da Catedral (bio).
- paroquiadomboscomanaus: horários da Paróquia Dom Bosco (bio).
- facebook.com/paroquiasantaluziamanaus: horários de Santa Luzia (bairro
  Santa Luzia).
- Perfis anotados sem uso de horário: santuariosaojoseoperario, psrnmanaus,
  saofranciscodeassismanaus, saogeraldomanaus, areamissionariasaolucas,
  psaopedro_apostolo (Rio Preto da Eva).

## Agregadores vistos e NÃO usados para horário

horariodemissa.com.br, horariodemissahoje.com.br, liriocatolico, missahora,
guiamanaus, econodata, diariocidade. Serviram só para perceber divergências
(registradas nas observações quando relevantes).

## Unidades novas ou renomeadas (informativos e notícias da arquidiocese)

- **Área Missionária Maria Mãe da Esperança** (Iranduba): criada em
  13/12/2025, 22 comunidades na AM-070 do km 22 ao km 68, desmembrada da
  Área Nossa Senhora Aparecida (Cacau Pirêra). Instalada na capela São José
  Operário, Lago do Limão.
- **Área Missionária Santa Teresinha do Menino Jesus**: era Nossa Senhora
  das Vitórias (área de missão em 2019, área missionária em 2021); novo
  título em 10/04/2025. O GCatholic ainda usa o nome antigo.
- **Área Missionária São Daniel Comboni** (setor Padre Ruggero): "implantada
  recentemente" em jan/2025.
- **Área Missionária São João XXIII** (Zona Norte, junto da Paróquia São
  Bento): a notícia de 19/04/2025 fala em desmembrá-la.
- **Paróquia Santos Mártires e Nossa Senhora Aparecida** é o nome atual da
  paróquia de Presidente Figueiredo (IAN 240).

## Pendências para o próximo estado

1. **Reler as ~50 páginas `/paroquia/` da arquidiocese** quando o bloqueio
   permitir (ou com a cota de busca renovada): Coração Imaculado de Maria,
   Cristo Redentor, Cristo Rei, Divino Espírito Santo, Menino Jesus de Praga,
   Auxiliadora, Consoladora dos Aflitos, Dores, Nazaré, Mãe da Misericórdia,
   Santa Cruz, Santa Rita de Cássia, Sant'Ana, Santo Afonso, São Francisco
   das Chagas, São Jorge, São José, São Sebastião, São Vicente de Paulo, os
   dois santuários de Aparecida e Fátima, as duas Graças, Santa Luzia da
   Matinha e as paróquias do interior (Iranduba, Manaquiri, Careiro, Careiro
   da Várzea, Novo Airão, Presidente Figueiredo).
2. **Títulos oficiais das áreas missionárias** que vieram só do GCatholic
   (observação "Nome pela igreja-sede listada no GCatholic"): Nossa Senhora
   da Saúde, Santa Clara, São Pedro Apóstolo, Jesus Bom Pastor, Nossa
   Senhora Aparecida (Manaus), Nossa Senhora de Fátima (Manaus), São
   Lourenço, São Maximiliano Kolbe, Virgem da Piedade, São Domingos Sávio,
   Santos Mártires. Conferir também se Tarumã, São José do Rio Negro e São
   Daniel Comboni são as mesmas de alguma dessas (são duas a mais que as 39
   oficiais).
3. Igrejas do GCatholic sem unidade identificada, não incluídas: "Igreja
   Cidade de Deus" (setor Dom Luiz Soares Vieira; a Área Santa Margarida de
   Cortona fica no bairro Cidade de Deus), um segundo "Nossa Senhora do
   Rosário" (setor Dom Luiz Soares Vieira), e quatro do setor Padre Ruggero
   Ruvoletto / Rios e Cachoeiras com lugar estranho no GCatholic: São Pedro
   Apóstolo ("Abelha"), Nossa Senhora de Fátima ("Nossa Senhora de
   Fátima"), São Sebastião ("São Sebastião") e Santíssimo Redentor ("São
   Francisco de Assis").
4. Comunidades citadas sem endereço ficaram no `nao_cabe` da matriz
   (Rosário, Santa Mônica, São Lucas, Família de Nazaré, Ternura de Deus,
   Santa Margarida de Cortona, Maria Imaculada). Paróquias com comunidades
   só contadas: São Pedro Apóstolo de Rio Preto da Eva (28), São Francisco
   de Assis (10 núcleos), São Paulo Apóstolo (10), Cacau Pirêra (mais de 60).
5. Áreas cuja "matriz" no JSON é a comunidade-sede indicada pela fonte, não
   uma igreja matriz confirmada: Menino Jesus (Santo Expedito, Rua Vinca),
   Santa Helena (comunidade Santa Helena), São Francisco das Chagas (Divino
   Espírito Santo, Rua 31), Maria Mãe da Esperança (capela de Lago do
   Limão).
6. Telefones: na página da arquidiocese o rodapé da cúria ((92) 3212-9000)
   aparece em toda página; nunca foi usado como telefone de paróquia.

## Circunscrições do Amazonas (conferência no GCatholic, 13/11/2026)

Sés com território no Amazonas, conforme gcatholic.org/dioceses/country/BR
e as páginas de cada uma: Manaus (arquidiocese), Alto Solimões, Borba,
Coari, Parintins, São Gabriel da Cachoeira (dioceses), Itacoatiara, Lábrea,
Tefé (prelazias territoriais) e **Humaitá (diocese)**.

**Humaitá não estava na lista das pesquisas.** É diocese desde 1979, sufragânea
de **Porto Velho** (por isso não aparece entre as sufragâneas de Manaus), com
sé na Catedral Nossa Senhora da Conceição de Humaitá (AM). O GCatholic lista
17 igrejas, todas no Amazonas: Humaitá, Manicoré, Apuí, Santo Antônio do
Matupi, Auxiliadora e Uruapiara; 8 paróquias e 1 missão (2022); sé vacante
em 09/11/2026. Páginas: https://gcatholic.org/dioceses/diocese/huma0.htm e
https://gcatholic.org/churches/local/huma0.
