# Diocese de Ipameri (GO): fontes da pesquisa de 13/11/2026

Sé em Ipameri; sudeste de Goiás (Catalão, Caldas Novas, Pires do Rio).
Bispo: Dom José Francisco Rodrigues do Rêgo. Cúria: Av. Barão do Rio Branco,
01, Centro, Ipameri, (64) 3491-1634, diocesedeipameri@gmail.com.

## Resumo

- **25 unidades** em `saida/ipameri.json`: 1 catedral, 23 paróquias e o
  Santuário Diocesano Nossa Senhora da Salete (Caldas Novas, `santuario`,
  não é paróquia, mas a diocese o lista entre as unidades da Forania Oeste).
  Foranias: Norte (5), Centro (3), Oeste (5 paróquias e o santuário), Sul (7)
  e Sudoeste (4).
- **7 com horário**: Catedral, N. S. das Dores (Caldas Novas), Bom Jesus da
  Cana Verde (Corumbaíba) e o Santuário da Salete com confiança alta; São
  Francisco de Assis e São José Operário (Catalão) e São Sebastião (Rio
  Quente) com média. As outras 18 entraram com `horarios: []` e confiança
  baixa: a página da paróquia no site da diocese só traz endereço, telefone
  e clero, e a busca não achou nada publicado pela paróquia.
- Capelas: só as comunidades rurais de Corumbaíba têm lugar na fonte e
  entraram como igrejas; as demais capelas com horário ficaram no `nao_cabe`
  da matriz (a fonte não dá bairro).
- Todo `id_banco` é null.

## Lista das unidades

Menu "Paróquias" do site da diocese, por forania, e uma página (post do
WordPress) por paróquia, lidas pela API (`/wp-json/wp/v2/posts`, categorias
regiaocentro, regiaonorte, regiaooeste, regiaosul, regiaosudoeste). As datas
no campo `fontes` são a data de modificação de cada página.

Conferência com o GCatholic (09/11/2026; 25 paróquias nas estatísticas de
2022): bate na contagem. Diferenças de lista:

- O GCatholic não tem N. S. Aparecida (Pires do Rio, criada em 2021) nem São
  José Operário (Catalão, 2021), e lista "São José (Parish)" em Santo Antônio
  do Rio Verde e "Nossa Senhora Aparecida" em Davinópolis. A diocese tem a
  Paróquia São José em Davinópolis (a página antiga era da capela N. S.
  Aparecida). Seguimos a diocese.
- **Bom Jesus da Lapa (Domiciano Ribeiro) NÃO entrou**, por orientação da
  coordenação: ela já está na pesquisa da Diocese de Luziânia, que a põe na
  Forania Cristalina. **Divergência**: o site da Diocese de Ipameri ainda a
  lista na Forania Centro, com página própria
  (https://diocesedeipameri.com.br/paroquias/regiaocentro/paroquia-bom-jesus-da-lapa/,
  editada em 26/01/2022, endereço Av. Paranaíba, 333, Domiciano Ribeiro,
  (64) 3438-3104, missas quinta 19h30 e domingo 8h e 19h30), e o GCatholic
  também a põe em Ipameri. Domiciano Ribeiro é distrito de Ipameri.
- Fora da lista: Centro Diocesano de Formação Pastoral (cúria) e Convento
  Santíssimo Nome de Jesus, noviciado franciscano (zona rural de Catalão).

## Páginas lidas (13/11/2026)

- https://diocesedeipameri.com.br/ (menu de paróquias por forania)
- https://diocesedeipameri.com.br/paroquias/regiaocentro/paroquia-catedral-divino-espirito-santo/ (horários de 13/04/2026)
- https://diocesedeipameri.com.br/paroquias/regiaooeste/paroquia-nossa-senhora-das-dores/ (25/02/2026)
- https://diocesedeipameri.com.br/paroquias/regiaosudoeste/paroquia-bom-jesus-da-cana-verde/ (13/04/2026)
- https://diocesedeipameri.com.br/paroquias/regiaosul/paroquia-sao-francisco-de-assis/ (26/11/2024)
- https://diocesedeipameri.com.br/paroquias/regiaosul/paroquia-sao-jose-operario/ (página antiga, 12/01/2022, com horários) e .../paroquiasaojoseoperario-catalao/ (2024, só contato)
- https://saletecaldas.com.br/santuario/ (site do Santuário da Salete, modificado em 17/08/2026: programação semanal, endereço e telefones)
- As demais páginas de paróquia estão no campo `fontes` de cada item.

## Instagram (só pelo trecho da busca, nenhum aberto por dentro)

- paroquiasaosebastiaorq (Rio Quente): o trecho dá missa na matriz quarta e
  sábado 19h e domingo 8h e 19h; a parte das capelas é ambígua e ficou no
  `nao_cabe`.
- pardivinoespiritosanto (Catedral), psaofrancisco.assis (São Francisco,
  Catalão), paroquiasvicentedepaulo (São Vicente de Paulo, Catalão; o
  trecho cita um pároco diferente do da página da diocese) e
  santuariosaletecaldas (no site do santuário): só o perfil.

## Pendências

- **Capela São José (Anhanguera)**: a diocese tem página própria na Forania
  Sudoeste (Pe. Murah Rannier Peixoto Vaz, (64) 99973-9967), sem dizer a que
  paróquia pertence. O padre é pároco de Corumbaíba e administrador de
  Marzagão. Não entrou.
- Capela São Lucas e Capela São Maximiliano (Catalão): a página de 2024 de
  São Francisco de Assis e a de 2022 de São José Operário listam as duas.
- Horários das 18 paróquias sem horário; as páginas da diocese mandam falar
  com a secretaria. O anuário diocesano no site é de 2020 (link quebrado).
- Igrejas sem bairro na fonte (capelas da Catedral, das Dores, de São
  Francisco de Assis e a Igreja São Sebastião de Corumbaíba) e o
  "Jubileum" de Caldas Novas, que tem missas próprias mas sem endereço.

## Buscas

Cerca de 40 buscas no total das quatro dioceses; para Ipameri quase nada:
o buscador não acha perfis de paróquias pequenas de Goiás.
