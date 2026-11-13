# Diocese de Nova Friburgo (RJ): fontes da pesquisa de 13/11/2026

Sé em Nova Friburgo; Região Serrana, Centro-Norte e Baixada Litorânea
fluminense (Macaé, Rio das Ostras, Casimiro de Abreu, Quissamã). Bispo: Dom
Pedro Cunha Cruz (desde 02/07/2025). Cúria: Rua Augusto Spinelli, 41,
Centro, Nova Friburgo, (22) 2522-2799. Padroeira diocesana: Imaculada
Conceição. Três vicariatos episcopais: Sede, Norte e Litoral.

## Resumo

- **60 unidades** em `saida/nova-friburgo.json`: 1 catedral, 1 santuário
  diocesano que é a paróquia de Cantagalo (Santíssimo Sacramento) e 58
  paróquias. Por vicariato: Sede 22, Litoral 20, Norte 18. Cidades: Nova
  Friburgo (16), Macaé (10), Rio das Ostras (4), Cachoeiras de Macacu,
  Cantagalo, Itaocara e Sumidouro (3 cada), Bom Jardim, Casimiro de Abreu,
  Cordeiro, Duas Barras, Santa Maria Madalena e São Sebastião do Alto (2
  cada) e uma em cada: Carapebus, Carmo, Conceição de Macabu, Macuco,
  Quissamã, Trajano de Moraes.
- **Nenhuma com horário.** Todas com `"horarios": []` e confiança baixa. A
  diocese tem uma página "Horários de Missa" com busca por cidade, bairro e
  dia, mas em 13/11/2026 ela responde "Nenhum horário de missa foi
  encontrado" para qualquer filtro; a versão "App" só tem dados de teste
  (texto Lorem Ipsum). As páginas de paróquia têm o espaço para horários,
  vazio em todas as 61.
- Contatos: o site da diocese dá e-mail institucional
  (`par.<nome>@diocesenf.org.br`) e endereço para a
  maior parte: 40 unidades ficaram com e-mail. Nenhuma
  página traz telefone ou Instagram da paróquia; as 20 páginas sem dados
  próprios repetem endereço, e-mail e redes da cúria, que não foram usados.
- Todo `id_banco` é null.

## Lista das unidades

Fonte: o tipo "paroquia" do WordPress da diocese
(https://diocesenf.org.br/wp-json/wp/v2/paroquia, 61 páginas), com a cidade
e o vicariato de cada uma na taxonomia `local_paroquia`, e a página
https://diocesenf.org.br/paroquias/. Das 61 páginas, duas são a mesma
paróquia (São João Batista de Macaé: `paroquia-sao-joao-batista-3` e `-4`,
com a mesma foto e o mesmo texto), o que dá 60 unidades.

Conferência contra o GCatholic (09/11/2026): 61 igrejas, uma por paróquia
mais o Seminário Diocesano Imaculada Conceição (Tinguely), que ficou fora.
As 60 batem. O GCatholic deu o lugar de várias paróquias cuja página no
site está vazia: Riograndina (Rosário), Monnerat (Guia), Triunfo (São
Pedro de Santa Maria Madalena), Campo do Coelho e Cônego (as duas Sant'Ana
de Nova Friburgo).

Erros do site corrigidos ou anotados na observação de cada item:

- A página `paroquia-sao-sebastiao` tem o título "Paróquia Nossa Senhora
  das Graças", mas o endereço (Rua Moacir Kênico Brust, 113, Lumiar) e o
  e-mail (`par.saosebastiaolumiar`) são da Paróquia São Sebastião de Lumiar;
  foram para ela. N. S. das Graças ficou no bairro Olaria, pela notícia dos
  70 anos da paróquia.
- A página marcada como Duas Barras (`paroquia-n-sra-da-conceicao`) traz
  endereço e e-mail de Conceição de Macabu; foram para Conceição de Macabu,
  cuja página só repete a cúria. N. S. da Conceição de Duas Barras ficou sem
  contato.
- A página de São João Batista marcada como Macuco dá endereço "Centro,
  Macaé" e e-mail de Macaé; ficou o endereço (Rua Prefeito Moreira Neto,
  72) e o e-mail não foi usado.
- As duas Paróquias Sant'Ana de Nova Friburgo não dizem qual é qual; a
  distribuição entre Campo do Coelho e Cônego é provisória.
- N. S. Imaculada Conceição de Cachoeiras de Macacu: o endereço diz "Nova
  Friburgo" por engano.
- N. S. do Carmo (Carmo): endereço incompleto ("11 Centro"), não usado.
- São Pedro de Santa Maria Madalena está no Vicariato Litoral pelo site.

## Páginas lidas (13/11/2026)

- https://diocesenf.org.br/paroquias/ e as 61 páginas
  https://diocesenf.org.br/paroquia/<nome>/ (endereço; e-mail decifrado do
  atributo data-cfemail); a URL de cada uma está no campo `fontes`
- https://diocesenf.org.br/wp-json/wp/v2/paroquia e
  https://diocesenf.org.br/wp-json/wp/v2/local_paroquia (cidade e vicariato)
- https://diocesenf.org.br/horarios-de-missa/ e
  https://diocesenf.org.br/horarios-de-missa-app/ (vazias ou com teste)
- https://diocesenf.org.br/catedral-diocesana-sao-joao-batista/ (história;
  cita catedralnf.com.br, que não abre)
- https://diocesenf.org.br/paroquia-nossa-senhora-da-soledade-celebra-dez-anos-de-criacao/
  (Soledade, 1º distrito de Sumidouro)
- https://diocesenf.org.br/paroquia-nossa-senhora-das-gracas-celebra-70-anos-de-criacao/
  (N. S. das Graças, Olaria)

## Instagram

Nenhum perfil de paróquia aparece no site da diocese; as páginas vazias
apontam para o perfil da própria diocese (diocesedenovafriburgo), que não
foi atribuído a paróquia nenhuma.

## Conferência da lista (não usada para horário)

- https://gcatholic.org/churches/local/nova1 (anuário, 09/11/2026)
- https://gcatholic.org/dioceses/diocese/nova1.htm

## Pendências

- Horários de todas as paróquias: quando a diocese preencher a página
  "Horários de Missa" (o sistema já existe, com filtro por cidade e dia),
  basta reler.
- Endereço ou e-mail das 20 paróquias que ficaram sem eles (a página só
  repete a cúria ou traz dados de outra paróquia): Santa
  Edwiges, as duas Sant'Ana, Rosário, Imaculado Coração de Maria (a URL da
  página sugere Duas Pedras), Assunção, N. S. das Graças (Olaria), em Nova
  Friburgo; Fátima (Cachoeiras de Macacu); Conceição do Paquequer e
  Soledade (Sumidouro); São João Batista (Macuco, sem e-mail); São Pedro (Triunfo); Conceição (Bom Jardim);
  Sagrado Coração (Trajano de Moraes); São Sebastião (São Sebastião do
  Alto); Guia e Conceição (Duas Barras); São João Batista, Glória (Macaé);
  Conceição (Rio das Ostras).
- Telefones: nenhum publicado pela diocese. O da Catedral, (22) 2522-1764,
  aparece em comunicado reproduzido pela prefeitura e em sites de
  terceiros; não entrou.
- Capelas e comunidades: as páginas de paróquia não listam nenhuma.
- O site da Paróquia São João Batista de Macaé citado pelo GCatholic
  (paroquiasaojoaobatistamacae.org) não resolve.
