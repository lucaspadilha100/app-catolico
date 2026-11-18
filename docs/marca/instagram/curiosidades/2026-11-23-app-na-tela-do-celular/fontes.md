# Fontes: Como pôr o app na tela do celular (seg 23/11)

Post de uso do app, sem fato de fé. Conferido no código:
- Cartão "Instale o app" da tela Hoje: `src/components/Instalar.tsx` e `src/lib/instalar.ts`. Três estados capturados de verdade, com o relógio em 23/11 e o agente de usuário de cada celular:
  - Android com o pedido de instalação do Chrome (evento `beforeinstallprompt` simulado na captura): botão "Instalar".
  - Android sem o pedido: "Toque no menu ⋮ e depois em Instalar app ou Adicionar à tela inicial."
  - iPhone no Safari: os três passos (Compartilhar, Adicionar à Tela de Início, Adicionar).
- Dentro do Instagram (navegador embutido) o cartão manda abrir no navegador; no iPhone fora do Safari, manda abrir no Safari e copiar o endereço.
- "No iPhone, os lembretes chegam com o app na Tela de Início": `src/pages/Lembretes.tsx`. Lembretes ficam em Mais > Lembretes; padrões Evangelho 07:00, Ângelus ao meio-dia, Terço 20:00, Falecidos 08:00 (captura de `/lembretes`).
- Endereço: https://minhaigrejinha.vercel.app (`ENDERECO_DO_SITE`, `src/marca.ts`).
- Atenção: As capturas são do app no navegador, não de um celular real: o menu do Chrome e a folha de Compartilhar do Safari não aparecem (o plano pedia capturas no aparelho). Se o dono quiser, troque as lâminas 3 a 5 por capturas do próprio celular.
