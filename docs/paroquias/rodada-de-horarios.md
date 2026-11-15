# Rodada de horários (para uma sessão nova)

A pesquisa por estado (fontes/paroquias/pesquisa-*-2026-11/) trouxe a lista
completa de paróquias, mas muitas ficaram sem horário porque a diocese não
publica e a busca na web da sessão acabou. Esta rodada procura SÓ os horários
que faltam.

## Entrada
- `fontes/paroquias/sem-horario.json`: uma linha por paróquia sem horário
  (uf, arquivo da pesquisa, nome, cidade, instagram/site já anotados).
  Refazer a lista: `python3 -I scripts/paroquias/sem_horario.py`.
- Regras e formato: `fontes/paroquias/pesquisa-rn-2026-11/FORMATO.md` e a
  seção "Banco" do CLAUDE.md.

## Como trabalhar
1. Prioridade: capitais e cidades grandes primeiro (SP, RJ, PE, CE, GO...).
2. Para cada paróquia: buscar o horário publicado pela PRÓPRIA paróquia ou
   diocese (site, ou o trecho de Instagram/Facebook que a busca mostra; nunca
   abrir o perfil por dentro; agregadores como horariodemissa/liriocatolico
   NÃO valem). Achou: escrever no JSON da pesquisa, na igreja certa,
   `horarios` no formato do FORMATO.md, a fonte em `fontes` e a confiança.
3. ⚠️ NÃO mudar nome da unidade, cidade, nome ou ordem das igrejas: o id de
   cada paróquia no banco é calculado a partir disso. Só acrescentar horários,
   fontes, confiança e observação.
4. Só trabalhar em estado que JÁ está no banco, ou seja, que tem
   `supabase/migrations/*_dados_<uf>_paroquias.sql` na main (a migração de
   horários só acha a paróquia se ela já existir). Gerar a migração só de
   horários, por estado, com timestamp MAIOR que o último arquivo de
   `supabase/migrations/` no momento do push (o Supabase recusa migração
   mais antiga que a última aplicada):
   `python3 -I scripts/paroquias/carregar_estado.py fontes/paroquias/pesquisa-sp-2026-11 SP <timestamp> --so-horarios "Diocese de X=x.json" ...`
   (mesmos pares "Diocese=arquivo" da carga original; o commit de cada
   `*_dados_<uf>_paroquias.sql` mostra quais). O SQL só insere em paróquia
   que ainda não tem nenhum horário e que nenhuma secretaria conferiu, e pode
   rodar duas vezes.
⚠️ O timestamp se escolhe NA HORA do push: `git pull --rebase` primeiro, depois
   o maior timestamp de `supabase/migrations/` + 100. Outra sessão está mandando
   as capelas para o mapa (`*_dados_<uf>_capelas_mapa.sql`) ao mesmo tempo, com
   a mesma regra; se o push for recusado por conflito, renomeie o arquivo para
   o novo maior + 100 e tente de novo.
5. `npm run verificar` e UM push só no fim (ou a cada vários estados), com
   `git pull --rebase` antes: a outra sessão também empurra para a main.
   Cada push gasta 1 dos 100 deploys/dia da Vercel.

## Limite de buscas
O Claude Code limita as buscas na web por sessão
(`CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`, padrão 200). São 5.887
paróquias (14/11/2026, os 27 estados no banco): aumentar o limite nas variáveis do ambiente antes de abrir a sessão.

## Resultado das rodadas
- 14/11/2026: SP, RJ, RS e MG (migrações `*_dados_<uf>_horarios.sql`).
- 15/11/2026: PB, GO, PR, CE, PE, MA e AL. Só 2 paróquias novas (PR: Santuário da
  Divina Misericórdia, Curitiba; Santa Rita de Cássia, Lunardelli). O que falta
  nesses estados NÃO está na web aberta: as dioceses não publicam (ou publicam
  só as que já entraram), e as paróquias do interior divulgam no Instagram, que
  a busca não mostra. Londrina, Cascavel, São José dos Pinhais (PR) e Grajaú (MA)
  têm páginas por paróquia, mas o site recusa robôs. O dono abriu no navegador em
  15/11/2026: Londrina, Cascavel e Grajaú só têm endereço e contato (nenhum horário);
  o site de São José dos Pinhais estava em manutenção. Não adianta voltar a eles.
  O caminho para o resto é a própria paróquia (gestor da secretaria, "Sugerir
  horário") e não mais busca.
