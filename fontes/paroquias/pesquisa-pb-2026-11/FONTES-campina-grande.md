# Pesquisa: Diocese de Campina Grande (PB), novembro de 2026

Levantamento de todas as unidades pastorais da Diocese de Campina Grande
(sé em Campina Grande; foranias Cidade Leste, Norte, Oeste e Sul, Agreste I e II,
Brejo, Cariri I e II, Curimataú e Sericar). As demais regiões da Paraíba pertencem
a outras circunscrições e ficaram fora. O banco não tem nada da Paraíba:
todo `id_banco` é null.

Saída: `saida/campina-grande.json`.

## Resumo

- **79 unidades**: 69 paróquias, 4 paróquias-santuário ou santuário diocesano,
  1 catedral, 5 áreas pastorais.
- **14 unidades com horário** (todas só de CONFISSÃO, da página da diocese).
- **65 unidades sem horário nenhum**: entraram mesmo assim, por regra do dono.
  O site da diocese diz, na página de horários de missa, "Em construção".
  Nenhum horário de missa semanal foi publicado por fonte confiável.
- 50 municípios ou cidades-sede diferentes.

## Fontes usadas (todas lidas em 13/11/2026)

### Site oficial da diocese (diocesecg.org)

O endereço antigo `diocesedecampinagrande.org` (citado na Wikipédia) não existe
mais; o oficial é **https://diocesecg.org** (confirmado pelo gcatholic.org e
pelas redes sociais @diocesecg). A navegação não expõe tudo: a lista real veio
do menu servido por `https://diocesecg.org/api/navbar` e
`https://diocesecg.org/api/sidebar`.

- **Lista oficial de paróquias e áreas pastorais** (base da lista):
  https://diocesecg.org/pagina/paroquias-e-areas-pastorais/ (sem data no site)
- **Diretório por forania** (endereço, telefone, e-mail, ano de criação,
  municípios atendidos; base dos contatos e endereços; sem data no site,
  mas atualizado: traz paróquias criadas em 2025 e 2026):
  - https://diocesecg.org/pagina/forania-cidade-leste
  - https://diocesecg.org/pagina/forania-cidade-norte
  - https://diocesecg.org/pagina/forania-cidade-oeste
  - https://diocesecg.org/pagina/forania-cidade-sul
  - https://diocesecg.org/pagina/forania-agreste-i
  - https://diocesecg.org/pagina/forania-agreste-ii
  - https://diocesecg.org/pagina/forania-brejo
  - https://diocesecg.org/pagina/forania-cariri-i
  - https://diocesecg.org/pagina/forania-cariri-ii
  - https://diocesecg.org/pagina/forania-curimatau
  - https://diocesecg.org/pagina/forania-sericar
- **Horários de confissão** (única fonte de horário aproveitada; a parte de
  missas está "Em construção"):
  https://diocesecg.org/pagina/missas-e-confissoes/
- **Missas de Finados 2026** (31/10/2026; serviu para conferir a lista e para
  capelas e comunidades citadas; horários de Finados NÃO entraram no JSON por
  não serem semanais):
  https://diocesecg.org/noticia/102619/diocese-divulga-horarios-das-missas-do-dia-de-finados-nas-paroquias
- **Área Pastoral de São José (bairro dos Portais)**, que ainda não consta na
  lista do site (notícia de 08/11/2026, crisma com o bispo):
  https://diocesecg.org/noticia/102901/xxxii-domingo-do-tempo-comum-missa-na-catedral-e-na-area-pastoral-sao-jose-no-portal
- Página de atendimento dos padres (horários de SECRETARIA, não de missa;
  não entrou no JSON): https://diocesecg.org/pagina/atendimento-nas-paroquias

### Conferência da lista (nunca para horário)

- GCatholic, igrejas da diocese (59 igrejas, atualizado em 09/11/2026):
  https://gcatholic.org/churches/local/camp5.htm
  Confere com a lista oficial, com três exceções: o GCatholic ainda traz
  "Santíssimo Salvador" e "Virgem dos Pobres" (Campina Grande), que NÃO estão
  na lista oficial de paróquias da diocese e por isso ficaram fora, e não traz
  as criações recentes (Gado Bravo 2025, Damião 2026, Olivedos 2023,
  São Vicente do Seridó 2024, Caturité, Congo, Matinhas, Santo André, Portais).
- Wikipédia / catholic-hierarchy: só o contexto (diocese criada em 1949,
  bispo Dom Dulcênio Fontes de Matos desde 2017; "52 paróquias" é número
  defasado do anuário).
- Remanejamento de padres (PBAgora) confirmou a Paróquia de Nossa Senhora do
  Livramento em Umbuzeiro:
  https://www.pbagora.com.br/noticia/paraiba/bispo-de-campina-grande-promove-remanejamento-de-padres-e-diaconos/

### Instagram (só o trecho que a busca mostra; perfis institucionais)

Instagram não se lê por dentro (bloqueio de robôs). Os usuários anotados em
`contatos.instagram` vieram de trechos de busca que identificam o perfil como
da paróquia e da Diocese de Campina Grande (bio com "Diocese de Campina
Grande", bairro ou telefone conferindo com o diretório): catedralcg,
paroquiadoaltobranco, paroquiasaojosecg, sao_judas_cg, paroquiademontecastelocg,
paroquiademassaranduba, paroquiadorosariocg, saocristovaocgpb,
paroquiasenhordobonfimpb, pnspsbodocongo, matrizdeaparecidacg,
paroquiaperpetuosocorrocg, paroquiatrindadecg, sagradocoracaocg,
paroquiasaojoaopaulocg (este citado no próprio diretório da diocese),
paroquiaqueimadas, saopedro.saopaulo, paroquiadesaomiguelarcanjobsm,
paroquiaspedrocaraubas. Perfil que a busca não deixou amarrar com certeza à
unidade (ex.: Santuário da Divina Misericórdia, os dois São Francisco de
Assis) ficou vazio.

## Decisões

- "Perdido" na dúvida fica de fora: **Santíssimo Salvador** e **Virgem dos
  Pobres** (Campina Grande) aparecem só no GCatholic, não na lista oficial da
  diocese, e não se achou perfil nem notícia recente; não entraram.
- O Convento São Francisco (bairro da Conceição) é PARÓQUIA (São Francisco de
  Assis, 1952, OFM), distinta da Paróquia de São Francisco de Assis do
  Cruzeiro. As duas entraram.
- Há DUAS paróquias de Nossa Senhora do Perpétuo Socorro em Campina Grande:
  a paróquia-santuário de Bodocongó (redentoristas) e a do Conjunto Acácio
  Figueiredo (sede na Catingueira).
- A Paróquia do Senhor do Bonfim (forania Cidade Norte) tem sede no Distrito
  de Jenipapo, município de PUXINANÃ; a da Imaculada Conceição (forania
  Cidade Sul), no bairro Ligeiro, município de QUEIMADAS.
- São Domingos do Cariri, Coxixola, Riacho de Santo Antônio, Frei Martinho,
  Sossego, Zabelê, São João do Tigre, Amparo, Ouro Velho, Tenório e Nova
  Palmeira não têm unidade própria: são atendidos pelas paróquias vizinhas
  (anotado na observação de cada uma).
- Categoria `santuario` para as unidades cuja igreja-mãe é santuário
  (Bodocongó, Sagrado Coração de Jesus no Catolé, Nossa Senhora dos Milagres
  em São João do Cariri, Santuário Diocesano da Divina Misericórdia), no molde
  da pesquisa do RN (Basílica da Guia em Acari).
- Horário de Finados, Natal e festas não entrou: não é horário semanal.
- Confiança "alta" em todas as unidades: a lista, os contatos e as confissões
  vêm do site oficial da diocese, mantido (traz criações de 2025 e 2026); a
  exceção seria dado de outra origem, e não houve.
- O e-mail de Santa Rosa de Lima e o de São Sebastião (Lagoa de Roça) saíram
  defeituosos no diretório da diocese (truncado; com cedilha) e por isso não
  foram gravados.
