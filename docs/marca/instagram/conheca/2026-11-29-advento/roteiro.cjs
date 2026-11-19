const SITE = 'https://minhaigrejinha.vercel.app';
module.exports = {
  inicio: '/',
  data: '2026-11-29',
  preparar: async (p) => {
    for (const c of ['/liturgia', '/rezar', '/rezar/desafios', '/rezar/desafios/advento']) {
      await p.goto(SITE + c, { waitUntil: 'networkidle', timeout: 60000 }); await p.waitForTimeout(1500);
    }
    await p.goto(SITE + '/', { waitUntil: 'networkidle', timeout: 60000 });
  },
  passos: [
    async (p, h) => { await h.espera(2000); },
    async (p, h) => {
      await h.espera(1800); await p.getByRole('link', { name: /^Liturgia/ }).first().click(); await h.espera(3500); await h.rolarMais(160);
    },
    async (p, h) => {
      await h.espera(300); await p.getByRole('link', { name: 'Rezar', exact: true }).last().click(); await h.espera(900);
      const t = p.getByRole('link', { name: /^Tempos e meses/ });
      await h.ate(t, 380); await h.espera(1100); await t.click();
    },
    async (p, h) => { await h.espera(1200); await p.getByRole('link', { name: /Advento com Maria/ }).first().click(); await h.espera(1200); },
    async (p, h) => { await h.espera(300); await h.ate(p.getByText(/^1º Domingo do Advento/).first(), 120); await h.espera(1800); await h.rolarMais(320); },
    async (p, h) => { await h.ate(p.getByText(/^Para hoje$/i).first(), 280); },
    async (p, h) => {
      const b = p.getByRole('button', { name: /Rezei hoje/ });
      await h.ate(b, 460); await h.espera(1300); await b.click(); await h.espera(1200);
      await h.rolar(0);
    },
  ],
};
