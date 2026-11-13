# Diocese da Campanha (MG): fontes da pesquisa de 13/11/2026

Sé em Campanha, sul de Minas; sufragânea de Pouso Alegre. Cúria: Rua
Maestro Pompeu, 150, Centro, Campanha, (35) 3261-1217,
curia@diocesedacampanha.org.br. Site: https://diocesedacampanha.org.br/
(WordPress; tipo de post próprio `paroquia` em /wp-json/wp/v2/paroquia).

## Resumo

- **74 unidades** em `saida/campanha.json`, em 51 cidades e 8 foranias
  (N. S. de Fátima 11, N. S. dos Montes 10, N. S. dos Campos 10, N. S. das
  Fontes 10, São Francisco de Assis 9, Beata Nhá Chica 9, N. S. Aparecida
  8, Beato Padre Victor 7):
  - 1 catedral (Santo Antônio, Campanha);
  - 3 paróquias com matriz basílica menor, como `basilica` com o nome
    oficial da paróquia: N. S. da Conceição (Conceição do Rio Verde), São
    Lourenço Mártir (São Lourenço) e N. S. das Dores (Boa Esperança);
  - 2 santuários: Santuário N. S. d'Ajuda (Três Pontas, paróquia com
    matriz santuário, assim chamada pela diocese) e Santuário de N. S. da
    Conceição (Baependi, santuário da Beata Nhá Chica, criado em 2019;
    a diocese o lista entre as paróquias, o GCatholic só como santuário);
  - 1 área pastoral: Região Pastoral Senhor Bom Jesus dos Aflitos, no
    Distrito de Itacy, município de Carmo do Rio Claro (criada em 2009);
  - 67 paróquias, entre elas a nova Paróquia Santo Antônio de Pádua
    (Santo Antônio das Posses, Guapé), criada em 15/06/2025.
- **69 com horário de missa** (44 com confiança alta, página atualizada em
  2025 ou 2026; 25 média, página atualizada em 2024). A diocese só publica
  missa: nenhuma confissão ou adoração.
- **5 sem horário**: N. S. do Carmo (Carmo de Minas), N. S. do Rosário
  (Alagoa), N. S. do Rosário (Córrego do Ouro), Região Pastoral Senhor Bom
  Jesus dos Aflitos e N. S. das Dores (Boa Esperança). Lista em
  `SEM-HORARIO-campanha.txt`, com o perfil que a página cita.
- 67 capelas e comunidades, todas tiradas dos lugares que a tabela de
  horários de cada paróquia nomeia, mais as 5 comunidades que a página da
  nova paróquia de Guapé lista com o lugar (Penas, Pontal, Barreirinho,
  Assentamento e o Santuário Diocesano de N. S. Aparecida, em Aparecida do
  Sul).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem das 74 páginas de paróquia do site (tipo `paroquia` da API,
`/paroquia/<slug>/`), cada uma com ano de criação, endereço, telefone,
e-mail, redes sociais, clero e uma tabela "Horários de missas" (tipo, dia,
hora, local). A forania sai da taxonomia `local_paroquia` de cada página.
A página geral https://diocesedacampanha.org.br/horarios-de-missa/ mostra
as mesmas tabelas por forania.

Conferência contra o GCatholic (https://gcatholic.org/dioceses/diocese/camp3.htm
e https://gcatholic.org/churches/local/camp3, atualizado em 09/11/2026):
o GCatholic lista 71 paróquias, catedral e basílicas, todas presentes na
lista da diocese; a estatística (31/12/2022) diz 72 paróquias. A diocese
tem três a mais: a Paróquia Santo Antônio de Pádua de Guapé (2025), a
Região Pastoral do Itacy e o Santuário da Nhá Chica (que o GCatholic tem
como santuário). A "Paróquia de Santa Maria de Baependi" é a que o
GCatholic chama N. S. de Montserrat; a matriz entrou como Igreja Matriz
Nossa Senhora de Montserrat.

## Escolhas de leitura

- "1ª, 6ª feira" (Guapé) foi lida como 1ª sexta-feira do mês.
- Linha sem local ou com "Matriz", "Igreja Matriz", "Basílica",
  "Santuário" e variantes foi para a matriz. Em Itamonte, o sábado das 19h vem sem
  local e foi para a matriz.
- N. S. das Graças (Três Corações): a única missa (domingo, 7h) é no
  "Salão dos Vicentinos em frente à Igreja"; entrou na matriz com essa
  observação.
- Sant'Ana (Varginha): "Com. N. Sra. das Graças" (sábado) e "Com. N. Sra.
  das Graças (Paradinha)" (domingo) foram tratadas como a mesma comunidade.
- Ilicínea: "Igreja Beatos ou Rosário" (sábado, 17h30) ficou no `nao_cabe`
  da matriz. Careaçu: "Com. Rurais" (domingo, 17h) também.
- Córrego do Ouro: a diocese escreve como cidade; o CEP 37163-000 é de
  Campos Gerais, e a unidade entrou com cidade Campos Gerais e localidade
  Córrego do Ouro. Conferir.
- Telefones da cúria com ramal (Varginha: Santo Antônio de Sant'Anna
  Galvão, ramal 3010, e N. S. Aparecida, ramal 3009; Passa Quatro, ramal
  8003; Lambari, ramal 5005): entrou o número da cúria e o ramal ficou na
  observação, quando era o único telefone. Em Lambari o WhatsApp
  publicado (35) 3271-1049 entrou como `whatsapp`.
- Paróquia São Francisco de Assis (Guapé): a página põe o endereço no campo
  de telefone e não publica telefone.

## Instagram

Os perfis vieram das próprias páginas da diocese; nenhum foi aberto por
dentro. Ex.: catedraldacampanha, paroquiadomartirvga, paroquiarosariovga,
paroquiadodivinovga, santuarionhachica, paroquia_da_ajuda_, pnsdocarmo.cg.

## O que falta

- Horários das 5 unidades sem horário (perfis em `SEM-HORARIO-campanha.txt`).
- Confissões e adoração: a diocese não publica.
- Endereço das capelas e comunidades: a tabela só dá o nome.
- As páginas atualizadas só em 2024 (25 unidades) merecem reconferência.
