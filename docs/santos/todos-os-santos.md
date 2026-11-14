# Todos os santos (decisão do dono, 14/11/2026)

"Quero todos, sem exceção": todo santo, beato e venerável do mundo, e os servos de
Deus do Brasil (de outros países, só de venerável para cima, por logística). Cada um
com ficha e foto da própria pessoa.

## Onde está cada coisa
- Lista mestra: `fontes/santos/mestra/lista-mestra.json` (9.516 em 14/11/2026),
  montada do Wikidata (CC0) e conferida com as listas de canonizações, beatificações
  e veneráveis de cada papa; `excluidos.json` diz o que ficou fora e por quê;
  `resumo.md` traz as contagens e as dúvidas. Scripts em `mestra/bin/`.
- Brasil: lista verificada da Academia Brasileira de Hagiologia (2025) e decretos do
  Vaticano até hoje.
- Fichas do app: `fontes/santos/fichas/<id>.json` (ver "Santos em escala" no CLAUDE.md).
- Fotos: uma pasta só (`VITE_IMAGENS_URL`), que vai para o site de imagens no
  Cloudflare Pages (repositório `minha-igrejinha-imagens`). Origem variada, sempre
  com crédito (`imagem.fonte`, `imagem.url`).

## Ordem
1. Os 91 brasileiros que faltavam (8 veneráveis, 83 servos de Deus).
2. Calendário do mundo: todos os que têm festa, dia a dia, para nunca faltar santo
   do dia.
3. O resto: beatos e veneráveis do mundo, por ordem de devoção.

## Regras de cada ficha
As de `docs/conferencia-doutrinal.md` e do CLAUDE.md: fato só de fonte
institucional (ou Martirológio, para os antigos), texto próprio, neutro, sem
milagre não reconhecido; venerável e servo não levam "rogai por nós".

## Dúvidas da lista mestra (a conferir)
- 805 santos de confiança baixa (antigos do Oriente sem prova de estarem no
  Martirológio Romano): só entram depois de conferidos.
- 1.627 beatos sem data de beatificação.
- causesanti.va e Hagiography Circle não foram lidos ainda.
