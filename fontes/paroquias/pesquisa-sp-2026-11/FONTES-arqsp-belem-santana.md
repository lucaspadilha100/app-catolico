# Arquidiocese de São Paulo, Regiões Episcopais Belém e Santana: fontes da pesquisa de 13/11/2026

Parte da pesquisa da Arquidiocese de São Paulo dividida em três: esta cobre
só as Regiões Episcopais **Belém** (zona leste) e **Santana** (zona norte).
Sé e Ipiranga, Lapa e Brasilândia estão em outros arquivos. Todas as
unidades ficam na cidade de São Paulo.

- Região Belém: vigário episcopal Dom Cícero Alves de França. Sede: Av.
  Álvaro Ramos, 366, Belenzinho, (11) 2693-0287,
  secretariaepiscopalbelem@gmail.com.
- Região Santana: vigário episcopal Dom Márcio Antonio Vidal de Negreiros,
  OSA. Sede: Av. Marechal Eurico Gaspar Dutra, 1877, Santana,
  (11) 2991-5335, regiaosantana@uol.com.br.

## Resumo

- **127 unidades pastorais** em `saida/arqsp-belem-santana.json`, todas
  paróquias (a arquidiocese não lista quase-paróquia nem área pastoral
  nestas duas regiões):
  - **Belém: 67** em 5 decanatos (Santa Maria e São José 12, São Lucas 14,
    Santa Maria Madalena 13, São Timóteo 12, Sant'Ana e São Joaquim 16).
  - **Santana: 60** em 5 decanatos de 12 cada (São Judas Tadeu, São Tiago
    Zebedeu, São Matias, Santa Marta, Santa Maria e São Lázaro, Santo
    Estêvão).
- **37 com horário de missa** (34 com confiança alta, 3 média): Belém 30 de
  67, Santana 7 de 60. As outras **90 entraram com `horarios: []` e
  confiança baixa** (regra do dono), com o motivo na observação.
- 365 linhas de horário (missa, confissão e adoração), mais três
  comunidades com endereço e horário (Paróquia N. S. de Fátima e São Roque).
- Dois santuários entraram como `paroquia` com a primeira igreja de tipo
  `santuario`, no molde de Taubaté: N. S. do Sagrado Coração (Vila Formosa)
  e N. S. da Salette (Santana, santuário diocesano).
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Por que tão poucas com horário

A arquidiocese tem uma página por paróquia (tipo `parish` do WordPress,
lida em 13/11/2026), com pároco, data de fundação, decanato, endereço,
contato e um campo "Expediente". Em 25 páginas da Região Belém e em
uma de Santana (N. S. do Carmo, Vila Paulistana) esse campo traz missas e
confissões. Nas demais ele traz **só o horário da secretaria**, no formato
antigo "Sábado, das 08:00 as 12:00" (não são missas: não entraram), e em
cinco vem vazio.

Para essas, buscamos o site que a própria página da arquidiocese indica.
Deram horário em texto: N. S. do Sagrado Coração, Santa Isabel Rainha,
N. S. de Fátima e São Roque, São Paulo Apóstolo (Belém, só missas
especiais), N. S. Aparecida dos Ferroviários (blog, só o domingo), N. S. da
Salette, Santa Teresinha (Santana), Santa Zita, Candelária, Anunciação e
Loreto. A maioria dos outros sites não respondeu (domínio sem DNS ou
recusado pelo proxy em 13/11/2026: a observação de cada paróquia diz
"O site indicado não respondeu"), e alguns publicam o horário só em imagem
(Jesus Ressuscitado, N. S. Aparecida do Jardim São Paulo) ou por programa
(N. S. Aparecida de Edu Chaves). Instagram e Facebook não foram abertos. A
busca na web não achou páginas das paróquias com horário.

## Lista das unidades

A lista vem das páginas das regiões, que dão as paróquias por decanato:

- https://arquisp.org.br/regiao-belem/ (67 paróquias)
- https://arquisp.org.br/regiao-santana/ (60 paróquias)

batidas com a API do site, `https://arquisp.org.br/wp-json/wp/v2/parish`
(312 paróquias na arquidiocese; categoria `regiao-belem` = 67,
`regiao-santana` = 60: bate com as páginas, nenhuma sobra de um lado ou de
outro). O mapa oficial (https://arquisp.org.br/mapa/) usa a mesma lista.

Nomes: o JSON usa o título da página da paróquia (h1), sem o bairro que a
lista acrescenta depois de um travessão ("Paróquia São João Batista" seguida do bairro Brás
virou "Paróquia São João Batista", localidade Brás). A página da região
chama "Paróquia São Vicente Pallotti" a que no título se chama "Paróquia São
Vicente Pallotti e São Pedro Apóstolo"; ficou o título.

### Conferência contra o GCatholic

https://gcatholic.org/churches/local/zpau0 (atualizado em 09/11/2026, 334
igrejas na arquidiocese). O GCatholic agrupa por SETORES antigos (Belém,
Brás, Carrão/Vila Formosa, Conquista, Guarani, São Mateus, Sapopemba,
Tatuapé, Vila Alpina, Vila Antonieta, Vila Prudente; Casa Verde, Imirim,
Jaçanã, Mandaqui, Medeiros, Santana, Tremembé, Tucuruvi, Vila Maria), não
pelos decanatos de hoje; o setor do GCatholic vai entre parênteses na
observação de cada paróquia.

- **123 das 127** casam com uma paróquia do GCatholic (homônimas resolvidas
  pelo setor e pelo bairro).
- **4 não estão no GCatholic**, todas recentes: São João Paulo II (criada
  em 26/07/2026), N. S. das Flores (2024), São Gaspar Bertoni (2024) e Santa
  Dulce dos Pobres. N. S. do Carmo do Jardim Roseli (criada em 16/08/2026)
  foi casada com a "Nossa Senhora do Carmo" do setor São Mateus.
- As paróquias do GCatholic nesses setores que sobram são de OUTRAS
  regiões, conferido na API da arquidiocese: setor Brás (Bom Jesus,
  Casaluce, São Januário, São Vito, mais a igreja Dom Bosco) é da Região
  Sé; setor Vila Prudente (N. S. da Glória, Pilar, Santo Emídio, São José
  de Vila Zelina, Imaculada Conceição) é da Região Ipiranga; setores Casa
  Verde (N. S. das Graças da Vila Carolina, Santo Antônio do Limão, São Luiz
  Gonzaga da Vila Santa Maria, São Miguel Arcanjo da Vila Prado) e Mandaqui
  (N. S. de Fátima da Vila Dionísia, Sagrada Família do Jardim Peri) são da
  Região Brasilândia.
- Divergências de tipo: o GCatholic chama Sant'Ana de basílica menor (a
  arquidiocese, de paróquia; entrou como `paroquia`) e marca N. S. do
  Sagrado Coração e N. S. da Salette como santuário (seguido).

## Contatos

Telefone, e-mail, site e Instagram vêm da página de cada paróquia no site
da arquidiocese (o e-mail do link `mailto:`); WhatsApp só quando a página
o rotula assim. Celulares sem rótulo não entraram. Ficaram de fora:

- o Instagram ligado na página de São Miguel Arcanjo (Belém), que é o
  perfil pessoal do pároco;
- e-mails que parecem pessoais (N. S. das Graças da Vila Antonieta, Santa
  Maria Madalena, São Roque);
- e-mails repetidos de outra paróquia: secretariabelem@hotmail.com aparece
  também em São João Batista (Chácara Califórnia) e Divino Espírito Santo,
  e paroquiasaopatricio_sp@ig.com.br em Anunciação e Santa Dulce dos Pobres.
  Para a Anunciação usamos o e-mail do site dela.

O campo `site` só leva os sites que responderam em 13/11/2026.

## Sites das paróquias usados para horário (lidos em 13/11/2026)

- https://www.santuariodemaria.com.br/missas e /atendimento-dos-padres
  (N. S. do Sagrado Coração)
- https://isabelrainha.com.br/missas/ e /confissoes/
- https://santuarionsf.com.br/ e /comunidades.html (Fátima e São Roque)
- https://www.paroquiasaopaulo.org/missas (São Paulo Apóstolo, Belém)
- https://nsaparecidadosferroviarios.blogspot.com/ (post da Semana Santa
  de 2025)
- https://nossasenhoradaconceicao.com.br/ (bate com a arquidiocese e soma a
  confissão de segunda e a adoração de quinta)
- https://nsrasalette.org.br/
- https://paroquiasantateresinha.com.br/
- https://paroquiasantazita.org.br/novo/
- https://candelaria.org.br/horarios/
- https://paroquiaanunciacao.net/index.html
- https://nsloreto.org.br/

## Pendências para o próximo estado

- 90 paróquias sem horário. Caminho mais curto: pedir às secretarias, ou
  reabrir os sites que não responderam deste ambiente (lista na observação
  de cada uma).
- Capelas citadas sem endereço, no `nao_cabe` da matriz: Capela Santa Maria
  Goretti (Santa Zita), Capela da Ressurreição (Fátima e São Roque) e as seis
  comunidades da N. S. do Carmo do Jardim Roseli.
- Igrejas que só o GCatholic lista, sem paróquia indicada pela arquidiocese:
  Maria Mãe dos Migrantes (nota "Paróquia São Marcos Evangelista"), Sagrado
  Coração de Jesus ("Paróquia São Miguel Arcanjo"), São José Operário
  ("Paróquia Jesus Ressuscitado") e São Judas Tadeu ("Paróquia Imaculado
  Coração de Maria"), no setor Conquista; N. S. dos Espinhos (Vila Alpina),
  Regina Mundi (Tatuapé), Santo Antônio de Pádua (setor Belém) e a capela do
  Hospital Dom Pedro II (Jaçanã). Não entraram.
- Comunidades de Jesus Ressuscitado (Guadalupe, Santo Agostinho) estão só
  em imagem no site da paróquia.
- Endereço de N. S. do Sagrado Coração: o santuário publica Rua Angá, 994; a
  arquidiocese, Avenida Renata, 1 (ficou o da arquidiocese).
- Santa Teresinha (Santana): o site diz "missas na semana 7h30 e 19h30" sem
  os dias; entrou como segunda a sexta, confiança média.
