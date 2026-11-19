module.exports = {
  inicio: '/mais',
  data: '2026-12-03',
  preparar: async (p) => {
    await p.getByRole('link', { name: /Cursos de formação/ }).click(); await p.waitForTimeout(2000);
    await p.getByRole('link', { name: /Introdução à Bíblia/ }).click(); await p.waitForTimeout(2000);
    await p.goBack(); await p.waitForTimeout(1000); await p.goBack(); await p.waitForTimeout(1000);
    await p.evaluate(() => window.scrollTo(0, 0));
  },
  passos: [
    async (p, h) => { await h.espera(1800); await h.ate(p.getByRole('link', { name: /Cursos de formação/ }), 330); },
    async (p, h) => { await h.espera(1000); await p.getByRole('link', { name: /Cursos de formação/ }).click(); },
    async (p, h) => { await h.espera(1500); await h.rolarMais(650); await h.espera(2600); await h.rolarMais(750); await h.espera(2600); await h.rolarMais(700); },
    async (p, h) => { const c = p.getByRole('link', { name: /Introdução à Bíblia/ }); await h.ate(c, 330); await h.espera(1300); await c.click(); },
    async (p, h) => { await h.espera(1500); await h.rolarMais(90); },
    async (p, h) => { await h.espera(500); await h.rolarMais(480); await h.espera(2200); await h.rolarMais(330); },
    async (p, h) => { const b = p.getByRole('button', { name: 'Concluí esta lição' }); await h.ate(b, 520); await h.espera(2000); await b.click(); },
    async (p, h) => { await h.espera(1200); await h.rolar(0); },
  ],
};
