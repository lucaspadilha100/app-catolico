const ORACAO = 'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno; levai as almas todas para o céu e socorrei principalmente as que mais precisarem.';
module.exports = {
  inicio: '/mais',
  data: '2026-12-04',
  preparar: async (p) => {
    await p.getByRole('link', { name: /Santinhos e convites/ }).click(); await p.waitForTimeout(2000);
    await p.getByText('Trocar').click(); await p.waitForTimeout(2500);
    await p.getByPlaceholder('Buscar santo').fill('Fátima'); await p.waitForTimeout(2000);
    await p.goBack(); await p.waitForTimeout(1200);
    await p.evaluate(() => window.scrollTo(0, 0));
  },
  passos: [
    async (p, h) => { await h.espera(1800); await h.ate(p.getByRole('link', { name: /Santinhos e convites/ }), 330); },
    async (p, h) => { await h.espera(1000); await p.getByRole('link', { name: /Santinhos e convites/ }).click(); },
    async (p, h) => {
      await h.espera(1200);
      for (const n of ['Primeira comunhão', 'Crisma', 'Casamento', 'Santo de devoção']) { await p.getByRole('button', { name: n, exact: true }).click(); await h.espera(900); }
    },
    async (p, h) => {
      await h.espera(700); await p.getByText('Trocar').click(); await h.espera(1500);
      await p.getByPlaceholder('Buscar santo').click(); await p.keyboard.type('Fátima', { delay: 120 }); await h.espera(1200);
      await p.getByRole('button', { name: /^Nossa Senhora de Fátima/ }).first().click();
    },
    async (p, h) => {
      const f = p.getByLabel('Frase'); await h.ate(f, 330); await h.espera(800);
      await f.click(); await p.keyboard.press('Control+A'); await p.keyboard.type(ORACAO, { delay: 20 });
    },
    async (p, h) => { await h.espera(300); await h.ate(p.getByAltText('Prévia'), 90); },
    async (p, h) => { const b = p.getByRole('button', { name: /Compartilhar ou salvar/ }); await h.ate(b, 600); await h.espera(1500); await b.click(); },
    async (p, h) => {
      await h.rolar(0); await h.espera(800);
      await p.getByRole('button', { name: 'Batismo', exact: true }).click(); await h.espera(700);
      await p.getByRole('button', { name: 'Convite', exact: true }).click(); await h.espera(700);
      const n = p.getByLabel('Nome de quem será batizado'); await h.ate(n, 330); await h.espera(400);
      await n.click(); await p.keyboard.press('Control+A'); await p.keyboard.type('Pedro', { delay: 120 });
    },
  ],
};
