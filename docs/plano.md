# Santinho — plano de construção

A ordem em que o app é feito. O que está em `docs/definicao.md` entra todo;
aqui está só a SEQUÊNCIA. Cada fase vai para a `main` e aparece na Vercel,
então o app fica visível e testável desde a fase 1.

## Com o dono (fora do código)
- [ ] INPI: conferir "Santinho" nas classes 9, 41 e 45 (busca.inpi.gov.br → Marca)
- [ ] Registrar `appsantinho.com.br` (~R$ 40/ano, pode ser no CPF)
- [ ] Supabase: mandar a **anon key** (Project Settings → API) — a `service_role` nunca
- [ ] Vercel: criar o projeto ligado ao repositório `app-catolico`
- [ ] Conversar com o autor do "missas perto de mim" do RN (parceria e dados)
- [ ] Revisar o conteúdo que a IA escrever (prioridade: Evangelhos, Salmos,
      reflexões de domingo, exame de consciência)

## Fase 1 — Esqueleto
1. Projeto React + TypeScript + Vite + Tailwind; Capacitor configurado (iOS e
   Android) desde o início; PWA (instalar e funcionar offline).
2. Identidade: ícone, cores, tipografia, tema claro/escuro, **cor litúrgica
   como destaque**, modo simples para idosos.
3. Navegação principal (Hoje · Rezar · Bíblia · Missas · Mais) e telas vazias.
4. Supabase ligado (sem exigir login); deploy na Vercel.
5. Testes e verificação (typecheck + build) desde o primeiro commit.

## Fase 2 — Motor litúrgico (a base da tela Hoje)
1. Calendário litúrgico do Brasil calculado no aparelho: Páscoa, tempos,
   solenidades transferidas, ciclos A/B/C e I/II, cor do dia, preceitos,
   jejum e abstinência.
2. Santoral: geral + próprios do Brasil + beatos; festas da Arquidiocese de Natal.
3. Tabela de **referências** das leituras de cada dia (todos os ciclos).
4. Conversão da numeração dos Salmos (Vulgata ↔ liturgia).
5. Testes contra datas conhecidas (vários anos).

## Fase 3 — Bíblia (corre em paralelo às fases 2 e 4)
1. Achar uma digitalização boa do Figueiredo; estruturar por livro/capítulo/versículo.
2. Amostra (um capítulo de Marcos e um Salmo) no nível 2 para o dono aprovar o tom.
3. Revisão em lotes, sempre a partir do Figueiredo, com as conferências
   automáticas (contagem, nada faltando/sobrando, relatório de mudanças).
4. Introdução de cada livro (73).

## Fase 4 — Conteúdo próprio (IA + revisão)
Orações (PT e latim) · mistérios do terço com meditações · Terço da
Misericórdia e de São Miguel · Pequeno Ofício de Nossa Senhora · ladainhas ·
novenas e Consagração em 33 dias · Via-Sacra e Semana Santa · desafios ·
santos do ano (+ imagens em domínio público) · exame de consciência por
estado de vida (com nº do Catecismo) · guias da confissão e da missa ·
reflexões de todo o ciclo.

## Fase 5 — As telas do núcleo
Hoje · Terço (modo contas) · Bíblia (busca, marcações, notas, planos) ·
Orações · Novenas e desafios · Santos · Calendário · Confissão e guias ·
Falecidos · Diário e propósitos · Boas-vindas em 3 passos · compartilhar
liturgia (WhatsApp) e versículo (imagem) · playlists · páginas abertas ao
Google (cada dia, capítulo, santo).

## Fase 6 — Conta e privacidade
Login opcional (Google e e-mail) · sincronização (marcações, notas, falecidos,
diário, progresso) · **exame criptografado com PIN** · apagar conta · política
de privacidade e termos de uso · métricas anônimas.

## Fase 7 — Missas perto de mim
Perfis oficiais das paróquias · horários de missa/confissão/adoração e
exceções · busca por perto/cidade/horário · selo de atualização · sugestões e
correções com fila de revisão · paróquia verificada · "Minha paróquia" no
Hoje · dados iniciais de Natal/RN.

## Fase 8 — Comunidade
Intenções guiadas com "rezei por você" · grupos por convite · terço ao vivo
sincronizado · campanhas coletivas · denúncia e moderação.

## Fase 9 — Celular
Builds Android e iOS pelo Capacitor · notificações locais (lembretes) ·
vibração no terço · widget do evangelho · ícones e telas de abertura.

## Fase 10 — Lançamento
Android na Play Store (conta pessoal nova exige **12 testadores por 14 dias**
— grupo de oração e amigos) · lançamento em Natal: paróquias, grupos,
WhatsApp, Instagram, páginas católicas · mensagens de abordagem prontas.

## Fase 11 — Com apoio
Página "Apoie" (PIX + transparência) · App Store (iOS) · áudio com IA ·
terço com voz · licenças · associação sem fins lucrativos · plano para
paróquias · outras dioceses.
