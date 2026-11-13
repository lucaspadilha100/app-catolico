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
4. Gerar a migração só de horários, por estado, com timestamp da faixa
   `20261213HHMMSS` (a outra sessão usa `20261212...`):
   `python3 -I scripts/paroquias/carregar_estado.py fontes/paroquias/pesquisa-sp-2026-11 SP 20261213000100 --so-horarios "Diocese de X=x.json" ...`
   (mesmos pares "Diocese=arquivo" da carga original; ver o cabeçalho e o
   commit da migração `*_dados_<uf>_paroquias.sql`). O SQL só insere em
   paróquia que ainda não tem nenhum horário e que nenhuma secretaria
   conferiu, e pode rodar duas vezes.
5. `npm run verificar` e UM push só no fim (ou a cada vários estados), com
   `git pull --rebase` antes: a outra sessão também empurra para a main.
   Cada push gasta 1 dos 100 deploys/dia da Vercel.

## Limite de buscas
O Claude Code limita as buscas na web por sessão
(`CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION`, padrão 200). São cerca de 3.700
paróquias: aumentar o limite nas variáveis do ambiente antes de abrir a sessão.
