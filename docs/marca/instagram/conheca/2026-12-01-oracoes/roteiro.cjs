const SITE = 'https://minhaigrejinha.vercel.app';
module.exports = {
  inicio: '/rezar',
  data: '2026-12-01',
  preparar: async (p) => {
    for (const c of ['/rezar/oracoes', '/rezar/oracoes/salve-rainha', '/rezar/oracoes/categoria/latim', '/rezar/oracoes?q=lembrai', '/rezar/oracoes/lembrai-vos']) {
      await p.goto(SITE + c, { waitUntil: 'networkidle', timeout: 60000 }); await p.waitForTimeout(1500);
    }
    await p.goto(SITE + '/rezar', { waitUntil: 'networkidle', timeout: 60000 });
  },
  passos: [
    async (p, h) => { await h.espera(1200); const l = p.getByRole('link', { name: /^Orações/ }).first(); await h.ate(l, 380); },
    async (p, h) => { await h.espera(900); await p.getByRole('link', { name: /^Orações/ }).first().click(); },
    async (p, h) => { await h.espera(1500); await h.rolarMais(260); await h.espera(2500); await h.rolarMais(240); await h.espera(2500); await h.rolar(0); },
    async (p, h) => {
      const b = p.getByRole('button', { name: 'À Nossa Senhora' });
      await h.ate(b, 260); await h.espera(900); await b.click(); await h.espera(900); await h.rolarMais(120);
    },
    async (p, h) => {
      await h.espera(300); await p.getByRole('link', { name: /^Salve-Rainha/ }).first().click(); await h.espera(2000);
      const l = p.getByRole('button', { name: 'Latim' }); await h.ate(l, 320); await h.espera(900); await l.click();
    },
    async (p, h) => {
      await h.espera(200); await p.goBack(); await h.espera(1000);
      const l = p.getByRole('link', { name: 'Em latim' }); await h.ate(l, 420); await h.espera(900); await l.click(); await h.espera(1500); await h.rolarMais(300);
    },
    async (p, h) => {
      await h.espera(200); await p.goBack(); await h.espera(800); await h.rolar(0); await h.espera(600);
      await p.locator('main input').first().click(); await p.keyboard.type('Lembrai', { delay: 150 });
    },
    async (p, h) => {
      await h.espera(600); await p.getByRole('link', { name: /^Lembrai-vos/ }).first().click(); await h.espera(1800);
      await p.getByRole('button', { name: 'Português' }).click(); await h.espera(1500); await h.rolarMais(200);
    },
  ],
};
