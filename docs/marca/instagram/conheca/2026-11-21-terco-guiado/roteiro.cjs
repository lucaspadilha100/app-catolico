const vozFalsa = () => {
  const s = window.speechSynthesis; let ate = 0, t = null, atual = null;
  Object.defineProperty(s, 'speaking', { configurable: true, get: () => Date.now() < ate });
  s.speak = (u) => { atual = u; const ms = Math.max(1200, (u.text || '').length * 55); ate = Date.now() + ms; clearTimeout(t); t = setTimeout(() => { ate = 0; u.onend && u.onend(); }, ms); };
  s.cancel = () => { clearTimeout(t); ate = 0; };
};
module.exports = {
  inicio: '/rezar',
  data: '2026-11-21',
  preparar: async (p) => {
    await p.getByRole('link', { name: /^Terço/ }).first().click(); await p.waitForTimeout(2500);
    await p.goBack(); await p.waitForTimeout(1500);
    await p.evaluate(vozFalsa);
  },
  passos: [
    async (p, h) => { await h.espera(2500); },
    async (p, h) => {
      await h.espera(1200);
      await p.getByRole('link', { name: /^Terço/ }).first().click();
      await h.espera(3000);
    },
    async (p, h) => {
      const i = p.getByPlaceholder('Rezo este terço por…');
      await h.ate(i, 420); await h.espera(1000);
      await i.click(); await p.keyboard.type('minha família', { delay: 120 });
      await h.espera(800);
      await p.getByRole('button', { name: 'Começar' }).click();
    },
    async (p, h) => {
      await h.espera(2200);
      const av = () => p.getByRole('button', { name: /^(Avançar|Próxima conta)$/ });
      await av().click(); await h.espera(1800);
      await av().click();
    },
    async (p, h) => {
      const av = () => p.getByRole('button', { name: /^(Avançar|Próxima conta)$/ });
      await h.espera(400); await av().click(); await h.espera(1000);
      await av().click(); await h.espera(1500);
      await av().click();
    },
    async (p, h) => {
      await h.espera(500);
      await p.getByRole('button', { name: 'Contas', exact: true }).click();
      await h.espera(2600);
      await p.mouse.click(195, 520); await h.espera(1300);
      await p.mouse.click(195, 520); await h.espera(1300);
      await p.mouse.click(195, 520);
    },
    async (p, h) => {
      await p.getByText('Sair das contas').click(); await h.espera(600);
      await p.getByRole('button', { name: 'Ver tudo' }).click(); await h.espera(1400);
      await p.getByRole('button', { name: 'Rezar com voz' }).click();
    },
  ],
};
