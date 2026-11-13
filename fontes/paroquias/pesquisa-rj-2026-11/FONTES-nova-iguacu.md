# Diocese de Nova Iguaçu (RJ): fontes da pesquisa de 13/11/2026

Sé em Nova Iguaçu; Baixada Fluminense. Bispo: Dom Gilson Andrade da Silva.
Cúria: Rua Dom Adriano Mandarino Hypolito, 8, Moquetá, Nova Iguaçu,
(21) 2767-7943, gabinetedobispo@diocesedenovaiguacu.org.br. Municípios:
Nova Iguaçu, Belford Roxo, Mesquita, Nilópolis, Queimados, Japeri, Paracambi
e o distrito de Conrado (Miguel Pereira).

## Resumo

- **52 unidades pastorais** em `saida/nova-iguacu.json`: 1 catedral (Santo
  Antônio de Jacutinga) e 51 paróquias, em 10 foranias agrupadas em 5
  vicariatos (Sede: foranias 1 e 2; Metropolitano: 3 e 4; Sul: 5 e 6; Leste:
  7 e 8; Oeste: 9 e 10). Cidades: Nova Iguaçu (24), Belford Roxo (10),
  Mesquita (6), Nilópolis (4), Queimados (4), Japeri (2), Paracambi (2).
- **Só 2 com horário**, ambas com confiança média, lidas apenas pelo trecho
  que a busca mostra (os sites não abriram daqui):
  - São Francisco de Assis (Comendador Soares): domingo 6h30, 8h e 19h, do
    site da paróquia (igrejasaofrancisco.com.br/horarios, sem data).
  - Santo Antônio da Prata (Parque Rosário): segunda e quinta 19h, domingo
    8h e 18h, da página da paróquia no Facebook (sem data). O trecho trazia o
    e-mail santoantoniodaprata@gmail.com, diferente do da diocese; o JSON
    segue a diocese.
- As outras 50 entraram com `"horarios": []` e confiança baixa, pela regra do
  dono. O site da diocese não publica horário de missa de nenhuma paróquia.
- Instagram: nenhum. A diocese não publica perfis das paróquias, e a busca
  não mostrou perfil paroquial com horário.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem das 10 páginas de forania do site da diocese
(https://diocesedenovaiguacu.org.br/forania1/ a /forania10/), todas
atualizadas entre 07 e 11/11/2026 (campo `modified` da API do WordPress). Cada
página dá, por paróquia: endereço da matriz com CEP e bairro, telefone e
e-mail da secretaria, equipe pastoral e a lista de comunidades. Foi conferida
com a página "Paróquias por Foranias"
(https://diocesedenovaiguacu.org.br/paroquias/, de 21/08/2025): bate
paróquia por paróquia, mudando só o vigário forâneo da forania 2.

Conferência contra o GCatholic (https://gcatholic.org/dioceses/diocese/nova2.htm
e https://gcatholic.org/churches/local/nova2, atualizados em 09/11/2026):
estatística de 2022 com "52 parishes, 6 missions", igual às 52 da diocese.
Diferenças de rótulo, sem mudar a contagem:

- O GCatholic põe a Paróquia São Miguel Arcanjo e São Pedro em Belford Roxo;
  a diocese a dá em Miguel Couto, Nova Iguaçu (Rua São Pedro, 74). O JSON
  segue a diocese.
- O GCatholic lista N. S. Aparecida (Nova Iguaçu) sem a marca de paróquia; é
  a Paróquia N. S. Aparecida da Grama, paróquia na diocese.
- O GCatholic chama de "Nosso Senhor do Bonfim" a Paróquia Senhor do Bonfim
  (Engenheiro Pedreira, Japeri) e de "São Jorge e N. S. do Perpétuo Socorro"
  a Paróquia N. S. do Perpétuo Socorro e São Jorge (Nova Aurora, Belford
  Roxo).
- Ficaram fora, por não serem unidade pastoral da diocese: o Seminário Paulo
  VI, o Mosteiro de Santa Clara e as capelas N. S. das Mercês e São
  Sebastião, N. S. do Bom Conselho e São José (todas da Paróquia N. S. da
  Conceição de Rosa dos Ventos, na lista da diocese).
- A **Administração Apostólica Pessoal São João Maria Vianney** aparece na
  página da forania 4 (casa paroquial na Rua Taubaté, 12, Rodilândia,
  (21) 3046-1616). Não é unidade da diocese: atende a Comunidade N. S. do
  Perpétuo Socorro e São Judas Tadeu, que a própria página diz pertencer à
  Paróquia N. S. da Conceição de Rosa dos Ventos. A comunidade entrou nessa
  paróquia, com localidade Rodilândia.

A diocese não publica a contagem de paróquias no "Quem somos"; diz só que é
"dividida em dez Regionais Pastorais" (as foranias).

## Contatos

Telefones copiados como estão nas páginas de forania (DDD 21 acrescentado
quando a página o omite no segundo número). Quando há mais de um, o primeiro
vai em `telefone` e os outros na observação. Exceções:

- N. S. da Conceição (Marapicu): a página dá o telefone da matriz
  (21) 2686-1987 e o da secretaria (21) 2766-0966; `telefone` é o da
  secretaria.
- São Sebastião (Lages, Paracambi): o número vem marcado "(WhatsApp)" e foi
  também para `whatsapp`.
- São Vicente de Paulo (Belford Roxo): o único contato publicado é um celular,
  (21) 96631-2452.
- Paróquias com secretaria fora da matriz (Santa Luzia, N. S. de Fátima de
  Santa Maria, Santo Agostinho, São Simão): o endereço da secretaria está na
  observação.
- Menino Jesus de Praga e São Sebastião de Austin publicam o mesmo telefone,
  (21) 2763-1871 (paróquias vizinhas dos mesmos frades).

## Capelas e comunidades

As páginas de forania listam as comunidades de cada paróquia, mas quase
nunca com bairro. Pela regra, entraram como igreja só as que têm lugar na
fonte:

- São Simão (Belford Roxo): 8 comunidades com o lugar entre parênteses
  (Wona, Parque União, Amorim, Outeiro, Jardim do Ipê, Itapuã, Maringá,
  Roseiral).
- N. S. da Conceição (Japeri): Comunidade Senhora Sant'Ana, em Conrado,
  Miguel Pereira.
- N. S. da Conceição (Rosa dos Ventos): a de Rodilândia, citada acima.

As outras (mais de 300 nomes) ficaram no `nao_cabe` da matriz como
"Comunidades sem bairro na fonte". A Igreja de N. S. de Guadalupe (Marapicu),
marcada pela diocese como "Desativada, tombada pelo IPHAN", ficou fora.

## Fontes de horário tentadas e descartadas

- Páginas de paróquia no próprio site da diocese
  (https://diocesedenovaiguacu.org.br/paroquiasantoantoniodejacutinga/ e
  /paroquia-fatima-e-jorge/): são modelos com texto de preenchimento; a de
  Fátima e São Jorge repete endereço, contato e horário da Catedral. Não
  servem.
- igrejafatimaejorge.com.br: o certificado do site não é aceito pelo proxy, e
  pela busca o conteúdo é antigo (rodapé de 2013, outro pároco). Não entrou.
- paroquiaaparecidanilopolis.blogspot.com/p/missas.html (N. S. Aparecida,
  Nilópolis): abriu, com missas e confissões, mas a página é de 23/07/2016.
  Não entrou; fica para conferência.
- senhoradasgracasmesquita.com.br, nsconceicaonil.com.br,
  igrejasaofrancisco.com.br: o proxy não conectou (resposta 502).
- Notícias da diocese com horários (Quarta-feira de Cinzas 2023, Finados
  2021 a 2025): são celebrações do dia, não a grade semanal.
- Agregadores (liriocatolico, horariodemissa, missahora, buscamissa,
  horariosmissa) apareceram na busca com horários de várias paróquias, mas
  não são da paróquia nem da diocese. Não usados.

## O que falta para o próximo estado desta pesquisa

- Horários das 50 paróquias sem grade. O caminho mais curto é abrir, com o
  host liberado, os sites que não conectaram e os perfis oficiais das
  paróquias, ou pedir à diocese uma lista.
- Reconfirmar os horários de Comendador Soares e da Prata na fonte inteira.
- Bairro das comunidades: a diocese só dá os nomes.
- Instagram das paróquias.
