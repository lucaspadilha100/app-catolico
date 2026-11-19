const SITE = 'https://minhaigrejinha.vercel.app';
module.exports = {
  inicio: '/rezar',
  data: '2026-11-29',
  preparar: async (p) => {
    for (const c of ['/rezar/novenas', '/rezar/novenas/imaculada-conceicao', '/rezar/novenas/imaculada-conceicao?dia=2']) {
      await p.goto(SITE + c, { waitUntil: 'networkidle', timeout: 60000 }); await p.waitForTimeout(1500);
    }
    await p.goto(SITE + '/rezar', { waitUntil: 'networkidle', timeout: 60000 });
  },
  passos: [
    async (p, h) => { await h.espera(2000); },
    async (p, h) => {
      await h.ate(p.getByText('Novenas do mês', { exact: true }).first(), 120); await h.espera(2800);
      const l = p.getByRole('link', { name: /^Novenas/ });
      await h.ate(l, 380); await h.espera(1200); await l.click();
    },
    async (p, h) => { await h.espera(1200); await h.rolarMais(360); await h.espera(1800); await h.rolarMais(420); await h.espera(1500); await h.rolar(0); },
    async (p, h) => { await h.espera(900); await p.getByRole('link', { name: /Imaculada Conceição/ }).first().click(); await h.espera(1500); await h.rolarMais(200); },
    async (p, h) => {
      await h.espera(1500);
      await h.ate(p.getByText(/^1º dia: A promessa/).first(), 140); await h.espera(2000); await h.rolarMais(300);
    },
    async (p, h) => {
      const b = p.getByRole('button', { name: /Rezei o 1º dia/ });
      await h.ate(b, 420); await h.espera(1300); await b.click();
    },
    async (p, h) => {
      await h.espera(900); await h.ate(p.getByText(/dias rezados/).first(), 200); await h.espera(1400);
      await p.getByRole('button', { name: '2º dia', exact: true }).click(); await h.espera(1200);
      await h.ate(p.getByText(/^2º dia/).first(), 160);
    },
  ],
};
