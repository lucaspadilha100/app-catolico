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
## Rotina diária a partir de 19/11/2026 (decisão do dono, 18/11): 3 posts no feed por dia
- **Manhã: santos do dia.** Pela tela Divulgação do app (Mais > Painel > Divulgação), "Post" de cada santo do dia; se houver mais de um, vão juntos num carrossel. "Story" de cada um nos stories.
- **Meio-dia: Evangelho do dia.** Divulgação, "Post" do Evangelho no feed e "Story" nos stories.
- **Fim da tarde: o post do dia criado no chat**, um por vez, nesta fila (itens 7 em diante), sempre revisado por especialistas (doutrina e texto) antes de ir ao ar.

## Posts do fim da tarde até 31/12/2026: `curiosidades/<AAAA-MM-DD>-<tema>/`
Um post por noite, de 19/11 a 31/12 (43), cada um com as lâminas em JPG (01.jpg...), `legenda.txt` e `fontes.md`, escritos e revisados por especialistas (doutrina e texto) com fonte conferida. Plano e temas: `curiosidades-plano.md`. Na pasta `curiosidades/reserva/` ficam prontos "De onde vem a Ave-Maria" e "O que quer dizer Amém" (saíram de 21/11 e 26/11 para Nossa Senhora da Apresentação, padroeira de Natal, e a árvore de Natal).
Gerador das lâminas (marca no topo de toda lâmina): `scratchpad/posts/script/compor.cjs` (fora do repositório); padrão: capa com pintura, lâminas de texto e uma tela real do app, fecho.

## Publicação automática (desde 18/11/2026): `.github/workflows/instagram.yml`
- 8h (11h UTC): santos do dia do calendário, carrossel no feed e um story por santo.
- 12h (15h UTC): Evangelho do dia no feed e no story.
- 18h (21h UTC): o post do fim da tarde desta pasta `curiosidades/` (pela data no nome da pasta).
- As imagens dos santos e do Evangelho saem do mesmo código da tela Divulgação (`scripts/instagram/gerar-do-dia.mjs`), ficam em `automatico/<data>/` e vão ao Instagram pelo endereço público do GitHub. `automatico/publicados.json` evita publicar duas vezes.
- Segredos no GitHub: `IG_TOKEN`, `IG_USER_ID` (sem eles, nada é publicado) e `GH_PAT` (renova o token toda segunda, `instagram-token.yml`). Configuração: `../prompt-instagram-api.md`.
- Rodar à mão: Actions > Instagram > Run workflow (horário, data, "teste" marcado = só confere).

Fora da fila: `post2-novena-apresentacao/` (o dono achou fora de hora).

Depois: os posts 5, 8 e 9 de `plano-lancamento.md` (falecidos, instalar o app, Advento) e o Reels, que espera o motivo do dono.
Padrão: capa com pintura do acervo + telas reais do app (Playwright, 390 px, modo claro) + lâmina de fechamento.
