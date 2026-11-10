# Santinho: plano de construção

Tudo o que está em `docs/definicao.md`, dividido em LEVAS. Cada leva termina
com o app funcionando, testado, na `main` e com prévia das telas enviada ao
dono. A ordem é de propósito: primeiro o conteúdo que funciona sem servidor
(leve, offline, custo zero), depois o que precisa de conta e banco, por fim o
celular e o lançamento.

Legenda: ✅ pronto · 🔨 em andamento · ⬜ a fazer · 👤 precisa do dono

## Feito

### Leva 0. Definição ✅
- ✅ Produto definido com o dono (`docs/definicao.md`)
- ✅ Regras do projeto (`CLAUDE.md`), nome Santinho e ícone final

### Leva 1. Esqueleto ✅
- ✅ Web + PWA (instala e funciona offline) + Android e iOS (Capacitor)
- ✅ Navegação: Hoje · Rezar · Bíblia · Missas · Mais
- ✅ Tema claro e escuro, tamanho da letra, modo simples
- ✅ Cor litúrgica do dia pintando o app

### Leva 2. Calendário litúrgico ✅
- ✅ Tempos, semanas, ciclos A/B/C e par/ímpar, cor do dia
- ✅ Todos os santos do ano: Calendário Romano e Próprio do Brasil
- ✅ Precedência (o que se celebra em cada dia) e transferências do Brasil
- ✅ Conferido dia a dia com o calendário publicado de 2024 a 2027
- ✅ Tela Hoje com celebração, memória e santos do dia

### Leva 3. Lecionário ✅
- ✅ Referências de todos os dias: domingos A/B/C, semana I/II, Advento,
  Natal (4 missas), Quaresma, Tríduo, Vigília Pascal, Páscoa, solenidades,
  festas, santos e próprio do Brasil (Aparecida, Guadalupe)
- ✅ Versículos na numeração do lecionário brasileiro; Salmos "Sl 22(23)";
  Eclesiástico, Tobias e Daniel na numeração do Brasil
- ✅ Memórias: leituras do dia de semana, ou as próprias quando obrigatórias
- ✅ Tela Liturgia do dia (navega entre os dias) e resumo na tela Hoje
- ✅ Teste: todo dia de 2024 a 2035 tem leituras; 95% idêntico, referência por
  referência, à liturgia brasileira publicada (o resto é diferença de formato)

## A fazer

### Leva 4. Bíblia ⬜
- ⬜ Texto do Figueiredo digitalizado e estruturado por versículo
- ⬜ 👤 Amostra no nível 2 (um capítulo de Marcos e um Salmo) para aprovar o tom
- ⬜ Revisão em lotes: Evangelhos → Salmos → Novo Testamento → Antigo Testamento,
  com conferência automática a cada lote
- ⬜ 👤 Leitura dos Evangelhos e Salmos revisados
- ⬜ Introdução curta dos 73 livros
- ⬜ Tela Bíblia: livros, capítulos, leitura, busca, marcações e notas
- ⬜ Liturgia do dia com o texto completo das leituras

### Leva 5. Terço e orações ⬜
- ⬜ Terço guiado completo: oferecimento, mistérios, dezenas, modo contas
  (toque e vibração), intenção, contador pessoal
- ⬜ Meditação curta dos 20 mistérios com a passagem bíblica
- ⬜ Terço da Misericórdia, Terço de São Miguel
- ⬜ Orações tradicionais em português e latim
- ⬜ Ângelus e Regina Caeli, manhã, noite, refeições, ladainhas

### Leva 6. Devoções ⬜
- ⬜ Novenas com acompanhamento e início automático antes da festa
- ⬜ Consagração a Nossa Senhora em 33 dias
- ⬜ Via-Sacra, Semana Santa e Tríduo guiados
- ⬜ Pequeno Ofício de Nossa Senhora
- ⬜ Desafios por tempo litúrgico e meses temáticos

### Leva 7. Santos e calendário ⬜
- ⬜ História de cada santo (texto próprio) e imagem em domínio público
- ⬜ Busca de santos, santos de devoção, "seu santo"
- ⬜ Tela Calendário: mês, dia, festas, preceitos, jejum e abstinência
- ⬜ Festas da Arquidiocese de Natal

### Leva 8. Reflexões ⬜
- ⬜ Reflexão de todos os domingos e solenidades (ciclos A, B e C)
- ⬜ Reflexão de todos os dias de semana (anos I e II e tempos fortes)
- ⬜ 👤 Revisão das reflexões, a começar pelos domingos

### Leva 9. Confissão e vida espiritual ⬜
- ⬜ Exame de consciência por estado de vida, com o nº do Catecismo
- ⬜ Guia da confissão e guia da missa
- ⬜ Falecidos com lembretes (7º dia, 30 dias, aniversário)
- ⬜ Diário espiritual e propósitos
- ⬜ (Tudo guardado no aparelho; a conta entra na Leva 10)

### Leva 10. Conta e sincronização ⬜
- ⬜ Banco no Supabase com regras de acesso (RLS) e testes das regras
- ⬜ 👤 Colar os blocos SQL no Supabase
- ⬜ Login opcional (Google e e-mail) e apagar conta
- ⬜ Sincronizar marcações, notas, falecidos, diário, progresso
- ⬜ Exame de consciência criptografado com PIN
- ⬜ Política de privacidade, termos de uso, métricas anônimas

### Leva 11. Missas e paróquias ⬜
- ⬜ Perfil oficial da paróquia: endereço, mapa, secretaria, Instagram, site
- ⬜ Horários de missa, confissão e adoração, com exceções
- ⬜ Busca "perto de mim", por cidade e por horário
- ⬜ Sugerir correção, horário ou paróquia; selo "confirmado há N dias"
- ⬜ Painel de revisão do dono e paróquia verificada
- ⬜ "Minha paróquia" na tela Hoje
- ⬜ 👤 Dados iniciais de Natal (parceria com o "missas perto de mim" do RN)

### Leva 12. Terço da Juventude ⬜
- ⬜ Cadastro pela paróquia ou por qualquer grupo
- ⬜ Busca "perto de mim" junto com Missas
- ⬜ Roteiro do encontro: quem conduz, leituras, músicas, intenções, avisos
- ⬜ Terço ao vivo sincronizado (o grupo acompanha pelo celular)
- ⬜ Lembrete do encontro da semana

### Leva 13. Comunidade ⬜
- ⬜ Intenções guiadas com "rezei por você"
- ⬜ Grupos por convite (família, grupo de oração, pastoral)
- ⬜ Campanhas coletivas
- ⬜ Denúncia e moderação

### Leva 14. Música ⬜
- ⬜ 👤 Montar as playlists por tempo e tema com o dono
- ⬜ Tela Músicas e repertório sugerido da missa de domingo

### Leva 15. Acabamento ⬜
- ⬜ Boas-vindas em 3 passos
- ⬜ Lembretes (evangelho, Ângelus, terço, novena, falecidos)
- ⬜ Compartilhar liturgia no WhatsApp e versículo como imagem
- ⬜ Páginas abertas ao Google (cada dia, capítulo, santo, paróquia)
- ⬜ Revisão de acessibilidade e de desempenho em celular simples

### Leva 16. Celular ⬜
- ⬜ Builds Android e iOS, ícones e tela de abertura
- ⬜ Notificações locais, vibração no terço, widget do evangelho
- ⬜ 👤 Teste em aparelho (Android Studio; iPhone precisa de Mac)

### Leva 17. Lançamento ⬜
- ⬜ 👤 Vercel, domínio `appsantinho.com.br`, INPI
- ⬜ 👤 Conta Google Play e 12 testadores por 14 dias
- ⬜ Lançamento em Natal e mensagens de divulgação

## Depois, com apoio
Página "Apoie" (PIX e transparência) · App Store · áudio com IA (evangelho,
reflexão, terço guiado, Bíblia narrada) · terço com voz · licenças (CNBB,
editoras) · associação sem fins lucrativos · plano para paróquias · outras
dioceses.
