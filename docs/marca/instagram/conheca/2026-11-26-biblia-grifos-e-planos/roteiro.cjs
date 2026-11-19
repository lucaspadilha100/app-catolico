module.exports = {
  inicio: '/biblia',
  data: '2026-11-26',
  preparar: async (p) => {
    await p.goto('https://minhaigrejinha.vercel.app/biblia/salmos/1', { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
    await p.evaluate(() => { localStorage.removeItem('santinho-leitura'); localStorage.removeItem('santinho-plano'); });
    await p.goto('https://minhaigrejinha.vercel.app/biblia', { waitUntil: 'networkidle' }); await p.waitForTimeout(1000);
  },
  passos: [
    async (p, h) => { await h.espera(2500); },
    async (p, h) => {
      await h.espera(1200);
      await p.getByRole('link', { name: 'Planos de leitura' }).click();
    },
    async (p, h) => {
      await h.espera(1000);
      await p.getByRole('button', { name: /Os Salmos em 30 dias/ }).click();
      await h.espera(2200); await h.rolar(220);
    },
    async (p, h) => {
      await h.rolar(0); await h.espera(900);
      await p.getByRole('link', { name: 'Ler Salmo 1' }).click();
    },
    async (p, h) => {
      await h.espera(700);
      await p.getByText(/Ele será como a árvore plantada/).first().click(); await h.espera(1800);
      await p.getByRole('button', { name: 'Grifar de verde' }).click();
    },
    async (p, h) => {
      await h.espera(500);
      await p.getByRole('button', { name: /Anotar/ }).click(); await h.espera(500);
      await p.keyboard.type('Ler de novo amanhã cedo.', { delay: 90 });
      await h.espera(500);
      await p.getByRole('button', { name: 'Salvar nota' }).click();
    },
    async (p, h) => {
      await h.espera(300);
      await p.getByRole('button', { name: 'Fechar' }).first().click().catch(() => {}); await h.espera(900);
      await p.getByRole('link', { name: 'Grifos e notas' }).first().click(); await h.espera(1800);
      await p.getByRole('button', { name: 'Verde', exact: true }).click();
    },
    async (p, h) => {
      await h.espera(1500);
      await p.getByRole('button', { name: 'Notas', exact: true }).click(); await h.espera(1800);
      await p.getByRole('button', { name: 'Todos', exact: true }).click();
    },
  ],
};
