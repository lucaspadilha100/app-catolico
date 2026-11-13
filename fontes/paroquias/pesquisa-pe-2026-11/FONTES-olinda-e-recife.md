# Arquidiocese de Olinda e Recife (PE): fontes da pesquisa de 13/11/2026

Sé metropolitana em Olinda (Catedral do Santíssimo Salvador do Mundo, no Alto
da Sé). A arquidiocese abrange 19 municípios e o arquipélago de Fernando de
Noronha. Arcebispo: Dom Paulo Jackson Nóbrega de Sousa; auxiliares: Dom
Josivaldo José Bezerra e Dom Henrique Nereudo Freire. Cúria Metropolitana:
Avenida Rui Barbosa, 409, Graças, Recife, (81) 3271-4270, de segunda a sexta
das 8h às 13h. Padroeiro da arquidiocese: Santo Antônio (13 de junho).

## Resumo

- **162 unidades** em `saida/olinda-e-recife.json`: 150 paróquias, 2
  catedrais (a Sé de Olinda e a Concatedral de São Pedro dos Clérigos, no
  Recife), 4 basílicas sem paróquia (Carmo e Sagrado Coração no Recife, São
  Bento em Olinda, Auxiliadora em Jaboatão), 4 santuários sem paróquia (Mãe
  Rainha e Carmo em Olinda, Fátima no Recife, Prazeres dos Montes
  Guararapes) e 2 áreas pastorais (São Paulo da Cruz e São José, no Recife;
  São Benedito, no distrito de Botafogo, Itapissuma).
- Cidades: Recife (63), Jaboatão dos Guararapes (22), Olinda (18), Cabo de
  Santo Agostinho (8), Vitória de Santo Antão (7), Paulista (7), Camaragibe
  (6), São Lourenço da Mata (5), Ipojuca, Abreu e Lima e Igarassu (4 cada),
  Escada e Moreno (3 cada), Itapissuma (2) e uma em cada: Fernando de
  Noronha, Primavera, Amaraji, Pombos, Ilha de Itamaracá, Araçoiaba.
- **105 com horário** (98 paróquias e 7 das outras unidades), todas com
  confiança `media`; **57 sem horário**, com `horarios: []` e confiança
  `baixa` (52 paróquias, o Santuário do Carmo de Olinda, o Santuário dos
  Prazeres, a Concatedral e as 2 áreas pastorais).
- Por que `media` e não `alta`: quase todos os horários vêm de uma única
  página da arquidiocese, "Horários de Missas", atualizada em 17/09/2026, mas
  sem data por paróquia e com sinais de texto acumulado ao longo dos anos
  (paróquias repetidas com horários diferentes, blocos fora do lugar). Onde
  as duas versões divergem, o JSON leva só o que as duas têm em comum e a
  outra parte vai para o `nao_cabe` (Barro, San Martin, Cajueiro Seco,
  Várzea, Nova Descoberta).
- Paróquias com matriz santuário ou basílica: Morro da Conceição (Santuário
  de N. Sra. da Conceição, tipo `santuario`), N. Sra. da Apresentação de
  Escada (santuário mariano desde 2021, tipo `santuario`) e N. Sra. da Penha
  (Basílica da Penha, tipo `matriz`). Ficaram com categoria `paroquia`.
- Todo `id_banco` é null.
- A observação de cada unidade traz o vicariato e a região episcopal. São 13
  vicariatos em 4 regiões: Norte (Olinda, Paulista, Igarassu), Centro
  (Beberibe, Boa Viagem, Jardim São Paulo, Soledade, Várzea), Oeste (São
  Lourenço, Vitória) e Sul (Cabo, Jaboatão, Ibura). As regiões vêm da
  notícia do Diario de Pernambuco de 11/2026 sobre os 350 anos da
  arquidiocese.

## Lista das unidades

Fonte principal: o site da arquidiocese, lido pela API do WordPress
(`/wp-json/wp/v2/pages`), porque a página inicial devolve 406 (Mod_Security)
para o curl com agente de navegador. Nada foi contornado: a API respondeu
normalmente.

- Uma página por município, filha de https://www.arquidioceseolindarecife.org/paroquias/
  (endereço, CEP, telefone, data de criação, clero, e-mail e vicariato de
  cada paróquia). As de Cabo, Camaragibe, Escada, Ipojuca, Itamaracá,
  Itapissuma, Igarassu, Fernando de Noronha, Araçoiaba, Amaraji e Abreu e
  Lima foram atualizadas em 21 a 23/10/2026; a do Recife em 04/11/2025.
- Uma página por vicariato, com a lista numerada das paróquias:
  - https://www.arquidioceseolindarecife.org/soledade/ (17 paróquias, mais
    oratórios, capelanias, 2 basílicas e o Santuário de Fátima; 21/10/2026)
  - https://www.arquidioceseolindarecife.org/vicariato-beberibe/ (13; 05/2026)
  - https://www.arquidioceseolindarecife.org/boa-viagem/ (14; 05/2026)
  - https://www.arquidioceseolindarecife.org/cabo/ (16; 02/2025)
  - https://www.arquidioceseolindarecife.org/varzea/ (8 e uma área pastoral; 02/2025)
  - https://www.arquidioceseolindarecife.org/jardim-sao-paulo/ (11; 02/2025)
  - https://www.arquidioceseolindarecife.org/vitoria-2/ (12; 12/2025)
  - https://www.arquidioceseolindarecife.org/vicariato-ibura/ (8; 03/2026)
  - https://www.arquidioceseolindarecife.org/vicariato-jaboatao/ (8; 02/2025)
  - https://www.arquidioceseolindarecife.org/vicariato-paulista/ (11; 02/2025)
  - https://www.arquidioceseolindarecife.org/vicariato-sao-lourenco/ (diz 10,
    lista 11; 10/2025)
  - https://www.arquidioceseolindarecife.org/paroquias/igarassu/ (7 e uma
    área pastoral; 05/2024)
  - https://www.arquidioceseolindarecife.org/paroquias/olinda/ (14, a
    Catedral e 2 santuários; 02/2025)
- Soma das listas dos vicariatos: 150 paróquias, igual ao número que a
  própria arquidiocese publica ("150 paróquias") nas páginas de vicariato. As
  páginas por município dão as mesmas 150.
- Para contatos e endereço, o JSON segue a fonte mais nova de cada paróquia
  (página do município ou do vicariato, a data está em `fontes`).

Conferência contra o GCatholic (https://gcatholic.org/churches/local/olin0,
atualizado em 09/11/2026, 175 igrejas, com o vicariato de cada uma): 146
igrejas marcadas como paróquia mais a Basílica da Penha, também paróquia.
Bate com a lista da arquidiocese, com estas diferenças:

- São João Paulo II (Penedo, São Lourenço da Mata, instalada em 10/05/2023)
  aparece no GCatholic sob Recife e sem a marca de paróquia.
- Santo Antônio de Barra de Jangada (Jaboatão, criada em 14/02/2023)
  aparece sem a marca de paróquia.
- N. Sra. do Rosário de Jaboatão Centro aparece com a cidade Recife.
- O GCatholic dá São Pedro dos Clérigos como concatedral; a arquidiocese a
  lista como oratório com reitor no Vicariato Soledade. Entrou como
  `catedral`, sem horário.
- Igrejas históricas de Olinda sem marca de paróquia (Bonfim, Misericórdia,
  Neves, Amparo, Boa Hora, Rosário dos Pretos, São Francisco, São João dos
  Militares, São Sebastião, N. Sra. da Conceição), o Seminário de N. Sra. da
  Graça, o Convento de Santo Antônio de Igarassu e a capela do Abrigo Cristo
  Redentor (Jaboatão) não são unidades pastorais e ficaram fora.

## Horários (lidos em 13/11/2026)

- https://www.arquidioceseolindarecife.org/horarios-de-missas/ (atualizada
  em 17/09/2026): basílicas, santuários e cerca de 100 paróquias. É a fonte
  de quase todos os horários.
- Páginas próprias, usadas onde trazem mais detalhe:
  - https://www.arquidioceseolindarecife.org/nossa-senhora-da-apresentacao-escada/
    (Santuário de Escada, 08/2024; mais completa que a página geral, que
    traz outra grade; o santuário chama de "celebração")
  - https://www.arquidioceseolindarecife.org/catedral/ (Sé de Olinda, 08/2024:
    só a missa de domingo às 9h)
  - https://www.arquidioceseolindarecife.org/mae-rainha/ (06/2024)
  - https://www.arquidioceseolindarecife.org/nossa-senhora-de-fatima/
    (05/2025; não traz a missa de domingo às 18h que a página geral traz;
    ficou a da página geral, com a divergência anotada)
  - https://www.arquidioceseolindarecife.org/nossa-senhora-auxiliadora/
    (missa todo dia 24 ao meio-dia)
- Morro da Conceição: o teto do santuário desabou em 30/08/2024 (notícia da
  arquidiocese de 02/09/2024); os horários da página geral podem não valer
  enquanto durar a reconstrução.
- Interpretações registradas: "De terça e quintas-feiras" (Santo Antônio dos
  Guararapes) virou terça e quinta; o bloco de capelas que aparece depois de
  Santo Antônio de Barra de Jangada (Capela N. Sra. de Lourdes do Hospital
  dos Servidores, Capela São Joaquim e Sant'Ana, Praça N. Sra. de Fátima no
  Rosarinho) termina com o telefone da Paróquia do Espinheiro e foi para o
  `nao_cabe` dela; "Nossa Senhora do Ó/Paulista" é a paróquia de Pau
  Amarelo; "Nossa Senhora Aparecida, Bela Vista/Vitória" é a Paróquia N.
  Sra. da Conceição Aparecida e São João Batista.

## Contatos

- Só telefones e e-mails institucionais. Ficaram fora e-mails pessoais de
  padres publicados nas listas (São José de Abreu e Lima, Santa Joana d'Arc,
  N. Sra. Aparecida de Parque Capibaribe, N. Sra. do Amparo de Vitória,
  reitor da Penha, prior de São Bento, a lista antiga de São João Batista de
  Comportas) e um e-mail genérico suspeito (Mangueira: "mangueira@gmail.com").
- Instagram só dos perfis escritos nas próprias páginas da arquidiocese
  (nenhum foi aberto): catedralseolindaoficial, santuariomaerainhaolinda,
  paroquiasaojosecasacaiada, paroquiasantaritadecassia.uol,
  matrizcristoredentorjordao, paroquiadaiputinga,
  nossasenhoradasgracasengdomeio, pnsg.curado, paroquiadavarzea,
  santoantoniotorroes, santoantoniobarra, paroquiadorosariomuribeca,
  santuarionossasenhoraescada.
- Sites conferidos: `paroquiadaboaviagem.org` hoje é um site de cassino
  (domínio perdido) e `paroquiadefatimaboaviagem.com.br` está parado desde
  2007; os dois ficaram fora do JSON. Não responderam pelo proxy:
  paroquianossasenhoradoo.com, paroquiasaopiox-pe.com.br,
  paroquiasaojoaobatista-pe.com.br, paroquiadorosariopina.org.br,
  paroquiadavarzea.com.br, paroquiadefatima-olinda.net.br,
  maerainhaolindaerecife.com; basilicadocarmorecife.org.br com certificado
  vencido (não lido). paroquiadasgracas.org está "em construção".
- Distrito de Botafogo (Área Pastoral São Benedito) fica em Itapissuma
  (busca na web; reportagem de 2023 sobre títulos de propriedade).

## Pendências (sem paróquia indicada ou sem lugar)

- Oratórios do Vicariato Soledade, com reitor e sem paróquia: S. José dos
  Manguinhos (Graças), Santa Teresinha (Derby; a página geral traz missa de
  terça a sexta às 17h, sábado às 16h, domingo às 8h e 17h), Santa Cruz (Boa
  Vista), N. Sra. do Rosário (Boa Vista; missa tridentina), N. Sra. da
  Conceição dos Militares (Santo Antônio), Divino Espírito Santo (Santo
  Antônio), São Miguel (Espinheiro). Capelanias de hospitais, Bombeiros e
  Polícia Militar.
- Colégio Maria Tereza (Boa Viagem; capelania no Vicariato Boa Viagem):
  terça e quinta 18h, quarta e sexta 6h40, sábado 18h, domingo 10h30 e 17h
  (página geral).
- Mariápolis Santa Maria (Ana de Albuquerque, Igarassu; Focolares): segunda
  a sábado 18h, domingo 8h30 (página geral). A página não diz a paróquia.
- Comunidades ligadas ao Santuário do Morro sem lugar na fonte: São Domingos
  Sávio, Santa Ana, Perpétuo Socorro, São João Batista (a de São José
  Operário, no Alto José Bonifácio, entrou).
- Capelas de Barra de Jangada (N. Sra. Aparecida, N. Sra. da Esperança, São
  Vicente de Paulo, Bom Pastor, comunidade N. Sra. das Graças), de Candeias
  (capela Mãe Rainha, comunidade Carolinas) e do Espinheiro (N. Sra. dos
  Aflitos e outras): a fonte dá horários, mas não o bairro; ficaram no
  `nao_cabe` da matriz.

## O que falta para o próximo estado desta pesquisa

- Horários das 52 paróquias que a página geral não traz, entre elas
  Fernando de Noronha, Porto de Galinhas, N. Sra. do Ó (Ipojuca), Iputinga,
  Afogados, Cristo Redentor (Jordão) e as paróquias de Vitória de Santo
  Antão. As buscas na web (8 feitas) não trouxeram trechos de Instagram nem
  páginas oficiais com horário; o caminho é o perfil de cada paróquia ou a
  secretaria.
- Confissão: nenhuma fonte da arquidiocese publica horário de confissão.
- Reconferir as paróquias com versões duplicadas na página geral (Barro,
  San Martin, Cajueiro Seco, Várzea, Nova Descoberta) e o Santuário do Morro
  depois da reconstrução.
- Endereço da Concatedral de São Pedro dos Clérigos (só "Pátio de São
  Pedro") e da matriz da Área Pastoral São Benedito (Botafogo).

## Circunscrições de Pernambuco (conferência no GCatholic)

https://gcatholic.org/dioceses/diocese/olin0 (Província Eclesiástica de
Olinda e Recife): a arquidiocese e 9 sufragâneas, Afogados da Ingazeira,
Caruaru, Floresta, Garanhuns, Nazaré, Palmares, Pesqueira, Petrolina e
Salgueiro. São as 10 circunscrições de Pernambuco no GCatholic, e todas
estão nos pedidos desta leva. Não há prelazia nem eparquia com sede no
estado; o Ordinariado Militar é nacional.

## Conferência e apoio (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/olin0 (sufragâneas, bispos)
- https://gcatholic.org/churches/local/olin0 (anuário de igrejas, 09/11/2026)
- https://gcatholic.org/churches/data/all-BR (igrejas especiais por estado)
- https://www.arquidioceseolindarecife.org/curia-metropolitana/ (cúria)
- https://www.arquidioceseolindarecife.org/primeira-paroquia-dedicada-a-sao-joao-paulo-ii-da-arquidiocese-e-instalada-em-sao-lourenco-da-mata/ (11/05/2023)
- https://www.arquidioceseolindarecife.org/em-missa-presidida-por-dom-paulo-jackson-governadora-e-prefeito-prometem-ajuda-a-comunidade-para-reerguer-santuario-do-morro/ (02/09/2024)
- https://www.diariodepernambuco.com.br/vida-urbana/2026/11/11728798-arquidiocese-de-olinda-e-recife-celebra-350-anos-com-programacao-especial.html (regiões episcopais, 150 paróquias)
