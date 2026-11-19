# Fila de posts do feed (aprovada pelo dono em 13/11/2026)

O dono pede um por vez, na hora de postar. Cada pasta tem as lâminas (01.png...) e a `legenda.txt`.

Posts 1 a 5 são sobre o app (pedido do dono, 14/11/2026). Post 1 (apresentação) publicado em 13/11; Bíblia publicado em 14/11; Missas (refeito, 9 lâminas) em 15/11; Terço em 16/11; Orações em 17/11; Títulos dos santos em 18/11.

Ordem combinada com o dono em 15/11/2026: primeiro a apresentação do app, em sequência no feed (quem chega ao perfil vê um recurso por post), depois as campanhas.

1. Apresentação (13/11) · publicado
2. `post-biblia/` (14/11) · publicado
3. `post-missas/` (15/11) · publicado
4. `post-terco/` (16/11) · publicado
5. `post-oracoes/` (17/11, revisado: capa sem "da tradição", santos beatos e veneráveis, Ladainha de Nossa Senhora) · publicado
6. `post-titulos-dos-santos/` (18/11, revisado: "nunca antes de cinco anos", "em regra" no segundo milagre, Lindalva mártir, títulos dos brasileiros conferidos) · publicado
7. Novembro: rezar por quem partiu (`plano-lancamento.md`, post 5) · a fazer
8. Como pôr o app na tela do celular (`plano-lancamento.md`, post 8) · a fazer
9. O Advento começa amanhã (`plano-lancamento.md`, post 9; sáb 28/11) · a fazer
## Rotina diária (decisão do dono, 18/11/2026): tudo automático
O dono não publica à mão. A grade de cada dia está em "Publicação automática", abaixo.

## Posts do fim da tarde até 31/01/2027: `curiosidades/<AAAA-MM-DD>-<tema>/`
Um post por noite, de 19/11 a 31/12 (43), cada um com as lâminas em JPG (01.jpg...), `legenda.txt` e `fontes.md`, escritos e revisados por especialistas (doutrina e texto) com fonte conferida. Plano e temas: `curiosidades-plano.md` (até dezembro) e `curiosidades-plano-janeiro.md` (janeiro de 2027, aprovado pelo dono em 18/11/2026, com o especial de São Mateus Moreira em 29/1). Todos passaram por revisão doutrinal independente (quatro revisores, Catecismo e documentos conferidos no vatican.va) em 18/11/2026. Na pasta `curiosidades/reserva/` fica pronto "O que quer dizer Amém" ("De onde vem a Ave-Maria" saiu em 18/11) (saíram de 21/11 e 26/11 para Nossa Senhora da Apresentação, padroeira de Natal, e a árvore de Natal).
Gerador das lâminas (marca no topo de toda lâmina): `scratchpad/posts/script/compor.cjs` (fora do repositório); padrão: capa com pintura, lâminas de texto e uma tela real do app, fecho.

## Publicação automática (desde 18/11/2026; grade de 18/11): `.github/workflows/instagram.yml`
O dono não publica nada à mão. Horário de Brasília (o GitHub costuma atrasar de 5 a 20 minutos, por isso cada horário está um pouco antes):

| Horário | Feed | Stories |
|---|---|---|
| 05:40 | Evangelho do dia em **Reels narrado** (imagem se o vídeo falhar) | Evangelho |
| 07:10 | Data grande (Advento, Imaculada, Natal...), só no dia | a mesma |
| 08:40 | Santos do dia do calendário (carrossel; sem santo no calendário, até 3 lembrados com foto) | um por santo |
| 10:10 | Novena que começa hoje, só no dia | a mesma |
| 11:10 | Reflexão do Evangelho, só aos domingos com reflexão | a mesma |
| 11:50 | | Ângelus |
| 14:50 | | Hora da Misericórdia |
| 17:40 | O post do dia desta pasta `curiosidades/` (pela data no nome) | |
| 20:10 | Terço de hoje (mistérios do dia) | Terço, com os 5 mistérios |
| 21:40 | | Oração da noite |

- **Reels do Evangelho** (pedido do dono, 18/11/2026: "pra conseguir seguidores tem que postar reels"): telas desenhadas por `gerar-do-dia.mjs` (abertura com a pintura, até 5 telas do texto, fecho), narração com a voz livre Piper `pt_BR-faber-medium` (dados CC0), lida frase por frase com pausas de 0,52 s e 0,3 s (o dono pediu 30% menos), e a trilha de órgão composta por nós (`scripts/instagram/reel/trilha.py` gera `trilha.m4a`; sem direito de terceiros). Montagem: `scripts/instagram/reel/montar.py` (ffmpeg, sem zoom: o zoom tremia). Abre com "Evangelho de Jesus Cristo segundo São ..." e fecha com "Palavra da Salvação" (ou "Continue a leitura no app" quando o texto não coube).
- **Dois disparadores** (18/11/2026): o agendamento do GitHub (`cron` em `instagram.yml`) e o **relógio de reserva** (`instagram-relogio.yml`: espera o próximo horário com `scripts/instagram/proximo.mjs`, dispara `instagram.yml` por `workflow_dispatch` e se dispara de novo; até 5h30 por volta). O que chegar primeiro publica; o outro vê no `publicados.json` e não repete. Se o relógio parar (falha do GitHub), um push em `instagram-relogio.yml` ou "Run workflow" na aba Actions dá corda de novo.
- ⚠️ O GitHub só rodou o agendamento depois que a linha dos `cron` foi gravada pela conta do dono (commit de 18/11 pela integração do GitHub, autor ticarbovapt). Commit só com autor "Claude" mexendo nos `cron` pode deixar o agendamento parado: mudou os horários, conferir no dia seguinte se rodou com `event: schedule`.
- A grade mora em `scripts/instagram/horarios.mjs` (e os `cron` repetidos no workflow). Horário que não saiu (o GitHub às vezes pula) é recuperado pelo seguinte, até 4 horas depois, menos Ângelus, Misericórdia e noite, que só valem na hora.
- As imagens saem do código do app (`scripts/instagram/gerar-do-dia.mjs`, peças em `src/divulgacao/conteudo.ts` e `instagram.ts`), geradas no primeiro horário do dia e guardadas no ramo `instagram` (os últimos 7 dias, para dar tempo de republicar o que falhou; o mais antigo sai quando o dia novo entra, e o ramo é refeito do zero, sem histórico; a Vercel não publica esse ramo, `vercel.json`), com o registro do que saiu em `<data>/publicados.json` lá. A `main` não recebe commit da automação.
- Segredos no GitHub: `IG_TOKEN`, `IG_USER_ID` (token de usuário do sistema da Meta, não vence; `instagram-token.yml` só age com token do Instagram e `GH_PAT`). Configuração: `../prompt-instagram-api.md`.
- Rodar à mão ou testar: mudar `automatico/pedido.json` (`slot`, `data`, `teste`) e enviar à `main`, ou Actions > Instagram > Run workflow.

Fora da fila: `post2-novena-apresentacao/` (o dono achou fora de hora).

Depois: os posts 5, 8 e 9 de `plano-lancamento.md` (falecidos, instalar o app, Advento) e o Reels, que espera o motivo do dono.
Padrão: capa com pintura do acervo + telas reais do app (Playwright, 390 px, modo claro) + lâmina de fechamento.
