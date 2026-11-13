# Diocese de Oliveira (MG): fontes da pesquisa de 13/11/2026

Sé em Oliveira, centro-sul de Minas; sufragânea de Belo Horizonte. Bispo:
Dom Antônio Carlos Paiva (bispo diocesano desde 07/10/2026, antes
coadjutor; GCatholic). Padroeiros diocesanos: São José e São Sebastião.
Site: https://www.dioceseoliveira.org.br/ (WordPress; o servidor às vezes
derruba a conexão, e a página 3 da lista precisou de nova tentativa).

## Resumo

- **30 unidades** em `saida/oliveira.json`, em 19 cidades: 1 catedral (N. S.
  de Oliveira) e 29 paróquias. Em quatro a matriz é santuário diocesano e
  entrou com a primeira igreja de tipo `santuario`: N. S. das Candeias
  (Candeias), N. S. do Carmo (Carmo da Mata), N. S. Aparecida (Oliveira) e
  Santo Antônio de Pádua (Santo Antônio do Amparo). Quatro ficam em
  distritos: Macaia (Bom Sucesso), Mercês de Água Limpa (São
  Tiago), Morro do Ferro (Oliveira) e São Sebastião da Estrela (Santo
  Antônio do Amparo).
- **Nenhuma com horário**: a página "Paróquias" do site da diocese traz,
  para cada paróquia, a data de criação, endereço, telefone, e-mails, clero
  e a lista de comunidades, oratórios e ermidas, mas nenhum horário de
  missa; nenhuma paróquia tem página própria citada pela diocese (só a N. S.
  do Carmo de Campo Belo cita um site, que não respondeu). Todas entraram
  com `horarios: []` e confiança baixa. Lista em `SEM-HORARIO-oliveira.txt`.
- **431 comunidades** ligadas à paróquia que a diocese indica, com nome e
  lugar (bairro, setor ou comunidade rural). As que a lista dá sem lugar
  ficaram em `nao_cabe` da matriz. Entraram como `santuario`: Santuário
  Pontifício Senhor Bom Jesus de Matosinhos (Candeias), Santuário Diocesano
  do Santo Cristo dos Milagres (Matinha, Paróquia São Sebastião de
  Oliveira) e Santuário Diocesano N. S. Imaculada Conceição Aparecida
  (Santana do Jacaré). Ermidas e oratórios (casas paroquiais, hospitais,
  asilos, conventos) ficaram fora.
- Forania: a diocese tem quatro (notícia de 2018), mas o site não diz quais
  paróquias formam cada uma; só a Forania de Santo Antônio é citada pelo
  nome. A observação de cada item diz isso.
- Todo `id_banco` é null.

## Lista das unidades

- https://www.dioceseoliveira.org.br/paroquias/ e as páginas 2 a 6
  (`/paroquias/2/` ... `/paroquias/6/`), lidas em 13/11/2026: 30 paróquias,
  em ordem de cidade.

Conferência contra o GCatholic (atualizado em 09/11/2026: 30 paróquias, 1
missão, 34 igrejas): bate nas 30. O GCatholic marca como santuário também a
matriz de Itaguara (N. S. das Dores), que a diocese não chama assim.

## Contatos

- Telefone e e-mail como publicados; quando há dois e-mails, o primeiro
  (em geral o @gmail.com) foi para `email` e o outro para a observação.
- Cana Verde: a diocese publica telefone da residência e do escritório;
  entrou o do escritório.
- São Francisco de Paula: telefone publicado com 8 dígitos depois do DDD,
  (37) 9918-5429, mantido como está.
- Sem telefone publicado: São Bernardo de Claraval (Macaia), N. S. das
  Graças (Perdões) e São Sebastião (São Sebastião da Estrela).
- Nenhum Instagram citado. A notícia "Paróquias se mobilizam para
  transmissão de missas e orações" (26/03/2020) cita a página da Pascom da
  Paróquia São João Bosco no Facebook (`psjbosco.pascom`) e diz que a
  paróquia de Aguanil transmite missas.

## Outras páginas lidas

- https://www.dioceseoliveira.org.br/curia/ e /diocese/ (sem foranias)
- Busca na API do site (`/wp-json/wp/v2/search` e `/posts?search=`) por
  horário, missas, forania, região pastoral: só notícias antigas, nenhum
  quadro de horários.
- https://gcatholic.org/dioceses/diocese/oliv0.htm,
  https://gcatholic.org/churches/local/oliv0 e as 30 páginas de igreja
  (sem forania e sem site).

## O que falta para o próximo estado desta pesquisa

- Horários das 30 paróquias: só a busca (perfis de Instagram e Facebook
  das paróquias) deve resolver. Nenhum perfil é citado pela diocese, exceto
  o Facebook da Pascom de São João Bosco.
- A divisão das 30 paróquias nas quatro foranias.
- Comunidades sem lugar na lista (ver `nao_cabe` de cada matriz).
