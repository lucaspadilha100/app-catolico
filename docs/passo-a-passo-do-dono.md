# Passo a passo do dono

Tudo o que depende de você, na ordem, com o conteúdo pronto para colar.
**[GRÁTIS]** e **[PAGO]** marcam o custo de cada item.

---

## Agora

### 1. Ligar as notificações no Supabase [GRÁTIS]
Sem isto, nenhum aviso chega no app instalado pelo site (lembretes, avisos das
igrejas, "rezaram pelo seu pedido", encontro do terço).

**1.1. Guardar as chaves**
1. Abra supabase.com, entre no projeto `dknrrvspimmldxmutzdt`.
2. Menu da esquerda: **Edge Functions** → **Secrets** (ou "Manage secrets").
3. Clique em **Add new secret** duas vezes:
   - Nome `VAPID_PUBLICA`, valor: o campo `publica` do arquivo `vapid.json` que te mandei.
   - Nome `VAPID_PRIVADA`, valor: o campo `privada` do mesmo arquivo.
4. Salve. Não mande essas chaves para ninguém, nem para mim.

**1.2. Criar a função**
1. **Edge Functions** → **Deploy a new function** → **Via Editor**.
2. Nome da função: `lembretes` (exatamente assim).
3. O editor abre com um arquivo `index.ts`. Apague tudo e cole o conteúdo do
   arquivo `index.ts` que te mandei por último.
4. Crie um segundo arquivo no editor (botão de adicionar arquivo), com o nome
   `regras.ts`, e cole o conteúdo do `regras.ts` que te mandei por último.
5. Clique em **Deploy**.
6. Depois de publicada, abra a função → **Details** (ou Settings) → desligue
   **Enforce JWT Verification** (ou "Verify JWT") e salve.

**1.3. Conferir o agendamento**
1. Menu da esquerda: **SQL Editor** → **New query**.
2. Cole e rode (botão Run):
```sql
select jobname, schedule from cron.job;
```
3. **Deve voltar uma linha**: `lembretes` | `*/5 * * * *`. Se voltou, pronto.
4. Se voltar vazio, rode este outro bloco:
```sql
create extension if not exists pg_cron;
create extension if not exists pg_net;
select cron.schedule(
  'lembretes',
  '*/5 * * * *',
  $job$select net.http_post(url := 'https://dknrrvspimmldxmutzdt.supabase.co/functions/v1/lembretes', headers := '{"Content-Type": "application/json"}'::jsonb, body := '{}'::jsonb)$job$
);
```
   **Deve voltar um número** (o id do agendamento). Rode de novo o
   `select jobname, schedule from cron.job;` e confira a linha.

**1.4. Testar**
1. No app instalado no celular: **Mais → Lembretes**, ligue os lembretes e
   ponha o Terço para daqui a 10 minutos.
2. Na hora, deve chegar a notificação. Se não chegar, me mande foto de
   **Edge Functions → lembretes → Logs**.

### 2. Testar o APK no Android [GRÁTIS]
1. Mande o arquivo `minha-igrejinha-teste.apk` para um celular Android.
2. Abra o arquivo; o Android pede para permitir instalar de "fontes desconhecidas": permita.
3. Use o app normalmente. Na tela inicial do celular, segure o dedo num espaço
   vazio → **Widgets** → **Minha Igrejinha** → arraste o "Evangelho do dia".
4. Anote o que estranhar e me mande.

### 3. iPhone [GRÁTIS]
1. Apague o ícone antigo da tela inicial.
2. Abra o site no **Safari** → botão **Compartilhar** → **Adicionar à Tela de Início**.

### 4. Usar o app todo dia e anotar
Use como um fiel comum por uma ou duas semanas e anote:
- o que você abriu e por quê;
- o que procurou e não achou;
- o que te fez fechar o app;
- o que você mostraria para alguém.

Isso guia o diferencial (ver o fim deste arquivo).

---

## Paróquias (pode fazer junto com o uso)

### 5. Painel [GRÁTIS]
Mais → **Painel** (só aparece para você):
1. **Equipes pedindo a página**: confira o contato e aprove.
2. **Terços para revisar**: aprove ou recuse.
3. **Lista de paróquias** → filtro **"A conferir"**: abra cada uma, confira
   horários e marque **"Marcar como conferida"**.
4. Decida sobre as igrejas que vieram só do OpenStreetMap (sem horário): manter
   ou esconder (desmarcar "Aparece no app").
5. Jundiá e Senador Georgino Avelino: se souber de alguma igreja, me mande o
   nome e o endereço.

### 6. Paróquias pioneiras [GRÁTIS]
1. Escolha 3 a 5 paróquias próximas de você.
2. No Painel, abra cada uma → **Plano** → **Pioneira (plano de graça)** → Salvar.
3. Se a secretaria cadastrar a chave PIX, ela aparece em **PIX para conferir**:
   ligue para a secretaria, confirme a chave e só então toque em **Chave conferida**.

### 7. Divulgação [GRÁTIS]
Textos prontos em `docs/lancamento/divulgacao.md` (Instagram, WhatsApp,
secretaria, pároco, boletim). Comece pela sua paróquia.

### 8. Primeira campanha de oração [GRÁTIS]
Painel → **Nova campanha** (ex.: "Um milhão de Ave-Marias pelo Advento").

---

## Revisão dos textos (aos poucos) [GRÁTIS]

Cada arquivo lista os pontos a conferir. Ao terminar um, me diga, que eu marco
como "revisado". Na ordem de importância:

1. Reflexões de domingo: `docs/reflexoes/a-revisar.md`
2. Exame de consciência e guias: `docs/confissao/a-revisar.md`
3. Meditações do terço e orações
4. Devoções e novenas: `docs/devocoes/a-revisar.md`
5. Os dois Ofícios: `docs/devocoes/oficio-tempos-a-revisar.md` e
   `docs/devocoes/oficio-dos-defuntos-a-revisar.md` (a oração pelo pai e pela
   mãe precisa ser conferida num Missal impresso)
6. Cursos: `docs/cursos/a-revisar.md`
7. Introduções dos livros da Bíblia: `docs/biblia/introducoes-a-revisar.md`
8. Histórias dos santos: `docs/santos/a-revisar.md`
9. Se possível, um padre lê os Evangelhos e os Salmos revisados.

---

## Receber pela InfinitePay (pessoa física) [GRÁTIS para abrir; taxa por venda]

Não precisa de CNPJ. A InfinitePay cobra uma taxa por pagamento recebido (veja
as taxas de PIX e cartão no app deles); não há mensalidade.

### 9. Criar os links de pagamento
No app da InfinitePay, crie:
1. **Apoio avulso**: um link de valor livre (ou quatro links: R$ 10, 20, 50 e 100).
2. **Apoio mensal**: um link de cobrança **recorrente** mensal (ex.: R$ 10 por mês).
3. Me mande os links. Eu ponho na página **Apoie** (cartão e PIX pela
   InfinitePay, além do PIX direto que já está lá).

Como funciona depois: a pessoa paga pelo link, toca em "Já contribuí" no app, e
você confere no extrato e confirma no Painel (como já é hoje). Sem integração
automática por enquanto: menos coisa para dar errado.

### 10. Plano das paróquias (quando tiver a primeira paróquia pagante)
1. Defina o preço mensal.
2. Crie na InfinitePay um link recorrente com esse valor.
3. Mande o link à secretaria; quando o primeiro pagamento cair, mude o Plano da
   paróquia no Painel para **Plano para paróquias**.

---

## Depois, quando houver dinheiro

### 11. Domínio [PAGO]
- `minhaigrejinha.com.br` no registro.br: cerca de **R$ 40 por ano**.
- `minhaigrejinha.org` (opcional): cerca de **US$ 10 a 15 por ano**.
Depois de registrar, me avise: eu ligo o domínio ao site (grátis na Vercel).

### 12. E-mail de contato [GRÁTIS ou PAGO]
- Grátis: um Gmail só do app (ex.: minhaigrejinha.app@gmail.com).
- Com o domínio: contato@minhaigrejinha.com.br (Zoho Mail tem plano grátis).
Me mande o e-mail; ele entra na política de privacidade.

### 13. Instagram [GRÁTIS]
Troque o @ do seu perfil e me mande, para entrar no app e no site.

### 14. Marca no INPI [PAGO]
Pedido de registro de marca, classes 9, 41 e 45. A taxa é cobrada por classe;
pessoa física tem desconto. Confira o valor atual no site do INPI antes de pagar.

### 15. Google Search Console [GRÁTIS]
Só depois do domínio. Eu te passo o passo a passo na hora.

### 16. Google Play [PAGO]
1. Conta de desenvolvedor: **US$ 25, uma vez só**.
2. O Google exige **12 testadores por 14 dias** antes de publicar (amigos com
   Android que aceitam o convite).
3. Me avise quando tiver a conta: eu preparo a versão da loja; a chave de
   assinatura fica guardada com você.

### 17. Notificações no app de loja [GRÁTIS]
Criar um projeto no Firebase (console.firebase.google.com) com a sua conta
Google. Eu digo exatamente o que clicar quando chegar a hora (junto com o item 16).

### 18. iPhone na App Store [PAGO]
- Conta Apple Developer: **US$ 99 por ano**.
- Um Mac para gerar o app (pode ser emprestado por uma tarde).
- Sem isso o iPhone continua usando o app pelo Safari, que funciona igual.

### 19. Instagram automático no mural da paróquia [GRÁTIS, mas trabalhoso]
O que é: a paróquia conecta o Instagram dela e os posts entram sozinhos no mural.
O que precisa:
1. Uma conta no Facebook e cadastro em developers.facebook.com (grátis).
2. Criar um "app" lá e pedir permissão de uso do Instagram.
3. A Meta exige **revisão do app**: política de privacidade publicada num
   domínio próprio (item 11), vídeo mostrando o uso e, para o acesso completo,
   pode pedir verificação de empresa.
4. Cada paróquia precisa de Instagram profissional (comercial ou criador).
Recomendação: deixar para depois do domínio. Até lá, o mural com link do post
já cumpre o papel.

### 20. Supabase Pro [PAGO, só se crescer]
O plano grátis aguenta até 50 mil pessoas ativas por mês. Se passar disso:
**US$ 25 por mês**. Eu aviso antes de chegar perto.

---

## Resumo dos custos

| Item | Custo |
|---|---|
| Supabase, Vercel, Firebase, Meta, Search Console | Grátis |
| InfinitePay | Grátis para abrir; taxa por pagamento recebido |
| Domínio .com.br | cerca de R$ 40 por ano |
| Domínio .org (opcional) | cerca de US$ 10 a 15 por ano |
| INPI | taxa por classe (3 classes), com desconto para pessoa física |
| Google Play | US$ 25, uma vez |
| Apple Developer | US$ 99 por ano |
| Supabase Pro | US$ 25 por mês, só se passar de 50 mil pessoas por mês |

---

## O diferencial (para pensar enquanto usa)

Hoje o app é completo, mas "completo" outros também são. Três caminhos que só
um app como o seu consegue ter:

1. **A minha paróquia no bolso.** A tela Hoje gira em torno da sua igreja:
   próxima missa, aviso do padre, evento da semana, inscrição da catequese, PIX
   da oferta. Os grandes apps não têm a paróquia local; nós temos o RN inteiro.
2. **Rezar junto, de verdade.** Terço ao vivo do grupo, "rezaram por você",
   campanhas da cidade. Mostrar a cada dia "hoje 312 pessoas de Natal rezaram o
   terço com o app" (contagem anônima). Sensação de comunidade, não de app solitário.
3. **Um caminho, não um cardápio.** Em vez de 30 opções, um "Meu dia com Deus":
   de manhã o Evangelho, ao meio-dia o Ângelus, à noite o exame, tudo em 5
   minutos, com sequência de dias. Bom para quem não sabe por onde começar.

Enquanto usa, observe qual dos três te puxa mais. Quando decidir, eu monto.
