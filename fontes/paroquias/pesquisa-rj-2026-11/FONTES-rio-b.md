# Arquidiocese de São Sebastião do Rio de Janeiro, parte B: fontes da pesquisa de 13/11/2026

Arcebispo: Cardeal Orani João Tempesta. Cúria: Rua Benjamin Constant, 23,
Glória, Rio de Janeiro, (21) 2292-3132. Esta parte cobre os vicariatos
episcopais **Anchieta, Barra, Campo Grande, Cascadura, Jacarepaguá, Oeste,
Santa Cruz, Suburbano e Tijuca**. A outra parte (rio-a) cobre Urbano (o
"Centro"), Sul, Norte e Leopoldina.

## Resumo

- **187 unidades pastorais** em `saida/rio-b.json`: 183 paróquias e 4
  basílicas (todas na Tijuca), com 533 capelas e oratórios ligados à
  paróquia que o cadastro da Cúria indica (720 igrejas no total).
- Por vicariato (unidades / com horário de missa aproveitável / capelas):

  | Vicariato | Unidades | Com horário | Capelas |
  |---|---|---|---|
  | Anchieta | 18 | 10 | 43 |
  | Barra | 15 | 6 | 36 |
  | Campo Grande | 34 | 17 | 131 |
  | Cascadura | 20 | 10 | 26 |
  | Jacarepaguá | 14 | 7 | 55 |
  | Oeste | 28 | 15 | 75 |
  | Santa Cruz | 18 | 7 | 74 |
  | Suburbano | 18 | 4 | 38 |
  | Tijuca | 22 | 7 | 55 |
  | **Total** | **187** | **83** | **533** |

- **83 com confiança média**: horários de missa (e de adoração em 65
  paróquias) vindos do cadastro da Cúria, que não traz data de atualização.
  **104 com confiança baixa**: 102 sem nenhuma missa no cadastro e 2 com o
  cadastro incompleto, só com missas de semana (Santa Isabel Rainha de
  Portugal, em Bento Ribeiro, e Santa Luzia, na Gardênia Azul); os horários
  dessas duas ficaram no JSON, mas a unidade está como baixa.
- Confissão quase não aparece: o cadastro não tem a categoria, e só 4
  linhas trazem "Confissões" ou "Atendimento de Confissão" na observação.
- Todo `id_banco` é null: o banco ainda não tem nada do Rio de Janeiro.
- Instagram: nenhum. O cadastro da Cúria não traz redes sociais, e não houve
  tempo de buscar perfil por perfil (ver pendências).

## Estrutura atual: 13 vicariatos

A página https://arqrio.org.br/vicariatos/ (site novo da arquidiocese) ainda
mostra a divisão antiga, em 9 vicariatos territoriais (Campo Grande,
Jacarepaguá, Leopoldina, Norte, Oeste, Santa Cruz, Suburbano, Sul e Urbano),
com textos da época da pandemia. O cadastro da Cúria já tem os **13
vicariatos** de hoje: Anchieta, Barra, Campo Grande, Cascadura, Jacarepaguá,
Leopoldina, Norte, Oeste, Santa Cruz, Suburbano, Sul, Tijuca e Urbano.

- **Tijuca** foi criado e instalado em 31/10/2025, desmembrado do Norte
  (notícia da arquidiocese de 10/11/2025:
  https://arqrio.org.br/dom-orani-instala-o-vicariato-tijuca-nova-configuracao-para-multiplicar-a-presenca-ampliar-a-proximidade-pastoral-e-intensificar-a-missao/).
  Ficou nesta parte porque não é Centro, Sul, Norte nem Leopoldina. Se a
  parte A tiver incluído a Tijuca dentro do Norte, há 22 paróquias em dobro:
  conferir pelo nome e bairro antes de juntar.
- **Anchieta** e **Cascadura** saíram do Suburbano (que caiu de 57 para 18
  paróquias); **Barra** saiu de Jacarepaguá.
- Não existe vicariato com o nome "Centro": é o **Urbano** (Centro, Glória,
  Lapa, Santa Teresa, São Cristóvão, Caju, Paquetá).

## A lista e os dados: cadastro da Cúria

Tudo o que é unidade, endereço, telefone, e-mail, capela e horário vem do
cadastro oficial da Cúria Metropolitana, no domínio antigo da arquidiocese
(ainda no ar e atualizado: tem a paróquia nº 300, criada em setembro de 2026).

- https://www.arqrio.com.br/curia/paroquias.php (lista das 300 paróquias,
  com filtro por vicariato `v` e forania `f`, por exemplo
  `paroquias.php?v=88&f=231`)
- https://www.arqrio.com.br/curia/ajaxParoquiasRecuperarDetalhes.php?id=N
  (ficha de cada paróquia: vicariato e forania, data de criação, endereço,
  telefones, e-mail e os locais de culto com endereço)
- https://www.arqrio.com.br/curia/ajaxExibeAtividadesLocal.php?id=N
  (atividades de cada local de culto: Missa, Adoração Eucarística, Terço,
  Grupo de Oração, cursos; só Missa e Adoração entraram no JSON)
- https://www.arqrio.com.br/curia/arqrioEmNumeros.php ("A Arquidiocese em
  Números": 300 paróquias e 1.129 locais de culto)

As URLs da ficha e das atividades de cada unidade estão no campo `fontes`
do JSON. O servidor responde "Banco temporariamente indisponível" quando
recebe pedidos em paralelo: as fichas foram baixadas de novo, uma a uma,
até não sobrar nenhuma com esse aviso.

O site novo (arqrio.org.br, WordPress) não tem lista de paróquias e bloqueia
o `/wp-json/` com 403.

### Como os dados foram lidos

- Nome da unidade: "Paróquia" + o título da lista da Cúria, sem o bairro.
  Padroeiro = esse título. A paróquia pessoal de São José (Tijuca), que a
  Cúria escreve "São José (Para os fiéis de língua chinesa)", entrou como
  "Paróquia Pessoal São José para os Fiéis de Língua Chinesa".
- A primeira igreja é a matriz, com o nome que a Cúria dá. Matriz marcada
  "(Santuário)" virou igreja de tipo `santuario` e a unidade ficou
  `paroquia` (como em Taubaté): Santa Teresinha (Campo Grande), Divina
  Misericórdia (Vila Valqueire), N. S. do Sagrado Coração (Praça Seca), São
  Jorge (Quintino), N. S. do Loreto (Freguesia), São João Batista (Anil),
  N. S. de Fátima e São João de Deus (Realengo), São Miguel Arcanjo
  (Magalhães Bastos), N. S. da Conceição (Santa Cruz), São Benedito
  (Pilares) e N. S. das Dores (Rio Comprido). Matriz marcada "(Basílica)"
  virou categoria `basilica`: Lourdes (Vila Isabel), São Francisco Xavier,
  Santa Teresinha e São Sebastião dos Capuchinhos ("Santuário e Basílica"),
  as três na Tijuca.
- Capelas: "Capela" + o título; as de irmandade ou ordem terceira viraram
  "Igreja ..."; as marcadas "(Santuário)" viraram tipo `santuario` (Medalha
  Milagrosa, na Basílica de São Sebastião; N. S. de Fátima, no Recreio;
  Schoenstatt, em Vargem Pequena). O que vinha entre parênteses (hospital,
  colégio, irmandade, seminário) foi para o começo do `endereco`. Localidade
  = o bairro do endereço.
- Telefone: o primeiro número publicado, só com dígitos, sem converter
  número antigo; os outros números estão na observação. WhatsApp ficou vazio
  (a Cúria não diz qual número é WhatsApp). E-mail: o da paróquia na ficha
  (quase todos `@arqrio.org.br`).
- Horários: "Dia - HH:MM h (obs)". "1ª sexta-feira do mês" e parecidos
  viraram `semanas`. Foram para `nao_cabe`: "último ... do mês", "dia 24 de
  cada mês", "quinta anterior à primeira sexta", Celebração da Palavra e as
  linhas que o cadastro guarda sem dia da semana. Foram descartadas as linhas
  que não são missa nem adoração, embora estejam nessas categorias
  ("Fechado", "Catequese" fora de missa, "Curso de Batismo", "Grupo de oração
  da RCC", "Terço dos homens", "Legião de Maria"). Na Paróquia São Sebastião
  e Santa Cecília (Bangu), as missas que a matriz lista "na Capela N. S. de
  Nazaré (Bangu Shopping)" e "na Capela N. S. de Fátima (Sandá)" foram
  passadas para essas capelas.

## Conferência da lista

- A Cúria publica 300 paróquias; a lista paginada sem filtro tem as 300.
  Somando os filtros por forania, 289. As 11 que não aparecem em forania
  nenhuma foram lidas uma a uma: **7 são da 2ª Forania da Barra** e entraram
  aqui (Imaculada Conceição, São José da Comunidade Beira Rio, São Pedro do
  Mar e São Tarcísio, no Recreio; São Marcos, na Barra Sul; N. S. do
  Montserrat, em Vargem Pequena; São Sebastião, em Vargem Grande). **As
  outras 4 são da 4ª Forania do Sul** e ficam para a parte A: N. S. da
  Divina Providência (Jardim Botânico), N. S. da Paz (Ipanema), Santa
  Margarida Maria e São José (Lagoa).
- GCatholic (https://gcatholic.org/dioceses/diocese/zseb0 e
  https://gcatholic.org/churches/local/zseb0, atualizado em 09/11/2026):
  286 paróquias na estatística de 2022 e 244 igrejas marcadas "Parish" no
  mapa, sem divisão por vicariato. Das 187 unidades daqui, 162 batem pelo
  título; as 25 restantes são grafias diferentes ("de Loreto", "Cura d'Ars",
  "do Engenho Velho") ou paróquias novas que o GCatholic ainda não tem
  (Santo Expedito e Santa Clara de Assis em Campo Grande, São José Artesão,
  N. S. do Montserrat, São Tarcísio, Cristo Libertador, Cristo Ressuscitado,
  São Pio de Pietrelcina e outras). No sentido inverso, as 35 entradas "Parish"
  do GCatholic que não batem pelo nome com as 300 da Cúria parecem grafias
  diferentes de paróquias que já estão na lista (Santa Teresa de Ávila perto
  de São Jerônimo, Santo Agostinho perto de N. S. da Vitória, São Mateus de
  Oswaldo Cruz); a única sem par claro, São Crispim e São Crispiniano, fica
  na região central, fora desta parte.
- O GCatholic também marca santuário a Paróquia São Camilo de Lellis
  (Usina), que a Cúria não marca: ficou `paroquia` com matriz comum, e a
  observação registra a diferença.
- Notícia de 10/09/2026 (Diário do Rio) sobre a 300ª paróquia, N. S.
  Aparecida da Freguesia (Jacarepaguá), desmembrada de Pai Eterno e São José:
  está no cadastro e no JSON.

## O que falta para o próximo estado desta pesquisa

- **Horários das 102 paróquias sem missa no cadastro**, e das 2 com o
  cadastro incompleto. Não há página de vicariato com horários: seria buscar
  o site ou o trecho de Instagram de cada uma.
- **Instagram** de todas as unidades, pelo trecho que a busca mostra.
- **Confissões**: o cadastro da Cúria não tem essa categoria.
- Horários com data: o cadastro não diz quando cada paróquia atualizou suas
  atividades. Por isso a confiança é média, não alta.
- A página de vicariatos do site novo continua com a divisão antiga (9
  vicariatos); vale reconferir quando ela for atualizada.
