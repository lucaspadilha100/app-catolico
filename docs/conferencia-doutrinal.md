# Conferência doutrinal do Minha Igrejinha (13/11/2026)

Decisão FINAL do dono (leigo, faz o app sozinho): "Precisa estar de acordo com a Igreja, nada polêmico. Nenhuma treta com protestantismo. É o que a Igreja Católica Apostólica fala e o que está na Bíblia. Nada pode ser da minha cabeça nem de um escritor que eu nem conheço."

## O que vale como fonte (só isto)
1. A Bíblia (a nossa, do Figueiredo, em `public/biblia/f1/`, ou a referência do versículo).
2. O Catecismo da Igreja Católica e o Código de Direito Canônico: confira TODO número citado com a referência local do texto oficial do vatican.va:
   `python3 -I /tmp/claude-0/-home-user/52f35fde-f0cb-5748-9ec5-8faf5e29b839/scratchpad/referencia/consultar.py "CIC 1854"` (aceita "cân 916" e intervalos "CIC 1030-1032").
   O texto do Código no vatican.va é anterior a 2021: Livro VI (cân. 1311-1399) e cân. 230 §1 mudaram; não cite esses números por ele.
3. Documentos do Magistério (concílios, papas) e normas da CNBB, citados por nome e número.
4. Santos canonizados, Doutores da Igreja e Padres da Igreja, citados com a obra.
5. Fatos históricos e hagiográficos: só o que é consenso; o que é tradição piedosa se diz "a tradição conta".

## O que sai ou muda
- Afirmação doutrinal sem base nas fontes acima: reescreva para o que o CIC diz (com o número conferido) ou tire.
- Número do CIC ou cânon que não diz o que o texto afirma: corrija o número ou a frase.
- Citação de autor que não seja santo, Doutor, Padre da Igreja, papa ou concílio (escritores modernos, teólogos, autores de fé incerta): tire.
- Tema polêmico que não precisa estar ali (pena de morte, debates morais quentes, política, questões disputadas entre teólogos): deixe de fora ou fique só na frase do CIC, sem comentário.
- Nada contra protestantes ou outras religiões. Fato histórico pode ficar, em tom sereno e ecumênico como o CIC 817-819 e 838. Nada de "eles erram", "seitas", comparação de quem está certo.
- Opinião, "deduções" e interpretações próprias de passagens bíblicas: troque pela leitura da Igreja (CIC, Padres) ou tire.
- Revelação privada nunca como fato de fé; aparição só se reconhecida.

## Como trabalhar
- Edite os arquivos do app em /home/user/app-catolico só na sua área. NÃO faça commit, NÃO rode git add/stash/checkout, NÃO mexa em fontes/paroquias, supabase/, nem em arquivos de outra área.
- Mantenha o formato e o estilo do app (CLAUDE.md: sem travessão — nem –, sem emoji, frases sóbrias). Não mude o campo `revisao` (os testes esperam o valor atual).
- Só curl para a web (a busca na web acabou); não contorne bloqueio anti-robô.
- No fim, rode só os testes da sua área (`npx vitest run <arquivo de teste>`) e `npx tsc -b --force` (dentro de /home/user/app-catolico). Não rode `npm run build`.
- Registre o que fez em `/tmp/claude-0/-home-user/52f35fde-f0cb-5748-9ec5-8faf5e29b839/scratchpad/conferencia/<sua-area>.md`: cada mudança (arquivo, antes, depois, fonte) e cada ponto que você NÃO conseguiu fundamentar e deixou de fora.
- Retorno final: número de mudanças, os 3 a 5 pontos mais importantes e o que precisa de decisão humana de verdade (deve ser raríssimo: só o que nem o CIC resolve).
