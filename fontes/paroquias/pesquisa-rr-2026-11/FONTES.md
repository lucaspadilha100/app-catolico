# Pesquisa Roraima, novembro de 2026

Diocese de Roraima (sé em Boa Vista), que cobre o estado inteiro. Pesquisa feita
em 13/11/2026. O banco não tem nada de Roraima: todo `id_banco` é null.

## Resumo

- **30 unidades pastorais** em `saida/roraima.json`: 1 catedral, 12 paróquias,
  1 santuário (reitoria) e 16 áreas missionárias (aí incluídas as 7 missões
  indígenas, que a diocese lista como grupo próprio no menu do site).
- **2 unidades com horário de fonte**: Paróquia São Francisco das Chagas
  (missas de domingo, confirmadas pela diocese em setembro de 2026) e Paróquia
  São João Batista e São Luís de França (horários por comunidade na página da
  própria diocese, sem data de publicação, por isso confiança média).
- **28 unidades sem horário** (`horarios: []`), pela regra nova do dono: a
  paróquia entra mesmo assim e os fiéis mandam os horários depois. A diocese
  publica a programação de datas especiais (Natal, Cinzas, Semana Santa,
  Corpus Christi), mas não o quadro semanal de missas; horário de data
  especial não virou horário semanal.
- 132 igrejas e comunidades listadas, com endereço e bairro quando a fonte deu.
- A lista de unidades vem do menu "Paróquias & Áreas" do site da diocese
  (Paróquias, Áreas, Interior e Missões Indígenas), que é a fonte oficial
  vigente. Ela bate com o que as notícias da própria diocese citam em 2025 e
  2026; nomes antigos que aparecem em jornais (Rainha da Paz, Menino Jesus,
  Santa Clara etc.) são comunidades das unidades atuais, não paróquias.

## Decisões de formato

- Nas missões indígenas Serra da Lua, Raposa, Maturuca e São Marcos e Murupu a
  diocese não aponta igreja sede: as igrejas entraram todas como
  `comunidade`, sem matriz, e a observação da unidade diz isso.
- "Missão indígena" não existe como categoria no molde: entraram como
  `area_missionaria`, com "Missão Indígena" no nome, como o site da diocese
  as apresenta. O Surumu é exceção: a própria diocese o titula "Paróquia
  Nossa Senhora do Perpétuo Socorro".
- A Reitoria Nossa Senhora Aparecida entrou como `santuario` (a diocese usa
  "Santuário Nossa Senhora Aparecida" nas notícias).
- Páginas do site da diocese sem data de publicação levam `data: ""` na fonte;
  todas foram acessadas em 13/11/2026.

## Fontes usadas (acesso em 13/11/2026)

### Site da Diocese de Roraima (diocesederoraima.org.br)

- **Página inicial / menu "Paróquias & Áreas"**: https://diocesederoraima.org.br/
  A lista oficial das 30 unidades, agrupadas em Paróquias (8, Boa Vista),
  Áreas (5, Boa Vista), Interior (10) e Missões Indígenas (7).
- **Páginas das unidades** (muitas ainda vazias ou "em desenvolvimento"; as
  listadas abaixo têm conteúdo):
  - https://diocesederoraima.org.br/alto-alegre/: criação (1985), secretaria,
    e-mail, 7 comunidades e as comunidades indígenas do Alto Cauamé e Tabaio.
  - https://diocesederoraima.org.br/caracarai-e-iracema/: secretaria,
    telefones, 25 comunidades (Caracaraí, Baixo Rio Branco e Iracema).
  - https://diocesederoraima.org.br/rorainopolis/: secretaria, telefone,
    27 comunidades.
  - https://diocesederoraima.org.br/canta/: 26 comunidades nos setores Cantá
    e Félix Pinto.
  - https://diocesederoraima.org.br/sao-luiz-e-sao-joao-da-baliza/: criação
    (1983), secretaria e horários por comunidade (os únicos horários semanais
    do interior; onde a página dá só a hora sem o dia, foi para `nao_cabe`).
  - https://diocesederoraima.org.br/surumu/: paróquia N. Sra. do Perpétuo
    Socorro, história e 18 comunidades eclesiais.
  - https://diocesederoraima.org.br/serra-da-lua/: 26 comunidades em Bonfim e Cantá.
  - https://diocesederoraima.org.br/raposa/: 35 comunidades em 7 blocos.
  - https://diocesederoraima.org.br/maturuca/: 84 comunidades indígenas,
    65 eclesiais, 6 centros (Uiramutã).
  - https://diocesederoraima.org.br/sao-marcos-e-murupu/: comunidades e
    padroeiros das regiões Murupu e São Marcos.
  - https://diocesederoraima.org.br/catrimani/: missão Yanomami, 24
    comunidades indígenas.
  - https://diocesederoraima.org.br/sobre/ e /contato/: cúria: R. Bento
    Brasil, 613, Centro, Boa Vista; (95) 3224-3741; curia@diocesederoraima.org.br.
  - A página do Baixo Cotingo (menu) devolve 404.
- **Notícias da diocese** (deram endereço, bairro e comunidade das unidades de
  Boa Vista, e os dois horários semanais):
  - Natal 2025 (23/12/2025): endereços das comunidades de quase todas as
    unidades da capital:
    https://diocesederoraima.org.br/igrejas-catolicas-de-boa-vista-celebram-o-natal-com-programacao-especial-de-missas/
  - Quarta-feira de Cinzas (16/02/2026): endereços atualizados; missas de
    domingo habituais não constam:
    https://diocesederoraima.org.br/quarta-feiras-de-cinzas-marca-inicio-do-tempo-quaresmal-para-os-cristaos-catolicos/
  - Corpus Christi (02/06/2026): mais comunidades e endereços:
    https://diocesederoraima.org.br/igreja-catolica-celebra-solenidade-de-corpus-christi-nesta-quinta-feira-04-confira-a-programacao-na-diocese-de-roraima/
  - Semana Santa 2025 (11/04/2025): comunidades por unidade, igrejas da
    Catedral, de São Mateus, Mucajaí e Caracaraí:
    https://diocesederoraima.org.br/diocese-de-roraima-divulga-programacao-da-semana-santa-2025-com-celebracoes-em-boa-vista-e-no-interior/
  - Festa de São Francisco das Chagas (14/09/2026): "as missas do dia 4 serão
    mantidas nos horários habituais: às 7h, 9h30 e 19h30" (4/10/2026 foi um
    domingo): a fonte do horário dominical da paróquia:
    https://diocesederoraima.org.br/festa-de-sao-francisco-das-chagas-2026-tera-programacao-especial-em-sintonia-com-o-ano-jubilar-franciscano/
  - Três novas paróquias (14/04/2023): criação de Santos Arcanjos, São
    Jerônimo e Frei Galvão:
    https://diocesederoraima.org.br/diocese-de-roraima-institui-tres-novas-paroquias/
  - Santos Arcanjos (29/09/2025), Imaculada Conceição (03/12/2025), festejos
    (05/11/2025), São Brás (03/02/2026), festa de N. Sra. Aparecida
    (06/10/2026): endereços de comunidades e da reitoria.
  - Festa das comunidades São Raimundo Nonato (08/12/2022): contagem de
    comunidades da área.
  - Posse do pároco do Caroebe (25/02/2025) e posse dos padres de Pacaraima
    (29/08/2026).
  - Jubileu dos Migrantes em Pacaraima (23/06/2025): comunidade Sagrado
    Coração de Jesus.

### Outras fontes

- **Folha de Boa Vista**: https://www.folhabv.com.br/?p=573608 (07/10/2025):
  confirma a Paróquia Nossa Senhora de Nazaré em Normandia e o afastamento do
  pároco; https://www.folhabv.com.br/cotidiano/romaria-e-celebracoes-marcam-festa-de-nossa-senhora-aparecida-em-boa-vista-neste-fim-de-semana/
  (outubro de 2025): crédito de foto ao perfil @santuarioaparecidarr, visto só
  no trecho que a busca mostra (Instagram não se lê por dentro), único
  Instagram institucional que entrou.
- **Buscas na web** (confirmação de município): Missão Catrimani na Terra
  Indígena Yanomami, município de Caracaraí (notícias e Missionários da
  Consolata); Surumu no município de Pacaraima (comunidade Barro, Centro
  Indígena de Formação e Cultura Raposa Serra do Sol); Baixo Cotingo como
  etno-região da TI Raposa Serra do Sol.
- **Wikipédia, Catholic-Hierarchy e GCatholic**: só para achar o site oficial
  e conferir a ordem de grandeza da lista; nenhum horário ou contato saiu delas.

## O que ficou faltando (para os fiéis ou nova pesquisa)

- Horário semanal de missa de 28 unidades, confissões e adoração de todas.
- Telefone e WhatsApp da maioria (só Caracaraí e Rorainópolis publicam).
- Instagram das paróquias (as buscas não mostraram perfis; Instagram não se lê
  por dentro).
- Sede e comunidades das áreas do Bonfim, de Pacaraima e Amajari, do Projeto
  de Assentamento Nova Amazônia e da missão Baixo Cotingo.
