# Fontes de dados

Arquivos de terceiros usados para GERAR os dados do app (`npm run gerar`).
O app não lê estes arquivos diretamente.

| Pasta | O que é | Origem | Licença |
|---|---|---|---|
| `lecionario/leituras.sql` | Referências das leituras da missa (Ordo Lectionum Missae), por dia litúrgico | github.com/jayarathina/Tamil-Catholic-Lectionary | Domínio público (Unlicense) |
| `versificacao/*.vrs` | Versificação inglesa, hebraica (original) e da Vulgata, com as correspondências | github.com/ubsicap/versification_json | MIT (United Bible Societies) |

Só as REFERÊNCIAS bíblicas são usadas (livro, capítulo, versículo); nenhum
texto bíblico vem destas fontes. Os nomes dos livros vêm em tâmil na origem e
são convertidos no gerador.
