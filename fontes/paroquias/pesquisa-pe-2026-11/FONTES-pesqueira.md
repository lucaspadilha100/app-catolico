# Diocese de Pesqueira (PE): fontes da pesquisa de 13/11/2026

Sé em Pesqueira; Agreste e Sertão do Moxotó. Bispo: Dom José Luiz Ferreira
Salles, CSsR. Cúria: Rua Cardeal Arcoverde, 23, Centro, Pesqueira, (87)
3835-1562. Padroeiro diocesano: São José.

## Resumo

- **35 unidades pastorais** em `saida/pesqueira.json`: 1 catedral (Santa
  Águeda), 26 paróquias, 5 áreas pastorais (uma delas a Reitoria São Miguel),
  1 área missionária e 2 santuários, em 4 regiões pastorais (Arcoverde, Belo
  Jardim, Brejo da Madre de Deus e Pesqueira).
- **29 com horário de missa** (26 com confiança alta, 3 média). O site da
  diocese tem uma página por unidade, com horários, contatos e redes; a API
  do WordPress dá a data de atualização de cada uma (quase todas entre julho e
  setembro de 2026). Média: Fazenda Nova e N. S. do Carmo (páginas de 2024) e
  N. S. da Conceição de Belo Jardim (ver Decisões).
- **6 sem horário** (`"horarios": []`, confiança baixa), porque a página da
  diocese deixa a grade vazia e a busca na web se esgotou antes desta etapa:
  N. S. do Bom Conselho (Belo Jardim), Área Missionária São Bartolomeu e
  Santa Rita (Belo Jardim), São José (Cruzeiro do Nordeste, Sertânia),
  Reitoria São Miguel, Santuário da Divina Misericórdia e Área Pastoral Santo
  Antônio (Serra das Varas), as três em Arcoverde.
- 13 comunidades (só nome e lugar) vieram da nota da diocese com as missas de
  Finados de 2020: Pão de Açúcar, Cacimbão, Papagaio, Vila do Socorro e Vila
  do Salobro (Alagoinha), Vila do Socorro e Vila Nova (São Vicente Férrer),
  Mandaçaia, Serrote Apertado, Umburanas, Moderna, Henrique Dias e Algodões.
  Os horários daquela nota são só do dia de Finados e não entraram.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem da página "Paróquias" do site da diocese e do tipo de conteúdo
`paroquia` da API do WordPress (35 itens, com a região pastoral de cada um
na taxonomia `local_paroquia`: Arcoverde 13, Belo Jardim 9, Brejo da Madre
de Deus 4, Pesqueira 9).

Conferência contra o GCatholic (atualizado em 09/11/2026: 22 paróquias e 5
missões, 27 igrejas): as 27 entradas estão nas 35 da diocese. A diocese
lista a mais: N. S. das Dores (Poção), N. S. Mãe da Santa Esperança
(Arcoverde, paróquia desde 2022), São Manoel da Paciência (Xucuru), as áreas
N. S. do Carmo, Santa Terezinha (Mutuca), São Vicente Férrer (Serra dos
Ventos) e Santo Antônio (Serra das Varas), e a Área Missionária São
Bartolomeu e Santa Rita. O GCatholic dá como santuários o da Divina
Misericórdia (Arcoverde) e o de N. S. da Graça (Aldeia Guarda, Cimbres);
a diocese os lista entre as unidades, e eles entraram como `santuario`.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedepesqueira.com.br/paroquias/ (lista e regiões pastorais)
- https://diocesedepesqueira.com.br/wp-json/wp/v2/paroquia?per_page=100
  (as 35 unidades com data de atualização e região)
- Uma página por unidade, `https://diocesedepesqueira.com.br/paroquia/<slug>/`,
  com ano de criação, telefone, e-mail (protegido pelo Cloudflare e
  decodificado), expediente, endereço, clero, horários e os ícones de
  Facebook, YouTube, WhatsApp e Instagram da própria unidade.
- https://diocesedepesqueira.com.br/horarios-das-missas-de-finados-na-diocese-de-pesqueira/
  (31/10/2020; só os nomes das comunidades)
- Notícias sobre São Manoel da Paciência (23/01/2020 e 02/06/2023), para o
  lugar da sede.

## Decisões

- **N. S. da Conceição (Belo Jardim)**: a página põe "Comunidade Eclesial
  Missionária N. S. das Dores" junto das missas de sábado e "CEM São José
  Operário" junto das de domingo, sem dizer quais horários são lá. Os
  horários ficaram na matriz, com observação, e a unidade com confiança média.
- **São Pedro e São Paulo (Belo Jardim)**: as missas de segunda a sexta e a
  de sábado às 7h são no Oratório de São Pedro, sem lugar publicado: foram
  para `nao_cabe`.
- **São Manoel da Paciência**: o endereço do site diz "área pastoral", o
  título diz "Paróquia" (criação em 17/06/2024); entrou como paróquia. Sede
  no distrito de Xucuru, posto em Belo Jardim (notícia de 2023, DDD 81); a
  nota de 2020 o põe sob Sanharó.
- **Regiões**: segui o site. Duas diferem da nota de 2020: Sagrado Coração
  de Jesus (Sertânia) aparece em Belo Jardim, e São José (Venturosa) em
  Arcoverde.
- "Última terça do mês" (Poção) foi para `nao_cabe`. Exposição do
  Santíssimo em Sanharó (segunda a sexta, 8h às 12h) entrou como adoração.
- WhatsApp só quando o link `wa.me` traz o mesmo número do telefone com nono
  dígito; links `wa.me` de oito dígitos ou só de mensagem ficaram de fora.
- Telefone como publicado: (87) 8849-1377 (Cruzeiro do Nordeste) e 81
  9282-6295 (São Domingos) estão sem o nono dígito na própria página.

## Conferência da lista (não usada para horário)

- https://gcatholic.org/dioceses/diocese/pesq0.htm e
  https://gcatholic.org/churches/local/pesq0

## O que falta para o próximo estado desta pesquisa

- Horários das 6 unidades sem grade (Instagram pela busca: areapastoralbj
  para São Bartolomeu e Santa Rita; as outras não publicam rede na página).
- Confissões: nenhuma página publica.
- Endereço e contato da Área Pastoral Santo Antônio (Serra das Varas).
- Comunidades rurais com horário: só a nota de Finados de 2020 as nomeia.
