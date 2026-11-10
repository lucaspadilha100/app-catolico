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
| Horários informados por paróquias e fiéis | Dados copiados de outros sites (o do "missas perto de mim" do RN só com o OK do autor) |
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

## Bíblia
- Figueiredo, revisão **nível 2**: ortografia atual + palavras arcaicas
  trocadas, tom bíblico mantido ("Eu vos digo", "Bem-aventurados").
- Guardada por **livro + capítulo + versículo**, numa camada TROCÁVEL (no dia
  de uma licença, troca a tradução sem perder marcações e notas).
- Conferência automática a cada lote: contagem de versículos, nenhum faltando
  ou sobrando, relatório do que mudou.
- ⚠️ O Figueiredo segue a **Vulgata**: Salmos com numeração diferente da
  liturgia ("Sl 22(23)") e acréscimos de Daniel/Ester — tabela de conversão
  obrigatória, senão a liturgia puxa o salmo errado.

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
