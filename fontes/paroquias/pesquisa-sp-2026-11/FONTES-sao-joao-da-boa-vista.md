# Diocese de São João da Boa Vista (SP): fontes da pesquisa de 13/11/2026

Sé em São João da Boa Vista; Média Mogiana e divisa com o sul de Minas.
Sufragânea de Ribeirão Preto, criada em 1960. Bispo: Dom Eugênio Barbosa
Martins, S.S.S. (desde 2024). Cúria: Av. Dr. Oscar Pirajá Martins, 268, São
João da Boa Vista, (19) 3631-3177, mitrasjbv@diocesesaojoao.org.br.
Padroeiro diocesano: São João Batista (24 de junho).

## Resumo

- **79 unidades pastorais** em `saida/sao-joao-da-boa-vista.json`: 1
  catedral, 1 basílica (Paróquia Santuário Nossa Senhora da Conceição,
  Caconde), 1 santuário (Nossa Senhora Aparecida e Beato Donizetti, Tambaú) e
  76 paróquias, em 4 foranias: São João Batista (Águas da Prata, Espírito
  Santo do Pinhal, Santo Antônio do Jardim, São João da Boa Vista), São José
  (Caconde, Divinolândia, São José do Rio Pardo, São Sebastião da Grama,
  Tapiratiba, Vargem Grande do Sul), Imaculada Conceição (Aguaí, Estiva
  Gerbi, Mogi Guaçu) e Nossa Senhora das Dores (Casa Branca, Itobi, Mococa,
  Santa Cruz das Palmeiras, Tambaú). Cidades: Mogi Guaçu (18), São João da
  Boa Vista (11), Mococa (10), São José do Rio Pardo (7), Espírito Santo do
  Pinhal (5), Vargem Grande do Sul (5), Casa Branca (4), Aguaí (3), Santa
  Cruz das Palmeiras (3), Tambaú (3), Águas da Prata (2), Divinolândia (2) e
  uma em cada: Santo Antônio do Jardim, Caconde, São Sebastião da Grama,
  Tapiratiba, Estiva Gerbi, Itobi. Todas em SP; nenhuma cidade de MG.
- **7 com horário** (confiança alta): Coração de Maria, Santo Antônio e
  Imaculada Conceição (São João da Boa Vista), São João Batista (Espírito
  Santo do Pinhal) e São Benedito (São Benedito das Areias, Mococa), pela
  página da diocese; São Sebastião (Mococa), pelo site da própria paróquia;
  Santuário de Tambaú, pelo site do santuário.
- **72 sem horário** (confiança baixa, `horarios: []`): a página da diocese
  dá só endereço, telefone e e-mail, e não se achou site paroquial com
  horários. Ver "O que falta".
- Paróquias com matriz santuário entraram como `paroquia` com a primeira
  igreja de tipo `santuario` (Perpétuo Socorro em São João da Boa Vista, São
  Roque e Santo Antônio em São José do Rio Pardo, Desterro em Casa Branca).
  A de Caconde entrou como `basilica` (basílica menor e santuário, GCatholic).
- O Santuário diocesano Rosa Mística (Rod. Dr. José Lanzi, Estiva Gerbi)
  entrou como igreja de tipo `santuario` da Paróquia São José de Estiva
  Gerbi: a página "Santuários" da diocese dá o mesmo pároco e reitor, o mesmo
  telefone e o mesmo e-mail.
- Capelas e comunidades só onde a fonte dá o nome: as dos horários
  publicados (Coração de Maria, Imaculada Conceição e Santo Antônio de São
  João da Boa Vista; São João Batista de Pinhal; São Sebastião e São Benedito
  de Mococa; Santuário de Tambaú) e a Igreja de Santo Expedito (Vila Verde)
  da Santa Edwiges de São José do Rio Pardo.
- Todo `id_banco` é null.

## Lista das unidades

A lista vem das 18 páginas de cidade do site novo da diocese (WordPress,
lidas pela API `/wp-json/wp/v2/pages`, modificadas entre 07/2026 e
10/2026), batida com a versão anterior do mesmo site (hospedagem de teste
`darkgrey-bison-133942.hostingersite.com`, rodapé "Diocese 2024", que traz
também as foranias) e com o GCatholic (79 paróquias na estatística de
31/12/2022, lista de igrejas atualizada em 09/11/2026).

Divergências:

- **Aguaí**: a página atual da diocese (modificada em 28/10/2026) só traz a
  Paróquia Senhor Bom Jesus. A versão anterior do site e o GCatholic trazem
  também a Paróquia São Benedito (1996, Rua Capitão Silva Borges, 975) e a
  Paróquia Santa Cruz (2009, Rua Rafael Martins Rocca, 187, Teotônio Vilela).
  As duas entraram, com confiança baixa e a divergência na observação; nada
  na busca indica que tenham sido extintas. Conferir com a cúria.
- **Tambaú**: a diocese lista o Santuário Nossa Senhora Aparecida e Beato
  Donizetti (2009) e a "Comunidade São Sebastião 2014" no mesmo formato das
  paróquias; o GCatholic marca os dois como paróquias. O santuário entrou como
  `santuario`; São Sebastião (Rua Taio, Vila Padre Donizetti) como
  `paroquia`, sem contatos. A paróquia matriz passou a se chamar Santo
  Antônio e Beato Donizetti.
- O GCatholic lista igrejas que não são unidade e ficaram fora: Santuário
  Santa Luzia (Espírito Santo do Pinhal), Santuário Santa Rita de Cássia
  (Mogi Guaçu), Santuário Jesus Misericordioso (Martinho Prado Júnior),
  estátua do Cristo Redentor e Abadia de Nossa Senhora de São Bernardo (São
  José do Rio Pardo), Igreja São Francisco (Divinolândia), Igreja Santa Rita
  (Igaraí) e Igreja São José (Tambaú; esta entrou como capela do santuário,
  com a missa de quarta que o site do santuário publica).
- Matrizes com titular diferente do nome da paróquia, pelo GCatholic ou
  pela diocese: Cristo Redentor de São José do Rio Pardo (Igreja São Judas
  Tadeu), Santa Teresa D'Ávila de Mogi Guaçu (Igreja São Sebastião), Santos
  Mártires de Pinhal (Igreja São Sebastião). O GCatholic dá a Igreja Santo
  Antônio para a Santa Rita de Cássia de Santa Cruz das Palmeiras; a
  diocese não diz, e a matriz ficou com o nome da paróquia.

Nenhuma cidade desta diocese aparece nos outros arquivos de `saida/`.

## Páginas lidas (13/11/2026)

- https://diocesesaojoao.org.br/ (menu com as 18 cidades)
- Uma página por cidade, com pároco, endereço, telefone e e-mail de cada
  paróquia; as URLs estão no campo `fontes` de cada item. Exemplos:
  - https://diocesesaojoao.org.br/sao-joao-da-boa-vista-sp/ (horários de
    Coração de Maria, Santo Antônio e Imaculada Conceição)
  - https://diocesesaojoao.org.br/espirito-santo-do-pinhal-sp/ (horários da
    São João Batista e de três comunidades)
  - https://diocesesaojoao.org.br/mococa-sp/ (horários da São Benedito, de
    São Benedito das Areias)
  - https://diocesesaojoao.org.br/mogi-guacu-sp/ (18 paróquias)
- https://diocesesaojoao.org.br/santuarios/ (Desterro, Tambaú, Rosa Mística)
- https://darkgrey-bison-133942.hostingersite.com/fic_aguai.php e as demais
  páginas `f*.php` (versão anterior do site, com as foranias)
- https://saosebastiaomococa.com.br/horarios (site da Paróquia São
  Sebastião de Mococa: missas da matriz, da Igreja do Rosário e da Igreja
  Santa Cecília)
- https://padredonizetti.org.br/ (site do Santuário de Tambaú: missas,
  adoração às quintas e a missa de quarta na Igreja de São José)

## Contatos

Telefone e e-mail são os da secretaria, como a diocese publica. Ficaram fora
os contatos marcados como do padre: o e-mail do pároco dos Santos Mártires
(Pinhal), o e-mail pessoal do pároco de N. S. da Luz (Mogi Guaçu) e o
telefone e e-mail do pároco da São Benedito de Aguaí. Quando a página do
site paroquial e a da diocese divergem, vale a do site paroquial (e-mail da
São Sebastião de Mococa).

## Instagram

Só os perfis que a própria fonte publica, sem abrir nenhum por dentro:
paroquia_nossasradorosario e paroquiascj.saojoao (páginas da diocese),
beato.donizetti (página "Santuários" e site do santuário), saosebastiaomococa
(site da paróquia). As páginas das outras paróquias ligam só o perfil da
diocese (diocesesjbvsp), que não foi usado.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/zjoa1.htm e
  https://gcatholic.org/churches/local/zjoa1 (anuário, 09/11/2026)
- https://gcatholic.org/churches/brazil/136985, 136984 e 137020 (Santa
  Cruz e São Benedito de Aguaí, São Sebastião de Tambaú)

## Dificuldades

- A busca na web não trouxe horário de nenhuma outra paróquia: só
  diretórios de turismo sem horário e páginas de outras cidades.
- Sites paroquiais fora do ar em 13/11/2026: santaedwiges.org.br (São José
  do Rio Pardo), paroquiasaodomingos.org.br (Mococa). O de
  santuariodesterro.com.br (Casa Branca) está "em manutenção".
- Instagram não foi lido por dentro.

## O que falta para o próximo estado desta pesquisa

- Horários das 72 unidades sem horário: pedir à cúria ou às secretarias, ou
  esperar a diocese publicar nas páginas de cidade (algumas já publicam).
- Confirmar com a cúria a situação das Paróquias São Benedito e Santa Cruz
  de Aguaí e a categoria de São Sebastião e do Santuário de Tambaú.
- Horários fora do formato ficaram em `nao_cabe`: dia 13 em Santo Antônio
  (SJBV), dia 18 em São João Batista (Pinhal), última terça na Imaculada
  Conceição (SJBV), dias de semana sem igreja em São Benedito das Areias e
  a adoração recorrente da Igreja do Rosário de Mococa (dia da semana não
  explícito).
- Endereço da matriz da Santo Antônio de São João da Boa Vista: a página dá
  só o da secretaria (Av. Dr. Luiz Gambeta Sarmento, 305), usado no lugar.
