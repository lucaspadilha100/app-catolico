# Arquidiocese de Feira de Santana (BA): fontes da pesquisa de 13/11/2026

Sé metropolitana em Feira de Santana; sufragâneas Bonfim, Irecê, Juazeiro,
Paulo Afonso, Ruy Barbosa e Serrinha. Arcebispo: Dom Zanoni Demettino
Castro. Cúria: Av. Getúlio Vargas, 394, Feira de Santana, (75) 3623-9027
(catholic-hierarchy.org). Padroeira: Senhora Sant'Ana.

## Resumo

- **46 unidades** em `saida/feira-de-santana.json`: 1 catedral e 45
  paróquias (duas com matriz santuário: Senhor dos Passos e Santo Antônio,
  as duas no centro de Feira), em 7 foranias: I Senhora Sant'Ana (7),
  II Nossa Senhora Aparecida (5), III São Pedro e São Paulo (8),
  IV São Mateus (7), V São Marcos (5), VI São Lucas (6), VII São João (8).
- Cidades: Feira de Santana (27, das quais 8 em distritos: Bonfim de Feira,
  Ipuaçu, Humildes, Maria Quitéria, Jaguara, Tiquaruçu, Matinha, Jaíba)
  e uma em cada: Antônio Cardoso,
  Anguera, Ipecaetá, Santo Estêvão, Serra Preta, São Gonçalo dos Campos,
  Conceição da Feira, Amélia Rodrigues, Conceição do Jacuípe, Irará,
  Ouriçangas, Água Fria, Pedrão, Candeal, Santa Bárbara, Santanópolis,
  Tanquinho, e duas em Coração de Maria (sede e distrito de Retiro).
- **1 com horário** (confiança alta): Paróquia Santuário Senhor dos Passos,
  pela página Missas do site do santuário (santuário, Igreja de N. S. dos
  Remédios e Igreja de N. S. da Piedade; a Comunidade Santa Dulce dos Pobres,
  na Queimadinha, tem "missa aos domingos" sem hora, no `nao_cabe`).
- **45 sem horário** (confiança baixa), listadas em
  `SEM-HORARIO-feira-de-santana.txt`. A página da arquidiocese só traz
  endereço, telefone e e-mail de cada paróquia.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site da arquidiocese
(https://arquidiocese-fsa.org.br/paroquias/), organizada por forania, com
endereço, telefone e e-mail. Lida em 13/11/2026.

Conferência contra o GCatholic (https://gcatholic.org/churches/local/feir0,
atualizado em 09/11/2026: 39 paróquias, mais 8 seminários que não são
unidade) e contra o catholic-hierarchy.org (39 paróquias no anuário de
2024): as 39 do GCatholic estão todas na lista da arquidiocese. A
arquidiocese tem 7 a mais, que entraram: N. S. do Carmo (Serraria Brasil),
São João XXIII (bairro SIM), Santa Dulce dos Pobres (Pampalona), N. S. de
Guadalupe (distrito de Jaíba), N. S. das Dores (distrito de Retiro, Coração
de Maria), São Vicente Ferrer (distrito de Tiquaruçu) e São Roque (distrito
de Matinha). Nenhuma delas é quase-paróquia na lista: todas vêm como
"Paróquia".

## Contatos: o que ficou fora, e por quê

- Paróquia Senhor do Bonfim (Bonfim de Feira): a lista repete o telefone
  da São João Paulo II, (75) 3021-3955, e dá o e-mail
  contato@paroquiasenhordobonfim.com.br, cujo domínio é o site da Paróquia
  Senhor do Bonfim de Ipatinga (MG). Os dois ficaram fora.
- Paróquia N. S. dos Remédios (Ipuaçu): a lista repete o telefone da Todos
  os Santos, (75) 3021-3383; ficou fora (o e-mail próprio entrou).
- Telefones de 8 dígitos ((75) 8844-5456, São José Operário; (75) 8712-0500,
  Antônio Cardoso) entraram como publicados, sem conversão.
- O CEP da Paróquia N. S. do Carmo (40301-110) é de Salvador; o endereço
  entrou sem CEP.
- Site www.senhoradasgracas.com.br (N. S. das Graças) não respondeu.

## Catedral

O site da catedral (https://catedraldesantana.com.br/) tem as páginas
"Missas e Confissões" e "Atendimentos e Confissões", mas o conteúdo é a
programação reduzida da pandemia (fevereiro de 2021; páginas de 2020 a
2022). Não entrou como horário. Dele vieram só os contatos da secretaria
(telefone (75) 3623-0055, WhatsApp (75) 99244-0055,
paroquia@catedraldesantana.com.br).

## Páginas lidas (13/11/2026)

- https://arquidiocese-fsa.org.br/paroquias/ (a lista oficial)
- API https://arquidiocese-fsa.org.br/wp-json/wp/v2/search (notícias de posses
  canônicas de 2026 e retrospectiva 2025; nenhuma traz horário regular)
- https://www.santuariosenhordospassos.com.br/missas (horários)
- https://www.santuariosenhordospassos.com.br/comunidades (igrejas filiais
  e endereços)
- https://catedraldesantana.com.br/a-secretaria-paroquial/ e
  /missas-e-confissoes/ (contatos; horário desatualizado, não usado)

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/feir0.htm e
  https://gcatholic.org/churches/local/feir0
- https://www.catholic-hierarchy.org/diocese/dfeir.html

## O que falta para o próximo estado desta pesquisa

- Horários de 45 paróquias. A lista da arquidiocese não cita Instagram de
  nenhuma paróquia; a rodada de busca vai precisar achar os perfis pelo
  nome da paróquia e da cidade.
- Capelas e comunidades de todas as paróquias, menos o Senhor dos Passos.
- Confirmar telefone e e-mail das paróquias de Bonfim de Feira e de Ipuaçu.
