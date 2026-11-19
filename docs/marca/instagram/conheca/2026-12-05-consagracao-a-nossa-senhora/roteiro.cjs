const dia = (p, n) => p.getByRole('group', { name: 'Dias' }).getByRole('button').nth(n - 1);
module.exports = {
  inicio: '/rezar',
  data: '2026-12-05',
  preparar: async (p) => {
    await p.getByRole('link', { name: /Consagração a Nossa Senhora/ }).click(); await p.waitForTimeout(2500);
    await p.goBack(); await p.waitForTimeout(1200);
    await p.evaluate(() => window.scrollTo(0, 0));
  },
  passos: [
    async (p, h) => { await h.espera(1800); await h.ate(p.getByRole('link', { name: /Consagração a Nossa Senhora/ }), 420); },
    async (p, h) => { await h.espera(1000); await p.getByRole('link', { name: /Consagração a Nossa Senhora/ }).click(); },
    async (p, h) => { await h.espera(1000); await h.rolarMais(420); await h.espera(1500); await h.rolar(0); await h.espera(1100); await p.getByRole('button', { name: /Começar hoje/ }).click(); },
    async (p, h) => { await h.espera(800); await h.ate(p.getByText('Esvaziar-se do espírito do mundo').first(), 330); },
    async (p, h) => { await h.espera(800); await h.rolarMais(420); await h.espera(2200); await h.rolarMais(480); await h.espera(2000); await h.rolarMais(420); },
    async (p, h) => { const b = p.getByRole('button', { name: /Rezei o/ }); await h.ate(b, 520); await h.espera(1300); await b.click(); },
    async (p, h) => {
      await h.espera(400); await h.rolar(0); await h.espera(1200);
      for (const n of [13, 20, 27]) { await dia(p, n).click(); await h.espera(1700); }
    },
    async (p, h) => { await h.espera(500); await dia(p, 34).click(); await h.espera(1600); await h.rolarMais(260); },
  ],
};
