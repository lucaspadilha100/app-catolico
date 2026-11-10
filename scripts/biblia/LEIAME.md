# Montagem do texto da Bíblia (Figueiredo, edição de 1950)

Rodou uma vez para criar `fontes/biblia/figueiredo-1950/` e
`fontes/biblia/ortografia.json`. O app usa só o resultado, via
`npm run gerar:biblia` (scripts/gerar-biblia.mjs).

1. `bt_baixar.py`: capítulos já transcritos em bibliatraduzida.com
   (16 livros: Pentateuco, Salmos, Provérbios, Evangelhos, Atos, Romanos,
   1 e 2 Coríntios, Gálatas). Sem as notas de rodapé.
2. `pdf_baixar.py` + `pdf_parse.py`: os demais livros, da camada de texto dos
   PDFs da edição de 1950. Os PDFs de um livro são fatias de páginas (o do
   Apocalipse 8 traz o capítulo 13), então `livro()` junta as páginas de todos,
   tira as repetidas e corta os capítulos pelos títulos "CAPÍTULO N" (título
   ilegível: pela sequência e pelo reinício da numeração). Fica só o texto em
   corpo principal: notas (letra menor, do primeiro "(N)" ao pé da página),
   cabeçalhos e números de página saem. Versículo começa onde a linha tem
   recuo; número lido errado pelo OCR ("I 5", "lri", "S", "G") é aceito quando
   cabe na sequência, e versículo sem número legível entra pela contagem da
   Vulgata Clementina (`fontes/vulgata`).
3. `reparar.py`: 1 Samuel (sem PDF no site), da cópia em
   github.com/ronaldomelofz/abibliasagrada, com os versículos grudados
   separados (também pelo número lido errado: "i2", "IO").
   `corrigir.py`: cortes e trocas pontuais, cada um com a origem (1 Samuel e
   Is 7,14, lido na imagem da página).
4. `montar.py`: junta tudo, decide hífens de quebra de linha pelo dicionário,
   tira cabeçalhos que vazaram e gera `fontes/biblia/pendencias.txt`
   (capítulos cuja contagem de versículos não bate com a Vulgata Clementina).
5. `ortografia.py`: grafia de 1950 para a atual, conferida no dicionário
   pt-BR (hunspell, dictionary-pt): êle→ele, idéia→ideia, sòmente→somente.

Os PDFs e páginas baixados não ficam no repositório.
