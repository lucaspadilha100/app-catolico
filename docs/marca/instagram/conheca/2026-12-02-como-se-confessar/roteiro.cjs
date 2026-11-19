const SITE = 'https://minhaigrejinha.vercel.app';
const sec = (p, n) => p.locator('main h2').filter({ hasText: new RegExp('^' + n + '\\.') }).first();
module.exports = {
  inicio: '/rezar',
  data: '2026-12-02',
  preparar: async (p) => {
    await p.goto(SITE + '/rezar/confissao', { waitUntil: 'networkidle', timeout: 60000 }); await p.waitForTimeout(1500);
    await p.goto(SITE + '/rezar', { waitUntil: 'networkidle', timeout: 60000 });
  },
  passos: [
    async (p, h) => { await h.espera(1500); await h.ate(p.getByText('Vida cristã', { exact: true }).first(), 360); },
    async (p, h) => { await h.espera(1800); await p.getByRole('link', { name: /^Como se confessar/ }).first().click(); },
    async (p, h) => { await h.espera(2000); await h.rolarMais(300); await h.espera(1800); await h.ate(p.getByText(/^O filho que volta/i).first(), 120); },
    async (p, h) => { await h.ate(sec(p, 2), 110); await h.espera(2200); await h.ate(p.getByRole('link', { name: 'Fazer o exame de consciência' }), 420); },
    async (p, h) => { await h.ate(sec(p, 3), 110); await h.espera(2300); await h.ate(sec(p, 4), 110); },
    async (p, h) => { await h.ate(sec(p, 5), 110); await h.espera(2000); await h.ate(sec(p, 6), 110); await h.espera(2000); await h.ate(p.getByText(/^Ato de contrição$/i).first(), 160); },
    async (p, h) => { await h.ate(sec(p, 8), 110); await h.espera(2600); await h.ate(sec(p, 11), 110); await h.espera(1800); await h.ate(sec(p, 12), 110); await h.espera(1500); await h.ate(sec(p, 13), 110); },
  ],
};
