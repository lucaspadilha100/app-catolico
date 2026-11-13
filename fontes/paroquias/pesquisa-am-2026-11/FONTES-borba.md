# Diocese de Borba (AM): fontes da pesquisa de 13/11/2026

**Nome atual: Diocese de Borba.** Foi Prelazia Territorial de Borba de
13/07/1963 até 18/11/2022, quando o Papa Francisco a elevou a diocese
(GCatholic, catholic-hierarchy e o próprio site, que fala da "então Prelazia
de Borba, hoje Diocese de Borba"). Bispo: Dom Zenildo Luiz Pereira da Silva,
C.Ss.R. Padroeira diocesana: Santa Maria, Mãe de Deus (1º de janeiro).
Cúria: Rua Floriano Peixoto, s/n, Centro, Borba, (92) 98623-8262,
diocesedeborba@gmail.com; contato geral do site (92) 99604-4636,
contato@diocesedeborba.org.br. Médio Madeira: municípios de Borba, Novo
Aripuanã, Nova Olinda do Norte e Autazes.

## Resumo

- **13 unidades pastorais** em `saida/borba.json`: 1 catedral (Catedral
  Basílica de Santo Antônio de Pádua), 8 paróquias e 4 áreas missionárias,
  em 4 foranias: São Marcos (Borba: Catedral, N. S. Aparecida, Cristo Rei,
  São João Batista de Axinim), São Lucas (Novo Aripuanã: N. S. da Conceição,
  Área Missionária Santo Antônio Maria Claret), São Mateus (Nova Olinda do
  Norte: N. S. de Nazaré e São José; Canumã: N. S. do Rosário) e São João
  (Autazes: São Joaquim e Sant'Ana, São José de Novo Céu, áreas
  missionárias São Sebastião, Divino Espírito Santo e N. S. do Perpétuo
  Socorro).
- A contagem bate com a própria diocese: "nove paróquias e quatro áreas
  missionárias" (notícia de 13/04/2026, na criação da Área Missionária
  Divino Espírito Santo).
- **8 com missa publicada** (6 alta, 2 média) e Canumã só com adoração
  (média): todos os horários vêm da página de cada unidade no site da
  diocese. **4 sem horário** (confiança baixa): São Joaquim e Sant'Ana
  (Autazes), São José (Novo Céu), Área Missionária Divino Espírito Santo
  e Área Missionária N. S. do Perpétuo Socorro, cujas páginas só trazem
  nome, forania e padroeiro.
- Todo `id_banco` é null: o banco ainda não tem nada do Amazonas.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedeborba.org.br/nossas-paroquias/ (9 paróquias, por forania)
- https://diocesedeborba.org.br/areas-missionarias/ (4 áreas missionárias)
- Uma página por unidade, `https://diocesedeborba.org.br/paroquia/?paroquiaid=N`
  (N = 1, 3, 4, 5, 6, 7, 9, 10, 12 paróquias; 8, 11, 13, 14 áreas; 2, 15 e
  16 dão "registro não encontrado"), com forania, fundação, endereço,
  padroeiro, contatos, atendimento e a grade "Horários de Missa".
- https://diocesedeborba.org.br/curia/ (dados da cúria)
- API do WordPress (`/wp-json/wp/v2/posts`, 200 notícias) para a contagem
  oficial, a data das áreas missionárias e as comunidades citadas.

## Como a grade foi lida

A grade "Horários de Missa" mistura missa com outras coisas. Entrou como
missa só o que tem padre ou é chamado de missa sem outra indicação; entrou
como adoração o que a página chama de adoração ou Hora Santa. Ficou no
`nao_cabe`:
- celebração presidida por **diácono** que a página chama de "missa"
  (Axinim, domingo 19h; Novo Aripuanã, "missa das crianças" domingo 8h);
- celebração da Palavra (Canumã, domingo 7h30 e 19h: a paróquia não tem
  missa fixa publicada);
- novenas de N. S. do Perpétuo Socorro e de São José, momento mariano;
  na Paróquia Cristo Rei e na N. S. Aparecida a novena de terça 19h tem o
  pároco como celebrante, mas a página não diz se há missa;
- horários de comunidades da Área Missionária Claret (N. S. das Graças e
  Divino Espírito Santo) sem bairro e sem celebrante.
Terço, círculo bíblico e encontros de grupos ficaram de fora.

## Contatos

Telefone, WhatsApp, Instagram e e-mail vêm da página de cada unidade.
Ficaram de fora, de propósito:
- WhatsApp de Axinim, da Área Missionária Claret e da Área Missionária São
  Sebastião: nas três a única pessoa indicada no atendimento é o próprio
  padre, então o número pode ser pessoal. O de Axinim, além disso, vem com
  um dígito a menos (+55 92 9613-9391).
- Instagram da Paróquia N. S. da Conceição de Novo Aripuanã
  (`@paroquia-nsdaconceicao`): tem hífen, que o Instagram não aceita.
Correções feitas: o e-mail de Novo Aripuanã vem escrito "paróquiansc.na"
(com acento, que e-mail não aceita) e entrou como `paroquiansc.na@gmail.com`;
o de Nova Olinda vinha com ": " na frente. O site da Catedral
(santoantoniodeborba.com.br), indicado na página da diocese, não abriu
(erro de conexão) em 13/11/2026.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/borb0.htm e
  https://gcatholic.org/churches/local/borb0 (09/11/2026, 9 igrejas;
  estatística de 2022: 9 paróquias, 48 missões). Diferenças: o GCatholic não
  tem a Paróquia São José de Novo Céu (criada em 19/03/2023) nem as áreas
  missionárias, e traz uma "Igreja Nossa Senhora do Rosário" em Axinim sem
  marca de paróquia, que a diocese não lista (a paróquia do Rosário é a de
  Canumã).
- https://catholic-hierarchy.org/diocese/dborb.html (endereço antigo da
  cúria, Av. Getúlio Vargas, 198).

## O que falta para o próximo estado desta pesquisa

- Cidade, sede e horários da **Área Missionária N. S. do Perpétuo Socorro**:
  a página só dá forania São João (que a diocese identifica como Autazes) e
  o padroeiro; nenhuma notícia a cita. Entrou com cidade Autazes por causa
  da forania; conferir.
- Horários de São Joaquim e Sant'Ana (Autazes), São José (Novo Céu) e
  Divino Espírito Santo (Urucurituba de Autazes), e endereço das matrizes
  de Canumã, Autazes, Novo Céu e da Área Missionária São Sebastião.
- Comunidades sem bairro na fonte, no `nao_cabe` da matriz: as oito
  urbanas da Paróquia Cristo Rei; as de Claret. Comunidade São Sebastião da
  Paróquia São José (Novo Céu), citada em notícia, sem lugar.
- As paróquias têm dezenas de comunidades ribeirinhas (Novo Aripuanã 96,
  Nova Olinda mais de 60) sem lista publicada.
