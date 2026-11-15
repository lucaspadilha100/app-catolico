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

## Como as fichas foram feitas (14-15/11/2026)
- Brasil: lista da Academia Brasileira de Hagiologia; fatos de dioceses, congregações e postulações.
- 1ª passada: calendário do mundo com página na Wikipédia (só texto).
- 2ª passada: os sem página, achados no santiebeati.it e conferidos no Martirológio.
- 3ª passada: sem dia de festa na lista (veneráveis no dia da morte, decreto conferido).
- 4ª passada: o Martirológio Romano 2004 conferido dia por dia nos 12 meses contra o
  app; cada elogio que faltava virou ficha. Cobertura do Martirológio: completa.
- Fonte principal: elogio do Martirológio + santiebeati.it; datas recentes em
  causesanti.va e press.vatican.va. Biografias assinadas por Franco Dieghi no
  santiebeati NÃO são usadas (inventam detalhes).
- Ficaram de fora por regra (nada polêmico): inquisidores, cruzados, cisma,
  antipapa, acusação contra judeus, figuras políticas (ex.: Stepinac, Sheptytsky,
  Hlond, Dehon, Plumtree, Felton, Pedro Arbués, Bernardino de Feltre, Werner de
  Oberwesel, Dominguito del Val, Angelelli). Santa Filomena: fora do Martirológio,
  entra como exceção (ver abaixo).
- Fora do Martirológio 2004 e sem culto confirmado: saem (decisão do dono,
  15/11/2026: Gwladys, Ruadhan de Lorrha e Arcângelo Canetoli, em `excluidos.json`).
- Perseguidor dos mártires do século XX: nomeado como a Igreja nomeia (nazistas,
  Gestapo, comunistas, Boxers), porque é o que dizem o Martirológio e a Santa Sé
  (decisão do dono, 15/11/2026). Na Espanha de 1936, sem nomear partidos nem
  grupos armados ("na perseguição religiosa de 1936"). Sempre como fato, sem
  adjetivo nem juízo político.
- Membro de grupo com dia próprio no Martirológio tem ficha individual; o grupo
  continua.
- Data: a do Martirológio; beato posterior a 2004, a memória dada pela fonte;
  venerável, o dia da morte (`dataDe: "falecimento"`).

## O que falta (15/11/2026)
- No app: 6.126 fichas (3.188 santos, 1.728 beatos, 859 veneráveis, 87 servos de
  Deus, 33 títulos de Nossa Senhora, 231 festas e comemorações). Martirológio 2004
  conferido dia a dia; veneráveis dos decretos de 1909 a 2026; beatos e santos dos
  decretos de 2000 a 2026; Brasil completo pela lista da Academia Brasileira de
  Hagiologia.
- Fotos (15/11/2026, fim do dia): 5.175 das 6.127 fichas com foto, todas conferidas uma a
  uma em pranchas (rejeitado: relicário, túmulo, cena com muita gente, manuscrito, pessoa
  errada). Origem: Wikimedia Commons (2.705, por tarefas do GitHub: `fotos-commons.yml` e, no
  repositório de imagens, `categorias.yml`, `por-nome.yml`, `candidatos.yml`), Santi e Beati
  (2.155), Dicastério das Causas dos Santos (89), congregações e dioceses, Nominis (16),
  ícones da Igreja Ortodoxa na América para santos anteriores a 1054 (9) e fotos de servos
  de Deus do Brasil achadas pelo dono (crédito só com o nome do site quando a página não é
  conhecida). Sem foto: 739 santos (quase todos antigos, da França, Itália e Oriente, sem
  retrato conhecido), 172 beatos (mártires ingleses, franceses e espanhóis), 36 veneráveis e
  5 servos de Deus; ficam com a moldura e o símbolo, sem rosto inventado.
- Próximo passo das fotos: o Claude do navegador do dono (Google Imagens funciona lá; aqui é bloqueado) preenche a planilha dos que faltam (id, link da imagem, página, site), primeiro os servos de Deus do Brasil, veneráveis e beatos; aqui se baixa, confere em prancha e liga com o crédito. Fotos mandadas pelo dono entram em `oficial/` com `fonte` (o site) e `url` vazia quando a página não é conhecida (o teste aceita: url ou fonte). Pendentes do dono (15/11/2026): Mons. Edmundo Igreja, Frei Egídio Maria Moscini, Mons. João Benvegnú e Frei Miguel Ângelo Serafim (os prints não chegaram como arquivo) e a fonte da foto do Pe. Ramiro Leite Felício dos Santos.
- Servos de Deus: só do Brasil (regra do dono); de fora do Brasil, só de venerável para cima.
- Fora por falta de confirmação (servos de Deus ligados ao Brasil): Pero Dias e
  onze companheiros (causa não achada na Santa Sé), Dom Pedro Luís Galibert (só
  um dossiê na diocese de Albi), Lucia Schiavinato (causa aberta em Treviso, na
  Itália: de outro país, só de venerável para cima). Entram se a causa for
  confirmada ou chegar a venerável.
- Santa Filomena: entra como exceção (decisão do dono, 15/11/2026), com o texto dizendo que não há dados históricos seguros e que a festa saiu do Missal em 1961.
- 805 santos antigos do Oriente de confiança baixa: só entram se estiverem no
  Martirológio (a 4ª passada já pegou os que estão).
