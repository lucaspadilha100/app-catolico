# Diocese de Bauru (SP): fontes da pesquisa de 13/11/2026

Sé em Bauru; centro-oeste paulista, sufragânea de Botucatu. Bispo: Dom
Rubens Sevilha, OCD. Cúria: Rua Fernando Costa, 3-30, Vila Nova Santa
Clara, Bauru, (14) 3879-8706. Padroeiro diocesano: Divino Espírito Santo
(a diocese se apresenta como "Diocese do Divino Espírito Santo").

## Resumo

- **42 unidades pastorais** em `saida/bauru.json`: 1 catedral e 41
  paróquias, em 7 regiões pastorais. Cidades: Bauru (26), Agudos (3),
  Pederneiras (3) e uma em cada: Arealva, Avaí, Boracéia, Cabrália Paulista,
  Duartina, Gália, Iacanga, Lucianópolis, Paulistânia, Piratininga. A
  Paróquia São José de Gália atende também o município de Fernão (3
  capelas com `cidade` Fernão).
- **42 com horário de missa, todas com confiança alta**: o site da diocese
  tem uma página por paróquia (tipo próprio `paroquias` do WordPress, 43
  itens) com endereço, telefone, WhatsApp, e-mail, redes, horário da
  secretaria, missas da matriz e de cada capela e as devoções. As páginas
  foram editadas entre abril e agosto de 2026 (a data de cada uma está no
  campo `fontes`); a maioria em 14/05/2026.
- Adoração ao Santíssimo entrou onde a página dá dia e hora (Catedral,
  Maria de Nazaré e capelas, Sagrado Coração, Assunção, Santa Clara,
  Santo Antônio de Agudos, São Benedito, São Judas e São Dimas, São Judas
  de Pederneiras, Santa Maria de Piratininga, Hora Santa de Santa Luzia).
- **Nenhuma paróquia publica horário de confissão.** A Paróquia
  Universitária do Sagrado Coração diz no site que a confissão é com hora
  marcada pelo WhatsApp da secretaria (anotado no `nao_cabe`).
- Duas paróquias têm a matriz santuário e entraram como `paroquia` com a
  primeira igreja de tipo `santuario`: Nossa Senhora Aparecida (a diocese a
  chama de "Santuário Nossa Senhora Aparecida") e a Paróquia Universitária
  do Sagrado Coração de Jesus (o site da paróquia e o GCatholic chamam a
  igreja de santuário; a página da diocese, não). O Santuário Nossa Senhora
  de Fátima (Jardim Estoril) é igreja da Paróquia São Judas Tadeu e São
  Dimas e entrou como segunda igreja, de tipo `santuario`.
- Terços, celebrações da Palavra e missas sem lugar ou sem dia certo
  (asilos, hospitais, "missa de setor", "última sexta do mês", "dia 13 de
  cada mês") ficaram no `nao_cabe`. Capelas sem bairro nem endereço na
  fonte também (Santa Maria de Piratininga, São Paulo Apóstolo de Agudos,
  Senhor Bom Jesus de Bauru, Santa Catarina de Arealva, entre outras).
- Todo `id_banco` é null: o banco ainda não tem nada de São Paulo.

## Lista das unidades

A lista vem da API do site da diocese
(`/wp-json/wp/v2/paroquias?per_page=100`, 43 itens), batida com a página
"Paróquias" e com as 7 páginas de região pastoral.

Conferência contra o GCatholic (atualizado em 09/11/2026, 42 paróquias
nas estatísticas, 41 igrejas latinas na lista): bate em tudo, com duas
diferenças.

- A Paróquia Nossa Senhora Aparecida de **Agudos** (Parque Pampulha),
  criada em 12/10/2019 segundo a diocese, não está na lista de igrejas do
  GCatholic (que lista em Agudos só Santo Antônio e São Paulo Apóstolo).
  Entrou, seguindo a diocese; as estatísticas do GCatholic (42 paróquias)
  já a contam.
- A **Paróquia Maronita Nossa Senhora do Líbano** (Bauru) aparece no site
  da diocese, mas pertence à Eparquia Maronita do Brasil (o próprio site
  diz) e o GCatholic a lista como "outra igreja dentro do território".
  Ficou fora; a página dela não tem horário nem contato.

Nenhuma cidade da diocese aparece nas outras pesquisas de São Paulo.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedebauru.com.br/paroquias-diocese/ (a lista)
- https://diocesedebauru.com.br/regiao-pastoral-1/ a `/regiao-pastoral-7/`
- https://diocesedebauru.com.br/horarios-de-missas/ (busca por dia e hora,
  montada sobre os mesmos dados; vale só para a matriz)
- https://diocesedebauru.com.br/wp-json/wp/v2/paroquias (API, com a região
  pastoral e a cidade de cada paróquia)
- Uma página por paróquia em `https://diocesedebauru.com.br/paroquias/<slug>/`;
  as URLs estão no campo `fontes` de cada item do JSON.

O endereço antigo `bispadobauru.org.br` (que o GCatholic ainda cita, e que
aparece nos e-mails das paróquias) não responde; o site atual é
`diocesedebauru.com.br`.

## Conferência com os sites das próprias paróquias

- https://www.santuarioaparecidabauru.com.br/secretaria-virtual/horario-das-missas
  (2023): igual à diocese.
- https://www.pnsg.com.br/horario-das-missas/: igual à diocese; acrescenta
  que a missa de segunda é pela saúde.
- https://paroquiasantoantonio.org.br/missas: igual à diocese; dá a hora
  (15h) da missa da Mãe Peregrina na 1ª terça.
- https://saobeneditobauru.com.br/horarios-de-missa (2026): acrescenta a
  adoração de quinta (8h às 17h) e a missa de quinta às 17h com bênção do
  Santíssimo, que a página da diocese não traz. Entraram.
- https://sagradocoracaobauru.com.br/horarios-de-missa/: igual à diocese;
  traz as missas mensais em datas fixas (Santa Filomena, Beata Clélia
  Merloni, carismática, universitária) e a confissão com hora marcada. O
  rodapé do site dá a matriz na Rua Benedito Moreira Pinto, 7-2; a diocese
  diz Rua Romildo Brunhari, 3-47. Ficou o da diocese.
- O site `saocristovaobauru.org.br` respondeu 404; ficou fora dos contatos.

## Divergências dentro do próprio site da diocese

A página de cada paróquia (texto) e as etiquetas da busca de horários
discordam em três pontos; o JSON segue o texto da página:

- Santa Luzia (Duartina): texto diz domingo 19h30; etiqueta, 19h.
- São João Batista (Iacanga): texto diz domingo 19h; etiqueta, 19h30.
- São Judas Tadeu (Pederneiras): o texto dá "Sábado: às 5h30 Rosário
  Mariano" e a etiqueta marca 5h30 como missa. Ficou no `nao_cabe`, sem
  virar missa; as missas de segunda a sábado às 7h seguem o texto.

## Instagram (anotado das próprias páginas da diocese)

Nenhum perfil foi aberto por dentro. catedral.divinoespiritosanto,
santuarioaparecidabauru, paroquiasaocristovaobauru,
saojudastadeu.saodimas.bauru, santaritabauru, santateresinhabauru,
paroquiasaojosedeanchietabauru, pnsgbauru, brassanto (São Brás),
paroquiastaedvigesbauru, paroquiasantaluziabauru, paroquiasaopaulo.bauru,
paroquiamariamaedoredentor, paroquiacoracaojesusbauru, sagradafamiliabauru,
saosebastiaobauru, santoantoniobauru, saobenedito.bauru,
paroquiastaclaradeassisbauru, sjtrabalhador, paroquiansassuncaobauru,
paroquia.saojoaobatista.bauru (Bauru); paroquiasantamariapiratininga,
paroquiasaosebastiaoavai, paroquiasantaluziaduartina,
santacatarinaalexandriaarealva, paroquiasaojoaobatista.iacanga,
saosebastiaopederneiras.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/baur0.htm e
  https://gcatholic.org/churches/local/baur0 (09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Confissão: nenhuma paróquia publica horário fixo.
- Capelas citadas sem bairro (ver `nao_cabe`), a capela sem nome da Vila
  Santista (Senhor Bom Jesus) e as capelas São Sebastião e São Roque de
  Agudos, cuja missa das 18h30 aparece sem dia.
- Telefone fixo de São Brás, Santa Luzia (Bauru) e Paulistânia: a diocese
  publica só o WhatsApp.
- Endereço da matriz do Sagrado Coração de Jesus (diocese e site da
  paróquia divergem) e o bairro da matriz de São João Batista e Nossa
  Senhora de Lourdes.
