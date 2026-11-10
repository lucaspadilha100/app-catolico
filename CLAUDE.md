# Santinho — instruções para o Claude

App católico **gratuito e completo, sem anúncio**, para o católico brasileiro:
liturgia diária, terço, Bíblia, orações, novenas, santos, missas perto de mim,
exame de consciência e comunidade de oração. Nasce web e vira app iOS e
Android a partir do MESMO código.

- O que o app tem: `docs/definicao.md` (fonte da verdade do produto).
- Em que ordem se faz: `docs/plano.md`.
- O dono do projeto toca sozinho: tudo o que der para fazer com IA, faz-se —
  com cuidado (ver "Fidelidade católica").

## Git
Tudo direto na **`main`** (a Vercel publica cada push). Branch só quando o
dono PEDIR. ⚠️ Este é o ÚNICO repositório do projeto: nunca escrever no
repositório `quadrum---assessoria-financeira`, que é de outro sistema.

## Stack
React 18 + TypeScript + Vite · Tailwind · **Capacitor** (iOS e Android,
configurado desde o início) · **Supabase** plano gratuito (projeto
`dknrrvspimmldxmutzdt`) · **Vercel** (web).

- Páginas públicas pré-renderizadas para o Google: liturgia de cada dia,
  capítulo da Bíblia, santo, paróquia ("liturgia diária hoje" é das buscas
  mais feitas do Brasil — é a divulgação gratuita).
- URL e chave PUBLICÁVEL do Supabase (`sb_publishable_…`, a antiga "anon key")
  ficam no `.env`, VERSIONADO de propósito (são públicas, vão no bundle).
  ⚠️ `service_role` / `sb_secret_…` nunca entram no repo.
- O ambiente cloud do Claude pode não alcançar `*.supabase.co`: teste ao vivo
  só com o host liberado.
- O app abre e reza **sem conta**. Conta (Google ou e-mail) é opcional:
  sincronizar entre aparelhos e comunidade.

## Banco (Supabase)
- Migração nova em `supabase/migrations/` (timestamp sequencial). A
  **integração do Supabase com o GitHub aplica sozinha** o que chega na `main`
  (conferido em 11/11/2026: a 20261111000000 entrou sem ninguém colar SQL).
  ⚠️ Por isso toda migração precisa poder rodar de novo sem erro (`if not
  exists`, `create or replace`, `drop policy if exists`): o teste roda todas
  duas vezes.
- **Toda regra tem teste** em `src/conta/regras.node.test.ts`: Postgres em
  memória (PGlite) com um `auth` falso (`supabase/testes/base.sql`), papéis
  `anon` e `authenticated`. O teste também barra: tabela pública sem RLS,
  função DEFINER sem `search_path`, função executável por `anon` fora da
  lista.
- ⚠️ Nunca `using (true)` nem `auth.uid() is not null` em dado de pessoa:
  `usuario_id = (select auth.uid())`. Toda função nova: `revoke execute ...
  from public, anon` e `grant` explícito.
- Sincronização (`src/conta/sincronizar.ts`): tabela `sincronizacao`, uma
  linha por chave do localStorage (`CHAVES_SINCRONIZADAS`). Chave nova que é
  da pessoa entra na lista e, se der para juntar, em `mesclar`. O cofre já
  sobe embaralhado com o PIN.
- **Administrador** (painel de paróquias): só nasce pelo SQL Editor
  (`insert into public.administradores ...`), nenhuma tela dá esse poder.
  Gestor de paróquia (secretaria) quem dá é o admin, pelo painel
  (`adicionar_gestor`), e isso marca a paróquia como verificada.
- Migração que só traz DADOS leva `_dados_` no nome (ex.: a carga das
  paróquias de Natal, gerada por `scripts/paroquias/importar_planilha.py` a
  partir de `fontes/paroquias/`, com ids fixos e `on conflict do nothing`):
  os testes de regra rodam sem ela; um teste próprio confere a carga.
- O cliente do Supabase só carrega para quem entra na conta (import
  dinâmico). A contagem de uso é um `fetch` solto, sem identificar ninguém.

## Acabamento profissional (pedido do dono, 10/11/2026)
- **Sem cara de IA.** Código sem comentários explicativos (só o raro que evita
  um erro real); nomes claros falam por si.
- **Texto do app sem travessão** (— ou –) e sem frase de efeito, emoji ou tom
  de "assistente". Escrita sóbria, como um app de editora católica: vírgula,
  ponto, dois-pontos.
- Sem texto explicando a tela ou o botão; fica o que é conteúdo ou estado.

## Verificar de verdade
`npm run verificar` = `typecheck` (`tsc -b --force`) + `test` (vitest) +
`build` (o esbuild/Vite não checa tipos). Rode antes de todo commit.
Conferir tela: celular 360 px (também 320), claro e escuro, sem rolar de lado.

## Estrutura
```
src/liturgia/     o motor: datas.ts (dia sem hora, em UTC), calendario.ts
                  (tempos, semanas, ciclos, cor, celebrações móveis), terco.ts
                  — TUDO com teste em *.test.ts (datas conhecidas de vários anos)
src/lib/          preferencias.tsx (tema, letra, modo simples), useDiaLiturgico,
                  supabase.ts
src/components/   Layout (menu lateral no PC, abas embaixo no celular), Cartao
src/pages/        uma tela por arquivo; rota nova entra no App.tsx e no MENU
public/           ícones do PWA gerados de docs/marca/icone-santinho-quadrado.png
android/ ios/     projetos nativos do Capacitor (iOS por SPM, sem CocoaPods)
```
- Depois de mudar a web para o celular: `npm run cap:sync` (build + `cap sync`).
- ⚠️ `appId` = `br.com.appsantinho` é PERMANENTE nas lojas.
- Datas litúrgicas são "dia sem hora" (UTC à meia-noite): nunca `new Date()`
  solto em conta de calendário, senão o fuso empurra o dia.
- A cor litúrgica do dia vai em `data-cor` no `<html>` e pinta `--destaque`;
  no BRANCO o destaque é dourado com texto escuro (branco não lê).
- Fontes: só o subconjunto latino (`src/fontes.css`, arquivos OFL copiados),
  para o cache offline ficar leve.

## Custo zero — regra de arquitetura
- O que é IGUAL para todos (Bíblia, liturgia, orações, santos, novenas,
  calendário) é **conteúdo estático dentro do app**: funciona offline e não
  gasta servidor. O calendário litúrgico é CALCULADO no aparelho.
- O servidor (Supabase) guarda só o que é de cada pessoa ou da comunidade:
  conta, paróquias, sugestões, intenções, grupos, dados sincronizados.
- IA entra na CONSTRUÇÃO do conteúdo (gerado uma vez, revisado, versionado),
  nunca chamada pelo app no ar — isso custaria todo mês. A liturgia se repete
  em ciclos (domingos A/B/C, semana I/II): conteúdo feito uma vez serve para
  sempre.

## Escala: nascer pronto para crescer (pedido do dono, 10/11/2026)
Nenhuma limitação escondida. Tudo o que tem teto precisa estar escrito aqui,
com o que acontece quando bate e o plano para passar dele.

- **Conteúdo é estático e servido pelo CDN** (Bíblia, liturgia, santos,
  orações): 1 ou 1 milhão de pessoas custa o mesmo e não toca no banco.
  Calendário e terço do dia são CALCULADOS no aparelho.
- **Banco só para o que é de alguém**, sempre com paginação, índice e RLS.
  Nunca baixar uma tabela inteira; lista é página; busca é no banco.
- **Dados versionados**: arquivo de conteúdo tem versão no nome
  (cache eterno no CDN e no aparelho; mudou, nome novo).
- **Tempo real só onde precisa** (terço ao vivo), por canal de grupo, sem
  escutar tabela inteira.
- **Nada de serviço pago escondido** (IA, mapas, e-mail): se entrar, entra
  aqui com o custo.

| Serviço (plano grátis) | Teto que importa | Quando bate | Saída |
|---|---|---|---|
| Supabase | 500 MB de banco, 50 mil usuários ativos/mês, 5 GB de saída/mês, 200 conexões de tempo real simultâneas | Comunidade/terço ao vivo crescendo | Plano Pro (US$ 25/mês) |
| Supabase | Projeto grátis PAUSA após 7 dias sem uso | Só antes do lançamento | Uso real impede a pausa |
| Vercel Hobby | 100 GB de banda/mês; uso NÃO comercial | Pedir doação pode contar como comercial | Cloudflare Pages (grátis, permite) ou Vercel Pro |
| Mapas | Só OpenStreetMap/links "como chegar" | Nunca (sem chave paga) | Ver antes de trocar |

## Direito autoral — o app NÃO pode cair
Nada de licença paga por ora. Então:

| Pode | NÃO pode |
|---|---|
| Bíblia do Pe. Antônio Pereira de Figueiredo (domínio público), revisada por nós | Tradução da CNBB, Ave-Maria, Jerusalém, Pastoral ou qualquer outra com dono |
| Referências das leituras de cada dia (Mt 5,1-12) — são fatos | Texto do Lecionário/Missal da CNBB (leituras, coleta, antífonas, prefácios) |
| Orações tradicionais (PT e latim) | Liturgia das Horas oficial (Vozes/Paulus) |
| Número do parágrafo do Catecismo (CIC 1854) | Texto do Catecismo copiado |
| Texto próprio (reflexões, santos, novenas, guias) | Texto copiado de sites, livros, Wikipedia |
| Pinturas antigas em domínio público (conferir cada uma) | Imagem de banco de imagens, foto da internet |
| Embed/link de playlist do Spotify | Letra de música |
| Horários informados por paróquias e fiéis; a planilha do Missas.com.br (decisão do dono, 11/11/2026, com crédito na página) | Dados copiados de outros sites sem decisão do dono |
| Fontes e ícones de licença livre | Marca/logo da CNBB ou que sugira app "oficial" da Igreja |

- ⚠️ **Bíblia: reescrever SEMPRE a partir do texto do Figueiredo, versículo a
  versículo — nunca "de memória".** A memória traz frases da Ave-Maria/CNBB
  e devolve o problema de direitos.

## Fidelidade católica
- **Nada inventado.** Exame de consciência, guias e reflexões seguem a
  doutrina da Igreja; cada ponto do exame traz o nº do Catecismo de onde vem.
- Texto escrito com IA é revisado pelo dono antes de ir ao ar, e o app diz com
  honestidade que o texto foi "revisado pela equipe". Prioridade de revisão:
  Evangelhos, Salmos, reflexões de domingo, exame de consciência.
- Nada de IA respondendo dúvidas de fé no app (por ora).

## Lecionário
- `npm run gerar` refaz `src/liturgia/dados/lecionario.json` a partir de
  `fontes/` (ver `fontes/LEIAME.md`). Não editar o JSON à mão: muda o gerador.
- Referência canônica = código do livro + numeração HEBRAICA (a do lecionário
  brasileiro): `PSA 80:2ac.3b`. A tela mostra `Sl 79(80),2ac.3b`.
- Deuterocanônicos não têm tabela aberta de versificação: a numeração do
  Brasil está em `NUMERACAO_DO_BRASIL` no gerador (Eclo, Tb, Dn 3).
- Memória usa as leituras do dia de semana; usa as PRÓPRIAS só quando são
  obrigatórias (códigos `.001`/`.101` da fonte e memórias de Nossa Senhora).
- O JSON é carregado sob demanda (arquivo próprio no build, cache offline).

## Bíblia
- Texto base: Figueiredo, **edição de 1950**, em `fontes/biblia/figueiredo-1950/`
  (numeração da Vulgata). Como foi montado: `scripts/biblia/LEIAME.md`.
  `npm run gerar:biblia` aplica a ortografia atual e gera
  `public/biblia/f1/<LIVRO>.json` (um arquivo por livro, baixado sob demanda,
  guardado offline pelo service worker; NÃO entra no pré-cache).
- ⚠️ A versão está no caminho (`f1`): texto mudou, versão nova, senão o cache
  eterno do aparelho segura o texto velho.
- 16 livros vêm de transcrição limpa; os outros, do OCR dos PDFs, com erros de
  letra. `src/biblia/dados/estado.json` marca cada livro: `transcrito`,
  `em-revisao` (a tela mostra "Texto em revisão") ou `revisado`.
  `fontes/biblia/pendencias.txt`: capítulos cuja contagem de versículos não
  bate com a Vulgata (quase sempre um versículo grudado no vizinho).
- Revisão em **linguagem atual** (pedido do dono, 10/11/2026: a primeira amostra
  "ficou ruim de ler"): falas entre aspas, frases curtas na ordem natural,
  menos "E" no começo, palavras de hoje, "vós" mantido. Guia:
  `docs/biblia/guia-de-revisao.md`. Corrige também o OCR, SEMPRE olhando o PDF de 1950.
- Revisado mora em `fontes/biblia/revisao/<LIVRO>/<cap>.json` (lista de
  versículos); `node scripts/conferir-capitulo.mjs <LIVRO> <cap>` confere. O
  gerador usa o capítulo revisado quando existe; livro inteiro revisado vira
  `revisado`. Os 73 livros revisados e conferidos em 10-11/11/2026.
- ⚠️ **Toda mudança no texto da Bíblia passa pelas três réguas** (pedido do dono:
  "a Bíblia tem que estar perfeita"): `node scripts/biblia/lado-a-lado.mjs <LIVRO> <cap>`
  mostra revisado, Figueiredo, Vulgata, Douay-Rheims e original; decide-se pelas
  regras do guia, e o caso vai para `fontes/biblia/revisao/conferencia/`.
  Texto restaurado inteiro em `restaurados.json`; versículo que a edição não
  imprimiu em `acrescentados.json`; nota de rodapé tirada em `notas-removidas.json`.
- Cada livro sai como `public/biblia/f1/<LIVRO>.<hash>.json` (nome em
  `estado.json`): texto mudou, nome muda, e o aparelho baixa só esse livro.
- ⚠️ Livro revisado segue a ORDEM e a divisão de versículos das Bíblias
  católicas de hoje (Nova Vulgata, `org.vrs`), não a da Vulgata antiga (pedido
  do dono, 10/11/2026: Mt 5,4-5). Salmos ficam na numeração grega. Lista em
  `scripts/biblia/numeracao.mjs`; o mapa hebraico deixa de converter esses livros.
- **Avisar erro** (pedido do dono, 10/11/2026): tocar no versículo abre a barra
  com "Avisar erro" (`components/AvisarErro.tsx`). Vai para a tabela
  `avisos_biblia` do Supabase (só INSERT, ninguém lê pela API; o dono lê no
  painel), com o nome do arquivo do livro (sabe-se a versão do texto). Sem
  internet ou sem a tabela, fica no aparelho e reenvia depois (`biblia/avisos.ts`).
  Migração `supabase/migrations/20261110000000_avisos_biblia.sql`: aplicada e
  conferida em 10/11/2026 (RLS ligada, 1 regra).
- `fontes/vulgata/`: latim da Vulgata Clementina (domínio público), régua da
  conferência de fidelidade; não aparece no app.
- Leitura da liturgia que começa no meio de uma fala ganha as aspas que faltam
  (`equilibrarAspas`).
- ⚠️ **Nunca usar outra tradução como modelo de frase** (Ave-Maria, CNBB,
  Jerusalém, Pastoral). O dono mostrou a Ave-Maria como exemplo de leitura: vale
  o ESTILO, nunca o texto. Reescrever a partir do Figueiredo, versículo a versículo.
- Quando o Figueiredo se afasta do latim (ex.: Mc 1,24 "o Santo Deus"), **segue o
  Figueiredo** (decisão do dono, 10/11/2026) e o caso vai para uma lista.
- ⚠️ Os Salmos seguem a edição de 1950: 113 (1-8) + "113 bis" guardado como
  113,9-26; o 115 começa no versículo 10 e o 147 no 12. A tabela
  hebraico → Vulgata (`src/biblia/dados/mapa-hebraico.json`) já é essa.
- Daniel e os deuterocanônicos não passam pela tabela (o lecionário já usa a
  numeração da Vulgata); a oração de Ester (Est 4,17k-z) vai para Est 14.
- Progresso de leitura (`src/biblia/progresso.ts`): capítulos lidos e "continuar
  lendo" no aparelho (`santinho-leitura`); percentual pesado por versículos.
  Sincroniza com a conta na Leva 10.

## Privacidade (LGPD)
- ⚠️ **Exame de consciência é criptografado no aparelho com um PIN que só a
  pessoa sabe**; o servidor guarda só o conteúdo embaralhado (nem o dono do
  app lê). Esqueceu o PIN, perdeu — o app avisa. "Fui me confessar" apaga os
  pecados marcados e guarda só os propósitos e a data da última confissão.
- Convicção religiosa é dado sensível: mínimo de dados, consentimento claro,
  botão de apagar conta (Apple e Google exigem).
- Métricas só ANÔNIMAS (contagem de uso), sem cookie de rastreio, sem
  Google Analytics.
- Contato de paróquia é só o INSTITUCIONAL (secretaria, Instagram oficial),
  nunca o celular pessoal do padre.

## Marca
- Nome: **Santinho**. Domínio pretendido: `appsantinho.com.br` (livre em
  09/11/2026, ainda não registrado). Falta conferir o INPI (classes 9, 41, 45).
- Ícone: `docs/marca/icone-santinho.png` (cantos arredondados) e
  `icone-santinho-quadrado.png` (para as lojas, que aplicam a própria máscara):
  silhueta do cruzeiro à frente da capelinha de torre central.
- Cores do ícone: fundo creme `#FBF0DD`, tinta marrom `#341E0D`.
- No app: base sóbria (claro/escuro) e o DESTAQUE segue a **cor litúrgica do
  dia** (roxo, verde, branco/dourado, vermelho, rosa).
- O desenho à mão (estradinha, capim) e a moldura de santinho vivem DENTRO do
  app (abertura, telas vazias, santo do dia, versículo compartilhado).

## Uso de verdade
- **Celular primeiro**; muita gente idosa: letra grande, alto contraste,
  "modo simples", alvos de toque grandes, campo com 16 px (iPhone dá zoom).
- Offline: tudo o que é estático funciona sem internet.
- Celular simples e internet ruim: app leve.
