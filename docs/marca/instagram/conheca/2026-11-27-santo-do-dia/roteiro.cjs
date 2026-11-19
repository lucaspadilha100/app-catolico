const SITE = 'https://minhaigrejinha.vercel.app';
module.exports = {
  inicio: '/mais',
  data: '2026-11-27',
  preparar: async (p) => {
    for (const c of ['/santos', '/santos/nossa-senhora-das-gracas', '/santos/seu-santo?nome=Rita&nascimento=19%2F03']) {
      await p.goto(SITE + c, { waitUntil: 'networkidle', timeout: 60000 }); await p.waitForTimeout(1500);
    }
    await p.goto(SITE + '/mais', { waitUntil: 'networkidle', timeout: 60000 });
  },
  passos: [
    async (p, h) => { await h.espera(2500); },
    async (p, h) => { await h.espera(900); await p.getByRole('link', { name: 'Santos', exact: true }).click(); },
    async (p, h) => { await h.espera(1200); await h.rolarMais(260); await h.espera(1600); await h.rolarMais(240); },
    async (p, h) => {
      const l = p.getByRole('link', { name: /Nossa Senhora das Graças/ }).first();
      await h.ate(l, 300); await h.espera(1400); await l.click();
    },
    async (p, h) => { await h.espera(600); await h.rolarMais(420); await h.espera(1200); await h.ate(p.getByText(/^Oração a Nossa Senhora das Graças/).first(), 140); },
    async (p, h) => {
      const g = p.getByRole('button', { name: 'Guardar nos meus santos' });
      await h.ate(g, 420); await h.espera(1200); await g.click();
    },
    async (p, h) => {
      await h.espera(300); await p.getByRole('button', { name: 'Voltar' }).first().click(); await h.espera(900);
      const m = p.getByText('Meus santos', { exact: true }).first();
      await h.ate(m, 200); await h.espera(2200);
      await h.ate(p.getByText('Conhecer', { exact: true }).first(), 120);
    },
    async (p, h) => {
      const s = p.getByRole('link', { name: 'Seu santo' });
      await h.ate(s, 300); await h.espera(600); await s.click(); await h.espera(800);
      const i = p.locator('main input');
      await i.nth(0).click(); await p.keyboard.type('Rita', { delay: 150 });
      await h.espera(300); await i.nth(1).click(); await p.keyboard.type('1903', { delay: 180 });
    },
    async (p, h) => {
      await p.keyboard.press('Tab'); await h.espera(1500);
      await h.ate(p.getByText('Do dia em que você nasceu', { exact: true }), 200);
    },
  ],
};
