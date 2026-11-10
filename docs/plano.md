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

### Leva 4. Bíblia 🔨
- ✅ Texto do Figueiredo (edição de 1950), 73 livros, 35.198 versículos,
  estruturado por versículo; 940 de 1.334 capítulos batendo exatamente com a
  Vulgata, o resto listado em `fontes/biblia/pendencias.txt`
- ✅ Ortografia atual automática (nível 1) conferida no dicionário
- ✅ Tela Bíblia: livros, capítulos, leitura, "ir para" (Mc 4, Jo 3,16)
- ✅ Progresso: capítulos lidos, % por livro e da Bíblia, continuar lendo
- ✅ Liturgia do dia com o texto completo das leituras
- ✅ 👤 Regra de fidelidade: quando o Figueiredo se afasta do latim, segue o Figueiredo
- ✅ 👤 Amostra em linguagem atual aprovada (Mc 1 e Sl 22, segunda versão)
- ✅ Revisão em linguagem atual dos quatro Evangelhos (3.777 versículos),
  conferida capítulo a capítulo; dúvidas em `fontes/biblia/revisao/<LIVRO>-notas.md`
- ✅ Revisão em linguagem atual dos 150 Salmos (numeração grega, como nas
  Bíblias católicas do Brasil); dúvidas em `fontes/biblia/revisao/PSA-notas.md`
- ✅ Evangelhos na ordem e divisão de versículos atuais (Mt 5,4-5 e outros 8 casos)
- ✅ Teste de integridade: numeração e toda leitura da liturgia de 2024 a 2035
- ✅ Versículos perdidos na extração dos PDFs recuperados (de 1.245 para 3,
  que a própria edição de 1950 junta ou omite)
- ✅ Revisão em linguagem atual dos 73 livros
- ✅ Conferência de fidelidade de TODOS os versículos com três fontes
  (Vulgata, Douay-Rheims e original hebraico/grego), decidida pelas fontes
  (decisão do dono); registro em `docs/biblia/decisoes.md` e
  `fontes/biblia/revisao/conferencia/`
- ✅ Botão "Avisar erro" no versículo
- ✅ Passada final de nomes próprios: 129 nomes na mesma grafia na Bíblia toda
  (`fontes/biblia/revisao/conferencia/nomes.md`)
- ⬜ 👤 Leitura dos Evangelhos e Salmos revisados (e, se possível, um padre ou
  catequista da paróquia)
- ⬜ Introdução curta dos 73 livros
- ⬜ Busca no texto, marcações e notas, planos de leitura

### Leva 5. Terço e orações 🔨
- ✅ Terço guiado completo: sinal da cruz, oferecimento, Creio, três Ave-Marias,
  mistérios com passagem bíblica e meditação, dezenas, oração de Fátima,
  Salve-Rainha e oração final; modo contas (toque na tela inteira e vibração),
  intenção, contador pessoal e retomar de onde parou (`src/oracao/terco.ts`,
  `components/TercoGuiado.tsx`)
- ✅ Meditação curta dos 20 mistérios com a passagem bíblica (texto da nossa Bíblia)
- ⬜ 👤 Revisão das 20 meditações dos mistérios (`MEDITACOES.revisao` em
  `src/oracao/terco.ts` está "a revisar pelo dono"; mudar para "revisado")
- ✅ Terço da Misericórdia, Terço de São Miguel (o mesmo componente)
- ✅ Orações tradicionais em português e latim, com busca (`src/oracao/oracoes.ts`)
- ✅ Ângelus (vira Regina Caeli no Tempo Pascal), manhã, noite, refeições,
  comunhão espiritual, pelos falecidos e as ladainhas de Nossa Senhora, do
  Sagrado Coração e de São José
- ✅ Teste: português e latim em toda oração, referências dos mistérios,
  contagem de cada terço (53 Ave-Marias no comum) e nenhum travessão
- ⬜ 👤 Leitura das orações em português (forma tradicional de reza no Brasil)
- ⬜ Rosário completo (4 mistérios seguidos)

### Leva 6. Devoções 🔨
- ✅ 18 novenas (6 de Nossa Senhora, 4 do Senhor, 8 de santos, com a Trezena de Santo Antônio), que começam sozinhas na data da festa e marcam "4º dia de 9"
- ✅ Consagração a Nossa Senhora em 33 dias (Montfort), escolhendo a festa e o dia
- ✅ Via-Sacra guiada, com o Stabat Mater
- ✅ Semana Santa dia a dia, com Hora Santa na Quinta-feira
- ✅ Pequeno Ofício de Nossa Senhora, as oito horas, no tempo comum
- ✅ Tempos e meses: Advento com Maria, Quaresma, maio, junho, setembro (Bíblia), outubro e novembro
- ✅ "Em andamento" na tela Hoje e "você rezou N dias nesta semana"
- ✅ Novas orações: Veni Creator, Ave Maris Stella, Magnificat, Te Deum, Stabat Mater, ladainhas do Espírito Santo e do Nome de Jesus
- ✅ Testes: datas de todas as novenas e tempos, toda leitura existe, toda oração ligada existe
- ⬜ 👤 Revisar os textos (`docs/devocoes/a-revisar.md` lista os pontos de cada um)
- ⬜ Pequeno Ofício no Advento e no Natal; Ofício dos Defuntos
- ⬜ Lembrete da novena (entra com as notificações, Leva 15 e 16)

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
