# Arquidiocese de Brasília (DF): fontes da pesquisa de 13/11/2026

Sé em Brasília, com todo o Distrito Federal. Arcebispo: Cardeal Dom Paulo
Cezar Costa. Bispos auxiliares: Dom Antonio Aparecido de Marcos Filho
(Vicariato Norte), Dom Ricardo Hoepers (Centro), Dom Denilson Geraldo, SAC
(Sul) e Dom Vicente Tavares (Leste). Cúria: (61) 3213-3333,
imprensa@arquidiocesedebrasilia.org.br.

## Resumo

- **167 unidades pastorais** em `saida/brasilia.json`: 1 catedral, 1 basílica
  (Santuário Basílica São Francisco de Assis, Asa Norte), 7 santuários que são
  sede de paróquia na lista da arquidiocese (N. S. da Saúde, N. S. de Fátima da
  Asa Sul, Santo Antônio, São João Bosco, Santíssimo Sacramento, N. S. do
  Perpétuo Socorro de Taguatinga e Menino Jesus de Brazlândia) e 158 paróquias.
- Por vicariato (com os setores da página de cada vicariato):
  - **Norte, 33**: Setor III (Asa Norte, Lago Norte, Granja do Torto) 13,
    Setor VIII (Sobradinho, Sobradinho II, Fercal, Grande Colorado) 11,
    Setor XV (Planaltina) 9.
  - **Centro, 49**: Setor I (Asa Sul W3, Sudoeste, Cruzeiro, Octogonal) 13,
    Setor II (Asa Sul L2, Esplanada, Vila Planalto, Lago Sul, Park Way) 11,
    Setor IV (Guará, Núcleo Bandeirante, Park Way, Candangolândia,
    Estrutural, Park Sul) 11, Setor XI (Paranoá, PAD-DF, São Sebastião, Lago
    Sul, Nova Betânia, Itapoã, Jardim Botânico, Jardins Mangueiral) 14.
  - **Sul, 53**: Setor V (Taguatinga) 17, Setor VI (Ceilândia e Sol
    Nascente) 20, Setor X (Brazlândia) 4, Setor XII (Águas Claras, Areal,
    Riacho Fundo, Vicente Pires, Arniqueira) 12.
  - **Leste, 32**: Setor VII (Gama e Engenho das Lajes) 10, Setor IX
    (Samambaia) 11, Setor XIII (Recanto das Emas e Riacho Fundo II) 6,
    Setor XIV (Santa Maria) 5.
- **163 com horário de missa** (107 com confiança alta, 56 média) e 4 com
  `confianca: "baixa"`. 156 têm horário de confissão e 20 têm adoração.
  - Alta: a página da paróquia no site da arquidiocese foi atualizada a partir
    de junho de 2025 (a maioria entre setembro e novembro de 2026).
  - Média: a página foi atualizada pela última vez entre janeiro e maio de
    2025 (quase todas em 13 ou 14/02/2025, numa revisão em lote), ou o
    horário veio do site da própria paróquia sem data (São José de Anchieta),
    ou a página traz só parte dos horários (São Sebastião do Engenho das
    Lajes).
  - Baixa, sem missa: Maria de Nazaré (Samambaia) e Divino Espírito Santo
    Paráclito (Vargem Bonita, Park Way), cujas páginas não trazem horário;
    Santíssima Trindade (Guará II) e São Domingos Sávio (Riacho Fundo I),
    cujas páginas dão as missas sem o dia da semana (ficou no `nao_cabe`,
    as confissões entraram).
- **242 capelas e comunidades**, 215 com horário, todas ligadas à paróquia
  pela própria página da paróquia (campo de horários e campo "Nome e
  endereço das capelas"). Bairro e endereço da capela só quando a página dá.
- `cidade` é a Região Administrativa: Brasília é o Plano Piloto (Asa Sul,
  Asa Norte, Esplanada, Vila Planalto, Granja do Torto); as demais são as
  RAs (Taguatinga, Ceilândia, Gama, Samambaia, Sudoeste/Octogonal, Cruzeiro,
  Sol Nascente/Pôr do Sol, Fercal...). Arapoanga (Planaltina), Água Quente
  (Recanto das Emas) e Areal (Águas Claras) ficaram como `localidade`,
  porque é assim que a arquidiocese e as próprias paróquias as publicam.
- Todo `id_banco` é null: o banco ainda não tem nada do Distrito Federal.
- O vicariato e o setor de cada unidade estão no começo da `observacao`.

## A lista das unidades

O domínio antigo `arquidiocesedebrasilia.org.br` não responde mais (nem DNS);
o site oficial hoje é **arqbrasilia.com.br** (WordPress com GeoDirectory). Os
e-mails institucionais seguem no domínio antigo.

- https://arqbrasilia.com.br/vicariatos/ e as quatro páginas de vicariato:
  https://arqbrasilia.com.br/vicariato-norte/,
  https://arqbrasilia.com.br/vicariato-centro/,
  https://arqbrasilia.com.br/vicariato-sul/ e
  https://arqbrasilia.com.br/?page_id=3876 (Leste). Cada uma lista as
  paróquias por setor e bairro. Somadas dão 167, o número que a página
  "Vicariatos" anuncia ("167 Paróquias e 2 Áreas Pastorais"). Os cabeçalhos
  de setor e de vicariato não batem com as próprias listas (o Centro diz 47
  e lista 49; o Sul diz 52 e lista 53; o Setor VI diz 19 e lista 20).
- https://arqbrasilia.com.br/wp-sitemap-posts-gd_place-1.xml: 172 páginas
  de paróquia (`/todas_paroquias/<slug>/`), cada uma com a data da última
  atualização. Cada unidade da lista dos vicariatos tem a sua página. As 5
  páginas que sobram ficaram fora:
  - `igrejinha-nossa-senhora-de-fatima` (2023) e
    `nossa-senhora-da-assuncao-aguas-claras` (2023) e
    `sao-francisco-vicente-pires` (2023): duplicatas antigas, sem horário, de
    unidades que têm página nova. A Igrejinha da 307/308 Sul entrou como
    igreja do Santuário N. S. de Fátima, com os horários da página nova.
  - `beato-jose-allamano` (2023, vazia): a Paróquia Beato José Allamano foi
    criada em 1996 (diz a página da Consolata), mas não está em nenhuma lista
    atual da arquidiocese. O endereço (QS 305, Conjunto 1, Lotes 1-4,
    Samambaia Sul) e a localização são os da Paróquia São Bento, que está na
    lista do Setor IX. Tratamos como a mesma igreja; o GCatholic ainda a
    chama de "São José Allamano".
  - `capelania-divino-mestre` (2023, sem horário): capelania na Capela Santa
    Luzia da Colônia Agrícola Samambaia (Taguatinga Norte), sem paróquia
    indicada. Ver pendências.
- https://arqbrasilia.com.br/paroquias/: tabela mais antiga, com 154 linhas e
  o texto "153 Paróquias e 2 Áreas Pastorais". Serviu só para conferir
  nomes antigos (Menino Jesus de Praga, São José Operário do Lúcio Costa).
  Ela lista o Santuário de Schoenstatt de Sobradinho, que não é paróquia e
  não está nas listas dos vicariatos.
- As "2 Áreas Pastorais" do texto estão desatualizadas: Jesus Bom Pastor
  (Estrutural) virou paróquia em 07/04/2024, e a de São José Operário de
  Vicente Pires é descrita na própria página como paróquia criada em 2018.
  As duas entraram como `paroquia`.

## Horários e contatos

Uma página por unidade, `https://arqbrasilia.com.br/todas_paroquias/<slug>/`,
com endereço, telefone, WhatsApp, e-mail, Instagram, site, horário da
secretaria, horários de missa e de confissão, clero, vicariato, setor e
capelas. A URL e a data da última atualização de cada uma estão em `fontes`.
Exemplos:

- https://arqbrasilia.com.br/todas_paroquias/catedral-nossa-senhora-aparecida/
- https://arqbrasilia.com.br/todas_paroquias/santuario-sao-francisco-de-assis/
- https://arqbrasilia.com.br/todas_paroquias/santo-afonso-sao-sebastiao/
  (14 capelas com bairro e endereço)
- https://arqbrasilia.com.br/todas_paroquias/nossa-senhora-aparecida-paddf/
  (9 capelas rurais do PAD-DF)

O texto dos horários é livre (cada paróquia escreve do seu jeito). Foi lido
linha a linha e passado para o formato à mão; o que não cabe (missa todo dia
12, missa nas quadras ou nas casas, celebração da Palavra, confissão "antes
das missas") ficou no `nao_cabe` da igreja certa. Celebração da Palavra não
entrou como missa.

Outra fonte, só para uma unidade: https://psjanchieta.com.br/ (site da
Paróquia São José de Anchieta, Paranoá Parque, sem data), de onde vieram as
missas; a página da arquidiocese só tinha confissões.

Contatos: telefone, WhatsApp, e-mail e Instagram são os da página de cada
paróquia (secretaria). Telefone publicado sem DDD ganhou o 61; nenhum número
foi convertido. Quando a página traz mais de um número, ficou o primeiro, e
no WhatsApp o celular. O Instagram só entrou quando o link está na página e
o usuário cabe em 30 caracteres. Um e-mail tem erro de digitação no domínio,
copiado como está: nsperpetuo.ceilandia@arquidiocesdebrasilia.org.br.

Não foi usado: o buscador "Horários de Missas" do site
(https://arqbrasilia.com.br/horarios-de-missas/), que lê 155 registros
`event_listing` de 2023, mais antigos que as páginas das paróquias.

## Conferência com o GCatholic

https://gcatholic.org/dioceses/diocese/bras0.htm e
https://gcatholic.org/churches/local/bras0 (atualizado em 09/11/2026): 152
igrejas na arquidiocese, estatística de 2022 com 156 paróquias. Batendo nome
e cidade, as paróquias do GCatholic estão na nossa lista, com estas
diferenças:

- **São Jorge e Santo Expedito (Taguatinga)**, listada como paróquia, não
  aparece em nenhuma página da arquidiocese. A localização do GCatholic fica
  a 400 m da Paróquia São Sebastião (QNL, Taguatinga Norte). Ficou fora; ver
  pendências.
- **São José Allamano (Samambaia Sul)**: é a mesma igreja da Paróquia São
  Bento (mesma localização, a 30 m). Ver acima.
- Fora da lista por serem de outra jurisdição ou não serem paróquia: a
  Catedral Militar Rainha da Paz, as paróquias Espírito Santo e São Miguel
  Arcanjo e Santo Expedito (Ordinariado Militar), São Charbel (maronita),
  Divino Mestre (capela de rito romeno), o Santuário de Schoenstatt e o
  Santuário Dom Bosco como simples santuário (na arquidiocese ele conta como
  unidade do Setor I, e entrou).
- O GCatholic põe algumas paróquias em outra cidade (Bom Jesus dos Aflitos,
  N. S. Auxiliadora e N. S. da Esperança de Vicente Pires em Taguatinga;
  Imaculado Coração de Maria em Águas Claras). Seguimos o endereço da
  arquidiocese.
- Faltam no GCatholic unidades criadas ou listadas depois (por exemplo
  Bem-Aventurada Virgem Maria de Guadalupe, Santo Antônio de Sant'Anna
  Galvão no Taquari, São João Paulo II do Park Sul e do Mangueiral, N. S. de
  Fátima de Planaltina, Jesus Bom Pastor, Santa Bernadete).

## O que falta para o próximo estado desta pesquisa

- Horários de Maria de Nazaré (Samambaia Sul, (61) 3357-2706) e do Divino
  Espírito Santo Paráclito (Vargem Bonita, Instagram paroquiavargembonita):
  nenhuma página publica. A busca na web também não achou.
- Dia da semana das missas da Santíssima Trindade (Guará II: 7h30, 10h e
  19h), de São Domingos Sávio (Riacho Fundo I: 7h, 9h na Capela Santos
  Anjos, 11h e 19h) e de parte das missas de Santo Afonso (São Sebastião).
  Quase certamente são de domingo, mas a página não diz.
- Confirmar se a Paróquia São Jorge e Santo Expedito (Taguatinga) existe.
- Capelania Divino Mestre (Capela Santa Luzia, Colônia Agrícola Samambaia,
  Chácara 143, Lote 13): a fonte não diz a que paróquia pertence.
- Capela N. S. de Fátima do Setor de Chácaras Lúcio Costa (Paróquia São
  José do Guará): a página fala em "celebração" aos sábados às 18h sem dizer
  se é missa.
- São José Esposo de Maria (Sobradinho II): o campo de capelas da página
  traz São Lucas, Santo Antônio e São Marcos, que são as capelas de São
  Mateus; ficou só a Capela São Bento, citada nos horários.
- As 56 unidades de confiança média: as páginas não são mexidas desde o
  começo de 2025. Vale reconferir pelo Instagram de cada uma (só o trecho da
  busca) ou pedir à Pastoral da Comunicação da arquidiocese, que mantém as
  páginas (imprensa@arquidiocesedebrasilia.org.br).
