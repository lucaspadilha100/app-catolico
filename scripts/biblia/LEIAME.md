# Montagem do texto da Bíblia (Figueiredo, edição de 1950)

Rodou uma vez para criar `fontes/biblia/figueiredo-1950/` e
`fontes/biblia/ortografia.json`. O app usa só o resultado, via
`npm run gerar:biblia` (scripts/gerar-biblia.mjs).

1. `bt_baixar.py`: capítulos já transcritos em bibliatraduzida.com
   (16 livros: Pentateuco, Salmos, Provérbios, Evangelhos, Atos, Romanos,
   1 e 2 Coríntios, Gálatas). Sem as notas de rodapé.
2. `pdf_baixar.py` + `pdf_parse.py`: os demais livros, da camada de texto dos
   PDFs da edição de 1950. Fica só o texto em corpo principal (as notas têm
   letra menor), sem cabeçalhos e números de página; versículo começa onde a
   linha tem recuo.
3. `reparar.py`: 1 Samuel e Apocalipse 15 a 22 (sem PDF no site), da cópia em
   github.com/ronaldomelofz/abibliasagrada, com os versículos grudados separados.
4. `montar.py`: junta tudo, decide hífens de quebra de linha pelo dicionário,
   tira cabeçalhos que vazaram e gera `fontes/biblia/pendencias.txt`
   (capítulos cuja contagem de versículos não bate com a Vulgata).
5. `ortografia.py`: grafia de 1950 para a atual, conferida no dicionário
   pt-BR (hunspell, dictionary-pt): êle→ele, idéia→ideia, sòmente→somente.

Os PDFs e páginas baixados não ficam no repositório.
