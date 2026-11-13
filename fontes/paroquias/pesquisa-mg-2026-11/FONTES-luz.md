# Diocese de Luz (MG): fontes da pesquisa de 13/11/2026

Sé em Luz, centro-oeste de Minas (até 1960, Diocese de Aterrado);
sufragânea de Belo Horizonte. Bispo: Dom José Aristeu Vieira. Cúria: Rua
Oito de Julho, 175, Centro, Caixa Postal 8, Luz, CEP 35595-000, (37)
3421-9000, curia@diocesedeluz.org.br. Site: https://diocesedeluz.org.br/
(WordPress com tipo de post próprio `paroquias` em /wp-json/wp/v2/paroquias;
os campos da paróquia, inclusive a tabela de horários, só aparecem no HTML
da página; e-mails protegidos pelo Cloudflare, decodificados do
`data-cfemail`).

## Resumo

- **54 unidades** em `saida/luz.json`, em 29 cidades e 7 foranias (Bambuí
  10, Abaeté 8, Formiga 8, Arcos 7, Bom Despacho 7, Lagoa da Prata 7,
  Piumhi 7):
  - 1 catedral (Nossa Senhora da Luz, Luz);
  - 53 paróquias, entre elas N. S. Aparecida (Lagoa da Prata, instalada
    em novembro de 2024) e Santa Rita de Cássia (Arcos), que o endereço da
    página ainda chama de "regiao-pastoral" e o GCatholic conta como as 2
    "missões" da diocese.
- **52 com horário de missa**, da tabela de horários de cada página de
  paróquia: 40 com confiança alta (página atualizada em 2025 ou 2026), 12
  média (10 com página atualizada antes de 2025; N. S. do Carmo e Santa
  Rita de Cássia, ambas de Arcos, porque a tabela não diz a igreja e os
  horários foram postos na matriz).
- **2 sem horário** (a página não traz tabela): Divino Espírito Santo
  (Quartel Geral) e Santa Rosa de Lima (Santa Rosa da Serra). Lista em
  `SEM-HORARIO-luz.txt`.
- **146 capelas e comunidades**, todas tiradas da coluna de lugar da tabela
  de horários (nome e, quando dado, o lugar entre parênteses ou depois do
  traço), cada uma com os seus horários. Celebrações da Palavra, linhas sem
  hora e locais genéricos ("Comunidades rurais", "Em todas as comunidades")
  foram para `nao_cabe` da matriz.
- Adoração entrou como `adoracao` onde a tabela dá a hora (Catedral,
  quinta 18h; São João Bosco de Santo Antônio do Monte; São José de Córrego
  Danta; N. S. Aparecida de Lagoa da Prata). Nenhuma confissão publicada.
- Todo `id_banco` é null.

## Lista das unidades

- https://diocesedeluz.org.br/paroquias/ (lista por forania, 54 links)
- https://diocesedeluz.org.br/wp-json/wp/v2/paroquias?per_page=100 (os
  mesmos 54, com a data de atualização de cada página, usada no campo
  `fontes`)
- Uma página por paróquia, `https://diocesedeluz.org.br/paroquias/<slug>/`
  (forania, e-mail, telefone, endereço, tabela "Horários de missa" com
  tipo, dia, hora e local, e o clero).
- Notícia "Lagoa da Prata celebra instalação da Paróquia Nossa Senhora
  Aparecida" (24/11/2024) e notícias de 2024 e 2025 que chamam Santa Rita
  de Arcos de paróquia (busca na API de posts do site).

Conferência contra o GCatholic (atualizado em 09/11/2026: 52 paróquias e 2
missões): as 52 paróquias batem; as 2 missões são Santa Rita (Arcos) e N. S.
Aparecida (Lagoa da Prata), hoje paróquias pela diocese. O GCatholic marca
também santuários: N. S. das Graças (Bambuí, Santuário N. S. da Medalha
Milagrosa), N. S. Aparecida (Campos Altos) e N. S. de Fátima (Luz). Os dois
últimos entraram como igreja `santuario` das paróquias cuja tabela os cita
("Santuário" em Campos Altos e "Santuário Nª. Senhora de Fátima" na
Catedral).

## Decisões

- Moema: a tabela traz "Santuário" (sábado 19h, domingo 7h) sem dizer qual;
  ficou em `nao_cabe` da matriz.
- Bom Pastor (Abaeté): a tabela não tem missa na matriz, só nas igrejas da
  paróquia; a matriz entrou sem horário e sem endereço próprio (o endereço
  publicado, Rua Dom Pedro II, 940, é o da paróquia).
- São Judas Tadeu (Formiga): "Matriz, exceto na primeira terça-feira do
  mês" virou terça com semanas 2 a 5.
- Santa Rita de Cássia (Arcos): "1º Domingo 05h00 - 09h00 e 19h00" e
  "Demais Domingos 09h00 e 19h00" viraram domingo 9h e 19h, mais 5h no 1º
  domingo, como publicado.
- E-mails publicados com o domínio de hospedagem `diocesedeluz.sitesparresia.com`
  (7 paróquias de Bom Despacho, Santo Antônio do Monte e Formiga) ficaram
  fora; o padrão das demais é `<cidade>.<sigla>@diocesedeluz.org.br`, mas
  não foi presumido.
- Pratinha: a página põe "Secretaria Paroquial" no lugar do telefone.

## Instagram

Só três páginas de paróquia citam perfil: paroquiansluz.luzmg (Catedral),
paroquiasaojoseluzmg (São José Operário, Luz) e paroquiasrm (São Roque).
Os botões de redes sociais das outras páginas não têm endereço. Nenhum
perfil foi aberto por dentro.

## Outras páginas

- https://gcatholic.org/dioceses/diocese/luzz0.htm e
  https://gcatholic.org/churches/local/luzz0 (conferência)

## O que falta para o próximo estado desta pesquisa

- Horários de Quartel Geral e Santa Rosa da Serra.
- As 10 paróquias com tabela atualizada antes de 2025 (ver `fontes`)
  merecem reconferência.
- Muitas capelas entraram sem bairro, porque a tabela só dá o nome da
  igreja (a cidade é a da paróquia).
- Confissões: nenhuma paróquia publica.
