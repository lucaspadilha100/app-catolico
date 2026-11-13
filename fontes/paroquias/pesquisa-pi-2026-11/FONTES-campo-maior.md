# Diocese de Campo Maior (PI): fontes da pesquisa de 13/11/2026

Sé em Campo Maior; centro-norte do Piauí, entre Teresina e o Ceará. Bispo:
Dom Benedito Araújo (nomeado em novembro de 2025, posse em janeiro de 2026).
Cúria: Praça Rui Barbosa, 74, Centro, Campo Maior, (86) 3252-1132,
curia@diocesedecampomaior.org.br. Padroeiro diocesano: Santo Antônio.

## Resumo

- **39 unidades pastorais** em `saida/campo-maior.json`: 1 catedral (Santo
  Antônio), 1 santuário (Santuário Eucarístico Nossa Senhora do Rosário,
  Campo Maior), 33 paróquias e 4 quase-paróquias (Santa Luzia em Campo
  Maior, Santo Antônio em José de Freitas, Santo Antônio em Novo Santo
  Antônio, N. S. de Fátima em Pau D'Arco do Piauí), em 5 vicariatos: Santo
  Antônio (13), São José (8), Nossa Senhora da Conceição (8), Nossa Senhora
  do Desterro (7) e Nossa Senhora do Livramento (3).
- **39 com horário de missa**, todos da página de cada paróquia no site da
  diocese (tabela "Horários de Missas"). Confiança alta para as 12 páginas
  atualizadas de 2025 em diante, média para as 27 que a diocese não mexe
  desde 2024 (data de modificação dada pela API do WordPress).
- Adoração e confissão entraram quando a tabela dá a hora (ex.: "17h -
  Adoração" na quinta). Missas mensais por data ("dia 13 de cada mês") e
  casos ambíguos ficaram no `nao_cabe` da matriz.
- Nenhuma capela ou comunidade entrou: as páginas trazem só a matriz. A
  "Igreja de São Francisco" citada pela Paróquia N. S. do Livramento (José de
  Freitas) não tem lugar indicado: ficou no `nao_cabe`.
- Instagram vazio em todas: as páginas só ligam o perfil da diocese
  (`diocesedecampomaior`).
- Todo `id_banco` é null.

## Lista das unidades

A lista vem do tipo de conteúdo `paroquia` do WordPress da diocese
(`/wp-json/wp/v2/paroquia`, 39 itens) e da taxonomia `local_paroquia`, que dá
o vicariato de cada uma. É a mesma lista da página "Paróquias" do site.

Conferência contra o GCatholic (atualizado em 09/11/2026: 32 igrejas, "33
parishes" nas estatísticas de 2022): as 32 entradas batem com unidades da
diocese. Faltam no GCatholic sete unidades, todas recentes ou quase-paróquias:
Coivaras e N. S. de Nazaré (instaladas em 02/02/2018, notícia da diocese),
Cocal de Telha (2022), Jatobá do Piauí (elevada a paróquia em 19/09/2026),
e as quase-paróquias de Santo Antônio (José de Freitas), Santo Antônio (Novo
Santo Antônio) e N. S. de Fátima (Pau D'Arco do Piauí). O GCatholic chama a
matriz de São Raimundo Nonato de Altos de "Santuário"; a diocese não; seguimos
a diocese (nota na observação). O GCatholic também põe o Santuário Eucarístico
em "Campo Maior, SP": erro de estado dele.

## Páginas do site da diocese (lidas em 13/11/2026)

- https://diocesedecampomaior.org.br/paroquias/ (a lista)
- https://diocesedecampomaior.org.br/wp-json/wp/v2/paroquia?per_page=100
  (os 39 itens, com data de modificação) e
  https://diocesedecampomaior.org.br/wp-json/wp/v2/local_paroquia (os 5
  vicariatos)
- Uma página por unidade, com ano de criação, telefone, e-mail, endereço,
  clero e a tabela de horários; as URLs estão no campo `fontes` de cada item.
  E-mail protegido pelo Cloudflare, decodificado do `data-cfemail`.
- https://diocesedecampomaior.org.br/quase-paroquia-de-nossa-senhora-das-gracas-e-elevada-a-paroquia-por-dom-benedito/
  (Jatobá do Piauí vira paróquia, 21/09/2026)
- https://diocesedecampomaior.org.br/diocese-de-campo-maior-instala-duas-novas-paroquias-em-coivaras-pi-e-nossa-senhora-de-nazare-pi/
  (02/02/2018)
- A página geral https://diocesedecampomaior.org.br/horarios-de-missas/ NÃO
  foi usada: ela repete os horários de uma paróquia nas seguintes (erro de
  montagem da página), e as tabelas de cada paróquia divergem dela.
- O Anuário Diocesano é vendido ("Comprar"), não está aberto no site.

## Contatos: o que ficou de fora ou como publicado

- Os telefones de paróquia publicados são quase todos celulares; entraram
  como telefone da paróquia porque a diocese os dá no campo "Telefone" da
  ficha paroquial.
- Mantidos como publicados (formato antigo ou incompleto): Alto Longá
  "(86) 98172-356", Pau D'Arco "869542-5002", São Miguel do Tapuio
  "(86) 9831-6880".
- E-mails com acento, inválidos, deixados de fora: Sigefredo Pacheco
  (paroquiansconceiçao5@gmail.com) e Campo Largo (paróquiadesaojose09@gmail.com).
- E-mail com nome pessoal (Quase-Paróquia de Santo Antônio, José de Freitas)
  deixado de fora.
- Barras: o mesmo telefone (86) 98167-7821 aparece para a Paróquia de Santa
  Luzia e São José Operário e para a São João Batista.

## Conferência da lista (não usadas para horário)

- https://gcatholic.org/dioceses/diocese/camp7 e
  https://gcatholic.org/churches/local/camp7 (09/11/2026)

## O que falta para o próximo estado desta pesquisa

- Capelas e comunidades: a diocese não as lista (a estatística do GCatholic
  fala em 642 "missions"). Fonte possível: o Anuário Diocesano impresso.
- Confissões: só Beneditinos dá hora; as demais não publicam.
- Reconferir as 27 páginas paradas desde 2024, em especial N. S. das Graças
  de Castelo do Piauí ("17h" na coluna de observação) e a missa das 8h30 da
  Catedral marcada "Dom Francisco de Assis".
