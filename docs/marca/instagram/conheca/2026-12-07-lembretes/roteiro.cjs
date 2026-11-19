const site = 'https://minhaigrejinha.vercel.app';
const horas = (p) => p.getByLabel('Hora');
module.exports = {
  inicio: '/mais',
  data: '2026-12-07',
  preparar: async (p) => {
    await p.evaluate(() => Object.defineProperty(Notification, 'permission', { get: () => 'default', configurable: true }));
    await p.getByRole('link', { name: /Lembretes/ }).click(); await p.waitForTimeout(2000);
    await p.goBack(); await p.waitForTimeout(1200);
    await p.evaluate(() => window.scrollTo(0, 0));
  },
  passos: [
    async (p, h) => { await h.espera(1800); await h.ate(p.getByRole('link', { name: /Lembretes/ }), 330); },
    async (p, h) => { await h.espera(1000); await p.getByRole('link', { name: /Lembretes/ }).click(); },
    async (p, h) => { await h.espera(1500); await h.rolarMais(150); },
    async (p, h) => {
      await h.espera(700);
      const e = horas(p).nth(0); await e.click({ position: { x: 22, y: 22 } }); await h.espera(500); await p.keyboard.type('0630', { delay: 220 }); await h.espera(900);
      const t = horas(p).nth(1); await t.click({ position: { x: 22, y: 22 } }); await h.espera(500); await p.keyboard.type('1900', { delay: 220 });
      await p.locator('h1').first().click().catch(() => {});
    },
    async (p, h) => { await h.espera(600); await h.ate(p.getByText('Novena', { exact: true }), 330); await h.espera(2500); await h.rolarMais(160); },
    async (p, h) => { await h.espera(700); await p.getByRole('switch', { name: 'Minhas escalas' }).click(); await h.espera(900); await p.getByRole('switch', { name: 'Encontros dos terços que sigo' }).click(); },
    async (p, h) => { await h.espera(400); await h.rolar(0); },
  ],
};
