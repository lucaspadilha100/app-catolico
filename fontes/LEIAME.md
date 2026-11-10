# Fontes de dados

Arquivos de terceiros usados para GERAR os dados do app (`npm run gerar`).
O app não lê estes arquivos diretamente.

| Pasta | O que é | Origem | Licença |
|---|---|---|---|
| `lecionario/leituras.sql` | Referências das leituras da missa (Ordo Lectionum Missae), por dia litúrgico | github.com/jayarathina/Tamil-Catholic-Lectionary | Domínio público (Unlicense) |
| `biblia/figueiredo-1950/` | Texto da Bíblia do Pe. Antônio Pereira de Figueiredo, edição de 1950, por versículo (numeração da Vulgata), sem notas | bibliatraduzida.com (transcrição e PDFs da edição de 1950) e github.com/ronaldomelofz/abibliasagrada | Tradução em domínio público; as notas de rodapé da edição NÃO entram |
| `biblia/ortografia.json` | Troca da grafia de 1950 pela atual | Gerado por `scripts/biblia/ortografia.py` | Nosso |
| `biblia/pendencias.txt` | Capítulos a conferir na revisão | Gerado | Nosso |
| `versificacao/*.vrs` | Versificação inglesa, hebraica (original) e da Vulgata, com as correspondências | github.com/ubsicap/versification_json | MIT (United Bible Societies) |

Do lecionário e da versificação só se usam REFERÊNCIAS (livro, capítulo,
versículo). O texto bíblico é só o do Figueiredo. Os nomes dos livros vêm em tâmil na origem e
são convertidos no gerador.
