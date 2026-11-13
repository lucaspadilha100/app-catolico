# Diocese de Afogados da Ingazeira (PE): fontes da pesquisa de 13/11/2026

Sé em Afogados da Ingazeira, concatedral em Serra Talhada; Sertão do Pajeú.
Bispo: Dom Limacêdo Antônio da Silva (desde 2023). Cúria: Rua Roberto
Nogueira, 366, Centro, Afogados da Ingazeira, (87) 98805-3826,
diocesedopajeu@hotmail.com. Padroeira diocesana: Santa Maria Madalena.

## Resumo

- **29 unidades pastorais** em `saida/afogados-da-ingazeira.json`: 1 catedral
  (Senhor Bom Jesus dos Remédios), 1 concatedral (N. S. da Penha, Serra
  Talhada, como `catedral`), 23 paróquias e 4 áreas pastorais, em 4 zonais
  (Centro Pajeú, Médio Pajeú, Alto Pajeú e Baixo Pajeú).
- **Nenhuma com horário** (todas com `"horarios": []` e confiança baixa).
  O site da diocese tem uma página por unidade com endereço, padroeiro,
  telefone, e-mail, redes e clero, mas nenhuma grade de missas, e as notícias
  do site (API do WordPress, 125 posts) não trazem horários fixos. A busca na
  web, único caminho para o trecho de Instagram de cada paróquia, esgotou-se
  (limite de buscas compartilhado) antes desta diocese.
- 37 comunidades (só nome e lugar) vieram da nota da diocese de 07/10/2023
  que criou três áreas pastorais: as de Fátima-Sítio dos Nunes (hoje Paróquia
  N. S. de Fátima, Flores), Mãe Rainha (Tabira) e São Francisco (Serra
  Talhada).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese: 25 paróquias e 4 áreas
pastorais, agrupadas por zonal.

Conferência contra o GCatholic (atualizado em 09/11/2026: 24 paróquias, 33
igrejas): as 24 paróquias batem. A diocese tem a mais a Paróquia N. S. de
Fátima (Povoado de Fátima, Flores), fundada em 13/10/2026, e as 4 áreas
pastorais (Mãe Rainha e Divina Misericórdia em Tabira, São Sebastião em
Ibitiranga, N. S. da Conceição e dos Remédios em Jabitacá, fundada em
13/07/2026, e São Francisco em Serra Talhada). Igrejas do GCatholic sem
paróquia indicada pela fonte, que ficaram fora do JSON: em Afogados da
Ingazeira, N. S. de Guadalupe, Capela de N. S. do Perpétuo Socorro, São Brás
e São Sebastião (e o Seminário São Judas Tadeu); em Serra Talhada, N. S. da
Conceição e São Cristóvão; em Triunfo, N. S. do Rosário.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://dioceseafogadosdaingazeira.org.br/paroquias/ (o endereço
  `dioceseafogadosdaingazeira.com.br`, que o GCatholic indica, não responde)
- Uma página por unidade, `https://dioceseafogadosdaingazeira.org.br/paroquia/?paroquiaid=<n>`
  (n = 1 a 32, das quais 29 em uso); as URLs estão no campo `fontes`.
- https://dioceseafogadosdaingazeira.org.br/no-14o-aniversario-de-sua-nomeacao-como-bispo-dom-egidio-anuncia-criacao-de-areas-pastorais-e-nomeia-padres/
  (07/10/2023; as comunidades das três áreas criadas)
- https://dioceseafogadosdaingazeira.org.br/historia/ (história e bispos)

## Decisões

- O campo "Celular" das páginas é o contato da paróquia (a página separa o
  clero na seção "Administração"); entrou como telefone.
- A página da Área Pastoral São Francisco repete o endereço da Concatedral;
  o endereço ficou vazio.
- Na lista da Mãe Rainha, "Santuário" é a sede e não virou comunidade. As
  capelas N. S. de Fátima e N. S. Desatadora dos Nós (Área São Francisco)
  não têm lugar na nota e ficaram de fora.
- A matriz da Paróquia Santo Antônio e São João Maria Vianney (Carnaíba) e a
  de Jabitacá entraram com o primeiro titular; o nome exato da igreja não
  está na página.

## Conferência da lista (não usada para horário)

- https://gcatholic.org/dioceses/diocese/afog0.htm e
  https://gcatholic.org/churches/local/afog0
- https://catholic-hierarchy.org/diocese/dafog.html (citado por um resultado
  de busca; endereço antigo da residência episcopal)

## O que falta para o próximo estado desta pesquisa

- **Horários de todas as 29 unidades.** Caminho: trecho de Instagram pela
  busca (perfis citados nas páginas: pascomsaofranciscodeassiss,
  imaculadajabitaca; a diocese é diocesedeafogados) ou pedir a grade à
  cúria, que tem o WhatsApp (87) 98805-3826.
- Contatos das áreas pastorais (Tabira, Ibitiranga, São Francisco) e da nova
  Paróquia N. S. de Fátima: as páginas não trazem.
- Comunidades das demais paróquias.
